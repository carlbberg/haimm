# HAIMM: Human-AI Maturity Model

A human-centric framework for AI adoption, focused on collaboration, shared understanding, culture and ethics rather than technological readiness. Complementary to enterprise AI maturity models (Gartner, Forrester, Deloitte, IBM's AI Ladder, Microsoft's Responsible AI Maturity Model) rather than a replacement for them.

**v0.3, released 3 September 2026.** It is frozen in `archive/v0.3/`, and the working tree matches it until work on v0.4 starts. Earlier releases are in `archive/`: v0.2 as a repository, v0.1 as a published article. What changed in each version is in `CHANGELOG.md`.

This repository is the canonical source and any article is a rendering of it. That inversion is deliberate: a single long document makes revision expensive and makes it hard to change one dimension without republishing everything.

## What the model is

Two axes: five stages and five dimensions. Gates are the criteria for crossing between adjacent stages within a dimension, twenty in total. Metrics track movement and are barred from deciding placement.

| Part | State |
|---|---|
| Five stages | One file each, with the reading of each stage across all five dimensions |
| Five dimensions | One file each, holding that dimension's lenses, patterns, progression and gates |
| Matrix | All five rows populated |
| Gates | Twenty, four per dimension. Untested against a real assessment |
| Metrics | A tracking layer, separated from placement |
| Playbook | Assessment sequence and what to do with a result |
| Citations | Twenty-one verified against publisher records. One group carried as positioning |

The two things it does not have: any field data, and a facilitation guide. Both are stated where they matter rather than implied away.

## Layout

```
framework/     the model itself
  README.md, matrix.md, metrics.md, references.md
  stages/      one file per stage
  dimensions/  one file per dimension, each holding its own four gates
playbook/      how to run an assessment and what to do with the result
research/      evidence log, open questions, drafts
visualization/ a single-file interactive rendering of the model
archive/       released versions, frozen
```

Start at `framework/README.md`.

## Editing

Everything here is hand-edited markdown. There is no separate source format, no schema and no build step, so one dimension file gives you that dimension, its stage progression and everything a team is assessed against on it.

The shape of the files is regular on purpose, so that assessment tooling can be built against it later without a schema in between. `AGENTS.md` holds those conventions and is the one place they are written down.

## Licence

MIT. See `LICENSE`.

Two figures in `archive/v0.1/figures/` are third-party and are not covered by it. They are reproduced with permission, are not used in `framework/`, and stay outside the MIT grant. See `archive/v0.1/figures/README.md`.
