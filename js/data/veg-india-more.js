/* Pure-veg Indian collection: sabzis, dals, breakfasts, regional specials, chaat & sweets */
'use strict';
(function () {
  const IN = { country: 'India', flag: '🇮🇳', region: 'South Asia' };
  const A = (d) => DD.add(Object.assign({}, IN, d));
  const MASALA = (oil) => [[3, 'tbsp', oil || 'oil'], [1, 'tsp', 'cumin seeds'], [1, '', 'onion', 'finely chopped'], [1, 'tbsp', 'ginger-garlic paste'], [2, '', 'tomatoes', 'puréed'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'Kashmiri chili powder'], [1.5, 'tsp', 'ground coriander'], [1, 'tsp', 'salt'], [1, 'tsp', 'garam masala']];

  A({ id: 'matar-paneer', name: 'Matar Paneer', local: 'मटर पनीर', area: 'Punjab', styles: ['dhaba', 'home-style'], emoji: '🟢', course: 'main', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { savory: 4, aromatic: 4, rich: 3, spicy: 2 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['weeknight', 'comfort', 'kids', 'party'],
    desc: 'Soft paneer and sweet green peas in a homestyle onion-tomato gravy.',
    story: 'The everyday party dish of North Indian homes and dhabas, especially in winter when fresh peas are sweetest.',
    equip: ['Kadai or pan'], ing: [[250, 'g', 'paneer', 'cubes'], [200, 'g', 'green peas'], ...MASALA('oil or ghee'), [300, 'ml', 'water'], [2, 'tbsp', 'cream', 'optional'], [1, 'tsp', 'kasuri methi'], [1, 'handful', 'cilantro']],
    steps: [['Masala', 'Crackle cumin, brown the onion, add ginger-garlic, then tomatoes and spices. [[bhuna]] until oil separates.', 12], ['Peas', 'Add peas and water; [[simmer]] 8 minutes.', 8], ['Paneer', 'Add paneer, simmer 3 minutes. Finish with garam masala, kasuri methi, cream and cilantro.', 3]],
    tips: ['Soak paneer in hot water 10 minutes for softness.'], mistakes: ['Boiling paneer too long.'], vars: ['Aloo matar: potatoes instead of paneer.'], serve: 'Rotis or jeera rice.' });

  A({ id: 'paneer-bhurji', name: 'Paneer Bhurji', local: 'पनीर भुर्जी', area: 'Punjab', styles: ['dhaba', 'chaat'], emoji: '🧀', course: 'breakfast', level: 1, prep: 10, cook: 12, serves: 3,
    taste: { savory: 4, spicy: 3, aromatic: 3 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['saute'], tags: ['quick', 'brunch', 'weeknight', 'kids'],
    desc: 'Crumbled paneer scrambled with onion, tomato, green chili and spices. Ready in 20 minutes.',
    story: 'The vegetarian answer to egg bhurji, sold from street carts across North India, scooped up with buttered pav or rotis.',
    equip: ['Pan'], ing: [[250, 'g', 'paneer', 'crumbled'], [2, 'tbsp', 'butter or oil'], [1, 'tsp', 'cumin seeds'], [1, '', 'onion', 'chopped'], [1, '', 'green bell pepper', 'chopped, optional'], [2, '', 'green chilies'], [1, 'tsp', 'ginger', 'grated'], [2, '', 'tomatoes', 'chopped'], [0.25, 'tsp', 'ground turmeric'], [1, 'tsp', 'Kashmiri chili powder'], [0.5, 'tsp', 'garam masala'], [0.75, 'tsp', 'salt'], [2, 'tbsp', 'milk'], [1, 'handful', 'cilantro']],
    steps: [['Base', 'Crackle cumin in butter, cook onion, pepper, chilies and ginger 4 minutes.'], ['Tomato', 'Add tomatoes and spices; cook until mushy.', 4], ['Paneer', 'Add paneer, salt and milk; toss 2–3 minutes only. Add cilantro.', 3, 'Short cooking keeps paneer soft and moist.']],
    tips: ['A splash of milk keeps it creamy.'], mistakes: ['Overcooking: dry, rubbery.'], vars: ['Tofu bhurji (vegan).'], serve: 'Buttered pav, toast or roti.' });

  A({ id: 'kadai-mushroom', name: 'Kadai Mushroom', local: 'कड़ाही मशरूम', area: 'Punjab', styles: ['dhaba', 'restaurant'], emoji: '🍄', course: 'main', level: 1, prep: 15, cook: 20, serves: 4,
    taste: { umami: 4, spicy: 3, aromatic: 5, savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['weeknight', 'quick', 'party'],
    desc: 'Mushrooms and peppers tossed in a spicy, coarse kadai masala.',
    story: 'Mushrooms became a North Indian restaurant favorite in the 1990s; the kadai method gives them a bold, roasted flavor.',
    equip: ['Kadai'], ing: [[400, 'g', 'button mushrooms', 'halved'], [1, '', 'green bell pepper', 'squares'], [1.5, 'tbsp', 'coriander seeds'], [4, '', 'dried red chilies'], ...MASALA(), [1, 'tsp', 'kasuri methi']],
    steps: [['Kadai masala', '[[toast|Dry-roast]] coriander seeds and red chilies; [[pound]] coarsely.'], ['Sear', '[[saute|Sauté]] mushrooms on high until browned and their water evaporates. Remove. Toss peppers 1 minute.', 6, 'High heat browns mushrooms instead of stewing them.'], ['Masala', 'Make the onion-tomato masala and [[bhuna]] until oil separates, adding 2 tsp kadai masala.', 12], ['Combine', 'Add mushrooms and peppers, toss 2 minutes, finish with kasuri methi.']],
    tips: ['Don’t wash mushrooms in water; wipe them.'], mistakes: ['Crowding: soggy mushrooms.'], vars: ['Mushroom matar; kadai baby corn.'], serve: 'Tandoori roti.' });

  A({ id: 'veg-kolhapuri', name: 'Veg Kolhapuri', local: 'व्हेज कोल्हापुरी', area: 'Maharashtra', styles: ['dhaba', 'restaurant'], emoji: '🌶️', course: 'main', level: 2, prep: 20, cook: 30, serves: 4,
    taste: { spicy: 5, aromatic: 5, savory: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['party', 'winter'],
    desc: 'Fiery mixed vegetables in a roasted coconut-sesame Kolhapuri masala.',
    story: 'Kolhapur in Maharashtra is famous for its fiery red masala of dry coconut, sesame and local chilies. The veg version is a restaurant favorite.',
    equip: ['Pan', 'Grinder'], ing: [[500, 'g', 'mixed vegetables (cauliflower, carrot, beans, peas, potato)', 'chopped'], [3, 'tbsp', 'dry coconut', 'grated'], [1, 'tbsp', 'sesame seeds'], [1, 'tbsp', 'coriander seeds'], [6, '', 'dried red chilies'], [1, 'stick', 'cinnamon'], [3, '', 'whole cloves'], ...MASALA(), [100, 'g', 'paneer', 'cubes, optional']],
    steps: [['Roast masala', '[[toast|Dry-roast]] coconut, sesame, coriander, chilies, cinnamon and cloves until dark brown; grind with water to a paste.', 6], ['Vegetables', '[[boil|Parboil]] the vegetables 5 minutes.', 5], ['Gravy', 'Make the onion-tomato masala, add the Kolhapuri paste and [[bhuna]] 5 minutes.', 15], ['Simmer', 'Add vegetables, paneer and 200 ml water; simmer 8 minutes.', 8]],
    tips: ['Roast the coconut deep brown but not burnt.'], mistakes: ['Raw-tasting masala: fry it well.'], vars: ['Paneer Kolhapuri.'], serve: 'Bhakri or rotis.' });

  A({ id: 'navratan-korma', name: 'Navratan Korma', local: 'नवरत्न कोरमा', area: 'Uttar Pradesh', styles: ['mughlai', 'restaurant'], emoji: '💎', course: 'main', level: 2, prep: 25, cook: 30, serves: 4,
    taste: { rich: 5, sweet: 3, aromatic: 5 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'party', 'kids', 'impress'],
    desc: 'The “nine-jewel” Mughlai curry: vegetables, paneer, nuts and fruit in a mild, creamy cashew gravy.',
    story: 'Named after the nine gems (navratnas) of Emperor Akbar’s court, it uses nine vegetables, fruits and nuts. Mild, sweet and royal.',
    equip: ['Pan', 'Blender'], ing: [[400, 'g', 'mixed vegetables (carrot, beans, peas, cauliflower, potato)', 'diced'], [100, 'g', 'paneer', 'cubes'], [2, 'tbsp', 'ghee'], [4, '', 'green cardamom pods'], [1, '', 'onion', 'chopped'], [25, '', 'cashews'], [1, 'tbsp', 'ginger-garlic paste'], [100, 'g', 'yogurt'], [150, 'ml', 'cream'], [1, 'tsp', 'salt'], [1, 'tbsp', 'sugar'], [0.5, 'tsp', 'garam masala'], [1, 'handful', 'pineapple, grapes and raisins'], [1, 'tbsp', 'almonds', 'slivered']],
    steps: [['Paste', 'Boil onion and cashews 10 minutes; blend smooth.', 10], ['Vegetables', '[[boil|Boil]] the vegetables until just tender.', 6], ['Gravy', 'Heat ghee with cardamom, add ginger-garlic, then the paste; cook 5 minutes without browning. Stir in yogurt on low heat.', 6], ['Combine', 'Add vegetables, paneer, cream, salt and sugar; simmer 5 minutes. Fold in fruit, nuts and garam masala.', 5]],
    tips: ['Keep the gravy pale and creamy.'], mistakes: ['High heat with yogurt: splits.'], vars: ['Vegan: cashew cream and oil.'], serve: 'Naan or saffron pulao.' });

  A({ id: 'chana-dal-fry', name: 'Chana Dal Fry', local: 'चना दाल फ्राई', area: 'Punjab', styles: ['dhaba', 'home-style'], emoji: '🟡', course: 'main', level: 1, prep: 5, cook: 40, rest: 60, serves: 4,
    taste: { savory: 4, aromatic: 4, spicy: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['budget', 'comfort', 'meal-prep', 'healthy'],
    desc: 'Nutty split chickpeas cooked until creamy and tempered with garlic, onion and tomato. Dhaba favorite.',
    story: 'Chana dal holds its shape better than other lentils, giving a textured, nutty dhaba dal.',
    equip: ['Pressure cooker or pot'], ing: [[200, 'g', 'chana dal', 'soaked 1 h'], [800, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'salt'], ...MASALA('oil'), [4, 'clove', 'garlic', 'sliced'], [2, '', 'dried red chilies']],
    steps: [['Cook dal', 'Pressure cook dal with water, turmeric and salt 3 whistles (or simmer 40 min) until soft but whole.', 15], ['Masala', 'Make the onion-tomato masala and [[bhuna]] well.', 12], ['Combine', 'Add dal, simmer 8 minutes.', 8], ['Tadka', 'Top with a [[tadka]] of garlic and red chilies in hot oil.']],
    tips: ['Add a squeeze of lemon at the end.'], mistakes: ['Overcooking into mush.'], vars: ['Chana dal with lauki (bottle gourd).'], serve: 'Rice or rotis.' });

  A({ id: 'khichdi', name: 'Moong Dal Khichdi', local: 'खिचड़ी', area: 'Gujarat', styles: ['home-style'], emoji: '🍚', course: 'main', level: 1, prep: 5, cook: 25, serves: 3,
    taste: { savory: 3, aromatic: 3, rich: 2 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['comfort', 'healthy', 'budget', 'one-pot', 'rainy-day'],
    desc: 'Soft, comforting rice and yellow moong dal porridge with a ghee-cumin tadka. India’s healing food.',
    story: 'Khichdi is one of India’s oldest dishes, mentioned by travelers in the 1300s. It is the first food for babies and the cure when you’re unwell, and in 2017 India showcased it as a “brand India” food.',
    equip: ['Pressure cooker or pot'], ing: [[100, 'g', 'rice'], [100, 'g', 'yellow moong dal'], [900, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'salt'], [100, 'g', 'mixed vegetables', 'optional'], [2, 'tbsp', 'ghee'], [1, 'tsp', 'cumin seeds'], [1, 'pinch', 'asafoetida (hing)'], [1, 'tsp', 'ginger', 'grated']],
    steps: [['Wash', '[[wash-rice|Wash]] rice and dal together.'], ['Cook', 'Pressure cook with water, turmeric, salt and vegetables 4 whistles (or simmer 25 min) until soft and porridge-like.', 20], ['Tadka', 'Pour over a ghee [[tadka]] of cumin, hing and ginger. Mash lightly and loosen with hot water.']],
    tips: ['A spoon of ghee on top is essential.'], mistakes: ['Too thick: it sets as it cools.'], vars: ['Masala khichdi with onion, tomato and peas.', 'Vegan: oil instead of ghee.'], serve: 'Papad, pickle, curd and kadhi.' });

  A({ id: 'veg-pulao', name: 'Vegetable Pulao', local: 'वेज पुलाव', area: 'Pan-India', styles: ['home-style'], emoji: '🍚', course: 'main', level: 1, prep: 10, cook: 25, rest: 20, serves: 4,
    taste: { aromatic: 4, savory: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['weeknight', 'one-pot', 'party', 'kids'],
    desc: 'Fragrant basmati cooked with whole spices, peas, carrots and beans.',
    story: 'Pulao is biryani’s gentler cousin, cooked together in one pot. Every Indian home has a version for lunchboxes and parties.',
    equip: ['Heavy pot with lid'], ing: [[300, 'g', 'basmati rice', 'soaked 20 min'], [2, 'tbsp', 'ghee'], [1, 'tsp', 'cumin seeds'], [1, '', 'bay leaf'], [4, '', 'green cardamom pods'], [4, '', 'whole cloves'], [1, 'stick', 'cinnamon'], [1, '', 'onion', 'sliced'], [1, 'tsp', 'ginger-garlic paste'], [200, 'g', 'peas, carrot and beans', 'chopped'], [500, 'ml', 'water'], [1, 'tsp', 'salt']],
    steps: [['Whole spices', 'Heat ghee, add cumin and whole spices, then onion until golden.'], ['Vegetables', 'Add ginger-garlic and vegetables; cook 2 minutes. Add drained rice and toss gently.'], ['Cook', 'Add water and salt; boil, then cover and cook on lowest heat 12 minutes. Rest 10 minutes.', 22]],
    tips: ['Fluff with a fork.'], mistakes: ['Stirring while cooking breaks grains.'], vars: ['Matar pulao, kashmiri pulao with fruit and nuts.'], serve: 'Raita and dal.' });

  A({ id: 'methi-thepla', name: 'Methi Thepla', local: 'મેથી થેપલા', area: 'Gujarat', styles: ['home-style'], emoji: '🫓', course: 'bread', level: 2, prep: 20, cook: 20, serves: 4,
    taste: { herby: 3, savory: 3, spicy: 2, bitter: 1 }, diet: ['vegetarian'], methods: ['saute'], tags: ['meal-prep', 'brunch', 'healthy', 'make-ahead'],
    desc: 'Soft, spiced whole-wheat flatbreads with fresh fenugreek leaves. Gujarat’s favorite travel food.',
    story: 'Gujarati families pack stacks of thepla for every train journey and trip abroad; they stay soft for days.',
    equip: ['Tawa', 'Rolling pin'], ing: [[250, 'g', 'whole wheat flour (atta)'], [2, 'tbsp', 'besan'], [1, 'bunch', 'fresh methi (fenugreek) leaves', 'chopped'], [3, 'tbsp', 'yogurt'], [1, 'tsp', 'ginger-green chili paste'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'Kashmiri chili powder'], [0.5, 'tsp', 'ajwain'], [1, 'tsp', 'sesame seeds'], [1, 'tsp', 'sugar'], [1, 'tsp', 'salt'], [2, 'tbsp', 'oil', 'plus for cooking'], [60, 'ml', 'water', 'as needed']],
    steps: [['Dough', 'Mix everything and [[knead]] into a soft dough with as little water as needed. Rest 10 minutes.', 10], ['Roll', '[[roll-roti|Roll]] thin circles.'], ['Cook', 'Cook on a hot tawa with a little oil, 1 minute per side, until golden spots appear.', 2]],
    tips: ['The yogurt keeps them soft for days.'], mistakes: ['Thick theplas: chewy.'], vars: ['Dudhi (bottle gourd) thepla.'], serve: 'Chundo (mango pickle), curd and chai.' });

  A({ id: 'undhiyu', name: 'Undhiyu', local: 'ઊંધિયું', area: 'Gujarat', styles: ['home-style'], emoji: '🫘', course: 'main', level: 3, prep: 45, cook: 50, serves: 6,
    taste: { aromatic: 5, sweet: 2, savory: 4, herby: 4, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer', 'deep-fry'], tags: ['festive', 'winter', 'impress'],
    desc: 'Gujarat’s winter festival mixed-vegetable casserole with green coconut masala and fenugreek dumplings.',
    story: '“Undhu” means upside-down: it was traditionally cooked in an earthen pot buried upside-down in a fire pit. It is the star of Uttarayan, the kite festival in January.',
    equip: ['Heavy pot', 'Kadai'], ing: ['#Green masala', [100, 'g', 'fresh coconut', 'grated'], [1, 'bunch', 'cilantro'], [4, '', 'green chilies'], [1, 'tbsp', 'ginger'], [3, 'tbsp', 'roasted peanuts'], [1, 'tbsp', 'sesame seeds'], [1, 'tbsp', 'sugar'], [1, 'tsp', 'salt'], [1, 'tbsp', 'lemon juice'],
      '#Vegetables', [250, 'g', 'surti papdi or flat beans'], [6, '', 'baby eggplants', 'slit'], [6, '', 'baby potatoes'], [200, 'g', 'purple yam or sweet potato', 'chunks'], [1, '', 'raw banana', 'chunks'], [100, 'g', 'green peas'],
      '#Methi muthiya', [100, 'g', 'besan'], [1, 'bunch', 'methi leaves', 'chopped'], [1, 'tsp', 'ginger-chili paste'], [0.5, 'tsp', 'salt'], [500, 'ml', 'oil', 'for frying'], '#Cooking', [4, 'tbsp', 'oil'], [1, 'tsp', 'ajwain'], [1, 'pinch', 'asafoetida (hing)'], [200, 'ml', 'water']],
    steps: [['Green masala', 'Grind all masala ingredients coarsely. Stuff some into the slit eggplants and potatoes.'], ['Muthiya', 'Mix muthiya ingredients with a little water into a firm dough, shape small dumplings and [[deep-fry]] until golden.', 6], ['Layer', 'Heat oil with ajwain and hing, add beans and peas, then layer yam, banana, potatoes and eggplants with the remaining masala. Add water.'], ['Slow cook', 'Cover tightly and cook on low 35–40 minutes without stirring (shake the pot) until all vegetables are tender. Add muthiya for the last 10 minutes.', 40, 'Don’t stir; layering keeps every vegetable intact.']],
    tips: ['Use fresh winter vegetables for the true flavor.'], mistakes: ['Stirring: mush.'], vars: ['Bake covered at {{180C}} for an “upside-down pot” effect.'], serve: 'Puris and shrikhand or jalebi.' });

  A({ id: 'dal-baati-churma', name: 'Dal Baati Churma', local: 'दाल बाटी चूरमा', area: 'Rajasthan', styles: ['home-style', 'dhaba'], emoji: '🥯', course: 'main', level: 3, prep: 30, cook: 60, serves: 4,
    taste: { rich: 5, savory: 4, sweet: 3, aromatic: 4 }, diet: ['vegetarian'], methods: ['bake', 'simmer'], tags: ['festive', 'impress', 'winter'],
    desc: 'Rajasthan’s royal trio: baked wheat balls soaked in ghee, spicy five-lentil dal and sweet crumbled churma.',
    story: 'Baati were baked by Rajput warriors in the desert sand under campfires. Accidentally dropped in sugarcane juice, legend says, they became churma.',
    equip: ['Oven', 'Pot', 'Grinder'], ing: ['#Baati', [300, 'g', 'whole wheat flour (atta)'], [50, 'g', 'semolina'], [80, 'g', 'ghee', 'plus more for dipping'], [0.5, 'tsp', 'ajwain'], [1, 'tsp', 'salt'], [0.25, 'tsp', 'baking soda'], [150, 'ml', 'warm water'],
      '#Panchmel dal', [150, 'g', 'mixed dals (toor, chana, moong, urad, masoor)'], [800, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], ...MASALA('ghee'),
      '#Churma', [3, '', 'baked baatis', 'reserved'], [80, 'g', 'powdered jaggery or sugar'], [3, 'tbsp', 'ghee'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'almonds', 'chopped']],
    steps: [['Baati dough', 'Rub ghee into flour, semolina, ajwain, salt and soda; add water for a stiff dough. Shape 12 balls with a thumb dent.'], ['Bake', 'Bake at {{200C}} 30–35 minutes, turning, until cracked and golden.', 33], ['Dal', 'Cook the mixed dals soft, then add to a [[bhuna|bhuna]] onion-tomato masala and simmer 10 minutes.', 35], ['Dip', 'Crack baatis and dunk in melted ghee.'], ['Churma', 'Grind 3 baatis to crumbs, mix with ghee, jaggery, cardamom and almonds.']],
    tips: ['Baatis should be crisp outside and crumbly inside.'], mistakes: ['Soft dough: baatis turn bready.'], vars: ['Air-fryer baati at {{180C}} 20 min.'], serve: 'Garlic chutney and onion.' });

  A({ id: 'gatte-ki-sabzi', name: 'Gatte ki Sabzi', local: 'गट्टे की सब्जी', area: 'Rajasthan', styles: ['home-style'], emoji: '🟠', course: 'main', level: 2, prep: 20, cook: 35, serves: 4,
    taste: { sour: 3, spicy: 3, savory: 4, aromatic: 4 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['budget', 'comfort'],
    desc: 'Gram-flour dumplings simmered in a tangy, spiced yogurt gravy. Rajasthan’s clever desert curry.',
    story: 'In the Rajasthani desert, where fresh vegetables were scarce, cooks made “vegetables” from besan dough.',
    equip: ['Pot', 'Kadai'], ing: ['#Gatte', [150, 'g', 'besan'], [0.5, 'tsp', 'ajwain'], [1, 'tsp', 'Kashmiri chili powder'], [0.5, 'tsp', 'salt'], [2, 'tbsp', 'yogurt'], [2, 'tbsp', 'oil'],
      '#Gravy', [250, 'g', 'yogurt', 'whisked with 1 tbsp besan'], [3, 'tbsp', 'ghee or oil'], [1, 'tsp', 'cumin seeds'], [1, 'pinch', 'asafoetida (hing)'], [1, 'tsp', 'ginger-garlic paste'], [1, 'tsp', 'ground coriander'], [1, 'tsp', 'Kashmiri chili powder'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'salt'], [1, 'tsp', 'garam masala'], [1, 'handful', 'cilantro']],
    steps: [['Gatte', 'Make a stiff dough, roll into thin logs and boil 10 minutes until they float. Cool, slice. Save the water.', 10], ['Gravy', 'Temper cumin and hing in ghee, add ginger-garlic and spices, then the yogurt mixture, stirring constantly until it boils.', 5, 'Constant stirring stops the yogurt splitting.'], ['Simmer', 'Add gatte and 250 ml of their cooking water; simmer 10 minutes. Finish with garam masala and cilantro.', 10]],
    tips: ['Shallow-fry the boiled gatte for extra flavor.'], mistakes: ['Soft dough: gatte fall apart.'], vars: ['Gatte pulao.'], serve: 'Rotis or bajra roti.' });

  A({ id: 'mirchi-ka-salan', name: 'Mirchi ka Salan', local: 'مرچی کا سالن', area: 'Hyderabad', styles: ['mughlai'], emoji: '🌶️', course: 'side', level: 2, prep: 20, cook: 30, serves: 4,
    taste: { sour: 3, spicy: 3, rich: 4, aromatic: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'party'],
    desc: 'Mild green chilies in a nutty peanut-sesame-coconut gravy with tamarind. Biryani’s best friend.',
    story: 'A Hyderabadi classic always served with biryani, balancing its richness with tangy, nutty heat.',
    equip: ['Pan', 'Grinder'], ing: [[8, '', 'large mild green chilies', 'slit'], [3, 'tbsp', 'peanuts'], [2, 'tbsp', 'sesame seeds'], [2, 'tbsp', 'desiccated coconut'], [1, 'tsp', 'cumin seeds'], [1, 'tsp', 'coriander seeds'], [4, 'tbsp', 'oil'], [0.5, 'tsp', 'mustard seeds'], [10, 'leaf', 'curry leaves'], [1, '', 'onion', 'chopped'], [1, 'tsp', 'ginger-garlic paste'], [2, 'tbsp', 'tamarind paste'], [1, 'tsp', 'jaggery'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'salt']],
    steps: [['Fry chilies', 'Fry slit chilies in oil until blistered. Remove.', 3], ['Paste', '[[toast|Dry-roast]] peanuts, sesame, coconut, cumin and coriander; grind with water to a paste.'], ['Gravy', 'Temper mustard and curry leaves, cook onion and ginger-garlic, add paste and turmeric; fry 5 minutes. Add tamarind, jaggery, salt and 300 ml water.', 8], ['Simmer', 'Add chilies and simmer 10 minutes until oil floats.', 10]],
    tips: ['Use banana peppers or bhavnagri chilies.'], mistakes: ['Burnt sesame: bitter.'], vars: ['Bagara baingan uses the same gravy with eggplant.'], serve: 'With biryani.' });

  A({ id: 'bagara-baingan', name: 'Bagara Baingan', local: 'بگھارے بیگن', area: 'Hyderabad', styles: ['mughlai'], emoji: '🍆', course: 'main', level: 2, prep: 20, cook: 30, serves: 4,
    taste: { rich: 4, sour: 3, savory: 4, aromatic: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'party'],
    desc: 'Baby eggplants simmered in Hyderabad’s rich, tangy peanut-sesame-coconut gravy.',
    story: 'A Hyderabadi wedding favorite served beside biryani. “Bagara” means tempered.',
    equip: ['Pan', 'Grinder'], ing: [[8, '', 'baby eggplants', 'cross-slit'], [3, 'tbsp', 'peanuts'], [2, 'tbsp', 'sesame seeds'], [2, 'tbsp', 'desiccated coconut'], [1, 'tsp', 'coriander seeds'], [5, 'tbsp', 'oil'], [1, 'tsp', 'cumin seeds'], [10, 'leaf', 'curry leaves'], [1, '', 'onion', 'chopped'], [1, 'tbsp', 'ginger-garlic paste'], [1, 'tsp', 'Kashmiri chili powder'], [0.5, 'tsp', 'ground turmeric'], [2, 'tbsp', 'tamarind paste'], [1, 'tsp', 'jaggery'], [1, 'tsp', 'salt']],
    steps: [['Fry eggplants', 'Fry eggplants in oil until golden and half-cooked. Remove.', 6], ['Paste', 'Roast and grind peanuts, sesame, coconut and coriander.'], ['Gravy', 'Temper cumin and curry leaves, cook onion, ginger-garlic and spices, add paste and fry 5 minutes. Add tamarind, jaggery, salt and water.', 8], ['Simmer', 'Add eggplants and simmer 12 minutes until tender and oil floats.', 12]],
    tips: ['Choose small, shiny eggplants.'], mistakes: ['Undercooked eggplant: spongy.'], vars: ['Stuff the paste inside the eggplants.'], serve: 'Biryani or rice.' });

  A({ id: 'litti-chokha', name: 'Litti Chokha', local: 'लिट्टी चोखा', area: 'Bihar', styles: ['home-style', 'chaat'], emoji: '🧆', course: 'main', level: 2, prep: 30, cook: 40, serves: 4,
    taste: { smoky: 4, savory: 4, spicy: 3, herby: 3 }, diet: ['vegetarian'], methods: ['bake', 'grill'], tags: ['street-food', 'winter', 'healthy'],
    desc: 'Bihar’s rustic baked wheat balls stuffed with spiced roasted gram flour (sattu), with smoky mashed vegetable chokha.',
    story: 'Once the food of soldiers and travelers in Bihar, roasted over cow-dung cakes or coal, litti chokha is now a celebrated street food.',
    equip: ['Oven or grill', 'Gas flame'], ing: ['#Dough', [300, 'g', 'whole wheat flour (atta)'], [2, 'tbsp', 'ghee'], [0.5, 'tsp', 'salt'], [150, 'ml', 'water'],
      '#Sattu filling', [150, 'g', 'sattu (roasted gram flour)'], [1, '', 'onion', 'finely chopped'], [2, '', 'green chilies'], [1, 'tbsp', 'ginger', 'grated'], [1, 'tsp', 'ajwain'], [1, 'tsp', 'nigella seeds'], [2, 'tbsp', 'mustard oil'], [1, 'tbsp', 'lemon juice'], [1, 'tsp', 'salt'], [1, 'handful', 'cilantro'],
      '#Chokha', [1, '', 'eggplant'], [2, '', 'tomatoes'], [2, '', 'potatoes', 'boiled'], [2, 'clove', 'garlic'], [1, 'tbsp', 'mustard oil'], [0.5, 'tsp', 'salt'], [50, 'g', 'ghee', 'melted, for dipping']],
    steps: [['Filling', 'Mix all sattu ingredients; it should hold when squeezed.'], ['Stuff', 'Make a firm dough, stuff balls with filling and seal.'], ['Bake', 'Bake at {{200C}} 30–35 minutes, turning, until cracked and golden; dip in ghee.', 33], ['Chokha', '[[char]] eggplant and tomatoes on a flame, peel and mash with potato, raw garlic, mustard oil and salt.', 15]],
    tips: ['Mustard oil gives the authentic Bihari punch.'], mistakes: ['Dry filling: add a little water.'], vars: ['Pan-fry litti in ghee on a tawa.'], serve: 'Green chutney.' });

  /* ---------- South Indian veg ---------- */
  A({ id: 'ven-pongal', name: 'Ven Pongal', local: 'வெண் பொங்கல்', area: 'Tamil Nadu', styles: ['south-indian', 'home-style'], emoji: '🍚', course: 'breakfast', level: 1, prep: 5, cook: 25, serves: 3,
    taste: { savory: 3, rich: 4, aromatic: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['brunch', 'comfort', 'festive'],
    desc: 'Creamy rice and moong dal cooked soft, with a ghee tempering of black pepper, cumin, ginger and cashews.',
    story: 'Pongal is also the name of Tamil Nadu’s harvest festival. Ven (white) pongal is a temple offering and a beloved breakfast.',
    equip: ['Pressure cooker'], ing: [[120, 'g', 'rice'], [60, 'g', 'yellow moong dal', 'dry-roasted'], [900, 'ml', 'water'], [1, 'tsp', 'salt'], [4, 'tbsp', 'ghee'], [1, 'tsp', 'black peppercorns', 'crushed'], [1, 'tsp', 'cumin seeds'], [1, 'tbsp', 'ginger', 'minced'], [12, '', 'cashews'], [10, 'leaf', 'curry leaves'], [1, 'pinch', 'asafoetida (hing)']],
    steps: [['Roast dal', '[[toast|Dry-roast]] moong dal until fragrant.'], ['Cook', 'Pressure cook rice, dal, water and salt 5 whistles until mushy. Mash.', 20], ['Tadka', 'Fry pepper, cumin, ginger, cashews, curry leaves and hing in ghee; pour over.']],
    tips: ['Generous ghee is the point.'], mistakes: ['Too dry: add hot water.'], vars: ['Sakkarai pongal (sweet, with jaggery).'], serve: 'Coconut chutney and sambar.' });

  A({ id: 'uttapam', name: 'Onion Tomato Uttapam', local: 'ஊத்தப்பம்', area: 'Tamil Nadu', styles: ['south-indian'], emoji: '🥞', course: 'breakfast', level: 1, prep: 10, cook: 20, serves: 4,
    taste: { savory: 4, sour: 2, herby: 2 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['brunch', 'kids', 'budget'],
    desc: 'Thick, soft dosa-batter pancakes topped with onion, tomato, chili and cilantro.',
    story: 'A perfect use for slightly over-fermented dosa batter, the uttapam is South India’s savory pizza.',
    equip: ['Tawa'], ing: [[500, 'ml', 'idli/dosa batter', 'fermented'], [1, '', 'onion', 'finely chopped'], [1, '', 'tomato', 'finely chopped'], [2, '', 'green chilies', 'minced'], [1, 'handful', 'cilantro'], [1, 'tsp', 'gunpowder (podi)', 'optional'], [3, 'tbsp', 'oil']],
    steps: [['Spread', 'Pour a ladle of batter on a medium-hot tawa and spread to a thick 15 cm round.'], ['Top', 'Press onion, tomato, chili and cilantro onto the surface. Drizzle oil around.'], ['Cook', 'Cook 3 minutes, flip, cook 2 minutes until golden.', 5]],
    tips: ['Thick and soft, unlike crisp dosa.'], mistakes: ['Thin batter: it won’t hold toppings.'], vars: ['Mini uttapams; cheese uttapam.'], serve: 'Coconut chutney and sambar.' });

  A({ id: 'pesarattu', name: 'Pesarattu', local: 'పెసరట్టు', area: 'Andhra Pradesh', styles: ['south-indian'], emoji: '🟩', course: 'breakfast', level: 1, prep: 10, cook: 20, rest: 360, serves: 4,
    taste: { savory: 4, herby: 3, spicy: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['saute'], tags: ['brunch', 'healthy'],
    desc: 'Protein-packed green moong dal crêpes from Andhra, crisp and herby, no fermentation needed.',
    story: 'Andhra’s favorite breakfast, often served as “MLA pesarattu” stuffed with upma.',
    equip: ['Blender', 'Tawa'], ing: [[200, 'g', 'whole green moong', 'soaked 6 h'], [2, '', 'green chilies'], [1, 'tbsp', 'ginger'], [1, 'tsp', 'cumin seeds'], [1, 'tsp', 'salt'], [1, '', 'onion', 'finely chopped'], [3, 'tbsp', 'oil']],
    steps: [['Batter', 'Grind soaked moong with chilies, ginger, cumin and salt to a smooth batter.'], ['Spread', 'Spread thin on a hot tawa like a dosa; sprinkle onion.'], ['Crisp', 'Drizzle oil and cook until crisp; fold.', 3]],
    tips: ['Add 2 tbsp rice for extra crispness.'], mistakes: ['Thick batter: not crisp.'], vars: ['Stuff with upma (MLA pesarattu).'], serve: 'Ginger chutney.' });

  A({ id: 'curd-rice', name: 'Curd Rice', local: 'தயிர் சாதம்', area: 'Tamil Nadu', styles: ['south-indian', 'home-style'], emoji: '🍚', course: 'main', level: 1, prep: 10, cook: 5, serves: 3,
    taste: { sour: 2, savory: 3, herby: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'quick', 'comfort', 'healthy'],
    desc: 'Cooling mashed rice with yogurt, tempered with mustard, curry leaves, ginger and chili.',
    story: 'Thayir sadam ends every South Indian meal and is the ultimate comfort on a hot day.',
    equip: ['Bowl', 'Small pan'], ing: [[300, 'g', 'cooked rice', 'soft'], [300, 'g', 'yogurt'], [100, 'ml', 'milk'], [0.75, 'tsp', 'salt'], [1, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'urad dal'], [10, 'leaf', 'curry leaves'], [1, '', 'green chili', 'chopped'], [1, 'tsp', 'ginger', 'grated'], [1, 'handful', 'pomegranate or grapes', 'optional']],
    steps: [['Mash', 'Mash warm rice with yogurt, milk and salt.'], ['Tadka', 'Make a [[tadka]] of mustard, urad dal, curry leaves, chili and ginger; pour over.'], ['Serve', 'Top with pomegranate. Serve cool.']],
    tips: ['Milk stops it turning sour in lunchboxes.'], mistakes: ['Hot rice with yogurt curdles; cool slightly.'], vars: ['Add grated carrot and cucumber.'], serve: 'Pickle.' });

  /* ---------- Breakfast, chaat & Bengal ---------- */
  A({ id: 'sabudana-khichdi', name: 'Sabudana Khichdi', local: 'साबूदाणा खिचडी', area: 'Maharashtra', styles: ['home-style'], emoji: '⚪', course: 'breakfast', level: 2, prep: 10, cook: 15, rest: 360, serves: 3,
    taste: { savory: 3, sour: 2, rich: 3 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['brunch', 'quick'],
    desc: 'Chewy tapioca pearls tossed with peanuts, potatoes, cumin and green chili. The fasting-day favorite.',
    story: 'Made during Hindu fasts (vrat) like Navratri and Ekadashi, when grains are avoided.',
    equip: ['Kadai'], ing: [[200, 'g', 'sabudana (tapioca pearls)', 'soaked 6 h'], [80, 'g', 'roasted peanuts', 'coarsely crushed'], [2, 'tbsp', 'oil', 'or ghee if not vegan'], [1, 'tsp', 'cumin seeds'], [2, '', 'green chilies'], [1, '', 'potato', 'boiled, diced'], [1, 'tsp', 'rock salt (sendha namak)'], [1, 'tsp', 'sugar'], [1, 'tbsp', 'lemon juice'], [1, 'handful', 'cilantro']],
    steps: [['Check pearls', 'Soaked pearls should squash easily between fingers. Mix with peanuts, salt and sugar.', 0, 'Use just enough water to cover when soaking, or they turn sticky.'], ['Temper', 'Crackle cumin and chilies, add potato.'], ['Toss', 'Add sabudana and toss on low heat 5 minutes until translucent.', 5], ['Finish', 'Add lemon and cilantro.']],
    tips: ['Low heat stops sticking.'], mistakes: ['Over-soaking: mushy lump.'], vars: ['Sabudana vada (fried patties).'], serve: 'Yogurt.' });

  A({ id: 'aloo-tikki-chaat', name: 'Aloo Tikki Chaat', local: 'आलू टिक्की चाट', area: 'Delhi', styles: ['chaat'], emoji: '🥔', course: 'snack', level: 2, prep: 20, cook: 20, serves: 4,
    taste: { sour: 4, sweet: 3, spicy: 3, herby: 3, savory: 4 }, diet: ['vegetarian'], methods: ['saute'], tags: ['street-food', 'party', 'rainy-day'],
    desc: 'Crisp potato patties topped with chole, yogurt, tamarind and mint chutneys, onion and sev.',
    story: 'Delhi’s chaat-wallahs fry tikkis slowly on giant flat tawas until shatteringly crisp.',
    equip: ['Tawa'], ing: [[4, '', 'potatoes', 'boiled, grated'], [2, 'tbsp', 'cornstarch'], [1, 'tsp', 'salt'], [1, '', 'green chili', 'minced'], [3, 'tbsp', 'oil'], [200, 'g', 'chole or ragda', 'warm'], [200, 'g', 'yogurt', 'sweetened'], [3, 'tbsp', 'tamarind chutney'], [3, 'tbsp', 'green chutney'], [1, '', 'onion', 'chopped'], [1, 'tsp', 'chaat masala'], [40, 'g', 'sev'], [2, 'tbsp', 'pomegranate seeds']],
    steps: [['Tikkis', 'Mix potato, cornstarch, salt and chili; shape 8 patties.'], ['Crisp', '[[shallow-fry|Shallow-fry]] on medium 5–6 minutes per side until deep golden and crisp.', 12, 'Patience gives the crunch.'], ['Top', 'Top with chole, yogurt, chutneys, onion, chaat masala, sev and pomegranate.']],
    tips: ['Serve immediately.'], mistakes: ['High heat: burnt outside.'], vars: ['Aloo tikki burger.'], serve: 'Right away.' });

  A({ id: 'bhel-puri', name: 'Bhel Puri', local: 'भेळ पुरी', area: 'Mumbai', styles: ['chaat'], emoji: '🥗', course: 'snack', level: 1, prep: 15, cook: 0, serves: 4,
    taste: { sour: 4, sweet: 3, spicy: 3, herby: 3 }, diet: ['vegan'], methods: ['no-cook'], tags: ['street-food', 'quick', 'summer', 'party'],
    desc: 'Puffed rice tossed with onion, tomato, potato, chutneys and sev. Crunchy, tangy, sweet and spicy.',
    story: 'The beach snack of Mumbai’s Chowpatty, mixed to order in a steel bowl and eaten with a flat puri as a spoon.',
    equip: ['Large bowl'], ing: [[150, 'g', 'puffed rice (murmura)'], [1, '', 'potato', 'boiled, diced'], [1, '', 'onion', 'chopped'], [1, '', 'tomato', 'chopped'], [3, 'tbsp', 'tamarind-date chutney'], [2, 'tbsp', 'green chutney'], [1, 'tsp', 'chaat masala'], [80, 'g', 'sev'], [30, 'g', 'roasted peanuts'], [1, 'tbsp', 'lemon juice'], [1, 'handful', 'cilantro'], [1, '', 'raw mango', 'diced, optional']],
    steps: [['Mix', 'In a big bowl, toss puffed rice, potato, onion, tomato, peanuts and mango.'], ['Dress', 'Add chutneys, chaat masala and lemon; toss quickly.'], ['Serve', 'Top with sev and cilantro and eat immediately.', 0, 'Bhel goes soggy in minutes. Mix just before eating.']],
    tips: ['Adjust sweet/spicy with chutney amounts.'], mistakes: ['Mixing early.'], vars: ['Sev puri, dry bhel.'], serve: 'Immediately.' });

  A({ id: 'misal-pav', name: 'Misal Pav', local: 'मिसळ पाव', area: 'Maharashtra', styles: ['chaat'], emoji: '🌶️', course: 'breakfast', level: 2, prep: 20, cook: 40, rest: 480, serves: 4,
    taste: { spicy: 5, sour: 3, savory: 4, aromatic: 4 }, diet: ['vegan', 'high-protein'], methods: ['simmer'], tags: ['brunch', 'street-food', 'rainy-day'],
    desc: 'Fiery sprouted moth-bean curry with a red oil “tarri”, topped with farsan and onion, served with pav.',
    story: 'Pune, Nashik and Kolhapur each claim the best misal. The fiery red oil floating on top (kat or tarri) is the hallmark.',
    equip: ['Pot', 'Pan', 'Grinder'], ing: [[250, 'g', 'sprouted moth beans (matki)'], [2, 'tbsp', 'dry coconut'], [1, '', 'onion', 'sliced, roasted'], [4, 'clove', 'garlic'], [1, 'tbsp', 'ginger'], [4, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [2, 'tsp', 'Kashmiri chili powder'], [2, 'tbsp', 'misal or goda masala'], [1, '', 'tomato', 'chopped'], [1, 'tbsp', 'tamarind paste'], [1, 'tsp', 'salt'], [800, 'ml', 'water'],
      '#Toppings', [8, '', 'pav buns'], [100, 'g', 'farsan or mixture'], [1, '', 'onion', 'chopped'], [1, '', 'lemon'], [1, 'handful', 'cilantro']],
    steps: [['Masala paste', 'Roast coconut and onion until dark, grind with garlic and ginger.'], ['Sprouts', '[[boil|Boil]] sprouts 10 minutes until tender.', 10], ['Tarri', 'Heat oil, mustard seeds, add paste, chili and misal masala; fry until the oil turns red. Add tomato, tamarind, salt and water; simmer 15 minutes. Add sprouts.', 20, 'The red oil floating on top is the sign of a good misal.'], ['Serve', 'Ladle into bowls, top with farsan, onion, cilantro and lemon.']],
    tips: ['Serve extra tarri on the side for heat lovers.'], mistakes: ['Soggy farsan: add at the table.'], vars: ['Use mixed sprouts.'], serve: 'Buttered pav.' });

  A({ id: 'aloo-posto', name: 'Aloo Posto', local: 'আলু পোস্ত', area: 'West Bengal', styles: ['home-style'], emoji: '🥔', course: 'side', level: 1, prep: 15, cook: 20, serves: 3,
    taste: { rich: 4, savory: 3, sweet: 1 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['comfort', 'budget'],
    desc: 'Potatoes in a creamy, nutty white poppy-seed paste with mustard oil and green chili.',
    story: 'Poppy seeds (posto) are a Bengali obsession dating to colonial-era opium cultivation. Aloo posto with dal and rice is the classic Bengali lunch.',
    equip: ['Kadai', 'Grinder'], ing: [[500, 'g', 'potatoes', 'cubed'], [4, 'tbsp', 'white poppy seeds (posto)', 'soaked 20 min'], [3, '', 'green chilies'], [3, 'tbsp', 'mustard oil'], [0.5, 'tsp', 'nigella seeds (kalonji)'], [0.25, 'tsp', 'ground turmeric'], [1, 'tsp', 'salt'], [0.5, 'tsp', 'sugar'], [150, 'ml', 'water']],
    steps: [['Paste', 'Grind poppy seeds and chilies with a little water to a smooth paste.'], ['Potatoes', 'Heat mustard oil, add nigella, then potatoes, turmeric and salt; cook 8 minutes.', 8], ['Posto', 'Add paste, sugar and water; cover and cook until potatoes are tender and the paste clings.', 10]],
    tips: ['Drizzle raw mustard oil on top.'], mistakes: ['Grainy paste: soak longer.'], vars: ['Jhinge posto (ridge gourd).'], serve: 'Rice and dal.' });

  /* ---------- Sweets & drinks ---------- */
  A({ id: 'shrikhand', name: 'Shrikhand', local: 'श्रीखंड', area: 'Maharashtra', styles: ['sweets'], emoji: '🍨', course: 'dessert', level: 1, prep: 15, cook: 0, rest: 480, serves: 4,
    taste: { sweet: 4, sour: 2, rich: 4, aromatic: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'festive', 'make-ahead'],
    desc: 'Silky strained yogurt sweetened and scented with saffron, cardamom and pistachio.',
    story: 'Shrikhand is eaten at Gudi Padwa, the Marathi new year, with hot puris. Mango shrikhand (amrakhand) is the summer version.',
    equip: ['Muslin cloth', 'Bowl'], ing: [[1, 'kg', 'full-fat yogurt'], [120, 'g', 'powdered sugar'], [1, 'pinch', 'saffron', 'in 1 tbsp warm milk'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'pistachios', 'chopped']],
    steps: [['Hang', 'Hang the yogurt in muslin in the fridge 8 hours to make thick chakka.', 0], ['Sweeten', 'Whisk chakka with sugar until silky.'], ['Flavor', 'Add saffron milk and cardamom; garnish with pistachios. Chill.']],
    tips: ['Push through a sieve for ultimate smoothness.'], mistakes: ['Watery: hang longer.'], vars: ['Amrakhand with mango pulp.'], serve: 'With puris.' });

  A({ id: 'rasgulla', name: 'Rasgulla', local: 'রসগোল্লা', area: 'West Bengal', styles: ['sweets'], emoji: '⚪', course: 'dessert', level: 3, prep: 30, cook: 30, rest: 120, serves: 6,
    taste: { sweet: 5, rich: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'make-ahead'],
    desc: 'Spongy, juicy balls of fresh chhena cheese cooked in light sugar syrup.',
    story: 'Nobin Chandra Das is credited with creating the spongy rasgulla in 1868 Kolkata. Bengal and Odisha both hold GI tags for their versions.',
    equip: ['Muslin', 'Wide pot with lid'], ing: [[1, 'l', 'full-fat milk'], [3, 'tbsp', 'lemon juice', 'in 3 tbsp water'], [250, 'g', 'sugar'], [1, 'l', 'water'], [1, 'tsp', 'rose water', 'optional']],
    steps: [['Chhena', 'Boil milk, curdle with lemon water, strain, rinse and hang 30 minutes.', 30], ['Knead', '[[knead]] 8–10 minutes until smooth and greasy-soft. Roll 14 crack-free balls.', 10, 'Perfect kneading is the secret to spongy rasgulla.'], ['Cook', 'Boil sugar and water. Add balls, cover and boil hard 15 minutes; they double.', 15], ['Chill', 'Cool in syrup and chill 2 hours.']],
    tips: ['Hard boiling keeps them spongy.'], mistakes: ['Dry chhena: hard balls.'], vars: ['Nolen gur (date jaggery) rasgulla.'], serve: 'Chilled.' });

  A({ id: 'semiya-payasam', name: 'Semiya Payasam', local: 'സേമിയ പായസം', area: 'Kerala', styles: ['sweets', 'south-indian'], emoji: '🥛', course: 'dessert', level: 1, prep: 5, cook: 25, serves: 4,
    taste: { sweet: 4, rich: 4, aromatic: 4 }, diet: ['vegetarian'], methods: ['simmer'], tags: ['festive', 'quick'],
    desc: 'Toasted vermicelli simmered in creamy milk with ghee-fried cashews, raisins and cardamom.',
    story: 'Payasam ends every South Indian festival feast, from Onam sadhya to weddings.',
    equip: ['Heavy pan'], ing: [[2, 'tbsp', 'ghee'], [15, '', 'cashews'], [1, 'tbsp', 'raisins'], [60, 'g', 'vermicelli (semiya)'], [750, 'ml', 'whole milk'], [80, 'g', 'sugar'], [0.5, 'tsp', 'cardamom powder'], [1, 'pinch', 'saffron']],
    steps: [['Fry', 'Fry cashews and raisins in ghee; remove. Toast vermicelli in the same ghee until golden.', 3], ['Simmer', 'Add milk, simmer 10–12 minutes until vermicelli is soft and milk thickens.', 12], ['Sweeten', 'Add sugar, cardamom and saffron; top with nuts.']],
    tips: ['Thickens as it cools.'], mistakes: ['Burnt milk: stir.'], vars: ['Palada payasam, ada pradhaman with jaggery and coconut milk.'], serve: 'Warm or chilled.' });

  A({ id: 'mysore-pak', name: 'Mysore Pak', local: 'ಮೈಸೂರು ಪಾಕ್', area: 'Karnataka', styles: ['sweets', 'south-indian'], emoji: '🟨', course: 'dessert', level: 3, prep: 10, cook: 20, rest: 60, serves: 16,
    taste: { sweet: 5, rich: 5 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'make-ahead'],
    desc: 'Rich, porous gram-flour fudge made with lots of ghee, melting in the mouth.',
    story: 'Created in the royal kitchen of Mysore Palace by cook Kakasura Madappa for Krishna Raja Wadiyar IV.',
    equip: ['Heavy pan', 'Greased tray'], ing: [[100, 'g', 'besan', 'sifted'], [250, 'g', 'sugar'], [100, 'ml', 'water'], [250, 'g', 'ghee', 'hot']],
    steps: [['Ghee', 'Keep ghee hot. Mix besan with 4 tbsp of the ghee.'], ['Syrup', 'Boil sugar and water to one-string consistency.', 5], ['Cook', 'Add besan mix to the syrup, stirring. Add hot ghee a ladle at a time, stirring constantly, until it froths, bubbles and pulls from the pan (8–10 min).', 10, 'Adding hot ghee makes the porous, honeycomb texture.'], ['Set', 'Pour into the tray, cut while warm.']],
    tips: ['Work fast once it froths.'], mistakes: ['Overcooking: hard, crumbly.'], vars: ['Soft (melt-in-mouth) Mysore pak with more ghee.'], serve: 'At Diwali.' });

  A({ id: 'filter-coffee', name: 'South Indian Filter Coffee', local: 'ஃபில்டர் காபி', area: 'Tamil Nadu', styles: ['south-indian'], emoji: '☕', course: 'drink', level: 1, prep: 5, cook: 15, serves: 2,
    taste: { bitter: 3, sweet: 3, rich: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['brunch', 'quick'],
    desc: 'Strong coffee-chicory decoction with boiled frothy milk, poured between a tumbler and dabarah.',
    story: 'Coffee came to Karnataka in the 1600s with Baba Budan. The tall pour between tumbler and dabarah cools and froths it.',
    equip: ['South Indian coffee filter', 'Tumbler and dabarah'], ing: [[3, 'tbsp', 'filter coffee powder (coffee-chicory blend)'], [150, 'ml', 'boiling water'], [300, 'ml', 'whole milk'], [3, 'tsp', 'sugar']],
    steps: [['Decoction', 'Put coffee in the filter top, press lightly, pour boiling water and let drip 15 minutes.', 15], ['Milk', 'Boil milk until frothy.'], ['Mix and pour', 'Add 3–4 tbsp decoction and sugar to the milk; pour between tumbler and dabarah from a height to froth.']],
    tips: ['80:20 coffee to chicory is classic.'], mistakes: ['Weak decoction: use more powder.'], vars: ['Jaggery filter coffee.'], serve: 'With idli or dosa.' });
})();
