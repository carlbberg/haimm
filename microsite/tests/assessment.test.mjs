import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { placements, nextStep, profileInsights, prompts } from '../public/assessment.js';

test('an uneven profile retains all six independent placements', () => {
  const answers = [4, 0, 1, 3, 2, 0];
  assert.deepEqual(placements(answers), answers);
  assert.notEqual(placements(answers), answers);
  const changed = [...answers]; changed[2] = 4;
  assert.deepEqual(placements(changed).filter((_,i) => i !== 2), answers.filter((_,i) => i !== 2));
});

test('unknown is unplaced and never silently assigned Exploration', () => {
  assert.deepEqual(placements(Array(6).fill(null)), Array(6).fill(null));
  assert.match(profileInsights(Array(6).fill(null))[0].title, /unknown/i);
  assert.match(nextStep(1,null), /recent example/);
});

test('incomplete, invalid, or out of range profiles are rejected', () => {
  for (const values of [[0,1], [0,1,2,3,4,5], [0,1,2,3,4,undefined], [0,1,2,3,4,'2'], [0,1,2,3,4,-1]]) {
    assert.throws(() => placements(values));
  }
});

test('each dimension has five clickable descriptions and four next-stage actions', () => {
  assert.equal(prompts.length, 6);
  for (const prompt of prompts) {
    assert.equal(prompt.answers.length, 5);
    assert.equal(prompt.labels.length, 5);
    assert.equal(prompt.actions.length, 4);
  }
  for (let d = 0; d < 6; d++) {
    for (let s = 0; s < 4; s++) assert.equal(nextStep(d,s), prompts[d].actions[s]);
    assert.match(nextStep(d,4), /entry gate/);
  }
});

test('pairwise pattern is a hypothesis and never modifies the profile', () => {
  const answers = [3,2,0,3,2,2];
  const copy = [...answers];
  const insights = profileInsights(answers);
  assert.ok(insights.some(i => i.title.includes('grounding')));
  assert.ok(insights.some(i => i.title.includes('travel')));
  assert.deepEqual(answers, copy);
});

test('flat high profiles prompt evidence checking, not a congratulatory score', () => {
  assert.match(profileInsights([4,4,4,4,4,4])[0].title, /evidence/);
  assert.ok(profileInsights([0,1,0,1,0,1]).some(insight => /real/.test(insight.title)));
});

test('Workflow can retain a deliberately unchanged process at Integration', () => {
  assert.match(prompts[1].answers[2], /even if we kept/);
  assert.doesNotMatch(nextStep(1,2), /remove|cut|eliminate/i);
});

test('generated release content contains exact source cells and all evidence criteria', async () => {
  const { model } = await import('../../_site/model-data.js');
  assert.equal(model.version, '0.4.0');
  assert.equal(model.dimensions.length, 6);
  assert.equal(model.stages.length, 5);
  assert.deepEqual(model.dimensions.map(d => d.name), ['Solution Fit','Workflow','Knowledge & Context','Human-AI Collaboration','People','Ethics']);
  const matrix = readFileSync(new URL('../../archive/v0.4/framework/matrix.md', import.meta.url), 'utf8');
  for (const d of model.dimensions) {
    assert.equal(d.cells.length,5);
    for (const cell of d.cells) assert.ok(matrix.includes(cell));
    assert.equal(d.gates.length,4);
    for (const g of d.gates) {
      assert.equal(g.criteria.length,4);
      assert.equal(g.criteria.filter(c => c.core).length,1);
      assert.ok(g.criteria.some(c => c.type === 'A' || c.type === 'O'));
      assert.ok(g.failure.length > 20);
    }
    assert.ok(existsSync(resolve('_site',d.source)));
  }
});

test('all static local entrypoint links resolve and support a GitHub project subpath', () => {
  const html = readFileSync('_site/index.html','utf8');
  const links = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(match => match[1]);
  for (const link of links.filter(s => !s.startsWith('https:') && !s.startsWith('#'))) {
    assert.ok(!link.startsWith('/'), `Absolute site-root URL: ${link}`);
    assert.ok(existsSync(resolve('_site',link.split(/[?#]/)[0])), `Missing local asset: ${link}`);
  }
  assert.ok(existsSync('_site/assets/manrope.ttf'));
  assert.ok(existsSync('_site/assets/manrope-OFL.txt'));
  assert.ok(existsSync('_site/.nojekyll'));
});
