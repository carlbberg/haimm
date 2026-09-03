# HAIMM: Human-AI Maturity Model

A human-centric framework for AI adoption, focused on collaboration, shared understanding, culture and ethics rather than technological readiness. Complementary to enterprise AI maturity models (Gartner, Forrester, Deloitte, IBM's AI Ladder, Microsoft's Responsible AI Maturity Model) rather than a replacement for them.

**Current version: v0.2.** v0.1 was published as an article; see `archive/v0.1/`.

This repository is the canonical source. The article is a rendering of it. That inversion is deliberate: v0.1 lived in one long document, which made revision expensive and made it hard to change one dimension without republishing everything.

## What v0.2 is

Five stages, five dimensions, twenty gates, and a metrics layer that is barred from deciding placement.

| Part | State |
|---|---|
| Five stages | Stable since v0.1 |
| Five dimensions | All five written for v0.2. Knowledge & Context is new; the other four were revised, not moved |
| Matrix | All five rows populated |
| Gates | All twenty published, four per dimension. Untested against a real assessment |
| Metrics | Migrated from v0.1 as a tracking layer, separated from placement |
| Playbook | Assessment sequence and what to do with a result |
| Citations | Sixteen verified against publisher records, three v0.1 misattributions corrected |

The two things v0.2 does not have: any field data, and a facilitation guide. Both are stated where they matter rather than implied away.

## What changed from v0.1

1. **A fifth dimension, Knowledge & Context.** The shared understanding that work depends on, both between people and AI and among people themselves.
2. **Gates.** Four per dimension, one per stage transition, with criteria tagged by evidence source and a failure signal each. Gates turn HAIMM from a descriptive framework into something a team can be assessed against.
3. **The other four dimensions rewritten.** Each now names what it is not, the lenses it borrows, and the patterns it detects, in the same shape as the new one.
4. **Three corrections.** The ten-level automation scale is Sheridan and Verplank (1978), not Parasuraman et al. (2000). Nielsen's four metaphors are intern, coworker, teacher and coach. Tuckman's fifth stage is adjourning, added in 1977, and it does not map onto Continuous Evolution. Each is named in the text rather than quietly fixed.
5. **Metrics separated from placement.** No metric is ever an entry condition for a stage.

The second change is the largest. A framework people read and an instrument people run against their team are judged differently, and v0.2 is both.

## Layout

```
framework/     the model itself
  00-overview.md, stages.md, matrix.md, metrics.md, references.md
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

Two figures in `archive/v0.1/figures/` are third-party and are not covered by it. They are not used in `framework/`, and they have to be resolved before this repository is made public. See `archive/v0.1/figures/README.md`.
