# Human-AI Collaboration

*Evolving teamwork with AI*

**Status.** Gates published, untested against a real assessment. Attributions checked against primary sources; see `research/evidence-log.md`.

This dimension covers how work is divided between people and AI, how that division was arrived at in the first place, and whether the team revisits it as capability changes.

## Why the model needs it

Introducing AI into a team is a change in the team itself and not only in its tooling. Roles get renegotiated, some of them implicitly, and that negotiation either happens or it gets skipped. A team that skipped it still ends up with a division of labour, but nobody chose it and nobody can tell you what it is.

This dimension is about that negotiation, and it asks two questions that vary independently of each other: what kind of participant AI is treated as, and how much of a decision it is allowed to make.

## What it is not

- **Trust in output.** Trust is one input to the division of labour and it is not the thing itself. A team can trust AI output completely and still have no agreement at all about when to use it.
- **Automation level alone.** Higher automation does not mean higher maturity, however tempting it is to read it that way. A team that operates at low automation deliberately, having considered the alternative and decided against it, is more mature than one that simply drifted upward.
- **Grounding.** Whether AI has what it needs in order to be useful belongs to Knowledge & Context. A collaboration model that only works because a person re-briefs the AI at the start of every session is not really a collaboration model, and the Integration to Optimization gate is written to catch exactly that.

## Lenses

**Interaction mode.** Nielsen (2024) names four metaphors for working with AI: *intern*, an eager but unskilled assistant needing supervision; *coworker*, completing tasks independently or alongside a person; *teacher*, guiding acquisition of new skills; and *coach*, critiquing and refining skills a person already has. The point of the lens is that the right metaphor is chosen per task and not per team.

**Levels of automation.** The ten-point scale, from fully manual through the computer narrowing options and suggesting, to fully autonomous, originates with Sheridan and Verplank (1978) at MIT's Man-Machine Systems Laboratory. Parasuraman, Sheridan and Wickens (2000) generalised it by crossing degree of automation with four stages of human information processing: information acquisition, information analysis, decision and action selection, and action implementation. The practical consequence of that crossing is that automation is not a single dial. For example, a system can be highly automated at the analysis stage and entirely manual at the action stage, and saying only that "we use AI a lot" hides which of the two you are looking at.

At the upper end of that scale sits what Noessel (2017) calls agentive technology, meaning systems designed to act on a person's behalf and to take initiative. Below that, Mollick's (2023) centaur and cyborg metaphors describe the two shapes the division tends to take, where the centaur splits tasks cleanly between human and AI and the cyborg interleaves them inside a single task.

**Team formation.** Tuckman (1965) describes four stages of small-group development: forming, storming, norming, performing. This maps well onto HAIMM's first four stages, and it has the useful property that storming is a stage a team has to pass through instead of one it should try to avoid.

Tuckman and Jensen (1977) added a fifth stage, adjourning, meaning the group disbands. That does not map onto Continuous Evolution, and hedging it as "adjourning or transforming" only papers over the mismatch. The honest reading is that Tuckman covers four of HAIMM's five stages. At the fifth a team does not disband, it deliberately re-enters forming and storming, because AI capability changed and the division of labour that was agreed at Optimization no longer describes the work. The lens runs out at that point, and what replaces it is the team's own capacity to re-open a question it had already settled.

## Patterns it detects

**Access without agreement.** Everyone has the same tool and no two people describe its role in the same way. This reads as forming, and it is really exploration with a tool attached to it.

**Suppressed storming.** You see universal enthusiasm and no recorded disagreement anywhere about AI's role. Either the conflict was skipped, or it is happening informally and never actually resolving. A survey cannot distinguish either of those from genuine consensus, which is why the Experimentation to Integration gate asks for a specific disagreement and how it was resolved.

**Trust without grounding.** Satisfaction is high, and yet every session still starts from a blank slate. A colleague who has to be re-briefed every single time has not really graduated from being a tool.

**One-way drift.** The automation level only ever rises, and nobody can describe a scenario in which it would be reduced. Movement in a single direction is drift, and it is not evidence of a model anyone has reviewed.

## Stage progression

**Exploration (forming).** AI arrives as a tool whose limits are stated but still being learned. The work at this point is agreeing on scope, meaning what it is and is not expected to do here. *Example:* a team trying assistants on summarisation and rewriting, and writing down which tasks they decided not to hand over.

**Experimentation (storming).** Expectations collide with each other. AI starts proposing instead of merely executing, and disagreement surfaces about creativity, judgement and what is acceptable to delegate. The question to ask is whether that disagreement gets resolved or simply goes quiet. *Example:* a marketing team arguing over AI-suggested campaign ideas, and recording where they landed.

**Integration (norming).** Norms now exist for how AI-proposed work gets reviewed and approved, and they are distinct from ad hoc checking. AI operates as a coworker on defined tasks, and the review step has become a process instead of a habit. *Example:* an agreed process for how AI-identified defects are triaged, reviewed, and merged.

**Optimization (performing).** AI operates semi-autonomously in specified areas, with oversight that has been designed instead of assumed. What is tested here is sufficiency, meaning whether AI can be grounded without a person supplying the context in the moment. *Example:* AI adjusting logistics within set bounds, escalating what falls outside them.

**Continuous Evolution.** The collaboration model is deliberately re-opened as capability changes, and it moves in both directions. Automation is raised for specific tasks as a decision somebody made, and the team can tell you how it would notice that AI's role needed to shrink. *Example:* a review that moves one task from proposing to executing and pulls another back after a near miss.

## Gates

There are four gates, one for each transition between adjacent stages. You pass a gate by meeting **3 of the 4** criteria, and the criterion marked *core* cannot be the one you skip. A team sits at the highest stage whose entry gate it has passed.

The evidence sources are **[A]** for artifact inspection, **[S]** for a survey or questionnaire, and **[O]** for observation or interview. Every gate carries at least one [A] or [O] criterion, because a gate that can be passed entirely by self-report will be passed.

The Integration to Optimization gate carries the Human-AI Collaboration / Knowledge & Context interaction criterion (sufficiency): whether AI can be grounded without a human supplying context in the moment.

### Exploration to Experimentation

*Tests* Whether the team has a shared, explicit sense of AI's role and boundaries, not just access to a tool.

Exploration, which is forming in Tuckman's terms, is about setting initial expectations and identifying boundaries. A team that has access to an AI tool but no agreed boundaries around it has not formed around anything, it has simply been issued a tool.

- **[O]** **(core)** Someone can state, in their own words, what AI is and is not expected to do in their workflow, and a colleague gives a consistent answer.
- **[A]** A written note, guideline, or team agreement records the initial scope of AI's role.
- **[S]** People report they know who to ask when they are unsure whether a task is appropriate to hand to AI.
- **[A]** At least one instance is recorded of the team declining to use AI for a task because it fell outside the agreed scope.

*Failure signal.* Everyone has access to the same AI tool and no two people describe its role in the same way. This is access without agreement, and although it reads as forming it is still exploration with a tool attached to it.

### Experimentation to Integration

*Tests* Whether role conflict has actually surfaced and been worked through, not avoided.

Storming is what it looks like when differences in expectations and roles surface. A team with no visible disagreement about AI's role has not been through storming, it has suppressed it.

- **[O]** **(core)** The team can describe a specific disagreement about what AI should or should not do, and how it was resolved.
- **[A]** A change to how AI is used (a role, a workflow step, a guardrail) exists that was made in direct response to a raised concern.
- **[S]** People report it is acceptable to push back on an AI-generated suggestion without that being treated as a failure of the tool or of them.
- **[O]** An AI suggestion has been visibly overridden or corrected in front of the team, not privately.

*Failure signal.* Universal enthusiasm together with zero recorded disagreement. Either the team skipped storming altogether, or it is happening informally and never getting resolved, and a survey on its own cannot tell either case apart from genuine consensus.

### Integration to Optimization

*Tests* Whether AI can be grounded without a human supplying context in the moment.

Norming is the point at which AI becomes a trusted "colleague" whose outputs are reviewed and approved. This is also where Human-AI Collaboration and Knowledge & Context interact, since sufficiency asks whether AI can be grounded without a human supplying context in the moment, and a colleague who has to be re-briefed every session has not actually earned that trust.

- **[O]** **(core)** In an observed session, AI produces usable output on a routine task without the human re-explaining context they already explained in a prior session.
- **[A]** A norm or process document exists describing how AI-proposed actions get reviewed and approved, distinct from ad hoc checking.
- **[S]** People report they trust AI output enough to review rather than redo it from scratch, for at least one recurring task.
- **[A]** At least one instance is recorded of AI executing an action, not just proposing one, with human approval.

*Failure signal.* High satisfaction scores paired with every session still starting from a blank slate. Trust without grounding is not norming, and what you have is a well-liked tool that has not yet graduated to being a colleague.

### Optimization to Continuous Evolution

*Tests* Whether the team deliberately revisits its collaboration model as capability changes, or simply drifts.

This gate is untested against practice. No assessment has yet placed a team at Continuous Evolution on any dimension, so these criteria are reasoned from the stages before them, not observed, and you should treat them as provisional.

- **[A]** **(core)** A review of the human-AI collaboration model (roles, automation level, trust boundaries) has happened in the last cycle, with a record of what changed or was reaffirmed.
- **[A]** At least one instance exists of the team deliberately raising the automation level for a specific task (moving from proposing to executing, say), not as a default drift.
- **[S]** People report the collaboration model has visibly changed since they started, not stayed static.
- **[O]** Someone can describe how the team would notice if AI's role needed to shrink, not only grow.

*Failure signal.* The automation level only ever increases and nobody can describe a scenario in which it would be dialled back. Evolution that runs in one direction only is drift, and it is not evidence of a model anyone has reviewed.

## Related

- This dimension's row in the combined matrix: `framework/matrix.md`
- The stages themselves, read across all five dimensions: `framework/stages/`
- Metrics for this dimension: `framework/metrics.md`
- Theory anchors and verification status: `research/evidence-log.md`
- Source article: `archive/v0.1/article.md`. The automation-levels figure reproduced there is IEEE copyright and is deliberately not carried into `framework/`; see `archive/v0.1/figures/README.md`.
