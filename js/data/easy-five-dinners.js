/* 5 ingredients or less, and easy weeknight dinners (veg-first).
   Original recipes written for Dish Dictionary. "5 ingredients" never counts salt, pepper, oil or water. */
'use strict';
(function () {
  const X = (base, d) => DD.add(Object.assign({}, base, d));
  const IN = { country: 'India', flag: '🇮🇳', region: 'South Asia' };
  const IT = { country: 'Italy', flag: '🇮🇹', region: 'Europe', styles: ['continental'] };
  const UK = { country: 'United Kingdom', flag: '🇬🇧', region: 'Europe', styles: ['continental'] };
  const US = { country: 'United States', flag: '🇺🇸', region: 'North America' };
  const CN = { country: 'China', flag: '🇨🇳', region: 'East Asia' };

  /* ======================= 5 INGREDIENTS OR LESS ======================= */

  X(IT, { id: 'cacio-e-pepe', name: 'Cacio e Pepe', local: 'Cacio e pepe', emoji: '🍝', course: 'main', level: 2, prep: 5, cook: 12, serves: 2,
    taste: { savory: 4, rich: 4, aromatic: 3, spicy: 1 }, diet: ['vegetarian'], methods: ['simmer'], tags: ['weeknight', 'date-night'],
    desc: 'Rome’s three-ingredient pasta: spaghetti in a glossy sauce of pecorino and toasted black pepper.',
    story: 'Shepherds in the hills around Rome carried dried pasta, hard sheep’s cheese and pepper because none of it spoiled. The trick that turns three ingredients into a creamy sauce is starchy pasta water.',
    equip: ['Wide frying pan', 'Pot', 'Fine grater', 'Tongs'],
    ing: [[200, 'g', 'spaghetti'], [80, 'g', 'pecorino romano', 'very finely grated'], [2, 'tsp', 'black pepper', 'coarsely cracked'], [20, 'g', 'butter', 'optional, makes it foolproof'], [1, 'tsp', 'salt', 'for the pasta water'], [1.5, 'l', 'water']],
    steps: [
      ['Toast the pepper', '[[toast|Toast]] the cracked pepper in a dry wide pan over medium heat for 1 minute until fragrant. Add a ladle of water and turn off the heat.', 1],
      ['Cook the pasta', 'Boil the spaghetti in only 1.5 litres of lightly salted water (less water means starchier water). Cook it 2 minutes short of the packet time, [[al-dente]].', 8, 'Save a big mug of the pasta water before draining.'],
      ['Make the cheese cream', 'Mash the pecorino with 3–4 tbsp of slightly cooled pasta water into a smooth, thick paste.', null, 'Hot water straight from the pot makes the cheese clump. Let it cool for a minute.'],
      ['Bring it together', 'Move the pasta into the pepper pan with a splash of pasta water and the butter. Toss over low heat for 1 minute, take it off the heat, add the cheese paste and toss hard until creamy and glossy ([[emulsify]]). Loosen with more water if needed.', 2],
    ],
    tips: ['Hard Italian cheeses are often made with animal rennet. For strict vegetarians, choose a hard cheese labelled vegetarian (microbial rennet).', 'Grate the cheese as finely as possible so it melts instantly.'],
    mistakes: ['Adding the cheese over high heat: it turns into rubbery lumps.', 'Draining all the pasta water: the starch is what makes the sauce.'],
    vars: ['Add lemon zest for a fresh version.', 'Half pecorino, half parmesan for a milder taste.'], serve: 'On its own, with a simple green salad.' });

  X({ country: 'Finland', flag: '🇫🇮', region: 'Europe', styles: ['continental'] }, { id: 'baked-feta-pasta', name: 'Baked Feta Pasta', local: 'Uunifetapasta', emoji: '🍅', course: 'main', level: 1, prep: 5, cook: 30, serves: 4,
    taste: { savory: 4, sour: 3, rich: 3, herby: 3 }, diet: ['vegetarian'], methods: ['roast'], tags: ['weeknight', 'kids', 'party', 'one-pot'],
    desc: 'A block of feta roasted in a sea of cherry tomatoes and garlic, then smashed into a creamy sauce.',
    story: 'Finnish food blogger Jenni Häyrinen published “uunifetapasta” in 2019. When it went viral on TikTok in 2021, feta sold out in shops across Finland and then the world.',
    equip: ['Baking dish', 'Pot'],
    ing: [[200, 'g', 'feta', 'one block'], [500, 'g', 'cherry tomatoes'], [4, 'clove', 'garlic', 'peeled, whole'], [300, 'g', 'penne'], [1, 'handful', 'basil'], [4, 'tbsp', 'olive oil'], [0.5, 'tsp', 'chili flakes', 'optional'], [0.25, 'tsp', 'salt'], [0.25, 'tsp', 'black pepper']],
    steps: [
      ['Roast', 'Tip the tomatoes and garlic into a baking dish, sit the feta in the middle, pour over the oil and season. [[roast|Roast]] at {{200C}} for 30 minutes until the tomatoes burst and the feta is soft and golden.', 30],
      ['Cook the pasta', 'Meanwhile cook the penne [[al-dente]]. Keep a cup of pasta water.', 10],
      ['Smash', '[[smash|Smash]] the feta, garlic and tomatoes together with a spoon into a creamy, chunky sauce.'],
      ['Toss', 'Add the pasta, a splash of pasta water and torn basil. Stir and serve.'],
    ],
    tips: ['Use a whole block of feta in brine, not crumbled feta, so it turns creamy.'], mistakes: ['Too big a dish: the tomatoes dry out instead of bursting.'],
    vars: ['Add spinach with the pasta.', 'Swap feta for a round of goat cheese.'], serve: 'Crusty bread and a green salad.' });

  X(UK, { id: 'garlic-mushroom-toast', name: 'Garlic Mushrooms on Toast', local: 'Mushrooms on toast', emoji: '🍄', course: 'breakfast', level: 1, prep: 5, cook: 10, serves: 2,
    taste: { umami: 4, savory: 4, rich: 3, herby: 2 }, diet: ['vegetarian'], methods: ['saute'], tags: ['quick', 'brunch', 'weeknight'],
    desc: 'Golden, buttery garlic mushrooms piled onto thick toasted sourdough.',
    story: 'A British café staple and the best proof that a hot pan and patience are worth more than a long ingredient list.',
    equip: ['Large frying pan', 'Toaster'],
    ing: [[250, 'g', 'chestnut mushrooms', 'thickly sliced'], [30, 'g', 'butter'], [2, 'clove', 'garlic', 'minced'], [2, 'slice', 'sourdough bread', 'thick'], [1, 'tbsp', 'parsley', 'chopped'], [1, 'tbsp', 'olive oil'], [0.25, 'tsp', 'salt'], [0.25, 'tsp', 'black pepper']],
    steps: [
      ['Sear', 'Heat the oil in a wide pan until shimmering. Add the mushrooms in one layer and leave them alone for 3 minutes to [[sear]], then stir and cook 2 more minutes.', 5, 'Crowded, stirred mushrooms steam and go grey. Give them space.'],
      ['Butter and garlic', 'Add the butter and [[mince|minced]] garlic and cook 1 minute until fragrant. Season now, not earlier.', 1],
      ['Serve', 'Toast the bread, pile the mushrooms on top with their juices and scatter parsley.'],
    ],
    tips: ['Salt at the end: early salt pulls out water.'], mistakes: ['A cold pan: the mushrooms stew.'],
    vars: ['Add a spoon of cream or crème fraîche.', 'Top with a poached egg.'], serve: 'Tea or coffee.' });

  X(UK, { id: 'cheese-toastie', name: 'Cheese & Onion Toastie', local: 'Cheese toastie', emoji: '🧀', course: 'snack', level: 1, prep: 5, cook: 8, serves: 2,
    taste: { rich: 4, savory: 4 }, diet: ['vegetarian'], methods: ['saute'], tags: ['quick', 'kids', 'budget', 'comfort'],
    desc: 'Crisp, buttery bread outside, a molten river of sharp cheddar and sweet onion inside.',
    story: 'The toastie is Britain’s answer to the grilled cheese sandwich: everyday food that everyone has strong opinions about.',
    equip: ['Frying pan', 'Spatula'],
    ing: [[4, 'slice', 'white bread'], [100, 'g', 'mature cheddar', 'finely grated'], [0.5, '', 'red onion', 'very thinly sliced'], [20, 'g', 'butter', 'soft'], [1, 'tsp', 'English mustard', 'optional']],
    steps: [
      ['Build', 'Butter one side of each slice. Turn two slices butter-side down, spread with mustard, add the cheese and onion and top with the other slices, butter-side up.'],
      ['Cook low', 'Cook in a dry pan over medium-low heat for 3–4 minutes per side, pressing gently, until deep golden and the cheese has melted.', 7, 'Low heat lets the cheese melt before the bread burns.'],
      ['Rest', '[[rest|Rest]] 1 minute before cutting so the cheese doesn’t all run out.'],
    ],
    tips: ['Grate the cheese finely: it melts faster and more evenly.'], mistakes: ['High heat: burnt bread, cold cheese.'],
    vars: ['Add sliced tomato or chutney.', 'Use a sandwich press.'], serve: 'Tomato soup for dipping.' });

  X({ country: 'Cyprus', flag: '🇨🇾', region: 'Europe' }, { id: 'halloumi-watermelon-salad', name: 'Halloumi & Watermelon Salad', local: 'Χαλλούμι με καρπούζι', emoji: '🍉', course: 'salad', level: 1, prep: 10, cook: 4, serves: 4,
    taste: { sweet: 3, savory: 4, herby: 3, sour: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute', 'no-cook'], tags: ['summer', 'quick', 'healthy', 'party'],
    desc: 'Hot, squeaky golden halloumi on cold sweet watermelon with mint and lime.',
    story: 'In Cyprus, halloumi with watermelon is a classic summer pairing: salty and sweet, warm and icy.',
    equip: ['Non-stick pan', 'Platter'],
    ing: [[250, 'g', 'halloumi', '1 cm slices'], [600, 'g', 'watermelon', 'cubed, chilled'], [1, 'handful', 'mint leaves'], [1, '', 'lime', 'juice'], [1, 'tbsp', 'olive oil'], [0.25, 'tsp', 'black pepper']],
    steps: [
      ['Arrange', 'Spread the chilled watermelon on a platter.'],
      ['Sear the halloumi', 'Pat the halloumi dry and [[sear]] in a dry, hot non-stick pan for 1–2 minutes per side until deep golden.', 4, 'Serve it straight away: halloumi turns rubbery as it cools.'],
      ['Dress', 'Lay the halloumi on the melon, scatter mint, squeeze over lime, drizzle with oil and add pepper.'],
    ],
    tips: ['No salt needed: halloumi is salty already.'], mistakes: ['Cooking halloumi too early.'],
    vars: ['Add cucumber and a few olives.', 'Grill the watermelon briefly too.'], serve: 'As a starter on a hot day.' });

  X(Object.assign({}, CN, { area: 'Sichuan' }), { id: 'smashed-cucumber-salad', name: 'Smashed Cucumber Salad', local: '拍黄瓜', emoji: '🥒', course: 'salad', level: 1, prep: 15, cook: 0, serves: 4,
    taste: { sour: 4, spicy: 3, umami: 3, aromatic: 3 }, diet: ['vegan'], methods: ['no-cook'], tags: ['quick', 'summer', 'healthy', 'budget'],
    desc: 'Cucumbers cracked open so their rough edges soak up garlic, black vinegar, soy and chili oil.',
    story: 'Pai huang gua (“patted cucumber”) is on almost every Chinese family table in summer. Smashing instead of slicing makes jagged surfaces that hold the dressing.',
    equip: ['Cleaver or rolling pin', 'Bowl'],
    ing: [[2, '', 'cucumbers'], [3, 'clove', 'garlic', 'minced'], [1.5, 'tbsp', 'chinkiang black vinegar'], [1, 'tbsp', 'light soy sauce'], [1, 'tbsp', 'chili oil'], [0.5, 'tsp', 'salt']],
    steps: [
      ['Smash', 'Lay a cucumber on the board and [[smash]] it firmly with the flat of a cleaver or a rolling pin until it cracks open. Tear into bite-size chunks.'],
      ['Salt', 'Toss with the salt and leave 10 minutes, then pour off the water.', 10, 'This keeps the dressing strong instead of watery.'],
      ['Dress', 'Toss with garlic, vinegar, soy sauce and chili oil just before serving.'],
    ],
    tips: ['Use thin-skinned cucumbers; no need to peel.'], mistakes: ['Dressing too early: the salad turns watery.'],
    vars: ['Add toasted sesame seeds and cilantro.', 'Rice vinegar plus a pinch of sugar if you have no black vinegar.'], serve: 'With noodles, dumplings or rice.' });

  X(CN, { id: 'soy-garlic-tofu', name: 'Crispy Soy-Garlic Tofu', local: '蒜香豆腐', emoji: '🧈', course: 'main', level: 1, prep: 20, cook: 12, serves: 3,
    taste: { savory: 4, umami: 4, sweet: 2, aromatic: 3 }, diet: ['vegan', 'high-protein'], methods: ['saute'], tags: ['weeknight', 'quick', 'budget', 'healthy'],
    desc: 'Cornstarch-crisp tofu cubes tossed in a sticky soy and garlic glaze.',
    story: 'A home-cooking favourite across East Asia: tofu with a crunchy coating and a glaze made from what is already in the cupboard.',
    equip: ['Non-stick pan', 'Clean towel'],
    ing: [[400, 'g', 'firm tofu', 'pressed, 2 cm cubes'], [2, 'tbsp', 'cornstarch'], [3, 'clove', 'garlic', 'minced'], [2, 'tbsp', 'soy sauce'], [1, 'tbsp', 'sugar'], [3, 'tbsp', 'neutral oil'], [3, 'tbsp', 'water'], [2, '', 'scallions', 'sliced, to serve']],
    steps: [
      ['Press', 'Wrap the tofu in a clean towel and press under something heavy for 15 minutes. Cut into cubes.', 15, 'Drier tofu = crispier tofu.'],
      ['Coat and fry', '[[dredge|Dredge]] the cubes in cornstarch and [[shallow-fry]] in the oil over medium-high heat, turning, until golden on all sides.', 8],
      ['Glaze', 'Push the tofu aside, fry the garlic 30 seconds, then add soy sauce, sugar and water. Bubble and toss until glossy and sticky.', 2],
      ['Serve', 'Top with scallions.'],
    ],
    tips: ['Use tamari for a gluten-free version.'], mistakes: ['Turning the tofu too early: the crust sticks.'],
    vars: ['Add a spoon of chili sauce to the glaze.', 'Toss in steamed broccoli.'], serve: 'Steamed rice.', store: 'Best fresh; reheat in a hot pan.' });

  X({ country: 'South Korea', flag: '🇰🇷', region: 'East Asia' }, { id: 'kimchi-fried-rice', name: 'Kimchi Fried Rice', local: '김치볶음밥', emoji: '🍳', course: 'main', level: 1, prep: 5, cook: 12, serves: 2,
    taste: { spicy: 3, sour: 3, umami: 4, savory: 4 }, diet: ['vegetarian'], methods: ['stir-fry'], tags: ['quick', 'weeknight', 'budget', 'comfort'],
    desc: 'Day-old rice fried with sour kimchi and gochujang, topped with a runny fried egg.',
    story: 'Kimchi-bokkeumbap is what Korean home cooks make when the kimchi gets too sour to eat on its own. Old kimchi has the deepest flavour.',
    equip: ['Wok or large frying pan'],
    ing: [[400, 'g', 'cooked rice', 'day-old, cold'], [200, 'g', 'vegan kimchi', 'chopped, plus 3 tbsp of its juice'], [1, 'tbsp', 'gochujang'], [2, '', 'eggs'], [2, '', 'scallions', 'sliced'], [2, 'tbsp', 'neutral oil']],
    steps: [
      ['Fry the kimchi', '[[stir-fry|Stir-fry]] the kimchi in 1 tbsp oil over medium-high heat for 3 minutes until the edges caramelize.', 3],
      ['Add rice', 'Add the gochujang, kimchi juice and rice. Toss and press the rice against the pan for 4 minutes so some grains turn crisp.', 4],
      ['Fry the eggs', 'In another pan, fry the eggs in the remaining oil until the whites are crisp and the yolks runny.', 3],
      ['Serve', 'Top each bowl with an egg and the scallions.'],
    ],
    tips: ['Most kimchi contains fish sauce. Choose a vegan kimchi to keep this vegetarian.'], mistakes: ['Freshly cooked rice: it turns mushy.'],
    vars: ['Stir in cubes of tofu or a slice of cheese at the end.'], serve: 'A crisp sheet of seaweed on the side.' });

  X(Object.assign({}, IN, { area: 'Pan-India', styles: ['home-style'] }), { id: 'masala-omelette', name: 'Masala Omelette', local: 'मसाला ऑमलेट', emoji: '🍳', course: 'breakfast', level: 1, prep: 5, cook: 4, serves: 1,
    taste: { savory: 4, spicy: 2, herby: 3 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['saute'], tags: ['quick', 'budget', 'brunch', 'kids'],
    desc: 'A fluffy Indian omelette packed with onion, tomato, green chili and cilantro.',
    story: 'From roadside egg carts to college canteens, the masala omelette is India’s favourite fast breakfast, usually tucked into buttered bread.',
    equip: ['Non-stick pan', 'Fork'],
    ing: [[3, '', 'eggs'], [0.5, '', 'onion', 'finely chopped'], [1, '', 'green chili', 'finely chopped'], [0.5, '', 'tomato', 'deseeded, chopped'], [1, 'tbsp', 'cilantro', 'chopped'], [0.25, 'tsp', 'salt'], [1, 'tbsp', 'oil']],
    steps: [
      ['Whisk', '[[whisk|Whisk]] the eggs with the salt until frothy, then stir in the vegetables and cilantro.'],
      ['Cook', 'Heat the oil in a pan over medium heat. Pour in the eggs, swirl to cover the pan and cook 2 minutes until the edges set.', 2],
      ['Fold', 'Flip or [[fold]] in half and cook 1 more minute.', 1],
    ],
    tips: ['Deseed the tomato so the omelette isn’t watery.'], mistakes: ['High heat: brown and rubbery outside, raw inside.'],
    vars: ['Add a pinch of turmeric and red chili powder.', 'Cheese masala omelette.'], serve: 'Buttered bread or pav and masala chai.' });

  X(Object.assign({}, IN, { area: 'Pan-India', styles: ['home-style'] }), { id: 'besan-chilla', name: 'Besan Chilla', local: 'बेसन चीला', emoji: '🥞', course: 'breakfast', level: 1, prep: 15, cook: 12, serves: 2,
    taste: { savory: 4, spicy: 2, herby: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['saute'], tags: ['quick', 'healthy', 'budget', 'brunch'],
    desc: 'Thin, savoury gram-flour pancakes with onion, tomato, chili and cilantro. India’s “veggie omelette”.',
    story: 'Every North Indian home has a chilla recipe. Gram flour is cheap, filling and full of protein, and the batter is ready in minutes.',
    equip: ['Bowl', 'Whisk', 'Tawa or non-stick pan', 'Ladle'],
    ing: [[120, 'g', 'besan (gram flour)'], [1, '', 'onion', 'finely chopped'], [1, '', 'tomato', 'finely chopped'], [2, '', 'green chilies', 'finely chopped'], [2, 'tbsp', 'cilantro', 'chopped'], [0.5, 'tsp', 'salt'], [160, 'ml', 'water'], [2, 'tbsp', 'oil']],
    steps: [
      ['Batter', '[[whisk|Whisk]] the besan, salt and water into a smooth, lump-free batter like thin pancake batter. [[rest|Rest]] 10 minutes.', 10],
      ['Add vegetables', 'Stir in the onion, tomato, chilies and cilantro.'],
      ['Cook', 'Grease a hot tawa, pour a ladle of batter and spread it thin. Drizzle oil around the edge and cook 2 minutes until the edges lift, flip and cook 1 minute.', 3, 'If the first one sticks, the pan isn’t hot enough.'],
    ],
    tips: ['A pinch of ajwain helps digestion.'], mistakes: ['Thick batter: heavy, undercooked chillas.'],
    vars: ['Paneer-stuffed chilla.', 'Add grated carrot or spinach.'], serve: 'Green chutney or ketchup.' });

  X(Object.assign({}, IN, { area: 'Punjab', styles: ['home-style'] }), { id: 'aloo-methi', name: 'Aloo Methi', local: 'आलू मेथी', emoji: '🥔', course: 'side', level: 1, prep: 10, cook: 18, serves: 3,
    taste: { savory: 4, bitter: 2, aromatic: 3, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['weeknight', 'budget', 'healthy', 'winter'],
    desc: 'Potatoes cooked with fresh fenugreek leaves and garlic: earthy, slightly bitter and very Punjabi.',
    story: 'In Punjabi winters, bunches of fresh methi arrive in every market and end up with potatoes in this quick dry sabzi.',
    equip: ['Kadai with lid'],
    ing: [[400, 'g', 'potatoes', 'peeled, 1.5 cm cubes'], [1, 'bunch', 'fresh methi (fenugreek) leaves', 'leaves only, chopped'], [4, 'clove', 'garlic', 'chopped'], [1, 'tsp', 'cumin seeds'], [1, 'tsp', 'kashmiri chili powder'], [3, 'tbsp', 'oil'], [0.75, 'tsp', 'salt']],
    steps: [
      ['De-bitter the methi', 'Rub the chopped methi with a pinch of salt, wait 5 minutes and squeeze out the juice.', 5, 'This removes a lot of the bitterness.'],
      ['Tadka', 'Heat the oil and crackle the cumin ([[tadka]]); add the garlic and cook until just golden.', 1],
      ['Potatoes', 'Add the potatoes, salt and chili powder. Cover and cook on low for 10 minutes, stirring now and then, until tender.', 10],
      ['Methi', 'Add the methi and cook uncovered for 5 minutes until [[wilt|wilted]] and the potatoes are crisp-edged.', 5],
    ],
    tips: ['Use only the leaves; the stems are tough and bitter.'], mistakes: ['Adding methi too early: it turns dark and bitter.'],
    vars: ['Kasuri methi version when fresh is not in season.'], serve: 'Hot phulkas and dal.' });

  X(Object.assign({}, IN, { area: 'Tamil Nadu', styles: ['south-indian', 'restaurant'] }), { id: 'paneer-pepper-fry', name: 'Paneer Pepper Fry', local: 'பனீர் மிளகு வறுவல்', emoji: '🧀', course: 'starter', level: 1, prep: 10, cook: 12, serves: 3,
    taste: { spicy: 3, savory: 4, aromatic: 4 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['saute'], tags: ['quick', 'party', 'weeknight'],
    desc: 'Golden paneer tossed with onions, curry leaves and a fiery hit of freshly crushed black pepper.',
    story: 'Chettinad cooks use black pepper the way others use chili. This vegetarian take on the classic pepper fry is a favourite bar snack in Chennai.',
    equip: ['Kadai', 'Mortar and pestle'],
    ing: [[250, 'g', 'paneer', '2 cm cubes'], [1, '', 'onion', 'thinly sliced'], [15, 'leaf', 'curry leaves'], [1, 'tbsp', 'ghee'], [1, 'tsp', 'ginger-garlic paste'], [1.5, 'tsp', 'black pepper', 'freshly crushed'], [1, 'tbsp', 'oil'], [0.5, 'tsp', 'salt']],
    steps: [
      ['Sear paneer', '[[sear|Sear]] the paneer in the ghee until golden on two sides; lift out.', 4],
      ['Onions', '[[saute|Sauté]] the onion and curry leaves in the oil until golden, 5 minutes.', 5],
      ['Masala', 'Add the ginger-garlic paste and cook 1 minute, then the crushed pepper and salt.', 1],
      ['Toss', 'Return the paneer and toss 2 minutes until coated and hot.', 2],
    ],
    tips: ['Crush whole peppercorns just before cooking; ground pepper from a jar is flat.'], mistakes: ['Overcooking the paneer: it turns chewy.'],
    vars: ['Mushroom pepper fry.', 'Add a squeeze of lemon.'], serve: 'As a starter, or with rasam rice.' });

  X(Object.assign({}, IN, { area: 'Mumbai', styles: ['chaat'] }), { id: 'masala-corn', name: 'Butter Masala Corn', local: 'मसाला कॉर्न', emoji: '🌽', course: 'snack', level: 1, prep: 2, cook: 6, serves: 2,
    taste: { sour: 3, spicy: 2, sweet: 3, rich: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['quick', 'street-food', 'kids', 'rainy-day'],
    desc: 'Hot sweet corn tossed with butter, chaat masala, chili and lemon, served in a cup.',
    story: 'Corn-cup stalls outside Mumbai cinemas and malls sell this by the thousand, especially in the monsoon.',
    equip: ['Saucepan', 'Bowl'],
    ing: [[300, 'g', 'sweet corn kernels'], [1, 'tbsp', 'butter'], [1, 'tsp', 'chaat masala'], [0.5, 'tsp', 'kashmiri chili powder'], [1, 'tbsp', 'lemon juice'], [0.25, 'tsp', 'salt']],
    steps: [
      ['Boil', '[[boil|Boil]] or steam the corn for 5 minutes until tender, then drain well.', 5],
      ['Toss', 'Toss the hot corn with the butter until melted, then the chaat masala, chili, salt and lemon.'],
    ],
    tips: ['Toss while the corn is steaming hot so the butter coats every kernel.'], mistakes: ['Watery corn: drain it well.'],
    vars: ['Cheese corn: add grated cheese.', 'Add chopped onion and cilantro.'], serve: 'In paper cups with a spoon.' });

  X(Object.assign({}, IN, { area: 'Maharashtra', styles: ['sweets'] }), { id: 'peanut-chikki', name: 'Peanut Chikki', local: 'शेंगदाणा चिक्की', emoji: '🥜', course: 'dessert', level: 2, prep: 5, cook: 12, rest: 15, serves: 8,
    taste: { sweet: 4, savory: 2, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['make-ahead', 'winter', 'kids', 'festive'],
    desc: 'Crunchy roasted peanuts set in glassy jaggery brittle, India’s favourite winter sweet.',
    story: 'Lonavala, a hill town near Mumbai, is famous for chikki. Peanuts and jaggery give quick energy in cold weather, and it is traditional at Makar Sankranti.',
    equip: ['Heavy pan', 'Greased tray or board', 'Rolling pin', 'Bowl of cold water'],
    ing: [[200, 'g', 'roasted peanuts', 'skinned, halved'], [150, 'g', 'jaggery', 'grated'], [1, 'tsp', 'ghee'], [2, 'tbsp', 'water']],
    steps: [
      ['Warm the peanuts', '[[toast|Toast]] the peanuts in a dry pan for 2 minutes and keep warm.', 2],
      ['Make the syrup', 'Melt the jaggery with the water and ghee over medium-low heat, stirring, until it foams and darkens slightly, 6–8 minutes. Drop a little into cold water: it should snap like glass (hard-ball stage).', 8, 'If it bends instead of snapping, keep cooking.'],
      ['Mix and roll', 'Take off the heat, stir in the peanuts quickly, tip onto a greased board and roll thin with a greased rolling pin.'],
      ['Cut', 'Score into squares while warm, then break when cool.', null],
    ],
    tips: ['Work fast once the peanuts go in: it sets in a minute.'], mistakes: ['Undercooked syrup: chewy, sticky chikki.'],
    vars: ['Sesame (til) chikki.', 'Mixed nut chikki.'], serve: 'With tea.', store: 'Airtight jar for 3 weeks.' });

  X(Object.assign({}, IN, { area: 'Pan-India', styles: ['sweets'] }), { id: 'rava-ladoo', name: 'Rava Ladoo', local: 'रवा लड्डू', emoji: '🟡', course: 'dessert', level: 1, prep: 5, cook: 12, serves: 12,
    taste: { sweet: 4, rich: 3, aromatic: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['festive', 'make-ahead', 'kids'],
    desc: 'Melt-in-the-mouth balls of ghee-roasted semolina, sugar and cardamom.',
    story: 'Rava ladoo is the quick festival sweet: no syrup and no special skill, ready in half an hour for Diwali, Ganesh Chaturthi or unexpected guests.',
    equip: ['Heavy pan', 'Plate'],
    ing: [[200, 'g', 'fine semolina (rava)'], [150, 'g', 'powdered sugar'], [80, 'g', 'ghee'], [0.5, 'tsp', 'cardamom powder'], [60, 'ml', 'warm milk', 'to bind'], [2, 'tbsp', 'cashews', 'broken, optional']],
    steps: [
      ['Roast', 'Fry the cashews in a little ghee until golden; set aside. Add the rest of the ghee and the semolina and [[toast]] on low heat, stirring, for 8–10 minutes until fragrant but still pale.', 10, 'Low heat: browned rava tastes burnt.'],
      ['Sweeten', 'Take off the heat, let it cool for 5 minutes, then mix in the sugar, cardamom and cashews.'],
      ['Shape', 'Sprinkle the warm milk a spoon at a time until the mixture holds when pressed. Roll into walnut-size balls while warm.'],
    ],
    tips: ['Add milk slowly: too much makes soft, short-lived ladoos.'], mistakes: ['Shaping cold mixture: it crumbles.'],
    vars: ['Add desiccated coconut.', 'Use ghee instead of milk for ladoos that keep longer.'], serve: 'As a festive sweet.', store: '1 week airtight (2 weeks if bound with ghee).' });

  X(Object.assign({}, IN, { area: 'Maharashtra' }), { id: 'mango-ice-cream', name: 'No-Churn Mango Ice Cream', local: 'आम आइसक्रीम', emoji: '🥭', course: 'dessert', level: 1, prep: 10, cook: 0, rest: 360, serves: 8,
    taste: { sweet: 5, rich: 4, sour: 1 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'make-ahead', 'kids', 'party'],
    desc: 'Silky mango ice cream with just three ingredients and no machine.',
    story: 'Every Indian summer brings Alphonso and Kesar mangoes. Whipped cream and condensed milk make the easiest home ice cream there is.',
    equip: ['Mixing bowl', 'Whisk or electric beater', 'Freezer box'],
    ing: [[400, 'g', 'ripe mango pulp', 'Alphonso or Kesar'], [200, 'g', 'sweetened condensed milk'], [300, 'ml', 'heavy cream', 'well chilled'], [0.25, 'tsp', 'cardamom powder', 'optional']],
    steps: [
      ['Whip', '[[whisk|Whisk]] the cold cream to soft peaks.'],
      ['Fold', 'Mix the mango pulp, condensed milk and cardamom, then [[fold]] into the cream in two batches.'],
      ['Freeze', 'Spread in a box, cover and freeze for 6 hours or overnight.', 360],
    ],
    tips: ['Chill the bowl too: cold cream whips faster.'], mistakes: ['Over-whipping to stiff peaks: grainy ice cream.'],
    vars: ['Swirl in chopped pistachios.', 'Strawberry or chikoo pulp.'], serve: 'Soften 5 minutes before scooping.', store: 'Frozen up to 1 month.' });

  X({ country: 'France', flag: '🇫🇷', region: 'Europe', styles: ['continental'] }, { id: 'chocolate-mousse', name: 'Chocolate Mousse', local: 'Mousse au chocolat', emoji: '🍫', course: 'dessert', level: 2, prep: 20, cook: 5, rest: 240, serves: 4,
    taste: { sweet: 4, rich: 5, bitter: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['date-night', 'impress', 'make-ahead'],
    desc: 'The classic French bistro mousse: deep dark chocolate made light with whipped egg whites.',
    story: 'Mousse au chocolat has been a fixture of French home cooking since the 1900s. The airy texture comes only from beaten eggs, no cream.',
    equip: ['Heatproof bowl', 'Saucepan', 'Electric whisk', '4 glasses'],
    ing: [[150, 'g', 'dark chocolate (70%)', 'chopped'], [4, '', 'eggs', 'very fresh, separated'], [30, 'g', 'sugar'], [1, 'pinch', 'salt']],
    steps: [
      ['Melt', 'Melt the chocolate in a bowl over barely simmering water. Cool for 5 minutes, then stir in the yolks one at a time.', 5],
      ['Whip the whites', '[[whisk|Whisk]] the whites with the salt to soft peaks, then add the sugar and whisk to firm, glossy peaks.'],
      ['Fold', 'Stir a third of the whites into the chocolate to loosen it, then gently [[fold]] in the rest until no streaks remain.', null, 'Fold, don’t stir: every lost bubble makes it denser.'],
      ['Set', 'Spoon into glasses and chill at least 4 hours.', 240],
    ],
    tips: ['Contains raw eggs: use the freshest eggs (pasteurised if serving to pregnant women or small children).'], mistakes: ['Hot chocolate into the whites: they collapse.'],
    vars: ['A pinch of chili or orange zest.', 'Top with sea salt flakes.'], serve: 'A spoon of whipped cream.', store: 'Fridge 2 days.' });

  X(IT, { id: 'affogato', name: 'Affogato', local: 'Affogato al caffè', emoji: '☕', course: 'dessert', level: 1, prep: 3, cook: 2, serves: 2,
    taste: { sweet: 4, bitter: 3, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['quick', 'date-night', 'summer'],
    desc: 'A scoop of vanilla ice cream “drowned” in hot espresso. Dessert and coffee in one.',
    story: '“Affogato” means drowned. Italians serve it after lunch when it is too hot for cake but nobody wants to skip coffee.',
    equip: ['Espresso maker or strong coffee', 'Small glasses'],
    ing: [[2, 'scoop', 'vanilla ice cream'], [60, 'ml', 'strong espresso', 'freshly made, hot'], [1, 'tbsp', 'amaretto', 'optional']],
    steps: [
      ['Chill', 'Chill the glasses in the freezer for 10 minutes and add a scoop of ice cream to each.'],
      ['Drown', 'Pour the hot espresso (and amaretto, if using) over the ice cream at the table and eat at once.'],
    ],
    tips: ['Make the coffee as strong as you can.'], mistakes: ['Pouring early: you get coffee soup.'],
    vars: ['Pistachio gelato.', 'Strong instant coffee works in a pinch.'], serve: 'With a crisp biscuit.' });

  X(US, { id: 'banana-oat-pancakes', name: 'Banana Oat Pancakes', local: 'Banana oat pancakes', emoji: '🥞', course: 'breakfast', level: 1, prep: 5, cook: 12, serves: 2,
    taste: { sweet: 3, rich: 2 }, diet: ['vegetarian', 'dairy-free'], methods: ['saute'], tags: ['quick', 'healthy', 'kids', 'brunch'],
    desc: 'Blender pancakes made from ripe bananas, eggs and oats. No flour, no added sugar.',
    story: 'The two-ingredient banana pancake took over the internet in the 2010s. Oats make it fluffier and easier to flip.',
    equip: ['Blender', 'Non-stick pan'],
    ing: [[2, '', 'ripe bananas'], [2, '', 'eggs'], [80, 'g', 'rolled oats'], [0.5, 'tsp', 'cinnamon'], [0.5, 'tsp', 'baking powder'], [1, 'tbsp', 'neutral oil']],
    steps: [
      ['Blend', 'Blend everything except the oil into a thick batter. [[rest|Rest]] 5 minutes so the oats soak.', 5],
      ['Cook', 'Lightly oil a non-stick pan over medium-low heat. Cook small pancakes for 2 minutes until bubbles appear, flip and cook 1 minute.', 8, 'Keep them small: banana batter is soft.'],
    ],
    tips: ['The browner the banana, the sweeter the pancakes.'], mistakes: ['High heat: burnt outside, raw inside.'],
    vars: ['Add blueberries or chocolate chips.', 'Use certified gluten-free oats if needed.'], serve: 'Berries, yogurt and a drizzle of honey.' });

  X({ country: 'Norway', flag: '🇳🇴', region: 'Europe', styles: ['continental'] }, { id: 'lemon-garlic-salmon', name: 'Lemon Garlic Butter Salmon', local: 'Laks med sitron og hvitløk', emoji: '🐟', course: 'main', level: 1, prep: 5, cook: 10, serves: 4,
    taste: { rich: 4, sour: 3, herby: 3, savory: 4 }, diet: ['pescatarian', 'gluten-free', 'high-protein'], methods: ['saute'], tags: ['quick', 'weeknight', 'healthy', 'date-night'],
    desc: 'Crisp-skinned salmon basted in foaming garlic butter with lemon and dill.',
    story: 'Norway farms more salmon than anywhere else, and Norwegians keep it simple: a hot pan, butter, lemon and dill.',
    equip: ['Large frying pan', 'Spoon'],
    ing: [[4, 'fillet', 'salmon', 'skin on'], [40, 'g', 'butter'], [3, 'clove', 'garlic', 'minced'], [1, '', 'lemon', 'zest and juice'], [2, 'tbsp', 'dill', 'chopped'], [1, 'tbsp', 'olive oil'], [0.5, 'tsp', 'salt'], [0.25, 'tsp', 'black pepper']],
    steps: [
      ['Season', 'Pat the salmon very dry and [[season]] with salt and pepper.'],
      ['Sear', '[[sear|Sear]] skin-side down in the hot oil for 4 minutes, pressing gently for the first 30 seconds, until the skin is crisp.', 4],
      ['Baste', 'Flip, add the butter, garlic and lemon zest and [[baste]] with the foaming butter for 2 minutes.', 2],
      ['Finish', 'Squeeze over the lemon juice and scatter dill.'],
    ],
    tips: ['Dry skin is crisp skin.'], mistakes: ['Moving the fish too soon: the skin tears.'],
    vars: ['Add capers to the butter.'], serve: 'Boiled potatoes and green beans.' });

  X(Object.assign({}, US, { styles: ['restaurant'] }), { id: 'honey-garlic-chicken', name: 'Honey Garlic Chicken', local: 'Honey garlic chicken', emoji: '🍯', course: 'main', level: 1, prep: 5, cook: 18, serves: 4,
    taste: { sweet: 4, savory: 4, umami: 3 }, diet: ['dairy-free', 'high-protein'], methods: ['saute'], tags: ['weeknight', 'kids', 'quick'],
    desc: 'Golden chicken thighs in a sticky glaze of honey, soy sauce and garlic.',
    story: 'A Chinese-American takeaway favourite that home cooks love because the sauce has only three ingredients.',
    equip: ['Large frying pan'],
    ing: [[600, 'g', 'boneless chicken thighs'], [4, 'tbsp', 'honey'], [3, 'tbsp', 'soy sauce'], [4, 'clove', 'garlic', 'minced'], [1, 'tbsp', 'neutral oil'], [0.25, 'tsp', 'salt'], [0.25, 'tsp', 'black pepper'], [2, '', 'scallions', 'sliced, to serve']],
    steps: [
      ['Sear', 'Season the chicken and [[sear]] in the oil for 5–6 minutes per side until golden and cooked through.', 12],
      ['Glaze', 'Lower the heat, add the garlic for 30 seconds, then the honey and soy sauce. [[reduce|Reduce]], turning the chicken, until sticky, 2–3 minutes.', 3, 'Honey burns fast: keep the heat medium-low.'],
      ['Serve', 'Slice and top with scallions.'],
    ],
    tips: ['Thighs stay juicy; breasts dry out more easily.'], mistakes: ['Adding honey to a very hot pan: it burns.'],
    vars: ['Add chili flakes.', 'Make it with tofu for a vegetarian version.'], serve: 'Rice and steamed greens.' });

  X({ country: 'Spain', flag: '🇪🇸', region: 'Europe' }, { id: 'gambas-al-ajillo', name: 'Gambas al Ajillo', local: 'Gambas al ajillo', emoji: '🦐', course: 'starter', level: 1, prep: 10, cook: 6, serves: 4,
    taste: { aromatic: 5, savory: 4, spicy: 2, rich: 3 }, diet: ['pescatarian', 'gluten-free', 'dairy-free', 'high-protein'], methods: ['saute'], tags: ['quick', 'party', 'date-night'],
    desc: 'Prawns sizzled in olive oil infused with lots of garlic and chili. A Madrid tapas-bar classic.',
    story: 'In Madrid tapas bars the prawns arrive still bubbling in little clay dishes, and the garlicky oil is mopped up with bread.',
    equip: ['Wide pan or clay cazuela'],
    ing: [[400, 'g', 'raw prawns', 'peeled, deveined'], [120, 'ml', 'extra-virgin olive oil'], [6, 'clove', 'garlic', 'thinly sliced'], [2, '', 'dried red chilies', 'broken'], [2, 'tbsp', 'parsley', 'chopped'], [0.5, 'tsp', 'salt'], [1, 'tbsp', 'dry sherry', 'optional']],
    steps: [
      ['Infuse', 'Warm the oil with the garlic and chilies over low heat for 3–4 minutes until the garlic is just turning golden.', 4, 'Brown garlic is bitter: watch it.'],
      ['Cook the prawns', 'Turn up the heat, add the prawns and salt and cook 1 minute per side until pink. Add the sherry and let it bubble.', 2],
      ['Serve', 'Scatter with parsley and serve sizzling.'],
    ],
    tips: ['Pat the prawns dry so the oil doesn’t spit.'], mistakes: ['Overcooking: prawns go from juicy to rubbery in a minute.'],
    vars: ['Mushrooms al ajillo (champiñones) for a vegetarian version.'], serve: 'Crusty bread for the oil.' });

  /* ======================= EASY WEEKNIGHT DINNERS ======================= */

  X(Object.assign({}, IN, { area: 'Pan-India', styles: ['home-style'] }), { id: 'chickpea-spinach-curry', name: '20-Minute Chickpea & Spinach Curry', local: 'छोले पालक', emoji: '🥘', course: 'main', level: 1, prep: 5, cook: 20, serves: 4,
    taste: { savory: 4, spicy: 2, aromatic: 4, rich: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['weeknight', 'quick', 'budget', 'one-pot', 'meal-prep', 'healthy'],
    desc: 'Canned chickpeas and spinach in a quick tomato-coconut masala. Dinner from the cupboard.',
    story: 'A modern Indian home-cook shortcut: a proper bhuna masala, canned chickpeas instead of soaking overnight, and greens stirred in at the end.',
    equip: ['Deep pan or kadai'],
    ing: [[1, 'tbsp', 'oil'], [1, 'tsp', 'cumin seeds'], [1, '', 'onion', 'finely chopped'], [1, 'tbsp', 'ginger-garlic paste'], [2, '', 'tomatoes', 'puréed'], [1, 'tsp', 'ground coriander'], [1, 'tsp', 'kashmiri chili powder'], [0.5, 'tsp', 'ground turmeric'], [2, 'can', 'chickpeas (400 g each)', 'drained, rinsed'], [200, 'ml', 'coconut milk'], [100, 'ml', 'water'], [100, 'g', 'spinach'], [1, 'tsp', 'garam masala'], [0.75, 'tsp', 'salt'], [1, 'tbsp', 'lemon juice']],
    steps: [
      ['Tadka and onion', 'Crackle the cumin in hot oil ([[tadka]]), then [[saute]] the onion until golden, 6 minutes.', 6],
      ['Masala', 'Add the ginger-garlic paste for 1 minute, then the tomatoes, ground spices and salt. [[bhuna|Bhuna]] for 6 minutes until the oil separates.', 7],
      ['Simmer', 'Add the chickpeas, coconut milk and water. [[simmer|Simmer]] 8 minutes and mash a few chickpeas to thicken the sauce.', 8],
      ['Greens', 'Stir in the spinach until it [[wilt|wilts]], then the garam masala and lemon juice.', 1],
    ],
    tips: ['Mashing some chickpeas makes the gravy creamy without cream.'], mistakes: ['Rushing the masala: raw-tasting curry.'],
    vars: ['Swap spinach for kale or methi.', 'Add cubes of paneer (not vegan).'], serve: 'Rice, roti or naan.', store: 'Fridge 4 days; freezes well.' });

  X(Object.assign({}, IN, { area: 'Punjab', styles: ['home-style', 'dhaba'] }), { id: 'aloo-matar', name: 'Aloo Matar', local: 'आलू मटर', emoji: '🥔', course: 'main', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { savory: 4, spicy: 2, aromatic: 4, sour: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['weeknight', 'comfort', 'budget', 'kids', 'one-pot'],
    desc: 'Potatoes and green peas in a homestyle tomato-onion gravy. The everyday curry of North India.',
    story: 'Aloo matar is the curry that turns up in every Punjabi tiffin box, at weddings and on Sunday tables, comfort food at its most basic.',
    equip: ['Pressure cooker or heavy pot'],
    ing: [[3, 'tbsp', 'oil'], [1, 'tsp', 'cumin seeds'], [1, '', 'onion', 'finely chopped'], [1, 'tbsp', 'ginger-garlic paste'], [3, '', 'tomatoes', 'puréed'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'kashmiri chili powder'], [1.5, 'tsp', 'ground coriander'], [3, '', 'potatoes', 'peeled, cubed'], [200, 'g', 'green peas'], [400, 'ml', 'water'], [1, 'tsp', 'garam masala'], [1, 'tsp', 'kasuri methi'], [1, 'tsp', 'salt'], [2, 'tbsp', 'cilantro', 'chopped']],
    steps: [
      ['Onion', 'Crackle the cumin ([[tadka]]) and fry the onion until golden brown, 8 minutes.', 8],
      ['Masala', 'Add the ginger-garlic paste, then the tomatoes, turmeric, chili, coriander and salt. [[bhuna|Bhuna]] until the oil separates, 8 minutes.', 8],
      ['Cook', 'Add the potatoes, peas and water. Pressure-cook for 2 whistles, or [[simmer]] covered for 20 minutes until the potatoes are soft.', 10],
      ['Finish', 'Crush the kasuri methi between your palms into the curry, add the garam masala and cilantro.'],
    ],
    tips: ['Mash one or two potato pieces to thicken the gravy.'], mistakes: ['Pale onions: weak flavour.'],
    vars: ['Add cubes of paneer for matar paneer.', 'Dry version with less water.'], serve: 'Puri, roti or jeera rice.' });

  X(Object.assign({}, IN, { area: 'Pan-India', styles: ['home-style'] }), { id: 'dal-palak', name: 'Dal Palak', local: 'दाल पालक', emoji: '🥬', course: 'main', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { savory: 4, aromatic: 4, herby: 2 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['weeknight', 'healthy', 'comfort', 'budget', 'one-pot'],
    desc: 'Comforting yellow lentils simmered with spinach and finished with a garlicky ghee tadka.',
    story: 'Dal palak is how Indian mothers sneak greens into dinner: a pot of dal, a bunch of spinach and a sizzling tadka.',
    equip: ['Pressure cooker or pot', 'Small tadka pan'],
    ing: [[200, 'g', 'toor dal', 'washed'], [750, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], [150, 'g', 'spinach', 'chopped'], [1, '', 'tomato', 'chopped'], [1, 'tsp', 'salt'], [2, 'tbsp', 'ghee'], [1, 'tsp', 'cumin seeds'], [4, 'clove', 'garlic', 'sliced'], [2, '', 'dried red chilies'], [1, 'pinch', 'asafoetida (hing)'], [1, 'tsp', 'lemon juice']],
    steps: [
      ['Cook the dal', 'Pressure-cook the dal with the water and turmeric for 4 whistles (or [[simmer]] for 40 minutes) until completely soft. [[whisk|Whisk]] smooth.', 15],
      ['Spinach', 'Add the tomato, spinach and salt and simmer for 5 minutes.', 5],
      ['Tadka', 'Heat the ghee, crackle the cumin, then add the garlic, chilies and hing and fry until the garlic is golden ([[tadka]]). Pour over the dal.', 2, 'Pour the tadka on at the table for a dramatic sizzle.'],
      ['Finish', 'Add the lemon juice.'],
    ],
    tips: ['Use oil instead of ghee to make it vegan.'], mistakes: ['Overcooking spinach: it turns grey and loses its taste.'],
    vars: ['Moong dal palak cooks even faster.'], serve: 'Steamed rice or rotis.', store: 'Fridge 3 days.' });

  X(Object.assign({}, IN, { area: 'Mumbai', styles: ['chaat'] }), { id: 'tawa-pulao', name: 'Mumbai Tawa Pulao', local: 'तवा पुलाव', emoji: '🍛', course: 'main', level: 1, prep: 10, cook: 15, serves: 3,
    taste: { spicy: 3, savory: 4, aromatic: 4, sour: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['stir-fry'], tags: ['quick', 'weeknight', 'street-food', 'kids'],
    desc: 'Leftover rice tossed on a hot griddle with butter, vegetables and pav bhaji masala.',
    story: 'Mumbai’s late-night pav bhaji stalls invented tawa pulao to feed hungry workers using the same flat griddle, butter and masala.',
    equip: ['Large tawa or wok'],
    ing: [[400, 'g', 'cooked basmati rice', 'cooled'], [3, 'tbsp', 'butter'], [1, 'tbsp', 'oil'], [1, 'tsp', 'cumin seeds'], [1, '', 'onion', 'chopped'], [1, 'tbsp', 'ginger-garlic paste'], [1, '', 'green bell pepper', 'diced'], [2, '', 'tomatoes', 'chopped'], [80, 'g', 'green peas'], [2, 'tsp', 'pav bhaji masala'], [1, 'tsp', 'kashmiri chili powder'], [0.75, 'tsp', 'salt'], [1, 'tbsp', 'lemon juice'], [2, 'tbsp', 'cilantro']],
    steps: [
      ['Base', 'Heat the butter and oil, crackle the cumin and [[saute]] the onion 3 minutes. Add the ginger-garlic paste and capsicum for 2 minutes.', 5],
      ['Masala', 'Add the tomatoes, peas, pav bhaji masala, chili and salt. [[bhuna|Bhuna]], mashing the tomatoes, until saucy, 5 minutes.', 5],
      ['Toss', 'Add the rice and [[stir-fry]] over high heat for 3 minutes until every grain is coated.', 3],
      ['Finish', 'Lemon juice, cilantro and a final knob of butter.'],
    ],
    tips: ['Cold, day-old rice keeps the grains separate.'], mistakes: ['Stirring too hard: broken rice.'],
    vars: ['Add cubes of paneer or boiled potato.'], serve: 'Onion-cucumber raita and a lemon wedge.' });

  X({ country: 'Mexico', flag: '🇲🇽', region: 'Latin America' }, { id: 'black-bean-tacos', name: 'Crispy Black Bean Tacos', local: 'Tacos de frijoles negros', emoji: '🌮', course: 'main', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { savory: 4, smoky: 3, sour: 3, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['weeknight', 'quick', 'kids', 'budget'],
    desc: 'Smoky mashed black beans in corn tortillas, pan-crisped and topped with avocado and crunchy cabbage.',
    story: 'Frijoles are the everyday protein of Mexico. Pan-crisping a filled taco gives a crunchy shell without deep-frying.',
    equip: ['Large frying pan', 'Potato masher or fork'],
    ing: [[2, 'can', 'black beans', 'drained'], [2, 'clove', 'garlic', 'minced'], [1, 'tsp', 'ground cumin'], [1, 'tsp', 'smoked paprika'], [1, '', 'lime', 'juice'], [8, '', 'corn tortillas'], [1, '', 'avocado', 'sliced'], [100, 'g', 'red cabbage', 'finely shredded'], [1, 'handful', 'cilantro'], [2, 'tbsp', 'olive oil'], [0.5, 'tsp', 'salt'], [4, 'tbsp', 'salsa', 'to serve']],
    steps: [
      ['Beans', 'Fry the garlic, cumin and paprika in 1 tbsp oil for 30 seconds ([[bloom]]). Add the beans, salt and a splash of water and [[smash]] about half of them. Cook 4 minutes until thick, then add the lime juice.', 5],
      ['Fill', 'Warm the tortillas in a dry pan, spread with beans and fold in half.'],
      ['Crisp', '[[shallow-fry|Pan-crisp]] the tacos in the remaining oil for 2 minutes per side.', 6],
      ['Top', 'Open them up and add avocado, cabbage, cilantro and salsa.'],
    ],
    tips: ['Warm tortillas first or they crack.'], mistakes: ['Too much filling: the tacos burst.'],
    vars: ['Add crumbled feta (not vegan).', 'Sweet potato and bean tacos.'], serve: 'Lime wedges and pickled onions.' });

  X(US, { id: 'stuffed-peppers', name: 'Mexican-Style Stuffed Peppers', local: 'Stuffed bell peppers', emoji: '🫑', course: 'main', level: 1, prep: 15, cook: 30, serves: 4,
    taste: { savory: 4, smoky: 2, sweet: 2, rich: 3 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['roast'], tags: ['weeknight', 'meal-prep', 'kids', 'healthy'],
    desc: 'Pepper halves roasted and filled with rice, black beans, corn and tomatoes under melted cheddar.',
    story: 'Stuffed peppers are a dinner staple in American homes: a whole meal baked in an edible bowl.',
    equip: ['Baking dish', 'Mixing bowl'],
    ing: [[4, '', 'bell peppers', 'halved, seeded'], [250, 'g', 'cooked rice'], [1, 'can', 'black beans', 'drained'], [150, 'g', 'sweet corn kernels'], [200, 'g', 'canned chopped tomatoes'], [1, 'tsp', 'ground cumin'], [1, 'tsp', 'chili powder'], [120, 'g', 'cheddar', 'grated'], [1, 'tbsp', 'olive oil'], [0.5, 'tsp', 'salt'], [1, 'handful', 'cilantro']],
    steps: [
      ['Pre-roast', 'Brush the pepper halves with oil and [[roast]] cut-side up at {{200C}} for 10 minutes.', 10],
      ['Filling', 'Mix the rice, beans, corn, tomatoes, spices, salt and half the cheese.'],
      ['Bake', 'Fill the peppers, top with the remaining cheese and bake 20 minutes until bubbling.', 20],
      ['Serve', 'Scatter with cilantro.'],
    ],
    tips: ['Pre-roasting softens the peppers so they cook evenly.'], mistakes: ['Raw peppers: crunchy and bland.'],
    vars: ['Paneer or tofu crumble instead of beans.', 'Vegan cheese.'], serve: 'A spoon of sour cream or yogurt.', store: 'Fridge 3 days.' });

  X(US, { id: 'sweet-potato-chili', name: 'Sweet Potato & Black Bean Chili', local: 'Veggie chili', emoji: '🍲', course: 'main', level: 1, prep: 10, cook: 35, serves: 6,
    taste: { savory: 4, smoky: 3, spicy: 3, sweet: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['one-pot', 'meal-prep', 'winter', 'healthy', 'budget', 'party'],
    desc: 'A thick, smoky one-pot chili of sweet potatoes, black beans and tomatoes.',
    story: 'Chili began in Texas as a meat stew. This vegan version is now just as common at American game-day parties.',
    equip: ['Large heavy pot'],
    ing: [[2, 'tbsp', 'olive oil'], [1, '', 'onion', 'chopped'], [1, '', 'red bell pepper', 'chopped'], [3, 'clove', 'garlic', 'minced'], [2, 'tsp', 'chili powder'], [2, 'tsp', 'ground cumin'], [1, 'tsp', 'smoked paprika'], [2, '', 'sweet potato', 'peeled, 2 cm cubes'], [400, 'g', 'canned chopped tomatoes'], [2, 'can', 'black beans', 'drained'], [500, 'ml', 'vegetable stock'], [1, 'tsp', 'salt'], [1, '', 'lime', 'juice'], [1, 'handful', 'cilantro'], [4, 'tbsp', 'sour cream', 'optional, to serve']],
    steps: [
      ['Soften', '[[sweat|Sweat]] the onion and pepper in the oil for 6 minutes.', 6],
      ['Spices', 'Add the garlic and spices and cook 1 minute ([[bloom]]).', 1],
      ['Simmer', 'Add the sweet potato, tomatoes, beans, stock and salt. [[simmer|Simmer]] uncovered for 25 minutes until the sweet potato is tender and the chili thick.', 25],
      ['Finish', 'Stir in the lime juice; top with cilantro.'],
    ],
    tips: ['It tastes even better the next day.'], mistakes: ['Adding beans too early with no stirring: they catch on the bottom.'],
    vars: ['Add a square of dark chocolate for depth.'], serve: 'Rice, tortilla chips or cornbread.', store: 'Fridge 4 days; freezes 3 months.' });

  X(US, { id: 'buddha-bowl', name: 'Roasted Chickpea Buddha Bowl', local: 'Buddha bowl', emoji: '🥗', course: 'main', level: 1, prep: 15, cook: 25, serves: 2,
    taste: { savory: 4, herby: 3, sour: 3, rich: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['roast', 'no-cook'], tags: ['healthy', 'meal-prep', 'weeknight'],
    desc: 'Crunchy roasted chickpeas and sweet potato with greens, avocado and lemon-tahini dressing.',
    story: 'The “Buddha bowl” name comes from a bowl so full it looks like the Buddha’s round belly. It is a balanced plant meal in one bowl.',
    equip: ['Baking tray', 'Jar or bowl for the dressing'],
    ing: [[1, 'can', 'chickpeas (400 g)', 'drained, patted dry'], [1, '', 'sweet potato', '2 cm cubes'], [1, 'tsp', 'smoked paprika'], [2, 'tbsp', 'olive oil'], [200, 'g', 'cooked quinoa or rice'], [100, 'g', 'spinach'], [1, '', 'avocado', 'sliced'], [1, '', 'carrot', 'grated'], [3, 'tbsp', 'tahini'], [1, '', 'lemon', 'juice'], [1, 'clove', 'garlic', 'grated'], [3, 'tbsp', 'water'], [0.75, 'tsp', 'salt']],
    steps: [
      ['Roast', 'Toss the chickpeas and sweet potato with the oil, paprika and half the salt. [[roast|Roast]] at {{220C}} for 25 minutes, shaking once, until crisp.', 25],
      ['Dressing', '[[whisk|Whisk]] the tahini, lemon juice, garlic, water and the remaining salt until smooth and pourable.'],
      ['Assemble', 'Divide the quinoa, spinach, carrot and avocado between bowls, add the roasted chickpeas and sweet potato and drizzle with dressing.'],
    ],
    tips: ['Dry chickpeas well for crunch.'], mistakes: ['Crowded tray: soft chickpeas.'],
    vars: ['Add pickled onions or kimchi.', 'Swap quinoa for brown rice.'], serve: 'As it is.', store: 'Pack components separately for 3 days.' });

  X({ country: 'Japan', flag: '🇯🇵', region: 'East Asia' }, { id: 'teriyaki-tofu-bowl', name: 'Teriyaki Tofu Rice Bowl', local: '照り焼き豆腐丼', emoji: '🍱', course: 'main', level: 1, prep: 20, cook: 15, serves: 2,
    taste: { sweet: 3, umami: 4, savory: 4 }, diet: ['vegan', 'high-protein'], methods: ['saute', 'steam'], tags: ['weeknight', 'healthy', 'quick'],
    desc: 'Crisp tofu in a glossy homemade teriyaki sauce over rice with steamed broccoli.',
    story: '“Teri” means shine and “yaki” means grilled: the glaze is just soy, mirin and sugar, reduced until it gleams.',
    equip: ['Non-stick pan', 'Steamer or pot with lid'],
    ing: [[400, 'g', 'firm tofu', 'pressed, cubed'], [2, 'tbsp', 'cornstarch'], [2, 'tbsp', 'neutral oil'], [4, 'tbsp', 'soy sauce'], [3, 'tbsp', 'mirin'], [1, 'tbsp', 'sugar'], [1, 'tsp', 'ginger', 'grated'], [3, 'tbsp', 'water'], [300, 'g', 'cooked short-grain rice'], [150, 'g', 'broccoli', 'florets'], [1, 'tsp', 'toasted sesame seeds'], [2, '', 'scallions', 'sliced']],
    steps: [
      ['Crisp the tofu', 'Press the tofu 15 minutes, [[dredge]] in cornstarch and [[shallow-fry]] until golden all over.', 8],
      ['Broccoli', '[[steam|Steam]] the broccoli for 4 minutes until bright green.', 4],
      ['Teriyaki', 'Add the soy sauce, mirin, sugar, ginger and water to the tofu pan and [[reduce]] for 2 minutes until glossy. Toss the tofu to coat.', 2],
      ['Bowl', 'Serve over rice with the broccoli, sesame and scallions.'],
    ],
    tips: ['Use tamari for gluten-free.'], mistakes: ['Over-reducing: the glaze turns to toffee.'],
    vars: ['Teriyaki mushrooms or paneer.'], serve: 'Pickled ginger on the side.' });

  X({ country: 'Thailand', flag: '🇹🇭', region: 'Southeast Asia' }, { id: 'peanut-noodles', name: 'Thai Peanut Noodles', local: 'ก๋วยเตี๋ยวซอสถั่ว', emoji: '🥜', course: 'main', level: 1, prep: 15, cook: 5, serves: 3,
    taste: { savory: 4, sweet: 3, sour: 3, spicy: 2, rich: 4 }, diet: ['vegan', 'high-protein'], methods: ['no-cook'], tags: ['quick', 'weeknight', 'summer', 'meal-prep'],
    desc: 'Rice noodles and crunchy vegetables tossed in a creamy peanut, lime and chili sauce.',
    story: 'Inspired by Thai satay sauce, this peanut noodle bowl became a favourite of cooks around the world because it needs almost no cooking.',
    equip: ['Large bowl', 'Kettle'],
    ing: [[250, 'g', 'rice noodles'], [4, 'tbsp', 'smooth peanut butter'], [3, 'tbsp', 'soy sauce'], [1, 'tbsp', 'lime juice'], [1, 'tbsp', 'sugar'], [1, 'tbsp', 'sriracha'], [1, 'clove', 'garlic', 'grated'], [4, 'tbsp', 'hot water'], [1, '', 'carrot', 'julienned'], [1, '', 'red bell pepper', 'thinly sliced'], [100, 'g', 'edamame', 'thawed'], [2, '', 'scallions', 'sliced'], [2, 'tbsp', 'crushed peanuts'], [1, 'handful', 'cilantro']],
    steps: [
      ['Noodles', '[[soak|Soak]] the noodles in just-boiled water for 5–8 minutes until tender, then rinse in cold water and drain.', 6],
      ['Sauce', '[[whisk|Whisk]] the peanut butter, soy sauce, lime, sugar, sriracha, garlic and hot water until smooth.'],
      ['Toss', '[[julienne|Julienne]] the vegetables and toss everything with the sauce. Top with peanuts and cilantro.'],
    ],
    tips: ['Thin the sauce with more water if it gets thick in the fridge.'], mistakes: ['Over-soaking the noodles: they turn mushy.'],
    vars: ['Add crispy tofu.', 'Use soba or wheat noodles.'], serve: 'Warm or cold.', store: 'Fridge 2 days.' });

  X({ country: 'Greece', flag: '🇬🇷', region: 'Europe' }, { id: 'lemon-orzo-peas', name: 'Lemony Orzo with Peas & Feta', local: 'Κριθαράκι με λεμόνι', emoji: '🍋', course: 'main', level: 1, prep: 5, cook: 15, serves: 4,
    taste: { sour: 3, savory: 4, rich: 3, herby: 3 }, diet: ['vegetarian'], methods: ['simmer'], tags: ['one-pot', 'weeknight', 'quick', 'kids'],
    desc: 'Rice-shaped pasta cooked risotto-style in stock, with sweet peas, lemon, feta and fresh herbs.',
    story: 'Kritharaki (orzo) is a Greek pantry staple. Cooked in one pot like risotto, it turns creamy without any cream.',
    equip: ['Wide pot'],
    ing: [[250, 'g', 'orzo pasta'], [1, 'tbsp', 'olive oil'], [20, 'g', 'butter'], [2, 'clove', 'garlic', 'minced'], [700, 'ml', 'vegetable stock', 'hot'], [150, 'g', 'frozen peas'], [1, '', 'lemon', 'zest and juice'], [100, 'g', 'feta', 'crumbled'], [1, 'handful', 'dill or mint'], [0.25, 'tsp', 'black pepper']],
    steps: [
      ['Toast', '[[toast|Toast]] the orzo in the oil and butter for 2 minutes, then add the garlic for 30 seconds.', 2],
      ['Simmer', 'Add the hot stock and [[simmer]], stirring often, for 10 minutes until creamy and almost tender.', 10],
      ['Peas', 'Stir in the peas and cook 2 minutes.', 2],
      ['Finish', '[[zest|Zest]] in the lemon, add the juice, half the feta and the herbs. Top with the rest of the feta and pepper.'],
    ],
    tips: ['Stir often, like risotto, so it doesn’t stick.'], mistakes: ['Adding lemon over high heat: it turns bitter.'],
    vars: ['Add spinach or asparagus.'], serve: 'On its own or with a Greek salad.' });

  X(Object.assign({}, US, { styles: ['continental'] }), { id: 'pasta-primavera', name: 'Pasta Primavera', local: 'Pasta primavera', emoji: '🍝', course: 'main', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { savory: 4, herby: 4, rich: 2, sweet: 2 }, diet: ['vegetarian'], methods: ['saute', 'simmer'], tags: ['weeknight', 'kids', 'quick', 'healthy'],
    desc: 'Penne with spring vegetables, garlic, lemon, butter and parmesan in a light, glossy sauce.',
    story: 'Pasta primavera (“spring pasta”) was created in New York in the 1970s at Le Cirque restaurant and quickly became an American classic.',
    equip: ['Large pot', 'Large frying pan'],
    ing: [[300, 'g', 'penne'], [2, 'tbsp', 'olive oil'], [3, 'clove', 'garlic', 'sliced'], [1, '', 'zucchini', 'half-moons'], [150, 'g', 'broccoli', 'small florets'], [150, 'g', 'cherry tomatoes', 'halved'], [100, 'g', 'frozen peas'], [30, 'g', 'butter'], [50, 'g', 'parmesan', 'grated'], [1, '', 'lemon', 'zest'], [1, 'handful', 'basil'], [1, 'tsp', 'salt', 'for the pasta water'], [0.5, 'tsp', 'salt']],
    steps: [
      ['Pasta and greens', 'Cook the penne [[al-dente]]. Add the broccoli and peas to the pot for the last 2 minutes to [[blanch]] them. Keep a cup of pasta water.', 10],
      ['Vegetables', '[[saute|Sauté]] the garlic and zucchini in the oil for 4 minutes, then the tomatoes for 2 minutes.', 6],
      ['Toss', 'Add the drained pasta and greens, butter, parmesan, lemon zest and a splash of pasta water. Toss until glossy ([[emulsify]]).', 1],
      ['Finish', 'Tear in the basil.'],
    ],
    tips: ['Cut vegetables the same size so they cook at the same time.'], mistakes: ['Overcooked vegetables: the dish should taste fresh.'],
    vars: ['Add asparagus in spring.', 'Use a vegetarian hard cheese.'], serve: 'Garlic bread.' });

  X(IT, { id: 'sheet-pan-gnocchi', name: 'Sheet-Pan Gnocchi & Vegetables', local: 'Gnocchi al forno', emoji: '🥔', course: 'main', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { savory: 4, sweet: 3, herby: 3, rich: 3 }, diet: ['vegetarian'], methods: ['roast'], tags: ['weeknight', 'one-pot', 'kids'],
    desc: 'Store-bought gnocchi roasted on one tray with peppers, tomatoes and zucchini until crisp, then topped with melting mozzarella.',
    story: 'Roasting packaged gnocchi instead of boiling it makes them crisp outside and fluffy inside. A modern weeknight hit with only one tray to wash.',
    equip: ['Large baking tray'],
    ing: [[500, 'g', 'shelf-stable potato gnocchi'], [300, 'g', 'cherry tomatoes'], [1, '', 'red bell pepper', 'chunks'], [1, '', 'red onion', 'wedges'], [1, '', 'zucchini', 'chunks'], [3, 'tbsp', 'olive oil'], [1, 'tsp', 'dried oregano'], [0.75, 'tsp', 'salt'], [125, 'g', 'mozzarella', 'torn'], [1, 'handful', 'basil']],
    steps: [
      ['Toss', 'Toss the gnocchi and vegetables with the oil, oregano and salt on a large tray in one layer.'],
      ['Roast', '[[roast|Roast]] at {{220C}} for 25 minutes, shaking halfway, until the gnocchi are golden.', 25],
      ['Cheese', 'Scatter the mozzarella over for the last 5 minutes. Finish with basil.', 5],
    ],
    tips: ['Don’t boil the gnocchi first.'], mistakes: ['A crowded tray: soft, pale gnocchi.'],
    vars: ['Add chickpeas for protein.', 'Pesto instead of mozzarella.'], serve: 'Green salad.' });

  X(Object.assign({}, US, { area: 'Texas' }), { id: 'spinach-cheese-quesadillas', name: 'Spinach & Cheese Quesadillas', local: 'Quesadillas', emoji: '🧀', course: 'main', level: 1, prep: 10, cook: 12, serves: 4,
    taste: { rich: 4, savory: 4, spicy: 1 }, diet: ['vegetarian'], methods: ['saute'], tags: ['quick', 'kids', 'weeknight', 'party'],
    desc: 'Crisp flour tortillas folded around wilted spinach, black beans and two melting cheeses.',
    story: 'In Tex-Mex kitchens a quesadilla is the default quick dinner: whatever is in the fridge, plus cheese, toasted in a hot pan.',
    equip: ['Large frying pan', 'Spatula'],
    ing: [[4, '', 'large flour tortillas'], [150, 'g', 'spinach'], [1, 'can', 'black beans', 'drained, optional'], [150, 'g', 'cheddar', 'grated'], [100, 'g', 'feta', 'crumbled'], [0.5, 'tsp', 'ground cumin'], [1, 'tbsp', 'oil'], [4, 'tbsp', 'salsa', 'to serve']],
    steps: [
      ['Spinach', '[[wilt|Wilt]] the spinach with the cumin in a dry pan, then squeeze out the water.', 2, 'Squeeze hard: wet spinach makes soggy quesadillas.'],
      ['Fill', 'Cover half of each tortilla with cheddar, spinach, beans and feta, then fold.'],
      ['Toast', 'Cook in a lightly oiled pan over medium heat for 2–3 minutes per side until golden and melted.', 10],
      ['Cut', 'Cut into wedges.'],
    ],
    tips: ['Press gently with the spatula so the cheese glues everything together.'], mistakes: ['Too high heat: burnt outside, cold cheese.'],
    vars: ['Add mushrooms or corn.', 'Use corn tortillas.'], serve: 'Salsa, guacamole and sour cream.' });

  X(Object.assign({}, US, { area: 'Texas' }), { id: 'chicken-fajitas', name: 'Sizzling Chicken Fajitas', local: 'Fajitas de pollo', emoji: '🌯', course: 'main', level: 1, prep: 20, cook: 12, serves: 4,
    taste: { smoky: 4, savory: 4, spicy: 2, sour: 2 }, diet: ['dairy-free', 'high-protein'], methods: ['saute', 'grill'], tags: ['weeknight', 'party', 'kids'],
    desc: 'Spiced chicken strips seared hot with charred peppers and onions, wrapped in warm tortillas.',
    story: 'Fajitas started with Mexican ranch workers in West Texas grilling cheap cuts. Restaurants made them famous by bringing them to the table still sizzling.',
    equip: ['Cast-iron or heavy frying pan'],
    ing: [[600, 'g', 'boneless chicken breast', 'thin strips'], [2, '', 'bell peppers', 'strips'], [1, '', 'onion', 'sliced'], [2, 'tsp', 'chili powder'], [1, 'tsp', 'ground cumin'], [1, 'tsp', 'smoked paprika'], [0.5, 'tsp', 'garlic powder'], [1, '', 'lime', 'juice'], [3, 'tbsp', 'neutral oil'], [0.75, 'tsp', 'salt'], [8, '', 'flour tortillas'], [1, '', 'avocado', 'to serve'], [4, 'tbsp', 'sour cream', 'optional, to serve']],
    steps: [
      ['Marinate', '[[marinate|Marinate]] the chicken with the spices, salt, lime juice and 1 tbsp oil for 15 minutes.', 15],
      ['Sear', '[[sear|Sear]] the chicken in a very hot pan with 1 tbsp oil for 5–6 minutes until cooked through; lift out.', 6],
      ['Char the vegetables', 'Add the remaining oil and [[char]] the peppers and onion for 4 minutes, keeping some crunch. Return the chicken.', 4],
      ['Serve', 'Warm the tortillas and serve with avocado and sour cream.'],
    ],
    tips: ['Get the pan smoking hot for that restaurant char.'], mistakes: ['Crowding the pan: the chicken stews.'],
    vars: ['Paneer or mushroom fajitas for a veg version.'], serve: 'Mexican rice and salsa.' });

  X(IT, { id: 'vegetable-frittata', name: 'Vegetable Frittata', local: 'Frittata di verdure', emoji: '🍳', course: 'main', level: 1, prep: 10, cook: 22, serves: 4,
    taste: { savory: 4, rich: 3, herby: 3 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['saute', 'roast'], tags: ['weeknight', 'brunch', 'meal-prep', 'kids'],
    desc: 'A thick Italian open omelette with potatoes, peppers, spinach and parmesan, finished in the oven.',
    story: 'Italian families make frittata to use up leftover vegetables and pasta. It is just as good cold the next day in a sandwich.',
    equip: ['Oven-safe non-stick pan', 'Bowl', 'Whisk'],
    ing: [[8, '', 'eggs'], [60, 'ml', 'milk'], [60, 'g', 'parmesan', 'grated'], [2, 'tbsp', 'olive oil'], [1, '', 'onion', 'sliced'], [1, '', 'red bell pepper', 'diced'], [2, '', 'potatoes', 'boiled, sliced'], [100, 'g', 'spinach'], [0.75, 'tsp', 'salt'], [0.25, 'tsp', 'black pepper'], [1, 'handful', 'basil']],
    steps: [
      ['Eggs', '[[whisk|Whisk]] the eggs with the milk, half the parmesan, salt and pepper.'],
      ['Vegetables', '[[saute|Sauté]] the onion and pepper in the oil for 6 minutes, add the potatoes for 2 minutes, then [[wilt]] in the spinach.', 9],
      ['Set', 'Pour in the eggs and cook on low, without stirring, for 8 minutes until the edges are set.', 8],
      ['Finish', 'Top with the remaining cheese and bake at {{200C}} for 5 minutes until puffed. [[rest|Rest]] 5 minutes before slicing.', 5],
    ],
    tips: ['Low heat on the stove keeps it tender.'], mistakes: ['Stirring the eggs: you get scrambled eggs.'],
    vars: ['Add feta and olives.', 'Leftover pasta frittata.'], serve: 'Green salad and bread.', store: 'Fridge 2 days; great cold.' });
})();
