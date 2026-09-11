// Fictional teaching cases. The gate criteria themselves come from model-data.js.
export const cases = [
  {
    gate: 1, title: 'The pilot everyone loved.', team: 'Customer operations',
    story: 'The sponsor wants to move a drafting assistant into everyday work. The pilot deck looks excellent. You open the evidence behind it.',
    evidence: [
      ['Change log', 'The solution shipped unchanged. There is no before-and-after showing a change prompted by user feedback.'],
      ['Participant interview', 'A daily user names a problem they raised and explains why the team explicitly declined that request.'],
      ['Pilot roster', 'The pilot included the people handling customer cases every day, alongside the early adopters.'],
      ['Participant survey', 'People liked the assistant, but say their input did not change it. The satisfaction score is 94%.']
    ], met: [false, true, true, false],
    question: 'Can this team pass the Solution Fit gate into Integration?',
    options: ['Yes. Strong satisfaction is enough to move forward.', 'Not yet. The core evidence of a feedback-led change is missing.', 'Yes. Involving daily users proves that the solution fits.'], answer: 1,
    explanation: 'Two criteria are evidenced, and the core is missing. Listening to users matters, but this gate asks whether their feedback actually reshaped the solution. A satisfaction score cannot decide placement.',
    lesson: 'Ask what feedback changed.',
    reflection: 'Think of a recent AI pilot in your team. What changed because someone who does the work spoke up?'
  },
  {
    gate: 1, title: 'The redesign that stayed put.', team: 'Service delivery',
    story: 'A team reviewed how it resolves complex service requests. After considering a different structure, it deliberately kept the existing workflow. The sponsor calls that a failure.',
    evidence: [
      ['Decision record', 'The review began with the outcome: resolve a request correctly. It records the questions, the decision to keep the structure, and why.'],
      ['Alternative design', 'A parallel triage structure was described and set aside because it lost a necessary handoff.'],
      ['Observed conversation', 'A case handler explains the review and how their experience of exceptions shaped the decision.'],
      ['Team survey', 'No responses were collected about whether the review asked how work should be structured.']
    ], met: [true, true, true, false],
    question: 'Can this evidence pass the Workflow gate into Integration?',
    options: ['Not yet. At least one step must disappear.', 'Not yet. Every criterion must be met.', 'Yes. Three criteria, including the core, are evidenced.'], answer: 2,
    explanation: 'The team has evidenced three criteria, including the core. A purpose-led reconsideration with a real alternative can conclude “unchanged, deliberately.” Removing steps is not the test. This decision concerns Workflow alone.',
    lesson: 'Reconsider the purpose before the steps.',
    reflection: 'Can your team state what a workflow is for without reciting its steps? What real alternative have you considered?'
  },
  {
    gate: 2, title: 'One question. Three answers.', team: 'Account services',
    story: 'The team has invested in a shared knowledge hub. Everything looks orderly until two colleagues and an AI session are asked the same question about a customer exception.',
    evidence: [
      ['Content register', 'Every context artifact used by the team has an owner and a substantive update inside its agreed freshness window.'],
      ['Conflict review', 'The team describes a conflict between two policy sources and the recorded decision that made one authoritative.'],
      ['Tool configuration', 'The agreed sources are reachable from the AI tools people use, without anyone pasting the context again.'],
      ['Agreement check', 'The two people and the AI session give substantially different answers to the same work-critical question.']
    ], met: [true, true, true, false],
    question: 'Three criteria are met. Can Knowledge & Context move to Optimization?',
    options: ['Not yet. The independent-agreement criterion is core.', 'Yes. Any three of the four criteria are enough.', 'No. All six dimensions must reach Integration first.'], answer: 0,
    explanation: 'Three out of four is necessary, but the core cannot be skipped. Here, independent agreement is core and has not been demonstrated. Good documentation and access do not resolve the conflicting answers by themselves.',
    lesson: 'Check shared understanding in practice.',
    reflection: 'Which question should two colleagues and an AI session answer consistently? What would you learn if they disagree?'
  },
  {
    gate: 2, title: 'The assistant takes an action.', team: 'Planning operations',
    story: 'The team wants AI to take on a bounded recurring task. A manager worries that any human approval means the team cannot be at Optimization.',
    evidence: [
      ['Observed work', 'AI produces a usable routine plan without the person repeating context they supplied in an earlier session.'],
      ['Review process', 'A current process document explains how people review and approve AI-proposed actions.'],
      ['Team survey', 'For this recurring task, people report reviewing the output instead of rebuilding it from scratch.'],
      ['Action record', 'A log records AI executing an approved scheduling action, with the human approval attached.']
    ], met: [true, true, true, true],
    question: 'Can Human-AI Collaboration pass this gate into Optimization?',
    options: ['Not yet. Optimization requires removing human approval.', 'Yes. All four criteria are evidenced, including the core.', 'Only if every other dimension is already at Optimization.'], answer: 1,
    explanation: 'All four criteria are evidenced. Human approval is compatible with this gate, and the action record explicitly includes it. The decision gives no automatic placement to the other dimensions.',
    lesson: 'Make collaboration dependable and bounded.',
    reflection: 'Where can AI do useful recurring work without someone rebuilding its context? Who reviews and approves the resulting actions?'
  },
  {
    gate: 2, title: 'The champions are on holiday.', team: 'Commercial operations',
    story: 'Two early adopters make the AI-supported workflow look easy. When both take leave, the rest of the team queues its work for their return.',
    evidence: [
      ['Onboarding record', 'Only the original pilot participants can complete the workflow proficiently. Nobody else has reached competence with the training material.'],
      ['Support survey', 'People across the team know where to get help when the workflow does not behave as expected.'],
      ['Observed work', 'A recent hire cannot complete the workflow without the original builder taking over.'],
      ['Role decision', 'Before the workflow changed structure, the team recorded the effect on roles and what it would do for the people affected.']
    ], met: [false, true, false, true],
    question: 'What does the evidence say about the People gate into Optimization?',
    options: ['It passes. The champions prove the team is capable.', 'It passes if the workflow is saving enough time.', 'Not yet. Capability has not spread beyond the early adopters.'], answer: 2,
    explanation: 'Two criteria are evidenced and the core is missing. Individual mastery does not demonstrate distributed team capability. The useful next move is to help someone outside the pilot reach competence with support they can reuse.',
    lesson: 'Look beyond the champions.',
    reflection: 'Who can do this work when your strongest AI user is away? What would help one more person become independently capable?'
  },
  {
    gate: 3, title: 'A policy that learned something.', team: 'Quality operations',
    story: 'A new use case exposed a gap in the team’s guardrails. The team revised its practice and can show what it learned in the last cycle.',
    evidence: [
      ['Guardrail revision', 'A substantive revision in the last review cycle restricts a newly identified use case and records the reason.'],
      ['Monitoring record', 'Continuous monitoring caught a specific issue; the record shows the case and how the team handled it.'],
      ['Risk conversation', 'A team member describes how the team would discover an emerging ethical risk before it became an incident.'],
      ['Team survey', 'No survey evidence is available about whether people have seen ethical practice change.']
    ], met: [true, true, true, false],
    question: 'Can Ethics pass this gate into Continuous Evolution?',
    options: ['Yes. Three criteria, including the core, are evidenced.', 'Not yet. Every other dimension must reach the same stage.', 'Yes, because the number of incidents is below a target.'], answer: 0,
    explanation: 'Three criteria are evidenced, including the substantive guardrail revision at the core. The monitoring record shows a practice operating; no numerical target decides placement. Continuous Evolution remains a provisional, untested stage of the model, and practice needs continuing review.',
    lesson: 'Look for governance that learns.',
    reflection: 'Which guardrail changed because your team learned something? What evidence would show that it works between scheduled reviews?'
  }
];

export function passesGate(criteria, evidence) {
  if (criteria.length !== 4 || evidence.length !== 4 || criteria.filter(c => c.core).length !== 1 || evidence.some(v => typeof v !== 'boolean')) throw new Error('A gate needs four evidence decisions and exactly one core criterion.');
  return evidence.filter(Boolean).length >= 3 && criteria.every((c,i) => !c.core || evidence[i]);
}

export function recordDecision(decisions, round, choice) {
  if (!Number.isInteger(round) || !cases[round] || !Number.isInteger(choice) || !cases[round].options[choice]) throw new Error('Invalid decision.');
  if (decisions[round] !== undefined) return [...decisions];
  const updated = [...decisions]; updated[round] = choice; return updated;
}

export function learningScore(decisions) {
  return cases.reduce((score,c,i) => score + Number(decisions[i] === c.answer),0);
}

export function gateForReflection(stage) {
  if (stage === null) return null;
  if (!Number.isInteger(stage) || stage < 0 || stage > 4) throw new Error('Invalid stage.');
  return Math.min(stage,3);
}
