# HAIMM educational microsite

The site teaches HAIMM v0.4.0, provides a clickable six-by-five matrix, and offers a six-question self-assessment. It is a static website with no JavaScript dependencies, server, account, external font requests, or analytics.

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

The design uses oversized Manrope typography, emerald and lime, an original sculptural hero, and a quiet matrix with progressively darker stages. [Awwwards editorial work](https://www.awwwards.com/websites/single-page-1/) informed the direction; no individual site was copied.

`public/assets/haimm-sculpture.png` was generated with the built-in Imagegen tool. The exact prompt is in `ASSETS.md`. Manrope is self-hosted under its bundled SIL Open Font License. The favicon is a code-native letterform. No third-party figures from the archived article are included.

Responsive styles accommodate narrow screens with explicitly scrollable tables and a single-column assessment. Motion respects reduced-motion settings, and interactive controls use native buttons, links, and disclosure elements. Browser checks verified the desktop presentation, cell selection, and a complete six-click assessment. The automated checks cover the release extraction, assessment invariants, and static asset paths.
