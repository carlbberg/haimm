# HAIMM: Human-AI Maturity Model

A human-centric framework for AI adoption, focused on collaboration, shared understanding, culture and ethics rather than technological readiness. Complementary to enterprise AI maturity models (Gartner, Forrester, Deloitte, IBM's AI Ladder, Microsoft's Responsible AI Maturity Model) rather than a replacement for them.

**Current version: v0.2 (in progress).** v0.1 was published as an article; see `archive/v0.1/`.

This repository is the canonical source. The article is a rendering of it. That inversion is deliberate: v0.1 lived in one long document, which made revision expensive and made it hard to change one dimension without republishing everything.

## Status

| Part | State |
|---|---|
| Five stages | Stable since v0.1 |
| Solution Fit, Human-AI Collaboration, People, Ethics | v0.1 text moved into `framework/dimensions/`, not yet revised for v0.2 |
| Knowledge & Context (new in v0.2) | Draft, argument and structure complete |
| Matrix | All five rows populated; four are v0.1 text, unrevised |
| Gates: Knowledge & Context | Draft, four gates with criteria |
| Gates: other four dimensions | Not started, sixteen outstanding |
| Metrics | v0.1 metrics not yet migrated; relationship to gates undecided |

## What changed in v0.2

1. **A fifth dimension, Knowledge & Context.** The shared understanding that work depends on, both between people and AI and among people themselves. See `framework/dimensions/02-knowledge-context.md`.
2. **Gates.** Each dimension gets four gates, one per stage transition, with criteria and evidence sources. Gates turn HAIMM from a descriptive framework into something a team can be assessed against. See `framework/gates/`.

The second change is the larger one. A framework people read and an instrument people run against their team are judged differently, and v0.2 becomes both.

## Layout

```
framework/     the model itself, one file per dimension
  gates/       gate definitions as YAML, the source of truth
    generated/ markdown rendered from the YAML, do not edit
playbook/      how to run an assessment
  instruments/ checklists and survey forms, generated
research/      evidence base, source notes, open questions, drafts
tools/         validate.py and generate.py
archive/       v0.1 as published
prompts/       project setup prompt for Claude
```

## Working with gates

Gate definitions live in `framework/gates/*.yaml` and nowhere else. Checklists, survey forms and the markdown reference are generated from them.

```bash
pip install pyyaml
python3 tools/validate.py     # schema and consistency checks
python3 tools/generate.py     # rebuild everything under generated/ and instruments/
```

Never edit a file with a GENERATED banner. Change the YAML and regenerate. `validate.py` enforces the rules that matter: four criteria per gate, adjacent stage transitions, exactly one core criterion, and at least one criterion per gate that cannot be satisfied by self-report.

## Licence

MIT. See `LICENSE`.
