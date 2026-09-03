# Source and provenance, HAIMM v0.3

## Publication

| Field | Value |
|---|---|
| Form | Repository, not an article |
| Author | Carlos Rosemberg (@carlbberg) |
| Released | 3 September 2026 |
| Predecessor | v0.2, released 3 September 2026, archived at `../v0.2/` |

v0.3 was developed in this repository. There is no published article for it. If
one is written, it is a rendering of this directory, not the other way round.

## What this snapshot contains

`framework/` and `playbook/`, copied verbatim from the repository root at
release. Nothing here is generated. v0.2's YAML source, its generated gate
markdown and its rendered instruments were all removed during v0.3, so there is
no build to reproduce and no pipeline to record. The v0.2 pipeline is preserved
in `../v0.2/`.

## What it deliberately leaves out

Per the convention in `../README.md`, files that describe the project rather
than one version stay at the repository root and are not copied here:
`research/` (the evidence log and open questions), `CHANGELOG.md`, and
`AGENTS.md`. There is one of each and they cover all versions.

The two third-party figures reproduced in `../v0.1/figures/` are not carried
into v0.3 in any form. Permission for both was obtained during v0.3 and is
recorded in `../v0.1/figures/README.md`. They remain outside the repository's
MIT licence.

## Citation state at release

Twenty-one sources were checked against publisher records or the primary
document. Every citation used in `framework/` is verified. The only sources
carried unverified are the enterprise maturity models HAIMM positions against,
which are cited as positioning rather than as evidence for any claim.

One v0.2 attribution defect was corrected in v0.3 and is named in the text
rather than quietly fixed: the five phase names the People dimension uses, late
status quo, resistance, chaos, integration and new status quo, are Steven M.
Smith's 1997 rendering rather than Satir et al. (1991), which he cites. The
dimension now cites both.

Three sources carried as unverified through v0.2 were checked and hold:
Mollick (2023), Moravec (1988) and Noessel (2017). Where only a bibliographic
record or catalogue entry was checked rather than a full text,
`research/evidence-log.md` says so.

## Known limits at release

- No field data. The model has never been run against a team.
- Every dimension's Optimization to Continuous Evolution gate is reasoned, not
  observed, because no team in the v0.1 worked example was plotted at
  Continuous Evolution on any dimension.
- Nothing calibrates between assessors.
- No facilitation guide, and no supplied form for recording an assessment.
  v0.2's instruments were removed and the replacement is deferred to a tooling
  layer built on top of the model.
- The gate shape is a convention held by reading. Nothing validates that a gate
  has four criteria, exactly one core, and at least one that self-report cannot
  satisfy.
- Satir et al. (1991) is cited from its bibliographic record. The primary text
  was not read.
