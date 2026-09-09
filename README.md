# HAIMM: Human-AI Maturity Model

A human-centric framework for AI adoption, focused on collaboration, shared understanding, culture and ethics rather than technological readiness. Complementary to enterprise AI maturity models (Gartner, Forrester, Deloitte, IBM's AI Ladder, Microsoft's Responsible AI Maturity Model) rather than a replacement for them.

**The current release is v0.4, from 4 September 2026,** frozen in `archive/v0.4/`. The working tree matches it until work on v0.5 begins. Earlier releases are in `archive/` as well: v0.3 and v0.2 as repositories, and v0.1 as a published article. If you want to know what changed between any two of them, `CHANGELOG.md` is the place to look.

This repository is the canonical source, and any article is a rendering of it. We inverted the usual order deliberately. A single long document makes revision expensive, and it makes changing one dimension mean republishing everything around it.

## What the model is

There are two axes: five stages and six dimensions. Gates hold the criteria for crossing between adjacent stages within a dimension, twenty-four of them in total. Metrics track whether a team is moving. They are barred from deciding where it sits.

| Part | State |
|---|---|
| Five stages | One file each, with the reading of each stage across all six dimensions |
| Six dimensions | One file each, holding that dimension's lenses, patterns, progression and gates |
| Matrix | All six rows populated |
| Gates | Twenty-four, four per dimension. Untested against a real assessment |
| Metrics | A tracking layer, separated from placement |
| Playbook | Assessment sequence and what to do with a result |
| Citations | Twenty-two verified against publisher records. One group carried as positioning |

Two things are missing, and it is better to say so here than let you find out halfway through. There is no field data, because nobody has run the model against a real team, and there is no facilitation guide. Both gaps also appear in the places where they would actually bite.

Workflow is the newest dimension and the one to be most sceptical of. It went in on reasoning rather than evidence, ahead of the first assessment, and `research/open-questions.md` records the three findings that would take it back out again.

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

For an educational website with an interactive grid and a short team self-assessment, see [`microsite/`](microsite/README.md). It builds from the frozen v0.4 release and includes a GitHub Pages publishing workflow.

## Editing

Everything here is hand-edited markdown. There is no separate source format, no schema and no build step, so a single dimension file gives you that dimension, its progression through the stages, and every criterion a team gets assessed against on it.

The files keep a regular shape on purpose, so somebody can build assessment tooling against them later without a schema sitting in between. Those conventions live in `AGENTS.md`, the one place they are written down.

## Licence

MIT. See `LICENSE`.

Two figures in `archive/v0.1/figures/` are third-party and fall outside it. They appear with permission, nothing in `framework/` uses them, and they stay outside the MIT grant. The details are in `archive/v0.1/figures/README.md`.
