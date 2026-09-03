# HAIMM: Human-AI Maturity Model

A human-centric framework for AI adoption, focused on collaboration, shared understanding, culture and ethics rather than technological readiness. Complementary to enterprise AI maturity models (Gartner, Forrester, Deloitte, IBM's AI Ladder, Microsoft's Responsible AI Maturity Model) rather than a replacement for them.

**In development toward v0.3.** The last release, v0.2, is frozen in `archive/v0.2/`; v0.1 was published as an article and is in `archive/v0.1/`. What the working tree has that v0.2 does not is in `CHANGELOG.md` under Unreleased.

This repository is the canonical source and any article is a rendering of it. That inversion is deliberate: a single long document makes revision expensive and makes it hard to change one dimension without republishing everything.

## What the model is

Five stages, five dimensions, twenty gates, and a metrics layer that is barred from deciding placement.

| Part | State |
|---|---|
| Five stages | One file each, with the reading of each stage across all five dimensions |
| Five dimensions | One file each, holding that dimension's lenses, patterns, progression and gates |
| Matrix | All five rows populated |
| Gates | Twenty, four per dimension. Untested against a real assessment |
| Metrics | A tracking layer, separated from placement |
| Playbook | Assessment sequence and what to do with a result |
| Citations | Sixteen verified against publisher records |

The two things it does not have: any field data, and a facilitation guide. Both are stated where they matter rather than implied away.

## Layout

```
framework/     the model itself
  00-overview.md, matrix.md, metrics.md, references.md
  stages/      one file per stage
  dimensions/  one file per dimension, each holding its own four gates
playbook/      how to run an assessment and what to do with the result
research/      evidence log, open questions, drafts
archive/       released versions, frozen
prompts/       project setup prompt for Claude
```

Start at `framework/00-overview.md`.

## Working with gates

A dimension's four gates sit inside its own file under `framework/dimensions/`. There is no separate source format and no build step: the markdown is the model. Read one file and you have the dimension, its stage progression, its matrix row and everything a team is assessed against.

The shape is regular on purpose, so that assessment tooling can be built against it later without a schema in between. Each gate is a `###` heading naming the transition, then what it tests, four criteria tagged `[A]`, `[S]` or `[O]` with exactly one marked core, and the failure signal for a team that believes it has passed. Three of four criteria pass a gate, and the core one cannot be the one skipped.

Four rules hold the gates together, and nothing enforces them automatically. Four criteria per gate. Transitions between adjacent stages only. Exactly one core criterion. At least one criterion per gate that cannot be satisfied by self-report, because a gate passable by self-report will be passed.

## Licence

MIT. See `LICENSE`.

Two figures in `archive/v0.1/figures/` are third-party and are not covered by it. They are reproduced with permission, are not used in `framework/`, and stay outside the MIT grant. See `archive/v0.1/figures/README.md`.
