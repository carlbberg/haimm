# HAIMM overview

Four elements.

**Stages**, how teams and organisations progress over time. Five, each with its own file under `stages/`.

**Dimensions**, the building blocks that keep the model human-centric. Five, each with its own file under `dimensions/`. Each evolves through every stage, with its own challenges at each.

**Gates**, the criteria for moving between adjacent stages within a dimension. Four per dimension, twenty in total, each written into its own dimension's file under `dimensions/`.

**Metrics**, a tracking layer that never decides placement. See `metrics.md`.

## Stages

Presented sequentially, but iterative in practice: teams revisit earlier stages as tools, people and needs change.

| # | Stage | id | What characterises it |
|---|---|---|---|
| 1 | Exploration | `exploration` | Identifying opportunities, understanding user needs and concerns, and setting initial guardrails. |
| 2 | Experimentation | `experimentation` | Piloting AI tools at small scale to validate relevance and effectiveness. |
| 3 | Integration | `integration` | Embedding AI into workflows and establishing working norms between teams and AI tools. |
| 4 | Optimization | `optimization` | Scaling what worked, focused on measurable outcomes: productivity, quality, learning. |
| 5 | Continuous Evolution | `continuous-evolution` | Ongoing adaptation as organisational needs and technologies change. |

The ids are the stable machine-readable form of the stage names, for anything built on top of the model.

The five-stage shape is a beginning, a middle and an end, with a preceding and a following stage. That is the pattern most transformation frameworks use and the one people navigating a change already recognise. The claim behind it is familiarity, not evidence, and it is worth holding as such.

## Dimensions

| Order | Dimension | Subtitle |
|---|---|---|
| 1 | Solution Fit | Matching AI capabilities to real user needs |
| 2 | Knowledge & Context | Making shared understanding explicit and current |
| 3 | Human-AI Collaboration | Evolving teamwork with AI |
| 4 | People | Supporting cultural and role shifts |
| 5 | Ethics | Safeguarding responsible AI practices |

Knowledge & Context sits second, immediately above Human-AI Collaboration, so that a gap between the two is visible in the assessment view.

## Dimensions are independent

A team can sit at different stages across dimensions, and usually does. The scatter is the output of an assessment, not a defect in it: it names which gap to address next. Nothing in the model overrides a dimension's placement based on another dimension's score.

A design where Knowledge & Context gated the other four, capping their assessed stages, was considered and rejected. It converts a diagnosis into an error and hides the finding inside a calculation.

## Where dimensions genuinely interact

Interactions are real, and they are expressed as criteria inside the affected dimension's own gates rather than as dependencies between dimensions. Each is one criterion among four, so no dimension's placement is hostage to another's.

| Interaction | Lives in | What it asks |
|---|---|---|
| Transferability | Solution Fit, Integration to Optimization | Whether the context that made a pilot work exists anywhere other than the pilot team |
| Sufficiency | Human-AI Collaboration, Integration to Optimization | Whether AI can be grounded without a human supplying context in the moment |
| Distribution | People, Integration to Optimization | Whether capability is concentrated in the people who built personal context scaffolding |
| Provenance | Ethics, Experimentation to Integration | Whether the team can say what grounded an AI-influenced decision |

All four are written as one criterion inside the named gate in the affected dimension's own file under `framework/dimensions/`.

Whether interactions not involving Knowledge & Context are common enough to need a relationship layer of their own is deferred. See `research/open-questions.md`.

## Assessment

A team sits at the highest stage whose entry gate it has passed, per dimension. Gates use a threshold of three of four criteria, with one criterion per gate designated core and not skippable.

Threshold rather than hard pass, because the evidence is subjective and a hard rule on subjective evidence produces false precision. Core criteria, because criteria inside a gate are not equal: some are worth more than the rest combined, and those are exactly the ones a team under time pressure will skip.

Placement never depends on a metric. See `metrics.md` for why, and `playbook/running-an-assessment.md` for how an assessment runs.
