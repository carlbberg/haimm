# HAIMM overview

Four elements.

**Stages**, how teams and organisations progress over time. See `stages.md`.

**Dimensions**, the building blocks that keep the model human-centric. Each evolves through every stage, with its own challenges at each. See `dimensions/`.

**Gates**, the criteria for moving between adjacent stages within a dimension, added in v0.2. Four per dimension, twenty in total, each written into its own dimension's file under `dimensions/`.

**Metrics**, a tracking layer that never decides placement. See `metrics.md`.

## Dimensions

| Order | Dimension | Subtitle |
|---|---|---|
| 1 | Solution Fit | Matching AI capabilities to real user needs |
| 2 | Knowledge & Context | Making shared understanding explicit and current |
| 3 | Human-AI Collaboration | Evolving teamwork with AI |
| 4 | People | Supporting cultural and role shifts |
| 5 | Ethics | Safeguarding responsible AI practices |

Row order changed in v0.2. Knowledge & Context sits second, immediately above Human-AI Collaboration, so that a gap between the two is visible in the assessment view.

## Dimensions are independent

A team can sit at different stages across dimensions, and usually does. The scatter is the output of an assessment, not a defect in it: it names which gap to address next. Nothing in the model overrides a dimension's placement based on another dimension's score.

This constraint was tested during v0.2 development. An earlier draft had Knowledge & Context gating the other four, capping their assessed stages. It was dropped because it converts a diagnosis into an error and hides the finding inside a calculation.

## Where dimensions genuinely interact

Interactions are real, and they are expressed as criteria inside the affected dimension's own gates rather than as dependencies between dimensions. Each is one criterion among four, so no dimension's placement is hostage to another's.

| Interaction | Lives in | What it asks |
|---|---|---|
| Transferability | Solution Fit, Integration to Optimization | Whether the context that made a pilot work exists anywhere other than the pilot team |
| Sufficiency | Human-AI Collaboration, Integration to Optimization | Whether AI can be grounded without a human supplying context in the moment |
| Distribution | People, Integration to Optimization | Whether capability is concentrated in the people who built personal context scaffolding |
| Provenance | Ethics, Experimentation to Integration | Whether the team can say what grounded an AI-influenced decision |

All four are written as one criterion inside the named gate in the affected dimension's own file under `framework/dimensions/`.

Whether interactions not involving Knowledge & Context are common enough to need a relationship layer of their own is deferred past v0.2. See `research/open-questions.md`.

## Assessment

A team sits at the highest stage whose entry gate it has passed, per dimension. Gates use a threshold of three of four criteria, with one criterion per gate designated core and not skippable.

Threshold rather than hard pass, because the evidence is subjective and a hard rule on subjective evidence produces false precision. Core criteria, because criteria inside a gate are not equal: some are worth more than the rest combined, and those are exactly the ones a team under time pressure will skip.

Placement never depends on a metric. See `metrics.md` for why, and `playbook/running-an-assessment.md` for how an assessment runs.
