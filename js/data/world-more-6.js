/* World batch 6 (veg-first): the Caucasus & Central Asia, Middle East, Europe, the Americas, Oceania, Asia, Africa.
   Original recipes written for Dish Dictionary. */
'use strict';
(function () {
  const C = (country, flag, region, extra) => Object.assign({ country, flag, region }, extra || {});
  const X = (base, d) => DD.add(Object.assign({}, base, d));

  /* ======================= CAUCASUS & CENTRAL ASIA ======================= */
  X(C('Georgia', '🇬🇪', 'Europe'), { id: 'pkhali', name: 'Spinach Pkhali', local: 'ფხალი', emoji: '🟢', course: 'starter', level: 1, prep: 20, cook: 5, serves: 6,
    taste: { herby: 4, savory: 4, rich: 3 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['party', 'healthy', 'make-ahead'],
    desc: 'Georgian balls of chopped spinach pounded with walnuts, garlic, coriander and blue fenugreek, topped with pomegranate.',
    story: 'Pkhali can be made with beets, cabbage or nettles; it is always on the Georgian supra (feast) table.',
    equip: ['Food processor'],
    ing: [[500, 'g', 'spinach'], [120, 'g', 'walnuts'], [3, 'clove', 'garlic'], [1, 'handful', 'cilantro'], [1, 'tsp', 'ground coriander'], [1, 'tsp', 'blue fenugreek or ground fenugreek'], [1, 'tbsp', 'white wine vinegar'], [0.75, 'tsp', 'salt'], [2, 'tbsp', 'pomegranate seeds']],
    steps: [['Wilt', '[[blanch|Blanch]] spinach 1 minute; squeeze completely dry.', 3], ['Paste', 'Grind walnuts, garlic, herbs, spices, vinegar and salt to a paste; mix with chopped spinach.'], ['Shape', 'Shape balls, press a dent on top and add pomegranate seeds.']],
    tips: ['Squeeze the spinach really dry.'], mistakes: ['Wet spinach: balls collapse.'], vars: ['Beetroot pkhali.'], serve: 'With bread as part of a spread.' });

  X(C('Georgia', '🇬🇪', 'Europe'), { id: 'churchkhela', name: 'Churchkhela', local: 'ჩურჩხელა', emoji: '🍇', course: 'dessert', level: 3, prep: 30, cook: 20, rest: 2880, serves: 8,
    taste: { sweet: 4, rich: 3 }, diet: ['vegan'], methods: ['simmer'], tags: ['festive', 'make-ahead'],
    desc: 'Strings of walnuts dipped repeatedly in thickened grape juice and dried into chewy “Georgian snickers”.',
    story: 'Made at the grape harvest (rtveli) and hung to dry for New Year; soldiers carried them as energy food.',
    equip: ['Pot', 'Needle and thread'],
    ing: [[200, 'g', 'walnut halves'], [1, 'l', 'red grape juice', 'unsweetened'], [100, 'g', 'all-purpose flour'], [2, 'tbsp', 'sugar', 'optional']],
    steps: [['String', 'Thread walnuts onto 25 cm strings.'], ['Tatara', 'Whisk flour into a cup of cold juice; heat the rest, whisk in the slurry and cook until thick like custard, 15 minutes.', 15], ['Dip and dry', 'Dip the strings, let drip, dip again 3–4 times; hang to dry for 2 days.', 2880]],
    tips: ['Let each layer set before the next dip.'], mistakes: ['Thin tatara: it won’t coat.'], vars: ['Hazelnut churchkhela.'], serve: 'Sliced, with tea or wine.' });

  X(C('Armenia', '🇦🇲', 'Europe'), { id: 'zhingyalov-hats', name: 'Zhingyalov Hats', local: 'Ժենգյալով հաց', emoji: '🌿', course: 'bread', level: 2, prep: 30, cook: 15, rest: 30, serves: 6,
    taste: { herby: 5, savory: 4, sour: 2 }, diet: ['vegan'], methods: ['saute'], tags: ['healthy', 'festive'],
    desc: 'Thin Armenian flatbread stuffed with up to 20 chopped wild herbs and greens, cooked on a dry griddle.',
    story: 'From Artsakh; eaten especially during Lent and Easter, when the spring greens appear.',
    equip: ['Griddle', 'Rolling pin'],
    ing: [[300, 'g', 'all-purpose flour'], [170, 'ml', 'water'], [0.5, 'tsp', 'salt'], [600, 'g', 'mixed greens (spinach, chard, scallions, dill, cilantro, mint, parsley)', 'finely chopped'], [2, 'tbsp', 'olive oil'], [1, '', 'lemon', 'juice'], [0.75, 'tsp', 'salt'], [0.5, 'tsp', 'chili flakes']],
    steps: [['Dough', '[[knead|Knead]] flour, water and salt; rest 30 minutes.', 30], ['Filling', 'Toss the greens with oil, lemon, salt and chili.'], ['Fill', 'Roll thin rounds, spread greens on half, fold and seal.'], ['Cook', 'Cook on a hot dry griddle until spotted on both sides, 3 minutes each.', 12]],
    tips: ['Add salt just before filling: greens release water.'], mistakes: ['Thick dough: stodgy.'], vars: ['Use whatever greens you have.'], serve: 'Hot, with tahn (yogurt drink).' });

  X(C('Azerbaijan', '🇦🇿', 'Europe'), { id: 'qutab', name: 'Göy Qutab', local: 'Göy qutab', emoji: '🌙', course: 'snack', level: 2, prep: 30, cook: 15, rest: 20, serves: 6,
    taste: { herby: 4, sour: 2, rich: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['street-food'],
    desc: 'Paper-thin half-moon flatbreads filled with herbs and greens, cooked dry, brushed with butter and served with yogurt and sumac.',
    story: 'Göy means green; Azerbaijanis also make qutab with pumpkin or cheese.',
    equip: ['Griddle', 'Rolling pin'],
    ing: [[300, 'g', 'all-purpose flour'], [160, 'ml', 'water'], [0.5, 'tsp', 'salt'], [400, 'g', 'spinach and fresh herbs (dill, cilantro, mint)', 'finely chopped'], [3, '', 'scallions'], [0.5, 'tsp', 'salt'], [40, 'g', 'butter', 'melted'], [1, 'tsp', 'sumac'], [150, 'g', 'yogurt']],
    steps: [['Dough', '[[knead|Knead]] a soft dough; rest 20 minutes.', 20], ['Fill', 'Roll very thin rounds, spread greens and salt on half, fold into half moons and press edges.'], ['Cook', 'Cook on a dry griddle 1–2 minutes each side; brush with butter, sprinkle sumac.', 12]],
    tips: ['Stack and cover to keep them soft.'], mistakes: ['Thick dough.'], vars: ['Pumpkin qutab with pomegranate.'], serve: 'Yogurt.' });

  X(C('Tajikistan', '🇹🇯', 'Middle East'), { id: 'qurutob', name: 'Qurutob', local: 'Қурутоб', emoji: '🥗', course: 'main', level: 2, prep: 20, cook: 15, serves: 4,
    taste: { sour: 3, savory: 4, rich: 4 }, diet: ['vegetarian'], methods: ['saute', 'no-cook'], tags: ['summer', 'comfort'],
    desc: 'Tajikistan’s national dish: torn flaky flatbread soaked in a salty yogurt (qurut) sauce, topped with tomato, cucumber, onion and herbs.',
    story: 'Eaten with hands from a shared wooden platter (tabaq); qurut are dried yogurt balls dissolved in water.',
    equip: ['Large platter', 'Pan'],
    ing: [[3, '', 'flaky flatbreads or parathas', 'torn'], [400, 'g', 'thick yogurt'], [150, 'ml', 'cold water'], [0.75, 'tsp', 'salt'], [2, 'tbsp', 'oil'], [1, '', 'onion', 'sliced'], [2, '', 'tomatoes', 'chopped'], [1, '', 'cucumber', 'chopped'], [1, 'handful', 'cilantro and dill'], [1, '', 'green chili', 'sliced']],
    steps: [['Sauce', 'Whisk yogurt, water and salt to a thin, tangy sauce.'], ['Onions', 'Fry onions in oil until golden.', 8], ['Assemble', 'Layer bread on a platter, pour over sauce, top with salad, onions and herbs.']],
    tips: ['Let the bread soak 5 minutes.'], mistakes: ['Soft bread turns to mush: use flaky bread.'], vars: ['Add chickpeas.'], serve: 'Immediately, with hands.' });

  X(C('Kyrgyzstan', '🇰🇬', 'Middle East'), { id: 'ashlan-fu', name: 'Ashlan-Fu', local: 'Ашлянфу', emoji: '🍜', course: 'soup', level: 2, prep: 20, cook: 20, rest: 120, serves: 4,
    taste: { sour: 4, spicy: 3, savory: 3 }, diet: ['vegan'], methods: ['simmer', 'no-cook'], tags: ['summer', 'street-food'],
    desc: 'Karakol’s cold, spicy-sour noodle soup with starch jelly, vinegar, chili and vegetables.',
    story: 'Brought by Dungan (Chinese Muslim) settlers; eaten at Karakol bazaar with fried bread.',
    equip: ['Pot', 'Pan'],
    ing: [[300, 'g', 'thick wheat noodles'], [60, 'g', 'potato starch'], [400, 'ml', 'water', 'for jelly'], [2, 'tbsp', 'oil'], [3, 'clove', 'garlic'], [2, '', 'tomatoes', 'diced'], [1, '', 'red bell pepper', 'diced'], [1, 'tsp', 'chili flakes'], [4, 'tbsp', 'black vinegar or rice vinegar'], [1, 'tbsp', 'soy sauce'], [1, 'l', 'cold vegetable stock'], [1, 'tsp', 'salt'], [2, 'tbsp', 'cilantro']],
    steps: [['Jelly', 'Cook starch in water, stirring, until clear and thick; set in a tray, chill and cut strips.', 120], ['Sauce', 'Fry garlic, tomato, pepper and chili; add vinegar, soy and salt.', 6], ['Serve', 'Cooked cold noodles and jelly in bowls, cold stock and sauce over, cilantro on top.', 8]],
    tips: ['Everything cold except the sauce.'], mistakes: ['Not enough vinegar: flat.'], vars: ['Add scrambled egg strips.'], serve: 'With fried bread.' });

  X(C('Kazakhstan', '🇰🇿', 'Middle East'), { id: 'baursak', name: 'Baursak', local: 'Бауырсақ', emoji: '🟫', course: 'bread', level: 2, prep: 20, cook: 20, rest: 60, serves: 8,
    taste: { savory: 2, sweet: 2, rich: 3 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['festive', 'party'],
    desc: 'Puffy golden squares of fried yeast dough served at every Kazakh celebration with tea.',
    story: 'Baursak are scattered on the dastarkhan (table) for guests; their smell is said to reach the heavens.',
    equip: ['Kadai'],
    ing: [[500, 'g', 'all-purpose flour'], [7, 'g', 'instant yeast'], [2, 'tbsp', 'sugar'], [1, 'tsp', 'salt'], [300, 'ml', 'warm milk'], [1, '', 'egg'], [30, 'g', 'butter', 'melted'], [1, 'l', 'oil', 'for frying']],
    steps: [['Dough', '[[knead|Knead]] all into a soft dough; [[proof]] 1 hour.', 60], ['Cut', 'Roll 1 cm thick and cut squares.'], ['Fry', '[[deep-fry|Fry]] until puffed and golden.', 15]],
    tips: ['Fry a few at a time.'], mistakes: ['Hot oil: raw inside.'], vars: ['Round baursak.'], serve: 'With tea, honey and jam.' });

  /* ======================= MIDDLE EAST ======================= */
  X(C('Syria', '🇸🇾', 'Middle East'), { id: 'fatteh', name: 'Fatteh Hummus', local: 'فتة حمص', emoji: '🥣', course: 'breakfast', level: 1, prep: 15, cook: 15, serves: 4,
    taste: { rich: 4, savory: 4, sour: 3 }, diet: ['vegetarian', 'high-protein'], methods: ['saute', 'no-cook'], tags: ['brunch', 'festive'],
    desc: 'Layers of crisp pita, warm chickpeas and garlicky yogurt-tahini, topped with pine nuts fried in butter.',
    story: 'Fatteh means crumbs; a Damascus breakfast, also eaten in Ramadan.',
    equip: ['Pan', 'Serving dish'],
    ing: [[2, '', 'pita breads', 'cut and toasted'], [2, 'can', 'chickpeas', 'warmed in their liquid'], [400, 'g', 'yogurt'], [3, 'tbsp', 'tahini'], [2, 'clove', 'garlic', 'crushed'], [1, '', 'lemon', 'juice'], [0.75, 'tsp', 'salt'], [30, 'g', 'butter'], [3, 'tbsp', 'pine nuts'], [1, 'tsp', 'paprika'], [1, 'tbsp', 'parsley']],
    steps: [['Base', 'Layer crisp pita, then warm chickpeas with a splash of their liquid.'], ['Sauce', 'Whisk yogurt, tahini, garlic, lemon and salt; spoon over.'], ['Top', 'Fry pine nuts in butter until golden; pour over with paprika and parsley.', 3]],
    tips: ['Assemble just before eating.'], mistakes: ['Cold chickpeas: serve warm.'], vars: ['Eggplant fatteh.'], serve: 'Immediately.' });

  X(C('Yemen', '🇾🇪', 'Middle East'), { id: 'bint-al-sahn', name: 'Bint al-Sahn', local: 'بنت الصحن', emoji: '🍯', course: 'dessert', level: 3, prep: 45, cook: 35, rest: 30, serves: 8,
    taste: { sweet: 4, rich: 5 }, diet: ['vegetarian'], methods: ['bake'], tags: ['festive', 'impress'],
    desc: 'Yemeni honey cake of many thin buttered dough layers, baked golden and drenched in honey with black seed.',
    story: '“Daughter of the plate”: served to guests and at weddings in Yemen, often with tea.',
    equip: ['Round baking dish', 'Rolling pin'],
    ing: [[400, 'g', 'all-purpose flour'], [3, '', 'eggs'], [5, 'g', 'instant yeast'], [150, 'ml', 'warm milk'], [1, 'tbsp', 'sugar'], [0.5, 'tsp', 'salt'], [150, 'g', 'ghee or butter', 'melted'], [150, 'g', 'honey'], [1, 'tsp', 'nigella seeds']],
    steps: [['Dough', '[[knead|Knead]] flour, eggs, yeast, milk, sugar and salt to a smooth dough; rest 30 minutes.', 30], ['Layers', 'Divide into 12 balls; roll each paper-thin, brush with ghee and stack in the dish, 6 under and 6 on top.'], ['Bake', 'Brush the top, sprinkle nigella and bake at {{180C}} 35 minutes; pour honey over while hot.', 35]],
    tips: ['Thin layers make it flaky.'], mistakes: ['Not enough ghee: dry.'], vars: ['Sabaya (savoury version).'], serve: 'Warm, with tea.' });

  X(C('Iraq', '🇮🇶', 'Middle East'), { id: 'kleicha', name: 'Kleicha', local: 'كليجة', emoji: '🍪', course: 'dessert', level: 2, prep: 40, cook: 20, rest: 30, serves: 16,
    taste: { sweet: 4, aromatic: 5, rich: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['festive', 'make-ahead'],
    desc: 'Iraq’s national cookie: cardamom dough rolled around date paste, sliced and baked golden.',
    story: 'Made for Eid and Easter by Muslim and Christian Iraqis alike; the shape is said to recall ancient Mesopotamian bakes.',
    equip: ['Baking tray'],
    ing: [[300, 'g', 'all-purpose flour'], [120, 'g', 'butter', 'melted'], [1, 'tsp', 'baking powder'], [1, 'tsp', 'cardamom powder'], [1, 'tbsp', 'sugar'], [1, 'pinch', 'salt'], [100, 'ml', 'warm milk'], [250, 'g', 'dates', 'pitted, mashed with 1 tbsp butter'], [1, '', 'egg', 'to glaze'], [1, 'tbsp', 'sesame seeds']],
    steps: [['Dough', 'Mix flour, butter, baking powder, spices, sugar, salt and milk to a soft dough; rest 30 minutes.', 30], ['Roll', 'Roll into a rectangle, spread date paste and roll up; slice 1.5 cm thick.'], ['Bake', 'Glaze, sprinkle sesame and bake at {{180C}} 20 minutes.', 20]],
    tips: ['Warm dates spread easily.'], mistakes: ['Thick dough: hard cookies.'], vars: ['Walnut-sugar filling.'], serve: 'With tea.' });

  /* ======================= EUROPE ======================= */
  X(C('Malta', '🇲🇹', 'Europe'), { id: 'pastizzi', name: 'Pastizzi tal-Irkotta', local: 'Pastizzi', emoji: '🥐', course: 'snack', level: 2, prep: 30, cook: 25, serves: 12,
    taste: { savory: 4, rich: 5 }, diet: ['vegetarian'], methods: ['bake'], tags: ['street-food', 'party'],
    desc: 'Malta’s flaky diamond-shaped pastries filled with salted ricotta (or mushy peas).',
    story: 'Sold for cents from pastizzerias across Malta; the pea version is called pastizzi tal-piżelli.',
    equip: ['Baking tray'],
    ing: [[500, 'g', 'puff pastry'], [400, 'g', 'ricotta', 'drained'], [1, '', 'egg'], [0.5, 'tsp', 'salt'], [0.25, 'tsp', 'black pepper'], [2, 'tbsp', 'parsley']],
    steps: [['Filling', 'Mix ricotta, egg, salt, pepper and parsley.'], ['Shape', 'Cut pastry rounds, add filling, fold and pinch into pointed diamonds.'], ['Bake', 'Bake at {{200C}} 25 minutes until puffed and golden.', 25]],
    tips: ['Keep the pastry cold.'], mistakes: ['Wet ricotta: soggy base.'], vars: ['Pea and curry filling.'], serve: 'Hot, with tea.' });

  X(C('Bosnia and Herzegovina', '🇧🇦', 'Europe'), { id: 'pita-krompirusa', name: 'Pita Krompiruša', local: 'Krompiruša', emoji: '🥧', course: 'main', level: 3, prep: 30, cook: 40, serves: 6,
    taste: { savory: 4, rich: 4 }, diet: ['vegan'], methods: ['bake'], tags: ['comfort', 'party'],
    desc: 'Bosnian coiled pie of thin pastry filled with grated potato and onion, baked golden.',
    story: 'In Bosnia only the meat version is called burek; every other filling makes a “pita”.',
    equip: ['Round baking tin'],
    ing: [[500, 'g', 'filo pastry'], [700, 'g', 'potatoes', 'grated, squeezed'], [1, '', 'onion', 'grated'], [1, 'tsp', 'salt'], [0.5, 'tsp', 'black pepper'], [120, 'ml', 'oil'], [100, 'ml', 'hot water']],
    steps: [['Filling', 'Mix potato, onion, salt, pepper and 2 tbsp oil.'], ['Roll', 'Layer 2 oiled filo sheets, spread filling along one edge and roll into a long tube; coil into the tin.'], ['Bake', 'Brush with oil and bake at {{200C}} 40 minutes; sprinkle hot water and cover 10 minutes to soften.', 40]],
    tips: ['Squeeze the potato dry.'], mistakes: ['Not enough oil: dry pastry.'], vars: ['Zeljanica with spinach and cheese.'], serve: 'With yogurt.' });

  X(C('Serbia', '🇷🇸', 'Europe'), { id: 'gibanica', name: 'Gibanica', local: 'Гибаница', emoji: '🥧', course: 'breakfast', level: 2, prep: 20, cook: 45, serves: 8,
    taste: { savory: 4, rich: 5, sour: 2 }, diet: ['vegetarian'], methods: ['bake'], tags: ['festive', 'brunch'],
    desc: 'A Serbian cheese pie of crumpled filo sheets soaked in eggs, cheese, yogurt and oil.',
    story: 'Served at Christmas, Easter and slavas (family saint days), and as a breakfast with yogurt.',
    equip: ['Baking dish'],
    ing: [[500, 'g', 'filo pastry'], [400, 'g', 'feta', 'crumbled'], [4, '', 'eggs'], [250, 'g', 'yogurt'], [100, 'ml', 'sparkling water'], [120, 'ml', 'oil'], [0.25, 'tsp', 'salt']],
    steps: [['Custard', 'Whisk eggs, yogurt, sparkling water, half the oil and salt; stir in the cheese.'], ['Layer', 'Dip crumpled filo sheets in the mixture and pack into the dish.'], ['Bake', 'Pour over the rest, drizzle oil and bake at {{200C}} 45 minutes.', 45]],
    tips: ['Crumpled sheets give a light, airy pie.'], mistakes: ['Flat sheets: dense.'], vars: ['Add spinach.'], serve: 'With yogurt.' });

  X(C('Croatia', '🇭🇷', 'Europe'), { id: 'strukli', name: 'Zagorski Štrukli', local: 'Štrukli', emoji: '🧀', course: 'main', level: 3, prep: 45, cook: 40, rest: 30, serves: 6,
    taste: { rich: 5, savory: 3, sour: 2 }, diet: ['vegetarian', 'high-protein'], methods: ['bake'], tags: ['comfort', 'impress'],
    desc: 'Stretched thin dough rolled around fresh cheese, cut and baked in cream until bubbling.',
    story: 'From Hrvatsko Zagorje, north of Zagreb; listed as Croatian intangible heritage. Also boiled in salted water.',
    equip: ['Large table and cloth', 'Baking dish'],
    ing: [[300, 'g', 'all-purpose flour'], [1, '', 'egg'], [150, 'ml', 'warm water'], [1, 'tbsp', 'oil'], [0.25, 'tsp', 'salt'], [500, 'g', 'farmer’s cheese or ricotta'], [2, '', 'eggs'], [150, 'g', 'sour cream'], [0.5, 'tsp', 'salt'], [250, 'ml', 'cream']],
    steps: [['Dough', '[[knead|Knead]] flour, egg, water, oil and salt until elastic; rest 30 minutes.', 30], ['Stretch', 'Stretch paper-thin over a floured cloth; spread the cheese, egg and sour cream filling; roll using the cloth.'], ['Cut and bake', 'Cut with a plate edge into pieces, lay in a dish, pour over cream and bake at {{200C}} 40 minutes.', 40]],
    tips: ['Cut with the edge of a plate, as in Zagorje.'], mistakes: ['Tears when stretching: rest the dough longer.'], vars: ['Boiled štrukli in soup.'], serve: 'Hot.' });

  X(C('Czech Republic', '🇨🇿', 'Europe'), { id: 'smazeny-syr', name: 'Smažený Sýr', local: 'Smažený sýr', emoji: '🧀', course: 'main', level: 1, prep: 15, cook: 10, serves: 4,
    taste: { rich: 5, savory: 4 }, diet: ['vegetarian'], methods: ['saute'], tags: ['comfort', 'street-food'],
    desc: 'Thick slices of Edam cheese breaded and fried until crisp outside and molten inside, with tartar sauce.',
    story: 'Czech pub classic and street snack; Wenceslas Square sells it in a bun.',
    equip: ['Frying pan'],
    ing: [[4, 'slice', 'edam or gouda cheese', '1.5 cm thick'], [50, 'g', 'flour'], [2, '', 'eggs'], [100, 'g', 'breadcrumbs'], [200, 'ml', 'oil', 'for frying'], [4, 'tbsp', 'tartar sauce'], [1, '', 'lemon']],
    steps: [['Bread', '[[breading|Bread]] in flour, egg and crumbs, then egg and crumbs again.'], ['Fry', '[[shallow-fry|Fry]] in hot oil 1–2 minutes per side until golden.', 5]],
    tips: ['Double coating stops leaks.'], mistakes: ['Cool oil: cheese bursts out.'], vars: ['Hermelín (camembert-style).'], serve: 'Fries and tartar sauce.' });

  X(C('Lithuania', '🇱🇹', 'Europe'), { id: 'saltibarsciai', name: 'Šaltibarščiai', local: 'Šaltibarščiai', emoji: '🩷', course: 'soup', level: 1, prep: 20, cook: 0, rest: 60, serves: 4,
    taste: { sour: 3, herby: 4, savory: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'healthy'],
    desc: 'A shocking-pink cold soup of kefir, grated cooked beetroot, cucumber, dill and egg, served with hot potatoes.',
    story: 'Lithuania’s summer favourite; Vilnius even holds a Pink Soup Festival.',
    equip: ['Bowl', 'Grater'],
    ing: [[1, 'l', 'kefir or buttermilk'], [3, '', 'beetroots', 'cooked, grated'], [1, '', 'cucumber', 'grated'], [4, '', 'scallions'], [1, 'bunch', 'dill'], [2, '', 'eggs', 'hard-boiled'], [0.75, 'tsp', 'salt'], [600, 'g', 'small potatoes', 'boiled, to serve']],
    steps: [['Mix', 'Stir beetroot, cucumber, scallions and dill into cold kefir with salt; chill 1 hour.', 60], ['Serve', 'Top with egg; serve with hot potatoes on the side.']],
    tips: ['Hot potatoes with cold soup is the point.'], mistakes: ['Raw beets: earthy.'], vars: ['Add radishes.'], serve: 'Hot dill potatoes.' });

  X(C('Finland', '🇫🇮', 'Europe'), { id: 'karelian-pies', name: 'Karelian Pies', local: 'Karjalanpiirakat', emoji: '🥟', course: 'breakfast', level: 3, prep: 40, cook: 50, serves: 12,
    taste: { savory: 3, rich: 3 }, diet: ['vegetarian'], methods: ['simmer', 'bake'], tags: ['brunch'],
    desc: 'Thin rye crusts filled with creamy rice porridge, crimped and baked hot, topped with egg butter.',
    story: 'From Karelia; the EU protects the name. Eaten for breakfast and at coffee time.',
    equip: ['Pot', 'Baking tray'],
    ing: [[150, 'g', 'short-grain rice'], [250, 'ml', 'water'], [600, 'ml', 'milk'], [0.75, 'tsp', 'salt'], [200, 'g', 'rye flour'], [50, 'g', 'all-purpose flour'], [150, 'ml', 'water'], [0.5, 'tsp', 'salt'], [40, 'g', 'butter', 'melted, with 2 tbsp milk'], '#Egg butter', [3, '', 'eggs', 'hard-boiled, chopped'], [60, 'g', 'butter', 'soft']],
    steps: [['Porridge', 'Cook rice in water, then milk, stirring, until thick, 40 minutes; salt and cool.', 40], ['Crusts', 'Mix flours, water and salt; roll very thin ovals.'], ['Fill and crimp', 'Spread porridge in the middle and pinch the edges inward.'], ['Bake', 'Bake at {{275C}} 12 minutes; brush with butter-milk.', 12]],
    tips: ['Very hot oven.'], mistakes: ['Thick crust: hard.'], vars: ['Potato or carrot filling.'], serve: 'With egg butter.' });

  X(C('Denmark', '🇩🇰', 'Europe'), { id: 'aebleskiver', name: 'Æbleskiver', local: 'Æbleskiver', emoji: '⚪', course: 'dessert', level: 2, prep: 15, cook: 20, serves: 4,
    taste: { sweet: 3, rich: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['festive', 'kids', 'winter'],
    desc: 'Danish round pancake puffs cooked in a special pan, turned with knitting needles, dusted with sugar.',
    story: 'A Christmas treat with gløgg; the name means apple slices, which used to be inside.',
    equip: ['Æbleskiver or appe pan'],
    ing: [[250, 'g', 'all-purpose flour'], [1, 'tsp', 'baking powder'], [0.5, 'tsp', 'baking soda'], [2, 'tbsp', 'sugar'], [0.25, 'tsp', 'salt'], [0.5, 'tsp', 'cardamom powder'], [3, '', 'eggs', 'separated'], [400, 'ml', 'buttermilk'], [40, 'g', 'butter', 'melted, for the pan'], [3, 'tbsp', 'powdered sugar'], [100, 'g', 'raspberry jam']],
    steps: [['Batter', 'Mix dry ingredients, yolks and buttermilk; [[fold]] in whipped whites.'], ['Cook', 'Butter each hole, fill with batter; turn a quarter with a skewer as it sets, until round and golden.', 18]],
    tips: ['Turn early and often.'], mistakes: ['Overfilling: lopsided.'], vars: ['Kuzhi paniyaram uses the same kind of pan.'], serve: 'Sugar and jam.' });

  X(C('Netherlands', '🇳🇱', 'Europe'), { id: 'poffertjes', name: 'Poffertjes', local: 'Poffertjes', emoji: '🥞', course: 'dessert', level: 1, prep: 10, cook: 15, rest: 60, serves: 4,
    taste: { sweet: 3, rich: 4 }, diet: ['vegetarian'], methods: ['saute'], tags: ['kids', 'street-food'],
    desc: 'Tiny fluffy Dutch buckwheat-yeast pancakes with butter and powdered sugar.',
    story: 'Sold at Dutch fairs from cast-iron pans with dozens of dimples.',
    equip: ['Poffertjes pan or frying pan'],
    ing: [[125, 'g', 'all-purpose flour'], [50, 'g', 'buckwheat flour'], [4, 'g', 'instant yeast'], [1, 'tbsp', 'sugar'], [1, 'pinch', 'salt'], [1, '', 'egg'], [250, 'ml', 'warm milk'], [60, 'g', 'butter'], [3, 'tbsp', 'powdered sugar']],
    steps: [['Batter', 'Whisk flours, yeast, sugar, salt, egg and milk; [[proof]] 1 hour.', 60], ['Cook', 'Pipe coin-sized dots into a buttered pan; flip when bubbles form.', 12], ['Serve', 'Top with butter and powdered sugar.']],
    tips: ['Use a squeeze bottle.'], mistakes: ['Big ones: not poffertjes.'], vars: ['With strawberries and cream.'], serve: 'Warm.' });

  X(C('United Kingdom', '🇬🇧', 'Europe', { area: 'Wales', styles: ['continental'] }), { id: 'welsh-rarebit', name: 'Welsh Rarebit', local: 'Caws pobi', emoji: '🧀', course: 'snack', level: 1, prep: 10, cook: 10, serves: 4,
    taste: { rich: 5, savory: 5, sour: 1 }, diet: ['vegetarian'], methods: ['saute'], tags: ['quick', 'comfort'],
    desc: 'Toast topped with a sauce of mature cheddar, mustard, beer or milk and a dash of savoury sauce, grilled until bubbling.',
    story: 'Wales’ cheese on toast, written about since the 1700s.',
    equip: ['Saucepan', 'Grill'],
    ing: [[25, 'g', 'butter'], [25, 'g', 'flour'], [150, 'ml', 'milk or ale'], [200, 'g', 'mature cheddar', 'grated'], [1, 'tsp', 'english mustard'], [1, 'tsp', 'vegetarian worcestershire sauce'], [4, 'slice', 'thick bread', 'toasted']],
    steps: [['Sauce', 'Make a [[roux]], whisk in milk until thick, then melt in cheese, mustard and sauce.', 5], ['Grill', 'Spread on toast and grill until bubbling and spotted.', 4]],
    tips: ['Thick sauce stays on the toast.'], mistakes: ['Boiling the cheese: stringy.'], vars: ['Buck rarebit with a fried egg.'], serve: 'Hot, with pickles.' });

  X(C('United Kingdom', '🇬🇧', 'Europe', { area: 'Scotland' }), { id: 'cranachan', name: 'Cranachan', local: 'Cranachan', emoji: '🍓', course: 'dessert', level: 1, prep: 15, cook: 5, serves: 4,
    taste: { sweet: 3, rich: 4 }, diet: ['vegetarian'], methods: ['no-cook'], tags: ['summer', 'quick', 'impress'],
    desc: 'Scotland’s layered dessert of whipped cream, honey, toasted oats and fresh raspberries.',
    story: 'A harvest celebration dessert; traditionally with whisky, here optional.',
    equip: ['Pan', 'Glasses'],
    ing: [[50, 'g', 'rolled oats'], [300, 'ml', 'double cream'], [3, 'tbsp', 'honey'], [300, 'g', 'raspberries'], [2, 'tbsp', 'whisky', 'optional']],
    steps: [['Toast', '[[toast|Toast]] oats in a dry pan until nutty.', 4], ['Cream', '[[whisk|Whip]] cream to soft peaks with honey (and whisky).'], ['Layer', 'Layer cream, raspberries and oats in glasses.']],
    tips: ['Crush some raspberries for colour.'], mistakes: ['Overwhipped cream: grainy.'], vars: ['Greek yogurt for a lighter version.'], serve: 'Right away.' });

  X(C('Canada', '🇨🇦', 'North America'), { id: 'nanaimo-bars', name: 'Nanaimo Bars', local: 'Nanaimo bars', emoji: '🍫', course: 'dessert', level: 2, prep: 30, cook: 5, rest: 120, serves: 16,
    taste: { sweet: 5, rich: 5 }, diet: ['vegetarian'], methods: ['no-cook'], tags: ['party', 'make-ahead'],
    desc: 'No-bake Canadian bars: a chocolate-coconut-crumb base, a vanilla custard buttercream middle and a chocolate top.',
    story: 'Named after Nanaimo, British Columbia; Canadians voted them the nation’s favourite treat.',
    equip: ['Square tin'],
    ing: [[120, 'g', 'butter'], [50, 'g', 'sugar'], [30, 'g', 'cocoa powder'], [1, '', 'egg', 'beaten'], [200, 'g', 'graham or digestive biscuit crumbs'], [60, 'g', 'desiccated coconut'], [50, 'g', 'walnuts', 'chopped'], '#Middle', [60, 'g', 'butter', 'soft'], [3, 'tbsp', 'milk'], [2, 'tbsp', 'custard powder'], [250, 'g', 'powdered sugar'], '#Top', [120, 'g', 'dark chocolate'], [1, 'tbsp', 'butter']],
    steps: [['Base', 'Melt butter, sugar and cocoa; whisk in egg and cook 1 minute until thick; mix with crumbs, coconut and nuts; press into the tin.', 4], ['Middle', 'Beat the middle ingredients; spread over; chill.', 30], ['Top', 'Melt chocolate and butter; spread over; chill until set and cut.', 90]],
    tips: ['Warm the knife to cut clean bars.'], mistakes: ['Thick chocolate: cracks when cut.'], vars: ['Mint or peanut butter middle.'], serve: 'Cold.' });

  /* ======================= LATIN AMERICA & CARIBBEAN ======================= */
  X(C('Dominican Republic', '🇩🇴', 'Caribbean'), { id: 'mangu', name: 'Mangú', local: 'Mangú', emoji: '🍌', course: 'breakfast', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { savory: 4, sour: 2, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer', 'saute'], tags: ['comfort', 'brunch'],
    desc: 'Mashed boiled green plantains with butter, topped with vinegary pickled red onions; part of the “tres golpes” breakfast.',
    story: 'The Dominican breakfast; tres golpes adds fried cheese, egg and salami (here just cheese and egg).',
    equip: ['Pot', 'Pan'],
    ing: [[4, '', 'green plantains', 'chunks'], [1.5, 'l', 'water'], [1, 'tsp', 'salt'], [40, 'g', 'butter'], [150, 'ml', 'cooking water', 'cold'], [2, '', 'red onions', 'sliced'], [3, 'tbsp', 'vinegar'], [2, 'tbsp', 'oil'], [200, 'g', 'halloumi or frying cheese', 'slices']],
    steps: [['Boil', '[[boil|Boil]] plantains in salted water until very soft, 20 minutes.', 20], ['Mash', 'Mash with butter and cold cooking water until smooth.'], ['Onions', 'Cook onions in oil and vinegar until soft and pink; pile on top. Fry the cheese.', 8]],
    tips: ['Cold water makes it smooth.'], mistakes: ['Hot water: gluey.'], vars: ['Add fried eggs.'], serve: 'Fried cheese and eggs.' });

  X(C('Honduras', '🇭🇳', 'Latin America'), { id: 'baleadas', name: 'Baleadas', local: 'Baleadas', emoji: '🌮', course: 'breakfast', level: 1, prep: 20, cook: 15, rest: 20, serves: 4,
    taste: { savory: 4, rich: 4 }, diet: ['vegetarian', 'high-protein'], methods: ['saute'], tags: ['street-food', 'brunch'],
    desc: 'Thick, soft flour tortillas folded over refried red beans, crumbled cheese and cream; add egg and avocado for a “baleada especial”.',
    story: 'From La Ceiba on the Caribbean coast, now eaten everywhere in Honduras.',
    equip: ['Griddle'],
    ing: [[300, 'g', 'all-purpose flour'], [1, 'tsp', 'baking powder'], [0.75, 'tsp', 'salt'], [50, 'g', 'butter or shortening'], [170, 'ml', 'warm water'], [400, 'g', 'refried beans'], [100, 'g', 'queso fresco or feta'], [120, 'g', 'sour cream'], [2, '', 'eggs', 'scrambled'], [1, '', 'avocado', 'sliced']],
    steps: [['Tortillas', '[[knead|Knead]] flour, baking powder, salt, butter and water; rest 20 minutes; stretch thick rounds.', 25], ['Cook', 'Cook on a hot griddle until puffed and spotted.', 10], ['Fill', 'Spread beans, cheese, cream, egg and avocado; fold.']],
    tips: ['Stretch by hand for a soft tortilla.'], mistakes: ['Thin tortillas tear.'], vars: ['Simple baleada: beans, cheese, cream.'], serve: 'Hot.' });

  X(C('Costa Rica', '🇨🇷', 'Latin America'), { id: 'gallo-pinto', name: 'Gallo Pinto', local: 'Gallo pinto', emoji: '🍚', course: 'breakfast', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { savory: 4, umami: 3, herby: 3 }, diet: ['vegan'], methods: ['saute'], tags: ['budget', 'quick', 'brunch'],
    desc: 'Day-old rice fried with black beans, onion, pepper, cilantro and tangy Salsa Lizano.',
    story: 'Costa Rica and Nicaragua both claim it; Nicaragua uses red beans.',
    equip: ['Large pan'],
    ing: [[2, 'tbsp', 'oil'], [1, '', 'onion', 'chopped'], [1, '', 'red bell pepper', 'chopped'], [2, 'clove', 'garlic'], [1, 'can', 'black beans', 'with some liquid'], [500, 'g', 'cooked rice', 'day-old'], [3, 'tbsp', 'salsa lizano or vegetarian worcestershire sauce'], [1, 'handful', 'cilantro'], [0.5, 'tsp', 'salt']],
    steps: [['Base', '[[saute|Fry]] onion, pepper and garlic until soft.', 5], ['Beans', 'Add beans with a little liquid and simmer 3 minutes.', 3], ['Rice', 'Add rice, sauce and salt; fry, folding, until the rice is speckled.', 6]],
    tips: ['Use day-old rice.'], mistakes: ['Too much bean liquid: mushy.'], vars: ['Nicaraguan style with red beans.'], serve: 'Eggs, plantain and sour cream.' });

  X(C('Venezuela', '🇻🇪', 'Latin America'), { id: 'tequenos', name: 'Tequeños', local: 'Tequeños', emoji: '🧀', course: 'snack', level: 2, prep: 30, cook: 15, rest: 30, serves: 6,
    taste: { savory: 4, rich: 5 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['party', 'kids'],
    desc: 'Sticks of white cheese wrapped in a spiral of dough and fried golden: Venezuela’s party snack.',
    story: 'Named after Los Teques; no Venezuelan birthday is complete without them.',
    equip: ['Kadai'],
    ing: [[300, 'g', 'all-purpose flour'], [1, 'tbsp', 'sugar'], [0.5, 'tsp', 'salt'], [60, 'g', 'butter', 'cold'], [1, '', 'egg'], [80, 'ml', 'water'], [300, 'g', 'halloumi or firm white cheese', 'sticks'], [1, 'l', 'oil', 'for frying']],
    steps: [['Dough', 'Rub butter into flour, sugar and salt; add egg and water; rest 30 minutes.', 30], ['Wrap', 'Roll thin, cut strips and wrap each cheese stick in a spiral, sealing the ends.'], ['Fry', '[[deep-fry|Fry]] until golden.', 10]],
    tips: ['Seal the ends well.'], mistakes: ['Gaps: cheese leaks.'], vars: ['Baked tequeños.'], serve: 'With guasacaca.' });

  X(C('Chile', '🇨🇱', 'Latin America'), { id: 'porotos-granados', name: 'Porotos Granados', local: 'Porotos granados', emoji: '🫘', course: 'main', level: 1, prep: 15, cook: 40, serves: 4,
    taste: { savory: 4, sweet: 2, herby: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['summer', 'comfort', 'one-pot'],
    desc: 'Chilean summer stew of fresh cranberry beans, pumpkin and corn, with basil and paprika.',
    story: 'A Mapuche-rooted dish; in summer, corn is grated in (porotos con pilco) or added as mazamorra.',
    equip: ['Pot'],
    ing: [[2, 'tbsp', 'oil'], [1, '', 'onion', 'chopped'], [2, 'clove', 'garlic'], [1, 'tsp', 'paprika'], [1, 'tsp', 'dried oregano'], [2, 'can', 'borlotti beans', 'or 500 g fresh cranberry beans'], [400, 'g', 'pumpkin', 'cubed'], [1, 'l', 'water'], [300, 'g', 'sweet corn kernels', 'half blended'], [1, 'handful', 'basil'], [1, 'tsp', 'salt']],
    steps: [['Base', 'Fry onion, garlic, paprika and oregano.', 5], ['Simmer', 'Add beans, pumpkin, water and salt; [[simmer]] until the pumpkin falls apart, 25 minutes.', 25], ['Corn', 'Add the corn and blended corn; cook 8 minutes; finish with basil.', 8]],
    tips: ['Let the pumpkin melt into the stew.'], mistakes: ['Watery stew: simmer longer.'], vars: ['With noodles (con riendas).'], serve: 'Chilean tomato salad (ensalada chilena).' });

  X(C('Paraguay', '🇵🇾', 'Latin America'), { id: 'chipa', name: 'Chipa', local: 'Chipa', emoji: '🍩', course: 'bread', level: 1, prep: 15, cook: 25, serves: 8,
    taste: { savory: 4, rich: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['bake'], tags: ['brunch', 'kids'],
    desc: 'Chewy Paraguayan cheese breads of cassava starch, anise and eggs, shaped into rings.',
    story: 'Sold on buses and at roadsides in Paraguay; especially eaten during Holy Week.',
    equip: ['Baking tray'],
    ing: [[400, 'g', 'tapioca starch'], [200, 'g', 'mozzarella or queso paraguay', 'grated'], [80, 'g', 'butter', 'soft'], [2, '', 'eggs'], [80, 'ml', 'milk'], [1, 'tsp', 'ground anise'], [0.5, 'tsp', 'salt']],
    steps: [['Dough', 'Mix butter and eggs, then cheese, starch, anise, salt and milk until a soft dough forms.'], ['Shape', 'Roll ropes and form small rings.'], ['Bake', 'Bake at {{200C}} 20–25 minutes until golden.', 25]],
    tips: ['Add milk slowly: dough should not stick.'], mistakes: ['Dry dough: cracks.'], vars: ['Chipa guasu (corn soufflé).'], serve: 'With mate cocido.' });

  X(C('Paraguay', '🇵🇾', 'Latin America'), { id: 'sopa-paraguaya', name: 'Sopa Paraguaya', local: 'Sopa paraguaya', emoji: '🌽', course: 'side', level: 1, prep: 15, cook: 45, serves: 8,
    taste: { savory: 4, rich: 4, sweet: 1 }, diet: ['vegetarian', 'gluten-free'], methods: ['bake'], tags: ['festive', 'party'],
    desc: 'A “solid soup”: moist cornbread with onions, cheese and milk, Paraguay’s national dish.',
    story: 'Legend says the president’s cook added too much cornmeal to a soup, and the baked result became a classic.',
    equip: ['Baking dish', 'Pan'],
    ing: [[2, '', 'onions', 'sliced'], [60, 'g', 'butter'], [300, 'g', 'cornmeal'], [500, 'ml', 'milk'], [4, '', 'eggs'], [250, 'g', 'mozzarella or queso fresco', 'grated'], [1, 'tsp', 'salt']],
    steps: [['Onions', 'Cook onions in butter until soft.', 8], ['Batter', 'Mix cornmeal and milk; add onions, beaten eggs, cheese and salt.'], ['Bake', 'Bake at {{190C}} 40 minutes until golden.', 40]],
    tips: ['Rest 10 minutes before cutting.'], mistakes: ['Overbaked: dry.'], vars: ['Add fresh corn.'], serve: 'Warm, with stews or asado.' });

  X(C('Argentina', '🇦🇷', 'Latin America'), { id: 'provoleta', name: 'Provoleta', local: 'Provoleta', emoji: '🧀', course: 'starter', level: 1, prep: 5, cook: 10, serves: 4,
    taste: { rich: 5, savory: 4, herby: 3, smoky: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['grill'], tags: ['party', 'quick'],
    desc: 'A thick disc of provolone grilled until crusty and melting, topped with oregano, chili flakes and olive oil.',
    story: 'Invented by Italian immigrants in Argentina to start an asado.',
    equip: ['Cast-iron pan or grill'],
    ing: [[300, 'g', 'provolone', '2 cm thick slice'], [1, 'tsp', 'dried oregano'], [0.5, 'tsp', 'chili flakes'], [2, 'tbsp', 'olive oil'], [3, 'tbsp', 'chimichurri']],
    steps: [['Chill', 'Chill the cheese well so it holds.'], ['Grill', '[[sear|Sear]] in a very hot pan 3 minutes per side until crusted.', 6], ['Top', 'Sprinkle oregano and chili; drizzle oil and chimichurri.']],
    tips: ['Very cold cheese, very hot pan.'], mistakes: ['Flipping too soon: it tears.'], vars: ['With tomato and basil.'], serve: 'With bread.' });

  X(C('Mexico', '🇲🇽', 'Latin America'), { id: 'tlayudas', name: 'Tlayudas', local: 'Tlayudas', emoji: '🫓', course: 'main', level: 2, prep: 15, cook: 10, serves: 4,
    taste: { savory: 4, rich: 4, smoky: 3 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['grill'], tags: ['street-food'],
    desc: 'Oaxaca’s giant crisp corn tortillas spread with refried beans and lard-free butter, quesillo and salsa, grilled over charcoal.',
    story: 'Called the Oaxacan pizza; vendors fold them in half and grill them directly over coals.',
    equip: ['Grill or large pan'],
    ing: [[4, '', 'large corn tortillas'], [400, 'g', 'refried black beans'], [2, 'tbsp', 'butter'], [200, 'g', 'oaxaca cheese or mozzarella', 'shredded'], [100, 'g', 'cabbage', 'shredded'], [1, '', 'avocado'], [150, 'g', 'pico de gallo salsa']],
    steps: [['Spread', 'Brush tortillas with butter; spread beans and cheese.'], ['Grill', 'Fold or leave open and grill until crisp and the cheese melts.', 8], ['Top', 'Add cabbage, avocado and salsa.']],
    tips: ['Use the biggest tortillas you can find.'], mistakes: ['Thin beans: soggy.'], vars: ['With grilled mushrooms.'], serve: 'Salsa roja.' });

  /* ======================= OCEANIA ======================= */
  X(C('Australia', '🇦🇺', 'Oceania'), { id: 'damper', name: 'Damper', local: 'Damper', emoji: '🍞', course: 'bread', level: 1, prep: 10, cook: 30, serves: 6,
    taste: { savory: 3, rich: 2 }, diet: ['vegetarian'], methods: ['bake'], tags: ['budget', 'quick'],
    desc: 'Australian bush bread of flour, butter and milk, traditionally baked in the coals of a campfire.',
    story: 'Made by stockmen in the outback; First Nations people baked seed breads long before.',
    equip: ['Baking tray or camp oven'],
    ing: [[450, 'g', 'self-raising flour'], [1, 'tsp', 'salt'], [60, 'g', 'butter', 'cold'], [300, 'ml', 'milk']],
    steps: [['Rub', 'Rub butter into flour and salt.'], ['Mix', 'Add milk; mix to a soft dough; shape a round and score a cross.'], ['Bake', 'Bake at {{200C}} 30 minutes until hollow-sounding.', 30]],
    tips: ['Don’t overwork.'], mistakes: ['Heavy damper: too much kneading.'], vars: ['Add wattleseed or cheese.'], serve: 'Butter and golden syrup.' });

  X(C('Hawaiʻi (USA)', '🌺', 'Oceania'), { id: 'haupia', name: 'Haupia', local: 'Haupia', emoji: '🥥', course: 'dessert', level: 1, prep: 5, cook: 10, rest: 120, serves: 9,
    taste: { sweet: 3, rich: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['party', 'make-ahead', 'summer'],
    desc: 'Hawaiian coconut milk pudding set firm and cut into squares.',
    story: 'Served at every lūʻau; once thickened with arrowroot (pia).',
    equip: ['Pot', 'Square tin'],
    ing: [[800, 'ml', 'coconut milk'], [100, 'g', 'sugar'], [60, 'g', 'cornstarch'], [150, 'ml', 'water'], [0.25, 'tsp', 'salt']],
    steps: [['Cook', 'Heat coconut milk, sugar and salt; whisk in cornstarch slurry and cook, stirring, until very thick, 5 minutes.', 8], ['Set', 'Pour into a tin and chill until firm.', 120]],
    tips: ['Whisk constantly.'], mistakes: ['Undercooked: won’t set.'], vars: ['Haupia pie layered on chocolate.'], serve: 'Cold squares.' });

  X(C('Samoa', '🇼🇸', 'Oceania'), { id: 'panipopo', name: 'Panipopo', local: 'Panipopo', emoji: '🥥', course: 'dessert', level: 2, prep: 20, cook: 30, rest: 90, serves: 12,
    taste: { sweet: 4, rich: 5 }, diet: ['vegetarian'], methods: ['bake'], tags: ['party'],
    desc: 'Soft Samoan buns baked in a sweet coconut sauce that caramelizes underneath.',
    story: 'Pani means bun and popo coconut; served at Samoan Sunday lunches (to’ona’i).',
    equip: ['Baking dish'],
    ing: [[500, 'g', 'all-purpose flour'], [7, 'g', 'instant yeast'], [50, 'g', 'sugar'], [0.5, 'tsp', 'salt'], [250, 'ml', 'warm milk'], [50, 'g', 'butter', 'melted'], '#Sauce', [400, 'ml', 'coconut milk'], [100, 'g', 'sugar']],
    steps: [['Dough', '[[knead|Knead]] and [[proof]] 1 hour.', 60], ['Shape', 'Shape 12 balls in the dish; rise 30 minutes.', 30], ['Sauce and bake', 'Pour the coconut milk-sugar sauce over and bake at {{180C}} 30 minutes.', 30]],
    tips: ['Spoon the sauce over when serving.'], mistakes: ['Not enough sauce: dry buns.'], vars: ['Add vanilla.'], serve: 'Warm.' });

  /* ======================= ASIA ======================= */
  X(C('Myanmar', '🇲🇲', 'Southeast Asia'), { id: 'shan-tofu', name: 'Shan Tofu (Chickpea Tofu)', local: 'ရှမ်းတိုဖူး', emoji: '🟨', course: 'salad', level: 2, prep: 15, cook: 15, rest: 120, serves: 4,
    taste: { savory: 4, sour: 3, spicy: 3, umami: 2 }, diet: ['vegan', 'high-protein'], methods: ['simmer', 'no-cook'], tags: ['healthy', 'make-ahead'],
    desc: 'Yellow “tofu” set from chickpea flour, sliced into a salad with chili oil, soy, vinegar, garlic oil and peanuts.',
    story: 'From Myanmar’s Shan State; no soybeans at all. Also fried into crisp fritters.',
    equip: ['Pot', 'Tray'],
    ing: [[150, 'g', 'besan (gram flour)'], [750, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], [0.75, 'tsp', 'salt'], '#Salad', [2, 'tbsp', 'soy sauce'], [1, 'tbsp', 'rice vinegar'], [1, 'tbsp', 'chili oil'], [2, 'tbsp', 'garlic oil'], [3, 'tbsp', 'roasted peanuts', 'crushed'], [1, 'handful', 'cilantro'], [1, '', 'shallot', 'sliced']],
    steps: [['Cook', 'Whisk besan, turmeric and salt into water; cook, whisking, until thick and glossy, 10 minutes.', 12], ['Set', 'Pour into a tray; set 2 hours.', 120], ['Salad', 'Cut into slices; toss with the dressing, peanuts, shallot and cilantro.']],
    tips: ['Keep whisking to avoid lumps.'], mistakes: ['Undercooked: won’t set.'], vars: ['Fried tofu fritters (tohu jaw).'], serve: 'Cold.' });

  X(C('Laos', '🇱🇦', 'Southeast Asia'), { id: 'tam-mak-hoong', name: 'Tam Mak Hoong (Vegetarian)', local: 'ຕໍາໝາກຫຸ່ງ', emoji: '🥗', course: 'salad', level: 1, prep: 15, cook: 0, serves: 2,
    taste: { spicy: 5, sour: 4, umami: 3, sweet: 2 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'quick', 'healthy'],
    desc: 'Lao green papaya salad pounded with chili, garlic, lime, tomato and long beans; funkier and hotter than Thai som tam.',
    story: 'Laos’ everyday salad, eaten with sticky rice; usually with padaek fish sauce, here with fermented soybean and tamari.',
    equip: ['Mortar and pestle'],
    ing: [[300, 'g', 'green papaya', 'shredded'], [2, 'clove', 'garlic'], [3, '', 'thai bird’s eye chilies'], [1, 'tbsp', 'palm sugar'], [2, 'tbsp', 'lime juice'], [1.5, 'tbsp', 'tamari (gluten-free soy sauce)'], [1, 'tsp', 'miso', 'gluten-free'], [6, '', 'cherry tomatoes', 'halved'], [4, '', 'long beans', 'cut']],
    steps: [['Pound', '[[pound|Pound]] garlic and chilies; add sugar, lime, tamari and miso.'], ['Bruise', 'Add tomatoes and beans; bruise lightly.'], ['Papaya', 'Add papaya and pound-toss until dressed and slightly soft.']],
    tips: ['Pound and toss with a spoon at the same time.'], mistakes: ['Over-pounding: watery.'], vars: ['Cucumber salad (tam mak taeng).'], serve: 'Sticky rice and raw cabbage.' });

  /* ======================= AFRICA ======================= */
  X(C('Nigeria', '🇳🇬', 'Africa'), { id: 'akara', name: 'Akara', local: 'Àkàrà', emoji: '🟤', course: 'breakfast', level: 2, prep: 25, cook: 15, rest: 240, serves: 4,
    taste: { savory: 4, spicy: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['deep-fry'], tags: ['street-food', 'brunch'],
    desc: 'Fluffy fritters of peeled black-eyed peas whipped with onion, scotch bonnet and salt, fried golden.',
    story: 'Eaten with pap (ogi) or bread in Nigeria; travelled to Brazil as acarajé.',
    equip: ['Blender', 'Kadai'],
    ing: [[250, 'g', 'black-eyed peas', 'soaked 4 hours, peeled'], [1, '', 'onion'], [1, '', 'scotch bonnet', 'or 2 green chilies'], [0.75, 'tsp', 'salt'], [60, 'ml', 'water'], [1, 'l', 'oil', 'for frying']],
    steps: [['Peel', '[[soak|Soak]] the beans and rub off the skins.', 240], ['Blend and whip', 'Blend with onion, chili and little water to a thick paste; whip 3 minutes until fluffy; add salt.', 5], ['Fry', 'Drop spoonfuls into hot oil and [[deep-fry]] until golden.', 12]],
    tips: ['Whipping air in makes them light.'], mistakes: ['Thin batter: flat akara.'], vars: ['Brazilian acarajé (usually with shrimp).'], serve: 'Pap or bread.' });

  X(C('Ghana', '🇬🇭', 'Africa'), { id: 'waakye', name: 'Waakye', local: 'Waakye', emoji: '🍚', course: 'main', level: 2, prep: 10, cook: 60, rest: 480, serves: 4,
    taste: { savory: 4, rich: 3, spicy: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['street-food', 'comfort'],
    desc: 'Rice and black-eyed peas (or beans) cooked with dried millet leaves that turn them a deep red-brown, served with shito and gari.',
    story: 'Ghana’s favourite breakfast, wrapped in leaves by street vendors and loaded with toppings.',
    equip: ['Pot'],
    ing: [[200, 'g', 'black-eyed peas', 'soaked overnight'], [300, 'g', 'long-grain rice'], [6, '', 'dried sorghum leaves (waakye leaves)', 'or 1/4 tsp baking soda'], [1.4, 'l', 'water'], [1, 'tsp', 'salt'], '#To serve', [3, 'tbsp', 'chili oil', 'vegan shito-style'], [4, 'tbsp', 'gari (toasted cassava)'], [2, '', 'eggs', 'boiled, optional'], [1, '', 'plantain', 'fried']],
    steps: [['Beans', 'Boil beans with the leaves 30 minutes.', 30], ['Rice', 'Add rice and salt; cook covered until absorbed, 20 minutes; remove leaves.', 20], ['Serve', 'Top with chili oil, gari, egg and fried plantain.']],
    tips: ['The leaves give the colour.'], mistakes: ['Too little water: hard beans.'], vars: ['With spaghetti and salad (“talia”).'], serve: 'With shito and gari.' });

  X(C('Kenya', '🇰🇪', 'Africa'), { id: 'githeri', name: 'Githeri', local: 'Githeri', emoji: '🌽', course: 'main', level: 1, prep: 10, cook: 30, serves: 4,
    taste: { savory: 4 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['budget', 'one-pot', 'comfort'],
    desc: 'Kikuyu stew of corn and beans fried with onion, tomato, potato and greens.',
    story: 'A Kenyan school-lunch staple; the plain boiled version is mixed into mukimo.',
    equip: ['Pot'],
    ing: [[2, 'tbsp', 'oil'], [1, '', 'onion'], [2, '', 'tomatoes'], [2, 'clove', 'garlic'], [1, 'tsp', 'curry powder'], [1, 'can', 'red kidney beans (rajma)'], [300, 'g', 'sweet corn kernels', 'or cooked hominy'], [2, '', 'potatoes', 'cubed'], [400, 'ml', 'water'], [100, 'g', 'kale or spinach'], [1, 'tsp', 'salt']],
    steps: [['Base', 'Fry onion, garlic, tomato and curry powder until soft.', 6], ['Stew', 'Add beans, corn, potatoes, water and salt; [[simmer]] until potatoes are tender.', 20], ['Greens', 'Stir in the greens.', 2]],
    tips: ['Mash a few potatoes to thicken.'], mistakes: ['Watery githeri: reduce.'], vars: ['Dry boiled githeri.'], serve: 'With avocado.' });

  X(C('Kenya', '🇰🇪', 'Africa'), { id: 'mukimo', name: 'Mukimo', local: 'Mukimo', emoji: '🟢', course: 'side', level: 1, prep: 15, cook: 25, serves: 4,
    taste: { savory: 4, sweet: 1 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'festive'],
    desc: 'Green mash of potatoes, pumpkin leaves or spinach, corn and peas, from Kenya’s central highlands.',
    story: 'A Kikuyu dish served at celebrations, often beside roast meat (nyama choma).',
    equip: ['Pot', 'Masher'],
    ing: [[800, 'g', 'potatoes', 'peeled'], [200, 'g', 'spinach or pumpkin leaves'], [150, 'g', 'sweet corn kernels'], [100, 'g', 'green peas'], [30, 'g', 'butter'], [1, 'tsp', 'salt']],
    steps: [['Boil', '[[boil|Boil]] potatoes with peas and corn until soft; add the greens for the last 3 minutes.', 22], ['Mash', 'Drain and mash with butter and salt until green, leaving corn whole.']],
    tips: ['Blend the greens for a brighter colour.'], mistakes: ['Watery mash: drain well.'], vars: ['Add fried onions.'], serve: 'With stew.' });

  X(C('Uganda', '🇺🇬', 'Africa'), { id: 'matoke', name: 'Matoke', local: 'Matooke', emoji: '🍌', course: 'main', level: 1, prep: 15, cook: 30, serves: 4,
    taste: { savory: 4, sweet: 1 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['comfort'],
    desc: 'Green cooking bananas stewed with onion, tomato, peppers and spices until soft and saucy.',
    story: 'Uganda’s staple food; traditionally steamed in banana leaves and mashed.',
    equip: ['Pot'],
    ing: [[6, '', 'green plantains or green bananas', 'peeled, chunks'], [2, 'tbsp', 'oil'], [1, '', 'onion'], [2, 'clove', 'garlic'], [2, '', 'tomatoes'], [1, '', 'green bell pepper'], [1, 'tsp', 'curry powder'], [0.5, 'tsp', 'ground turmeric'], [500, 'ml', 'water'], [1, 'tsp', 'salt'], [100, 'ml', 'coconut milk', 'optional']],
    steps: [['Base', 'Fry onion, garlic, pepper, tomato and spices.', 6], ['Stew', 'Add bananas, water and salt; [[simmer]] covered until soft, 20 minutes; add coconut milk.', 22]],
    tips: ['Oil your hands when peeling green bananas.'], mistakes: ['Undercooked: starchy.'], vars: ['Steamed mashed matoke.'], serve: 'With groundnut sauce.' });

  X(C('Tanzania', '🇹🇿', 'Africa'), { id: 'chipsi-mayai', name: 'Chipsi Mayai', local: 'Chipsi mayai', emoji: '🍟', course: 'main', level: 1, prep: 10, cook: 20, serves: 2,
    taste: { savory: 4, rich: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['deep-fry', 'saute'], tags: ['street-food', 'kids'],
    desc: 'Tanzania’s fries omelette: crisp chips set in beaten eggs and cooked into a golden cake, with kachumbari salad.',
    story: '“Chips and eggs”, sold from roadside stalls across Dar es Salaam.',
    equip: ['Kadai', 'Frying pan'],
    ing: [[2, '', 'potatoes', 'cut into fries'], [500, 'ml', 'oil', 'for frying'], [4, '', 'eggs'], [0.5, 'tsp', 'salt'], [1, '', 'tomato', 'chopped'], [0.5, '', 'red onion', 'chopped'], [1, 'tbsp', 'lime juice'], [2, 'tbsp', 'chili sauce']],
    steps: [['Fries', '[[deep-fry|Fry]] potatoes until crisp.', 12], ['Omelette', 'Put fries in an oiled pan, pour beaten salted eggs over and cook until set; flip.', 6], ['Salad', 'Mix tomato, onion and lime for kachumbari.']],
    tips: ['Fries must be crisp before the eggs go in.'], mistakes: ['Soggy fries: limp omelette.'], vars: ['Add sausage (not vegetarian).'], serve: 'Kachumbari and chili sauce.' });

  X(C('Ivory Coast', '🇨🇮', 'Africa'), { id: 'attieke', name: 'Attiéké with Alloco', local: 'Attiéké', emoji: '🍚', course: 'main', level: 1, prep: 15, cook: 15, serves: 4,
    taste: { sour: 3, savory: 4, sweet: 2 }, diet: ['vegan', 'gluten-free'], methods: ['steam', 'saute'], tags: ['street-food'],
    desc: 'Fluffy fermented cassava couscous with fried ripe plantain, tomato-onion salad and chili.',
    story: 'Ivorian staple, usually with grilled fish; UNESCO listed attiéké-making as heritage in 2024.',
    equip: ['Steamer', 'Pan'],
    ing: [[400, 'g', 'attiéké (cassava couscous)', 'or wheat couscous (not gluten-free)'], [3, 'tbsp', 'oil'], [3, '', 'ripe plantains', 'sliced'], [2, '', 'tomatoes', 'diced'], [1, '', 'onion', 'diced'], [1, '', 'cucumber', 'diced'], [1, '', 'lime', 'juice'], [1, 'tsp', 'salt'], [1, '', 'scotch bonnet', 'minced']],
    steps: [['Attiéké', '[[steam|Steam]] the attiéké 8 minutes; fluff with a little oil and salt.', 8], ['Alloco', '[[shallow-fry|Fry]] the plantain slices until caramelized.', 8], ['Salad', 'Toss vegetables with lime, salt and chili.']],
    tips: ['Couscous works if you can’t find attiéké.'], mistakes: ['Dry attiéké: steam with a sprinkle of water.'], vars: ['With grilled fish (not vegetarian).'], serve: 'Together on one plate.' });

  X(C('South Africa', '🇿🇦', 'Africa'), { id: 'bunny-chow', name: 'Bean Bunny Chow', local: 'Bunny chow', emoji: '🍞', course: 'main', level: 2, prep: 15, cook: 35, serves: 4,
    taste: { spicy: 4, savory: 4, aromatic: 4 }, diet: ['vegan', 'high-protein'], methods: ['simmer'], tags: ['street-food', 'comfort'],
    desc: 'Durban’s hollowed-out bread loaf filled with a fiery sugar bean and potato curry; the scooped-out bread is the lid.',
    story: 'Created by Indian South Africans in Durban; the original was vegetarian bean curry.',
    equip: ['Pot', 'Bread knife'],
    ing: [[3, 'tbsp', 'oil'], [1, 'tsp', 'fennel seeds'], [1, 'piece', 'cinnamon stick'], [1, 'sprig', 'curry leaves'], [1, '', 'onion'], [1, 'tbsp', 'ginger-garlic paste'], [2, 'tbsp', 'durban masala or hot curry powder'], [2, '', 'tomatoes', 'grated'], [2, 'can', 'red kidney beans (rajma)', 'or sugar beans'], [2, '', 'potatoes', 'cubed'], [400, 'ml', 'water'], [1, 'tsp', 'salt'], [2, 'tbsp', 'cilantro'], [1, '', 'white bread loaf (unsliced)', 'quartered, hollowed']],
    steps: [['Curry', '[[bloom|Bloom]] fennel, cinnamon and curry leaves; fry onion and ginger-garlic; add masala and tomatoes and cook down.', 10], ['Simmer', 'Add beans, potatoes, water and salt; [[simmer]] until thick, 25 minutes.', 25], ['Fill', 'Fill the hollow bread quarters; put the bread plug on top.']],
    tips: ['Thick curry so the bread doesn’t collapse.'], mistakes: ['Soft bread: use a firm loaf.'], vars: ['Mutton bunny (not vegetarian).'], serve: 'Carrot-chili salad (sambals).' });

  X(C('South Africa', '🇿🇦', 'Africa'), { id: 'koeksisters', name: 'Koeksisters', local: 'Koeksisters', emoji: '🥨', course: 'dessert', level: 3, prep: 30, cook: 25, rest: 480, serves: 16,
    taste: { sweet: 5, rich: 3 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['festive', 'make-ahead'],
    desc: 'Plaited dough fried crisp and plunged into ice-cold lemon-ginger syrup so it soaks in while staying crunchy.',
    story: 'Afrikaner treat; the Cape Malay koesister is spiced, round and rolled in coconut.',
    equip: ['Kadai', 'Bowl over ice'],
    ing: [[300, 'g', 'all-purpose flour'], [1, 'tbsp', 'baking powder'], [0.25, 'tsp', 'salt'], [30, 'g', 'butter'], [1, '', 'egg'], [120, 'ml', 'milk'], [1, 'l', 'oil', 'for frying'], '#Syrup', [500, 'g', 'sugar'], [250, 'ml', 'water'], [1, '', 'lemon', 'juice and peel'], [10, 'g', 'ginger', 'sliced'], [1, 'piece', 'cinnamon stick']],
    steps: [['Syrup', 'Boil the syrup 5 minutes; chill overnight, very cold.', 480], ['Dough', 'Rub butter into dry ingredients; add egg and milk; knead; roll 1 cm thick, cut strips and plait.'], ['Fry and dunk', '[[deep-fry|Fry]] until golden and dunk straight into the ice-cold syrup for 30 seconds.', 20]],
    tips: ['Keep the syrup on ice: hot fry, cold syrup.'], mistakes: ['Warm syrup: soggy koeksisters.'], vars: ['Cape Malay koesisters.'], serve: 'Cold, with coffee.' });

  X(C('Mauritius', '🇲🇺', 'Africa'), { id: 'dholl-puri', name: 'Dholl Puri', local: 'Dholl puri', emoji: '🫓', course: 'main', level: 3, prep: 40, cook: 30, rest: 30, serves: 6,
    taste: { savory: 4, spicy: 2 }, diet: ['vegan', 'high-protein'], methods: ['saute'], tags: ['street-food'],
    desc: 'Soft Mauritian flatbreads stuffed with ground cooked split peas, wrapped around butter bean curry, rougaille and chutney.',
    story: 'Mauritius’ favourite street food, brought by Indian (Bihari) workers; vendors sell them in pairs.',
    equip: ['Tawa', 'Food processor'],
    ing: [[150, 'g', 'chana dal', 'cooked firm, drained'], [0.5, 'tsp', 'ground cumin'], [0.5, 'tsp', 'ground turmeric'], [0.5, 'tsp', 'salt'], [300, 'g', 'all-purpose flour'], [2, 'tbsp', 'oil'], [170, 'ml', 'water'], [0.5, 'tsp', 'salt'], [3, 'tbsp', 'oil', 'for cooking'], '#Fillings', [1, 'can', 'butter beans', 'in a light curry'], [200, 'g', 'tomato rougaille sauce'], [4, 'tbsp', 'coriander chutney']],
    steps: [['Dal', 'Grind the cooked dal with cumin, turmeric and salt to a dry powder.'], ['Dough', '[[knead|Knead]] flour, oil, salt and water; rest 30 minutes.', 30], ['Stuff and roll', 'Stuff each ball with dal powder, seal and roll thin.'], ['Cook', 'Cook on a hot tawa with a little oil until soft and spotted.', 20]],
    tips: ['The dal must be dry and powdery to roll thin.'], mistakes: ['Wet dal: tears.'], vars: ['Roti with farata.'], serve: 'Butter bean curry, rougaille and chutney.' });

  X(C('Tunisia', '🇹🇳', 'Africa'), { id: 'brik', name: 'Brik à l’Œuf', local: 'بريك', emoji: '🥟', course: 'starter', level: 2, prep: 15, cook: 10, serves: 4,
    taste: { savory: 4, rich: 4, herby: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['street-food', 'festive'],
    desc: 'A crisp triangle of thin malsouka pastry wrapped around a runny egg, potato, capers and parsley.',
    story: 'Eaten at Ramadan iftar; the challenge is to bite it without the yolk running down your chin. Usually with tuna, here without.',
    equip: ['Frying pan'],
    ing: [[4, 'sheet', 'brik pastry or filo (doubled)'], [1, '', 'potato', 'boiled, mashed'], [2, 'tbsp', 'parsley'], [1, 'tbsp', 'capers'], [30, 'g', 'cheese', 'grated'], [4, '', 'eggs'], [0.5, 'tsp', 'salt'], [200, 'ml', 'oil', 'for frying'], [1, '', 'lemon']],
    steps: [['Fill', 'Spread potato, parsley, capers and cheese on half a sheet; make a well and crack in an egg; season.'], ['Fold', 'Fold quickly into a triangle.'], ['Fry', '[[shallow-fry|Fry]] in hot oil 1 minute per side until golden, yolk still soft.', 6]],
    tips: ['Work fast once the egg is in.'], mistakes: ['Long frying: hard yolk.'], vars: ['Classic with tuna (not vegetarian).'], serve: 'Lemon wedges.' });

  X(C('Morocco', '🇲🇦', 'Africa'), { id: 'bissara', name: 'Bissara', local: 'بيصارة', emoji: '🥣', course: 'soup', level: 1, prep: 10, cook: 45, serves: 4,
    taste: { savory: 4, rich: 3, spicy: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['winter', 'budget', 'healthy'],
    desc: 'Velvety Moroccan soup of dried split fava beans with garlic, cumin, paprika and a generous pour of olive oil.',
    story: 'A cheap, filling breakfast in Moroccan winters, sold from big pots at markets.',
    equip: ['Pot', 'Blender'],
    ing: [[300, 'g', 'dried split fava beans', 'soaked overnight'], [4, 'clove', 'garlic'], [1.3, 'l', 'water'], [1, 'tsp', 'salt'], [2, 'tsp', 'ground cumin'], [1, 'tsp', 'paprika'], [5, 'tbsp', 'extra-virgin olive oil'], [1, '', 'lemon']],
    steps: [['Simmer', 'Simmer beans and garlic in water until falling apart, 40 minutes.', 40], ['Blend', 'Blend smooth with salt and half the cumin.'], ['Serve', 'Top with olive oil, paprika, cumin and lemon.']],
    tips: ['Lots of olive oil on top.'], mistakes: ['Too thick: add water.'], vars: ['Thicker dip version.'], serve: 'Crusty bread.' });

  X(C('Algeria', '🇩🇿', 'Africa'), { id: 'makroud', name: 'Makroud', local: 'مقروض', emoji: '🔶', course: 'dessert', level: 3, prep: 40, cook: 25, serves: 20,
    taste: { sweet: 5, rich: 4, aromatic: 3 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['festive', 'make-ahead'],
    desc: 'Diamond-shaped semolina cookies filled with date paste, fried and soaked in honey with orange blossom.',
    story: 'Made across the Maghreb for Eid; Constantine in Algeria and Kairouan in Tunisia are famous for them.',
    equip: ['Kadai'],
    ing: [[500, 'g', 'coarse semolina'], [150, 'g', 'butter', 'melted'], [0.25, 'tsp', 'salt'], [150, 'ml', 'orange blossom water and water'], [300, 'g', 'dates', 'mashed with 1 tsp cinnamon and 1 tbsp butter'], [1, 'l', 'oil', 'for frying'], [300, 'g', 'honey'], [2, 'tbsp', 'orange blossom water']],
    steps: [['Dough', 'Rub butter into semolina and salt; rest 1 hour, then bring together with the flavoured water without kneading.', 60], ['Fill', 'Shape logs, press a channel, fill with date paste, close and flatten; cut diamonds.'], ['Fry and soak', '[[deep-fry|Fry]] until golden; soak in warm honey with orange blossom.', 20]],
    tips: ['Don’t knead: semolina turns tough.'], mistakes: ['Hot honey: soggy.'], vars: ['Baked makroud.'], serve: 'With mint tea.' });
})();
