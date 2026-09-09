import { model } from './model-data.js';

// Educational explanations and illustrative examples, not new assessment criteria.
const dimensions = [
  {icon:'target', question:'Does AI address a real need?', description:'Look at how well AI fits the needs of the people using it, and whether their feedback shapes the solution.', example:'Change a pilot after the people using it identify a problem it does not solve.'},
  {icon:'workflow', question:'How is the work structured?', description:'Look at whether the team has reconsidered how work happens, beyond adding AI to existing tasks.', example:'Compare two ways to achieve the same outcome.'},
  {icon:'files', question:'Can people and AI work from shared understanding?', description:'Look at where the context behind the work lives, who maintains it, and whether people and AI can reach it when needed.', example:'Keep project terminology and decisions in a shared, maintained source instead of rebuilding context in every session.'},
  {icon:'users-round', question:'How do people and AI work together?', description:'Look at how the team defines AI’s role, reviews its work, and revisits responsibility and trust as capabilities change.', example:'Agree which decisions AI can suggest, which it can act on, and where a person must review.'},
  {icon:'user-round', question:'How are people supported through the change?', description:'Look at whether people can shape adoption, voice concerns, and develop the skills their changing roles require.', example:'Help a colleague outside the original pilot team learn the workflow using shared training material.'},
  {icon:'shield-check', question:'Do responsible practices shape real decisions?', description:'Look at whether guardrails can stop or change a decision, and whether governance keeps working as AI use evolves.', example:'Narrow a pilot’s scope when an ethics review identifies a use that needs human oversight.'}
];
const stageExamples = [
  'A team identifies a recurring problem, listens to concerns, and sets initial guardrails before choosing a use case.',
  'A small group tries an AI-supported task and uses feedback to decide what to change.',
  'A team uses AI in its regular process, with clear review and handoffs.',
  'A team extends a successful approach and checks its effects on quality, productivity, and learning.',
  'A team revisits its AI practices as its needs, people, and available tools change.'
];
const stageShortNames = ['Explore','Test','Embed','Improve','Evolve'];
const escape = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export function initLearning() {
  const root = document.querySelector('.learn-section');
  const tabs = [...root.querySelectorAll('[role="tab"]')];
  const dimensionButtons = root.querySelector('#dimension-choices');
  const stageButtons = root.querySelector('#stage-choices');

  function showTab(index, focus = false) {
    tabs.forEach((tab,i) => {
      tab.setAttribute('aria-selected',i === index);
      tab.tabIndex = i === index ? 0 : -1;
      root.querySelector('#'+tab.getAttribute('aria-controls')).hidden = i !== index;
    });
    if (focus) tabs[index].focus({preventScroll:true});
  }
  tabs.forEach((tab,index) => {
    tab.addEventListener('click',() => showTab(index));
    tab.addEventListener('keydown', event => {
      const targets = {ArrowRight:(index+1)%2,ArrowLeft:(index+1)%2,Home:0,End:1};
      if (event.key in targets) {event.preventDefault(); showTab(targets[event.key],true);}
    });
  });
  root.querySelector('#learn-stages').addEventListener('click',() => showTab(1,true));

  dimensionButtons.innerHTML = model.dimensions.map((d,i) => `<button type="button" class="dimension-choice" data-learn-dimension="${i}" aria-pressed="${i === 0}"><img src="assets/icons/${dimensions[i].icon}.svg" alt="" width="25" height="25"><span>${escape(d.name)}</span></button>`).join('');
  stageButtons.innerHTML = model.stages.map((s,i) => `<button type="button" class="stage-choice" data-learn-stage="${i}" aria-pressed="${i === 0}" aria-label="Stage ${i+1}: ${escape(s.name)}"><span class="stage-circle" aria-hidden="true">${i+1}</span><span class="learn-stage-name">${escape(s.name)}</span><span class="learn-stage-short" aria-hidden="true">${stageShortNames[i]}</span></button>`).join('');

  function explainDimension(index) {
    const d = dimensions[index];
    dimensionButtons.querySelectorAll('button').forEach((button,i) => button.setAttribute('aria-pressed',i === index));
    root.querySelector('#dimension-explanation').innerHTML = `<div><span class="eyebrow">${escape(model.dimensions[index].name)}</span><h3>${d.question}</h3><p>${d.description}</p></div><div class="learn-example"><span class="eyebrow">For example</span><p>${d.example}</p></div>`;
  }
  function explainStage(index) {
    const stage = model.stages[index];
    stageButtons.querySelectorAll('button').forEach((button,i) => button.setAttribute('aria-pressed',i === index));
    root.querySelector('#stage-explanation').innerHTML = `<div><span class="eyebrow">Stage ${index+1} of 5</span><h3>${escape(stage.name)}</h3><p>${escape(stage.description)}</p></div><div class="learn-example"><span class="eyebrow">For example</span><p>${stageExamples[index]}</p></div>`;
  }
  dimensionButtons.querySelectorAll('button').forEach((button,i) => button.addEventListener('click',() => explainDimension(i)));
  stageButtons.querySelectorAll('button').forEach((button,i) => button.addEventListener('click',() => explainStage(i)));
  explainDimension(0);
  explainStage(0);
}
