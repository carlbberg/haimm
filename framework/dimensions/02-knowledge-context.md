# Knowledge & Context

*Making shared understanding explicit and current*

**Status.** Gates published, untested against a real assessment.

The organisation's maturity in making the understanding that work depends on explicit, shared, current, and reachable, both between people and AI and among people themselves.

## Why the model needed it

HAIMM's original four dimensions all mature through behaviour change. Solution Fit matures by running research and pilots. Human-AI Collaboration matures by negotiating roles and trust. People matures by working through a cultural transition. Ethics matures by writing and enforcing guardrails.

This dimension matures through representation change instead. It concerns what the organisation has made explicit, where that lives, who owns it, and whether it stays true.

The reason it cannot be folded into the other four is structural. Human collaborators infer context through channels that do not exist for an AI system: shared history, overheard conversation, knowing who to ask, repairing a misunderstanding mid-sentence. Introducing AI into a team removes those channels and substitutes whatever happens to be written down and reachable. An organisation's ratio of tacit to explicit knowledge therefore acts as a ceiling on how far it can progress elsewhere, no matter how strong its culture, ethics or tool selection.

Every other HAIMM dimension would score an organisation with excellent practices and undocumented knowledge as healthy. It is not healthy. It is capped.

## What it is not

The nearest prior art is data readiness, which the enterprise models already cover. IBM's AI Ladder is collect, organise, analyse, infuse. Deloitte, Gartner and Forrester all address data governance and operational scalability. If this dimension reads as data governance, it duplicates the models HAIMM says it complements and weakens the human-centric differentiation that justifies HAIMM existing.

- **Data governance** asks whether the data is available, clean, compliant and pipelined.
- **Knowledge & Context** asks whether the shared understanding required to do the work exists in a form both people and AI can act on.

Two boundaries inside HAIMM itself:

- **Ethics** owns what context is *permissible* to expose. Knowledge & Context owns whether context is *sufficient, current and shared*.
- **Solution Fit** asks whether AI can do the job. Knowledge & Context asks whether it can know enough to do the job. These are routinely conflated, and a grounding gap is commonly misdiagnosed as a capability gap.

## Sub-lenses

Human-AI Collaboration works because it crosses two independent axes. This dimension takes the same shape: two primary lenses plus one bridging lens.

### Locus: where shared context lives

A progression. Each level answers "when a person or an AI session needs to know something, where do they get it?"

1. **In heads and sessions.** Tacit, or inside individual conversations that end when the session does.
2. **In individual artifacts.** People write things down for their own use. Durable, but private.
3. **In team artifacts.** Shared documents with named owners, agreed terminology and a review cadence. Disagreements get arbitrated rather than left standing.
4. **In connected systems.** Context is referenced rather than copied. Refresh happens because the source changed, not because someone remembered.
5. **In a managed context estate.** Ownership, freshness, deprecation and access boundaries are explicit and reviewed.

### Flow: which direction context moves

Three directions, maturing independently. Most organisations develop the first and neglect the other two.

- **Human to AI (grounding).** Giving AI what it needs to be useful. Where almost all current practice sits.
- **AI to human (synthesis).** AI output becoming organisational knowledge rather than dying in a transcript.
- **Human to AI to human (redistribution).** AI as an intermediary moving context between people who would not otherwise have exchanged it. The least developed of the three, and the one that determines whether AI adoption raises or lowers shared understanding among colleagues.

### Bridging lens: reachability

Deliberately narrow, and the only place this dimension touches architecture. At the moment someone is doing the work, is the context the team has agreed on actually available to the AI they are using?

An organisation can be mature on locus and flow and still fail here, because the shared understanding sits in a system nothing is connected to. This is the one concern in the dimension that is genuinely a tooling problem, and separating it out stops the others being misdiagnosed as one.

Reachability is not fully independent of locus, in the way that interaction mode and automation level are independent in Human-AI Collaboration. Locus level 4 more or less presupposes it. It is kept separate anyway, because the diagnosis and the remedy differ: unreachable context is fixed by connecting a system, and unowned context is fixed by a person agreeing to own it. Collapsing the two makes the first look like the second, which is the more expensive mistake.

## Patterns it detects

Five patterns no other HAIMM dimension surfaces.

**Tacit ceiling.** Work whose grounding lives in a few people's heads cannot move up the automation ladder regardless of tool quality, trust or governance. Usually misread as a trust or capability problem and treated with training or better tools, neither of which addresses it.

**Stale grounding.** Context written once and never refreshed. Worse than absent, because it carries the authority of having been documented and the AI will not flag that it is out of date. Refresh is the weakest activity in most organisations and the hardest to sustain, because it has no natural trigger.

**Privatised grounding.** Individuals accumulate rich context in personal histories and prompt scaffolding. Output quality rises, shared understanding among people does not, and can decline, because work that previously required a conversation no longer does. The artifact still gets produced, so the negotiation that generated common ground simply stops happening. Invisible to output metrics and to all four original dimensions.

**Unreachable sources of record.** The knowledge has been externalised and agreed on, but sits where the AI in use cannot get to it, so people re-supply it by hand, inconsistently, from memory.

**Unarbitrated conflict.** Two context sources disagree, both are in use, and nothing decides between them. Distinct from stale grounding, because each source may be current and maintained; what is missing is a mechanism for making one authoritative. It surfaces once artifacts are team-owned rather than individual, and it is what the Integration to Optimization gate is asking about when it wants a specific conflict between two context sources and an account of how one was made authoritative.

## Stage progression

The other four dimensions each borrow one developmental model: TAM and UTAUT for Solution Fit, Tuckman for Human-AI Collaboration, Satir for People, and for Ethics, no model at all by design. This dimension has no single lens either, and the symmetry is not worth manufacturing.

What it uses instead is three partial ones, each covering a part the others do not:

- **Nonaka and Takeuchi (1995)** on tacit-to-explicit conversion, for the movement from heads to artifacts. Externalisation is one of four SECI modes, so this is a quarter of a model doing a specific job rather than a whole framework mapped onto five stages.
- **Wegner (1987) and Lewis (2003)** on transactive memory systems, for the human-to-human half: who knows what, and whether the group still knows who to ask once AI is answering.
- **Walsh and Ungson (1991)** on organisational memory, for the locus progression: where retained knowledge actually sits.

The progression below is built from those three and is not a rendering of any one of them.

**Exploration.** Context is tacit and session-scoped. People paste what they need into a chat window and nothing survives the session. The activity is diagnostic: take one recurring piece of work and map what it depends on knowing, marking each input as written down, held by one person, or sitting in a system nobody has connected. *Example:* auditing a weekly reporting workflow and finding that three of its seven inputs exist only as one analyst's judgement.

**Experimentation.** First durable artifacts appear, and they are individual. Someone writes a brief or instruction file that makes their own AI work noticeably better and keeps it to themselves. The stage question is whether these become shared assets or stay private, which is the fork that determines whether privatised grounding takes hold. *Example:* a designer's personal prompt library consistently outperforms colleagues', and the team decides whether to publish it.

**Integration.** Shared context artifacts become team-owned, with named owners, agreed terminology and a review cadence. Conflicts surface for the first time, because two documents disagree and something has to decide which is authoritative. *Example:* a team agrees a single source of truth for product terminology after an AI-drafted spec used three inconsistent names pulled from three stale documents.

**Optimization.** Context is referenced rather than copied. Sources of record are reachable, refresh is triggered by change rather than memory, and AI output is routed back into shared stores instead of ending in transcripts. *Example:* decisions from retrospectives are captured as structured records that both ground future AI work and serve as the team's own history.

**Continuous Evolution.** Context is managed as an asset with a lifecycle: ownership, deprecation, access boundaries, and periodic review of whether externalisation has gone too far or not far enough. The reflective question is whether shared understanding among people has kept pace with the context available to AI. *Example:* a quarterly review that retires stale context and explicitly checks the human-to-human half.

## Gates

Four gates, one per transition between adjacent stages. Pass a gate by meeting **3 of 4** criteria; the criterion marked *core* cannot be the one skipped. A team sits at the highest stage whose entry gate it has passed.

Evidence sources: **[A]** artifact inspection, **[S]** survey or questionnaire, **[O]** observation or interview. Every gate carries at least one [A] or [O] criterion, because a gate passable entirely by self-report will be passed.

### Exploration to Experimentation

*Tests* Whether the organisation can see its own context.

Until grounding failures are distinguishable from capability failures, nothing else in this dimension can be worked on deliberately.

- **[A]** At least one recurring workflow has a written inventory of what it depends on knowing, with each input marked as documented, held by named individuals, or sitting in an unconnected system.
- **[O]** In an observed AI-assisted session, the practitioner can say where the context they supplied came from.
- **[S]** People can describe what context they supply to get good output, rather than reporting that they just ask.
- **[O]** **(core)** Someone can give a specific example of AI output that was wrong or unusable because of missing or incorrect grounding rather than model capability.

*Failure signal.* The team reports that AI works fine and cannot produce a single grounding failure. That almost never means grounding is good. It means grounding failures are being absorbed as capability limits, which is the default state and the reason this gate exists.

### Experimentation to Integration

*Tests* Whether context has crossed from individual to shared.

This is the fork where privatised grounding either takes hold or does not.

- **[A]** At least one context artifact is used by more than one person and was not authored by one of them alone.
- **[A]** **(core)** That artifact has been substantively changed by at least two different people.
- **[S]** Two or more people independently name the same artifact as where they get grounding for a given task.
- **[O]** In an observed session, someone reaches for the shared artifact instead of reconstructing context from memory.

*Failure signal.* A well-populated shared folder where authorship and editing are concentrated in one person. Document volume is externalisation without sharing. It passes an artifact count and fails this gate, and the second criterion is what catches it.

### Integration to Optimization

*Tests* Whether shared context is owned, current, arbitrated, and reachable at the moment of work.

The fourth criterion tests shared understanding directly rather than inferring it from artifacts. It is the strongest single item in the instrument and also the most likely to be skipped, which is why it is marked core.

- **[A]** Every context artifact the team relies on has a named owner and a last substantive change inside an agreed freshness window.
- **[O]** The team can describe a specific conflict between two context sources and how one was made authoritative.
- **[A]** The context the team has agreed on is reachable from the AI tools people actually use, without manual re-supply.
- **[S]** **(core)** Two people and one AI session, asked the same question the work depends on, produce substantially the same answer.

*Failure signal.* Documented, owned, current, and still re-supplied by hand in every session. That profile passes an artifact audit and fails the gate, and it is the unreachable sources pattern.

### Optimization to Continuous Evolution

*Tests* Whether context is genuinely managed as an asset, including the half that is about people rather than AI.

Untested against practice. No assessment has placed a team at Continuous Evolution on any dimension, so these criteria are reasoned rather than observed. Treat as provisional.

- **[A]** **(core)** Context has been deliberately retired or deprecated in the last review cycle, not only added.
- **[A]** AI output routinely returns to shared stores as durable context, with at least one traceable instance.
- **[S]** New people reach working competence at a rate the team can point to, and attribute part of it to available shared context.
- **[S]** The team assesses shared understanding among people, not only context available to AI, and can say whether it has risen or fallen.

*Failure signal.* A growing, well-owned context estate with no deletions and no measure of the human-to-human half. It looks like Continuous Evolution and is Optimization with momentum. Every organisation adds context and almost none subtracts it, which is why deliberate retirement is the honest test of a lifecycle.

## Placement in the model

Row order is Solution Fit, **Knowledge & Context**, Human-AI Collaboration, People, Ethics.

Adjacency does the work. The bands in the visualisation carry equal weight, so there is no foundation-layer language available at the bottom of the chart, and placing this dimension last would read as least important. Sitting immediately above Human-AI Collaboration makes any gap between the two readable at a glance in the assessment view, because the markers are on neighbouring rows.

## Related

- This dimension's row in the combined matrix: `framework/matrix.md`
- The stages themselves, read across all five dimensions: `framework/stages/`
- Metrics for this dimension: `framework/metrics.md`
- Dimension interactions: `framework/00-overview.md`
- Theory anchors and verification status: `research/evidence-log.md`
- Decisions taken and still open: `research/open-questions.md`
