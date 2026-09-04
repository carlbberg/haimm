# Solution Fit

*Matching AI capabilities to real user needs*

**Status.** Gates published, untested against a real assessment.

This dimension asks whether the AI a team adopts is attached to a real user need, whether that attachment was established before the tool was chosen, and whether it survives contact with people outside the team that made it.

## Why the model needs it

The failure this dimension catches is cheap to commit and expensive to spot, because it looks like a solution that works, that people use daily, and that addresses nothing anyone ever needed. Generative AI makes it likelier still, since the capability arrives first and the search for a use case trails along behind it.

You are balancing two forces. *Demand pull* is a need that exists whether or not AI can serve it, and *technology push* is a capability looking for somewhere to land. Push is not illegitimate. New capability genuinely does open options that did not exist before. It turns into a defect only when a team reconstructs the need afterwards to justify a tool it already chose, and at that point the record reads exactly like demand pull in every artifact except the dates.

## What it is not

- **Adoption metrics.** Usage tells you that people opened the tool, whereas fit asks whether opening it was worth their time. A well-used solution to a problem nobody had will score well on every usage measure you can think of.
- **Model capability.** Whether AI *can* do the task at all is a question about the model, while whether it can *know enough* to do the task belongs to Knowledge & Context. Conflating the two is probably the most common misdiagnosis in the model, and it usually resolves itself into "we need a better model" when the actual gap is grounding.
- **User satisfaction.** Satisfaction measures the experience of using the thing, and fit measures whether the thing needed to exist in the first place.

## Lenses

**Acceptance.** The Technology Acceptance Model (Davis, 1989) holds that perceived usefulness and perceived ease of use determine intention to use, which predicts actual use. The Unified Theory of Acceptance and Use of Technology (Venkatesh et al., 2003) extends this to four determinants: performance expectancy, effort expectancy, social influence, and facilitating conditions. The property that makes these useful to HAIMM is that all four are perceptions held by the person doing the work, and not properties of the tool itself. However, a team can be wrong about every one of them. The gates therefore test the perception against evidence instead of simply recording it.

**Capability shape.** AI performs unevenly across tasks that look similarly hard from outside, which Mollick (2023) calls the jagged frontier. Moravec (1988) made the older version of the point: what is easy for people is not necessarily easy for machines, and the reverse also holds. For example, a model can outperform anyone you know at drafting a legal summary and then fail at a scheduling question a new joiner would get right. The consequence for fit is that you cannot estimate capability from how hard a task feels to the person doing it. Test it on the task you care about.

## Patterns it detects

**Capability push.** You find a backlog of use cases mapping neatly onto what AI does well, such as summarisation, drafting and classification, with no user-research artifact behind any of them. It passes a self-report check every time. Nobody ever has to admit they did not ask.

**The polite pilot.** The pilot ran cleanly, scored well and shipped unchanged. High effort-expectancy scores paired with zero documented product changes usually mean the survey measured politeness rather than fit, and a pilot that could not have contradicted anyone never really tested anything.

**Non-transferable fit.** A solution worked in the pilot and stalls the moment a second team picks it up, because the fit sat between the AI and the pilot team's accumulated context and never between the AI and the workflow. Solution Fit and Knowledge & Context meet here. That is why the Integration to Optimization gate asks whether that context exists anywhere outside the pilot team.

**Frontier drift.** The team adopts each new model or feature as it ships, and nothing anywhere in the record shows a single person going back to re-check a need. Capability expanded. Fit did not, and the two get reported as though they were the same thing.

## Stage progression

**Exploration.** The team is weighing readiness and opportunity, and the question on the table is where AI fits work that already exists. The activity is user research: mapping pain points, jobs to be done and workflows before anyone builds a proof of concept. *Example:* workshops with the people doing the work, surfacing inefficiencies, and recording which ones AI could plausibly address and which it could not.

**Experimentation.** Small pilots test relevance against real use. Co-creation matters more than coverage here, because a pilot designed without the people who do the work daily will test the wrong thing. Ask one question: can feedback change the solution, or can the team only collect it? *Example:* piloting an AI scheduling assistant with a group that includes daily schedulers, not only volunteers.

**Integration.** The team reshapes the solution around what the pilot found and embeds it in the workflow, arranging access, permissions and tooling so that using it stops being an act of initiative. Roles say explicitly what AI contributes and what a person still owns. *Example:* an AI-assisted CRM step reworked after sales feedback showed the summary was written for managers rather than for the next call.

**Optimization.** The solution now runs beyond the team that built it, and somebody measures the impact claim instead of asserting it, which is a harder thing to produce than it sounds. Transferability is what this stage tests: does the setup that made the pilot work actually travel? *Example:* a second team reaching working value from documented setup alone, and outcome data existing for more than one workflow.

**Continuous Evolution.** The team re-checks need on a cadence instead of assuming it stable, and the record shows things narrowed and retired as well as added. *Example:* a quarterly review that retires one AI-supported workflow because the underlying need changed, and records why.

## Gates

There are four gates, one for each transition between adjacent stages. You pass a gate by meeting **3 of the 4** criteria, and the criterion marked *core* cannot be the one you skip. A team sits at the highest stage whose entry gate it has passed.

The evidence sources are **[A]** for artifact inspection, **[S]** for a survey or questionnaire, and **[O]** for observation or interview. Every gate carries at least one [A] or [O] criterion, because a gate that can be passed entirely by self-report will be passed.

The Integration to Optimization gate carries the Solution Fit / Knowledge & Context interaction criterion (transferability): whether the context that made a pilot work exists anywhere other than the pilot team.

### Exploration to Experimentation

*Tests* Whether a candidate AI use case is grounded in a real user need rather than worked backward from available AI capability.

Technology push is the default failure mode here, meaning capability without any user pain or gain attached to it. Perceived usefulness, in TAM's sense, requires the use case to answer a real question about the person's own workflow.

- **[A]** **(core)** A written artifact from user research (interview notes, a job-to-be-done statement, workshop output) names the specific pain point or job a candidate AI use case addresses, produced before or independent of any AI proof of concept.
- **[A]** At least one candidate use case has been explicitly rejected or deprioritised because it fell outside AI's likely capability range for the task, with the reasoning recorded.
- **[O]** Someone can describe, in an observed conversation, what would have to be true of the user's workflow for the use case to be worth pursuing, not just what the AI can technically do.
- **[S]** People closest to the workflow say they were consulted before the use case was selected, not informed about it afterward.

*Failure signal.* A backlog of AI use cases that map cleanly onto known AI capabilities such as summarisation, drafting and classification, with no user-research artifact behind any of them. This is capability push dressed as demand pull, and it passes a self-report check every time because nobody has to admit that they did not ask.

### Experimentation to Integration

*Tests* Whether pilot feedback actually reshaped the solution, not just produced usage and satisfaction numbers.

Co-creation and iterative testing exist to catch usability problems before they harden into the workflow. A pilot that ships unchanged despite the feedback it collected was not testing fit.

- **[A]** **(core)** At least one documented change to the AI solution or workflow was made directly in response to pilot user feedback, with a before-and-after description.
- **[O]** A pilot participant can describe a specific problem they raised and what happened to it: fixed, explained, or explicitly declined.
- **[A]** Pilot participants include people who do the work daily, not only early adopters or the team that built the pilot.
- **[S]** Participants report the pilot changed based on their input, not only that they were asked for input.

*Failure signal.* A pilot that ran cleanly, gathered high satisfaction scores and then shipped unchanged. High effort-expectancy scores combined with zero documented product changes usually mean the survey was measuring politeness and not fit.

### Integration to Optimization

*Tests* Whether the fit demonstrated in one team survives being used somewhere else.

Facilitating conditions, in UTAUT's sense, do generalise across a team, but the specific tacit setup behind a working pilot often refuses to travel with them. Solution Fit and Knowledge & Context interact here, and transferability asks whether the context behind that pilot exists anywhere outside the pilot team.

- **[A]** **(core)** The context, configuration, or setup that made the pilot work (prompts, instructions, integrations, data access) is documented somewhere other than the pilot team's own heads or private files.
- **[O]** A second team, given that documentation and no help from the pilot team, gets working value from the AI solution within one working session.
- **[A]** Usage or outcome data exists for the AI solution across more than one team or workflow, not only the pilot's original context.
- **[S]** Teams outside the original pilot report they had what they needed to adopt the solution, rather than needing informal help from the pilot team.

*Failure signal.* A solution that worked in the pilot and stalls the moment a second team picks it up, because the fit sat between the AI and the pilot team's accumulated context and never between the AI and the workflow itself.

### Optimization to Continuous Evolution

*Tests* Whether user needs are actively re-checked, or simply assumed to be stable.

This gate is untested against practice. No assessment has yet placed a team at Continuous Evolution on any dimension, so these criteria are reasoned from the stages before them, not observed, and you should treat them as provisional.

- **[A]** **(core)** A reassessment of user needs against the current AI solution has happened in the last review cycle, with a record of what was reconfirmed or changed.
- **[A]** At least one AI-supported workflow has been retired, narrowed, or redirected because the underlying user need changed, not only expanded.
- **[S]** Users report being asked about their current needs on a predictable cadence, not only when something breaks.
- **[O]** Someone can describe how a recent AI capability change (new model, new feature) was evaluated against actual user need rather than adopted because it was available.

*Failure signal.* A steady stream of new AI capability adopted as soon as it ships, with no corresponding record of any user-need reassessment. This is capability-led expansion dressed up as continuous evolution.

## Related

- This dimension's row in the combined matrix: `framework/matrix.md`
- The stages themselves, read across all five dimensions: `framework/stages/`
- Metrics for this dimension: `framework/metrics.md`
- Theory anchors and verification status: `research/evidence-log.md`
- Source article: `archive/v0.1/article.md`
