# Running an assessment

An assessment places a team at a stage on each of the five dimensions, using evidence instead of self-perception. The output is a profile. It is usually uneven, and that unevenness is the finding you are looking for.

All twenty gates exist, so you can run a full five-dimension assessment today. Nobody has yet run one against a real team, however, so read the known weaknesses at the bottom of this file before you present a result to anyone.

## Scope

Assess a team, not an organisation. Placement is per team, and rolling several teams up into a single organisational figure reintroduces exactly the averaging problem this model exists to avoid.

Two ways to run it:

- **Full.** All five dimensions, taking roughly a day of your time plus the team's. The profile is the whole point.
- **Single dimension.** Legitimate when you have a specific question, and most often that question concerns Knowledge & Context, the dimension teams are least likely to hold a view on already. Say in the write-up that this is a single-dimension result, and that nobody should read it as a maturity level.

## What you need

- **Access to shared documents and instruction files, including their edit history.** Most artifact criteria hang on last-changed dates and author lists. Without that access your assessment degrades into self-report and will overrate the team. Say so in the write-up instead of quietly producing a number anyway.
- **One to two hours of observed work.** You want somebody doing real AI-assisted work while you watch, and not a demo prepared for you.
- **Twenty to thirty minutes each with three or four people in different roles,** including at least one who is not an early adopter. Interview only the people who are already good at this and the concentrated-capability pattern stays invisible.
- **Access to a second team,** which the Solution Fit transferability criterion needs. Arrange it in advance. People skip that criterion more than any other, for purely logistical reasons.

## Sequence

**1. Survey first, to scope.** Put the [S] criteria to the team, twenty-one items across the five dimensions. Treat the results as a map of where to look, not as findings. A team that answers yes to everything is telling you exactly where to be sceptical.

**2. Inspect the artifacts.** Work the [A] criteria, thirty-eight of the eighty. Most of the real signal lives here, because dates and author lists are much harder to argue with than anything a person tells you in an interview. Record what you found, not whether you ticked the box.

**3. Observe.** Work the [O] criteria during a real session. Two moments carry more weight than all the others. When someone supplies context, does the person reach for a shared source or rebuild it from memory? When AI proposes something, what review actually happens?

**4. Place the team.** Work each dimension's gates in `framework/dimensions/`, recording the evidence against each criterion and not only the verdict. A team sits at the highest stage whose entry gate it passed. A pass is three of the four criteria, including the core one. Work upward from Exploration and stop at the first gate that fails.

**5. Read the failure signals before you write anything up.** Each gate names the profile that passes a superficial reading and fails the real one, so check the team against those specifically before you commit to a placement. Three false positives turn up more than any others: a team that cannot produce a single grounding failure, a pilot that scored well and shipped unchanged, and an ethics checklist that has never caused a change.

Metrics play no part in this sequence. If the team has metrics, they describe movement and not placement. `framework/metrics.md` explains why that separation matters.

## Reporting

Report the stage, the gate that stopped them, and the specific criteria that failed. "Integration, held at the Integration to Optimization gate on reachability and independent agreement" is actionable. "Level 3" is not.

Do not average across dimensions, and do not produce a single overall score. Either move destroys the only genuinely useful property of the profile: that it points at one thing to fix next.

Report the scatter itself as the finding. A team at Optimization on Solution Fit and Exploration on Knowledge & Context is not being inconsistent. Its tools fit its work and its grounding lives in three people's heads, and that sentence is the assessment.

Then hand over the next moves, which are set out in `acting-on-a-result.md`.

## Known weaknesses

Say these out loud instead of letting them sit quietly under a confident-looking result.

- **The model has never been run.** It is a complete specification with no field data behind it. The gate wording will almost certainly change once it meets a real team.
- **Every fourth gate is untested.** No assessment has yet placed a team at Continuous Evolution on any dimension, so the Optimization to Continuous Evolution criteria are reasoned and not observed, in all five dimensions.
- **Two criteria are awkward to run.** The independent-agreement test in Knowledge & Context needs two people and an AI session all answering the same question properly, and the second-team test in Solution Fit needs a second team. Both carry a core mark or sit close to one, precisely because people skip them. None of that makes them easier to arrange.
- **Observation changes behaviour.** People supply better context when they know you are watching. Where you can, look at what somebody actually pasted into recent sessions instead of relying only on live observation.
- **You are a single point of judgement.** Nothing here calibrates between assessors, so two people running the same team could place it differently. The likeliest place for that is the Integration to Optimization gates, which carry the most interpretive criteria.
