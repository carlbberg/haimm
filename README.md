# HAIMM: Human-AI Maturity Model

A human-centric framework for AI adoption, focused on collaboration, cultural
shifts, real-world user needs and ethics rather than technological readiness.
Complementary to enterprise AI maturity models (Gartner, Forrester, Deloitte,
IBM's AI Ladder, Microsoft's Responsible AI Maturity Model) rather than a
replacement for them.

Author: Carlos Rosemberg

**This commit is v0.1, as published.** It is the baseline. Everything after it
is a change to the model, and the diff from this tag is the record of what
changed.

## What v0.1 is

Five stages, describing how a team or organization progresses over time:

1. Exploration
2. Experimentation
3. Integration
4. Optimization
5. Continuous Evolution

Four dimensions, the building blocks that keep adoption human-centric:

1. Solution Fit
2. Human-AI Collaboration
3. People
4. Ethics

Each dimension is described at each stage, with an example. Each dimension also
carries a per-stage list of suggested metrics. v0.1 is descriptive: it tells a
team what a stage looks like, but gives them no way to fail a check, so
placement rests on self-assessment.

## Contents

```
article.md    the published text, verbatim, defects preserved
SOURCE.md     provenance, capture method, and the defects preserved
figures/      the four figures, with a rights note
VERSION       0.1.0
```

## Reading this repository

`article.md` is the model. `SOURCE.md` is how to trust it: what was captured,
what was repaired, and the six things known to be wrong or unresolved.

Do not correct `article.md`. Corrections belong to the next version, so that
the diff shows a decision rather than an edit.

## What comes next

v0.2 is drafted separately and not yet in this repository. Its two substantive
changes are a fifth dimension, Knowledge & Context, covering the shared
understanding work depends on, both between people and AI and among people
themselves; and gates, four per dimension, one per stage transition, with
criteria checkable against artifacts, observation or survey. Gates are what
turn HAIMM from something you read into something a team can be assessed
against.

## Licence

Not yet decided. The repository is private while v0.2 takes shape. Add a
`LICENSE` before making it public. CC BY 4.0 and CC BY-SA 4.0 are the
candidates, and the choice determines whether a consultancy can absorb the
model into closed material.

Two of the four figures are third-party and their status is unresolved. See
`figures/README.md`. That has to be settled before publication regardless of
which licence is chosen.
