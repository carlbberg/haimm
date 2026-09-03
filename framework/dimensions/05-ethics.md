# Ethics

*Safeguarding responsible AI practices*

**Status.** Gates published, untested against a real assessment.

This dimension asks whether the team's ethical commitments are specific enough to stop something, whether they were applied before the decision instead of after it, and whether they keep operating once a system is in production.

## Why the model needs it

Every organisation adopting AI produces a statement about fairness, transparency and accountability. However, almost none of them can name a single use case that the statement actually blocked. The gap between those two things is what this dimension sets out to measure.

It sits inside a human-centric model instead of a technical one because the failures it catches are organisational ones: who was allowed to decide, whether the decision was recorded anywhere, and whether anyone can still explain it a year later. Those are questions about practice, and they are not questions about models.

## What it is not

- **A responsible AI maturity model.** Microsoft's Responsible AI Maturity Model, the EU AI Act's risk tiering and IBM's foundation model risk taxonomy all go considerably deeper on this ground than HAIMM does or should. This dimension asks whether a team's ethical practice functions, and it makes no attempt to specify what that practice ought to contain. Where the two meet, use the dedicated framework for the content and HAIMM for the placement.
- **Legal compliance.** Compliance is a floor, and it is a different assessment altogether. A team can be entirely compliant and still unable to explain a single decision that its AI influenced.
- **Model safety.** Evaluation, red-teaming and guardrail engineering are properties of a system. This dimension is about whether an organisation uses them, acts on what they return, and carries on doing both.
- **Sufficiency of context.** Ethics owns the question of what context is *permissible* to expose, and whether that context is sufficient, current and shared belongs to Knowledge & Context. The two meet at provenance, because being able to say what grounded an AI-influenced decision is an ethical requirement and a context capability at the same time.

## Lens

The other four dimensions each borrow a developmental model, whether that is TAM and UTAUT, Tuckman, Satir, or the composite that Knowledge & Context uses. This one does not, and the absence is deliberate, not an omission waiting to be filled in. There is no widely accepted developmental theory of how ethical practice matures inside a team, and importing one anyway would be decoration.

What it borrows instead is external content, namely the EU AI Act (2024) for risk categories, IBM (2024) for foundation model risks, and Microsoft's Responsible AI Maturity Model (2023) for practice areas. The progression below is not a psychological arc, and it is better read as a sequence of increasingly demanding tests of one question: can this guardrail stop something, and is it still operating?

## Patterns it detects

**Unfalsifiable principles.** A values statement names fairness, transparency and accountability, and offers no example of a use case it would block. This is adopted language that is unfalsifiable by construction, and it passes any check that only asks whether ethical principles exist.

**The rubber stamp.** An ethics checklist exists, it is always completed identically, and it has never once caused a change. It passes an artifact audit and fails the gate on its own terms, which is why the Experimentation to Integration gate asks for a pilot that changed as a result of one.

**Stale governance.** Documentation that was accurate at launch and untouched ever since, describing a system that has changed underneath it. It will pass an existence check and it will not pass a currency one.

**Stability mistaken for maturity.** A policy was last substantively edited when the systems it governs were half their current number, and it now gets cited as evidence of a settled practice. Continuous Evolution requires revision in response to something the team learned, and the absence of complaints is not the same thing.

## Stage progression

**Exploration.** Risks that are specific to the team's own use cases are identified, and the first guardrails are drafted. The test that separates this from a values statement is whether a guardrail names an action that it prohibits or restricts. *Example:* a workshop that produces "no AI-drafted content in externally facing legal documents without review" rather than "we use AI responsibly".

**Experimentation.** Guardrails are applied to real pilots and then revised in light of what that exposes. Ethics review happens before rollout instead of arriving afterwards as a retrospective justification, and provenance becomes testable, in the sense that for a given AI-influenced decision somebody can say what grounded it. *Example:* a pilot narrowed after review found it would place an unreviewed model output in front of a customer.

**Integration.** Governance and transparency mechanisms are embedded in how the systems operate, with named owners and documentation that is maintained instead of produced once and abandoned. The test is whether somebody outside the team that built the system can use that documentation to explain how a decision affecting people gets made. *Example:* a current, dated record for each AI-driven decision system, with a named owner for its ethical compliance.

**Optimization.** Monitoring runs continuously instead of only at review points, and it has caught something. Issues are addressed as they surface, and not left until the next audit. *Example:* a monitoring mechanism with a recorded instance of it flagging a case that was then handled.

**Continuous Evolution.** Ethical practice changes in response to new use cases, incidents and external developments, and the team can describe how it would learn about an emerging risk before that risk becomes an incident. *Example:* a guardrail revised in the last cycle because a new use case fell outside what the existing wording anticipated.

## Gates

There are four gates, one for each transition between adjacent stages. You pass a gate by meeting **3 of the 4** criteria, and the criterion marked *core* cannot be the one you skip. A team sits at the highest stage whose entry gate it has passed.

The evidence sources are **[A]** for artifact inspection, **[S]** for a survey or questionnaire, and **[O]** for observation or interview. Every gate carries at least one [A] or [O] criterion, because a gate that can be passed entirely by self-report will be passed.

The Experimentation to Integration gate carries the Ethics / Knowledge & Context interaction criterion (provenance): whether the team can say what grounded an AI-influenced decision.

### Exploration to Experimentation

*Tests* Whether guardrails are specific enough to constrain a real decision, not generic principles.

The Exploration activity here is identifying potential risks and drafting guardrails. The falsifiability test is whether a guardrail can actually stop something, as opposed to restating a value that nobody would disagree with in the first place.

- **[A]** **(core)** At least one documented guardrail names a specific action or use case it prohibits or restricts (for example, "no AI-drafted content in externally-facing legal documents without review"), not a general principle.
- **[A]** A risk assessment or workshop output identifies risks specific to the team's own use cases, not only a restated copy of an external framework's generic risk list.
- **[O]** Someone can describe a use case that was proposed and then rejected or modified on ethical grounds.
- **[S]** People report they know where to raise an ethical concern about an AI use case.

*Failure signal.* A values statement referencing fairness, transparency and accountability, with no example of a use case that it would actually block. This is language adopted from an external framework, and it is unfalsifiable by construction.

### Experimentation to Integration

*Tests* Whether ethical evaluation actually happened during pilots, and whether the grounding of AI-influenced decisions can be traced.

The Experimentation activity here is testing solutions against ethical standards. It is also where Ethics and Knowledge & Context interact, since provenance asks whether the team can say what grounded an AI-influenced decision, and that has to be testable while a use case is still a pilot and before it gets embedded at scale.

- **[A]** **(core)** At least one pilot has a recorded ethics evaluation (a completed checklist, review, or documented discussion) that predates its rollout, not a retrospective justification.
- **[O]** For a specific AI-influenced decision made during a pilot, someone can say what information or context grounded it.
- **[A]** At least one pilot's design was changed as a result of an ethics evaluation, with the change recorded.
- **[S]** People involved in pilots report ethical review as a normal step in shipping, not an occasional add-on.

*Failure signal.* A pilot ethics checklist that exists, is always filled in identically and has never once caused a change. A rubber stamp will pass an artifact audit and fail this gate on its own terms.

### Integration to Optimization

*Tests* Whether transparent governance mechanisms operate continuously in production, not only at launch.

The Integration activity here is embedding governance mechanisms and transparency protocols. The test is whether those mechanisms keep operating, instead of being satisfied once at go-live and then forgotten.

- **[A]** **(core)** Documentation for at least one AI-driven decision-making system is current, not only produced at initial launch, with a recorded last-review date inside an agreed window.
- **[A]** A named owner is responsible for the ethical compliance of at least one AI system in production.
- **[O]** Someone outside the team that built a system can describe, using its documentation, how it makes a decision that affects people.
- **[S]** People affected by or using an AI-driven system report they know how to ask how a decision was made.

*Failure signal.* Governance documentation that was accurate at launch and has not been touched since, describing a system that has changed underneath it. Stale governance will pass an existence check and fail a currency one.

### Optimization to Continuous Evolution

*Tests* Whether ethical practice is actively evolving, or merely statically compliant.

This gate is untested against practice. No assessment has yet placed a team at Continuous Evolution on any dimension, so these criteria are reasoned from the stages before them, not observed, and you should treat them as provisional.

- **[A]** **(core)** At least one ethical guideline or guardrail has been revised in the last review cycle in response to a new use case, incident, or external change, not a scheduled reformatting.
- **[A]** A metric or monitoring mechanism tracks ethical compliance continuously, not only at review points, with a recorded instance of it catching something.
- **[O]** Someone can describe how the team would learn about an emerging ethical risk before it becomes an incident, not only after.
- **[S]** People report ethical practice has visibly changed in response to something the team learned, not stayed fixed since integration.

*Failure signal.* An ethics policy that was last substantively edited at the Integration gate and now covers use cases invented well after it was written. This is stability being mistaken for maturity.

## Related

- This dimension's row in the combined matrix: `framework/matrix.md`
- The stages themselves, read across all five dimensions: `framework/stages/`
- Metrics for this dimension: `framework/metrics.md`
- Theory anchors and verification status: `research/evidence-log.md`
- Source article: `archive/v0.1/article.md`
