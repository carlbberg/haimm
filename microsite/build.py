#!/usr/bin/env python3
"""Build the dependency-free microsite from the frozen HAIMM v0.4 release."""
import argparse
import json
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "archive/v0.4"
OUT = ROOT / "_site"


def plain(text):
    return re.sub(r"\*\*|\*|`", "", text).strip()


def model_data():
    overview = (SOURCE / "framework/README.md").read_text()
    stages = []
    for line in overview.splitlines():
        if re.match(r"\| [1-5] \|", line):
            cells = [plain(x) for x in line.strip("|").split("|")]
            if len(cells) == 4:
                stages.append({"name": cells[1], "id": cells[2], "description": cells[3]})
    matrix = []
    for line in (SOURCE / "framework/matrix.md").read_text().splitlines():
        if line.startswith("| ") and not line.startswith("| Dimension"):
            matrix.append([plain(x) for x in line.strip("|").split("|")])
    dimensions = []
    for i, path in enumerate(sorted((SOURCE / "framework/dimensions").glob("*.md"))):
        text = path.read_text()
        name = text.splitlines()[0].removeprefix("# ")
        subtitle = plain(text.splitlines()[2])
        gates_text = text.split("## Gates\n", 1)[1].split("\n## ", 1)[0]
        gates = []
        for block in gates_text.split("\n### ")[1:]:
            criteria = []
            for line in block.splitlines():
                match = re.match(r"- \*\*\[([ASO])\]\*\* (.*)", line)
                if match:
                    criteria.append({"type": match[1], "core": "**(core)**" in match[2],
                                     "text": plain(match[2].replace("**(core)**", ""))})
            gates.append({"name": block.splitlines()[0],
                          "tests": plain(re.search(r"^\*Tests\* (.+)$", block, re.M)[1]),
                          "failure": plain(re.search(r"^\*Failure signal\.\* (.+)$", block, re.M)[1]),
                          "criteria": criteria})
        assert matrix[i][0] == name, (matrix[i][0], name)
        assert len(gates) == 4
        for gate in gates:
            assert len(gate["criteria"]) == 4
            assert sum(c["core"] for c in gate["criteria"]) == 1
            assert any(c["type"] in "AO" for c in gate["criteria"])
        dimensions.append({"name": name, "subtitle": subtitle, "cells": matrix[i][1:],
                           "gates": gates, "source": "sources/" + str(path.relative_to(SOURCE))})
    assert len(stages) == 5 and len(dimensions) == 6
    assert all(len(d["cells"]) == 5 for d in dimensions)
    return {"version": (SOURCE / "VERSION").read_text().strip(), "stages": stages, "dimensions": dimensions}


def build(output=OUT):
    data = model_data()
    output.mkdir(exist_ok=True)
    for path in (ROOT / "microsite/public").rglob("*"):
        if path.is_file():
            target = output / path.relative_to(ROOT / "microsite/public")
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(path, target)
    (output / "model-data.js").write_text("// Generated from archive/v0.4. Do not edit.\nexport const model = " + json.dumps(data, ensure_ascii=False) + ";\n")
    for folder in ("framework", "playbook"):
        shutil.copytree(SOURCE / folder, output / "sources" / folder, dirs_exist_ok=True)
    (output / ".nojekyll").touch()
    print(f"Built HAIMM {data['version']}: 6 dimensions, 30 cells, 24 gates, 96 criteria → {output}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", choices=("_site", "out"), default="_site", help="Static output directory relative to the repository root")
    build(ROOT / parser.parse_args().output)
