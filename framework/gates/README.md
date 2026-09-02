# Gates

Source of truth for gate definitions. Read `SCHEMA.md` before editing anything here.

| File | Dimension | State |
|---|---|---|
| `knowledge-context.yaml` | Knowledge & Context | 4 gates drafted |
| `solution-fit.yaml` | Solution Fit | stub |
| `human-ai-collaboration.yaml` | Human-AI Collaboration | stub |
| `people.yaml` | People | stub |
| `ethics.yaml` | Ethics | stub |

```bash
python3 tools/validate.py     # run before every commit
python3 tools/generate.py     # rebuild generated/ and playbook/instruments/
```

`generated/` is output. Do not edit it.
