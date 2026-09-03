# Ethics

*Safeguarding responsible AI practices*

**Status: revised for v0.2.** Gates published, untested against a real assessment.

Whether the team's ethical commitments are specific enough to stop something, whether they were applied before rather than after the decision, and whether they keep operating once a system is in production.

## Why the model needs it

Every organisation adopting AI produces a statement about fairness, transparency and accountability. Almost none of them can name a use case the statement blocked. The gap between the two is what this dimension measures.

It sits in a human-centric model rather than a technical one because the failures it catches are organisational: who was allowed to decide, whether the decision was recorded, whether anyone can still explain it a year later. Those are questions about practice, not about models.

## What it is not

- **A responsible AI maturity model.** Microsoft's Responsible AI Maturity Model, the EU AI Act's risk tiering, and IBM's foundation model risk taxonomy all go deeper on this ground than HAIMM does or should. This dimension asks whether a team's ethical practice functions; it does not attempt to specify what that practice should contain. Where the two meet, use the dedicated framework for content and HAIMM for placement.
- **Legal compliance.** Compliance is a floor and a different assessment. A team can be compliant and unable to explain a single decision its AI influenced.
- **Model safety.** Evaluation, red-teaming and guardrail engineering are properties of a system. This dimension is about whether an organisation uses them, acts on what they return, and keeps doing so.
- **Sufficiency of context.** Ethics owns what context is *permissible* to expose. Whether context is sufficient, current and shared belongs to Knowledge & Context. The two meet at provenance: being able to say what grounded an AI-influenced decision is an ethical requirement and a context capability at the same time.

## Lens

The other four dimensions borrow a developmental model: TAM and UTAUT, Tuckman, Satir, and for Knowledge & Context a composite. This one does not, and the absence is deliberate rather than an omission waiting to be filled. There is no widely accepted developmental theory of how ethical practice matures in a team, and importing one would be decoration.

What it borrows instead is external content: the EU AI Act (2024) for risk categories, IBM (2024) for foundation model risks, and Microsoft's Responsible AI Maturity Model (2023) for practice areas. The progression below is not a psychological arc. It is a sequence of increasingly demanding tests of the same question: can this guardrail stop something, and is it still operating?

## Patterns it detects

**Unfalsifiable principles.** A values statement naming fairness, transparency and accountability, with no example of a use case it would block. Adopted language, unfalsifiable by construction, and it passes any check that asks whether ethical principles exist.

**The rubber stamp.** An ethics checklist that exists, is always completed identically, and has never once caused a change. It passes an artifact audit and fails the gate on its own terms, which is why the Experimentation to Integration gate asks for a pilot that changed as a result of one.

**Stale governance.** Documentation accurate at launch and untouched since, describing a system that has changed underneath it. Existence checks pass; currency checks do not.

**Stability mistaken for maturity.** A policy last substantively edited when the systems it governs were half their current number, now cited as evidence of a settled practice. Continuous Evolution requires revision in response to something learned, not the absence of complaints.

## Stage progression

**Exploration.** Risks specific to the team's own use cases are identified, and first guardrails are drafted. The test that separates this from a values statement is whether a guardrail names an action it prohibits or restricts. *Example:* a workshop that produces "no AI-drafted content in externally facing legal documents without review" rather than "we use AI responsibly".

**Experimentation.** Guardrails are applied to real pilots and revised by what that exposes. Ethics review happens before rollout rather than as a retrospective justification, and provenance becomes testable: for a given AI-influenced decision, someone can say what grounded it. *Example:* a pilot narrowed after review found it would place an unreviewed model output in front of a customer.

**Integration.** Governance and transparency mechanisms are embedded in how systems operate, with named owners and documentation that is maintained rather than produced once. The test is whether someone outside the building team can use that documentation to explain how a decision affecting people gets made. *Example:* a current, dated record for each AI-driven decision system, with a named owner for its ethical compliance.

**Optimization.** Monitoring runs continuously rather than at review points, and it has caught something. Issues are addressed as they surface rather than at the next audit. *Example:* a monitoring mechanism with a recorded instance of it flagging a case that was then handled.

**Continuous Evolution.** Ethical practice changes in response to new use cases, incidents and external developments, and the team can describe how it would learn about an emerging risk before it becomes an incident. *Example:* a guardrail revised in the last cycle because a new use case fell outside what the existing wording anticipated.

## Matrix row

| Stage | Cell |
|---|---|
| Exploration | Initial ethical considerations and potential risks outlined via draft guardrails. |
| Experimentation | Ethical principles and guardrails tested and refined during pilot implementations. |
| Integration | Transparent governance mechanisms integrated into AI operations. |
| Optimization | Proactive monitoring and mitigation of ethical issues in real-time. |
| Continuous Evolution | Evolving ethical frameworks to address new challenges and emerging use cases. |

## Gates

Four gates, one per transition between adjacent stages. Pass a gate by meeting **3 of 4** criteria; the criterion marked *core* cannot be the one skipped. A team sits at the highest stage whose entry gate it has passed.

Evidence sources: **[A]** artifact inspection, **[S]** survey or questionnaire, **[O]** observation or interview. Every gate carries at least one [A] or [O] criterion, because a gate passable entirely by self-report will be passed.

The Experimentation to Integration gate carries the Ethics / Knowledge & Context interaction criterion (provenance): whether the team can say what grounded an AI-influenced decision.

### Exploration to Experimentation

*Tests* Whether guardrails are specific enough to constrain a real decision, not generic principles.

v0.1's Exploration activity is identifying potential risks and drafting guardrails. The falsifiability test is whether a guardrail can actually stop something, versus restating a value nobody would disagree with.

- **[A]** **(core)** At least one documented guardrail names a specific action or use case it prohibits or restricts (for example, "no AI-drafted content in externally-facing legal documents without review"), not a general principle.
- **[A]** A risk assessment or workshop output identifies risks specific to the team's own use cases, not only a restated copy of an external framework's generic risk list.
- **[O]** Someone can describe a use case that was proposed and then rejected or modified on ethical grounds.
- **[S]** People report they know where to raise an ethical concern about an AI use case.

*Failure signal.* A values statement referencing fairness, transparency, and accountability with no example of a use case it would actually block. Language adopted from an external framework, unfalsifiable by construction.

### Experimentation to Integration

*Tests* Whether ethical evaluation actually happened during pilots, and whether the grounding of AI-influenced decisions can be traced.

v0.1's Experimentation activity is testing solutions against ethical standards. This is where Ethics and Knowledge & Context interact: provenance is whether the team can say what grounded an AI-influenced decision, and it has to be testable while a use case is still a pilot, before it is embedded at scale.

- **[A]** **(core)** At least one pilot has a recorded ethics evaluation (a completed checklist, review, or documented discussion) that predates its rollout, not a retrospective justification.
- **[O]** For a specific AI-influenced decision made during a pilot, someone can say what information or context grounded it.
- **[A]** At least one pilot's design was changed as a result of an ethics evaluation, with the change recorded.
- **[S]** People involved in pilots report ethical review as a normal step in shipping, not an occasional add-on.

*Failure signal.* A pilot ethics checklist that exists, is always filled in identically, and has never once caused a change. A rubber stamp passes an artifact audit and fails the gate on its own terms.

### Integration to Optimization

*Tests* Whether transparent governance mechanisms operate continuously in production, not only at launch.

v0.1's Integration activity is embedding governance mechanisms and transparency protocols. The test is whether they keep operating, rather than being satisfied once at go-live.

- **[A]** **(core)** Documentation for at least one AI-driven decision-making system is current, not only produced at initial launch, with a recorded last-review date inside an agreed window.
- **[A]** A named owner is responsible for the ethical compliance of at least one AI system in production.
- **[O]** Someone outside the team that built a system can describe, using its documentation, how it makes a decision that affects people.
- **[S]** People affected by or using an AI-driven system report they know how to ask how a decision was made.

*Failure signal.* Governance documentation that was accurate at launch and has not been touched since, describing a system that has changed underneath it. Stale governance passes an existence check and fails a currency one.

### Optimization to Continuous Evolution

*Tests* Whether ethical practice is proactively evolving, rather than statically compliant.

Untested against practice. No team in the v0.1 worked example is plotted in Continuous Evolution on any dimension, so these criteria are reasoned rather than observed. Treat as provisional.

- **[A]** **(core)** At least one ethical guideline or guardrail has been revised in the last review cycle in response to a new use case, incident, or external change, not a scheduled reformatting.
- **[A]** A metric or monitoring mechanism tracks ethical compliance continuously, not only at review points, with a recorded instance of it catching something.
- **[O]** Someone can describe how the team would learn about an emerging ethical risk before it becomes an incident, not only after.
- **[S]** People report ethical practice has visibly changed in response to something the team learned, not stayed fixed since integration.

*Failure signal.* An ethics policy last substantively edited at the Integration gate, now covering use cases invented well after. Stability mistaken for maturity.

## Related

- Metrics for this dimension: `framework/metrics.md`
- Theory anchors and verification status: `research/evidence-log.md`
- Full v0.1 text, as published: `archive/v0.1/article.md`
