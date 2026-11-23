/* World batch 8 (veg-first): Africa and the Americas. Original recipes written for Dish Dictionary. */
'use strict';
(function () {
  const C = (country, flag, region, extra) => Object.assign({ country, flag, region }, extra || {});
  const X = (base, d) => DD.add(Object.assign({}, base, d));
  const EG = C('Egypt', '🇪🇬', 'Middle East'), MA = C('Morocco', '🇲🇦', 'Africa'), ET = C('Ethiopia', '🇪🇹', 'Africa'), NG = C('Nigeria', '🇳🇬', 'Africa');
  const US = C('United States', '🇺🇸', 'North America'), MX = C('Mexico', '🇲🇽', 'Latin America'), PE = C('Peru', '🇵🇪', 'Latin America'), BR = C('Brazil', '🇧🇷', 'Latin America');

  /* ======================= WEST & CENTRAL AFRICA ======================= */
  X(C('Senegal', '🇸🇳', 'Africa'), { id: 'yassa-tofu', name: 'Tofu Yassa', local: 'Yassa', emoji: '🍋', course: 'main', level: 2, prep: 20, cook: 35, rest: 60, serves: 4,
    taste: { sour: 4, savory: 4, sweet: 2, spicy: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['saute', 'simmer'], tags: ['comfort'],
    desc: 'Senegal’s tangy dish of onions slow-cooked with lemon, mustard and chili, here with seared tofu instead of chicken.',
    story: 'From the Casamance region; the mountain of soft, lemony onions is the real star.',
    equip: ['Large pan'],
    ing: [[400, 'g', 'firm tofu', 'thick slices'], [4, '', 'onions', 'sliced'], [3, '', 'lemons', 'juice'], [2, 'tbsp', 'dijon mustard'], [3, 'clove', 'garlic'], [1, '', 'scotch bonnet', 'whole'], [3, 'tbsp', 'oil'], [2, '', 'bay leaves'], [200, 'ml', 'vegetable stock'], [1, 'tsp', 'salt'], [80, 'g', 'green olives']],
    steps: [['Marinate', '[[marinate|Marinate]] tofu and onions with lemon, mustard, garlic and salt 1 hour.', 60], ['Sear', '[[sear|Sear]] the tofu until golden; set aside.', 8], ['Onions', 'Cook the onions slowly with bay leaves and chili until soft and golden, 20 minutes; add marinade and stock.', 22], ['Finish', 'Return tofu and olives; simmer 5 minutes.', 5]],
    tips: ['Don’t rush the onions.'], mistakes: ['Burnt onions: bitter.'], vars: ['Mushroom yassa; classic chicken yassa (not vegetarian).'], serve: 'White rice.' });

  X(C('Cameroon', '🇨🇲', 'Africa'), { id: 'ndole', name: 'Ndolé (Vegetarian)', local: 'Ndolé', emoji: '🥬', course: 'main', level: 2, prep: 20, cook: 45, serves: 4,
    taste: { bitter: 3, rich: 4, savory: 4 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['festive'],
    desc: 'Cameroon’s national dish of bitterleaf greens simmered in a creamy ground-peanut sauce with onion and garlic.',
    story: 'From the Douala people; often cooked with shrimp or meat, but the peanut-greens base is vegetarian.',
    equip: ['Pot', 'Blender'],
    ing: [[300, 'g', 'raw peanuts', 'boiled 15 min, peeled'], [500, 'ml', 'water'], [400, 'g', 'bitterleaf or kale and spinach', 'chopped'], [3, 'tbsp', 'oil'], [2, '', 'onions'], [4, 'clove', 'garlic'], [1, 'tbsp', 'ginger'], [1, 'tsp', 'salt'], [1, '', 'vegetable stock cube']],
    steps: [['Peanuts', 'Blend boiled peanuts with water to a smooth paste; simmer 15 minutes, stirring.', 15], ['Greens', 'Add greens, stock cube and salt; simmer 15 minutes.', 15], ['Finish', 'Fry onions, garlic and ginger in oil until golden; stir into the pot.', 8]],
    tips: ['Kale plus a little rapini mimics bitterleaf.'], mistakes: ['Peanut paste catching: stir.'], vars: ['With prawns (not vegetarian).'], serve: 'Plantains or miondo.' });

  X(NG, { id: 'efo-riro', name: 'Efo Riro (Vegetarian)', local: 'Ẹ̀fọ́ rírò', emoji: '🥬', course: 'main', level: 2, prep: 20, cook: 30, serves: 4,
    taste: { spicy: 3, savory: 5, umami: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['comfort'],
    desc: 'Yoruba spinach stew in a fried red pepper base with palm oil and fermented locust beans (iru).',
    story: '“Efo riro” means stirred vegetables; usually loaded with meat and fish, this keeps the greens and iru.',
    equip: ['Pot', 'Blender'],
    ing: [[3, '', 'red bell peppers'], [2, '', 'tomatoes'], [1, '', 'scotch bonnet'], [2, '', 'onions'], [4, 'tbsp', 'red palm oil or oil'], [2, 'tbsp', 'iru (fermented locust beans) or miso'], [600, 'g', 'spinach', 'chopped'], [1, '', 'vegetable stock cube'], [0.75, 'tsp', 'salt']],
    steps: [['Base', 'Blend peppers, tomatoes, chili and one onion; boil down until thick, 12 minutes.', 12], ['Fry', 'Fry the other onion and iru in palm oil; add the pepper base and fry 10 minutes.', 10], ['Greens', 'Add spinach, stock cube and salt; cook 5 minutes.', 5]],
    tips: ['Squeeze the spinach to keep it thick.'], mistakes: ['Watery pepper base: reduce well.'], vars: ['Add mushrooms or tofu.'], serve: 'Pounded yam or rice.' });

  X(NG, { id: 'zobo', name: 'Zobo', local: 'Zobo', emoji: '🌺', course: 'drink', level: 1, prep: 5, cook: 20, rest: 120, serves: 6,
    taste: { sour: 4, sweet: 3, aromatic: 4, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['summer', 'party'],
    desc: 'Deep red hibiscus drink boiled with ginger, cloves and pineapple, served ice cold.',
    story: 'Called bissap in Senegal and sorrel in Jamaica; every West African party has a jug of it.',
    equip: ['Pot', 'Strainer'],
    ing: [[60, 'g', 'dried hibiscus flowers'], [2, 'l', 'water'], [30, 'g', 'ginger', 'sliced'], [5, '', 'whole cloves'], [200, 'g', 'pineapple', 'peel and chunks'], [120, 'g', 'sugar']],
    steps: [['Boil', 'Boil hibiscus, ginger, cloves and pineapple 15 minutes.', 15], ['Finish', 'Strain, sweeten and chill.', 120]],
    tips: ['Add mint when serving.'], mistakes: ['Over-boiling: bitter.'], vars: ['Jamaican sorrel at Christmas.'], serve: 'Iced.' });

  X(NG, { id: 'chin-chin', name: 'Chin Chin', local: 'Chin chin', emoji: '🟫', course: 'snack', level: 2, prep: 20, cook: 25, serves: 10,
    taste: { sweet: 3, rich: 3 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['party', 'make-ahead'],
    desc: 'Crunchy, lightly sweet fried dough cubes with nutmeg, Nigeria’s favourite party snack.',
    story: 'Made in big batches for Christmas, weddings and naming ceremonies.',
    equip: ['Kadai'],
    ing: [[400, 'g', 'all-purpose flour'], [80, 'g', 'sugar'], [0.5, 'tsp', 'nutmeg'], [1, 'tsp', 'baking powder'], [0.25, 'tsp', 'salt'], [80, 'g', 'butter'], [1, '', 'egg'], [100, 'ml', 'milk'], [1, 'l', 'oil', 'for frying']],
    steps: [['Dough', 'Rub butter into dry ingredients; add egg and milk to a firm dough.'], ['Cut', 'Roll 5 mm thick and cut small cubes.'], ['Fry', '[[deep-fry|Fry]] on medium until golden and crunchy.', 20]],
    tips: ['Stir often for even colour.'], mistakes: ['Thick cubes: soft centres.'], vars: ['Coconut chin chin.'], serve: 'In jars.' });

  X(C('Ghana', '🇬🇭', 'Africa'), { id: 'tatale', name: 'Tatale', local: 'Tatale', emoji: '🍌', course: 'snack', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { sweet: 3, spicy: 2, aromatic: 3 }, diet: ['vegan'], methods: ['saute'], tags: ['street-food', 'quick'],
    desc: 'Ghanaian pancakes of overripe plantain with ginger, onion and chili, fried in palm or vegetable oil.',
    story: 'A way to use plantains past their best; eaten with bambara bean stew.',
    equip: ['Frying pan'],
    ing: [[3, '', 'very ripe plantains', 'mashed'], [80, 'g', 'all-purpose flour'], [1, '', 'onion', 'grated'], [1, 'tbsp', 'ginger', 'grated'], [0.5, '', 'scotch bonnet', 'minced'], [0.5, 'tsp', 'salt'], [4, 'tbsp', 'oil']],
    steps: [['Mix', 'Mix plantain, flour, onion, ginger, chili and salt; rest 10 minutes.', 10], ['Fry', 'Fry spoonfuls flattened into pancakes until dark golden.', 12]],
    tips: ['Black-skinned plantains are best.'], mistakes: ['Too much flour: dense.'], vars: ['Kaklo (fried balls).'], serve: 'Bean stew.' });

  /* ======================= EAST & HORN ======================= */
  X(ET, { id: 'atkilt-wat', name: 'Atkilt Wat', local: 'ጥቅል ጎመን', emoji: '🥕', course: 'main', level: 1, prep: 15, cook: 30, serves: 4,
    taste: { savory: 4, aromatic: 3, sweet: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['healthy', 'budget'],
    desc: 'Ethiopian cabbage, carrot and potato stew gently spiced with turmeric, ginger and garlic.',
    story: 'A staple of the fasting platter (beyaynetu) served on injera during Lent.',
    equip: ['Pot'],
    ing: [[4, 'tbsp', 'oil'], [2, '', 'onions', 'sliced'], [3, 'clove', 'garlic'], [1, 'tbsp', 'ginger'], [1, 'tsp', 'ground turmeric'], [0.5, 'tsp', 'ground cumin'], [3, '', 'carrots', 'sliced'], [3, '', 'potatoes', 'cubed'], [0.5, 'head', 'cabbage', 'shredded'], [200, 'ml', 'water'], [1, 'tsp', 'salt'], [2, '', 'green chilies']],
    steps: [['Base', 'Cook onions in oil until soft; add garlic, ginger and spices.', 8], ['Vegetables', 'Add carrots and potatoes with water; cover 10 minutes.', 10], ['Cabbage', 'Add cabbage, chilies and salt; cook until tender, 10 minutes.', 10]],
    tips: ['Let the vegetables steam, not boil.'], mistakes: ['Too much water: soupy.'], vars: ['With green beans.'], serve: 'Injera.' });

  X(ET, { id: 'kik-alicha', name: 'Kik Alicha', local: 'ክክ አልጫ', emoji: '🟡', course: 'main', level: 1, prep: 10, cook: 35, serves: 4,
    taste: { savory: 4, aromatic: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['healthy', 'budget'],
    desc: 'Mild Ethiopian yellow split pea stew with turmeric, ginger and garlic, cooked until creamy.',
    story: '“Alicha” means mild: no berbere. Served beside spicy misir wat on fasting platters.',
    equip: ['Pot'],
    ing: [[250, 'g', 'yellow split peas', 'rinsed'], [4, 'tbsp', 'oil'], [2, '', 'onions', 'finely chopped'], [3, 'clove', 'garlic'], [1, 'tbsp', 'ginger'], [1, 'tsp', 'ground turmeric'], [900, 'ml', 'water'], [1, 'tsp', 'salt'], [2, '', 'green chilies', 'slit']],
    steps: [['Onions', 'Cook onions slowly in oil until soft and sweet, 10 minutes.', 10], ['Simmer', 'Add garlic, ginger, turmeric, peas and water; [[simmer]] until creamy, 25 minutes.', 25], ['Finish', 'Add salt and chilies.']],
    tips: ['Cook onions without browning.'], mistakes: ['Undercooked peas: grainy.'], vars: ['Ater kik (split pea) with berbere.'], serve: 'Injera.' });

  X(C('Sudan', '🇸🇩', 'Africa'), { id: 'kisra', name: 'Kisra', local: 'كسرة', emoji: '🫓', course: 'bread', level: 2, prep: 10, cook: 20, rest: 720, serves: 4,
    taste: { sour: 3, savory: 2 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['healthy'],
    desc: 'Paper-thin, slightly sour Sudanese sorghum flatbread, spread on a hot griddle and peeled off in sheets.',
    story: 'Sudan’s staple bread, eaten with stews like mullah and okra (weika).',
    equip: ['Non-stick griddle', 'Spreader'],
    ing: [[250, 'g', 'sorghum flour'], [450, 'ml', 'water'], [0.5, 'tsp', 'instant yeast'], [0.5, 'tsp', 'salt']],
    steps: [['Ferment', 'Mix flour, water and yeast; [[ferment]] 12 hours until sour.', 720], ['Cook', 'Spread a very thin layer on a hot griddle with a spatula; cook 1 minute and peel off.', 18]],
    tips: ['The batter should be like thin cream.'], mistakes: ['Thick layer: like a pancake.'], vars: ['Gurrasa (thick version).'], serve: 'Stews.' });

  /* ======================= NORTH AFRICA ======================= */
  X(EG, { id: 'taameya', name: 'Ta’ameya (Egyptian Falafel)', local: 'طعمية', emoji: '🟢', course: 'breakfast', level: 2, prep: 20, cook: 15, rest: 600, serves: 4,
    taste: { herby: 5, savory: 4 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['deep-fry'], tags: ['street-food', 'brunch'],
    desc: 'Egypt’s green falafel made from fava beans with lots of herbs, crusted in sesame, fried crisp.',
    story: 'Egyptian Copts ate it during fasting; it is the original falafel, made with fava beans not chickpeas.',
    equip: ['Food processor', 'Kadai'],
    ing: [[300, 'g', 'dried split fava beans', 'soaked overnight'], [1, 'bunch', 'cilantro'], [1, 'bunch', 'parsley'], [1, 'handful', 'dill'], [4, '', 'scallions'], [4, 'clove', 'garlic'], [1, 'tsp', 'ground cumin'], [1, 'tsp', 'ground coriander'], [1, 'tsp', 'salt'], [0.5, 'tsp', 'baking soda'], [3, 'tbsp', 'sesame seeds'], [1, 'l', 'oil', 'for frying']],
    steps: [['Grind', 'Process soaked beans with herbs, garlic and spices to a fine green paste; add salt and soda just before frying.'], ['Shape', 'Shape flat patties and press into sesame.'], ['Fry', '[[deep-fry|Fry]] until crisp outside and bright green inside.', 12]],
    tips: ['Never use cooked beans.'], mistakes: ['Wet mixture: patties fall apart.'], vars: ['Levantine chickpea falafel.'], serve: 'Baladi bread, tahini and pickles.' });

  X(EG, { id: 'mahshi', name: 'Mahshi', local: 'محشي', emoji: '🫑', course: 'main', level: 3, prep: 45, cook: 50, serves: 6,
    taste: { herby: 4, sour: 3, savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'make-ahead'],
    desc: 'Egyptian zucchini, peppers and eggplant hollowed and stuffed with herby tomato rice, simmered in a tomato broth.',
    story: 'Egyptian families spend hours coring vegetables together for Friday lunch.',
    equip: ['Corer', 'Large pot'],
    ing: [[4, '', 'small zucchini', 'cored'], [3, '', 'small bell peppers', 'tops cut, seeded'], [3, '', 'small eggplants', 'cored'], [250, 'g', 'egyptian or short-grain rice', 'rinsed'], [3, '', 'tomatoes', 'grated'], [1, '', 'onion', 'grated'], [1, 'bunch', 'parsley and dill and cilantro', 'chopped'], [2, 'tbsp', 'tomato paste'], [3, 'tbsp', 'oil'], [1, 'tsp', 'ground cumin'], [1.5, 'tsp', 'salt'], [700, 'ml', 'vegetable stock']],
    steps: [['Filling', 'Mix rice with tomatoes, onion, herbs, half the paste, oil, cumin and salt.'], ['Stuff', 'Fill the vegetables three-quarters full; pack upright in the pot.'], ['Simmer', 'Pour over stock mixed with the rest of the paste; cover with a plate and [[simmer]] 45 minutes.', 45]],
    tips: ['Leave space: rice swells.'], mistakes: ['Overstuffed: bursts.'], vars: ['Stuffed vine or cabbage leaves.'], serve: 'Yogurt and salad.' });

  X(EG, { id: 'om-ali', name: 'Om Ali', local: 'أم علي', emoji: '🥧', course: 'dessert', level: 1, prep: 10, cook: 25, serves: 6,
    taste: { sweet: 4, rich: 5 }, diet: ['vegetarian'], methods: ['bake'], tags: ['festive', 'comfort'],
    desc: 'Egypt’s bread pudding of baked puff pastry soaked in sweet milk with nuts, raisins and coconut, browned on top.',
    story: '“Ali’s mother”: legend says it was made to celebrate a victory in medieval Egypt.',
    equip: ['Baking dish'],
    ing: [[300, 'g', 'puff pastry', 'baked and broken'], [80, 'g', 'mixed nuts', 'chopped'], [3, 'tbsp', 'raisins'], [3, 'tbsp', 'desiccated coconut'], [700, 'ml', 'whole milk'], [200, 'ml', 'cream'], [80, 'g', 'sugar'], [1, 'tsp', 'vanilla extract']],
    steps: [['Layer', 'Layer pastry pieces with nuts, raisins and coconut.'], ['Milk', 'Heat milk, sugar and vanilla; pour over.'], ['Bake', 'Spoon cream on top and bake at {{220C}} 15 minutes until browned.', 15]],
    tips: ['Grill at the end for a golden top.'], mistakes: ['Too little milk: dry.'], vars: ['Croissants instead of puff pastry.'], serve: 'Hot.' });

  X(EG, { id: 'molokhia', name: 'Molokhia', local: 'ملوخية', emoji: '🟢', course: 'soup', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { savory: 4, herby: 4, aromatic: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'quick'],
    desc: 'Silky green soup of finely chopped jute leaves in stock, finished with a sizzling garlic-coriander taqleya.',
    story: 'Egyptians gasp when the hot garlic goes in, a tradition called the shahqa.',
    equip: ['Pot', 'Small pan'],
    ing: [[400, 'g', 'molokhia (jute leaves)', 'frozen minced'], [1, 'l', 'vegetable stock'], [6, 'clove', 'garlic', 'crushed'], [1, 'tbsp', 'ground coriander'], [2, 'tbsp', 'ghee or oil'], [0.5, 'tsp', 'salt'], [1, '', 'lemon']],
    steps: [['Simmer', 'Bring stock to a simmer; add molokhia and salt; heat without boiling 5 minutes.', 6], ['Taqleya', 'Fry garlic and coriander in oil until golden; pour in.', 3]],
    tips: ['Never let it boil hard or it separates.'], mistakes: ['Boiling: the leaves sink.'], vars: ['With rabbit or chicken (not vegetarian).'], serve: 'Rice, bread and lemon.' });

  X(C('Libya', '🇱🇾', 'Africa'), { id: 'bazeen', name: 'Bazeen', local: 'بازين', emoji: '🥘', course: 'main', level: 3, prep: 25, cook: 50, serves: 4,
    taste: { spicy: 3, savory: 4 }, diet: ['vegan'], methods: ['simmer'], tags: ['festive', 'comfort'],
    desc: 'Libya’s dome of barley dough in a spicy tomato stew with chickpeas and potatoes, eaten with the right hand.',
    story: 'A shared communal dish; the barley dome sits in the middle of the platter like an island.',
    equip: ['Pot', 'Wooden spoon'],
    ing: [[300, 'g', 'barley flour'], [700, 'ml', 'boiling water'], [0.5, 'tsp', 'salt'], '#Stew', [3, 'tbsp', 'oil'], [1, '', 'onion'], [3, 'tbsp', 'tomato paste'], [1, 'tsp', 'chili powder'], [1, 'tsp', 'bzar or baharat'], [1, 'can', 'chickpeas'], [3, '', 'potatoes', 'halved'], [800, 'ml', 'water'], [1, 'tsp', 'salt']],
    steps: [['Stew', 'Fry onion, tomato paste and spices; add chickpeas, potatoes, water and salt; [[simmer]] 30 minutes.', 35], ['Dough', 'Stir barley flour into boiling salted water and beat hard with a wooden spoon until it forms a smooth dome, 10 minutes.', 10], ['Serve', 'Place the dome in a deep platter; pour stew around; arrange potatoes and eggs if using.']],
    tips: ['Beat the dough hard for smoothness.'], mistakes: ['Lumpy dough: add flour gradually.'], vars: ['With lamb (not vegetarian).'], serve: 'With boiled eggs and lemon.' });

  X(MA, { id: 'sfenj', name: 'Sfenj', local: 'سفنج', emoji: '🍩', course: 'breakfast', level: 2, prep: 10, cook: 20, rest: 120, serves: 6,
    taste: { sweet: 2, savory: 2 }, diet: ['vegan'], methods: ['deep-fry'], tags: ['street-food', 'brunch'],
    desc: 'Moroccan light, chewy ring doughnuts from a sticky yeast dough, eaten with sugar or honey and mint tea.',
    story: 'Sfenj sellers string the doughnuts on palm fronds in the morning souks.',
    equip: ['Kadai'],
    ing: [[400, 'g', 'all-purpose flour'], [7, 'g', 'instant yeast'], [1, 'tsp', 'sugar'], [1, 'tsp', 'salt'], [350, 'ml', 'warm water'], [1, 'l', 'oil', 'for frying'], [3, 'tbsp', 'sugar', 'to dust']],
    steps: [['Batter', 'Beat into a very sticky dough; [[proof]] 2 hours.', 120], ['Shape', 'With wet hands, pull a ball, poke a hole and stretch into a ring straight into the oil.'], ['Fry', 'Fry until golden and crisp; dust with sugar.', 15]],
    tips: ['Wet your hands each time.'], mistakes: ['Stiff dough: heavy sfenj.'], vars: ['With an egg fried inside.'], serve: 'Mint tea.' });

  X(MA, { id: 'taktouka', name: 'Taktouka', local: 'تكتوكة', emoji: '🫑', course: 'salad', level: 1, prep: 15, cook: 30, serves: 4,
    taste: { smoky: 3, savory: 4, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['grill', 'simmer'], tags: ['healthy', 'make-ahead'],
    desc: 'Moroccan cooked salad of roasted peppers and tomatoes with garlic, paprika and cumin, served warm or cold.',
    story: 'One of the many small salads that start a Moroccan meal, scooped with bread.',
    equip: ['Grill', 'Pan'],
    ing: [[3, '', 'green bell peppers'], [1, '', 'red bell pepper'], [500, 'g', 'tomatoes', 'grated'], [3, 'tbsp', 'olive oil'], [3, 'clove', 'garlic'], [1, 'tsp', 'paprika'], [1, 'tsp', 'ground cumin'], [0.5, 'tsp', 'salt'], [2, 'tbsp', 'parsley']],
    steps: [['Char', '[[char|Char]] the peppers, peel and chop.', 12], ['Cook', 'Cook tomatoes with oil, garlic and spices until thick; add peppers and cook 10 minutes.', 18]],
    tips: ['Cook until jammy.'], mistakes: ['Watery tomatoes: reduce more.'], vars: ['Zaalouk with eggplant.'], serve: 'Bread.' });

  X(MA, { id: 'seffa', name: 'Seffa', local: 'سفة', emoji: '🍚', course: 'dessert', level: 2, prep: 10, cook: 25, serves: 6,
    taste: { sweet: 3, rich: 4, aromatic: 4 }, diet: ['vegetarian'], methods: ['steam'], tags: ['festive'],
    desc: 'Steamed couscous with butter, cinnamon and powdered sugar shaped into a dome and decorated with almonds.',
    story: 'Served at the end of Moroccan weddings and for the birth of a child, often with a glass of milk.',
    equip: ['Couscoussier or steamer'],
    ing: [[400, 'g', 'couscous'], [400, 'ml', 'water', 'warm, salted'], [60, 'g', 'butter'], [60, 'g', 'powdered sugar'], [2, 'tsp', 'ground cinnamon'], [100, 'g', 'almonds', 'fried, ground'], [2, 'tbsp', 'raisins'], [1, 'tbsp', 'orange blossom water']],
    steps: [['Steam', 'Moisten couscous, [[steam]] 10 minutes, fluff with water, steam again 10 minutes.', 22], ['Butter', 'Rub in butter, raisins and orange blossom.'], ['Decorate', 'Shape a dome; stripe with cinnamon, sugar and almonds.']],
    tips: ['Fluff by hand to separate grains.'], mistakes: ['Clumpy couscous: rub well.'], vars: ['Seffa with vermicelli (seffa medfouna).'], serve: 'With milk.' });

  X(C('Tunisia', '🇹🇳', 'Africa'), { id: 'mechouia', name: 'Salata Mechouia', local: 'سلاطة مشوية', emoji: '🌶️', course: 'salad', level: 1, prep: 15, cook: 20, serves: 4,
    taste: { smoky: 4, spicy: 3, sour: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['grill', 'no-cook'], tags: ['summer'],
    desc: 'Tunisian grilled salad of charred peppers, tomatoes, onion and garlic, chopped with olive oil, caraway and lemon, topped with egg and olives.',
    story: 'Usually crowned with tuna; this version keeps the egg and capers.',
    equip: ['Grill'],
    ing: [[4, '', 'long green peppers'], [3, '', 'tomatoes'], [1, '', 'onion'], [3, 'clove', 'garlic', 'unpeeled'], [4, 'tbsp', 'olive oil'], [1, 'tsp', 'caraway seeds', 'ground'], [1, '', 'lemon', 'juice'], [0.5, 'tsp', 'salt'], [2, '', 'eggs', 'hard-boiled'], [2, 'tbsp', 'black olives'], [1, 'tbsp', 'capers']],
    steps: [['Char', '[[char|Char]] all the vegetables until blackened; peel.', 20], ['Chop', 'Chop finely with oil, caraway, lemon and salt.'], ['Top', 'Top with egg, olives and capers.']],
    tips: ['Charring is the flavour.'], mistakes: ['Under-charring: no smokiness.'], vars: ['With tuna (not vegetarian).'], serve: 'Bread.' });

  /* ======================= SOUTHERN AFRICA & MADAGASCAR ======================= */
  X(C('South Africa', '🇿🇦', 'Africa'), { id: 'melktert', name: 'Melktert', local: 'Melktert', emoji: '🥧', course: 'dessert', level: 2, prep: 25, cook: 30, rest: 120, serves: 10,
    taste: { sweet: 3, rich: 4, aromatic: 3 }, diet: ['vegetarian'], methods: ['bake', 'simmer'], tags: ['party', 'make-ahead'],
    desc: 'South Africa’s milk tart: a light cinnamon custard in a crisp pastry case, dusted with cinnamon.',
    story: 'From Dutch settlers; South Africa celebrates National Milk Tart Day on 27 February.',
    equip: ['Tart tin', 'Pot'],
    ing: [[300, 'g', 'shortcrust pastry'], [750, 'ml', 'whole milk'], [1, 'piece', 'cinnamon stick'], [100, 'g', 'sugar'], [40, 'g', 'cornstarch'], [2, 'tbsp', 'flour'], [2, '', 'eggs'], [30, 'g', 'butter'], [1, 'tsp', 'vanilla extract'], [1, 'tsp', 'ground cinnamon']],
    steps: [['Blind bake', 'Bake the pastry case at {{190C}} 20 minutes.', 20], ['Custard', 'Heat milk with cinnamon; whisk eggs, sugar, cornstarch and flour; add hot milk and cook until thick; stir in butter and vanilla.', 10], ['Set', 'Pour into the case; dust with cinnamon; chill 2 hours.', 120]],
    tips: ['Keep it light, not stiff.'], mistakes: ['Lumpy custard: whisk constantly.'], vars: ['Crustless milk tart.'], serve: 'Cold.' });

  X(C('South Africa', '🇿🇦', 'Africa'), { id: 'vetkoek', name: 'Vetkoek', local: 'Vetkoek', emoji: '🍞', course: 'bread', level: 1, prep: 15, cook: 15, rest: 60, serves: 8,
    taste: { savory: 3 }, diet: ['vegan'], methods: ['deep-fry'], tags: ['street-food', 'comfort'],
    desc: 'Fluffy fried dough buns split and filled with curried beans or jam.',
    story: '“Fat cake” in Afrikaans; township spaza shops sell them in the morning.',
    equip: ['Kadai'],
    ing: [[500, 'g', 'all-purpose flour'], [7, 'g', 'instant yeast'], [1, 'tbsp', 'sugar'], [1, 'tsp', 'salt'], [330, 'ml', 'warm water'], [1, 'l', 'oil', 'for frying']],
    steps: [['Dough', '[[knead|Knead]] and [[proof]] 1 hour.', 60], ['Shape', 'Shape balls and flatten slightly.'], ['Fry', '[[deep-fry|Fry]] on medium until puffed and golden.', 12]],
    tips: ['Medium oil cooks them through.'], mistakes: ['Hot oil: raw centres.'], vars: ['Filled with chakalaka.'], serve: 'Bean curry or apricot jam.' });

  X(C('Zimbabwe', '🇿🇼', 'Africa'), { id: 'sadza-muriwo', name: 'Sadza ne Muriwo', local: 'Sadza nemuriwo', emoji: '⚪', course: 'main', level: 2, prep: 10, cook: 30, serves: 4,
    taste: { savory: 4, rich: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['budget', 'comfort'],
    desc: 'Zimbabwe’s stiff white maize porridge with greens cooked with tomato, onion and peanut butter.',
    story: 'Sadza is eaten daily across Zimbabwe; you pinch a piece and use it to scoop the relish.',
    equip: ['Heavy pot', 'Pan'],
    ing: [[300, 'g', 'white maize meal'], [1.2, 'l', 'water'], [500, 'g', 'collard greens or kale', 'shredded'], [2, 'tbsp', 'oil'], [1, '', 'onion'], [2, '', 'tomatoes'], [3, 'tbsp', 'peanut butter'], [150, 'ml', 'water', 'for greens'], [1, 'tsp', 'salt']],
    steps: [['Porridge', 'Whisk a third of the meal into cold water; bring to a boil, stirring; cook 5 minutes.', 8], ['Thicken', 'Add the rest of the meal bit by bit, beating with a wooden spoon until very stiff; cover on low 10 minutes.', 15], ['Muriwo', 'Fry onion and tomato; add greens, water, peanut butter and salt; cook 10 minutes.', 12]],
    tips: ['Wet the spoon to shape sadza.'], mistakes: ['Lumpy sadza: add meal slowly.'], vars: ['Ugali (Kenya), nshima (Zambia).'], serve: 'Pinch and scoop.' });

  X(C('Madagascar', '🇲🇬', 'Africa'), { id: 'mofo-gasy', name: 'Mofo Gasy', local: 'Mofo gasy', emoji: '⚪', course: 'breakfast', level: 2, prep: 10, cook: 20, rest: 180, serves: 4,
    taste: { sweet: 3 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['street-food', 'brunch'],
    desc: 'Madagascar’s sweet rice-flour and coconut milk cakes cooked in a dimpled pan, crisp outside and soft inside.',
    story: '“Malagasy bread”, sold at dawn by street vendors with coffee.',
    equip: ['Appe or æbleskiver pan'],
    ing: [[250, 'g', 'rice flour'], [250, 'ml', 'coconut milk'], [100, 'ml', 'water'], [60, 'g', 'sugar'], [1, 'tsp', 'instant yeast'], [1, 'pinch', 'salt'], [2, 'tbsp', 'oil']],
    steps: [['Batter', 'Mix everything; [[ferment]] 3 hours.', 180], ['Cook', 'Oil the pan, fill the dimples and cook covered until set, turning once.', 18]],
    tips: ['Covered cooking keeps them soft.'], mistakes: ['Thin batter: flat cakes.'], vars: ['Mokary (with banana).'], serve: 'With coffee.' });

  /* ======================= NORTH AMERICA ======================= */
  X(US, { id: 'succotash', name: 'Succotash', local: 'Succotash', emoji: '🌽', course: 'side', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { sweet: 3, savory: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['summer', 'quick'],
    desc: 'Sweet corn and lima beans sautéed with butter, onion, peppers and cherry tomatoes.',
    story: 'From the Narragansett word msickquatash; a Native American dish adopted by early settlers.',
    equip: ['Pan'],
    ing: [[30, 'g', 'butter'], [1, '', 'onion'], [1, '', 'red bell pepper'], [300, 'g', 'sweet corn kernels'], [300, 'g', 'butter beans', 'frozen or canned'], [150, 'g', 'cherry tomatoes', 'halved'], [0.5, 'tsp', 'salt'], [0.25, 'tsp', 'black pepper'], [2, 'tbsp', 'basil or parsley']],
    steps: [['Base', 'Cook onion and pepper in butter until soft.', 5], ['Corn and beans', 'Add corn and beans; cook 6 minutes.', 6], ['Finish', 'Add tomatoes, seasoning and herbs; warm through.', 2]],
    tips: ['Fresh summer corn is best.'], mistakes: ['Overcooked tomatoes: mushy.'], vars: ['Add okra (Southern style).'], serve: 'Side to anything.' });

  X(US, { id: 'cheese-grits', name: 'Cheese Grits', local: 'Grits', emoji: '🧀', course: 'breakfast', level: 1, prep: 5, cook: 25, serves: 4,
    taste: { rich: 5, savory: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'brunch'],
    desc: 'Creamy Southern stone-ground corn porridge enriched with butter and sharp cheddar.',
    story: 'A breakfast staple of the American South, from Native American hominy.',
    equip: ['Pot'],
    ing: [[150, 'g', 'grits or coarse cornmeal'], [500, 'ml', 'water'], [400, 'ml', 'milk'], [0.75, 'tsp', 'salt'], [40, 'g', 'butter'], [120, 'g', 'sharp cheddar', 'grated'], [0.25, 'tsp', 'black pepper']],
    steps: [['Cook', 'Whisk grits into simmering water and milk with salt; cook on low, stirring often, 20 minutes.', 22], ['Finish', 'Stir in butter, cheese and pepper.']],
    tips: ['Stone-ground grits have more flavour.'], mistakes: ['Not stirring: lumps.'], vars: ['Top with sautéed mushrooms.'], serve: 'Hot.' });

  X(US, { id: 'pecan-pie', name: 'Pecan Pie', local: 'Pecan pie', emoji: '🥧', course: 'dessert', level: 2, prep: 20, cook: 55, rest: 120, serves: 8,
    taste: { sweet: 5, rich: 5 }, diet: ['vegetarian'], methods: ['bake'], tags: ['festive'],
    desc: 'Buttery pastry filled with a gooey caramel custard and toasted pecans.',
    story: 'A Thanksgiving and Christmas classic of the American South, where pecan trees grow.',
    equip: ['Pie dish'],
    ing: [[300, 'g', 'shortcrust pastry'], [200, 'g', 'pecans'], [3, '', 'eggs'], [150, 'g', 'brown sugar'], [180, 'ml', 'maple syrup or golden syrup'], [60, 'g', 'butter', 'melted'], [1, 'tsp', 'vanilla extract'], [0.25, 'tsp', 'salt']],
    steps: [['Case', 'Line the dish with pastry; chill.'], ['Filling', 'Whisk eggs, sugar, syrup, butter, vanilla and salt; add pecans.'], ['Bake', 'Bake at {{175C}} 50–55 minutes until just set with a slight wobble; cool completely.', 55]],
    tips: ['Cool fully before slicing.'], mistakes: ['Overbaking: cracked, dry filling.'], vars: ['Chocolate pecan pie.'], serve: 'With cream.' });

  X(US, { id: 'key-lime-pie', name: 'Key Lime Pie', local: 'Key lime pie', emoji: '🥧', course: 'dessert', level: 1, prep: 20, cook: 20, rest: 240, serves: 8,
    taste: { sour: 4, sweet: 4, rich: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['summer', 'make-ahead'],
    desc: 'Tangy lime and condensed milk filling in a graham cracker crust, topped with whipped cream.',
    story: 'Florida’s official pie, from the Florida Keys where tiny Key limes grow.',
    equip: ['Pie dish'],
    ing: [[200, 'g', 'graham or digestive biscuit crumbs'], [80, 'g', 'butter', 'melted'], [400, 'g', 'sweetened condensed milk'], [4, '', 'egg yolks'], [120, 'ml', 'lime juice'], [2, 'tsp', 'lime zest'], [200, 'ml', 'cream', 'whipped']],
    steps: [['Crust', 'Press crumbs and butter into the dish; bake at {{180C}} 8 minutes.', 8], ['Filling', 'Whisk condensed milk, yolks, lime juice and zest; pour in and bake 15 minutes.', 15], ['Chill', 'Chill 4 hours; top with cream.', 240]],
    tips: ['Fresh lime juice only.'], mistakes: ['Underbaked: runny.'], vars: ['Meringue topping.'], serve: 'Cold.' });

  X(US, { id: 'corn-chowder', name: 'Corn Chowder', local: 'Corn chowder', emoji: '🌽', course: 'soup', level: 1, prep: 15, cook: 30, serves: 4,
    taste: { sweet: 3, rich: 4, savory: 4 }, diet: ['vegetarian'], methods: ['simmer'], tags: ['comfort', 'summer'],
    desc: 'Creamy New England soup of sweet corn, potatoes, onion and thyme, with a smoky paprika finish.',
    story: 'New England’s chowders are usually clam; corn chowder is the summer farmhouse version.',
    equip: ['Pot', 'Blender'],
    ing: [[30, 'g', 'butter'], [1, '', 'onion'], [1, 'stalk', 'celery'], [2, 'clove', 'garlic'], [2, 'tbsp', 'flour'], [800, 'ml', 'vegetable stock'], [3, '', 'potatoes', 'diced'], [500, 'g', 'sweet corn kernels'], [200, 'ml', 'milk'], [100, 'ml', 'cream'], [2, 'sprig', 'thyme'], [1, 'tsp', 'salt'], [0.5, 'tsp', 'smoked paprika']],
    steps: [['Base', '[[sweat|Sweat]] onion, celery and garlic in butter; stir in flour.', 6], ['Simmer', 'Add stock, potatoes and thyme; [[simmer]] 15 minutes; add corn for 5 more.', 20], ['Finish', 'Blend a third; return with milk, cream and salt; top with paprika.', 4]],
    tips: ['Blend part for creaminess with texture.'], mistakes: ['Boiling after cream.'], vars: ['Add roasted poblano.'], serve: 'Oyster crackers.' });

  X(US, { id: 'red-beans-rice', name: 'Red Beans and Rice', local: 'Red beans and rice', emoji: '🫘', course: 'main', level: 1, prep: 15, cook: 60, serves: 4,
    taste: { savory: 4, smoky: 3, spicy: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['comfort', 'one-pot', 'budget'],
    desc: 'New Orleans creamy red beans with the “holy trinity” of onion, celery and pepper, smoked paprika and thyme, over rice.',
    story: 'Traditionally cooked on Mondays (wash day) in New Orleans; Louis Armstrong signed letters “red beans and ricely yours”.',
    equip: ['Pot'],
    ing: [[3, 'tbsp', 'oil'], [1, '', 'onion'], [2, 'stalk', 'celery'], [1, '', 'green bell pepper'], [4, 'clove', 'garlic'], [2, 'tsp', 'smoked paprika'], [1, 'tsp', 'dried thyme'], [0.5, 'tsp', 'cayenne'], [2, '', 'bay leaves'], [2, 'can', 'red kidney beans (rajma)', 'with liquid'], [500, 'ml', 'vegetable stock'], [1, 'tsp', 'salt'], [2, '', 'scallions'], [600, 'g', 'cooked rice']],
    steps: [['Trinity', 'Cook onion, celery and pepper until soft; add garlic and spices.', 8], ['Simmer', 'Add beans, stock, bay and salt; [[simmer]] 40 minutes, mashing some beans for creaminess.', 40], ['Serve', 'Spoon over rice with scallions.']],
    tips: ['Mash some beans against the pot.'], mistakes: ['Not long enough: thin.'], vars: ['With andouille (not vegetarian).'], serve: 'Hot sauce and cornbread.' });

  X(US, { id: 'hush-puppies', name: 'Hush Puppies', local: 'Hush puppies', emoji: '🟠', course: 'snack', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { savory: 4, sweet: 2 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['party', 'kids'],
    desc: 'Crisp Southern cornmeal fritters with onion and buttermilk, fluffy inside.',
    story: 'Legend says cooks threw them to dogs to “hush” them; served with fried fish in the South.',
    equip: ['Kadai'],
    ing: [[150, 'g', 'cornmeal'], [60, 'g', 'all-purpose flour'], [1, 'tsp', 'baking powder'], [1, 'tbsp', 'sugar'], [0.5, 'tsp', 'salt'], [1, '', 'egg'], [180, 'ml', 'buttermilk'], [3, '', 'scallions', 'chopped'], [1, 'l', 'oil', 'for frying']],
    steps: [['Batter', 'Mix dry ingredients; add egg, buttermilk and scallions; rest 10 minutes.', 10], ['Fry', 'Drop spoonfuls into hot oil and [[deep-fry]] until golden.', 10]],
    tips: ['Thick batter holds its shape.'], mistakes: ['Big ones: raw inside.'], vars: ['Add jalapeño or corn.'], serve: 'With honey butter.' });

  X(C('Canada', '🇨🇦', 'North America'), { id: 'bannock', name: 'Bannock', local: 'Bannock', emoji: '🍞', course: 'bread', level: 1, prep: 10, cook: 20, serves: 6,
    taste: { savory: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['quick', 'budget'],
    desc: 'Simple pan-fried quick bread of flour, baking powder and butter, cooked in a skillet or over a fire.',
    story: 'An important food of First Nations and Métis communities across Canada; also cooked on sticks over campfires.',
    equip: ['Cast-iron skillet'],
    ing: [[300, 'g', 'all-purpose flour'], [1, 'tbsp', 'baking powder'], [0.5, 'tsp', 'salt'], [40, 'g', 'butter', 'cold'], [200, 'ml', 'water or milk'], [2, 'tbsp', 'oil']],
    steps: [['Dough', 'Rub butter into flour, baking powder and salt; add water to a soft dough.'], ['Shape', 'Pat into a round 2 cm thick.'], ['Cook', 'Cook in oil over medium-low, covered, 8–10 minutes per side.', 20]],
    tips: ['Low heat so the inside cooks.'], mistakes: ['Kneading: tough bread.'], vars: ['Bannock on a stick.'], serve: 'Jam or soup.' });

  /* ======================= MEXICO & CENTRAL AMERICA ======================= */
  X(MX, { id: 'sopes', name: 'Sopes', local: 'Sopes', emoji: '🫓', course: 'main', level: 2, prep: 25, cook: 20, serves: 4,
    taste: { savory: 4, rich: 3, spicy: 2 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['saute'], tags: ['street-food', 'party'],
    desc: 'Thick masa cakes with pinched edges, topped with refried beans, lettuce, salsa, crema and crumbly cheese.',
    story: 'Mexican antojitos (little cravings) sold at markets; the pinched rim holds the toppings.',
    equip: ['Comal or pan'],
    ing: [[300, 'g', 'masa harina'], [380, 'ml', 'warm water'], [0.5, 'tsp', 'salt'], [2, 'tbsp', 'oil'], [300, 'g', 'refried beans'], [100, 'g', 'lettuce', 'shredded'], [150, 'g', 'salsa roja'], [4, 'tbsp', 'crema or sour cream'], [80, 'g', 'queso fresco or feta']],
    steps: [['Dough', 'Mix masa, water and salt to a soft dough.'], ['Shape and cook', 'Shape 8 thick discs; cook on a comal 2 minutes per side, then pinch up a rim while hot.', 15], ['Top', 'Fry the base lightly in oil; top with beans, lettuce, salsa, crema and cheese.', 5]],
    tips: ['Pinch the rim while hot.'], mistakes: ['Thin sopes crack.'], vars: ['Huaraches (oval).'], serve: 'Immediately.' });

  X(MX, { id: 'chiles-rellenos', name: 'Chiles Rellenos', local: 'Chiles rellenos', emoji: '🌶️', course: 'main', level: 3, prep: 30, cook: 30, serves: 4,
    taste: { smoky: 3, rich: 5, spicy: 2 }, diet: ['vegetarian', 'high-protein'], methods: ['saute', 'simmer'], tags: ['impress'],
    desc: 'Roasted poblano peppers stuffed with melting cheese, coated in a fluffy egg batter, fried and served in tomato broth.',
    story: 'From Puebla; the airy egg coating (capeado) is the hallmark.',
    equip: ['Pan', 'Pot'],
    ing: [[4, '', 'poblano peppers'], [250, 'g', 'oaxaca cheese or mozzarella'], [3, '', 'eggs', 'separated'], [40, 'g', 'flour'], [300, 'ml', 'oil', 'for frying'], '#Caldillo', [4, '', 'tomatoes'], [0.5, '', 'onion'], [1, 'clove', 'garlic'], [300, 'ml', 'vegetable stock'], [0.5, 'tsp', 'dried oregano'], [0.75, 'tsp', 'salt']],
    steps: [['Roast', '[[char|Char]] poblanos, sweat in a bag, peel; slit and seed.', 15], ['Stuff', 'Fill with cheese; [[dredge]] in flour.'], ['Batter and fry', 'Whip whites stiff, fold in yolks; dip chiles and fry until golden.', 10], ['Caldillo', 'Blend tomatoes, onion and garlic; simmer with stock, oregano and salt 10 minutes; serve chiles in it.', 10]],
    tips: ['Flour helps the batter stick.'], mistakes: ['Torn peppers: cheese leaks.'], vars: ['Stuffed with beans or potatoes.'], serve: 'Rice and tortillas.' });

  X(MX, { id: 'enfrijoladas', name: 'Enfrijoladas', local: 'Enfrijoladas', emoji: '🌮', course: 'main', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { savory: 4, rich: 4 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['weeknight', 'budget'],
    desc: 'Corn tortillas dipped in a smooth black bean sauce, folded and topped with crema, cheese and onion.',
    story: 'An everyday Oaxacan and Mexican home dish; the bean version of enchiladas.',
    equip: ['Blender', 'Pan'],
    ing: [[2, 'can', 'black beans', 'with liquid'], [1, '', 'chipotle in adobo'], [1, 'clove', 'garlic'], [250, 'ml', 'vegetable stock'], [0.5, 'tsp', 'salt'], [12, '', 'corn tortillas', 'warmed'], [4, 'tbsp', 'crema or sour cream'], [80, 'g', 'queso fresco or feta'], [0.5, '', 'red onion', 'thinly sliced'], [1, '', 'avocado']],
    steps: [['Sauce', 'Blend beans, chipotle, garlic, stock and salt; simmer 5 minutes until coating.', 6], ['Dip', 'Dip warm tortillas in the sauce, fold into quarters and plate.'], ['Top', 'Spoon more sauce; top with crema, cheese, onion and avocado.']],
    tips: ['Sauce like thick cream.'], mistakes: ['Cold tortillas crack.'], vars: ['Fill with scrambled egg.'], serve: 'Right away.' });

  X(MX, { id: 'champurrado', name: 'Champurrado', local: 'Champurrado', emoji: '🍫', course: 'drink', level: 1, prep: 5, cook: 15, serves: 4,
    taste: { sweet: 4, rich: 4, aromatic: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['winter', 'festive'],
    desc: 'Thick Mexican hot chocolate made with masa, piloncillo, cinnamon and milk.',
    story: 'An atole drunk on Día de Muertos and at Christmas posadas with tamales.',
    equip: ['Pot', 'Whisk'],
    ing: [[50, 'g', 'masa harina'], [250, 'ml', 'water'], [750, 'ml', 'milk'], [80, 'g', 'mexican chocolate or dark chocolate'], [80, 'g', 'piloncillo or brown sugar'], [1, 'piece', 'cinnamon stick']],
    steps: [['Masa', 'Whisk masa into water.'], ['Heat', 'Heat milk with cinnamon, chocolate and sugar until melted.', 5], ['Thicken', 'Whisk in the masa and simmer, whisking, until thick, 8 minutes.', 8]],
    tips: ['Use a molinillo or whisk for froth.'], mistakes: ['Lumps: strain if needed.'], vars: ['Atole de vainilla.'], serve: 'With tamales.' });

  X(MX, { id: 'arroz-con-leche', name: 'Arroz con Leche', local: 'Arroz con leche', emoji: '🍚', course: 'dessert', level: 1, prep: 5, cook: 40, serves: 6,
    taste: { sweet: 4, rich: 4, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['comfort'],
    desc: 'Latin American rice pudding with cinnamon stick, lime peel and condensed milk, dusted with cinnamon.',
    story: 'Made from Spain to Mexico to Peru; a grandmother’s dessert everywhere.',
    equip: ['Pot'],
    ing: [[150, 'g', 'short-grain rice'], [500, 'ml', 'water'], [1, 'piece', 'cinnamon stick'], [1, '', 'lime', 'peel strip'], [750, 'ml', 'whole milk'], [200, 'g', 'sweetened condensed milk'], [2, 'tbsp', 'raisins'], [1, 'tsp', 'ground cinnamon']],
    steps: [['Rice', 'Simmer rice with water, cinnamon and lime peel until absorbed, 15 minutes.', 15], ['Milk', 'Add milk and condensed milk; simmer, stirring, until creamy, 20 minutes; add raisins.', 20], ['Serve', 'Dust with cinnamon.']],
    tips: ['It thickens as it cools.'], mistakes: ['Not stirring: catches.'], vars: ['With coconut milk.'], serve: 'Warm or cold.' });

  X(MX, { id: 'capirotada', name: 'Capirotada', local: 'Capirotada', emoji: '🍞', course: 'dessert', level: 2, prep: 20, cook: 35, serves: 8,
    taste: { sweet: 4, rich: 4, aromatic: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['festive'],
    desc: 'Mexican Lenten bread pudding: toasted bread layered with piloncillo-cinnamon syrup, cheese, raisins, nuts and banana.',
    story: 'Eaten during Lent and Holy Week; the ingredients are said to symbolise the Passion.',
    equip: ['Baking dish', 'Pot'],
    ing: [[300, 'g', 'bolillo or baguette', 'sliced, toasted'], [200, 'g', 'piloncillo or brown sugar'], [500, 'ml', 'water'], [1, 'piece', 'cinnamon stick'], [3, '', 'whole cloves'], [60, 'g', 'butter'], [100, 'g', 'cheese', 'grated'], [60, 'g', 'raisins'], [60, 'g', 'peanuts or pecans'], [1, '', 'banana', 'sliced']],
    steps: [['Syrup', 'Simmer piloncillo, water, cinnamon and cloves 10 minutes.', 10], ['Layer', 'Butter the bread; layer with cheese, raisins, nuts and banana, pouring syrup over each layer.'], ['Bake', 'Cover and bake at {{180C}} 20 minutes; uncover 10.', 30]],
    tips: ['Toast bread well so it holds.'], mistakes: ['Soggy bread: too much syrup at once.'], vars: ['With sprinkles on top.'], serve: 'Warm.' });

  X(C('Guatemala', '🇬🇹', 'Latin America'), { id: 'rellenitos', name: 'Rellenitos de Plátano', local: 'Rellenitos', emoji: '🍌', course: 'dessert', level: 2, prep: 30, cook: 30, serves: 8,
    taste: { sweet: 4, rich: 3, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer', 'deep-fry'], tags: ['party'],
    desc: 'Mashed ripe plantain dough stuffed with sweetened black beans, chocolate and cinnamon, fried and dusted with sugar.',
    story: 'A Guatemalan dessert that surprises visitors: beans as a sweet filling.',
    equip: ['Pot', 'Kadai', 'Blender'],
    ing: [[4, '', 'ripe plantains', 'boiled, mashed'], [1, 'can', 'black beans', 'drained'], [60, 'g', 'sugar'], [30, 'g', 'dark chocolate'], [1, 'tsp', 'ground cinnamon'], [500, 'ml', 'oil', 'for frying'], [2, 'tbsp', 'sugar', 'to dust']],
    steps: [['Filling', 'Blend beans; cook with sugar, chocolate and cinnamon until thick paste.', 10], ['Shape', 'Flatten plantain dough in oiled hands, fill and close into ovals.'], ['Fry', 'Fry until golden; dust with sugar.', 15]],
    tips: ['Oiled hands stop sticking.'], mistakes: ['Wet plantain: they split.'], vars: ['Fill with sweet milk custard.'], serve: 'Warm.' });

  /* ======================= CARIBBEAN ======================= */
  X(C('Cuba', '🇨🇺', 'Caribbean'), { id: 'yuca-con-mojo', name: 'Yuca con Mojo', local: 'Yuca con mojo', emoji: '🥔', course: 'side', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { sour: 4, savory: 4, aromatic: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive'],
    desc: 'Boiled cassava drenched in a hot garlic, sour orange and olive oil sauce with onion.',
    story: 'Served at Cuban Christmas Eve (Nochebuena) dinners.',
    equip: ['Pot', 'Small pan'],
    ing: [[800, 'g', 'cassava (yuca)', 'peeled, chunks'], [1, 'tsp', 'salt'], [6, 'clove', 'garlic', 'minced'], [80, 'ml', 'olive oil'], [1, '', 'onion', 'thinly sliced'], [120, 'ml', 'orange juice', 'with 3 tbsp lime juice'], [0.5, 'tsp', 'dried oregano'], [0.5, 'tsp', 'ground cumin']],
    steps: [['Boil', '[[simmer|Boil]] cassava in salted water until tender and cracking, 20 minutes; remove the woody core.', 22], ['Mojo', 'Warm garlic and onion in oil until fragrant; add citrus, oregano and cumin.', 4], ['Serve', 'Pour hot mojo over the yuca.']],
    tips: ['Add cold water mid-boil to soften yuca.'], mistakes: ['Burnt garlic.'], vars: ['Fried yuca.'], serve: 'With black beans and rice.' });

  X(C('Puerto Rico', '🇵🇷', 'Caribbean'), { id: 'arroz-con-gandules', name: 'Arroz con Gandules', local: 'Arroz con gandules', emoji: '🍚', course: 'main', level: 2, prep: 15, cook: 35, serves: 6,
    taste: { savory: 4, aromatic: 4, herby: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'one-pot'],
    desc: 'Puerto Rican rice with pigeon peas, sofrito, olives, capers and annatto, with a crispy bottom (pegao).',
    story: 'Puerto Rico’s national dish, essential at Christmas; usually with pork, this version keeps the sofrito.',
    equip: ['Heavy pot (caldero)'],
    ing: [[3, 'tbsp', 'oil'], [1, 'tsp', 'annatto or paprika'], [4, 'tbsp', 'sofrito (cilantro, pepper, onion, garlic paste)'], [2, 'tbsp', 'tomato paste'], [2, 'tbsp', 'green olives'], [1, 'tbsp', 'capers'], [1, 'tsp', 'ground cumin'], [1, 'tsp', 'dried oregano'], [1, 'can', 'pigeon peas (gandules)', 'with liquid'], [400, 'g', 'medium-grain rice'], [700, 'ml', 'vegetable stock'], [1.25, 'tsp', 'salt']],
    steps: [['Sofrito', 'Fry annatto, sofrito, tomato paste, olives, capers and spices 4 minutes.', 4], ['Rice', 'Add peas, rice, stock and salt; boil until the liquid drops to the rice level.', 8], ['Cook', 'Stir once, cover with foil and lid; cook on low 25 minutes without stirring.', 25]],
    tips: ['Don’t stir: you want the pegao crust.'], mistakes: ['Lifting the lid: uneven rice.'], vars: ['With pork (not vegetarian).'], serve: 'Pickled red onions.' });

  X(C('Jamaica', '🇯🇲', 'Caribbean'), { id: 'jamaican-festival', name: 'Festival', local: 'Festival', emoji: '🥖', course: 'side', level: 1, prep: 10, cook: 15, serves: 6,
    taste: { sweet: 3, savory: 2 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['street-food', 'party'],
    desc: 'Sweet, crispy Jamaican fried cornmeal dumplings, long and golden.',
    story: 'Served at beach shacks beside jerk; Hellshire beach is famous for them.',
    equip: ['Kadai'],
    ing: [[200, 'g', 'all-purpose flour'], [100, 'g', 'cornmeal'], [2, 'tbsp', 'sugar'], [2, 'tsp', 'baking powder'], [0.5, 'tsp', 'salt'], [1, 'tsp', 'vanilla extract'], [180, 'ml', 'milk'], [1, 'l', 'oil', 'for frying']],
    steps: [['Dough', 'Mix to a soft dough.'], ['Shape', 'Roll into 10 cm cigars.'], ['Fry', '[[deep-fry|Fry]] until golden.', 12]],
    tips: ['Medium oil so the inside cooks.'], mistakes: ['Wet dough: oily.'], vars: ['Johnny cakes (plain fried dumplings).'], serve: 'With escovitch vegetables or jerk tofu.' });

  X(C('Jamaica', '🇯🇲', 'Caribbean'), { id: 'callaloo', name: 'Jamaican Callaloo', local: 'Callaloo', emoji: '🥬', course: 'side', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { savory: 4, spicy: 3, herby: 3 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['healthy', 'quick', 'brunch'],
    desc: 'Steamed amaranth greens with onion, tomato, garlic, thyme and scotch bonnet; a Jamaican breakfast side.',
    story: 'In Trinidad callaloo is a dasheen-leaf soup; in Jamaica it is these steamed greens.',
    equip: ['Pan with lid'],
    ing: [[2, 'tbsp', 'oil'], [1, '', 'onion'], [2, 'clove', 'garlic'], [1, '', 'tomato'], [2, 'sprig', 'thyme'], [0.5, '', 'scotch bonnet'], [500, 'g', 'amaranth greens or spinach', 'chopped'], [60, 'ml', 'water'], [0.5, 'tsp', 'salt']],
    steps: [['Base', 'Fry onion, garlic, tomato, thyme and chili.', 4], ['Steam', 'Add greens, water and salt; cover and steam 8 minutes.', 8]],
    tips: ['Use stems too, chopped small.'], mistakes: ['Too much water: soggy.'], vars: ['Trinidad callaloo soup.'], serve: 'Fried dumplings and boiled green banana.' });

  X(C('Haiti', '🇭🇹', 'Caribbean'), { id: 'diri-djon-djon', name: 'Diri Djon Djon', local: 'Diri djon djon', emoji: '🍄', course: 'main', level: 2, prep: 15, cook: 35, serves: 4,
    taste: { umami: 5, savory: 4, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive'],
    desc: 'Haitian black rice coloured and flavoured by tiny dried djon djon mushrooms, with lima beans, garlic and thyme.',
    story: 'Djon djon mushrooms grow only in northern Haiti; the rice is a celebration dish.',
    equip: ['Pot'],
    ing: [[30, 'g', 'dried djon djon or porcini mushrooms'], [700, 'ml', 'hot water'], [2, 'tbsp', 'oil'], [1, '', 'onion'], [3, 'clove', 'garlic'], [2, 'sprig', 'thyme'], [1, '', 'scotch bonnet', 'whole'], [150, 'g', 'butter beans', 'frozen or canned'], [350, 'g', 'long-grain rice'], [1, 'tsp', 'salt']],
    steps: [['Soak', 'Soak mushrooms in hot water 20 minutes; strain and keep the black liquid.', 20], ['Base', 'Fry onion, garlic and thyme; add beans and rice and fry 2 minutes.', 5], ['Cook', 'Add mushroom liquid, chili and salt; cover and cook on low 20 minutes.', 20]],
    tips: ['Strain the soaking liquid well.'], mistakes: ['Bursting the chili: very hot.'], vars: ['With shrimp (not vegetarian).'], serve: 'Pikliz.' });

  /* ======================= SOUTH AMERICA ======================= */
  X(BR, { id: 'farofa', name: 'Farofa', local: 'Farofa', emoji: '🟨', course: 'side', level: 1, prep: 5, cook: 10, serves: 6,
    taste: { savory: 4, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['quick', 'festive'],
    desc: 'Toasted cassava flour fried in butter with onion and garlic: crunchy, sandy and served with beans and stews.',
    story: 'On every Brazilian table, sprinkled over feijoada and barbecue.',
    equip: ['Pan'],
    ing: [[50, 'g', 'butter'], [1, '', 'onion', 'finely chopped'], [2, 'clove', 'garlic'], [200, 'g', 'cassava flour (farinha de mandioca)'], [0.5, 'tsp', 'salt'], [2, 'tbsp', 'parsley']],
    steps: [['Onion', 'Cook onion and garlic in butter until golden.', 5], ['Toast', 'Add cassava flour and salt; toast, stirring, until golden and fragrant.', 6], ['Finish', 'Add parsley.']],
    tips: ['Stir constantly: it browns fast.'], mistakes: ['Burnt flour: bitter.'], vars: ['With banana or egg.'], serve: 'With beans.' });

  X(BR, { id: 'tapioca-crepe', name: 'Tapioca (Brazilian Crepe)', local: 'Tapioca', emoji: '⚪', course: 'breakfast', level: 1, prep: 10, cook: 10, serves: 2,
    taste: { savory: 3, sweet: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['quick', 'brunch', 'street-food'],
    desc: 'Chewy crepe made only from hydrated cassava starch that melts together in a dry pan, filled with cheese or coconut.',
    story: 'From Brazil’s northeast; street stalls in Olinda fill them with dozens of combinations.',
    equip: ['Non-stick pan', 'Sieve'],
    ing: [[150, 'g', 'hydrated tapioca starch (goma)'], [80, 'g', 'mozzarella', 'grated'], [2, 'tbsp', 'grated coconut'], [1, 'tbsp', 'butter']],
    steps: [['Sieve', 'Sieve the damp starch into a thin even layer in a hot dry pan.'], ['Set', 'Cook 1–2 minutes until it holds together.', 2], ['Fill', 'Add cheese and coconut, fold, and brush with butter.', 2]],
    tips: ['Don’t press the starch: just sieve.'], mistakes: ['Thick layer: rubbery.'], vars: ['Sweet with condensed milk and coconut.'], serve: 'Hot.' });

  X(BR, { id: 'quindim', name: 'Quindim', local: 'Quindim', emoji: '🟡', course: 'dessert', level: 2, prep: 15, cook: 40, rest: 120, serves: 8,
    taste: { sweet: 5, rich: 5 }, diet: ['vegetarian', 'gluten-free'], methods: ['bake'], tags: ['festive', 'make-ahead'],
    desc: 'Glossy bright-yellow custards of egg yolks, sugar and coconut, baked in a water bath; a coconut base forms underneath.',
    story: 'From Bahia, where Portuguese convent egg-yolk sweets met African cooks and coconut.',
    equip: ['Small moulds', 'Water bath'],
    ing: [[10, '', 'egg yolks'], [200, 'g', 'sugar'], [80, 'g', 'grated coconut'], [30, 'g', 'butter', 'melted'], [3, 'tbsp', 'coconut milk']],
    steps: [['Mix', 'Mix yolks and sugar gently (no froth); add coconut, butter and coconut milk; rest 30 minutes.', 30], ['Bake', 'Fill buttered, sugared moulds; bake in a water bath at {{180C}} 35–40 minutes.', 40], ['Chill', 'Chill and unmould.', 120]],
    tips: ['Strain yolks for a glossy top.'], mistakes: ['Whisking air in: holes.'], vars: ['One large quindão.'], serve: 'Cold.' });

  X(BR, { id: 'bolo-de-cenoura', name: 'Bolo de Cenoura', local: 'Bolo de cenoura', emoji: '🥕', course: 'dessert', level: 1, prep: 15, cook: 40, serves: 12,
    taste: { sweet: 4, rich: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['kids', 'party'],
    desc: 'Brazilian orange carrot sponge blended smooth, topped with a shiny chocolate brigadeiro glaze.',
    story: 'An afternoon coffee cake in every Brazilian home.',
    equip: ['Blender', 'Baking tin'],
    ing: [[3, '', 'carrots', 'chopped'], [3, '', 'eggs'], [200, 'ml', 'oil'], [250, 'g', 'sugar'], [250, 'g', 'all-purpose flour'], [1, 'tbsp', 'baking powder'], '#Glaze', [30, 'g', 'butter'], [3, 'tbsp', 'cocoa powder'], [100, 'g', 'sugar'], [100, 'ml', 'milk']],
    steps: [['Blend', 'Blend carrots, eggs, oil and sugar until smooth.'], ['Bake', 'Fold into flour and baking powder; bake at {{180C}} 40 minutes.', 40], ['Glaze', 'Boil glaze ingredients until slightly thick; pour over the warm cake.', 5]],
    tips: ['Blend the carrots very smooth.'], mistakes: ['Overmixing the flour: dense.'], vars: ['Orange glaze.'], serve: 'With coffee.' });

  X(C('Argentina', '🇦🇷', 'Latin America'), { id: 'locro', name: 'Locro (Vegetarian)', local: 'Locro', emoji: '🥣', course: 'main', level: 2, prep: 20, cook: 90, rest: 480, serves: 6,
    taste: { savory: 4, rich: 4, smoky: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'winter', 'one-pot'],
    desc: 'Thick Andean stew of white hominy corn, white beans and squash, topped with a red paprika-scallion oil (quiquirimichi).',
    story: 'Argentina’s national-holiday stew, eaten on 25 May and 9 July; usually with pork, the corn-bean base is vegetarian.',
    equip: ['Large pot'],
    ing: [[250, 'g', 'dried white hominy (maíz blanco)', 'soaked overnight'], [150, 'g', 'dried white beans', 'soaked overnight'], [2, 'l', 'water'], [600, 'g', 'butternut squash', 'cubed'], [2, '', 'sweet potatoes', 'cubed'], [1, '', 'onion'], [1, 'tsp', 'ground cumin'], [1.5, 'tsp', 'salt'], '#Quiquirimichi', [4, 'tbsp', 'oil'], [1, 'tbsp', 'sweet paprika'], [1, 'tsp', 'chili flakes'], [4, '', 'scallions']],
    steps: [['Simmer', '[[simmer|Simmer]] hominy and beans in water 60 minutes.', 60], ['Vegetables', 'Add squash, sweet potato, onion, cumin and salt; cook until the squash melts, 30 minutes.', 30], ['Oil', 'Warm oil with paprika, chili and scallions; spoon over each bowl.', 2]],
    tips: ['Stir often: it gets thick.'], mistakes: ['Burnt bottom.'], vars: ['With pork and chorizo (not vegetarian).'], serve: 'Hot, with the red oil.' });

  X(PE, { id: 'ocopa', name: 'Ocopa Arequipeña', local: 'Ocopa', emoji: '🥔', course: 'starter', level: 1, prep: 20, cook: 25, serves: 4,
    taste: { herby: 5, rich: 4, spicy: 2 }, diet: ['vegetarian'], methods: ['saute', 'no-cook'], tags: ['party'],
    desc: 'Boiled potatoes in a green sauce of huacatay (Peruvian black mint), roasted ají, peanuts, fresh cheese and crackers.',
    story: 'From Arequipa; the cousin of papa a la huancaína with a herbal twist.',
    equip: ['Blender', 'Pan'],
    ing: [[600, 'g', 'yellow potatoes', 'boiled, sliced'], [2, 'tbsp', 'oil'], [1, '', 'onion'], [2, 'clove', 'garlic'], [2, '', 'ají amarillo or yellow chilies'], [1, 'handful', 'huacatay or mint and basil'], [50, 'g', 'roasted peanuts'], [100, 'g', 'queso fresco or feta'], [4, '', 'crackers'], [150, 'ml', 'milk'], [0.5, 'tsp', 'salt'], [2, '', 'eggs', 'hard-boiled'], [8, '', 'black olives']],
    steps: [['Roast', 'Fry onion, garlic and chilies until soft.', 8], ['Blend', 'Blend with herbs, peanuts, cheese, crackers, milk and salt until smooth and thick.'], ['Serve', 'Pour over potatoes; top with egg and olives.']],
    tips: ['Thick sauce coats better.'], mistakes: ['Too much mint: tastes like toothpaste.'], vars: ['Papa a la huancaína.'], serve: 'Cold.' });

  X(PE, { id: 'solterito', name: 'Solterito', local: 'Solterito', emoji: '🥗', course: 'salad', level: 1, prep: 15, cook: 10, serves: 4,
    taste: { sour: 3, savory: 4, herby: 3 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer', 'no-cook'], tags: ['summer', 'healthy'],
    desc: 'Arequipa salad of fava beans, Andean corn, fresh cheese, tomato, red onion, olives and rocoto with lime.',
    story: '“Little bachelor”: so simple even a single man could make it.',
    equip: ['Bowl'],
    ing: [[250, 'g', 'fava beans', 'blanched, peeled'], [250, 'g', 'sweet corn kernels', 'cooked'], [150, 'g', 'queso fresco or feta', 'cubed'], [2, '', 'tomatoes', 'diced'], [0.5, '', 'red onion', 'diced'], [8, '', 'black olives'], [1, '', 'rocoto or red chili', 'minced'], [3, 'tbsp', 'olive oil'], [2, '', 'limes', 'juice'], [0.5, 'tsp', 'salt'], [2, 'tbsp', 'parsley']],
    steps: [['Blanch', '[[blanch|Blanch]] the fava beans and peel.', 5], ['Toss', 'Toss everything with lime, oil and salt.']],
    tips: ['Peel the favas for a tender bite.'], mistakes: ['Dressing too early: soggy cheese.'], vars: ['Add avocado.'], serve: 'Cold.' });

  X(PE, { id: 'picarones', name: 'Picarones', local: 'Picarones', emoji: '🍩', course: 'dessert', level: 3, prep: 30, cook: 25, rest: 120, serves: 6,
    taste: { sweet: 4, aromatic: 4 }, diet: ['vegan'], methods: ['deep-fry'], tags: ['street-food', 'festive'],
    desc: 'Peruvian ring doughnuts of sweet potato and squash, fried crisp and drizzled with chancaca (unrefined cane) syrup.',
    story: 'Sold on Lima’s streets since colonial times, especially during the October procession of the Señor de los Milagros.',
    equip: ['Kadai'],
    ing: [[200, 'g', 'sweet potato', 'boiled, mashed'], [200, 'g', 'butternut squash', 'boiled, mashed'], [7, 'g', 'instant yeast'], [1, 'tbsp', 'sugar'], [1, 'tsp', 'aniseed', 'boiled in water'], [300, 'g', 'all-purpose flour'], [0.25, 'tsp', 'salt'], [1, 'l', 'oil', 'for frying'], '#Syrup', [200, 'g', 'chancaca or jaggery'], [250, 'ml', 'water'], [1, 'piece', 'cinnamon stick'], [4, '', 'whole cloves'], [1, '', 'orange', 'peel']],
    steps: [['Dough', 'Mix mashes, yeast, sugar, anise water, flour and salt to a sticky dough; [[proof]] 2 hours.', 120], ['Syrup', 'Simmer the syrup ingredients until thick.', 15], ['Fry', 'With wet hands, pull rings into hot oil; fry until golden; drizzle with syrup.', 20]],
    tips: ['Wet hands and practice the ring.'], mistakes: ['Stiff dough: heavy picarones.'], vars: ['Picarones de quinoa.'], serve: 'Hot, with syrup.' });

  X(PE, { id: 'suspiro-limeno', name: 'Suspiro Limeño', local: 'Suspiro a la limeña', emoji: '🍮', course: 'dessert', level: 2, prep: 20, cook: 40, rest: 120, serves: 6,
    taste: { sweet: 5, rich: 5 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['impress'],
    desc: 'Lima’s “sigh”: a creamy dulce de leche custard topped with port-wine meringue and cinnamon.',
    story: 'Named by poet José Gálvez, who said it was “soft and sweet like the sigh of a woman”.',
    equip: ['Pot', 'Mixer'],
    ing: [[400, 'g', 'sweetened condensed milk'], [400, 'ml', 'evaporated milk'], [4, '', 'egg yolks'], [1, 'tsp', 'vanilla extract'], '#Meringue', [3, '', 'egg whites'], [150, 'g', 'sugar'], [80, 'ml', 'port wine or grape juice'], [1, 'tsp', 'ground cinnamon']],
    steps: [['Manjar', 'Cook condensed and evaporated milk, stirring, until thick and caramel-coloured, 30 minutes; off the heat beat in yolks and vanilla.', 30], ['Meringue', 'Boil sugar and port to a syrup; pour into stiff whites while whisking until glossy.', 8], ['Assemble', 'Spoon custard into glasses, top with meringue and cinnamon; chill.', 120]],
    tips: ['Keep stirring the milk.'], mistakes: ['Grainy custard: too high heat.'], vars: ['Suspiro de lúcuma.'], serve: 'Cold.' });

  X(C('Bolivia', '🇧🇴', 'Latin America'), { id: 'api-con-pastel', name: 'Api con Pastel', local: 'Api con pastel', emoji: '🟣', course: 'breakfast', level: 2, prep: 20, cook: 30, serves: 4,
    taste: { sweet: 4, aromatic: 4, rich: 3 }, diet: ['vegetarian'], methods: ['simmer', 'deep-fry'], tags: ['winter', 'street-food'],
    desc: 'Hot, thick purple corn drink with cinnamon and cloves, served with a puffy fried cheese pastry dusted with sugar.',
    story: 'A cold-morning breakfast in La Paz and the Andes, sold from market stalls.',
    equip: ['Pot', 'Kadai'],
    ing: [[100, 'g', 'purple corn flour (api)'], [1, 'l', 'water'], [1, 'piece', 'cinnamon stick'], [4, '', 'whole cloves'], [100, 'g', 'sugar'], '#Pastel', [250, 'g', 'all-purpose flour'], [1, 'tsp', 'baking powder'], [0.5, 'tsp', 'salt'], [40, 'g', 'butter'], [120, 'ml', 'water'], [150, 'g', 'queso fresco or mozzarella'], [700, 'ml', 'oil', 'for frying'], [2, 'tbsp', 'powdered sugar']],
    steps: [['Api', 'Whisk corn flour into water with spices; simmer, stirring, until thick, 20 minutes; sweeten.', 20], ['Pastel', 'Make a dough, roll thin rounds, fill with cheese, fold and seal; fry until puffed.', 15], ['Serve', 'Dust pastels with sugar; serve with hot api.']],
    tips: ['Stir the api constantly.'], mistakes: ['Thick dough: no puff.'], vars: ['White corn api.'], serve: 'Hot.' });

  X(C('Bolivia', '🇧🇴', 'Latin America'), { id: 'sopa-de-mani', name: 'Sopa de Maní', local: 'Sopa de maní', emoji: '🥜', course: 'soup', level: 1, prep: 15, cook: 35, serves: 4,
    taste: { rich: 4, savory: 4, herby: 2 }, diet: ['vegan', 'high-protein'], methods: ['simmer'], tags: ['comfort', 'winter'],
    desc: 'Creamy Bolivian peanut soup with potatoes, peas, carrots and macaroni, topped with fries and parsley.',
    story: 'From Cochabamba; usually made with a meat broth, here with vegetable stock.',
    equip: ['Pot', 'Blender'],
    ing: [[150, 'g', 'raw peanuts'], [1.2, 'l', 'vegetable stock'], [2, 'tbsp', 'oil'], [1, '', 'onion'], [2, 'clove', 'garlic'], [1, '', 'carrot', 'diced'], [2, '', 'potatoes', 'diced'], [80, 'g', 'green peas'], [60, 'g', 'small macaroni'], [1, 'tsp', 'dried oregano'], [1, 'tsp', 'salt'], [100, 'g', 'french fries', 'to top'], [2, 'tbsp', 'parsley']],
    steps: [['Peanuts', 'Blend peanuts with 500 ml stock until very smooth.'], ['Simmer', 'Fry onion and garlic; add carrot, potatoes, peanut milk, remaining stock, oregano and salt; [[simmer]] 20 minutes, stirring.', 22], ['Finish', 'Add peas and macaroni for 10 minutes; top with fries and parsley.', 10]],
    tips: ['Stir often: peanut catches.'], mistakes: ['Grainy soup: blend longer.'], vars: ['Without pasta.'], serve: 'With llajua (chili sauce).' });

  X(C('Colombia', '🇨🇴', 'Latin America'), { id: 'bunuelos', name: 'Buñuelos Colombianos', local: 'Buñuelos', emoji: '🟡', course: 'snack', level: 2, prep: 15, cook: 15, serves: 6,
    taste: { savory: 4, rich: 4, sweet: 1 }, diet: ['vegetarian', 'gluten-free'], methods: ['deep-fry'], tags: ['festive', 'brunch'],
    desc: 'Round, golden cheese fritters of cornstarch, tapioca and salty white cheese that puff and roll in the oil.',
    story: 'Eaten at Colombian Christmas with natilla custard.',
    equip: ['Kadai'],
    ing: [[250, 'g', 'feta or costeño cheese', 'finely crumbled'], [60, 'g', 'cornstarch'], [30, 'g', 'tapioca starch'], [1, 'tbsp', 'sugar'], [1, 'tsp', 'baking powder'], [1, '', 'egg'], [2, 'tbsp', 'milk'], [1, 'l', 'oil', 'for frying']],
    steps: [['Dough', 'Mix cheese, starches, sugar and baking powder; add egg and milk to a smooth dough.'], ['Shape', 'Roll 3 cm balls with no cracks.'], ['Fry', 'Fry in medium oil; they sink, rise and roll over by themselves; fry until golden.', 12]],
    tips: ['Oil not too hot: they should turn themselves.'], mistakes: ['Cracks: they burst.'], vars: ['Pandebono (baked).'], serve: 'With natilla or hot chocolate.' });
})();
