# 🍲 Dish Dictionary

A world recipe app that teaches a complete beginner to cook like a professional, and runs **completely offline** on your PC.

- **833 dishes from 106 countries**: 381 Indian (dhaba, Mughlai, tandoori, South Indian, Indo-Chinese, chaat, ghar ka khana, mithai, from 39 states, cities and regions) and 106 Continental.
- **623 pure-veg dishes**, plus 123 with egg. There are **no beef or veal dishes**, and a built-in guard rejects any recipe containing them.
- **Every course**: mains, soups, starters, salads, sides, chutneys and dips, breads, breakfasts, snacks and street food, desserts and drinks.
- **Nutrition for every dish**: calories, protein, carbs, fat, fibre, sugar and sodium per serving or for the whole recipe, with filters and sorting.
- **189 dishes with 5 ingredients or less** (salt, pepper, oil and water don't count), plus a set of easy weeknight dinners.
- **Regional styles**: 130 dish families (dosa, biryani, dal, pancakes, noodles…) link the same dish as cooked in different regions, with notes on other local versions.
- **Reference photos**: freely licensed photos from Wikimedia Commons, stored locally with author and license credit.

No build step and no dependencies: plain HTML, CSS and JavaScript.

## Run it

Double-click `index.html`. That's it. Everything (fonts, flags, photos) is inside this folder, so no internet is needed.

## On your phone

The phone version is hosted free on **GitHub Pages**. Open it once with internet and it saves itself on the phone (the whole app plus every photo, about 22 MB). After that it works with no internet, like a normal app.

1. On the phone, open the GitHub Pages link (`https://<your-username>.github.io/dish-dictionary/`) in **Chrome** (Android) or **Safari** (iPhone).
2. Wait a few seconds for the message **"📱 Saved on this device"**. *My kitchen → Offline copy* also shows the status.
3. Install it:
   - **Android:** Chrome menu ⋮ → **Add to Home screen** → **Install**.
   - **iPhone:** Share button → **Add to Home Screen**.
4. Open it from the home-screen icon. It runs full screen and offline.

**Moving your own recipes between PC and phone:** *My kitchen → Backup → Export* on one device, send the file over (WhatsApp, email or USB), then *My kitchen → Backup → Import* on the other. Favorites, history, your recipes and your photos all come along.

**Updating:** after you push changes to GitHub, open the phone app once while online. It fetches the new version in the background and uses it from the next launch.

**Publishing (one time):** create an empty public repository named `dish-dictionary` on github.com and push this folder to it. Then go to *Settings → Pages → Build and deployment*, set *Source* to *Deploy from a branch*, choose `main` and `/ (root)`, and Save. The site is live in a minute or two. Only the app files go online. Everything you add (recipes, favorites, history) stays private on each device.

## Features

| Area | What it does |
|---|---|
| **🟢 Veg switch** | The toggle in the top bar hides every non-veg dish across the whole app. Every dish shows the Indian veg 🟩, egg 🟨 or non-veg 🟥 mark. Eggs are hidden by default ("pure veg"); turn on *Count eggs as veg* in **My kitchen**. |
| **Explore** | Faceted filters with live counts: region, cuisine style, country, Indian state, situation (date night, budget, rainy day…), course, taste, diet and allergies, skill, method, time, heat, source (my recipes / has photo), and an **avoid ingredients** box. 10 sort orders. |
| **What can I cook?** | Type what's in your fridge to rank every dish by % match, with missing items listed and one tap to add them to your shopping list. **My essentials**: oil, salt, chili, garlic, ginger, onion, spices and so on always count as "I have it". The list is editable and saved. |
| **➕ My recipes** | Add your own dishes with a full editor: ingredients (with groups), steps with timers, tips, diet, taste profile, cuisine style and a photo. They get scaling, unit conversion, cook mode, planner and shopping lists like every other recipe. You can edit or delete them any time. |
| **🔥 Nutrition** | Every recipe shows estimated calories, protein, carbs, fat, fibre, sugar and sodium, with % of a 2,000 kcal day and where the calories come from. Switch between *per serving* and *whole recipe* (it follows the servings you choose). Explore has nutrition filters (protein 15 g+ / 25 g+, high fibre, under 350 / 500 kcal, low carb, low fat, low sugar, low sodium) and sorts (most protein, fewest calories, most fibre). Cards show calories; the planner adds up each day. |
| **🖐️ 5 ingredients or less** | Worked out automatically for every recipe, including your own: salt, pepper, oil and water don't count. |
| **Recipe page** | Photo, servings scaler, metric ↔ US units, ingredient checklist, flavor profile, history, steps with timers, tap-to-learn technique words, chef's secrets, mistakes, variations, pairings, similar dishes, print. |
| **Cook mode** | Full screen, one step at a time, big text, swipe or arrow keys, timers with sound, read-aloud, and the screen stays awake. |
| **Cooking school** | 13 lessons (including *Dhaba secrets*), 57 technique how-tos, a Beginner's Path, Fix-my-dish, substitutions, temperatures, heat guide, converter, world pantry. |
| **Planner, shopping, my kitchen** | Weekly meal planner, aisle-grouped shopping list, culinary passport, cooking history with ratings and notes, backup export/import (includes your own recipes). |

All personal data stays in the browser on each device. Use **My kitchen → Backup → Export** to save a copy.

## Project layout

```
index.html                 app shell
css/styles.css             design system (light + dark)
assets/fonts/              local fonts (works offline)
assets/photos/             dish photos (Wikimedia Commons, credited in js/data/photos.js)
js/core.js                 data registry, units & scaling, veg logic, state, helpers
js/data/*.js               recipes (by region, plus veg / course collections)
js/data/photos.js          photo file + author + license for each dish
js/nutrition.js            nutrition estimates (food table, unit-to-gram conversion)
js/learn-data.js           techniques, lessons, beginner path, toolkit data
js/views.js                home, explore, dish, pantry, planner, shopping, my kitchen
js/mine.js                 your own recipes: editor, storage
js/learn.js, js/cook.js    cooking school, cook mode and timers
js/app.js                  router, global actions, search palette
sw.js                      phone/web only: saves the app + all photos for offline use
manifest.webmanifest       phone/web only: app name, icons, install settings
```

## Adding a built-in recipe (for developers)

The easiest way is **➕ Add recipe** inside the app. To add one in code, put a `DD.add({...})` block in a file in `js/data/`, copying an existing recipe as a template:

- `[[sear]]` or `[[sear|searing]]` links to a technique lesson (ids are in `js/learn-data.js`)
- `{{180C}}` is a temperature that follows the °C/°F setting; `{{2cm}}` is a length
- Ingredients are `[quantity, unit, name, note]`. `null` quantity means "to taste", and `'#Sauce'` is a group heading.
- Steps are `[title, text, timerMinutes, proTip]`.

## Photo credits

Dish photos come from [Wikimedia Commons](https://commons.wikimedia.org) under their respective free licenses (CC BY, CC BY-SA, CC0 or public domain). The author, license and source link for each photo are shown under it on the recipe page and listed in `js/data/photos.js`.
