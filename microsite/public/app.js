import { model } from './model-data.js';
import { prompts, placements, nextStep, profileInsights } from './assessment.js';
import { initLearning } from './learning.js';

const $ = selector => document.querySelector(selector);
const escape = text => String(text).replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
const arrow = '<span aria-hidden="true">↗</span>';
const evidenceTypes = {A: 'Artifact', S: 'Survey', O: 'Observation'};
const state = { dimension: 0, stage: 0, example: false, question: 0, answers: Array(6).fill(undefined) };
const example = [3, 1, 1, 2, 2, 1];
const scrollBehavior = () => matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';

function sourceLink(d) { return `<a class="source-link" href="${d.source}" target="_blank" rel="noopener noreferrer">Read the dimension source ${arrow}</a>`; }
function gateMarkup(gate, open = false) {
  return `<details class="gate-details" ${open ? 'open' : ''}><summary>See the evidence to check <span aria-hidden="true">+</span></summary><p>A formal pass requires three of these four criteria, including the core. Check them against real work.</p><ul class="criteria">${gate.criteria.map(c => `<li><div><span class="evidence-type">${evidenceTypes[c.type]}</span>${c.core ? '<span class="core-tag">Core criterion</span>' : ''}</div><p>${escape(c.text)}</p></li>`).join('')}</ul><div class="failure"><strong>Look closer if…</strong><p>${escape(gate.failure)}</p></div></details>`;
}

function renderMatrix() {
  $('#matrix').innerHTML = `<thead><tr><th scope="col" class="axis-label">Dimensions <span aria-hidden="true">↓</span><small>Stages →</small></th>${model.stages.map((s,i) => `<th scope="col"><button class="stage-heading" data-stage="${i}" aria-label="Learn about ${s.name}"><span class="stage-number">0${i+1}</span>${s.name}</button></th>`).join('')}</tr></thead><tbody>${model.dimensions.map((d,di) => `<tr><th scope="row"><button class="dimension-heading" data-dimension="${di}"><span class="dimension-number">0${di+1}</span>${escape(d.name)}<span class="dimension-arrow" aria-hidden="true">↗</span></button></th>${d.cells.map((cell,si) => {
    const selected = di === state.dimension && si === state.stage;
    const plotted = state.example && example[di] === si;
    return `<td><button class="matrix-cell stage-${si} ${selected ? 'selected' : ''} ${state.example ? 'example-mode' : ''} ${plotted ? 'plotted' : ''}" data-cell="${di},${si}" aria-pressed="${selected}" aria-label="${escape(d.name)}, ${model.stages[si].name}${plotted ? ', example team placement' : ''}"><span class="cell-mark" aria-hidden="true">${plotted ? '●' : '+'}</span><span>${escape(prompts[di].labels[si])}</span>${plotted ? '<span class="sr-only">Example placement</span>' : ''}</button></td>`;
  }).join('')}</tr>`).join('')}</tbody>`;
  $('#matrix').querySelectorAll('[data-cell]').forEach(button => button.addEventListener('click', () => {
    [state.dimension, state.stage] = button.dataset.cell.split(',').map(Number);
    $('#matrix').querySelectorAll('[data-cell]').forEach(b => { const selected = b === button; b.classList.toggle('selected', selected); b.setAttribute('aria-pressed', selected); });
    renderDetail();
    if (matchMedia('(max-width: 1050px)').matches) $('#cell-detail').scrollIntoView({behavior: scrollBehavior(), block: 'nearest'});
  }));
  $('#matrix').querySelectorAll('[data-dimension]').forEach(button => button.addEventListener('click', () => {state.dimension = +button.dataset.dimension; renderMatrix(); renderDetail(); $('#cell-title').focus({preventScroll: true});}));
  $('#matrix').querySelectorAll('[data-stage]').forEach(button => button.addEventListener('click', () => {
    const s = model.stages[+button.dataset.stage];
    $('#stage-detail').innerHTML = `<span class="eyebrow">Stage 0${+button.dataset.stage+1} / ${s.name}</span><p>${escape(s.description)} Teams can revisit this stage as their circumstances change.</p>`;
  }));
}

function renderDetail() {
  const d = model.dimensions[state.dimension];
  const s = state.stage;
  $('#cell-detail').innerHTML = `<div class="detail-top"><span class="eyebrow">A closer look</span><span>0${state.dimension+1} / 06</span></div><h3 id="cell-title" tabindex="-1">${escape(d.name)}</h3><p class="dimension-subtitle">${escape(d.subtitle)}</p><span class="stage-pill stage-${s}"><span aria-hidden="true">●</span> ${model.stages[s].name}</span><p class="cell-description">${escape(d.cells[s])}</p><div class="detail-next"><span class="eyebrow">${s === 4 ? 'Keep evolving' : 'The next step'}</span><h4>${s === 4 ? 'Revisit as the work changes.' : model.stages[s+1].name}</h4><p>${escape(nextStep(state.dimension,s))}</p></div>${gateMarkup(d.gates[Math.min(s,3)])}${sourceLink(d)}`;
}

$('#explore-view').addEventListener('click', () => setExample(false));
$('#example-view').addEventListener('click', () => setExample(true));
function setExample(value) {
  state.example = value;
  $('#explore-view').setAttribute('aria-pressed', !value);
  $('#example-view').setAttribute('aria-pressed', value);
  $('#grid-caption').textContent = value ? 'Illustrative team: strong fit, context still catching up.' : 'Select any cell to look closer ↙';
  if (value) {state.dimension = 2; state.stage = example[2];}
  renderMatrix(); renderDetail();
}

function renderQuestion(focus = false) {
  const q = state.question;
  const d = model.dimensions[q];
  $('#question-nav').innerHTML = model.dimensions.map((dim,i) => `<li><button class="question-nav-button ${q === i ? 'current' : ''}" data-question="${i}" ${q === i ? 'aria-current="step"' : ''}><span class="question-index">${state.answers[i] !== undefined ? '✓' : `0${i+1}`}</span><span>${escape(dim.name)}</span><span class="nav-stage">${state.answers[i] === undefined ? '' : state.answers[i] === null ? '?' : `0${state.answers[i]+1}`}</span></button></li>`).join('');
  $('#question-nav').querySelectorAll('button').forEach(b => b.addEventListener('click', () => {state.question = +b.dataset.question; renderQuestion(true);}));
  $('#question-card').innerHTML = `<div class="question-meta"><span class="eyebrow">${escape(d.name)}</span><span>0${q+1} <span class="muted">/ 06</span></span></div><div class="progress-track"><span style="width:${(q+1)/6*100}%"></span></div><h3 tabindex="-1" id="question-title">${prompts[q].question}</h3><p class="question-help">Choose what usually happens, rather than your best example.</p><div class="answer-list">${prompts[q].answers.map((answer,i) => `<button class="answer ${state.answers[q] === i ? 'chosen' : ''}" data-answer="${i}" aria-pressed="${state.answers[q] === i}"><span class="answer-radio" aria-hidden="true">${state.answers[q] === i ? '●' : ''}</span><span>${escape(answer)}</span><span class="answer-arrow" aria-hidden="true">↗</span></button>`).join('')}</div><div class="question-bottom"><button class="back-button" id="previous-question" ${q === 0 ? 'disabled' : ''}>← Back</button><button class="unsure ${state.answers[q] === null ? 'chosen' : ''}" id="unsure" aria-pressed="${state.answers[q] === null}">I’m not sure yet ${arrow}</button></div><p class="question-hint">Your choice takes you to ${state.answers.filter(x => x === undefined).length <= 1 ? 'your profile' : 'the next question'}. You can change any answer.</p>`;
  $('#question-card').querySelectorAll('[data-answer]').forEach(b => b.addEventListener('click', () => answerQuestion(+b.dataset.answer)));
  $('#unsure').addEventListener('click', () => answerQuestion(null));
  $('#previous-question').addEventListener('click', () => {state.question--; renderQuestion(true);});
  if (focus) $('#question-title').focus({preventScroll: true});
}

function answerQuestion(value) {
  state.answers[state.question] = value;
  if (state.answers.every(x => x !== undefined)) {renderResults(); return;}
  const later = state.answers.findIndex((x,i) => i > state.question && x === undefined);
  state.question = later === -1 ? state.answers.findIndex(x => x === undefined) : later;
  renderQuestion(true);
}

function profileTable(a) {
  return `<div class="profile-scroll" role="region" tabindex="0" aria-label="Your provisional profile, scroll horizontally on small screens"><table class="profile-table"><caption class="sr-only">Self-reported stage for each dimension. These are provisional selections, not verified placements.</caption><thead><tr><th scope="col">Dimension</th>${model.stages.map((s,i) => `<th scope="col"><span>0${i+1}</span>${s.name}</th>`).join('')}<th scope="col">Unplaced</th></tr></thead><tbody>${model.dimensions.map((d,di) => `<tr><th scope="row">${escape(d.name)}</th>${model.stages.map((s,si) => `<td class="${a[di] === si ? 'profile-active stage-'+si : ''}">${a[di] === si ? `<span class="profile-dot" aria-label="${s.name}">●</span>` : '<span aria-hidden="true">·</span>'}</td>`).join('')}<td>${a[di] === null ? '<span class="unplaced-dot" aria-label="Unplaced">?</span>' : '<span aria-hidden="true">·</span>'}</td></tr>`).join('')}</tbody></table></div>`;
}

function renderResults() {
  const a = placements(state.answers);
  $('#assessment-workspace').hidden = true;
  $('#results').hidden = false;
  $('#results').innerHTML = `<div class="results-header"><div><span class="eyebrow"><span class="status-dot"></span> Your provisional profile</span><h3 id="result-title" tabindex="-1">Six dimensions.<br>Your own starting points.</h3></div><div class="result-actions"><button class="button outline" id="edit-answers">Edit answers ↗</button><button class="text-button" id="print-results">Print / save PDF ↗</button></div></div><p class="results-intro">This is the shape of your selections. Use it to start a conversation and choose the evidence to inspect next.</p>${profileTable(a)}<div class="insights">${profileInsights(a).map(insight => `<article><span class="eyebrow">A pattern to explore</span><h4>${insight.title}</h4><p>${insight.text}</p></article>`).join('')}</div><p class="pattern-note">These patterns are hypotheses from the HAIMM playbook, inferred from your selections. They do not change any dimension’s placement.</p><div class="next-actions-heading"><h3>Make your next move concrete.</h3><p>Choose one gate by its consequences for your team. You do not need to move all six dimensions at once.</p></div><div class="result-cards">${model.dimensions.map((d,i) => {
    const s = a[i];
    return `<article class="result-card"><div class="result-card-top"><span class="eyebrow">0${i+1} / ${escape(d.name)}</span><button class="edit-dimension" data-edit="${i}" aria-label="Change your ${escape(d.name)} answer">Edit ↗</button></div><h4>${s === null ? 'Unplaced' : model.stages[s].name}</h4><span class="next-label">${s === null ? 'Start with an example' : s === 4 ? 'Maintain and verify' : `Explore the gate to ${model.stages[s+1].name}`}</span><p>${escape(nextStep(i,s))}</p>${s === null ? '' : gateMarkup(d.gates[Math.min(s,3)])}${sourceLink(d)}</article>`;
  }).join('')}</div><div class="result-close"><span>You have a starting point. Choose one useful conversation.</span><button id="restart" class="text-button">Start a fresh assessment ↻</button></div>`;
  $('#edit-answers').addEventListener('click', () => editAnswer(0));
  $('#results').querySelectorAll('[data-edit]').forEach(b => b.addEventListener('click', () => editAnswer(+b.dataset.edit)));
  $('#print-results').addEventListener('click', () => window.print());
  $('#restart').addEventListener('click', () => {state.answers = Array(6).fill(undefined); editAnswer(0);});
  $('#result-title').focus({preventScroll:true});
  $('#assessment').scrollIntoView({behavior:scrollBehavior()});
}

function editAnswer(index) {state.question = index; $('#results').hidden = true; $('#assessment-workspace').hidden = false; renderQuestion(true); $('#assessment-workspace').scrollIntoView({behavior:scrollBehavior(), block:'start'});}

document.querySelectorAll('a[href="#method"]').forEach(a => a.addEventListener('click', () => {$('#method').open = true;}));
initLearning(); renderMatrix(); renderDetail(); renderQuestion();
