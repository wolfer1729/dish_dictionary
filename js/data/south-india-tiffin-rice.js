/* South India, part 1: tiffin (breakfast) and rice dishes, with regional styles as separate recipes.
   Original recipes written for Dish Dictionary. */
'use strict';
(function () {
  const X = (area, styles, d) => DD.add(Object.assign({ country: 'India', flag: '🇮🇳', region: 'South Asia', area, styles }, d));
  const SI = ['south-indian'];
  const SIH = ['south-indian', 'home-style'];

  /* ======================= DOSA STYLES ======================= */
  X('Karnataka', ['south-indian', 'restaurant'], { id: 'mysore-masala-dosa', name: 'Mysore Masala Dosa', local: 'ಮೈಸೂರು ಮಸಾಲೆ ದೋಸೆ', emoji: '🥞', course: 'breakfast', level: 2, prep: 20, cook: 30, rest: 720, serves: 4,
    taste: { spicy: 3, savory: 4, sour: 2, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['brunch', 'street-food', 'impress'],
    desc: 'Crisp golden dosa smeared with fiery red garlic-chili chutney, filled with potato palya and a lick of butter.',
    story: 'Mysuru’s answer to the plain masala dosa: the inside of the crepe is painted with a spicy red chutney before the potato goes in. Darshinis (stand-up eateries) in Karnataka serve it with a pat of butter.',
    equip: ['Cast-iron tawa', 'Ladle', 'Blender'],
    ing: ['#Dosa', [500, 'ml', 'idli/dosa batter', 'fermented'], [2, 'tbsp', 'ghee or butter'],
      '#Red chutney', [6, '', 'dried red chilies (byadgi)', 'soaked 15 min'], [4, 'clove', 'garlic'], [2, 'tbsp', 'roasted chana dal'], [1, 'tbsp', 'grated coconut'], [1, 'tsp', 'tamarind paste'], [0.5, 'tsp', 'salt'],
      '#Potato palya', [4, '', 'potatoes', 'boiled, crumbled'], [2, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'chana dal'], [10, 'leaf', 'curry leaves'], [1, '', 'onion', 'sliced'], [2, '', 'green chilies', 'slit'], [0.5, 'tsp', 'ground turmeric'], [0.75, 'tsp', 'salt']],
    steps: [
      ['Red chutney', 'Grind the soaked chilies, garlic, roasted chana dal, coconut, tamarind and salt to a thick paste with very little water.'],
      ['Potato palya', 'Make a [[tadka]] of mustard seeds, chana dal and curry leaves; [[saute]] the onion and chilies 4 minutes, add turmeric, potatoes, salt and a splash of water and mash lightly.', 6],
      ['Spread the dosa', 'Heat the tawa until a sprinkle of water sizzles away. Pour a ladle of batter in the centre and spread outward in quick circles into a thin round. Drizzle ghee around the edge.', 2, 'Wipe the tawa with an oiled onion half between dosas.'],
      ['Chutney and filling', 'When the underside is golden, spread a spoon of red chutney over the top, put potato in the middle and fold.', 1],
    ],
    tips: ['The red chutney should be thick so it doesn’t make the dosa soggy.'], mistakes: ['A tawa that’s too hot: the batter sets before you can spread it.'],
    vars: ['Benne (butter) dosa from Davangere: thicker and soaked in butter.'], serve: 'Coconut chutney and sambar.' });

  X('Karnataka', SIH, { id: 'neer-dosa', name: 'Neer Dosa', local: 'ನೀರ್ ದೋಸೆ', emoji: '🫓', course: 'breakfast', level: 2, prep: 10, cook: 25, rest: 240, serves: 4,
    taste: { savory: 2, sweet: 1 }, diet: ['vegan', 'gluten-free'], methods: ['steam'], tags: ['brunch', 'healthy'],
    desc: 'Lacy, paper-thin “water dosas” from soaked rice and coconut. No fermentation needed.',
    story: '“Neer” means water in Tulu. These delicate Mangalorean crepes are made from a watery batter and folded into triangles, eaten with chicken curry on the coast or with jaggery-coconut at home.',
    equip: ['Blender', 'Non-stick or cast-iron pan with lid'],
    ing: [[200, 'g', 'raw rice', 'soaked 4 hours'], [60, 'g', 'fresh grated coconut'], [600, 'ml', 'water'], [0.75, 'tsp', 'salt'], [1, 'tsp', 'coconut oil', 'for the pan']],
    steps: [
      ['Soak', '[[soak|Soak]] the rice for 4 hours.', 240],
      ['Grind', 'Grind the drained rice and coconut with a little water until completely smooth, then thin with the rest of the water and salt. It should be like milk.'],
      ['Cook', 'Heat and lightly oil the pan. Stir the batter, then pour a ladle from the edge so it runs into a lacy circle. Cover and cook 1 minute until set; do not flip.', 1, 'Stir the batter before every dosa: the rice settles.'],
      ['Fold', 'Fold into quarters and stack.'],
    ],
    tips: ['The batter must be thin; holes are a good sign.'], mistakes: ['Thick batter: rubbery, heavy dosas.'],
    vars: ['Sweet: serve with grated coconut and jaggery.'], serve: 'Mangalorean veg kurma, chicken curry or coconut chutney.' });

  X('Tamil Nadu', ['south-indian', 'restaurant'], { id: 'rava-dosa', name: 'Rava Dosa', local: 'ரவா தோசை', emoji: '🥞', course: 'breakfast', level: 2, prep: 10, cook: 20, rest: 20, serves: 3,
    taste: { savory: 3, aromatic: 3, spicy: 2 }, diet: ['vegetarian'], methods: ['saute'], tags: ['quick', 'brunch'],
    desc: 'Instant, crackling-crisp semolina dosa with cumin, pepper, ginger and onion. No grinding, no fermenting.',
    story: 'Rava dosa is the hotel favourite of Tamil Nadu and Karnataka for people who forgot to soak rice. Its lacy holes come from pouring a very thin batter from a height.',
    equip: ['Mixing bowl', 'Cast-iron tawa'],
    ing: [[100, 'g', 'fine semolina (rava)'], [50, 'g', 'rice flour'], [2, 'tbsp', 'all-purpose flour'], [500, 'ml', 'water'], [1, 'tsp', 'cumin seeds'], [1, 'tsp', 'black pepper', 'crushed'], [1, 'tbsp', 'ginger', 'finely chopped'], [1, '', 'onion', 'finely chopped'], [2, '', 'green chilies', 'chopped'], [10, 'leaf', 'curry leaves', 'chopped'], [0.75, 'tsp', 'salt'], [3, 'tbsp', 'oil']],
    steps: [
      ['Batter', 'Mix the rava, rice flour, maida, salt and water into a very thin, runny batter. Stir in everything else except the oil and [[rest]] 20 minutes.', 20],
      ['Pour', 'Heat the tawa until very hot. Stir the batter and pour it from a height, starting at the edge and working inward, filling big gaps only. Do not spread.', 1, 'Holes are what make it crisp.'],
      ['Crisp', 'Drizzle oil over the dosa and cook on medium until deep golden, 3–4 minutes. Fold without flipping.', 4],
    ],
    tips: ['The batter thickens as it rests; add water to keep it runny.'], mistakes: ['Spreading with a ladle: you get a thick pancake.'],
    vars: ['Onion rava dosa: more onions.', 'Rava masala dosa with potato filling.'], serve: 'Coconut chutney and sambar.' });

  X('Karnataka', SIH, { id: 'ragi-dosa', name: 'Instant Ragi Dosa', local: 'ರಾಗಿ ದೋಸೆ', emoji: '🥞', course: 'breakfast', level: 1, prep: 10, cook: 20, rest: 15, serves: 3,
    taste: { savory: 3, aromatic: 2, bitter: 1 }, diet: ['vegan'], methods: ['saute'], tags: ['healthy', 'quick', 'budget'],
    desc: 'Earthy, lacy finger-millet dosa made from flour in minutes, rich in calcium and fibre.',
    story: 'Ragi (finger millet) is Karnataka’s staple grain, eaten as mudde balls in villages. This instant dosa brings it to the breakfast table.',
    equip: ['Bowl', 'Tawa'],
    ing: [[120, 'g', 'ragi flour'], [40, 'g', 'rice flour'], [2, 'tbsp', 'fine semolina (rava)'], [1, '', 'onion', 'finely chopped'], [2, '', 'green chilies', 'chopped'], [1, 'tsp', 'cumin seeds'], [2, 'tbsp', 'cilantro'], [450, 'ml', 'water'], [0.75, 'tsp', 'salt'], [2, 'tbsp', 'oil']],
    steps: [
      ['Batter', 'Whisk everything except the oil into a thin, pourable batter and [[rest]] 15 minutes.', 15],
      ['Cook', 'Pour onto a hot tawa from the edge inward like rava dosa, drizzle with oil and cook until crisp, 3 minutes. Fold.', 3],
    ],
    tips: ['Ragi dosas brown faster; cook on medium.'], mistakes: ['Thick batter: they break.'],
    vars: ['Add a little curd for a softer, tangier dosa.'], serve: 'Peanut or coconut chutney.' });

  X('Karnataka', SIH, { id: 'set-dosa', name: 'Set Dosa with Sagu', local: 'ಸೆಟ್ ದೋಸೆ', emoji: '🥞', course: 'breakfast', level: 2, prep: 20, cook: 35, rest: 720, serves: 4,
    taste: { savory: 3, sour: 2, sweet: 1, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute', 'simmer'], tags: ['brunch', 'comfort'],
    desc: 'Soft, spongy little dosas served in sets of three with sagu, a mild coconut vegetable curry.',
    story: 'Bengaluru darshinis serve set dosa in threes. Poha in the batter makes them soft and spongy like small pancakes rather than crisp.',
    equip: ['Blender', 'Tawa', 'Pot'],
    ing: ['#Set dosa', [200, 'g', 'raw rice', 'soaked 5 hours'], [40, 'g', 'thick poha (flattened rice)', 'soaked 15 min'], [2, 'tbsp', 'urad dal', 'soaked with the rice'], [0.25, 'tsp', 'fenugreek seeds'], [0.75, 'tsp', 'salt'], [2, 'tbsp', 'ghee or oil'],
      '#Sagu', [300, 'g', 'mixed vegetables (carrot, beans, peas, potato)', 'diced'], [60, 'g', 'grated coconut'], [2, '', 'green chilies'], [1, 'tbsp', 'roasted chana dal'], [1, 'tsp', 'fennel seeds'], [1, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [10, 'leaf', 'curry leaves'], [0.75, 'tsp', 'salt']],
    steps: [
      ['Batter', 'Grind the soaked rice, urad dal, fenugreek and poha to a smooth, thick batter. [[ferment|Ferment]] overnight with the salt.', 720],
      ['Sagu', 'Grind the coconut, chilies, roasted chana dal and fennel to a paste. Boil the vegetables until tender, add the paste and [[simmer]] 5 minutes. Finish with a mustard-curry leaf [[tadka]].', 15],
      ['Cook the dosas', 'Pour a ladle of batter on a hot tawa and spread only slightly to a thick 12 cm round. Drizzle ghee, cover and cook 2 minutes until the top is full of holes. Do not flip.', 2],
    ],
    tips: ['Keep them thick and small.'], mistakes: ['Spreading thin like masala dosa.'],
    vars: ['Serve with vegetable kurma instead of sagu.'], serve: 'In sets of three with sagu and coconut chutney.' });

  /* ======================= IDLI STYLES ======================= */
  X('Karnataka', ['south-indian', 'restaurant'], { id: 'rava-idli', name: 'Rava Idli', local: 'ರವೆ ಇಡ್ಲಿ', emoji: '⚪', course: 'breakfast', level: 1, prep: 15, cook: 15, rest: 20, serves: 4,
    taste: { savory: 3, sour: 2, aromatic: 3 }, diet: ['vegetarian'], methods: ['steam'], tags: ['quick', 'brunch', 'kids'],
    desc: 'Instant steamed semolina cakes with curd, cashews, carrot and a mustard tadka.',
    story: 'Bengaluru’s MTR restaurant invented rava idli during World War II, when rice was rationed. It became a Karnataka classic.',
    equip: ['Idli steamer', 'Mixing bowl'],
    ing: [[200, 'g', 'fine semolina (rava)'], [250, 'g', 'yogurt', 'slightly sour'], [1, 'tbsp', 'ghee'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'chana dal'], [10, '', 'cashews', 'halved'], [10, 'leaf', 'curry leaves'], [2, '', 'green chilies', 'chopped'], [1, 'tbsp', 'ginger', 'grated'], [1, '', 'carrot', 'grated'], [2, 'tbsp', 'cilantro'], [100, 'ml', 'water'], [0.75, 'tsp', 'salt'], [0.75, 'tsp', 'eno fruit salt']],
    steps: [
      ['Tadka and roast', 'In the ghee, crackle the mustard, then chana dal, cashews, curry leaves, chilies and ginger ([[tadka]]). Add the rava and [[toast]] 3 minutes on low.', 4],
      ['Batter', 'Cool, then mix in the curd, carrot, cilantro, salt and water to a thick batter. [[rest]] 20 minutes.', 20],
      ['Steam', 'Stir in the eno, fill greased idli moulds and [[steam]] 12 minutes.', 12, 'Add eno right before steaming or the bubbles escape.'],
    ],
    tips: ['Put a cashew in the bottom of each mould for the classic look.'], mistakes: ['Thin batter: flat, dense idlis.'],
    vars: ['Add peas or beetroot.'], serve: 'Coconut chutney and sagu or sambar.' });

  X('Tamil Nadu', SI, { id: 'kanchipuram-idli', name: 'Kanchipuram Idli', local: 'காஞ்சிபுரம் இட்லி', emoji: '⚪', course: 'breakfast', level: 2, prep: 15, cook: 25, rest: 720, serves: 4,
    taste: { aromatic: 4, savory: 4, spicy: 2, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['steam'], tags: ['brunch', 'festive'],
    desc: 'The temple idli of Kanchipuram: spiced with black pepper, cumin, ginger and dry ginger, enriched with ghee and steamed in cups.',
    story: 'Offered at the Varadharaja Perumal temple in Kanchipuram for centuries. Unlike plain idli it is flavoured and rich, and traditionally steamed in dried leaf cups.',
    equip: ['Steamer', 'Small steel cups or ramekins'],
    ing: [[500, 'ml', 'idli/dosa batter', 'fermented, slightly coarse'], [3, 'tbsp', 'ghee'], [1, 'tsp', 'black pepper', 'coarsely crushed'], [1, 'tsp', 'cumin seeds'], [1, 'tbsp', 'ginger', 'finely chopped'], [0.25, 'tsp', 'dry ginger powder'], [1, 'pinch', 'asafoetida (hing)'], [10, 'leaf', 'curry leaves'], [10, '', 'cashews', 'broken']],
    steps: [
      ['Spice the ghee', 'Heat the ghee and fry the pepper, cumin, ginger, cashews, curry leaves, hing and dry ginger for 1 minute ([[bloom]]).', 1],
      ['Mix', 'Stir the spiced ghee into the batter.'],
      ['Steam', 'Pour into greased cups and [[steam]] 20 minutes until a knife comes out clean.', 20, 'Bigger cups take longer than idli moulds.'],
    ],
    tips: ['Slightly coarse batter gives the right texture.'], mistakes: ['Skimping on ghee: it’s part of the flavour.'],
    vars: ['Steam in banana-leaf-lined cups for aroma.'], serve: 'Sambar and coconut chutney.' });

  /* ======================= OTHER TIFFIN ======================= */
  X('Karnataka', SIH, { id: 'akki-roti', name: 'Akki Roti', local: 'ಅಕ್ಕಿ ರೊಟ್ಟಿ', emoji: '🫓', course: 'breakfast', level: 2, prep: 15, cook: 20, serves: 3,
    taste: { savory: 4, herby: 3, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['brunch', 'budget'],
    desc: 'Karnataka’s rice-flour flatbread, patted straight onto the pan with onion, coconut, dill and chili.',
    story: '“Akki” means rice in Kannada. This rustic roti is patted by hand directly on the tawa, a home breakfast across southern Karnataka.',
    equip: ['Mixing bowl', 'Non-stick tawa', 'Banana leaf or plastic sheet (optional)'],
    ing: [[200, 'g', 'rice flour'], [1, '', 'onion', 'finely chopped'], [3, 'tbsp', 'grated coconut'], [2, '', 'green chilies', 'chopped'], [2, 'tbsp', 'dill', 'chopped'], [2, 'tbsp', 'cilantro'], [1, 'tsp', 'cumin seeds'], [0.75, 'tsp', 'salt'], [200, 'ml', 'hot water'], [2, 'tbsp', 'oil']],
    steps: [
      ['Dough', 'Mix everything except the oil, adding the hot water a little at a time, and [[knead]] into a soft, non-sticky dough.'],
      ['Pat', 'Oil a cold tawa and pat a ball of dough into a thin round with wet fingers. Poke a few holes and drizzle oil in them.', null, 'Pat on a cold pan; it sticks better.'],
      ['Cook', 'Cook covered on medium for 3 minutes, flip and cook 1–2 minutes until spotted golden. Cool the pan under water before the next one.', 5],
    ],
    tips: ['Hot water makes the rice flour pliable.'], mistakes: ['Thick roti: raw inside.'],
    vars: ['Add grated carrot or cucumber.'], serve: 'Coconut chutney and a pat of butter.' });

  X('Tamil Nadu', ['south-indian', 'home-style'], { id: 'kuzhi-paniyaram', name: 'Kuzhi Paniyaram', local: 'குழி பணியாரம்', emoji: '🟤', course: 'breakfast', level: 1, prep: 10, cook: 20, serves: 4,
    taste: { savory: 4, spicy: 2, sour: 2 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['kids', 'brunch', 'budget'],
    desc: 'Crisp-outside, fluffy-inside dumplings of dosa batter with onion and chili, cooked in a dimpled pan.',
    story: 'A Chettinad snack for using leftover dosa batter. Karnataka calls them paddu and Andhra calls them ponganalu, all made in the same pan with hemispherical hollows.',
    equip: ['Paniyaram (appe) pan'],
    ing: [[500, 'ml', 'idli/dosa batter'], [1, '', 'onion', 'finely chopped'], [2, '', 'green chilies', 'chopped'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'urad dal'], [10, 'leaf', 'curry leaves'], [2, 'tbsp', 'cilantro'], [3, 'tbsp', 'oil']],
    steps: [
      ['Tadka', 'Make a [[tadka]] of mustard, urad dal and curry leaves, add the onion and chilies for 2 minutes and stir into the batter with the cilantro.', 3],
      ['Cook', 'Heat the pan, add a few drops of oil to each hollow and fill three-quarters with batter. Cook 3 minutes on medium until golden underneath, turn with a skewer and cook 2 minutes more.', 5],
    ],
    tips: ['Day-old, slightly sour batter tastes best.'], mistakes: ['Overfilling: they stick together.'],
    vars: ['Sweet paniyaram with jaggery and banana.'], serve: 'Coconut or peanut chutney.' });

  X('Kerala', SIH, { id: 'idiyappam', name: 'Idiyappam', local: 'ഇടിയപ്പം', emoji: '🍜', course: 'breakfast', level: 2, prep: 15, cook: 15, serves: 4,
    taste: { savory: 2, sweet: 1 }, diet: ['vegan', 'gluten-free'], methods: ['steam'], tags: ['brunch', 'healthy'],
    desc: 'Delicate nests of steamed rice-flour noodles (string hoppers), soft and light.',
    story: 'Made across Kerala, Tamil Nadu and Sri Lanka, idiyappam is pressed through a hand press onto plates and steamed. Breakfast with stew or egg curry.',
    equip: ['Idiyappam press', 'Steamer or idli plates'],
    ing: [[250, 'g', 'roasted rice flour (puttu podi)'], [350, 'ml', 'boiling water'], [1, 'tsp', 'coconut oil'], [0.5, 'tsp', 'salt'], [3, 'tbsp', 'fresh grated coconut', 'optional']],
    steps: [
      ['Dough', 'Pour the boiling water with oil and salt over the flour, mix with a spoon, then [[knead]] when cool enough into a soft, smooth dough.'],
      ['Press', 'Sprinkle coconut on greased plates and press the dough through the fine disc in circles to make nests.'],
      ['Steam', '[[steam|Steam]] for 8–10 minutes.', 10],
    ],
    tips: ['Soft dough is easier to press.'], mistakes: ['Cold water: the dough cracks.'],
    vars: ['Ragi idiyappam with finger-millet flour.'], serve: 'Kerala vegetable stew or egg roast.' });

  X('Karnataka', ['south-indian', 'sweets'], { id: 'mangalore-buns', name: 'Mangalore Buns', local: 'ಮಂಗಳೂರು ಬನ್ಸ್', emoji: '🍌', course: 'breakfast', level: 2, prep: 15, cook: 20, rest: 360, serves: 6,
    taste: { sweet: 3, rich: 3, aromatic: 2 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['brunch', 'kids', 'street-food'],
    desc: 'Soft, puffy, slightly sweet fried breads made with ripe banana and curd.',
    story: 'Despite the name, they are not baked buns but banana puris, a teatime and breakfast favourite at Udupi-Mangalore hotels.',
    equip: ['Mixing bowl', 'Kadai', 'Rolling pin'],
    ing: [[2, '', 'ripe bananas', 'mashed'], [3, 'tbsp', 'sugar'], [3, 'tbsp', 'yogurt'], [0.5, 'tsp', 'baking soda'], [1, 'tsp', 'cumin seeds'], [0.5, 'tsp', 'salt'], [280, 'g', 'all-purpose flour'], [1, 'tbsp', 'ghee'], [1, 'l', 'oil', 'for frying']],
    steps: [
      ['Dough', 'Mash the banana with sugar, curd, soda, cumin, salt and ghee. Add the flour and [[knead]] into a soft, sticky dough. Cover and [[rest]] 6 hours or overnight.', 360],
      ['Roll', 'Roll lemon-size balls into thick 10 cm rounds.'],
      ['Fry', '[[deep-fry|Deep-fry]] in hot oil, pressing gently, until puffed and golden, about 1 minute per side.', 8],
    ],
    tips: ['The longer rest makes them softer.'], mistakes: ['Thin rolling: they turn crisp like puris.'],
    vars: ['Half whole wheat flour.'], serve: 'Coconut chutney and sambar, or just tea.' });

  X('Karnataka', SIH, { id: 'khara-bath', name: 'Khara Bath', local: 'ಖಾರಾ ಬಾತ್', emoji: '🍲', course: 'breakfast', level: 1, prep: 10, cook: 20, serves: 4,
    taste: { spicy: 3, savory: 4, sour: 2, aromatic: 3 }, diet: ['vegetarian'], methods: ['simmer'], tags: ['quick', 'brunch', 'comfort'],
    desc: 'Karnataka’s spicy vegetable upma: semolina cooked with tomatoes, vegetables and vangi bath masala.',
    story: 'Order “chow chow bath” in Bengaluru and you get khara bath (spicy) and kesari bath (sweet) side by side. It is upma, made bolder.',
    equip: ['Kadai'],
    ing: [[150, 'g', 'fine semolina (rava)'], [2, 'tbsp', 'ghee'], [1, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'urad dal'], [10, 'leaf', 'curry leaves'], [1, '', 'onion', 'chopped'], [2, '', 'tomatoes', 'chopped'], [100, 'g', 'mixed vegetables (carrot, beans, peas)'], [1.5, 'tsp', 'vangi bath powder'], [500, 'ml', 'water', 'hot'], [0.75, 'tsp', 'salt'], [2, 'tbsp', 'cilantro']],
    steps: [
      ['Roast the rava', '[[toast|Toast]] the rava in 1 tbsp ghee on low until fragrant; set aside.', 5],
      ['Masala', 'Make a [[tadka]] of mustard, urad dal and curry leaves; add the onion, tomatoes, vegetables, salt and vangi bath powder and cook until soft.', 8],
      ['Cook', 'Pour in the hot water, bring to a boil and add the rava in a stream while stirring. Cover and cook 3 minutes on low; finish with the rest of the ghee and cilantro.', 4],
    ],
    tips: ['Always roast the rava; raw rava turns gluey.'], mistakes: ['Dumping the rava in at once: lumps.'],
    vars: ['Serve with kesari bath for chow chow bath.'], serve: 'Coconut chutney and kesari bath.' });

  /* ======================= RICE ======================= */
  X('Karnataka', SIH, { id: 'puliyogare', name: 'Puliyogare (Tamarind Rice)', local: 'ಪುಳಿಯೋಗರೆ', emoji: '🍚', course: 'main', level: 2, prep: 15, cook: 25, serves: 4,
    taste: { sour: 4, spicy: 3, sweet: 2, aromatic: 4 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['meal-prep', 'festive', 'make-ahead'],
    desc: 'Rice tossed in a tangy-sweet tamarind paste with roasted spices, peanuts and sesame. Karnataka temple style.',
    story: 'Puliyogare is the prasadam of Karnataka’s temples and the traditional travel food, because tamarind keeps rice fresh for days. Tamil Nadu’s puli sadam is sharper and without jaggery.',
    equip: ['Kadai', 'Spice grinder'],
    ing: ['#Spice powder', [1, 'tbsp', 'coriander seeds'], [1, 'tbsp', 'chana dal'], [1, 'tsp', 'urad dal'], [0.25, 'tsp', 'fenugreek seeds'], [6, '', 'dried red chilies (byadgi)'], [1, 'tbsp', 'sesame seeds'], [2, 'tbsp', 'dry coconut', 'grated'],
      '#Gojju', [3, 'tbsp', 'sesame oil'], [1, 'tsp', 'mustard seeds'], [3, 'tbsp', 'peanuts'], [15, 'leaf', 'curry leaves'], [3, 'tbsp', 'tamarind paste'], [1, 'tbsp', 'jaggery'], [0.5, 'tsp', 'ground turmeric'], [1, 'pinch', 'asafoetida (hing)'], [1, 'tsp', 'salt'],
      '#Rice', [600, 'g', 'cooked rice', 'cooled, grains separate']],
    steps: [
      ['Spice powder', 'Dry-[[toast]] the coriander, dals, fenugreek and chilies until fragrant, then the sesame and coconut for 1 minute. Grind to a powder.', 6],
      ['Gojju', 'Heat the sesame oil, crackle the mustard, fry the peanuts and curry leaves, then add the tamarind, jaggery, turmeric, hing, salt and half the powder. Cook until thick and the oil separates.', 8, 'This paste keeps for weeks in the fridge.'],
      ['Mix', 'Toss the rice with the gojju and the rest of the powder. [[rest]] 30 minutes so the flavours soak in.', null],
    ],
    tips: ['Tastes best a few hours later, at room temperature.'], mistakes: ['Hot, sticky rice: mushy puliyogare.'],
    vars: ['Tamil puli sadam: no jaggery or coconut, more chili and sesame.', 'Andhra pulihora: sharper, with green chilies and no spice powder.'], serve: 'Curd rice and papad.', store: '2 days at room temperature.' });

  X('Karnataka', SIH, { id: 'vangi-bath', name: 'Vangi Bath (Brinjal Rice)', local: 'ವಾಂಗಿ ಬಾತ್', emoji: '🍆', course: 'main', level: 2, prep: 15, cook: 25, serves: 4,
    taste: { spicy: 3, sour: 3, aromatic: 4, savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['weeknight', 'comfort'],
    desc: 'Rice tossed with brinjals cooked in a freshly ground, coconut-rich vangi bath masala.',
    story: 'Vangi bath is a lunchbox favourite in Karnataka; its spice powder (with cinnamon, cloves and coconut) is what gives the dish its character.',
    equip: ['Kadai', 'Spice grinder'],
    ing: ['#Vangi bath powder', [1, 'tbsp', 'coriander seeds'], [1, 'tbsp', 'chana dal'], [1, 'tsp', 'urad dal'], [5, '', 'dried red chilies (byadgi)'], [1, 'piece', 'cinnamon stick', 'small'], [3, '', 'whole cloves'], [2, 'tbsp', 'dry coconut', 'grated'],
      '#Brinjal', [3, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [2, 'tbsp', 'peanuts'], [10, 'leaf', 'curry leaves'], [1, '', 'onion', 'sliced'], [300, 'g', 'baby eggplants (small brinjals)', 'cut in thin wedges'], [1, 'tbsp', 'tamarind paste'], [1, 'tsp', 'jaggery'], [0.25, 'tsp', 'ground turmeric'], [1, 'tsp', 'salt'],
      '#Rice', [500, 'g', 'cooked rice', 'cooled'], [2, 'tbsp', 'cilantro']],
    steps: [
      ['Vangi bath powder', 'Dry-[[toast]] the coriander, dals, chilies, cinnamon and cloves until fragrant, add the coconut for 1 minute and grind to a powder.', 6],
      ['Brinjal', 'Crackle the mustard in the oil, fry the peanuts and curry leaves, then [[saute]] the onion 3 minutes. Add the brinjals, turmeric and salt and cook covered on low until soft, 8 minutes.', 11, 'Keep the cut brinjals in salted water so they don’t darken.'],
      ['Masala', 'Add the tamarind, jaggery and 3 tbsp of the powder; cook 2 minutes until the oil separates.', 2],
      ['Mix', 'Fold in the rice gently with the cilantro.'],
    ],
    tips: ['Use small, tender brinjals; big ones can be bitter.'], mistakes: ['Overcooked brinjal turns to mush.'],
    vars: ['Capsicum bath with green peppers.', 'Maharashtrian masale bhat uses goda masala.'], serve: 'Raita and papad.' });

  X('Tamil Nadu', SIH, { id: 'tomato-rice', name: 'Tomato Rice (Thakkali Sadam)', local: 'தக்காளி சாதம்', emoji: '🍅', course: 'main', level: 1, prep: 10, cook: 20, serves: 4,
    taste: { sour: 3, spicy: 3, aromatic: 3, savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['weeknight', 'quick', 'kids', 'budget'],
    desc: 'Rice cooked into a tangy, spiced tomato masala, the classic Tamil lunchbox rice.',
    story: 'Thakkali sadam is one of Tamil Nadu’s “variety rice” dishes made for tiffin boxes and train journeys. Karnataka’s tomato bath adds vangi bath powder; Andhra’s is hotter.',
    equip: ['Kadai'],
    ing: [[2, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'urad dal'], [1, 'piece', 'cinnamon stick', 'small'], [10, 'leaf', 'curry leaves'], [1, '', 'onion', 'thinly sliced'], [2, '', 'green chilies', 'slit'], [1, 'tsp', 'ginger-garlic paste'], [4, '', 'tomatoes', 'chopped'], [0.25, 'tsp', 'ground turmeric'], [1, 'tsp', 'kashmiri chili powder'], [0.5, 'tsp', 'garam masala'], [1, 'tsp', 'salt'], [500, 'g', 'cooked rice', 'cooled'], [2, 'tbsp', 'cilantro']],
    steps: [
      ['Tadka', 'Crackle the mustard, urad dal, cinnamon and curry leaves ([[tadka]]); [[saute]] the onion and chilies until golden, then the ginger-garlic paste for 1 minute.', 7],
      ['Tomato masala', 'Add the tomatoes, spices and salt and cook down until jammy and the oil separates ([[bhuna]]).', 10],
      ['Mix', 'Fold in the rice and cilantro over low heat.', 2],
    ],
    tips: ['Ripe, tangy country tomatoes give the best flavour.'], mistakes: ['Undercooked tomatoes: sour and watery.'],
    vars: ['Karnataka tomato bath: add 1 tsp vangi bath powder.', 'Add green peas.'], serve: 'Potato fry and onion raita.' });

  X('Kerala', ['south-indian', 'restaurant'], { id: 'ghee-rice', name: 'Malabar Ghee Rice (Neychoru)', local: 'നെയ്ച്ചോറ്', emoji: '🍚', course: 'main', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { rich: 4, aromatic: 4, sweet: 2, savory: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'party'],
    desc: 'Fragrant short-grain rice cooked in ghee with whole spices, golden onions, cashews and raisins.',
    story: 'Neychoru is the festive rice of Kerala’s Malabar coast, made with small fragrant kaima (jeerakasala) rice and served at weddings with chicken or vegetable curry.',
    equip: ['Heavy pot with lid'],
    ing: [[300, 'g', 'short-grain rice', 'jeerakasala or basmati, washed and soaked 20 min'], [4, 'tbsp', 'ghee'], [1, '', 'onion', 'thinly sliced'], [12, '', 'cashews'], [1, 'tbsp', 'raisins'], [1, 'piece', 'cinnamon stick'], [4, '', 'whole cloves'], [3, '', 'green cardamom pods'], [1, '', 'bay leaf'], [550, 'ml', 'water', 'hot'], [1, 'tsp', 'salt'], [1, 'tsp', 'lemon juice']],
    steps: [
      ['Garnish', 'Fry the onion in the ghee until deep golden; lift out. Fry the cashews and raisins; lift out.', 10],
      ['Spices and rice', 'Fry the whole spices in the same ghee for 30 seconds, add the drained rice and [[toast]] gently for 2 minutes.', 3],
      ['Cook', 'Add the hot water, salt and lemon juice; cover and cook on low for 12 minutes, then [[rest]] 5 minutes.', 17, 'Lemon keeps the grains white and separate.'],
      ['Finish', 'Fluff and top with the onions, cashews and raisins.'],
    ],
    tips: ['Use the onion-scented ghee for the rice.'], mistakes: ['Stirring while it cooks: broken grains.'],
    vars: ['Thalassery style: with fried onion paste and a pinch of fennel.'], serve: 'Kerala chicken curry, veg kurma or dal fry.' });

  X('Tamil Nadu', SIH, { id: 'sambar-sadam', name: 'Sambar Sadam', local: 'சாம்பார் சாதம்', emoji: '🍲', course: 'main', level: 1, prep: 15, cook: 30, serves: 4,
    taste: { sour: 3, spicy: 3, savory: 4, aromatic: 4 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['one-pot', 'comfort', 'weeknight', 'meal-prep'],
    desc: 'One-pot rice, toor dal and vegetables cooked soft with tamarind and sambar powder, finished with ghee.',
    story: 'Tamil Nadu’s everyday cousin of Karnataka’s bisi bele bath: simpler, made with ready sambar powder and eaten with potato fry.',
    equip: ['Pressure cooker'],
    ing: [[150, 'g', 'rice', 'washed'], [100, 'g', 'toor dal', 'washed'], [1200, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], [200, 'g', 'mixed vegetables (carrot, beans, drumstick, pumpkin)', 'chopped'], [8, '', 'shallots', 'peeled'], [1, '', 'tomato', 'chopped'], [2, 'tbsp', 'tamarind paste'], [2, 'tbsp', 'sambar powder'], [1.25, 'tsp', 'salt'], [3, 'tbsp', 'ghee'], [1, 'tsp', 'mustard seeds'], [2, '', 'dried red chilies'], [10, 'leaf', 'curry leaves'], [1, 'pinch', 'asafoetida (hing)'], [2, 'tbsp', 'cilantro']],
    steps: [
      ['Pressure-cook', 'Cook the rice and dal with 900 ml water and turmeric for 4 whistles until mushy.', 15],
      ['Vegetables', 'Simmer the vegetables, shallots and tomato in the remaining water until tender; add the tamarind, sambar powder and salt and [[simmer]] 5 minutes.', 12],
      ['Combine', 'Mash the rice-dal and stir in the vegetables. Loosen with hot water: it thickens as it stands.', 3],
      ['Tadka', 'Pour over a ghee [[tadka]] of mustard, chilies, curry leaves and hing; add cilantro.', 1],
    ],
    tips: ['Serve it loose and hot; it sets as it cools.'], mistakes: ['Skimping on ghee.'],
    vars: ['Karnataka bisi bele bath: with fresh-ground spice powder and jaggery.'], serve: 'Potato fry, papad and curd rice.' });

  X('Tamil Nadu', ['south-indian', 'restaurant'], { id: 'coconut-milk-pulao', name: 'Coconut Milk Pulao', local: 'தேங்காய் பால் புலாவ்', emoji: '🥥', course: 'main', level: 1, prep: 15, cook: 25, serves: 4,
    taste: { aromatic: 4, rich: 3, savory: 3, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['weeknight', 'one-pot', 'party'],
    desc: 'Mildly spiced vegetable pulao cooked in coconut milk with mint and whole spices.',
    story: 'Thengai paal pulao is how Tamil and Chettinad kitchens make pulao: coconut milk instead of water, and mint and fennel for perfume.',
    equip: ['Pressure cooker or heavy pot'],
    ing: [[300, 'g', 'basmati rice', 'soaked 20 min'], [2, 'tbsp', 'oil'], [1, 'piece', 'cinnamon stick'], [3, '', 'whole cloves'], [2, '', 'green cardamom pods'], [1, 'tsp', 'fennel seeds'], [1, '', 'onion', 'sliced'], [3, '', 'green chilies', 'slit'], [1, 'tbsp', 'ginger-garlic paste'], [1, 'handful', 'mint leaves'], [200, 'g', 'mixed vegetables (carrot, beans, peas)'], [400, 'ml', 'coconut milk'], [200, 'ml', 'water'], [1, 'tsp', 'salt']],
    steps: [
      ['Spices', 'Fry the whole spices and fennel in the oil for 30 seconds ([[bloom]]), then [[saute]] the onion and chilies until light golden.', 6],
      ['Masala', 'Add the ginger-garlic paste, mint and vegetables and cook 3 minutes.', 3],
      ['Cook', 'Add the coconut milk, water, salt and drained rice. Cook 2 whistles, or covered on low for 15 minutes, then [[rest]] 10 minutes.', 15],
    ],
    tips: ['Coconut milk plus water should equal 1.75× the rice by volume.'], mistakes: ['All coconut milk: heavy and sticky.'],
    vars: ['Add paneer cubes.'], serve: 'Veg kurma or onion raita.' });

  X('Tamil Nadu', ['south-indian', 'restaurant'], { id: 'mushroom-biryani', name: 'Tamil-Style Mushroom Biryani', local: 'காளான் பிரியாணி', emoji: '🍄', course: 'main', level: 2, prep: 20, cook: 35, serves: 4,
    taste: { spicy: 3, aromatic: 5, savory: 4, sour: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'party', 'comfort'],
    desc: 'Mushrooms and small-grain seeraga samba rice cooked together with mint, curd and a punchy green masala.',
    story: 'Tamil biryanis (Dindigul, Ambur, Chennai) are cooked “one-pot” with short, fragrant seeraga samba rice rather than layered like Hyderabadi dum. Mushroom (kaalan) biryani is the vegetarian favourite.',
    equip: ['Heavy pot or pressure cooker', 'Blender'],
    ing: [[300, 'g', 'seeraga samba or basmati rice', 'soaked 20 min'], [300, 'g', 'mushrooms', 'quartered'], [3, 'tbsp', 'oil'], [1, 'tbsp', 'ghee'], [1, 'piece', 'cinnamon stick'], [4, '', 'whole cloves'], [3, '', 'green cardamom pods'], [1, '', 'star anise'], [1, '', 'bay leaf'], [2, '', 'onions', 'thinly sliced'], [2, '', 'tomatoes', 'chopped'], [100, 'g', 'yogurt'], [1, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'garam masala'], [1.25, 'tsp', 'salt'], [550, 'ml', 'water'],
      '#Green masala', [1, 'handful', 'mint leaves'], [1, 'handful', 'cilantro'], [3, '', 'green chilies'], [6, 'clove', 'garlic'], [10, 'g', 'ginger']],
    steps: [
      ['Green masala', 'Grind the mint, cilantro, chilies, garlic and ginger to a paste.'],
      ['Base', 'Fry the whole spices in the oil and ghee, then the onions until golden, 8 minutes. Add the green paste and cook 3 minutes, then the tomatoes until soft.', 13],
      ['Mushrooms', 'Add the mushrooms, curd, chili powder, garam masala and salt; cook 5 minutes.', 5],
      ['Cook the rice', 'Add the water and the drained rice. Cook 2 whistles (seeraga samba) or covered on the lowest heat for 15 minutes ([[dum]]). [[rest|Rest]] 10 minutes before opening.', 15],
    ],
    tips: ['Seeraga samba needs less water than basmati.'], mistakes: ['Stirring after the rice goes in: mushy biryani.'],
    vars: ['Hyderabadi style: layered and steamed on dum.', 'Swap mushrooms for mixed vegetables or soya chunks.'], serve: 'Onion raita and brinjal curry.' });
})();
