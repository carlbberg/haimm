import { model } from './model-data.js';

// Concise teaching copy and examples. These do not replace the model's criteria.
const dimensions = [
  {icon:'target', description:'How closely AI addresses a real need and changes with user feedback.', example:'A pilot changes after users identify a problem it does not solve.'},
  {icon:'workflow', description:'How the team reconsiders the work itself, beyond speeding up existing tasks.', example:'The team compares two ways to achieve the same outcome.'},
  {icon:'files', description:'How people and AI reach shared, current context while doing the work.', example:'Project terms and decisions live in one maintained source.'},
  {icon:'users-round', description:'How roles, review, responsibility, and trust are divided between people and AI.', example:'The team agrees where AI may act and where a person must review.'},
  {icon:'user-round', description:'How people shape adoption, voice concerns, and build capability as roles change.', example:'A colleague outside the pilot learns the workflow from shared material.'},
  {icon:'shield-check', description:'How guardrails, oversight, and accountability affect decisions in practice.', example:'An ethics review narrows a pilot and adds human oversight.'}
];

const stageExamples = [
  'Find one real need and surface the first concerns.',
  'Test a bounded use case with the people doing the work.',
  'Make AI part of a regular process with clear review.',
  'Extend what works and check its effects.',
  'Revisit the practice as needs and capabilities change.'
];

const escape = text => String(text).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

export function initLearning() {
  const root = document.querySelector('.learn-section');
  const tabs = [...root.querySelectorAll('[role="tab"]')];

  function showTab(index, focus = false) {
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', i === index);
      tab.tabIndex = i === index ? 0 : -1;
      root.querySelector('#' + tab.getAttribute('aria-controls')).hidden = i !== index;
    });
    if (focus) tabs[index].focus({preventScroll:true});
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => showTab(index));
    tab.addEventListener('keydown', event => {
      const targets = {ArrowRight:(index+1)%2, ArrowLeft:(index+1)%2, Home:0, End:1};
      if (event.key in targets) {
        event.preventDefault();
        showTab(targets[event.key], true);
      }
    });
  });

  root.querySelector('#learn-stages').addEventListener('click', () => showTab(1, true));

  root.querySelector('#dimension-choices').innerHTML = model.dimensions.map((dimension, index) =>
    '<article class="dimension-row">' +
      '<div class="dimension-identity">' +
        '<span class="dimension-icon"><img src="assets/icons/' + dimensions[index].icon + '.svg" alt="" width="26" height="26"></span>' +
        '<div><span class="list-number">0' + (index+1) + '</span><h3>' + escape(dimension.name) + '</h3></div>' +
      '</div>' +
      '<p>' + dimensions[index].description + '</p>' +
      '<div class="row-example"><span>Example</span><p>' + dimensions[index].example + '</p></div>' +
    '</article>'
  ).join('');

  root.querySelector('#stage-choices').innerHTML = model.stages.map((stage, index) =>
    '<article class="stage-card">' +
      '<div class="stage-card-top"><span>0' + (index+1) + '</span><i aria-hidden="true"></i></div>' +
      '<h3>' + escape(stage.name) + '</h3>' +
      '<p>' + escape(stage.description) + '</p>' +
      '<div class="stage-example"><span>In practice</span><p>' + stageExamples[index] + '</p></div>' +
    '</article>'
  ).join('');
}
