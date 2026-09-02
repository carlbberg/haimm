# Working in this repository

HAIMM is a maturity model for human-AI collaboration. This repo is its canonical source. Read `README.md` first for layout and current status.

## Rules that matter

**Gates live in YAML, nowhere else.** `framework/gates/*.yaml` is the source of truth. Anything under `framework/gates/generated/` or `playbook/instruments/` carries a GENERATED banner and is overwritten. If asked to change a gate or a criterion, edit the YAML, then run `python3 tools/validate.py && python3 tools/generate.py`. Never hand-edit a generated file, and never regenerate without validating first.

**Criteria must be falsifiable.** Every gate criterion asks for something that can be inspected, or something a person does in an observed session. "A shared terminology document exists and its last substantive change is within the quarter" is a criterion. "We maintain shared terminology" is not, because no team can fail it. This is the single most important constraint on new criteria: published criteria get optimised against, and the wording is the only defence.

**Each gate needs at least one [A] or [O] criterion.** A gate passable entirely by self-report will be passed. `validate.py` enforces this.

**Don't invent evidence.** Claims about what organisations do, statistics, and citations must be sourced or flagged as unverified. `research/evidence-log.md` tracks verification status for every citation. An unverified citation stays marked as such until checked against the primary source. Vendor marketing is not evidence.

**Dimensions are independent.** A team can sit at different stages across dimensions, and that scatter is the diagnosis, not an inconsistency to reconcile. Do not add cross-dimensional dependencies that override placement. Where one dimension's maturity genuinely bears on another, express it as a criterion inside the affected dimension's own gate.

## Writing style

Sentence case for headings. No em-dashes. No buzzwords (leverage, unlock, seamlessly). No "why it matters" or "failure mode" as section headers. Minimal formatting. Don't end a section with "By doing X."

Match v0.1's register in `framework/`: cells and stage descriptions are compressed and describe states, roughly eleven to sixteen words for table cells. The playbook can be more direct and instructional.

## Terminology

Five stages: Exploration, Experimentation, Integration, Optimization, Continuous Evolution. Five dimensions: Solution Fit, Knowledge & Context, Human-AI Collaboration, People, Ethics, in that row order.

A **gate** is a transition between two adjacent stages within one dimension. Four gates per dimension, twenty in total. Gates are not between dimensions.

## Before committing

```bash
python3 tools/validate.py && python3 tools/generate.py
```

Record anything that changes the model itself in `CHANGELOG.md`.
