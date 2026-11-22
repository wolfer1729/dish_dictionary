/* World batch 4 (veg-first): South & Southeast Asia, East Asia, the Caucasus & Balkans, Europe, Africa,
   the Caribbean, the Americas and Oceania. Original recipes written for Dish Dictionary. */
'use strict';
(function () {
  const C = (country, flag, region, extra) => Object.assign({ country, flag, region }, extra || {});
  const X = (base, d) => DD.add(Object.assign({}, base, d));
  const LK = C('Sri Lanka', '🇱🇰', 'South Asia'), NP = C('Nepal', '🇳🇵', 'South Asia'), AF = C('Afghanistan', '🇦🇫', 'Middle East');
  const CN = C('China', '🇨🇳', 'East Asia'), JP = C('Japan', '🇯🇵', 'East Asia'), KR = C('South Korea', '🇰🇷', 'East Asia');
  const DE = C('Germany', '🇩🇪', 'Europe', { styles: ['continental'] }), GR = C('Greece', '🇬🇷', 'Europe');
  const NG = C('Nigeria', '🇳🇬', 'Africa'), GH = C('Ghana', '🇬🇭', 'Africa'), KE = C('Kenya', '🇰🇪', 'Africa'), ZA = C('South Africa', '🇿🇦', 'Africa'), MA = C('Morocco', '🇲🇦', 'Africa');

  /* ======================= SOUTH ASIA ======================= */
  X(LK, { id: 'kottu-roti', name: 'Vegetable Kottu Roti', local: 'කොත්තු', emoji: '🥘', course: 'main', level: 2, prep: 15, cook: 15, serves: 3,
    taste: { spicy: 3, savory: 4, aromatic: 4 }, diet: ['vegetarian'], methods: ['stir-fry'], tags: ['street-food', 'weeknight'],
    desc: 'Chopped flatbread stir-fried with vegetables, egg, curry leaves and curry sauce on a hot griddle.',
    story: 'At night, Sri Lankan kottu stalls are loud with the rhythmic clang of two metal blades chopping roti on the griddle.',
    equip: ['Wok or flat griddle', 'Two spatulas'],
    ing: [[4, '', 'rotis or parathas', 'shredded'], [3, 'tbsp', 'oil'], [1, '', 'onion', 'sliced'], [2, '', 'green chilies'], [10, 'leaf', 'curry leaves'], [1, '', 'carrot', 'julienned'], [150, 'g', 'cabbage', 'shredded'], [2, '', 'leek', 'sliced'], [2, '', 'eggs', 'optional'], [1, 'tsp', 'curry powder'], [120, 'ml', 'vegetable curry sauce or stock'], [1, 'tbsp', 'soy sauce'], [0.5, 'tsp', 'salt']],
    steps: [['Vegetables', '[[stir-fry|Stir-fry]] onion, chilies and curry leaves, then carrot, cabbage and leek, 4 minutes.', 5], ['Egg', 'Push aside, scramble the eggs.', 2], ['Kottu', 'Add the roti, curry powder, curry sauce, soy and salt; chop and toss with two spatulas until hot and coated.', 5]],
    tips: ['Day-old parathas absorb the curry best.'], mistakes: ['Dry kottu: add more curry sauce.'], vars: ['Cheese kottu.'], serve: 'Extra curry sauce on the side.' });

  X(LK, { id: 'pol-sambol', name: 'Pol Sambol', local: 'පොල් සම්බෝල', emoji: '🥥', course: 'sauce', level: 1, prep: 10, cook: 0, serves: 4,
    taste: { spicy: 4, sour: 3, savory: 3 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['quick'],
    desc: 'Fresh coconut pounded with red chili, onion and lime. Sri Lanka’s everyday relish.',
    story: 'Eaten with rice, hoppers, string hoppers and bread at almost every Sri Lankan meal.',
    equip: ['Mortar and pestle'],
    ing: [[150, 'g', 'fresh grated coconut'], [1.5, 'tsp', 'chili flakes'], [1, '', 'red onion', 'finely chopped'], [1, '', 'lime', 'juice'], [0.5, 'tsp', 'salt'], [1, 'pinch', 'black pepper']],
    steps: [['Pound', '[[pound|Pound]] the onion, chili and salt, then mix in the coconut and lime until pink.']],
    tips: ['Traditional versions add Maldive fish; this is the vegan way.'], mistakes: ['Desiccated coconut is too dry.'], vars: ['Lunu miris: onion-chili only.'], serve: 'Hoppers, rice or bread.' });

  X(LK, { id: 'kiribath', name: 'Kiribath (Milk Rice)', local: 'කිරිබත්', emoji: '🍚', course: 'breakfast', level: 1, prep: 5, cook: 30, serves: 4,
    taste: { rich: 3, savory: 2, sweet: 1 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'brunch'],
    desc: 'Rice cooked in coconut milk until creamy, set in a tray and cut into diamonds.',
    story: 'Kiribath is made for Sinhala and Tamil New Year and on the first day of each month for good luck.',
    equip: ['Pot', 'Flat tray'],
    ing: [[250, 'g', 'short-grain rice'], [500, 'ml', 'water'], [300, 'ml', 'thick coconut milk'], [0.75, 'tsp', 'salt']],
    steps: [['Cook', 'Cook the rice in the water until soft.', 15], ['Coconut', 'Add the coconut milk and salt and stir on low until thick and creamy.', 10], ['Set', 'Spread in a tray, flatten, cool slightly and cut into diamonds.']],
    tips: ['Wet the spatula to smooth the top.'], mistakes: ['Undercooked rice: it won’t set.'], vars: ['Mung bean kiribath.'], serve: 'Lunu miris or jaggery.' });

  X(NP, { id: 'dal-bhat', name: 'Nepali Dal Bhat Tarkari', local: 'दाल भात तरकारी', emoji: '🍛', course: 'main', level: 1, prep: 15, cook: 35, serves: 4,
    taste: { savory: 4, aromatic: 4, spicy: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['comfort', 'healthy', 'budget'],
    desc: 'Nepal’s daily meal: black lentil dal with jimbu-style tempering, rice and a potato-cauliflower tarkari.',
    story: '“Dal bhat power, 24 hour” is a saying among Himalayan trekkers; Nepalis eat it twice a day.',
    equip: ['Pressure cooker', 'Kadai'],
    ing: ['#Dal', [150, 'g', 'masoor dal'], [700, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], [1, 'tbsp', 'ghee or oil'], [1, 'tsp', 'cumin seeds'], [1, 'pinch', 'asafoetida (hing)'], [3, 'clove', 'garlic'], [1, 'tsp', 'salt'],
      '#Tarkari', [2, '', 'potatoes', 'cubed'], [200, 'g', 'cauliflower', 'florets'], [2, 'tbsp', 'mustard oil'], [0.5, 'tsp', 'fenugreek seeds'], [1, 'tsp', 'ginger-garlic paste'], [1, 'tsp', 'ground cumin'], [0.5, 'tsp', 'ground turmeric'], [1, '', 'tomato'], [0.75, 'tsp', 'salt'], '#To serve', [600, 'g', 'cooked rice']],
    steps: [['Dal', 'Cook dal with water and turmeric until soft; finish with a [[tadka]] of cumin, hing and garlic.', 20], ['Tarkari', 'Crackle fenugreek in mustard oil, add paste, spices, tomato, vegetables and salt; cook covered until tender.', 15], ['Serve', 'Serve dal, rice and tarkari together with pickle (achar).']],
    tips: ['Timur (Sichuan-like pepper) in the achar is very Nepali.'], mistakes: ['Burning the fenugreek: bitter.'], vars: ['Add saag (greens) and gundruk.'], serve: 'Rice, achar and papad.' });

  X(NP, { id: 'sel-roti', name: 'Sel Roti', local: 'सेल रोटी', emoji: '⭕', course: 'snack', level: 2, prep: 15, cook: 20, rest: 300, serves: 8,
    taste: { sweet: 3, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['deep-fry'], tags: ['festive'],
    desc: 'Crisp, ring-shaped sweet rice-flour doughnuts made for Tihar and Dashain.',
    story: 'Nepali families fry sel roti by hand-pouring batter rings into hot oil during the big festivals.',
    equip: ['Grinder', 'Kadai', 'Squeeze bottle or hand'],
    ing: [[250, 'g', 'raw rice', 'soaked 5 hours'], [80, 'g', 'sugar'], [2, 'tbsp', 'ghee'], [1, '', 'ripe bananas', 'mashed'], [100, 'ml', 'milk'], [0.25, 'tsp', 'cardamom powder'], [1, 'l', 'oil', 'for frying']],
    steps: [['Batter', 'Grind the rice with sugar, banana, milk and ghee to a thick, slightly grainy batter; rest 1 hour.', 60], ['Fry', 'Pour the batter in a ring into hot oil; fry until golden, flipping once.', 15]],
    tips: ['Practise the ring shape with a squeeze bottle.'], mistakes: ['Thin batter: flat rings.'], vars: ['Without banana for a crisper sel.'], serve: 'With tea or aloo tama.' });

  X(AF, { id: 'bolani', name: 'Bolani', local: 'بولانی', emoji: '🫓', course: 'snack', level: 2, prep: 25, cook: 20, rest: 30, serves: 6,
    taste: { savory: 4, herby: 3, spicy: 2 }, diet: ['vegan'], methods: ['saute'], tags: ['party', 'street-food'],
    desc: 'Thin Afghan flatbreads stuffed with spiced potato and scallions, pan-fried crisp, served with yogurt dip.',
    story: 'Bolani is Afghan street food and party food, also stuffed with leeks, pumpkin or lentils.',
    equip: ['Rolling pin', 'Frying pan'],
    ing: [[300, 'g', 'all-purpose flour'], [180, 'ml', 'water'], [1, 'tsp', 'salt'], [1, 'tbsp', 'oil'], [4, '', 'potatoes', 'boiled, mashed'], [4, '', 'scallions', 'chopped'], [2, 'tbsp', 'cilantro'], [1, 'tsp', 'ground coriander'], [0.5, 'tsp', 'chili flakes'], [0.75, 'tsp', 'salt'], [4, 'tbsp', 'oil', 'for frying']],
    steps: [['Dough', '[[knead|Knead]] flour, water, salt and oil; rest 30 minutes.', 30], ['Filling', 'Mix the potato with scallions, herbs and spices.'], ['Fill and fry', 'Roll thin rounds, spread filling on half, fold and seal; fry in oil until crisp and golden.', 15]],
    tips: ['Roll very thin.'], mistakes: ['Thick bolani: doughy.'], vars: ['Leek (gandana) bolani.'], serve: 'Garlic yogurt (chaka) and green chutney.' });

  X(AF, { id: 'borani-banjan', name: 'Borani Banjan', local: 'بورانی بانجان', emoji: '🍆', course: 'main', level: 1, prep: 15, cook: 30, serves: 4,
    taste: { rich: 4, sour: 3, savory: 4, herby: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute', 'simmer'], tags: ['comfort', 'party'],
    desc: 'Fried eggplant slices in spiced tomato sauce, served on garlic yogurt with dried mint.',
    story: 'An Afghan dinner-party dish; the cool garlic yogurt under the rich tomato eggplant is the signature.',
    equip: ['Frying pan'],
    ing: [[2, '', 'eggplant', '1 cm slices'], [5, 'tbsp', 'oil'], [1, '', 'onion', 'sliced'], [3, '', 'tomatoes', 'chopped'], [1, 'tsp', 'ground coriander'], [0.5, 'tsp', 'ground turmeric'], [0.5, 'tsp', 'chili flakes'], [0.75, 'tsp', 'salt'], [250, 'g', 'thick yogurt'], [1, 'clove', 'garlic', 'grated'], [1, 'tsp', 'dried mint']],
    steps: [['Fry', '[[shallow-fry|Shallow-fry]] the eggplant until golden.', 10], ['Sauce', 'Cook onion, tomatoes and spices into a sauce, add eggplant and [[simmer]] 10 minutes.', 15], ['Serve', 'Spread garlic yogurt, top with eggplant and dried mint.']],
    tips: ['Salt the eggplant first.'], mistakes: ['Hot yogurt: serve it cool.'], vars: ['Borani kadu with pumpkin.'], serve: 'Naan and rice.' });

  X(C('Pakistan', '🇵🇰', 'South Asia', { area: 'Lahore' }), { id: 'halwa-puri', name: 'Halwa Puri Nashta', local: 'حلوہ پوری', emoji: '🫓', course: 'breakfast', level: 2, prep: 20, cook: 40, serves: 4,
    taste: { sweet: 4, savory: 4, spicy: 2, rich: 4 }, diet: ['vegetarian'], methods: ['deep-fry', 'simmer'], tags: ['brunch', 'festive'],
    desc: 'The Lahori Sunday breakfast: puffed puris with orange semolina halwa and spicy chickpeas.',
    story: 'Lahore’s old city queues up for halwa puri every Sunday morning; the sweet-salty-spicy combination is unbeatable.',
    equip: ['Kadai', 'Pot', 'Rolling pin'],
    ing: ['#Halwa', [120, 'g', 'fine semolina (rava)'], [80, 'g', 'ghee'], [150, 'g', 'sugar'], [400, 'ml', 'water'], [1, 'pinch', 'orange food color', 'optional'], [0.5, 'tsp', 'cardamom powder'],
      '#Puris', [250, 'g', 'whole wheat flour (atta)'], [130, 'ml', 'water'], [0.5, 'tsp', 'salt'], [1, 'l', 'oil', 'for frying'], '#Chickpeas', [1, 'can', 'chickpeas', 'drained'], [1, 'tsp', 'chole masala'], [1, '', 'tomato'], [0.5, 'tsp', 'salt']],
    steps: [['Halwa', '[[toast|Roast]] semolina in ghee until golden, add hot sugar syrup with colour and cardamom, cook until it leaves the pan.', 12], ['Chickpeas', 'Simmer chickpeas with tomato, chole masala and salt 10 minutes.', 10], ['Puris', '[[knead|Knead]] a stiff dough, roll small puris and [[deep-fry]] until puffed.', 15]],
    tips: ['Press puris gently in the oil so they puff.'], mistakes: ['Soft dough: oily puris.'], vars: ['Add aloo tarkari.'], serve: 'With lassi and pickle.' });

  X(C('Myanmar', '🇲🇲', 'Southeast Asia'), { id: 'lahpet-thoke', name: 'Lahpet Thoke (Tea Leaf Salad)', local: 'လက်ဖက်သုပ်', emoji: '🍵', course: 'salad', level: 1, prep: 15, cook: 0, serves: 4,
    taste: { sour: 3, savory: 4, bitter: 2, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['healthy', 'party'],
    desc: 'Fermented tea leaves tossed with cabbage, tomato, crunchy fried beans, peanuts, sesame, garlic and lime.',
    story: 'Myanmar eats its tea as well as drinks it. Lahpet is served to guests and at ceremonies as a sign of hospitality.',
    equip: ['Bowl'],
    ing: [[60, 'g', 'fermented tea leaves (lahpet)'], [200, 'g', 'cabbage', 'shredded'], [2, '', 'tomatoes', 'diced'], [3, 'tbsp', 'roasted peanuts'], [3, 'tbsp', 'fried split peas or crunchy beans'], [1, 'tbsp', 'toasted sesame seeds'], [2, 'tbsp', 'fried garlic chips'], [1, '', 'green chili'], [1, '', 'lime', 'juice'], [1, 'tbsp', 'peanut oil'], [0.5, 'tsp', 'salt']],
    steps: [['Toss', 'Toss everything just before serving, squeezing lime over.']],
    tips: ['Find lahpet in Burmese or Asian stores.'], mistakes: ['Tossing early: soggy crunchies.'], vars: ['Serve the parts separately on a lacquer tray.'], serve: 'With green tea.' });

  /* ======================= SOUTHEAST ASIA ======================= */
  X(C('Philippines', '🇵🇭', 'Southeast Asia'), { id: 'lumpia-gulay', name: 'Lumpiang Gulay', local: 'Lumpiang gulay', emoji: '🥢', course: 'starter', level: 2, prep: 25, cook: 20, serves: 6,
    taste: { savory: 4, sweet: 2, sour: 2 }, diet: ['vegan'], methods: ['deep-fry'], tags: ['party', 'kids'],
    desc: 'Crisp Filipino spring rolls filled with sweet potato, bean sprouts, carrot and tofu, served with spiced vinegar.',
    story: 'Lumpia are at every Filipino party. The vegetable version, lumpiang gulay, is a Lenten favourite.',
    equip: ['Wok', 'Kadai'],
    ing: [[12, 'sheet', 'spring roll wrappers'], [200, 'g', 'firm tofu', 'diced, fried'], [1, '', 'sweet potato', 'julienned'], [1, '', 'carrot', 'julienned'], [150, 'g', 'bean sprouts'], [100, 'g', 'green beans', 'sliced'], [3, 'clove', 'garlic'], [1, 'tbsp', 'soy sauce'], [1, 'l', 'oil', 'for frying'], [100, 'ml', 'cane or white vinegar', 'with garlic and chili, to dip']],
    steps: [['Filling', 'Stir-fry garlic, vegetables and tofu with soy until just tender; cool.', 8], ['Roll', 'Roll tightly in wrappers, sealing with water.'], ['Fry', '[[deep-fry|Deep-fry]] until golden.', 10]],
    tips: ['Cool filling = no soggy rolls.'], mistakes: ['Loose rolls burst.'], vars: ['Fresh lumpia (ubod) with a sweet peanut sauce.'], serve: 'Garlic-chili vinegar.' });

  X(C('Philippines', '🇵🇭', 'Southeast Asia'), { id: 'champorado', name: 'Champorado', local: 'Champorado', emoji: '🍫', course: 'breakfast', level: 1, prep: 5, cook: 25, serves: 4,
    taste: { sweet: 4, rich: 4, bitter: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'rainy-day', 'kids'],
    desc: 'Sticky rice porridge cooked with dark chocolate, drizzled with evaporated milk.',
    story: 'A rainy-season breakfast in the Philippines, from Mexican champurrado brought on the galleon trade.',
    equip: ['Pot'],
    ing: [[150, 'g', 'glutinous (sticky) rice'], [1, 'l', 'water'], [80, 'g', 'dark chocolate'], [3, 'tbsp', 'cocoa powder'], [80, 'g', 'sugar'], [80, 'ml', 'evaporated milk', 'to drizzle']],
    steps: [['Cook', 'Simmer the rice in water, stirring, until soft, 20 minutes.', 20], ['Chocolate', 'Stir in chocolate, cocoa and sugar until glossy.', 4], ['Serve', 'Drizzle with evaporated milk.']],
    tips: ['Tablea (Filipino cacao tablets) is traditional.'], mistakes: ['Not stirring: it sticks.'], vars: ['Coconut milk for a vegan version.'], serve: 'Hot, sometimes with dried fish (not vegetarian).' });

  X(C('Malaysia', '🇲🇾', 'Southeast Asia'), { id: 'roti-canai', name: 'Roti Canai with Dal Curry', local: 'Roti canai', emoji: '🫓', course: 'breakfast', level: 3, prep: 30, cook: 30, rest: 480, serves: 4,
    taste: { rich: 4, savory: 4, aromatic: 3 }, diet: ['vegetarian'], methods: ['saute', 'simmer'], tags: ['brunch', 'street-food', 'impress'],
    desc: 'Flaky, stretchy layered flatbread from Malaysian mamak stalls, torn and dipped in dal curry.',
    story: 'Brought by South Indian Muslim (mamak) migrants; the dough is spun paper-thin and folded like a parcel.',
    equip: ['Oiled work surface', 'Flat griddle'],
    ing: [[400, 'g', 'all-purpose flour'], [1, 'tsp', 'salt'], [1, 'tbsp', 'sugar'], [1, '', 'egg'], [150, 'ml', 'milk'], [80, 'ml', 'water'], [6, 'tbsp', 'ghee or oil'], '#Dal curry', [150, 'g', 'masoor dal'], [600, 'ml', 'water'], [1, 'tbsp', 'curry powder'], [1, '', 'tomato'], [1, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [10, 'leaf', 'curry leaves'], [1, 'tsp', 'salt']],
    steps: [['Dough', '[[knead|Knead]] flour, salt, sugar, egg, milk and water 10 minutes; oil well and [[rest]] overnight.', 480], ['Stretch', 'Spread each ball paper-thin on an oiled surface, fold into a square.'], ['Cook', 'Cook on a hot griddle with ghee until golden; scrunch to open the layers.', 15], ['Dal', 'Cook dal with curry powder, tomato and salt; finish with a mustard-curry leaf [[tadka]].', 20]],
    tips: ['Long resting makes the dough stretch.'], mistakes: ['Tearing: not enough rest or oil.'], vars: ['Roti telur (with egg inside).'], serve: 'Dal curry and teh tarik.' });

  X(C('Malaysia', '🇲🇾', 'Southeast Asia'), { id: 'mee-goreng', name: 'Mee Goreng Mamak (Veg)', local: 'Mee goreng mamak', emoji: '🍜', course: 'main', level: 1, prep: 15, cook: 10, serves: 2,
    taste: { spicy: 3, sweet: 3, savory: 4, sour: 2 }, diet: ['vegetarian'], methods: ['stir-fry'], tags: ['street-food', 'quick', 'weeknight'],
    desc: 'Yellow noodles wok-fried with tofu, potato, choy sum, egg and a sweet-spicy chili-ketchup sauce.',
    story: 'A mamak-stall classic mixing Indian, Chinese and Malay flavours; boiled potato in the noodles is the mamak signature.',
    equip: ['Wok'],
    ing: [[300, 'g', 'cooked egg noodles', 'yellow'], [2, 'tbsp', 'oil'], [3, 'clove', 'garlic'], [150, 'g', 'firm tofu', 'fried cubes'], [1, '', 'potato', 'boiled, cubed'], [100, 'g', 'choy sum or bok choy'], [2, '', 'eggs'], [2, 'tbsp', 'ketchup'], [1, 'tbsp', 'chili sauce'], [1, 'tbsp', 'kecap manis'], [1, 'tbsp', 'soy sauce'], [100, 'g', 'bean sprouts'], [1, '', 'lime']],
    steps: [['Base', '[[stir-fry|Stir-fry]] garlic, tofu and potato; push aside and scramble the eggs.', 3], ['Noodles', 'Add noodles, sauces and greens and toss over high heat 3 minutes.', 3], ['Finish', 'Toss in sprouts; serve with lime.', 1]],
    tips: ['High heat for wok smoke.'], mistakes: ['Overcrowding: soggy noodles.'], vars: ['Add prawns (not vegetarian).'], serve: 'Lime and sambal.' });

  X(C('Vietnam', '🇻🇳', 'Southeast Asia'), { id: 'banh-xeo', name: 'Bánh Xèo (Vegetarian)', local: 'Bánh xèo chay', emoji: '🥞', course: 'main', level: 2, prep: 20, cook: 25, rest: 30, serves: 4,
    taste: { savory: 4, herby: 5, sour: 2, sweet: 2 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['weeknight', 'party'],
    desc: 'Crackling turmeric-coconut rice crepes filled with mushrooms, tofu and bean sprouts, wrapped in lettuce and herbs.',
    story: '“Xèo” is the sizzling sound the batter makes in the hot pan. Pieces are wrapped in lettuce and dipped in sauce.',
    equip: ['Non-stick pan with lid'],
    ing: [[200, 'g', 'rice flour'], [1, 'tsp', 'ground turmeric'], [200, 'ml', 'coconut milk'], [250, 'ml', 'water'], [2, '', 'scallions', 'sliced'], [0.5, 'tsp', 'salt'], [200, 'g', 'mushrooms', 'sliced'], [150, 'g', 'firm tofu', 'thin strips'], [150, 'g', 'bean sprouts'], [4, 'tbsp', 'oil'], [1, 'head', 'soft lettuce'], [1, 'bunch', 'mint and cilantro'], [100, 'ml', 'vegan dipping sauce (soy, lime, sugar, chili)']],
    steps: [['Batter', 'Whisk rice flour, turmeric, coconut milk, water, scallions and salt; rest 30 minutes.', 30], ['Fill', 'Fry mushrooms and tofu in a little oil in the pan; pour a thin layer of batter around, add sprouts, cover 2 minutes.', 3], ['Crisp', 'Uncover and cook until crisp; fold in half.', 3]],
    tips: ['Thin batter and a hot pan make it crackle.'], mistakes: ['Thick crepe: soft, not crisp.'], vars: ['Classic with prawns and pork (not vegetarian).'], serve: 'Wrapped in lettuce and herbs, dipped in sauce.' });

  X(C('Vietnam', '🇻🇳', 'Southeast Asia'), { id: 'pho-chay', name: 'Phở Chay (Vegetarian Pho)', local: 'Phở chay', emoji: '🍜', course: 'soup', level: 2, prep: 20, cook: 60, serves: 4,
    taste: { aromatic: 5, savory: 4, umami: 4, herby: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'winter'],
    desc: 'Rice noodles in a fragrant broth of charred onion, ginger, star anise and cinnamon, with tofu, mushrooms and fresh herbs.',
    story: 'Buddhist vegetarian restaurants in Vietnam make phở chay with a deep vegetable broth that is just as aromatic.',
    equip: ['Large pot', 'Gas flame or grill'],
    ing: [[2, '', 'onions', 'halved'], [80, 'g', 'ginger', 'halved'], [3, '', 'star anise'], [1, 'piece', 'cinnamon stick'], [4, '', 'whole cloves'], [1, 'tbsp', 'coriander seeds'], [2, '', 'carrots'], [1, '', 'daikon radish'], [6, '', 'dried shiitake'], [2, 'l', 'water'], [3, 'tbsp', 'tamari or soy sauce'], [1, 'tbsp', 'sugar'], [1, 'tsp', 'salt'], [300, 'g', 'rice noodles'], [200, 'g', 'firm tofu', 'fried'], [150, 'g', 'bean sprouts'], [1, 'bunch', 'thai basil'], [2, '', 'limes'], [1, '', 'red chili']],
    steps: [['Char', '[[char|Char]] the onion and ginger over flame until blackened in spots.', 6], ['Broth', 'Toast the spices, add everything for the broth and [[simmer]] 45 minutes; strain and season.', 45], ['Bowls', 'Soak the noodles, add to bowls with tofu, pour over boiling broth and top with sprouts, herbs, lime and chili.']],
    tips: ['Charring is what gives phở its depth.'], mistakes: ['Boiling hard: cloudy broth.'], vars: ['Add charred corn and a splash of coconut water for sweetness.'], serve: 'Hoisin and sriracha on the side.' });

  X(C('Indonesia', '🇮🇩', 'Southeast Asia'), { id: 'martabak-manis', name: 'Martabak Manis', local: 'Martabak manis', emoji: '🥞', course: 'dessert', level: 2, prep: 15, cook: 20, rest: 60, serves: 6,
    taste: { sweet: 5, rich: 5 }, diet: ['vegetarian'], methods: ['saute'], tags: ['street-food', 'party'],
    desc: 'A thick, spongy honeycomb pancake slathered with butter, chocolate sprinkles, peanuts and condensed milk, folded in half.',
    story: 'Indonesia’s night-market favourite, also called terang bulan (“full moon”) in some regions.',
    equip: ['Heavy pan with lid'],
    ing: [[250, 'g', 'all-purpose flour'], [2, 'tbsp', 'sugar'], [1, '', 'egg'], [300, 'ml', 'milk'], [1, 'tsp', 'instant yeast'], [0.5, 'tsp', 'baking soda'], [1, 'pinch', 'salt'], [50, 'g', 'butter', 'soft'], [4, 'tbsp', 'chocolate sprinkles'], [3, 'tbsp', 'roasted peanuts', 'crushed'], [4, 'tbsp', 'sweetened condensed milk']],
    steps: [['Batter', '[[whisk|Whisk]] flour, sugar, egg, milk, yeast and salt; rest 1 hour. Stir in soda just before cooking.', 60], ['Cook', 'Pour into a hot buttered pan; when bubbles cover the top, sprinkle sugar and cover until set.', 10], ['Fill', 'Spread butter, chocolate, peanuts and condensed milk; fold and cut.']],
    tips: ['A thick pan gives the honeycomb.'], mistakes: ['High heat: burnt base.'], vars: ['Cheese and chocolate martabak.'], serve: 'Hot, cut into wedges.' });

  /* ======================= EAST ASIA ======================= */
  X(CN, { id: 'scallion-pancakes', name: 'Scallion Pancakes', local: '葱油饼', emoji: '🥞', course: 'snack', level: 2, prep: 25, cook: 15, rest: 30, serves: 4,
    taste: { savory: 4, rich: 3, aromatic: 3 }, diet: ['vegan'], methods: ['saute'], tags: ['street-food', 'brunch'],
    desc: 'Flaky, chewy layered flatbreads full of scallions, pan-fried until crisp.',
    story: 'Cong you bing is a Shanghai and northern Chinese street breakfast made from just flour, water, oil and scallions.',
    equip: ['Rolling pin', 'Frying pan'],
    ing: [[250, 'g', 'all-purpose flour'], [160, 'ml', 'hot water'], [3, 'tbsp', 'neutral oil'], [1, 'tbsp', 'flour', 'for the paste'], [6, '', 'scallions', 'finely sliced'], [1, 'tsp', 'salt'], [0.5, 'tsp', 'white pepper'], '#Dip', [2, 'tbsp', 'soy sauce'], [1, 'tbsp', 'rice vinegar'], [1, 'tsp', 'chili oil']],
    steps: [['Dough', 'Mix flour with hot water, [[knead]] smooth; rest 30 minutes.', 30], ['Laminate', 'Roll thin, brush with oil-flour paste, sprinkle salt, pepper and scallions; roll into a log, coil into a spiral and flatten.'], ['Fry', 'Pan-fry in oil until crisp and golden on both sides.', 10]],
    tips: ['Hot-water dough stays tender.'], mistakes: ['Pressing too hard: lose the layers.'], vars: ['Add sesame seeds.'], serve: 'Soy-vinegar dip.' });

  X(CN, { id: 'di-san-xian', name: 'Di San Xian (Three Treasures)', local: '地三鲜', emoji: '🍆', course: 'main', level: 2, prep: 15, cook: 20, serves: 3,
    taste: { savory: 4, sweet: 2, umami: 3 }, diet: ['vegan'], methods: ['deep-fry', 'stir-fry'], tags: ['weeknight', 'comfort'],
    desc: 'Northeast China’s “three treasures of the earth”: eggplant, potato and green pepper, fried and tossed in a garlicky soy glaze.',
    story: 'A homestyle Dongbei classic and one of China’s most-ordered vegetable dishes.',
    equip: ['Wok'],
    ing: [[1, '', 'eggplant', 'chunks'], [1, '', 'potato', 'chunks'], [1, '', 'green bell pepper', 'chunks'], [2, 'tbsp', 'cornstarch'], [500, 'ml', 'oil', 'for frying'], [3, 'clove', 'garlic'], [2, 'tbsp', 'soy sauce'], [1, 'tsp', 'sugar'], [1, 'tsp', 'cornstarch', 'in 4 tbsp water']],
    steps: [['Fry', 'Dust eggplant in cornstarch; fry potato until golden, then eggplant, then pepper briefly.', 12], ['Glaze', 'In a little oil, fry garlic, add soy, sugar and the slurry, then toss everything until glossy ([[stir-fry]]).', 3]],
    tips: ['Fry each vegetable separately.'], mistakes: ['Soggy eggplant: oil not hot enough.'], vars: ['Air-fry the vegetables.'], serve: 'Rice.' });

  X(CN, { id: 'jianbing', name: 'Jianbing', local: '煎饼果子', emoji: '🌯', course: 'breakfast', level: 2, prep: 15, cook: 10, serves: 2,
    taste: { savory: 4, spicy: 2, sweet: 2, herby: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['street-food', 'brunch'],
    desc: 'A thin mung-bean crepe with egg, hoisin, chili, scallions, cilantro and a crunchy cracker folded inside.',
    story: 'Tianjin and Beijing’s breakfast on the go, made on round griddles at street carts at dawn.',
    equip: ['Large non-stick pan', 'Spatula'],
    ing: [[80, 'g', 'all-purpose flour'], [40, 'g', 'mung bean flour or more flour'], [200, 'ml', 'water'], [2, '', 'eggs'], [2, 'tbsp', 'hoisin sauce'], [1, 'tsp', 'chili sauce'], [2, '', 'scallions'], [2, 'tbsp', 'cilantro'], [2, 'sheet', 'wonton crackers or crisp crackers']],
    steps: [['Crepe', 'Spread a thin layer of batter in the pan; crack an egg over and spread it.', 2], ['Sauce', 'Flip, brush with hoisin and chili, add scallions, cilantro and cracker.', 1], ['Fold', 'Fold into a parcel and serve hot.']],
    tips: ['Use a large pan and thin batter.'], mistakes: ['Thick crepe: tough.'], vars: ['Add youtiao (fried dough) instead of crackers.'], serve: 'Hot, in a paper bag.' });

  X(C('Hong Kong', '🇭🇰', 'East Asia'), { id: 'egg-tarts', name: 'Hong Kong Egg Tarts', local: '蛋撻', emoji: '🥧', course: 'dessert', level: 2, prep: 30, cook: 25, serves: 12,
    taste: { sweet: 4, rich: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['party', 'brunch'],
    desc: 'Buttery pastry cases with a glossy, smooth egg custard. A Hong Kong cha chaan teng classic.',
    story: 'Inspired by British custard tarts and Portuguese pastéis de nata via Macau; Hong Kong’s version has a silky, unburnt top.',
    equip: ['Tart tins', 'Oven'],
    ing: [[250, 'g', 'puff pastry'], [3, '', 'eggs'], [80, 'g', 'sugar'], [200, 'ml', 'hot water'], [100, 'ml', 'evaporated milk'], [1, 'tsp', 'vanilla extract']],
    steps: [['Custard', 'Dissolve sugar in hot water, cool, then whisk in eggs, evaporated milk and vanilla; strain.'], ['Line', 'Line tart tins with pastry.'], ['Bake', 'Fill 90% and bake at {{200C}} 10 minutes, then {{180C}} 12 minutes until just set.', 22]],
    tips: ['Strain the custard for silkiness.'], mistakes: ['Too hot: the custard puffs and cracks.'], vars: ['Portuguese-style with caramelized tops.'], serve: 'Warm, with milk tea.' });

  X(JP, { id: 'onigiri', name: 'Onigiri', local: 'おにぎり', emoji: '🍙', course: 'snack', level: 1, prep: 20, cook: 0, serves: 4,
    taste: { savory: 3, umami: 4 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['kids', 'meal-prep'],
    desc: 'Rice triangles shaped by hand around a pickled plum or seasoned filling, wrapped in nori.',
    story: 'Japan’s lunchbox and convenience-store staple. Umeboshi (sour plum) was used to help rice keep fresh.',
    equip: ['Bowl of salted water'],
    ing: [[500, 'g', 'cooked short-grain rice', 'warm'], [4, 'sheet', 'nori', 'halved'], [4, '', 'umeboshi (pickled plums)', 'or seasoned kombu'], [1, 'tsp', 'salt'], [1, 'tbsp', 'toasted sesame seeds']],
    steps: [['Shape', 'Wet and salt your hands, take a handful of rice, add filling in the centre and press into a triangle.'], ['Wrap', 'Wrap with nori just before eating.']],
    tips: ['Warm rice holds together best.'], mistakes: ['Squeezing too hard: dense rice.'], vars: ['Yaki onigiri: grilled with soy.'], serve: 'With miso soup or packed for lunch.' });

  X(JP, { id: 'yakisoba', name: 'Vegetable Yakisoba', local: '焼きそば', emoji: '🍜', course: 'main', level: 1, prep: 15, cook: 10, serves: 2,
    taste: { savory: 4, sweet: 3, umami: 4, sour: 2 }, diet: ['vegan'], methods: ['stir-fry'], tags: ['quick', 'weeknight', 'street-food'],
    desc: 'Wheat noodles stir-fried with cabbage, carrot, mushrooms and tofu in a tangy-sweet yakisoba sauce.',
    story: 'A summer-festival (matsuri) stall favourite, cooked on big flat griddles.',
    equip: ['Wok or griddle'],
    ing: [[300, 'g', 'steamed yakisoba noodles', 'or cooked ramen noodles'], [2, 'tbsp', 'oil'], [150, 'g', 'cabbage', 'chopped'], [1, '', 'carrot', 'julienned'], [100, 'g', 'mushrooms'], [150, 'g', 'firm tofu', 'strips'], [3, 'tbsp', 'worcestershire-style vegan sauce or tonkatsu sauce'], [1, 'tbsp', 'soy sauce'], [1, 'tbsp', 'ketchup'], [1, 'tsp', 'sugar'], [1, 'tbsp', 'pickled red ginger'], [1, 'tsp', 'aonori (seaweed powder)']],
    steps: [['Vegetables', '[[stir-fry|Stir-fry]] tofu and vegetables 4 minutes.', 4], ['Noodles', 'Add the noodles and sauces and toss until coated and hot.', 3], ['Top', 'Top with pickled ginger and aonori.']],
    tips: ['Loosen the noodles with water first.'], mistakes: ['Sticky noodles: add a splash of water.'], vars: ['Yakisoba pan: in a hot dog bun.'], serve: 'Hot.' });

  X(JP, { id: 'dorayaki', name: 'Dorayaki', local: 'どら焼き', emoji: '🥞', course: 'dessert', level: 1, prep: 15, cook: 20, rest: 15, serves: 6,
    taste: { sweet: 4, rich: 2 }, diet: ['vegetarian'], methods: ['saute'], tags: ['kids', 'party'],
    desc: 'Two fluffy honey pancakes sandwiching sweet red bean paste.',
    story: 'Doraemon’s favourite snack; the name may come from “dora” (gong), as the pancakes look like one.',
    equip: ['Non-stick pan'],
    ing: [[2, '', 'eggs'], [70, 'g', 'sugar'], [1, 'tbsp', 'honey'], [130, 'g', 'all-purpose flour'], [0.5, 'tsp', 'baking powder'], [60, 'ml', 'water'], [250, 'g', 'sweet red bean paste (anko)']],
    steps: [['Batter', '[[whisk|Whisk]] eggs, sugar and honey until pale; add flour, baking powder and water. Rest 15 minutes.', 15], ['Cook', 'Cook small pancakes on low heat until bubbles form, flip briefly.', 15], ['Fill', 'Sandwich with bean paste.']],
    tips: ['Wipe the pan with an oily towel for even colour.'], mistakes: ['High heat: patchy pancakes.'], vars: ['Matcha cream or custard filling.'], serve: 'With green tea.' });

  X(JP, { id: 'chawanmushi', name: 'Mushroom Chawanmushi', local: '茶碗蒸し', emoji: '🥚', course: 'starter', level: 2, prep: 10, cook: 15, serves: 4,
    taste: { umami: 4, savory: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['steam'], tags: ['healthy', 'impress'],
    desc: 'A silky steamed egg custard flavoured with kombu dashi and mushrooms, served in cups.',
    story: '“Tea cup steamed”: a delicate Japanese starter. Usually with shrimp and chicken; this version uses mushrooms and ginkgo.',
    equip: ['Cups with lids', 'Steamer'],
    ing: [[3, '', 'eggs'], [400, 'ml', 'kombu-shiitake dashi', 'cooled'], [1, 'tsp', 'tamari or soy sauce'], [1, 'tsp', 'mirin'], [0.25, 'tsp', 'salt'], [8, '', 'shiitake mushrooms', 'sliced'], [2, '', 'scallions']],
    steps: [['Custard', 'Gently whisk the eggs with dashi, tamari, mirin and salt without foaming; strain.'], ['Steam', 'Pour over mushrooms in cups, cover and [[steam]] on gentle heat 12–15 minutes until just set.', 15, 'Low heat gives a smooth, bubble-free custard.']],
    tips: ['Ratio: 1 egg to 3 parts dashi.'], mistakes: ['Fierce steam: holes and a rubbery texture.'], vars: ['Add ginkgo nuts and edamame.'], serve: 'Hot or chilled.' });

  X(KR, { id: 'kimbap', name: 'Vegetable Kimbap', local: '김밥', emoji: '🍙', course: 'main', level: 2, prep: 35, cook: 15, serves: 4,
    taste: { savory: 4, umami: 3, sweet: 2 }, diet: ['vegetarian'], methods: ['saute', 'no-cook'], tags: ['meal-prep', 'kids', 'party'],
    desc: 'Seaweed rice rolls filled with sesame-seasoned spinach, carrot, pickled radish, egg and tofu.',
    story: 'Korea’s picnic food, packed for school trips. Unlike sushi, the rice is seasoned with sesame oil, not vinegar.',
    equip: ['Bamboo mat', 'Sharp knife'],
    ing: [[600, 'g', 'cooked short-grain rice'], [1, 'tbsp', 'toasted sesame oil'], [0.5, 'tsp', 'salt'], [5, 'sheet', 'nori'], [200, 'g', 'spinach', 'blanched'], [2, '', 'carrots', 'julienned, sautéed'], [150, 'g', 'yellow pickled radish (danmuji)', 'strips'], [3, '', 'eggs', 'thin omelette strips'], [200, 'g', 'firm tofu', 'fried strips'], [1, 'tbsp', 'toasted sesame seeds']],
    steps: [['Season', 'Season rice with sesame oil and salt; season spinach with a little sesame oil and salt.'], ['Roll', 'Spread rice on nori, line up the fillings and roll tightly with the mat.'], ['Slice', 'Brush with sesame oil, sprinkle seeds and slice.']],
    tips: ['Wet the knife between cuts.'], mistakes: ['Overfilling: rolls split.'], vars: ['Cheese or kimchi kimbap.'], serve: 'Picnics and lunchboxes.' });

  X(KR, { id: 'hotteok', name: 'Hotteok', local: '호떡', emoji: '🥞', course: 'dessert', level: 2, prep: 20, cook: 15, rest: 60, serves: 6,
    taste: { sweet: 5, rich: 3, aromatic: 3 }, diet: ['vegan'], methods: ['saute'], tags: ['street-food', 'winter'],
    desc: 'Chewy yeasted pancakes filled with brown sugar, cinnamon and nuts that melt into syrup.',
    story: 'A Korean winter street snack; careful, the molten sugar inside is very hot.',
    equip: ['Frying pan', 'Spatula or hotteok press'],
    ing: [[250, 'g', 'all-purpose flour'], [2, 'tbsp', 'glutinous rice flour'], [1, 'tsp', 'instant yeast'], [1, 'tbsp', 'sugar'], [180, 'ml', 'warm water'], [0.5, 'tsp', 'salt'], [80, 'g', 'brown sugar'], [1, 'tsp', 'ground cinnamon'], [3, 'tbsp', 'walnuts', 'chopped'], [3, 'tbsp', 'oil']],
    steps: [['Dough', 'Mix the dough ingredients into a sticky dough; [[proof]] 1 hour.', 60], ['Fill', 'With oiled hands, flatten a piece, add sugar-cinnamon-nut filling and seal.'], ['Fry', 'Fry seam-down, press flat after 1 minute, and cook until golden on both sides.', 10]],
    tips: ['Oil your hands: the dough is sticky.'], mistakes: ['Pressing too early: tears.'], vars: ['Savoury japchae hotteok.'], serve: 'Hot, in a paper cup.' });

  X(KR, { id: 'pajeon', name: 'Pajeon (Scallion Pancake)', local: '파전', emoji: '🥞', course: 'starter', level: 1, prep: 10, cook: 15, serves: 3,
    taste: { savory: 4, umami: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['rainy-day', 'quick'],
    desc: 'A crisp Korean pancake packed with long scallions, served with soy-vinegar dip.',
    story: 'Koreans eat pajeon with makgeolli on rainy days; the sizzle sounds like rain.',
    equip: ['Large frying pan'],
    ing: [[120, 'g', 'all-purpose flour'], [2, 'tbsp', 'rice flour'], [180, 'ml', 'ice water'], [1, '', 'egg'], [0.5, 'tsp', 'salt'], [10, '', 'scallions', 'halved lengthwise'], [1, '', 'red chili', 'sliced'], [3, 'tbsp', 'oil'], '#Dip', [2, 'tbsp', 'soy sauce'], [1, 'tbsp', 'rice vinegar'], [1, 'tsp', 'gochugaru']],
    steps: [['Batter', 'Whisk flours, ice water, egg and salt.'], ['Cook', 'Lay scallions in hot oil, pour batter over, cook until crisp, flip and press.', 10]],
    tips: ['Ice water = crisp batter.'], mistakes: ['Thick batter: chewy.'], vars: ['Kimchijeon with chopped kimchi.'], serve: 'Soy-vinegar dip.' });

  /* ======================= CAUCASUS & BALKANS ======================= */
  X(C('Georgia', '🇬🇪', 'Europe'), { id: 'badrijani-nigvzit', name: 'Badrijani Nigvzit', local: 'ბადრიჯანი ნიგვზით', emoji: '🍆', course: 'starter', level: 2, prep: 25, cook: 15, serves: 6,
    taste: { rich: 4, savory: 4, herby: 3, sour: 2 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['party', 'impress'],
    desc: 'Fried eggplant slices rolled around a garlicky walnut paste with fenugreek and coriander, topped with pomegranate.',
    story: 'On every Georgian supra (feast) table. Walnuts are the backbone of Georgian cooking.',
    equip: ['Frying pan', 'Food processor'],
    ing: [[2, '', 'eggplant', 'thin lengthwise slices'], [5, 'tbsp', 'oil'], [150, 'g', 'walnuts'], [2, 'clove', 'garlic'], [1, 'tsp', 'ground coriander'], [0.5, 'tsp', 'fenugreek seeds', 'ground'], [0.5, 'tsp', 'chili flakes'], [1, 'tbsp', 'red wine vinegar'], [1, 'handful', 'cilantro'], [0.75, 'tsp', 'salt'], [3, 'tbsp', 'pomegranate seeds']],
    steps: [['Fry', '[[shallow-fry|Shallow-fry]] the eggplant slices until soft and golden; drain.', 12], ['Paste', 'Grind walnuts, garlic, spices, vinegar, cilantro, salt and water to a thick paste.'], ['Roll', 'Spread paste on each slice and roll; top with pomegranate.']],
    tips: ['Utskho suneli (blue fenugreek) is the authentic spice.'], mistakes: ['Thick slices: hard to roll.'], vars: ['Pkhali: walnut paste with spinach or beets.'], serve: 'Cold, as a starter.' });

  X(C('Georgia', '🇬🇪', 'Europe'), { id: 'lobio', name: 'Lobio', local: 'ლობიო', emoji: '🫘', course: 'main', level: 1, prep: 10, cook: 30, serves: 4,
    taste: { savory: 4, herby: 4, spicy: 2, rich: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['comfort', 'budget', 'winter'],
    desc: 'Georgian red bean stew with onion, garlic, walnuts, coriander and herbs, served in a clay pot.',
    story: 'Lobio is Georgia’s comfort food, traditionally eaten with mchadi (cornbread) and pickles.',
    equip: ['Clay pot or heavy pot'],
    ing: [[2, 'can', 'red kidney beans (rajma)', 'with liquid'], [2, 'tbsp', 'sunflower oil'], [1, '', 'onion', 'chopped'], [3, 'clove', 'garlic'], [60, 'g', 'walnuts', 'crushed'], [1, 'tsp', 'ground coriander'], [0.5, 'tsp', 'fenugreek seeds', 'ground'], [0.5, 'tsp', 'chili flakes'], [1, 'tbsp', 'red wine vinegar'], [1, 'handful', 'cilantro and parsley'], [0.75, 'tsp', 'salt']],
    steps: [['Base', 'Soften the onion in oil, add garlic and spices.', 6], ['Simmer', 'Add beans with liquid, walnuts and salt; [[simmer]] 20 minutes, mashing some beans.', 20], ['Finish', 'Add vinegar and herbs.']],
    tips: ['Mash half the beans for a creamy texture.'], mistakes: ['Too much vinegar.'], vars: ['Cold lobio salad with pomegranate.'], serve: 'Cornbread and pickles.' });

  X(C('Serbia', '🇷🇸', 'Europe'), { id: 'ajvar', name: 'Ajvar', local: 'Ајвар', emoji: '🫑', course: 'sauce', level: 2, prep: 20, cook: 60, serves: 10,
    taste: { sweet: 3, smoky: 4, savory: 3 }, diet: ['vegan', 'gluten-free'], methods: ['roast', 'simmer'], tags: ['make-ahead'],
    desc: 'A smoky Balkan relish of roasted red peppers and eggplant, slowly cooked with garlic and oil.',
    story: 'Every autumn, Balkan families roast peppers in big batches to make ajvar for the winter.',
    equip: ['Grill or oven', 'Heavy pot', 'Blender'],
    ing: [[6, '', 'red bell peppers'], [1, '', 'eggplant'], [3, 'clove', 'garlic'], [80, 'ml', 'sunflower oil'], [1, 'tbsp', 'vinegar'], [1, 'tsp', 'sugar'], [1, 'tsp', 'salt']],
    steps: [['Roast', '[[char|Char]] the peppers and eggplant until blackened; steam in a covered bowl, then peel.', 30], ['Grind', 'Chop or blend coarsely with garlic.'], ['Cook', 'Cook slowly with oil, vinegar, sugar and salt, stirring, until thick and glossy.', 30]],
    tips: ['Slow cooking concentrates the flavour.'], mistakes: ['Not stirring: it catches.'], vars: ['Hot ajvar with chili.'], serve: 'Bread, cheese and grilled vegetables.', store: 'Sterile jars, months.' });

  X(C('Bulgaria', '🇧🇬', 'Europe'), { id: 'shopska-salad', name: 'Shopska Salad', local: 'Шопска салата', emoji: '🥗', course: 'salad', level: 1, prep: 15, cook: 0, serves: 4,
    taste: { sour: 2, savory: 4, herby: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'quick', 'healthy'],
    desc: 'Tomato, cucumber, roasted pepper and onion under a snowy mound of grated white brine cheese.',
    story: 'Bulgaria’s national salad: its colours match the flag, with white cheese, green cucumber and red tomato.',
    equip: ['Bowl', 'Grater'],
    ing: [[4, '', 'tomatoes', 'chunks'], [2, '', 'cucumbers', 'chunks'], [2, '', 'roasted red peppers', 'strips'], [1, '', 'red onion', 'sliced'], [2, 'tbsp', 'parsley'], [3, 'tbsp', 'sunflower oil'], [1, 'tbsp', 'red wine vinegar'], [0.5, 'tsp', 'salt'], [150, 'g', 'feta', 'finely grated']],
    steps: [['Toss', 'Toss vegetables with oil, vinegar, salt and parsley.'], ['Top', 'Grate the cheese generously on top.']],
    tips: ['Grate the cheese, don’t crumble it.'], mistakes: ['Under-ripe tomatoes.'], vars: ['Greek salad uses olives and oregano.'], serve: 'With rakia and bread.' });

  X(GR, { id: 'gemista', name: 'Gemista', local: 'Γεμιστά', emoji: '🍅', course: 'main', level: 2, prep: 30, cook: 70, serves: 4,
    taste: { savory: 4, herby: 4, sweet: 2 }, diet: ['vegan', 'gluten-free'], methods: ['bake'], tags: ['summer', 'meal-prep'],
    desc: 'Tomatoes and peppers stuffed with herby rice, baked with potato wedges in olive oil.',
    story: 'The Greek summer dish when tomatoes are best; even better the next day at room temperature.',
    equip: ['Baking dish'],
    ing: [[4, '', 'large tomatoes'], [4, '', 'bell peppers'], [200, 'g', 'short-grain rice'], [1, '', 'onion', 'grated'], [1, 'handful', 'mint and parsley'], [1, 'bunch', 'dill'], [100, 'ml', 'extra-virgin olive oil'], [1, 'tsp', 'salt'], [3, '', 'potatoes', 'wedges']],
    steps: [['Hollow', 'Hollow tomatoes and peppers; blend the tomato flesh.'], ['Filling', 'Mix rice, onion, herbs, half the oil, tomato pulp and salt.'], ['Bake', 'Fill three-quarters full, replace lids, add potato wedges and the rest of the oil and bake at {{190C}} for 70 minutes.', 70]],
    tips: ['Fill loosely: the rice swells.'], mistakes: ['Overfilling: they burst.'], vars: ['Add feta (not vegan).'], serve: 'Bread and feta.' });

  X(GR, { id: 'fasolada', name: 'Fasolada', local: 'Φασολάδα', emoji: '🥣', course: 'soup', level: 1, prep: 15, cook: 60, rest: 480, serves: 6,
    taste: { savory: 4, herby: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['comfort', 'winter', 'budget'],
    desc: 'Greece’s white bean soup with carrot, celery and tomato, finished with plenty of olive oil.',
    story: 'Often called Greece’s national dish; a fasting-day and everyday soup.',
    equip: ['Large pot'],
    ing: [[300, 'g', 'dried white beans (cannellini)', 'soaked overnight'], [1, '', 'onion', 'chopped'], [2, '', 'carrots', 'sliced'], [2, 'stalk', 'celery'], [2, 'tbsp', 'tomato paste'], [1.5, 'l', 'water'], [100, 'ml', 'extra-virgin olive oil'], [1, 'tsp', 'salt'], [1, '', 'lemon']],
    steps: [['Simmer', 'Simmer the beans with vegetables and water 45 minutes.', 45], ['Finish', 'Add tomato paste, oil and salt and simmer 15 minutes until creamy.', 15]],
    tips: ['Don’t skimp on olive oil.'], mistakes: ['Salting too early: tough beans.'], vars: ['Add a chili.'], serve: 'Bread, olives and feta.' });

  /* ======================= CENTRAL & NORTHERN EUROPE ======================= */
  X(DE, { id: 'kasespatzle', name: 'Käsespätzle', local: 'Käsespätzle', emoji: '🧀', course: 'main', level: 2, prep: 15, cook: 25, serves: 4,
    taste: { rich: 5, savory: 4 }, diet: ['vegetarian'], methods: ['simmer', 'bake'], tags: ['comfort', 'winter'],
    desc: 'Soft egg noodles layered with melted mountain cheese and crisp fried onions. Southern Germany’s mac and cheese.',
    story: 'From Swabia and the Allgäu; spätzle are pushed through a sieve or scraped off a board into boiling water.',
    equip: ['Spätzle press or colander', 'Pot', 'Pan'],
    ing: [[300, 'g', 'all-purpose flour'], [3, '', 'eggs'], [120, 'ml', 'water'], [0.5, 'tsp', 'salt'], [200, 'g', 'gruyère or emmental', 'grated'], [2, '', 'onions', 'sliced'], [40, 'g', 'butter'], [1, 'pinch', 'nutmeg']],
    steps: [['Batter', 'Beat flour, eggs, water, salt and nutmeg into a thick batter until bubbly.'], ['Cook', 'Press into simmering salted water; lift out when they float.', 8], ['Layer', 'Layer hot spätzle with cheese; top with onions fried golden in butter.', 12]],
    tips: ['Beat the batter until it blisters.'], mistakes: ['Thin batter: soupy spätzle.'], vars: ['Bake briefly for a golden top.'], serve: 'Green salad.' });

  X(DE, { id: 'brezel', name: 'Soft Pretzels (Brezeln)', local: 'Brezel', emoji: '🥨', course: 'bread', level: 2, prep: 30, cook: 15, rest: 75, serves: 8,
    taste: { savory: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['party', 'kids'],
    desc: 'Chewy, deep-brown Bavarian pretzels with coarse salt, dipped in a baking-soda bath before baking.',
    story: 'The Bavarian beer-garden bread; the alkaline dip gives the shiny brown crust.',
    equip: ['Baking tray', 'Wide pot'],
    ing: [[500, 'g', 'all-purpose flour'], [7, 'g', 'instant yeast'], [300, 'ml', 'warm water'], [30, 'g', 'butter', 'soft'], [10, 'g', 'salt'], [4, 'tbsp', 'baking soda', 'for the bath'], [2, 'l', 'water', 'for the bath'], [1, 'tbsp', 'coarse salt']],
    steps: [['Dough', '[[knead|Knead]] flour, yeast, water, butter and salt; [[proof]] 1 hour.', 60], ['Shape', 'Roll ropes thin at the ends and twist into pretzels; rest 15 minutes.', 15], ['Dip and bake', 'Dip in simmering soda water 30 seconds, sprinkle coarse salt and bake at {{220C}} for 14 minutes.', 15]],
    tips: ['Dry the pretzels after shaping for a better crust.'], mistakes: ['Long dip: metallic taste.'], vars: ['Pretzel rolls (Laugenbrötchen).'], serve: 'Mustard and butter.' });

  X(DE, { id: 'kartoffelsalat', name: 'Swabian Potato Salad', local: 'Schwäbischer Kartoffelsalat', emoji: '🥔', course: 'salad', level: 1, prep: 15, cook: 25, serves: 4,
    taste: { sour: 3, savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer', 'no-cook'], tags: ['party', 'make-ahead', 'summer'],
    desc: 'Warm waxy potatoes soaked in hot vegetable broth, vinegar, mustard and onion. No mayonnaise.',
    story: 'Southern Germans make their potato salad with broth and vinegar; the north prefers mayonnaise.',
    equip: ['Pot', 'Bowl'],
    ing: [[1, 'kg', 'waxy potatoes'], [200, 'ml', 'vegetable stock', 'hot'], [1, '', 'onion', 'finely chopped'], [3, 'tbsp', 'white wine vinegar'], [1, 'tbsp', 'mustard'], [3, 'tbsp', 'sunflower oil'], [1, 'tsp', 'sugar'], [1, 'tsp', 'salt'], [2, 'tbsp', 'chives']],
    steps: [['Boil', '[[boil|Boil]] potatoes in skins until tender; peel and slice warm.', 25], ['Dress', 'Pour over hot stock with onion, vinegar, mustard, sugar and salt; rest 20 minutes.', 20], ['Finish', 'Stir in oil and chives.']],
    tips: ['Dress the potatoes warm so they absorb.'], mistakes: ['Floury potatoes break up.'], vars: ['Add cucumber.'], serve: 'With pretzels or veggie schnitzel.' });

  X(C('Netherlands', '🇳🇱', 'Europe'), { id: 'stamppot', name: 'Boerenkool Stamppot', local: 'Boerenkoolstamppot', emoji: '🥬', course: 'main', level: 1, prep: 15, cook: 25, serves: 4,
    taste: { savory: 4, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'winter', 'budget'],
    desc: 'Dutch potato mash with curly kale, butter and milk, with a well of gravy in the middle.',
    story: 'The Dutch winter dish, eaten after the first frost when kale tastes sweetest. Usually with smoked sausage; here with vegetarian sausage.',
    equip: ['Pot', 'Masher'],
    ing: [[1, 'kg', 'floury potatoes', 'peeled'], [400, 'g', 'curly kale', 'chopped'], [150, 'ml', 'milk'], [40, 'g', 'butter'], [1, 'tsp', 'salt'], [0.25, 'tsp', 'black pepper'], [4, '', 'vegetarian sausages', 'optional']],
    steps: [['Cook', 'Boil potatoes with the kale on top until tender.', 20], ['Mash', 'Mash with warm milk, butter, salt and pepper.'], ['Serve', 'Make a well, fill with gravy and serve with sausages.']],
    tips: ['Use firm kale; frost-touched is sweetest.'], mistakes: ['Watery mash: drain well.'], vars: ['Hutspot with carrots and onions.'], serve: 'Gravy and mustard.' });

  X(C('Belgium', '🇧🇪', 'Europe'), { id: 'liege-waffles', name: 'Liège Waffles', local: 'Gaufres de Liège', emoji: '🧇', course: 'dessert', level: 2, prep: 20, cook: 20, rest: 90, serves: 8,
    taste: { sweet: 5, rich: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['brunch', 'street-food'],
    desc: 'Dense, chewy yeasted waffles studded with pearl sugar that caramelizes into crunchy pockets.',
    story: 'Sold warm on every Belgian street corner; the pearl sugar is what makes them special.',
    equip: ['Waffle iron'],
    ing: [[350, 'g', 'all-purpose flour'], [7, 'g', 'instant yeast'], [120, 'ml', 'warm milk'], [2, '', 'eggs'], [150, 'g', 'butter', 'soft'], [30, 'g', 'sugar'], [1, 'tsp', 'vanilla extract'], [0.5, 'tsp', 'salt'], [150, 'g', 'pearl sugar']],
    steps: [['Dough', 'Mix flour, yeast, milk, eggs, sugar, vanilla and salt; work in the butter. [[proof|Proof]] 90 minutes.', 90], ['Sugar', 'Knead in the pearl sugar and divide into balls.'], ['Bake', 'Cook in a hot waffle iron until deep golden and caramelized.', 20]],
    tips: ['Clean caramel off the iron between batches.'], mistakes: ['Granulated sugar melts away: use pearl sugar.'], vars: ['Brussels waffles: light and crisp.'], serve: 'Warm, plain.' });

  X(C('Portugal', '🇵🇹', 'Europe'), { id: 'pasteis-de-nata', name: 'Pastéis de Nata', local: 'Pastéis de nata', emoji: '🥧', course: 'dessert', level: 3, prep: 30, cook: 20, serves: 12,
    taste: { sweet: 4, rich: 5 }, diet: ['vegetarian'], methods: ['bake'], tags: ['impress', 'party'],
    desc: 'Crisp, flaky custard tarts with blistered, caramelized tops, dusted with cinnamon.',
    story: 'Created by monks at Lisbon’s Jerónimos Monastery, who used egg whites for starching clothes and yolks for pastries.',
    equip: ['Muffin tin', 'Very hot oven'],
    ing: [[250, 'g', 'puff pastry'], [6, '', 'egg yolks'], [150, 'g', 'sugar'], [100, 'ml', 'water'], [300, 'ml', 'whole milk'], [30, 'g', 'all-purpose flour'], [1, 'piece', 'cinnamon stick'], [1, 'piece', 'lemon peel'], [1, 'tsp', 'ground cinnamon', 'to serve']],
    steps: [['Syrup', 'Boil sugar, water, cinnamon and lemon peel 3 minutes.', 3], ['Custard', 'Cook milk with flour until thick; whisk in the syrup, then the yolks; strain.', 6], ['Bake', 'Line the tin with thin pastry discs, fill and bake at the hottest oven setting ({{270C}}) 12–15 minutes until blistered.', 15]],
    tips: ['The hottest oven possible blisters the tops.'], mistakes: ['Thick pastry: soggy base.'], vars: ['Hong Kong egg tarts are their cousins.'], serve: 'Warm with cinnamon and coffee.' });

  X(C('Portugal', '🇵🇹', 'Europe'), { id: 'caldo-verde', name: 'Caldo Verde (Vegetarian)', local: 'Caldo verde', emoji: '🥣', course: 'soup', level: 1, prep: 15, cook: 30, serves: 4,
    taste: { savory: 4, smoky: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'winter', 'budget'],
    desc: 'Silky potato and garlic soup with ribbons of kale and smoked paprika oil.',
    story: 'Portugal’s favourite soup, served at festivals and late-night parties; usually with chouriço, here with smoky paprika.',
    equip: ['Pot', 'Blender'],
    ing: [[600, 'g', 'floury potatoes', 'peeled'], [1, '', 'onion'], [3, 'clove', 'garlic'], [1.2, 'l', 'water'], [1, 'tsp', 'salt'], [200, 'g', 'kale', 'very finely shredded'], [4, 'tbsp', 'olive oil'], [1, 'tsp', 'smoked paprika']],
    steps: [['Base', 'Simmer potatoes, onion and garlic in water with salt until soft; blend smooth.', 20], ['Kale', 'Add the kale ribbons and simmer 5 minutes.', 5], ['Oil', 'Drizzle with olive oil warmed with smoked paprika.']],
    tips: ['Shred the kale as thin as possible.'], mistakes: ['Overcooking kale: loses colour.'], vars: ['Add vegan chorizo.'], serve: 'Cornbread (broa).' });

  X(C('Sweden', '🇸🇪', 'Europe'), { id: 'kanelbullar', name: 'Kanelbullar', local: 'Kanelbullar', emoji: '🥐', course: 'dessert', level: 2, prep: 30, cook: 12, rest: 90, serves: 16,
    taste: { sweet: 4, aromatic: 5, rich: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['make-ahead', 'party'],
    desc: 'Swedish cinnamon buns with cardamom in the dough, twisted into knots and topped with pearl sugar.',
    story: 'Essential for fika, the Swedish coffee break. 4 October is National Cinnamon Bun Day in Sweden.',
    equip: ['Baking tray', 'Rolling pin'],
    ing: [[450, 'g', 'all-purpose flour'], [7, 'g', 'instant yeast'], [250, 'ml', 'warm milk'], [70, 'g', 'butter', 'soft'], [60, 'g', 'sugar'], [1, 'tsp', 'cardamom powder'], [0.5, 'tsp', 'salt'], '#Filling', [80, 'g', 'butter', 'soft'], [70, 'g', 'brown sugar'], [1, 'tbsp', 'ground cinnamon'], [1, '', 'egg', 'beaten'], [2, 'tbsp', 'pearl sugar']],
    steps: [['Dough', '[[knead|Knead]] the dough ingredients until smooth; [[proof]] 1 hour.', 60], ['Fill and shape', 'Roll out, spread filling, fold, cut strips and twist into knots; rise 30 minutes.', 30], ['Bake', 'Brush with egg, sprinkle pearl sugar and bake at {{220C}} for 10–12 minutes.', 12]],
    tips: ['Freshly ground cardamom makes all the difference.'], mistakes: ['Overbaking: dry buns.'], vars: ['Kardemummabullar: cardamom filling.'], serve: 'With coffee.' });

  /* ======================= AFRICA ======================= */
  X(NG, { id: 'moi-moi', name: 'Moi Moi', local: 'Mọ́inmọ́in', emoji: '🫘', course: 'main', level: 2, prep: 30, cook: 50, rest: 120, serves: 6,
    taste: { savory: 4, spicy: 3, umami: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['steam'], tags: ['festive', 'party'],
    desc: 'Steamed pudding of peeled black-eyed peas blended with red pepper, onion and scotch bonnet.',
    story: 'A Nigerian party staple, steamed in leaves or tins and served with jollof rice.',
    equip: ['Blender', 'Ramekins or leaves', 'Steamer'],
    ing: [[300, 'g', 'black-eyed peas', 'soaked, skins rubbed off'], [1, '', 'red bell pepper'], [1, '', 'onion'], [1, '', 'scotch bonnet'], [80, 'ml', 'palm or neutral oil'], [1, '', 'vegetable stock cube'], [1, 'tsp', 'salt'], [250, 'ml', 'warm water']],
    steps: [['Blend', 'Blend the peeled peas with pepper, onion, chili and water until very smooth.'], ['Season', 'Whisk in oil, crumbled stock cube and salt.'], ['Steam', 'Pour into greased ramekins, cover and [[steam]] 45–50 minutes until set.', 50]],
    tips: ['Peeling the beans is essential.'], mistakes: ['Grainy batter: blend longer.'], vars: ['Add boiled egg inside (not vegan).'], serve: 'Jollof rice or pap.' });

  X(NG, { id: 'puff-puff', name: 'Puff-Puff', local: 'Puff-puff', emoji: '🟤', course: 'snack', level: 1, prep: 10, cook: 20, rest: 60, serves: 8,
    taste: { sweet: 3, rich: 3 }, diet: ['vegan'], methods: ['deep-fry'], tags: ['street-food', 'party', 'kids'],
    desc: 'Soft, fluffy fried dough balls with a hint of nutmeg, dusted with sugar. West Africa’s favourite snack.',
    story: 'Sold by street vendors across Nigeria, Ghana (bofrot) and Cameroon (beignets).',
    equip: ['Bowl', 'Kadai'],
    ing: [[300, 'g', 'all-purpose flour'], [7, 'g', 'instant yeast'], [80, 'g', 'sugar'], [0.25, 'tsp', 'nutmeg'], [0.5, 'tsp', 'salt'], [280, 'ml', 'warm water'], [1, 'l', 'oil', 'for frying']],
    steps: [['Batter', 'Mix everything into a thick, sticky batter; [[proof]] 1 hour until doubled.', 60], ['Fry', 'Scoop balls with your hand or a spoon into hot oil; fry until golden all over.', 15]],
    tips: ['Squeeze batter through your fist for round balls.'], mistakes: ['Hot oil: raw middle.'], vars: ['Ghanaian bofrot with more sugar.'], serve: 'Dusted with sugar.' });

  X(GH, { id: 'red-red', name: 'Red-Red', local: 'Red-red', emoji: '🫘', course: 'main', level: 1, prep: 15, cook: 30, serves: 4,
    taste: { savory: 4, spicy: 3, sweet: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer', 'deep-fry'], tags: ['comfort', 'budget'],
    desc: 'Black-eyed peas stewed in red palm oil with tomato and chili, served with fried ripe plantains.',
    story: 'Named for the red palm oil and the red-orange fried plantains; a Ghanaian favourite.',
    equip: ['Pot', 'Frying pan'],
    ing: [[2, 'can', 'black-eyed peas', 'drained'], [4, 'tbsp', 'red palm oil or oil'], [1, '', 'onion', 'chopped'], [1, 'tbsp', 'ginger'], [400, 'g', 'canned chopped tomatoes'], [1, '', 'scotch bonnet'], [1, 'tsp', 'salt'], [3, '', 'ripe plantains', 'sliced'], [4, 'tbsp', 'oil', 'for frying']],
    steps: [['Stew', 'Fry onion and ginger in palm oil, add tomatoes and chili and [[simmer]] 10 minutes; add peas and salt and simmer 10 more.', 20], ['Plantains', '[[shallow-fry|Fry]] the plantain slices until caramelized.', 8]],
    tips: ['Very ripe (black-skinned) plantains are sweetest.'], mistakes: ['Underripe plantains: starchy.'], vars: ['Kelewele: spiced fried plantains.'], serve: 'With gari sprinkled on top.' });

  X(GH, { id: 'kelewele', name: 'Kelewele', local: 'Kelewele', emoji: '🍌', course: 'snack', level: 1, prep: 10, cook: 10, rest: 15, serves: 4,
    taste: { sweet: 3, spicy: 3, aromatic: 4 }, diet: ['vegan', 'gluten-free'], methods: ['deep-fry'], tags: ['street-food', 'quick'],
    desc: 'Ripe plantain cubes tossed in ginger, chili and spices, then fried until caramelized.',
    story: 'A Ghanaian evening street snack, often eaten with roasted peanuts.',
    equip: ['Bowl', 'Kadai'],
    ing: [[3, '', 'ripe plantains', 'cubed'], [1, 'tbsp', 'ginger', 'grated'], [1, '', 'onion', 'grated'], [0.5, 'tsp', 'cayenne'], [0.25, 'tsp', 'nutmeg'], [0.5, 'tsp', 'salt'], [500, 'ml', 'oil', 'for frying']],
    steps: [['Marinate', 'Toss plantain with ginger, onion and spices; rest 15 minutes.', 15], ['Fry', '[[deep-fry|Fry]] in batches until dark golden.', 8]],
    tips: ['Ripe but firm plantains hold shape.'], mistakes: ['Crowding: soggy kelewele.'], vars: ['Air-fried version.'], serve: 'With roasted peanuts.' });

  X(KE, { id: 'sukuma-wiki-ugali', name: 'Sukuma Wiki & Ugali', local: 'Sukuma wiki na ugali', emoji: '🥬', course: 'main', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { savory: 4, herby: 2 }, diet: ['vegan', 'gluten-free'], methods: ['saute', 'simmer'], tags: ['budget', 'healthy', 'comfort'],
    desc: 'Collard greens sautéed with onion and tomato, served with ugali, a stiff white-maize porridge.',
    story: '“Sukuma wiki” means “push the week” in Swahili: cheap greens stretch the household budget to the end of the week.',
    equip: ['Pan', 'Heavy pot', 'Wooden spoon'],
    ing: ['#Sukuma wiki', [400, 'g', 'collard greens or kale', 'thinly sliced'], [2, 'tbsp', 'oil'], [1, '', 'onion', 'chopped'], [2, '', 'tomatoes', 'chopped'], [0.5, 'tsp', 'salt'], '#Ugali', [250, 'g', 'white cornmeal (maize flour)'], [700, 'ml', 'water'], [0.5, 'tsp', 'salt']],
    steps: [['Ugali', 'Bring water to a boil, add cornmeal gradually while stirring hard; cook and fold 8 minutes until stiff and pulling away.', 10], ['Greens', 'Fry onion and tomato, add greens and salt and cook 6 minutes until tender.', 10]],
    tips: ['Ugali is eaten by hand, rolled into a ball and dipped.'], mistakes: ['Lumpy ugali: add flour slowly.'], vars: ['Add beans or a vegetable stew.'], serve: 'Together on one plate.' });

  X(KE, { id: 'mandazi', name: 'Mandazi', local: 'Mandazi', emoji: '🔺', course: 'snack', level: 1, prep: 20, cook: 20, rest: 30, serves: 8,
    taste: { sweet: 3, aromatic: 4, rich: 3 }, diet: ['vegan'], methods: ['deep-fry'], tags: ['brunch', 'street-food'],
    desc: 'East African triangle doughnuts with coconut milk and cardamom.',
    story: 'Eaten with chai for breakfast along the Swahili coast of Kenya and Tanzania.',
    equip: ['Rolling pin', 'Kadai'],
    ing: [[300, 'g', 'all-purpose flour'], [60, 'g', 'sugar'], [1.5, 'tsp', 'baking powder'], [0.5, 'tsp', 'cardamom powder'], [0.25, 'tsp', 'salt'], [180, 'ml', 'coconut milk'], [1, 'tbsp', 'oil'], [1, 'l', 'oil', 'for frying']],
    steps: [['Dough', 'Mix into a soft dough; rest 30 minutes.', 30], ['Shape', 'Roll 1 cm thick, cut into triangles.'], ['Fry', '[[deep-fry|Fry]] until puffed and golden.', 15]],
    tips: ['Medium heat so they cook through.'], mistakes: ['Thin dough: they don’t puff.'], vars: ['Yeasted mandazi.'], serve: 'With chai.' });

  X(ZA, { id: 'chakalaka', name: 'Chakalaka', local: 'Chakalaka', emoji: '🌶️', course: 'side', level: 1, prep: 10, cook: 20, serves: 6,
    taste: { spicy: 4, savory: 4, sweet: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['party', 'budget'],
    desc: 'A spicy South African relish of peppers, carrots, onion, curry powder and baked beans.',
    story: 'Born in Johannesburg’s townships, chakalaka is a must at every braai (barbecue).',
    equip: ['Pan'],
    ing: [[2, 'tbsp', 'oil'], [1, '', 'onion', 'chopped'], [2, '', 'bell peppers', 'diced'], [2, '', 'carrots', 'grated'], [2, 'clove', 'garlic'], [1, '', 'green chili'], [1, 'tbsp', 'curry powder'], [2, '', 'tomatoes', 'chopped'], [1, 'can', 'baked beans'], [0.5, 'tsp', 'salt']],
    steps: [['Cook', 'Fry onion, peppers, carrot, garlic and chili 8 minutes; add curry powder and tomatoes.', 10], ['Beans', 'Add beans and salt and [[simmer]] 8 minutes.', 8]],
    tips: ['Serve hot or cold.'], mistakes: ['Mushy vegetables.'], vars: ['Add cabbage.'], serve: 'Pap (maize porridge) and braai.' });

  X(ZA, { id: 'malva-pudding', name: 'Malva Pudding', local: 'Malvapoeding', emoji: '🍮', course: 'dessert', level: 1, prep: 15, cook: 40, serves: 8,
    taste: { sweet: 5, rich: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['comfort', 'party', 'winter'],
    desc: 'A spongy, caramelized apricot-jam pudding soaked in a hot buttery cream sauce.',
    story: 'South Africa’s favourite warm pudding, of Dutch Cape origin.',
    equip: ['Baking dish', 'Pot'],
    ing: [[200, 'g', 'sugar'], [1, '', 'egg'], [1, 'tbsp', 'apricot jam'], [150, 'g', 'all-purpose flour'], [1, 'tsp', 'baking soda'], [1, 'tbsp', 'butter', 'melted'], [1, 'tsp', 'vinegar'], [200, 'ml', 'milk'], '#Sauce', [150, 'ml', 'cream'], [100, 'g', 'butter'], [100, 'g', 'sugar'], [80, 'ml', 'hot water']],
    steps: [['Batter', 'Beat sugar and egg until pale, add jam, then flour, soda, butter, vinegar and milk.'], ['Bake', 'Bake at {{180C}} for 40 minutes until deep brown.', 40], ['Soak', 'Melt the sauce ingredients and pour over the hot pudding.']],
    tips: ['Pour sauce while the pudding is hot.'], mistakes: ['Pale pudding: bake longer.'], vars: ['Add ginger.'], serve: 'With custard or ice cream.' });

  X(MA, { id: 'zaalouk', name: 'Zaalouk', local: 'زعلوك', emoji: '🍆', course: 'starter', level: 1, prep: 10, cook: 30, serves: 4,
    taste: { smoky: 3, savory: 4, sour: 2, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['make-ahead', 'party'],
    desc: 'A warm Moroccan salad of cooked eggplant and tomato with garlic, cumin, paprika and cilantro.',
    story: 'Served as one of many small cooked salads at the start of a Moroccan meal.',
    equip: ['Pan'],
    ing: [[2, '', 'eggplant', 'cubed'], [4, '', 'tomatoes', 'chopped'], [3, 'clove', 'garlic'], [1, 'tsp', 'ground cumin'], [1, 'tsp', 'paprika'], [4, 'tbsp', 'olive oil'], [1, 'handful', 'cilantro and parsley'], [1, 'tbsp', 'lemon juice'], [0.75, 'tsp', 'salt']],
    steps: [['Cook', 'Cook everything except herbs and lemon, covered, 20 minutes.', 20], ['Mash', 'Uncover, mash and cook until thick; add herbs and lemon.', 10]],
    tips: ['Char the eggplant first for smokiness.'], mistakes: ['Watery: cook down.'], vars: ['Taktouka with peppers.'], serve: 'Bread, warm or cold.' });

  X(MA, { id: 'msemen', name: 'Msemen', local: 'مسمن', emoji: '🫓', course: 'breakfast', level: 2, prep: 30, cook: 20, rest: 20, serves: 8,
    taste: { rich: 4, savory: 3 }, diet: ['vegan'], methods: ['saute'], tags: ['brunch'],
    desc: 'Square, flaky Moroccan pancakes made by folding oiled, semolina-dusted dough.',
    story: 'A Moroccan breakfast and tea-time staple, drizzled with honey and butter or stuffed with onion and spices.',
    equip: ['Oiled work surface', 'Griddle'],
    ing: [[300, 'g', 'all-purpose flour'], [100, 'g', 'fine semolina'], [1, 'tsp', 'salt'], [1, 'tsp', 'sugar'], [220, 'ml', 'warm water'], [6, 'tbsp', 'oil'], [40, 'g', 'fine semolina', 'for dusting']],
    steps: [['Dough', '[[knead|Knead]] a very soft dough; divide into balls and rest 20 minutes in oil.', 20], ['Fold', 'Spread each ball paper-thin, sprinkle semolina, fold into a square in thirds.'], ['Cook', 'Flatten and cook on a hot griddle until golden and flaky.', 15]],
    tips: ['Keep hands and surface well oiled.'], mistakes: ['Tears: dough too stiff.'], vars: ['Stuffed msemen with onion and spices.'], serve: 'Honey and mint tea.' });

  /* ======================= CARIBBEAN & AMERICAS ======================= */
  X(C('Trinidad and Tobago', '🇹🇹', 'Caribbean'), { id: 'doubles', name: 'Doubles', local: 'Doubles', emoji: '🫓', course: 'breakfast', level: 2, prep: 25, cook: 30, rest: 90, serves: 6,
    taste: { spicy: 4, sour: 3, savory: 4, sweet: 2 }, diet: ['vegan', 'high-protein'], methods: ['deep-fry', 'simmer'], tags: ['street-food', 'brunch'],
    desc: 'Two soft fried turmeric breads (bara) filled with curried chickpeas, tamarind and pepper sauce.',
    story: 'Trinidad’s favourite street breakfast, born from its Indian heritage; “doubles” because you need two baras.',
    equip: ['Kadai', 'Pot'],
    ing: ['#Bara', [300, 'g', 'all-purpose flour'], [1, 'tsp', 'instant yeast'], [1, 'tsp', 'ground turmeric'], [1, 'tsp', 'ground cumin'], [1, 'tsp', 'sugar'], [0.5, 'tsp', 'salt'], [200, 'ml', 'warm water'], [1, 'l', 'oil', 'for frying'],
      '#Channa', [2, 'can', 'chickpeas', 'drained'], [2, 'tbsp', 'oil'], [1, '', 'onion'], [3, 'clove', 'garlic'], [1.5, 'tbsp', 'curry powder'], [1, 'tsp', 'ground cumin'], [400, 'ml', 'water'], [1, 'tsp', 'salt'], [4, 'tbsp', 'tamarind chutney'], [2, 'tbsp', 'chili sauce']],
    steps: [['Bara', 'Mix and [[knead]] the bara dough; [[proof]] 90 minutes.', 90], ['Channa', 'Fry onion, garlic and curry powder; add chickpeas, cumin, water and salt and [[simmer]] 20 minutes until soft and saucy.', 25], ['Fry', 'Flatten small dough pieces with oiled hands and fry until puffed, 30 seconds per side.', 10], ['Assemble', 'Two bara, channa, tamarind and pepper sauce.']],
    tips: ['Keep bara soft, not crisp.'], mistakes: ['Thick bara: bready.'], vars: ['Add cucumber chutney and kuchela.'], serve: 'Wrapped in paper, eaten fast.' });

  X(C('United States', '🇺🇸', 'North America'), { id: 'cornbread', name: 'Southern Skillet Cornbread', local: 'Cornbread', emoji: '🌽', course: 'bread', level: 1, prep: 10, cook: 25, serves: 8,
    taste: { savory: 3, sweet: 2, rich: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['comfort', 'party'],
    desc: 'Crisp-edged cornbread baked in a sizzling cast-iron skillet with buttermilk and butter.',
    story: 'A Southern staple served with chili, beans and greens; Southerners argue over whether it should contain sugar.',
    equip: ['Cast-iron skillet'],
    ing: [[200, 'g', 'cornmeal'], [100, 'g', 'all-purpose flour'], [1, 'tbsp', 'sugar'], [2, 'tsp', 'baking powder'], [0.5, 'tsp', 'baking soda'], [0.75, 'tsp', 'salt'], [2, '', 'eggs'], [350, 'ml', 'buttermilk'], [60, 'g', 'butter']],
    steps: [['Heat', 'Heat the skillet with butter in a {{220C}} oven.', 10], ['Batter', 'Mix dry and wet ingredients separately, then combine (lumps are fine), adding most of the melted butter.'], ['Bake', 'Pour into the sizzling skillet and bake 20–22 minutes.', 22]],
    tips: ['The hot skillet makes the crispy crust.'], mistakes: ['Overmixing: tough cornbread.'], vars: ['Jalapeño-cheddar cornbread.'], serve: 'With chili or honey butter.' });

  X(C('United States', '🇺🇸', 'North America'), { id: 'pumpkin-pie', name: 'Pumpkin Pie', local: 'Pumpkin pie', emoji: '🥧', course: 'dessert', level: 2, prep: 20, cook: 55, rest: 120, serves: 8,
    taste: { sweet: 4, aromatic: 5, rich: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['festive', 'make-ahead'],
    desc: 'Spiced pumpkin custard in a flaky crust, the centrepiece of an American Thanksgiving.',
    story: 'Pumpkin pie has been part of Thanksgiving since the early 1800s.',
    equip: ['Pie dish', 'Oven'],
    ing: [[250, 'g', 'shortcrust pastry'], [425, 'g', 'pumpkin purée'], [200, 'g', 'sweetened condensed milk'], [2, '', 'eggs'], [1, 'tsp', 'ground cinnamon'], [0.5, 'tsp', 'ground ginger'], [0.25, 'tsp', 'nutmeg'], [0.25, 'tsp', 'ground cloves'], [0.25, 'tsp', 'salt']],
    steps: [['Crust', 'Line the dish with pastry and blind-bake 10 minutes at {{200C}}.', 10], ['Filling', '[[whisk|Whisk]] pumpkin, condensed milk, eggs, spices and salt.'], ['Bake', 'Pour in and bake at {{180C}} 45 minutes until just set; cool 2 hours.', 45]],
    tips: ['Pull it out while the centre still wobbles.'], mistakes: ['Overbaking: cracks.'], vars: ['Sweet potato pie (Southern).'], serve: 'Whipped cream.' });

  X(C('Canada', '🇨🇦', 'North America'), { id: 'butter-tarts', name: 'Butter Tarts', local: 'Butter tarts', emoji: '🥧', course: 'dessert', level: 2, prep: 25, cook: 20, serves: 12,
    taste: { sweet: 5, rich: 5 }, diet: ['vegetarian'], methods: ['bake'], tags: ['party', 'festive'],
    desc: 'Small flaky tarts with a gooey filling of butter, brown sugar, maple syrup, egg and raisins.',
    story: 'One of Canada’s national sweets; Ontario even has a Butter Tart Trail of bakeries.',
    equip: ['Muffin tin'],
    ing: [[300, 'g', 'shortcrust pastry'], [100, 'g', 'brown sugar'], [80, 'ml', 'maple syrup'], [60, 'g', 'butter', 'melted'], [1, '', 'egg'], [1, 'tsp', 'vanilla extract'], [1, 'tsp', 'vinegar'], [60, 'g', 'raisins']],
    steps: [['Line', 'Line a muffin tin with pastry rounds.'], ['Filling', 'Mix sugar, syrup, butter, egg, vanilla and vinegar; add raisins.'], ['Bake', 'Fill two-thirds and bake at {{200C}} 15–18 minutes until bubbling.', 18]],
    tips: ['Runny or firm: Canadians debate both.'], mistakes: ['Overfilling: it bubbles over.'], vars: ['Pecan butter tarts.'], serve: 'At room temperature.' });

  X(C('Argentina', '🇦🇷', 'Latin America'), { id: 'empanadas-humita', name: 'Empanadas de Humita', local: 'Empanadas de humita', emoji: '🥟', course: 'snack', level: 2, prep: 35, cook: 25, serves: 12,
    taste: { sweet: 3, savory: 4, rich: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['party', 'make-ahead'],
    desc: 'Golden baked empanadas filled with creamy sweet corn, onion, pepper and cheese.',
    story: 'Humita (creamed corn) empanadas are a favourite from northern Argentina, made for national holidays.',
    equip: ['Baking tray'],
    ing: [[12, '', 'empanada pastry discs', 'or rolled shortcrust'], [400, 'g', 'sweet corn kernels'], [1, '', 'onion', 'chopped'], [1, '', 'red bell pepper', 'diced'], [30, 'g', 'butter'], [150, 'ml', 'milk'], [1, 'tbsp', 'cornstarch'], [100, 'g', 'mozzarella', 'diced'], [1, 'tsp', 'paprika'], [0.5, 'tsp', 'salt'], [1, '', 'egg', 'beaten']],
    steps: [['Filling', 'Soften onion and pepper in butter, add corn, milk, cornstarch, paprika and salt; cook until thick. Cool and add cheese.', 12], ['Fill', 'Fill discs, fold and crimp the edges (repulgue).'], ['Bake', 'Brush with egg and bake at {{200C}} for 20 minutes.', 20]],
    tips: ['Cold filling makes sealing easy.'], mistakes: ['Wet filling: soggy pastry.'], vars: ['Spinach and cheese empanadas.'], serve: 'With chimichurri.' });

  X(C('Venezuela', '🇻🇪', 'Latin America'), { id: 'cachapas', name: 'Cachapas', local: 'Cachapas', emoji: '🌽', course: 'breakfast', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { sweet: 3, savory: 3, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['brunch', 'street-food'],
    desc: 'Sweet fresh-corn pancakes folded around melting white cheese.',
    story: 'Sold at roadside stalls across Venezuela, cooked on a budare griddle and filled with queso de mano.',
    equip: ['Blender', 'Griddle'],
    ing: [[500, 'g', 'sweet corn kernels'], [60, 'g', 'masa harina or cornmeal'], [2, 'tbsp', 'sugar'], [0.5, 'tsp', 'salt'], [60, 'ml', 'milk'], [2, 'tbsp', 'butter'], [200, 'g', 'mozzarella', 'thick slices']],
    steps: [['Batter', 'Blend corn, masa, sugar, salt and milk to a thick, slightly chunky batter.'], ['Cook', 'Pour thick rounds on a buttered griddle and cook 3 minutes per side.', 10], ['Fill', 'Add cheese and fold while hot.']],
    tips: ['Fresh corn is best.'], mistakes: ['Thin batter: they tear.'], vars: ['Add fried plantain.'], serve: 'Hot, with butter.' });

  X(C('Chile', '🇨🇱', 'Latin America'), { id: 'sopaipillas', name: 'Sopaipillas', local: 'Sopaipillas', emoji: '🎃', course: 'snack', level: 1, prep: 20, cook: 15, serves: 8,
    taste: { savory: 3, rich: 3, sweet: 1 }, diet: ['vegan'], methods: ['deep-fry'], tags: ['rainy-day', 'street-food'],
    desc: 'Chilean fried pumpkin flatbreads, eaten with pebre salsa or soaked in spiced syrup.',
    story: 'On rainy days, Chilean families fry sopaipillas; the sweet version (pasadas) is soaked in chancaca syrup.',
    equip: ['Rolling pin', 'Kadai'],
    ing: [[250, 'g', 'pumpkin', 'cooked, mashed'], [350, 'g', 'all-purpose flour'], [1, 'tsp', 'baking powder'], [1, 'tsp', 'salt'], [3, 'tbsp', 'oil'], [1, 'l', 'oil', 'for frying']],
    steps: [['Dough', '[[knead|Knead]] pumpkin, flour, baking powder, salt and oil into a soft dough; rest 15 minutes.', 15], ['Cut', 'Roll 5 mm thick, cut rounds and prick.'], ['Fry', '[[deep-fry|Fry]] until puffed and golden.', 12]],
    tips: ['Prick them so they don’t balloon.'], mistakes: ['Thick dough: doughy.'], vars: ['Sopaipillas pasadas in sweet syrup.'], serve: 'Pebre (tomato-onion-cilantro salsa).' });

  /* ======================= OCEANIA ======================= */
  X(C('Australia', '🇦🇺', 'Oceania'), { id: 'lamingtons', name: 'Lamingtons', local: 'Lamingtons', emoji: '🍰', course: 'dessert', level: 2, prep: 30, cook: 25, serves: 16,
    taste: { sweet: 5, rich: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['party', 'kids'],
    desc: 'Squares of sponge cake dipped in chocolate icing and rolled in desiccated coconut.',
    story: 'Named after Lord Lamington, governor of Queensland (1896–1901); Australians bake them for fundraisers (“lamington drives”).',
    equip: ['Square cake tin', 'Bowl', 'Forks'],
    ing: [[3, '', 'eggs'], [150, 'g', 'sugar'], [150, 'g', 'self-raising flour'], [60, 'ml', 'milk'], [30, 'g', 'butter', 'melted'], '#Icing', [300, 'g', 'powdered sugar'], [3, 'tbsp', 'cocoa powder'], [20, 'g', 'butter'], [120, 'ml', 'hot milk'], [200, 'g', 'desiccated coconut']],
    steps: [['Sponge', '[[whisk|Whisk]] eggs and sugar until thick; [[fold]] in flour, then milk and butter. Bake at {{180C}} 25 minutes; cool overnight.', 25], ['Ice', 'Whisk the icing ingredients until smooth.'], ['Coat', 'Cut into squares, dip in icing and roll in coconut; set.']],
    tips: ['Day-old sponge is easier to dip.'], mistakes: ['Fresh cake crumbles.'], vars: ['Jam- or cream-filled lamingtons.'], serve: 'With tea.' });

  X(C('Australia', '🇦🇺', 'Oceania'), { id: 'anzac-biscuits', name: 'Anzac Biscuits', local: 'Anzac biscuits', emoji: '🍪', course: 'dessert', level: 1, prep: 10, cook: 15, serves: 20,
    taste: { sweet: 4, rich: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['make-ahead', 'kids'],
    desc: 'Chewy oat and coconut biscuits sweetened with golden syrup, made without eggs.',
    story: 'Associated with the Australian and New Zealand Army Corps of World War I; made without eggs so they kept well.',
    equip: ['Baking tray'],
    ing: [[100, 'g', 'rolled oats'], [100, 'g', 'all-purpose flour'], [80, 'g', 'desiccated coconut'], [100, 'g', 'brown sugar'], [120, 'g', 'butter'], [2, 'tbsp', 'golden syrup or honey'], [0.5, 'tsp', 'baking soda'], [2, 'tbsp', 'boiling water']],
    steps: [['Mix', 'Mix oats, flour, coconut and sugar.'], ['Melt', 'Melt butter and syrup; add soda dissolved in boiling water (it foams) and pour into the dry mix.'], ['Bake', 'Roll balls, flatten and bake at {{170C}} 12–15 minutes.', 15]],
    tips: ['Underbake slightly for chewy biscuits.'], mistakes: ['Too close: they spread.'], vars: ['Crisp Anzacs: bake longer.'], serve: 'With tea.' });
})();
