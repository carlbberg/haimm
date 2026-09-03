# HAIMM v0.2

Released 3 September 2026. Frozen. This is the version of record for v0.2, so
that changes in later versions read as diffs against something fixed.

```
framework/    the model: stages, dimensions, matrix, gates, metrics, references
playbook/     how to run an assessment and what to do with the result
SOURCE.md     what this snapshot contains and what it deliberately leaves out
VERSION       0.2.0
```

**Do not correct anything in this directory.** Corrections belong to v0.3.

## What v0.2 contains

Five stages, unchanged from v0.1.

Five dimensions: Solution Fit, Knowledge & Context, Human-AI Collaboration,
People, Ethics, in that row order. Knowledge & Context is new. The other four
were rewritten for v0.2 and their matrix cells left unchanged.

Twenty gates, four per dimension, one per adjacent stage transition. Eighty
criteria, twenty of them core, each tagged by evidence source. Every gate
carries a failure signal.

A metrics layer that is explicitly barred from deciding placement.

## The difference from v0.1

v0.1 is descriptive. A team places itself and nothing in the model lets them
fail a check. v0.2 is descriptive and assessable: a team is placed against
evidence, and the criteria are written so that a team can fail them.

## What v0.2 has never done

Been run. There is no field data behind any of it. The Optimization to
Continuous Evolution gate in every dimension is reasoned rather than observed.
