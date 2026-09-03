# Changelog

Changes to the model. Editorial and tooling changes do not need an entry.

## Unreleased, toward v0.3

### Added
- `framework/stages/`, one file per stage. Stages had a table row and dimensions had a file each, an asymmetry inherited from v0.1's figure rather than justified by the model. Each stage file gives what is happening, what the stage is not, how the borrowed developmental lenses read it, the characteristic stall, and how a team leaves it.
- The reading of each stage across dimensions, which no file could hold before. Tuckman and Satir agree at Exploration, Experimentation and Optimization, contradict each other at Integration, where the working agreement is norming while the routines it displaces are in chaos, and both run out at Continuous Evolution.

### Resolved
- Third-party figure rights. Permission obtained for the two non-author figures in the v0.1 archive, recorded in `archive/v0.1/figures/README.md` and closing item 11 in `research/open-questions.md`. They stay outside the MIT licence. Nothing now blocks making the repository public.

### Changed
- `framework/00-overview.md` renamed to `framework/README.md`. Every other top-level folder already used that name, and the numeric prefix ordered nothing because no file sat beside it. The folder now renders its own overview when browsed.
- Gates and metrics no longer presented as elements standing alongside stages and dimensions. `framework/README.md` opened with four peers, which read a gate as a third axis and metrics as a fourth. Stages and dimensions are the axes, a gate is the transition between two adjacent stages within one dimension so the twenty fall out of the axes, and metrics sit outside them. `README.md` reworded to match.
- Version archaeology removed from `framework/` and `playbook/`. The model text described itself in terms of what v0.1 said and what v0.2 changed, which made a reader carry two versions to understand one. Corrections, migrations and row-order changes are recorded here instead. Each version's text now stands on its own, and this file is where the diffs live.
- `framework/stages.md` replaced by `framework/stages/`. The stage table, the ids and v0.1's reasoning for a five-stage shape moved to `framework/README.md`, alongside the dimensions table. The note on stage 5 being unobserved moved into the Continuous Evolution file and was expanded.
- Matrix cells now live only in `framework/matrix.md`. Dimension files described their own row twice, once in prose and once as a table copied from the matrix; the copy is gone and the file links instead.
- Gates moved out of YAML and into the dimension files themselves. Each `framework/dimensions/*.md` now holds its own four gates. Markdown is the source of truth, there is no schema and no build step, and the shape of a gate is a convention held by reading rather than by a validator.

### Removed
- `framework/gates/`, `playbook/instruments/` and `tools/`. The same eighty criteria were expressed three times, in YAML, in rendered markdown and again as checklists and survey forms, which made a one-word change a three-file diff. The v0.2 pipeline is preserved in `archive/v0.2/`.
- Recording an assessment now has no supplied form. Deferred to a tooling layer built on top of the framework rather than carried inside it.

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
- Awareness metrics dropped. "Percentage of employees aware of AI's potential role" measures exposure to a message, and every organisation that sends the message scores well.
- Counts that ran one way now run both. Retirements, narrowings and automation reductions are tracked alongside additions, because a one-directional count cannot distinguish evolution from accumulation.
- Optimization metrics name the specific measure the solution was meant to move, rather than improvement in key KPIs generally.
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
