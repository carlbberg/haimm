# People

*Supporting cultural and role shifts*

**Status: revised for v0.2.** Gates published, untested against a real assessment.

Whether the people whose work changes have a say in how it changes, and whether the capability that results is distributed or concentrated in a few individuals.

## Why the model needs it

AI adoption is a change to what people do all day and, for some of them, to what they are for. That is an emotional and political transition as much as a technical one, and it proceeds on its own timeline regardless of how well the tooling works.

The dimension exists because the other four can all look healthy while this one fails. A well-fitted solution, cleanly integrated, with sound governance, adopted by three enthusiasts and quietly ignored by everyone else, passes every test except this one.

## What it is not

- **Training completion.** Attendance records show exposure. This dimension asks whether capability spread, which is a different measurement and usually a worse-looking one.
- **Sentiment.** Enthusiasm is not maturity and scepticism is not immaturity. A team that voiced specific concerns and had them addressed is further along than one that was uniformly positive and asked nothing.
- **Individual skill.** One person who is excellent with AI is an asset and not a stage. Where capability concentrates in the people who built their own scaffolding, this dimension is where it shows, and the Integration to Optimization gate is written to find it.

## Lens

Satir's change model (Satir et al., 1991) describes five phases a person or group passes through during a significant change: late status quo, resistance, chaos, integration, and new status quo. Its useful property is that performance drops before it rises, and that the drop is expected rather than evidence the change was wrong. A team that has not experienced chaos has usually not changed anything yet.

One terminology collision is worth naming, because it caused confusion in v0.1. Satir's phases and HAIMM's stages both contain the word *integration*, and they do not line up. Satir's chaos falls at HAIMM's Integration stage; Satir's integration falls at HAIMM's Optimization. Where the two are used together below, the Satir phase is named in brackets.

## Patterns it detects

**Silence read as buy-in.** A well-attended kickoff with no record of a single concern raised. In Satir's terms that is a late status quo holding, not agreement, and it predicts resistance surfacing later and less usefully.

**Resistance acknowledged, not addressed.** A pilot that shipped on schedule with resistance noted on a slide and no visible response to it. Acknowledging resistance and acting on it produce identical documentation and different outcomes.

**Concentrated capability.** One or two people who are visibly excellent at the new workflow, with everyone else routing work through them. Reads as team integration on a satisfaction survey and is a single point of failure. This is where People and Knowledge & Context meet: capability concentrates where personal context scaffolding was built during the unsettled period and never shared.

**The one-time training.** A single well-attended session, cited whenever the topic comes up. One event is not a culture, and it is exactly the distinction the Continuous Evolution gate cannot be passed without.

## Stage progression

**Exploration (late status quo).** Current routines still hold and the conversation is about whether they should. The work is surfacing hopes and concerns before anything is piloted, across departments rather than within one. *Example:* cross-department sessions on candidate use cases where at least one workflow is deliberately marked as one to leave alone.

**Experimentation (resistance).** Pilots make the change concrete, and pushback follows. The productive response is co-creation: people who do the work shaping the pilot, with a channel for concerns that is separate from the bug queue. The stage question is whether a sceptic's objection changed anything. *Example:* a support chatbot pilot reshaped after the team that answers tickets described what it would break.

**Integration (chaos).** Roles and responsibilities shift and stability drops. Training, clear communication and joint redesign of the workflow are what carry a team through, and the risk is that only the fastest adapters come out the other side. *Example:* rebuilding a review process together so that AI-assisted input and managerial judgement each have a defined place.

**Optimization (integration).** AI-supported work is normal work. Capability has spread past the early adopters, new joiners reach competence without the original builder's help, and first successes are named publicly. *Example:* a recent hire running the AI-supported workflow competently from written material alone.

**Continuous Evolution (new status quo).** Upskilling and role development are recurring rather than one-off, and there is a standing forum where role and culture questions get raised. *Example:* a community of practice meeting on a recorded cadence, with people able to name a skill change they made and what supported it.

## Matrix row

| Stage | Cell |
|---|---|
| Exploration | Employees engaged in identifying potential applications and sharing hopes and concerns. |
| Experimentation | Pilot projects co-created with stakeholders to address resistance and build confidence. |
| Integration | Teams supported with training and resources as workflows and roles adapt to AI integration. |
| Optimization | Broad organizational acceptance and active participation in AI-driven workflows and celebration of first success cases. |
| Continuous Evolution | Continuous upskilling and culture-building around human-AI collaboration. |

## Gates

Source: `framework/gates/people.yaml`. Rendered: `framework/gates/generated/people-gates.md`. Instruments: `playbook/instruments/`.

The Integration to Optimization gate carries the People / Knowledge & Context interaction criterion (distribution): whether capability is concentrated in the people who built personal context scaffolding.

## Related

- Metrics for this dimension: `framework/metrics.md`
- Theory anchors and verification status: `research/evidence-log.md`
- Full v0.1 text, as published: `archive/v0.1/article.md`. The Satir diagram reproduced there is a third-party rendering and is deliberately not carried into `framework/`; see `archive/v0.1/figures/README.md`.
