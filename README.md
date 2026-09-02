# HAIMM: Human-AI Maturity Model

A human-centric framework for AI adoption, focused on collaboration, shared
understanding, culture and ethics rather than technological readiness.
Complementary to enterprise AI maturity models (Gartner, Forrester, Deloitte,
IBM's AI Ladder, Microsoft's Responsible AI Maturity Model) rather than a
replacement for them.

Author: Carlos Rosemberg

This repository is the canonical source. The published article is a rendering
of it. That inversion is deliberate: v0.1 lived in one long document, which
made revision expensive and made it hard to change one dimension without
republishing everything.

## Versions

| Version | State | Where |
|---|---|---|
| v0.1 | Released 24 December 2024, frozen | [`versions/v0.1/`](versions/v0.1/) |
| v0.2 | In progress, not yet in this repository | repository root, once it lands |

Released versions live in [`versions/`](versions/), one folder each, frozen at
release and never edited afterwards. The version being worked on lives at the
root, and is snapshotted into `versions/` when it ships.

## Layout

```
README.md      this file
versions/      released versions, frozen, one folder each
  v0.1/        the published article, its figures, and its provenance
```

Once v0.2 lands, the root also holds the working model and the files that
describe the project rather than any one version:

```
framework/     the model, one file per dimension
  gates/       gate definitions as YAML, the source of truth
playbook/      how to run an assessment
  instruments/ checklists and survey forms, generated from the gate YAML
research/      evidence base, source notes, open questions, drafts
tools/         validate.py and generate.py
```

Gates sit under `framework/` because a gate is what must be true for a team to
be at a stage, which is part of the model rather than assessment logistics. The
instruments in `playbook/` are generated from them, and are one of several
possible ways to carry the same criteria to a team. Gate definitions live in
exactly one place; everything derived from them is generated and carries a
banner saying so.

The evidence log, open questions and changelog are also at root. There is one
of each and they span all versions.

## What HAIMM is

Five stages, describing how a team or organization progresses over time:
Exploration, Experimentation, Integration, Optimization, Continuous Evolution.

Dimensions, the building blocks that keep adoption human-centric. v0.1 has four:
Solution Fit, Human-AI Collaboration, People, Ethics. v0.2 adds a fifth,
Knowledge & Context, covering the shared understanding work depends on, both
between people and AI and among people themselves.

Dimensions are independent. A team scattered across several stages is the
diagnosis, not an error.

v0.1 is descriptive: it tells a team what a stage looks like but gives them no
way to fail a check, so placement rests on self-assessment. v0.2's second change
addresses that with gates, four per dimension, one per stage transition, with
criteria checkable against artifacts, observation or survey. A framework people
read and an instrument people run against their team are judged differently, and
v0.2 becomes both.

## Licence

Not yet decided. The repository is private while v0.2 takes shape. Add a
`LICENSE` before making it public. CC BY 4.0 and CC BY-SA 4.0 are the
candidates, and the choice determines whether a consultancy can absorb the model
into closed material.

Two of the four v0.1 figures are third-party and their rights status is
unresolved. See [`versions/v0.1/figures/README.md`](versions/v0.1/figures/README.md).
That has to be settled before publication regardless of which licence is chosen.
