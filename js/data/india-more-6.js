/* India batch 6: Kashmir & Ladakh, Punjab & Haryana, UP, Uttarakhand, MP, Sindhi, Gujarat, Maharashtra, Telangana,
   Karnataka, Kerala, Tamil Nadu, Goa, Odisha, Bengal, the Northeast, Chhattisgarh, Lakshadweep. Original recipes written for Dish Dictionary. */
'use strict';
(function () {
  const X = (area, styles, d) => DD.add(Object.assign({ country: 'India', flag: '🇮🇳', region: 'South Asia', area, styles }, d));
  const H = ['home-style'], SW = ['sweets'], ST = ['chaat'], SI = ['south-indian', 'home-style'];

  /* ---------- Kashmir & Ladakh ---------- */
  X('Kashmir', ['mughlai'], { id: 'modur-pulao', name: 'Modur Pulao (Sweet Saffron Rice)', local: 'مۄدُر پلاو', emoji: '🍚', course: 'main', level: 2, prep: 15, cook: 30, rest: 30, serves: 4,
    taste: { sweet: 4, aromatic: 5, rich: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'impress'],
    desc: 'Kashmiri wedding rice cooked in ghee and milk with sugar, saffron, cardamom, cinnamon and plenty of dry fruit.',
    story: 'Modur means sweet. Served at Kashmiri Pandit and Muslim weddings alongside savoury dishes.',
    equip: ['Heavy pot with lid'],
    ing: [[300, 'g', 'basmati rice', 'soaked 30 min'], [4, 'tbsp', 'ghee'], [4, '', 'green cardamom'], [1, 'piece', 'cinnamon stick'], [4, '', 'whole cloves'], [120, 'g', 'sugar'], [250, 'ml', 'milk'], [350, 'ml', 'water'], [1, 'pinch', 'saffron', 'soaked in warm milk'], [30, 'g', 'cashews'], [30, 'g', 'almonds', 'slivered'], [2, 'tbsp', 'raisins'], [0.25, 'tsp', 'salt']],
    steps: [['Whole spices', '[[bloom|Bloom]] cardamom, cinnamon and cloves in ghee; fry the nuts and raisins and lift out.', 3], ['Rice', 'Add drained rice and toast gently; add milk, water, sugar, salt and saffron.', 3], ['Cook', 'Cover and cook on low until done, 15 minutes; rest 10, fold in the nuts.', 25]],
    tips: ['Add sugar with the liquid so each grain is glazed.'], mistakes: ['High heat: sugar catches.'], vars: ['Add dried apricots or coconut.'], serve: 'With nadru yakhni or dum aloo.' });

  X('Ladakh', H, { id: 'skyu', name: 'Skyu', local: 'སྐྱུ', emoji: '🥣', course: 'soup', level: 2, prep: 25, cook: 30, serves: 4,
    taste: { savory: 4, umami: 2 }, diet: ['vegan'], methods: ['simmer'], tags: ['winter', 'comfort', 'one-pot'],
    desc: 'Ladakhi thumb-pressed pasta stewed with root vegetables in a thick, warming broth.',
    story: 'A high-altitude winter meal; the little dough pieces are pressed with the thumb, like Italian orecchiette.',
    equip: ['Pot'],
    ing: [[250, 'g', 'whole wheat flour (atta)'], [130, 'ml', 'water'], [2, 'tbsp', 'oil'], [1, '', 'onion', 'chopped'], [3, 'clove', 'garlic'], [1, 'tbsp', 'ginger'], [2, '', 'tomatoes', 'chopped'], [1, '', 'turnip', 'diced'], [1, '', 'carrot', 'diced'], [2, '', 'potatoes', 'diced'], [100, 'g', 'spinach'], [1.2, 'l', 'water'], [1, 'tsp', 'salt']],
    steps: [['Dough', '[[knead|Knead]] a firm dough; rest 15 minutes.', 15], ['Broth', '[[saute|Fry]] onion, garlic and ginger; add tomato, vegetables, water and salt and [[simmer]] 10 minutes.', 15], ['Skyu', 'Pinch small pieces of dough, press each with your thumb into a cup, drop in and simmer 12 minutes; add spinach at the end.', 12]],
    tips: ['Thin pieces cook evenly.'], mistakes: ['Adding all at once: they clump.'], vars: ['Chutagi: bow-tie shaped dough pieces.'], serve: 'Hot, with butter tea or chili.' });

  /* ---------- Punjab & Haryana ---------- */
  X('Punjab', ['dhaba'], { id: 'makki-di-roti', name: 'Makki di Roti', local: 'ਮੱਕੀ ਦੀ ਰੋਟੀ', emoji: '🫓', course: 'bread', level: 2, prep: 15, cook: 20, serves: 4,
    taste: { savory: 3, sweet: 1, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['winter'],
    desc: 'Rustic Punjabi cornmeal flatbreads patted by hand and cooked with ghee; the partner of sarson ka saag.',
    story: 'Made in Punjabi winters when mustard greens and fresh maize flour are in season.',
    equip: ['Tawa', 'Parchment or plastic sheet'],
    ing: [[300, 'g', 'makki atta (fine maize flour)'], [0.5, 'tsp', 'salt'], [1, 'tbsp', 'ghee'], [250, 'ml', 'warm water'], [3, 'tbsp', 'ghee', 'for cooking']],
    steps: [['Knead', '[[knead|Knead]] the flour with salt, ghee and warm water, a little at a time, with the heel of your hand until smooth.'], ['Pat', 'Pat each ball into a thick round between sheets.'], ['Cook', 'Cook on a hot tawa, flipping, with ghee until spotted brown.', 16]],
    tips: ['Knead each roti separately; maize dough dries fast.'], mistakes: ['Cold water: cracks.'], vars: ['Add grated radish or methi.'], serve: 'Sarson ka saag, white butter and jaggery.' });

  X('Punjab', SW, { id: 'pinni', name: 'Atta Pinni', local: 'ਪਿੰਨੀ', emoji: '🟤', course: 'dessert', level: 1, prep: 10, cook: 25, serves: 14,
    taste: { sweet: 4, rich: 5, aromatic: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['winter', 'make-ahead'],
    desc: 'Rich winter balls of whole wheat flour roasted in ghee with jaggery, nuts and edible gum.',
    story: 'Punjabi families make big tins of pinni in winter; they are believed to keep the body warm.',
    equip: ['Heavy kadai'],
    ing: [[250, 'g', 'whole wheat flour (atta)'], [150, 'g', 'ghee'], [180, 'g', 'powdered jaggery or sugar'], [60, 'g', 'almonds', 'chopped'], [2, 'tbsp', 'edible gum (gond)', 'optional'], [1, 'tsp', 'cardamom powder']],
    steps: [['Gum', 'Fry the gond in some ghee until it puffs; crush.', 3], ['Roast', '[[toast|Roast]] atta in the remaining ghee on low until nutty and golden, 18 minutes.', 18], ['Shape', 'Cool slightly, mix in jaggery, nuts, gond and cardamom; shape tight balls.']],
    tips: ['Roast slowly for the best flavour.'], mistakes: ['Sugar added hot: melts.'], vars: ['Dal pinni with urad flour.'], serve: 'With warm milk.' });

  X('Haryana', H, { id: 'hara-dhania-choliya', name: 'Hara Dhania Choliya', local: 'हरा धनिया छोलिया', emoji: '🟢', course: 'main', level: 1, prep: 15, cook: 20, serves: 4,
    taste: { herby: 4, spicy: 3, savory: 4 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['saute'], tags: ['winter', 'healthy'],
    desc: 'Fresh green chickpeas cooked with a vivid paste of coriander, green chili and ginger.',
    story: 'Choliya (fresh green chana) is sold in bunches in north Indian winters; Haryana cooks it simply.',
    equip: ['Kadai', 'Blender'],
    ing: [[400, 'g', 'fresh green chickpeas (choliya)'], [2, 'tbsp', 'mustard oil or oil'], [1, 'tsp', 'cumin seeds'], [1, '', 'onion', 'chopped'], [1, 'bunch', 'cilantro'], [3, '', 'green chilies'], [1, 'tbsp', 'ginger'], [4, 'clove', 'garlic'], [1, '', 'tomato'], [1, 'tsp', 'ground coriander'], [0.5, 'tsp', 'garam masala'], [0.75, 'tsp', 'salt']],
    steps: [['Paste', 'Blend cilantro, chilies, ginger, garlic and tomato.'], ['Cook', '[[tadka|Crackle]] cumin, fry onion, add paste and spices and [[bhuna|bhuno]] 5 minutes.', 10], ['Chana', 'Add choliya and a splash of water; cover and cook until tender.', 10]],
    tips: ['Don’t overcook: keep the green colour.'], mistakes: ['Too much water: loses the punch.'], vars: ['Choliya pulao.'], serve: 'Phulka or bajra roti.' });

  X('Haryana', H, { id: 'bajre-ki-khichdi', name: 'Bajre ki Khichdi', local: 'बाजरे की खिचड़ी', emoji: '🥣', course: 'main', level: 2, prep: 10, cook: 40, rest: 360, serves: 4,
    taste: { savory: 3, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['winter', 'healthy', 'comfort'],
    desc: 'Pounded pearl millet and moong dal cooked into a soft porridge, eaten with ghee and jaggery or kadhi.',
    story: 'A winter staple of Haryana and Rajasthan villages, often cooked slowly in a clay pot over a wood fire.',
    equip: ['Pressure cooker'],
    ing: [[150, 'g', 'pearl millet (bajra)', 'soaked overnight, lightly pounded'], [100, 'g', 'moong dal'], [1.2, 'l', 'water'], [1, 'tsp', 'salt'], [3, 'tbsp', 'ghee'], [1, 'tsp', 'cumin seeds'], [1, 'pinch', 'asafoetida (hing)']],
    steps: [['Soak', '[[soak|Soak]] the bajra overnight and pound coarsely.', 360], ['Cook', 'Pressure-cook bajra, dal, water and salt for 6–7 whistles, about 30 minutes.', 30], ['Temper', '[[tadka|Temper]] cumin and hing in ghee and pour over.', 2]],
    tips: ['Pounding cracks the hard grain so it cooks soft.'], mistakes: ['Not soaking: grains stay hard.'], vars: ['Sweet version with jaggery and ghee.'], serve: 'Ghee, jaggery, kadhi or lassi.' });

  /* ---------- Uttar Pradesh ---------- */
  X('Uttar Pradesh', H, { id: 'nimona', name: 'Matar ka Nimona', local: 'मटर का निमोना', emoji: '🟢', course: 'main', level: 2, prep: 20, cook: 30, serves: 4,
    taste: { savory: 4, spicy: 3, herby: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['winter', 'comfort'],
    desc: 'A winter curry from eastern UP of coarsely ground fresh green peas, fried and simmered with potatoes and spices.',
    story: 'Made in Varanasi and Allahabad when fresh peas are cheap; some fry little pea vadi into it too.',
    equip: ['Kadai', 'Blender'],
    ing: [[500, 'g', 'green peas', 'fresh'], [2, '', 'green chilies'], [1, 'tbsp', 'ginger'], [3, 'tbsp', 'mustard oil or oil'], [1, 'tsp', 'cumin seeds'], [1, 'pinch', 'asafoetida (hing)'], [2, '', 'potatoes', 'cubed'], [2, '', 'tomatoes', 'pureed'], [1, 'tsp', 'ground coriander'], [0.5, 'tsp', 'ground turmeric'], [0.5, 'tsp', 'garam masala'], [500, 'ml', 'water'], [1, 'tsp', 'salt'], [2, 'tbsp', 'cilantro']],
    steps: [['Grind', 'Grind peas, chilies and ginger coarsely without water.'], ['Fry', 'Fry potatoes until golden; lift out. [[tadka|Temper]] cumin and hing, add the pea paste and [[bhuna|bhuno]] until it stops smelling raw, 8 minutes.', 14], ['Simmer', 'Add tomato, spices, potatoes, water and salt; [[simmer]] 15 minutes.', 15]],
    tips: ['Fry the pea paste well; that’s the flavour.'], mistakes: ['Grinding smooth: it should be coarse.'], vars: ['Add fried pea or urad vadi.'], serve: 'Rice or puri.' });

  X('Uttar Pradesh', H, { id: 'tehri', name: 'Tehri', local: 'तहरी', emoji: '🍚', course: 'main', level: 1, prep: 15, cook: 25, serves: 4,
    taste: { savory: 4, spicy: 3, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['one-pot', 'weeknight', 'comfort'],
    desc: 'UP’s yellow one-pot rice with potatoes, peas, cauliflower and whole spices, cooked in mustard oil.',
    story: 'The vegetarian cousin of biryani from Awadh, cooked at home for a quick, filling meal.',
    equip: ['Heavy pot or pressure cooker'],
    ing: [[250, 'g', 'basmati rice', 'soaked 20 min'], [3, 'tbsp', 'mustard oil or oil'], [1, 'tsp', 'cumin seeds'], [2, '', 'bay leaves'], [4, '', 'whole cloves'], [1, 'piece', 'cinnamon stick'], [1, '', 'onion', 'sliced'], [1, 'tbsp', 'ginger-garlic paste'], [2, '', 'potatoes', 'cubed'], [150, 'g', 'cauliflower florets'], [100, 'g', 'green peas'], [1, '', 'tomato'], [1, 'tsp', 'ground turmeric'], [1, 'tsp', 'chili powder'], [1, 'tsp', 'garam masala'], [500, 'ml', 'water'], [1.25, 'tsp', 'salt']],
    steps: [['Spices', 'Heat oil until it smokes lightly, cool a little and [[bloom]] the whole spices; fry onion golden.', 8], ['Vegetables', 'Add ginger-garlic, vegetables, tomato and ground spices and fry 4 minutes.', 4], ['Rice', 'Add drained rice, water and salt; cover and cook on low 15 minutes; rest 5.', 18]],
    tips: ['Smoke the mustard oil first to mellow it.'], mistakes: ['Stirring the rice: breaks grains.'], vars: ['Add soya chunks.'], serve: 'Raita, papad and pickle.' });

  X('Uttar Pradesh', SW, { id: 'imarti', name: 'Imarti', local: 'इमरती', emoji: '🌸', course: 'dessert', level: 3, prep: 20, cook: 30, rest: 240, serves: 8,
    taste: { sweet: 5, rich: 3, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['deep-fry'], tags: ['festive'],
    desc: 'Flower-shaped rings of urad dal batter piped into ghee and soaked in saffron syrup: denser and chewier than jalebi.',
    story: 'Jaunpur in UP is famous for imarti; it was a Mughal court sweet called jahangiri.',
    equip: ['Piping cloth or bottle', 'Wide pan'],
    ing: [[150, 'g', 'urad dal', 'soaked 4 hours'], [1, 'pinch', 'orange food colour', 'optional'], [500, 'ml', 'ghee or oil', 'for frying'], '#Syrup', [300, 'g', 'sugar'], [200, 'ml', 'water'], [1, 'pinch', 'saffron'], [0.5, 'tsp', 'cardamom powder'], [1, 'tsp', 'rose water']],
    steps: [['Batter', 'Grind dal with very little water to a thick, fluffy batter; [[whisk]] 5 minutes.', 5], ['Syrup', 'Make a one-string syrup with sugar, water, saffron and cardamom.', 8], ['Pipe and fry', 'Pipe a small circle then a ring of loops around it into medium-hot ghee; [[shallow-fry|fry]] until crisp.', 15], ['Soak', 'Soak in warm syrup 2 minutes.']],
    tips: ['Whisking the batter airy keeps imarti light.'], mistakes: ['Thin batter: shapes spread.'], vars: ['Jalebi from fermented maida.'], serve: 'Warm or with rabri.' });

  X('Uttar Pradesh', SW, { id: 'rabri', name: 'Rabri', local: 'रबड़ी', emoji: '🥛', course: 'dessert', level: 2, prep: 5, cook: 75, serves: 4,
    taste: { sweet: 4, rich: 5, aromatic: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive'],
    desc: 'Milk reduced for over an hour while the skin (malai) is collected in layers, sweetened with saffron and cardamom.',
    story: 'Varanasi and Mathura make the best rabri, served in clay pots (kulhad) or over jalebi.',
    equip: ['Wide heavy pan'],
    ing: [[1.5, 'l', 'whole milk'], [80, 'g', 'sugar'], [0.5, 'tsp', 'cardamom powder'], [1, 'pinch', 'saffron'], [2, 'tbsp', 'pistachios', 'slivered']],
    steps: [['Reduce', 'Simmer milk on low in a wide pan; keep pushing the skin to the side as it forms.', 60, 'Never stir the skin back in: it makes the layers.'], ['Finish', 'When reduced to a third, add sugar, saffron and cardamom; mix in the collected layers.', 10], ['Chill', 'Chill and top with pistachios.']],
    tips: ['A wide pan reduces faster.'], mistakes: ['High heat: burnt milk.'], vars: ['Rabri with jalebi or malpua.'], serve: 'Cold, in kulhad.' });

  /* ---------- Uttarakhand & MP ---------- */
  X('Uttarakhand', H, { id: 'bhatt-ki-churkani', name: 'Bhatt ki Churkani', local: 'भट्ट की चुड़कानी', emoji: '⚫', course: 'main', level: 2, prep: 10, cook: 40, serves: 4,
    taste: { savory: 4, smoky: 2, rich: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['winter', 'healthy'],
    desc: 'Kumaoni curry of roasted black soybeans in an iron-pot gravy thickened with rice paste.',
    story: 'Bhatt (black soybean) grows on Kumaon’s terraces; cooking in an iron kadai darkens and enriches it.',
    equip: ['Iron kadai'],
    ing: [[150, 'g', 'black soybeans', 'dried'], [2, 'tbsp', 'mustard oil or oil'], [1, 'tsp', 'cumin seeds'], [1, 'pinch', 'asafoetida (hing)'], [2, '', 'dried red chilies'], [3, 'clove', 'garlic'], [2, 'tbsp', 'rice flour', 'mixed in 100 ml water'], [1, 'tsp', 'ground coriander'], [0.5, 'tsp', 'ground turmeric'], [600, 'ml', 'water'], [1, 'tsp', 'salt'], [2, 'tbsp', 'cilantro']],
    steps: [['Roast', 'Dry-[[toast|roast]] the soybeans in oil until they crackle and darken, 8 minutes.', 8], ['Gravy', 'Add cumin, hing, chilies and garlic; stir in the rice paste, spices, water and salt.', 3], ['Simmer', '[[simmer|Simmer]] 30 minutes, stirring, until thick and the beans are tender.', 30]],
    tips: ['Iron pot gives the colour.'], mistakes: ['Under-roasted beans: raw taste.'], vars: ['Bhatt ke dubke with ground beans.'], serve: 'Steamed rice.' });

  X('Uttarakhand', SW, { id: 'jhangora-kheer', name: 'Jhangora Kheer', local: 'झंगोरा खीर', emoji: '🥣', course: 'dessert', level: 1, prep: 5, cook: 35, serves: 4,
    taste: { sweet: 4, rich: 4, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'healthy'],
    desc: 'Garhwali kheer of barnyard millet simmered in milk with cardamom and nuts; also eaten on fasting days.',
    story: 'Jhangora is a hardy hill millet; this kheer is offered at temples across Garhwal.',
    equip: ['Heavy pot'],
    ing: [[80, 'g', 'barnyard millet (jhangora)', 'rinsed'], [1, 'l', 'whole milk'], [90, 'g', 'sugar'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'almonds and cashews', 'chopped'], [1, 'tbsp', 'raisins']],
    steps: [['Cook', 'Simmer the millet in milk, stirring often, until soft and creamy, 30 minutes.', 30], ['Sweeten', 'Add sugar, cardamom, nuts and raisins; cook 3 minutes.', 3]],
    tips: ['It thickens as it cools.'], mistakes: ['Not stirring: sticks.'], vars: ['Jaggery instead of sugar.'], serve: 'Warm or chilled.' });

  X('Uttarakhand', SW, { id: 'bal-mithai', name: 'Bal Mithai', local: 'बाल मिठाई', emoji: '🍫', course: 'dessert', level: 2, prep: 15, cook: 30, rest: 120, serves: 12,
    taste: { sweet: 5, rich: 5 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['festive', 'make-ahead'],
    desc: 'Almora’s chocolate-brown fudge of deeply roasted khoya, coated in tiny white sugar balls.',
    story: 'Almora in Kumaon is famous for bal mithai, made since the early 20th century.',
    equip: ['Heavy pan', 'Tray'],
    ing: [[400, 'g', 'khoya (mawa)'], [150, 'g', 'sugar'], [1, 'tbsp', 'ghee'], [60, 'g', 'sugar-coated poppy seeds (chini dana)', 'or nonpareils']],
    steps: [['Brown', 'Cook khoya and sugar on low, stirring, until it turns dark chocolate brown, 25 minutes.', 25], ['Set', 'Press into a greased tray; cool 2 hours.', 120], ['Coat', 'Cut into bars and roll in the sugar balls.']],
    tips: ['The colour comes from caramelizing, not chocolate.'], mistakes: ['High heat: bitter.'], vars: ['Singori: khoya wrapped in a malu leaf cone.'], serve: 'With tea.' });

  X('Madhya Pradesh', H, { id: 'dal-bafla', name: 'Dal Bafla', local: 'दाल बाफला', emoji: '🟤', course: 'main', level: 3, prep: 25, cook: 60, serves: 4,
    taste: { savory: 4, rich: 5, spicy: 2 }, diet: ['vegetarian', 'high-protein'], methods: ['simmer', 'bake'], tags: ['festive', 'comfort'],
    desc: 'Malwa’s wheat dough balls boiled, then baked crisp and dunked in ghee, served with tempered mixed dal.',
    story: 'The Malwa cousin of Rajasthan’s dal baati: boiling first makes bafla softer inside.',
    equip: ['Pot', 'Oven', 'Pressure cooker'],
    ing: [[300, 'g', 'whole wheat flour (atta)'], [50, 'g', 'semolina (rava)'], [0.5, 'tsp', 'baking soda'], [0.5, 'tsp', 'ajwain'], [3, 'tbsp', 'ghee'], [150, 'ml', 'yogurt and water'], [0.75, 'tsp', 'salt'], [80, 'g', 'ghee', 'to dunk'], '#Dal', [150, 'g', 'toor dal'], [50, 'g', 'chana dal'], [700, 'ml', 'water'], [1, 'tsp', 'ground turmeric'], [1, '', 'tomato'], [2, 'tbsp', 'ghee'], [1, 'tsp', 'cumin seeds'], [1, 'pinch', 'asafoetida (hing)'], [1, 'tsp', 'chili powder'], [1, 'tsp', 'salt']],
    steps: [['Dough', '[[knead|Knead]] flour, rava, soda, ajwain, ghee, salt and yogurt-water into a stiff dough; shape 8 balls.'], ['Boil', '[[boil|Boil]] the balls 15 minutes until they float.', 15], ['Bake', 'Drain, cut a cross on top and bake at {{200C}} 25 minutes until golden; crack and dunk in ghee.', 25], ['Dal', 'Pressure-cook dals with turmeric and tomato; [[tadka|temper]] with ghee, cumin, hing and chili.', 25]],
    tips: ['Dunk while hot so the ghee soaks in.'], mistakes: ['Soft dough: balls lose shape when boiled.'], vars: ['Rajasthani baati baked without boiling.'], serve: 'Dal, ladoo and green chutney.' });

  /* ---------- Sindhi, Gujarat & Maharashtra ---------- */
  X('Sindh', H, { id: 'sindhi-kadhi', name: 'Sindhi Kadhi', local: 'سنڌي ڪڙهي', emoji: '🍲', course: 'main', level: 2, prep: 15, cook: 30, serves: 4,
    taste: { sour: 4, spicy: 3, savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'weeknight'],
    desc: 'A tangy tamarind-and-tomato curry thickened with roasted gram flour and full of vegetables: drumsticks, okra, potato and cluster beans.',
    story: 'Unlike yogurt kadhis, Sindhi kadhi gets its sourness from tamarind and kokum; eaten on Sundays with rice and aloo tuk.',
    equip: ['Pot'],
    ing: [[3, 'tbsp', 'oil'], [1, 'tsp', 'cumin seeds'], [0.5, 'tsp', 'fenugreek seeds'], [1, 'sprig', 'curry leaves'], [4, 'tbsp', 'besan (gram flour)'], [3, '', 'tomatoes', 'pureed'], [1.2, 'l', 'water'], [2, '', 'drumsticks (moringa)', 'pieces'], [8, '', 'okra', 'fried'], [1, '', 'potato', 'cubed'], [80, 'g', 'cluster beans (gavar)'], [1, 'tbsp', 'tamarind paste'], [1, 'tsp', 'ground turmeric'], [1, 'tsp', 'chili powder'], [2, '', 'green chilies'], [1.25, 'tsp', 'salt']],
    steps: [['Roast besan', '[[tadka|Crackle]] cumin, fenugreek and curry leaves; add besan and [[toast|roast]] until golden, 5 minutes.', 6], ['Liquid', 'Whisk in tomato puree and water; bring to a boil.', 5], ['Vegetables', 'Add vegetables, spices and salt; [[simmer]] 20 minutes; add tamarind at the end.', 20]],
    tips: ['Roast the besan until it smells nutty.'], mistakes: ['Under-roasting: raw taste.'], vars: ['Add kokum.'], serve: 'Rice and aloo tuk.' });

  X('Sindh', H, { id: 'koki', name: 'Sindhi Koki', local: 'ڪوڪي', emoji: '🫓', course: 'breakfast', level: 2, prep: 15, cook: 20, serves: 4,
    taste: { savory: 4, spicy: 2, herby: 2 }, diet: ['vegetarian'], methods: ['saute'], tags: ['brunch'],
    desc: 'Thick, crisp Sindhi flatbread of wheat flour kneaded with onion, chili, coriander and ghee, cooked slowly on a tawa.',
    story: 'A Sindhi breakfast eaten with tea, pickle or curd; it keeps for days, so it was made for journeys.',
    equip: ['Tawa'],
    ing: [[300, 'g', 'whole wheat flour (atta)'], [1, '', 'onion', 'finely chopped'], [2, '', 'green chilies'], [2, 'tbsp', 'cilantro'], [1, 'tsp', 'cumin seeds'], [0.5, 'tsp', 'pomegranate seeds (anardana)', 'crushed'], [4, 'tbsp', 'ghee'], [0.75, 'tsp', 'salt'], [100, 'ml', 'water'], [2, 'tbsp', 'ghee', 'for cooking']],
    steps: [['Dough', 'Rub ghee into flour, add onion, herbs, spices and salt; knead to a stiff dough with little water.'], ['Roll', 'Roll thick rounds and prick them.'], ['Cook', 'Cook slowly on the tawa, pressing, with ghee until crisp and brown on both sides.', 16]],
    tips: ['Slow cooking makes it crisp throughout.'], mistakes: ['Thin koki: like a paratha, not crisp.'], vars: ['Sweet koki with sugar.'], serve: 'Curd and pickle, with tea.' });

  X('Gujarat', ST, { id: 'sev-usal', name: 'Sev Usal', local: 'સેવ ઉસળ', emoji: '🥣', course: 'snack', level: 2, prep: 15, cook: 30, rest: 360, serves: 4,
    taste: { spicy: 4, sour: 3, savory: 4 }, diet: ['vegetarian', 'high-protein'], methods: ['simmer'], tags: ['street-food', 'rainy-day'],
    desc: 'Vadodara’s spicy white-pea curry topped with crunchy sev, onion and chutneys, served with pav.',
    story: 'A Baroda street breakfast; the red oily tari (gravy) on top is the sign of a good one.',
    equip: ['Pressure cooker', 'Pan'],
    ing: [[200, 'g', 'dried white peas', 'soaked overnight'], [3, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, '', 'onion', 'chopped'], [1, 'tbsp', 'ginger-garlic paste'], [2, '', 'tomatoes', 'chopped'], [2, 'tsp', 'chili powder'], [1, 'tsp', 'ground turmeric'], [1, 'tbsp', 'usal or garam masala'], [1, 'tbsp', 'tamarind-date chutney'], [700, 'ml', 'water'], [1, 'tsp', 'salt'], [80, 'g', 'sev'], [1, '', 'onion', 'finely chopped'], [8, '', 'pav buns']],
    steps: [['Cook peas', 'Pressure-cook soaked peas soft, 15 minutes.', 15], ['Gravy', 'Fry mustard, onion and ginger-garlic, then tomato and spices until oil separates; add peas, water and salt and simmer 15 minutes.', 20], ['Serve', 'Ladle into bowls; top with sev, onion and chutney.']],
    tips: ['Let a red oil layer form on top.'], mistakes: ['Too thick: it should be soupy.'], vars: ['Misal pav from Maharashtra.'], serve: 'Pav and lemon.' });

  X('Maharashtra', H, { id: 'zunka-bhakri', name: 'Zunka Bhakri', local: 'झुणका भाकरी', emoji: '🟨', course: 'main', level: 2, prep: 15, cook: 25, serves: 4,
    taste: { savory: 4, spicy: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['saute'], tags: ['budget', 'healthy'],
    desc: 'A dry, crumbly gram-flour stir-fry with onion and chili, eaten with rustic jowar flatbread: Maharashtra’s farm meal.',
    story: 'Farmers carry zunka and bhakri to the fields; the dish became a symbol of Maharashtrian rural food.',
    equip: ['Kadai', 'Tawa'],
    ing: [[3, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'cumin seeds'], [1, 'pinch', 'asafoetida (hing)'], [2, '', 'onions', 'chopped'], [4, 'clove', 'garlic'], [3, '', 'green chilies'], [0.5, 'tsp', 'ground turmeric'], [150, 'g', 'besan (gram flour)'], [200, 'ml', 'water'], [0.75, 'tsp', 'salt'], [2, 'tbsp', 'cilantro'], '#Bhakri', [300, 'g', 'jowar flour'], [250, 'ml', 'hot water'], [0.5, 'tsp', 'salt']],
    steps: [['Zunka', '[[tadka|Temper]] mustard, cumin and hing; fry onions, garlic and chilies; sprinkle in besan, then water and salt, stirring; cover and cook on low until crumbly, 10 minutes.', 15], ['Bhakri', 'Knead jowar flour with hot water; pat thin rounds by hand and cook on a hot tawa, brushing the top with water, until puffed.', 15]],
    tips: ['Pat bhakri with wet palms.'], mistakes: ['Too much water in zunka: pasty.'], vars: ['Pithla: a softer, saucier version.'], serve: 'Raw onion and thecha.' });

  X('Maharashtra', H, { id: 'chakli', name: 'Bhajani Chakli', local: 'भाजणीची चकली', emoji: '🌀', course: 'snack', level: 3, prep: 30, cook: 30, serves: 10,
    taste: { savory: 4, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['deep-fry'], tags: ['festive', 'make-ahead'],
    desc: 'Crunchy spirals of roasted multigrain flour with sesame and ajwain, essential in a Diwali faral platter.',
    story: 'Maharashtra’s chakli uses roasted bhajani flour; Tamil murukku uses rice and urad flour.',
    equip: ['Chakli press', 'Kadai'],
    ing: [[300, 'g', 'chakli bhajani flour', 'or rice flour with besan'], [2, 'tbsp', 'hot oil'], [1, 'tbsp', 'sesame seeds'], [1, 'tsp', 'ajwain'], [1, 'tsp', 'chili powder'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'salt'], [220, 'ml', 'hot water'], [1, 'l', 'oil', 'for frying']],
    steps: [['Dough', 'Mix flour, spices and hot oil; add hot water to a soft, pliable dough.'], ['Press', 'Press spirals onto paper with a star nozzle.'], ['Fry', '[[deep-fry|Fry]] on medium until crisp and the bubbling stops.', 25]],
    tips: ['Cover the dough so it stays moist.'], mistakes: ['Hot oil: brown outside, soft inside.'], vars: ['Butter murukku.'], serve: 'With tea.' });

  /* ---------- Telangana & Karnataka ---------- */
  X('Hyderabad', SW, { id: 'double-ka-meetha', name: 'Double ka Meetha', local: 'ڈبل کا میٹھا', emoji: '🍞', course: 'dessert', level: 2, prep: 10, cook: 30, serves: 6,
    taste: { sweet: 5, rich: 5, aromatic: 4 }, diet: ['vegetarian'], methods: ['deep-fry', 'simmer'], tags: ['festive', 'party'],
    desc: 'Hyderabad’s bread pudding: ghee-fried bread soaked in saffron syrup and reduced milk, topped with nuts.',
    story: 'Named for “double roti” (bread); served at Hyderabadi weddings and Eid.',
    equip: ['Frying pan', 'Pot'],
    ing: [[8, 'slice', 'white bread', 'crusts removed, halved'], [100, 'g', 'ghee'], [150, 'g', 'sugar'], [150, 'ml', 'water'], [1, 'pinch', 'saffron'], [500, 'ml', 'whole milk'], [100, 'g', 'condensed milk'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'almonds and pistachios', 'slivered']],
    steps: [['Fry', '[[shallow-fry|Fry]] bread in ghee until golden and crisp.', 8], ['Syrup', 'Boil sugar, water and saffron 5 minutes; dip the bread.', 5], ['Milk', 'Reduce milk with condensed milk and cardamom by half; pour over the bread and simmer 5 minutes.', 18], ['Finish', 'Top with nuts.']],
    tips: ['Crisp bread holds its shape.'], mistakes: ['Under-fried bread: mushy.'], vars: ['Shahi tukda: richer, with rabri.'], serve: 'Warm or chilled.' });

  X('Telangana', H, { id: 'sakinalu', name: 'Sakinalu', local: 'సకినాలు', emoji: '🌀', course: 'snack', level: 3, prep: 30, cook: 30, rest: 240, serves: 10,
    taste: { savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['deep-fry'], tags: ['festive', 'make-ahead'],
    desc: 'Telangana’s Sankranti spirals of fresh rice flour, sesame and ajwain, hand-drawn in concentric rings and fried crisp.',
    story: 'Women gather to draw sakinalu by hand on cloth for Makar Sankranti; it is a test of skill.',
    equip: ['Cotton cloth', 'Kadai'],
    ing: [[300, 'g', 'rice', 'soaked 4 hours, drained, ground to flour'], [2, 'tbsp', 'sesame seeds'], [1, 'tsp', 'ajwain'], [1, 'tsp', 'salt'], [150, 'ml', 'water'], [1, 'l', 'oil', 'for frying']],
    steps: [['Dough', 'Mix fresh rice flour, sesame, ajwain and salt with water to a firm dough.', 5], ['Shape', 'Pinch the dough and draw 3 concentric rings by hand on a cloth; dry 20 minutes.', 20], ['Fry', '[[deep-fry|Fry]] on medium until crisp, 4 minutes per batch.', 25]],
    tips: ['Fresh rice flour holds better than bought.'], mistakes: ['Thick rings: hard centres.'], vars: ['Chakralu in Andhra.'], serve: 'With tea.' });

  X('Karnataka', SI, { id: 'majjige-huli', name: 'Majjige Huli', local: 'ಮಜ್ಜಿಗೆ ಹುಳಿ', emoji: '🥛', course: 'main', level: 1, prep: 15, cook: 20, serves: 4,
    taste: { sour: 3, savory: 4, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['summer', 'comfort'],
    desc: 'A Karnataka yogurt curry of ash gourd in a ground coconut, chana dal and green chili paste.',
    story: 'Cooling and mild; Tamil Nadu’s mor kuzhambu and Kerala’s pulissery are its cousins.',
    equip: ['Pot', 'Blender'],
    ing: [[300, 'g', 'ash gourd (winter melon)', 'cubed'], [300, 'ml', 'water'], [400, 'g', 'yogurt', 'whisked'], [60, 'g', 'grated coconut'], [1, 'tbsp', 'chana dal', 'soaked 30 min'], [2, '', 'green chilies'], [1, 'tsp', 'cumin seeds'], [10, 'g', 'ginger'], [1, 'tsp', 'salt'], [1, 'tbsp', 'coconut oil'], [1, 'tsp', 'mustard seeds'], [1, 'sprig', 'curry leaves']],
    steps: [['Cook', 'Simmer ash gourd in water until tender, 10 minutes.', 10], ['Paste', 'Grind coconut, dal, chilies, cumin and ginger; add to the gourd and simmer 4 minutes.', 4], ['Yogurt', 'Off the heat, stir in yogurt and salt; [[tadka|temper]] mustard and curry leaves.', 2]],
    tips: ['Never boil after adding yogurt.'], mistakes: ['Boiling: curdled.'], vars: ['With okra or cucumber.'], serve: 'Rice.' });

  X('Karnataka', SI, { id: 'avarekalu-saaru', name: 'Avarekalu Saaru', local: 'ಅವರೆಕಾಳು ಸಾರು', emoji: '🫘', course: 'main', level: 2, prep: 20, cook: 30, serves: 4,
    taste: { savory: 4, spicy: 3, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['winter', 'comfort'],
    desc: 'Bengaluru’s winter curry of fresh hyacinth beans in a roasted coconut-spice gravy.',
    story: 'Bengaluru holds an Avarekai Mela every winter, when the beans flood the markets.',
    equip: ['Pot', 'Blender'],
    ing: [[300, 'g', 'fresh hyacinth beans (avarekalu)', 'peeled'], [1, '', 'potato', 'cubed'], [600, 'ml', 'water'], [2, 'tbsp', 'oil'], [1, '', 'onion'], [2, '', 'tomatoes'], [60, 'g', 'grated coconut'], [4, '', 'dried red chilies'], [1, 'tbsp', 'coriander seeds'], [1, 'tsp', 'cumin seeds'], [1, 'piece', 'cinnamon stick'], [4, 'clove', 'garlic'], [1, 'tbsp', 'tamarind paste'], [1, 'tsp', 'salt'], [1, 'sprig', 'curry leaves']],
    steps: [['Cook beans', 'Simmer beans and potato in water until tender, 15 minutes.', 15], ['Masala', '[[toast|Roast]] chilies, coriander, cumin and cinnamon; fry onion, garlic and tomato; grind with coconut.', 8], ['Simmer', 'Add the masala, tamarind and salt to the beans; [[simmer]] 8 minutes; [[tadka|temper]] curry leaves.', 8]],
    tips: ['Fresh beans are best; frozen work too.'], mistakes: ['Overcooking: beans burst.'], vars: ['Avarekalu uppittu (upma).'], serve: 'Ragi mudde or rice.' });

  X('Karnataka', ST, { id: 'goli-baje', name: 'Goli Baje (Mangalore Bajji)', local: 'ಗೋಳಿ ಬಜೆ', emoji: '🟡', course: 'snack', level: 1, prep: 10, cook: 15, rest: 120, serves: 4,
    taste: { savory: 4, sour: 2, herby: 2 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['street-food', 'rainy-day'],
    desc: 'Fluffy, slightly tangy fritters of maida and yogurt with green chili, ginger, coconut and curry leaves.',
    story: 'Udupi and Mangaluru restaurants serve goli baje with coconut chutney and filter coffee.',
    equip: ['Kadai'],
    ing: [[200, 'g', 'all-purpose flour'], [150, 'g', 'sour yogurt'], [0.25, 'tsp', 'baking soda'], [2, '', 'green chilies', 'chopped'], [1, 'tbsp', 'ginger', 'chopped'], [2, 'tbsp', 'coconut pieces', 'tiny'], [1, 'sprig', 'curry leaves', 'chopped'], [1, 'tsp', 'cumin seeds'], [0.75, 'tsp', 'salt'], [1, 'tsp', 'sugar'], [700, 'ml', 'oil', 'for frying']],
    steps: [['Batter', 'Mix everything into a thick, sticky batter; rest 2 hours.', 120], ['Fry', 'Drop small balls with wet fingers into medium oil and [[deep-fry]] until golden and fluffy.', 12]],
    tips: ['Thick batter gives round balls.'], mistakes: ['Hot oil: raw centres.'], vars: ['Add chopped onion.'], serve: 'Coconut chutney.' });

  /* ---------- Kerala & Tamil Nadu ---------- */
  X('Kerala', SW, { id: 'palada-payasam', name: 'Palada Payasam', local: 'പാലട പ്രഥമൻ', emoji: '🥛', course: 'dessert', level: 2, prep: 10, cook: 60, serves: 6,
    taste: { sweet: 5, rich: 5 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive'],
    desc: 'Kerala’s pink, creamy payasam of thin rice flakes (ada) slow-cooked in milk until it turns rosy.',
    story: 'The star of the Onam sadya; long cooking caramelizes the milk to a pale pink.',
    equip: ['Heavy pot'],
    ing: [[100, 'g', 'rice ada (palada flakes)'], [1.5, 'l', 'whole milk'], [200, 'g', 'sugar'], [2, 'tbsp', 'ghee'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'cashews']],
    steps: [['Ada', 'Soak ada in hot water 20 minutes; drain.', 20], ['Reduce', 'Simmer milk with sugar, stirring, until slightly reduced and pinkish, 30 minutes.', 30], ['Cook', 'Add ada and cook until soft and thick, 15 minutes; add cardamom and cashews fried in ghee.', 15]],
    tips: ['Patience gives the pink colour.'], mistakes: ['Adding ada too early: it breaks.'], vars: ['Pressure-cooker palada.'], serve: 'Warm, at the end of a sadya.' });

  X('Tamil Nadu', SW, { id: 'paal-kozhukattai', name: 'Paal Kozhukattai', local: 'பால் கொழுக்கட்டை', emoji: '⚪', course: 'dessert', level: 2, prep: 20, cook: 25, serves: 4,
    taste: { sweet: 4, rich: 3, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive'],
    desc: 'Tiny rice-flour dumplings simmered in jaggery-sweetened coconut milk with cardamom.',
    story: 'Made for Vinayaka Chaturthi in Tamil homes alongside the stuffed modak kozhukattai.',
    equip: ['Pot'],
    ing: [[150, 'g', 'rice flour'], [200, 'ml', 'boiling water'], [0.25, 'tsp', 'salt'], [400, 'ml', 'water'], [120, 'g', 'jaggery'], [300, 'ml', 'coconut milk'], [0.5, 'tsp', 'cardamom powder']],
    steps: [['Dough', 'Mix rice flour and salt with boiling water; knead smooth and roll pea-size balls.', 10], ['Cook', '[[simmer|Simmer]] the balls in water until they float and turn glossy, 10 minutes.', 10], ['Sweeten', 'Add melted, strained jaggery, cardamom and coconut milk; heat gently 3 minutes.', 3]],
    tips: ['Don’t boil after adding coconut milk.'], mistakes: ['Big balls: raw inside.'], vars: ['Use milk instead of coconut milk.'], serve: 'Warm.' });

  X('Tamil Nadu', SI, { id: 'paruppu-urundai-kuzhambu', name: 'Paruppu Urundai Kuzhambu', local: 'பருப்பு உருண்டை குழம்பு', emoji: '🟠', course: 'main', level: 3, prep: 30, cook: 35, rest: 120, serves: 4,
    taste: { sour: 4, spicy: 3, savory: 4 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['steam', 'simmer'], tags: ['comfort', 'impress'],
    desc: 'Steamed spiced lentil dumplings simmered in a tangy tamarind gravy.',
    story: 'A Tamil Brahmin speciality; the dumplings soak up the sour kuzhambu.',
    equip: ['Steamer', 'Pot', 'Blender'],
    ing: [[100, 'g', 'toor dal', 'soaked 2 hours'], [50, 'g', 'chana dal', 'soaked 2 hours'], [3, '', 'dried red chilies'], [1, 'tsp', 'fennel seeds'], [1, 'sprig', 'curry leaves'], [0.5, 'tsp', 'salt'], '#Kuzhambu', [2, 'tbsp', 'sesame oil'], [1, 'tsp', 'mustard seeds'], [0.5, 'tsp', 'fenugreek seeds'], [8, '', 'shallots'], [1, '', 'tomato'], [2, 'tbsp', 'tamarind paste'], [2, 'tsp', 'sambar powder'], [600, 'ml', 'water'], [1, 'tsp', 'salt'], [1, 'tsp', 'jaggery']],
    steps: [['Dumplings', 'Grind dals coarsely with chilies, fennel, curry leaves and salt; shape balls and [[steam]] 12 minutes.', 12], ['Gravy', '[[tadka|Temper]] mustard and fenugreek in sesame oil; fry shallots and tomato; add tamarind, sambar powder, water, salt and jaggery and [[simmer]] 12 minutes.', 15], ['Simmer', 'Add the dumplings and simmer 5 minutes.', 5]],
    tips: ['Steaming first keeps the dumplings whole.'], mistakes: ['Adding raw balls: they dissolve.'], vars: ['Mor kuzhambu with dumplings.'], serve: 'Rice and appalam.' });

  X('Tamil Nadu', ['south-indian', 'chaat'], { id: 'veg-kothu-parotta', name: 'Veg Kothu Parotta', local: 'கொத்து பரோட்டா', emoji: '🥡', course: 'main', level: 2, prep: 15, cook: 15, serves: 2,
    taste: { spicy: 4, savory: 5, rich: 3 }, diet: ['vegetarian'], methods: ['stir-fry'], tags: ['street-food'],
    desc: 'Shredded flaky parotta chopped on a hot griddle with egg, vegetables, onion and salna gravy. The clang of the steel blades is famous.',
    story: 'A Madurai and Tuticorin street dish; it travelled to Sri Lanka as kottu roti.',
    equip: ['Griddle or large pan', 'Metal spatula'],
    ing: [[4, '', 'kerala parottas', 'shredded'], [3, 'tbsp', 'oil'], [1, '', 'onion', 'sliced'], [2, '', 'green chilies'], [1, 'tsp', 'ginger-garlic paste'], [1, '', 'tomato'], [1, '', 'carrot', 'grated'], [50, 'g', 'cabbage', 'shredded'], [2, '', 'eggs', 'optional'], [1, 'tsp', 'chili powder'], [0.5, 'tsp', 'garam masala'], [150, 'ml', 'vegetable kurma or salna'], [0.5, 'tsp', 'salt'], [2, 'tbsp', 'cilantro']],
    steps: [['Base', '[[stir-fry|Stir-fry]] onion, chilies and ginger-garlic, then tomato and vegetables.', 5], ['Egg', 'Push aside, scramble the eggs and mix in.', 2], ['Chop', 'Add parotta, spices and salna; chop and toss with the spatula until hot and coated.', 5]],
    tips: ['Day-old parotta shreds better.'], mistakes: ['Too much gravy: soggy.'], vars: ['Paneer or chilli kothu.'], serve: 'Raita and extra salna.' });

  /* ---------- Goa, Odisha & Bengal ---------- */
  X('Goa', SW, { id: 'patoleo', name: 'Patoleo', local: 'Pátoleo', emoji: '🍃', course: 'dessert', level: 2, prep: 25, cook: 15, serves: 8,
    taste: { sweet: 4, aromatic: 4 }, diet: ['vegan', 'gluten-free'], methods: ['steam'], tags: ['festive'],
    desc: 'Rice paste spread on turmeric leaves, filled with coconut and jaggery, folded and steamed so the leaf perfumes it.',
    story: 'Made by Goan Catholics for the Feast of the Assumption (15 August) and by Hindus for Nag Panchami.',
    equip: ['Steamer'],
    ing: [[8, '', 'turmeric leaves', 'or banana leaf pieces'], [200, 'g', 'rice flour'], [200, 'ml', 'water'], [0.25, 'tsp', 'salt'], [150, 'g', 'grated coconut'], [120, 'g', 'jaggery'], [0.5, 'tsp', 'cardamom powder']],
    steps: [['Filling', 'Cook coconut and jaggery until sticky; add cardamom.', 6], ['Spread', 'Mix rice flour, water and salt to a spreadable paste; spread thin on each leaf, add filling and fold.'], ['Steam', '[[steam|Steam]] 15 minutes.', 15]],
    tips: ['The leaf is the flavour.'], mistakes: ['Thick rice layer: gummy.'], vars: ['Mangalorean pathrode is savoury.'], serve: 'Warm, peeled from the leaf.' });

  X('Odisha', H, { id: 'santula', name: 'Santula', local: 'ସନ୍ତୁଳା', emoji: '🥕', course: 'main', level: 1, prep: 15, cook: 20, serves: 4,
    taste: { savory: 3, sweet: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['healthy', 'budget'],
    desc: 'A gentle Odia stew of mixed vegetables (pumpkin, potato, papaya, brinjal) tempered with panch phoron and garlic.',
    story: 'Odisha’s light everyday dish, cooked with very little oil and spice; given to people recovering from illness.',
    equip: ['Pot'],
    ing: [[200, 'g', 'pumpkin', 'cubed'], [1, '', 'potato', 'cubed'], [150, 'g', 'raw papaya', 'cubed'], [1, '', 'brinjal', 'cubed'], [80, 'g', 'green beans'], [400, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'salt'], [1, 'tbsp', 'oil'], [1, 'tsp', 'panch phoron'], [3, 'clove', 'garlic', 'crushed'], [2, '', 'green chilies'], [2, '', 'dried red chilies']],
    steps: [['Simmer', 'Simmer vegetables with water, turmeric, salt and green chilies until soft, 15 minutes.', 15], ['Temper', '[[tadka|Temper]] panch phoron, garlic and red chilies in oil; pour over.', 2]],
    tips: ['Keep it simple: it’s meant to be mild.'], mistakes: ['Too much spice spoils the point.'], vars: ['Dudha santula with milk.'], serve: 'Rice and dal.' });

  X('Odisha', SW, { id: 'chhena-jhili', name: 'Chhena Jhili', local: 'ଛେନା ଝିଲି', emoji: '🟤', course: 'dessert', level: 2, prep: 20, cook: 25, serves: 12,
    taste: { sweet: 5, rich: 4 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['festive'],
    desc: 'Odisha’s soft fried discs of kneaded chhena and a little flour, soaked in light syrup.',
    story: 'From Nimapara near Puri; the name may come from “jhili”, the sound of frying.',
    equip: ['Kadai'],
    ing: [[250, 'g', 'chhena (fresh paneer)', 'drained'], [2, 'tbsp', 'all-purpose flour'], [1, 'tbsp', 'semolina (rava)'], [1, 'tbsp', 'sugar'], [0.25, 'tsp', 'cardamom powder'], [500, 'ml', 'ghee or oil', 'for frying'], '#Syrup', [250, 'g', 'sugar'], [400, 'ml', 'water']],
    steps: [['Knead', 'Knead chhena with flour, rava, sugar and cardamom until smooth, 8 minutes; shape flat discs.', 8], ['Fry', '[[deep-fry|Fry]] on low until deep golden.', 12], ['Soak', 'Soak in warm syrup 30 minutes.']],
    tips: ['Knead until the palm feels greasy.'], mistakes: ['High heat: hard outside, raw inside.'], vars: ['Rasabali: flattened chhena in thickened milk.'], serve: 'Warm or room temperature.' });

  X('West Bengal', H, { id: 'chhanar-dalna', name: 'Chhanar Dalna', local: 'ছানার ডালনা', emoji: '🟨', course: 'main', level: 2, prep: 20, cook: 30, serves: 4,
    taste: { savory: 4, sweet: 2, aromatic: 4 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer', 'saute'], tags: ['festive', 'comfort'],
    desc: 'Bengali curry of fried chhena (fresh cheese) cakes and potatoes in a ginger-cumin gravy with ghee and garam masala.',
    story: 'A no-onion, no-garlic niramish dish, made by Bengali Hindu families on festive and fasting days.',
    equip: ['Pan'],
    ing: [[250, 'g', 'chhena (fresh paneer)'], [1, 'tbsp', 'rice flour'], [0.25, 'tsp', 'salt'], [3, 'tbsp', 'mustard oil or oil'], [2, '', 'potatoes', 'cubed'], [1, 'tsp', 'cumin seeds'], [2, '', 'bay leaves'], [1, 'tbsp', 'ginger paste'], [1, '', 'tomato', 'pureed'], [1, 'tsp', 'ground cumin'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'chili powder'], [400, 'ml', 'water'], [1, 'tsp', 'sugar'], [0.75, 'tsp', 'salt'], [1, 'tbsp', 'ghee'], [0.5, 'tsp', 'garam masala']],
    steps: [['Chhena cakes', 'Knead chhena with rice flour and salt; shape small cakes and [[shallow-fry|fry]] golden.', 8], ['Gravy', 'Fry potatoes; add cumin, bay leaves, ginger, tomato and spices and [[bhuna|bhuno]].', 10], ['Simmer', 'Add water, sugar and salt; simmer until potatoes are soft; add chhena cakes, ghee and garam masala.', 12]],
    tips: ['Add the cakes at the end so they stay soft.'], mistakes: ['Boiling hard: cakes break.'], vars: ['Use store-bought paneer cubes.'], serve: 'Rice or luchi.' });

  X('West Bengal', H, { id: 'potoler-dorma', name: 'Potoler Dorma', local: 'পটলের দোরমা', emoji: '🥒', course: 'main', level: 3, prep: 35, cook: 30, serves: 4,
    taste: { rich: 4, sweet: 2, aromatic: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute', 'simmer'], tags: ['festive', 'impress'],
    desc: 'Pointed gourds hollowed and stuffed with spiced paneer, coconut and raisins, then simmered in a rich gravy.',
    story: 'An Armenian-influenced dish (dolma) adapted in Kolkata; served at Bengali weddings.',
    equip: ['Pan'],
    ing: [[12, '', 'pointed gourd (parwal/potol)', 'scraped, cored'], [3, 'tbsp', 'mustard oil or oil'], '#Filling', [150, 'g', 'paneer', 'crumbled'], [3, 'tbsp', 'grated coconut'], [1, 'tbsp', 'raisins'], [1, 'tsp', 'ginger paste'], [1, 'tsp', 'sugar'], [0.5, 'tsp', 'garam masala'], [0.25, 'tsp', 'salt'], '#Gravy', [1, '', 'onion', 'paste'], [1, 'tbsp', 'ginger paste'], [1, '', 'tomato', 'pureed'], [3, 'tbsp', 'yogurt'], [2, 'tbsp', 'cashews', 'ground'], [1, 'tsp', 'chili powder'], [300, 'ml', 'water'], [0.75, 'tsp', 'salt'], [1, 'tbsp', 'ghee']],
    steps: [['Fry gourds', '[[shallow-fry|Fry]] the hollowed gourds until blistered.', 6], ['Stuff', 'Cook the filling until dry; stuff the gourds.', 6], ['Gravy', 'Fry onion, ginger and tomato; add yogurt, cashews and spices; add water and salt.', 10], ['Simmer', 'Add stuffed gourds and [[simmer]] 8 minutes; finish with ghee.', 8]],
    tips: ['Leave the skin slightly striped.'], mistakes: ['Overfilling: they split.'], vars: ['Stuff with prawns (not vegetarian).'], serve: 'Pulao or luchi.' });

  /* ---------- The Northeast ---------- */
  X('Assam', SW, { id: 'til-pitha', name: 'Til Pitha', local: 'তিল পিঠা', emoji: '🌯', course: 'dessert', level: 3, prep: 30, cook: 20, rest: 240, serves: 10,
    taste: { sweet: 4, rich: 3 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['festive'],
    desc: 'Thin, crisp rolls of sticky rice flour cooked on a pan and filled with black sesame and jaggery.',
    story: 'Made for Magh Bihu in January, when Assamese families prepare dozens of kinds of pitha.',
    equip: ['Flat pan', 'Sieve'],
    ing: [[250, 'g', 'glutinous rice', 'soaked 4 hours, drained, ground'], [100, 'g', 'black sesame seeds', 'toasted, coarsely ground'], [120, 'g', 'jaggery', 'grated']],
    steps: [['Filling', 'Mix sesame and jaggery.'], ['Spread', 'Sprinkle a thin round of the damp rice flour through a sieve onto a medium-hot pan; it will set into a sheet.', 1], ['Fill and roll', 'Put filling in a line and roll the sheet; lift off. Repeat.', 15]],
    tips: ['Damp, freshly ground flour sets into a sheet.'], mistakes: ['Hot pan: brown and brittle.'], vars: ['Narikol pitha with coconut.'], serve: 'With tea.' });

  X('Sikkim', H, { id: 'kinema-curry', name: 'Kinema Curry', local: 'किनेमा', emoji: '🫘', course: 'main', level: 1, prep: 10, cook: 20, serves: 4,
    taste: { umami: 5, savory: 4, spicy: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['healthy', 'winter'],
    desc: 'Sticky fermented soybeans (kinema) cooked with onion, tomato, chili and turmeric into a pungent, savoury curry.',
    story: 'Kinema is the Himalayan cousin of Japanese natto; Limbu and Rai communities of Sikkim and eastern Nepal make it.',
    equip: ['Kadai'],
    ing: [[250, 'g', 'kinema or natto'], [2, 'tbsp', 'mustard oil or oil'], [1, '', 'onion', 'chopped'], [2, '', 'tomatoes', 'chopped'], [3, 'clove', 'garlic'], [1, 'tbsp', 'ginger'], [2, '', 'green chilies'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'chili powder'], [250, 'ml', 'water'], [0.75, 'tsp', 'salt'], [2, 'tbsp', 'cilantro']],
    steps: [['Fry', 'Fry kinema in oil until it browns a little, 5 minutes.', 5], ['Masala', 'Add onion, garlic, ginger and chilies, then tomato and spices; cook until soft.', 8], ['Simmer', 'Add water and salt and [[simmer]] 6 minutes.', 6]],
    tips: ['Frying tames the pungency.'], mistakes: ['Not frying: very strong taste.'], vars: ['Add potatoes or greens.'], serve: 'Rice.' });

  X('Manipur', H, { id: 'chamthong', name: 'Chamthong (Kangshoi)', local: 'চামথোং', emoji: '🥬', course: 'soup', level: 1, prep: 15, cook: 20, serves: 4,
    taste: { savory: 3, herby: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['healthy', 'budget', 'one-pot'],
    desc: 'A light Manipuri vegetable stew of greens, peas, potato and spring onion with maroi herbs and ginger, cooked with no oil.',
    story: 'Eaten with rice at almost every Meitei meal; often flavoured with dried fish, left out here.',
    equip: ['Pot'],
    ing: [[1, 'l', 'water'], [1, '', 'potato', 'cubed'], [100, 'g', 'green peas'], [150, 'g', 'cabbage', 'chopped'], [100, 'g', 'mustard greens or spinach'], [4, '', 'scallions'], [1, 'tbsp', 'ginger', 'sliced'], [2, '', 'green chilies'], [1, 'handful', 'chinese chives (maroi)', 'or garlic chives'], [1, 'tsp', 'salt']],
    steps: [['Boil', '[[boil|Boil]] water with potato, ginger and chilies 8 minutes.', 8], ['Vegetables', 'Add peas, cabbage and greens and cook 6 minutes.', 6], ['Herbs', 'Add scallions, chives and salt; cook 1 minute.', 1]],
    tips: ['No oil: it’s a clear, light stew.'], mistakes: ['Overcooked greens.'], vars: ['Add bamboo shoots.'], serve: 'Rice and eromba.' });

  X('Meghalaya', H, { id: 'pumaloi', name: 'Pumaloi', local: 'Pumaloi', emoji: '🍚', course: 'side', level: 2, prep: 10, cook: 25, rest: 240, serves: 4,
    taste: { savory: 2 }, diet: ['vegan', 'gluten-free'], methods: ['steam'], tags: ['budget'],
    desc: 'Khasi steamed rice cake of soaked and pounded rice, soft and fluffy, eaten like bread.',
    story: 'Steamed in a special pot called khiew ranei; eaten with jadoh and black sesame chutney.',
    equip: ['Steamer'],
    ing: [[300, 'g', 'short-grain rice', 'soaked 4 hours'], [0.5, 'tsp', 'salt'], [60, 'ml', 'water']],
    steps: [['Pound', 'Drain the rice, pound or grind coarsely and mix with salt and a little water to a damp powder.'], ['Steam', 'Pack loosely into a cloth-lined steamer and [[steam]] 25 minutes.', 25]],
    tips: ['Keep it loose: packing tight makes it dense.'], mistakes: ['Too wet: sticky.'], vars: ['Pusla: banana-leaf rice cakes.'], serve: 'With black sesame chutney (tungtap is fish-based).' });

  X('Nagaland', H, { id: 'veg-galho', name: 'Galho (Naga Vegetable Khichdi)', local: 'Galho', emoji: '🍲', course: 'main', level: 1, prep: 15, cook: 30, serves: 4,
    taste: { savory: 4, umami: 3, spicy: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'one-pot', 'rainy-day'],
    desc: 'A soupy Naga rice dish cooked with greens, vegetables, ginger, king chili and fermented soybean (axone).',
    story: 'Galho is Nagaland’s comfort porridge; families add whatever vegetables, beans or smoked meat they have.',
    equip: ['Pot'],
    ing: [[150, 'g', 'short-grain rice'], [1.2, 'l', 'water'], [1, '', 'potato', 'cubed'], [100, 'g', 'pumpkin', 'cubed'], [150, 'g', 'mustard greens or spinach'], [1, 'tbsp', 'ginger'], [3, 'clove', 'garlic'], [1, '', 'king chili (bhut jolokia)', 'or 2 green chilies'], [2, 'tbsp', 'axone (fermented soybean)', 'or gluten-free miso'], [1, 'tsp', 'salt']],
    steps: [['Rice', '[[simmer|Simmer]] rice in water with potato and pumpkin 20 minutes.', 20], ['Flavour', 'Crush ginger, garlic and chili; add with axone and greens; cook until soupy-thick, 8 minutes.', 8]],
    tips: ['It should be loose, like risotto.'], mistakes: ['Too much king chili: very hot.'], vars: ['With smoked pork (not vegetarian).'], serve: 'Hot.' });

  /* ---------- Chhattisgarh, Lakshadweep & sweets ---------- */
  X('Chhattisgarh', H, { id: 'fara', name: 'Fara', local: 'फरा', emoji: '⚪', course: 'snack', level: 2, prep: 20, cook: 20, serves: 4,
    taste: { savory: 4, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['steam', 'saute'], tags: ['healthy', 'brunch'],
    desc: 'Chhattisgarhi steamed rice-flour dumplings shaped like little fingers, then tempered with mustard, sesame and green chili.',
    story: 'Made with leftover rice and rice flour; Chhattisgarh is called the rice bowl of India.',
    equip: ['Steamer', 'Kadai'],
    ing: [[200, 'g', 'rice flour'], [100, 'g', 'cooked rice', 'mashed'], [200, 'ml', 'hot water'], [0.75, 'tsp', 'salt'], [2, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'sesame seeds'], [1, 'sprig', 'curry leaves'], [2, '', 'green chilies'], [2, 'tbsp', 'cilantro']],
    steps: [['Dough', 'Knead rice flour, cooked rice, salt and hot water into a soft dough.'], ['Shape and steam', 'Roll into thin finger shapes and [[steam]] 12 minutes.', 12], ['Temper', '[[tadka|Temper]] mustard, sesame, curry leaves and chilies; toss the fara.', 4]],
    tips: ['Wet hands help shaping.'], mistakes: ['Thick fara: dense centre.'], vars: ['Stuffed fara with chana dal.'], serve: 'Green chutney.' });

  X('Lakshadweep', SW, { id: 'kilanji', name: 'Kilanji', local: 'Kilanji', emoji: '🥞', course: 'dessert', level: 2, prep: 15, cook: 20, rest: 240, serves: 4,
    taste: { sweet: 4, rich: 3, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['festive'],
    desc: 'Lakshadweep’s paper-thin rice and egg crepes, folded and drenched in sweet coconut milk with jaggery and cardamom.',
    story: 'From the coral islands off Kerala, where coconut and rice are the base of most dishes.',
    equip: ['Non-stick pan', 'Blender'],
    ing: [[150, 'g', 'raw rice', 'soaked 4 hours'], [1, '', 'egg'], [250, 'ml', 'water'], [0.25, 'tsp', 'salt'], [300, 'ml', 'coconut milk'], [100, 'g', 'jaggery'], [0.5, 'tsp', 'cardamom powder']],
    steps: [['Batter', 'Grind rice, egg, water and salt to a thin, smooth batter.'], ['Crepes', 'Pour a thin layer on a hot pan; cook 1 minute without browning; fold.', 15], ['Sauce', 'Warm coconut milk with jaggery and cardamom; pour over the crepes.', 3]],
    tips: ['Very thin batter.'], mistakes: ['Browning: they should stay pale.'], vars: ['Eat with chicken curry (not vegetarian).'], serve: 'Soaked in coconut milk.' });

  X('Uttar Pradesh', SW, { id: 'balushahi', name: 'Balushahi', local: 'बालूशाही', emoji: '🍩', course: 'dessert', level: 3, prep: 20, cook: 30, rest: 30, serves: 12,
    taste: { sweet: 5, rich: 5 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['festive', 'make-ahead'],
    desc: 'Flaky, layered doughnut-shaped sweets fried slowly in ghee and glazed in thick syrup.',
    story: 'South India calls it badusha; the flaky layers come from barely kneading the ghee-rich dough.',
    equip: ['Kadai'],
    ing: [[250, 'g', 'all-purpose flour'], [80, 'g', 'ghee'], [80, 'g', 'yogurt'], [0.25, 'tsp', 'baking soda'], [0.5, 'tsp', 'baking powder'], [2, 'tbsp', 'water'], [700, 'ml', 'ghee or oil', 'for frying'], '#Syrup', [250, 'g', 'sugar'], [125, 'ml', 'water'], [0.5, 'tsp', 'cardamom powder']],
    steps: [['Dough', 'Rub ghee into flour, soda and baking powder; add yogurt and bring together without kneading; rest 30 minutes.', 30], ['Shape', 'Shape rounds with a dent in the centre.'], ['Fry', '[[deep-fry|Fry]] on very low until they float and turn golden, 15 minutes.', 15], ['Syrup', 'Dip in thick one-string syrup and let set.', 8]],
    tips: ['Don’t knead: it kills the flakes.'], mistakes: ['Hot oil: raw, hard centres.'], vars: ['Badusha in Tamil Nadu.'], serve: 'Room temperature.' });
})();
