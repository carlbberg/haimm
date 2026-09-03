# Figures, HAIMM v0.1

Four figures as they appear in the published article. Two are the author's own
work. Two are not, and their inclusion here is unresolved.

| File | What it shows | Origin | Rights status |
|---|---|---|---|
| `haimm-v0.1-assessment-view.png` | Five stages by four dimensions, with Team/Organization A and B plotted as markers | Author | Author's own work. Clear. |
| `haimm-v0.1-stages-dimensions.png` | Five stages by four dimensions, each cell describing how the dimension evolves | Author | Author's own work. Clear. |
| `parasuraman-2000-automation-levels.png` | The ten levels of automation for decision and action selection, above the four-stage model of human information processing | Reproduced from Parasuraman, Sheridan & Wickens (2000), IEEE Trans. SMC-A 30(3), 286-297 | **Unresolved.** IEEE holds copyright. Reproduction in a Medium article is a different context from redistribution in a repository, and different again from a repository published under a CC licence. |
| `satir-change-model.png` | Virginia Satir's change model as a performance-over-time curve | Rendering appears to originate with WalkMe's change management blog, cited in the article as WalkMe Team (2024) | **Unresolved.** The underlying model is Satir's; this particular diagram is someone's rendering of it and carries its own rights. |

## Why they are committed anyway

Committing them keeps the v0.1 archive complete and lets the v0.1 to v0.2 diff
be meaningful, which is the point of this directory. The repository is private.

## What has to happen before the repository is public

Pick one per third-party figure:

1. Remove the image and cite the source, leaving the reader to find it.
2. Redraw the content in the author's own form, citing the original. Legitimate
   for the Satir model, whose five stages are the substance and are not owned
   by any one rendering. Less straightforward for the Parasuraman figure, whose
   layout is the substance.
3. Obtain permission. IEEE has a stated reuse process.
4. Rely on fair use or fair dealing for scholarly commentary, and record the
   reasoning rather than assuming it.

Option 4 is the weakest of the four to rely on silently. Whichever is chosen,
record it here.

## Decision taken for v0.2

Option 1, partially, and only for the live model. Neither third-party figure is
carried into `framework/`. The v0.2 dimension files describe the content in
text and cite the source: the ten-level scale as Sheridan and Verplank (1978)
with the 2000 crossing attributed correctly, and Satir's five phases named
without the diagram, which is a third-party rendering rather than Satir's own.

The archived copies here are untouched, because this folder is v0.1 as
published and the repository is private. That is not a resolution, only a
deferral of one. Before the repository is made public, both files have to be
removed from the working tree **and** purged from git history, or permission
obtained. Removing them from the tree alone does nothing, since history is
where they would still be served from.

Tracked as item 11 in `research/open-questions.md`.

## Original CDN locations

The article serves these from Medium's CDN. Recorded so the published figures
can be re-fetched if these files are ever lost.

- Assessment view: `https://miro.medium.com/v2/resize:fit:2000/format:webp/1*rYLFNkWSf2VFkuP5VHhv4g.png`
- Automation levels: `https://miro.medium.com/v2/resize:fit:1400/format:webp/1*HCKnBf8fNehZeWJQwje1CA.png`
- Satir change model: `https://miro.medium.com/v2/resize:fit:1400/format:webp/1*JqgtBLkCN5gOikLIJfL3xA.png`
- Stages by dimensions: `https://miro.medium.com/v2/resize:fit:2000/format:webp/1*OmtWrPs7RGPXyII6ksZaFw.png`

A fifth image in the article, a generated illustration used as the header, is
not archived here. It is decorative and carries no model content.
