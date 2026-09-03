# Running an assessment

Places a team at a stage on each of the five dimensions, using evidence rather than self-perception. The output is a profile, usually uneven, and the unevenness is the finding.

All twenty gates are available in v0.2, so a full five-dimension assessment is possible. None has been run against a real team. Read the known weaknesses at the bottom before you present a result.

## Scope

Assess a team, not an organisation. Placement is per team, and rolling several teams into an organisational figure reintroduces the averaging problem the model exists to avoid.

Two ways to run it:

- **Full.** All five dimensions. Roughly a day of assessor time plus the team's, and the profile is the point.
- **Single dimension.** Legitimate when there is a specific question, most often Knowledge & Context, which is the dimension teams least often have a view on. Say in the write-up that it is a single-dimension result and cannot be read as a maturity level.

## What you need

- **Access to shared documents and instruction files, including edit history.** Most artifact criteria depend on last-changed dates and author lists. Without this the assessment degrades to self-report and will overrate the team. Say so in the write-up rather than quietly producing a number.
- **One to two hours of observed work.** Someone doing real AI-assisted work while you watch, not a demo.
- **Twenty to thirty minutes each with three or four people in different roles**, including at least one person who is not an early adopter. The concentrated-capability pattern is invisible if you only interview the people who are good at this.
- **Access to a second team**, for the Solution Fit transferability criterion. Arrange it in advance; it is the criterion most often skipped for logistical reasons.

## Sequence

**1. Survey first, to scope.** Send the five `instruments/survey-*.md` forms. They cover the [S] criteria only, twenty-one items in total. Treat the results as a map of where to look, not as findings. A team that answers yes to everything is telling you where to be sceptical.

**2. Inspect artifacts.** Work the [A] criteria, thirty-eight of the eighty. This is where most of the real signal is, because dates and author lists are hard to argue with. Record what you found, not whether you ticked the box.

**3. Observe.** Work the [O] criteria in a real session. Two moments carry more than the rest: when someone supplies context, watch whether they reach for a shared source or reconstruct it from memory; and when AI proposes something, watch what review actually happens.

**4. Place.** Fill in the five `instruments/checklist-*.md` files. A team is at the highest stage whose entry gate it passed. Pass is three of four criteria, including the core one. Work upward from Exploration and stop at the first gate that fails.

**5. Read the failure signals before writing anything up.** Each gate names the profile that passes a superficial reading and fails the real one. Check the team against those specifically. The most common false positives across the model are a team that cannot produce a single grounding failure, a pilot that scored well and shipped unchanged, and an ethics checklist that has never caused a change.

Metrics play no part in this sequence. If the team has metrics, they describe movement, not placement. See `framework/metrics.md`.

## Reporting

Report the stage, the gate that stopped them, and the specific criteria that failed. "Integration, held at the Integration to Optimization gate on reachability and independent agreement" is actionable. "Level 3" is not.

Do not average across dimensions or produce a single overall score. It destroys the only useful property of the profile, which is that it points at one thing to fix next.

Report the scatter as the finding. A team at Optimization on Solution Fit and Exploration on Knowledge & Context is not inconsistent; it is a team whose tools fit its work and whose grounding lives in three people's heads, and that sentence is the assessment.

Then hand over next moves. See `acting-on-a-result.md`.

## Known weaknesses

Say these out loud rather than letting them sit under a confident-looking result.

- **The model has never been run.** v0.2 is a complete specification with no field data behind it. Gate wording will change once it meets a real team.
- **Every fourth gate is untested.** No team in the v0.1 worked example was plotted at Continuous Evolution on any dimension. The Optimization to Continuous Evolution criteria are reasoned, not observed, in all five dimensions.
- **Two criteria are awkward to run.** The independent-agreement test in Knowledge & Context needs two people and an AI session answering the same question properly, and the second-team test in Solution Fit needs a second team. Both are marked core or near it precisely because they are the ones people skip, which does not make them easy.
- **Observation changes behaviour.** People supply better context when watched. Where possible, look at what was actually pasted into recent sessions rather than relying only on live observation.
- **The assessor is a single point of judgement.** Nothing here calibrates between assessors. Two people running the same team could place it differently, most likely at the Integration to Optimization gates, which carry the most interpretive criteria.
