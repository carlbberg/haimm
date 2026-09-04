# HAIMM v0.4

Released 4 September 2026. Frozen. This is the version of record for v0.4, so
that changes in later versions read as diffs against something fixed.

```
framework/    the model: stages, dimensions with their gates, matrix, metrics, references
playbook/     how to run an assessment and what to do with the result
SOURCE.md     what this snapshot contains and what it deliberately leaves out
VERSION       0.4.0
```

**Do not correct anything in this directory.** Corrections belong to v0.5.

## What v0.4 contains

Two axes. Five stages, one file each, carrying the reading of that stage across
all six dimensions. Six dimensions: Solution Fit, Workflow, Knowledge & Context,
Human-AI Collaboration, People, Ethics, in that row order. Thirty matrix cells,
held in one place.

Twenty-four gates, four per dimension, each written into the dimension file it
belongs to. Ninety-six criteria, twenty-four of them core, each tagged by
evidence source. Every gate carries a failure signal.

A metrics layer that is explicitly barred from deciding placement.

## The difference from v0.3

Workflow is new, and it is the whole of the change. People, process and tools is
the vocabulary transformation work uses, and HAIMM mapped onto it unevenly.
People was a dimension. Tools sat outside the model on purpose, delegated to the
enterprise frameworks. Process was scattered across three dimensions with
nothing anywhere explaining why, and a team could pass all five dimensions with
every workflow unchanged and AI laid on top of it.

The dimension asks whether the shape of the work was reconsidered in light of
what AI made possible, and whether anyone acted on the answer. Its unit is the
outcome a workflow exists to produce and not the step, which is what keeps it
from becoming a measure of processes getting smaller. Zuboff's automate and
informate distinction is the lens.

People gained a fifth interaction criterion, displacement, asking whether the
effect on roles was named in advance where a workflow changed shape. It
displaced the criterion asking for training materials with a recorded date of
use.

Row order changed, so Workflow sits second and the other four dimension files
were renumbered.

## What v0.4 has never done

Been run. There is no field data behind any of it, and the Optimization to
Continuous Evolution gate in every dimension is reasoned rather than observed.

Workflow in particular went in on reasoning alone, ahead of the first
assessment, and against the recommendation the draft that proposed it carried.
The conditions for removing it again are recorded in `../../research/open-questions.md`
and restated in `playbook/running-an-assessment.md`.
