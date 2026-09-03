# Metrics

Metrics track movement, and gates decide placement. Those are two different jobs, and the model works hard to keep them separate.

Any overlap between the two is a liability, because a metric that also decides a stage has become a target, and a target that decides a stage will be met one way or another. The rule below is what keeps them apart.

## The division

| | Gates | Metrics |
|---|---|---|
| Question | Which stage is this team at | Is this team moving, and how fast |
| Evidence | Artifact, observation, survey, checked by an assessor | Whatever the team already counts |
| Cadence | At assessment | Continuous |
| Failure mode | Criteria get optimised against | Numbers get optimised against |
| Consequence of gaming | Caught by the falsifiability rule | Not caught, which is why placement never depends on them |

**No metric is ever an entry condition for a stage.** A team does not reach Optimization because a number crossed a line, it reaches Optimization by passing the Integration to Optimization gate, assessed against evidence. What the metrics tell you is whether it is getting closer.

This is Campbell's law applied deliberately (Campbell, 1979), which holds that a quantitative indicator adopted as a goal in a high-stakes setting will distort the process it was meant to observe. In this model, stage placement is the high-stakes setting, and keeping metrics out of it is what allows them to stay honest enough to be worth collecting.

## Choosing metrics

- **Track three to five per dimension at a time, for the stage you are actually in.** A dashboard of forty numbers is a dashboard that nobody reads.
- **Prefer counts of things that happened over percentages of people who feel something.** Both kinds appear below, but the first tends to degrade more slowly.
- **Delete any metric that restates a gate criterion, and do not keep it as confirmation.** If the gate already asks whether a shared artifact has two substantive authors, you should not also be tracking author counts, because at that point you have quietly replaced an assessment with a number.
- **Remember that metrics vary enormously in collection cost.** Some of the ones below are cheap, such as counting workflows with AI embedded, and others are projects in their own right, so choose for what your team can actually sustain.
- **Treat all of this as a starting point.** Teams should define their own metrics against their own context, and the lists below are illustrative and not a specification.

## Solution Fit

| Stage | Metrics |
|---|---|
| Exploration | Workflows assessed for AI readiness. Identified user needs mapped to AI opportunities. |
| Experimentation | Pilots co-created and tested. Pilot use cases showing positive outcomes. |
| Integration | Workflows with AI embedded. Active use of AI solutions. Feedback scores on AI-enhanced workflows. |
| Optimization | Movement in the organisational measure the solution was meant to move. Reduction in the specific bottleneck it targeted. |
| Continuous Evolution | Frequency of need reassessments. Workflows narrowed or retired following one. |

## Knowledge & Context

There is no field use behind any of these, so treat them as suggestions.

| Stage | Metrics |
|---|---|
| Exploration | Recurring workflows with a written inventory of what they depend on knowing. |
| Experimentation | Durable context artifacts in existence. Share of them used by more than their author. |
| Integration | Context artifacts with a named owner. Share inside their agreed freshness window. |
| Optimization | Context artifacts reachable from the AI tools in use without manual re-supply. Instances of AI output routed back into a shared store. |
| Continuous Evolution | Context artifacts retired or deprecated per cycle. Time for a new joiner to reach working competence. |

Of these, the retirement count is the one most worth watching. Almost every organisation adds context and very few subtract any of it, which means that a cycle with zero retirements is the normal reading and it is not a good one.

## Human-AI Collaboration

| Stage | Metrics |
|---|---|
| Exploration | Workshops or sessions introducing AI. Tasks explicitly placed in or out of scope. |
| Experimentation | Decisions influenced by AI assistance. Pilot tasks completed jointly with AI. |
| Integration | Ratio of AI-proposed actions approved to adjusted. Trust in AI output for named recurring tasks. |
| Optimization | Semi-autonomous tasks completed within their bounds. Escalations that fell outside them. |
| Continuous Evolution | Frequency of collaboration model reviews. Automation-level changes made, in both directions. |

The last of these is deliberately two-directional, because a count that only records increases is measuring drift and calling it progress.

## People

| Stage | Metrics |
|---|---|
| Exploration | Employees engaged in workshops or consultations. Concerns recorded, and concerns responded to. |
| Experimentation | Stakeholders involved in pilot co-creation. Pilot changes traceable to their input. |
| Integration | Completion of AI training. People adapting successfully to the changed workflow. |
| Optimization | People outside the original pilot working competently without help. Active daily use across the team, not concentrated. |
| Continuous Evolution | Skill gaps identified against new AI capability. Participation in recurring upskilling. |

At Optimization the distribution matters more than the total, so read these two together. Taken separately, they will leave the concentrated-capability pattern invisible.

## Ethics

| Stage | Metrics |
|---|---|
| Exploration | Risks identified that are specific to the team's own use cases. Workflows reviewed for ethical risk. |
| Experimentation | Ethical issues found during pilots, and issues that changed a pilot. |
| Integration | AI systems with current documentation and a named owner. Transparency reviews conducted. |
| Optimization | Issues caught by monitoring rather than by an audit or a complaint. Time from detection to response. |
| Continuous Evolution | Guardrails revised in response to something learned. New use cases assessed before rollout. |
