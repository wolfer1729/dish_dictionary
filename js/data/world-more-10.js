/* World batch 10 (veg-first): the Caribbean and the Pacific. Original recipes written for Dish Dictionary. */
'use strict';
(function () {
  const C = (country, flag, region, extra) => Object.assign({ country, flag, region }, extra || {});
  const X = (base, d) => DD.add(Object.assign({}, base, d));
  const TT = C('Trinidad and Tobago', '🇹🇹', 'Caribbean'), JM = C('Jamaica', '🇯🇲', 'Caribbean'), AU = C('Australia', '🇦🇺', 'Oceania'), NZ = C('New Zealand', '🇳🇿', 'Oceania');
  const HI = C('Hawaiʻi (USA)', '🌺', 'Oceania'), FJ = C('Fiji', '🇫🇯', 'Oceania');

  /* ======================= TRINIDAD & TOBAGO ======================= */
  X(TT, { id: 'aloo-pie', name: 'Aloo Pie', local: 'Aloo pie', emoji: '🥟', course: 'snack', level: 2, prep: 30, cook: 20, rest: 30, serves: 6,
    taste: { savory: 4, spicy: 3 }, diet: ['vegan'], methods: ['deep-fry'], tags: ['street-food'],
    desc: 'Soft fried turnovers stuffed with spiced mashed potato and roasted cumin (geera), split and filled with channa and pepper sauce.',
    story: 'Brought by Indian indentured workers; sold beside doubles in Trinidad.',
    equip: ['Kadai'],
    ing: [[300, 'g', 'all-purpose flour'], [1, 'tsp', 'baking powder'], [0.5, 'tsp', 'salt'], [180, 'ml', 'water'], [4, '', 'potatoes', 'boiled, mashed'], [3, 'clove', 'garlic', 'grated'], [1, 'tsp', 'roasted cumin (geera)'], [2, 'tbsp', 'chadon beni or cilantro'], [0.75, 'tsp', 'salt'], [1, 'l', 'oil', 'for frying'], [4, 'tbsp', 'tamarind sauce']],
    steps: [['Dough', 'Knead soft; rest 30 minutes.', 30], ['Fill', 'Mix potatoes with garlic, geera, herbs and salt; fill flat rounds and fold into half moons.'], ['Fry', '[[deep-fry|Fry]] until puffed and golden.', 15]],
    tips: ['Thin dough puffs best.'], mistakes: ['Holes: oil gets in.'], vars: ['Saheena (spinach fritters).'], serve: 'Tamarind sauce and pepper sauce.' });

  X(TT, { id: 'pholourie', name: 'Pholourie', local: 'Pholourie', emoji: '🟡', course: 'snack', level: 1, prep: 15, cook: 15, rest: 60, serves: 6,
    taste: { savory: 4, spicy: 2 }, diet: ['vegan'], methods: ['deep-fry'], tags: ['street-food', 'party'],
    desc: 'Soft, puffy split-pea flour fritters with turmeric and garlic, dunked in sweet-sour tamarind or mango chutney.',
    story: 'Sold in paper bags at Trinidad roti shops; descended from Indian pakoras.',
    equip: ['Kadai'],
    ing: [[200, 'g', 'split pea flour or besan'], [100, 'g', 'all-purpose flour'], [1, 'tsp', 'instant yeast'], [1, 'tsp', 'ground turmeric'], [3, 'clove', 'garlic'], [1, 'tsp', 'salt'], [300, 'ml', 'warm water'], [1, 'l', 'oil', 'for frying'], [4, 'tbsp', 'tamarind chutney']],
    steps: [['Batter', 'Mix to a thick batter; rest 1 hour until bubbly.', 60], ['Fry', 'Drop small balls into hot oil and fry until puffed.', 12]],
    tips: ['Wet the spoon.'], mistakes: ['Big balls: raw inside.'], vars: ['Add chopped herbs.'], serve: 'Tamarind chutney.' });

  X(TT, { id: 'dhalpuri-roti', name: 'Dhalpuri Roti with Curry Channa & Aloo', local: 'Dhalpuri', emoji: '🫓', course: 'main', level: 3, prep: 40, cook: 45, rest: 30, serves: 4,
    taste: { savory: 4, spicy: 3, aromatic: 4 }, diet: ['vegan', 'high-protein'], methods: ['saute', 'simmer'], tags: ['street-food', 'comfort'],
    desc: 'Trinidad’s soft flatbread layered with ground spiced split peas, wrapped around curried chickpeas and potatoes.',
    story: 'Trinidad’s favourite lunch from roti shops; a cousin of Mauritius dholl puri and Bihari dal pitha.',
    equip: ['Tawa', 'Pot'],
    ing: [[150, 'g', 'yellow split peas', 'boiled firm, ground dry'], [1, 'tsp', 'roasted cumin (geera)'], [2, 'clove', 'garlic'], [0.5, 'tsp', 'salt'], [300, 'g', 'all-purpose flour'], [1, 'tsp', 'baking powder'], [180, 'ml', 'water'], [3, 'tbsp', 'oil'], '#Curry', [2, 'tbsp', 'oil'], [2, 'tbsp', 'trini curry powder'], [1, '', 'onion'], [3, 'clove', 'garlic'], [1, 'can', 'chickpeas'], [2, '', 'potatoes', 'cubed'], [400, 'ml', 'water'], [1, 'tsp', 'salt']],
    steps: [['Curry', 'Fry curry powder in oil to a paste (chunkay); add onion, garlic, chickpeas, potatoes, water and salt; [[simmer]] until thick, 25 minutes.', 30], ['Dough', 'Knead flour, baking powder and water; rest 30 minutes.', 30], ['Roti', 'Stuff balls with the dry split pea mix, roll thin and cook on a tawa with oil.', 15], ['Wrap', 'Wrap the curry in the roti.']],
    tips: ['Ground split peas must be dry.'], mistakes: ['Wet filling tears the roti.'], vars: ['Paratha “buss-up-shut”.'], serve: 'Pepper sauce and mango chutney.' });

  X(TT, { id: 'trini-kurma', name: 'Trinidad Kurma', local: 'Kurma', emoji: '🟫', course: 'dessert', level: 2, prep: 20, cook: 25, serves: 8,
    taste: { sweet: 4, aromatic: 3 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['festive'],
    desc: 'Crunchy fried dough sticks flavoured with ginger, coated in hardened sugar syrup; made for Diwali and Eid in Trinidad.',
    story: 'Not the Indian curry: Trinidad’s kurma comes from the Indian shakkarpara.',
    equip: ['Kadai'],
    ing: [[300, 'g', 'all-purpose flour'], [60, 'g', 'butter'], [0.5, 'tsp', 'ground ginger'], [0.5, 'tsp', 'cinnamon'], [150, 'ml', 'evaporated milk'], [1, 'l', 'oil', 'for frying'], [200, 'g', 'sugar'], [80, 'ml', 'water'], [1, 'tsp', 'grated ginger']],
    steps: [['Dough', 'Rub butter into flour and spices; add milk to a firm dough.'], ['Fry', 'Roll, cut into sticks and fry until golden.', 15], ['Coat', 'Boil sugar, water and ginger to a thick syrup; toss the kurma until the sugar turns white and dry.', 8]],
    tips: ['Keep tossing as the syrup crystallises.'], mistakes: ['Thin syrup: sticky.'], vars: ['Soft kurma.'], serve: 'In jars.' });

  X(TT, { id: 'coconut-bake', name: 'Coconut Bake', local: 'Coconut bake', emoji: '🥥', course: 'bread', level: 1, prep: 15, cook: 30, rest: 20, serves: 6,
    taste: { savory: 3, sweet: 2, rich: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['brunch'],
    desc: 'Dense Trinidad flatbread made with grated coconut, butter and baking powder, baked and split warm.',
    story: 'A Tobago Sunday breakfast with tomato choka or buljol (salt fish).',
    equip: ['Baking tray'],
    ing: [[400, 'g', 'all-purpose flour'], [1, 'tbsp', 'baking powder'], [1, 'tbsp', 'sugar'], [0.75, 'tsp', 'salt'], [60, 'g', 'butter'], [100, 'g', 'grated coconut'], [220, 'ml', 'coconut milk']],
    steps: [['Dough', 'Rub butter into the dry ingredients; add coconut and milk; knead lightly; rest 20 minutes.', 20], ['Bake', 'Shape into a round, prick, and bake at {{190C}} 30 minutes.', 30]],
    tips: ['Split while warm.'], mistakes: ['Overkneading: tough.'], vars: ['Fried bake.'], serve: 'Tomato choka.' });

  /* ======================= JAMAICA & ISLANDS ======================= */
  X(JM, { id: 'gizzada', name: 'Gizzada', local: 'Gizzada', emoji: '🥧', course: 'dessert', level: 2, prep: 25, cook: 25, serves: 8,
    taste: { sweet: 4, aromatic: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['party'],
    desc: 'Little Jamaican tarts with a pinched crust filled with grated coconut cooked with brown sugar, nutmeg and ginger.',
    story: 'Also called “pinch-me-round” after the pleated crust.',
    equip: ['Baking tray'],
    ing: [[250, 'g', 'shortcrust pastry'], [150, 'g', 'grated coconut'], [120, 'g', 'brown sugar'], [60, 'ml', 'water'], [0.25, 'tsp', 'nutmeg'], [0.5, 'tsp', 'ground ginger'], [1, 'tsp', 'vanilla extract'], [15, 'g', 'butter']],
    steps: [['Filling', 'Cook coconut, sugar, water, spices, vanilla and butter until sticky.', 10], ['Shape', 'Cut pastry rounds, pinch up a fluted edge and fill.'], ['Bake', 'Bake at {{180C}} 20 minutes.', 20]],
    tips: ['Pinch the edges high.'], mistakes: ['Wet filling: soggy base.'], vars: ['Grenada coconut tarts.'], serve: 'Room temperature.' });

  X(JM, { id: 'bammy', name: 'Bammy', local: 'Bammy', emoji: '⚪', course: 'side', level: 2, prep: 20, cook: 20, serves: 4,
    taste: { savory: 3, rich: 3 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['budget'],
    desc: 'Jamaican cassava flatbreads, soaked in coconut milk and pan-fried golden.',
    story: 'Made by the Taíno long before Columbus; eaten with escovitch fish in Jamaica.',
    equip: ['Grater', 'Cloth', 'Frying pan'],
    ing: [[600, 'g', 'cassava (yuca)', 'peeled, finely grated'], [0.5, 'tsp', 'salt'], [200, 'ml', 'coconut milk'], [3, 'tbsp', 'oil']],
    steps: [['Squeeze', 'Squeeze the grated cassava very dry in a cloth; mix with salt.'], ['Cook', 'Press into thick rounds in a dry pan; cook until set, 5 minutes per side.', 10], ['Soak and fry', 'Soak in coconut milk 5 minutes; fry in oil until golden.', 8]],
    tips: ['Squeeze hard: the juice is bitter.'], mistakes: ['Wet cassava: won’t set.'], vars: ['Store-bought bammies.'], serve: 'With escovitch vegetables.' });

  X(JM, { id: 'ital-stew', name: 'Ital Stew', local: 'Ital stew', emoji: '🥘', course: 'main', level: 1, prep: 20, cook: 35, serves: 4,
    taste: { savory: 4, rich: 4, aromatic: 4, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['healthy', 'one-pot'],
    desc: 'Rastafarian vegetable stew of pumpkin, sweet potato, carrots, okra and red beans in coconut milk with thyme and scotch bonnet.',
    story: 'Ital food (from “vital”) is the plant-based diet of Rastafari; traditionally no salt.',
    equip: ['Pot'],
    ing: [[2, 'tbsp', 'coconut oil'], [1, '', 'onion'], [3, 'clove', 'garlic'], [1, 'tbsp', 'ginger'], [3, 'sprig', 'thyme'], [4, '', 'allspice or seven-spice'], [1, '', 'scotch bonnet', 'whole'], [300, 'g', 'pumpkin', 'cubed'], [1, '', 'sweet potato', 'cubed'], [2, '', 'carrots'], [100, 'g', 'okra'], [1, 'can', 'red kidney beans (rajma)'], [400, 'ml', 'coconut milk'], [300, 'ml', 'water'], [3, '', 'scallions'], [0.5, 'tsp', 'salt', 'optional']],
    steps: [['Base', 'Cook onion, garlic, ginger, thyme and allspice in coconut oil.', 5], ['Stew', 'Add vegetables, beans, coconut milk, water and the whole chili; [[simmer]] until the pumpkin melts, 25 minutes.', 25], ['Finish', 'Add scallions; remove the chili.']],
    tips: ['Let some pumpkin break down to thicken.'], mistakes: ['Bursting the chili.'], vars: ['With spinners (flour dumplings).'], serve: 'Rice or on its own.' });

  X(JM, { id: 'sweet-potato-pudding', name: 'Jamaican Sweet Potato Pudding', local: 'Sweet potato pudding', emoji: '🍠', course: 'dessert', level: 2, prep: 20, cook: 75, rest: 60, serves: 10,
    taste: { sweet: 4, rich: 4, aromatic: 5 }, diet: ['vegan'], methods: ['bake'], tags: ['festive', 'make-ahead'],
    desc: 'Dense, spiced pudding of grated sweet potato with coconut milk, nutmeg and vanilla, with a soft custardy top (“hell a top, hell a bottom, hallelujah in the middle”).',
    story: 'Once baked in a pot with coals above and below, hence the saying.',
    equip: ['Baking tin', 'Grater'],
    ing: [[800, 'g', 'sweet potato', 'finely grated'], [120, 'g', 'all-purpose flour'], [200, 'g', 'brown sugar'], [600, 'ml', 'coconut milk'], [1, 'tsp', 'nutmeg'], [1, 'tsp', 'cinnamon'], [1, 'tsp', 'ground ginger'], [2, 'tsp', 'vanilla extract'], [60, 'g', 'raisins'], [0.25, 'tsp', 'salt']],
    steps: [['Mix', 'Blend sweet potato with coconut milk; mix in everything else.'], ['Bake', 'Pour into a greased tin and bake at {{180C}} 75 minutes until set with a soft top.', 75], ['Cool', 'Cool 1 hour before slicing.', 60]],
    tips: ['Fine grating gives a smooth pudding.'], mistakes: ['Cutting hot: it’s still setting.'], vars: ['Cornmeal pudding.'], serve: 'Room temperature.' });

  X(C('Bahamas', '🇧🇸', 'Caribbean'), { id: 'johnnycake', name: 'Bahamian Johnnycake', local: 'Johnnycake', emoji: '🍞', course: 'bread', level: 1, prep: 10, cook: 30, serves: 8,
    taste: { sweet: 2, rich: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['budget'],
    desc: 'Slightly sweet, buttery Bahamian pan bread, baked thick and served in squares.',
    story: 'Once “journey cake”, baked by fishermen for long trips.',
    equip: ['Baking tin'],
    ing: [[400, 'g', 'all-purpose flour'], [1, 'tbsp', 'baking powder'], [60, 'g', 'sugar'], [0.5, 'tsp', 'salt'], [100, 'g', 'butter', 'cold'], [250, 'ml', 'milk']],
    steps: [['Dough', 'Rub butter into dry ingredients; add milk to a soft dough.'], ['Bake', 'Press into a tin and bake at {{190C}} 30 minutes.', 30]],
    tips: ['Don’t overmix.'], mistakes: ['Dense johnnycake: too much kneading.'], vars: ['Fried johnny cakes (Jamaica).'], serve: 'With stews or butter.' });

  X(C('Dominican Republic', '🇩🇴', 'Caribbean'), { id: 'habichuelas-con-dulce', name: 'Habichuelas con Dulce', local: 'Habichuelas con dulce', emoji: '🫘', course: 'dessert', level: 2, prep: 15, cook: 40, serves: 8,
    taste: { sweet: 4, rich: 4, aromatic: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive'],
    desc: 'Dominican sweet cream of red beans with coconut milk, sweet potato, raisins and warm spices, served cold.',
    story: 'Made for Holy Week and shared with neighbours; sweet beans surprise many visitors.',
    equip: ['Pot', 'Blender'],
    ing: [[2, 'can', 'red kidney beans (rajma)', 'drained'], [800, 'ml', 'water'], [400, 'ml', 'coconut milk'], [400, 'ml', 'evaporated milk'], [200, 'g', 'sugar'], [1, '', 'sweet potato', 'small cubes'], [60, 'g', 'raisins'], [1, 'piece', 'cinnamon stick'], [5, '', 'whole cloves'], [0.25, 'tsp', 'nutmeg'], [1, 'tsp', 'vanilla extract'], [0.25, 'tsp', 'salt']],
    steps: [['Blend', 'Blend beans with water and strain.'], ['Simmer', 'Simmer with coconut milk, evaporated milk, sugar, spices and sweet potato until the potato is tender, 25 minutes.', 25], ['Finish', 'Add raisins and vanilla; chill.', 5]],
    tips: ['Strain for a silky cream.'], mistakes: ['Not stirring: catches.'], vars: ['Topped with milk cookies.'], serve: 'Cold.' });

  X(C('Puerto Rico', '🇵🇷', 'Caribbean'), { id: 'tembleque', name: 'Tembleque', local: 'Tembleque', emoji: '🥥', course: 'dessert', level: 1, prep: 5, cook: 10, rest: 240, serves: 6,
    taste: { sweet: 3, rich: 4, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'make-ahead'],
    desc: 'Puerto Rican coconut milk pudding that wobbles (tiembla), set in a mould and dusted with cinnamon.',
    story: 'A Christmas dessert in Puerto Rico; its name comes from the wobble.',
    equip: ['Pot', 'Mould'],
    ing: [[800, 'ml', 'coconut milk'], [100, 'g', 'sugar'], [60, 'g', 'cornstarch'], [0.25, 'tsp', 'salt'], [1, 'tsp', 'vanilla extract'], [1, 'tsp', 'ground cinnamon']],
    steps: [['Cook', 'Whisk coconut milk, sugar, cornstarch and salt cold; cook, stirring, until very thick.', 8], ['Set', 'Add vanilla, pour into a wet mould and chill 4 hours.', 240], ['Serve', 'Unmould and dust with cinnamon.']],
    tips: ['Whisk constantly.'], mistakes: ['Undercooked starch: won’t set.'], vars: ['Haupia (Hawaii).'], serve: 'Cold.' });

  X(C('Cuba', '🇨🇺', 'Caribbean'), { id: 'boniatillo', name: 'Boniatillo', local: 'Boniatillo', emoji: '🍠', course: 'dessert', level: 1, prep: 15, cook: 35, serves: 6,
    taste: { sweet: 4, aromatic: 4, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['comfort'],
    desc: 'Cuban sweet potato pudding cooked with lemon peel and cinnamon, finished with egg yolks.',
    story: 'An old-fashioned Cuban dessert made with boniato (white sweet potato).',
    equip: ['Pot'],
    ing: [[600, 'g', 'sweet potato', 'boiled, mashed'], [200, 'g', 'sugar'], [250, 'ml', 'water'], [1, '', 'lemon', 'peel'], [1, 'piece', 'cinnamon stick'], [3, '', 'egg yolks'], [1, 'tsp', 'vanilla extract'], [1, 'tsp', 'ground cinnamon']],
    steps: [['Syrup', 'Simmer sugar, water, lemon peel and cinnamon 5 minutes.', 5], ['Cook', 'Add sweet potato and cook, stirring, until thick, 20 minutes.', 20], ['Yolks', 'Off the heat beat in yolks and vanilla; cook 2 minutes more; dust with cinnamon.', 3]],
    tips: ['Temper the yolks with a little hot mash.'], mistakes: ['Scrambled yolks.'], vars: ['With a splash of dry wine.'], serve: 'Warm or cold.' });

  X(C('Curaçao', '🇨🇼', 'Caribbean'), { id: 'funchi', name: 'Funchi', local: 'Funchi', emoji: '🟨', course: 'side', level: 1, prep: 5, cook: 20, serves: 4,
    taste: { savory: 3, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['budget'],
    desc: 'Curaçao’s firm cornmeal polenta with butter, stirred until it pulls away and shaped into a dome or slices.',
    story: 'The daily starch of the ABC islands, eaten with stews and soups.',
    equip: ['Heavy pot', 'Wooden spoon (lele)'],
    ing: [[250, 'g', 'cornmeal'], [750, 'ml', 'water'], [1, 'tsp', 'salt'], [30, 'g', 'butter']],
    steps: [['Cook', 'Stir cornmeal into salted water with butter; cook on low, stirring hard, until it pulls from the pot, 15 minutes.', 15], ['Shape', 'Turn into a wet bowl to shape a dome.']],
    tips: ['Stir vigorously.'], mistakes: ['Lumps: add slowly.'], vars: ['Fried funchi slices.'], serve: 'With bean stew.' });

  X(C('Barbados', '🇧🇧', 'Caribbean'), { id: 'cou-cou', name: 'Cou-Cou', local: 'Cou-cou', emoji: '🟨', course: 'side', level: 2, prep: 10, cook: 25, serves: 4,
    taste: { savory: 4, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['comfort'],
    desc: 'Barbados’ national side of cornmeal cooked with okra and butter, turned with a cou-cou stick until smooth.',
    story: 'Served with flying fish on Fridays; a West African-rooted dish like Nigerian amala.',
    equip: ['Heavy pot', 'Wooden stick'],
    ing: [[8, '', 'okra', 'thinly sliced'], [800, 'ml', 'water'], [1, 'tsp', 'salt'], [200, 'g', 'cornmeal', 'soaked in 250 ml water'], [40, 'g', 'butter']],
    steps: [['Okra', 'Boil okra in salted water 8 minutes.', 8], ['Cornmeal', 'Remove half the okra water; stir in the soaked cornmeal, adding water back, until smooth and stiff, 12 minutes.', 12], ['Finish', 'Beat in butter and shape in a buttered bowl.']],
    tips: ['Keep turning to avoid lumps.'], mistakes: ['Too dry: add okra water.'], vars: ['Breadfruit cou-cou.'], serve: 'With a vegetable stew.' });

  X(C('Haiti', '🇭🇹', 'Caribbean'), { id: 'pikliz', name: 'Pikliz', local: 'Pikliz', emoji: '🌶️', course: 'sauce', level: 1, prep: 20, cook: 0, rest: 1440, serves: 16,
    taste: { spicy: 5, sour: 5 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['make-ahead'],
    desc: 'Fiery Haitian pickle of shredded cabbage, carrots, onion and scotch bonnets in vinegar and lime.',
    story: 'On every Haitian table to cut through fried food like plantains.',
    equip: ['Jar'],
    ing: [[300, 'g', 'cabbage', 'shredded'], [2, '', 'carrots', 'julienned'], [1, '', 'onion', 'sliced'], [4, '', 'scotch bonnets', 'sliced'], [4, 'clove', 'garlic'], [6, '', 'whole cloves'], [1, 'tsp', 'salt'], [400, 'ml', 'white vinegar'], [1, '', 'lime', 'juice']],
    steps: [['Pack', 'Pack vegetables, chilies, garlic and cloves into a jar.'], ['Pickle', 'Pour over vinegar with salt and lime; rest at least 1 day.', 1440]],
    tips: ['Wear gloves for the chilies.'], mistakes: ['Not covered by vinegar: spoils.'], vars: ['Milder with fewer chilies.'], serve: 'With fried plantain.' });

  /* ======================= AUSTRALIA & NEW ZEALAND ======================= */
  X(AU, { id: 'fairy-bread', name: 'Fairy Bread', local: 'Fairy bread', emoji: '🌈', course: 'snack', level: 1, prep: 5, cook: 0, serves: 4,
    taste: { sweet: 4, rich: 2 }, diet: ['vegetarian'], methods: ['no-cook'], tags: ['kids', 'party', 'quick'],
    desc: 'White bread spread with butter and covered in rainbow sprinkles, cut into triangles: every Australian kids’ party.',
    story: 'Printed in Australian papers since the 1920s.',
    equip: ['Knife'],
    ing: [[8, 'slice', 'white bread'], [50, 'g', 'butter', 'soft'], [60, 'g', 'rainbow sprinkles (hundreds and thousands)']],
    steps: [['Spread', 'Butter the bread to the edges.'], ['Sprinkle', 'Press into sprinkles; cut into triangles.']],
    tips: ['Butter to the edges.'], mistakes: ['Cold butter tears the bread.'], vars: ['Chocolate sprinkles (Dutch hagelslag).'], serve: 'Immediately.' });

  X(AU, { id: 'avocado-smash', name: 'Smashed Avo on Toast', local: 'Smashed avo', emoji: '🥑', course: 'breakfast', level: 1, prep: 10, cook: 5, serves: 2,
    taste: { rich: 4, sour: 2, herby: 3 }, diet: ['vegetarian'], methods: ['no-cook'], tags: ['quick', 'brunch', 'healthy'],
    desc: 'Sourdough toast piled with smashed avocado, lemon, feta, chili and herbs: the Melbourne café breakfast.',
    story: 'Melbourne and Sydney cafés made it famous worldwide in the 2010s.',
    equip: ['Toaster', 'Bowl'],
    ing: [[2, 'slice', 'sourdough bread'], [2, '', 'avocados'], [1, '', 'lemon', 'juice'], [50, 'g', 'feta', 'crumbled'], [0.5, 'tsp', 'chili flakes'], [1, 'tbsp', 'mint or basil'], [1, 'tbsp', 'olive oil'], [0.25, 'tsp', 'flaky sea salt']],
    steps: [['Smash', 'Smash avocado with lemon and salt.'], ['Assemble', 'Pile on toast; top with feta, chili, herbs and oil.']],
    tips: ['Leave it chunky.'], mistakes: ['Unripe avocado.'], vars: ['With a poached egg.'], serve: 'Immediately.' });

  X(AU, { id: 'pumpkin-scones', name: 'Pumpkin Scones', local: 'Pumpkin scones', emoji: '🎃', course: 'bread', level: 1, prep: 15, cook: 15, serves: 10,
    taste: { sweet: 2, rich: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['brunch'],
    desc: 'Soft, golden Queensland scones made with mashed pumpkin, served warm with butter.',
    story: 'Made famous by Lady Florence Bjelke-Petersen, wife of a Queensland premier.',
    equip: ['Baking tray', 'Cutter'],
    ing: [[300, 'g', 'self-raising flour'], [30, 'g', 'butter'], [2, 'tbsp', 'sugar'], [200, 'g', 'pumpkin', 'cooked, mashed, cooled'], [1, '', 'egg'], [60, 'ml', 'milk'], [0.25, 'tsp', 'salt']],
    steps: [['Mix', 'Cream butter and sugar; add pumpkin and egg; fold in flour, salt and milk to a soft dough.'], ['Cut', 'Pat 3 cm thick and cut rounds.'], ['Bake', 'Bake at {{220C}} 12–15 minutes.', 15]],
    tips: ['Dry, cool pumpkin.'], mistakes: ['Wet mash: heavy scones.'], vars: ['Date scones.'], serve: 'Butter.' });

  X(NZ, { id: 'pikelets', name: 'Pikelets', local: 'Pikelets', emoji: '🥞', course: 'dessert', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { sweet: 3, rich: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['kids', 'quick'],
    desc: 'Small, thick New Zealand pancakes served at afternoon tea with butter and jam or whipped cream.',
    story: 'A Kiwi and Australian lunchbox and morning-tea classic.',
    equip: ['Frying pan'],
    ing: [[150, 'g', 'self-raising flour'], [2, 'tbsp', 'sugar'], [1, '', 'egg'], [180, 'ml', 'milk'], [1, 'tbsp', 'golden syrup'], [20, 'g', 'butter']],
    steps: [['Batter', 'Whisk everything to a thick batter.'], ['Cook', 'Drop tablespoons into a buttered pan; flip when bubbles appear.', 12]],
    tips: ['Thick batter: tall pikelets.'], mistakes: ['High heat: burnt.'], vars: ['Pumpkin pikelets.'], serve: 'Butter and jam.' });

  X(NZ, { id: 'hokey-pokey', name: 'Hokey Pokey', local: 'Hokey pokey', emoji: '🍯', course: 'dessert', level: 2, prep: 5, cook: 10, rest: 60, serves: 10,
    taste: { sweet: 5 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['kids', 'make-ahead'],
    desc: 'Crunchy golden honeycomb toffee foamed with baking soda; New Zealand loves it in vanilla ice cream.',
    story: 'Hokey pokey ice cream is New Zealand’s second favourite flavour after vanilla.',
    equip: ['Pot', 'Lined tray'],
    ing: [[200, 'g', 'sugar'], [5, 'tbsp', 'golden syrup'], [2, 'tsp', 'baking soda']],
    steps: [['Caramel', 'Heat sugar and syrup, stirring until dissolved, then boil without stirring until amber, 5 minutes.', 6], ['Foam', 'Off the heat whisk in baking soda fast; pour onto the tray.'], ['Set', 'Cool 1 hour; break into pieces.', 60]],
    tips: ['Don’t spread it: keep the bubbles.'], mistakes: ['Pale caramel: bitter soda taste.'], vars: ['Dipped in chocolate (Crunchie-style).'], serve: 'In ice cream.' });

  X(NZ, { id: 'afghan-biscuits', name: 'Afghan Biscuits', local: 'Afghans', emoji: '🍪', course: 'dessert', level: 1, prep: 20, cook: 15, rest: 30, serves: 20,
    taste: { sweet: 4, rich: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['kids', 'make-ahead'],
    desc: 'Crunchy chocolate-cornflake biscuits topped with chocolate icing and a walnut half; a New Zealand classic.',
    story: 'In the Edmonds Cookery Book since the 1930s; nobody knows why they are called Afghans.',
    equip: ['Baking tray'],
    ing: [[200, 'g', 'butter', 'soft'], [80, 'g', 'sugar'], [180, 'g', 'all-purpose flour'], [25, 'g', 'cocoa powder'], [50, 'g', 'cornflakes'], '#Icing', [150, 'g', 'powdered sugar'], [2, 'tbsp', 'cocoa powder'], [2, 'tbsp', 'hot water'], [20, '', 'walnut halves']],
    steps: [['Dough', 'Cream butter and sugar; mix in flour and cocoa, then cornflakes.'], ['Bake', 'Roll balls, flatten and bake at {{180C}} 15 minutes.', 15], ['Ice', 'Ice when cool and top with a walnut.', 30]],
    tips: ['Fold cornflakes in last so they stay crunchy.'], mistakes: ['Icing hot biscuits: it melts.'], vars: ['Without walnuts.'], serve: 'With tea.' });

  X(NZ, { id: 'rewena-bread', name: 'Rēwena Bread', local: 'Rēwena parāoa', emoji: '🍞', course: 'bread', level: 3, prep: 20, cook: 45, rest: 2880, serves: 10,
    taste: { sour: 2, savory: 3 }, diet: ['vegan'], methods: ['bake'], tags: ['festive'],
    desc: 'Māori sourdough bread raised with a fermented potato starter (bug), dense and slightly tangy.',
    story: 'Māori cooks used potatoes brought by Europeans to make their own fermented starter.',
    equip: ['Jar', 'Loaf tin'],
    ing: [[200, 'g', 'potatoes', 'boiled, mashed with cooking water'], [1, 'tsp', 'sugar'], [150, 'g', 'all-purpose flour', 'for the bug'], [450, 'g', 'all-purpose flour'], [1, 'tsp', 'baking soda'], [1, 'tsp', 'salt'], [150, 'ml', 'warm water']],
    steps: [['Bug', 'Mix warm potato, its water, sugar and 150 g flour; [[ferment]] 2 days until bubbly and sour.', 2880], ['Dough', 'Add flour, soda, salt and water; knead 5 minutes; shape and rise 1 hour.', 65], ['Bake', 'Bake at {{200C}} 45 minutes.', 45]],
    tips: ['Keep some bug to start the next loaf.'], mistakes: ['Inactive bug: flat bread.'], vars: ['Use yeast to speed it up.'], serve: 'Butter and golden syrup.' });

  X(NZ, { id: 'louise-slice', name: 'Louise Slice', local: 'Louise cake', emoji: '🍰', course: 'dessert', level: 2, prep: 20, cook: 30, serves: 16,
    taste: { sweet: 4, rich: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['party', 'make-ahead'],
    desc: 'New Zealand traybake of shortbread base, raspberry jam and a chewy coconut meringue top.',
    story: 'A church-fair and tearoom staple in New Zealand.',
    equip: ['Square tin'],
    ing: [[125, 'g', 'butter', 'soft'], [60, 'g', 'sugar'], [2, '', 'egg yolks'], [200, 'g', 'all-purpose flour'], [1, 'tsp', 'baking powder'], [150, 'g', 'raspberry jam'], [2, '', 'egg whites'], [100, 'g', 'sugar'], [80, 'g', 'desiccated coconut']],
    steps: [['Base', 'Cream butter, sugar and yolks; add flour and baking powder; press into the tin and bake at {{180C}} 12 minutes.', 12], ['Jam', 'Spread jam over.'], ['Top', 'Whip whites with sugar; fold in coconut; spread over and bake 18 minutes until golden.', 18]],
    tips: ['Cool before cutting.'], mistakes: ['Overbaked meringue: dry.'], vars: ['Lemon curd instead of jam.'], serve: 'With tea.' });

  X(NZ, { id: 'cheese-rolls', name: 'Southland Cheese Rolls', local: 'Southland sushi', emoji: '🧀', course: 'snack', level: 1, prep: 15, cook: 15, serves: 6,
    taste: { savory: 4, rich: 5 }, diet: ['vegetarian'], methods: ['bake'], tags: ['party', 'kids'],
    desc: 'White bread rolled around a cheesy evaporated-milk and onion filling, toasted with butter: “Southland sushi”.',
    story: 'A beloved snack from the far south of New Zealand’s South Island.',
    equip: ['Saucepan', 'Baking tray'],
    ing: [[200, 'g', 'cheddar', 'grated'], [170, 'ml', 'evaporated milk'], [2, 'tbsp', 'dried onion soup mix or 1 grated onion'], [1, 'tsp', 'mustard'], [12, 'slice', 'white bread', 'crusts off'], [40, 'g', 'butter', 'soft']],
    steps: [['Filling', 'Melt cheese with milk, onion and mustard until thick; cool.', 6], ['Roll', 'Spread filling on bread and roll up; butter the tops.'], ['Bake', 'Bake at {{200C}} 10 minutes until golden.', 10]],
    tips: ['Thick filling won’t ooze.'], mistakes: ['Soft bread: they unroll.'], vars: ['Add chives.'], serve: 'Hot.' });

  /* ======================= PACIFIC ISLANDS ======================= */
  X(C('Samoa', '🇼🇸', 'Oceania'), { id: 'palusami', name: 'Palusami', local: 'Palusami', emoji: '🍃', course: 'side', level: 2, prep: 20, cook: 45, serves: 4,
    taste: { rich: 5, savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['bake'], tags: ['festive'],
    desc: 'Young taro leaves wrapped around thick coconut cream and onion, baked until meltingly soft.',
    story: 'Cooked in the Samoan umu (earth oven) for Sunday to’ona’i.',
    equip: ['Ramekins or foil', 'Oven'],
    ing: [[24, '', 'young taro leaves or spinach leaves'], [400, 'ml', 'coconut cream'], [1, '', 'onion', 'finely chopped'], [0.75, 'tsp', 'salt']],
    steps: [['Wrap', 'Stack leaves into cups, fill with coconut cream, onion and salt, and fold closed in foil.'], ['Bake', 'Bake at {{180C}} 45 minutes until silky.', 45]],
    tips: ['Taro leaves must be well cooked to avoid itchiness.'], mistakes: ['Undercooked taro leaves: scratchy throat.'], vars: ['Lu (Tonga) usually with meat.'], serve: 'With taro or breadfruit.' });

  X(FJ, { id: 'rourou', name: 'Rourou', local: 'Rourou', emoji: '🥬', course: 'side', level: 1, prep: 10, cook: 30, serves: 4,
    taste: { rich: 4, savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['comfort'],
    desc: 'Fijian taro leaves simmered in coconut milk with onion, garlic and chili until soft and creamy.',
    story: 'An everyday Fijian side, eaten with cassava and taro.',
    equip: ['Pot'],
    ing: [[400, 'g', 'taro leaves or spinach', 'chopped'], [1, 'tbsp', 'oil'], [1, '', 'onion'], [2, 'clove', 'garlic'], [1, '', 'chili'], [400, 'ml', 'coconut milk'], [0.75, 'tsp', 'salt']],
    steps: [['Base', 'Soften onion, garlic and chili in oil.', 4], ['Simmer', 'Add leaves and coconut milk; [[simmer]] 25 minutes (or 8 for spinach).', 25], ['Season', 'Add salt.']],
    tips: ['Taro leaves need long cooking.'], mistakes: ['Undercooked taro leaves itch.'], vars: ['Palusami (Samoa).'], serve: 'Cassava or rice.' });

  X(FJ, { id: 'vakalavalava', name: 'Vakalavalava (Cassava Pudding)', local: 'Vakalavalava', emoji: '🍃', course: 'dessert', level: 1, prep: 20, cook: 60, serves: 8,
    taste: { sweet: 4, rich: 3 }, diet: ['vegan', 'gluten-free'], methods: ['bake'], tags: ['festive'],
    desc: 'Fijian pudding of grated cassava, coconut milk and sugar, wrapped in banana leaf and baked.',
    story: 'Made for celebrations in Fiji and cooked in the lovo (earth oven).',
    equip: ['Baking dish', 'Banana leaves or foil'],
    ing: [[600, 'g', 'cassava (yuca)', 'finely grated'], [300, 'ml', 'coconut milk'], [150, 'g', 'sugar'], [1, '', 'ripe banana', 'mashed'], [0.25, 'tsp', 'salt']],
    steps: [['Mix', 'Mix everything into a thick batter.'], ['Bake', 'Pour into a leaf-lined dish, cover and bake at {{180C}} 60 minutes until firm and golden.', 60]],
    tips: ['Grate the cassava finely.'], mistakes: ['Underbaked: gummy.'], vars: ['Filipino cassava cake.'], serve: 'Sliced, warm.' });

  X(HI, { id: 'malasadas', name: 'Malasadas', local: 'Malasadas', emoji: '🍩', course: 'dessert', level: 2, prep: 20, cook: 20, rest: 120, serves: 12,
    taste: { sweet: 4, rich: 4 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['party', 'kids'],
    desc: 'Pillowy hole-less doughnuts rolled in sugar, brought to Hawaiʻi by Portuguese workers from Madeira.',
    story: 'Eaten on Malasada Day (Shrove Tuesday) in Hawaiʻi; Leonard’s Bakery made them famous.',
    equip: ['Kadai'],
    ing: [[450, 'g', 'all-purpose flour'], [7, 'g', 'instant yeast'], [60, 'g', 'sugar'], [0.5, 'tsp', 'salt'], [3, '', 'eggs'], [200, 'ml', 'evaporated milk'], [40, 'g', 'butter', 'melted'], [1, 'l', 'oil', 'for frying'], [100, 'g', 'sugar', 'to coat']],
    steps: [['Dough', 'Mix to a soft, sticky dough; [[proof]] 1.5 hours.', 90], ['Shape', 'Cut squares or balls; rise 30 minutes.', 30], ['Fry', '[[deep-fry|Fry]] until golden; roll in sugar.', 15]],
    tips: ['Sticky dough = light malasadas.'], mistakes: ['Hot oil: raw middles.'], vars: ['Filled with haupia cream.'], serve: 'Warm.' });

  X(HI, { id: 'butter-mochi', name: 'Butter Mochi', local: 'Butter mochi', emoji: '🟨', course: 'dessert', level: 1, prep: 10, cook: 60, serves: 16,
    taste: { sweet: 4, rich: 5 }, diet: ['vegetarian', 'gluten-free'], methods: ['bake'], tags: ['party', 'make-ahead'],
    desc: 'Chewy, custardy Hawaiian cake of glutinous rice flour, coconut milk and butter with golden crisp edges.',
    story: 'A Hawaiian potluck classic mixing Japanese mochi with Western cake.',
    equip: ['Baking tin'],
    ing: [[450, 'g', 'glutinous rice flour'], [300, 'g', 'sugar'], [2, 'tsp', 'baking powder'], [400, 'ml', 'coconut milk'], [350, 'ml', 'evaporated milk'], [4, '', 'eggs'], [100, 'g', 'butter', 'melted'], [1, 'tsp', 'vanilla extract']],
    steps: [['Mix', 'Whisk wet ingredients; whisk in dry until smooth.'], ['Bake', 'Bake at {{175C}} 60 minutes until golden.', 60], ['Cool', 'Cool completely and cut with a plastic knife.']],
    tips: ['Cool fully for clean slices.'], mistakes: ['Cutting warm: gummy.'], vars: ['Chocolate butter mochi.'], serve: 'Room temperature.' });

  X(C('French Polynesia', '🇵🇫', 'Oceania'), { id: 'firi-firi', name: 'Firi Firi', local: 'Firi firi', emoji: '♾️', course: 'breakfast', level: 2, prep: 20, cook: 20, rest: 90, serves: 8,
    taste: { sweet: 3, rich: 3 }, diet: ['vegan'], methods: ['deep-fry'], tags: ['brunch', 'festive'],
    desc: 'Tahitian figure-eight doughnuts made with coconut milk, eaten on Sunday mornings with coffee.',
    story: 'A Sunday breakfast across French Polynesia after church.',
    equip: ['Kadai'],
    ing: [[400, 'g', 'all-purpose flour'], [7, 'g', 'instant yeast'], [80, 'g', 'sugar'], [250, 'ml', 'coconut milk', 'warm'], [0.25, 'tsp', 'salt'], [1, 'l', 'oil', 'for frying']],
    steps: [['Dough', '[[knead|Knead]] and [[proof]] 1.5 hours.', 90], ['Shape', 'Roll ropes and twist into figure-eights.'], ['Fry', '[[deep-fry|Fry]] until golden.', 15]],
    tips: ['Fry a few at a time.'], mistakes: ['Thin ropes: hard.'], vars: ['Dusted with sugar.'], serve: 'With coffee.' });
})();
