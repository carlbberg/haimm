# Running an assessment

An assessment places a team at a stage on each of the five dimensions, using evidence instead of self-perception. The output is a profile, it is usually uneven, and that unevenness is the finding you are looking for.

All twenty gates are defined, so a full five-dimension assessment is possible today. None of them has been run against a real team, however, so please read the known weaknesses at the bottom of this file before you present a result to anyone.

## Scope

Assess a team and not an organisation. Placement is per team, and rolling several teams up into a single organisational figure reintroduces exactly the averaging problem that the model exists to avoid.

Two ways to run it:

- **Full.** All five dimensions, taking roughly a day of assessor time plus the team's, where the profile is the whole point of the exercise.
- **Single dimension.** This is legitimate when you have a specific question, and most often that question concerns Knowledge & Context, which is the dimension teams are least likely to have a view on already. Say in the write-up that it is a single-dimension result and that it cannot be read as a maturity level.

## What you need

- **Access to shared documents and instruction files, including their edit history.** Most of the artifact criteria depend on last-changed dates and author lists. Without that access the assessment degrades into self-report and will overrate the team, so say so in the write-up instead of quietly producing a number anyway.
- **One to two hours of observed work.** You want somebody doing real AI-assisted work while you watch, and not a demo prepared for you.
- **Twenty to thirty minutes each with three or four people in different roles,** including at least one person who is not an early adopter. The concentrated-capability pattern will be invisible to you if you only interview the people who are already good at this.
- **Access to a second team,** which you need for the Solution Fit transferability criterion. Arrange it in advance, because it is the criterion most often skipped for purely logistical reasons.

## Sequence

**1. Survey first, in order to scope.** Put the [S] criteria to the team, which is twenty-one items across the five dimensions. Treat the results as a map of where to look, not as findings in their own right. For example, a team that answers yes to everything is telling you exactly where to be sceptical.

**2. Inspect the artifacts.** Work the [A] criteria, which are thirty-eight of the eighty. This is where most of the real signal lives, because dates and author lists are hard to argue with. Record what you found, not whether you ticked the box.

**3. Observe.** Work the [O] criteria during a real session. Two moments carry more weight than all the others. When someone supplies context, watch whether they reach for a shared source or reconstruct it from memory, and when AI proposes something, watch what review actually takes place.

**4. Place the team.** Work each dimension's gates in `framework/dimensions/`, recording the evidence against each criterion and not only the verdict. A team sits at the highest stage whose entry gate it passed, a pass is three of the four criteria including the core one, and you should work upward from Exploration and stop at the first gate that fails.

**5. Read the failure signals before you write anything up.** Each gate names the profile that passes a superficial reading and fails the real one, so check the team against those specifically. The most common false positives across the whole model are a team that cannot produce a single grounding failure, a pilot that scored well and shipped unchanged, and an ethics checklist that has never once caused a change.

Metrics play no part at all in this sequence. If the team has metrics, they describe movement and not placement, and `framework/metrics.md` explains why that separation matters.

## Reporting

Report the stage, the gate that stopped them and the specific criteria that failed. Something like "Integration, held at the Integration to Optimization gate on reachability and independent agreement" is actionable, whereas "Level 3" is not.

Do not average across dimensions, and do not produce a single overall score. Doing either destroys the only genuinely useful property of the profile, which is that it points at one thing to fix next.

Report the scatter itself as the finding. A team sitting at Optimization on Solution Fit and Exploration on Knowledge & Context is not being inconsistent, it is a team whose tools fit its work and whose grounding lives in three people's heads, and that sentence is the assessment.

Then hand over the next moves, which are set out in `acting-on-a-result.md`.

## Known weaknesses

Say these out loud instead of letting them sit quietly underneath a confident-looking result.

- **The model has never been run.** It is a complete specification with no field data behind it at all, and the gate wording will almost certainly change once it meets a real team.
- **Every fourth gate is untested.** No assessment has yet placed a team at Continuous Evolution on any dimension, which means the Optimization to Continuous Evolution criteria are reasoned and not observed in all five dimensions.
- **Two criteria are awkward to run.** The independent-agreement test in Knowledge & Context needs two people and an AI session all answering the same question properly, and the second-team test in Solution Fit needs a second team. Both are marked core or close to it precisely because they are the ones people skip, and none of that makes them any easier to arrange.
- **Observation changes behaviour.** People supply better context when they know they are being watched, so where you can, look at what was actually pasted into recent sessions instead of relying only on live observation.
- **The assessor is a single point of judgement.** Nothing here calibrates between assessors, so two people running the same team could well place it differently, and the most likely place for that to happen is at the Integration to Optimization gates, which carry the most interpretive criteria.
