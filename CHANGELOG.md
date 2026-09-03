# Changelog

Changes to the model. Editorial and tooling changes do not need an entry.

## v0.2, 3 September 2026

### Added
- Knowledge & Context as a fifth dimension: shared understanding between people and AI and among people. Five patterns, three lenses, four gates.
- Gates: four per dimension, one per stage transition, twenty in total, eighty criteria of which twenty are core. Each carries an evidence source, a rationale and a failure signal. None has been tested against a real assessment.
- Gate definitions as YAML with generated checklists and survey forms, plus `validate.py` to enforce the rules that keep criteria falsifiable.
- The four dimension-interaction criteria named in `framework/00-overview.md` (transferability, sufficiency, distribution, provenance) written as gate criteria in the affected dimension's own YAML.
- `framework/metrics.md`. v0.1's metrics migrated as a tracking layer, with a Knowledge & Context set added.
- `playbook/acting-on-a-result.md`. What to do with a profile, six shapes worth recognising, and the rule that the failed criterion is the task.

### Changed
- Row order. Knowledge & Context sits second, immediately above Human-AI Collaboration, so a gap between the two is visible in the assessment view.
- The model is now an assessment instrument as well as a descriptive framework.
- Solution Fit, Human-AI Collaboration, People and Ethics rewritten for v0.2. Each now states what it is not, names the lenses it borrows, and lists the patterns it detects, matching the shape of the new dimension. The matrix cells themselves are unchanged from v0.1, so v0.1 placements remain readable.
- Metrics no longer play any part in placement. No metric is an entry condition for a stage, on Campbell's law grounds.
- Knowledge & Context no longer claims a single developmental lens. It names three partial ones. Ethics states that it has none by design.
- Unarbitrated conflict promoted from a note inside stale grounding to a pattern of its own.
- The two third-party v0.1 figures are no longer embedded anywhere in `framework/`. Their content is described in text with the source cited.

### Corrected
- The ten-level automation scale is Sheridan and Verplank (1978). v0.1 attributed it to Parasuraman, Sheridan and Wickens (2000), whose contribution is crossing degree of automation with four stages of information processing.
- Nielsen's (2024) four metaphors are intern, coworker, teacher and coach. v0.1 named three and renamed coworker to colleague.
- Tuckman (1965) has four stages. Adjourning was added by Tuckman and Jensen (1977) and means the group disbands, so it does not map onto Continuous Evolution. v0.2 says Tuckman covers four of five stages and names what replaces it at the fifth.
- The v0.2 scaffold recorded Exploration as having no stage description in v0.1. It has one; the gap was in the web capture used to archive the article. Entry withdrawn, and `framework/stages.md` now carries v0.1's own wording for all five stages.

### Considered and rejected
- Cross-dimensional gating, where Knowledge & Context caps the assessed stage of the other four. Rejected: it overrides placement rather than surfacing it, and converts a scattered profile into an error when the scatter is the diagnosis. The observations behind it survive as criteria inside the affected dimensions' own gates.
- Renaming Knowledge & Context to Shared Context. The alternative is more precise about the human-to-human half and loses the scope the locus lens covers.
- Removing metrics entirely once gates existed. Kept, with a rule that stops them doing the gates' job.

### Not done
- No field data. v0.2 has never been run against a real team, and the Optimization to Continuous Evolution gate in every dimension is reasoned rather than observed.
- No facilitation guide.
- The third-party figures in `archive/v0.1/figures/` remain in git history and have to be resolved before the repository is made public.

## v0.1, 24 December 2024

Published article. Five stages, four dimensions, per-stage metrics. See `archive/v0.1/`.
