import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { cases, passesGate, recordDecision, learningScore, gateForReflection } from '../public/game/cases.js';
import { model } from '../../_site/model-data.js';

test('every gate pass requires three criteria and its own core, for every evidence combination', () => {
  for (const d of model.dimensions) for (const g of d.gates) {
    for (let mask = 0; mask < 16; mask++) {
      const evidence = Array.from({length:4},(_,i)=>Boolean(mask & (1 << i)));
      const passed = passesGate(g.criteria,evidence);
      if (passed) {
        assert.ok(evidence.filter(Boolean).length >= 3);
        assert.equal(evidence[g.criteria.findIndex(c=>c.core)],true);
      } else {
        assert.ok(evidence.filter(Boolean).length < 3 || !evidence[g.criteria.findIndex(c=>c.core)]);
      }
    }
  }
});

test('teaching cases agree with the actual release gates and include three passes and three holds', () => {
  assert.equal(cases.length, model.dimensions.length);
  assert.deepEqual(cases.map((c,i)=>passesGate(model.dimensions[i].gates[c.gate].criteria,c.met)), [false,true,false,true,false,true]);
  for (const c of cases) {
    assert.equal(c.evidence.length,4);
    assert.equal(c.options.length,3);
    assert.ok(c.answer >= 0 && c.answer < c.options.length);
  }
  assert.equal(cases[2].met.filter(Boolean).length,3);
  assert.equal(passesGate(model.dimensions[2].gates[2].criteria,cases[2].met),false);
});

test('a first decision is immutable and cannot be farmed for points', () => {
  const original=[];
  const wrong=(cases[0].answer+1)%3;
  const first=recordDecision(original,0,wrong);
  const retry=recordDecision(first,0,cases[0].answer);
  assert.deepEqual(original,[]);
  assert.deepEqual(retry,first);
  assert.equal(learningScore(retry),0);
  const next=recordDecision(retry,1,cases[1].answer);
  assert.equal(learningScore(next),1);
  assert.equal(learningScore(cases.map(c=>c.answer)),6);
  assert.throws(()=>recordDecision([],6,0));
  assert.throws(()=>recordDecision([],0,3));
});

test('unknown stays unplaced and Continuous Evolution never points to a sixth stage', () => {
  assert.equal(gateForReflection(null),null);
  assert.deepEqual([0,1,2,3,4].map(gateForReflection),[0,1,2,3,3]);
  for (const value of [-1,5,1.5,undefined,'2']) assert.throws(()=>gateForReflection(value));
});

test('invalid gate evidence cannot silently produce a verdict', () => {
  const c=model.dimensions[0].gates[1].criteria;
  assert.throws(()=>passesGate(c,[true,true,true]));
  assert.throws(()=>passesGate(c,[true,true,true,'yes']));
  assert.throws(()=>passesGate(c.map(v=>({...v,core:false})),[true,true,true,true]));
});

test('game entrypoint and module paths resolve below a project subpath', () => {
  const root=resolve('_site/game');
  const html=readFileSync(resolve(root,'index.html'),'utf8');
  for (const [,path] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (path.startsWith('#')) continue;
    assert.ok(!path.startsWith('/'));
    assert.ok(existsSync(resolve(root,path.split('#')[0])),path);
  }
  for (const module of ['game.js','cases.js']) {
    const js=readFileSync(resolve(root,module),'utf8');
    for (const [,path] of js.matchAll(/from '([^']+)'/g)) assert.ok(existsSync(resolve(root,path)),path);
  }
  assert.match(readFileSync('_site/index.html','utf8'), /href="game\/"/);
});
