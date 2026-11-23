/* India batch 7: Kashmir, Punjab, Rajasthan, UP, MP, Gujarat, Maharashtra, Goa, Karnataka, Kerala, Tamil Nadu,
   Andhra, Bengal, Odisha, Bihar, Arunachal. Original recipes written for Dish Dictionary. */
'use strict';
(function () {
  const X = (area, styles, d) => DD.add(Object.assign({ country: 'India', flag: '🇮🇳', region: 'South Asia', area, styles }, d));
  const H = ['home-style'], SW = ['sweets'], ST = ['chaat'], SI = ['south-indian', 'home-style'];

  /* ---------- Kashmir & Punjab ---------- */
  X('Kashmir', SW, { id: 'shufta', name: 'Shufta', local: 'شفتہ', emoji: '🥜', course: 'dessert', level: 2, prep: 15, cook: 15, serves: 6,
    taste: { sweet: 4, rich: 5, aromatic: 5 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['festive', 'winter'],
    desc: 'A Kashmiri wedding sweet of fried paneer cubes and dry fruits glazed in a saffron-cardamom syrup with black pepper and dried ginger.',
    story: 'Served at the end of the Kashmiri Pandit wedding feast; the warming spices suit Kashmiri winters.',
    equip: ['Pan'],
    ing: [[150, 'g', 'paneer', 'small cubes'], [3, 'tbsp', 'ghee'], [40, 'g', 'almonds', 'slivered'], [40, 'g', 'cashews'], [30, 'g', 'walnuts'], [8, '', 'dried apricots', 'sliced'], [8, '', 'dates', 'sliced'], [2, 'tbsp', 'raisins'], [100, 'g', 'sugar'], [80, 'ml', 'water'], [1, 'pinch', 'saffron'], [0.5, 'tsp', 'cardamom powder'], [0.25, 'tsp', 'dried ginger powder (sonth)'], [0.25, 'tsp', 'black pepper']],
    steps: [['Fry', 'Fry paneer in ghee until golden; then lightly fry the nuts.', 8], ['Syrup', 'Boil sugar, water and saffron to a sticky syrup.', 5], ['Glaze', 'Toss paneer, nuts and fruit in the syrup with the spices until coated.', 2]],
    tips: ['Cut everything small and even.'], mistakes: ['Thin syrup: soggy.'], vars: ['Without paneer for a vegan version (use oil).'], serve: 'Warm, in small bowls.' });

  X('Punjab', SW, { id: 'panjiri', name: 'Panjiri', local: 'ਪੰਜੀਰੀ', emoji: '🟫', course: 'dessert', level: 1, prep: 10, cook: 25, serves: 12,
    taste: { sweet: 4, rich: 5, aromatic: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['winter', 'make-ahead'],
    desc: 'A crumbly, nutty powder of whole wheat flour roasted in ghee with sugar, nuts, seeds and dried ginger.',
    story: 'Given to new mothers in Punjab and offered as prasad at Janmashtami; eaten by the spoonful in winter.',
    equip: ['Heavy kadai'],
    ing: [[250, 'g', 'whole wheat flour (atta)'], [150, 'g', 'ghee'], [150, 'g', 'powdered sugar'], [60, 'g', 'almonds', 'chopped'], [30, 'g', 'makhana (fox nuts)', 'roasted, crushed'], [2, 'tbsp', 'melon seeds'], [1, 'tsp', 'dried ginger powder (sonth)'], [1, 'tsp', 'cardamom powder']],
    steps: [['Roast', '[[toast|Roast]] atta in ghee on low until golden and nutty, 20 minutes.', 20], ['Mix', 'Off the heat, mix in nuts, seeds and spices; cool until warm and stir in sugar.']],
    tips: ['Low heat, constant stirring.'], mistakes: ['Adding sugar hot: it melts and clumps.'], vars: ['Dhaniya panjiri for Janmashtami.'], serve: 'A spoonful with warm milk.' });

  X('Punjab', SW, { id: 'meethe-chawal', name: 'Meethe Chawal', local: 'ਮਿੱਠੇ ਚੌਲ', emoji: '🍚', course: 'dessert', level: 1, prep: 10, cook: 25, rest: 20, serves: 4,
    taste: { sweet: 4, aromatic: 4, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive'],
    desc: 'Golden sweet saffron rice cooked with ghee, cloves and cardamom, studded with nuts and raisins.',
    story: 'Made for Baisakhi and Basant Panchami, when yellow foods are offered.',
    equip: ['Pot'],
    ing: [[200, 'g', 'basmati rice', 'soaked 20 min'], [3, 'tbsp', 'ghee'], [4, '', 'whole cloves'], [4, '', 'green cardamom'], [150, 'g', 'sugar'], [400, 'ml', 'water'], [1, 'pinch', 'saffron'], [2, 'tbsp', 'raisins'], [2, 'tbsp', 'almonds and cashews']],
    steps: [['Par-cook', 'Boil rice in plenty of water until three-quarters done; drain.', 8], ['Syrup', 'Fry cloves, cardamom and nuts in ghee; add sugar, saffron and a splash of water.', 4], ['Steam', 'Fold in rice and raisins, cover and cook on low 12 minutes.', 12]],
    tips: ['Par-boil so grains stay separate.'], mistakes: ['Full-cooked rice turns mushy in syrup.'], vars: ['Zarda with candied fruit.'], serve: 'Warm.' });

  /* ---------- Rajasthan ---------- */
  X('Rajasthan', ST, { id: 'pyaaz-kachori', name: 'Pyaaz Kachori', local: 'प्याज़ कचौरी', emoji: '🧅', course: 'snack', level: 3, prep: 30, cook: 30, rest: 20, serves: 8,
    taste: { savory: 4, spicy: 3, sweet: 1 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['street-food', 'festive'],
    desc: 'Jodhpur’s flaky fried pastries stuffed with a spicy onion and potato filling, served with tamarind chutney.',
    story: 'Jodhpur breakfast; the slow frying on low heat makes the crust flaky.',
    equip: ['Kadai'],
    ing: [[250, 'g', 'all-purpose flour'], [60, 'g', 'ghee'], [0.5, 'tsp', 'salt'], [110, 'ml', 'water'], '#Filling', [2, 'tbsp', 'oil'], [1, 'tsp', 'fennel seeds'], [1, 'pinch', 'asafoetida (hing)'], [3, '', 'onions', 'finely chopped'], [1, '', 'potato', 'boiled, mashed'], [2, 'tbsp', 'besan (gram flour)'], [1, 'tsp', 'chili powder'], [1, 'tsp', 'ground coriander'], [1, 'tsp', 'dried mango powder (amchur)'], [0.5, 'tsp', 'garam masala'], [0.75, 'tsp', 'salt'], [1, 'l', 'oil', 'for frying']],
    steps: [['Dough', 'Rub ghee into flour and salt; knead soft with water; rest 20 minutes.', 20], ['Filling', 'Fry fennel and hing, add onions until soft, then besan, spices and potato; cool.', 10], ['Fill', 'Stuff dough balls, seal and press flat.'], ['Fry', '[[deep-fry|Fry]] on low until golden and flaky, 12 minutes per batch.', 25]],
    tips: ['Low oil temperature for flaky layers.'], mistakes: ['Hot oil: hard, raw inside.'], vars: ['Khasta dal kachori.'], serve: 'Tamarind chutney.' });

  X('Rajasthan', SW, { id: 'mawa-kachori', name: 'Mawa Kachori', local: 'मावा कचौरी', emoji: '🥮', course: 'dessert', level: 3, prep: 30, cook: 30, serves: 8,
    taste: { sweet: 5, rich: 5 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['festive'],
    desc: 'Jodhpur’s sweet kachori stuffed with khoya and nuts, fried and dipped in sugar syrup.',
    story: 'A Jodhpur speciality, sold beside pyaaz kachori at the city’s sweet shops.',
    equip: ['Kadai'],
    ing: [[250, 'g', 'all-purpose flour'], [60, 'g', 'ghee'], [110, 'ml', 'water'], [200, 'g', 'khoya (mawa)', 'roasted'], [50, 'g', 'powdered sugar'], [30, 'g', 'mixed nuts', 'chopped'], [0.5, 'tsp', 'cardamom powder'], [700, 'ml', 'ghee or oil', 'for frying'], [250, 'g', 'sugar', 'for syrup'], [150, 'ml', 'water', 'for syrup']],
    steps: [['Dough', 'Rub ghee into flour; knead with water.'], ['Fill', 'Mix khoya, sugar, nuts and cardamom; stuff and seal.'], ['Fry and soak', 'Fry slowly until golden; dip in one-string syrup.', 25]],
    tips: ['Cool filling only.'], mistakes: ['Hot oil: raw dough.'], vars: ['Top with silver leaf.'], serve: 'Warm.' });

  X('Rajasthan', H, { id: 'bajre-ki-roti', name: 'Bajre ki Roti', local: 'बाजरे की रोटी', emoji: '🫓', course: 'bread', level: 2, prep: 10, cook: 20, serves: 4,
    taste: { savory: 3, rich: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['winter', 'healthy'],
    desc: 'Thick pearl millet flatbreads patted by hand, cooked on a tawa and smeared with ghee.',
    story: 'Winter food in Rajasthan, Haryana and Gujarat, eaten with garlic chutney, jaggery and buttermilk.',
    equip: ['Tawa'],
    ing: [[300, 'g', 'bajra flour (pearl millet)'], [0.5, 'tsp', 'salt'], [250, 'ml', 'warm water'], [3, 'tbsp', 'ghee']],
    steps: [['Knead', 'Knead each portion separately with warm water until smooth.'], ['Pat', 'Pat into thick rounds on a wet hand or sheet.'], ['Cook', 'Cook on a hot tawa, then over the flame until puffed; smear with ghee.', 18]],
    tips: ['Knead one roti’s worth at a time.'], mistakes: ['Dry dough: cracks.'], vars: ['Add methi or garlic.'], serve: 'Garlic chutney, jaggery and white butter.' });

  X('Rajasthan', H, { id: 'papad-ki-sabzi', name: 'Papad ki Sabzi', local: 'पापड़ की सब्ज़ी', emoji: '🥣', course: 'main', level: 1, prep: 5, cook: 15, serves: 4,
    taste: { sour: 3, spicy: 3, savory: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['quick', 'budget'],
    desc: 'Roasted papads broken into a spiced yogurt gravy at the last minute: a desert-pantry curry from Rajasthan.',
    story: 'Rajasthan’s dry climate meant few fresh vegetables, so cooks used papad, besan and dried beans.',
    equip: ['Pan'],
    ing: [[6, '', 'urad papads', 'roasted'], [2, 'tbsp', 'ghee'], [1, 'tsp', 'cumin seeds'], [1, 'pinch', 'asafoetida (hing)'], [250, 'g', 'yogurt', 'whisked with 1 tbsp besan'], [300, 'ml', 'water'], [1, 'tsp', 'chili powder'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'ground coriander'], [0.25, 'tsp', 'salt'], [2, 'tbsp', 'cilantro']],
    steps: [['Gravy', 'Temper cumin and hing in ghee; add spices, then yogurt-besan and water, stirring until it boils.', 8], ['Papad', 'Break in papads just before serving; simmer 1 minute.', 1]],
    tips: ['Papads are salty: go easy on salt.'], mistakes: ['Adding papad early: mushy.'], vars: ['Papad mangodi sabzi.'], serve: 'Bajra roti or rice.' });

  /* ---------- UP & MP ---------- */
  X('Varanasi', H, { id: 'aloo-rasedar', name: 'Banarasi Aloo Rasedar', local: 'आलू रसेदार', emoji: '🥔', course: 'main', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { savory: 4, spicy: 3, sour: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'budget'],
    desc: 'Thin, peppery potato curry with tomato and whole spices, made without onion or garlic: the partner of kachori and puri.',
    story: 'Varanasi’s breakfast of kachori-sabzi; the onion-free curry suits temple-going families.',
    equip: ['Pressure cooker or pot'],
    ing: [[500, 'g', 'potatoes', 'boiled, broken'], [2, 'tbsp', 'mustard oil or oil'], [1, 'tsp', 'cumin seeds'], [1, 'pinch', 'asafoetida (hing)'], [1, 'tbsp', 'ginger', 'grated'], [2, '', 'green chilies'], [2, '', 'tomatoes', 'pureed'], [1, 'tsp', 'ground coriander'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'chili powder'], [700, 'ml', 'water'], [1, 'tsp', 'salt'], [0.5, 'tsp', 'garam masala'], [2, 'tbsp', 'cilantro']],
    steps: [['Masala', 'Temper cumin and hing; add ginger, chilies, tomato and spices; cook 5 minutes.', 6], ['Simmer', 'Add potatoes, water and salt; [[simmer]] 15 minutes, mashing a few pieces.', 15], ['Finish', 'Add garam masala and cilantro.']],
    tips: ['Break potatoes by hand: rough edges thicken the gravy.'], mistakes: ['Too thick: it should be soupy.'], vars: ['Add peas.'], serve: 'Khasta kachori or puri.' });

  X('Lucknow', ['mughlai'], { id: 'sheermal', name: 'Sheermal', local: 'شیرمال', emoji: '🫓', course: 'bread', level: 3, prep: 25, cook: 15, rest: 90, serves: 6,
    taste: { sweet: 2, rich: 4, aromatic: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['festive'],
    desc: 'Lucknow’s saffron-milk flatbread, slightly sweet, baked golden and brushed with saffron ghee.',
    story: 'Created in the Nawabi kitchens of Awadh; traditionally baked in a tandoor and eaten with kormas.',
    equip: ['Baking tray'],
    ing: [[300, 'g', 'all-purpose flour'], [5, 'g', 'instant yeast'], [2, 'tbsp', 'sugar'], [0.5, 'tsp', 'salt'], [170, 'ml', 'warm milk'], [50, 'g', 'ghee'], [1, 'pinch', 'saffron', 'in 2 tbsp warm milk'], [0.25, 'tsp', 'cardamom powder'], [1, 'tsp', 'kewra water', 'optional']],
    steps: [['Dough', '[[knead|Knead]] flour, yeast, sugar, salt, milk, ghee, cardamom and kewra; [[proof]] 1 hour.', 60], ['Shape', 'Roll thick rounds and prick all over; rest 20 minutes.', 20], ['Bake', 'Brush with saffron milk; bake at {{220C}} 10 minutes; brush with ghee.', 10]],
    tips: ['Prick well so it doesn’t puff.'], mistakes: ['Overbaking: dry.'], vars: ['Taftan, a less sweet cousin.'], serve: 'With veg korma or dal.' });

  X('Madhya Pradesh', SW, { id: 'mawa-bati', name: 'Mawa Bati', local: 'मावा बाटी', emoji: '🟤', course: 'dessert', level: 3, prep: 25, cook: 25, serves: 10,
    taste: { sweet: 5, rich: 5, aromatic: 3 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['festive'],
    desc: 'Malwa’s dark khoya dumplings stuffed with nuts and cardamom, fried and soaked in syrup: richer than gulab jamun.',
    story: 'A wedding sweet of Indore and Malwa.',
    equip: ['Kadai'],
    ing: [[250, 'g', 'khoya (mawa)'], [50, 'g', 'all-purpose flour'], [0.25, 'tsp', 'baking soda'], [2, 'tbsp', 'milk'], [40, 'g', 'mixed nuts', 'chopped'], [0.5, 'tsp', 'cardamom powder'], [700, 'ml', 'ghee or oil', 'for frying'], [300, 'g', 'sugar'], [300, 'ml', 'water'], [1, 'pinch', 'saffron']],
    steps: [['Dough', 'Knead khoya, flour and soda smooth, adding milk.'], ['Stuff', 'Stuff with nuts and cardamom; roll smooth balls.'], ['Fry and soak', 'Fry on low until dark brown; soak in warm saffron syrup 1 hour.', 20]],
    tips: ['No cracks or they burst.'], mistakes: ['Hot oil: raw inside.'], vars: ['Kala jamun.'], serve: 'Warm.' });

  /* ---------- Gujarat ---------- */
  X('Gujarat', ST, { id: 'fafda', name: 'Fafda', local: 'ફાફડા', emoji: '🟨', course: 'snack', level: 2, prep: 20, cook: 20, serves: 4,
    taste: { savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['deep-fry'], tags: ['street-food', 'festive'],
    desc: 'Crisp strips of gram-flour dough with ajwain, rubbed flat with the palm and fried; eaten with jalebi on Dussehra.',
    story: 'On Dussehra morning Gujarat queues up for fafda-jalebi; the dough is stretched with a single swipe of the palm.',
    equip: ['Kadai', 'Wooden board'],
    ing: [[200, 'g', 'besan (gram flour)'], [0.5, 'tsp', 'ajwain'], [0.25, 'tsp', 'baking soda'], [0.25, 'tsp', 'ground turmeric'], [2, 'tbsp', 'oil'], [0.5, 'tsp', 'salt'], [80, 'ml', 'water'], [700, 'ml', 'oil', 'for frying'], [0.5, 'tsp', 'black pepper']],
    steps: [['Dough', 'Knead besan, ajwain, soda, turmeric, oil, salt and water until smooth and elastic, 5 minutes.'], ['Stretch', 'Press a small log on a board with the heel of your hand and push away to a thin strip; lift with a knife.'], ['Fry', '[[deep-fry|Fry]] until crisp but pale; sprinkle pepper.', 15]],
    tips: ['Knead long: the dough should stretch.'], mistakes: ['Thick strips: hard.'], vars: ['Fafda with papaya sambharo.'], serve: 'Jalebi, fried green chilies and kadhi chutney.' });

  X('Gujarat', H, { id: 'khakhra', name: 'Methi Khakhra', local: 'ખાખરા', emoji: '🫓', course: 'snack', level: 2, prep: 15, cook: 30, serves: 6,
    taste: { savory: 4, herby: 2 }, diet: ['vegetarian'], methods: ['saute'], tags: ['make-ahead', 'healthy'],
    desc: 'Paper-thin wheat crackers with fenugreek, roasted slowly on a tawa while pressed with a cloth until crisp.',
    story: 'A Gujarati and Jain travel snack that keeps for weeks.',
    equip: ['Tawa', 'Cloth pad'],
    ing: [[250, 'g', 'whole wheat flour (atta)'], [3, 'tbsp', 'dried fenugreek (kasuri methi)'], [0.5, 'tsp', 'ground turmeric'], [0.5, 'tsp', 'chili powder'], [2, 'tbsp', 'oil'], [0.5, 'tsp', 'salt'], [120, 'ml', 'milk and water'], [2, 'tbsp', 'ghee', 'to brush']],
    steps: [['Dough', 'Knead a firm dough; rest 15 minutes.', 15], ['Roll', 'Roll paper-thin.'], ['Roast', 'Cook on a low tawa, pressing with a folded cloth and turning, until crisp and spotted, 3 minutes each.', 25]],
    tips: ['Press firmly so it stays flat.'], mistakes: ['High heat: burnt, not crisp.'], vars: ['Jeera or masala khakhra.'], serve: 'With tea and pickle.' });

  X('Gujarat', SW, { id: 'mohanthal', name: 'Mohanthal', local: 'મોહનથાળ', emoji: '🟫', course: 'dessert', level: 3, prep: 15, cook: 35, rest: 120, serves: 16,
    taste: { sweet: 5, rich: 5, aromatic: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['festive', 'make-ahead'],
    desc: 'Grainy gram-flour fudge roasted in ghee and set with saffron-cardamom syrup; Krishna’s favourite sweet.',
    story: 'Named after Mohan (Krishna); made for Diwali in Gujarat and Rajasthan.',
    equip: ['Heavy kadai', 'Tray'],
    ing: [[250, 'g', 'besan (gram flour)', 'coarse'], [3, 'tbsp', 'ghee', 'warm, to rub'], [3, 'tbsp', 'milk'], [180, 'g', 'ghee'], [3, 'tbsp', 'khoya (mawa)', 'optional'], [250, 'g', 'sugar'], [120, 'ml', 'water'], [1, 'pinch', 'saffron'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'almonds and pistachios', 'slivered']],
    steps: [['Dhrabo', 'Rub warm ghee and milk into the besan; sieve to make it grainy.'], ['Roast', '[[toast|Roast]] in ghee on low until golden and aromatic, 25 minutes; add khoya.', 25], ['Syrup', 'Pour in one-string saffron syrup with cardamom; stir until thick; spread in a tray, top with nuts and set.', 8]],
    tips: ['The milk-ghee rub (dhrabo) gives the grainy texture.'], mistakes: ['Under-roasted besan: raw taste.'], vars: ['Magas (Gujarati ladoo).'], serve: 'Diamonds, at room temperature.' });

  X('Gujarat', H, { id: 'ringan-no-olo', name: 'Ringan no Olo', local: 'રીંગણનો ઓળો', emoji: '🍆', course: 'main', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { smoky: 4, spicy: 3, savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['grill', 'saute'], tags: ['winter'],
    desc: 'Kathiawadi smoky brinjal mash with spring onion, green garlic and chili; the Gujarati cousin of baingan bharta.',
    story: 'Winter food from Kathiawad, eaten with bajra rotla, jaggery and buttermilk.',
    equip: ['Gas flame', 'Pan'],
    ing: [[1, '', 'large brinjal (eggplant)'], [3, 'tbsp', 'oil'], [1, 'tsp', 'cumin seeds'], [4, '', 'scallions', 'chopped'], [4, 'stalk', 'green garlic', 'or 4 cloves garlic'], [2, '', 'green chilies'], [1, '', 'tomato'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'chili powder'], [0.75, 'tsp', 'salt'], [2, 'tbsp', 'cilantro']],
    steps: [['Char', '[[char|Char]] the brinjal over a flame until collapsed; peel and mash.', 12], ['Cook', 'Fry cumin, scallions, green garlic and chilies; add tomato and spices, then the mash; cook 6 minutes.', 10]],
    tips: ['Lots of green garlic in winter.'], mistakes: ['Not charring: no smoke.'], vars: ['Baingan bharta (Punjab).'], serve: 'Bajra rotla and chaas.' });

  /* ---------- Maharashtra & Goa ---------- */
  X('Maharashtra', H, { id: 'pithla', name: 'Pithla', local: 'पिठलं', emoji: '🟨', course: 'main', level: 1, prep: 5, cook: 15, serves: 4,
    taste: { savory: 4, spicy: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['quick', 'budget', 'rainy-day'],
    desc: 'A quick, soft gram-flour curry with onion, garlic and green chili, eaten with bhakri or rice.',
    story: 'The emergency meal of Maharashtrian homes when the vegetable basket is empty; pithla-bhakri at hill forts is famous.',
    equip: ['Pan'],
    ing: [[100, 'g', 'besan (gram flour)'], [500, 'ml', 'water'], [3, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'cumin seeds'], [1, 'sprig', 'curry leaves'], [1, '', 'onion', 'chopped'], [4, 'clove', 'garlic'], [3, '', 'green chilies'], [0.5, 'tsp', 'ground turmeric'], [0.75, 'tsp', 'salt'], [2, 'tbsp', 'cilantro']],
    steps: [['Slurry', 'Whisk besan into water smoothly.'], ['Temper', '[[tadka|Temper]] mustard, cumin and curry leaves; fry onion, garlic and chilies.', 5], ['Cook', 'Add turmeric, slurry and salt; stir on low until thick and glossy, 8 minutes.', 8]],
    tips: ['Stir constantly to avoid lumps.'], mistakes: ['Undercooked besan: raw taste.'], vars: ['Thick pithla (zunka).'], serve: 'Jowar bhakri, raw onion and thecha.' });

  X('Maharashtra', H, { id: 'masale-bhat', name: 'Masale Bhat', local: 'मसाले भात', emoji: '🍚', course: 'main', level: 2, prep: 15, cook: 25, serves: 4,
    taste: { spicy: 3, aromatic: 4, savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'one-pot'],
    desc: 'Maharashtrian spiced rice with ivy gourd (tondli) and goda masala, topped with coconut and cilantro.',
    story: 'Served at Maharashtrian weddings and pujas with kadhi; goda masala gives its sweet-smoky flavour.',
    equip: ['Pot'],
    ing: [[250, 'g', 'short-grain rice', 'washed'], [3, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'pinch', 'asafoetida (hing)'], [1, 'sprig', 'curry leaves'], [150, 'g', 'ivy gourd (tondli)', 'quartered'], [80, 'g', 'green peas'], [2, 'tbsp', 'goda masala or garam masala'], [1, 'tsp', 'chili powder'], [1, 'tbsp', 'jaggery'], [500, 'ml', 'hot water'], [1.25, 'tsp', 'salt'], [3, 'tbsp', 'grated coconut'], [2, 'tbsp', 'cilantro'], [1, 'tbsp', 'ghee', 'or oil for vegan']],
    steps: [['Temper', '[[tadka|Temper]] mustard, hing and curry leaves; fry tondli and peas 5 minutes.', 6], ['Rice', 'Add rice and spices; fry 2 minutes; add hot water, jaggery and salt; cover and cook 15 minutes.', 17], ['Finish', 'Top with coconut, cilantro and ghee.']],
    tips: ['Goda masala is the key.'], mistakes: ['Stirring the rice: mushy.'], vars: ['Vangi bhat with brinjal.'], serve: 'Kadhi or curd.' });

  X('Maharashtra', ['sweets', 'home-style'], { id: 'aamras-puri', name: 'Aamras Puri', local: 'आमरस पुरी', emoji: '🥭', course: 'dessert', level: 1, prep: 15, cook: 20, serves: 4,
    taste: { sweet: 5, rich: 3 }, diet: ['vegetarian'], methods: ['deep-fry', 'no-cook'], tags: ['summer', 'festive'],
    desc: 'Thick chilled alphonso mango pulp with cardamom and saffron, eaten with hot puffed puris.',
    story: 'The summer feast of Maharashtra and Gujarat, made for Akshaya Tritiya when alphonso season peaks.',
    equip: ['Blender', 'Kadai'],
    ing: [[4, '', 'ripe alphonso mangoes', 'or 500 g mango pulp'], [2, 'tbsp', 'sugar', 'if needed'], [0.25, 'tsp', 'cardamom powder'], [1, 'pinch', 'saffron'], [100, 'ml', 'milk', 'optional'], '#Puri', [250, 'g', 'whole wheat flour (atta)'], [1, 'tbsp', 'oil'], [0.5, 'tsp', 'salt'], [130, 'ml', 'water'], [700, 'ml', 'oil', 'for frying']],
    steps: [['Aamras', 'Blend mango flesh with sugar, cardamom, saffron and milk; chill.'], ['Puri', 'Knead a stiff dough, roll small rounds and [[deep-fry]] until puffed.', 15]],
    tips: ['Taste mangoes before adding sugar.'], mistakes: ['Soft dough: puris don’t puff.'], vars: ['Add a pinch of dried ginger for digestion.'], serve: 'Cold aamras with hot puris.' });

  X('Goa', H, { id: 'mushroom-xacuti', name: 'Mushroom Xacuti', local: 'Xacuti', emoji: '🍄', course: 'main', level: 3, prep: 25, cook: 30, serves: 4,
    taste: { spicy: 4, aromatic: 5, rich: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'impress'],
    desc: 'Goan curry with a complex paste of roasted coconut, poppy seeds, star anise and a dozen spices; here with mushrooms and potato.',
    story: 'Xacuti is usually chicken; Goan Hindus make vegetable and mushroom (alami) versions.',
    equip: ['Pan', 'Blender'],
    ing: [[400, 'g', 'mushrooms', 'quartered'], [1, '', 'potato', 'cubed'], [3, 'tbsp', 'oil'], [1, '', 'onion', 'sliced'], [1, '', 'tomato'], [600, 'ml', 'water'], [1, 'tsp', 'tamarind paste'], [1, 'tsp', 'salt'], '#Xacuti masala', [80, 'g', 'grated coconut'], [6, '', 'dried red chilies'], [1, 'tbsp', 'coriander seeds'], [1, 'tsp', 'cumin seeds'], [1, 'tbsp', 'poppy seeds'], [1, '', 'star anise'], [4, '', 'whole cloves'], [1, 'piece', 'cinnamon stick'], [0.5, 'tsp', 'black pepper'], [0.25, 'tsp', 'nutmeg'], [0.5, 'tsp', 'ground turmeric'], [4, 'clove', 'garlic']],
    steps: [['Roast masala', '[[toast|Roast]] coconut until brown, then the spices; grind with garlic and water.', 10], ['Cook', 'Fry onion and tomato; add the paste and fry 5 minutes.', 10], ['Simmer', 'Add mushrooms, potato, water, tamarind and salt; [[simmer]] 15 minutes.', 15]],
    tips: ['Brown the coconut evenly: it sets the colour.'], mistakes: ['Burnt spices: bitter.'], vars: ['Chicken xacuti (not vegetarian).'], serve: 'Pao or rice.' });

  X('Goa', H, { id: 'sannas', name: 'Sannas', local: 'Sannam', emoji: '⚪', course: 'bread', level: 2, prep: 15, cook: 20, rest: 600, serves: 6,
    taste: { sweet: 2, sour: 1 }, diet: ['vegan', 'gluten-free'], methods: ['steam'], tags: ['festive'],
    desc: 'Spongy Goan steamed rice cakes fermented with coconut; traditionally raised with palm toddy.',
    story: 'Goan Catholics serve sannas at feasts with sorpotel; Hindu homes with sweet coconut or curries.',
    equip: ['Steamer', 'Small moulds'],
    ing: [[300, 'g', 'raw rice', 'soaked 6 hours'], [100, 'g', 'grated coconut'], [2, 'tbsp', 'sugar'], [1, 'tsp', 'instant yeast', 'or toddy'], [0.5, 'tsp', 'salt'], [200, 'ml', 'water']],
    steps: [['Batter', 'Grind rice and coconut to a smooth batter; add sugar, yeast and salt.'], ['Ferment', '[[ferment|Ferment]] 4 hours until doubled.', 240], ['Steam', 'Fill moulds and [[steam]] 15 minutes.', 15]],
    tips: ['Don’t stir after fermenting.'], mistakes: ['Under-fermented: dense.'], vars: ['Sweet sannas with jaggery.'], serve: 'Curries or sweet coconut.' });

  /* ---------- Karnataka & Kerala ---------- */
  X('Karnataka', SI, { id: 'kosambari', name: 'Kosambari', local: 'ಕೋಸಂಬರಿ', emoji: '🥗', course: 'salad', level: 1, prep: 15, cook: 0, rest: 120, serves: 4,
    taste: { sour: 3, savory: 3, herby: 3 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['healthy', 'festive', 'summer'],
    desc: 'Soaked moong dal salad with cucumber, carrot, coconut, lemon and a mustard-curry leaf tempering.',
    story: 'Served at Karnataka festivals and weddings, and offered at Ram Navami.',
    equip: ['Bowl', 'Small pan'],
    ing: [[150, 'g', 'yellow moong dal', 'soaked 2 hours, drained'], [1, '', 'cucumber', 'finely diced'], [1, '', 'carrot', 'grated'], [3, 'tbsp', 'grated coconut'], [1, '', 'green chili', 'minced'], [1, '', 'lemon', 'juice'], [0.5, 'tsp', 'salt'], [2, 'tbsp', 'cilantro'], [1, 'tsp', 'oil'], [0.5, 'tsp', 'mustard seeds'], [1, 'sprig', 'curry leaves']],
    steps: [['Soak', '[[soak|Soak]] the dal until it can be bitten through.', 120], ['Mix', 'Toss dal, vegetables, coconut, chili, lemon and salt.'], ['Temper', '[[tadka|Temper]] mustard and curry leaves; pour over.', 1]],
    tips: ['Salt just before serving.'], mistakes: ['Over-soaked dal: mushy.'], vars: ['Kadale bele (chana dal) kosambari.'], serve: 'As a side.' });

  X('Karnataka', SI, { id: 'menthya-bath', name: 'Menthya Soppu Bath', local: 'ಮೆಂತ್ಯ ಸೊಪ್ಪು ಬಾತ್', emoji: '🍚', course: 'main', level: 2, prep: 15, cook: 25, serves: 4,
    taste: { bitter: 2, spicy: 3, aromatic: 4, savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['healthy', 'one-pot'],
    desc: 'Bengaluru-style spiced rice with fresh fenugreek leaves, vegetables and vangi bath powder.',
    story: 'A Karnataka lunchbox rice, one of the many “baths” (rice dishes) of Bengaluru darshinis.',
    equip: ['Pressure cooker or pot'],
    ing: [[250, 'g', 'sona masoori rice'], [3, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'tbsp', 'chana dal'], [1, 'sprig', 'curry leaves'], [1, '', 'onion', 'sliced'], [1, '', 'tomato'], [1, 'bunch', 'methi leaves'], [80, 'g', 'green peas'], [2, 'tbsp', 'vangi bath powder or sambar powder'], [1, 'tsp', 'tamarind paste'], [1, 'tsp', 'jaggery'], [550, 'ml', 'water'], [1.25, 'tsp', 'salt'], [2, 'tbsp', 'roasted peanuts']],
    steps: [['Temper', '[[tadka|Temper]] mustard, chana dal and curry leaves; fry onion, tomato and methi until wilted.', 8], ['Rice', 'Add rice, peas, powder, tamarind, jaggery, water and salt; cook until done, 15 minutes.', 15], ['Finish', 'Top with peanuts.']],
    tips: ['Jaggery balances the bitter methi.'], mistakes: ['Too little spice: flat.'], vars: ['Palak bath.'], serve: 'Raita and papad.' });

  X('Kerala', SI, { id: 'ulli-theeyal', name: 'Ulli Theeyal', local: 'ഉള്ളി തീയൽ', emoji: '🟤', course: 'main', level: 2, prep: 20, cook: 30, serves: 4,
    taste: { sour: 4, smoky: 3, spicy: 3, aromatic: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive'],
    desc: 'Shallots in a dark, tangy gravy of deeply roasted coconut and tamarind; part of the Onam sadya.',
    story: '“Theeyal” means burnt: the coconut is roasted to dark brown before grinding.',
    equip: ['Pan', 'Blender'],
    ing: [[300, 'g', 'shallots', 'peeled'], [2, 'tbsp', 'coconut oil'], [120, 'g', 'grated coconut'], [1, 'tbsp', 'coriander seeds'], [5, '', 'dried red chilies'], [0.25, 'tsp', 'fenugreek seeds'], [1, 'sprig', 'curry leaves'], [2, 'tbsp', 'tamarind paste'], [400, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'jaggery'], [1, 'tsp', 'salt'], [0.5, 'tsp', 'mustard seeds']],
    steps: [['Roast', '[[toast|Roast]] coconut with coriander, chilies and fenugreek until dark brown; grind to a paste.', 12], ['Shallots', 'Fry shallots in coconut oil until golden.', 6], ['Simmer', 'Add tamarind, water, turmeric, paste, jaggery and salt; [[simmer]] until thick; temper mustard and curry leaves.', 12]],
    tips: ['Roast to dark brown, not black.'], mistakes: ['Burnt coconut: bitter.'], vars: ['Pavakka (bitter gourd) theeyal.'], serve: 'Rice.' });

  X('Kerala', SW, { id: 'achappam', name: 'Achappam (Rose Cookies)', local: 'അച്ചപ്പം', emoji: '🌸', course: 'snack', level: 3, prep: 15, cook: 30, serves: 12,
    taste: { sweet: 3, rich: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['deep-fry'], tags: ['festive', 'make-ahead'],
    desc: 'Lacy, crisp flower cookies of rice flour and coconut milk, made with a hot iron mould dipped in batter.',
    story: 'A Kerala Christian Christmas snack, from the Dutch and Portuguese rosette cookie.',
    equip: ['Achappam mould', 'Kadai'],
    ing: [[200, 'g', 'rice flour'], [250, 'ml', 'coconut milk'], [1, '', 'egg'], [80, 'g', 'sugar'], [1, 'tsp', 'sesame seeds'], [1, 'pinch', 'salt'], [1, 'l', 'oil', 'for frying']],
    steps: [['Batter', 'Whisk everything into a smooth, thick-cream batter.'], ['Heat mould', 'Heat the mould in the hot oil for 2 minutes.', 2], ['Fry', 'Dip the hot mould three-quarters into batter, back into oil; shake off the cookie when it sets and fry until crisp.', 25]],
    tips: ['The mould must be very hot every time.'], mistakes: ['Batter over the top of the mould: it won’t release.'], vars: ['Eggless with a little extra flour.'], serve: 'Store in airtight tins.' });

  X('Kerala', SW, { id: 'neyyappam', name: 'Neyyappam', local: 'നെയ്യപ്പം', emoji: '🟤', course: 'dessert', level: 2, prep: 15, cook: 25, rest: 240, serves: 8,
    taste: { sweet: 4, rich: 4, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['deep-fry'], tags: ['festive'],
    desc: 'Crisp-edged, soft-centred rice and jaggery fritters fried in ghee, with coconut bits and cardamom.',
    story: 'Offered at Kerala temples; “ney” means ghee and “appam” means cake.',
    equip: ['Appe pan or kadai'],
    ing: [[200, 'g', 'raw rice', 'soaked 4 hours'], [150, 'g', 'jaggery', 'melted, strained'], [1, '', 'ripe banana', 'small'], [3, 'tbsp', 'coconut', 'tiny pieces, fried'], [0.5, 'tsp', 'cardamom powder'], [1, 'pinch', 'salt'], [300, 'ml', 'ghee or oil', 'for frying']],
    steps: [['Batter', 'Grind rice with banana and jaggery to a thick batter; rest 2 hours.', 120], ['Mix', 'Add coconut, cardamom and salt.'], ['Fry', 'Fry ladlefuls in hot ghee until puffed and brown, turning.', 20]],
    tips: ['Ghee gives the temple flavour.'], mistakes: ['Thin batter: flat.'], vars: ['Unniyappam (small, in appe pan).'], serve: 'Warm.' });

  /* ---------- Tamil Nadu & Andhra ---------- */
  X('Tamil Nadu', SI, { id: 'vatha-kuzhambu', name: 'Vatha Kuzhambu', local: 'வத்தக் குழம்பு', emoji: '🟤', course: 'main', level: 2, prep: 10, cook: 25, serves: 4,
    taste: { sour: 5, spicy: 4, bitter: 1 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['comfort'],
    desc: 'A thick, sharp tamarind gravy cooked in sesame oil with sun-dried turkey berries (sundakkai) or shallots.',
    story: 'Made with vathal (sun-dried vegetables) when fresh vegetables run short; it keeps for days.',
    equip: ['Pan'],
    ing: [[3, 'tbsp', 'sesame oil'], [1, 'tsp', 'mustard seeds'], [0.5, 'tsp', 'fenugreek seeds'], [1, 'tsp', 'toor dal'], [1, 'pinch', 'asafoetida (hing)'], [1, 'sprig', 'curry leaves'], [2, 'tbsp', 'sun-dried turkey berries (sundakkai vathal)', 'or 10 shallots'], [3, 'tbsp', 'tamarind paste'], [2, 'tsp', 'sambar powder'], [0.5, 'tsp', 'ground turmeric'], [400, 'ml', 'water'], [1, 'tsp', 'jaggery'], [1, 'tsp', 'salt']],
    steps: [['Temper', '[[tadka|Temper]] mustard, fenugreek, dal, hing and curry leaves; fry the vathal until dark.', 4], ['Simmer', 'Add tamarind, sambar powder, turmeric, water, jaggery and salt; [[simmer]] until thick and oil floats, 20 minutes.', 20]],
    tips: ['Sesame oil is essential.'], mistakes: ['Not reducing enough: thin.'], vars: ['Manathakkali vathal kuzhambu.'], serve: 'Rice, ghee and appalam.' });

  X('Tamil Nadu', SI, { id: 'sundal', name: 'Chickpea Sundal', local: 'சுண்டல்', emoji: '🫘', course: 'snack', level: 1, prep: 5, cook: 10, serves: 4,
    taste: { savory: 4, herby: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['saute'], tags: ['healthy', 'festive', 'quick'],
    desc: 'Boiled chickpeas tempered with mustard, curry leaves and chili, tossed with fresh coconut.',
    story: 'Offered to guests every evening of Navaratri in Tamil homes, and sold on Chennai’s Marina beach.',
    equip: ['Pan'],
    ing: [[2, 'can', 'chickpeas', 'drained'], [1, 'tbsp', 'coconut oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'urad dal'], [2, '', 'dried red chilies'], [1, 'sprig', 'curry leaves'], [1, 'pinch', 'asafoetida (hing)'], [4, 'tbsp', 'grated coconut'], [0.5, 'tsp', 'salt']],
    steps: [['Temper', '[[tadka|Temper]] mustard, urad dal, chilies, curry leaves and hing.', 2], ['Toss', 'Add chickpeas and salt; toss 3 minutes; add coconut.', 3]],
    tips: ['Add coconut off the heat.'], mistakes: ['Overcooked coconut: dry.'], vars: ['Peanut or green moong sundal.'], serve: 'In paper cones.' });

  X('Andhra Pradesh', SW, { id: 'pootharekulu', name: 'Pootharekulu', local: 'పూతరేకులు', emoji: '📜', course: 'dessert', level: 3, prep: 30, cook: 30, rest: 360, serves: 10,
    taste: { sweet: 5, rich: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['festive'],
    desc: 'Andhra’s “paper sweet”: wafer-thin rice-starch sheets layered with ghee, sugar or jaggery and dry fruits, then folded.',
    story: 'From Atreyapuram village in East Godavari; the sheets are made on an inverted hot pot.',
    equip: ['Inverted clay pot or non-stick pan', 'Cloth'],
    ing: [[150, 'g', 'raw rice', 'soaked 6 hours, ground very fine'], [400, 'ml', 'water'], [80, 'g', 'ghee'], [150, 'g', 'powdered jaggery or sugar'], [50, 'g', 'cashews and almonds', 'powdered']],
    steps: [['Batter', 'Grind rice with water to a very thin batter.', 10], ['Sheets', 'Dip a cloth in batter and wipe it over a hot inverted pot; peel the tissue-thin sheet when set.', 25], ['Fill', 'Layer sheets brushed with ghee and filled with jaggery and nuts; fold into rectangles.']],
    tips: ['Buy ready sheets if you can: the sheet-making is an art.'], mistakes: ['Too wet sheets: they dissolve.'], vars: ['Dry-fruit pootharekulu.'], serve: 'Room temperature.' });

  X('Andhra Pradesh', SI, { id: 'majjiga-pulusu', name: 'Majjiga Pulusu', local: 'మజ్జిగ పులుసు', emoji: '🥛', course: 'main', level: 1, prep: 15, cook: 20, serves: 4,
    taste: { sour: 3, savory: 4, spicy: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['summer', 'comfort'],
    desc: 'Andhra buttermilk curry with bottle gourd or okra in a coconut, chana dal and green chili paste.',
    story: 'Andhra’s cooling dish for hot summers; Telugu homes make it with sorakaya (bottle gourd).',
    equip: ['Pot', 'Blender'],
    ing: [[300, 'g', 'bottle gourd (lauki)', 'cubed'], [250, 'ml', 'water'], [400, 'g', 'sour yogurt', 'whisked with 200 ml water'], [40, 'g', 'grated coconut'], [1, 'tbsp', 'chana dal', 'soaked'], [1, 'tsp', 'cumin seeds'], [3, '', 'green chilies'], [10, 'g', 'ginger'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'salt'], [1, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'sprig', 'curry leaves'], [2, '', 'dried red chilies']],
    steps: [['Cook', 'Simmer bottle gourd in water with turmeric until soft.', 10], ['Paste', 'Grind coconut, dal, cumin, chilies and ginger; add with the yogurt; heat gently until hot, not boiling.', 5], ['Temper', '[[tadka|Temper]] mustard, curry leaves and red chilies; pour over; add salt.', 2]],
    tips: ['Never boil after the yogurt goes in.'], mistakes: ['Boiling: curdles.'], vars: ['Bendakaya (okra) majjiga pulusu.'], serve: 'Rice.' });

  /* ---------- Bengal, Odisha & Bihar ---------- */
  X('West Bengal', H, { id: 'labra', name: 'Labra', local: 'লাবড়া', emoji: '🥕', course: 'main', level: 2, prep: 25, cook: 30, serves: 6,
    taste: { sweet: 2, savory: 4, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive'],
    desc: 'Bengali mixed vegetable medley of pumpkin, radish, sweet potato, brinjal and greens with panch phoron and ginger.',
    story: 'Served as bhog (offering) with khichuri at Durga Puja pandals.',
    equip: ['Kadai'],
    ing: [[3, 'tbsp', 'mustard oil or oil'], [1, 'tsp', 'panch phoron'], [2, '', 'dried red chilies'], [2, '', 'bay leaves'], [200, 'g', 'pumpkin'], [150, 'g', 'white radish'], [1, '', 'sweet potato'], [1, '', 'brinjal'], [1, '', 'potato'], [100, 'g', 'flat beans'], [100, 'g', 'spinach'], [1, 'tbsp', 'ginger paste'], [1, 'tsp', 'ground turmeric'], [1, 'tsp', 'ground cumin'], [1, 'tsp', 'sugar'], [200, 'ml', 'water'], [1, 'tsp', 'salt'], [1, 'tsp', 'ghee', 'or oil for vegan'], [0.5, 'tsp', 'bhaja moshla (roasted cumin-chili powder)']],
    steps: [['Temper', 'Temper panch phoron, chilies and bay leaves.', 1], ['Cook', 'Add vegetables (except spinach), ginger, spices, sugar, salt and water; cover and cook until soft, 20 minutes.', 20], ['Finish', 'Add spinach; cook until mushy-dry; finish with ghee and bhaja moshla.', 6]],
    tips: ['Let some pieces break down.'], mistakes: ['Too much water.'], vars: ['Add fried bori (lentil nuggets).'], serve: 'With bhoger khichuri.' });

  X('Kolkata', ST, { id: 'jhal-muri', name: 'Jhal Muri', local: 'ঝালমুড়ি', emoji: '🥜', course: 'snack', level: 1, prep: 10, cook: 0, serves: 2,
    taste: { spicy: 4, sour: 3, savory: 4 }, diet: ['vegan'], methods: ['no-cook'], tags: ['street-food', 'quick'],
    desc: 'Kolkata’s puffed rice tossed with raw mustard oil, onion, chili, cucumber, peanuts and chanachur, sold in paper cones.',
    story: 'Sold at every Kolkata station and park; the pungent raw mustard oil is the signature.',
    equip: ['Bowl'],
    ing: [[80, 'g', 'puffed rice (muri)'], [1, '', 'onion', 'finely chopped'], [1, '', 'tomato', 'finely chopped'], [0.5, '', 'cucumber', 'finely chopped'], [2, '', 'green chilies'], [3, 'tbsp', 'roasted peanuts'], [50, 'g', 'chanachur (spicy mixture)'], [1, 'tbsp', 'mustard oil'], [1, 'tsp', 'chaat masala'], [1, 'tbsp', 'lemon juice'], [2, 'tbsp', 'cilantro']],
    steps: [['Toss', 'Toss everything quickly in a bowl.'], ['Serve', 'Eat at once, before the muri softens.']],
    tips: ['Use raw mustard oil for the real taste.'], mistakes: ['Mixing ahead: soggy.'], vars: ['Bhel puri (Mumbai).'], serve: 'In paper cones.' });

  X('Kolkata', ST, { id: 'hing-kochuri', name: 'Hing Kochuri', local: 'হিং কচুরি', emoji: '🫓', course: 'breakfast', level: 3, prep: 30, cook: 25, serves: 4,
    taste: { savory: 4, aromatic: 4 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['festive', 'brunch'],
    desc: 'Small puffed puris stuffed with an asafoetida-scented urad dal paste, eaten with aloo dum or chholar dal.',
    story: 'A Kolkata Sunday breakfast from sweet shops; pungent hing is the signature.',
    equip: ['Kadai'],
    ing: [[250, 'g', 'all-purpose flour'], [2, 'tbsp', 'ghee'], [0.5, 'tsp', 'salt'], [120, 'ml', 'water'], '#Filling', [100, 'g', 'urad dal', 'soaked 3 hours, ground coarse'], [1, 'tbsp', 'oil'], [0.5, 'tsp', 'asafoetida (hing)'], [1, 'tsp', 'fennel seeds', 'crushed'], [1, 'tsp', 'ginger paste'], [0.5, 'tsp', 'chili powder'], [0.5, 'tsp', 'salt'], [700, 'ml', 'oil', 'for frying']],
    steps: [['Filling', 'Cook the dal paste with oil, hing, fennel, ginger, chili and salt until dry and crumbly.', 8], ['Dough', 'Rub ghee into flour and salt; knead with water.'], ['Fill and fry', 'Stuff small balls, roll gently and [[deep-fry]] until puffed.', 15]],
    tips: ['Dry filling rolls without tearing.'], mistakes: ['Thick rolling: no puff.'], vars: ['Koraishutir kochuri (green peas).'], serve: 'Aloo dum.' });

  X('West Bengal', SW, { id: 'pantua', name: 'Pantua', local: 'পান্তুয়া', emoji: '🟤', course: 'dessert', level: 3, prep: 25, cook: 25, serves: 12,
    taste: { sweet: 5, rich: 4 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['festive'],
    desc: 'Bengal’s cousin of gulab jamun, made with chhena and semolina, fried dark and soaked in light syrup.',
    story: 'Ledikeni, a pantua variety, was named after Lady Canning, wife of a Governor-General of India.',
    equip: ['Kadai'],
    ing: [[200, 'g', 'chhena (fresh paneer)', 'drained'], [50, 'g', 'khoya (mawa)'], [2, 'tbsp', 'fine semolina'], [2, 'tbsp', 'all-purpose flour'], [0.25, 'tsp', 'baking soda'], [0.25, 'tsp', 'cardamom powder'], [700, 'ml', 'ghee or oil', 'for frying'], [300, 'g', 'sugar'], [400, 'ml', 'water']],
    steps: [['Knead', 'Knead chhena, khoya, semolina, flour, soda and cardamom smooth; shape crack-free balls.', 10], ['Fry', 'Fry on low until deep brown.', 12], ['Soak', 'Soak in warm syrup 1 hour.']],
    tips: ['Knead until the chhena feels greasy.'], mistakes: ['Cracks: they split.'], vars: ['Ledikeni (cylindrical).'], serve: 'Warm.' });

  X('West Bengal', SW, { id: 'chomchom', name: 'Chomchom', local: 'চমচম', emoji: '🍬', course: 'dessert', level: 3, prep: 25, cook: 35, rest: 60, serves: 10,
    taste: { sweet: 5, rich: 3 }, diet: ['vegetarian'], methods: ['simmer'], tags: ['festive'],
    desc: 'Oval chhena sweets boiled in syrup until firm and juicy, rolled in khoya crumbs or coconut.',
    story: 'From Porabari in Tangail (now Bangladesh); loved across Bengal.',
    equip: ['Wide pot'],
    ing: [[250, 'g', 'chhena (fresh paneer)', 'drained 1 hour'], [1, 'tsp', 'semolina'], [300, 'g', 'sugar'], [1, 'l', 'water'], [0.25, 'tsp', 'cardamom powder'], [60, 'g', 'khoya (mawa)', 'crumbled, or desiccated coconut'], [1, 'pinch', 'saffron']],
    steps: [['Knead', 'Knead chhena and semolina smooth; shape ovals.', 10], ['Boil', '[[simmer|Boil]] in syrup, covered, 25 minutes; they swell and firm.', 25], ['Coat', 'Cool, squeeze lightly and roll in khoya.']],
    tips: ['Keep the syrup boiling so they don’t sink.'], mistakes: ['Under-kneaded: they break.'], vars: ['Pink or yellow chomchom.'], serve: 'Chilled.' });

  X('Odisha', ST, { id: 'dahi-bara-aloo-dum', name: 'Dahi Bara Aloo Dum', local: 'ଦହିବରା ଆଳୁଦମ', emoji: '🥣', course: 'snack', level: 2, prep: 25, cook: 30, rest: 240, serves: 4,
    taste: { sour: 3, spicy: 4, savory: 4 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['deep-fry', 'simmer'], tags: ['street-food'],
    desc: 'Cuttack’s street bowl: soft urad dal vadas in thin spiced yogurt, topped with spicy potato curry, ghugni and onions.',
    story: 'Cuttack’s favourite street snack, eaten standing at the roadside from leaf bowls.',
    equip: ['Kadai', 'Pot'],
    ing: [[150, 'g', 'urad dal', 'soaked 4 hours'], [0.5, 'tsp', 'salt'], [700, 'ml', 'oil', 'for frying'], [400, 'g', 'yogurt', 'thinned with 400 ml water, tempered with mustard and curry leaves'], [0.5, 'tsp', 'salt'], '#Aloo dum', [3, '', 'potatoes', 'boiled, cubed'], [2, 'tbsp', 'oil'], [1, '', 'onion'], [1, 'tsp', 'ginger-garlic paste'], [1, '', 'tomato'], [1, 'tsp', 'chili powder'], [1, 'tsp', 'ground cumin'], [0.5, 'tsp', 'ground turmeric'], [300, 'ml', 'water'], [0.75, 'tsp', 'salt'], [1, '', 'onion', 'chopped, to top'], [1, 'tsp', 'roasted cumin powder']],
    steps: [['Vadas', 'Grind dal fluffy with salt; [[deep-fry]] small vadas; soak in water, squeeze and drop into the thin spiced yogurt.', 25], ['Aloo dum', 'Fry onion, ginger-garlic, tomato and spices; add potatoes, water and salt; [[simmer]] 10 minutes.', 15], ['Serve', 'Vadas and yogurt in bowls, aloo dum on top, onion and roasted cumin.']],
    tips: ['Yogurt should be thin and drinkable.'], mistakes: ['Not soaking vadas: hard.'], vars: ['Add ghugni.'], serve: 'In leaf bowls.' });

  X('Odisha', SW, { id: 'rasabali', name: 'Rasabali', local: 'ରସାବଳି', emoji: '🥛', course: 'dessert', level: 3, prep: 20, cook: 50, serves: 8,
    taste: { sweet: 5, rich: 5, aromatic: 4 }, diet: ['vegetarian'], methods: ['deep-fry', 'simmer'], tags: ['festive'],
    desc: 'Flattened fried chhena discs soaked in thick, cardamom-scented reduced milk.',
    story: 'Offered to Lord Baladevjew at Kendrapara and one of the 56 offerings (chhappan bhog) at Puri’s Jagannath temple.',
    equip: ['Kadai', 'Wide pan'],
    ing: [[250, 'g', 'chhena (fresh paneer)', 'drained'], [2, 'tbsp', 'semolina'], [1, 'tbsp', 'all-purpose flour'], [500, 'ml', 'ghee or oil', 'for frying'], [1, 'l', 'whole milk'], [150, 'g', 'sugar'], [0.5, 'tsp', 'cardamom powder']],
    steps: [['Discs', 'Knead chhena with semolina and flour; shape flat discs with a dent.', 10], ['Fry', 'Fry on low until reddish brown.', 12], ['Rabdi', 'Reduce milk by half with sugar and cardamom; add discs and simmer 5 minutes; soak 1 hour.', 35]],
    tips: ['Thin discs soak up more milk.'], mistakes: ['Hot oil: hard discs.'], vars: ['Chhena kheeri.'], serve: 'Chilled.' });

  X('Bihar', SW, { id: 'khaja', name: 'Khaja', local: 'खाजा', emoji: '🥐', course: 'dessert', level: 3, prep: 40, cook: 30, serves: 12,
    taste: { sweet: 4, rich: 4 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['festive', 'make-ahead'],
    desc: 'Flaky, many-layered fried pastry soaked in syrup; Silao in Bihar and Puri in Odisha are famous for it.',
    story: 'Silao’s khaja has a GI tag; it is said to have 52 layers.',
    equip: ['Kadai', 'Rolling pin'],
    ing: [[250, 'g', 'all-purpose flour'], [2, 'tbsp', 'ghee'], [110, 'ml', 'water'], '#Layer paste', [3, 'tbsp', 'ghee'], [2, 'tbsp', 'rice flour'], [700, 'ml', 'ghee or oil', 'for frying'], [250, 'g', 'sugar'], [125, 'ml', 'water'], [0.5, 'tsp', 'cardamom powder']],
    steps: [['Dough', 'Knead flour, ghee and water firm.'], ['Layer', 'Roll thin sheets, spread ghee-rice flour paste, stack 4, roll up tightly and cut slices; roll each lightly.'], ['Fry and soak', 'Fry on low until layers open and turn golden; dip in thick syrup.', 25]],
    tips: ['Low heat opens the layers.'], mistakes: ['Hot oil: layers stay shut.'], vars: ['Puri khaja (Odisha), less sweet.'], serve: 'Room temperature.' });

  X('Bihar', H, { id: 'dal-pitha', name: 'Dal Pitha', local: 'दाल पीठा', emoji: '🥟', course: 'snack', level: 2, prep: 30, cook: 20, rest: 120, serves: 4,
    taste: { savory: 4, spicy: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['healthy', 'festive'],
    desc: 'Bihar’s rice-flour dumplings stuffed with spiced chana dal paste, boiled and then tempered.',
    story: 'Made in Bihar and Jharkhand for Pus (winter) festivals; the Bihari cousin of modak.',
    equip: ['Pot', 'Pan'],
    ing: [[200, 'g', 'rice flour'], [250, 'ml', 'boiling water'], [0.25, 'tsp', 'salt'], [150, 'g', 'chana dal', 'soaked 2 hours'], [3, 'clove', 'garlic'], [1, 'tbsp', 'ginger'], [2, '', 'green chilies'], [1, 'tsp', 'ajwain'], [0.5, 'tsp', 'salt'], [1, 'l', 'water', 'for boiling'], [1, 'tbsp', 'mustard oil or oil'], [1, 'tsp', 'mustard seeds']],
    steps: [['Filling', 'Grind dal coarsely with garlic, ginger, chilies, ajwain and salt.'], ['Dough', 'Mix flour and salt with boiling water; knead smooth.'], ['Shape and boil', 'Fill flat rounds, fold into half moons; [[simmer|boil]] 15 minutes until they float.', 15], ['Temper', 'Toss in mustard oil with mustard seeds.', 3]],
    tips: ['Keep the dough covered.'], mistakes: ['Thick dough: chewy.'], vars: ['Steamed dal pitha.'], serve: 'Tomato or coriander chutney.' });

  /* ---------- Arunachal ---------- */
  X('Arunachal Pradesh', H, { id: 'pehak', name: 'Pehak', local: 'Pehak', emoji: '🌶️', course: 'sauce', level: 1, prep: 10, cook: 5, serves: 8,
    taste: { spicy: 5, umami: 4 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['quick'],
    desc: 'Apatani chutney of roasted fermented soybeans pounded with fiery chilies and a little salt.',
    story: 'From the Apatani people of Ziro valley; eaten with rice and boiled vegetables at almost every meal.',
    equip: ['Mortar and pestle'],
    ing: [[100, 'g', 'fermented soybeans (natto or kinema)'], [6, '', 'green or red chilies', 'roasted'], [2, 'clove', 'garlic'], [0.5, 'tsp', 'salt'], [1, 'tbsp', 'water']],
    steps: [['Roast', 'Dry-roast the soybeans and chilies until spotted.', 4], ['Pound', '[[pound|Pound]] everything to a coarse paste.']],
    tips: ['Roasting the beans tames their smell.'], mistakes: ['Too smooth: it should be coarse.'], vars: ['With dried fish (not vegetarian).'], serve: 'Rice and boiled greens.' });
})();
