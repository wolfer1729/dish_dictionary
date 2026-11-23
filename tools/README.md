# Tools (not part of the app)

Helper scripts used to add dishes, check them and fetch photos. Run them with Node from the project folder.
`ROOT` is the project folder, `OUT` is any temporary folder for screenshots and browser profiles (for example `tools/out`, which git ignores) and `CHROME` is the path to chrome.exe.

| Script | What it does |
|---|---|
| `validate.js ROOT` | Loads every dish and checks fields, diet labels (vegan, gluten-free, dairy-free), techniques and units. Prints `NO ERRORS` when clean. Its file list must include every data file. |
| `nutcheck.js ROOT OUT` | Lists ingredients with no nutrition data (`UNMATCHED`). |
| `nutbreak.js ROOT id id…` | Per-ingredient calorie breakdown for dishes. |
| `nut5list.js ROOT file,file` | Per-serving nutrition for every dish in the given data files. |
| `hp5.js ROOT file,file` | Protein per serving against the high-protein label. |
| `diet6.js` | Template: edit `change` and the file list, then run to add or remove the high-protein label. |
| `fixbs.js FILE` | Repairs `\b` that shell quoting turned into backspace characters. |
| `e2e.js`, `e2e-veg.js`, `e2e-new.js` `ROOT OUT CHROME` | Browser tests of the whole app. They must print `NO RUNTIME ERRORS`. |
| `offline.js ROOT OUT CHROME` | Opens the PC copy from disk and checks it makes no internet requests. |
| `mobile-audit.js ROOT OUT CHROME 360 0` | Phone layout check (overflow, zoom, clipped text). `mobile-audit-safe.js` does the same with a simulated status bar. |
| `mkdishaudit.js ROOT tools` | Builds `audit-dishes5.js`, which opens every new dish page on a phone screen. Edit its file list first. |
| `swtest.js ROOT OUT CHROME` | Tests the phone copy: first save, update to a new version, then offline reopen with photos. |
| `photos3.js ROOT id,id,…` | Finds free Wikimedia Commons photos for the given dishes. Needs a `contact.txt` with a contact email next to it (git-ignored); delete it afterwards. Search terms are set with `Object.assign(QUERY, …)` lines. Skips files listed in `rejected.json`. |
| `sheet2.js ROOT OUT CHROME id,id,… tag` | Makes contact-sheet images of downloaded photos for checking by eye. |
| `b5fix2.js` | Template: set `bad` to dish ids whose photos are wrong, run it to delete them and add them to `rejected.json`. |
| `apply-batch11.js` | Example of registering a new data file (index.html, sw.js cache version, validator, regional families). |
