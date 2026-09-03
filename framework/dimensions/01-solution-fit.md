# Solution Fit

*Matching AI capabilities to real user needs*

**Status.** Gates published, untested against a real assessment.

Whether the AI a team adopts is attached to a real user need, whether that attachment was established before the tool was chosen, and whether it survives contact with people outside the team that made it.

## Why the model needs it

The failure this dimension exists to catch is cheap to commit and expensive to detect: a solution that works, is used, and addresses nothing anyone needed. Generative AI makes it likelier, because capability arrives first and the search for a use case follows it.

Two forces have to be balanced. *Demand pull* is a need that exists whether or not AI can serve it. *Technology push* is a capability looking for somewhere to land. Push is not illegitimate, and new capability does create genuinely new options. It becomes a defect when the need is reconstructed afterwards to justify a tool already chosen, which reads identically to demand pull in every artifact except the dates.

## What it is not

- **Adoption metrics.** Usage says people opened the tool. Fit asks whether opening it was worth their time. A well-used solution to a problem nobody had scores well on every usage measure.
- **Model capability.** Whether AI *can* do the task is a question about the model. Whether it can *know enough* to do the task is Knowledge & Context. Conflating them is the most common misdiagnosis in the model, and it usually resolves as "we need a better model" when the actual gap is grounding.
- **User satisfaction.** Satisfaction measures the experience of using the thing. Fit measures whether the thing needed to exist.

## Lenses

**Acceptance.** The Technology Acceptance Model (Davis, 1989) holds that perceived usefulness and perceived ease of use determine intention to use, which predicts actual use. The Unified Theory of Acceptance and Use of Technology (Venkatesh et al., 2003) extends this to four determinants: performance expectancy, effort expectancy, social influence, and facilitating conditions. The useful property for HAIMM is that all four are perceptions held by the person doing the work, not properties of the tool. A team can be wrong about all of them, and the gates are written to test the perception against evidence rather than record it.

**Capability shape.** AI performs unevenly across tasks that look similarly hard from outside, which Mollick (2023) calls the jagged frontier. Moravec (1988) made the older version of the point: what is easy for people is not necessarily easy for machines, and the reverse. The consequence for fit is that capability cannot be estimated from task difficulty as a person experiences it. It has to be tested on the specific task.

## Patterns it detects

**Capability push.** A backlog of use cases that map onto what AI is known to do well, summarisation, drafting, classification, with no user-research artifact behind any of them. Passes a self-report check every time, because nobody has to admit they did not ask.

**The polite pilot.** A pilot that ran cleanly, scored well, and shipped unchanged. High effort-expectancy scores with zero documented product changes usually mean the survey measured politeness. A pilot that could not have been contradicted was not a test.

**Non-transferable fit.** A solution that worked in the pilot and stalls when handed to a second team, because the fit was between the AI and the pilot team's accumulated context, not the workflow. This is where Solution Fit and Knowledge & Context meet, and it is why the Integration to Optimization gate asks whether that context exists anywhere other than the pilot team.

**Frontier drift.** Each new model or feature adopted as it ships, with no corresponding record of a need being re-checked. Expansion in capability presented as evolution in fit.

## Stage progression

**Exploration.** Readiness and opportunity are being assessed, and the question is where AI fits work that already exists. The activity is user research: pain points, jobs to be done, and workflows mapped before any proof of concept. *Example:* workshops with the people doing the work, surfacing inefficiencies, and recording which ones AI could plausibly address and which it could not.

**Experimentation.** Small pilots test relevance against real use. Co-creation matters here more than coverage, because a pilot designed without the people who do the work daily tests the wrong thing. The stage question is whether feedback can change the solution, or only be collected from it. *Example:* piloting an AI scheduling assistant with a group that includes daily schedulers, not only volunteers.

**Integration.** The solution is reshaped by what the pilot found and embedded in the workflow, with access, permissions and tooling made available so using it is not an act of initiative. Roles are explicit about what AI contributes and what a person still owns. *Example:* an AI-assisted CRM step reworked after sales feedback showed the summary was written for managers rather than for the next call.

**Optimization.** The solution runs beyond the team that built it, and the impact claim is measured rather than asserted. What is being tested at this stage is transferability: whether the setup that made the pilot work travels. *Example:* a second team reaching working value from documented setup alone, and outcome data existing for more than one workflow.

**Continuous Evolution.** Need is re-checked on a cadence rather than assumed stable, and the record shows things being narrowed and retired, not only added. *Example:* a quarterly review that retires one AI-supported workflow because the underlying need changed, and records why.

## Gates

Four gates, one per transition between adjacent stages. Pass a gate by meeting **3 of 4** criteria; the criterion marked *core* cannot be the one skipped. A team sits at the highest stage whose entry gate it has passed.

Evidence sources: **[A]** artifact inspection, **[S]** survey or questionnaire, **[O]** observation or interview. Every gate carries at least one [A] or [O] criterion, because a gate passable entirely by self-report will be passed.

The Integration to Optimization gate carries the Solution Fit / Knowledge & Context interaction criterion (transferability): whether the context that made a pilot work exists anywhere other than the pilot team.

### Exploration to Experimentation

*Tests* Whether a candidate AI use case is grounded in a real user need rather than worked backward from available AI capability.

Technology push is the default failure mode: capability without an attached user pain or gain. Perceived Usefulness (TAM) requires the use case to answer a real question about the person's own workflow.

- **[A]** **(core)** A written artifact from user research (interview notes, a job-to-be-done statement, workshop output) names the specific pain point or job a candidate AI use case addresses, produced before or independent of any AI proof of concept.
- **[A]** At least one candidate use case has been explicitly rejected or deprioritised because it fell outside AI's likely capability range for the task, with the reasoning recorded.
- **[O]** Someone can describe, in an observed conversation, what would have to be true of the user's workflow for the use case to be worth pursuing, not just what the AI can technically do.
- **[S]** People closest to the workflow say they were consulted before the use case was selected, not informed about it afterward.

*Failure signal.* A backlog of AI use cases that map cleanly onto AI capabilities (summarisation, drafting, classification) with no user-research artifact behind any of them. Capability push dressed as demand pull, and it passes a self-report check every time because nobody has to admit they didn't ask.

### Experimentation to Integration

*Tests* Whether pilot feedback actually reshaped the solution, not just produced usage and satisfaction numbers.

Co-creation and iterative testing exist to resolve usability problems before they are embedded. A pilot that ships unchanged despite feedback was not actually testing fit.

- **[A]** **(core)** At least one documented change to the AI solution or workflow was made directly in response to pilot user feedback, with a before-and-after description.
- **[O]** A pilot participant can describe a specific problem they raised and what happened to it: fixed, explained, or explicitly declined.
- **[A]** Pilot participants include people who do the work daily, not only early adopters or the team that built the pilot.
- **[S]** Participants report the pilot changed based on their input, not only that they were asked for input.

*Failure signal.* A pilot that ran cleanly, gathered high satisfaction scores, and shipped unchanged. High Effort Expectancy scores with zero documented product changes usually means the survey measured politeness, not fit.

### Integration to Optimization

*Tests* Whether the fit demonstrated in one team survives being used somewhere else.

Facilitating Conditions (UTAUT) generalise across a team, but the specific tacit setup that made a pilot work often does not travel. This is where the Solution Fit and Knowledge & Context dimensions interact: transferability is whether the context that made a pilot work exists anywhere other than the pilot team.

- **[A]** **(core)** The context, configuration, or setup that made the pilot work (prompts, instructions, integrations, data access) is documented somewhere other than the pilot team's own heads or private files.
- **[O]** A second team, given that documentation and no help from the pilot team, gets working value from the AI solution within one working session.
- **[A]** Usage or outcome data exists for the AI solution across more than one team or workflow, not only the pilot's original context.
- **[S]** Teams outside the original pilot report they had what they needed to adopt the solution, rather than needing informal help from the pilot team.

*Failure signal.* A solution that worked in the pilot and stalls the moment it is handed to a second team, because the fit was actually a fit between the AI and the pilot team's accumulated context, not the workflow itself.

### Optimization to Continuous Evolution

*Tests* Whether user needs are actively re-checked rather than assumed stable.

Untested against practice. No assessment has placed a team at Continuous Evolution on any dimension, so these criteria are reasoned rather than observed. Treat as provisional.

- **[A]** **(core)** A reassessment of user needs against the current AI solution has happened in the last review cycle, with a record of what was reconfirmed or changed.
- **[A]** At least one AI-supported workflow has been retired, narrowed, or redirected because the underlying user need changed, not only expanded.
- **[S]** Users report being asked about their current needs on a predictable cadence, not only when something breaks.
- **[O]** Someone can describe how a recent AI capability change (new model, new feature) was evaluated against actual user need rather than adopted because it was available.

*Failure signal.* A steady stream of new AI capability adopted as soon as it ships, with no corresponding record of a user need reassessment. Capability-led expansion dressed as continuous evolution.

## Related

- This dimension's row in the combined matrix: `framework/matrix.md`
- The stages themselves, read across all five dimensions: `framework/stages/`
- Metrics for this dimension: `framework/metrics.md`
- Theory anchors and verification status: `research/evidence-log.md`
- Source article: `archive/v0.1/article.md`
