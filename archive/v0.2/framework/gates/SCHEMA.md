# Gate schema

A **gate** is a transition between two adjacent stages within one dimension. Four gates per dimension, twenty across the model. Gates are never between dimensions.

One YAML file per dimension in `framework/gates/`. It is the source of truth. Everything under `framework/gates/generated/` and `playbook/instruments/` is rendered from it by `tools/generate.py` and will be overwritten.

## Shape

```yaml
dimension:
  id: knowledge-context        # kebab-case, matches the filename
  name: Knowledge & Context
  subtitle: Making shared understanding explicit and current
  order: 2                     # row order in the visualisation
  status: draft                # draft | stable

threshold:
  pass: 3                      # criteria needed to pass a gate
  of: 4                        # criteria per gate
  core_required: true          # the core criterion cannot be the one skipped

gates:
  - id: kc-g1
    from: exploration          # must be adjacent stages, in order
    to: experimentation
    tests: >-                  # one line: what the gate is testing for
    rationale: >-              # optional: why it is built this way, caveats
    criteria:
      - id: kc-g1-c1
        evidence: A            # A artifact | S survey | O observation
        core: false            # exactly one criterion per gate is core
        text: >-
    failure_signal: >-         # what a team that has not passed but believes it has looks like
```

Stage ids: `exploration`, `experimentation`, `integration`, `optimization`, `continuous-evolution`.

## Evidence sources

| Code | Source | Gets at |
|---|---|---|
| A | Artifact inspection | What exists, who owns it, when it last changed |
| S | Survey or questionnaire | What people believe and report |
| O | Observation or interview | What people actually do, and what they can produce on request |

Every gate must carry at least one A or O criterion. A gate passable entirely by self-report will be passed. `validate.py` enforces this.

## Writing criteria

The one rule that matters: **a criterion must be something a team can fail.**

Published criteria get optimised against. This is the standard critique of CMMI's staged representation, which is the nearest prior art for gates: teams produce the artifact the checklist names and the underlying capability does not move. The wording is the only defence.

- Good: "A shared terminology document exists and its last substantive change is within the quarter." Gameable only by actually maintaining it.
- Bad: "We maintain shared terminology." Cannot be failed.
- Good: "Someone can give a specific example of AI output that was wrong because of missing grounding rather than model capability."
- Bad: "The team understands the difference between grounding and capability failures."

Ask for an instance, an artifact, an owner, a date, or a behaviour in an observed session. Avoid asking for agreement, awareness, or understanding.

The `failure_signal` field is not decoration. It records the profile that passes a superficial reading of the gate and fails the real one, which is what an assessor needs to watch for.

## Validation

```bash
python3 tools/validate.py
```

Checks: required fields present; transitions adjacent and in stage order; criteria count matches `threshold.of`; evidence codes valid; exactly one core criterion per gate when `core_required`; at least one A or O criterion per gate; no duplicate gate ids. Warnings for stub files with no gates.
