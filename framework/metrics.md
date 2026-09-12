# Metrics

Metrics track movement, and gates decide placement. Those are two different jobs, and the model works hard to keep them separate.

Any overlap between the two is a liability. A metric that also decides a stage has become a target, and a target that decides a stage will be met one way or another. The rule below keeps them apart.

## The division

| | Gates | Metrics |
|---|---|---|
| Question | Which stage is this team at | Is this team moving, and how fast |
| Evidence | Artifact, observation, survey, checked by an assessor | Whatever the team already counts |
| Cadence | At assessment | Continuous |
| Failure mode | Criteria get optimised against | Numbers get optimised against |
| Consequence of gaming | Caught by the falsifiability rule | Not caught, which is why placement never depends on them |

**No metric is ever an entry condition for a stage.** A team does not reach Optimization because a number crossed a line, it reaches Optimization by passing the Integration to Optimization gate, assessed against evidence. What the metrics tell you is whether it is getting closer.

This is Campbell's law applied deliberately (Campbell, 1979): a quantitative indicator adopted as a goal in a high-stakes setting will distort the process it was meant to observe. In this model, stage placement is the high-stakes setting. Keeping metrics out of it is what lets them stay honest enough to be worth collecting.

## The offset, and why it matters

The two layers are indexed differently, and the difference is easy to miss. A gate belongs to a transition, so Knowledge & Context's Integration to Optimization gate sits between two stages. A metrics row below belongs to a stage, so the Knowledge & Context row marked Integration is what you track while the team is at Integration.

Put those together and the row you are tracking is the one whose next gate is about to be used on you. A team sitting at Integration is watched against the Integration row, and assessed against the Integration to Optimization gate. That is precisely the arrangement Campbell's law warns about, so it is the arrangement the rule below has to survive.

There is a milder version of the same problem looking backwards. A metric that restates the gate a team has already passed is not gameable any more, because the placement is behind it. It is still a second copy of a fact that has a home elsewhere, and a second copy is a second thing to forget to update.

## Choosing metrics

- **Track three to five per dimension at a time, for the stage you are actually in.** A dashboard of forty numbers is a dashboard that nobody reads.
- **Delete any metric that restates a gate criterion, and do not keep it as confirmation.** This is stricter than it sounds, because a count is a restatement of the criterion it counts. If a gate asks whether a shared artifact has two substantive authors, then tracking author counts, or the share of artifacts with two authors, is the same fact at a different grain. Both go.
- **So measure a property the gate never looks at.** Gates mostly check whether an instance exists. Time, interval, lag, spread, abandonment and decay are all free, because no criterion asks about any of them. How long a reconsideration takes to reach a decision, how far the least confident user sits behind the most confident one, how old the oldest document still in use is: a gate will never tell you those, and each of them moves while a placement sits still.
- **Within what is left, prefer things that happened to percentages of people who feel something.** Both kinds appear below, because some of what this model cares about only exists as a perception, but the first sort tends to degrade more slowly under pressure.
- **Remember that metrics vary enormously in collection cost.** Some of the ones below are cheap, such as counting workflows with AI embedded, and others are projects in their own right, so choose for what your team can actually sustain.
- **Treat all of this as a starting point.** Teams should define their own metrics against their own context, and the lists below are illustrative and not a specification.

## Solution Fit

| Stage | Metrics |
|---|---|
| Exploration | Workflows assessed for AI readiness. Identified user needs mapped to AI opportunities. |
| Experimentation | Pilots co-created and tested. Pilot use cases showing positive outcomes. |
| Integration | Workflows with AI embedded. Active use of AI solutions. Feedback scores on AI-enhanced workflows. |
| Optimization | Movement in the organisational measure the solution was meant to move. Reduction in the specific bottleneck it targeted. |
| Continuous Evolution | Interval between need reassessments, and whether it is lengthening. Share of those reassessments that changed something. |

## Workflow

Harder to instrument than the other five, and the reason is worth stating. Most of what this dimension asks about happens once and leaves a document behind, so the honest metrics here are intervals and delays rather than anything you can watch move week to week. Beware the obvious one. Counting steps removed will make a team remove steps, which is the failure the dimension was rewritten to avoid.

| Stage | Metrics |
|---|---|
| Exploration | Steps whose reason nobody can reconstruct, found per workflow examined. Time taken to get from a list of steps to a statement of purpose. |
| Experimentation | Time from opening a reconsideration to recording a decision. Reconsiderations opened and then abandoned. |
| Integration | People taking part in a reconsideration who do the work themselves. Time between deciding a new structure and running it. |
| Optimization | Activities AI made feasible that nobody has taken up. Time between a capability arriving and a workflow changing because of it. |
| Continuous Evolution | Interval between reconsiderations of the same workflow. Age of the oldest workflow nobody has reconsidered. |

That last one is the cheapest early warning in this table, and the single reinvention pattern is exactly what it catches.

## Knowledge & Context

There is no field use behind any of these, so treat them as suggestions.

| Stage | Metrics |
|---|---|
| Exploration | Share of a workflow's inputs that live only in one person's head. Inputs found to sit in systems no AI tool can reach. |
| Experimentation | Durable context artifacts in existence, and how many of them anybody has opened in the last month. |
| Integration | Age of the oldest artifact the team still relies on. Time between a source of record changing and the artifact copying it catching up. |
| Optimization | Sessions where somebody re-supplied by hand what a reachable source already held. Time from an AI-produced decision to it appearing in a shared store. |
| Continuous Evolution | Context retired against context added, as a ratio, per cycle. Questions people ask each other that a reachable source already answers. |

Of these, watch the ratio. Almost every organisation adds context and very few subtract any, so a cycle with nothing retired is the normal reading. It is not a good one. The last metric is the most expensive to collect and the most interesting, because a rising number there is the privatised grounding pattern showing up before any assessment would find it.

## Human-AI Collaboration

| Stage | Metrics |
|---|---|
| Exploration | Workshops or sessions introducing AI. Tasks people say they were unsure whether to hand over. |
| Experimentation | Decisions influenced by AI assistance. Pilot tasks completed jointly with AI. |
| Integration | Ratio of AI-proposed actions approved to adjusted. Tasks AI runs unsupervised that no guardrail names. |
| Optimization | Semi-autonomous tasks completed within their bounds. Escalations that fell outside them. |
| Continuous Evolution | Interval between collaboration model reviews. Automation changes that lowered the level, as a share of all of them. |

The last of these is deliberately two-directional, because a count that only records increases is measuring drift and calling it progress. The ungoverned-task count at Integration is the one to watch as autonomy rises, and it should be falling while the automation level climbs.

## People

| Stage | Metrics |
|---|---|
| Exploration | Employees engaged in workshops or consultations. Time between a concern being raised and somebody answering it. |
| Experimentation | Stakeholders involved in pilot co-creation. Concerns raised during a pilot that are still open when it ends. |
| Integration | Completion of AI training. Spread between the most and the least confident user of the changed workflow. |
| Optimization | Share of the team's AI-supported work routed through its two most capable people. Active daily use across the team, not concentrated. |
| Continuous Evolution | Skill gaps identified against new AI capability, and how many were closed. Interval between upskilling sessions. |

At Optimization the distribution matters more than the total, so read those two together. Taken separately, they will leave the concentrated-capability pattern invisible.

## Ethics

| Stage | Metrics |
|---|---|
| Exploration | Share of identified risks specific to this team, against those copied from an external list. Workflows reviewed for ethical risk. |
| Experimentation | Ethical issues found during pilots. Time from a review raising an issue to the pilot changing or the issue being declined. |
| Integration | Age of the oldest governance document still in use. Time between a system changing and its documentation catching up. |
| Optimization | Issues caught by monitoring, as a share of all issues found. Time from detection to response. |
| Continuous Evolution | Interval between substantive guardrail revisions. New use cases assessed before rollout, as a share of those launched. |
