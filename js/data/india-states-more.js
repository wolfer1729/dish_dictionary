/* India state by state: Odisha, Assam & the Northeast, Bihar, Rajasthan, Gujarat, Sindhi, Parsi, Goa,
   Himachal & Uttarakhand, Maharashtra, Karnataka, Tamil Nadu, Kerala, Uttar Pradesh, Madhya Pradesh, Bengal.
   Original recipes written for Dish Dictionary. */
'use strict';
(function () {
  const X = (area, styles, d) => DD.add(Object.assign({ country: 'India', flag: '🇮🇳', region: 'South Asia', area, styles }, d));
  const H = ['home-style'];
  const SW = ['sweets'];
  const ST = ['chaat'];

  /* ======================= ODISHA ======================= */
  X('Odisha', H, { id: 'dalma', name: 'Dalma', local: 'ଡାଲମା', emoji: '🥣', course: 'main', level: 1, prep: 15, cook: 35, serves: 4,
    taste: { savory: 4, sweet: 2, aromatic: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['comfort', 'healthy', 'one-pot'],
    desc: 'Toor dal cooked with chunks of pumpkin, raw banana, papaya and eggplant, finished with roasted cumin-chili powder.',
    story: 'Dalma is Odisha’s soul food and part of the Mahaprasad at Puri’s Jagannath Temple, where it is made without onion or garlic.',
    equip: ['Pressure cooker', 'Pan'],
    ing: [[150, 'g', 'toor dal'], [700, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], [300, 'g', 'mixed vegetables (pumpkin, raw banana, papaya, eggplant)', 'chunks'], [1, 'tbsp', 'ginger', 'grated'], [1, 'tsp', 'salt'], [1, 'tbsp', 'ghee or oil'], [1, 'tsp', 'panch phoron (five-spice seeds)'], [2, '', 'dried red chilies'], [2, '', 'bay leaves'], [1.5, 'tsp', 'roasted cumin powder'], [2, 'tbsp', 'grated coconut']],
    steps: [['Cook', 'Pressure-cook the dal and vegetables with water, turmeric, ginger and salt for 3 whistles; vegetables should hold their shape.', 12], ['Tadka', 'Crackle panch phoron, chilies and bay leaves in ghee ([[tadka]]) and pour in.', 2], ['Finish', 'Add roasted cumin powder and coconut; [[simmer]] 3 minutes.', 3]],
    tips: ['Roasted cumin-chili powder (bhaja masala) is the Odia signature.'], mistakes: ['Mushing the vegetables.'], vars: ['Temple dalma without chili or onion.'], serve: 'Rice and a bhaja (fry).' });

  X('Odisha', SW, { id: 'chhena-poda', name: 'Chhena Poda', local: 'ଛେନା ପୋଡ଼', emoji: '🍰', course: 'dessert', level: 2, prep: 20, cook: 60, serves: 8,
    taste: { sweet: 4, rich: 4, smoky: 2 }, diet: ['vegetarian'], methods: ['bake'], tags: ['festive', 'make-ahead'],
    desc: 'Odisha’s “burnt cheese” cake: fresh chhena kneaded with sugar, a little semolina and cardamom, baked until caramelized outside.',
    story: 'Legend says a sweet-maker in Nayagarh left chhena in a cooling wood oven overnight and found a caramelized cake by morning.',
    equip: ['Baking tin', 'Oven'],
    ing: [[500, 'g', 'chhena', 'fresh, drained'], [130, 'g', 'sugar'], [2, 'tbsp', 'fine semolina (rava)'], [0.5, 'tsp', 'cardamom powder'], [1, 'tbsp', 'ghee'], [1, 'tbsp', 'raisins'], [1, 'tbsp', 'cashews']],
    steps: [['Knead', '[[knead|Knead]] the chhena with sugar until smooth; mix in semolina, cardamom, raisins and cashews. Rest 15 minutes.', 15], ['Bake', 'Spread in a ghee-lined tin and bake at {{180C}} for 50–60 minutes until deep brown on top and sides.', 60]],
    tips: ['A dark crust is the goal.'], mistakes: ['Wet chhena: soggy cake.'], vars: ['Line the tin with sal or banana leaf for smoky aroma.'], serve: 'Warm or cold.' });

  X('Odisha', H, { id: 'pakhala-bhata', name: 'Pakhala Bhata', local: 'ପଖାଳ ଭାତ', emoji: '🍚', course: 'main', level: 1, prep: 10, cook: 0, rest: 480, serves: 2,
    taste: { sour: 3, savory: 3, herby: 2 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'budget', 'healthy'],
    desc: 'Cooked rice fermented overnight in water, served cold with curd or tempering, green chili, onion and fried sides.',
    story: 'Odisha celebrates Pakhala Dibasa on 20 March. Farmers have eaten it for centuries to stay cool in summer.',
    equip: ['Clay pot or bowl'],
    ing: [[300, 'g', 'cooked rice'], [600, 'ml', 'water'], [0.5, 'tsp', 'salt'], [1, '', 'green chili', 'crushed'], [0.5, '', 'onion', 'sliced'], [1, 'tsp', 'oil'], [0.5, 'tsp', 'mustard seeds'], [6, 'leaf', 'curry leaves'], [1, '', 'lemon', 'wedges']],
    steps: [['Soak', 'Cover the cooked rice with water and leave overnight to lightly [[ferment]].', 480], ['Season', 'Add salt, chili and onion, and a mustard-curry leaf [[tadka]] (dahi pakhala adds yogurt).', 1]],
    tips: ['Serve with fried potato, badi chura and saga bhaja.'], mistakes: ['Fermenting too long: too sour.'], vars: ['Dahi pakhala with yogurt.'], serve: 'With fried vegetables and papad.' });

  /* ======================= ASSAM & NORTHEAST ======================= */
  X('Assam', H, { id: 'aloo-pitika', name: 'Aloo Pitika', local: 'আলু পিটিকা', emoji: '🥔', course: 'side', level: 1, prep: 10, cook: 20, serves: 3,
    taste: { savory: 4, spicy: 3, herby: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer', 'no-cook'], tags: ['quick', 'comfort', 'budget'],
    desc: 'Assamese mashed potato with raw mustard oil, onion, green chili and cilantro.',
    story: 'Pitika (mash) is the comfort side of every Assamese meal, made from potato, eggplant or even fish.',
    equip: ['Pot', 'Bowl'],
    ing: [[3, '', 'potatoes', 'boiled'], [1, 'tbsp', 'mustard oil', 'raw'], [0.5, '', 'onion', 'finely chopped'], [2, '', 'green chilies', 'chopped'], [2, 'tbsp', 'cilantro'], [0.5, 'tsp', 'salt']],
    steps: [['Mash', 'Mash the hot potatoes with everything else by hand. The raw mustard oil should be pungent.']],
    tips: ['Roast a dried chili over the flame and crush it in.'], mistakes: ['Cooked mustard oil: the punch is gone.'], vars: ['Bengan pitika with roasted eggplant.'], serve: 'Rice and dal.' });

  X('Manipur', H, { id: 'singju', name: 'Singju', local: 'Singju', emoji: '🥗', course: 'salad', level: 1, prep: 20, cook: 3, serves: 4,
    taste: { spicy: 4, sour: 3, herby: 4, savory: 3 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['healthy', 'street-food'],
    desc: 'A crunchy Manipuri salad of shredded cabbage, lotus stem and herbs dressed with roasted chili and toasted chickpea flour.',
    story: 'Sold by women vendors in Imphal’s markets. Traditional singju has fermented fish; this vegetarian version uses roasted perilla seeds and besan.',
    equip: ['Bowl', 'Pan'],
    ing: [[250, 'g', 'cabbage', 'very finely shredded'], [1, '', 'carrot', 'julienned'], [1, '', 'onion', 'thinly sliced'], [1, 'handful', 'mint and cilantro'], [2, 'tbsp', 'besan (gram flour)', 'dry-roasted'], [3, '', 'dried red chilies', 'roasted, crushed'], [1, 'tbsp', 'sesame seeds', 'toasted'], [1, 'tbsp', 'lemon juice'], [0.5, 'tsp', 'salt']],
    steps: [['Roast', 'Dry-[[toast]] the besan until golden and the chilies until crisp.', 3], ['Toss', 'Toss everything just before serving.']],
    tips: ['Shred the vegetables as fine as hair.'], mistakes: ['Dressing early: soggy.'], vars: ['Add lotus stem or banana flower.'], serve: 'As a snack or side.' });

  X('Sikkim', H, { id: 'gundruk-soup', name: 'Gundruk Soup', local: 'गुन्द्रुक', emoji: '🥬', course: 'soup', level: 1, prep: 10, cook: 20, serves: 4,
    taste: { sour: 4, savory: 3, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['winter', 'healthy', 'comfort'],
    desc: 'A tangy Himalayan soup of fermented dried mustard greens with tomato, garlic and soybeans.',
    story: 'Gundruk is made in Nepal, Sikkim and Darjeeling by fermenting greens and drying them for winter.',
    equip: ['Pot'],
    ing: [[40, 'g', 'gundruk (fermented dried greens)', 'soaked 10 min'], [1, 'tbsp', 'mustard oil'], [1, '', 'onion', 'chopped'], [3, 'clove', 'garlic'], [1, '', 'tomato', 'chopped'], [2, '', 'green chilies'], [0.25, 'tsp', 'ground turmeric'], [800, 'ml', 'water'], [80, 'g', 'cooked soybeans or chickpeas'], [0.75, 'tsp', 'salt']],
    steps: [['Fry', 'Fry the onion, garlic and chilies in mustard oil; add tomato and turmeric until soft.', 6], ['Simmer', 'Add the drained gundruk, beans, water and salt and [[simmer]] 15 minutes.', 15]],
    tips: ['Soak gundruk briefly; it’s salty-sour.'], mistakes: ['Too much gundruk: very sour.'], vars: ['Gundruk ko achar: as a pickle.'], serve: 'Rice or millet bread.' });

  /* ======================= BIHAR & JHARKHAND ======================= */
  X('Bihar', H, { id: 'sattu-paratha', name: 'Sattu Paratha', local: 'सत्तू पराठा', emoji: '🫓', course: 'breakfast', level: 2, prep: 20, cook: 20, serves: 4,
    taste: { savory: 4, spicy: 3, sour: 2, herby: 3 }, diet: ['vegan', 'high-protein'], methods: ['saute'], tags: ['brunch', 'healthy'],
    desc: 'Whole-wheat flatbread stuffed with roasted gram flour, onion, garlic, ajwain, mustard oil and pickle masala.',
    story: 'Sattu (roasted chana flour) is Bihar’s superfood: drunk as a summer cooler, stuffed in litti and parathas.',
    equip: ['Rolling pin', 'Tawa'],
    ing: [[300, 'g', 'whole wheat flour (atta)'], [180, 'ml', 'water'], [150, 'g', 'sattu (roasted gram flour)'], [1, '', 'onion', 'finely chopped'], [4, 'clove', 'garlic', 'minced'], [2, '', 'green chilies'], [1, 'tsp', 'ajwain'], [1, 'tbsp', 'mustard oil'], [1, 'tbsp', 'lemon juice'], [2, 'tbsp', 'cilantro'], [1, 'tsp', 'salt'], [3, 'tbsp', 'oil', 'for cooking']],
    steps: [['Dough', '[[knead|Knead]] a soft atta dough; rest 15 minutes.', 15], ['Filling', 'Mix the sattu with everything else and a splash of water until it holds when pressed.'], ['Stuff and cook', 'Stuff, roll and cook on a tawa with oil until spotted golden.', 15]],
    tips: ['A spoon of mango pickle masala in the filling is classic.'], mistakes: ['Dry filling: it spills.'], vars: ['Litti chokha uses the same filling.'], serve: 'Baingan chokha, curd and pickle.' });

  X('Jharkhand', H, { id: 'dhuska', name: 'Dhuska', local: 'धुस्का', emoji: '🟤', course: 'breakfast', level: 2, prep: 15, cook: 20, rest: 300, serves: 4,
    taste: { savory: 4, spicy: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['deep-fry'], tags: ['brunch', 'street-food'],
    desc: 'Puffy deep-fried breads of rice and chana dal batter, eaten with spicy potato-chickpea curry.',
    story: 'Jharkhand’s favourite breakfast, sold hot from roadside kadais in Ranchi with aloo chana.',
    equip: ['Grinder', 'Kadai'],
    ing: [[200, 'g', 'rice', 'soaked 5 hours'], [100, 'g', 'chana dal', 'soaked 5 hours'], [2, '', 'green chilies'], [1, 'tsp', 'ginger'], [0.5, 'tsp', 'cumin seeds'], [0.75, 'tsp', 'salt'], [1, 'l', 'oil', 'for frying']],
    steps: [['Batter', 'Grind the rice and dal with chilies and ginger to a thick, slightly coarse batter; add cumin and salt.'], ['Fry', 'Pour a ladle into hot oil; it puffs. Fry until golden on both sides.', 15]],
    tips: ['Thick batter gives puffy dhuska.'], mistakes: ['Cold oil: flat and oily.'], vars: ['Add chopped onion and cilantro.'], serve: 'Aloo chana curry.' });

  /* ======================= RAJASTHAN & MADHYA PRADESH ======================= */
  X('Rajasthan', H, { id: 'ker-sangri', name: 'Ker Sangri', local: 'केर सांगरी', emoji: '🌵', course: 'side', level: 2, prep: 10, cook: 25, rest: 480, serves: 4,
    taste: { sour: 4, spicy: 3, savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['festive', 'make-ahead'],
    desc: 'Desert berries (ker) and beans (sangri) cooked with yogurt-free spices, amchur and raisins. The taste of the Thar.',
    story: 'Ker and sangri grow wild in the Thar desert and are dried to last the year. This dish is a Marwari wedding classic.',
    equip: ['Kadai'],
    ing: [[30, 'g', 'ker (dried desert berries)', 'soaked overnight'], [60, 'g', 'sangri (dried beans)', 'soaked overnight'], [4, 'tbsp', 'oil'], [1, 'tsp', 'cumin seeds'], [1, 'pinch', 'asafoetida (hing)'], [4, '', 'dried red chilies'], [1.5, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'ground coriander'], [0.5, 'tsp', 'ground turmeric'], [1.5, 'tsp', 'amchur'], [1, 'tbsp', 'raisins'], [1, 'tsp', 'salt']],
    steps: [['Boil', 'Boil the soaked ker and sangri 10 minutes; drain.', 10], ['Cook', 'Fry cumin, hing and chilies in oil, add spices, then ker, sangri, raisins and salt; cook 10 minutes until coated and dry ([[saute]]).', 10]],
    tips: ['Available dried in Indian stores.'], mistakes: ['Not soaking long enough: chewy.'], vars: ['Add dried apricots (khumbhi).'], serve: 'Bajra roti.' });

  X('Rajasthan', ['sweets'], { id: 'ghevar', name: 'Ghevar', local: 'घेवर', emoji: '🍯', course: 'dessert', level: 3, prep: 20, cook: 30, serves: 6,
    taste: { sweet: 5, rich: 5 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['festive', 'impress'],
    desc: 'A lacy, honeycomb disc of fried batter soaked in syrup and topped with rabri and nuts. Made for Teej.',
    story: 'Ghevar is made in the monsoon for the Teej festival; the batter is poured in streams into hot ghee to form the honeycomb.',
    equip: ['Ghevar mould or deep narrow pan', 'Ladle'],
    ing: [[150, 'g', 'all-purpose flour'], [50, 'g', 'ghee', 'chilled'], [4, '', 'ice cubes'], [250, 'ml', 'cold water'], [1, 'l', 'ghee', 'for frying'], [250, 'g', 'sugar'], [150, 'ml', 'water'], [100, 'g', 'khoya (mawa)', 'or rabri'], [2, 'tbsp', 'pistachios', 'sliced']],
    steps: [['Batter', 'Rub the cold ghee with ice until white and creamy; whisk in flour and cold water to a thin, smooth batter.'], ['Fry', 'In very hot ghee in a deep mould, pour thin streams of batter from a height one after another; wait for the froth to settle each time. Fry until a honeycomb disc forms and is golden.', 20, 'Pour from a height for the lace.'], ['Syrup and top', 'Soak in one-string syrup, then top with khoya/rabri and pistachios.', 5]],
    tips: ['Everything cold, the ghee very hot.'], mistakes: ['Thick batter: no honeycomb.'], vars: ['Malai ghevar with rabri.'], serve: 'For Teej and Raksha Bandhan.' });

  X('Madhya Pradesh', ST, { id: 'bhutte-ka-kees', name: 'Bhutte ka Kees', local: 'भुट्टे का कीस', emoji: '🌽', course: 'snack', level: 1, prep: 10, cook: 15, serves: 3,
    taste: { sweet: 3, savory: 3, sour: 2, spicy: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['street-food', 'rainy-day'],
    desc: 'Grated corn cooked in ghee and milk with mustard, green chili and lemon. Indore’s monsoon street snack.',
    story: 'Indore’s Sarafa night market is famous for kees, made from grated sweet corn until it turns creamy.',
    equip: ['Grater', 'Kadai'],
    ing: [[4, '', 'corn cobs', 'grated'], [1, 'tbsp', 'ghee'], [0.5, 'tsp', 'mustard seeds'], [1, 'tsp', 'cumin seeds'], [2, '', 'green chilies'], [200, 'ml', 'milk'], [1, 'tsp', 'sugar'], [0.5, 'tsp', 'salt'], [1, 'tbsp', 'lemon juice'], [2, 'tbsp', 'grated coconut'], [2, 'tbsp', 'cilantro']],
    steps: [['Tadka', 'Crackle mustard and cumin in ghee with chilies ([[tadka]]).', 1], ['Cook', 'Add the grated corn and cook 5 minutes, then milk, sugar and salt; cook until thick and creamy.', 10], ['Finish', 'Add lemon, coconut and cilantro.']],
    tips: ['Use desi corn for a less sweet kees.'], mistakes: ['Burning: stir constantly.'], vars: ['Add sev on top.'], serve: 'In bowls, with sev.' });

  X('Madhya Pradesh', ST, { id: 'poha-jalebi', name: 'Indori Poha', local: 'इंदौरी पोहा', emoji: '🍚', course: 'breakfast', level: 1, prep: 10, cook: 12, serves: 3,
    taste: { sweet: 2, sour: 3, savory: 4, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['steam', 'saute'], tags: ['quick', 'brunch', 'street-food'],
    desc: 'Steamed poha with fennel, onion and a little sugar, topped with jeeravan masala, sev and pomegranate. Eaten with jalebi in Indore.',
    story: 'Indore eats poha-jalebi for breakfast every day. Unlike Maharashtrian kanda poha it is steamed and topped with tangy jeeravan masala.',
    equip: ['Kadai with steamer plate or lid'],
    ing: [[200, 'g', 'thick poha (flattened rice)', 'rinsed'], [1, 'tsp', 'sugar'], [0.75, 'tsp', 'salt'], [0.5, 'tsp', 'ground turmeric'], [2, 'tbsp', 'oil'], [1, 'tsp', 'fennel seeds'], [1, 'tsp', 'mustard seeds'], [1, '', 'onion', 'chopped'], [2, '', 'green chilies'], [1, 'tsp', 'chaat masala'], [3, 'tbsp', 'sev'], [2, 'tbsp', 'pomegranate seeds'], [1, 'tbsp', 'lemon juice'], [2, 'tbsp', 'cilantro']],
    steps: [['Season', 'Mix the rinsed poha with sugar, salt and turmeric; rest 5 minutes.', 5], ['Temper', 'Crackle fennel and mustard, add onion and chilies, then the poha; cover and steam 5 minutes on low.', 7], ['Top', 'Top with chaat masala (or jeeravan), sev, pomegranate, lemon and cilantro.']],
    tips: ['Steaming keeps poha soft and fluffy.'], mistakes: ['Over-soaking poha: mushy.'], vars: ['Kanda poha (Maharashtra).'], serve: 'With hot jalebi.' });

  /* ======================= GUJARAT, SINDHI, PARSI ======================= */
  X('Gujarat', H, { id: 'sev-tameta', name: 'Sev Tameta nu Shaak', local: 'સેવ ટમેટાનું શાક', emoji: '🍅', course: 'main', level: 1, prep: 5, cook: 15, serves: 3,
    taste: { sweet: 3, sour: 3, spicy: 2 }, diet: ['vegan'], methods: ['simmer'], tags: ['quick', 'weeknight', 'budget'],
    desc: 'A tangy-sweet Kathiawadi tomato curry topped with crunchy sev just before serving.',
    story: 'A Kathiawadi dhaba favourite when there are no vegetables: tomatoes and a packet of sev become dinner in 15 minutes.',
    equip: ['Kadai'],
    ing: [[2, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'cumin seeds'], [1, 'pinch', 'asafoetida (hing)'], [1, 'tsp', 'ginger-garlic paste'], [5, '', 'tomatoes', 'chopped'], [1, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'ground coriander'], [0.25, 'tsp', 'ground turmeric'], [1, 'tbsp', 'jaggery'], [0.75, 'tsp', 'salt'], [150, 'ml', 'water'], [80, 'g', 'nylon sev'], [2, 'tbsp', 'cilantro']],
    steps: [['Base', 'Make a [[tadka]] of mustard, cumin and hing; add paste and tomatoes and cook until soft.', 6], ['Simmer', 'Add spices, jaggery, salt and water; [[simmer]] 5 minutes.', 5], ['Sev', 'Top with sev at the table so it stays crunchy.']],
    tips: ['Add sev only when serving.'], mistakes: ['Sev in the pot: soggy.'], vars: ['Sev usal (Vadodara) with white peas.'], serve: 'Bajra rotla or rotli.' });

  X('Gujarat', H, { id: 'dal-dhokli', name: 'Dal Dhokli', local: 'દાળ ઢોકળી', emoji: '🍲', course: 'main', level: 2, prep: 20, cook: 30, serves: 4,
    taste: { sweet: 3, sour: 3, spicy: 2, aromatic: 3 }, diet: ['vegetarian', 'high-protein'], methods: ['simmer'], tags: ['one-pot', 'comfort', 'rainy-day'],
    desc: 'Spiced wheat-flour dumplings simmered in sweet-sour Gujarati dal. A one-pot meal.',
    story: 'Gujarat’s answer to pasta in sauce: diamonds of spiced dough cooked right in the dal, a Sunday lunch favourite.',
    equip: ['Pot', 'Rolling pin'],
    ing: [[150, 'g', 'toor dal', 'cooked and whisked'], [1, 'l', 'water'], [2, 'tbsp', 'jaggery'], [1, 'tbsp', 'lemon juice'], [2, 'tbsp', 'peanuts'], [1, 'tsp', 'salt'], [1, 'tbsp', 'ghee'], [1, 'tsp', 'mustard seeds'], [3, '', 'whole cloves'], [10, 'leaf', 'curry leaves'], '#Dhokli', [150, 'g', 'whole wheat flour (atta)'], [2, 'tbsp', 'besan (gram flour)'], [0.5, 'tsp', 'kashmiri chili powder'], [0.25, 'tsp', 'ground turmeric'], [0.5, 'tsp', 'ajwain'], [1, 'tbsp', 'oil'], [0.5, 'tsp', 'salt'], [80, 'ml', 'water']],
    steps: [['Dhokli', '[[knead|Knead]] the dhokli dough, roll thin and cut into diamonds.'], ['Dal', 'Bring the dal, water, jaggery, peanuts and salt to a boil; make a ghee [[tadka]] and add.', 5], ['Cook', 'Drop in the dhokli and [[simmer]] 15 minutes, stirring gently, until cooked. Add lemon.', 15]],
    tips: ['Keep the dal thin: dhokli thicken it.'], mistakes: ['Adding dhokli to cold dal: they stick.'], vars: ['Leftover-roti dal dhokli.'], serve: 'With ghee and rice.' });

  X('Gujarat', ST, { id: 'dabeli', name: 'Dabeli', local: 'દાબેલી', emoji: '🍔', course: 'snack', level: 2, prep: 25, cook: 15, serves: 6,
    taste: { sweet: 3, spicy: 3, sour: 3, savory: 4 }, diet: ['vegetarian'], methods: ['saute'], tags: ['street-food', 'kids', 'party'],
    desc: 'Pav stuffed with a sweet-spicy potato filling, tamarind chutney, masala peanuts, pomegranate and sev. Kutch’s street burger.',
    story: 'Invented in Mandvi, Kutch in the 1960s. “Dabeli” means pressed, after how the filling is pressed into the pav.',
    equip: ['Tawa'],
    ing: [[6, '', 'pav buns'], [3, '', 'potatoes', 'boiled, mashed'], [2, 'tbsp', 'dabeli masala or pav bhaji masala'], [2, 'tbsp', 'tamarind-date chutney'], [1, 'tbsp', 'oil'], [3, 'tbsp', 'roasted peanuts', 'masala'], [3, 'tbsp', 'pomegranate seeds'], [50, 'g', 'nylon sev'], [1, '', 'onion', 'finely chopped'], [2, 'tbsp', 'butter'], [2, 'tbsp', 'grated coconut']],
    steps: [['Filling', 'Cook the potato with oil, dabeli masala and 1 tbsp chutney; spread on a plate and top with peanuts, pomegranate and coconut.', 5], ['Assemble', 'Slit the pav, spread chutney, add filling, onion and sev.'], ['Toast', 'Toast in butter on a tawa; roll the edges in sev.', 4]],
    tips: ['The filling should be sweet, tangy and spicy.'], mistakes: ['Soggy pav: toast well.'], vars: ['Cheese dabeli.'], serve: 'Hot, with extra chutney.' });

  X('Sindh', H, { id: 'sai-bhaji', name: 'Sai Bhaji', local: 'سائي ڀاڄي', emoji: '🥬', course: 'main', level: 1, prep: 15, cook: 30, serves: 4,
    taste: { savory: 4, herby: 3, sour: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['healthy', 'comfort', 'one-pot'],
    desc: 'Sindhi spinach and chana dal cooked with dill, vegetables and tomato into a thick green stew.',
    story: 'Sai bhaji (green vegetables) with rice is the Sindhi family meal, rich in iron and protein.',
    equip: ['Pressure cooker'],
    ing: [[300, 'g', 'spinach', 'chopped'], [1, 'bunch', 'dill', 'chopped'], [60, 'g', 'chana dal', 'soaked 30 min'], [1, '', 'potato', 'cubed'], [1, '', 'eggplant', 'cubed'], [2, '', 'tomatoes', 'chopped'], [1, '', 'onion', 'chopped'], [1, 'tbsp', 'ginger-garlic paste'], [2, '', 'green chilies'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'ground coriander'], [1, 'tsp', 'salt'], [2, 'tbsp', 'oil'], [250, 'ml', 'water']],
    steps: [['Cook', 'Pressure-cook everything except the oil for 3 whistles.', 12], ['Mash', 'Mash coarsely with a whisk.'], ['Tadka', 'Finish with a garlic-tomato [[tadka]] in oil.', 3]],
    tips: ['Mash coarse, not smooth.'], mistakes: ['Watery bhaji: cook down.'], vars: ['Add amaranth or fenugreek leaves.'], serve: 'Rice and papad.' });

  X('Sindh', H, { id: 'dal-pakwan', name: 'Dal Pakwan', local: 'دال پڪوان', emoji: '🫓', course: 'breakfast', level: 2, prep: 20, cook: 30, serves: 4,
    taste: { savory: 4, spicy: 3, sour: 3 }, diet: ['vegetarian', 'high-protein'], methods: ['deep-fry', 'simmer'], tags: ['brunch', 'festive'],
    desc: 'Crisp, flaky fried breads (pakwan) with spicy chana dal, topped with onion, chutney and lemon. The Sindhi Sunday breakfast.',
    story: 'After Partition, Sindhi families brought dal pakwan to Ulhasnagar and Mumbai, where it is still a weekend ritual.',
    equip: ['Pressure cooker', 'Kadai', 'Rolling pin'],
    ing: ['#Dal', [200, 'g', 'chana dal', 'soaked 1 hour'], [600, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'salt'], [2, 'tbsp', 'oil'], [1, 'tsp', 'cumin seeds'], [1, 'tsp', 'amchur'], [1, 'tsp', 'kashmiri chili powder'], [0.5, 'tsp', 'garam masala'],
      '#Pakwan', [250, 'g', 'all-purpose flour'], [1, 'tsp', 'cumin seeds'], [0.5, 'tsp', 'salt'], [3, 'tbsp', 'ghee'], [100, 'ml', 'water'], [1, 'l', 'oil', 'for frying'], [1, '', 'onion', 'chopped'], [3, 'tbsp', 'green chutney']],
    steps: [['Dal', 'Pressure-cook the dal with water, turmeric and salt for 2 whistles (grains whole); temper with cumin, then add amchur, chili and garam masala.', 15], ['Pakwan', 'Rub the ghee into flour, cumin and salt, add water and [[knead]] stiff. Roll thin rounds, prick all over and [[deep-fry]] slowly until crisp.', 15], ['Serve', 'Break pakwan, top with dal, onion and chutney.']],
    tips: ['Prick the pakwan so they don’t puff.'], mistakes: ['High heat: soft pakwan.'], vars: ['Top with tamarind chutney.'], serve: 'Hot dal, crisp pakwan, onion and lemon.' });

  X('Mumbai', ['restaurant'], { id: 'veg-dhansak', name: 'Parsi Vegetable Dhansak', local: 'Dhansak', emoji: '🍲', course: 'main', level: 2, prep: 20, cook: 45, serves: 5,
    taste: { sweet: 2, sour: 3, spicy: 3, aromatic: 4, rich: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['festive', 'comfort'],
    desc: 'Four lentils cooked with pumpkin, eggplant, methi and dhansak masala, mashed into a sweet-sour-spicy stew.',
    story: 'Dhansak is the Parsi Sunday lunch, served with caramelized brown rice. It is usually made with mutton; this version keeps it vegetarian.',
    equip: ['Pressure cooker', 'Blender'],
    ing: [[200, 'g', 'mixed dals (toor, chana, moong, masoor)'], [200, 'g', 'pumpkin', 'cubed'], [1, '', 'eggplant', 'cubed'], [1, 'bunch', 'methi leaves'], [1, '', 'onion', 'chopped'], [2, '', 'tomatoes'], [1, 'tbsp', 'ginger-garlic paste'], [2, 'tbsp', 'dhansak masala or sambar powder'], [1, 'tbsp', 'tamarind paste'], [1, 'tbsp', 'jaggery'], [1.25, 'tsp', 'salt'], [1, 'l', 'water'], [3, 'tbsp', 'oil'], [2, 'tbsp', 'mint leaves']],
    steps: [['Cook', 'Pressure-cook the dals and vegetables with half the onion, tomatoes and water for 5 whistles; blend smooth.', 20], ['Masala', 'Fry the rest of the onion golden, add paste and dhansak masala for 2 minutes ([[bhuna]]).', 10], ['Simmer', 'Add the dal, tamarind, jaggery and salt; [[simmer]] 10 minutes. Finish with mint.', 10]],
    tips: ['Balance sweet, sour and spice: that’s dhansak.'], mistakes: ['Too thick: it should pour.'], vars: ['Classic mutton dhansak.'], serve: 'Brown rice (caramelized onion rice) and kachumber.' });

  X('Mumbai', SW, { id: 'lagan-nu-custard', name: 'Lagan nu Custard', local: 'Lagan nu custard', emoji: '🍮', course: 'dessert', level: 2, prep: 15, cook: 60, serves: 8,
    taste: { sweet: 4, rich: 5, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['bake'], tags: ['festive', 'party'],
    desc: 'A baked Parsi wedding custard of reduced milk, eggs, nutmeg and cardamom, topped with nuts.',
    story: '“Lagan” means wedding: this rich baked custard ends every Parsi wedding feast.',
    equip: ['Heavy pot', 'Baking dish'],
    ing: [[1.5, 'l', 'full-fat milk'], [150, 'g', 'sugar'], [5, '', 'eggs'], [0.5, 'tsp', 'nutmeg'], [0.5, 'tsp', 'cardamom powder'], [1, 'tsp', 'vanilla extract'], [2, 'tbsp', 'almonds and pistachios', 'sliced']],
    steps: [['Reduce', '[[reduce|Reduce]] the milk with the sugar to about 1 litre; cool.', 35], ['Custard', '[[whisk|Whisk]] in the eggs and spices; pour into a dish and scatter nuts.'], ['Bake', 'Bake at {{170C}} for 45 minutes until set and golden.', 45]],
    tips: ['Cool the milk before adding eggs.'], mistakes: ['Hot oven: rubbery custard.'], vars: ['Add charoli (chironji) on top.'], serve: 'Warm or chilled.' });

  /* ======================= GOA, MAHARASHTRA, KARNATAKA ======================= */
  X('Goa', H, { id: 'khatkhate', name: 'Khatkhate', local: 'खतखतें', emoji: '🥘', course: 'main', level: 2, prep: 20, cook: 30, serves: 5,
    taste: { sweet: 2, sour: 3, spicy: 3, aromatic: 4 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['festive', 'comfort'],
    desc: 'Goan Hindu mixed-vegetable stew with toor dal, coconut, kokum and tirphal (a Sichuan-pepper-like berry).',
    story: 'Made for Ganesh Chaturthi and weddings in Goan Hindu homes, with at least seven seasonal vegetables.',
    equip: ['Pot', 'Grinder'],
    ing: [[100, 'g', 'toor dal', 'cooked'], [500, 'g', 'mixed vegetables (drumstick, pumpkin, sweet potato, raw banana, corn)'], [100, 'g', 'grated coconut'], [4, '', 'dried red chilies', 'roasted'], [1, 'tsp', 'coriander seeds'], [1, 'tsp', 'sichuan peppercorns or tirphal'], [4, '', 'kokum'], [1, 'tbsp', 'jaggery'], [1.25, 'tsp', 'salt'], [700, 'ml', 'water']],
    steps: [['Vegetables', 'Simmer the vegetables in water with salt until tender.', 15], ['Paste', 'Grind coconut, chilies and coriander to a paste.'], ['Combine', 'Add dal, paste, kokum, jaggery and crushed tirphal; [[simmer]] 10 minutes.', 10]],
    tips: ['Tirphal is the signature; Sichuan pepper is the nearest swap.'], mistakes: ['Overcooked vegetables.'], vars: ['Add jackfruit seeds in season.'], serve: 'Rice and puris.' });

  X('Maharashtra', H, { id: 'sabudana-vada', name: 'Sabudana Vada', local: 'साबुदाणा वडा', emoji: '🟡', course: 'snack', level: 1, prep: 15, cook: 20, rest: 300, serves: 4,
    taste: { savory: 4, spicy: 2, sour: 2 }, diet: ['vegan', 'gluten-free'], methods: ['deep-fry'], tags: ['street-food', 'festive'],
    desc: 'Crisp patties of soaked tapioca pearls, potato and crushed peanuts. A fasting-day favourite.',
    story: 'On fasting days (upvas) Maharashtrians avoid grains, so tapioca pearls and peanuts become everything from khichdi to these vadas.',
    equip: ['Bowl', 'Kadai'],
    ing: [[150, 'g', 'sabudana (tapioca pearls)', 'soaked 5 hours'], [2, '', 'potatoes', 'boiled, mashed'], [60, 'g', 'roasted peanuts', 'coarsely crushed'], [2, '', 'green chilies', 'chopped'], [2, 'tbsp', 'cilantro'], [1, 'tsp', 'cumin seeds'], [1, 'tsp', 'lemon juice'], [0.75, 'tsp', 'rock salt (sendha namak)'], [1, 'l', 'oil', 'for frying']],
    steps: [['Mix', 'Mix the drained sabudana with potato, peanuts, chilies, cilantro, cumin, lemon and salt.'], ['Shape', 'Shape flat patties with wet hands.'], ['Fry', '[[deep-fry|Deep-fry]] on medium until crisp and golden.', 15, 'Hot oil prevents them breaking.']],
    tips: ['Sabudana should be soft and dry, not wet.'], mistakes: ['Cold oil: they burst.'], vars: ['Air-fry for less oil.'], serve: 'Green chutney or sweet curd.' });

  X('Maharashtra', H, { id: 'kothimbir-vadi', name: 'Kothimbir Vadi', local: 'कोथिंबीर वडी', emoji: '🌿', course: 'snack', level: 2, prep: 15, cook: 30, serves: 4,
    taste: { savory: 4, herby: 5, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['steam', 'saute'], tags: ['rainy-day', 'party'],
    desc: 'Steamed squares of cilantro and gram flour, then pan-fried crisp. A Maharashtrian tea-time favourite.',
    story: 'Made when cilantro is cheap after the monsoon; steamed first, then fried, so they are soft inside and crisp outside.',
    equip: ['Steamer', 'Frying pan'],
    ing: [[2, 'bunch', 'cilantro', 'finely chopped'], [150, 'g', 'besan (gram flour)'], [2, 'tbsp', 'rice flour'], [1, 'tbsp', 'ginger-green chili paste'], [1, 'tbsp', 'sesame seeds'], [0.25, 'tsp', 'ground turmeric'], [1, 'tsp', 'sugar'], [0.75, 'tsp', 'salt'], [80, 'ml', 'water'], [4, 'tbsp', 'oil']],
    steps: [['Mix', 'Mix everything except the oil into a thick dough-like batter.'], ['Steam', 'Spread in a greased plate and [[steam]] 15 minutes; cool and cut into squares.', 15], ['Fry', '[[shallow-fry|Shallow-fry]] until crisp on both sides.', 10]],
    tips: ['Cool fully before cutting.'], mistakes: ['Too much water: they won’t set.'], vars: ['Methi or cabbage vadi.'], serve: 'Tea and green chutney.' });

  X('Maharashtra', SW, { id: 'ukadiche-modak', name: 'Ukadiche Modak', local: 'उकडीचे मोदक', emoji: '🥟', course: 'dessert', level: 3, prep: 40, cook: 25, serves: 12,
    taste: { sweet: 4, rich: 3, aromatic: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['steam'], tags: ['festive', 'impress'],
    desc: 'Steamed rice-flour dumplings pleated around a coconut-jaggery filling, served with ghee. Lord Ganesha’s favourite.',
    story: 'Made by the hundreds for Ganesh Chaturthi in Maharashtra. Getting 11 neat pleats is a point of pride.',
    equip: ['Steamer', 'Pan'],
    ing: ['#Filling', [200, 'g', 'fresh grated coconut'], [150, 'g', 'jaggery'], [0.5, 'tsp', 'cardamom powder'], [1, 'tsp', 'poppy seeds'], '#Shell', [200, 'g', 'rice flour'], [250, 'ml', 'water'], [1, 'tsp', 'ghee'], [1, 'pinch', 'salt'], [3, 'tbsp', 'ghee', 'to serve']],
    steps: [['Filling', 'Cook coconut and jaggery until sticky, add cardamom and poppy seeds.', 10], ['Dough', 'Boil water with ghee and salt, add flour, stir, cover 5 minutes, then [[knead]] smooth while warm.', 8], ['Shape', 'Press a ball into a cup, pinch pleats around the edge, fill and close into a peak.'], ['Steam', '[[steam|Steam]] 12 minutes. Serve with ghee.', 12]],
    tips: ['Keep the dough covered; it dries quickly.'], mistakes: ['Thick shells.'], vars: ['Fried modak with wheat dough.'], serve: 'With ghee poured over.' });

  X('Karnataka', ['south-indian', 'restaurant'], { id: 'maddur-vada', name: 'Maddur Vada', local: 'ಮದ್ದೂರು ವಡೆ', emoji: '🟤', course: 'snack', level: 1, prep: 15, cook: 15, serves: 4,
    taste: { savory: 4, spicy: 2, aromatic: 3 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['street-food', 'rainy-day'],
    desc: 'Crisp, flat fritters of rice flour, semolina and maida with lots of onion, curry leaves and hot ghee.',
    story: 'Named after Maddur railway station between Bengaluru and Mysuru, where vendors sold them to train passengers.',
    equip: ['Bowl', 'Kadai'],
    ing: [[100, 'g', 'rice flour'], [50, 'g', 'fine semolina (rava)'], [40, 'g', 'all-purpose flour'], [2, '', 'onions', 'thinly sliced'], [2, '', 'green chilies'], [10, 'leaf', 'curry leaves'], [2, 'tbsp', 'cilantro'], [2, 'tbsp', 'ghee', 'hot'], [0.75, 'tsp', 'salt'], [80, 'ml', 'water'], [1, 'l', 'oil', 'for frying']],
    steps: [['Dough', 'Mix the flours, onion, chilies, herbs and salt; pour in hot ghee, then water to a soft dough.'], ['Fry', 'Pat into thin discs and [[deep-fry]] until crisp and golden.', 12]],
    tips: ['Hot ghee makes them crisp.'], mistakes: ['Thick discs: soft centres.'], vars: ['Add grated coconut.'], serve: 'Coconut chutney and filter coffee.' });

  /* ======================= TAMIL NADU & KERALA ======================= */
  X('Tamil Nadu', ['south-indian', 'home-style'], { id: 'adai', name: 'Adai', local: 'அடை', emoji: '🥞', course: 'breakfast', level: 1, prep: 15, cook: 20, rest: 180, serves: 4,
    taste: { savory: 4, spicy: 3, aromatic: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['saute'], tags: ['healthy', 'brunch'],
    desc: 'A thick, protein-rich crepe of rice and four lentils with red chili, ginger and curry leaves. No fermentation.',
    story: 'Adai with avial and jaggery is a classic Tamil combination; the mixed lentils make it more filling than dosa.',
    equip: ['Grinder', 'Tawa'],
    ing: [[100, 'g', 'raw rice'], [100, 'g', 'mixed dals (toor, chana, moong, urad)'], [4, '', 'dried red chilies'], [1, 'tbsp', 'ginger'], [1, 'pinch', 'asafoetida (hing)'], [10, 'leaf', 'curry leaves', 'chopped'], [1, '', 'onion', 'chopped'], [0.75, 'tsp', 'salt'], [3, 'tbsp', 'oil']],
    steps: [['Soak', '[[soak|Soak]] rice and dals together 3 hours.', 180], ['Grind', 'Grind coarsely with chilies, ginger and hing; add curry leaves, onion and salt.'], ['Cook', 'Spread thick on a hot tawa, make a hole in the centre, drizzle oil and cook 3 minutes per side.', 15]],
    tips: ['Coarse batter = crisp adai.'], mistakes: ['Thin spreading: it tears.'], vars: ['Add drumstick leaves.'], serve: 'Avial, jaggery and butter.' });

  X('Tamil Nadu', ['south-indian', 'home-style'], { id: 'kara-kuzhambu', name: 'Kara Kuzhambu', local: 'கார குழம்பு', emoji: '🍲', course: 'main', level: 1, prep: 15, cook: 25, serves: 4,
    taste: { sour: 4, spicy: 4, aromatic: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'weeknight'],
    desc: 'A fiery tamarind gravy with shallots and garlic, simmered in sesame oil. The spicy Chettinad-style kuzhambu.',
    story: '“Kara” means spicy. Without dal, it keeps for days, which made it popular in Chettinad homes.',
    equip: ['Kadai'],
    ing: [[3, 'tbsp', 'sesame oil'], [1, 'tsp', 'mustard seeds'], [0.5, 'tsp', 'fenugreek seeds'], [12, '', 'shallots', 'peeled'], [10, 'clove', 'garlic'], [10, 'leaf', 'curry leaves'], [1, '', 'tomato', 'chopped'], [2, 'tbsp', 'sambar powder'], [3, 'tbsp', 'tamarind paste'], [500, 'ml', 'water'], [1, 'tsp', 'jaggery'], [1, 'tsp', 'salt']],
    steps: [['Fry', 'Crackle mustard and fenugreek in sesame oil, fry shallots and garlic until golden, add curry leaves and tomato.', 8], ['Simmer', 'Add sambar powder, tamarind, water, jaggery and salt; [[simmer]] 15 minutes until thick and oil floats.', 15]],
    tips: ['Gingelly (sesame) oil is essential.'], mistakes: ['Thin gravy: simmer longer.'], vars: ['Add brinjal or drumstick.'], serve: 'Rice and appalam.' });

  X('Tamil Nadu', ['south-indian', 'sweets'], { id: 'sakkarai-pongal', name: 'Sakkarai Pongal', local: 'சர்க்கரை பொங்கல்', emoji: '🍯', course: 'dessert', level: 1, prep: 5, cook: 35, serves: 4,
    taste: { sweet: 5, rich: 4, aromatic: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive'],
    desc: 'Rice and moong dal cooked soft with jaggery, ghee, cardamom and cashews. The Pongal harvest sweet.',
    story: 'On the Pongal festival, the pot is boiled over outdoors; the overflowing milk and rice symbolises abundance.',
    equip: ['Heavy pot'],
    ing: [[150, 'g', 'raw rice'], [50, 'g', 'yellow moong dal', 'dry-roasted'], [700, 'ml', 'water'], [200, 'ml', 'milk'], [250, 'g', 'jaggery', 'melted, strained'], [5, 'tbsp', 'ghee'], [15, '', 'cashews'], [1, 'tbsp', 'raisins'], [0.5, 'tsp', 'cardamom powder'], [1, 'pinch', 'saffron']],
    steps: [['Cook', 'Cook the rice and dal in water and milk until very soft; mash lightly.', 25], ['Jaggery', 'Add the jaggery syrup and cook 5 minutes; stir in ghee, cardamom and saffron.', 6], ['Garnish', 'Fry cashews and raisins in ghee and pour over.', 2]],
    tips: ['Be generous with ghee.'], mistakes: ['Adding jaggery to undercooked rice: it stays hard.'], vars: ['Temple style with edible camphor.'], serve: 'Warm.' });

  X('Kerala', ['south-indian', 'home-style'], { id: 'olan', name: 'Olan', local: 'ഓലൻ', emoji: '🥥', course: 'side', level: 1, prep: 15, cook: 20, serves: 4,
    taste: { sweet: 2, savory: 3, rich: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'healthy'],
    desc: 'The mildest dish of the Onam sadya: ash gourd and black-eyed peas in coconut milk with green chili and coconut oil.',
    story: 'Olan is pale and gentle on purpose: on a banana-leaf sadya it balances the spicy, sour and sweet dishes.',
    equip: ['Pot'],
    ing: [[300, 'g', 'ash gourd', 'thin slices'], [60, 'g', 'black-eyed peas', 'cooked'], [3, '', 'green chilies', 'slit'], [200, 'ml', 'coconut milk', 'thin'], [150, 'ml', 'thick coconut milk'], [0.5, 'tsp', 'salt'], [1, 'tbsp', 'coconut oil'], [10, 'leaf', 'curry leaves']],
    steps: [['Cook', 'Cook the ash gourd and chilies in thin coconut milk with salt until tender.', 12], ['Finish', 'Add the peas and thick coconut milk, warm without boiling; drizzle coconut oil and curry leaves.', 3]],
    tips: ['No tadka: raw coconut oil on top.'], mistakes: ['Boiling thick coconut milk.'], vars: ['Pumpkin olan.'], serve: 'Rice in a sadya.' });

  X('Kerala', ['south-indian', 'home-style'], { id: 'erissery', name: 'Erissery', local: 'എരിശ്ശേരി', emoji: '🎃', course: 'side', level: 1, prep: 15, cook: 25, serves: 4,
    taste: { sweet: 3, savory: 3, aromatic: 4, spicy: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['festive', 'comfort'],
    desc: 'Pumpkin and red cowpeas cooked with a cumin-coconut paste and topped with coconut roasted dark in coconut oil.',
    story: 'Erissery is a sadya favourite; the dark-roasted coconut on top gives it a nutty, toasty finish.',
    equip: ['Pot', 'Pan'],
    ing: [[400, 'g', 'pumpkin', 'cubed'], [80, 'g', 'red cowpeas', 'cooked'], [0.5, 'tsp', 'ground turmeric'], [0.5, 'tsp', 'kashmiri chili powder'], [0.75, 'tsp', 'salt'], [80, 'g', 'grated coconut'], [0.5, 'tsp', 'cumin seeds'], [2, '', 'green chilies'], [2, 'tbsp', 'coconut oil'], [1, 'tsp', 'mustard seeds'], [10, 'leaf', 'curry leaves']],
    steps: [['Cook', 'Cook pumpkin with turmeric, chili and salt until soft; mash a little and add cowpeas.', 12], ['Paste', 'Grind half the coconut with cumin and chilies; stir in and simmer 3 minutes.', 3], ['Roast and top', 'Roast the rest of the coconut in coconut oil with mustard and curry leaves until deep brown; pour over.', 5]],
    tips: ['Roast the topping coconut dark brown.'], mistakes: ['Burnt coconut: bitter.'], vars: ['Raw banana and yam erissery.'], serve: 'Rice and sambar.' });

  X('Kerala', ['south-indian', 'sweets'], { id: 'ada-pradhaman', name: 'Ada Pradhaman', local: 'അട പ്രഥമൻ', emoji: '🍮', course: 'dessert', level: 2, prep: 10, cook: 40, serves: 6,
    taste: { sweet: 5, rich: 5, aromatic: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive'],
    desc: 'Rice flakes (ada) simmered in jaggery and coconut milk, with cardamom, dry ginger and ghee-fried coconut.',
    story: 'The king of Kerala payasams, served last on the Onam sadya, often eaten with a crushed banana and pappadam.',
    equip: ['Heavy pot', 'Pan'],
    ing: [[100, 'g', 'rice ada (rice flakes)', 'boiled 10 min'], [250, 'g', 'jaggery', 'melted, strained'], [500, 'ml', 'coconut milk', 'thin'], [200, 'ml', 'thick coconut milk'], [0.5, 'tsp', 'cardamom powder'], [0.25, 'tsp', 'dry ginger powder'], [2, 'tbsp', 'coconut oil'], [2, 'tbsp', 'fresh coconut', 'slivers'], [15, '', 'cashews']],
    steps: [['Cook', 'Cook the boiled ada in jaggery until thick, 8 minutes.', 8], ['Coconut milk', 'Add thin coconut milk and [[simmer]] 10 minutes; add thick milk, cardamom and dry ginger and warm through.', 12], ['Garnish', 'Fry coconut and cashews in coconut oil (ghee if not vegan) and add.', 3]],
    tips: ['Thick milk goes in last, off the boil.'], mistakes: ['Boiling thick milk: it splits.'], vars: ['Palada pradhaman with milk.'], serve: 'Warm, with banana and pappadam.' });

  /* ======================= UTTAR PRADESH, DELHI, HIMALAYAS ======================= */
  X('Varanasi', ST, { id: 'tamatar-chaat', name: 'Banarasi Tamatar Chaat', local: 'टमाटर चाट', emoji: '🍅', course: 'snack', level: 1, prep: 10, cook: 15, serves: 3,
    taste: { sour: 4, sweet: 3, spicy: 3, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['street-food'],
    desc: 'Spiced mashed tomato and potato cooked in ghee, served hot in clay cups with sugar syrup, namkeen and cilantro.',
    story: 'Found only in Varanasi’s lanes, this warm chaat is mashed on a big iron tawa and served in kulhads.',
    equip: ['Kadai', 'Clay cups'],
    ing: [[2, 'tbsp', 'ghee'], [1, 'tsp', 'cumin seeds'], [1, 'tbsp', 'ginger', 'grated'], [2, '', 'green chilies'], [5, '', 'tomatoes', 'chopped'], [2, '', 'potatoes', 'boiled, mashed'], [1, 'tsp', 'chaat masala'], [0.5, 'tsp', 'kashmiri chili powder'], [0.5, 'tsp', 'salt'], [2, 'tbsp', 'sugar', 'made into a little syrup'], [3, 'tbsp', 'sev'], [2, 'tbsp', 'cilantro']],
    steps: [['Cook', 'Fry cumin, ginger and chilies in ghee; add tomatoes and cook until mushy, then potatoes and spices; mash well.', 12], ['Serve', 'Spoon into cups, drizzle sugar syrup and top with sev and cilantro.']],
    tips: ['Mash on the pan for the right texture.'], mistakes: ['Underripe tomatoes.'], vars: ['Add a little cashew paste.'], serve: 'Hot, in kulhads.' });

  X('Varanasi', SW, { id: 'malaiyyo', name: 'Malaiyyo', local: 'मलइयो', emoji: '☁️', course: 'dessert', level: 3, prep: 20, cook: 20, rest: 600, serves: 6,
    taste: { sweet: 3, rich: 3, aromatic: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['winter', 'impress'],
    desc: 'A cloud-light milk foam left under winter dew overnight and whipped with saffron, cardamom and pistachios.',
    story: 'Varanasi’s winter-only sweet: milk is left outdoors overnight so dew settles on it, then churned into an airy foam at dawn.',
    equip: ['Wide pot', 'Whisk or churner'],
    ing: [[1, 'l', 'full-fat milk'], [80, 'g', 'powdered sugar'], [1, 'pinch', 'saffron'], [0.5, 'tsp', 'cardamom powder'], [100, 'ml', 'heavy cream', 'chilled'], [2, 'tbsp', 'pistachios', 'chopped']],
    steps: [['Boil and chill', 'Boil the milk, cool and chill overnight (traditionally outdoors on a winter night).', 600], ['Whip', 'Add cream, sugar, saffron and cardamom and whisk vigorously until a thick foam rises; spoon off the foam into cups.', 15], ['Serve', 'Top with pistachios and eat immediately.']],
    tips: ['Very cold milk foams best.'], mistakes: ['Warm milk won’t hold foam.'], vars: ['Lucknow’s makhan malai and Delhi’s daulat ki chaat are the same sweet.'], serve: 'Immediately, at dawn in winter.' });

  X('Himachal Pradesh', H, { id: 'himachali-madra', name: 'Chana Madra', local: 'मदरा', emoji: '🫘', course: 'main', level: 2, prep: 10, cook: 30, serves: 4,
    taste: { rich: 4, aromatic: 5, sour: 2 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['festive', 'comfort'],
    desc: 'Chickpeas in a yogurt gravy slow-cooked in ghee with whole spices, a dish of Himachal’s festive dham feast.',
    story: 'The Himachali dham is cooked by hereditary cooks (botis) in big copper pots; madra is its creamy centrepiece.',
    equip: ['Heavy pot'],
    ing: [[2, 'can', 'chickpeas', 'drained'], [300, 'g', 'yogurt', 'whisked'], [3, 'tbsp', 'ghee'], [1, 'tsp', 'cumin seeds'], [4, '', 'whole cloves'], [1, 'piece', 'cinnamon stick'], [3, '', 'green cardamom pods'], [1, '', 'black cardamom'], [1, 'pinch', 'asafoetida (hing)'], [1, 'tsp', 'ground coriander'], [0.5, 'tsp', 'ground turmeric'], [0.5, 'tsp', 'garam masala'], [1, 'tsp', 'salt'], [150, 'ml', 'water'], [1, 'tbsp', 'raisins']],
    steps: [['Spices', 'Fry the whole spices and hing in ghee ([[bloom]]), add chickpeas and ground spices and fry 3 minutes.', 4], ['Yogurt', 'Add the yogurt slowly on low heat, stirring until it comes to a simmer.', 5, 'Constant stirring stops the yogurt splitting.'], ['Simmer', 'Add water, salt and raisins; [[simmer]] 15 minutes until thick and ghee rises.', 15]],
    tips: ['Lots of ghee is traditional.'], mistakes: ['High heat: curdled yogurt.'], vars: ['Rajma madra or vegetable madra.'], serve: 'Rice, as part of a dham.' });

  X('Himachal Pradesh', H, { id: 'siddu', name: 'Siddu', local: 'सिड्डू', emoji: '🥟', course: 'breakfast', level: 3, prep: 30, cook: 25, rest: 120, serves: 4,
    taste: { savory: 4, rich: 3, aromatic: 3 }, diet: ['vegetarian', 'high-protein'], methods: ['steam'], tags: ['winter', 'comfort'],
    desc: 'Soft steamed yeasted wheat buns stuffed with walnut, poppy seed and green chili paste, eaten with ghee.',
    story: 'A winter staple of the Kullu and Shimla hills, steamed in big batches and served dripping with desi ghee.',
    equip: ['Steamer', 'Bowl'],
    ing: [[300, 'g', 'whole wheat flour (atta)'], [1, 'tsp', 'instant yeast'], [1, 'tsp', 'sugar'], [180, 'ml', 'warm water'], [0.5, 'tsp', 'salt'], '#Filling', [80, 'g', 'walnuts'], [2, 'tbsp', 'poppy seeds', 'soaked'], [2, '', 'green chilies'], [1, '', 'onion', 'chopped'], [2, 'tbsp', 'cilantro'], [0.5, 'tsp', 'salt'], [3, 'tbsp', 'ghee', 'to serve']],
    steps: [['Dough', '[[knead|Knead]] the atta, yeast, sugar, salt and water into a soft dough; [[proof]] 2 hours.', 120], ['Filling', 'Grind walnuts, poppy seeds and chilies coarsely; mix with onion, cilantro and salt.'], ['Fill and steam', 'Roll ovals, fill, seal and rest 10 minutes; [[steam]] 20 minutes.', 20]],
    tips: ['Serve straight from the steamer with ghee.'], mistakes: ['Under-proofed dough: dense siddu.'], vars: ['Sweet siddu with jaggery and dry fruit.'], serve: 'Ghee and green chutney.' });

  X('Uttarakhand', H, { id: 'kafuli', name: 'Kafuli', local: 'काफुली', emoji: '🥬', course: 'main', level: 1, prep: 15, cook: 20, serves: 4,
    taste: { savory: 4, herby: 4, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['healthy', 'winter'],
    desc: 'A thick Garhwali stew of spinach and fenugreek greens thickened with rice paste and cooked in an iron pot.',
    story: 'From the Garhwal hills of Uttarakhand, cooked in an iron kadai which turns it dark green and adds iron.',
    equip: ['Iron kadai', 'Blender'],
    ing: [[400, 'g', 'spinach'], [1, 'bunch', 'methi leaves'], [2, '', 'green chilies'], [1, 'tbsp', 'ginger'], [2, 'tbsp', 'rice', 'soaked, ground to paste'], [2, 'tbsp', 'mustard oil'], [1, 'tsp', 'cumin seeds'], [1, 'pinch', 'asafoetida (hing)'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'ground coriander'], [0.75, 'tsp', 'salt'], [250, 'ml', 'water']],
    steps: [['Greens', '[[blanch|Blanch]] the greens and blend coarsely with chilies and ginger.', 4], ['Cook', 'Crackle cumin and hing in mustard oil, add the greens, spices, salt and water; [[simmer]] 8 minutes.', 8], ['Thicken', 'Stir in the rice paste and cook until thick.', 5]],
    tips: ['An iron pot gives the authentic colour.'], mistakes: ['Over-blending: lose the texture.'], vars: ['Use mustard greens.'], serve: 'Rice or mandua (finger-millet) roti.' });

  X('Uttarakhand', H, { id: 'aloo-ke-gutke', name: 'Aloo ke Gutke', local: 'आलू के गुटके', emoji: '🥔', course: 'side', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { savory: 4, spicy: 3, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['quick', 'budget'],
    desc: 'Kumaoni spiced potatoes fried with jakhiya (wild mustard) seeds, red chili and cilantro.',
    story: 'A Kumaoni hill snack eaten with tea, flavoured with jakhiya, a crunchy local seed.',
    equip: ['Iron kadai'],
    ing: [[500, 'g', 'potatoes', 'boiled, cubed'], [2, 'tbsp', 'mustard oil'], [1, 'tsp', 'jakhiya or cumin seeds'], [3, '', 'dried red chilies'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'ground coriander'], [0.75, 'tsp', 'salt'], [2, 'tbsp', 'cilantro']],
    steps: [['Tadka', 'Crackle jakhiya and chilies in hot mustard oil ([[tadka]]).', 1], ['Fry', 'Add potatoes, spices and salt and fry until crisp at the edges.', 10]],
    tips: ['Cold boiled potatoes crisp best.'], mistakes: ['Burning the seeds.'], vars: ['Jeera aloo is the plains cousin.'], serve: 'Tea or puris.' });

  /* ======================= BENGAL & KOLKATA STREET ======================= */
  X('Kolkata', ST, { id: 'ghugni', name: 'Ghugni', local: 'ঘুগনি', emoji: '🫘', course: 'snack', level: 1, prep: 10, cook: 40, rest: 480, serves: 4,
    taste: { savory: 4, spicy: 3, sour: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['street-food', 'comfort'],
    desc: 'Dried yellow peas cooked with ginger, cumin and garam masala, topped with onion, chili, tamarind and roasted cumin.',
    story: 'Bengal’s favourite evening snack, sold from big brass pots on Kolkata streets and made at home for Bijoya Dashami.',
    equip: ['Pressure cooker', 'Kadai'],
    ing: [[200, 'g', 'dried white peas (safed vatana)', 'soaked overnight'], [700, 'ml', 'water'], [1, 'tsp', 'salt'], [2, 'tbsp', 'mustard oil'], [1, 'tsp', 'cumin seeds'], [2, '', 'bay leaves'], [1, '', 'onion', 'chopped'], [1, 'tbsp', 'ginger', 'paste'], [1, '', 'tomato'], [1, 'tsp', 'ground cumin'], [1, 'tsp', 'kashmiri chili powder'], [0.5, 'tsp', 'ground turmeric'], [0.5, 'tsp', 'garam masala'], [1, 'tbsp', 'tamarind chutney'], [1, 'tsp', 'roasted cumin powder']],
    steps: [['Cook', 'Pressure-cook the peas with water and salt for 4 whistles.', 15], ['Masala', 'Fry cumin and bay leaves, then onion, ginger, tomato and spices ([[bhuna]]).', 10], ['Simmer', 'Add peas and [[simmer]] 10 minutes; top with onion, chili, tamarind and roasted cumin.', 10]],
    tips: ['Mash a few peas to thicken.'], mistakes: ['Under-soaked peas stay hard.'], vars: ['Add small coconut pieces.'], serve: 'With puri or on its own.' });

  X('Kolkata', ST, { id: 'kolkata-kathi-roll', name: 'Paneer Kathi Roll', local: 'কাঠি রোল', emoji: '🌯', course: 'snack', level: 2, prep: 20, cook: 20, serves: 4,
    taste: { spicy: 3, savory: 4, sour: 3 }, diet: ['vegetarian', 'high-protein'], methods: ['saute', 'grill'], tags: ['street-food', 'party'],
    desc: 'A flaky paratha crisped on the tawa and rolled around charred paneer tikka, onions, green chili, chutney and lime.',
    story: 'Kolkata’s Nizam’s restaurant invented the kathi roll in the 1930s, rolling kebabs in paratha for customers in a hurry.',
    equip: ['Tawa'],
    ing: [[300, 'g', 'paneer', 'cubed'], [100, 'g', 'thick yogurt'], [1, 'tsp', 'ginger-garlic paste'], [1, 'tsp', 'kashmiri chili powder'], [0.5, 'tsp', 'garam masala'], [0.5, 'tsp', 'salt'], [4, '', 'rotis or parathas'], [1, '', 'onion', 'sliced'], [2, '', 'green chilies'], [1, '', 'lemon'], [2, 'tbsp', 'green chutney'], [2, 'tbsp', 'oil']],
    steps: [['Marinate', '[[marinate|Marinate]] the paneer in yogurt and spices 15 minutes.', 15], ['Cook', 'Sear the paneer on a hot tawa until charred ([[char]]).', 6], ['Roll', 'Crisp the paratha in oil, add paneer, onion, chili, chutney and lemon; roll in paper.', 8]],
    tips: ['Crisp the paratha well.'], mistakes: ['Soggy fillings.'], vars: ['Egg roll: an egg cooked onto the paratha (not pure veg).'], serve: 'Hot, wrapped in paper.' });

  X('West Bengal', H, { id: 'jhinge-posto', name: 'Jhinge Posto', local: 'ঝিঙে পোস্ত', emoji: '🥒', course: 'side', level: 1, prep: 10, cook: 15, serves: 3,
    taste: { savory: 3, rich: 3, sweet: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['summer', 'healthy'],
    desc: 'Ridge gourd cooked in a creamy white poppy-seed paste with green chilies and mustard oil.',
    story: 'Posto (poppy seed) dishes are the comfort food of western Bengal; ridge gourd posto is the summer favourite.',
    equip: ['Kadai', 'Grinder'],
    ing: [[400, 'g', 'ridge gourd', 'peeled, cubed'], [3, 'tbsp', 'white poppy seeds (posto)', 'soaked 20 min'], [2, '', 'green chilies'], [1, 'tbsp', 'mustard oil'], [0.5, 'tsp', 'nigella seeds'], [0.25, 'tsp', 'ground turmeric'], [0.5, 'tsp', 'salt'], [0.5, 'tsp', 'sugar']],
    steps: [['Paste', 'Grind the poppy seeds with chilies and a little water to a smooth paste.'], ['Cook', 'Crackle nigella in mustard oil, add gourd, turmeric and salt and cook covered until soft (it releases water).', 8], ['Posto', 'Add the paste and sugar and cook until creamy and dry.', 4]],
    tips: ['A drizzle of raw mustard oil at the end.'], mistakes: ['Grainy paste: grind finer.'], vars: ['Aloo posto with potatoes.'], serve: 'Rice and dal.' });
})();
