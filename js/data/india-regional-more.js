/* India, regional versions: dals, kadhis, potatoes, brinjals, rice, Gujarati & Bengali & Kashmiri specialities,
   sweets and drinks. Original recipes written for Dish Dictionary. */
'use strict';
(function () {
  const X = (area, styles, d) => DD.add(Object.assign({ country: 'India', flag: '🇮🇳', region: 'South Asia', area, styles }, d));
  const H = ['home-style'];

  /* ======================= DALS ======================= */
  X('Gujarat', H, { id: 'gujarati-dal', name: 'Gujarati Dal', local: 'ગુજરાતી દાળ', emoji: '🥣', course: 'main', level: 1, prep: 10, cook: 30, serves: 4,
    taste: { sweet: 3, sour: 3, aromatic: 3, spicy: 1 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'weeknight', 'budget'],
    desc: 'Thin, silky toor dal balanced sweet and sour with jaggery and kokum, studded with peanuts.',
    story: 'Gujarati thalis always have this khatti-meethi (sour-sweet) dal, poured over rice. Peanuts and a pinch of cloves make it unmistakably Gujarati.',
    equip: ['Pressure cooker', 'Tadka pan'],
    ing: [[150, 'g', 'toor dal'], [900, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], [2, 'tbsp', 'peanuts', 'soaked'], [1, '', 'tomato', 'chopped'], [1, 'tbsp', 'ginger-green chili paste'], [2, 'tbsp', 'jaggery'], [3, '', 'kokum', 'or 1 tbsp lemon juice'], [1, 'tsp', 'salt'], [1, 'tbsp', 'ghee'], [1, 'tsp', 'mustard seeds'], [0.5, 'tsp', 'fenugreek seeds'], [3, '', 'whole cloves'], [1, 'piece', 'cinnamon stick'], [2, '', 'dried red chilies'], [10, 'leaf', 'curry leaves'], [1, 'pinch', 'asafoetida (hing)'], [2, 'tbsp', 'cilantro']],
    steps: [
      ['Cook', 'Pressure-cook the dal with 400 ml water and turmeric for 4 whistles; [[whisk]] completely smooth.', 15],
      ['Simmer', 'Add the rest of the water, peanuts, tomato, ginger-chili paste, jaggery, kokum and salt. [[simmer|Simmer]] 12 minutes.', 12, 'It should be thin and pourable, like a soup.'],
      ['Tadka', 'Make a ghee [[tadka]] of mustard, fenugreek, cloves, cinnamon, red chilies, curry leaves and hing; pour in and add cilantro.', 2],
    ],
    tips: ['Taste and balance: sweet, sour and a little heat.'], mistakes: ['Thick dal: Gujarati dal is thin.'],
    vars: ['Add drumsticks or a few dates.'], serve: 'Rice, rotli and shaak in a thali.' });

  X('West Bengal', H, { id: 'cholar-dal', name: 'Cholar Dal', local: 'ছোলার ডাল', emoji: '🥣', course: 'main', level: 1, prep: 10, cook: 35, serves: 4,
    taste: { sweet: 3, aromatic: 4, rich: 3 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['festive', 'comfort'],
    desc: 'Bengali chana dal with coconut slivers, raisins, ghee and a gentle sweetness.',
    story: 'Cholar dal with luchi is the festive Bengali breakfast for Durga Puja and weddings. Bengalis like their dal a little sweet.',
    equip: ['Pressure cooker', 'Pan'],
    ing: [[200, 'g', 'chana dal', 'soaked 1 hour'], [800, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], [2, 'tbsp', 'ghee'], [1, 'tsp', 'cumin seeds'], [2, '', 'bay leaves'], [1, 'piece', 'cinnamon stick'], [3, '', 'green cardamom pods'], [2, '', 'dried red chilies'], [1, 'tsp', 'ginger', 'grated'], [3, 'tbsp', 'fresh coconut', 'small slivers'], [1, 'tbsp', 'raisins'], [1, 'tbsp', 'sugar'], [1, 'tsp', 'salt'], [0.5, 'tsp', 'garam masala']],
    steps: [
      ['Cook the dal', 'Pressure-cook the dal with the water and turmeric for 3 whistles; it should be soft but hold its shape.', 12],
      ['Fry', 'Fry the coconut slivers in the ghee until golden; lift out. Add cumin, bay leaves, whole spices and chilies to the ghee ([[tadka]]), then the ginger.', 4],
      ['Simmer', 'Add the dal, coconut, raisins, sugar and salt; [[simmer]] 8 minutes. Finish with garam masala and a spoon of ghee.', 8],
    ],
    tips: ['Don’t mash: the grains should stay whole.'], mistakes: ['Skipping the sugar: it tastes unbalanced to Bengalis.'],
    vars: ['Add a few slices of fried coconut and green chilies.'], serve: 'Luchi or rice.' });

  X('Kerala', H, { id: 'kerala-parippu-curry', name: 'Kerala Parippu Curry', local: 'പരിപ്പ് കറി', emoji: '🥣', course: 'main', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { savory: 3, aromatic: 3, rich: 3 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['comfort', 'festive', 'healthy'],
    desc: 'Mild moong dal with a coconut-cumin-garlic paste, finished with ghee. The first course of an Onam sadya.',
    story: 'At a Kerala feast, rice is first served with parippu and a spoon of ghee before the other curries arrive.',
    equip: ['Pot', 'Grinder'],
    ing: [[150, 'g', 'yellow moong dal', 'lightly roasted'], [600, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], [60, 'g', 'grated coconut'], [0.5, 'tsp', 'cumin seeds'], [2, 'clove', 'garlic'], [2, '', 'green chilies'], [0.75, 'tsp', 'salt'], [1, 'tbsp', 'ghee'], [0.5, 'tsp', 'mustard seeds'], [3, '', 'shallots', 'sliced'], [10, 'leaf', 'curry leaves']],
    steps: [
      ['Cook', '[[simmer|Simmer]] the dal with the water and turmeric until soft, 18 minutes.', 18],
      ['Paste', 'Grind the coconut, cumin, garlic and chilies; stir in with the salt and heat 3 minutes.', 3],
      ['Tadka', 'Finish with ghee, mustard, shallots and curry leaves ([[tadka]]).', 2],
    ],
    tips: ['Roasting the moong dal first adds a nutty taste.'], mistakes: ['Boiling after the coconut goes in.'],
    vars: ['Parippu with spinach (cheera parippu).'], serve: 'Kerala matta rice, ghee and papadam.' });

  X('Maharashtra', H, { id: 'maharashtrian-amti', name: 'Maharashtrian Amti', local: 'आमटी', emoji: '🥣', course: 'main', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { sweet: 3, sour: 3, spicy: 2, aromatic: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['weeknight', 'comfort', 'budget'],
    desc: 'Toor dal made tangy-sweet with kokum and jaggery and spiced with Maharashtra’s goda masala.',
    story: 'Amti is the everyday dal of Maharashtrian homes, eaten with rice and a squeeze of lime. Goda masala, a dark sweet spice blend, gives it its character.',
    equip: ['Pressure cooker', 'Pan'],
    ing: [[150, 'g', 'toor dal'], [800, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], [2, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'pinch', 'asafoetida (hing)'], [10, 'leaf', 'curry leaves'], [2, '', 'green chilies'], [1.5, 'tsp', 'goda masala'], [1, 'tsp', 'kashmiri chili powder'], [4, '', 'kokum'], [1.5, 'tbsp', 'jaggery'], [1, 'tsp', 'salt'], [2, 'tbsp', 'grated coconut'], [2, 'tbsp', 'cilantro']],
    steps: [
      ['Cook', 'Pressure-cook the dal with 350 ml water and turmeric for 4 whistles; mash.', 15],
      ['Tadka', 'Crackle mustard in the oil, add hing, curry leaves and chilies ([[tadka]]), then the goda masala and chili for 20 seconds.', 1],
      ['Simmer', 'Add the dal, remaining water, kokum, jaggery and salt; [[simmer]] 8 minutes. Add coconut and cilantro.', 8],
    ],
    tips: ['Garam masala can replace goda masala, but it won’t taste Maharashtrian.'], mistakes: ['Too much kokum: very sour.'],
    vars: ['Kat amti: made from the water of boiled chana dal for puran poli.'], serve: 'Rice, ghee and lime.' });

  X('Rajasthan', H, { id: 'panchmel-dal', name: 'Panchmel Dal', local: 'पंचमेल दाल', emoji: '🥣', course: 'main', level: 1, prep: 10, cook: 35, serves: 5,
    taste: { savory: 4, spicy: 3, aromatic: 4 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['comfort', 'festive'],
    desc: 'Five lentils cooked together and finished with a smoky ghee and chili tadka. Rajasthan’s royal dal.',
    story: 'Panchmel (five-mix) dal is served with baati in Rajasthan. Each lentil cooks differently, giving a thick dal with lots of texture.',
    equip: ['Pressure cooker', 'Tadka pan'],
    ing: [[200, 'g', 'mixed dals (toor, chana, moong, urad, masoor)', 'soaked 30 min'], [900, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], [1.25, 'tsp', 'salt'], [3, 'tbsp', 'ghee'], [1, 'tsp', 'cumin seeds'], [3, '', 'whole cloves'], [2, '', 'dried red chilies'], [1, 'pinch', 'asafoetida (hing)'], [1, 'tbsp', 'ginger-garlic paste'], [1, '', 'onion', 'chopped'], [2, '', 'tomatoes', 'chopped'], [1, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'ground coriander'], [0.5, 'tsp', 'garam masala'], [2, 'tbsp', 'cilantro']],
    steps: [
      ['Cook', 'Pressure-cook the dals with water, turmeric and salt for 5 whistles.', 18],
      ['Masala', 'In ghee, crackle cumin, cloves, chilies and hing; add the ginger-garlic paste and onion until golden, then tomatoes and spices until the ghee separates ([[bhuna]]).', 12],
      ['Simmer', 'Add the dal and [[simmer]] 5 minutes. Finish with garam masala, cilantro and a spoon of ghee.', 5],
    ],
    tips: ['For dhungar smoke, put a hot coal in a bowl of ghee over the dal and cover 2 minutes ([[dhungar]]).'], mistakes: ['Under-soaked urad: chalky dal.'],
    vars: ['Serve with baati and churma.'], serve: 'Baati, bajra roti or rice.' });

  /* ======================= KADHI & BUTTERMILK CURRIES ======================= */
  X('Gujarat', H, { id: 'gujarati-kadhi', name: 'Gujarati Kadhi', local: 'ગુજરાતી કઢી', emoji: '🥛', course: 'main', level: 1, prep: 5, cook: 20, serves: 4,
    taste: { sweet: 3, sour: 3, aromatic: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'quick', 'budget'],
    desc: 'A thin, white, sweet-sour yogurt and gram-flour soup with ginger, chili and a fragrant clove-cinnamon tadka.',
    story: 'Unlike Punjabi kadhi it has no pakoras and no turmeric: it is pale, light and sweet, eaten with khichdi.',
    equip: ['Pot', 'Whisk'],
    ing: [[300, 'g', 'yogurt', 'slightly sour'], [2.5, 'tbsp', 'besan (gram flour)'], [600, 'ml', 'water'], [1, 'tbsp', 'ginger-green chili paste'], [1.5, 'tbsp', 'sugar'], [1, 'tsp', 'salt'], [1, 'tbsp', 'ghee'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'cumin seeds'], [4, '', 'whole cloves'], [1, 'piece', 'cinnamon stick'], [10, 'leaf', 'curry leaves'], [1, 'pinch', 'asafoetida (hing)'], [2, 'tbsp', 'cilantro']],
    steps: [
      ['Whisk', '[[whisk|Whisk]] the yogurt, besan and water until completely smooth, then add the ginger-chili paste, sugar and salt.'],
      ['Simmer', 'Bring to a boil on medium, stirring all the time, then [[simmer]] 10 minutes.', 12, 'Stir until it boils or it will split.'],
      ['Tadka', 'Pour over a ghee [[tadka]] of mustard, cumin, cloves, cinnamon, curry leaves and hing; add cilantro.', 1],
    ],
    tips: ['Sour yogurt makes the best kadhi.'], mistakes: ['Not stirring before the boil: curdled kadhi.'],
    vars: ['Punjabi kadhi pakora: thick, yellow, with fritters.'], serve: 'Khichdi or rice.' });

  X('Tamil Nadu', ['south-indian', 'home-style'], { id: 'mor-kuzhambu', name: 'Mor Kuzhambu', local: 'மோர் குழம்பு', emoji: '🥛', course: 'main', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { sour: 3, savory: 3, aromatic: 3, spicy: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['summer', 'quick', 'comfort'],
    desc: 'Buttermilk curry with a ground coconut, ginger and chili paste and soft ash gourd or okra.',
    story: 'Tamil Nadu’s gentle cousin of kadhi: no gram flour, just coconut and soaked dal ground into buttermilk. Perfect on hot days.',
    equip: ['Pot', 'Grinder'],
    ing: [[400, 'ml', 'buttermilk', 'or 250 g yogurt whisked with water'], [200, 'g', 'ash gourd', 'cubed'], [60, 'g', 'grated coconut'], [1, 'tbsp', 'chana dal', 'soaked 20 min'], [1, 'tsp', 'cumin seeds'], [2, '', 'green chilies'], [5, 'g', 'ginger'], [0.25, 'tsp', 'ground turmeric'], [0.75, 'tsp', 'salt'], [1, 'tsp', 'coconut oil'], [0.5, 'tsp', 'mustard seeds'], [1, '', 'dried red chilies'], [8, 'leaf', 'curry leaves']],
    steps: [
      ['Cook the vegetable', 'Cook the ash gourd in a little water with turmeric and salt until tender.', 8],
      ['Paste', 'Grind the coconut, soaked dal, cumin, chilies and ginger to a smooth paste; mix into the buttermilk.'],
      ['Warm', 'Add to the vegetable and heat gently until it just starts to froth. Do not boil.', 4, 'Boiling splits the buttermilk.'],
      ['Tadka', 'Finish with a coconut-oil [[tadka]].', 1],
    ],
    tips: ['Okra or chayote work too.'], mistakes: ['Boiling: grainy curry.'],
    vars: ['Kerala pulissery: yellower, with fenugreek.'], serve: 'Rice and a dry poriyal.' });

  /* ======================= VEGETABLES ======================= */
  X('Kashmir', H, { id: 'kashmiri-dum-aloo', name: 'Kashmiri Dum Aloo', local: 'دم آلو / दम आलू', emoji: '🥔', course: 'main', level: 2, prep: 15, cook: 35, serves: 4,
    taste: { spicy: 3, aromatic: 4, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['braise', 'deep-fry'], tags: ['festive', 'party', 'impress'],
    desc: 'Fried baby potatoes slow-cooked in a vivid red yogurt gravy with fennel, dry ginger and Kashmiri chili. No onion, no garlic, no tomato.',
    story: 'This is the original dum aloo of the Kashmiri Pandit kitchen. Its flavour comes from fennel (saunf) and dry ginger (sonth), its colour from mild Kashmiri chilies.',
    equip: ['Kadai', 'Heavy pot with lid'],
    ing: [[500, 'g', 'baby potatoes', 'boiled, peeled, pricked'], [500, 'ml', 'mustard oil', 'for frying'], [250, 'g', 'yogurt', 'whisked'], [2, 'tsp', 'kashmiri chili powder'], [1.5, 'tsp', 'fennel powder (saunf)'], [1, 'tsp', 'dry ginger powder (sonth)'], [3, '', 'whole cloves'], [2, '', 'green cardamom pods'], [1, '', 'black cardamom'], [1, 'piece', 'cinnamon stick'], [1, 'pinch', 'asafoetida (hing)'], [250, 'ml', 'water'], [1, 'tsp', 'salt'], [0.5, 'tsp', 'garam masala']],
    steps: [
      ['Fry', '[[deep-fry|Deep-fry]] the pricked potatoes in mustard oil until golden-crusted; drain. Keep 2 tbsp of the oil.', 8],
      ['Spices', 'Heat the 2 tbsp oil, add the whole spices and hing, then take off the heat. Stir the chili into 3 tbsp water and add (this keeps the colour bright).', 1],
      ['Yogurt', 'Whisk the yogurt with the fennel and dry ginger, add to the pan on low heat stirring constantly until it bubbles.', 4, 'Low heat and constant stirring stop the yogurt splitting.'],
      ['Dum', 'Add the potatoes, water and salt, cover and cook on the lowest heat 20 minutes ([[dum]]). Finish with garam masala.', 20],
    ],
    tips: ['Prick the potatoes so they soak up the gravy.'], mistakes: ['Adding cold yogurt to hot oil: it curdles.'],
    vars: ['Punjabi dum aloo: onion-tomato-cashew gravy.'], serve: 'Rice or Kashmiri pulao.' });

  X('Punjab', ['dhaba', 'home-style'], { id: 'bharwan-bhindi', name: 'Bharwan Bhindi (Stuffed Okra)', local: 'भरवां भिंडी', emoji: '🫑', course: 'side', level: 2, prep: 20, cook: 15, serves: 3,
    taste: { spicy: 3, sour: 3, savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['weeknight', 'healthy'],
    desc: 'Whole okra slit and stuffed with a tangy amchur-fennel spice mix, pan-fried until crisp-tender.',
    story: 'A Punjabi dhaba and home favourite: the stuffing turns okra into something special without any gravy.',
    equip: ['Wide pan with lid'],
    ing: [[300, 'g', 'okra (bhindi)', 'washed, dried, slit lengthwise'], [2, 'tsp', 'ground coriander'], [1, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'amchur'], [1, 'tsp', 'fennel powder (saunf)'], [0.5, 'tsp', 'ground turmeric'], [0.5, 'tsp', 'garam masala'], [1, 'tbsp', 'besan (gram flour)', 'roasted'], [0.75, 'tsp', 'salt'], [3, 'tbsp', 'mustard oil'], [1, '', 'onion', 'sliced']],
    steps: [
      ['Stuff', 'Mix the spices, besan and salt with 1 tsp oil and fill each slit okra.'],
      ['Cook', 'Heat the oil, add the okra in one layer, cover and cook on low 8 minutes, turning gently.', 8, 'Okra must be completely dry before slitting, or it goes slimy.'],
      ['Crisp', 'Add the onion, uncover and cook 5 minutes until the okra is crisp at the edges ([[saute]]).', 5],
    ],
    tips: ['Choose small, tender okra.'], mistakes: ['Washing after cutting: slime.'],
    vars: ['Bharwan karela with stuffed bitter gourd.'], serve: 'Dal and roti.' });

  X('West Bengal', H, { id: 'begun-bhaja', name: 'Begun Bhaja', local: 'বেগুন ভাজা', emoji: '🍆', course: 'side', level: 1, prep: 15, cook: 12, serves: 4,
    taste: { savory: 4, spicy: 2, rich: 3 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['quick', 'budget'],
    desc: 'Thick eggplant slices rubbed with turmeric, chili and salt and fried golden in mustard oil. Crisp outside, creamy inside.',
    story: 'Begun bhaja is the fried side that opens a Bengali meal with rice and dal, especially with khichuri on rainy days.',
    equip: ['Frying pan'],
    ing: [[1, '', 'large eggplant (bharta baingan)', '1.5 cm rounds'], [0.5, 'tsp', 'ground turmeric'], [0.5, 'tsp', 'kashmiri chili powder'], [0.5, 'tsp', 'sugar'], [0.75, 'tsp', 'salt'], [4, 'tbsp', 'mustard oil']],
    steps: [
      ['Season', 'Rub the slices with turmeric, chili, sugar and salt; [[rest]] 10 minutes.', 10],
      ['Fry', '[[shallow-fry|Shallow-fry]] in hot mustard oil, covered for the first 3 minutes, 4–5 minutes per side until golden and soft through.', 10],
    ],
    tips: ['A little sugar helps it brown.'], mistakes: ['Thin slices: they turn oily.'],
    vars: ['Beguni: dipped in besan batter and deep-fried.'], serve: 'Rice and dal, or khichuri.' });

  X('Maharashtra', H, { id: 'bharli-vangi', name: 'Bharli Vangi (Stuffed Brinjal)', local: 'भरली वांगी', emoji: '🍆', course: 'main', level: 2, prep: 20, cook: 30, serves: 4,
    taste: { spicy: 3, sweet: 2, sour: 2, rich: 4, aromatic: 4 }, diet: ['vegan', 'gluten-free'], methods: ['braise'], tags: ['festive', 'comfort'],
    desc: 'Small brinjals stuffed with roasted peanut, coconut, sesame and goda masala, braised in a thick gravy.',
    story: 'The Maharashtrian answer to Andhra’s gutti vankaya: sweeter, with jaggery and goda masala, eaten with jowar bhakri.',
    equip: ['Heavy pan with lid'],
    ing: [[400, 'g', 'baby eggplants (small brinjals)', 'slit in a cross'], [3, 'tbsp', 'peanuts', 'roasted'], [3, 'tbsp', 'dry coconut'], [1, 'tbsp', 'sesame seeds'], [1, '', 'onion', 'sliced, roasted'], [2, 'tsp', 'goda masala'], [1, 'tsp', 'kashmiri chili powder'], [1, 'tbsp', 'jaggery'], [1, 'tsp', 'tamarind paste'], [1, 'tsp', 'salt'], [3, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [200, 'ml', 'water'], [2, 'tbsp', 'cilantro']],
    steps: [
      ['Stuffing', 'Grind the peanuts, coconut, sesame and roasted onion coarsely; mix with goda masala, chili, jaggery, tamarind and salt.'],
      ['Stuff', 'Fill the brinjals; keep the leftover masala.'],
      ['Braise', 'Crackle mustard in the oil, add the brinjals, cover and cook 10 minutes on low. Add the leftover masala and water and [[braise]] 15 minutes until tender.', 25],
    ],
    tips: ['Use the purple-green Maharashtrian brinjals if you can.'], mistakes: ['High heat burns the peanut masala.'],
    vars: ['Bharli shimla mirchi: stuffed capsicum.'], serve: 'Jowar bhakri or chapati.' });

  X('Punjab', ['dhaba'], { id: 'pindi-chole', name: 'Pindi Chole', local: 'पिंडी छोले', emoji: '🫘', course: 'main', level: 2, prep: 15, cook: 45, rest: 480, serves: 4,
    taste: { sour: 4, spicy: 3, aromatic: 5, savory: 4 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['comfort', 'party'],
    desc: 'Dark, dry, tangy chickpeas from Rawalpindi: boiled with tea, coated in an anardana-amchur masala, finished with hot ghee and ginger.',
    story: 'Brought to Delhi by Punjabi families after Partition. Pindi chole has no onion-tomato gravy; the chickpeas are coated in a roasted, sour spice mix.',
    equip: ['Pressure cooker', 'Pan'],
    ing: [[200, 'g', 'dried chickpeas (kabuli chana)', 'soaked overnight'], [2, '', 'black tea bags'], [1, '', 'black cardamom'], [1, 'piece', 'cinnamon stick'], [800, 'ml', 'water'], [1.25, 'tsp', 'salt'], '#Masala', [2, 'tbsp', 'anardana powder or amchur'], [2, 'tsp', 'ground coriander'], [1, 'tsp', 'ground cumin'], [1, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'garam masala'], [0.5, 'tsp', 'black pepper'], '#Finish', [3, 'tbsp', 'ghee or oil'], [1, 'tbsp', 'ginger', 'julienned'], [3, '', 'green chilies', 'slit'], [1, 'tbsp', 'lemon juice']],
    steps: [
      ['Cook dark', 'Pressure-cook the chickpeas with the tea bags, cardamom, cinnamon, water and salt for 6 whistles. Discard the tea bags.', 25, 'The tea gives the dark colour.'],
      ['Coat', 'Dry-[[toast]] the masala spices for 1 minute, then toss with the drained chickpeas (keep the water) and a splash of it. Mash a few.', 3],
      ['Simmer', 'Add 200 ml of the cooking water and [[simmer]] until almost dry, 8 minutes.', 8],
      ['Hot ghee', 'Heat the ghee until smoking, add the ginger and chilies and pour over the chole. Add lemon.', 2],
    ],
    tips: ['Dry, not saucy: each chickpea should be coated.'], mistakes: ['Undercooked chickpeas stay hard.'],
    vars: ['Amritsari chole: with a little tomato and onion.'], serve: 'Kulcha or bhatura, onions and lemon.' });

  /* ======================= RICE ======================= */
  X('Kashmir', H, { id: 'kashmiri-pulao', name: 'Kashmiri Pulao', local: 'کشمیری پلاؤ', emoji: '🍚', course: 'main', level: 2, prep: 15, cook: 25, serves: 4,
    taste: { sweet: 3, aromatic: 5, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'party', 'kids'],
    desc: 'Fragrant saffron rice cooked in milk with whole spices, fried nuts and dried fruit. Mildly sweet.',
    story: 'Kashmiri wedding feasts (wazwan) include a sweet, golden pulao studded with dry fruits and sometimes apple or pomegranate.',
    equip: ['Heavy pot with lid'],
    ing: [[300, 'g', 'basmati rice', 'soaked 30 min'], [3, 'tbsp', 'ghee'], [10, '', 'cashews'], [10, '', 'almonds'], [2, 'tbsp', 'raisins'], [3, 'tbsp', 'dried apricots', 'chopped'], [1, 'piece', 'cinnamon stick'], [4, '', 'whole cloves'], [4, '', 'green cardamom pods'], [1, '', 'bay leaf'], [0.5, 'tsp', 'fennel seeds'], [1, 'pinch', 'saffron', 'soaked in 3 tbsp warm milk'], [150, 'ml', 'milk'], [400, 'ml', 'water'], [1, 'tbsp', 'sugar'], [1, 'tsp', 'salt'], [2, 'tbsp', 'pomegranate seeds']],
    steps: [
      ['Nuts', 'Fry the nuts and dried fruit in the ghee until golden; lift out.', 3],
      ['Spices and rice', 'Fry the whole spices and fennel 30 seconds, add the drained rice and [[toast]] gently 2 minutes.', 3],
      ['Cook', 'Add milk, water, sugar and salt, bring to a boil, cover and cook on low 12 minutes. Drizzle the saffron milk, cover and [[rest]] 10 minutes.', 22],
      ['Finish', 'Fold in half the nuts and fruit; top with the rest and pomegranate.'],
    ],
    tips: ['Soaked basmati cooks long and separate.'], mistakes: ['Stirring the rice while it cooks.'],
    vars: ['Add apple slices fried in ghee.'], serve: 'Kashmiri dum aloo or rajma.' });

  X('West Bengal', H, { id: 'bhoger-khichuri', name: 'Bhoger Khichuri', local: 'ভোগের খিচুড়ি', emoji: '🍲', course: 'main', level: 1, prep: 15, cook: 40, serves: 5,
    taste: { savory: 4, aromatic: 4, sweet: 2, rich: 3 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['festive', 'comfort', 'rainy-day', 'one-pot'],
    desc: 'Roasted moong dal and fragrant rice cooked soft with cauliflower, potatoes, peas, ginger and ghee. The Durga Puja offering.',
    story: '“Bhog” is food offered to the goddess. During Durga Puja, pandals serve this khichuri with labra (mixed vegetables) and begun bhaja to thousands.',
    equip: ['Heavy pot'],
    ing: [[150, 'g', 'yellow moong dal', 'dry-roasted until golden'], [150, 'g', 'gobindobhog or short-grain rice', 'washed'], [1.3, 'l', 'water'], [0.5, 'tsp', 'ground turmeric'], [2, '', 'potatoes', 'quartered'], [200, 'g', 'cauliflower', 'florets'], [80, 'g', 'green peas'], [1, 'tbsp', 'ginger', 'paste'], [3, 'tbsp', 'ghee'], [1, 'tsp', 'cumin seeds'], [2, '', 'bay leaves'], [2, '', 'dried red chilies'], [1, 'piece', 'cinnamon stick'], [3, '', 'green cardamom pods'], [1, 'tsp', 'sugar'], [1.25, 'tsp', 'salt'], [0.5, 'tsp', 'garam masala']],
    steps: [
      ['Roast the dal', 'Dry-[[toast]] the moong dal until golden and nutty, then wash.', 6, 'This is the secret of bhoger khichuri.'],
      ['Vegetables', 'Fry the potatoes and cauliflower in 1 tbsp ghee until spotted golden; set aside.', 6],
      ['Cook', 'Heat 1 tbsp ghee, add cumin, bay leaves, chilies and whole spices ([[tadka]]), then ginger, dal, rice and water with turmeric. [[simmer|Simmer]] 20 minutes, stirring now and then.', 20],
      ['Finish', 'Add the vegetables, peas, sugar and salt; cook 8 minutes until soft and porridge-like. Finish with the rest of the ghee and garam masala.', 8],
    ],
    tips: ['Khichuri thickens as it cools; loosen with hot water.'], mistakes: ['Skipping the dal roast.'],
    vars: ['Add a handful of cashews and raisins for festive bhog.'], serve: 'Begun bhaja and labra.' });

  /* ======================= GUJARAT & MAHARASHTRA SPECIALITIES ======================= */
  X('Gujarat', ['home-style'], { id: 'khandvi', name: 'Khandvi', local: 'ખાંડવી', emoji: '🌀', course: 'snack', level: 3, prep: 10, cook: 15, serves: 4,
    taste: { sour: 3, savory: 3, sweet: 2, aromatic: 3 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['party', 'impress'],
    desc: 'Silky rolls of gram flour cooked in buttermilk, spread paper-thin and topped with mustard seeds, sesame and coconut.',
    story: 'Khandvi is the showpiece of Gujarati farsan (snacks). The batter must be cooked to exactly the right point and spread fast before it sets.',
    equip: ['Non-stick pan', 'Clean flat counter or steel plates', 'Spatula'],
    ing: [[80, 'g', 'besan (gram flour)'], [250, 'ml', 'buttermilk', 'or 120 g yogurt + water'], [1, 'tsp', 'ginger-green chili paste'], [0.25, 'tsp', 'ground turmeric'], [0.5, 'tsp', 'salt'], [1, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'sesame seeds'], [8, 'leaf', 'curry leaves'], [2, 'tbsp', 'grated coconut'], [2, 'tbsp', 'cilantro']],
    steps: [
      ['Batter', '[[whisk|Whisk]] the besan, buttermilk, paste, turmeric and salt until lump-free.'],
      ['Cook', 'Cook on medium-low, stirring constantly, until very thick and glossy, 8–10 minutes. Test: spread a spoon on a plate; if it peels off after a minute, it’s ready.', 10, 'Undercooked won’t roll; overcooked won’t spread.'],
      ['Spread', 'Spread thin and fast on greased plates or the counter. Cool 5 minutes, cut 5 cm strips and roll up tightly.'],
      ['Top', 'Pour over a [[tadka]] of mustard, sesame and curry leaves; scatter coconut and cilantro.', 1],
    ],
    tips: ['Work quickly once the batter is ready.'], mistakes: ['Skipping the plate test.'],
    vars: ['Microwave khandvi: cooked in 1-minute bursts.'], serve: 'As a snack with tea.' });

  X('Gujarat', ['home-style'], { id: 'handvo', name: 'Handvo', local: 'હાંડવો', emoji: '🥧', course: 'snack', level: 2, prep: 20, cook: 40, rest: 480, serves: 6,
    taste: { savory: 4, sour: 2, sweet: 2, aromatic: 3 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['bake'], tags: ['meal-prep', 'brunch'],
    desc: 'A savoury baked cake of fermented rice, lentils and bottle gourd with a crunchy sesame crust.',
    story: 'Gujarati families bake handvo in a special pot on the stove; an oven or pan works too. The crisp sesame top is everyone’s favourite part.',
    equip: ['Blender', 'Baking tin or heavy pan with lid'],
    ing: [[150, 'g', 'rice', 'soaked 4 hours'], [80, 'g', 'mixed dals (toor, chana, moong, urad)', 'soaked 4 hours'], [100, 'g', 'yogurt'], [200, 'g', 'bottle gourd (lauki)', 'grated'], [1, 'tbsp', 'ginger-green chili paste'], [1, 'tbsp', 'sugar'], [1, 'tsp', 'salt'], [0.25, 'tsp', 'ground turmeric'], [0.5, 'tsp', 'baking soda'], [3, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [2, 'tbsp', 'sesame seeds'], [8, 'leaf', 'curry leaves']],
    steps: [
      ['Batter', 'Grind the soaked rice and dals coarsely with the yogurt; [[ferment]] 6–8 hours.', 480],
      ['Mix', 'Stir in the gourd, paste, sugar, salt, turmeric and finally the soda.'],
      ['Bake', 'Pour into an oiled tin, top with a [[tadka]] of mustard, sesame and curry leaves and bake at {{180C}} for 40 minutes until a skewer comes out clean.', 40, 'Or cook covered in a heavy pan on low, 15 minutes per side.'],
    ],
    tips: ['Coarse batter gives the right texture.'], mistakes: ['Cutting it hot: it crumbles.'],
    vars: ['Add grated carrot, peas or corn.'], serve: 'Green chutney and tea.' });

  X('Maharashtra', ['home-style'], { id: 'pitla-bhakri', name: 'Pitla Bhakri', local: 'पिठलं भाकरी', emoji: '🫓', course: 'main', level: 2, prep: 15, cook: 30, serves: 4,
    taste: { savory: 4, spicy: 3, herby: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer', 'saute'], tags: ['budget', 'comfort', 'rainy-day'],
    desc: 'A thick, spicy gram-flour porridge with garlic and green chili, eaten with rustic jowar flatbread.',
    story: 'Pitla bhakri is the farmer’s meal of rural Maharashtra: cheap, filling and ready in minutes, best with raw onion and thecha.',
    equip: ['Pan', 'Tawa', 'Bowl for kneading'],
    ing: ['#Pitla', [80, 'g', 'besan (gram flour)'], [400, 'ml', 'water'], [2, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'cumin seeds'], [6, 'clove', 'garlic', 'crushed'], [3, '', 'green chilies', 'chopped'], [1, '', 'onion', 'chopped'], [10, 'leaf', 'curry leaves'], [0.25, 'tsp', 'ground turmeric'], [0.75, 'tsp', 'salt'], [2, 'tbsp', 'cilantro'],
      '#Jowar bhakri', [250, 'g', 'jowar flour'], [250, 'ml', 'hot water'], [0.5, 'tsp', 'salt']],
    steps: [
      ['Pitla', 'Whisk the besan into the water. Make a [[tadka]] of mustard, cumin, garlic, chilies, onion and curry leaves; add turmeric, salt and the besan water and stir on low until thick, 8 minutes.', 10],
      ['Bhakri dough', 'Mix the jowar flour and salt with hot water and [[knead]] a small portion at a time with the heel of your hand until smooth.'],
      ['Pat and cook', 'Pat each ball into a round on a floured board, cook on a hot tawa 1 minute, brush the top with water, flip and cook until spotted; puff over a flame.', 15, 'Knead each bhakri just before patting: jowar dough dries out fast.'],
    ],
    tips: ['Serve pitla soft and spoonable.'], mistakes: ['Lumpy besan: whisk it into cold water first.'],
    vars: ['Bajra bhakri in winter.'], serve: 'Raw onion and thecha.' });

  X('Maharashtra', ['home-style'], { id: 'thecha', name: 'Thecha', local: 'ठेचा', emoji: '🌶️', course: 'sauce', level: 1, prep: 5, cook: 5, serves: 6,
    taste: { spicy: 5, savory: 3, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['quick'],
    desc: 'A fiery, coarse chutney of charred green chilies, garlic and peanuts, pounded on stone.',
    story: '“Thecha” means crushed. Maharashtrian farmers eat a spoon with bhakri and onion; it is not for the faint-hearted.',
    equip: ['Pan', 'Mortar and pestle'],
    ing: [[12, '', 'green chilies'], [8, 'clove', 'garlic'], [2, 'tbsp', 'peanuts'], [1, 'tbsp', 'oil'], [0.5, 'tsp', 'cumin seeds'], [0.5, 'tsp', 'salt'], [1, 'tbsp', 'cilantro']],
    steps: [
      ['Char', 'Fry the chilies, garlic and peanuts in the oil until blistered and spotted, 4 minutes ([[char]]).', 4],
      ['Pound', '[[pound|Pound]] with cumin, salt and cilantro to a coarse paste.'],
    ],
    tips: ['Use less-hot chilies for a milder thecha.'], mistakes: ['Blending smooth: it should be coarse.'],
    vars: ['Red thecha with dried chilies.'], serve: 'Bhakri, vada pav or rice.' });

  /* ======================= BENGAL & KOLKATA ======================= */
  X('West Bengal', H, { id: 'shukto', name: 'Shukto', local: 'শুক্তো', emoji: '🥘', course: 'main', level: 2, prep: 20, cook: 30, serves: 4,
    taste: { bitter: 3, sweet: 3, rich: 3, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['healthy', 'summer'],
    desc: 'Mixed vegetables with a hint of bitter gourd, cooked in milk with mustard-poppy paste and panch phoron.',
    story: 'A Bengali meal starts with something bitter to wake the palate. Shukto is the classic opener, gentle and milky with a bitter edge.',
    equip: ['Kadai', 'Grinder'],
    ing: [[1, '', 'bitter gourd', 'thin slices'], [1, '', 'raw banana', 'cubed'], [1, '', 'sweet potato', 'cubed'], [1, '', 'eggplant', 'cubed'], [100, 'g', 'flat beans', 'pieces'], [2, '', 'moringa (drumstick) pods', 'pieces'], [3, 'tbsp', 'mustard oil'], [1, 'tsp', 'panch phoron (five-spice seeds)'], [1, 'tbsp', 'mustard seeds', 'ground to paste'], [1, 'tbsp', 'white poppy seeds (posto)', 'ground to paste'], [1, 'tsp', 'ginger', 'paste'], [200, 'ml', 'milk'], [1, 'tbsp', 'sugar'], [1, 'tsp', 'salt'], [1, 'tbsp', 'ghee']],
    steps: [
      ['Fry', 'Fry the bitter gourd in the mustard oil until crisp; set aside. Lightly fry the other vegetables 5 minutes.', 10],
      ['Spices', 'Crackle panch phoron, add the mustard-poppy and ginger pastes with a splash of water and cook 2 minutes.', 3],
      ['Simmer', 'Add the vegetables, salt, sugar and 200 ml water; [[simmer]] until tender. Add the milk and bitter gourd and simmer 5 minutes. Finish with ghee.', 15],
    ],
    tips: ['Fry the bitter gourd separately so it doesn’t overpower.'], mistakes: ['Too much bitter gourd.'],
    vars: ['Add small fried lentil dumplings (bori).'], serve: 'First course, with rice.' });

  X('Kolkata', ['chaat'], { id: 'kolkata-puchka', name: 'Kolkata Puchka', local: 'ফুচকা', emoji: '🫧', course: 'snack', level: 2, prep: 25, cook: 10, serves: 4,
    taste: { sour: 5, spicy: 4, herby: 3 }, diet: ['vegan'], methods: ['no-cook'], tags: ['street-food', 'party', 'summer'],
    desc: 'Crisp puris filled with spicy mashed potato and black chickpeas, dunked in sharp tamarind water. Kolkata’s pani puri.',
    story: 'Kolkata’s puchka-wallahs mash the filling by hand with green chili, coriander and lots of tamarind. It is sourer and spicier than the sweet-chutney golgappe of Delhi.',
    equip: ['Bowls'],
    ing: [[30, '', 'ready-made puris (golgappa)'], '#Filling', [3, '', 'potatoes', 'boiled'], [100, 'g', 'black chickpeas (kala chana)', 'boiled'], [3, '', 'green chilies', 'chopped'], [2, 'tbsp', 'cilantro'], [1, 'tsp', 'roasted cumin powder'], [1, 'tsp', 'black salt (kala namak)'], [1, 'tbsp', 'tamarind paste'],
      '#Tamarind water', [3, 'tbsp', 'tamarind paste'], [700, 'ml', 'cold water'], [1, 'tsp', 'roasted cumin powder'], [1.5, 'tsp', 'black salt (kala namak)'], [2, '', 'green chilies', 'crushed'], [1, 'handful', 'cilantro', 'crushed'], [1, 'tsp', 'lemon juice']],
    steps: [
      ['Water', 'Mix the tamarind water ingredients and chill.'],
      ['Filling', 'Mash the potatoes with the chickpeas, chilies, cilantro, cumin, black salt and tamarind by hand.', null, 'Mash with your hand, like the vendors, for the right texture.'],
      ['Serve', 'Crack a hole in each puri, stuff with filling, dunk in the tamarind water and eat in one bite.'],
    ],
    tips: ['No sweet chutney in Kolkata puchka.'], mistakes: ['Filling too early: soggy puris.'],
    vars: ['Churmur: crushed puris tossed with the filling.', 'Delhi golgappe: jaljeera water and sweet chutney.'], serve: 'One at a time, straight from the bowl.' });

  X('Kerala', ['south-indian', 'restaurant'], { id: 'kerala-parotta', name: 'Kerala Parotta', local: 'പൊറോട്ട', emoji: '🫓', course: 'bread', level: 3, prep: 30, cook: 25, rest: 120, serves: 6,
    taste: { rich: 4, savory: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['impress', 'party'],
    desc: 'Soft, flaky layered flatbread made by stretching oiled dough paper-thin, coiling it and cooking on a tawa.',
    story: 'Kerala’s tea shops are famous for parotta “beaten” by hand. It is eaten with beef fry in Kerala; here it pairs with veg kurma or egg roast.',
    equip: ['Large work surface', 'Tawa'],
    ing: [[400, 'g', 'all-purpose flour'], [1, 'tsp', 'sugar'], [1, 'tsp', 'salt'], [1, '', 'egg', 'optional'], [200, 'ml', 'milk', 'warm'], [100, 'ml', 'water'], [6, 'tbsp', 'oil'], [2, 'tbsp', 'ghee']],
    steps: [
      ['Dough', '[[knead|Knead]] the flour, sugar, salt, milk and water into a very soft, smooth dough, 10 minutes. Coat with oil and [[rest]] 2 hours.', 120],
      ['Stretch', 'Divide into balls. Oil the counter and press each ball into a very thin sheet, stretching until you can see through it.'],
      ['Coil', 'Gather the sheet into pleats like a fan, then coil into a spiral. Rest 15 minutes, then press flat.', 15],
      ['Cook and beat', 'Cook on a hot tawa with ghee, 2 minutes per side. Stack 3 hot parottas and clap them between your palms to open the layers.', 15],
    ],
    tips: ['A wet, soft dough is the key to thin stretching.'], mistakes: ['Not resting the dough: it tears.'],
    vars: ['Whole-wheat parotta.', 'Leave out the egg for a fully vegetarian (eggless) version.'], serve: 'Veg kurma, egg roast or chicken curry.' });

  X('Kashmir', H, { id: 'chaman-kaliya', name: 'Chaman Kaliya', local: 'چمن قلیہ', emoji: '🧀', course: 'main', level: 2, prep: 10, cook: 25, serves: 4,
    taste: { aromatic: 5, rich: 4, sweet: 2 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['festive', 'impress'],
    desc: 'Fried paneer in a golden milk gravy scented with fennel, dry ginger, cardamom and turmeric. No onion, garlic or tomato.',
    story: 'A Kashmiri Pandit classic. “Chaman” is paneer and “kaliya” is a yellow gravy, made fragrant with fennel and ginger instead of onion.',
    equip: ['Pan'],
    ing: [[300, 'g', 'paneer', 'thick slices'], [3, 'tbsp', 'mustard oil'], [1, 'pinch', 'asafoetida (hing)'], [3, '', 'whole cloves'], [3, '', 'green cardamom pods'], [1, 'tsp', 'ground turmeric'], [1.5, 'tsp', 'fennel powder (saunf)'], [1, 'tsp', 'dry ginger powder (sonth)'], [300, 'ml', 'milk'], [150, 'ml', 'water'], [0.75, 'tsp', 'salt'], [0.25, 'tsp', 'cardamom powder']],
    steps: [
      ['Fry', '[[shallow-fry|Shallow-fry]] the paneer in mustard oil until golden; soak in warm salted water.', 5],
      ['Spice', 'In the same oil add hing, cloves and cardamom, then turmeric, fennel and dry ginger with the water.', 2],
      ['Simmer', 'Add the milk and salt, [[simmer]] 8 minutes, then add the paneer and simmer 5 minutes. Finish with cardamom.', 13],
    ],
    tips: ['Soaking the fried paneer keeps it soft.'], mistakes: ['Boiling the milk hard: it may split.'],
    vars: ['Add peas in season.'], serve: 'Steamed rice.' });

  /* ======================= SWEETS ======================= */
  X('West Bengal', ['sweets'], { id: 'sandesh', name: 'Sandesh', local: 'সন্দেশ', emoji: '🍥', course: 'dessert', level: 2, prep: 30, cook: 10, serves: 10,
    taste: { sweet: 4, rich: 3, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['festive', 'make-ahead'],
    desc: 'Delicate Bengali sweet of fresh chhena kneaded with sugar and cardamom, pressed into shapes.',
    story: 'Kolkata’s sweet shops make dozens of sandesh. In winter it is made with nolen gur (date-palm jaggery), the most prized flavour.',
    equip: ['Muslin cloth', 'Non-stick pan', 'Moulds (optional)'],
    ing: [[1, 'l', 'full-fat milk'], [2, 'tbsp', 'lemon juice', 'mixed with 2 tbsp water'], [60, 'g', 'powdered sugar'], [0.25, 'tsp', 'cardamom powder'], [1, 'tbsp', 'pistachios', 'sliced']],
    steps: [
      ['Make chhena', 'Boil the milk, turn off the heat, wait 1 minute, then add the lemon water slowly until it splits. Strain through muslin, rinse with cold water and hang 30 minutes.', 30],
      ['Knead', '[[knead|Knead]] the chhena with the heel of your hand for 5 minutes until completely smooth.'],
      ['Cook', 'Cook with the sugar on low, stirring, for 4–5 minutes until it just leaves the pan.', 5, 'Overcooking makes it grainy and dry.'],
      ['Shape', 'Add cardamom, cool slightly and press into moulds or discs; top with pistachio.'],
    ],
    tips: ['Use full-fat milk for soft chhena.'], mistakes: ['Squeezing the chhena too dry.'],
    vars: ['Nolen gur sandesh with date-palm jaggery.'], serve: 'Chilled or at room temperature.', store: 'Fridge 3 days.' });

  X('West Bengal', ['sweets'], { id: 'mishti-doi', name: 'Mishti Doi', local: 'মিষ্টি দই', emoji: '🍮', course: 'dessert', level: 2, prep: 10, cook: 30, rest: 600, serves: 6,
    taste: { sweet: 4, sour: 2, rich: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['make-ahead', 'summer', 'festive'],
    desc: 'Thick, sweet set yogurt made with caramelized sugar and reduced milk, traditionally in clay pots.',
    story: 'Mishti doi ends every Bengali feast. Clay pots soak up extra moisture, making it thick and creamy.',
    equip: ['Heavy pot', 'Clay pots or a bowl'],
    ing: [[1, 'l', 'full-fat milk'], [100, 'g', 'sugar', 'for caramel'], [3, 'tbsp', 'yogurt', 'starter, room temperature']],
    steps: [
      ['Reduce', '[[reduce|Reduce]] the milk by a third, stirring, about 20 minutes.', 20],
      ['Caramel', 'Melt the sugar with 2 tbsp water until deep amber; carefully stir into the hot milk until dissolved.', 6, 'Add caramel off the heat: it splutters.'],
      ['Set', 'Cool to lukewarm, whisk in the yogurt starter, pour into pots and set in a warm place 8–10 hours. Chill.', 600],
    ],
    tips: ['Lukewarm milk, not hot, or the culture dies.'], mistakes: ['Pale caramel: no colour or flavour.'],
    vars: ['Nolen gur doi with date-palm jaggery.'], serve: 'Chilled.', store: 'Fridge 4 days.' });

  X('Maharashtra', ['sweets'], { id: 'besan-ladoo', name: 'Besan Ladoo', local: 'बेसन लाडू', emoji: '🟡', course: 'dessert', level: 2, prep: 5, cook: 25, serves: 14,
    taste: { sweet: 4, rich: 4, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['festive', 'make-ahead'],
    desc: 'Nutty gram flour slow-roasted in ghee, mixed with sugar and cardamom and rolled into melt-in-the-mouth balls.',
    story: 'The Diwali sweet of Maharashtra and North India. The flavour depends entirely on patient roasting until it smells of toasted nuts.',
    equip: ['Heavy kadai'],
    ing: [[250, 'g', 'besan (gram flour)', 'coarse if possible'], [150, 'g', 'ghee'], [180, 'g', 'powdered sugar'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'almonds', 'chopped']],
    steps: [
      ['Roast', 'Roast the besan in the ghee on low heat, stirring constantly, for 20–25 minutes until golden, fragrant and loose ([[toast]]).', 25, 'It goes pasty, then loosens and smells nutty: that’s the sign.'],
      ['Cool', 'Cool until just warm.'],
      ['Shape', 'Mix in sugar, cardamom and almonds and roll into balls.'],
    ],
    tips: ['Never roast on high heat.'], mistakes: ['Adding sugar to hot besan: it melts and turns sticky.'],
    vars: ['Add a little semolina for crunch.'], serve: 'As a festive sweet.', store: 'Airtight 2 weeks.' });

  X('Rajasthan', ['sweets'], { id: 'moong-dal-halwa', name: 'Moong Dal Halwa', local: 'मूंग दाल हलवा', emoji: '🟠', course: 'dessert', level: 3, prep: 10, cook: 45, rest: 240, serves: 6,
    taste: { sweet: 5, rich: 5, aromatic: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['festive', 'winter', 'impress'],
    desc: 'Ground moong dal slow-roasted in ghee until deep golden, then cooked with saffron milk and sugar. Rajasthan’s winter wedding halwa.',
    story: 'It takes patience and strong arms, and that is why it is saved for weddings and the cold months in Rajasthan.',
    equip: ['Heavy kadai', 'Grinder'],
    ing: [[200, 'g', 'yellow moong dal', 'soaked 4 hours'], [150, 'g', 'ghee'], [400, 'ml', 'milk'], [1, 'pinch', 'saffron'], [150, 'g', 'sugar'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'almonds and pistachios', 'sliced']],
    steps: [
      ['Grind', 'Grind the drained dal to a coarse paste with no water.'],
      ['Roast', 'Cook the paste in the ghee on low, stirring constantly, until it breaks into grains and turns golden-brown, 30 minutes.', 30, 'It sticks at first and then loosens. Keep stirring.'],
      ['Milk and sugar', 'Add the hot saffron milk carefully (it splutters) and cook until absorbed, then the sugar and cardamom until the ghee separates.', 12],
    ],
    tips: ['Use a heavy pan to avoid burning.'], mistakes: ['Under-roasting: raw dal taste.'],
    vars: ['Add khoya for extra richness.'], serve: 'Warm.', store: 'Fridge 1 week; reheat.' });

  X('West Bengal', ['sweets'], { id: 'bengali-payesh', name: 'Bengali Payesh', local: 'পায়েস', emoji: '🍚', course: 'dessert', level: 1, prep: 5, cook: 45, serves: 5,
    taste: { sweet: 4, rich: 4, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'comfort'],
    desc: 'Fragrant short-grain gobindobhog rice slow-cooked in milk, sweetened with sugar or date-palm jaggery.',
    story: 'Payesh is made for birthdays and blessings in Bengal. In winter it is sweetened with nolen gur, the date-palm jaggery.',
    equip: ['Heavy pot'],
    ing: [[50, 'g', 'gobindobhog or short-grain rice', 'washed, dried'], [1, 'l', 'full-fat milk'], [1, '', 'bay leaf'], [3, '', 'green cardamom pods'], [90, 'g', 'sugar', 'or date palm jaggery'], [1, 'tsp', 'ghee'], [1, 'tbsp', 'raisins'], [8, '', 'cashews']],
    steps: [
      ['Coat the rice', 'Rub the rice with the ghee.'],
      ['Cook', 'Boil the milk with bay leaf and cardamom, add the rice and [[simmer]], stirring, for 35 minutes until soft and the milk thickens.', 35],
      ['Sweeten', 'Add the sugar (or jaggery, off the heat), raisins and cashews.', 5, 'Jaggery can curdle hot milk: add it once the pot is off the heat.'],
    ],
    tips: ['Small-grain aromatic rice is essential.'], mistakes: ['Not stirring: it catches.'],
    vars: ['Kerala palada pradhaman.', 'North Indian kheer with basmati.'], serve: 'Warm or chilled.' });

  /* ======================= DRINKS ======================= */
  X('Tamil Nadu', ['south-indian'], { id: 'neer-mor', name: 'Neer Mor (Spiced Buttermilk)', local: 'நீர் மோர்', emoji: '🥛', course: 'drink', level: 1, prep: 5, cook: 0, serves: 4,
    taste: { sour: 2, savory: 3, herby: 3, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'quick', 'healthy'],
    desc: 'Thin, cooling buttermilk with ginger, green chili, curry leaves and a whiff of asafoetida.',
    story: 'Tamil temples and roadside stalls hand out neer mor in summer. Kerala’s sambharam is almost the same, with shallots.',
    equip: ['Jug', 'Whisk'],
    ing: [[250, 'g', 'yogurt'], [750, 'ml', 'cold water'], [1, '', 'green chili', 'crushed'], [5, 'g', 'ginger', 'crushed'], [8, 'leaf', 'curry leaves', 'torn'], [1, 'tbsp', 'cilantro'], [0.5, 'tsp', 'salt'], [1, 'pinch', 'asafoetida (hing)']],
    steps: [
      ['Whisk', '[[whisk|Whisk]] the yogurt with the water until smooth.'],
      ['Flavour', 'Add everything else, rest 10 minutes and serve cold.', 10],
    ],
    tips: ['Crush the ginger and curry leaves to release flavour.'], mistakes: ['Too thick: neer mor is thin.'],
    vars: ['Masala chaas (Gujarat) with roasted cumin.'], serve: 'Ice-cold, after lunch.' });

  X('Kerala', ['south-indian'], { id: 'sulaimani', name: 'Sulaimani Tea', local: 'സുലൈമാനി', emoji: '🍵', course: 'drink', level: 1, prep: 2, cook: 5, serves: 2,
    taste: { aromatic: 5, sour: 2, sweet: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['quick'],
    desc: 'Light black tea brewed with cardamom, cloves and cinnamon, finished with lemon and a little sugar.',
    story: 'Sulaimani is Malabar’s after-meal tea, served after a heavy biryani to aid digestion. Its name is linked to the Arab traders of the coast.',
    equip: ['Small pot'],
    ing: [[500, 'ml', 'water'], [2, '', 'green cardamom pods', 'crushed'], [2, '', 'whole cloves'], [1, 'piece', 'cinnamon stick', 'small'], [1, 'tsp', 'strong black tea leaves'], [2, 'tsp', 'sugar'], [1, 'tbsp', 'lemon juice']],
    steps: [
      ['Infuse', 'Boil the water with the spices for 3 minutes.', 3],
      ['Brew', 'Add the tea, turn off the heat, cover 1 minute, strain and stir in sugar and lemon.', 1, 'Short brewing keeps it light, not bitter.'],
    ],
    tips: ['Add a mint leaf for freshness.'], mistakes: ['Boiling the tea leaves: bitter.'],
    vars: ['Honey instead of sugar (not vegan).'], serve: 'After biryani or ghee rice.' });

  X('Tamil Nadu', ['south-indian'], { id: 'panakam', name: 'Panakam', local: 'பானகம்', emoji: '🥤', course: 'drink', level: 1, prep: 5, cook: 0, serves: 4,
    taste: { sweet: 4, spicy: 2, aromatic: 4 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'festive', 'quick'],
    desc: 'A cooling jaggery drink with dry ginger, cardamom, black pepper and lemon, made for Rama Navami.',
    story: 'Panakam is offered at temples on Rama Navami, at the height of summer. Jaggery and dry ginger refresh and cool the body.',
    equip: ['Jug'],
    ing: [[100, 'g', 'jaggery', 'grated'], [800, 'ml', 'water'], [0.5, 'tsp', 'dry ginger powder (sonth)'], [0.25, 'tsp', 'cardamom powder'], [0.25, 'tsp', 'black pepper'], [1, 'tbsp', 'lemon juice'], [1, 'pinch', 'salt']],
    steps: [
      ['Dissolve', 'Stir the jaggery into the water until dissolved; strain.'],
      ['Spice', 'Add the dry ginger, cardamom, pepper, lemon and salt. Chill.'],
    ],
    tips: ['A tulsi leaf is traditional.'], mistakes: ['Unstrained jaggery can be gritty.'],
    vars: ['Add a little edible camphor as in temples.'], serve: 'Chilled.' });
})();
