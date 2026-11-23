# Prompt to continue adding dishes

Paste everything below the line into Claude Code, opened in this project folder.

---

Continue growing Dish Dictionary with new batches of dishes, the same way as before.

**Rules**
- Never include cow: no beef, veal or beef stock, and no beef in photos or stories. Keep it veg-first: vegetarian or vegan versions, and egg is fine.
- Write original recipes. Take only dish names from websites.
- The PC copy must keep working fully offline (opened from index.html). The phone copy is GitHub Pages at wolfer1729/dish_dictionary. Don't use Claude artifacts.
- Ask me before every `git push`.

**Before writing anything**, list all existing dish ids (`grep -ohE "id: '[a-z0-9-]+'" js/data/*.js`). Skip duplicates, including the same dish under another name.

**Each batch (about 40–90 dishes)**
1. Write a new file `js/data/india-more-N.js` or `js/data/world-more-N.js`, copying the format of the latest one. Use only valid values for course, method, technique, diet, taste and tags (see `tools/validate.js` and `js/core.js`). "shallow-fry" and "boil" are techniques, not methods.
2. Register the file like `tools/apply-batch11.js` does:
   - add it to index.html (before regional.js) and to the sw.js SHELL list;
   - bump `CACHE` in sw.js;
   - add it to the validator's file list;
   - add every new dish to a family in `js/data/regional.js`.
3. Run `node tools/validate.js .` until it prints NO ERRORS. Also check by hand:
   - gluten-free labels (granola, cornflakes, miso and semolina are not gluten-free);
   - high-protein only when a serving has 12 g of protein or more (`tools/hp5.js`).
4. Run `node tools/nutcheck.js . tools/out`. Add rows to `js/nutrition.js` for unmatched ingredients, and an `e:` per-piece weight for anything counted by number.
5. Run the browser tests (`e2e*.js`), `offline.js`, `mobile-audit.js` (360 and 412) and the dish-page audit. Update the README counts. Commit.
6. Photos:
   - Write `tools/contact.txt` with my email in a separate step, and delete it right after.
   - Run `photos3.js` with only the new ids.
   - Check every photo on the contact sheets (`sheet2.js`). Reject anything that isn't the dish: people, places, buildings, ingredients only, brand labels, any meat or fish, and egg on egg-free dishes.
   - Remove rejects with the `b5fix2.js` template.
   - Run a file-name scan for meat and beef words, then commit.
7. Ask me before pushing.

**What to add next, in this order**
1. More Indian regional home cooking: sabzis, dals, chutneys, pickles, everyday breakfasts.
2. Quick weeknight vegetarian dinners from any cuisine.
3. Countries that still have only 1–2 dishes.

Stop at about 1,200 dishes and ask me whether to go on. On 2026-11-23 the app had 1,056 dishes from 123 countries.
