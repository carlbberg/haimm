# HAIMM v0.2 proposal: Knowledge & Context as a fifth dimension

Draft status: argument and structure. Stage descriptions and the combined-table row are drafted to v0.1's level of detail. The metrics block and assessment instrument are not written yet.

---

## The gap in v0.1

HAIMM's four dimensions all mature through behaviour change. Solution Fit matures by running research and pilots. Human-AI Collaboration matures by negotiating roles and trust. People matures by working through an emotional and cultural transition. Ethics matures by writing and enforcing guardrails.

The dimension proposed here matures through something different: representation change. It is about what the organisation has made explicit, where that lives, who owns it, and whether it stays true.

The reason this cannot be folded into the existing four is structural. Human collaborators infer context through channels that do not exist for an AI system: shared history, overheard conversation, knowing who to ask, repairing a misunderstanding mid-sentence. Introducing AI into a team removes those channels and substitutes whatever happens to be written down and reachable. An organisation's ratio of tacit to explicit knowledge therefore acts as a ceiling on how far it can progress in the other dimensions, no matter how strong its culture, ethics, or tool selection.

Every existing HAIMM dimension would score an organisation with excellent practices and undocumented knowledge as healthy. It is not healthy. It is capped.

## What this dimension is not

The nearest prior art is data readiness, which the enterprise models already cover well. IBM's AI Ladder is collect, organise, analyse, infuse. Deloitte, Gartner and Forrester all address data governance and operational scalability. If Knowledge & Context reads as a data governance dimension, it duplicates the models HAIMM says it complements and it weakens HAIMM's human-centric differentiation.

The dividing line proposed here:

- **Data governance** asks whether the data is available, clean, compliant and pipelined.
- **Knowledge & Context** asks whether the shared understanding required to do the work exists in a form that both people and AI can act on.

Two adjacent boundaries inside HAIMM itself:

- **Ethics** owns what context is *permissible* to expose. Knowledge & Context owns whether context is *sufficient, current, and shared*.
- **Solution Fit** asks whether AI can do the job. Knowledge & Context asks whether it can know enough to do the job. These are routinely conflated, and a grounding gap is commonly misdiagnosed as a capability gap.

## Definition

**Knowledge & Context**: the organisation's maturity in making the understanding that work depends on explicit, shared, current, and reachable, both between people and AI and among people themselves.

## Sub-lenses

The Human-AI Collaboration dimension works because it crosses two independent axes (interaction mode and level of automation). This dimension takes the same shape: two primary lenses plus one bridging lens.

### 1. Locus: where shared context lives

A progression, not a set of categories. Each level is a different answer to "when a person or an AI session needs to know something, where do they get it?"

1. **In heads and sessions.** Context is tacit, or lives inside individual conversations that end when the session does.
2. **In individual artifacts.** People write things down for their own use: a personal brief, a prompt library, an instruction file. Durable, but private.
3. **In team artifacts.** Shared documents with named owners, agreed terminology, and a review cadence. Disagreements between documents get arbitrated rather than left standing.
4. **In connected systems.** Context is referenced rather than copied. Sources of record are the source, and refresh happens because the source changed, not because someone remembered to update a copy.
5. **In a managed context estate.** Ownership, freshness expectations, deprecation, and access boundaries are explicit and reviewed.

### 2. Flow: which direction context moves

Three directions, maturing independently. Most organisations develop the first and neglect the other two.

- **Human to AI (grounding).** Giving AI what it needs to be useful. This is where almost all current practice sits.
- **AI to human (synthesis).** AI output becoming organisational knowledge rather than dying in a transcript. Synthesis, summaries, extracted decisions, drafted documentation that gets kept.
- **Human to AI to human (redistribution).** AI acting as an intermediary that moves context between people who would not otherwise have exchanged it. The least developed and least theorised of the three, and the one that determines whether AI adoption raises or lowers shared understanding among colleagues.

### 3. Bridging lens: reachability

Deliberately narrow, and the only place this dimension touches architecture. Reachability asks a human question with a technical answer: at the moment someone is doing the work, is the context the team has agreed on actually available to the AI they are using?

An organisation can be mature on locus and flow and still fail here, because the shared understanding sits in a system nothing is connected to. This is the one pattern in the dimension that is genuinely a tooling problem, and separating it out prevents the other patterns from being misdiagnosed as one.

## Patterns this dimension detects

Four recurring patterns that no other HAIMM dimension surfaces.

**Tacit ceiling.** Work whose grounding lives in a few people's heads cannot move up the automation ladder regardless of tool quality, trust levels, or governance maturity. Usually misread as a trust problem or a model capability problem, and treated with training or better tools, neither of which addresses it.

**Stale grounding.** Context written once and never refreshed. Worse than absent context, because it carries the authority of having been documented and the AI will not flag that it is out of date. Refresh is the weakest of the four context activities in most organisations, and the hardest to sustain because it has no natural trigger.

**Privatised grounding.** Individuals accumulate rich context in personal histories and personal prompt scaffolding. Output quality rises. Shared understanding among people does not, and can decline, because work that previously required a conversation now does not. The artifact still gets produced, so the negotiation that used to generate common ground simply stops happening. Invisible to output and productivity metrics, and invisible to all four v0.1 dimensions.

**Unreachable sources of record.** The knowledge has been externalised and agreed on, but sits where the AI in use cannot get to it, so people re-supply it by hand, inconsistently, from memory.

## Stage progression

The other dimensions each borrow a progression lens: Solution Fit uses TAM and UTAUT, Human-AI Collaboration uses Tuckman, People uses Satir. The proposed lens here is Nonaka and Takeuchi's tacit-to-explicit knowledge conversion, with transactive memory systems as the complementary lens for the human-to-human half.

**Exploration.** Context is tacit and session-scoped. People paste what they need into a chat window and nothing survives the session. The activity is diagnostic: take one recurring piece of work and map what it depends on knowing, marking each input as written down, held by one person, or sitting in a system nobody has connected. *Example:* auditing a weekly reporting workflow and finding that three of its seven inputs exist only as one analyst's judgement.

**Experimentation.** First durable artifacts appear, and they are individual. Someone writes a brief or an instruction file that makes their own AI work noticeably better and keeps it to themselves. The stage question is whether these become shared assets or stay private, which is the fork that determines whether the privatised grounding pattern takes hold. *Example:* a designer's personal prompt library consistently outperforms colleagues', and the team decides whether to publish it.

**Integration.** Shared context artifacts become team-owned, with named owners, agreed terminology, and a review cadence. Conflicts surface for the first time, because two documents disagree and something has to decide which one is authoritative. *Example:* a team agrees a single source of truth for product terminology after an AI-drafted spec used three inconsistent names pulled from three stale documents.

**Optimization.** Context is referenced rather than copied. Sources of record are reachable, refresh is triggered by change rather than by memory, and AI output is routed back into shared stores instead of ending in transcripts. The useful measure at this stage is time to competence, for new people and for new AI sessions alike. *Example:* decisions from retrospectives are captured as structured records that both ground future AI work and serve as the team's own history.

**Continuous Evolution.** Context is managed as an asset with a lifecycle: ownership, deprecation, access boundaries, and periodic review of whether externalisation has gone too far or not far enough. The reflective question at this stage is whether shared understanding among people has kept pace with the context available to AI. *Example:* a quarterly review that retires stale context and explicitly checks the human-to-human half, not only the human-to-AI half.

## Gates

Gates sit inside a dimension, between its stages, not between dimensions. Each dimension has four, one per transition. Across five dimensions that is twenty gates, which is the instrument rather than a complication of it. Placement stops being a judgement about which cell a team feels like it belongs in and becomes a reading of collected evidence.

Scattered placement is the expected output and the useful one. A team at Optimization on People and Exploration on Knowledge & Context is not an inconsistency to reconcile. It is the diagnosis, and it names the next piece of work.

**Criteria count and threshold.** A gate carries three to five criteria, and a team passes it by meeting **all but one**. So two of three, three of four, four of five. The rule stays the same sentence whatever the count, and it always leaves room for one gap, which is the tolerance the subjectivity of the evidence requires.

**Evidence sources**, marked on each criterion: **[A]** artifact inspection, **[S]** survey or questionnaire, **[O]** observation or interview. Every gate carries at least one A or O criterion, because a gate that can be passed entirely by self-report will be.

The four below cover Knowledge & Context only, as the template for the other sixteen. They come out at three, four, five and five criteria, and the progression is not accidental: early gates test one thing, and later gates test several properties that fail independently of each other.

### Gate 1: Exploration to Experimentation

*Tests whether the organisation can see its own context.* Until grounding failures are distinguishable from capability failures, nothing else in this dimension can be worked on deliberately.

Three criteria, pass at two.

- **[A]** At least one recurring workflow has a written inventory of what it depends on knowing, with each input marked as documented, held by named individuals, or sitting in an unconnected system.
- **[O]** In an observed AI-assisted session, the practitioner can say where the context they supplied came from.
- **[O]** Someone can give a specific example of AI output that was wrong or unusable because of missing or incorrect grounding rather than model capability.

*Failure signal:* the team reports that AI works fine and cannot produce a single grounding failure. That almost never means grounding is good. It means grounding failures are being absorbed as capability limits, which is the default state and the reason this gate exists.

An earlier draft had a fourth criterion asking whether people could describe the context they supply. It duplicated the second from a weaker source and has been cut. Three criteria that fail independently beat four where two move together.

### Gate 2: Experimentation to Integration

*Tests whether context has crossed from individual to shared.* This is the fork where privatised grounding either takes hold or does not.

Four criteria, pass at three.

- **[A]** At least one context artifact is used by more than one person and was not authored by one of them alone.
- **[A]** That artifact has been substantively changed by at least two different people.
- **[S]** Two or more people independently name the same artifact as where they get grounding for a given task.
- **[O]** In an observed session, someone reaches for the shared artifact instead of reconstructing context from memory.

*Failure signal:* a well-populated shared folder where authorship and editing are concentrated in one person. Document volume is externalisation without sharing. It passes an artifact count and fails this gate, and the second criterion is what catches it.

### Gate 3: Integration to Optimization

*Tests whether shared context is owned, current, arbitrated, and reachable at the moment of work.*

Five criteria, pass at four.

- **[A]** Every context artifact the team relies on has a named owner.
- **[A]** Each has a last substantive change inside an agreed freshness window.
- **[O]** The team can describe a specific conflict between two context sources and how one was made authoritative.
- **[A]** The context the team has agreed on is reachable from the AI tools people actually use, without manual re-supply.
- **[S]** Two people and one AI session, asked the same question the work depends on, produce substantially the same answer.

*Failure signal:* documented, owned, current, and still re-supplied by hand in every session. That profile passes an artifact audit and fails the gate, and it is the unreachable sources pattern.

Ownership and freshness were one criterion in an earlier draft and are now split, because they fail independently and commonly do. Owned and stale is the most frequent state of a mature-looking context estate, and bundling the two lets it pass.

The fifth criterion tests shared understanding directly rather than inferring it from artifacts. It is the strongest single item in the instrument and, at four of five, still droppable, which is the argument for the core criterion option below.

### Gate 4: Optimization to Continuous Evolution

*Tests whether context is genuinely managed as an asset, including the half that is about people rather than AI.*

Five criteria, pass at four.

- **[A]** Context has been deliberately retired or deprecated in the last review cycle, not only added.
- **[A]** AI output routinely returns to shared stores as durable context, with at least one traceable instance.
- **[A]** Access boundaries on context are explicit and have been reviewed, not inherited from whatever the tools defaulted to.
- **[S]** New people reach working competence at a rate the team can point to, and attribute part of it to available shared context.
- **[S]** The team assesses shared understanding among people, not only context available to AI, and can say whether it has risen or fallen.

*Failure signal:* a growing, well-owned context estate with no deletions and no measure of the human-to-human half. It looks like Continuous Evolution and is Optimization with momentum. Every organisation adds context and almost none subtracts it, which is why deliberate retirement is the honest test of a lifecycle.

Caveat on this gate specifically. No team is plotted in the Continuous Evolution column anywhere in v0.1's assessment example, on any dimension. If Stage 5 is aspirational in practice rather than observed, these five criteria have never been checked against a real team and are written from reasoning alone. Gates 1 to 3 at least describe states you are likely to have seen. This one should carry the lowest confidence of the four until an assessment finds a team it can be tried on.

### Threshold, and the core criterion problem

All but one keeps placement tolerant of uneven reality, which is right for evidence this subjective, and it survives a variable criteria count without needing a second rule.

Two consequences worth being aware of. A three-criterion gate is proportionally more forgiving than a five-criterion one (two of three is 67 percent, four of five is 80), so criteria count quietly affects gate difficulty. That is tolerable as long as counts track how many independent things a transition actually requires, which is the rule applied above, and not how much there was to say.

The sharper issue is that criteria inside a gate are not equal. Gate 3's independent-agreement test is worth more than the other four combined, and a team passing the other four while failing it has not reached Optimization in any sense that matters. That effect is stronger now, not weaker, because on a three-criterion gate the one permitted miss is a third of the evidence.

One option, offered rather than assumed: designate one criterion per gate as core, meaning it cannot be the one skipped. The threshold sentence stays the same, with the addition that the miss cannot be the core item. Candidates: Gate 1's grounding-failure example, Gate 2's two-editor test, Gate 3's independent-agreement test, Gate 4's deliberate retirement. The cost is one more rule to explain and one more thing an assessor can get wrong.

### Writing criteria that survive being published

CMMI's staged representation is the nearest prior art, with process areas and specific practices required per level. Its best-known failure is worth designing against: published criteria get optimised, teams produce the artifact the checklist names, and the underlying capability does not move.

The defence is in the wording. Every criterion above asks for something that exists and can be inspected, or something a person does in an observed session, rather than something a team can agree with. "A shared terminology document exists and its last substantive change is within the quarter" can only be gamed by actually maintaining it. "We maintain shared terminology" cannot be failed. That distinction should hold across all twenty gates when the other four dimensions are retrofitted.

The variable count is a second defence. A fixed number invites padding, where a gate that genuinely tests two things gets a third and fourth criterion written to fill the slot, and filler criteria are always the vague self-report kind. Three to five means each criterion has to earn its place by failing independently of the others.

### What happened to the cross-dimensional gates

An earlier draft had Knowledge & Context gating the other four dimensions. Dropped. It overrides placement rather than surfacing it, and it turns a scattered profile into an error when the scatter is the point of the assessment.

The observations behind it survive as criteria inside other dimensions' gates, where they cost nothing and override nothing:

- **Transferability**, in Solution Fit's Integration to Optimization gate: whether the context that made a pilot work exists anywhere other than the pilot team.
- **Sufficiency**, in Human-AI Collaboration's Integration to Optimization gate: whether AI can be grounded without a human supplying context in the moment.
- **Distribution**, in People's Integration to Optimization gate: whether capability is concentrated in the people who built personal context scaffolding.
- **Provenance**, in Ethics' Experimentation to Integration gate: whether the team can say what grounded an AI-influenced decision.

Each is one criterion among four, so no dimension's placement is hostage to another's.

### Checking gates against practice

A gate is wrong if teams routinely pass its criteria and still cannot do what the next stage describes, or fail them and demonstrably can. Weaker than a cross-dimensional prediction, but it is a test real assessments can run, and it is more than most maturity model criteria expose themselves to.

## Fitting the two visualisations

### Row label and subtitle

Every dimension carries a short participial subtitle of four to seven words. Candidates, in order of preference:

- Making shared understanding explicit and current
- Grounding work in shared understanding
- Sharing what the work depends on knowing

### Row placement

Current order is Solution Fit, Human-AI Collaboration, People, Ethics. Proposed order places Knowledge & Context directly above Human-AI Collaboration:

Solution Fit, **Knowledge & Context**, Human-AI Collaboration, People, Ethics.

Adjacency is doing the work. The bands are visually equal weight, so there is no "foundation layer" language available at the bottom of the chart, and placing it last would read as least important. Sitting immediately above Collaboration makes the constraint readable at a glance in the assessment view, because the two markers are on neighbouring rows and any leftward gap is immediately visible.

### Combined table row, at matching compression

Existing cells run roughly eleven to sixteen words and describe a state rather than an activity.

| Stage | Knowledge & Context |
|---|---|
| 1. Exploration | Context is tacit and session-bound; initial mapping of what the work depends on knowing. |
| 2. Experimentation | First durable context artifacts appear, created and held by individuals. |
| 3. Integration | Shared context becomes team-owned, with agreed terminology, named owners, and a review cadence. |
| 4. Optimization | Context referenced from reachable sources of record rather than copied, refreshed as they change. |
| 5. Continuous Evolution | Context managed as an asset, with ownership, refresh, and deprecation reviewed regularly. |

### What the assessment view demands

The second visualisation is what the gates serve. A dimension that has to resolve to a single marker needs placement to come from evidence, and the four gates above are how a marker gets positioned: a team sits at the highest stage whose entry gate it has passed.

This is the one dimension where cheap proxies are actively misleading. Counting documents or instruction files measures externalisation volume, not whether understanding is shared, current, or reachable, which is why the criteria are weighted toward inspection and observation rather than counts.

Two smaller notes on the figures themselves. No team is plotted anywhere in the Continuous Evolution column, which suggests Stage 5 is currently aspirational rather than assessed, and Gate 4 should be written knowing that. And in the first figure the Ethics band is drawn as a rectangle while the other three carry arrowheads, which is probably an export artifact.

## Theory anchors

Register-matched to v0.1's existing citations. Years and editions to be verified before they enter a reference list.

- **Nonaka and Takeuchi, knowledge conversion (SECI).** Tacit to explicit conversion. Gives a clean account of why this dimension became urgent only now: AI adoption sharply raises the return on externalisation.
- **Wegner; Lewis, transactive memory systems.** Groups encode who knows what. Introducing AI changes the directory and the store at the same time, which is a more precise claim than "AI is a new team member" and sits in the same literature as Tuckman.
- **Clark, common ground and grounding in communication.** Context transfer is a process with repair, not a payload. Explains why one-shot documentation does not produce shared understanding.
- **Star and Griesemer, boundary objects.** Explains why a shared instruction file works: it lets two communities coordinate without requiring full agreement.
- **Walsh and Ungson, organisational memory.** The prior framing for where knowledge is retained in an organisation, useful for the locus lens.
- **CMMI staged representation.** Not a conceptual anchor for the dimension, but the prior art for gates: process areas with required practices per maturity level. Cite it for the mechanism and for the compliance-theatre critique the criteria are written against.

## Open items

1. **Metrics block.** Still needed alongside the gates. The gates place a team; metrics track movement over time, and v0.1 has a per-stage metrics list for every dimension. The two should not duplicate each other, and it is worth deciding whether metrics survive at all now that gates exist, or whether they become the tracking layer only.
2. **The other sixteen gates.** Retrofitting Solution Fit, Human-AI Collaboration, People and Ethics is a larger change to HAIMM than adding a fifth dimension. Worth deciding whether v0.2 ships gates for all five or introduces them with the new dimension and retrofits in v0.3.
3. **Core criterion.** Whether to designate one non-skippable criterion per gate. See above.
4. **Icon.** Each dimension carries one in the assessment view. Not proposed.
5. **Name.** Knowledge & Context is the working name. It carries the organisational knowledge lineage, at some risk of reading as knowledge management. Shared Context is the alternative if that risk dominates.
4. **Operating cycle.** An optional addition: a capture, synthesis, use, refresh cycle sitting underneath the sub-lenses as the recurring activity set. Adds precision, and adds a fourth structural element to a dimension that already has three.
5. **Fifth pattern.** Conflicting context with no arbitration mechanism may deserve separation from stale grounding rather than being treated as a symptom of it.
6. **Whether gates generalise.** If Knowledge & Context gates each of the other four, the natural next question is whether gates exist between other pairs. Ethics plausibly gates Human-AI Collaboration: semi-autonomous operation without governance is a different kind of unsupported. If that holds, HAIMM gains a relationship layer and probably a companion diagram, and the dimensions stop being independent in the way the current visualisation implies. This is a v0.3 scope decision, not something to settle inside the fifth dimension.
