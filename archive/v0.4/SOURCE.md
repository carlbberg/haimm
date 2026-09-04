# Source and provenance, HAIMM v0.4

## Publication

| Field | Value |
|---|---|
| Form | Repository, not an article |
| Author | Carlos Rosemberg (@carlbberg) |
| Released | 4 September 2026 |
| Predecessor | v0.3, released 3 September 2026, archived at `../v0.3/` |

v0.4 was developed in this repository. There is no published article for it. If
one is written, it is a rendering of this directory, not the other way round.

## What this snapshot contains

`framework/` and `playbook/`, copied verbatim from the repository root at
release. Nothing here is generated, and there is no build to reproduce.

## What it deliberately leaves out

Per the convention in `../README.md`, files that describe the project rather
than one version stay at the repository root and are not copied here:
`research/` (the evidence log, open questions and drafts), `CHANGELOG.md`, and
`AGENTS.md`. There is one of each and they cover all versions.

`visualization/` is also left out. It is a rendering of the model and not part
of it, and the published brief carries its own copy of its source.

The candidate draft that became the Workflow dimension stays at
`../../research/drafts/workflow-candidate-dimension.md`. It holds the reasoning
behind the decision, including the account of how its first version went wrong,
and none of that belongs in the model text.

## Citation state at release

Twenty-two sources checked against publisher records or the primary document.
Every citation used in `framework/` is verified. The only sources carried
unverified are the enterprise maturity models HAIMM positions against, which are
cited as positioning rather than as evidence for any claim.

Zuboff (1988) is the one addition. Its bibliographic record was checked against
Open Library, and the automating and informating duality confirmed as a stated
concept of the book against the publisher-side and Harvard Business School
descriptions. The primary text was not read, so what the Workflow dimension
claims of it stays at the level of the distinction itself.

The reengineering literature was considered as a lens and set aside without
being checked, because nothing in `framework/` cites it. The reason for setting
it aside, that business process reengineering acquired a poor reputation through
the 1990s, is itself unverified and `../../research/evidence-log.md` says so.

## Known limits at release

- No field data. The model has never been run against a team.
- Workflow was added before the first assessment rather than after it, which is
  the opposite of what `../../research/open-questions.md` item 12 recommends.
  Items 13 and 14 there record the reasoning and the doubt.
- Every dimension's Optimization to Continuous Evolution gate is reasoned, not
  observed.
- Nothing calibrates between assessors.
- Solution Fit's Experimentation to Integration gate and Workflow's Integration
  to Optimization gate can be answered by the same before-and-after document.
  The playbook tells an assessor to check it against each question separately,
  and nothing enforces that.
- No facilitation guide, and no supplied form for recording an assessment.
- The gate shape is a convention held by reading. Nothing validates that a gate
  has four criteria, exactly one core, and at least one that self-report cannot
  satisfy.
- Satir et al. (1991) is cited from its bibliographic record. The primary text
  was not read.
