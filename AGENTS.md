# Working in this repository

HAIMM is a maturity model for human-AI collaboration. It has two axes: five stages a team moves through, and five dimensions it is read across. A gate is the transition between two adjacent stages within one dimension, so the twenty gates fall out of the axes rather than standing beside them. Metrics are a separate layer that tracks whether a team is moving and never decides where it sits.

This repo is the canonical source and any article is a rendering of it. Read `README.md` for status and `framework/README.md` for the model.

Everything here is hand-edited markdown. There is no schema, no generated output and no build step, so a second copy of a fact is a second thing to forget to update.

## Layout

```
framework/     the model: README.md, matrix.md, metrics.md, references.md,
               stages/ (one file per stage), dimensions/ (one file per dimension,
               each holding that dimension's four gates)
playbook/      how to run an assessment and what to do with the result
research/      evidence log, open questions, drafts, source notes
archive/       released versions, frozen
```

## Rules that matter

**Every fact has one home.** Matrix cells live in `framework/matrix.md`. Gate criteria live in the dimension file that owns the gate. Stage files describe stages and link out rather than restating a matrix column or a gate's criteria.

**Dimensions are independent.** A team can sit at different stages across dimensions, and that scatter is the diagnosis, not an inconsistency to reconcile. Where one dimension's maturity genuinely bears on another, express it as a criterion inside the affected dimension's own gate.

**Metrics never decide placement.** Gates place a team; metrics say whether it is moving. No metric is an entry condition for a stage, on Campbell's law grounds. If a proposed metric restates a gate criterion, delete the metric. See `framework/metrics.md`.

**Don't invent evidence.** Claims about what organisations do, statistics and citations must be sourced or flagged as unverified. `research/evidence-log.md` tracks verification status for every citation, and an unverified one stays marked as such until checked against the primary source. Vendor marketing is not evidence.

**The working tree is the next version, not the last one.** `VERSION` names what is being worked on, with a `-dev` suffix until release. Anything that changes the model goes into `CHANGELOG.md` under Unreleased, and that section is renamed and dated when a version is cut.

**Archived versions are frozen.** Nothing under `archive/` is edited after its version is released, and corrections belong to the next version. The one sanctioned exception is recording a rights decision in `archive/v0.1/figures/README.md`, which that file asks for.

## Gates

A gate is a transition between two adjacent stages within one dimension. Four gates per dimension, twenty in total. Gates are never between dimensions.

Each dimension file holds its own gates under `## Gates`. A gate is a `###` heading naming the transition, then `*Tests*`, an optional rationale paragraph, four criteria, and a `*Failure signal.*` line. Criteria carry `**[A]**`, `**[S]**` or `**[O]**`, and exactly one is marked `**(core)**`. Keep the shape regular, because tooling will be built against it later.

**Criteria must be falsifiable.** Every criterion asks for something that can be inspected, or something a person does in an observed session. "A shared terminology document exists and its last substantive change is within the quarter" is a criterion. "We maintain shared terminology" is not, because no team can fail it. Published criteria get optimised against, and the wording is the only defence.

**Each gate needs at least one [A] or [O] criterion,** because a gate passable entirely by self-report will be passed. Nothing enforces this, so check it by reading whenever a gate changes.

## Writing style

Sentence case for headings. No em-dashes. No buzzwords (leverage, unlock, seamlessly). No "why it matters" or "failure mode" as section headers. Minimal formatting. Don't end a section with "By doing X."

Match the register in `framework/`: cells and stage descriptions are compressed and describe states, roughly eleven to sixteen words for table cells. The playbook can be more direct and instructional.

## Terminology

Five stages: Exploration, Experimentation, Integration, Optimization, Continuous Evolution. Five dimensions: Solution Fit, Knowledge & Context, Human-AI Collaboration, People, Ethics, in that row order.

## Before committing

Read back any gate you changed and confirm four criteria, exactly one core, and at least one [A] or [O]. Record anything that changes the model itself in `CHANGELOG.md`.
