# Solution Fit

*Matching AI capabilities to real user needs*

**Status.** Gates published, untested against a real assessment.

This dimension asks whether the AI a team adopts is attached to a real user need, whether that attachment was established before the tool was chosen, and whether it survives contact with people outside the team that made it.

## Why the model needs it

The failure this dimension exists to catch is cheap to commit and expensive to detect, and it looks like a solution that works, is used, and addresses nothing that anyone actually needed. Generative AI makes it more likely, because the capability arrives first and the search for a use case follows along behind it.

Two forces have to be balanced against each other. *Demand pull* is a need that exists whether or not AI can serve it, and *technology push* is a capability looking for somewhere to land. Push is not illegitimate, and new capability genuinely does create options that did not exist before. However, it becomes a defect when the need is reconstructed afterwards in order to justify a tool that has already been chosen, and when that happens the record reads identically to demand pull in every artifact except the dates.

## What it is not

- **Adoption metrics.** Usage tells you that people opened the tool, whereas fit asks whether opening it was worth their time. A well-used solution to a problem nobody had will score well on every usage measure you can think of.
- **Model capability.** Whether AI *can* do the task at all is a question about the model, while whether it can *know enough* to do the task belongs to Knowledge & Context. Conflating the two is probably the most common misdiagnosis in the model, and it usually resolves itself into "we need a better model" when the actual gap is grounding.
- **User satisfaction.** Satisfaction measures the experience of using the thing, and fit measures whether the thing needed to exist in the first place.

## Lenses

**Acceptance.** The Technology Acceptance Model (Davis, 1989) holds that perceived usefulness and perceived ease of use determine intention to use, which predicts actual use. The Unified Theory of Acceptance and Use of Technology (Venkatesh et al., 2003) extends this to four determinants: performance expectancy, effort expectancy, social influence, and facilitating conditions. The property that makes these useful to HAIMM is that all four are perceptions held by the person doing the work, and not properties of the tool itself. However, a team can be wrong about every one of them, which is why the gates are written to test the perception against evidence instead of simply recording it.

**Capability shape.** AI performs unevenly across tasks that look similarly hard from outside, which Mollick (2023) calls the jagged frontier. Moravec (1988) made the older version of the point: what is easy for people is not necessarily easy for machines, and the reverse also holds. For example, a model can outperform anyone you know at drafting a legal summary and then fail at a scheduling question a new joiner would get right. The consequence for fit is that you cannot estimate capability from how difficult the task feels to a person doing it, so it has to be tested on the specific task you care about.

## Patterns it detects

**Capability push.** You find a backlog of use cases that map neatly onto what AI is known to do well, such as summarisation, drafting and classification, with no user-research artifact behind any of them. This passes a self-report check every time, because nobody ever has to admit that they did not ask.

**The polite pilot.** The pilot ran cleanly, scored well and shipped unchanged. High effort-expectancy scores combined with zero documented product changes usually mean the survey was measuring politeness, and a pilot that could not have been contradicted was never really a test.

**Non-transferable fit.** A solution worked in the pilot and then stalls when it is handed to a second team, because the fit was really between the AI and the pilot team's accumulated context and not between the AI and the workflow. This is the point where Solution Fit and Knowledge & Context meet, and it is why the Integration to Optimization gate asks whether that context exists anywhere other than in the pilot team.

**Frontier drift.** Each new model or feature is adopted as it ships, with no corresponding record anywhere of a need being re-checked. What you are looking at is expansion in capability being presented as evolution in fit.

## Stage progression

**Exploration.** Readiness and opportunity are being assessed, and the question on the table is where AI fits into work that already exists. The activity is user research, which means pain points, jobs to be done and workflows all mapped before any proof of concept is built. *Example:* workshops with the people doing the work, surfacing inefficiencies, and recording which ones AI could plausibly address and which it could not.

**Experimentation.** Small pilots test relevance against real use. Co-creation matters more than coverage at this point, because a pilot designed without the people who do the work every day will end up testing the wrong thing. The question to ask is whether feedback can change the solution, or whether it can only be collected from it. *Example:* piloting an AI scheduling assistant with a group that includes daily schedulers, not only volunteers.

**Integration.** The solution is reshaped by what the pilot found and embedded in the workflow, with access, permissions and tooling made available so using it is not an act of initiative. Roles are explicit about what AI contributes and what a person still owns. *Example:* an AI-assisted CRM step reworked after sales feedback showed the summary was written for managers rather than for the next call.

**Optimization.** The solution now runs beyond the team that built it, and the impact claim is measured instead of asserted. What is being tested here is transferability, meaning whether the setup that made the pilot work actually travels. *Example:* a second team reaching working value from documented setup alone, and outcome data existing for more than one workflow.

**Continuous Evolution.** Need is re-checked on a cadence instead of being assumed stable, and the record shows things being narrowed and retired as well as added. *Example:* a quarterly review that retires one AI-supported workflow because the underlying need changed, and records why.

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

Co-creation and iterative testing exist to resolve usability problems before they get embedded, so a pilot that ships unchanged despite receiving feedback was not actually testing fit at all.

- **[A]** **(core)** At least one documented change to the AI solution or workflow was made directly in response to pilot user feedback, with a before-and-after description.
- **[O]** A pilot participant can describe a specific problem they raised and what happened to it: fixed, explained, or explicitly declined.
- **[A]** Pilot participants include people who do the work daily, not only early adopters or the team that built the pilot.
- **[S]** Participants report the pilot changed based on their input, not only that they were asked for input.

*Failure signal.* A pilot that ran cleanly, gathered high satisfaction scores and then shipped unchanged. High effort-expectancy scores combined with zero documented product changes usually mean the survey was measuring politeness and not fit.

### Integration to Optimization

*Tests* Whether the fit demonstrated in one team survives being used somewhere else.

Facilitating conditions, in UTAUT's sense, do generalise across a team, but the specific tacit setup that made a pilot work often does not travel with them. This is where Solution Fit and Knowledge & Context interact, and transferability is the question of whether the context that made a pilot work exists anywhere other than in the pilot team.

- **[A]** **(core)** The context, configuration, or setup that made the pilot work (prompts, instructions, integrations, data access) is documented somewhere other than the pilot team's own heads or private files.
- **[O]** A second team, given that documentation and no help from the pilot team, gets working value from the AI solution within one working session.
- **[A]** Usage or outcome data exists for the AI solution across more than one team or workflow, not only the pilot's original context.
- **[S]** Teams outside the original pilot report they had what they needed to adopt the solution, rather than needing informal help from the pilot team.

*Failure signal.* A solution that worked in the pilot and then stalls the moment it is handed to a second team, because the fit was really between the AI and the pilot team's accumulated context and never between the AI and the workflow itself.

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
