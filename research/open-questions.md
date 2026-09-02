# Open questions

Decisions not yet made, and known weaknesses in what is drafted. Ordered roughly by how much they block.

## Blocking v0.2

**1. Scope of gates in v0.2.** Knowledge & Context has four gates. The other four dimensions have none. Shipping v0.2 with gates on one dimension only is odd; shipping all twenty is a much larger change than adding a dimension. Decide whether v0.2 introduces gates with the new dimension and retrofits in v0.3, or holds until all twenty exist.

**2. Metrics.** v0.1 has a per-stage metrics list for every dimension. Gates now do the placement work those metrics were partly doing. Decide whether metrics survive as a tracking layer (movement over time) with gates doing placement, or whether they are removed. They should not duplicate each other.

**3. Name.** Knowledge & Context is the working name. It carries the organisational knowledge lineage at the risk of reading as knowledge management, which is the confusion the dimension most needs to avoid. Shared Context is the alternative.

## Weaknesses in what is drafted

**4. The SECI lens is a loose fit.** Every other dimension borrows a whole model: Tuckman for collaboration, Satir for people, TAM and UTAUT for solution fit. Knowledge & Context borrows externalisation, which is one of four SECI modes. Either find a better-fitting whole model, or say plainly that this dimension has no single lens and drop the pretence of symmetry.

**5. Gate 4 is untested.** No team in the v0.1 worked example is plotted at Continuous Evolution on any dimension, which suggests Stage 5 is currently aspirational. Gate 4's criteria are reasoned, not observed.

**6. Three sub-lenses may be one too many.** Human-AI Collaboration has two because interaction mode and automation level are genuinely orthogonal. Locus and reachability are not fully independent: locus level 4 more or less presupposes reachability. Keeping reachability separate is defensible if the distinct diagnosis is worth it, but it is not the same clean crossing.

**7. A fifth pattern may be missing.** Conflicting context with no arbitration mechanism is currently folded into stale grounding. It may deserve separation.

## Beyond v0.2

**8. Do gates generalise between dimensions?** Ethics plausibly constrains Human-AI Collaboration: semi-autonomous operation without governance is a different kind of unsupported. If interactions like this are common, HAIMM gains a relationship layer and probably a companion diagram, and dimensions stop being independent in the way the current visualisation implies. Deliberately deferred.

**9. Core criterion rule.** Currently on: exactly one criterion per gate cannot be skipped. It adds a rule to explain, and rules cost adoption. Worth revisiting once real assessments have run.

**10. Licence.** Resolved: MIT. The two third-party v0.1 figures with unresolved rights status (`archive/v0.1/figures/README.md`) are a separate, still-open concern for public release.
