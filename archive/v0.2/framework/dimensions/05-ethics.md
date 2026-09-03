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

Source: `framework/gates/ethics.yaml`. Rendered: `framework/gates/generated/ethics-gates.md`. Instruments: `playbook/instruments/`.

The Experimentation to Integration gate carries the Ethics / Knowledge & Context interaction criterion (provenance): whether the team can say what grounded an AI-influenced decision.

## Related

- Metrics for this dimension: `framework/metrics.md`
- Theory anchors and verification status: `research/evidence-log.md`
- Full v0.1 text, as published: `archive/v0.1/article.md`
