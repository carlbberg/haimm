# Human-AI Collaboration

*Evolving teamwork with AI*

**Status.** Gates published, untested against a real assessment. Attributions checked against primary sources; see `research/evidence-log.md`.

This dimension covers how work is divided between people and AI, how that division was arrived at in the first place, and whether the team revisits it as capability changes.

## Why the model needs it

Bringing AI into a team changes the team itself, not only its tooling. Roles get renegotiated, some of them implicitly and some of them without anyone noticing, and that negotiation either happens deliberately or it happens by default. A team that skipped it still ends up with a division of labour. Nobody chose it, and nobody can tell you what it is.

This dimension is about that negotiation, and it asks two questions that vary independently of each other: what kind of participant AI is treated as, and how much of a decision it is allowed to make.

## What it is not

- **Trust in output.** Trust feeds the division of labour without being the thing itself. A team can trust AI output completely and still have no agreement about when to use it.
- **Automation level alone.** Higher automation does not mean higher maturity, however tempting it is to read it that way. A team that operates at low automation deliberately, having considered the alternative and decided against it, is more mature than one that simply drifted upward.
- **Grounding.** Whether AI has what it needs to be useful belongs to Knowledge & Context. A collaboration model that only works because a person re-briefs the AI every session is not a collaboration model. The Integration to Optimization gate exists to catch exactly that.
- **Governance.** What a guardrail should say, and whether the team's ethical practice functions at all, belongs to Ethics. This dimension only asks whether governance reached the specific task AI now runs with the least human involvement, which is a narrower question and a much easier one to fail.

## Lenses

**Interaction mode.** Nielsen (2024) names four metaphors for working with AI: *intern*, an eager but unskilled assistant needing supervision; *coworker*, completing tasks independently or alongside a person; *teacher*, guiding acquisition of new skills; and *coach*, critiquing and refining skills a person already has. The point of the lens is that the right metaphor is chosen per task and not per team.

**Levels of automation.** The ten-point scale, from fully manual through the computer narrowing options and suggesting, to fully autonomous, originates with Sheridan and Verplank (1978) at MIT's Man-Machine Systems Laboratory. Parasuraman, Sheridan and Wickens (2000) generalised it by crossing degree of automation with four stages of human information processing: information acquisition, information analysis, decision and action selection, and action implementation. The practical consequence of that crossing is that automation is not a single dial. A system can be heavily automated at the analysis stage and entirely manual at the action stage. Say only that "we use AI a lot" and you have hidden which of the two you are looking at.

At the upper end of that scale sits what Noessel (2017) calls agentive technology: systems that act on a person's behalf and take initiative. Below it, Mollick's (2023) centaur and cyborg metaphors name the two shapes the division tends to take. The centaur splits tasks cleanly between human and AI. The cyborg interleaves them inside a single task.

**Team formation.** Tuckman (1965) describes four stages of small-group development: forming, storming, norming, performing. This maps well onto HAIMM's first four stages, and it has the useful property that storming is a stage a team has to pass through instead of one it should try to avoid.

Tuckman and Jensen (1977) added a fifth stage, adjourning, meaning the group disbands. That does not map onto Continuous Evolution, and hedging it as "adjourning or transforming" only papers over the mismatch. The honest reading is that Tuckman covers four of HAIMM's five stages. At the fifth a team does not disband. It deliberately re-enters forming and storming, because AI capability moved and the division of labour it agreed at Optimization no longer describes the work. The lens runs out there. What replaces it is the team's own capacity to re-open a question it had already settled.

## Patterns it detects

**Access without agreement.** Everyone has the same tool and no two people describe its role the same way. It reads as forming. It is exploration with a tool attached. *Example:* three colleagues describing the same assistant as a drafting tool, a research tool, and something they assume they are not allowed to use for client work.

**Suppressed storming.** You see universal enthusiasm and no recorded disagreement anywhere about AI's role. Either the team skipped the conflict, or it plays out informally and never resolves. A survey cannot tell either of those cases apart from genuine consensus, which is why the Experimentation to Integration gate asks for a specific disagreement and an account of how the team settled it. *Example:* a retrospective whose AI section contains only positives, in a team where two people have quietly stopped using it.

**Trust without grounding.** Satisfaction is high, and yet every session still starts from a blank slate. A colleague you have to re-brief from scratch every single time, however much you like working with them, has not really graduated from being a tool. *Example:* somebody who calls the assistant a colleague and opens every session by pasting the same four paragraphs into it.

**One-way drift.** The automation level only ever rises, and nobody can describe a scenario for dialling it back. Movement in one direction is drift. It is not evidence that anyone reviewed the model. *Example:* an automation level that has risen at every review and never once fallen, in a team that cannot name what would make them lower it.

**Ungoverned autonomy.** AI executes on a task, the team has a perfectly respectable set of guardrails, and none of them mentions that task. This is easy to miss because both halves look healthy on their own. Ethics reads well because the guardrails are specific and owned, and this dimension reads well because the automation is real and somebody reviews the output. The gap is between them, and it only shows if you ask which task runs with the least supervision and then go looking for what covers it.

## Stage progression

**Exploration (forming).** AI arrives as a tool whose limits the team has stated and is still discovering in practice. The work here is agreeing scope, which means writing down both what people expect it to do and what they have decided it should not touch. *Example:* a team trying assistants on summarisation and rewriting, and writing down which tasks they decided not to hand over.

**Experimentation (storming).** Expectations collide. AI starts proposing instead of merely executing, and people disagree about creativity, judgement and what they are willing to delegate. Ask whether that disagreement resolves or simply goes quiet. *Example:* a marketing team arguing over AI-suggested campaign ideas, and recording where they landed.

**Integration (norming).** Norms now cover how the team reviews and approves AI-proposed work, and they are distinct from the ad hoc checking that anyone does anyway. AI operates as a coworker on defined tasks, and the review step has become a process instead of a habit. *Example:* an agreed process for how AI-identified defects are triaged, reviewed, and merged.

**Optimization (performing).** AI operates semi-autonomously in specified areas, under oversight somebody designed instead of assuming it. Two things are tested at once here. Sufficiency asks whether AI can reach usable output without a person feeding it context in the moment. Governance asks whether the task it runs most freely has a limit written down and a person accountable for that limit. *Example:* AI adjusting logistics within set bounds and escalating what falls outside them, with a guardrail naming the bounds and a named owner for it.

**Continuous Evolution.** The team deliberately re-opens the collaboration model as capability changes, and it moves in both directions. Somebody decides to raise automation for a specific task, and the team can tell you how it would notice that AI's role needed to shrink. *Example:* a review that moves one task from proposing to executing and pulls another back after a near miss.

## Gates

There are four gates, one for each transition between adjacent stages. You pass a gate by meeting **3 of the 4** criteria, and the criterion marked *core* cannot be the one you skip. A team sits at the highest stage whose entry gate it has passed.

The evidence sources are **[A]** for artifact inspection, **[S]** for a survey or questionnaire, and **[O]** for observation or interview. Every gate carries at least one [A] or [O] criterion, because a gate that can be passed entirely by self-report will be passed.

The Integration to Optimization gate carries two interaction criteria. The Knowledge & Context one (sufficiency) asks whether AI can be grounded without a human supplying context in the moment. The Ethics one (governance) asks whether the autonomy the team is handing over is covered by a guardrail that names a limit and by somebody accountable for it.

### Exploration to Experimentation

*Tests* Whether the team has a shared, explicit sense of AI's role and boundaries, not just access to a tool.

Exploration, forming in Tuckman's terms, is about setting initial expectations and identifying boundaries. A team with access to an AI tool and no agreed boundaries around it has not formed around anything at all. Somebody issued it a tool.

- **[O]** **(core)** Someone can state, in their own words, what AI is and is not expected to do in their workflow, and a colleague gives a consistent answer.
- **[A]** A written note, guideline, or team agreement records the initial scope of AI's role.
- **[S]** People report they know who to ask when they are unsure whether a task is appropriate to hand to AI.
- **[A]** At least one instance is recorded of the team declining to use AI for a task because it fell outside the agreed scope.

*Failure signal.* Everyone has access to the same AI tool and no two people describe its role the same way. This is access without agreement. It reads as forming and it is still exploration with a tool attached.

### Experimentation to Integration

*Tests* Whether role conflict has actually surfaced and been worked through, not avoided.

Storming is what it looks like when differences in expectations and roles come to the surface and have to be worked out. A team with no visible disagreement about AI's role has not been through storming. It suppressed it.

- **[O]** **(core)** The team can describe a specific disagreement about what AI should or should not do, and how it was resolved.
- **[A]** A change to how AI is used (a role, a workflow step, a guardrail) exists that was made in direct response to a raised concern.
- **[S]** People report it is acceptable to push back on an AI-generated suggestion without that being treated as a failure of the tool or of them.
- **[O]** An AI suggestion has been visibly overridden or corrected in front of the team, not privately.

*Failure signal.* Universal enthusiasm together with zero recorded disagreement. Either the team skipped storming, or it plays out informally and never resolves. A survey on its own cannot tell either case apart from genuine consensus.

### Integration to Optimization

*Tests* Whether AI can be grounded without a human supplying context in the moment, and whether anything governs the autonomy the team is handing it.

Norming is where AI becomes a trusted "colleague" whose outputs the team reviews and approves. Two other dimensions meet this gate. Sufficiency asks whether AI can reach usable output without a human feeding it context in the moment, and a colleague you re-brief every session has not earned that trust. Governance asks a question teams rarely face at this point. The automation level is about to rise, so does anything cover the task it rises on that could stop it? Ethics maturity in general does not answer that. A guardrail can be specific, owned and current, and still say nothing about the one task AI now runs on its own.

- **[O]** **(core)** In an observed session, AI produces usable output on a routine task without the human re-explaining context they already explained in a prior session.
- **[A]** A norm or process document exists describing how AI-proposed actions get reviewed and approved, distinct from ad hoc checking.
- **[S]** People report they trust AI output enough to review rather than redo it from scratch, for at least one recurring task.
- **[A]** For at least one task AI executes instead of proposing, a guardrail names what it may not do without a person, and somebody is accountable for that guardrail.

*Failure signal.* High satisfaction scores paired with every session still starting from a blank slate. Trust without grounding is not norming. You have a well-liked tool that has not yet graduated to colleague. The second profile is quieter and worse. AI executes on a task nobody wrote a limit for, the team reads that as progress because nothing has gone wrong yet, and the guardrail set somebody would point you to is perfectly respectable and silent about this one task.

### Optimization to Continuous Evolution

*Tests* Whether the team deliberately revisits its collaboration model as capability changes, or simply drifts.

This gate is untested against practice. No assessment has yet placed a team at Continuous Evolution on any dimension, so these criteria are reasoned from the stages before them, not observed, and you should treat them as provisional.

- **[A]** **(core)** A review of the human-AI collaboration model (roles, automation level, trust boundaries) has happened in the last cycle, with a record of what changed or was reaffirmed.
- **[A]** At least one instance exists of the team deliberately raising the automation level for a specific task (moving from proposing to executing, say), not as a default drift.
- **[S]** People report the collaboration model has visibly changed since they started, not stayed static.
- **[O]** Someone can describe how the team would notice if AI's role needed to shrink, not only grow.

*Failure signal.* The automation level only ever increases and nobody can describe a scenario for dialling it back. Evolution in one direction is drift. It is not evidence that anyone reviewed the model.

## Related

- This dimension's row in the combined matrix: `framework/matrix.md`
- The stages themselves, read across all six dimensions: `framework/stages/`
- Metrics for this dimension: `framework/metrics.md`
- Dimension interactions: `framework/README.md`
- Theory anchors and verification status: `research/evidence-log.md`
- Source article: `archive/v0.1/article.md`. The automation-levels figure reproduced there is IEEE copyright and is deliberately not carried into `framework/`; see `archive/v0.1/figures/README.md`.
