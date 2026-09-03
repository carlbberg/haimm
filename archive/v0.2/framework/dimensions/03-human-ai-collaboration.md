# Human-AI Collaboration

*Evolving teamwork with AI*

**Status: revised for v0.2.** Gates published, untested against a real assessment. Two v0.1 attributions corrected here; see `research/evidence-log.md`.

How work is divided between people and AI, how that division was arrived at, and whether the team revisits it as capability changes.

## Why the model needs it

Introducing AI into a team is a change in the team, not only in its tooling. Roles get renegotiated, some of them implicitly, and the negotiation either happens or is skipped. A team that skipped it still has a division of labour, but nobody chose it and nobody can say what it is.

This dimension is about that negotiation. It asks two questions that vary independently: what kind of participant AI is treated as, and how much of a decision it is allowed to make.

## What it is not

- **Trust in output.** Trust is one input to the division of labour, not the thing itself. A team can trust AI output and still have no agreement about when to use it.
- **Automation level alone.** Higher automation is not higher maturity. A team operating at low automation deliberately, having considered the alternative, is more mature than one that drifted upward.
- **Grounding.** Whether AI has what it needs to be useful belongs to Knowledge & Context. A collaboration model that works only because a person re-briefs the AI every session is not a collaboration model, and the Integration to Optimization gate is written to catch exactly that.

## Lenses

**Interaction mode.** Nielsen (2024) names four metaphors for working with AI: *intern*, an eager but unskilled assistant needing supervision; *coworker*, completing tasks independently or alongside a person; *teacher*, guiding acquisition of new skills; and *coach*, critiquing and refining skills a person already has. v0.1 named three of these and called the second one "colleague". The set is corrected here, and the point of the lens is that the right metaphor is per task, not per team.

**Levels of automation.** The ten-point scale, from fully manual through the computer narrowing options and suggesting, to fully autonomous, originates with Sheridan and Verplank (1978) at MIT's Man-Machine Systems Laboratory. Parasuraman, Sheridan and Wickens (2000) generalised it by crossing degree of automation with four stages of human information processing: information acquisition, information analysis, decision and action selection, and action implementation. v0.1 attributed the ten-level scale itself to the 2000 paper, which is wrong; the 2000 contribution is the crossing. The practical consequence of the crossing is that automation is not one dial. A system can be highly automated at analysis and fully manual at action, and saying only "we use AI a lot" hides which.

At the upper end sits what Noessel (2017) calls agentive technology: systems designed to act on a person's behalf and take initiative. Mollick's (2023) centaur and cyborg metaphors describe the two shapes the division takes below that: the centaur splits tasks cleanly between human and AI, the cyborg interleaves them within a single task.

**Team formation.** Tuckman (1965) describes four stages of small-group development: forming, storming, norming, performing. This maps well onto HAIMM's first four stages, with the useful property that storming is a stage a team has to pass through rather than avoid.

Tuckman and Jensen (1977) added a fifth stage, adjourning, meaning the group disbands. That does not map onto Continuous Evolution, and v0.1's hedge of "Adjourning/Transforming" papered over the mismatch. The honest reading is that Tuckman covers four of HAIMM's five stages. At the fifth, a team does not disband; it re-enters forming and storming deliberately, because AI capability changed and the division of labour agreed at Optimization no longer describes the work. The lens runs out, and what replaces it is the team's own capacity to re-open a settled question.

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

## Matrix row

| Stage | Cell |
|---|---|
| Exploration | AI introduced as a tool with clear but evolving limitations; basic understanding established. |
| Experimentation | AI begins assisting with decision-making, offering suggestions beyond simple tasks. |
| Integration | AI becomes a somewhat trusted "colleague," with humans reviewing and approving its outputs. |
| Optimization | AI achieves semi-autonomous operation in some areas with human oversight. |
| Continuous Evolution | Human-AI relationships adapt as technology evolves, fostering innovative collaboration. |

Every stage contains use cases at every automation level. The stage describes where the team's norms sit, not a ceiling on any individual task.

## Gates

Source: `framework/gates/human-ai-collaboration.yaml`. Rendered: `framework/gates/generated/human-ai-collaboration-gates.md`. Instruments: `playbook/instruments/`.

The Integration to Optimization gate carries the Human-AI Collaboration / Knowledge & Context interaction criterion (sufficiency): whether AI can be grounded without a human supplying context in the moment.

## Related

- Metrics for this dimension: `framework/metrics.md`
- Theory anchors and verification status: `research/evidence-log.md`
- Full v0.1 text, as published: `archive/v0.1/article.md`. The automation-levels figure reproduced there is IEEE copyright and is deliberately not carried into `framework/`; see `archive/v0.1/figures/README.md`.
