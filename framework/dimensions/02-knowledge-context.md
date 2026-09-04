# Knowledge & Context

*Making shared understanding explicit and current*

**Status.** Gates published, untested against a real assessment.

This dimension covers the organisation's maturity in making the understanding that work depends on explicit, shared, current and reachable, both between people and AI and among the people themselves.

## Why the model needed it

HAIMM's original four dimensions all mature through a change in behaviour. Solution Fit matures by running research and pilots, Human-AI Collaboration matures by negotiating roles and trust, People matures by working through a cultural transition, and Ethics matures by writing and then enforcing guardrails.

This dimension is different, because it matures through a change in representation. It concerns what the organisation has made explicit, where that explicit knowledge lives, who owns it, and whether it stays true over time.

The reason it cannot simply fold into the other four is structural. Human collaborators infer context through channels an AI system does not have: shared history, overheard conversation, knowing who to ask, repairing a misunderstanding halfway through a sentence. Bring AI into the team and those channels vanish, leaving whatever somebody wrote down and made reachable. An organisation's ratio of tacit to explicit knowledge therefore caps how far it can progress anywhere else, however strong its culture, its ethics or its tool selection.

Every other HAIMM dimension would look at an organisation with excellent practices and entirely undocumented knowledge and score it healthy. It is not healthy. It has hit a ceiling that no amount of culture, governance or tool selection will raise, and this is the only dimension that will tell you so.

## What it is not

The nearest prior art is data readiness, which the enterprise models already cover well. IBM's AI Ladder runs collect, organise, analyse, infuse, and Deloitte, Gartner and Forrester all address data governance and operational scalability. If this dimension ends up reading as data governance, then it duplicates the models HAIMM says it complements, and it weakens the human-centric differentiation that justifies HAIMM existing at all.

- **Data governance** asks whether the data is available, clean, compliant and pipelined.
- **Knowledge & Context** asks whether the shared understanding required to do the work exists in a form that both people and AI can actually act on.

Two boundaries inside HAIMM itself:

- **Ethics** owns the question of what context is *permissible* to expose, while Knowledge & Context owns whether that context is *sufficient, current and shared*.
- **Solution Fit** asks whether AI can do the job at all, and Knowledge & Context asks whether it can know enough to do the job. Teams routinely conflate the two, and a grounding gap very commonly gets read as a capability gap.

## Sub-lenses

Human-AI Collaboration works as a dimension because it crosses two independent axes, and this dimension takes the same shape, with two primary lenses and one bridging lens.

### Locus: where shared context lives

This is a progression, and each level answers the same question: when a person or an AI session needs to know something, where do they get it from?

1. **In heads and sessions.** Tacit, or inside individual conversations that end when the session does.
2. **In individual artifacts.** People write things down for their own use. Durable, but private.
3. **In team artifacts.** Shared documents with named owners, agreed terminology and a review cadence. Disagreements get arbitrated instead of being left standing.
4. **In connected systems.** Context is referenced instead of copied. Refresh happens because the source changed, not because someone remembered.
5. **In a managed context estate.** Ownership, freshness, deprecation and access boundaries are explicit and reviewed.

### Flow: which direction context moves

There are three directions here and they mature independently of each other. Most organisations develop the first one and neglect the other two.

- **Human to AI (grounding).** Giving AI what it needs in order to be useful, which is where almost all current practice sits.
- **AI to human (synthesis).** AI output becoming organisational knowledge instead of dying quietly in a transcript.
- **Human to AI to human (redistribution).** AI acting as an intermediary that moves context between people who would not otherwise have exchanged it. This is the least developed of the three, and it is also the one that determines whether AI adoption raises or lowers shared understanding among colleagues, which makes it the most interesting of the three to watch.

### Bridging lens: reachability

This lens is deliberately narrow, and it is the only place where the dimension touches architecture. At the moment someone is actually doing the work, is the context the team has agreed on available to the AI they are using?

An organisation can be mature on both locus and flow and still fail here, because the shared understanding sits in a system nothing connects to. This is the one concern in the dimension that really is a tooling problem. Separating it out stops the others from getting mistaken for one.

Reachability is not fully independent of locus, the way interaction mode and automation level are genuinely independent in Human-AI Collaboration, and locus level 4 more or less presupposes it. We keep it separate anyway, because the diagnosis and the remedy differ. You fix unreachable context by connecting a system, and unowned context by getting a person to own it. Collapse the two and the first starts looking like the second, which is much the more expensive mistake.

## Patterns it detects

There are five patterns here that no other HAIMM dimension will surface for you.

**Tacit ceiling.** Work whose grounding lives in a few people's heads cannot move up the automation ladder, however good the tools, the trust or the governance may be. It is usually misread as a trust or capability problem and treated with training or better tools, and neither of those addresses it.

**Stale grounding.** Somebody wrote the context once and nobody has refreshed it since. That is worse than having none, because it carries the authority of a document and, unlike a colleague, the AI will not tell you it has gone out of date. Refresh tends to be the weakest activity in most organisations and the hardest to sustain, largely because nothing naturally triggers it.

**Privatised grounding.** Individuals accumulate rich context in their personal histories and prompt scaffolding. Output quality rises. Shared understanding among people does not, and it may well decline, because work that once needed a conversation no longer needs one. The artifact still appears, so the negotiation that used to build common ground quietly stops. Output metrics miss this, and so do all four of the original dimensions, which is exactly why the fifth one exists.

**Unreachable sources of record.** The team externalised the knowledge, agreed on it, and then filed it somewhere the AI actually in use cannot reach. People re-supply it by hand, inconsistently, from memory.

**Unarbitrated conflict.** Two context sources disagree, both stay in use, and nothing decides between them. This differs from stale grounding, because each source may be perfectly current and maintained. What the team lacks is a way to make one of them authoritative. It surfaces once artifacts become team-owned instead of individual, and it is what the Integration to Optimization gate wants when it asks for a specific conflict and an account of how somebody settled it.

## Stage progression

The other four dimensions each borrow a single developmental model: TAM and UTAUT for Solution Fit, Tuckman for Human-AI Collaboration, Satir for People, and, in the case of Ethics, no model at all by design. This dimension has no single lens either, and the symmetry would not be worth manufacturing.

It uses three partial lenses instead, each covering ground the others do not. In other words, none of them gets stretched to cover the whole dimension:

- **Nonaka and Takeuchi (1995)** on tacit-to-explicit conversion, for the movement from heads to artifacts. Externalisation is only one of the four SECI modes, so this borrows a quarter of a model to do a specific job. It is not a whole framework mapped onto five stages.
- **Wegner (1987) and Lewis (2003)** on transactive memory systems, for the human-to-human half of the problem, meaning who knows what, and whether the group still knows who to ask once AI is doing the answering.
- **Walsh and Ungson (1991)** on organisational memory, for the locus progression, which is the question of where retained knowledge actually sits.

The progression below draws on all three, and it renders none of them.

**Exploration.** Context is tacit and session-scoped. People paste what they need into a chat window and nothing survives the session. The work here is diagnostic: take one recurring piece of work, map what it depends on knowing, and mark each input as written down, held by one person, or sitting in a system nobody has connected. *Example:* auditing a weekly reporting workflow and finding that three of its seven inputs exist only as one analyst's judgement.

**Experimentation.** The first durable artifacts appear, and they belong to individuals. Someone writes a brief or an instruction file that makes their own AI work noticeably better, and then keeps it to themselves rather than publishing it anywhere the team would find it. Ask whether these become shared assets or stay private. That fork decides whether privatised grounding takes hold. *Example:* a designer's personal prompt library consistently outperforms colleagues', and the team decides whether to publish it.

**Integration.** Shared context artifacts become team-owned, with named owners, agreed terminology and a review cadence. Conflicts surface for the first time, because two documents disagree and somebody has to decide which one wins. *Example:* a team agrees a single source of truth for product terminology after an AI-drafted spec used three inconsistent names pulled from three stale documents.

**Optimization.** The team references context instead of copying it. Sources of record are reachable, a change triggers refresh instead of somebody remembering to, and AI output flows back into shared stores instead of dying in a transcript. *Example:* decisions from retrospectives are captured as structured records that both ground future AI work and serve as the team's own history.

**Continuous Evolution.** The team manages context as an asset with a lifecycle: ownership, deprecation, access boundaries, and a periodic review of whether externalisation has gone too far or not far enough. One reflective question carries the stage. Has shared understanding among people kept pace with the context available to AI? *Example:* a quarterly review that retires stale context and explicitly checks the human-to-human half.

## Gates

There are four gates, one for each transition between adjacent stages. You pass a gate by meeting **3 of the 4** criteria, and the criterion marked *core* cannot be the one you skip. A team sits at the highest stage whose entry gate it has passed.

The evidence sources are **[A]** for artifact inspection, **[S]** for a survey or questionnaire, and **[O]** for observation or interview. Every gate carries at least one [A] or [O] criterion, because a gate that can be passed entirely by self-report will be passed.

### Exploration to Experimentation

*Tests* Whether the organisation can see its own context.

Until a team can tell grounding failures apart from capability failures, it cannot work on anything else in this dimension deliberately.

- **[A]** At least one recurring workflow has a written inventory of what it depends on knowing, with each input marked as documented, held by named individuals, or sitting in an unconnected system.
- **[O]** In an observed AI-assisted session, the practitioner can say where the context they supplied came from.
- **[S]** People can describe what context they supply to get good output, rather than reporting that they just ask.
- **[O]** **(core)** Someone can give a specific example of AI output that was wrong or unusable because of missing or incorrect grounding rather than model capability.

*Failure signal.* The team reports that AI works fine and cannot produce a single grounding failure between them. That almost never means the grounding is good. It usually means the team absorbs grounding failures as capability limits, which is the default state and the reason this gate exists.

### Experimentation to Integration

*Tests* Whether context has crossed from individual to shared.

This is the fork at which privatised grounding either takes hold or does not.

- **[A]** At least one context artifact is used by more than one person and was not authored by one of them alone.
- **[A]** **(core)** That artifact has been substantively changed by at least two different people.
- **[S]** Two or more people independently name the same artifact as where they get grounding for a given task.
- **[O]** In an observed session, someone reaches for the shared artifact instead of reconstructing context from memory.

*Failure signal.* A well-populated shared folder in which authorship and editing are both concentrated in a single person. Document volume on its own is externalisation without sharing, so it passes an artifact count and fails this gate, and the second criterion is what catches it.

### Integration to Optimization

*Tests* Whether shared context is owned, current, arbitrated, and reachable at the moment of work.

The fourth criterion tests shared understanding directly instead of inferring it from artifacts, which makes it the strongest single item anywhere in the instrument and, for exactly the same reason, the one people skip most readily. That is why it carries the core mark.

- **[A]** Every context artifact the team relies on has a named owner and a last substantive change inside an agreed freshness window.
- **[O]** The team can describe a specific conflict between two context sources and how one was made authoritative.
- **[A]** The context the team has agreed on is reachable from the AI tools people actually use, without manual re-supply.
- **[S]** **(core)** Two people and one AI session, asked the same question the work depends on, produce substantially the same answer.

*Failure signal.* Context that is documented, owned and current, and that people still re-supply by hand in every single session. That profile passes an artifact audit and fails this gate. It is the unreachable sources pattern.

### Optimization to Continuous Evolution

*Tests* Whether context is genuinely managed as an asset, including the half of it that is about people and not about AI.

This gate is untested against practice. No assessment has yet placed a team at Continuous Evolution on any dimension, so these criteria are reasoned from the stages before them, not observed, and you should treat them as provisional.

- **[A]** **(core)** Context has been deliberately retired or deprecated in the last review cycle, not only added.
- **[A]** AI output routinely returns to shared stores as durable context, with at least one traceable instance.
- **[S]** New people reach working competence at a rate the team can point to, and attribute part of it to available shared context.
- **[S]** The team assesses shared understanding among people, not only context available to AI, and can say whether it has risen or fallen.

*Failure signal.* A growing, well-owned context estate with no deletions and no measure of the human-to-human half. It looks like Continuous Evolution. It is Optimization with momentum behind it. Almost every organisation adds context and very few subtract any, which is why deliberate retirement is the honest test of whether a lifecycle exists at all.

## Placement in the model

Row order is Solution Fit, **Knowledge & Context**, Human-AI Collaboration, People, Ethics.

Adjacency does the work here. The bands in the visualisation all carry equal weight, so the bottom of the chart offers no foundation-layer language, and putting this dimension last would just read as least important. Sitting immediately above Human-AI Collaboration puts the two markers on neighbouring rows, which makes any gap between them readable at a glance.

## Related

- This dimension's row in the combined matrix: `framework/matrix.md`
- The stages themselves, read across all five dimensions: `framework/stages/`
- Metrics for this dimension: `framework/metrics.md`
- Dimension interactions: `framework/README.md`
- Theory anchors and verification status: `research/evidence-log.md`
- Decisions taken and still open: `research/open-questions.md`
