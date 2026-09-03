# Visualization

A one-screen interactive reading of the model, as a single self-contained HTML file. Open `haimm-executive-brief.html` in any browser. Nothing is installed and nothing is fetched.

It carries the problem the model addresses, the matrix with its gates, a detail panel, and the six result profiles. Clicking a cell, a gate marker, an axis heading or a profile changes what the panel shows.

This is a rendering, not a source. Every cell, gate criterion, failure signal and profile in it is copied from `framework/` and `playbook/`, so a change to the model there leaves this file stale until it is rebuilt. The framework files remain the only home of those facts.

`src/` holds what the file was built from: `Main.dc.html` is the artboard and `canvas.json` its frame. Rebuilding needs the Claude Design canvas tooling, which is not in this repository.
