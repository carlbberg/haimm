#!/usr/bin/env python3
"""Generate HAIMM markdown instruments from framework/gates/*.yaml.

Usage: python3 tools/generate.py

Writes, for each dimension with gates defined:
  framework/gates/generated/<id>-gates.md  reference, linked from the dimension doc
  playbook/instruments/checklist-<id>.md   assessor checklist, all evidence sources
  playbook/instruments/survey-<id>.md      self-report items only

Every generated file carries a do-not-edit banner. Edit the YAML instead.
"""

import glob
import os
import textwrap

import yaml

STAGE_NAMES = {
    "exploration": "Exploration",
    "experimentation": "Experimentation",
    "integration": "Integration",
    "optimization": "Optimization",
    "continuous-evolution": "Continuous Evolution",
}

EVIDENCE_NAMES = {
    "A": "artifact inspection",
    "S": "survey or questionnaire",
    "O": "observation or interview",
}

BANNER = (
    "<!-- GENERATED FILE. Do not edit by hand.\n"
    "     Source: {src}\n"
    "     Regenerate: python3 tools/generate.py -->\n"
)


def flow(text):
    return " ".join((text or "").split())


def gate_title(gate):
    return f"{STAGE_NAMES[gate['from']]} to {STAGE_NAMES[gate['to']]}"


def render_gates_doc(doc, src):
    dim = doc["dimension"]
    thr = doc["threshold"]
    out = [BANNER.format(src=src)]
    out.append(f"# {dim['name']}: gates\n")
    out.append(
        f"Pass a gate by meeting **{thr['pass']} of {thr['of']}** criteria."
        + (
            " The criterion marked *core* cannot be the one skipped.\n"
            if thr.get("core_required")
            else "\n"
        )
    )
    out.append(
        "Evidence sources: **[A]** artifact inspection, **[S]** survey or "
        "questionnaire, **[O]** observation or interview.\n"
    )

    for gate in doc.get("gates", []):
        out.append(f"## {gate_title(gate)}\n")
        out.append(f"*Tests* {flow(gate['tests'])}\n")
        if gate.get("rationale"):
            out.append(f"{flow(gate['rationale'])}\n")
        for crit in gate["criteria"]:
            mark = " **(core)**" if crit.get("core") else ""
            out.append(f"- **[{crit['evidence']}]**{mark} {flow(crit['text'])}")
        out.append("")
        out.append(f"*Failure signal.* {flow(gate['failure_signal'])}\n")

    return "\n".join(out)


def render_checklist(doc, src):
    dim = doc["dimension"]
    thr = doc["threshold"]
    out = [BANNER.format(src=src)]
    out.append(f"# Assessment checklist: {dim['name']}\n")
    out.append(f"Team: ______________________   Date: ____________   Assessor: ____________\n")
    out.append(
        f"A team sits at the highest stage whose entry gate it has passed. "
        f"Pass = **{thr['pass']} of {thr['of']}** criteria met"
        + (", and the core criterion must be one of them.\n" if thr.get("core_required") else ".\n")
    )
    out.append("Record the evidence, not just the verdict. A tick with no evidence is a self-report.\n")

    for gate in doc.get("gates", []):
        out.append(f"## Gate: {gate_title(gate)}\n")
        for crit in gate["criteria"]:
            mark = " *(core)*" if crit.get("core") else ""
            out.append(f"- [ ] **[{crit['evidence']}]**{mark} {flow(crit['text'])}")
            out.append("      Evidence: ______________________________________________")
        out.append("")
        out.append(f"  Met ___ of {thr['of']}.  Gate passed? ___")
        out.append("")
        out.append(f"  > Watch for: {flow(gate['failure_signal'])}\n")

    out.append("## Placement\n")
    out.append(f"Highest gate passed: ____________   **{dim['name']} stage: ____________**\n")
    return "\n".join(out)


def render_survey(doc, src):
    dim = doc["dimension"]
    out = [BANNER.format(src=src)]
    out.append(f"# Self-report items: {dim['name']}\n")
    out.append(
        "These are the **[S]** criteria only. They are the weakest evidence in the "
        "instrument and will overrate maturity on their own. Use them to scope where to "
        "look, then confirm with artifact inspection and observation.\n"
    )
    n = 0
    for gate in doc.get("gates", []):
        items = [c for c in gate["criteria"] if c["evidence"] == "S"]
        if not items:
            continue
        out.append(f"## {gate_title(gate)}\n")
        for crit in items:
            n += 1
            out.append(f"{n}. {flow(crit['text'])}")
            out.append("   - [ ] Yes, and we can point to it   - [ ] Partly   - [ ] No   - [ ] Don't know")
        out.append("")
    if n == 0:
        out.append("_No self-report criteria in this dimension._\n")
    return "\n".join(out)


def write(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as fh:
        fh.write(content.rstrip() + "\n")
    print(f"  wrote {path}")


def main():
    for src in sorted(glob.glob("framework/gates/*.yaml")):
        with open(src) as fh:
            doc = yaml.safe_load(fh)
        if not doc or not doc.get("gates"):
            print(f"  skip  {src} (no gates yet)")
            continue
        did = doc["dimension"]["id"]
        write(f"framework/gates/generated/{did}-gates.md", render_gates_doc(doc, src))
        write(f"playbook/instruments/checklist-{did}.md", render_checklist(doc, src))
        write(f"playbook/instruments/survey-{did}.md", render_survey(doc, src))


if __name__ == "__main__":
    main()
