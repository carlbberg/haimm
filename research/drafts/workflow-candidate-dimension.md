# Workflow as a sixth dimension

*Reconsidering how work is structured*

**Status.** A candidate, and not part of the model. Nothing here belongs in `framework/` until at least one real assessment has run against the five dimensions that already exist. Drafted 3 September 2026 against v0.2, revised for v0.4 in the current structure and voice.

This dimension would cover whether a team has reconsidered the shape of its work in light of what AI now makes possible, and whether it acted on the answer.

## Why the model might need it

People, process and tools is the common vocabulary of transformation work, and HAIMM maps onto that triad unevenly. People is a first-class dimension. Tools sits deliberately outside the model, delegated to the enterprise frameworks, and we say so plainly wherever the question comes up. Process is scattered across Solution Fit, Human-AI Collaboration and People, and nothing anywhere explains why.

Two of those are decisions. The third has been reading as one.

You can see the shape of the gap by searching the twenty published gates for the word "workflow". It appears eighteen times, and in every instance it is the setting the assessment happens in: the user's workflow, the AI-supported workflow, the workflow a pilot changed. It is never the thing being assessed.

The practical argument is older than AI and unchanged by it. Automation laid over a process nobody has re-examined will magnify whatever that process already was. What AI changes is the size of the gap, because it lifts constraints that whole workflow shapes were built around. The best current structure for producing a given outcome may now bear very little resemblance to the one a team inherited.

Picture a team that has done everything else right. Validated demand-pull use cases, a setup that transfers, a clear division of labour with AI, capability spread past the early adopters, context that is owned and reachable, and guardrails that have actually blocked something. Every workflow has the structure it had three years ago. AI does step four now, in twenty minutes instead of two hours. The cycle time barely moved.

HAIMM would score that team as mature across all five dimensions, and each of those scores would be correct on its own terms. The model has no way to say the useful thing about them.

## Whether it stands on its own

A dimension earns its place by varying independently of the others, and it has to do so in both directions.

High Solution Fit and low Workflow is the case above, and it is common. The tool fits a real need, the need sits inside a structure nobody has questioned, and the two assessments do not contradict each other.

Low Solution Fit and high Workflow is the inverse: a team that restructured its work around agent capability that does not reliably exist yet. That is rarer, though it seems to be getting less rare.

Both profiles are coherent and both are observable. The two dimensions are probably not measuring the same thing.

## The unit of analysis

This is the design decision the whole dimension turns on, and the first version of this draft got it wrong.

If the unit is the **step**, then the only available moves are edits to steps. This one goes, that one gets faster, a new one slots in. The assessment becomes a step audit, and the dimension quietly turns into a measure of whether processes are getting smaller. That is a subset of the real thing, and it is not the interesting part.

If the unit is the **outcome the workflow exists to produce**, the question becomes what the best structure for producing that outcome is now. The answer might be the structure you already have. It might be a modified one, a differently shaped one, or something with no correspondence to the original at all. Whole workflows can go, and whole workflows can appear. None of that is reachable from a step audit.

So the dimension asks the same thing at every stage. Can this team separate what its work is *for* from how that work currently happens, and has it acted on the difference?

Three consequences follow for how the criteria get written.

**Purpose comes before structure.** A team that can only describe its process as a sequence cannot redesign it, because a sequence offers no purchase for anything except rearrangement. Stating the outcome independently of the mechanism is the capability underneath everything else here, and it is what the first gate tests.

**Shape matters, size does not.** Where structure has changed, the test is non-correspondence. If every element of the old workflow maps one to one onto the new one and only the executor changed, you have automated. If elements merged, split, reordered, disappeared, appeared, or the whole thing went and something else took its place, the work was redesigned. The test is neutral about direction by construction.

**A deliberate decision to change nothing is a pass.** Where a team reconsidered a workflow from its purpose and kept it as it was, with the reasoning written down, that counts. Without this clause the dimension rewards churn, which is the opposite failure and just as expensive. People's Exploration gate already uses this move, treating a workflow deliberately left alone as evidence of maturity.

## What it is not

This is the dimension most at risk of duplicating the models HAIMM says it complements, so the first boundary is the one that matters most.

- **Business process management.** BPM and process transformation ask whether a process is efficient, and you can answer that question without reference to AI at all. Gartner, Deloitte and Forrester cover it thoroughly. This dimension asks something narrower: given what AI has made possible, is this workflow's structure still a good way to produce its outcome?
- **Solution Fit.** Solution Fit asks whether AI is attached to a real need. Workflow asks whether the work that need sits inside was ever reconsidered. A perfectly fitted solution at step four coexists happily with an unexamined eleven-step process, which is the entire point.
- **Human-AI Collaboration.** That dimension allocates work between people and AI across a set of steps. This one asks whether that set is the right set. Allocation can be admirably crisp across a structure nobody has questioned.
- **People.** People covers whether the humans came through the change. Workflow covers whether the change reached the work. The two meet where restructuring a workflow changes the roles inside it, and we handle that meeting as an interaction criterion instead of merging the dimensions.

## Naming

We should call it Workflow. The alternatives were Work Design and Process.

It is concrete, and it is already the repository's own vocabulary, so nobody has to learn a term. Process is the accurate word and also the dangerous one, since it reads as BPM on sight. Work Design keeps the human-centric framing and is more abstract than any of the other five names.

There is a terminology collision to handle openly. Calling the dimension Workflow puts one word to two jobs inside a single model: the dimension itself, and the setting the other five operate in. We already have this problem in People, where Satir's Integration phase and HAIMM's Integration stage share a word, and we handled it by naming the collision instead of renaming either side. The same treatment should work here, and it needs one sentence in `framework/README.md`.

The noun alone does not carry the idea that this is about reconsideration, so the subtitle does that work. "Reconsidering how work is structured" matches the gerund pattern the other five use.

## Lens candidates

None of these has been checked against a primary source yet, so all of them are unverified and none should enter `framework/` before somebody checks.

- **Zuboff (1988), *In the Age of the Smart Machine*.** The automate versus informate distinction. Technology can make an existing process faster, or it can generate information that changes what the work is. That is a genuine two-mode difference, which makes it the strongest candidate to carry an actual progression.
- **Hammer (1990), "Reengineering Work: Don't Automate, Obliterate", Harvard Business Review.** The thesis matches this dimension's directly. It is more quotable than Zuboff and rather less useful analytically.
- **Davenport and Short (1990), on IT and business process redesign.** Contemporary with Hammer and considerably less polemical.
- **Leavitt (1965), the diamond of people, task, structure and technology.** This is the ancestor of the triad the dimension leans on. Check it if that framing is going to carry weight in the argument.

There is a risk in borrowing from this literature that we should name before choosing. Business process reengineering earned a poor reputation through the 1990s, and Hammer is generally reported to have softened his position later. Borrowing the lens means inheriting the baggage, and any reader who lived through that period will recognise it immediately. That recollection is itself unverified. Check it before settling on a lens, because if it holds, Zuboff is the safer anchor.

## Patterns it would detect

**The recited process.** Ask what a workflow is for and the team walks you through its steps. The answer sounds complete and contains no purpose, so every subsequent question about the work can only be answered as an edit to the sequence. From inside, nothing looks wrong.

**The scoped review.** A redesign exercise that examined exactly the steps AI was already going to touch. Scoping the review to the intervention guarantees the answer, and in the write-up it looks identical to a genuine reconsideration.

**Substitution dressed as redesign.** A before-and-after in which every old element maps onto exactly one new element and only the executor changed. The team experiences this as transformation because the work feels different, and structurally nothing moved.

**The single reinvention.** One large redesign, dated, cited whenever the question comes up, with everything since being tooling changes inside the shape it produced. A team can stay here for years and describe itself accurately as having transformed.

## Stage progression

**Exploration.** Workflows are inherited and largely undescribed. AI gets considered task by task, and nobody has yet separated what the work is for from how it currently happens.

**Experimentation.** At least one workflow can be described by the outcome it produces, independently of the steps producing it. The team can say which parts of the current structure follow from the outcome and which follow from how the thing happened to get built. For example, a team states that a reporting workflow exists to give a decision-maker a reliable weekly picture, then notices that three of its seven steps exist because that picture used to be assembled by hand.

**Integration.** At least one workflow has been reconsidered from its purpose, with a real alternative on the table, and the outcome written down. Keeping the current structure on purpose counts here. For example, a review considers two shapes for an intake process, chooses one, and records why the other was set aside.

**Optimization.** At least one workflow now has a structure that does not correspond to its predecessor, and work exists that AI newly made feasible. What the work is has changed, and not only how fast it runs. For example, an intake, triage and routing sequence gives way to a single synthesis step feeding a decision that used to come last.

**Continuous Evolution.** Reconsideration runs on a cadence instead of arriving as a transformation project. Workflows appear and workflows go as capability changes, and the team can point to both. For example, a half-yearly review records one workflow that no longer exists and one that did not exist a year ago.

## Proposed matrix row

Cells live only in `framework/matrix.md`, so this row would be added there and not restated in the dimension file. It is reproduced here because the draft has to propose something concrete.

| Stage | Cell |
|---|---|
| Exploration | Workflows inherited and undescribed; AI considered task by task rather than structurally. |
| Experimentation | What a workflow is for can be stated independently of how it currently happens. |
| Integration | One workflow reconsidered from its purpose against a real alternative, outcome recorded either way. |
| Optimization | At least one workflow's structure no longer corresponds to its predecessor's. |
| Continuous Evolution | Reconsideration on a cadence; workflows appear and go as capability changes. |

## Gates

Written in the shape `AGENTS.md` describes, so they could be lifted into a dimension file unchanged. There are four gates, one for each transition between adjacent stages. You pass a gate by meeting **3 of the 4** criteria, and the criterion marked *core* cannot be the one you skip.

### Exploration to Experimentation

*Tests* Whether the team can say what a workflow is for, separately from how it currently happens.

A team that can only describe its work as a sequence of steps has no way to redesign it, because every available move is an edit to a step. Separating the outcome from the mechanism is what makes the rest of this dimension reachable at all, which is why it comes first.

- **[A]** A written statement exists, for at least one workflow, of the outcome it exists to produce, expressed without reference to the steps that currently produce it.
- **[O]** **(core)** Someone can describe what their workflow is for without walking through its steps, and can say which parts of its current structure follow from the outcome and which follow from how it happened to get built.
- **[A]** At least one workflow is described end to end, from trigger to outcome, instead of as a list of the tasks individuals perform inside it.
- **[S]** People report being asked what their work is for, and not only which of their tasks AI might help with.

*Failure signal.* A team that answers "what is this workflow for" by reciting its steps. The answer sounds complete and contains no purpose, so every subsequent question about the work can only be answered as an edit to the sequence.

### Experimentation to Integration

*Tests* Whether a workflow has been reconsidered from its purpose, against a real alternative, with the outcome recorded either way.

This gate separates reconsideration from insertion. A review with a single option on the table is an approval, not a choice. That is why the second criterion asks for an alternative somebody described and then set aside.

- **[A]** **(core)** One workflow has a recorded reconsideration that started from the outcome it produces and not from its current steps: what was asked, what was decided, and why. An outcome of "unchanged, deliberately" satisfies this.
- **[A]** At least one alternative structure for that workflow was described and set aside, so there was something to choose between.
- **[O]** Someone who does the work can describe the reconsideration and what they contributed to it.
- **[S]** People report the question asked was how the work should be structured, and not where AI could be inserted into it.

*Failure signal.* A redesign workshop scoped to exactly the steps AI was already going to touch. Scoping the review to the intervention guarantees the answer, and it reads as a genuine reconsideration in the write-up. The missing rejected alternative is what gives it away.

### Integration to Optimization

*Tests* Whether a workflow's structure has changed, in any direction, and not merely its speed.

Non-correspondence is the test here, not reduction. A workflow that grew because AI made new work possible has changed structure just as surely as one that shrank, and a workflow replaced outright is the strongest case of the three.

- **[A]** **(core)** A before-and-after description of at least one workflow exists in which the two do not correspond element for element: something in either version has no counterpart in the other, or the workflow was replaced outright.
- **[A]** At least one activity now happens that did not happen before and could not have, because it depends on something AI made feasible.
- **[O]** Someone can describe what the current structure replaced, and why this shape was chosen over the previous one.
- **[S]** People doing the work report the structure changed, and not only that parts of it became faster.

*Failure signal.* A before-and-after diagram in which every old element maps onto exactly one new element and only the executor column changed. That is automation rendered as redesign, and the correspondence itself is what gives it away.

### Optimization to Continuous Evolution

*Tests* Whether reconsideration is a cadence and not a project that happened once.

This gate is untested against practice, in common with every other fourth gate in the model. No assessment has yet placed a team at Continuous Evolution on any dimension, so these criteria are reasoned from the stages before them and you should treat them as provisional.

- **[A]** **(core)** Workflow reconsideration has happened more than once on a recorded cadence, instead of arriving as a single transformation exercise.
- **[A]** Both directions are visible in the record: at least one workflow that no longer exists, and at least one that did not exist before.
- **[O]** Someone can describe how the team would notice that a workflow's structure had stopped being the right one, without waiting for a transformation programme to ask.
- **[S]** People report the structure of their work has changed more than once since AI arrived, and not once.

*Failure signal.* One large redesign, dated, cited whenever the question comes up, with everything since being tooling changes inside the structure it produced. A single reinvention is not yet a cadence.

## Interaction criteria

Interactions live as one criterion inside the affected dimension's own gate and never as a dependency between dimensions, which is the pattern Knowledge & Context established.

**Workflow and People, on roles attached to a workflow that changes shape.** Restructure or replace a workflow and the roles inside it change, and some of them stop existing. Nothing in the model asks about this today. `framework/dimensions/04-people.md` carries five criteria that mention roles, and all five concern role change and growth; none covers a role that ended. The proposal, for People's Integration to Optimization gate:

> **[A]** Where a workflow changed structure, the effect on the roles attached to it was named in advance, with a record of what was decided for the people in them.

This is not free. People's gates already hold four criteria each with exactly one core, so adding a criterion displaces one. The weakest candidate is the last one in that gate, on training materials with a recorded date of use, which the core criterion in the same gate largely covers already. That is a proposal and not a decision.

**Workflow and Knowledge & Context, on the documented workflow against the actual one.** How work gets described and how it actually happens tend to diverge, and that gap is usually the most tacit thing in an organisation. It makes the first criterion of the first gate weaker than it looks. A written statement can be fiction. Knowledge & Context's Exploration gate covers part of this. We have left it open instead of forcing a criterion, since a note to assessors in the playbook may serve better.

## What it would cost

A sixth dimension would take the model to twenty-four gates and ninety-six criteria. A full assessment moves from roughly a day to a day and a quarter, against a playbook that already flags two criteria as awkward to run and no calibration between assessors.

There is a cost the v0.2 draft did not have to count. Each of the five files in `framework/stages/` gives the reading of that stage across every dimension, so a sixth dimension means revisiting all five of them as well. That is five more files to write and to keep true, and it is where the asymmetry would show first if the dimension turned out to be thin.

The row order would be Solution Fit, Workflow, Knowledge & Context, Human-AI Collaboration, People, Ethics. Workflow would sit next to Solution Fit. A well-fitted tool on an unchanged structure would then show up on neighbouring rows, where the gap reads at a glance, and Knowledge & Context would stay beside Human-AI Collaboration for the reason the current order already gives.

## What would kill it

Worth stating in advance, so that the answer does not get written afterwards.

1. **A real assessment never surfaces it.** Run the five-dimension instrument, and if no assessor ever writes anything like "but they never changed the structure" in the margin, the gap is theoretical.
2. **The criteria turn out to be answerable from the Solution Fit interview.** If everything here comes out of conversations that were happening anyway, this is a lens on Solution Fit and not a dimension.
3. **Assessors cannot tell the third gate's core criterion from Solution Fit's.** Solution Fit's Experimentation to Integration gate already asks for a documented change to the AI solution or workflow with a before-and-after description. If the two read as the same question in the field, one of them is redundant.

The third is the sharpest of them. Test it first, because you can check it by reading and without running anything.

## How this draft went wrong once

The first version built the dimension around a single criterion: a step has been removed from a workflow, not accelerated. It was sharp and hard to fake. It was also wrong, because it narrowed the claim from the work having been reconsidered to the work having got smaller.

What makes it worth recording is that the error survived being noticed. Correcting the criterion left the gate structure intact, the first gate was still a step audit, and the dimension still entered through the question of which steps should not be there. Fixing it took changing the unit of analysis from the step to the outcome, which no amount of rewording would have reached.

The general hazard is that the falsifiability rule pushes toward whatever is easiest to check, and what is easiest to check is not always what is true. `AGENTS.md` teaches how to make a criterion falsifiable and says nothing about confirming that the falsifiable thing is the right thing. Twenty published gates were written under the same pressure, so this may be worth a line there whatever happens to this dimension.

## Recommendation

Hold. The reasoning is good enough that the draft should exist, and not good enough to justify adding a fifth again to an instrument nobody has run yet. Item 12 in `research/open-questions.md` says the next version should be driven by a real assessment and not by a sixth dimension, and that still stands. Run the five, and let the first assessment decide whether this becomes the first item of the version after it or stays here.
