# HAIMM overview

The model has two axes, and this file describes what sits on them.

**Stages** are how teams and organisations progress over time. There are five, each with its own file under `stages/`.

**Dimensions** are the building blocks that keep the model human-centric. There are also five, each with its own file under `dimensions/`, and each of them evolves through every stage with its own challenges at each one.

A reading of a team is a position on both axes at once: one stage per dimension. All twenty-five cells live in `matrix.md`.

**Gates** are how a team moves along the stage axis within a single dimension. A gate holds the criteria for crossing between two adjacent stages, so there are four per dimension and twenty in total, each written into the file of the dimension it belongs to.

**Metrics** sit outside the axes altogether. They track whether a team is moving, and they never decide where it sits, for reasons `metrics.md` sets out at length.

## Stages

We present the stages in sequence. In practice they are iterative, and teams revisit earlier ones as their tools, their people and their needs change.

| # | Stage | id | What characterises it |
|---|---|---|---|
| 1 | Exploration | `exploration` | Identifying opportunities, understanding user needs and concerns, and setting initial guardrails. |
| 2 | Experimentation | `experimentation` | Piloting AI tools at small scale to validate relevance and effectiveness. |
| 3 | Integration | `integration` | Embedding AI into workflows and establishing working norms between teams and AI tools. |
| 4 | Optimization | `optimization` | Scaling what worked, focused on measurable outcomes: productivity, quality, learning. |
| 5 | Continuous Evolution | `continuous-evolution` | Ongoing adaptation as organisational needs and technologies change. |

The ids are the stable machine-readable form of the stage names, and anything built on top of the model should key off them.

Why five? The shape is a beginning, a middle and an end, with a stage before and a stage after, which is the pattern most transformation frameworks use and the one people navigating a change already recognise. Familiarity is a weaker argument than it sounds, though. The claim behind the shape is recognisability, not evidence, so hold it as such.

## Dimensions

| Order | Dimension | Subtitle |
|---|---|---|
| 1 | Solution Fit | Matching AI capabilities to real user needs |
| 2 | Knowledge & Context | Making shared understanding explicit and current |
| 3 | Human-AI Collaboration | Evolving teamwork with AI |
| 4 | People | Supporting cultural and role shifts |
| 5 | Ethics | Safeguarding responsible AI practices |

Knowledge & Context sits second, immediately above Human-AI Collaboration, so that any gap between the two is visible at a glance in the assessment view.

## Dimensions are independent

A team can sit at different stages across the five dimensions, and in most cases it will. That scatter is the output of an assessment rather than a defect in it, because it names which gap to address next, and nothing in the model overrides one dimension's placement on the basis of another's score.

We considered an alternative design, in which Knowledge & Context gated the other four and capped the stage they could reach, and we rejected it. Capping converts a diagnosis into an error and buries the finding inside a calculation, which is exactly the move that makes a maturity model feel authoritative and stop being useful.

## Where dimensions genuinely interact

The interactions are real. Each one appears as a criterion inside the affected dimension's own gates, one among the four in that gate, so no dimension's placement is ever hostage to another's.

| Interaction | Lives in | What it asks |
|---|---|---|
| Transferability | Solution Fit, Integration to Optimization | Whether the context that made a pilot work exists anywhere other than the pilot team |
| Sufficiency | Human-AI Collaboration, Integration to Optimization | Whether AI can be grounded without a human supplying context in the moment |
| Distribution | People, Integration to Optimization | Whether capability is concentrated in the people who built personal context scaffolding |
| Provenance | Ethics, Experimentation to Integration | Whether the team can say what grounded an AI-influenced decision |

All four sit as a single criterion inside the named gate, in the affected dimension's own file under `framework/dimensions/`.

Are the interactions that do not involve Knowledge & Context common enough to justify a relationship layer of their own? We have deferred that question until there is more than reasoning behind an answer, and `research/open-questions.md` records where it stands.

## Assessment

A team sits at the highest stage whose entry gate it has passed, worked out separately for each dimension. Gates use a threshold of three criteria out of four, and one criterion in every gate carries a core mark. That is the one you cannot skip.

We use a threshold instead of a hard pass because the evidence is subjective, and a hard rule on subjective evidence produces false precision. Core criteria exist because the four inside a gate are not equal in weight. Some are worth more than the other three combined, and those tend to be exactly the ones a team under time pressure wants to skip.

Placement never depends on a metric. `metrics.md` explains why, and `playbook/running-an-assessment.md` describes how an assessment runs.
