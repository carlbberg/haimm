#!/usr/bin/env python3
"""Validate HAIMM gate definitions against the schema in framework/gates/SCHEMA.md.

Usage: python3 tools/validate.py [framework/gates/*.yaml]
Exits non-zero if any file fails. Run before committing gate changes.
"""

import sys
import glob
import os

import yaml

STAGES = [
    "exploration",
    "experimentation",
    "integration",
    "optimization",
    "continuous-evolution",
]
EVIDENCE = {"A", "S", "O"}


def validate(path):
    errors = []
    warnings = []

    def err(msg):
        errors.append(msg)

    def warn(msg):
        warnings.append(msg)

    with open(path) as fh:
        doc = yaml.safe_load(fh)

    if not isinstance(doc, dict):
        return ["top level is not a mapping"], []

    dim = doc.get("dimension") or {}
    for field in ("id", "name", "subtitle", "order"):
        if not dim.get(field):
            err(f"dimension.{field} is missing")

    thr = doc.get("threshold") or {}
    pass_n, of_n = thr.get("pass"), thr.get("of")
    if not isinstance(pass_n, int) or not isinstance(of_n, int):
        err("threshold.pass and threshold.of must both be integers")
    elif not 0 < pass_n <= of_n:
        err(f"threshold {pass_n} of {of_n} is not satisfiable")

    gates = doc.get("gates") or []
    if not gates:
        warn("no gates defined (stub file)")

    expected = list(zip(STAGES, STAGES[1:]))
    seen_ids = set()

    for i, gate in enumerate(gates):
        gid = gate.get("id") or f"<gate {i}>"
        if gid in seen_ids:
            err(f"{gid}: duplicate gate id")
        seen_ids.add(gid)

        for field in ("tests", "failure_signal"):
            if not gate.get(field):
                err(f"{gid}: {field} is missing")

        frm, to = gate.get("from"), gate.get("to")
        if (frm, to) not in expected:
            err(f"{gid}: '{frm}' to '{to}' is not an adjacent stage transition")
        elif i < len(expected) and (frm, to) != expected[i]:
            warn(f"{gid}: transitions are out of stage order")

        criteria = gate.get("criteria") or []
        if of_n and len(criteria) != of_n:
            err(f"{gid}: has {len(criteria)} criteria, threshold expects {of_n}")

        sources = []
        cores = []
        for crit in criteria:
            cid = crit.get("id") or f"{gid}/<unnamed>"
            if not crit.get("text"):
                err(f"{cid}: text is missing")
            ev = crit.get("evidence")
            if ev not in EVIDENCE:
                err(f"{cid}: evidence '{ev}' is not one of {sorted(EVIDENCE)}")
            sources.append(ev)
            if crit.get("core"):
                cores.append(cid)

        if not any(s in ("A", "O") for s in sources):
            err(
                f"{gid}: every gate needs at least one artifact or observation "
                "criterion, or it can be passed entirely by self-report"
            )

        if thr.get("core_required"):
            if len(cores) != 1:
                err(f"{gid}: core_required is set, so exactly one criterion must be core (found {len(cores)})")
        elif len(cores) > 1:
            err(f"{gid}: more than one criterion marked core")

    return errors, warnings


def main(argv):
    paths = argv[1:] or sorted(glob.glob("framework/gates/*.yaml"))
    if not paths:
        print("no gate files found", file=sys.stderr)
        return 1

    failed = False
    for path in paths:
        errors, warnings = validate(path)
        name = os.path.basename(path)
        for w in warnings:
            print(f"  warn  {name}: {w}")
        for e in errors:
            print(f"  FAIL  {name}: {e}")
        if errors:
            failed = True
        else:
            print(f"  ok    {name}")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
