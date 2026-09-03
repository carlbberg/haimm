<!-- GENERATED FILE. Do not edit by hand.
     Source: framework/gates/human-ai-collaboration.yaml
     Regenerate: python3 tools/generate.py -->

# Human-AI Collaboration: gates

Pass a gate by meeting **3 of 4** criteria. The criterion marked *core* cannot be the one skipped.

Evidence sources: **[A]** artifact inspection, **[S]** survey or questionnaire, **[O]** observation or interview.

## Exploration to Experimentation

*Tests* Whether the team has a shared, explicit sense of AI's role and boundaries, not just access to a tool.

v0.1's Exploration/Forming stage is about setting initial expectations and identifying boundaries. A team with access to an AI tool but no agreed boundaries has not formed around it, it has just been issued a tool.

- **[O]** **(core)** Someone can state, in their own words, what AI is and is not expected to do in their workflow, and a colleague gives a consistent answer.
- **[A]** A written note, guideline, or team agreement records the initial scope of AI's role.
- **[S]** People report they know who to ask when they are unsure whether a task is appropriate to hand to AI.
- **[A]** At least one instance is recorded of the team declining to use AI for a task because it fell outside the agreed scope.

*Failure signal.* Everyone has access to the same AI tool and no two people describe its role the same way. Access without agreement, which reads as forming but is still exploration with a tool attached.

## Experimentation to Integration

*Tests* Whether role conflict has actually surfaced and been worked through, not avoided.

v0.1 names Storming explicitly as differences in expectations and roles surfacing. A team with no visible disagreement about AI's role has not gone through storming, it has suppressed it.

- **[O]** **(core)** The team can describe a specific disagreement about what AI should or should not do, and how it was resolved.
- **[A]** A change to how AI is used (a role, a workflow step, a guardrail) exists that was made in direct response to a raised concern.
- **[S]** People report it is acceptable to push back on an AI-generated suggestion without that being treated as a failure of the tool or of them.
- **[O]** An AI suggestion has been visibly overridden or corrected in front of the team, not privately.

*Failure signal.* Universal enthusiasm and zero recorded disagreement. Either the team skipped storming or it is happening informally and never gets resolved, and a survey alone cannot tell that apart from genuine consensus.

## Integration to Optimization

*Tests* Whether AI can be grounded without a human supplying context in the moment.

Norming, per v0.1, is where AI becomes a trusted "colleague" whose outputs are reviewed and approved. This is where Human-AI Collaboration and Knowledge & Context interact: sufficiency is whether AI can be grounded without a human supplying context in the moment, and a colleague who needs re-briefing every session has not actually reached that trust.

- **[O]** **(core)** In an observed session, AI produces usable output on a routine task without the human re-explaining context they already explained in a prior session.
- **[A]** A norm or process document exists describing how AI-proposed actions get reviewed and approved, distinct from ad hoc checking.
- **[S]** People report they trust AI output enough to review rather than redo it from scratch, for at least one recurring task.
- **[A]** At least one instance is recorded of AI executing an action, not just proposing one, with human approval.

*Failure signal.* High satisfaction scores paired with every session starting from a blank slate. Trust without grounding is not norming, it is a well-liked tool that has not graduated to colleague.

## Optimization to Continuous Evolution

*Tests* Whether the team deliberately revisits its collaboration model as capability changes, rather than drifting.

Untested against practice. No team in the v0.1 worked example is plotted in Continuous Evolution on any dimension, so these criteria are reasoned rather than observed. Treat as provisional.

- **[A]** **(core)** A review of the human-AI collaboration model (roles, automation level, trust boundaries) has happened in the last cycle, with a record of what changed or was reaffirmed.
- **[A]** At least one instance exists of the team deliberately raising the automation level for a specific task (moving from proposing to executing, say), not as a default drift.
- **[S]** People report the collaboration model has visibly changed since they started, not stayed static.
- **[O]** Someone can describe how the team would notice if AI's role needed to shrink, not only grow.

*Failure signal.* Automation level only ever increases and nobody can describe a scenario for dialing it back. Evolution in one direction only is drift, not a reviewed model.
