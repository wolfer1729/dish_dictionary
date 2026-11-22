/* Andhra, Telangana & Hyderabad, plus more regional Indian classics (breads, sweets, snacks, drinks).
   Original recipes written for Dish Dictionary. */
'use strict';
(function () {
  const X = (area, styles, d) => DD.add(Object.assign({ country: 'India', flag: '🇮🇳', region: 'South Asia', area, styles }, d));
  const AP = 'Andhra Pradesh', TG = 'Telangana', HY = 'Hyderabad';
  const SH = ['south-indian', 'home-style'];
  const SW = ['sweets'];

  /* ======================= ANDHRA & TELANGANA: DALS, RASAMS, CURRIES ======================= */
  X(AP, SH, { id: 'ulava-charu', name: 'Ulava Charu (Horse Gram Soup)', local: 'ఉలవ చారు', emoji: '🥣', course: 'soup', level: 2, prep: 10, cook: 60, rest: 480, serves: 4,
    taste: { sour: 3, spicy: 3, savory: 4, aromatic: 4 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['comfort', 'winter', 'healthy'],
    desc: 'A dark, thick, tangy soup made from horse gram stock with tamarind and spices. Andhra’s most prized rasam.',
    story: 'Once a poor man’s food, ulava charu is now served at Andhra weddings and five-star hotels, often with a spoon of fresh cream.',
    equip: ['Pressure cooker', 'Strainer', 'Pot'],
    ing: [[150, 'g', 'horse gram (ulavalu)', 'soaked overnight'], [1.2, 'l', 'water'], [2, 'tbsp', 'tamarind paste'], [1, '', 'onion', 'chopped'], [3, '', 'green chilies'], [1, 'tsp', 'ground cumin'], [1, 'tsp', 'ground coriander'], [1, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'jaggery'], [1, 'tsp', 'salt'], [1, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [10, 'leaf', 'curry leaves'], [4, 'clove', 'garlic', 'crushed']],
    steps: [['Stock', 'Pressure-cook the horse gram with the water for 8 whistles. Strain, keeping the dark stock (use the grains for gugillu).', 30], ['Simmer', 'Boil the stock with tamarind, onion, chilies, spices, jaggery and salt, and [[reduce]] for 25 minutes until it thickens.', 25, 'It should coat a spoon.'], ['Tadka', 'Finish with a [[tadka]] of mustard, garlic and curry leaves.', 1]],
    tips: ['A spoon of cream on top is the restaurant style.'], mistakes: ['Not reducing enough: thin, watery charu.'], vars: ['Tamil kollu rasam is thinner.'], serve: 'Hot rice and ghee.' });

  X(AP, SH, { id: 'ulava-guggillu', name: 'Horse Gram Sundal (Ulava Guggillu)', local: 'ఉలవ గుగ్గిళ్ళు', emoji: '🫘', course: 'snack', level: 1, prep: 5, cook: 8, serves: 3,
    taste: { savory: 4, spicy: 2, herby: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['saute'], tags: ['healthy', 'quick', 'festive'],
    desc: 'Boiled horse gram tossed with mustard, curry leaves, chili and grated coconut. A protein-packed snack.',
    story: 'Guggillu or sundal is made with any boiled legume; it is offered during Navratri and sold on beaches.',
    equip: ['Pan'],
    ing: [[250, 'g', 'cooked horse gram'], [1, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'urad dal'], [2, '', 'green chilies'], [10, 'leaf', 'curry leaves'], [3, 'tbsp', 'grated coconut'], [0.5, 'tsp', 'salt'], [1, 'tsp', 'lemon juice']],
    steps: [['Tadka', 'Make a [[tadka]] of mustard, urad dal, chilies and curry leaves.', 1], ['Toss', 'Add the horse gram and salt, toss 3 minutes, then coconut and lemon.', 3]],
    tips: ['Any boiled chickpeas or beans work.'], mistakes: ['Mushy legumes.'], vars: ['Chana sundal for Navratri.'], serve: 'Warm, as a snack.' });

  X(TG, SH, { id: 'pacchi-pulusu', name: 'Pacchi Pulusu (Raw Tamarind Rasam)', local: 'పచ్చి పులుసు', emoji: '🍵', course: 'soup', level: 1, prep: 10, cook: 3, serves: 4,
    taste: { sour: 4, spicy: 3, sweet: 2, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'quick', 'budget'],
    desc: 'A no-cook Telangana rasam of tamarind water, raw onion, green chili and jaggery, finished with a tadka.',
    story: '“Pacchi” means raw: nothing is boiled. It is a summer dish in Telangana, eaten with hot rice and dal.',
    equip: ['Bowl', 'Small pan'],
    ing: [[2, 'tbsp', 'tamarind paste'], [600, 'ml', 'cold water'], [1, '', 'onion', 'very finely chopped'], [3, '', 'green chilies', 'crushed'], [1, 'tbsp', 'jaggery'], [0.75, 'tsp', 'salt'], [2, 'tbsp', 'cilantro'], [1, 'tsp', 'oil'], [0.5, 'tsp', 'mustard seeds'], [0.5, 'tsp', 'cumin seeds'], [2, '', 'dried red chilies'], [8, 'leaf', 'curry leaves']],
    steps: [['Mix', 'Mix the tamarind, water, onion, chilies, jaggery, salt and cilantro. Crush the onions with your hand.'], ['Tadka', 'Pour over a [[tadka]] of mustard, cumin, red chilies and curry leaves.', 1]],
    tips: ['Roast an onion over flame for a smoky version.'], mistakes: ['Too much tamarind: harsh.'], vars: ['Add a roasted, mashed brinjal.'], serve: 'Hot rice and pappu.' });

  X(AP, SH, { id: 'mamidikaya-pappu', name: 'Mamidikaya Pappu (Raw Mango Dal)', local: 'మామిడికాయ పప్పు', emoji: '🥭', course: 'main', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { sour: 4, spicy: 3, savory: 4 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['summer', 'weeknight', 'comfort'],
    desc: 'Toor dal cooked with sour raw mango, green chilies and a garlic tadka. Andhra’s summer dal.',
    story: 'When raw mangoes flood the markets in summer, every Telugu home cooks this tangy pappu with rice and ghee.',
    equip: ['Pressure cooker', 'Pan'],
    ing: [[150, 'g', 'toor dal'], [1, '', 'raw mango', 'peeled, cubed'], [4, '', 'green chilies', 'slit'], [0.5, 'tsp', 'ground turmeric'], [600, 'ml', 'water'], [1, 'tsp', 'salt'], [1, 'tbsp', 'ghee or oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'cumin seeds'], [5, 'clove', 'garlic', 'crushed'], [2, '', 'dried red chilies'], [10, 'leaf', 'curry leaves']],
    steps: [['Cook', 'Pressure-cook the dal, mango, chilies and turmeric with the water for 4 whistles.', 15], ['Mash', 'Mash with salt and simmer 3 minutes.', 3], ['Tadka', 'Finish with a garlicky [[tadka]].', 2]],
    tips: ['Taste the mango first: sourness varies.'], mistakes: ['Too sour: add a pinch of jaggery.'], vars: ['Tomato pappu or palak pappu.'], serve: 'Rice, ghee and papad.' });

  X(HY, ['home-style'], { id: 'khatti-dal', name: 'Hyderabadi Khatti Dal', local: 'کھٹی دال', emoji: '🥣', course: 'main', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { sour: 4, spicy: 3, aromatic: 4 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['weeknight', 'comfort'],
    desc: 'Sour toor dal with tamarind and a sizzling garlic-curry leaf-red chili tadka, the dal of Hyderabadi homes.',
    story: 'Khatti (sour) dal is served with plain rice and a dry fried dish in Hyderabadi households, a counterpoint to rich biryanis.',
    equip: ['Pressure cooker', 'Tadka pan'],
    ing: [[150, 'g', 'toor dal'], [700, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], [1, '', 'tomato'], [3, '', 'green chilies'], [2, 'tbsp', 'tamarind paste'], [1, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'salt'], [2, 'tbsp', 'oil'], [1, 'tsp', 'cumin seeds'], [1, 'tsp', 'mustard seeds'], [6, 'clove', 'garlic', 'sliced'], [4, '', 'dried red chilies'], [15, 'leaf', 'curry leaves']],
    steps: [['Cook', 'Pressure-cook dal, tomato, chilies and turmeric with the water; whisk smooth.', 15], ['Sour', 'Add tamarind, chili powder and salt and [[simmer]] 8 minutes.', 8], ['Tadka', 'Fry cumin, mustard, garlic, red chilies and plenty of curry leaves until the garlic is golden; pour over ([[tadka]]).', 2]],
    tips: ['Be generous with curry leaves.'], mistakes: ['Burnt garlic: bitter dal.'], vars: ['Add a few dried mango slices.'], serve: 'Rice and bagara baingan.' });

  X(AP, SH, { id: 'perugu-pachadi', name: 'Perugu Pachadi', local: 'పెరుగు పచ్చడి', emoji: '🥒', course: 'side', level: 1, prep: 10, cook: 2, serves: 4,
    taste: { sour: 2, savory: 3, spicy: 2, herby: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['quick', 'summer', 'healthy'],
    desc: 'Andhra yogurt chutney with grated cucumber or snake gourd, green chili, ginger and a mustard tadka.',
    story: 'Perugu pachadi is the cooling side of every Andhra meal; it can be made with cucumber, snake gourd, bottle gourd or even ash gourd.',
    equip: ['Bowl', 'Small pan'],
    ing: [[300, 'g', 'yogurt', 'whisked'], [1, '', 'cucumber', 'grated'], [1, '', 'green chili', 'chopped'], [5, 'g', 'ginger', 'grated'], [2, 'tbsp', 'cilantro'], [0.5, 'tsp', 'salt'], [1, 'tsp', 'oil'], [0.5, 'tsp', 'mustard seeds'], [0.5, 'tsp', 'urad dal'], [8, 'leaf', 'curry leaves'], [1, 'pinch', 'asafoetida (hing)']],
    steps: [['Mix', 'Mix the yogurt, cucumber, chili, ginger, cilantro and salt.'], ['Tadka', 'Pour over a [[tadka]] of mustard, urad dal, curry leaves and hing.', 1]],
    tips: ['Squeeze the cucumber if it’s very watery.'], mistakes: ['Salting long before serving: watery.'], vars: ['Dosakaya (yellow cucumber) or potlakaya (snake gourd) pachadi.'], serve: 'With rice and spicy curries.' });

  X(AP, SH, { id: 'gongura-pachadi', name: 'Gongura Pachadi', local: 'గోంగూర పచ్చడి', emoji: '🌿', course: 'sauce', level: 1, prep: 10, cook: 15, serves: 8,
    taste: { sour: 5, spicy: 4, savory: 3 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['make-ahead'],
    desc: 'A fiery, tangy chutney of sour sorrel (gongura) leaves, red chilies and garlic. Andhra’s pride.',
    story: 'Gongura is so loved in Andhra that it’s called the queen of the Telugu kitchen. Its leaves are naturally very sour.',
    equip: ['Pan', 'Grinder'],
    ing: [[200, 'g', 'gongura (sorrel) leaves', 'washed, dried'], [3, 'tbsp', 'sesame oil'], [12, '', 'dried red chilies'], [1, 'tbsp', 'coriander seeds'], [1, 'tsp', 'fenugreek seeds'], [6, 'clove', 'garlic'], [1, 'tsp', 'salt'], [1, 'tsp', 'mustard seeds'], [1, 'pinch', 'asafoetida (hing)']],
    steps: [['Roast', 'Fry the chilies, coriander and fenugreek in 1 tbsp oil; then cook the gongura leaves in another tbsp until they melt, 6 minutes.', 10], ['Grind', 'Grind the spices with garlic and salt, then add the leaves and pulse coarsely.'], ['Tadka', 'Finish with a mustard-hing [[tadka]].', 1]],
    tips: ['Keeps a week in the fridge.'], mistakes: ['Wet leaves: shorter shelf life.'], vars: ['Gongura pappu: with dal.'], serve: 'Hot rice and ghee.' });

  X(TG, SH, { id: 'aloo-vellulli-karam', name: 'Alugadda Ellipaya Karam (Garlic Chili Potatoes)', local: 'ఆలుగడ్డ ఎల్లిపాయ కారం', emoji: '🥔', course: 'side', level: 1, prep: 10, cook: 20, serves: 4,
    taste: { spicy: 4, savory: 4, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['weeknight', 'budget', 'kids'],
    desc: 'Crisp potato cubes tossed in a coarse, fiery paste of garlic and red chili. Telangana home cooking.',
    story: 'Telangana food loves garlic and chili. This simple fry is packed into lunch boxes with rice and dal.',
    equip: ['Kadai', 'Mortar and pestle'],
    ing: [[500, 'g', 'potatoes', 'cubed'], [3, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [10, 'leaf', 'curry leaves'], [8, 'clove', 'garlic'], [1.5, 'tsp', 'kashmiri chili powder'], [0.5, 'tsp', 'cumin seeds'], [0.25, 'tsp', 'ground turmeric'], [1, 'tsp', 'salt']],
    steps: [['Paste', '[[pound|Pound]] the garlic, cumin, chili powder and salt coarsely.'], ['Fry', 'Crackle mustard and curry leaves in the oil, add potatoes and turmeric, cover and cook 10 minutes.', 10], ['Karam', 'Add the paste and fry uncovered until crisp, 6 minutes.', 6]],
    tips: ['Don’t stir too often: let them crisp.'], mistakes: ['Burning the garlic paste.'], vars: ['Make it with ivy gourd or brinjal.'], serve: 'Rice, rasam or pappu.' });

  X(AP, SH, { id: 'dondakaya-vepudu', name: 'Dondakaya Vepudu (Ivy Gourd Fry)', local: 'దొండకాయ వేపుడు', emoji: '🥒', course: 'side', level: 1, prep: 15, cook: 20, serves: 4,
    taste: { savory: 4, spicy: 3 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['weeknight', 'healthy'],
    desc: 'Thinly sliced ivy gourd fried until crisp with peanuts, chili and garlic.',
    story: 'Ivy gourd (tindora) is a staple vegetable in Andhra. Cut into rounds and fried slowly, it turns nutty and crunchy.',
    equip: ['Wide pan'],
    ing: [[400, 'g', 'ivy gourd (dondakaya)', 'thin rounds'], [3, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'chana dal'], [10, 'leaf', 'curry leaves'], [3, 'tbsp', 'peanuts', 'crushed'], [1, 'tsp', 'kashmiri chili powder'], [4, 'clove', 'garlic', 'crushed'], [0.25, 'tsp', 'ground turmeric'], [0.75, 'tsp', 'salt']],
    steps: [['Tadka', 'Fry mustard, chana dal and curry leaves ([[tadka]]).', 1], ['Fry slowly', 'Add the ivy gourd and turmeric and cook uncovered on medium, stirring occasionally, until crisp and browned, 15 minutes ([[saute]]).', 15], ['Finish', 'Add the peanuts, garlic, chili and salt and fry 2 minutes.', 2]],
    tips: ['Add salt at the end so it crisps.'], mistakes: ['Covering the pan: soft, soggy fry.'], vars: ['Dondakaya with coconut (kobbari kura).'], serve: 'Rice and dal.' });

  X(TG, SH, { id: 'stuffed-kakarakaya', name: 'Stuffed Kakarakaya (Bitter Gourd)', local: 'కాకరకాయ ఉల్లికారం', emoji: '🥒', course: 'side', level: 2, prep: 20, cook: 25, serves: 4,
    taste: { bitter: 3, spicy: 3, sweet: 2, sour: 2 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['healthy'],
    desc: 'Small bitter gourds stuffed with an onion, tamarind and jaggery masala, pan-fried until crisp.',
    story: 'Telugu cooks tame the bitterness of kakarakaya with tamarind and jaggery. Even bitter-gourd haters often like this one.',
    equip: ['Heavy pan with lid'],
    ing: [[6, '', 'bitter gourd', 'small, slit and deseeded'], [1, 'tsp', 'salt'], [2, '', 'onions', 'ground to paste'], [1, 'tbsp', 'tamarind paste'], [1, 'tbsp', 'jaggery'], [1.5, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'ground coriander'], [4, 'tbsp', 'oil']],
    steps: [['De-bitter', 'Rub the gourds with salt and rest 20 minutes; squeeze and rinse.', 20], ['Stuff', 'Fry the onion paste in 1 tbsp oil until golden, add tamarind, jaggery and spices; cool and stuff the gourds.', 8], ['Fry', 'Cook in the remaining oil, covered on low for 10 minutes, then uncovered until crisp, turning often.', 15]],
    tips: ['Tie with thread so the stuffing stays in.'], mistakes: ['Skipping the salt soak: very bitter.'], vars: ['Bharwan karela (Punjab) with amchur and fennel.'], serve: 'Rice and dal.' });

  X(AP, SH, { id: 'salla-mirapakayalu', name: 'Salla Mirapakayalu (Buttermilk Chilies)', local: 'సల్ల మిరపకాయలు', emoji: '🌶️', course: 'sauce', level: 1, prep: 10, cook: 5, rest: 4320, serves: 20,
    taste: { spicy: 4, sour: 3, savory: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['make-ahead'],
    desc: 'Green chilies soaked in salted buttermilk and sun-dried for days, then fried crisp to eat with curd rice.',
    story: 'Every Telugu summer, chilies are soaked and dried on rooftops. Fried, they become a crunchy, tangy side for curd rice.',
    equip: ['Jar', 'Tray', 'Pan'],
    ing: [[200, 'g', 'green chilies', 'slit'], [300, 'ml', 'buttermilk', 'sour'], [1.5, 'tbsp', 'salt'], [3, 'tbsp', 'oil', 'to fry']],
    steps: [['Soak', 'Soak the chilies in salted buttermilk overnight.'], ['Sun-dry', 'Dry in the sun by day and return to the buttermilk at night, for 3–4 days, until dry and pale. Store airtight.'], ['Fry', 'Fry a few in hot oil until dark and crisp just before eating.', 1]],
    tips: ['A dehydrator at {{60C}} works if there’s no sun.'], mistakes: ['Not fully dry: they spoil.'], vars: ['Dried yogurt chilies (mor milagai) in Tamil Nadu.'], serve: 'Curd rice or pappu-rice.', store: 'Dried, a year in a jar.' });

  /* ======================= SNACKS & TIFFIN ======================= */
  X(AP, SH, { id: 'perugu-vada', name: 'Perugu Vada (Andhra Dahi Vada)', local: 'పెరుగు వడ', emoji: '⚪', course: 'snack', level: 2, prep: 20, cook: 20, rest: 240, serves: 4,
    taste: { sour: 2, savory: 3, spicy: 2, herby: 3 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['deep-fry'], tags: ['festive', 'summer', 'party'],
    desc: 'Soft urad dal vadas soaked in tempered, seasoned yogurt with ginger, chili and coconut.',
    story: 'The South Indian dahi vada: the yogurt is tempered with mustard and curry leaves rather than topped with sweet chutney as in the north.',
    equip: ['Grinder', 'Kadai', 'Bowl'],
    ing: [[200, 'g', 'urad dal', 'soaked 4 hours'], [0.5, 'tsp', 'salt'], [1, 'l', 'oil', 'for frying'], [500, 'g', 'yogurt', 'whisked'], [150, 'ml', 'water'], [1, 'tsp', 'sugar'], [0.75, 'tsp', 'salt'], [1, 'tsp', 'ginger', 'grated'], [2, '', 'green chilies'], [2, 'tbsp', 'grated coconut'], [1, 'tsp', 'oil'], [0.5, 'tsp', 'mustard seeds'], [10, 'leaf', 'curry leaves'], [2, 'tbsp', 'cilantro']],
    steps: [['Batter', 'Grind the dal with minimal water to a fluffy batter, add salt and beat 2 minutes.'], ['Fry', 'Shape vadas with wet hands and [[deep-fry]] until golden.', 15], ['Soak', 'Drop the hot vadas into warm water for 5 minutes, squeeze gently.', 5], ['Yogurt', 'Mix the yogurt with water, sugar, salt, ginger, chilies and coconut; add a mustard-curry leaf [[tadka]] and the vadas. Chill 1 hour.', 60]],
    tips: ['Soaking in warm water makes them sponge up the yogurt.'], mistakes: ['Watery batter: flat vadas.'], vars: ['North Indian dahi bhalla with sweet chutney.'], serve: 'Chilled, with cilantro.' });

  X(AP, SH, { id: 'alasanda-vada', name: 'Alasanda Vada (Black-Eyed Pea Fritters)', local: 'అలసంద వడ', emoji: '🟤', course: 'snack', level: 1, prep: 15, cook: 15, rest: 240, serves: 4,
    taste: { savory: 4, spicy: 3, herby: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['deep-fry'], tags: ['rainy-day', 'festive'],
    desc: 'Crunchy fritters of soaked black-eyed peas with onion, ginger and chili.',
    story: 'Made for Sankranti in Andhra. Black-eyed peas (bobbarlu) give a lighter, nuttier vada than chana dal.',
    equip: ['Grinder', 'Kadai'],
    ing: [[200, 'g', 'black-eyed peas (alasandalu)', 'soaked 4 hours'], [1, '', 'onion', 'finely chopped'], [2, '', 'green chilies'], [1, 'tbsp', 'ginger'], [10, 'leaf', 'curry leaves'], [2, 'tbsp', 'cilantro'], [0.5, 'tsp', 'cumin seeds'], [0.75, 'tsp', 'salt'], [1, 'l', 'oil', 'for frying']],
    steps: [['Grind', 'Grind the drained peas with chilies, ginger and cumin coarsely without water.'], ['Mix', 'Stir in the onion, curry leaves, cilantro and salt.'], ['Fry', 'Flatten into discs and [[deep-fry]] on medium until crisp and golden.', 15]],
    tips: ['Coarse batter = crunchy vadas.'], mistakes: ['Adding water: they soak up oil.'], vars: ['Akara (Nigeria) is the same idea, whipped and round.'], serve: 'Coconut chutney.' });

  X(TG, SH, { id: 'makka-garelu', name: 'Makka Garelu (Fresh Corn Vadas)', local: 'మక్క గారెలు', emoji: '🌽', course: 'snack', level: 1, prep: 15, cook: 15, serves: 4,
    taste: { sweet: 3, savory: 4, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['deep-fry'], tags: ['rainy-day', 'kids', 'street-food'],
    desc: 'Sweet, crunchy fritters of freshly ground corn with onion, chili and cilantro.',
    story: 'In Telangana’s monsoon, fresh corn (makka) is ground on stone and fried into these golden vadas.',
    equip: ['Grinder', 'Kadai'],
    ing: [[400, 'g', 'sweet corn kernels', 'fresh'], [1, '', 'onion', 'chopped'], [2, '', 'green chilies'], [1, 'tsp', 'ginger'], [2, 'tbsp', 'rice flour'], [2, 'tbsp', 'cilantro'], [0.5, 'tsp', 'cumin seeds'], [0.75, 'tsp', 'salt'], [1, 'l', 'oil', 'for frying']],
    steps: [['Grind', 'Grind the corn with chilies and ginger coarsely, no water.'], ['Mix', 'Mix in onion, rice flour, cilantro, cumin and salt.'], ['Fry', 'Shape small discs and [[deep-fry]] until golden.', 12]],
    tips: ['Rice flour adds crunch and binds.'], mistakes: ['Frozen sweet corn is wetter: add more rice flour.'], vars: ['Makka kudumulu: steamed instead of fried.'], serve: 'Tomato ketchup or chutney.' });

  X(TG, SH, { id: 'chegodilu', name: 'Chegodilu', local: 'చెగోడీలు', emoji: '⭕', course: 'snack', level: 2, prep: 25, cook: 25, serves: 10,
    taste: { savory: 4, spicy: 2, aromatic: 2 }, diet: ['vegan', 'gluten-free'], methods: ['deep-fry'], tags: ['festive', 'make-ahead'],
    desc: 'Crunchy little rings of rice-flour dough with moong dal, sesame and chili, fried until crisp.',
    story: 'A Telangana tea-time snack made in big batches for Sankranti and stored in tins.',
    equip: ['Pot', 'Kadai'],
    ing: [[250, 'g', 'rice flour'], [300, 'ml', 'water'], [2, 'tbsp', 'oil'], [2, 'tbsp', 'yellow moong dal', 'soaked 30 min'], [1, 'tbsp', 'sesame seeds'], [1, 'tsp', 'ajwain'], [1, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'salt'], [1, 'l', 'oil', 'for frying']],
    steps: [['Dough', 'Boil the water with oil, salt, chili, ajwain and sesame; add the rice flour, stir and cover 10 minutes. [[knead|Knead]] with the drained dal into a smooth dough.', 12], ['Shape', 'Roll thin ropes and join into small rings.'], ['Fry', '[[deep-fry|Deep-fry]] on medium-low until the bubbling stops and they are crisp.', 20]],
    tips: ['Low heat so the inside cooks.'], mistakes: ['Cracked dough: add a little hot water.'], vars: ['Karnataka kodubale with coconut.'], serve: 'Tea.', store: 'Airtight 2 weeks.' });

  X(AP, SH, { id: 'punugulu', name: 'Punugulu', local: 'పునుగులు', emoji: '🟤', course: 'snack', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { savory: 4, sour: 2, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['deep-fry'], tags: ['street-food', 'rainy-day', 'quick'],
    desc: 'Crispy, airy fritters made from leftover idli-dosa batter with onion and chili. Vijayawada’s evening snack.',
    story: 'Street carts in Vijayawada and Guntur fry punugulu every evening, served with peanut chutney.',
    equip: ['Bowl', 'Kadai'],
    ing: [[400, 'ml', 'idli/dosa batter', 'sour'], [3, 'tbsp', 'rice flour'], [1, '', 'onion', 'finely chopped'], [2, '', 'green chilies'], [0.5, 'tsp', 'cumin seeds'], [0.25, 'tsp', 'salt'], [1, 'l', 'oil', 'for frying']],
    steps: [['Batter', 'Mix the batter with rice flour, onion, chilies, cumin and salt; it should be thick.'], ['Fry', 'Drop small spoonfuls into hot oil and [[deep-fry]] until golden and crisp.', 12]],
    tips: ['Sour batter makes them fluffier.'], mistakes: ['Thin batter: oily, flat fritters.'], vars: ['Mysore bonda uses maida and curd.'], serve: 'Peanut or allam chutney.' });

  X(AP, SH, { id: 'dibba-rotte', name: 'Dibba Rotte', local: 'దిబ్బ రొట్టె', emoji: '🫓', course: 'breakfast', level: 2, prep: 15, cook: 25, rest: 480, serves: 4,
    taste: { savory: 3, sour: 2 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['saute'], tags: ['brunch', 'comfort'],
    desc: 'A thick, crusty bread of urad dal and rice rava, cooked slowly in a heavy pan until golden on both sides.',
    story: '“Dibba” means mound: this thick, crisp-crusted bread is a Godavari-region breakfast, cut into wedges like cake.',
    equip: ['Grinder', 'Heavy cast-iron pan with lid'],
    ing: [[150, 'g', 'urad dal', 'soaked 4 hours'], [200, 'g', 'idli rava (rice rava)'], [1, 'tsp', 'salt'], [1, 'tsp', 'cumin seeds'], [2, '', 'green chilies', 'chopped'], [3, 'tbsp', 'ghee or oil']],
    steps: [['Batter', 'Grind the urad dal fluffy; mix with the rinsed rice rava, salt and [[ferment]] overnight.', 480], ['Flavour', 'Stir in cumin and chilies.'], ['Cook', 'Heat ghee in the pan, pour in a 3 cm thick layer, cover and cook on low 10 minutes until a crust forms; flip and cook 8 more.', 20, 'Low and slow: the crust is the point.']],
    tips: ['Use a heavy pan for an even crust.'], mistakes: ['High heat: burnt outside, raw inside.'], vars: ['Add grated carrot.'], serve: 'Coconut chutney or allam pachadi.' });

  /* ======================= RICE ======================= */
  X(AP, SH, { id: 'pulihora', name: 'Andhra Pulihora', local: 'పులిహోర', emoji: '🍚', course: 'main', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { sour: 5, spicy: 4, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['festive', 'make-ahead'],
    desc: 'Sharp, tangy tamarind rice with green chilies, peanuts and a mustard-chana dal tadka. No spice powder.',
    story: 'Pulihora is the temple prasadam of Andhra and Telangana. It is sharper and simpler than Karnataka’s puliyogare.',
    equip: ['Kadai'],
    ing: [[500, 'g', 'cooked rice', 'cooled'], [0.5, 'tsp', 'ground turmeric'], [3, 'tbsp', 'sesame oil'], [1, 'tsp', 'mustard seeds'], [1, 'tbsp', 'chana dal'], [1, 'tsp', 'urad dal'], [3, 'tbsp', 'peanuts'], [4, '', 'dried red chilies'], [5, '', 'green chilies', 'slit'], [15, 'leaf', 'curry leaves'], [1, 'pinch', 'asafoetida (hing)'], [3, 'tbsp', 'tamarind paste'], [1, 'tsp', 'salt']],
    steps: [['Rice', 'Spread the rice and mix in turmeric and 1 tbsp oil.'], ['Tadka', 'Fry mustard, dals, peanuts, chilies, curry leaves and hing in the oil ([[tadka]]); add tamarind and salt and cook until thick.', 6], ['Mix', 'Toss with the rice and rest 30 minutes.', 30]],
    tips: ['Best after an hour.'], mistakes: ['Hot sticky rice.'], vars: ['Mamidikaya pulihora with grated raw mango.'], serve: 'Curd rice and papad.' });

  X(HY, ['home-style'], { id: 'bagara-rice', name: 'Bagara Rice', local: 'بگھارا کھانا', emoji: '🍚', course: 'main', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { aromatic: 5, savory: 3, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'party'],
    desc: 'Hyderabadi spiced rice tempered with whole spices, onions, mint and green chilies.',
    story: '“Bagara” means tempered. This plain-looking but fragrant rice is served with dalcha, mirchi ka salan or korma at Hyderabadi feasts.',
    equip: ['Heavy pot with lid'],
    ing: [[300, 'g', 'basmati rice', 'soaked 20 min'], [3, 'tbsp', 'oil'], [1, 'tsp', 'shahi jeera or cumin seeds'], [1, 'piece', 'cinnamon stick'], [4, '', 'whole cloves'], [3, '', 'green cardamom pods'], [1, '', 'bay leaf'], [1, '', 'onion', 'thinly sliced'], [3, '', 'green chilies', 'slit'], [1, 'tbsp', 'ginger-garlic paste'], [1, 'handful', 'mint leaves'], [550, 'ml', 'water'], [1, 'tsp', 'salt']],
    steps: [['Bagar', 'Fry the whole spices in oil, then the onion until golden, the chilies, ginger-garlic paste and mint.', 8], ['Cook', 'Add water and salt, boil, add the rice, cover and cook on low 12 minutes ([[dum]]). Rest 10 minutes.', 22]],
    tips: ['Golden onions give the colour.'], mistakes: ['Too much water: sticky.'], vars: ['Add peas for matar bagara.'], serve: 'Mirchi ka salan or dalcha.' });

  X('Karnataka', SH, { id: 'capsicum-rice', name: 'Capsicum Rice', local: 'ಕ್ಯಾಪ್ಸಿಕಂ ಬಾತ್', emoji: '🫑', course: 'main', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { spicy: 3, aromatic: 4, savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['quick', 'weeknight', 'kids'],
    desc: 'Rice tossed with crunchy green peppers and a roasted coconut-spice powder. A lunch-box favourite.',
    story: 'Capsicum bath is a Bengaluru lunchbox staple, made with the same kind of spice powder as vangi bath.',
    equip: ['Kadai', 'Spice grinder'],
    ing: [[500, 'g', 'cooked rice', 'cooled'], [2, '', 'green bell peppers', 'diced'], [3, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'tbsp', 'peanuts'], [10, 'leaf', 'curry leaves'], [2, 'tbsp', 'vangi bath powder'], [1, 'tsp', 'tamarind paste'], [1, 'tsp', 'jaggery'], [1, 'tsp', 'salt'], [2, 'tbsp', 'cilantro']],
    steps: [['Peppers', 'Make a [[tadka]] of mustard, peanuts and curry leaves; [[saute]] the peppers 4 minutes so they stay crunchy.', 5], ['Masala', 'Add the powder, tamarind, jaggery and salt for 1 minute.', 1], ['Toss', 'Fold in the rice and cilantro.']],
    tips: ['Don’t overcook the capsicum.'], mistakes: ['Hot fresh rice: mushy.'], vars: ['Vangi bath with brinjal.'], serve: 'Raita and chips.' });

  X(TG, ['home-style', 'sweets'], { id: 'nuvvula-saddi', name: 'Nuvvula Saddi (Sesame Rice)', local: 'నువ్వుల సద్ది', emoji: '🍚', course: 'main', level: 1, prep: 10, cook: 10, serves: 4,
    taste: { savory: 4, rich: 3, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['festive', 'make-ahead'],
    desc: 'Rice tossed with a roasted sesame and chili powder and a tadka. One of the “saddulu” of the Bathukamma festival.',
    story: 'On the last day of Bathukamma, Telangana women prepare many “saddulu” (rice dishes): sesame, peanut, coconut, lemon, curd and tamarind.',
    equip: ['Pan', 'Spice grinder'],
    ing: [[500, 'g', 'cooked rice', 'cooled'], [4, 'tbsp', 'sesame seeds'], [4, '', 'dried red chilies'], [1, 'tsp', 'cumin seeds'], [2, 'tbsp', 'sesame oil'], [1, 'tsp', 'mustard seeds'], [1, 'tbsp', 'chana dal'], [10, 'leaf', 'curry leaves'], [1, 'tsp', 'salt']],
    steps: [['Powder', 'Dry-[[toast]] the sesame, chilies and cumin; grind to a powder.', 4], ['Tadka', 'Make a [[tadka]] in the sesame oil with mustard, chana dal and curry leaves.', 1], ['Toss', 'Mix the rice with the tadka, powder and salt.']],
    tips: ['Roast sesame until it just pops.'], mistakes: ['Burnt sesame: bitter.'], vars: ['Palli saddi with peanuts; kobbari saddi with coconut.'], serve: 'Part of the Bathukamma spread.' });

  /* ======================= BREADS ======================= */
  X(TG, SH, { id: 'sarva-pindi', name: 'Sarva Pindi', local: 'సర్వ పిండి', emoji: '🫓', course: 'breakfast', level: 2, prep: 15, cook: 20, serves: 3,
    taste: { savory: 4, spicy: 3, herby: 3 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['brunch', 'budget'],
    desc: 'A Telangana rice-flour pancake with peanuts, chana dal, sesame and chili, patted into a pan with holes and cooked crisp.',
    story: 'Named after the “sarva” (pan) it’s cooked in, this rustic Telangana breakfast is pressed by hand and poked with holes so it crisps.',
    equip: ['Heavy pan with lid'],
    ing: [[250, 'g', 'rice flour'], [2, 'tbsp', 'chana dal', 'soaked 30 min'], [2, 'tbsp', 'peanuts'], [1, 'tbsp', 'sesame seeds'], [1, '', 'onion', 'chopped'], [2, '', 'green chilies', 'chopped'], [10, 'leaf', 'curry leaves', 'chopped'], [2, 'tbsp', 'cilantro'], [0.75, 'tsp', 'salt'], [200, 'ml', 'hot water'], [4, 'tbsp', 'oil']],
    steps: [['Dough', 'Mix everything except the oil with hot water into a soft dough.'], ['Pat', 'Oil a cold pan and pat a portion thin with oiled fingers; poke 5–6 holes and pour oil in them.'], ['Cook', 'Cover and cook on medium 8 minutes until the base is crisp and golden; do not flip.', 8]],
    tips: ['Pat on a cold pan.'], mistakes: ['Thick layer: raw middle.'], vars: ['Akki roti (Karnataka) is the cousin.'], serve: 'Tea or pickle.' });

  X('Punjab', ['dhaba'], { id: 'laccha-paratha', name: 'Laccha Paratha', local: 'लच्छा पराठा', emoji: '🫓', course: 'bread', level: 2, prep: 25, cook: 20, rest: 30, serves: 6,
    taste: { rich: 4, savory: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['party', 'impress'],
    desc: 'Flaky, layered whole-wheat paratha made by pleating ghee-brushed dough and coiling it into a spiral.',
    story: '“Laccha” means layers. Dhabas serve it crisp and crumpled so the layers open up.',
    equip: ['Rolling pin', 'Tawa'],
    ing: [[300, 'g', 'whole wheat flour (atta)'], [0.5, 'tsp', 'salt'], [180, 'ml', 'water'], [4, 'tbsp', 'ghee'], [1, 'tbsp', 'all-purpose flour', 'for dusting']],
    steps: [['Dough', '[[knead|Knead]] a soft dough and [[rest]] 30 minutes.', 30], ['Pleat', 'Roll each ball thin, brush with ghee, dust with flour, pleat like a fan and coil into a spiral. Rest 5 minutes and roll gently.'], ['Cook', 'Cook on a hot tawa with ghee until crisp on both sides; crush between your palms to open the layers.', 15]],
    tips: ['Dusting flour between layers keeps them separate.'], mistakes: ['Rolling too hard: layers disappear.'], vars: ['Pudina laccha paratha with dried mint.'], serve: 'Dal makhani or paneer curries.' });

  X('Punjab', ['home-style'], { id: 'paneer-paratha', name: 'Paneer Paratha', local: 'पनीर पराठा', emoji: '🫓', course: 'breakfast', level: 2, prep: 20, cook: 20, serves: 4,
    taste: { savory: 4, spicy: 2, rich: 3, herby: 3 }, diet: ['vegetarian', 'high-protein'], methods: ['saute'], tags: ['brunch', 'kids'],
    desc: 'Whole-wheat parathas stuffed with spiced grated paneer, onion, chili and cilantro, cooked in ghee.',
    story: 'A Punjabi breakfast favourite alongside aloo and gobi paratha, served with butter and pickle.',
    equip: ['Rolling pin', 'Tawa'],
    ing: [[300, 'g', 'whole wheat flour (atta)'], [180, 'ml', 'water'], [0.5, 'tsp', 'salt'], [200, 'g', 'paneer', 'grated'], [1, '', 'onion', 'finely chopped'], [2, '', 'green chilies'], [2, 'tbsp', 'cilantro'], [0.5, 'tsp', 'garam masala'], [0.5, 'tsp', 'ajwain'], [0.5, 'tsp', 'salt'], [3, 'tbsp', 'ghee']],
    steps: [['Dough', '[[knead|Knead]] the atta, water and salt into a soft dough; rest 15 minutes.', 15], ['Filling', 'Mix the paneer with onion, chilies, cilantro, spices and salt (salt just before stuffing).'], ['Stuff and roll', 'Stuff a ball of dough, seal and roll gently into a round ([[roll-roti]]).'], ['Cook', 'Cook on a hot tawa with ghee until golden on both sides.', 15]],
    tips: ['Add salt to the filling at the last minute so it stays dry.'], mistakes: ['Wet filling: it tears.'], vars: ['Tiranga paratha with three colored doughs.'], serve: 'Butter, curd and pickle.' });

  X('Karnataka', SH, { id: 'ragi-mudde', name: 'Ragi Mudde', local: 'ರಾಗಿ ಮುದ್ದೆ', emoji: '⚫', course: 'main', level: 2, prep: 5, cook: 15, serves: 3,
    taste: { savory: 2, bitter: 1 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['healthy', 'budget'],
    desc: 'Smooth balls of finger-millet flour cooked in boiling water, swallowed with spicy saaru or sambar.',
    story: 'The staple food of rural Karnataka, said to give farmers strength for a full day in the fields.',
    equip: ['Heavy pot', 'Wooden stick (mudde kolu) or sturdy spoon'],
    ing: [[200, 'g', 'ragi flour'], [500, 'ml', 'water'], [0.5, 'tsp', 'salt'], [1, 'tsp', 'ghee or oil']],
    steps: [['Boil', 'Boil the water with salt and ghee; add 2 tbsp ragi flour to thicken slightly.', 3], ['Add flour', 'Add the rest of the flour in a mound without stirring, cover and cook 5 minutes on low.', 5], ['Stir', 'Stir hard with a stick until smooth with no lumps, cook 3 more minutes, then shape wet-handed into balls.', 4]],
    tips: ['Don’t stir when the flour first goes in.'], mistakes: ['Lumps: stir vigorously.'], vars: ['Jowar or rice mudde.'], serve: 'Bassaru, sambar or saaru.' });

  /* ======================= SWEETS ======================= */
  X(AP, SW, { id: 'sunnundalu', name: 'Sunnundalu (Urad Dal Ladoo)', local: 'సున్నుండలు', emoji: '🟤', course: 'dessert', level: 1, prep: 10, cook: 15, serves: 12,
    taste: { sweet: 4, rich: 4, savory: 1 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['saute'], tags: ['festive', 'make-ahead'],
    desc: 'Rich Andhra ladoos of roasted urad dal flour, jaggery and hot ghee.',
    story: 'Sunnundalu are made for Sankranti and given to new mothers for strength. Roasted urad dal tastes surprisingly nutty.',
    equip: ['Pan', 'Grinder'],
    ing: [[200, 'g', 'urad dal'], [150, 'g', 'jaggery', 'powdered'], [100, 'g', 'ghee', 'hot'], [0.5, 'tsp', 'cardamom powder']],
    steps: [['Roast', 'Dry-[[toast]] the urad dal on low until golden and fragrant, 10 minutes; cool and grind fine.', 10], ['Mix', 'Grind with the jaggery and cardamom.'], ['Shape', 'Pour the hot ghee over and shape into firm balls while warm.']],
    tips: ['Roast evenly: raw dal tastes floury.'], mistakes: ['Not enough ghee: they crumble.'], vars: ['Sugar instead of jaggery.'], serve: 'As a festive sweet.', store: 'Airtight 2 weeks.' });

  X(AP, SW, { id: 'bobbatlu', name: 'Bobbatlu (Andhra Puran Poli)', local: 'బొబ్బట్లు', emoji: '🫓', course: 'dessert', level: 3, prep: 40, cook: 30, rest: 60, serves: 8,
    taste: { sweet: 5, rich: 4, aromatic: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['festive', 'impress'],
    desc: 'Thin, soft flatbreads filled with sweet chana dal and jaggery, cooked with plenty of ghee.',
    story: 'The Ugadi (Telugu New Year) sweet. Maharashtra’s puran poli and Karnataka’s holige are the same family.',
    equip: ['Pressure cooker', 'Rolling pin or banana leaf', 'Tawa'],
    ing: ['#Dough', [200, 'g', 'all-purpose flour'], [0.25, 'tsp', 'ground turmeric'], [0.25, 'tsp', 'salt'], [6, 'tbsp', 'oil'], [120, 'ml', 'water'], '#Filling', [200, 'g', 'chana dal', 'soaked 1 hour'], [200, 'g', 'jaggery'], [0.5, 'tsp', 'cardamom powder'], [50, 'g', 'ghee', 'for cooking']],
    steps: [['Dough', '[[knead|Knead]] a very soft dough with the flour, turmeric, salt, water and 2 tbsp oil; cover with the rest of the oil and rest 1 hour.', 60], ['Filling', 'Cook the dal until soft but not mushy, drain well, then cook with jaggery until thick and grind with cardamom to a smooth paste (puranam).', 25], ['Stuff and flatten', 'Wrap a ball of filling in dough and flatten thin with oiled fingers on a banana leaf or plastic.'], ['Cook', 'Cook on a hot tawa with ghee until golden spots appear on both sides.', 15]],
    tips: ['Dough should be softer than the filling.'], mistakes: ['Wet filling: it bursts.'], vars: ['Coconut bobbatlu.', 'Maharashtrian puran poli with wheat flour.'], serve: 'Warm with ghee or milk.' });

  X('Maharashtra', SW, { id: 'puran-poli', name: 'Puran Poli', local: 'पुरणपोळी', emoji: '🫓', course: 'dessert', level: 3, prep: 40, cook: 30, rest: 60, serves: 8,
    taste: { sweet: 5, rich: 4, aromatic: 4 }, diet: ['vegetarian'], methods: ['saute'], tags: ['festive', 'impress'],
    desc: 'Maharashtra’s festive sweet flatbread with a nutmeg-cardamom chana dal and jaggery filling, served with ghee.',
    story: 'Made for Holi and Gudi Padwa. The water from cooking the dal becomes katachi amti, a spicy dal served alongside.',
    equip: ['Pressure cooker', 'Puran grinder or masher', 'Rolling pin', 'Tawa'],
    ing: [[200, 'g', 'chana dal'], [200, 'g', 'jaggery'], [0.5, 'tsp', 'cardamom powder'], [0.25, 'tsp', 'nutmeg'], [200, 'g', 'whole wheat flour (atta)'], [50, 'g', 'all-purpose flour'], [3, 'tbsp', 'oil'], [150, 'ml', 'water'], [0.25, 'tsp', 'salt'], [50, 'g', 'ghee']],
    steps: [['Dough', '[[knead|Knead]] the flours, salt, oil and water into a very soft, stretchy dough; rest 1 hour.', 60], ['Puran', 'Cook the dal soft, drain (keep the water), cook with jaggery until thick and mash smooth with cardamom and nutmeg.', 25], ['Roll', 'Stuff and roll thin with rice flour dusting.'], ['Cook', 'Cook on a tawa until spotted and drizzle ghee.', 15]],
    tips: ['The puran must be thick enough to hold a spoon upright.'], mistakes: ['Stiff dough tears when rolling.'], vars: ['Gujarati vedmi; Karnataka holige.'], serve: 'Ghee, milk and katachi amti.' });

  X(AP, SW, { id: 'pala-poorilu', name: 'Pala Poorilu', local: 'పాల పూరీలు', emoji: '🥛', course: 'dessert', level: 2, prep: 20, cook: 30, serves: 6,
    taste: { sweet: 5, rich: 4, aromatic: 4 }, diet: ['vegetarian'], methods: ['deep-fry', 'simmer'], tags: ['festive'],
    desc: 'Small crisp puris soaked in thickened saffron-cardamom milk until soft. An Andhra festive dessert.',
    story: 'Made for Diwali and weddings in Andhra, these puris drink up sweet milk like a soft sponge cake.',
    equip: ['Kadai', 'Heavy pot', 'Rolling pin'],
    ing: [[150, 'g', 'fine semolina (rava)'], [50, 'g', 'all-purpose flour'], [80, 'ml', 'water'], [1, 'l', 'oil', 'for frying'], [1, 'l', 'full-fat milk'], [120, 'g', 'sugar'], [1, 'pinch', 'saffron'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'almonds and pistachios', 'sliced']],
    steps: [['Milk', '[[reduce|Reduce]] the milk by a third with saffron; add sugar and cardamom.', 25], ['Puris', '[[knead|Knead]] the rava and flour with water, rest 15 minutes, roll small puris and [[deep-fry]] until crisp.', 15], ['Soak', 'Soak the puris in the warm milk 30 minutes; top with nuts.', 30]],
    tips: ['Fry the puris crisp so they hold shape when soaked.'], mistakes: ['Soaking too long: they fall apart.'], vars: ['Pal poli (Tamil Nadu).'], serve: 'Warm or chilled.' });

  X(AP, SW, { id: 'badusha', name: 'Badusha (Balushahi)', local: 'బాదుషా', emoji: '🍩', course: 'dessert', level: 3, prep: 25, cook: 30, rest: 20, serves: 12,
    taste: { sweet: 5, rich: 5 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['festive', 'make-ahead'],
    desc: 'Flaky, ghee-rich fried pastries soaked in sugar syrup, crisp outside and melting inside.',
    story: 'Called balushahi in the north and badusha in the south, it is a Diwali favourite in both.',
    equip: ['Bowl', 'Kadai', 'Pan for syrup'],
    ing: [[250, 'g', 'all-purpose flour'], [80, 'g', 'ghee', 'cold'], [100, 'g', 'yogurt'], [0.25, 'tsp', 'baking soda'], [1, 'pinch', 'salt'], [1, 'l', 'oil', 'for frying'], [250, 'g', 'sugar'], [150, 'ml', 'water'], [0.25, 'tsp', 'cardamom powder']],
    steps: [['Dough', 'Rub the ghee into flour, soda and salt until crumbly; add yogurt and bring together without kneading. Rest 20 minutes.', 20], ['Shape', 'Shape balls, flatten and press a dent in the centre.'], ['Fry slowly', '[[deep-fry|Fry]] on low heat 15 minutes until golden and flaky.', 15, 'Low heat: they should rise slowly to the top.'], ['Syrup', 'Dip in warm one-string sugar syrup with cardamom for 2 minutes.', 5]],
    tips: ['Don’t knead: it makes them tough.'], mistakes: ['Hot oil: raw inside.'], vars: ['Top with pistachios or silver leaf.'], serve: 'At room temperature.', store: 'Airtight 1 week.' });

  X(HY, SW, { id: 'gil-e-firdaus', name: 'Gil-e-Firdaus', local: 'گیلِ فردوس', emoji: '🍮', course: 'dessert', level: 2, prep: 15, cook: 45, serves: 6,
    taste: { sweet: 4, rich: 5, aromatic: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'impress'],
    desc: 'A Hyderabadi kheer of bottle gourd, rice and milk, rich with khoya, nuts and cardamom. Its name means “clay of paradise”.',
    story: 'From the Nizam’s royal kitchens, served on Eid and at weddings. The bottle gourd disappears into a silky, creamy pudding.',
    equip: ['Heavy pot'],
    ing: [[1, 'l', 'full-fat milk'], [3, 'tbsp', 'rice', 'soaked, coarsely ground'], [200, 'g', 'bottle gourd (lauki)', 'grated, squeezed'], [100, 'g', 'khoya (mawa)', 'crumbled'], [120, 'g', 'sugar'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'almonds and pistachios', 'sliced'], [1, 'tsp', 'rose water'], [1, 'tbsp', 'ghee']],
    steps: [['Gourd', 'Sauté the gourd in ghee 5 minutes.', 5], ['Simmer', 'Boil the milk, add the rice and gourd and [[simmer]] 25 minutes, stirring, until thick.', 25], ['Enrich', 'Add khoya, sugar and cardamom and cook 8 minutes; finish with nuts and rose water.', 8]],
    tips: ['Squeeze the gourd well.'], mistakes: ['Not stirring: it scorches.'], vars: ['Double ka meetha is the other royal sweet.'], serve: 'Chilled.' });

  X(HY, SW, { id: 'qubani-ka-meetha', name: 'Qubani ka Meetha', local: 'خوبانی کا میٹھا', emoji: '🍑', course: 'dessert', level: 1, prep: 10, cook: 35, rest: 480, serves: 6,
    taste: { sweet: 5, sour: 2, rich: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'make-ahead'],
    desc: 'Dried apricots stewed into a glossy, deep-amber compote, served with cream at Hyderabadi weddings.',
    story: 'The apricots come from Afghanistan; Hyderabadi cooks crack the stones to add the almond-like kernels.',
    equip: ['Pot'],
    ing: [[250, 'g', 'dried apricots', 'soaked overnight'], [100, 'g', 'sugar'], [400, 'ml', 'water', 'soaking water'], [1, 'tbsp', 'lemon juice'], [2, 'tbsp', 'almonds', 'blanched, slivered']],
    steps: [['Soak', 'Soak the apricots overnight.', 480], ['Cook', 'Remove the stones, then cook the apricots in their soaking water with sugar 30 minutes until thick and glossy, mashing half.', 30], ['Finish', 'Add lemon and almonds.']],
    tips: ['Use the dark, unsulphured Hunza apricots.'], mistakes: ['Over-mashing: it should be chunky.'], vars: ['Serve with custard or ice cream.'], serve: 'Chilled with cream (not vegan) or vanilla ice cream.' });

  X('Punjab', SW, { id: 'karah-prasad', name: 'Karah Prasad (Aate ka Halwa)', local: 'ਕੜਾਹ ਪ੍ਰਸ਼ਾਦ', emoji: '🟫', course: 'dessert', level: 1, prep: 2, cook: 20, serves: 6,
    taste: { sweet: 5, rich: 5, aromatic: 2 }, diet: ['vegetarian'], methods: ['saute'], tags: ['festive', 'comfort', 'quick'],
    desc: 'Equal parts whole-wheat flour, ghee and sugar roasted into a glossy, nutty halwa. The offering at every gurudwara.',
    story: 'At Sikh gurudwaras, karah prasad is offered to everyone, rich or poor, as a blessing. The equal-thirds recipe is easy to remember.',
    equip: ['Heavy kadai'],
    ing: [[100, 'g', 'whole wheat flour (atta)'], [100, 'g', 'ghee'], [100, 'g', 'sugar'], [400, 'ml', 'water']],
    steps: [['Syrup', 'Dissolve the sugar in the water and keep hot.', 3], ['Roast', 'Roast the atta in the ghee on medium-low, stirring constantly, until deep golden-brown and nutty, 12–15 minutes ([[toast]]).', 15], ['Combine', 'Pour in the hot syrup carefully (it splutters) and stir until it pulls together and the ghee glistens.', 3]],
    tips: ['Keep the syrup hot when you add it.'], mistakes: ['Pale roast: raw-flour taste.'], vars: ['Add a pinch of cardamom (not traditional at gurudwaras).'], serve: 'Warm, in cupped hands.' });

  X('Uttar Pradesh', SW, { id: 'gujiya', name: 'Gujiya', local: 'गुजिया', emoji: '🥟', course: 'dessert', level: 3, prep: 40, cook: 30, serves: 15,
    taste: { sweet: 5, rich: 4, aromatic: 3 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['festive', 'make-ahead'],
    desc: 'Crisp half-moon pastries filled with khoya, coconut, dried fruit and cardamom. The sweet of Holi.',
    story: 'No Holi in North India is complete without gujiya. Maharashtra’s karanji and Goa’s nevri are the same idea.',
    equip: ['Gujiya mould (optional)', 'Rolling pin', 'Kadai'],
    ing: ['#Pastry', [250, 'g', 'all-purpose flour'], [60, 'g', 'ghee'], [100, 'ml', 'water'], '#Filling', [200, 'g', 'khoya (mawa)', 'crumbled'], [3, 'tbsp', 'desiccated coconut'], [2, 'tbsp', 'fine semolina (rava)'], [100, 'g', 'powdered sugar'], [2, 'tbsp', 'almonds and pistachios', 'chopped'], [1, 'tbsp', 'raisins'], [0.5, 'tsp', 'cardamom powder'], [1, 'l', 'oil', 'for frying']],
    steps: [['Pastry', 'Rub the ghee into the flour, add water and [[knead]] a firm dough; rest 20 minutes.', 20], ['Filling', 'Roast the khoya on low until light golden, cool, and mix with the rest of the filling.', 8], ['Shape', 'Roll small rounds, fill, fold into half-moons and crimp or use a mould.'], ['Fry', '[[deep-fry|Fry]] on low heat until crisp and lightly golden.', 20]],
    tips: ['Seal with water so they don’t open.'], mistakes: ['Hot oil: blisters and raw pastry.'], vars: ['Baked gujiya brushed with ghee.'], serve: 'Holi, with thandai.', store: 'Airtight 1 week.' });

  X('Kerala', ['south-indian', 'sweets'], { id: 'unniyappam', name: 'Unniyappam', local: 'ഉണ്ണിയപ്പം', emoji: '🟤', course: 'dessert', level: 2, prep: 15, cook: 25, rest: 120, serves: 6,
    taste: { sweet: 4, rich: 3, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['deep-fry'], tags: ['festive', 'kids'],
    desc: 'Little sweet dumplings of rice flour, banana and jaggery with coconut bits, fried in a dimpled pan.',
    story: 'Made for Vishu and temple festivals in Kerala, especially offered at Lord Krishna temples.',
    equip: ['Appe (paniyaram) pan'],
    ing: [[200, 'g', 'rice flour'], [150, 'g', 'jaggery', 'melted and strained'], [2, '', 'ripe bananas', 'mashed'], [3, 'tbsp', 'fresh coconut', 'small bits, fried in ghee'], [1, 'tsp', 'sesame seeds'], [0.5, 'tsp', 'cardamom powder'], [0.25, 'tsp', 'baking soda'], [150, 'ml', 'water'], [6, 'tbsp', 'ghee or coconut oil']],
    steps: [['Batter', 'Mix everything except the ghee into a thick batter; [[rest]] 2 hours.', 120], ['Cook', 'Fill the hollows half with ghee, heat, then pour in batter and cook until golden, turning with a skewer.', 20]],
    tips: ['Ripe bananas make them soft inside.'], mistakes: ['Too much soda: bitter.'], vars: ['Ragi and oats unniyappam.'], serve: 'Tea-time or festival plate.' });

  X('West Bengal', SW, { id: 'bhapa-doi', name: 'Bhapa Doi', local: 'ভাপা দই', emoji: '🍮', course: 'dessert', level: 1, prep: 10, cook: 25, rest: 240, serves: 4,
    taste: { sweet: 4, sour: 2, rich: 5 }, diet: ['vegetarian', 'gluten-free'], methods: ['steam'], tags: ['festive', 'make-ahead'],
    desc: 'Steamed sweet yogurt pudding of hung curd and condensed milk, set like a silky cheesecake.',
    story: '“Bhapa” means steamed. Bengali families make it for Jamai Shashthi and festivals; date syrup or nolen gur versions are prized in winter.',
    equip: ['Ramekins', 'Steamer'],
    ing: [[250, 'g', 'hung curd'], [200, 'g', 'sweetened condensed milk'], [100, 'ml', 'heavy cream'], [0.25, 'tsp', 'cardamom powder'], [1, 'tbsp', 'pistachios', 'sliced']],
    steps: [['Mix', '[[whisk|Whisk]] the hung curd, condensed milk, cream and cardamom until smooth.'], ['Steam', 'Pour into ramekins, cover with foil and [[steam]] on low 20–25 minutes until set but wobbly.', 25], ['Chill', 'Cool and chill 4 hours; top with pistachios.', 240]],
    tips: ['Gentle steam keeps it silky.'], mistakes: ['Over-steaming: grainy texture.'], vars: ['Date syrup bhapa doi.'], serve: 'Chilled.' });

  X('Manipur', SW, { id: 'chak-hao-kheer', name: 'Chak-Hao Kheer (Black Rice Pudding)', local: 'Chak-hao amubi', emoji: '🍚', course: 'dessert', level: 1, prep: 5, cook: 50, rest: 240, serves: 4,
    taste: { sweet: 4, rich: 4, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive'],
    desc: 'Manipur’s purple-black aromatic rice slow-cooked in milk into a glossy, nutty pudding.',
    story: 'Chak-hao (black rice) is grown in Manipur and was once reserved for royalty. The kheer turns a stunning deep purple.',
    equip: ['Heavy pot'],
    ing: [[80, 'g', 'black rice (chak-hao)', 'soaked 4 hours'], [1, 'l', 'full-fat milk'], [90, 'g', 'sugar'], [2, '', 'green cardamom pods'], [1, 'tbsp', 'cashews'], [1, 'tbsp', 'raisins']],
    steps: [['Soak', 'Soak the rice 4 hours (or overnight).', 240], ['Simmer', 'Cook the rice in the milk with cardamom on low, stirring often, for 45 minutes until soft and creamy.', 45], ['Sweeten', 'Add sugar, cashews and raisins.']],
    tips: ['Soaking shortens the cooking a lot.'], mistakes: ['High heat: scorched milk.'], vars: ['Thai black sticky rice with coconut milk.'], serve: 'Warm or chilled.' });

  /* ======================= SNACKS & SAVOURIES (WEST INDIA) ======================= */
  X('Gujarat', ['home-style'], { id: 'patra', name: 'Patra (Colocasia Leaf Rolls)', local: 'પાતરા', emoji: '🌀', course: 'snack', level: 3, prep: 30, cook: 30, serves: 6,
    taste: { sour: 3, sweet: 3, spicy: 2, savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['steam', 'saute'], tags: ['festive', 'make-ahead'],
    desc: 'Colocasia leaves layered with a sweet-sour spiced gram-flour paste, rolled, steamed, sliced and tempered.',
    story: 'Gujarati patra and Maharashtrian alu vadi are the same dish; Telugu kitchens make chamakura potlalu.',
    equip: ['Steamer', 'Pan'],
    ing: [[8, 'leaf', 'colocasia (arbi) leaves', 'large, veins shaved'], [150, 'g', 'besan (gram flour)'], [2, 'tbsp', 'tamarind paste'], [2, 'tbsp', 'jaggery'], [1, 'tsp', 'ginger-green chili paste'], [1, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'ground coriander'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'salt'], [100, 'ml', 'water'], [2, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'tbsp', 'sesame seeds'], [2, 'tbsp', 'grated coconut']],
    steps: [['Paste', 'Mix the besan with tamarind, jaggery, spices, salt and water to a thick spreadable paste.'], ['Layer and roll', 'Spread paste on a leaf, lay another leaf on top in the opposite direction, spread again; fold the sides and roll tightly.'], ['Steam', '[[steam|Steam]] the rolls 25 minutes; cool and slice.', 25], ['Temper', 'Toss the slices in a [[tadka]] of mustard and sesame; top with coconut.', 3]],
    tips: ['Tamarind is essential: it stops colocasia from itching the throat.'], mistakes: ['Undercooked leaves cause itching.'], vars: ['Shallow-fry the slices until crisp.'], serve: 'Tea or as a farsan.' });

  X('Gujarat', ['home-style', 'sweets'], { id: 'shakkarpara', name: 'Shakkarpara', local: 'શક્કરપારા', emoji: '🔶', course: 'snack', level: 1, prep: 15, cook: 25, serves: 10,
    taste: { sweet: 3, rich: 3 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['festive', 'make-ahead', 'kids'],
    desc: 'Crunchy diamond-shaped bites of sweet, ghee-rich dough fried until golden.',
    story: 'A Diwali snack across Gujarat and Maharashtra (shankarpali), packed into tins for guests.',
    equip: ['Rolling pin', 'Kadai'],
    ing: [[250, 'g', 'all-purpose flour'], [60, 'g', 'ghee'], [80, 'g', 'sugar'], [100, 'ml', 'milk'], [1, 'pinch', 'salt'], [0.25, 'tsp', 'cardamom powder'], [1, 'l', 'oil', 'for frying']],
    steps: [['Dough', 'Warm the milk, ghee and sugar until the sugar dissolves; cool, add flour, salt and cardamom and [[knead]] a firm dough. Rest 20 minutes.', 20], ['Cut', 'Roll 5 mm thick and cut into diamonds.'], ['Fry', '[[deep-fry|Fry]] on medium-low until golden.', 20]],
    tips: ['Fry slowly so they’re crisp all through.'], mistakes: ['Thin rolling: they burn.'], vars: ['Namak para: savoury with ajwain.'], serve: 'Tea.', store: 'Airtight 3 weeks.' });

  /* ======================= DRINKS ======================= */
  X(AP, SH, { id: 'ragi-ambali', name: 'Ragi Ambali', local: 'రాగి అంబలి', emoji: '🥛', course: 'drink', level: 1, prep: 5, cook: 8, rest: 480, serves: 3,
    taste: { sour: 2, savory: 3, herby: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['summer', 'healthy', 'budget'],
    desc: 'A cooling fermented finger-millet porridge drink thinned with buttermilk, onion and green chili.',
    story: 'Farmers in Andhra, Telangana and Karnataka drink ambali in the morning before working in the summer heat.',
    equip: ['Pot', 'Jar'],
    ing: [[60, 'g', 'ragi flour'], [400, 'ml', 'water'], [300, 'ml', 'buttermilk'], [0.5, '', 'onion', 'finely chopped'], [1, '', 'green chili', 'chopped'], [0.5, 'tsp', 'salt'], [1, 'tbsp', 'cilantro']],
    steps: [['Cook', 'Whisk the ragi into the water and cook, stirring, until thick and glossy, 6 minutes.', 6], ['Ferment', 'Cool and leave covered overnight to sour lightly ([[ferment]]).', 480], ['Mix', 'Whisk with buttermilk, salt, onion, chili and cilantro.']],
    tips: ['Thin to taste with more buttermilk.'], mistakes: ['Lumps: whisk the flour into cold water first.'], vars: ['Sweet ambali with jaggery and milk.'], serve: 'Cold, in the morning.' });

  /* ======================= EGG ======================= */
  X('Punjab', ['restaurant'], { id: 'egg-methi-malai', name: 'Egg Methi Malai', local: 'अंडा मेथी मलाई', emoji: '🥚', course: 'main', level: 1, prep: 10, cook: 20, serves: 3,
    taste: { rich: 5, aromatic: 4, sweet: 2, bitter: 1 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['weeknight', 'comfort'],
    desc: 'Boiled eggs in a creamy, mildly sweet cashew-cream gravy fragrant with kasuri methi.',
    story: 'A restaurant favourite inspired by methi malai matar; eggs make it a quick high-protein dinner.',
    equip: ['Pan', 'Blender'],
    ing: [[6, '', 'eggs', 'hard-boiled, halved'], [2, 'tbsp', 'butter'], [1, '', 'onion', 'chopped'], [12, '', 'cashews'], [1, 'tsp', 'ginger-garlic paste'], [2, '', 'green chilies'], [1, 'tbsp', 'kasuri methi'], [120, 'ml', 'heavy cream'], [150, 'ml', 'water'], [1, 'tsp', 'sugar'], [0.75, 'tsp', 'salt'], [0.5, 'tsp', 'garam masala']],
    steps: [['Paste', 'Soften the onion and cashews in butter, blend with a little water.', 6], ['Gravy', 'Cook the paste with ginger-garlic and chilies 4 minutes, add water, cream, sugar, salt and crushed kasuri methi.', 8], ['Eggs', 'Add the eggs and simmer 3 minutes; finish with garam masala.', 3]],
    tips: ['Crush the kasuri methi between your palms.'], mistakes: ['Boiling hard after adding cream.'], vars: ['Methi malai matar with peas instead of eggs.'], serve: 'Naan or jeera rice.' });
})();
