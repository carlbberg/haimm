# Working in this repository

HAIMM is a maturity model for human-AI collaboration. This repo is its canonical source. Read `README.md` first for layout and current status.

## Rules that matter

**Gates live in the dimension file they belong to.** Each `framework/dimensions/*.md` holds its dimension's four gates under `## Gates`, and nothing is generated from anywhere else. There is no schema file and no build step: edit the markdown directly. Keep the shape regular, because tooling will be built against it later. Each gate is a `###` heading naming the transition, then `*Tests*`, an optional rationale paragraph, four criteria, and a `*Failure signal.*` line. Criteria carry `**[A]**`, `**[S]**` or `**[O]**` and exactly one is marked `**(core)**`.

**Criteria must be falsifiable.** Every gate criterion asks for something that can be inspected, or something a person does in an observed session. "A shared terminology document exists and its last substantive change is within the quarter" is a criterion. "We maintain shared terminology" is not, because no team can fail it. This is the single most important constraint on new criteria: published criteria get optimised against, and the wording is the only defence.

**Each gate needs at least one [A] or [O] criterion.** A gate passable entirely by self-report will be passed. Nothing enforces this now, so check it by reading whenever a gate changes.

**Don't invent evidence.** Claims about what organisations do, statistics, and citations must be sourced or flagged as unverified. `research/evidence-log.md` tracks verification status for every citation. An unverified citation stays marked as such until checked against the primary source. Vendor marketing is not evidence.

**Dimensions are independent.** A team can sit at different stages across dimensions, and that scatter is the diagnosis, not an inconsistency to reconcile. Do not add cross-dimensional dependencies that override placement. Where one dimension's maturity genuinely bears on another, express it as a criterion inside the affected dimension's own gate.

**Metrics never decide placement.** Gates place a team; metrics say whether it is moving. No metric is an entry condition for a stage, on Campbell's law grounds. If a proposed metric restates a gate criterion, delete the metric. See `framework/metrics.md`.

**Archived versions are frozen.** Nothing under `archive/` is edited after its version is released. Corrections belong to the next version. The one sanctioned exception is recording a rights decision in `archive/v0.1/figures/README.md`, which that file asks for.

## Writing style

Sentence case for headings. No em-dashes. No buzzwords (leverage, unlock, seamlessly). No "why it matters" or "failure mode" as section headers. Minimal formatting. Don't end a section with "By doing X."

Match v0.1's register in `framework/`: cells and stage descriptions are compressed and describe states, roughly eleven to sixteen words for table cells. The playbook can be more direct and instructional.

## Terminology

Five stages: Exploration, Experimentation, Integration, Optimization, Continuous Evolution. Five dimensions: Solution Fit, Knowledge & Context, Human-AI Collaboration, People, Ethics, in that row order.

A **gate** is a transition between two adjacent stages within one dimension. Four gates per dimension, twenty in total. Gates are not between dimensions.

## Before committing

Read back any gate you changed and confirm four criteria, exactly one core, and at least one [A] or [O]. Record anything that changes the model itself in `CHANGELOG.md`.
