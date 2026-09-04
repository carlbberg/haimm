# Working in this repository

HAIMM is a maturity model for human-AI collaboration. It has two axes: five stages a team moves through, and five dimensions it is read across. A gate is the transition between two adjacent stages within one dimension, so the twenty gates fall out of the axes rather than standing beside them. Metrics are a separate layer that tracks whether a team is moving and never decides where it sits.

This repo is the canonical source and any article is a rendering of it. Read `README.md` for status and `framework/README.md` for the model.

Everything here is hand-edited markdown. There is no schema, no generated output and no build step, so a second copy of a fact is a second thing to forget to update.

## Layout

```
framework/     the model: README.md, matrix.md, metrics.md, references.md,
               stages/ (one file per stage), dimensions/ (one file per dimension,
               each holding that dimension's four gates)
playbook/      how to run an assessment and what to do with the result
research/      evidence log, open questions, drafts, source notes
archive/       released versions, frozen
```

## Rules that matter

**Every fact has one home.** Matrix cells live in `framework/matrix.md`. Gate criteria live in the dimension file that owns the gate. Stage files describe stages and link out rather than restating a matrix column or a gate's criteria.

**Dimensions are independent.** A team can sit at different stages across dimensions, and that scatter is the diagnosis, not an inconsistency to reconcile. Where one dimension's maturity genuinely bears on another, express it as a criterion inside the affected dimension's own gate.

**Metrics never decide placement.** Gates place a team; metrics say whether it is moving. No metric is an entry condition for a stage, on Campbell's law grounds. If a proposed metric restates a gate criterion, delete the metric. See `framework/metrics.md`.

**Don't invent evidence.** Claims about what organisations do, statistics and citations must be sourced or flagged as unverified. `research/evidence-log.md` tracks verification status for every citation, and an unverified one stays marked as such until checked against the primary source. Vendor marketing is not evidence.

**The working tree is the next version, not the last one.** `VERSION` names what is being worked on, with a `-dev` suffix until release. Anything that changes the model goes into `CHANGELOG.md` under Unreleased, and that section is renamed and dated when a version is cut.

**Archived versions are frozen.** Nothing under `archive/` is edited after its version is released, and corrections belong to the next version. The one sanctioned exception is recording a rights decision in `archive/v0.1/figures/README.md`, which that file asks for.

## Gates

A gate is a transition between two adjacent stages within one dimension. Four gates per dimension, twenty in total. Gates are never between dimensions.

Each dimension file holds its own gates under `## Gates`. A gate is a `###` heading naming the transition, then `*Tests*`, an optional rationale paragraph, four criteria, and a `*Failure signal.*` line. Criteria carry `**[A]**`, `**[S]**` or `**[O]**`, and exactly one is marked `**(core)**`. Keep the shape regular, because tooling will be built against it later.

**Criteria must be falsifiable.** Every criterion asks for something that can be inspected, or something a person does in an observed session. "A shared terminology document exists and its last substantive change is within the quarter" is a criterion. "We maintain shared terminology" is not, because no team can fail it. Published criteria get optimised against, and the wording is the only defence.

**Each gate needs at least one [A] or [O] criterion,** because a gate passable entirely by self-report will be passed. Nothing enforces this, so check it by reading whenever a gate changes.

## Writing style

The voice this repository is written in is the author's own, and the rules below exist because it drifted away from it. Two published pieces are the reference: the v0.1 article in `archive/v0.1/article.md`, and "Turning Usability Testing Data into Action without Going Insane" (UX Planet, 2017), which is the more instructional of the two and the closer match for `playbook/`. Where they disagree, the v0.1 article wins, since it is more recent and the 2017 piece passed through a publisher's editorial team.

The mechanics first: sentence case for headings, no em-dashes, no buzzwords (leverage, unlock, seamlessly), no "why it matters" or "failure mode" as a section header, and minimal formatting. The em-dash ban is deliberate and holds even though the 2017 piece uses them freely.

**Write in full sentences, and vary their length.** A line without a finite verb is a note to yourself, so if something reads as a label ("Not scale." "A progression.") give it a subject and a verb. Beyond that, natural prose varies: aim for a median around sixteen or seventeen words, let about a quarter run past twenty-five, and let roughly one in ten come in at six words or fewer. A short sentence is not a fragment, and it is often the one a reader remembers. What you are avoiding is uniformity in either direction, whether that is a paragraph of clipped lines that reads as a list which lost its bullets, or a paragraph where every sentence is the same comfortable length.

**Keep the connective tissue.** However, in other words, for example, finally and that said are how a reader follows an argument, and removing them does not make the prose tighter, it makes it harder to follow. Definition by negation is worth one or two uses per file and becomes a tic beyond that. "Rather than" in particular should be rare, and where a sentence can say what something is, it should. The "what it is not" sections stay, because they do real disambiguation work, but the prose inside them still has to say something positive.

**Both voices are allowed, but keep the passive scarce.** Both reference articles sit near seven passive constructions per thousand words, and that is the number to write toward. The passive earns its place where the actor is the whole organisation and naming it would be noise, as in "training and support are provided" or "the tool was reshaped after what the pilot found". It is wrong where it exists to avoid committing to a subject. Prefer teams, people and organisations as sentence subjects over gates, criteria and readings, since the model is about the former.

**Take the reader along.** Both references use an inclusive *we* and the occasional *let's* to walk somebody through a problem, and the 2017 piece leans on them hard. Use them where you are working through something with the reader, which is most of `playbook/` and the reasoning passages in `framework/`. Where a reader is about to choose between options, a short run of questions does more than a paragraph of prose: "Which failure is costing something now? Which one is compounding? What would it take to pass that gate?" Anticipating an objection in the reader's own words is fair game too.

**Hedge where the claim is uncertain,** which here is often. May, might, tends to, usually and in most cases are honest about evidence the model does not yet have. Save flat assertion for things that were actually decided.

**Address the reader.** You, your team and a question put directly to the reader are all fine anywhere, `framework/` included. Plain enthusiasm about the subject is fine too, used sparingly.

**Don't end on a mic drop.** A short epigram closing a section sounds decided and tells the reader very little, so end on the sentence that carries the most meaning, even where that is a long one. This is about what a section closes on and not about sentence length generally: a short sentence in the middle of a paragraph is doing useful work. The same goes for ending a section with "By doing X."

Match the register in `framework/`: cells and stage descriptions stay compressed and describe states, roughly eleven to sixteen words for a table cell. The prose around them does not have to be compressed, and the playbook can be more direct and instructional.

## Terminology

Five stages: Exploration, Experimentation, Integration, Optimization, Continuous Evolution. Five dimensions: Solution Fit, Knowledge & Context, Human-AI Collaboration, People, Ethics, in that row order.

## Before committing

Read back any gate you changed and confirm four criteria, exactly one core, and at least one [A] or [O]. Record anything that changes the model itself in `CHANGELOG.md`.
