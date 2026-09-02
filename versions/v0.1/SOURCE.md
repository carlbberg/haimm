# Source and provenance, HAIMM v0.1

## Canonical publication

| Field | Value |
|---|---|
| Platform | Medium |
| Author | Carlos Rosemberg (@carlbberg) |
| Published | 24 December 2024 |
| URL | https://medium.com/@carlbberg/the-human-ai-maturity-model-rethinking-ai-adoption-with-people-at-the-core-b4d4680766bb |
| Archived to this repo | 2 September 2026 |

The article remains live at that URL and can still be edited there. This
directory is the version of record for the repository. Where the two diverge,
this directory is what v0.2 diffs against.

## Title

Three different titles are attested and they have not been reconciled.

| Where | String |
|---|---|
| URL slug, which preserves the title at first publication | the-human-ai-maturity-model-rethinking-ai-adoption-with-people-at-the-core |
| Obsidian capture frontmatter, 2 September 2026 | Rethinking Agentic AI Adoption with Collaboration at the Core |
| Live page headline, checked 2 September 2026 | Rethinking AI Adoption with Collaboration at the Core |

`article.md` uses the title reconstructed from the slug, because that is the
title under which v0.1 was published and the one v0.1 should be cited by. The
live headline differs, which means the article was retitled at least once after
publication. The capture and the live check disagree on the word "Agentic";
the live check was made by an automated fetch and summarisation step, so it is
weaker evidence than a direct read. Unresolved. Confirm by opening the article
in a browser and reading the headline directly.

## How this text was captured

The body came from an Obsidian web clipping made on 2 September 2026, not from
Medium's own export. The capture is lossy. The following were repaired against
the live article before committing:

| Loss | Treatment |
|---|---|
| The "Stage 1: Exploration" heading and its description were absent from the capture | Restored. Verified present in the published article; text confirmed by fetch on 2 September 2026: "This stage focuses on identifying opportunities, understanding user needs and concerns, and setting initial guardrails." |
| A reader's highlight markers (`==...==`) around eight passages | Removed. They are a reader annotation, not part of the text. |
| A Google `id_token` JWT containing the author's email, appended to the source URL by the capture tool | Removed. Never commit it. |
| Medium CDN image URLs | Replaced with relative paths into `figures/`. Original CDN URLs recorded in `figures/README.md`. |
| Typographic dashes and curly quotes normalised by the capture | Left as the capture produced them. Not reconstructed. |

Nothing else was changed. Errors present in the published text are preserved.

## Defects in the published text, preserved here

These are in v0.1 as published. They are not corrected in this directory.
They are candidates for correction in v0.2.

1. **Four stages listed where the model has five.** "It consists of
   *Exploration, Experimentation, Integration, and Continuous Evolution*"
   omits Optimization. Editorial slip; the rest of the article uses five
   throughout.

2. **The ten-level automation scale is attributed to Parasuraman, Sheridan &
   Wickens (2000).** The ten-level scale originates with Sheridan & Verplank
   (1978). The 2000 paper reproduces it and crosses it with four function
   types. Further, the figure in the article shows the four-stage information
   processing model, and its caption describes that, while the surrounding
   text is about the ten levels. Both citations need checking against the
   primary sources before this is corrected in print.

3. **Nielsen's "4 metaphors" yields three.** The article cites a source about
   four metaphors and lists three roles: teacher, coach, colleague. The fourth
   is not accounted for.

4. **Tuckman's Adjourning is mapped to Continuous Evolution.** Adjourning means
   the team disbands, which is the opposite of continuous evolution. v0.1
   hedges it as "Adjourning/Transforming", which is not a Tuckman stage.

5. **The Ethics band in the stages-by-dimensions figure has no arrowhead**
   where the other four bands do. Probably an export artifact. Cosmetic.

6. **"Stage 1: Exploration is missing from the article" is not a defect.**
   The v0.2 scaffold's evidence log records this as confirmed. It is not. The
   heading is present in the published article and was lost by the capture.
   Correct that entry when the scaffold is merged.

## Rights

The article text is the author's own work. Two of the four figures are not.
See `figures/README.md`. Resolve before this repository is made public.
