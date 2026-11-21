/* ==========================================================================
   Dish Dictionary — cooking school content
   Techniques are referenced in recipes as [[id]] and open as mini-lessons.
   ========================================================================== */
'use strict';
(function () {
  const T = (id, icon, name, short, how, tips, mistake) => DD.addTech({ id, icon, name, short, how, tips: tips || [], mistake });

  /* ---------- knife work ---------- */
  T('mise-en-place', '🧺', 'Mise en place', 'French for “everything in its place”: prep and measure every ingredient before you turn on the heat.',
    ['Read the whole recipe twice, start to finish.', 'Get out every tool: pans, spoons, bowls, a bin bowl for scraps.', 'Wash, peel and cut every ingredient. Measure liquids and spices into small bowls.', 'Group ingredients by when they go in the pan, in order, left to right.', 'Only now turn on the heat.'],
    ['Fast dishes like stir-fries take 3 minutes to cook. There is no time to chop mid-way.', 'Use a damp towel under your board so it never slides.'],
    'Chopping while things cook. That is how garlic burns and onions scorch.');
  T('dice', '🎲', 'Dice', 'Cutting into even cubes so everything cooks at the same speed.',
    ['Cut a flat side so the vegetable sits stable and cannot roll.', 'Slice into even planks (small dice: {{0.5cm}}, medium: {{1cm}}, large: {{2cm}}).', 'Stack planks and cut into even sticks.', 'Turn the sticks 90° and cut across into cubes.'],
    ['For onions: halve through the root, peel, make horizontal then vertical cuts leaving the root attached, then slice across. The root holds it together.', 'Use the “claw grip”: tuck your fingertips under your knuckles and let the blade rest against them.'],
    'Uneven sizes. Small bits burn while big bits stay raw.');
  T('mince', '🧄', 'Mince', 'Chopping very finely, almost to a paste. Used for garlic, ginger, chilies and herbs.',
    ['Slice the ingredient thinly.', 'Gather into a pile. Hold the knife tip down with your other hand flat on top of the spine.', 'Rock the blade up and down across the pile, re-gathering every few passes.', 'For a paste, sprinkle with a pinch of salt and drag the flat of the blade across it.'],
    ['A microplane grater minces garlic and ginger in seconds.', 'Minced garlic burns in about 30 seconds on high heat. Add it later or lower the heat.']);
  T('julienne', '🥕', 'Julienne', 'Thin matchstick strips, about {{0.3cm}} thick. Common in Asian salads and stir-fries.',
    ['Cut the vegetable into {{6cm}} lengths.', 'Slice into thin planks.', 'Stack 3–4 planks and slice into thin matchsticks.'],
    ['A mandoline or julienne peeler makes this fast, but always use the hand guard.']);
  T('chiffonade', '🌿', 'Chiffonade', 'Thin ribbons of leafy herbs or greens like basil, mint or spinach.',
    ['Stack 6–10 leaves.', 'Roll them tightly into a cigar.', 'Slice across the roll thinly with a sharp knife.', 'Fluff the ribbons apart.'],
    ['Cut basil at the last moment. It bruises and blackens quickly.']);
  T('slice', '🔪', 'Slicing thin', 'Cutting even, thin slices of meat or vegetables for fast cooking.',
    ['For meat: freeze it 20–30 minutes until firm. It slices far more neatly.', 'Find the grain (lines of muscle fiber) and cut across it, not along it.', 'Use long smooth strokes with a sharp knife, not sawing.'],
    ['Cutting against the grain makes even tough cuts tender to chew.']);
  T('smash', '👊', 'Smash / crush', 'Flattening garlic, ginger or lemongrass with the flat of a knife to release oils.',
    ['Lay the clove under the flat of a wide knife, blade facing away from you.', 'Press down firmly with the heel of your hand.', 'The skin will slip right off. Smash again to crush.'],
    ['For lemongrass, smash the bulb end to bruise it so it releases its perfume into soups.']);
  T('zest', '🍋', 'Zest', 'Grating only the colorful outer skin of citrus, where the fragrant oils live.',
    ['Wash and dry the fruit.', 'Rub it gently over a microplane, rotating as soon as you see white.', 'Stop at the white pith. It is bitter.'],
    ['Zest before you juice. It is almost impossible the other way round.']);
  T('pound', '🪨', 'Pound (mortar & pestle)', 'Crushing aromatics and spices into a paste so their oils release fully.',
    ['Start with hard, dry things (spices, salt) and pound to a powder.', 'Add fibrous ingredients (lemongrass, galangal) next, then soft ones (garlic, shallot, chili).', 'Pound straight down, then grind in circles.'],
    ['A pinch of coarse salt acts as grit and speeds things up.', 'No mortar? A small blender with a splash of oil or water works.']);

  /* ---------- heat & pan techniques ---------- */
  T('sear', '🔥', 'Sear', 'Browning the surface of food over high heat to build deep, savory flavor (the Maillard reaction).',
    ['Pat the food completely dry with paper towels. Moisture prevents browning.', 'Heat the pan until very hot, then add a thin layer of oil until it shimmers.', 'Lay food in, away from you, with space between pieces.', 'Do NOT move it. It will release naturally once a crust forms (2–4 minutes).', 'Flip once.'],
    ['If it sticks, it is not ready to turn yet. Wait 30 seconds more.', 'Salt meat 40+ minutes ahead or right before searing, not in between (that pulls out moisture).'],
    'Crowding the pan: the temperature crashes and the food steams grey instead of browning.');
  T('saute', '🍳', 'Sauté', 'Cooking in a little fat over medium-high heat, moving the food often.',
    ['Preheat the pan, then add fat.', 'Add food in a single layer.', 'Toss or stir every 30–60 seconds so it browns evenly without burning.'],
    ['“Sauter” means “to jump”. A flick of the wrist tosses the food without a spoon.']);
  T('stir-fry', '🥢', 'Stir-fry', 'Cooking small pieces very fast over intense heat while constantly moving them.',
    ['Mise en place is mandatory: everything cut and sauces mixed.', 'Heat the wok until it just begins to smoke, then add oil and swirl.', 'Cook protein first in batches, remove it, then cook vegetables hardest-first.', 'Return everything, add the sauce, toss 30–60 seconds, serve immediately.'],
    ['Wok hei (“breath of the wok”) is the smoky flavor from very high heat. Small batches help a home stove get there.', 'Cold, day-old rice fries far better than fresh.'],
    'Adding too much at once. A home burner cannot keep the wok hot enough, so food stews.');
  T('sweat', '💧', 'Sweat', 'Cooking aromatics gently in fat so they soften and turn sweet without browning.',
    ['Use low to medium-low heat.', 'Add a pinch of salt to draw out moisture.', 'Stir occasionally until soft and translucent, 5–10 minutes.'],
    ['Cover with a lid for the first few minutes to speed things up.']);
  T('caramelize', '🧅', 'Caramelize onions', 'Slowly cooking onions until their sugars turn deep golden brown and jammy.',
    ['Slice onions evenly.', 'Cook in butter or oil over medium heat for 5 minutes, then lower the heat.', 'Stir every few minutes for 25–45 minutes.', 'When brown bits stick to the pan, add a splash of water and scrape them up.'],
    ['True caramelization takes 30+ minutes. Recipes claiming 10 minutes are lying!', 'A pinch of baking soda speeds browning but makes them softer.']);
  T('simmer', '♨️', 'Simmer', 'Cooking liquid just below boiling: small, lazy bubbles breaking the surface.',
    ['Bring to a boil first, then lower the heat.', 'Adjust until you see gentle, steady bubbles, not a rolling boil.', 'Partially cover to slow evaporation if needed.'],
    ['A hard boil makes meat tough and stock cloudy. Simmer keeps it tender and clear.']);
  T('boil', '🫧', 'Boil', 'Cooking in liquid at a full rolling boil (100 °C at sea level).',
    ['Use plenty of water so the temperature does not crash when food goes in.', 'Cover the pot to boil faster.', 'Add salt once boiling.'],
    []);
  T('blanch', '🥦', 'Blanch & shock', 'A quick dip in boiling salted water, then into iced water to stop cooking and lock in color.',
    ['Bring a big pot of well-salted water to a rolling boil.', 'Prepare a bowl of ice water next to it.', 'Boil vegetables briefly (30 seconds to 3 minutes).', 'Lift straight into the ice water, then drain.'],
    ['Keeps green vegetables vividly green and crisp-tender.']);
  T('braise', '🍲', 'Braise', 'Searing, then slowly cooking in a small amount of liquid with a lid, turning tough cuts meltingly tender.',
    ['Sear the meat well and remove it.', 'Cook aromatics in the same pot.', 'Deglaze, add liquid to come halfway up the meat.', 'Cover and cook very gently, on the stove or in a {{160C}} oven, for 1.5–4 hours.'],
    ['Tough, cheap cuts (shoulder, shin, chuck, thighs) are better for braising than expensive lean ones.', 'Braises taste even better the next day.'],
    'Boiling instead of gently simmering: the meat turns stringy and dry.');
  T('deglaze', '🍷', 'Deglaze', 'Adding liquid to a hot pan to dissolve the browned bits (the fond) stuck to the bottom. That is pure flavor.',
    ['After searing, pour off excess fat.', 'Add wine, stock or water to the hot pan. It will hiss.', 'Scrape the bottom firmly with a wooden spoon until the brown bits dissolve.'],
    ['Those brown bits are called “fond” (French for foundation). Never wash them away!'],
    'Letting the fond burn black first. Burnt fond tastes bitter. It should be brown.');
  T('reduce', '⬇️', 'Reduce', 'Simmering a liquid uncovered so water evaporates, concentrating flavor and thickening it.',
    ['Use a wide pan for faster evaporation.', 'Simmer uncovered.', 'Check thickness: it is ready when it coats the back of a spoon and a finger-drawn line stays clear.'],
    ['Season at the end. Salt concentrates as liquid reduces.']);
  T('emulsify', '🥣', 'Emulsify', 'Combining fat and water (which normally separate) into one smooth, glossy sauce.',
    ['Add fat slowly to the liquid while whisking or tossing vigorously.', 'Use an emulsifier: egg yolk, mustard, or starchy pasta water.', 'Keep the temperature moderate. Too hot and it splits.'],
    ['Carbonara, vinaigrettes, mayonnaise and beurre blanc are all emulsions.', 'If it breaks, whisk a spoonful of warm water into a fresh yolk and slowly add the broken sauce back in.']);
  T('tadka', '🪔', 'Tadka (tempering)', 'Frying whole spices in hot fat until they pop, then pouring this fragrant oil over a dish. It is the soul of South Asian cooking.',
    ['Heat ghee or oil in a small pan until shimmering.', 'Add whole seeds (cumin, mustard). They should sizzle immediately.', 'When they pop and darken slightly (20–40 seconds), add garlic, chili or curry leaves.', 'Pour the sizzling oil over the dish at once.'],
    ['Have everything measured before you start. A tadka goes from perfect to burnt in seconds.'],
    'Adding seeds to cold oil: they soak up grease and never pop or release aroma.');
  T('bloom', '🌸', 'Bloom spices', 'Cooking ground spices briefly in hot fat so their flavors wake up and lose their raw, dusty taste.',
    ['Add ground spices to the hot oil and aromatics.', 'Stir constantly for 30–60 seconds until very fragrant.', 'Add a splash of water or tomatoes if they start to catch.'],
    ['Spices dissolve in fat, not water. Blooming makes them 2–3× more flavorful.']);
  T('toast', '🌰', 'Dry-toast', 'Heating nuts, seeds or whole spices in a dry pan to deepen flavor.',
    ['Use a dry pan over medium heat.', 'Add the nuts or spices in a single layer.', 'Shake the pan constantly until fragrant and a shade darker (2–4 min).', 'Tip out onto a plate immediately. The pan keeps cooking them.'],
    ['Nuts go from golden to burnt in 20 seconds. Never walk away.']);
  T('marinate', '🫙', 'Marinate', 'Soaking food in a seasoned mixture to flavor and sometimes tenderize it.',
    ['Mix acid (yogurt, citrus, vinegar), salt, fat and aromatics.', 'Coat the food completely. A zip bag works well.', 'Refrigerate: fish 15–30 min, chicken 1–24 h, beef and lamb up to 24 h.'],
    ['Yogurt marinades tenderize gently. Strong citrus can make meat mushy after a few hours.']);
  T('velvet', '🪶', 'Velveting', 'The Chinese restaurant secret: coating meat in cornstarch and egg white or baking soda so it stays silky and tender.',
    ['Slice meat thinly against the grain.', 'Toss with a little soy sauce, Shaoxing wine, cornstarch and oil (or a pinch of baking soda).', 'Rest 15–30 minutes.', 'Stir-fry or blanch briefly before adding to the dish.'],
    ['This is why takeaway chicken is so tender. Once you velvet, you will never go back.']);
  T('deep-fry', '🍟', 'Deep-fry', 'Fully submerging food in hot oil (usually {{175C}}–{{180C}}) for a crisp shell and juicy center.',
    ['Use a heavy, deep pot, filled no more than halfway with neutral oil.', 'Heat to temperature using a thermometer.', 'Fry in small batches so the temperature does not drop.', 'Drain on a wire rack, not paper (paper steams the bottom soggy). Salt immediately.'],
    ['No thermometer? Drop in a cube of bread. It should turn golden in about 60 seconds at {{180C}}.', 'Never leave hot oil unattended. Keep a lid nearby to smother a fire. NEVER use water.'],
    'Oil too cool: food soaks up grease and turns heavy. Too hot: burnt outside, raw inside.');
  T('shallow-fry', '🍳', 'Shallow-fry', 'Frying in about {{1cm}} of oil, turning once. Used for cutlets, fritters and schnitzels.',
    ['Heat {{1cm}} of oil in a wide pan until it shimmers.', 'Lay food away from you.', 'Fry until golden, flip once, fry the other side.', 'Drain on a rack.'],
    ['Swirl the pan gently so hot oil washes over the top. This makes schnitzel puff and ripple.']);
  T('roux', '🥄', 'Roux', 'Equal parts fat and flour cooked together. It is the base that thickens sauces, gravies and gumbo.',
    ['Melt fat, whisk in the same weight of flour.', 'Stir constantly over medium heat.', 'White roux: 2 min (béchamel). Blond: 5 min. Brown/chocolate: 20–45 min (gumbo).', 'Add liquid gradually while whisking to avoid lumps.'],
    ['Cold liquid into hot roux (or hot into cold) gives the smoothest sauce.'],
    'Black specks in a dark roux mean it burned. Start over, because the bitterness will not go away.');
  T('fold', '🫳', 'Fold', 'Gently combining a light, airy mixture into a heavier one without knocking out the air.',
    ['Add a third of the light mixture first to loosen.', 'Use a spatula: cut down through the middle, sweep along the bottom, turn up and over.', 'Rotate the bowl a quarter turn and repeat until just combined.'],
    ['Stop as soon as there are no streaks. Over-folding deflates everything.']);
  T('knead', '🤲', 'Knead', 'Working dough to develop gluten so bread is chewy and holds its shape.',
    ['Push the dough away with the heel of your hand.', 'Fold it back over itself, rotate a quarter turn.', 'Repeat 8–10 minutes until smooth and elastic.', 'Windowpane test: stretch a small piece thin. If light shows through without tearing, it is done.'],
    ['Sticky dough is usually fine. Resist adding too much flour; use wet hands instead.']);
  T('proof', '⏳', 'Proof / prove', 'Letting yeasted dough rise as the yeast produces gas.',
    ['Cover the dough with a damp towel or film.', 'Leave somewhere warm (24–28 °C) until doubled, usually 1–2 hours.', 'Poke test: a gentle poke springs back slowly when ready.'],
    ['A slow, cold proof in the fridge overnight gives much better flavor.']);
  T('rest', '😴', 'Rest meat', 'Letting cooked meat sit before cutting so juices redistribute instead of running onto the board.',
    ['Move meat to a board or warm plate.', 'Tent loosely with foil.', 'Rest 5 minutes for steaks and chops, 10–20 for roasts.'],
    ['Meat keeps cooking 2–5 °C while resting (carryover cooking), so pull it slightly early.']);
  T('al-dente', '🍝', 'Al dente', 'Italian for “to the tooth”: pasta cooked until tender but still with a slight firm bite in the center.',
    ['Salt the water generously (about 10 g per liter).', 'Start tasting 2 minutes before the packet time.', 'Bite a piece: there should be a tiny white dot in the middle.', 'Drain, saving a mug of pasta water, and finish cooking in the sauce.'],
    ['Never rinse pasta for hot dishes. The surface starch helps sauce cling.']);
  T('render', '🥓', 'Render fat', 'Slowly melting fat out of bacon, pancetta, duck or chicken skin so it crisps and you get flavored fat to cook with.',
    ['Start in a cold or medium-low pan.', 'Cook gently, letting the fat melt out.', 'When crisp and the fat is liquid, raise the heat briefly to finish.'],
    ['That rendered fat is liquid gold for frying onions and potatoes.']);
  T('season', '🧂', 'Season to taste', 'Tasting and adjusting salt, acid, heat and sweetness until the flavor “pops”.',
    ['Taste with a clean spoon.', 'Ask: is it flat? (needs salt). Heavy or dull? (needs acid: lemon or vinegar). Harsh? (needs fat or a pinch of sugar).', 'Add a little, stir, taste again.'],
    ['Season in layers throughout cooking, not just at the end.', 'Professional cooks taste dozens of times per dish.']);
  T('temper', '🥚', 'Temper', 'Slowly raising the temperature of eggs or yogurt by adding a little hot liquid, so they do not scramble or split.',
    ['Whisk the eggs or yogurt in a bowl.', 'Slowly drizzle in a ladle of the hot liquid while whisking constantly.', 'Repeat once more, then stir the warmed mixture back into the pot over low heat.'],
    []);
  T('poach', '🍳', 'Poach', 'Cooking gently in liquid at 70–85 °C, well below a simmer: barely trembling.',
    ['Bring liquid to a bare shimmer with no real bubbles.', 'Slide in the food.', 'Keep the heat low throughout.'],
    ['For eggs in sauce (shakshuka), make a well, crack the egg in, cover the pan so the tops set with steam.']);
  T('steam', '☁️', 'Steam', 'Cooking with the vapor of boiling water. Gentle, clean and keeps food moist.',
    ['Bring 3–5 cm of water to a boil under a steamer basket.', 'Line the basket with parchment or cabbage leaves to stop sticking.', 'Leave gaps between items, cover, and steam.'],
    ['Do not let the pot boil dry. Top up with boiling water from a kettle.']);
  T('roast', '♨️', 'Roast', 'Cooking with dry, hot air in an oven to brown the outside and cook through.',
    ['Preheat the oven fully (15–20 min).', 'Toss food in oil and salt, spread in a single layer with space.', 'Roast hot ({{200C}}–{{220C}}) for browning, turning halfway.'],
    ['Crowded trays steam instead of roast. Use two trays if needed.']);
  T('char', '🔥', 'Char / grill', 'Cooking over or under intense direct heat for smoky, blistered flavor.',
    ['Get the grill or pan smoking hot.', 'Oil the food, not the grate.', 'Leave it alone until char marks form, then turn.'],
    ['Charring peppers, eggplant or tomatoes directly on a gas flame gives deep smoky flavor.']);
  T('whisk', '🌀', 'Whisk', 'Beating rapidly to blend, smooth out lumps or add air.',
    ['Tilt the bowl slightly toward you.', 'Move the whisk in a fast circular or side-to-side motion from the wrist.', 'Place a damp towel under the bowl to stop it spinning.'],
    []);
  T('cream', '🧈', 'Cream butter & sugar', 'Beating soft butter with sugar until pale and fluffy, trapping air that lifts cakes and cookies.',
    ['Use butter at room temperature: it should dent easily but not be greasy.', 'Beat with sugar 3–5 minutes on medium speed.', 'It is ready when pale, fluffy and nearly doubled.'],
    []);
  T('baste', '🥄', 'Baste', 'Spooning hot fat or liquid over food while it cooks for flavor and even browning.',
    ['Tilt the pan so fat pools at one side.', 'Spoon the hot fat (often foaming butter with garlic and thyme) over the food repeatedly.'],
    []);
  T('wash-rice', '🍚', 'Wash rice', 'Rinsing rice to remove surface starch so grains cook fluffy and separate.',
    ['Put rice in a bowl and cover with cold water.', 'Swirl with your hand. The water turns milky.', 'Drain and repeat 3–5 times until the water is almost clear.'],
    ['Skip washing for risotto and paella, where you WANT the starch.', 'Soaking basmati 20–30 min gives extra-long grains.']);
  T('mount-butter', '✨', 'Mount with butter', 'Swirling cold butter into a hot sauce off the heat to make it glossy, rich and silky (monter au beurre).',
    ['Take the pan off the heat.', 'Add cubes of cold butter one at a time.', 'Swirl or whisk until each melts into a glossy sauce.'],
    ['Do not boil the sauce after this, or it will split.']);
  T('dredge', '🌾', 'Dredge', 'Coating food lightly in flour or starch before frying for a better crust.',
    ['Pat food dry and season it.', 'Toss in flour on a plate.', 'Shake off all excess. You want a thin, even dusting.'],
    []);
  T('breading', '🍞', 'Breading (pané)', 'The three-step flour, egg and crumb coating that gives schnitzels and katsu their crunch.',
    ['Set up three plates: seasoned flour, beaten egg, breadcrumbs.', 'Use one “dry hand” and one “wet hand” to avoid club fingers.', 'Flour (shake off), egg (let drip), crumbs (press lightly, do not pack).', 'Fry right away, or chill 15 min so the coating sets.'],
    []);
  T('skim', '🫗', 'Skim', 'Removing foam, scum or fat from the surface of a simmering liquid.',
    ['Use a ladle or a fine spoon.', 'Hold it just under the surface and lift away the grey foam.', 'For fat, chill the dish. The fat sets on top and lifts off easily.'],
    ['Skimming gives clear broths like pho their clean taste.']);
  T('wilt', '🥬', 'Wilt', 'Cooking leafy greens just until they collapse and soften.',
    ['Add greens to a hot pan in handfuls.', 'Toss until they collapse, 1–2 minutes.', 'Season immediately and squeeze out any excess water.'],
    ['A huge pile of spinach shrinks to a tenth of its size.']);
  T('soak', '🫘', 'Soak & cook dried legumes', 'Rehydrating dried beans and chickpeas so they cook evenly and digest easily.',
    ['Rinse and pick out any stones.', 'Cover with 3× their volume of cold water; soak 8–12 hours.', 'Drain, cover with fresh water, simmer until creamy inside (40 min–2 h).', 'Salt in the last 20 minutes or in the soak.'],
    ['A pinch of baking soda in the cooking water makes chickpeas extra soft (perfect for hummus).']);
  T('knead-noodle', '🥟', 'Pleat & seal dumplings', 'Folding and pinching dumpling wrappers so they hold their filling and look professional.',
    ['Place a teaspoon of filling in the center of the wrapper.', 'Wet half the edge with water.', 'Fold in half and pinch the center closed.', 'Make 3–4 small pleats on each side toward the center, pressing each against the flat back.'],
    ['Keep wrappers under a damp towel so they do not dry out.', 'A simple half-moon press is perfectly fine while you learn.']);

  /* ---------- lessons ---------- */
  DD.lessons = [
    { id: 'knife-skills', icon: '🔪', title: 'Knife skills 101', mins: 8, sum: 'Hold, grip and cut safely and fast, like a line cook.',
      body: [
        ['p', 'Good knife skills are the single biggest thing that separates a nervous beginner from a confident cook. You only need **one sharp chef’s knife** (20 cm / 8 in), a large stable board, and practice.'],
        ['h', 'Why a sharp knife is safer'],
        ['p', 'A dull knife needs force, slips off a tomato skin and goes into your finger. A sharp knife glides through with control. Hone it on a steel every few uses and sharpen it a few times a year.'],
        ['h', 'The grip'],
        ['ul', ['**Pinch grip:** pinch the blade just in front of the handle between your thumb and the side of your index finger. Wrap the other fingers around the handle. This gives control.', '**The claw (guiding hand):** curl your fingertips under, so your knuckles face the blade. The flat of the knife rides against your knuckles. Your fingertips can never be cut.']],
        ['h', 'The motion'],
        ['p', 'Keep the tip of the knife on the board and rock the blade forward and down through the food (“rock chop”). Let the weight of the knife do the work. For softer things, use a long gliding slice forward.'],
        ['h', 'The essential cuts'],
        ['ul', ['[[dice]]: even cubes', '[[mince]]: very fine, almost paste', '[[julienne]]: matchsticks', '[[chiffonade]]: ribbons of herbs', '[[slice|thin slicing]] meat against the grain', '[[smash]] garlic to peel it in a second']],
        ['tip', 'Put a damp cloth or paper towel under your board. A sliding board is the #1 cause of kitchen cuts.'],
        ['h', 'Practice drill'],
        ['ol', ['Dice one onion every day for a week.', 'Mince two garlic cloves.', 'Time yourself. You will halve your time by day 7.']],
      ], practice: ['guacamole', 'greek-salad', 'tabbouleh'], tech: ['dice', 'mince', 'julienne', 'chiffonade', 'slice', 'smash'] },

    { id: 'mise', icon: '🧺', title: 'Mise en place & reading a recipe', mins: 5, sum: 'The professional habit that makes cooking calm instead of chaotic.',
      body: [
        ['p', 'In professional kitchens, before service, every cook sets up their **mise en place**: every ingredient cut, measured and arranged. During service, cooking is pure assembly. Do the same at home and cooking becomes calm.'],
        ['h', 'How to read a recipe like a pro'],
        ['ol', ['Read it **completely**, twice, before you shop.', 'Look for hidden time: marinating, soaking, resting, proving. Our recipes show this as “Rest / wait”.', 'Note the equipment you need.', 'Find the “point of no return”: the moment everything happens fast (stir-fries, tadkas, caramel). Have everything ready before it.']],
        ['h', 'Set up your station'],
        ['ul', ['A bin bowl for scraps saves dozens of trips.', 'Small bowls for each measured ingredient.', 'Arrange ingredients in the order they are used.', 'Clean as you go. Wash a few things while something simmers.']],
        ['tip', 'In cook mode, step 0 is always mise en place. Tick off every ingredient before you start.'],
      ], practice: ['egg-fried-rice', 'kung-pao-chicken'], tech: ['mise-en-place'] },

    { id: 'heat', icon: '🔥', title: 'Mastering heat', mins: 10, sum: 'The difference between browned and burnt, steamed and seared.',
      body: [
        ['p', 'Most beginner disasters are heat problems: food that sticks, burns, or turns grey and soggy. Learn what each heat level looks like and you control the outcome.'],
        ['h', 'Preheat the pan'],
        ['p', 'Put the empty pan on the heat **before** the oil. A properly hot pan prevents sticking. Test: flick in a drop of water. It should skitter and evaporate in 1–2 seconds. Then add oil; it should shimmer and flow like water.'],
        ['h', 'The heat ladder'],
        ['ul', ['**Low:** melting butter, [[sweat|sweating]] onions, gentle eggs, keeping things warm.', '**Medium:** most everyday cooking: [[saute|sautéing]], [[caramelize|caramelizing]], pancakes.', '**Medium-high:** browning, [[shallow-fry|shallow frying]].', '**High:** [[sear|searing]], [[stir-fry|stir-frying]], [[boil|boiling]] water.']],
        ['h', "Don't crowd the pan"],
        ['p', 'Each piece of food releases steam. Too many pieces and the pan can’t evaporate it fast enough: the food stews in its own juice and never browns. Leave space, or cook in batches.'],
        ['h', 'Choose the right fat'],
        ['ul', ['**High heat:** peanut, vegetable, canola, rice bran, ghee, avocado oil.', '**Medium heat:** olive oil, butter mixed with oil.', '**Low/finishing:** butter, extra-virgin olive oil, sesame oil (flavor, not frying).']],
        ['warn', 'If oil smokes heavily, it is too hot and breaking down. Take the pan off the heat for 30 seconds.'],
        ['h', 'Know your pans'],
        ['ul', ['**Cast iron / carbon steel:** best for searing, holds heat.', '**Stainless steel:** great browning and fond for pan sauces.', '**Non-stick:** eggs, pancakes, delicate fish. Not for very high heat.', '**Wok:** fast stir-fries, deep-frying, steaming.']],
      ], practice: ['chilli-paneer', 'chicken-teriyaki', 'french-omelette'], tech: ['sear', 'saute', 'sweat', 'stir-fry'] },

    { id: 'seasoning', icon: '🧂', title: 'Seasoning & balancing flavor', mins: 9, sum: 'Salt, acid, fat, heat, sweet and umami: the six dials of delicious.',
      body: [
        ['p', 'Great cooks don’t follow recipes blindly. They **taste and adjust**. Every dish is a balance of a few elements. When something tastes “off” or “flat”, one of these dials needs turning.'],
        ['h', 'The six dials'],
        ['ul', ['**Salt** makes flavors louder. If it tastes flat or boring, add salt first.', '**Acid** (lemon, lime, vinegar, tamarind, yogurt) brightens and cuts richness. If it tastes heavy or muddy, add acid.', '**Fat** (butter, oil, cream, coconut) carries flavor and rounds harsh edges.', '**Heat** (chili, pepper, ginger) adds excitement.', '**Sweet** (sugar, honey, palm sugar, caramelized onion) balances acid, bitterness and heat.', '**Umami** (soy, fish sauce, parmesan, tomato paste, miso, mushrooms) gives deep savory satisfaction.']],
        ['h', 'Season in layers'],
        ['p', 'Salt a little at each stage: the onions, the meat, the sauce. Food seasoned throughout tastes seasoned *inside*. Salt only at the end and it tastes salty on the surface and bland underneath.'],
        ['h', 'Taste like a chef'],
        ['ol', ['Taste.', 'Name what is missing using the six dials.', 'Adjust in **small** amounts.', 'Taste again.']],
        ['tip', 'Southeast Asian cooking is the master class in balance: Thai cooks taste for sweet, sour, salty and hot in every dish, tweaking with palm sugar, lime, fish sauce and chili.'],
        ['p', 'Went too far? The **Fix my dish** tool in the toolkit has a rescue for every problem.'],
      ], practice: ['pad-thai', 'tom-yum', 'guacamole'], tech: ['season'] },

    { id: 'aromatics', icon: '🧅', title: 'Flavor foundations of the world', mins: 8, sum: 'The aromatic bases behind every great cuisine.',
      body: [
        ['p', 'Almost every savory dish on earth starts the same way: aromatic vegetables cooked gently in fat. Learn a region’s base and you can improvise its whole cuisine.'],
        ['h', 'The bases'],
        ['ul', ['🇫🇷 **Mirepoix:** onion, carrot, celery (2:1:1) in butter.', '🇮🇹 **Soffritto:** onion, carrot, celery, garlic in olive oil, cooked slowly.', '🇪🇸 **Sofrito:** onion, garlic, tomato, peppers in olive oil.', '🇺🇸 Cajun **holy trinity:** onion, celery, green bell pepper.', '🇨🇳 **Ginger, garlic, scallion** hit in a hot wok.', '🇮🇳 **Onion, ginger, garlic, chili** browned, plus [[bloom|bloomed]] spices: the “masala”.', '🇹🇭 **Curry paste:** lemongrass, galangal, chili, shallot, garlic, shrimp paste, [[pound|pounded]].', '🇲🇽 **Recado/salsa base:** charred tomato, onion, garlic and chile.', '🇳🇬 **Ata base:** blended red bell pepper, scotch bonnet, tomato and onion, fried down.', '🇪🇹 **Niter kibbeh and berbere:** spiced butter and chile blend over slow-cooked onions.']],
        ['h', 'Golden rule'],
        ['p', 'Onions first (they need the longest), garlic and ginger later (they burn fast), ground spices last for 30–60 seconds before liquid.'],
      ], practice: ['chana-masala', 'jollof-rice', 'gumbo', 'paella'], tech: ['sweat', 'caramelize', 'bloom'] },

    { id: 'spices', icon: '🌶️', title: 'Working with spices', mins: 7, sum: 'Whole vs ground, toasting, blooming and storing.',
      body: [
        ['p', 'Spices are the passport of the kitchen. A few techniques make them sing instead of tasting dusty.'],
        ['h', 'Whole vs ground'],
        ['ul', ['**Whole spices** (cumin seeds, cardamom pods, cinnamon) keep 2–3 years and release flavor slowly. Use them in oil at the start or in long simmers.', '**Ground spices** lose flavor within 6–12 months. Buy small amounts, and bloom them in oil for 30–60 seconds.']],
        ['h', 'Three ways to unlock flavor'],
        ['ol', ['[[toast|Dry-toasting]] whole spices, then grinding them: the most intense flavor.', '[[bloom|Blooming]] ground spices in hot fat.', '[[tadka|Tadka]]: frying whole spices in ghee and pouring them over at the end.']],
        ['h', 'Storage'],
        ['p', 'Airtight jars, away from the stove (heat and light kill them). Sniff test: no strong aroma means no flavor. Replace it.'],
        ['h', 'Heat scale of chilies (mild → hot)'],
        ['p', 'Paprika → Kashmiri chili → jalapeño → serrano → cayenne → Thai bird’s eye → habanero / scotch bonnet. You can always add heat, but you can’t take it away.'],
      ], practice: ['dal-tadka', 'chicken-biryani', 'doro-wat'], tech: ['toast', 'bloom', 'tadka'] },

    { id: 'grains', icon: '🍚', title: 'Perfect rice, pasta & grains', mins: 9, sum: 'Fluffy rice and perfectly sauced pasta, every time.',
      body: [
        ['h', 'Rice: the absorption method'],
        ['ol', ['[[wash-rice|Wash]] until the water runs almost clear (not for risotto or paella).', 'Use the right ratio by volume: jasmine 1 : 1.25, basmati 1 : 1.5, short-grain (sushi) 1 : 1.1, brown 1 : 2.', 'Bring to a boil, cover tightly, turn to the lowest heat: 12 min white, 35–40 min brown.', '**Rest 10 minutes covered, off the heat.** Never skip this.', 'Fluff with a fork.']],
        ['tip', 'The knuckle trick: level the rice, rest your fingertip on top, and add water up to your first knuckle. Cooks across Asia have used it for generations.'],
        ['h', 'Pasta'],
        ['ul', ['Use lots of water (4 L per 500 g) and **salt it like the sea**: 10 g per liter.', 'Stir in the first minute so it doesn’t stick.', 'Cook to [[al-dente]], 1–2 minutes less than the packet says.', 'Save a mug of the starchy water before draining. It’s the secret to silky sauces.', 'Finish the pasta IN the sauce for 1–2 minutes, tossing with pasta water to [[emulsify]].']],
        ['h', 'Other grains'],
        ['ul', ['**Couscous:** pour over equal volume of boiling stock, cover 5 min, fluff.', '**Bulgur (fine):** soak in hot water 15 min.', '**Quinoa:** rinse, 1 : 2 water, 15 min, rest 5.', '**Polenta:** whisk into 4–5× boiling water, stir often 30–40 min.']],
      ], practice: ['egg-fried-rice', 'carbonara', 'risotto-milanese', 'chicken-biryani'], tech: ['wash-rice', 'al-dente', 'emulsify'] },

    { id: 'eggs', icon: '🥚', title: 'Eggs every way', mins: 7, sum: 'The most important ingredient for learning heat control.',
      body: [
        ['p', 'Chefs used to test new cooks with one dish: an omelette. Eggs teach you heat control better than anything else.'],
        ['h', 'Boiled eggs (from boiling water, large eggs)'],
        ['ul', ['**6 min:** jammy, runny yolk (ramen eggs).', '**7–8 min:** soft-set, custardy.', '**10 min:** fully set but still tender.', 'Then straight into ice water for 3 minutes. They peel easily and the yolk stays bright.']],
        ['h', 'Scrambled'],
        ['p', 'Low heat, butter, stir constantly with a spatula, pull off the heat while they still look slightly wet. They keep cooking on the plate.'],
        ['h', 'Fried'],
        ['p', 'Medium heat with a good layer of fat. Baste the white with hot fat for set whites and a runny yolk. For crispy lacy edges, use high heat and more oil.'],
        ['h', 'Poached'],
        ['p', 'Very fresh eggs, water barely trembling, a splash of vinegar, a gentle swirl, 3 minutes.'],
        ['h', 'Eggs in sauces'],
        ['p', 'Eggs scramble at about 70 °C. To add them to hot liquid (carbonara, avgolemono), [[temper]] them or use residual heat off the stove.'],
      ], practice: ['french-omelette', 'shakshuka', 'tomato-egg', 'carbonara'], tech: ['temper', 'poach', 'whisk'] },

    { id: 'meat', icon: '🥩', title: 'Meat, fish & doneness', mins: 10, sum: 'Choosing cuts, cooking them right, and never undercooking chicken.',
      body: [
        ['h', 'Two kinds of cuts'],
        ['ul', ['**Tender cuts** (fillet, sirloin, ribeye, chicken breast, pork tenderloin, fish) have little connective tissue. Cook them **fast and hot**: [[sear]], grill or roast, and don’t overcook.', '**Tough cuts** (shoulder, chuck, shin, brisket, thighs, oxtail) are full of collagen. Cook them **low and slow**: [[braise]] or stew until the collagen melts into gelatin. They are cheaper and often tastier.']],
        ['h', 'Buy a thermometer'],
        ['p', 'An instant-read thermometer is the best €15 you’ll spend. It removes all guesswork. See the temperature chart in the toolkit.'],
        ['h', 'The pro routine for steaks and chops'],
        ['ol', ['Take out of the fridge 30 min ahead.', 'Pat **bone dry**. Salt generously.', '[[sear]] in a smoking-hot pan without moving.', 'Flip, add butter, garlic, thyme and [[baste]].', '[[rest|Rest]] 5 minutes before slicing against the grain.']],
        ['h', 'Fish'],
        ['p', 'Fish is done when it turns opaque and flakes with gentle pressure. It cooks fast; err on the side of under. Skin-side down first, pressing gently for 10 seconds so it doesn’t curl.'],
        ['warn', 'Food safety: use separate boards for raw meat and vegetables, wash hands after handling raw chicken, never rinse raw chicken (it splashes bacteria), and cook poultry to 74 °C / 165 °F.'],
      ], practice: ['tandoori-chicken', 'chicken-teriyaki', 'wiener-schnitzel', 'dhaba-chicken'], tech: ['sear', 'rest', 'braise', 'baste'] },

    { id: 'sauces', icon: '🥣', title: 'Sauces & emulsions', mins: 8, sum: 'Pan sauces, roux, reductions and how to rescue a split sauce.',
      body: [
        ['h', 'The 3-minute pan sauce'],
        ['ol', ['After [[sear|searing]] meat, pour off excess fat.', 'Add shallot or garlic for 30 seconds.', '[[deglaze]] with wine or stock, scraping up the fond.', '[[reduce]] by half.', 'Off the heat, [[mount-butter|swirl in cold butter]]. Season. Done.']],
        ['h', 'Thickening methods'],
        ['ul', ['**[[roux|Roux]]:** flour cooked in fat (gravy, béchamel, gumbo).', '**Slurry:** cornstarch mixed with cold water, stirred into simmering liquid (Chinese sauces). Thickens in seconds.', '**[[reduce|Reduction]]:** evaporating water.', '**Purée:** blending some of the vegetables or beans back in.', '**Emulsion:** fat whisked into liquid.']],
        ['h', 'Emulsions'],
        ['p', 'An [[emulsify|emulsion]] suspends tiny droplets of fat in water. Emulsifiers (egg yolk, mustard, starchy water, tahini) help them stay together. Vinaigrette: 3 parts oil to 1 part acid, a little mustard, whisk hard.'],
        ['tip', 'Split sauce? Add a tablespoon of hot water or a fresh yolk to a clean bowl and slowly whisk the broken sauce back in.'],
      ], practice: ['mushroom-bourguignon', 'carbonara', 'hummus', 'gumbo'], tech: ['deglaze', 'reduce', 'roux', 'emulsify', 'mount-butter'] },

    { id: 'baking', icon: '🍞', title: 'Baking basics', mins: 8, sum: 'Baking is chemistry: precision, ovens and dough.',
      body: [
        ['p', 'Cooking is forgiving; baking is chemistry. A few rules make all the difference.'],
        ['h', 'Weigh, don’t scoop'],
        ['p', 'A cup of flour can weigh anything from 110 g to 160 g depending on how you scoop it. A €10 digital scale is the best baking investment. All our recipes give weights.'],
        ['h', 'Know your oven'],
        ['ul', ['Preheat fully, at least 15–20 min.', 'Most ovens run hot or cold. An oven thermometer reveals the truth.', 'Fan/convection ovens: reduce the temperature by 20 °C.', 'Don’t open the door in the first two-thirds of baking.']],
        ['h', 'Temperature matters'],
        ['ul', ['Butter for [[cream|creaming]]: soft but cool (18–20 °C).', 'Butter for pastry: ice cold.', 'Eggs: room temperature for cakes.', 'Yeast: liquid at 37 °C (warm bath temperature). Hotter kills it.']],
        ['h', 'Dough'],
        ['p', '[[knead|Kneading]] builds gluten (chew). [[proof|Proofing]] builds air and flavor. For tender cakes and pastry, mix as little as possible once the flour is in.'],
      ], practice: ['margherita-pizza', 'chocolate-chip-cookies', 'pao-de-queijo', 'pavlova'], tech: ['knead', 'proof', 'cream', 'fold'] },

    { id: 'plating', icon: '🎨', title: 'Plating like a professional', mins: 5, sum: 'We eat with our eyes first. Six simple rules.',
      body: [
        ['ol', ['**Warm the plates** for hot food (a low oven or hot water). Chefs always do this.', '**Use odd numbers:** 3 or 5 pieces look more natural than 4.', '**Build height:** lean components against each other rather than spreading them flat.', '**Contrast colors:** a scatter of green herbs, a squeeze of lime, a dusting of chili or sesame.', '**Leave space:** don’t fill to the rim. Clean edges with a damp towel.', '**Finish fresh:** a drizzle of good olive oil, flaky salt, fresh herbs or a tadka right before serving.']],
        ['tip', 'Garnish with something that is IN the dish (cilantro on a curry that contains cilantro). Never add random decorative leaves.'],
      ], practice: ['ceviche', 'poke-bowl', 'tiramisu', 'pavlova'], tech: ['chiffonade'] },
  ];

  /* ---------- Indian kitchen techniques ---------- */
  T('bhuna', '🍳', 'Bhuna (frying the masala)', 'Frying onion, tomato and spices over medium-high heat, stirring, until the masala darkens and oil separates at the edges. It is the heart of every North Indian curry.',
    ['Cook onions until golden brown.', 'Add ginger-garlic paste and cook out the raw smell (1–2 min).', 'Add ground spices and a splash of water so they don’t burn.', 'Add tomatoes and keep stirring and scraping. Splash in water whenever it sticks.', 'It is done when the masala looks glossy, jammy and the oil pools at the edges.'],
    ['Oil separating (“tel chhodna”) is the visual signal that the masala is cooked. Learn to spot it and your curries will never taste raw.'],
    'Adding water or cream before the masala is fully bhuna’d: the curry tastes raw and sharp.');
  T('dum', '🫕', 'Dum (sealed steam cooking)', 'Slow-cooking food in a sealed pot over very low heat so it cooks in its own steam and aromas. Used for biryani, dum aloo and nihari.',
    ['Layer or place the food in a heavy pot.', 'Seal the lid with foil or a rope of dough.', 'Cook on high 2–3 minutes until steam builds, then the lowest heat.', 'Place a tawa or flat pan under the pot so the bottom never burns.', 'Don’t open the lid until resting is done.'],
    ['A heavy pot and a tawa underneath are the two keys to dum without scorching.']);
  T('dhungar', '💨', 'Dhungar (charcoal smoking)', 'The dhaba trick for smoky tandoor flavor at home: a hot coal with ghee placed in a bowl inside the pot, then covered.',
    ['Heat a small piece of charcoal over a gas flame until glowing red (5 min).', 'Put a small steel bowl or onion skin in the middle of the finished dish.', 'Place the hot coal in it and pour ½ tsp ghee over. It will smoke heavily.', 'Cover the pot immediately and leave 2–5 minutes.', 'Remove the bowl and coal, stir and serve.'],
    ['Use natural lump charcoal, never briquettes with additives.', 'This one step makes home dal makhani and butter chicken taste like a dhaba.'],
    'Letting the coal touch the food, or leaving it too long: it becomes bitter and ashy.');
  T('ferment', '🫧', 'Ferment a batter', 'Letting a rice-lentil batter (idli, dosa, dhokla) rest in warmth so wild yeasts and bacteria make it airy and tangy.',
    ['Grind soaked rice and urad dal to the right texture (idli: slightly grainy; dosa: smooth).', 'Mix with salt by hand; the warmth of your hand helps.', 'Fill the container only half full; it will double.', 'Leave covered in a warm place (28–32 °C) 8–14 hours.', 'Ready when doubled, bubbly and pleasantly sour.'],
    ['In cold weather, put it in the oven with just the light on.', 'Don’t stir after fermenting. You knock out the air.']);
  T('roll-roti', '🫓', 'Roll rotis & parathas', 'Rolling soft dough into even, round flatbreads that puff on the flame.',
    ['Knead a soft dough and rest it 20–30 minutes.', 'Roll a ball, dust with flour and flatten.', 'Roll from the center outward, rotating a little after each pass so it stays round.', 'Roll evenly to about 2 mm; thin edges puff better.', 'For stuffed parathas, seal the filling inside like a pouch, flatten gently and roll with light pressure.'],
    ['Even thickness is what makes a roti puff, not perfect roundness.']);

  /* ---------- beginner path ---------- */
  DD.path = [
    { id: 'guacamole', why: 'Knife skills and seasoning to taste, with no heat involved.' },
    { id: 'tomato-egg', why: 'Gentle egg cookery and your first stir-fry.' },
    { id: 'french-omelette', why: 'The classic chef test: heat control and confidence.' },
    { id: 'egg-fried-rice', why: 'Mise en place and high-heat wok cooking.' },
    { id: 'carbonara', why: 'Pasta timing and emulsifying a silky sauce.' },
    { id: 'dal-tadka', why: 'Simmering legumes and the magic of a tadka.' },
    { id: 'shakshuka', why: 'Building a spiced sauce and poaching eggs in it.' },
    { id: 'chicken-teriyaki', why: 'Searing protein and reducing a glaze.' },
    { id: 'crepes', why: 'Batter, pan temperature and the flip.' },
    { id: 'chana-masala', why: 'The onion-tomato masala base behind most curries.' },
    { id: 'chilli-paneer', why: 'High-heat searing and a glossy wok sauce.' },
    { id: 'thai-green-curry', why: 'Balancing sweet, salty, sour and hot.' },
    { id: 'risotto-milanese', why: 'Patience, stock and starch control.' },
    { id: 'wiener-schnitzel', why: 'Breading and shallow-frying to golden perfection.' },
    { id: 'mushroom-bourguignon', why: 'The great braise: sear, deglaze, slow cook.' },
    { id: 'margherita-pizza', why: 'Kneading, proofing and very hot baking.' },
  ];

  DD.lessons.push({
    id: 'dhaba-secrets', icon: '🛻', title: 'Dhaba secrets: Indian cooking like the highway kitchens', mins: 9, sum: 'Why dhaba food tastes so good, and how to get that flavor at home.',
    body: [
      ['p', 'Dhabas are the roadside kitchens on India’s highways, built to feed truck drivers fast, hot and full of flavor. Their food is rustic, generous and deeply savory. These are their secrets.'],
      ['h', '1. Ghee and butter, without fear'],
      ['p', 'Dhaba cooks start with ghee and finish with a knob of white butter (makhan). Fat carries the spices, and the final butter gives that glossy richness.'],
      ['h', '2. Patient bhuna on high heat'],
      ['p', 'The masala is [[bhuna|fried hard]] on a fierce flame in a heavy kadai until the oil separates. Rushing this is the #1 reason home curries taste flat.'],
      ['h', '3. Smoke'],
      ['p', 'Tandoors and coal fires give a smoky edge. At home, use the [[dhungar]] method with a hot coal and ghee, or [[char]] vegetables directly on the gas flame (baingan bharta).'],
      ['h', '4. Kasuri methi and garam masala at the end'],
      ['p', 'Crushed dried fenugreek leaves and a pinch of fresh garam masala go in at the very end, so their aroma hits you when the dish lands on the table.'],
      ['h', '5. Long, slow dals'],
      ['p', 'Dal makhani simmers on the dying tandoor coals all night. At home, a long gentle [[simmer]] (or a pressure cooker plus 1 hour of simmering) gets you there.'],
      ['h', '6. The finishing tadka'],
      ['p', 'A sizzling [[tadka]] of ghee, cumin, garlic and red chili poured over at the last second.'],
      ['tip', 'Serve the dhaba way: onion rings with lemon and chaat masala, green chili, and a stack of butter-brushed rotis.'],
    ], practice: ['dal-makhani', 'paneer-butter-masala', 'dhaba-chicken', 'baingan-bharta', 'aloo-paratha'], tech: ['bhuna', 'dhungar', 'tadka', 'char'],
  });

  /* ---------- toolkit ---------- */
  DD.tools.fix = [
    ['🧂', 'Too salty', ['Add more of everything else (more liquid, vegetables, beans, unsalted stock) to dilute.', 'Add acid (lemon, vinegar) and a little sugar or fat (cream, coconut milk, butter) to balance perception.', 'Serve with plain rice, bread or unsalted yogurt.', 'The “raw potato trick” barely works. Dilution is the real fix.']],
    ['🔥', 'Too spicy', ['Add dairy or fat: yogurt, cream, coconut milk, butter, cheese.', 'Add sweetness (sugar, honey) and acid (lime).', 'Bulk it out with more base ingredients.', 'Serve with cooling sides: raita, cucumber, rice. Water makes it worse; milk helps.']],
    ['🍋', 'Too sour or acidic', ['Add a pinch of sugar or honey.', 'Add fat: butter, cream, olive oil.', 'For tomato sauces, a tiny pinch of baking soda neutralizes acid (it will foam).']],
    ['🍬', 'Too sweet', ['Add acid: lemon, lime or vinegar.', 'Add salt, and something bitter or spicy (chili, black pepper).']],
    ['😐', 'Bland or flat', ['Add salt first, a pinch at a time.', 'Then acid: a squeeze of lemon makes almost everything “pop”.', 'Then umami: soy sauce, fish sauce, parmesan or tomato paste.', 'Finish with fresh herbs or a drizzle of good oil.']],
    ['🌿', 'Bitter', ['Add a little sweetness and salt (salt suppresses bitterness).', 'Add fat or creaminess.', 'If garlic or spices burned, the bitterness won’t leave. Start the base again.']],
    ['💧', 'Sauce too thin', ['[[reduce|Reduce]] it: simmer uncovered.', 'Stir in a cornstarch slurry (1 tsp cornstarch + 1 tbsp cold water), then simmer 1 min.', 'Blend part of the dish and stir it back in.', 'Whisk in a little butter or beurre manié (equal flour and butter mashed together).']],
    ['🧱', 'Sauce too thick', ['Loosen with hot stock, water, pasta water or milk, a splash at a time.']],
    ['💔', 'Sauce split or curdled', ['Take it off the heat immediately.', 'Whisk in a spoon of cold water or an ice cube vigorously.', 'For mayo or hollandaise: put a fresh yolk in a clean bowl, then whisk the split sauce in drop by drop.', 'For curries with yogurt: blend briefly; next time, [[temper]] the yogurt first.']],
    ['⚫', 'Burnt the bottom of the pot', ['Do NOT stir! Stirring spreads the burnt taste.', 'Carefully pour the unburnt top into a clean pot and taste. If it is fine, carry on.']],
    ['🍚', 'Rice is mushy', ['Spread it on a tray to steam dry. Use it tomorrow for fried rice.', 'Next time use less water and [[wash-rice|wash the rice]] well.']],
    ['🍚', 'Rice still crunchy', ['Add 2–4 tbsp hot water, cover tightly and steam on the lowest heat 5–10 more minutes.']],
    ['🥩', 'Meat is tough', ['Tender cut overcooked? Slice very thin against the grain and serve with sauce.', 'Tough stewing cut? It is UNDER-cooked. Keep braising gently until it falls apart.']],
    ['🍝', 'Pasta is sticky or clumped', ['Toss with hot pasta water and a little oil or butter to loosen it.', 'Next time: use more water and stir in the first minute.']],
    ['🛢️', 'Soup or stew too greasy', ['Skim the surface with a ladle, or lay paper towel on the top to absorb fat.', 'Chill it: fat solidifies and lifts off.']],
    ['🥦', 'Vegetables are soggy', ['Next time: roast hotter, don’t crowd the tray, and dry vegetables well before cooking.', 'Turn soggy vegetables into soup or a purée.']],
    ['🍪', 'Cookies spread flat', ['Chill the dough 30+ minutes.', 'Check your butter was not too warm or melted.', 'Measure flour by weight.']],
  ];

  DD.tools.subs = [
    ['Buttermilk (240 ml)', '240 ml milk + 1 tbsp lemon juice or vinegar; rest 10 min', 'Baking, fried chicken marinades'],
    ['1 egg (baking)', '1 tbsp ground flax + 3 tbsp water, rested 5 min; or 60 g mashed banana', 'Works in cookies, pancakes, muffins'],
    ['Heavy / double cream', 'Full-fat coconut cream, or 3/4 milk + 1/4 melted butter (not for whipping)', 'Sauces and soups'],
    ['Sour cream', 'Greek yogurt (same amount)', 'Dips, toppings, baking'],
    ['Butter (baking)', 'Equal weight of coconut oil, or 80% the weight of neutral oil', 'Texture changes slightly'],
    ['Ghee', 'Butter + a splash of oil (raises smoke point)', 'Indian cooking'],
    ['Fresh herbs', '1 tsp dried = 1 tbsp fresh', 'Add dried early, fresh at the end'],
    ['Fresh garlic (1 clove)', '1/4 tsp garlic powder', 'Flavor is flatter'],
    ['Fresh ginger (1 tbsp)', '1/4 tsp ground ginger', 'Less zing'],
    ['Lemongrass', 'Zest of 1 lemon + a little lime zest', 'Thai and Vietnamese dishes'],
    ['Galangal', 'Fresh ginger + a squeeze of lime', 'Thai curries and soups'],
    ['Kaffir (makrut) lime leaves', 'Lime zest + a bay leaf', 'Curries'],
    ['Fish sauce', 'Soy sauce + a pinch of salt, or vegan “fish” sauce', 'Southeast Asian dishes'],
    ['Shaoxing wine', 'Dry sherry, or dry white wine + pinch of sugar', 'Chinese cooking'],
    ['Mirin', 'Dry white wine or rice vinegar + sugar (2 tsp per 1 tbsp)', 'Japanese glazes'],
    ['Tamarind paste', 'Lime juice + a little brown sugar', 'Pad thai, curries'],
    ['Palm sugar', 'Light brown sugar', 'Thai cooking'],
    ['Paneer', 'Extra-firm tofu or halloumi', 'Palak paneer, curries'],
    ['Guanciale / pancetta', 'Thick-cut unsmoked bacon', 'Carbonara, Italian sauces'],
    ['Pecorino Romano', 'Parmesan (milder, less salty)', 'Pasta'],
    ['Wine (in stews)', 'Stock + 1 tbsp vinegar or lemon juice', 'Braises, risotto'],
    ['Breadcrumbs', 'Crushed crackers, cornflakes or rolled oats', 'Coatings'],
    ['Cornstarch (thickening)', '2× the amount of all-purpose flour', 'Simmer a little longer'],
    ['Self-raising flour (150 g)', '150 g plain flour + 1.5 tsp baking powder + pinch salt', 'Baking'],
    ['Cake / caster sugar', 'Granulated sugar blitzed 30 s in a blender', 'Meringue, baking'],
    ['Rice vinegar', 'Apple cider vinegar + a pinch of sugar', 'Asian dressings'],
    ['Gochujang', 'Sriracha + miso + a pinch of sugar', 'Korean dishes'],
    ['Saffron', 'Pinch of turmeric + smoked paprika (color, not flavor)', 'Paella, risotto'],
    ['Scotch bonnet / habanero', '2–3 Thai bird’s eye chilies or 1 tsp cayenne', 'Caribbean and West African'],
    ['Coconut milk', 'Cashew cream, or Greek yogurt (stir in off the heat)', 'Curries'],
    ['Shallots', 'Red onion (use 2/3 the amount)', 'Everywhere'],
    ['Wine vinegar', 'Lemon juice', 'Dressings'],
  ];

  DD.tools.temps = {
    meat: [
      ['Beef/lamb: rare', 50, 'Cool red center. Pull at 47 °C.'],
      ['Beef/lamb: medium-rare', 55, 'Warm red center, the chef’s choice. Pull at 52 °C.'],
      ['Beef/lamb: medium', 60, 'Pink center. Pull at 57 °C.'],
      ['Beef/lamb: well done', 70, 'No pink. Best only for braises.'],
      ['Pork chops & tenderloin', 63, 'Slightly pink and juicy, perfectly safe.'],
      ['Chicken & turkey (breast)', 74, 'Juices run clear. Safe at 65 °C held for 3+ min.'],
      ['Chicken thighs', 80, 'Higher temp for tender, juicy dark meat.'],
      ['Minced / ground meat', 71, 'Burgers, meatballs, kofta.'],
      ['Fish (most)', 55, 'Opaque, just flakes. Salmon: 50 °C for silky.'],
      ['Slow-cooked braises', 95, 'Collagen melts: fork-tender at 90–96 °C internal.'],
    ],
    oil: [
      ['Shallow-frying', 170, 'Schnitzel, fritters, cutlets'],
      ['Deep-frying (most foods)', 175, 'Falafel, katsu, fried chicken'],
      ['Chips: first fry', 140, 'Blanch potatoes until soft'],
      ['Chips: second fry', 190, 'Crisp and golden'],
      ['Tempura / doughnuts', 180, 'Light batters'],
    ],
    oven: [
      ['Low / slow', 150, 'Braises, slow roasts, meringues (110–120 °C)'],
      ['Moderate', 180, 'Most cakes, cookies, casseroles'],
      ['Hot', 200, 'Roast vegetables, chicken'],
      ['Very hot', 230, 'Bread, crispy potatoes'],
      ['Maximum', 260, 'Pizza (as hot as your oven goes)'],
      ['Bread is done', 96, 'Internal temp 93–99 °C; sounds hollow when tapped'],
    ],
  };

  DD.tools.heat = [
    ['Low', 1, 'Barely any sizzle. Butter melts without foaming.', 'Melting, sweating onions, gentle scrambled eggs, keeping warm, poaching'],
    ['Medium-low', 2, 'Gentle sizzle. Garlic softens without browning.', 'Caramelizing onions (long), cooking garlic, simmering sauces'],
    ['Medium', 3, 'Steady sizzle. Butter foams.', 'Pancakes, crêpes, omelettes, sautéing, most everyday cooking'],
    ['Medium-high', 4, 'Loud sizzle. Oil shimmers.', 'Browning meat, shallow-frying, stir-frying in a skillet'],
    ['High', 5, 'Oil just starts to smoke. Water droplets skitter.', 'Searing steak, wok stir-fry, boiling water, smash burgers'],
  ];

  DD.tools.cups = [
    ['All-purpose flour', 125], ['Bread flour', 130], ['Granulated sugar', 200], ['Brown sugar (packed)', 220], ['Powdered / icing sugar', 120],
    ['Butter', 227], ['Rice (uncooked)', 185], ['Rolled oats', 90], ['Cocoa powder', 85], ['Honey', 340], ['Milk / water', 240],
    ['Grated parmesan', 100], ['Chopped nuts', 120], ['Dried lentils', 190], ['Chocolate chips', 170], ['Breadcrumbs (panko)', 60],
  ];

  DD.tools.pantry = [
    ['🇨🇳🇯🇵🇰🇷 East Asia', ['Light & dark soy sauce', 'Toasted sesame oil', 'Rice vinegar', 'Shaoxing wine / mirin', 'Oyster sauce', 'Doubanjiang / gochujang / miso', 'Sichuan peppercorns', 'Cornstarch', 'Fresh ginger, garlic, scallions', 'Jasmine or short-grain rice']],
    ['🇹🇭🇻🇳🇮🇩 Southeast Asia', ['Fish sauce', 'Palm sugar', 'Coconut milk', 'Tamarind paste', 'Thai curry pastes', 'Rice noodles', 'Jasmine rice', 'Limes, chilies, lemongrass', 'Kecap manis', 'Shrimp paste']],
    ['🇮🇳🇵🇰🇳🇵 South Asia', ['Ghee', 'Cumin, coriander, turmeric, Kashmiri chili', 'Garam masala', 'Whole spices: cardamom, cloves, cinnamon, bay', 'Mustard seeds', 'Basmati rice', 'Lentils (toor, masoor, chana dal)', 'Canned chickpeas', 'Ginger & garlic']],
    ['🇱🇧🇹🇷🇮🇷 Middle East', ['Tahini', 'Good olive oil', 'Sumac, za’atar, Aleppo pepper', 'Pomegranate molasses', 'Bulgur and couscous', 'Dried chickpeas', 'Lemons', 'Parsley & mint', 'Pita']],
    ['🇲🇦🇳🇬🇪🇹 Africa', ['Ras el hanout / berbere', 'Scotch bonnets', 'Tomato paste', 'Peanut butter (unsweetened)', 'Preserved lemons', 'Long-grain parboiled rice', 'Dried thyme, curry powder, bay', 'Stock cubes']],
    ['🇮🇹🇫🇷🇪🇸 Europe', ['Extra-virgin olive oil', 'Butter', 'Parmesan / pecorino', 'Dried pasta', 'Canned tomatoes', 'Wine & wine vinegar', 'Dijon mustard', 'Smoked paprika & saffron', 'Thyme, bay, rosemary']],
    ['🇲🇽🇵🇪🇧🇷 Latin America', ['Dried chiles (ancho, guajillo, chipotle in adobo)', 'Cumin & Mexican oregano', 'Limes', 'Corn tortillas / masa harina', 'Black beans', 'Aji amarillo paste', 'Cilantro', 'Tapioca starch']],
    ['🇯🇲🇨🇺 Caribbean', ['Allspice (pimento)', 'Scotch bonnets', 'Fresh thyme', 'Scallions', 'Browning sauce', 'Coconut milk', 'Kidney beans']],
  ];
})();
