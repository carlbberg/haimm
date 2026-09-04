# Open questions

Decisions taken, and known weaknesses in what is published. Items resolved for v0.2 are kept with their resolution rather than deleted, so that the reasoning survives.

## Resolved for v0.2

**1. Scope of gates.** All twenty are written, four per dimension. The sixteen outside Knowledge & Context were drafted in one pass and then reviewed against each dimension's revised text; every one of them now has a failure signal that names a specific profile an assessor can look for. They ship. None has been run against a real assessment, which is stated in the playbook rather than hidden.

**2. Metrics.** Resolved: metrics survive as a tracking layer and are barred from placement. Gates answer which stage; metrics answer whether the team is moving. The rule that keeps them from collapsing back together is that no metric is ever an entry condition for a stage, on Campbell's law grounds. See `framework/metrics.md`, which also records what was dropped from v0.1's lists and why.

**3. Name.** Resolved: Knowledge & Context stays. Shared Context was the alternative and is the more precise name for the human-to-human half, but it loses the "what the work depends on knowing" scope that the locus lens covers. The risk of reading as knowledge management is real and is answered by the dimension's own "What it is not" section, which is a better place to answer it than in a two-word name.

**4. The SECI lens is a loose fit.** Resolved by dropping the pretence of symmetry rather than by finding a better model. Knowledge & Context now names three partial lenses and says the progression is built from them and is not a rendering of any one. Ethics, examined in the same pass, turned out to have no developmental lens at all, and now says so. Four of five dimensions borrowing one whole model was never the pattern it was being presented as.

**6. Three sub-lenses may be one too many.** Resolved: keep three. Reachability is not independent of locus and the dimension now says so, but the diagnosis and the remedy differ enough to be worth separating. Unreachable context is fixed by connecting a system; unowned context is fixed by someone agreeing to own it. Collapsing them makes the first look like the second.

**7. A fifth pattern may be missing.** Resolved: separated. Unarbitrated conflict is now its own pattern, distinct from stale grounding, because both sources can be current and maintained and what is missing is a mechanism rather than a refresh. It already had a gate criterion of its own, which was the argument for promoting it.

**10. Licence.** Resolved: MIT.

## Known weaknesses in what is published

**5. Every dimension's fourth gate is untested.** No team in the v0.1 worked example is plotted at Continuous Evolution on any dimension, so Stage 5 is aspirational rather than observed. Each Optimization to Continuous Evolution gate is reasoned, not observed, and says so in its own `rationale` field. This is the single largest untested part of v0.2 and the first thing a real assessment should stress.

**9. Core criterion rule.** Kept for v0.2: exactly one criterion per gate cannot be skipped. It adds a rule to explain, and rules cost adoption. Revisit once real assessments have run and it is clear whether assessors use it or route around it.

**11. Third-party figures in the v0.1 archive.** Closed 3 September 2026. Permission obtained for both, recorded in `archive/v0.1/figures/README.md`. They stay in the archive, they are still not carried into `framework/`, and they remain outside the repository's MIT licence, which cannot cover work the author does not own. Nothing now blocks making the repository public.

## Beyond v0.2

**8. Do gates generalise between dimensions?** Ethics plausibly constrains Human-AI Collaboration: semi-autonomous operation without governance is a different kind of unsupported. If interactions like this are common, HAIMM gains a relationship layer and probably a companion diagram, and dimensions stop being independent in the way the current visualisation implies. Deliberately deferred, and noted in `framework/README.md`.

**12. The model has never been run.** The model is complete as a specification and has zero field data behind it. The first real assessment is likely to change gate wording, and the criteria most likely to move are the ones that are awkward to run rather than the ones that are wrong: the independent-agreement test in Knowledge & Context, and the second-team test in Solution Fit. The next version should be driven by that, not by adding a sixth dimension.

**13. Workflow as a sixth dimension.** Drafted in full at `drafts/workflow-candidate-dimension.md` and deliberately held out of `framework/`. The argument runs like this. HAIMM delegates the tools leg of the people, process and tools triad to the enterprise models on purpose and says so, while the process leg sits scattered across three dimensions by accident. Search the twenty gates for "workflow" and you find it eighteen times, always as the setting and never as the object. A team can pass all five dimensions with every workflow unchanged and AI laid on top of it.

This does not override item 12 so much as sit underneath it. The draft names three things that would kill the dimension, and you can test the sharpest by reading: whether an assessor could tell the proposed Integration to Optimization criterion apart from the one Solution Fit already carries at Experimentation to Integration. Do that first. The rest waits for a real assessment.
