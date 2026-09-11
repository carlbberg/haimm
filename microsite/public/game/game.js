import { model } from '../model-data.js';
import { cases, passesGate, recordDecision, learningScore, gateForReflection } from './cases.js';

const workspace = document.querySelector('#workspace');
const state = { round: 0, phase: 'case', decisions: [], stages: Array(6).fill(undefined), notes: Array(6).fill(''), workflow: '', editing: false, plan: { dimension: '', action: '', owner: '', date: '' } };
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const evidenceTypes = { A: 'Artifact', S: 'Survey', O: 'Observation or interview' };
const note = 'This is a self-reported reflection, not a verified gate assessment. HAIMM has no field validation yet. Workflow is its newest and most provisional dimension.';

function gateReference(dimension, gateIndex, evidence) {
  const d = model.dimensions[dimension];
  const gate = d.gates[gateIndex];
  return `<details class="gate-reference"><summary>Open the actual gate: ${escape(gate.name)}</summary><p>${escape(gate.tests)}</p><p>A pass takes three of four criteria, including the core. [A] means artifact inspection, [S] means survey, and [O] means observation or interview.</p><ol>${gate.criteria.map((c,i) => `<li><span class="tag">[${c.type}] ${evidenceTypes[c.type]}</span>${c.core ? '<span class="tag core">Core</span>' : ''} ${escape(c.text)}${evidence ? `<span class="evidence-status ${evidence[i] ? '' : 'missing'}">${evidence[i] ? 'Evidenced in this fictional case' : 'Not evidenced in this fictional case'}</span>` : ''}</li>`).join('')}</ol><p><strong>Failure signal.</strong> ${escape(gate.failure)}</p><a href="../${escape(d.source)}" target="_blank" rel="noopener">Read the source dimension ↗</a></details>`;
}

function header(title, description, eyebrow) {
  const completed = state.phase === 'results' ? 12 : state.round * 2 + (state.phase === 'reflect' ? 1 : 0);
  return `<div class="case-header"><div class="case-meta"><span class="eyebrow">${escape(eyebrow)}</span><span class="round-count">${state.phase === 'results' ? 'Debrief' : `${String(state.round+1).padStart(2,'0')} / 06`}</span></div><h2 tabindex="-1">${escape(title)}</h2><p>${escape(description)}</p></div><div class="progress-line" role="progressbar" aria-label="Learning journey" aria-valuemin="0" aria-valuemax="12" aria-valuenow="${completed}"><span style="width:${completed / 12 * 100}%"></span></div>`;
}

function renderCase() {
  const r = state.round, c = cases[r], d = model.dimensions[r], answered = state.decisions[r] !== undefined;
  const correct = state.decisions[r] === c.answer;
  const gate = d.gates[c.gate];
  return `<article class="case-card">${header(c.title,c.story,`${d.name} · ${c.team}`)}<div class="case-body"><div class="brief-label"><span class="eyebrow">The evidence on your desk</span><span>Fictional case · Earlier gates are assumed passed</span></div><div class="evidence-grid">${c.evidence.map(([label,text],i) => `<div class="evidence"><p class="eyebrow">${escape(label)}</p><p>${escape(text)}</p>${answered ? `<span class="evidence-status ${c.met[i] ? '' : 'missing'}">${c.met[i] ? '✓ Evidenced' : '○ Not evidenced'}${gate.criteria[i].core ? ' · Core criterion' : ''}</span>` : ''}</div>`).join('')}</div><p class="question">${escape(c.question)}</p><div class="options" role="group" aria-label="Choose your decision">${c.options.map((text,i) => `<button class="option ${answered && i === c.answer ? 'correct' : ''} ${answered && i === state.decisions[r] ? `selected ${correct ? '' : 'incorrect'}` : ''}" data-action="decide" data-choice="${i}" ${answered ? 'disabled' : ''}><span class="letter" aria-hidden="true">${'ABC'[i]}</span><span>${escape(text)}${answered && i === c.answer ? ' ✓ Best-supported answer' : answered && i === state.decisions[r] ? ' · Your answer' : ''}</span></button>`).join('')}</div>${answered ? `<section class="feedback" aria-labelledby="feedback-title"><h3 id="feedback-title" tabindex="-1">${correct ? 'Good call.' : 'A useful distinction.'} ${passesGate(gate.criteria,c.met) ? 'This gate passes.' : 'This gate is not yet passed.'}</h3><p>${escape(c.explanation)}</p><p><strong>Take it into your next conversation:</strong> ${escape(c.lesson)}</p></section>${gateReference(r,c.gate,c.met)}<div class="actions"><span class="hint">${learningScore(state.decisions)} correct practice decision${learningScore(state.decisions) === 1 ? '' : 's'} · This is not a maturity score.</span><button class="primary" data-action="reflect">Connect to your team <span aria-hidden="true">→</span></button></div>` : `<div class="actions"><span class="hint">No timer. Read the evidence, then make your call.<br>A gate needs 3 of 4 criteria, including its core. Metrics never decide placement.</span><span class="tag">Practice ${r+1} of 6</span></div>${gateReference(r,c.gate)}`}</div></article>`;
}

function renderReflection() {
  const r = state.round, d = model.dimensions[r], c = cases[r];
  const choice = state.stages[r];
  return `<article class="case-card">${header('Bring it back to your team.',c.reflection,`${d.name} · Your reality`)}<form class="case-body" id="reflection-form"><p class="reflection-intro">${state.workflow ? `Thinking about <strong>${escape(state.workflow)}</strong>, which` : 'Which'} description comes closest to everyday practice? Choose a starting hypothesis. We have not checked your team’s gates.</p><fieldset style="border:0;padding:0;margin:0"><legend class="question">Your provisional ${escape(d.name)} reading</legend><div class="stage-options">${model.stages.map((s,i) => `<label class="stage-option"><input type="radio" name="stage" value="${i}" ${choice === i ? 'checked' : ''} required><span><strong>${i+1}. ${escape(s.name)}</strong>${escape(d.cells[i])}</span></label>`).join('')}<label class="stage-option"><input type="radio" name="stage" value="unknown" ${choice === null ? 'checked' : ''} required><span><strong>I don’t have enough evidence yet.</strong>Leave this dimension unplaced and identify what to look for.</span></label></div></fieldset><label class="reflection-field" for="reflection-note">What real example comes to mind? <span class="hint">Optional</span></label><textarea id="reflection-note" maxlength="1500" placeholder="Name an example, a gap, or a question to bring to the team.">${escape(state.notes[r])}</textarea><p class="hint">Each dimension stands on its own. You can revisit these reflections in your debrief.</p><div class="actions"><button type="button" class="secondary" data-action="${state.editing ? 'cancel-edit' : 'back-case'}">${state.editing ? 'Cancel edit' : 'Review the case'}</button><button class="primary" type="submit">${state.editing ? 'Update debrief' : r === 5 ? 'Open your debrief' : 'Next challenge'} <span aria-hidden="true">→</span></button></div></form></article>`;
}

function selectedGate() {
  if (state.plan.dimension === '') return '<p class="hint">Choose by consequence for your team. The lowest stage does not automatically come first.</p>';
  const d = Number(state.plan.dimension), s = state.stages[d], index = gateForReflection(s);
  if (index === null) return `<p class="note">You left ${escape(model.dimensions[d].name)} unplaced. Start with a recent example, then work upward from Exploration. Use the first gate to identify evidence you need.</p>${gateReference(d,0)}`;
  return `<p class="note">${s === 4 ? 'You selected Continuous Evolution. Inspect its entry gate and agree how you will review practice again.' : `Your next gate to investigate is ${escape(model.dimensions[d].gates[index].name)}.`} Verify earlier gates first, stopping at the first that fails. Your reflection does not establish any gate pass.</p>${gateReference(d,index)}`;
}

function renderResults() {
  const score = learningScore(state.decisions);
  return `<article class="case-card">${header('Six decisions. Your next move.','Use the profile to open a conversation. Choose one consequential gap and gather evidence in real work.','Leadership lab · Your debrief')}<div class="case-body"><div class="debrief-banner"><div class="score-ring" aria-label="${score} out of 6 fictional decisions correct">${score}/6</div><div><h3>${score === 6 ? 'You spotted every distinction.' : 'Your practice is complete.'}</h3><p>Correct first decisions in fictional cases. This result says nothing about your team’s maturity.</p></div></div><h3>${state.workflow ? escape(state.workflow) : 'Your team'}: a provisional profile</h3><p class="note">${note}</p><div class="profile-wrap" role="region" aria-label="Six independent reflections; scroll horizontally on small screens" tabindex="0"><table class="profile"><caption>Six independent self-reported reflections. Select a dimension to revise it. No average or overall maturity level.</caption><thead><tr><th scope="col">Dimension</th>${model.stages.map(s=>`<th scope="col">${escape(s.name)}</th>`).join('')}</tr></thead><tbody>${model.dimensions.map((d,i)=>`<tr><th scope="row"><button class="profile-edit" data-action="edit-reflection" data-round="${i}">${escape(d.name)} <span aria-hidden="true">↗</span></button></th>${state.stages[i] === null ? '<td colspan="5" class="unplaced">Not enough evidence yet · Unplaced</td>' : model.stages.map((s,j)=>`<td class="${state.stages[i] === j ? 'placed' : ''}">${state.stages[i] === j ? '<span aria-hidden="true">●</span><span class="sr-only">Selected provisionally</span>' : '<span aria-hidden="true">·</span>'}</td>`).join('')}</tr>`).join('')}</tbody></table></div><ul class="takeaways">${model.dimensions.map((d,i)=>`<li><strong>${escape(d.name)}</strong>${escape(cases[i].lesson)}<p>${state.notes[i] ? `<strong>Your note</strong>${escape(state.notes[i])}` : '<span class="hint">No reflection note added.</span>'}</p></li>`).join('')}</ul><details class="recap"><summary>Revisit the six practice decisions</summary><ol>${cases.map((c,i)=>`<li><strong>${escape(c.title)}</strong><br>Your call: ${escape(c.options[state.decisions[i]])}<br>Best-supported answer: ${escape(c.options[c.answer])}<br>${escape(c.explanation)}</li>`).join('')}</ol></details><section class="action-plan"><h3>Take one useful action.</h3><p>Which gap is costing something now? What would help your team inspect it? Make a small commitment you can revisit.</p><label class="reflection-field" for="priority">Dimension to investigate</label><select id="priority"><option value="">Choose a dimension</option>${model.dimensions.map((d,i)=>`<option value="${i}" ${state.plan.dimension === String(i) ? 'selected' : ''}>${escape(d.name)}</option>`).join('')}</select><div id="priority-gate">${selectedGate()}</div><label class="reflection-field" for="plan-action">Evidence you will gather</label><textarea id="plan-action" maxlength="2000" placeholder="e.g. Observe a recent joiner completing one customer handoff using the shared instructions.">${escape(state.plan.action)}</textarea><div class="form-grid"><div><label class="reflection-field" for="plan-owner">Who will take it forward?</label><input id="plan-owner" maxlength="100" value="${escape(state.plan.owner)}" placeholder="Name or role"></div><div><label class="reflection-field" for="plan-date">When will you review it?</label><input id="plan-date" type="date" value="${escape(state.plan.date)}"></div></div><div class="print-plan"><p id="print-priority"></p><p id="print-action"></p><p id="print-owner"></p><p id="print-date"></p></div><p class="hint">The plan is yours to carry out. This page does not assign work or schedule reminders.</p></section><div class="actions"><button class="secondary" data-action="restart">Play again</button><div class="save-actions"><button class="secondary" data-action="print">Print debrief</button><button class="primary" data-action="download">Save debrief <span aria-hidden="true">↓</span></button></div></div><p class="hint" id="save-status" role="status">Save a Markdown copy, or print to paper or PDF. Everything clears when you refresh.</p><p class="hint">A formal assessment inspects artifacts, observes work, and follows gates upward in each dimension. <a href="../sources/playbook/running-an-assessment.md" target="_blank" rel="noopener">Read the assessment playbook ↗</a></p></div></article>`;
}

function syncPrint() {
  if (state.phase !== 'results') return;
  const p = state.plan;
  for (const [id,text] of Object.entries({ 'print-priority': `Dimension: ${p.dimension === '' ? 'Not chosen' : model.dimensions[Number(p.dimension)].name}`, 'print-action': `Evidence to gather: ${p.action || 'Not recorded'}`, 'print-owner': `Owner: ${p.owner || 'Not recorded'}`, 'print-date': `Review date: ${p.date || 'Not recorded'}` })) document.getElementById(id).textContent = text;
}

function render(focus = true) {
  document.querySelector('#round-nav').innerHTML = model.dimensions.map((d,i) => `<li class="${state.phase !== 'results' && i === state.round ? 'active' : state.stages[i] !== undefined ? 'complete' : ''}" ${state.phase !== 'results' && i === state.round ? 'aria-current="step"' : ''}><span class="round-index">${state.stages[i] !== undefined ? '✓' : i+1}</span><span class="round-name">${escape(d.name)}</span><span class="sr-only">${state.stages[i] !== undefined ? 'Reflection complete' : ''}</span></li>`).join('');
  workspace.innerHTML = state.phase === 'case' ? renderCase() : state.phase === 'reflect' ? renderReflection() : renderResults();
  syncPrint();
  if (focus) workspace.querySelector('h2').focus({preventScroll:true});
}

function debriefText() {
  const p = state.plan;
  const lines = ['# HAIMM Leadership lab debrief', '', `Framework: v${model.version}`, `Team or workflow: ${state.workflow || 'Not named'}`, '', note, '', `Practice result: ${learningScore(state.decisions)}/6 correct first decisions in fictional cases. This is not a maturity score.`, '', '## Six independent reflections', ''];
  model.dimensions.forEach((d,i)=>{lines.push(`### ${d.name}`, '', `Provisional reading: ${state.stages[i] === null ? 'Unplaced. Not enough evidence.' : model.stages[state.stages[i]].name}`, cases[i].lesson, `Your note: ${state.notes[i] || 'No note added.'}`, '');});
  lines.push('## Your next move', '', `Dimension: ${p.dimension === '' ? 'Not chosen' : model.dimensions[Number(p.dimension)].name}`, `Evidence to gather: ${p.action || 'Not recorded'}`, `Owner: ${p.owner || 'Not recorded'}`, `Review date: ${p.date || 'Not recorded'}`, '');
  if (p.dimension !== '') {
    const d = Number(p.dimension), s = state.stages[d], gate = model.dimensions[d].gates[gateForReflection(s) ?? 0];
    lines.push(`Gate to inspect: ${gate.name}`, s === 4 ? 'Validate this entry gate, then review practice again.' : 'Verify earlier gates first. Work upward and stop at the first failed gate.', '', gate.tests, '');
    gate.criteria.forEach(c=>lines.push(`- [${c.type}] ${c.core ? '(core) ' : ''}${c.text}`));
    lines.push('', `Failure signal: ${gate.failure}`, '');
  }
  lines.push('## Practice review','');
  cases.forEach((c,i)=>lines.push(c.title, `Your call: ${c.options[state.decisions[i]]}`, `Best-supported answer: ${c.options[c.answer]}`, c.explanation,''));
  lines.push('A pass takes three of four criteria, including the core. Metrics never decide placement. No average or overall maturity level is calculated. This plan does not schedule reminders.', '', 'Source: https://github.com/carlbberg/haimm/tree/main/archive/v0.4', '');
  return lines.join('\n');
}

workspace.addEventListener('click',event=>{
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const action = button.dataset.action;
  if (action === 'decide' && state.phase === 'case' && state.decisions[state.round] === undefined) {
    state.decisions = recordDecision(state.decisions,state.round,Number(button.dataset.choice)); render(false); document.querySelector('#feedback-title').focus();
  } else if (action === 'reflect') { state.phase='reflect'; render(); }
  else if (action === 'back-case') { captureReflection(); state.phase='case'; render(); }
  else if (action === 'edit-reflection') { state.round=Number(button.dataset.round); state.phase='reflect'; state.editing=true; render(); }
  else if (action === 'cancel-edit') { state.phase='results'; state.editing=false; render(); }
  else if (action === 'print') { syncPrint(); window.print(); }
  else if (action === 'download') {
    const url = URL.createObjectURL(new Blob([debriefText()],{type:'text/markdown;charset=utf-8'}));
    const link=document.createElement('a'); link.href=url; link.download='haimm-leadership-debrief.md'; document.body.append(link); link.click(); link.remove(); setTimeout(()=>URL.revokeObjectURL(url),1000);
    document.querySelector('#save-status').textContent='Your debrief download has been requested. Keep the file to bring into your next team conversation.';
  } else if (action === 'restart' && window.confirm('Start a new game? Your current reflections and action plan will clear. Save your debrief first if you want to keep it.')) {
    state.round=0; state.phase='case'; state.decisions=[]; state.stages=Array(6).fill(undefined); state.notes=Array(6).fill(''); state.editing=false; state.plan={dimension:'',action:'',owner:'',date:''}; render();
  }
});

function captureReflection() {
  const value=workspace.querySelector('input[name="stage"]:checked')?.value;
  if (value !== undefined) state.stages[state.round]=value === 'unknown' ? null : Number(value);
  state.notes[state.round]=document.querySelector('#reflection-note').value;
}
workspace.addEventListener('submit',event=>{
  if (event.target.id !== 'reflection-form') return;
  event.preventDefault(); captureReflection();
  if (state.editing || state.round === 5) { state.phase='results'; state.editing=false; }
  else { state.round++; state.phase='case'; }
  render(); workspace.scrollIntoView({block:'start',behavior:'instant'});
});
workspace.addEventListener('change',event=>{
  if (event.target.id === 'priority') { state.plan.dimension=event.target.value; document.querySelector('#priority-gate').innerHTML=selectedGate(); syncPrint(); }
});
workspace.addEventListener('input',event=>{
  const key = {'plan-action':'action','plan-owner':'owner','plan-date':'date'}[event.target.id];
  if (key) {state.plan[key]=event.target.value;syncPrint();}
});
document.querySelector('#workflow').addEventListener('input',event=>{state.workflow=event.target.value;if(state.phase==='results')render(false);});
document.querySelector('#version').textContent=`v${model.version}`;
render(false);
