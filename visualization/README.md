# Visualization

This is a one-screen interactive reading of the model, held in a single self-contained HTML file. Open `haimm-executive-brief.html` in any browser, and note that nothing is installed and nothing is fetched.

It carries the problem the model addresses, the matrix with its gates, a detail panel and the six result profiles. Clicking a cell, a gate marker, an axis heading or a profile changes what the panel shows.

It is a rendering and not a source. Every cell, gate criterion, failure signal and profile in it is copied from `framework/` and `playbook/`, so a change to the model there leaves this file stale until it has been rebuilt. The framework files remain the only home of those facts.

`src/` holds what the file was built from, where `Main.dc.html` is the artboard and `canvas.json` is its frame. Rebuilding it properly needs the Claude Design canvas tooling, which is not in this repository.

The published brief embeds its own copy of both files, as JSON inside the `appifact-doc` script block. The embedded `Main.dc.html` is byte-identical to the one in `src/`, while the embedded `canvas.json` differs from it in whitespace only. If you edit `src/` by hand without the canvas tooling, the embedded copy has to be replaced to match, or the page will carry on rendering the old text.
