# Human-AI Collaboration

*Evolving teamwork with AI*

**Status.** Gates published, untested against a real assessment. Attributions checked against primary sources; see `research/evidence-log.md`.

How work is divided between people and AI, how that division was arrived at, and whether the team revisits it as capability changes.

## Why the model needs it

Introducing AI into a team is a change in the team, not only in its tooling. Roles get renegotiated, some of them implicitly, and the negotiation either happens or is skipped. A team that skipped it still has a division of labour, but nobody chose it and nobody can say what it is.

This dimension is about that negotiation. It asks two questions that vary independently: what kind of participant AI is treated as, and how much of a decision it is allowed to make.

## What it is not

- **Trust in output.** Trust is one input to the division of labour, not the thing itself. A team can trust AI output and still have no agreement about when to use it.
- **Automation level alone.** Higher automation is not higher maturity. A team operating at low automation deliberately, having considered the alternative, is more mature than one that drifted upward.
- **Grounding.** Whether AI has what it needs to be useful belongs to Knowledge & Context. A collaboration model that works only because a person re-briefs the AI every session is not a collaboration model, and the Integration to Optimization gate is written to catch exactly that.

## Lenses

**Interaction mode.** Nielsen (2024) names four metaphors for working with AI: *intern*, an eager but unskilled assistant needing supervision; *coworker*, completing tasks independently or alongside a person; *teacher*, guiding acquisition of new skills; and *coach*, critiquing and refining skills a person already has. The point of the lens is that the right metaphor is per task, not per team.

**Levels of automation.** The ten-point scale, from fully manual through the computer narrowing options and suggesting, to fully autonomous, originates with Sheridan and Verplank (1978) at MIT's Man-Machine Systems Laboratory. Parasuraman, Sheridan and Wickens (2000) generalised it by crossing degree of automation with four stages of human information processing: information acquisition, information analysis, decision and action selection, and action implementation. The practical consequence of the crossing is that automation is not one dial. A system can be highly automated at analysis and fully manual at action, and saying only "we use AI a lot" hides which.

At the upper end sits what Noessel (2017) calls agentive technology: systems designed to act on a person's behalf and take initiative. Mollick's (2023) centaur and cyborg metaphors describe the two shapes the division takes below that: the centaur splits tasks cleanly between human and AI, the cyborg interleaves them within a single task.

**Team formation.** Tuckman (1965) describes four stages of small-group development: forming, storming, norming, performing. This maps well onto HAIMM's first four stages, with the useful property that storming is a stage a team has to pass through rather than avoid.

Tuckman and Jensen (1977) added a fifth stage, adjourning, meaning the group disbands. That does not map onto Continuous Evolution, and hedging it as "adjourning or transforming" only papers over the mismatch. The honest reading is that Tuckman covers four of HAIMM's five stages. At the fifth, a team does not disband; it re-enters forming and storming deliberately, because AI capability changed and the division of labour agreed at Optimization no longer describes the work. The lens runs out, and what replaces it is the team's own capacity to re-open a settled question.

## Patterns it detects

**Access without agreement.** Everyone has the same tool and no two people describe its role the same way. Reads as forming, and is exploration with a tool attached.

**Suppressed storming.** Universal enthusiasm and no recorded disagreement about AI's role. Either the conflict was skipped or it is happening informally and never resolving. A survey cannot distinguish either from genuine consensus, which is why the Experimentation to Integration gate asks for a specific disagreement and its resolution.

**Trust without grounding.** High satisfaction with every session starting from a blank slate. A colleague who needs re-briefing every time has not graduated from tool.

**One-way drift.** Automation level only ever rises, and nobody can describe a scenario for reducing it. Movement in one direction is drift, not a reviewed model.

## Stage progression

**Exploration (forming).** AI arrives as a tool with limits that are stated but still being learned. The work is agreeing scope: what it is and is not expected to do here. *Example:* a team trying assistants on summarisation and rewriting, and writing down which tasks they decided not to hand over.

**Experimentation (storming).** Expectations collide. AI starts proposing rather than executing, and disagreement surfaces about creativity, judgement, and what is acceptable to delegate. The stage question is whether that disagreement gets resolved or goes quiet. *Example:* a marketing team arguing over AI-suggested campaign ideas, and recording where they landed.

**Integration (norming).** Norms exist for how AI-proposed work gets reviewed and approved, distinct from ad hoc checking. AI operates as a coworker on defined tasks, and the review step is a process rather than a habit. *Example:* an agreed process for how AI-identified defects are triaged, reviewed, and merged.

**Optimization (performing).** AI operates semi-autonomously in specified areas with oversight that is designed rather than assumed. What is tested here is sufficiency: whether AI can be grounded without a person supplying context in the moment. *Example:* AI adjusting logistics within set bounds, escalating what falls outside them.

**Continuous Evolution.** The collaboration model is deliberately re-opened as capability changes, in both directions. Automation is raised for specific tasks as a decision, and the team can say how it would notice that AI's role needed to shrink. *Example:* a review that moves one task from proposing to executing and pulls another back after a near miss.

## Gates

Four gates, one per transition between adjacent stages. Pass a gate by meeting **3 of 4** criteria; the criterion marked *core* cannot be the one skipped. A team sits at the highest stage whose entry gate it has passed.

Evidence sources: **[A]** artifact inspection, **[S]** survey or questionnaire, **[O]** observation or interview. Every gate carries at least one [A] or [O] criterion, because a gate passable entirely by self-report will be passed.

The Integration to Optimization gate carries the Human-AI Collaboration / Knowledge & Context interaction criterion (sufficiency): whether AI can be grounded without a human supplying context in the moment.

### Exploration to Experimentation

*Tests* Whether the team has a shared, explicit sense of AI's role and boundaries, not just access to a tool.

Exploration, in Tuckman's terms forming, is about setting initial expectations and identifying boundaries. A team with access to an AI tool but no agreed boundaries has not formed around it, it has just been issued a tool.

- **[O]** **(core)** Someone can state, in their own words, what AI is and is not expected to do in their workflow, and a colleague gives a consistent answer.
- **[A]** A written note, guideline, or team agreement records the initial scope of AI's role.
- **[S]** People report they know who to ask when they are unsure whether a task is appropriate to hand to AI.
- **[A]** At least one instance is recorded of the team declining to use AI for a task because it fell outside the agreed scope.

*Failure signal.* Everyone has access to the same AI tool and no two people describe its role the same way. Access without agreement, which reads as forming but is still exploration with a tool attached.

### Experimentation to Integration

*Tests* Whether role conflict has actually surfaced and been worked through, not avoided.

Storming is differences in expectations and roles surfacing. A team with no visible disagreement about AI's role has not gone through storming, it has suppressed it.

- **[O]** **(core)** The team can describe a specific disagreement about what AI should or should not do, and how it was resolved.
- **[A]** A change to how AI is used (a role, a workflow step, a guardrail) exists that was made in direct response to a raised concern.
- **[S]** People report it is acceptable to push back on an AI-generated suggestion without that being treated as a failure of the tool or of them.
- **[O]** An AI suggestion has been visibly overridden or corrected in front of the team, not privately.

*Failure signal.* Universal enthusiasm and zero recorded disagreement. Either the team skipped storming or it is happening informally and never gets resolved, and a survey alone cannot tell that apart from genuine consensus.

### Integration to Optimization

*Tests* Whether AI can be grounded without a human supplying context in the moment.

Norming is where AI becomes a trusted "colleague" whose outputs are reviewed and approved. This is where Human-AI Collaboration and Knowledge & Context interact: sufficiency is whether AI can be grounded without a human supplying context in the moment, and a colleague who needs re-briefing every session has not actually reached that trust.

- **[O]** **(core)** In an observed session, AI produces usable output on a routine task without the human re-explaining context they already explained in a prior session.
- **[A]** A norm or process document exists describing how AI-proposed actions get reviewed and approved, distinct from ad hoc checking.
- **[S]** People report they trust AI output enough to review rather than redo it from scratch, for at least one recurring task.
- **[A]** At least one instance is recorded of AI executing an action, not just proposing one, with human approval.

*Failure signal.* High satisfaction scores paired with every session starting from a blank slate. Trust without grounding is not norming, it is a well-liked tool that has not graduated to colleague.

### Optimization to Continuous Evolution

*Tests* Whether the team deliberately revisits its collaboration model as capability changes, rather than drifting.

Untested against practice. No assessment has placed a team at Continuous Evolution on any dimension, so these criteria are reasoned rather than observed. Treat as provisional.

- **[A]** **(core)** A review of the human-AI collaboration model (roles, automation level, trust boundaries) has happened in the last cycle, with a record of what changed or was reaffirmed.
- **[A]** At least one instance exists of the team deliberately raising the automation level for a specific task (moving from proposing to executing, say), not as a default drift.
- **[S]** People report the collaboration model has visibly changed since they started, not stayed static.
- **[O]** Someone can describe how the team would notice if AI's role needed to shrink, not only grow.

*Failure signal.* Automation level only ever increases and nobody can describe a scenario for dialing it back. Evolution in one direction only is drift, not a reviewed model.

## Related

- This dimension's row in the combined matrix: `framework/matrix.md`
- The stages themselves, read across all five dimensions: `framework/stages/`
- Metrics for this dimension: `framework/metrics.md`
- Theory anchors and verification status: `research/evidence-log.md`
- Source article: `archive/v0.1/article.md`. The automation-levels figure reproduced there is IEEE copyright and is deliberately not carried into `framework/`; see `archive/v0.1/figures/README.md`.
