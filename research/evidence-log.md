# Evidence log

Every citation used in the model, with verification status. Nothing enters `framework/` as a sourced claim until it is verified against the primary source. Vendor marketing is not evidence.

| Status | Meaning |
|---|---|
| verified | Bibliographic detail and the specific claim HAIMM makes of it checked against the publisher's record or the primary document. What was checked is in the notes. |
| unverified | Cited from memory or secondary source, not yet checked |
| disputed | A problem has been found, see notes |
| resolved | A dispute that has been settled, and the correction is in `framework/` |
| withdrawn | Logged as a problem, then found not to be one |

Verification pass run 3 September 2026, against publisher records (MIS Quarterly, IEEE, Academy of Management, Sage, Springer, Cambridge, Elsevier), the SEI report, and the Nielsen article itself. Where only the abstract and bibliographic record were checked rather than the full text, the note says so.

## v0.2 additions, Knowledge & Context

| Source | Used for | Status | Notes |
|---|---|---|---|
| Nonaka & Takeuchi (1995), SECI | Externalisation, the movement from heads to artifacts | verified | Four modes confirmed. Fit is deliberately partial and the dimension now says so rather than claiming a whole-model lens. |
| Wegner (1987), transactive memory | Human-to-human half | verified | Springer, Mullen & Goethals (Eds.), pp. 185-208. Some citations give 1986; the volume is 1987. Bibliographic record only. |
| Lewis (2003), TMS scale | Human-to-human half, measurement | verified | *Journal of Applied Psychology* 88(4). 15-item scale, validated across a lab sample of 124 teams and two field samples. Abstract checked. |
| Clark (1996), common ground | Why one-shot documentation does not produce shared understanding | verified | *Using Language*, Cambridge. Common ground is chapter 4, grounding chapter 8. Chapter-level confirmation, not a full read. |
| Star & Griesemer (1989), boundary objects | Why shared instruction files work | verified | *Social Studies of Science* 19(3), 387-420. |
| Walsh & Ungson (1991), organisational memory | Locus lens | verified | *Academy of Management Review* 16(1), 57-91. |
| CMMI staged representation | Prior art for gates | verified | CMMI-DEV v1.3, SEI, November 2010. 22 process areas, five maturity levels. |
| Bach (1994), the immaturity of the CMM | The compliance-theatre critique | verified | *American Programmer*, September 1994. Note: Bach's thesis is that CMM lacks a theoretical basis, which is adjacent to but not identical with the gaming critique. |
| Campbell (1979), Campbell's law | Why metrics never decide placement | verified | *Evaluation and Program Planning* 2(1), 67-90. This, not CMMI folklore, is the anchor for the falsifiability rule and for `framework/metrics.md`. |

## v0.1 issues found during v0.2 work

| Item | Status | Notes |
|---|---|---|
| Ten-level automation taxonomy attributed to Parasuraman, Sheridan & Wickens (2000) | resolved | The scale originates with Sheridan & Verplank (1978), MIT Man-Machine Systems Laboratory. The 2000 paper crosses degree of automation with four stages of information processing: information acquisition, information analysis, decision and action selection, action implementation. Both now cited correctly in `framework/dimensions/03-human-ai-collaboration.md`, with the misattribution named rather than quietly fixed. |
| Nielsen, "4 metaphors to help you work with AI" | resolved | The four are intern, coworker, teacher, coach. v0.1 listed three and renamed coworker to colleague. Corrected in the dimension file. Article published 26 September 2024, checked directly. |
| Tuckman's Adjourning mapped to Continuous Evolution | resolved | Tuckman (1965) has four stages. Adjourning was added in Tuckman & Jensen (1977) and means the group disbands, so it does not map. v0.2 says plainly that Tuckman covers four of five stages and names what replaces it at the fifth. |
| Stage 1 Exploration has no description in the stages section | withdrawn | Not a defect. The heading and its description are present in the published article; they were lost by the Obsidian web capture used to archive it. Recorded in `archive/v0.1/SOURCE.md`, defect 6, which flagged this entry as wrong. The stage files under `framework/stages/` carry v0.1's own wording. |
| Intro lists four stages, model has five | confirmed | Editorial defect in the published v0.1 article. The archive is frozen, so it stays; `framework/` has five throughout. |
| Ethics band drawn without an arrowhead in the combined-table figure | confirmed | Export artifact in the v0.1 figure. Cosmetic. Applies to the archived figure only. |
| Moravec (1988) publisher given as "United Kingdom: Harvard University Press" | confirmed | Harvard University Press is Cambridge, Massachusetts. Minor citation defect carried in the v0.1 reference list. Not repeated in `framework/references.md`, where the source is now verified and Cambridge, Massachusetts is confirmed. |

## v0.3 verification pass, 3 September 2026

The four sources carried as unverified through v0.2. Checked against publisher records, the Harvard University Press and Rosenfeld Media catalogue entries, and the primary articles where they are online.

| Source | Used for | Status | Notes |
|---|---|---|---|
| Mollick (2023), jagged frontier, centaur and cyborg | Capability shape, division of labour | verified | Published 16 September 2023 in One Useful Thing, read directly. Centaur is a clean split of tasks between human and AI; cyborg interleaves them within a task. Both match how `framework/dimensions/03-human-ai-collaboration.md` uses them. Still a blog post rather than peer-reviewed work, and is presented as framing. |
| Moravec (1988), Moravec's paradox | Capability shape | verified | Harvard University Press, 1988, ISBN 0674576187. The paradox is stated at p. 15. Cambridge, Massachusetts confirmed, which settles the v0.1 defect that gave the publisher as United Kingdom. |
| Noessel (2017), agentive technology | Upper end of the automation range | verified | Rosenfeld Media, May 2017, ISBN 978-1-933820-63-7. Agentive technology watches a datastream for triggers and acts on the user's behalf in the background. Publisher and catalogue records only; the full text was not read. |
| Satir et al. (1991), change model | People progression lens | resolved | The naming was Smith's, not the book's. Corrected by citing both, see below. |

**Satir phase names.** Resolved 3 September 2026. `framework/dimensions/04-people.md` named five phases, late status quo, resistance, chaos, integration and new status quo, and attributed them to Satir et al. (1991). That five-name sequence is Steven M. Smith's rendering, published 4 October 1997, which cites Satir et al. (1991) and Weinberg (1997) and presents the naming as its own. Satir scholarship more commonly gives six stages under different terminology, where the second is the foreign element and resistance is the reaction to it rather than the stage itself, and where practice is separated from integration. The dimension now cites Smith for the rendering and Satir for the model, and names the difference rather than quietly fixing it. Both are in `framework/references.md`. The 1991 primary text was still not read: the bibliographic record is confirmed and the claim now made of the book is only that the model is Satir's, which is not in dispute.

## Cited in `framework/` and still unverified

The widely circulated Satir performance-over-time diagram is a third-party rendering, not Satir's, and is not used in `framework/`.

| Source | Used for | Notes |
|---|---|---|
| EU AI Act; IBM (2024); Microsoft (2023); Gartner; Forrester; Deloitte; Element AI | Positioning HAIMM against enterprise models | Cited as positioning rather than as evidence for a claim, so they carry a lower bar. None is used to support a factual assertion about what organisations do. |

## Standing gap

HAIMM makes no quantitative claims about what organisations actually do, and v0.2 does not add any. That is a deliberate limit, not an oversight: the model has not been run against a population. Any future claim of the form "most teams stall at X" requires data this project does not have.
