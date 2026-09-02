# Gates

Source of truth for gate definitions. Read `SCHEMA.md` before editing anything here.

| File | Dimension | State |
|---|---|---|
| `knowledge-context.yaml` | Knowledge & Context | 4 gates drafted |
| `solution-fit.yaml` | Solution Fit | 4 gates drafted |
| `human-ai-collaboration.yaml` | Human-AI Collaboration | 4 gates drafted |
| `people.yaml` | People | 4 gates drafted |
| `ethics.yaml` | Ethics | 4 gates drafted |

All twenty gates are drafted and untested against a real assessment.

```bash
python3 tools/validate.py     # run before every commit
python3 tools/generate.py     # rebuild generated/ and playbook/instruments/
```

`generated/` is output. Do not edit it.
