/* India batch 8: everyday classics still missing (curries, breads, snacks, drinks and sweets).
   Original recipes written for Dish Dictionary. */
'use strict';
(function () {
  const X = (area, styles, d) => DD.add(Object.assign({ country: 'India', flag: '🇮🇳', region: 'South Asia', area, styles }, d));
  const H = ['home-style'], R = ['restaurant'], DH = ['dhaba'], SW = ['sweets'], ST = ['chaat'], TA = ['tandoori'], MU = ['mughlai'];

  /* ---------- Curries ---------- */
  X('Delhi', ST, { id: 'chole-kulche', name: 'Chole Kulche', local: 'छोले कुलचे', emoji: '🫓', course: 'main', level: 2, prep: 20, cook: 40, rest: 480, serves: 4,
    taste: { sour: 3, spicy: 3, savory: 4 }, diet: ['vegetarian', 'high-protein'], methods: ['simmer', 'saute'], tags: ['street-food'],
    desc: 'Delhi’s street plate of tangy white-chickpea matar-style chole with soft, buttered kulchas, onion and lemon.',
    story: 'Sold from carts across Delhi; the chole are lighter and more sour than Punjabi chole.',
    equip: ['Pressure cooker', 'Tawa'],
    ing: [[250, 'g', 'dried white peas or chickpeas', 'soaked overnight'], [1, 'tsp', 'salt'], [1, 'tsp', 'ground turmeric'], [2, 'tsp', 'chole masala'], [1, 'tsp', 'roasted cumin powder'], [1, 'tsp', 'dried mango powder (amchur)'], [1, 'tbsp', 'tamarind chutney'], [1, '', 'onion', 'finely chopped'], [2, '', 'green chilies'], [1, 'tbsp', 'ginger', 'julienned'], [2, 'tbsp', 'cilantro'], [1, '', 'lemon'], [8, '', 'kulchas', 'store-bought or homemade'], [30, 'g', 'butter']],
    steps: [['Cook', 'Pressure-cook peas with salt and turmeric until very soft.', 25], ['Season', 'Mash a little; stir in masalas, amchur and tamarind; simmer 10 minutes.', 10], ['Serve', 'Top with onion, chilies, ginger, cilantro and lemon; serve with kulchas toasted in butter.', 5]],
    tips: ['Let it be loose and tangy.'], mistakes: ['Undercooked peas.'], vars: ['Amritsari chole kulche.'], serve: 'With pickled onions.' });

  X('Punjab', R, { id: 'paneer-lababdar', name: 'Paneer Lababdar', local: 'पनीर लबाबदार', emoji: '🧀', course: 'main', level: 2, prep: 15, cook: 30, serves: 4,
    taste: { rich: 5, savory: 4, sweet: 2, spicy: 2 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['party', 'impress'],
    desc: 'Restaurant-style paneer in a rich onion-tomato-cashew gravy with grated paneer stirred through for extra body.',
    story: 'A North Indian restaurant favourite; grated paneer in the gravy is the giveaway.',
    equip: ['Pan', 'Blender'],
    ing: [[300, 'g', 'paneer', 'cubed'], [50, 'g', 'paneer', 'grated'], [2, 'tbsp', 'butter'], [1, 'tbsp', 'oil'], [2, '', 'onions', 'chopped'], [1, 'tbsp', 'ginger-garlic paste'], [4, '', 'tomatoes', 'pureed'], [15, '', 'cashews', 'soaked'], [1, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'ground coriander'], [1, 'tsp', 'garam masala'], [1, 'tbsp', 'kasuri methi'], [100, 'ml', 'cream'], [1, 'tsp', 'sugar'], [1, 'tsp', 'salt']],
    steps: [['Masala', 'Fry onions until golden; add ginger-garlic, tomato puree and spices; [[bhuna|bhuno]] until oil separates.', 15], ['Gravy', 'Blend in cashews with a little water; simmer 5 minutes.', 6], ['Finish', 'Add grated paneer, paneer cubes, cream, sugar, salt and kasuri methi; simmer 3 minutes.', 4]],
    tips: ['Crush kasuri methi between your palms.'], mistakes: ['Boiling paneer: rubbery.'], vars: ['Paneer butter masala.'], serve: 'Naan or jeera rice.' });

  X('Lucknow', MU, { id: 'paneer-pasanda', name: 'Paneer Pasanda', local: 'पनीर पसंदा', emoji: '🥪', course: 'main', level: 3, prep: 25, cook: 30, serves: 4,
    taste: { rich: 5, sweet: 2, aromatic: 4 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['saute', 'simmer'], tags: ['party', 'impress'],
    desc: 'Paneer “sandwiches” stuffed with nuts and herbs, lightly fried and simmered in a creamy Mughlai gravy.',
    story: 'Pasanda means “favourite”; once a meat dish of Mughal kitchens, now a paneer party classic.',
    equip: ['Pan', 'Blender'],
    ing: [[400, 'g', 'paneer', 'block, cut into 1 cm slices'], [40, 'g', 'mixed nuts', 'chopped'], [2, 'tbsp', 'cilantro and mint'], [1, '', 'green chili'], [2, 'tbsp', 'cornstarch', 'as a thin batter'], [4, 'tbsp', 'oil'], [2, '', 'onions', 'boiled, pasted'], [1, 'tbsp', 'ginger-garlic paste'], [20, '', 'cashews', 'pasted'], [150, 'g', 'yogurt'], [1, 'tsp', 'garam masala'], [0.5, 'tsp', 'cardamom powder'], [100, 'ml', 'cream'], [1, 'tsp', 'salt'], [1, 'pinch', 'saffron']],
    steps: [['Stuff', 'Sandwich paneer slices with nuts, herbs and chili; cut triangles.'], ['Fry', 'Dip in cornstarch batter and [[shallow-fry|fry]] until golden.', 8], ['Gravy', 'Cook onion paste and ginger-garlic, then cashew paste and yogurt; add spices, cream, saffron and salt; simmer 8 minutes; add paneer.', 18]],
    tips: ['Thin batter: light coating.'], mistakes: ['Overcooking: paneer turns tough.'], vars: ['Shahi paneer.'], serve: 'Naan or sheermal.' });

  X('Punjab', DH, { id: 'paneer-do-pyaza', name: 'Paneer Do Pyaza', local: 'पनीर दो प्याज़ा', emoji: '🧅', course: 'main', level: 2, prep: 15, cook: 25, serves: 4,
    taste: { savory: 4, sweet: 2, spicy: 3 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['saute'], tags: ['weeknight'],
    desc: 'Paneer in a thick tomato masala with onions used twice: cooked into the gravy and added as crisp petals.',
    story: '“Do pyaza” means double onions; legend links it to Mullah Do-Piyaza at Akbar’s court.',
    equip: ['Kadai'],
    ing: [[300, 'g', 'paneer', 'cubed'], [3, 'tbsp', 'oil'], [1, 'tsp', 'cumin seeds'], [3, '', 'onions', '2 chopped, 1 cut in petals'], [1, '', 'green bell pepper', 'squares'], [1, 'tbsp', 'ginger-garlic paste'], [3, '', 'tomatoes', 'pureed'], [1, 'tsp', 'chili powder'], [1, 'tsp', 'ground coriander'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'garam masala'], [1, 'tbsp', 'kasuri methi'], [1, 'tsp', 'salt']],
    steps: [['Petals', 'Toss onion petals and pepper in a hot kadai until charred at the edges; set aside.', 3], ['Masala', 'Fry cumin, chopped onions until golden, then ginger-garlic, tomato and spices until thick.', 15], ['Finish', 'Add paneer, petals and methi; toss 3 minutes.', 3]],
    tips: ['Keep the petals crunchy.'], mistakes: ['Watery gravy: it should be thick.'], vars: ['Mushroom do pyaza.'], serve: 'Roti.' });

  X('Punjab', R, { id: 'methi-malai-matar', name: 'Methi Malai Matar', local: 'मेथी मलाई मटर', emoji: '🟢', course: 'main', level: 2, prep: 15, cook: 25, serves: 4,
    taste: { rich: 5, sweet: 3, bitter: 1, herby: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['winter', 'party'],
    desc: 'Green peas and fresh fenugreek in a mild, creamy white cashew-onion gravy.',
    story: 'A winter restaurant favourite when fresh methi is in season.',
    equip: ['Pan', 'Blender'],
    ing: [[2, 'tbsp', 'butter'], [1, '', 'onion', 'boiled'], [15, '', 'cashews'], [1, '', 'green chili'], [1, 'tbsp', 'ginger'], [1, 'bunch', 'methi leaves', 'chopped'], [250, 'g', 'green peas'], [150, 'ml', 'milk'], [100, 'ml', 'cream'], [1, 'tsp', 'sugar'], [0.5, 'tsp', 'garam masala'], [0.75, 'tsp', 'salt']],
    steps: [['Paste', 'Blend onion, cashews, chili and ginger smooth.'], ['Methi', 'Sauté methi in butter until wilted; add the paste and cook 5 minutes.', 8], ['Simmer', 'Add peas, milk, cream, sugar, garam masala and salt; simmer 8 minutes.', 8]],
    tips: ['Salt the methi and squeeze to reduce bitterness.'], mistakes: ['Brown onions: the gravy should be white.'], vars: ['Methi matar malai with paneer.'], serve: 'Naan or pulao.' });

  X('Pan-India', R, { id: 'mix-veg-curry', name: 'Mixed Vegetable Curry', local: 'मिक्स वेज', emoji: '🥕', course: 'main', level: 1, prep: 20, cook: 25, serves: 4,
    taste: { savory: 4, spicy: 3, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['weeknight', 'healthy'],
    desc: 'Restaurant-style mixed vegetables (beans, carrot, cauliflower, peas, potato, capsicum) in an onion-tomato masala.',
    story: 'On every Indian restaurant menu; each kitchen has its own blend.',
    equip: ['Kadai'],
    ing: [[3, 'tbsp', 'oil'], [1, 'tsp', 'cumin seeds'], [2, '', 'onions', 'chopped'], [1, 'tbsp', 'ginger-garlic paste'], [3, '', 'tomatoes', 'pureed'], [1, 'tsp', 'chili powder'], [1, 'tsp', 'ground coriander'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'garam masala'], [600, 'g', 'mixed vegetables', 'beans, carrot, cauliflower, peas, potato, capsicum'], [250, 'ml', 'water'], [1, 'tsp', 'salt'], [1, 'tbsp', 'kasuri methi']],
    steps: [['Masala', 'Fry cumin and onions until golden; add ginger-garlic, tomato and spices; [[bhuna|bhuno]] until oil separates.', 12], ['Vegetables', 'Add vegetables, water and salt; cover and cook until tender, 12 minutes.', 12], ['Finish', 'Add kasuri methi.']],
    tips: ['Par-boil hard vegetables.'], mistakes: ['Overcooked veg: mushy.'], vars: ['Veg kolhapuri (spicy).'], serve: 'Roti or rice.' });

  X('Punjab', H, { id: 'lobia-curry', name: 'Lobia Masala', local: 'लोबिया मसाला', emoji: '🫘', course: 'main', level: 1, prep: 10, cook: 35, rest: 360, serves: 4,
    taste: { savory: 4, spicy: 3, sour: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['weeknight', 'budget'],
    desc: 'Black-eyed peas simmered in a Punjabi onion-tomato masala, like rajma but quicker and lighter.',
    story: 'A weekday Punjabi curry, eaten with rice or phulka.',
    equip: ['Pressure cooker'],
    ing: [[200, 'g', 'black-eyed peas', 'soaked 6 hours'], [3, 'tbsp', 'oil'], [1, 'tsp', 'cumin seeds'], [1, '', 'onion'], [1, 'tbsp', 'ginger-garlic paste'], [2, '', 'tomatoes'], [1, 'tsp', 'chili powder'], [1, 'tsp', 'ground coriander'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'garam masala'], [600, 'ml', 'water'], [1, 'tsp', 'salt'], [2, 'tbsp', 'cilantro']],
    steps: [['Masala', 'Fry cumin, onion, ginger-garlic, tomatoes and spices until thick.', 12], ['Cook', 'Add beans, water and salt; pressure-cook 4 whistles (15 minutes).', 18], ['Finish', 'Mash a few beans; add garam masala and cilantro.']],
    tips: ['Mash some beans to thicken.'], mistakes: ['Overcooked: mushy.'], vars: ['Goan alsande tonak.'], serve: 'Rice.' });

  X('Punjab', H, { id: 'kala-chana-curry', name: 'Kala Chana Curry', local: 'काला चना', emoji: '🟤', course: 'main', level: 1, prep: 10, cook: 40, rest: 480, serves: 4,
    taste: { savory: 4, spicy: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['budget', 'healthy'],
    desc: 'Black chickpeas cooked in a spicy onion-tomato gravy; nuttier and firmer than white chickpeas.',
    story: 'Made with puri and halwa as prasad on Ashtami during Navratri.',
    equip: ['Pressure cooker'],
    ing: [[200, 'g', 'black chickpeas (kala chana)', 'soaked overnight'], [3, 'tbsp', 'oil'], [1, 'tsp', 'cumin seeds'], [1, '', 'onion'], [1, 'tbsp', 'ginger-garlic paste'], [2, '', 'tomatoes'], [1, 'tsp', 'chili powder'], [1, 'tsp', 'ground coriander'], [1, 'tsp', 'garam masala'], [0.5, 'tsp', 'dried mango powder (amchur)'], [700, 'ml', 'water'], [1, 'tsp', 'salt']],
    steps: [['Cook', 'Pressure-cook chickpeas with salt and water until soft, 25 minutes.', 25], ['Masala', 'Fry cumin, onion, ginger-garlic, tomato and spices until thick.', 12], ['Simmer', 'Add chickpeas with liquid; simmer 10 minutes; add amchur.', 10]],
    tips: ['Use the cooking water: it’s full of flavour.'], mistakes: ['Not soaking: hard chana.'], vars: ['Dry sukha kala chana for Ashtami.'], serve: 'Puri or rice.' });

  X('Pan-India', H, { id: 'masoor-dal', name: 'Masoor Dal', local: 'मसूर दाल', emoji: '🟠', course: 'main', level: 1, prep: 5, cook: 25, serves: 4,
    taste: { savory: 4, aromatic: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['weeknight', 'budget', 'quick'],
    desc: 'Quick-cooking red lentils with turmeric, finished with a garlic, cumin and red chili tadka.',
    story: 'The fastest dal in the Indian kitchen; Bengal makes it thin with mustard oil and panch phoron.',
    equip: ['Pot'],
    ing: [[200, 'g', 'red lentils (masoor dal)', 'rinsed'], [800, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], [1, '', 'tomato', 'chopped'], [1, 'tsp', 'salt'], [2, 'tbsp', 'ghee or oil'], [1, 'tsp', 'cumin seeds'], [4, 'clove', 'garlic', 'sliced'], [2, '', 'dried red chilies'], [1, 'pinch', 'asafoetida (hing)'], [2, 'tbsp', 'cilantro']],
    steps: [['Cook', '[[simmer|Simmer]] lentils with water, turmeric and tomato until soft, 18 minutes.', 18], ['Tadka', '[[tadka|Temper]] cumin, garlic, chilies and hing in ghee; pour over; add salt and cilantro.', 3]],
    tips: ['Skim the foam.'], mistakes: ['Burnt garlic.'], vars: ['Bengali musur dal.'], serve: 'Rice.' });

  X('Uttar Pradesh', MU, { id: 'kathal-biryani', name: 'Kathal Biryani', local: 'कटहल बिरयानी', emoji: '🍚', course: 'main', level: 3, prep: 40, cook: 50, rest: 60, serves: 6,
    taste: { aromatic: 5, spicy: 3, rich: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['deep-fry', 'steam'], tags: ['festive', 'impress'],
    desc: 'Dum biryani with fried, marinated young jackfruit layered with saffron rice; the “meaty” vegetarian biryani.',
    story: 'Lucknow’s vegetarian answer to mutton biryani; young jackfruit has a meaty texture.',
    equip: ['Heavy pot', 'Kadai'],
    ing: [[500, 'g', 'young green jackfruit', 'chunks'], [700, 'ml', 'oil', 'for frying'], [200, 'g', 'yogurt'], [1, 'tbsp', 'ginger-garlic paste'], [2, 'tsp', 'biryani masala'], [1, 'tsp', 'chili powder'], [0.5, 'tsp', 'ground turmeric'], [2, '', 'onions', 'sliced, fried crisp'], [400, 'g', 'basmati rice', 'soaked'], [2, '', 'bay leaves'], [4, '', 'green cardamom'], [4, '', 'whole cloves'], [1.75, 'tsp', 'salt'], [1, 'handful', 'mint'], [3, 'tbsp', 'ghee'], [1, 'pinch', 'saffron', 'in 3 tbsp warm milk']],
    steps: [['Fry and marinate', '[[deep-fry|Fry]] jackfruit golden; marinate in yogurt, ginger-garlic, spices and half the fried onions 1 hour.', 70], ['Rice', 'Boil rice with whole spices and salt until 70% done; drain.', 8], ['Layer and dum', 'Layer jackfruit and rice with mint, onions, ghee and saffron milk; seal and cook on [[dum]] 25 minutes.', 25]],
    tips: ['Oil your hands to cut jackfruit.'], mistakes: ['Overcooked rice before dum: mushy.'], vars: ['Mushroom biryani.'], serve: 'Raita and salan.' });

  /* ---------- Tandoor & starters ---------- */
  X('Punjab', TA, { id: 'tandoori-aloo', name: 'Tandoori Aloo', local: 'तंदूरी आलू', emoji: '🥔', course: 'starter', level: 2, prep: 20, cook: 30, rest: 30, serves: 4,
    taste: { smoky: 4, spicy: 3, savory: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['roast', 'grill'], tags: ['party'],
    desc: 'Baby potatoes parboiled, marinated in spiced yogurt and roasted until charred, served with mint chutney.',
    story: 'A tandoor starter for vegetarians at North Indian parties.',
    equip: ['Oven or grill', 'Skewers'],
    ing: [[600, 'g', 'baby potatoes', 'parboiled'], [150, 'g', 'thick yogurt'], [1, 'tbsp', 'ginger-garlic paste'], [1, 'tbsp', 'besan (gram flour)', 'roasted'], [1, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'garam masala'], [1, 'tsp', 'chaat masala'], [1, 'tbsp', 'mustard oil'], [0.75, 'tsp', 'salt'], [1, '', 'lemon']],
    steps: [['Marinate', '[[marinate|Marinate]] potatoes in yogurt, besan, spices, oil and salt 30 minutes.', 30], ['Roast', '[[roast|Roast]] on skewers at {{230C}} 20 minutes, turning, until charred.', 20], ['Finish', 'Sprinkle chaat masala and lemon.']],
    tips: ['Prick the potatoes so the marinade goes in.'], mistakes: ['Raw potatoes: parboil first.'], vars: ['Stuffed tandoori aloo.'], serve: 'Mint chutney and onions.' });

  X('Punjab', TA, { id: 'tandoori-gobi', name: 'Tandoori Gobi', local: 'तंदूरी गोभी', emoji: '🥦', course: 'starter', level: 2, prep: 20, cook: 25, rest: 30, serves: 4,
    taste: { smoky: 4, spicy: 3, sour: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['roast'], tags: ['party', 'healthy'],
    desc: 'Cauliflower florets coated in a spiced yogurt-besan marinade and roasted until charred at the edges.',
    story: 'A tandoori starter that turned cauliflower into party food.',
    equip: ['Oven'],
    ing: [[1, 'head', 'cauliflower', 'large florets'], [200, 'g', 'thick yogurt'], [1, 'tbsp', 'ginger-garlic paste'], [2, 'tbsp', 'besan (gram flour)'], [1, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'garam masala'], [0.5, 'tsp', 'ground turmeric'], [1, 'tbsp', 'kasuri methi'], [2, 'tbsp', 'mustard oil'], [1, 'tsp', 'salt'], [1, 'tsp', 'chaat masala']],
    steps: [['Blanch', '[[blanch|Blanch]] florets 2 minutes; dry well.', 3], ['Marinate', 'Coat in the marinade; rest 30 minutes.', 30], ['Roast', '[[roast|Roast]] at {{230C}} 20–25 minutes until charred; sprinkle chaat masala.', 25]],
    tips: ['Dry florets hold the marinade.'], mistakes: ['Wet florets: marinade slides off.'], vars: ['Gobi tikka on skewers.'], serve: 'Mint chutney.' });

  X('Punjab', R, { id: 'achari-paneer', name: 'Achari Paneer Tikka', local: 'अचारी पनीर', emoji: '🟧', course: 'starter', level: 2, prep: 20, cook: 15, rest: 30, serves: 4,
    taste: { sour: 4, spicy: 4, smoky: 3 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['grill'], tags: ['party'],
    desc: 'Paneer, onion and capsicum in a pickle-spice marinade of fennel, mustard, nigella and fenugreek, grilled until charred.',
    story: '“Achari” means pickle-style: the same spices used in North Indian mango pickle.',
    equip: ['Grill or oven', 'Skewers'],
    ing: [[400, 'g', 'paneer', 'cubes'], [1, '', 'onion', 'petals'], [1, '', 'green bell pepper', 'squares'], [150, 'g', 'thick yogurt'], [1, 'tsp', 'fennel seeds'], [1, 'tsp', 'mustard seeds'], [0.5, 'tsp', 'nigella seeds'], [0.25, 'tsp', 'fenugreek seeds'], [1, 'tsp', 'kashmiri chili powder'], [1, 'tbsp', 'mustard oil'], [1, 'tbsp', 'lemon juice'], [0.75, 'tsp', 'salt']],
    steps: [['Spice', 'Dry-roast and coarsely crush the whole seeds.', 3], ['Marinate', 'Mix with yogurt, chili, oil, lemon and salt; coat paneer and vegetables 30 minutes.', 30], ['Grill', 'Skewer and grill until charred, 10 minutes.', 10]],
    tips: ['Hang the yogurt so the marinade clings.'], mistakes: ['Overgrilling: dry paneer.'], vars: ['Achari paneer curry.'], serve: 'Mint chutney.' });

  X('Delhi', ST, { id: 'bread-pakora', name: 'Bread Pakora', local: 'ब्रेड पकोड़ा', emoji: '🍞', course: 'snack', level: 1, prep: 15, cook: 15, serves: 4,
    taste: { savory: 4, spicy: 3 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['street-food', 'rainy-day'],
    desc: 'Bread slices stuffed with spiced potato, dipped in gram-flour batter and fried; a North Indian chai-time favourite.',
    story: 'Sold at tea stalls and school canteens across North India.',
    equip: ['Kadai'],
    ing: [[8, 'slice', 'white bread'], [3, '', 'potatoes', 'boiled, mashed'], [1, 'tsp', 'chili powder'], [1, 'tsp', 'garam masala'], [0.5, 'tsp', 'dried mango powder (amchur)'], [2, 'tbsp', 'cilantro'], [150, 'g', 'besan (gram flour)'], [0.25, 'tsp', 'ajwain'], [0.25, 'tsp', 'baking soda'], [1, 'tsp', 'salt'], [180, 'ml', 'water'], [700, 'ml', 'oil', 'for frying']],
    steps: [['Filling', 'Mix potato with spices, cilantro and half the salt; sandwich between bread slices and cut triangles.'], ['Batter', 'Whisk besan, ajwain, soda, salt and water into a thick batter.'], ['Fry', 'Dip and [[deep-fry]] until golden.', 12]],
    tips: ['Thick batter seals the edges.'], mistakes: ['Thin batter: oily.'], vars: ['Paneer bread pakora.'], serve: 'Green chutney and ketchup with chai.' });

  X('Punjab', DH, { id: 'paneer-pakora', name: 'Paneer Pakora', local: 'पनीर पकोड़ा', emoji: '🧀', course: 'snack', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { savory: 4, spicy: 3 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['deep-fry'], tags: ['party', 'rainy-day'],
    desc: 'Thick paneer slices stuffed with green chutney, dipped in spiced gram-flour batter and fried crisp.',
    story: 'A Punjabi wedding and rainy-day snack.',
    equip: ['Kadai'],
    ing: [[300, 'g', 'paneer', 'thick slices'], [3, 'tbsp', 'green chutney'], [1, 'tsp', 'chaat masala'], [150, 'g', 'besan (gram flour)'], [2, 'tbsp', 'rice flour'], [1, 'tsp', 'chili powder'], [0.25, 'tsp', 'ajwain'], [0.75, 'tsp', 'salt'], [170, 'ml', 'water'], [700, 'ml', 'oil', 'for frying']],
    steps: [['Stuff', 'Slit paneer slices and spread chutney inside; sprinkle chaat masala.'], ['Batter', 'Whisk besan, rice flour, spices, salt and water.'], ['Fry', 'Dip and [[deep-fry]] until golden.', 10]],
    tips: ['Rice flour adds crunch.'], mistakes: ['Overfrying: paneer toughens.'], vars: ['Paneer bread pakora.'], serve: 'Chutney and chai.' });

  X('Karnataka', ['south-indian', 'chaat'], { id: 'aloo-bonda', name: 'Aloo Bonda', local: 'ಆಲೂ ಬೋಂಡಾ', emoji: '🟡', course: 'snack', level: 1, prep: 20, cook: 15, serves: 4,
    taste: { savory: 4, spicy: 3 }, diet: ['vegan', 'gluten-free'], methods: ['deep-fry'], tags: ['street-food', 'rainy-day'],
    desc: 'Balls of mustard-tempered potato masala with curry leaves and ginger, dipped in gram-flour batter and fried.',
    story: 'South India’s batata vada; Mumbai puts the same ball in a pav to make vada pav.',
    equip: ['Kadai'],
    ing: [[4, '', 'potatoes', 'boiled, mashed'], [1, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'urad dal'], [1, 'sprig', 'curry leaves'], [2, '', 'green chilies'], [1, 'tbsp', 'ginger'], [0.5, 'tsp', 'ground turmeric'], [2, 'tbsp', 'cilantro'], [1, 'tsp', 'salt'], [150, 'g', 'besan (gram flour)'], [2, 'tbsp', 'rice flour'], [170, 'ml', 'water'], [700, 'ml', 'oil', 'for frying']],
    steps: [['Masala', '[[tadka|Temper]] mustard, dal, curry leaves, chilies and ginger; add turmeric, potatoes, cilantro and salt; roll balls.', 8], ['Batter', 'Whisk besan, rice flour, salt and water.'], ['Fry', 'Dip and [[deep-fry]] until golden.', 12]],
    tips: ['Cool the masala before shaping.'], mistakes: ['Thin batter: no coating.'], vars: ['Vada pav (Mumbai).'], serve: 'Coconut chutney.' });

  /* ---------- Breakfast & breads ---------- */
  X('Pan-India', H, { id: 'veg-dalia', name: 'Vegetable Dalia', local: 'दलिया', emoji: '🥣', course: 'breakfast', level: 1, prep: 10, cook: 20, serves: 3,
    taste: { savory: 3, aromatic: 2 }, diet: ['vegan'], methods: ['simmer'], tags: ['healthy', 'one-pot'],
    desc: 'Savoury broken-wheat porridge cooked with moong dal, vegetables and a cumin tempering.',
    story: 'A light breakfast and sick-day food in North Indian homes.',
    equip: ['Pressure cooker'],
    ing: [[120, 'g', 'broken wheat (dalia)', 'roasted'], [50, 'g', 'moong dal'], [1, 'tbsp', 'oil'], [1, 'tsp', 'cumin seeds'], [1, '', 'onion'], [1, '', 'tomato'], [150, 'g', 'mixed vegetables'], [0.5, 'tsp', 'ground turmeric'], [700, 'ml', 'water'], [1, 'tsp', 'salt'], [1, '', 'green chili']],
    steps: [['Temper', 'Fry cumin, onion, chili and tomato; add vegetables, dalia and dal.', 6], ['Cook', 'Add turmeric, water and salt; pressure-cook 3 whistles.', 12]],
    tips: ['Roast dalia first for a nutty taste.'], mistakes: ['Too little water: dry.'], vars: ['Sweet dalia with milk and jaggery.'], serve: 'Curd and pickle.' });

  X('Rajasthan', H, { id: 'moong-dal-chilla', name: 'Moong Dal Chilla', local: 'मूंग दाल चीला', emoji: '🥞', course: 'breakfast', level: 1, prep: 15, cook: 20, rest: 180, serves: 4,
    taste: { savory: 4, herby: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['saute'], tags: ['healthy', 'brunch'],
    desc: 'Savoury pancakes of soaked yellow moong dal ground with ginger and chili, cooked thin on a tawa.',
    story: 'Sold on Jaipur streets topped with paneer; a protein-rich breakfast.',
    equip: ['Blender', 'Tawa'],
    ing: [[200, 'g', 'yellow moong dal', 'soaked 3 hours'], [1, 'tbsp', 'ginger'], [2, '', 'green chilies'], [0.5, 'tsp', 'cumin seeds'], [0.75, 'tsp', 'salt'], [1, '', 'onion', 'finely chopped'], [2, 'tbsp', 'cilantro'], [2, 'tbsp', 'oil']],
    steps: [['Batter', 'Grind dal with ginger, chilies, cumin, salt and a little water to a thick batter; add onion and cilantro.'], ['Cook', 'Spread thin on a hot tawa, drizzle oil, cook both sides until golden.', 18]],
    tips: ['Thin batter spreads well.'], mistakes: ['Cold tawa: sticks.'], vars: ['Paneer-stuffed chilla.'], serve: 'Green chutney.' });

  X('Punjab', DH, { id: 'gobi-paratha', name: 'Gobi Paratha', local: 'ਗੋਭੀ ਪਰਾਠਾ', emoji: '🫓', course: 'breakfast', level: 2, prep: 25, cook: 25, serves: 4,
    taste: { savory: 4, spicy: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['winter', 'brunch'],
    desc: 'Whole wheat flatbread stuffed with grated cauliflower, ginger, chili and coriander, cooked with ghee.',
    story: 'A Punjabi winter breakfast with white butter and curd.',
    equip: ['Tawa'],
    ing: [[300, 'g', 'whole wheat flour (atta)'], [180, 'ml', 'water'], [0.5, 'tsp', 'salt'], [300, 'g', 'cauliflower', 'finely grated, squeezed'], [1, 'tbsp', 'ginger'], [2, '', 'green chilies'], [2, 'tbsp', 'cilantro'], [1, 'tsp', 'garam masala'], [0.5, 'tsp', 'ajwain'], [0.75, 'tsp', 'salt'], [3, 'tbsp', 'ghee']],
    steps: [['Dough', 'Knead a soft dough; rest 15 minutes.', 15], ['Filling', 'Mix cauliflower with spices; salt only just before stuffing.'], ['Stuff and cook', 'Stuff, roll gently and cook on a tawa with ghee until golden.', 20]],
    tips: ['Squeeze the cauliflower dry.'], mistakes: ['Salting early: watery filling tears the dough.'], vars: ['Aloo or mooli paratha.'], serve: 'Butter, curd and pickle.' });

  X('Punjab', DH, { id: 'mooli-paratha', name: 'Mooli Paratha', local: 'ਮੂਲੀ ਪਰਾਠਾ', emoji: '🫓', course: 'breakfast', level: 2, prep: 25, cook: 25, serves: 4,
    taste: { savory: 4, spicy: 3, herby: 2 }, diet: ['vegetarian'], methods: ['saute'], tags: ['winter', 'brunch'],
    desc: 'Flatbread stuffed with grated white radish, radish greens, ginger and chili.',
    story: 'Punjabi winter breakfast when radishes are crisp and sweet.',
    equip: ['Tawa'],
    ing: [[300, 'g', 'whole wheat flour (atta)'], [170, 'ml', 'water'], [0.5, 'tsp', 'salt'], [300, 'g', 'white radish (mooli)', 'grated, squeezed'], [2, 'tbsp', 'radish greens or cilantro'], [1, 'tbsp', 'ginger'], [2, '', 'green chilies'], [0.5, 'tsp', 'ajwain'], [0.75, 'tsp', 'salt'], [3, 'tbsp', 'ghee']],
    steps: [['Dough', 'Knead using some radish juice; rest.', 15], ['Filling', 'Mix radish with greens and spices.'], ['Cook', 'Stuff, roll and cook with ghee until crisp.', 20]],
    tips: ['Use the squeezed juice in the dough.'], mistakes: ['Wet filling tears.'], vars: ['Gobi paratha.'], serve: 'White butter.' });

  X('Punjab', DH, { id: 'lachha-paratha', name: 'Lachha Paratha', local: 'ਲੱਛਾ ਪਰਾਠਾ', emoji: '🌀', course: 'bread', level: 2, prep: 20, cook: 20, rest: 20, serves: 4,
    taste: { savory: 3, rich: 4 }, diet: ['vegetarian'], methods: ['saute'], tags: ['weeknight'],
    desc: 'Flaky, many-layered whole wheat paratha made by pleating and coiling ghee-brushed dough.',
    story: 'A dhaba bread that pairs with dal makhani and paneer curries.',
    equip: ['Tawa'],
    ing: [[300, 'g', 'whole wheat flour (atta)'], [180, 'ml', 'water'], [0.5, 'tsp', 'salt'], [4, 'tbsp', 'ghee'], [2, 'tbsp', 'flour', 'to dust']],
    steps: [['Dough', 'Knead soft; rest 20 minutes.', 20], ['Layer', 'Roll thin, brush ghee, dust flour, pleat like a fan, coil into a spiral and roll out again.'], ['Cook', 'Cook with ghee; crush gently to open the layers.', 18]],
    tips: ['Crush while hot to separate layers.'], mistakes: ['Rolling too hard: lose layers.'], vars: ['Pudina lachha paratha.'], serve: 'Dal makhani.' });

  X('Punjab', DH, { id: 'missi-roti', name: 'Missi Roti', local: 'ਮਿੱਸੀ ਰੋਟੀ', emoji: '🫓', course: 'bread', level: 1, prep: 15, cook: 20, serves: 4,
    taste: { savory: 4, herby: 3 }, diet: ['vegetarian', 'high-protein'], methods: ['saute'], tags: ['healthy'],
    desc: 'Rustic flatbread of gram flour and wheat with onion, chili, ajwain and kasuri methi, brushed with ghee.',
    story: 'Punjab and Rajasthan’s protein-rich roti, eaten with lassi and pickle.',
    equip: ['Tawa'],
    ing: [[150, 'g', 'besan (gram flour)'], [150, 'g', 'whole wheat flour (atta)'], [1, '', 'onion', 'finely chopped'], [2, '', 'green chilies'], [0.5, 'tsp', 'ajwain'], [1, 'tbsp', 'kasuri methi'], [0.5, 'tsp', 'ground turmeric'], [0.75, 'tsp', 'salt'], [160, 'ml', 'water'], [3, 'tbsp', 'ghee']],
    steps: [['Dough', 'Knead all into a firm dough.'], ['Cook', 'Roll thick rotis; cook on a tawa and brush with ghee.', 18]],
    tips: ['Thicker than a phulka.'], mistakes: ['Thin: brittle.'], vars: ['Tandoor-baked missi.'], serve: 'Lassi and pickle.' });

  X('Punjab', TA, { id: 'tandoori-roti', name: 'Tandoori Roti', local: 'ਤੰਦੂਰੀ ਰੋਟੀ', emoji: '🫓', course: 'bread', level: 2, prep: 15, cook: 20, rest: 30, serves: 4,
    taste: { savory: 3, smoky: 2 }, diet: ['vegetarian'], methods: ['bake'], tags: ['weeknight'],
    desc: 'Whole wheat flatbread slapped onto the wall of a tandoor (or baked on an inverted tawa) until puffed and charred.',
    story: 'The everyday bread of dhabas, baked in seconds in the clay oven.',
    equip: ['Tawa or oven'],
    ing: [[300, 'g', 'whole wheat flour (atta)'], [0.5, 'tsp', 'salt'], [0.25, 'tsp', 'baking soda'], [180, 'ml', 'water'], [2, 'tbsp', 'ghee', 'to brush']],
    steps: [['Dough', 'Knead soft; rest 30 minutes.', 30], ['Shape', 'Pat thick rounds by hand.'], ['Cook', 'Wet one side, stick on a hot inverted tawa, cook, then flip the tawa over the flame to char.', 18]],
    tips: ['Wet side sticks to the tawa.'], mistakes: ['Thin roti: crisp, not soft.'], vars: ['Butter roti.'], serve: 'With dal or paneer.' });

  X('Delhi', TA, { id: 'garlic-naan', name: 'Garlic Naan', local: 'गार्लिक नान', emoji: '🧄', course: 'bread', level: 2, prep: 20, cook: 15, rest: 120, serves: 6,
    taste: { savory: 4, rich: 4, aromatic: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['party'],
    desc: 'Soft yogurt-leavened naan topped with garlic and coriander, baked until blistered and brushed with butter.',
    story: 'A modern restaurant favourite in India and abroad.',
    equip: ['Cast-iron pan or oven'],
    ing: [[400, 'g', 'all-purpose flour'], [1, 'tsp', 'instant yeast'], [1, 'tsp', 'sugar'], [0.5, 'tsp', 'baking powder'], [100, 'g', 'yogurt'], [150, 'ml', 'warm milk'], [2, 'tbsp', 'oil'], [0.75, 'tsp', 'salt'], [6, 'clove', 'garlic', 'minced'], [2, 'tbsp', 'cilantro'], [40, 'g', 'butter', 'melted']],
    steps: [['Dough', '[[knead|Knead]] a soft dough; [[proof]] 2 hours.', 120], ['Shape', 'Stretch ovals; press garlic and cilantro on top.'], ['Cook', 'Cook in a very hot pan, cover until puffed, then char the top over the flame; brush butter.', 15]],
    tips: ['Very hot pan for blisters.'], mistakes: ['Stiff dough: chewy naan.'], vars: ['Cheese naan.'], serve: 'Dal makhani or paneer.' });

  X('Lucknow', MU, { id: 'rumali-roti', name: 'Rumali Roti', local: 'रूमाली रोटी', emoji: '🧣', course: 'bread', level: 3, prep: 20, cook: 20, rest: 60, serves: 6,
    taste: { savory: 2 }, diet: ['vegan'], methods: ['saute'], tags: ['impress'],
    desc: 'Handkerchief-thin bread stretched and tossed, cooked on an upturned wok, then folded like a cloth.',
    story: '“Rumal” means handkerchief; Mughlai cooks once used it as a napkin to wipe their fingers.',
    equip: ['Inverted wok (kadai)'],
    ing: [[300, 'g', 'all-purpose flour'], [100, 'g', 'whole wheat flour (atta)'], [0.5, 'tsp', 'salt'], [2, 'tbsp', 'oil'], [250, 'ml', 'water'], [0.5, 'tsp', 'salt', 'in water for brushing']],
    steps: [['Dough', 'Knead a very soft, elastic dough; rest 1 hour.', 60], ['Stretch', 'Roll thin, then stretch over the backs of your hands until paper-thin.'], ['Cook', 'Cook on the hot dome of an inverted wok 30 seconds per side; fold into a square.', 18]],
    tips: ['Brush the wok with salt water to stop sticking.'], mistakes: ['Overcooked: crisp, not soft.'], vars: ['Make thin rolled roti if you can’t stretch it.'], serve: 'With kebabs or korma.' });

  /* ---------- Raitas & drinks ---------- */
  X('Pan-India', H, { id: 'boondi-raita', name: 'Boondi Raita', local: 'बूंदी रायता', emoji: '🥣', course: 'side', level: 1, prep: 5, cook: 0, serves: 4,
    taste: { sour: 2, savory: 3, aromatic: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['quick', 'summer'],
    desc: 'Chilled yogurt with soft gram-flour pearls (boondi), roasted cumin, chili and mint.',
    story: 'The raita served with biryani at Indian weddings.',
    equip: ['Bowl'],
    ing: [[400, 'g', 'yogurt', 'whisked'], [60, 'g', 'boondi'], [1, 'tsp', 'roasted cumin powder'], [0.5, 'tsp', 'chili powder'], [0.5, 'tsp', 'black salt'], [0.25, 'tsp', 'salt'], [1, 'tbsp', 'mint', 'chopped']],
    steps: [['Soften', 'Soak boondi in warm water 2 minutes; squeeze.', 2], ['Mix', 'Mix into yogurt with spices and mint.']],
    tips: ['Add boondi just before serving.'], mistakes: ['Soaking too long: mushy.'], vars: ['Crisp boondi straight in.'], serve: 'With biryani.' });

  X('Karnataka', H, { id: 'badam-milk', name: 'Badam Milk', local: 'ಬಾದಾಮಿ ಹಾಲು', emoji: '🥛', course: 'drink', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { sweet: 4, rich: 4, aromatic: 5 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['winter', 'festive'],
    desc: 'Warm almond milk with saffron and cardamom, thickened with ground soaked almonds.',
    story: 'Sold hot from big kadais at Bengaluru and Mysuru stalls, and served at weddings.',
    equip: ['Pot', 'Blender'],
    ing: [[60, 'g', 'almonds', 'soaked, peeled'], [1, 'l', 'whole milk'], [70, 'g', 'sugar'], [1, 'pinch', 'saffron'], [0.5, 'tsp', 'cardamom powder'], [1, 'tbsp', 'pistachios', 'slivered']],
    steps: [['Paste', 'Grind almonds with a little milk.'], ['Simmer', 'Boil milk, add almond paste, sugar and saffron; simmer 10 minutes.', 12], ['Serve', 'Add cardamom; serve hot or chilled with pistachios.']],
    tips: ['Leave a little texture from the almonds.'], mistakes: ['Not stirring: scorched milk.'], vars: ['Kesar badam milk chilled.'], serve: 'Hot in winter, cold in summer.' });

  X('Tamil Nadu', H, { id: 'rose-milk', name: 'Rose Milk', local: 'ரோஸ் மில்க்', emoji: '🌹', course: 'drink', level: 1, prep: 5, cook: 0, serves: 2,
    taste: { sweet: 4, aromatic: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'quick', 'kids'],
    desc: 'Chilled pink milk with rose syrup and soaked basil seeds; Chennai’s favourite summer cooler.',
    story: 'Sold from Chennai juice shops and beach stalls.',
    equip: ['Glasses'],
    ing: [[500, 'ml', 'cold milk'], [4, 'tbsp', 'rose syrup'], [1, 'tsp', 'sabja (basil) seeds', 'soaked'], [4, '', 'ice cubes']],
    steps: [['Mix', 'Stir rose syrup into cold milk.'], ['Serve', 'Add soaked sabja seeds and ice.']],
    tips: ['Very cold milk.'], mistakes: ['Too much syrup: cloying.'], vars: ['Rose falooda.'], serve: 'Iced.' });

  /* ---------- Sweets ---------- */
  X('West Bengal', SW, { id: 'rasmalai', name: 'Rasmalai', local: 'রসমালাই', emoji: '🥛', course: 'dessert', level: 3, prep: 30, cook: 45, rest: 240, serves: 8,
    taste: { sweet: 4, rich: 5, aromatic: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'impress'],
    desc: 'Soft flattened chhena discs cooked in syrup, then soaked in saffron-cardamom reduced milk with pistachios.',
    story: 'From Bengal; K.C. Das of Kolkata is credited with making it famous.',
    equip: ['Wide pot', 'Pan'],
    ing: [[1, 'l', 'whole milk', 'for chhena'], [3, 'tbsp', 'lemon juice'], [200, 'g', 'sugar'], [1, 'l', 'water'], '#Rabdi', [1, 'l', 'whole milk'], [80, 'g', 'sugar'], [1, 'pinch', 'saffron'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'pistachios', 'slivered']],
    steps: [['Chhena', 'Curdle boiling milk with lemon; drain, rinse and hang 30 minutes; knead smooth 8 minutes; shape 16 flat discs.', 45], ['Cook', 'Boil discs in sugar syrup, covered, 12 minutes until doubled.', 12], ['Rabdi', 'Reduce milk by a third with sugar, saffron and cardamom; squeeze discs and soak in the milk; chill 4 hours.', 240]],
    tips: ['Knead chhena until smooth.'], mistakes: ['Wet chhena: discs dissolve.'], vars: ['Rasmalai cake.'], serve: 'Chilled.' });

  X('Rajasthan', SW, { id: 'kalakand', name: 'Kalakand', local: 'कलाकंद', emoji: '🟨', course: 'dessert', level: 2, prep: 10, cook: 40, rest: 120, serves: 12,
    taste: { sweet: 4, rich: 5, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'make-ahead'],
    desc: 'Moist, grainy milk cake made by cooking fresh paneer and milk down with sugar and cardamom.',
    story: 'Created in Alwar, Rajasthan, in 1947 by a confectioner who let curdled milk cook longer.',
    equip: ['Heavy pan', 'Tray'],
    ing: [[1, 'l', 'whole milk'], [250, 'g', 'paneer', 'crumbled'], [100, 'g', 'sugar'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'pistachios', 'slivered']],
    steps: [['Reduce', 'Boil milk and reduce by half, stirring.', 25], ['Cook', 'Add paneer and sugar; cook until thick and leaving the pan, 12 minutes.', 12], ['Set', 'Add cardamom; spread in a tray, top with pistachios and set 2 hours.', 120]],
    tips: ['Grainy texture is right.'], mistakes: ['Overcooking: dry.'], vars: ['Milk cake (Alwar style, browned).'], serve: 'Squares.' });

  X('Uttar Pradesh', SW, { id: 'lauki-halwa', name: 'Lauki Halwa', local: 'लौकी का हलवा', emoji: '🟢', course: 'dessert', level: 1, prep: 15, cook: 40, serves: 6,
    taste: { sweet: 4, rich: 4, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive'],
    desc: 'Grated bottle gourd slow-cooked in milk with ghee, sugar, cardamom and nuts until pale green and glossy.',
    story: 'Made for Navratri fasts and Janmashtami.',
    equip: ['Heavy pan'],
    ing: [[800, 'g', 'bottle gourd (lauki)', 'peeled, grated'], [2, 'tbsp', 'ghee'], [500, 'ml', 'whole milk'], [120, 'g', 'sugar'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'cashews and almonds']],
    steps: [['Sauté', 'Cook grated lauki in ghee 8 minutes.', 8], ['Milk', 'Add milk and cook until absorbed, stirring, 25 minutes.', 25], ['Sweeten', 'Add sugar, cardamom and nuts; cook until glossy.', 6]],
    tips: ['Add sugar last: it releases water.'], mistakes: ['Undercooked: watery.'], vars: ['With khoya.'], serve: 'Warm or chilled.' });

  X('Hyderabad', MU, { id: 'sheer-khurma', name: 'Sheer Khurma', local: 'شیر خرما', emoji: '🥛', course: 'dessert', level: 1, prep: 10, cook: 25, serves: 6,
    taste: { sweet: 4, rich: 5, aromatic: 4 }, diet: ['vegetarian'], methods: ['simmer'], tags: ['festive'],
    desc: 'Eid-morning vermicelli cooked in milk with dates, ghee, saffron and plenty of nuts.',
    story: '“Sheer” is milk and “khurma” is dates in Persian; served to every guest on Eid ul-Fitr.',
    equip: ['Pot'],
    ing: [[2, 'tbsp', 'ghee'], [60, 'g', 'fine vermicelli (seviyan)'], [1, 'l', 'whole milk'], [8, '', 'dates', 'sliced'], [80, 'g', 'sugar'], [40, 'g', 'mixed nuts', 'slivered'], [1, 'pinch', 'saffron'], [0.5, 'tsp', 'cardamom powder']],
    steps: [['Fry', 'Fry vermicelli and nuts in ghee until golden.', 4], ['Milk', 'Add milk and dates; simmer 15 minutes.', 15], ['Finish', 'Add sugar, saffron and cardamom; simmer 5 minutes.', 5]],
    tips: ['It thickens as it cools.'], mistakes: ['Raw vermicelli: fry first.'], vars: ['Seviyan kheer.'], serve: 'Warm, on Eid morning.' });

  X('Uttar Pradesh', SW, { id: 'soan-papdi', name: 'Soan Papdi', local: 'सोन पापड़ी', emoji: '🟨', course: 'dessert', level: 3, prep: 20, cook: 40, rest: 60, serves: 16,
    taste: { sweet: 5, rich: 4, aromatic: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['festive', 'make-ahead'],
    desc: 'Flaky, melt-in-the-mouth cubes of roasted gram flour pulled together with sugar syrup into fine threads.',
    story: 'The most gifted Diwali sweet box in India, and the subject of many jokes about re-gifting.',
    equip: ['Heavy kadai', 'Tray'],
    ing: [[120, 'g', 'besan (gram flour)'], [120, 'g', 'all-purpose flour'], [150, 'g', 'ghee'], [300, 'g', 'sugar'], [150, 'ml', 'water'], [1, 'tbsp', 'lemon juice'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'pistachios', 'chopped']],
    steps: [['Roast', '[[toast|Roast]] both flours in ghee until golden and aromatic; keep warm.', 15], ['Syrup', 'Boil sugar, water and lemon to hard-ball stage; pour onto a greased surface and pull with greased hands until pale and stretchy.', 15], ['Combine', 'Work the warm flour into the sugar with forks until it forms threads; press into a tray with pistachios and cut.', 10]],
    tips: ['Work fast while both are warm.'], mistakes: ['Cold syrup: it won’t thread.'], vars: ['Chocolate soan papdi.'], serve: 'Cubes, in a box.' });

  X('Maharashtra', SW, { id: 'coconut-barfi', name: 'Coconut Barfi', local: 'नारळ वडी', emoji: '🥥', course: 'dessert', level: 1, prep: 10, cook: 20, rest: 60, serves: 12,
    taste: { sweet: 4, rich: 3, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['festive', 'make-ahead'],
    desc: 'Fudge squares of fresh coconut cooked with milk, sugar and cardamom until they set.',
    story: 'Made for Raksha Bandhan and Ganesh Chaturthi in Maharashtra (narali vadi).',
    equip: ['Pan', 'Tray'],
    ing: [[250, 'g', 'grated coconut'], [150, 'ml', 'milk'], [150, 'g', 'sugar'], [1, 'tbsp', 'ghee'], [0.5, 'tsp', 'cardamom powder']],
    steps: [['Cook', 'Cook coconut, milk and sugar, stirring, until it leaves the pan, 18 minutes.', 18], ['Set', 'Add ghee and cardamom; spread in a greased tray and cut when set.', 60]],
    tips: ['Fresh coconut is best.'], mistakes: ['Overcooked: crumbly.'], vars: ['With condensed milk.'], serve: 'Squares.' });

  /* ---------- Two more classics ---------- */
  X('Uttar Pradesh', R, { id: 'lauki-kofta', name: 'Lauki Kofta', local: 'लौकी कोफ्ता', emoji: '🟢', course: 'main', level: 2, prep: 25, cook: 35, serves: 4,
    taste: { savory: 4, spicy: 3, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['deep-fry', 'simmer'], tags: ['weeknight'],
    desc: 'Soft dumplings of grated bottle gourd and gram flour, fried and simmered in an onion-tomato gravy.',
    story: 'The home cook’s way to make children eat bottle gourd.',
    equip: ['Kadai'],
    ing: [[500, 'g', 'bottle gourd (lauki)', 'grated, squeezed'], [80, 'g', 'besan (gram flour)'], [1, 'tsp', 'ginger'], [1, '', 'green chili'], [0.5, 'tsp', 'salt'], [700, 'ml', 'oil', 'for frying'], [2, 'tbsp', 'oil'], [1, '', 'onion'], [3, '', 'tomatoes', 'pureed'], [1, 'tsp', 'chili powder'], [1, 'tsp', 'ground coriander'], [1, 'tsp', 'garam masala'], [3, 'tbsp', 'cream'], [300, 'ml', 'water'], [0.75, 'tsp', 'salt']],
    steps: [['Kofta', 'Mix lauki, besan, ginger, chili and salt; shape balls and [[deep-fry]] golden.', 12], ['Gravy', 'Fry onion, tomato and spices until thick; add water, cream and salt; simmer 5 minutes.', 15], ['Finish', 'Add koftas just before serving.']],
    tips: ['Add koftas at the end so they stay soft.'], mistakes: ['Wet lauki: koftas break.'], vars: ['Malai kofta.'], serve: 'Roti or rice.' });

  X('Uttar Pradesh', H, { id: 'matar-pulao', name: 'Matar Pulao', local: 'मटर पुलाव', emoji: '🍚', course: 'main', level: 1, prep: 10, cook: 25, rest: 20, serves: 4,
    taste: { aromatic: 4, savory: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['weeknight', 'one-pot'],
    desc: 'Fragrant basmati rice cooked with green peas, whole spices and ghee.',
    story: 'The winter pulao of North India when fresh peas are cheap.',
    equip: ['Pot'],
    ing: [[300, 'g', 'basmati rice', 'soaked 20 min'], [2, 'tbsp', 'ghee'], [1, 'tsp', 'cumin seeds'], [2, '', 'bay leaves'], [4, '', 'green cardamom'], [4, '', 'whole cloves'], [1, 'piece', 'cinnamon stick'], [1, '', 'onion', 'sliced'], [200, 'g', 'green peas'], [600, 'ml', 'water'], [1.25, 'tsp', 'salt']],
    steps: [['Spices', '[[bloom|Bloom]] cumin and whole spices in ghee; fry onion golden.', 6], ['Rice', 'Add peas and drained rice; fry 1 minute; add water and salt.', 2], ['Cook', 'Cover and cook on low 15 minutes; rest 5.', 20]],
    tips: ['Rest before fluffing.'], mistakes: ['Stirring: broken grains.'], vars: ['Jeera rice.'], serve: 'Raita and dal.' });
})();
