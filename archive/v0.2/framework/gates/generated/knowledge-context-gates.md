<!-- GENERATED FILE. Do not edit by hand.
     Source: framework/gates/knowledge-context.yaml
     Regenerate: python3 tools/generate.py -->

# Knowledge & Context: gates

Pass a gate by meeting **3 of 4** criteria. The criterion marked *core* cannot be the one skipped.

Evidence sources: **[A]** artifact inspection, **[S]** survey or questionnaire, **[O]** observation or interview.

## Exploration to Experimentation

*Tests* Whether the organisation can see its own context.

Until grounding failures are distinguishable from capability failures, nothing else in this dimension can be worked on deliberately.

- **[A]** At least one recurring workflow has a written inventory of what it depends on knowing, with each input marked as documented, held by named individuals, or sitting in an unconnected system.
- **[O]** In an observed AI-assisted session, the practitioner can say where the context they supplied came from.
- **[S]** People can describe what context they supply to get good output, rather than reporting that they just ask.
- **[O]** **(core)** Someone can give a specific example of AI output that was wrong or unusable because of missing or incorrect grounding rather than model capability.

*Failure signal.* The team reports that AI works fine and cannot produce a single grounding failure. That almost never means grounding is good. It means grounding failures are being absorbed as capability limits, which is the default state and the reason this gate exists.

## Experimentation to Integration

*Tests* Whether context has crossed from individual to shared.

This is the fork where privatised grounding either takes hold or does not.

- **[A]** At least one context artifact is used by more than one person and was not authored by one of them alone.
- **[A]** **(core)** That artifact has been substantively changed by at least two different people.
- **[S]** Two or more people independently name the same artifact as where they get grounding for a given task.
- **[O]** In an observed session, someone reaches for the shared artifact instead of reconstructing context from memory.

*Failure signal.* A well-populated shared folder where authorship and editing are concentrated in one person. Document volume is externalisation without sharing. It passes an artifact count and fails this gate, and the second criterion is what catches it.

## Integration to Optimization

*Tests* Whether shared context is owned, current, arbitrated, and reachable at the moment of work.

The fourth criterion tests shared understanding directly rather than inferring it from artifacts. It is the strongest single item in the instrument and also the most likely to be skipped, which is why it is marked core.

- **[A]** Every context artifact the team relies on has a named owner and a last substantive change inside an agreed freshness window.
- **[O]** The team can describe a specific conflict between two context sources and how one was made authoritative.
- **[A]** The context the team has agreed on is reachable from the AI tools people actually use, without manual re-supply.
- **[S]** **(core)** Two people and one AI session, asked the same question the work depends on, produce substantially the same answer.

*Failure signal.* Documented, owned, current, and still re-supplied by hand in every session. That profile passes an artifact audit and fails the gate, and it is the unreachable sources pattern.

## Optimization to Continuous Evolution

*Tests* Whether context is genuinely managed as an asset, including the half that is about people rather than AI.

Untested against practice. No team in the v0.1 worked example is plotted in Continuous Evolution on any dimension, so these criteria are reasoned rather than observed. Treat as provisional.

- **[A]** **(core)** Context has been deliberately retired or deprecated in the last review cycle, not only added.
- **[A]** AI output routinely returns to shared stores as durable context, with at least one traceable instance.
- **[S]** New people reach working competence at a rate the team can point to, and attribute part of it to available shared context.
- **[S]** The team assesses shared understanding among people, not only context available to AI, and can say whether it has risen or fallen.

*Failure signal.* A growing, well-owned context estate with no deletions and no measure of the human-to-human half. It looks like Continuous Evolution and is Optimization with momentum. Every organisation adds context and almost none subtracts it, which is why deliberate retirement is the honest test of a lifecycle.
