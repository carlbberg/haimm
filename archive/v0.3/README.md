# HAIMM v0.3

Released 3 September 2026. Frozen. This is the version of record for v0.3, so
that changes in later versions read as diffs against something fixed.

```
framework/    the model: stages, dimensions with their gates, matrix, metrics, references
playbook/     how to run an assessment and what to do with the result
SOURCE.md     what this snapshot contains and what it deliberately leaves out
VERSION       0.3.0
```

**Do not correct anything in this directory.** Corrections belong to v0.4.

## What v0.3 contains

Two axes. Five stages, one file each, carrying the reading of that stage across
all five dimensions. Five dimensions: Solution Fit, Knowledge & Context,
Human-AI Collaboration, People, Ethics, in that row order. Twenty-five matrix
cells, held in one place.

Twenty gates, four per dimension, each written into the dimension file it
belongs to. Eighty criteria, twenty of them core, each tagged by evidence
source. Every gate carries a failure signal.

A metrics layer that is explicitly barred from deciding placement.

## The difference from v0.2

v0.2 kept the model in three forms: YAML as the source, generated markdown, and
instruments rendered from the same criteria. v0.3 has one. The markdown is the
model, there is no schema and no build step, and a dimension file holds
everything a team is assessed against on that dimension.

Stages gained files of their own. In v0.2 a stage was a table row while a
dimension was a file, an asymmetry inherited from a figure rather than from the
model.

Version archaeology is gone from the model text. v0.2 described itself in terms
of what v0.1 said; v0.3 stands on its own and the diffs live in the changelog.

Every citation used in `framework/` is verified. v0.2 released with four
unverified.

## What v0.3 has never done

Been run. There is no field data behind any of it. The Optimization to
Continuous Evolution gate in every dimension is reasoned rather than observed.
