# HAIMM educational microsite

The site teaches HAIMM v0.4.0, provides a clickable six-by-five matrix, offers a six-question self-assessment, and includes the Leadership lab game at `game/`. It is a static website with no JavaScript dependencies, server, account, external font requests, or analytics.

## Preview locally

From the repository root:

```sh
python3 microsite/build.py
node --test microsite/tests/*.test.mjs
python3 -m http.server 4173 --directory _site
```

Open `http://localhost:4173`. Serve the output over HTTP; ES modules require a server instead of opening `index.html` as a local file. Python 3.10+ and Node 22+ are sufficient. Python is used only to build, and Node is used only for the checks. Neither is needed on the host.

## Publish on GitHub Pages

1. Push this work to the repository and merge it into `main`.
2. In the repository’s **Settings → Pages**, choose **GitHub Actions** as the source.
3. Run **Deploy HAIMM microsite to GitHub Pages** from the Actions tab. Future changes to the site on `main` run it automatically.

The workflow builds `_site`, checks the assessment, and publishes the static artifact. All paths are relative, so the same output works at `https://carlbberg.github.io/haimm/` or under a custom domain. That address is the expected project URL, not a claim that this work has been published.

You can also upload the contents of `_site/` to any static host. See [GitHub’s Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Model fidelity

`build.py` reads the frozen `archive/v0.4/` release. Matrix descriptions, stage definitions, gate criteria, evidence types, core markers, and failure signals are generated directly from that source. The output also bundles the source markdown for readers. Do not edit `_site/model-data.js` or `_site/sources`.

The short labels, answer descriptions, and suggested actions in `public/assessment.js` are editorial adaptations for the website. Each answer selects a stage directly within its own dimension. Unknown answers remain unplaced. The questionnaire cannot verify gate passes, and results explicitly identify themselves as self-report. There is no aggregate score, cross-dimensional cap, or automatic ranking of priorities. Pattern matching is a transparent hypothesis based on `playbook/acting-on-a-result.md` and does not alter any placement.

Results link the relevant next gate to its complete canonical criteria. Continuous Evolution shows its entry gate for validation and recommends ongoing review, with no invented sixth stage. A formal assessment must still work upward through gates, inspect artifacts, and observe real work. The model itself is untested against field data.

Answers live only in page memory and disappear on refresh. Teams can print or save a PDF using the browser’s print dialog. Printing preserves provisional status and individual placements.

## Design and assets

The page opens with a dark journey hero and a purpose-built illustration connecting five stages to six dimensions. The maturity model follows in two tabs: six stacked dimension rows with concise examples, then five stage columns read from left to right. The full matrix and self-assessment follow below. The tabs support arrow keys, Home, and End.

Manrope is self-hosted under its bundled SIL Open Font License, and the six icons come from Lucide 0.468.0 with the license in `public/assets/icons/LICENSE`. The hero illustration was generated for this site and is documented in `ASSETS.md`. The original generated sculpture remains unused. No third-party figures from the archived article are included.

Responsive styles accommodate narrow screens with a horizontal stage timeline, explicitly scrollable tables, and a single-column assessment. Results state the six-part diagnosis directly, offer browser PDF output, and allow a complete retake. Motion respects reduced-motion settings, and interactive controls use native buttons, links, and disclosure elements. Browser checks verified the desktop and mobile presentation, tab behavior, a complete six-click assessment, PDF control, retake path, and zero page-level mobile overflow. The automated checks cover release extraction, assessment invariants, the leadership game, and static asset paths.

## Leadership lab

Open `http://localhost:4173/game/` after the local build. The opening presents the first fictional case directly. Leaders make six decisions, one per dimension, read the evidence behind each answer, and reflect on one team or workflow using the canonical matrix descriptions. They can leave a dimension unplaced when they lack evidence.

The debrief shows six independent, provisional reflections. Leaders can revise them, choose a dimension by its consequences, inspect its gate, and record an evidence-gathering action with an owner and review date. The date is a note, not a scheduled reminder. The page supports a Markdown download and browser printing. Reflections and notes stay in page memory and clear on refresh; the application has no analytics or submission endpoint.

The practice result counts correct first decisions in fictional cases. It never determines a team's stage, and repeated clicks cannot increase it. Each fictional case assumes earlier gates have passed and supplies four evidence cards aligned to the selected gate's four criteria. The narrative, evidence cards, answers, and explanations in `public/game/cases.js` are teaching adaptations, not claims about real organisations. The displayed gate criteria and reflection descriptions come from the same frozen release extraction as the rest of the site.

The cases cover feedback changing a solution, purpose-led reconsideration that keeps a workflow unchanged, a missing core despite three satisfied criteria, human approval during bounded AI action, capability beyond early adopters, and substantive changes to ethical practice. The debrief distinguishes monitoring practices from numerical placement thresholds. Continuous Evolution points to its entry gate and continuing review, without inventing a further stage.

The interface uses the existing self-hosted Manrope font and a green case-file layout, with native buttons, radio groups, disclosures, and visible keyboard focus. It includes a narrow-screen layout, reduced-motion support, and print styles. Automated checks cover gate logic, answer locking, practice scoring, reflection bounds, source extraction, and static game links. Browser interaction and visual QA have not been performed for this addition.

For Sites packaging, `python3 microsite/build.py --output out` emits the same static content into the supported output directory named in `.openai/hosting.json`. The default `_site` output and existing GitHub Pages workflow remain available.
