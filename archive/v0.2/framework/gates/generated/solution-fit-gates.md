<!-- GENERATED FILE. Do not edit by hand.
     Source: framework/gates/solution-fit.yaml
     Regenerate: python3 tools/generate.py -->

# Solution Fit: gates

Pass a gate by meeting **3 of 4** criteria. The criterion marked *core* cannot be the one skipped.

Evidence sources: **[A]** artifact inspection, **[S]** survey or questionnaire, **[O]** observation or interview.

## Exploration to Experimentation

*Tests* Whether a candidate AI use case is grounded in a real user need rather than worked backward from available AI capability.

Technology push is the default failure mode the v0.1 text itself names: capability without an attached user pain or gain. Perceived Usefulness (TAM) requires the use case to answer a real question about the person's own workflow.

- **[A]** **(core)** A written artifact from user research (interview notes, a job-to-be-done statement, workshop output) names the specific pain point or job a candidate AI use case addresses, produced before or independent of any AI proof of concept.
- **[A]** At least one candidate use case has been explicitly rejected or deprioritised because it fell outside AI's likely capability range for the task, with the reasoning recorded.
- **[O]** Someone can describe, in an observed conversation, what would have to be true of the user's workflow for the use case to be worth pursuing, not just what the AI can technically do.
- **[S]** People closest to the workflow say they were consulted before the use case was selected, not informed about it afterward.

*Failure signal.* A backlog of AI use cases that map cleanly onto AI capabilities (summarisation, drafting, classification) with no user-research artifact behind any of them. Capability push dressed as demand pull, and it passes a self-report check every time because nobody has to admit they didn't ask.

## Experimentation to Integration

*Tests* Whether pilot feedback actually reshaped the solution, not just produced usage and satisfaction numbers.

v0.1 stresses co-creation and iterative testing that resolves usability challenges. A pilot that ships unchanged despite feedback was not actually testing fit.

- **[A]** **(core)** At least one documented change to the AI solution or workflow was made directly in response to pilot user feedback, with a before-and-after description.
- **[O]** A pilot participant can describe a specific problem they raised and what happened to it: fixed, explained, or explicitly declined.
- **[A]** Pilot participants include people who do the work daily, not only early adopters or the team that built the pilot.
- **[S]** Participants report the pilot changed based on their input, not only that they were asked for input.

*Failure signal.* A pilot that ran cleanly, gathered high satisfaction scores, and shipped unchanged. High Effort Expectancy scores with zero documented product changes usually means the survey measured politeness, not fit.

## Integration to Optimization

*Tests* Whether the fit demonstrated in one team survives being used somewhere else.

Facilitating Conditions (UTAUT) generalise across a team, but the specific tacit setup that made a pilot work often does not travel. This is where the Solution Fit and Knowledge & Context dimensions interact: transferability is whether the context that made a pilot work exists anywhere other than the pilot team.

- **[A]** **(core)** The context, configuration, or setup that made the pilot work (prompts, instructions, integrations, data access) is documented somewhere other than the pilot team's own heads or private files.
- **[O]** A second team, given that documentation and no help from the pilot team, gets working value from the AI solution within one working session.
- **[A]** Usage or outcome data exists for the AI solution across more than one team or workflow, not only the pilot's original context.
- **[S]** Teams outside the original pilot report they had what they needed to adopt the solution, rather than needing informal help from the pilot team.

*Failure signal.* A solution that worked in the pilot and stalls the moment it is handed to a second team, because the fit was actually a fit between the AI and the pilot team's accumulated context, not the workflow itself.

## Optimization to Continuous Evolution

*Tests* Whether user needs are actively re-checked rather than assumed stable.

Untested against practice. No team in the v0.1 worked example is plotted in Continuous Evolution on any dimension, so these criteria are reasoned rather than observed. Treat as provisional.

- **[A]** **(core)** A reassessment of user needs against the current AI solution has happened in the last review cycle, with a record of what was reconfirmed or changed.
- **[A]** At least one AI-supported workflow has been retired, narrowed, or redirected because the underlying user need changed, not only expanded.
- **[S]** Users report being asked about their current needs on a predictable cadence, not only when something breaks.
- **[O]** Someone can describe how a recent AI capability change (new model, new feature) was evaluated against actual user need rather than adopted because it was available.

*Failure signal.* A steady stream of new AI capability adopted as soon as it ships, with no corresponding record of a user need reassessment. Capability-led expansion dressed as continuous evolution.
