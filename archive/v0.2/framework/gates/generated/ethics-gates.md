<!-- GENERATED FILE. Do not edit by hand.
     Source: framework/gates/ethics.yaml
     Regenerate: python3 tools/generate.py -->

# Ethics: gates

Pass a gate by meeting **3 of 4** criteria. The criterion marked *core* cannot be the one skipped.

Evidence sources: **[A]** artifact inspection, **[S]** survey or questionnaire, **[O]** observation or interview.

## Exploration to Experimentation

*Tests* Whether guardrails are specific enough to constrain a real decision, not generic principles.

v0.1's Exploration activity is identifying potential risks and drafting guardrails. The falsifiability test is whether a guardrail can actually stop something, versus restating a value nobody would disagree with.

- **[A]** **(core)** At least one documented guardrail names a specific action or use case it prohibits or restricts (for example, "no AI-drafted content in externally-facing legal documents without review"), not a general principle.
- **[A]** A risk assessment or workshop output identifies risks specific to the team's own use cases, not only a restated copy of an external framework's generic risk list.
- **[O]** Someone can describe a use case that was proposed and then rejected or modified on ethical grounds.
- **[S]** People report they know where to raise an ethical concern about an AI use case.

*Failure signal.* A values statement referencing fairness, transparency, and accountability with no example of a use case it would actually block. Language adopted from an external framework, unfalsifiable by construction.

## Experimentation to Integration

*Tests* Whether ethical evaluation actually happened during pilots, and whether the grounding of AI-influenced decisions can be traced.

v0.1's Experimentation activity is testing solutions against ethical standards. This is where Ethics and Knowledge & Context interact: provenance is whether the team can say what grounded an AI-influenced decision, and it has to be testable while a use case is still a pilot, before it is embedded at scale.

- **[A]** **(core)** At least one pilot has a recorded ethics evaluation (a completed checklist, review, or documented discussion) that predates its rollout, not a retrospective justification.
- **[O]** For a specific AI-influenced decision made during a pilot, someone can say what information or context grounded it.
- **[A]** At least one pilot's design was changed as a result of an ethics evaluation, with the change recorded.
- **[S]** People involved in pilots report ethical review as a normal step in shipping, not an occasional add-on.

*Failure signal.* A pilot ethics checklist that exists, is always filled in identically, and has never once caused a change. A rubber stamp passes an artifact audit and fails the gate on its own terms.

## Integration to Optimization

*Tests* Whether transparent governance mechanisms operate continuously in production, not only at launch.

v0.1's Integration activity is embedding governance mechanisms and transparency protocols. The test is whether they keep operating, rather than being satisfied once at go-live.

- **[A]** **(core)** Documentation for at least one AI-driven decision-making system is current, not only produced at initial launch, with a recorded last-review date inside an agreed window.
- **[A]** A named owner is responsible for the ethical compliance of at least one AI system in production.
- **[O]** Someone outside the team that built a system can describe, using its documentation, how it makes a decision that affects people.
- **[S]** People affected by or using an AI-driven system report they know how to ask how a decision was made.

*Failure signal.* Governance documentation that was accurate at launch and has not been touched since, describing a system that has changed underneath it. Stale governance passes an existence check and fails a currency one.

## Optimization to Continuous Evolution

*Tests* Whether ethical practice is proactively evolving, rather than statically compliant.

Untested against practice. No team in the v0.1 worked example is plotted in Continuous Evolution on any dimension, so these criteria are reasoned rather than observed. Treat as provisional.

- **[A]** **(core)** At least one ethical guideline or guardrail has been revised in the last review cycle in response to a new use case, incident, or external change, not a scheduled reformatting.
- **[A]** A metric or monitoring mechanism tracks ethical compliance continuously, not only at review points, with a recorded instance of it catching something.
- **[O]** Someone can describe how the team would learn about an emerging ethical risk before it becomes an incident, not only after.
- **[S]** People report ethical practice has visibly changed in response to something the team learned, not stayed fixed since integration.

*Failure signal.* An ethics policy last substantively edited at the Integration gate, now covering use cases invented well after. Stability mistaken for maturity.
