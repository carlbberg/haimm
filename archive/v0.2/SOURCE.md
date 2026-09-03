# Source and provenance, HAIMM v0.2

## Publication

| Field | Value |
|---|---|
| Form | Repository, not an article |
| Author | Carlos Rosemberg (@carlbberg) |
| Released | 3 September 2026 |
| Predecessor | v0.1, published on Medium 24 December 2024, archived at `../v0.1/` |

v0.2 was developed in this repository rather than in a document. There is no
published article for it. If one is written, it is a rendering of this
directory, not the other way round.

## What this snapshot contains

`framework/` and `playbook/`, copied verbatim from the repository root at
release. Everything in `framework/gates/generated/` and
`playbook/instruments/` was produced by `tools/generate.py` from the YAML in
the same snapshot, and `tools/validate.py` passed on all five files at the
commit this was taken from.

## What it deliberately leaves out

Per the convention in `../README.md`, files that describe the project rather
than one version stay at the repository root and are not copied here:
`research/` (the evidence log and open questions), `CHANGELOG.md`, `tools/`,
and `CLAUDE.md`. There is one of each and they cover all versions.

The two third-party figures reproduced in `../v0.1/figures/` are not carried
into v0.2 in any form. Their content is described in text with the original
sources cited. See `../v0.1/figures/README.md`.

## Citation state at release

Sixteen sources were checked against publisher records or the primary document
during the release pass. Where only a bibliographic record or abstract was
checked rather than a full text, `research/evidence-log.md` says so.

Three v0.1 citation defects were corrected in v0.2 and are named in the text
rather than quietly fixed:

1. The ten-level automation scale is Sheridan and Verplank (1978), not
   Parasuraman, Sheridan and Wickens (2000). The 2000 contribution is crossing
   degree of automation with four stages of information processing.
2. Nielsen's (2024) four metaphors are intern, coworker, teacher, coach. v0.1
   listed three and renamed coworker to colleague.
3. Tuckman (1965) has four stages. Adjourning is Tuckman and Jensen (1977) and
   means the group disbands, so it does not map onto Continuous Evolution.

A fourth entry, that v0.1 omitted a description of Stage 1, was withdrawn. The
description is present in the published article and was lost by the web capture
used to archive it.

## Known limits at release

- No field data. The model has never been run against a team.
- Every dimension's Optimization to Continuous Evolution gate is reasoned, not
  observed, because no team in the v0.1 worked example was plotted at
  Continuous Evolution on any dimension.
- Nothing calibrates between assessors.
- No facilitation guide.
