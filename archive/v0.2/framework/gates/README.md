# Gates

Source of truth for gate definitions. Read `SCHEMA.md` before editing anything here.

| File | Dimension | Gates | Status |
|---|---|---|---|
| `solution-fit.yaml` | Solution Fit | 4 | stable for v0.2 |
| `knowledge-context.yaml` | Knowledge & Context | 4 | stable for v0.2 |
| `human-ai-collaboration.yaml` | Human-AI Collaboration | 4 | stable for v0.2 |
| `people.yaml` | People | 4 | stable for v0.2 |
| `ethics.yaml` | Ethics | 4 | stable for v0.2 |

Stable means the wording is settled and published, not that it has been tested. No gate in v0.2 has been run against a real assessment, and the Optimization to Continuous Evolution gate in every dimension is reasoned rather than observed. Both caveats are recorded in the `rationale` fields and in `playbook/running-an-assessment.md`.

```bash
python3 tools/validate.py     # run before every commit
python3 tools/generate.py     # rebuild generated/ and playbook/instruments/
```

`generated/` is output. Do not edit it.

## Criterion counts

Twenty gates, eighty criteria, twenty of them core.

| Evidence source | Criteria |
|---|---|
| A, artifact inspection | 38 |
| O, observation or interview | 21 |
| S, survey or questionnaire | 21 |

Every gate carries at least one A or O criterion, which `validate.py` enforces. Survey items alone can never pass a gate.
