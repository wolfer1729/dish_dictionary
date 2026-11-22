/* South India, part 2: sambar & rasam styles, curries, snacks, chutneys and sweets.
   Original recipes written for Dish Dictionary. */
'use strict';
(function () {
  const X = (area, styles, d) => DD.add(Object.assign({ country: 'India', flag: '🇮🇳', region: 'South Asia', area, styles }, d));
  const SI = ['south-indian'];
  const SIH = ['south-indian', 'home-style'];

  /* ======================= SAMBAR & RASAM STYLES ======================= */
  X('Karnataka', ['south-indian', 'restaurant'], { id: 'udupi-sambar', name: 'Udupi Sambar', local: 'ಉಡುಪಿ ಸಾಂಬಾರ್', emoji: '🍲', course: 'main', level: 2, prep: 15, cook: 35, serves: 6,
    taste: { sour: 3, sweet: 3, spicy: 2, aromatic: 4 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['comfort', 'weeknight', 'meal-prep'],
    desc: 'The sweet-sour sambar of Udupi temple kitchens: toor dal and vegetables in a freshly roasted coconut masala with a touch of jaggery.',
    story: 'Udupi’s Krishna temple cooks gave the world the Udupi restaurant. Their sambar is milder and sweeter than Tamil sambar, with no onion or garlic, and the spice paste is roasted and ground fresh with coconut.',
    equip: ['Pressure cooker', 'Kadai', 'Blender'],
    ing: ['#Dal', [150, 'g', 'toor dal'], [600, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'],
      '#Fresh masala', [1, 'tsp', 'oil'], [1, 'tbsp', 'coriander seeds'], [1, 'tsp', 'urad dal'], [0.25, 'tsp', 'fenugreek seeds'], [6, '', 'dried red chilies (byadgi)'], [60, 'g', 'grated coconut'],
      '#Vegetables', [300, 'g', 'mixed vegetables (pumpkin, ash gourd, beans, carrot)', 'chunks'], [2, '', 'moringa (drumstick) pods', '7 cm pieces'], [1, '', 'tomato'], [1.5, 'tbsp', 'tamarind paste'], [1.5, 'tbsp', 'jaggery'], [1.25, 'tsp', 'salt'], [400, 'ml', 'water'],
      '#Tadka', [1, 'tbsp', 'coconut oil'], [1, 'tsp', 'mustard seeds'], [2, '', 'dried red chilies'], [10, 'leaf', 'curry leaves'], [1, 'pinch', 'asafoetida (hing)']],
    steps: [
      ['Cook the dal', 'Pressure-cook the dal with water and turmeric for 4 whistles; mash smooth.', 15],
      ['Roast and grind', 'In the oil, [[toast]] the coriander, urad dal, fenugreek and chilies until fragrant, add the coconut for 1 minute, then grind with a little water to a smooth paste.', 6],
      ['Vegetables', 'Simmer the vegetables, moringa and tomato in the water with salt until tender; add the tamarind and jaggery.', 12],
      ['Combine', 'Add the dal and masala paste and [[simmer]] 5 minutes. Finish with the [[tadka]].', 6],
    ],
    tips: ['Ash gourd and pumpkin are the classic Udupi vegetables.'], mistakes: ['Boiling hard after adding coconut: it splits.'],
    vars: ['Tamil Nadu sambar: with shallots and sambar powder, no jaggery.', 'Kerala varutharacha sambar: coconut roasted dark brown.'], serve: 'Rice, idli, dosa or vada.' });

  X('Kerala', SIH, { id: 'kerala-sambar', name: 'Kerala Varutharacha Sambar', local: 'വറുത്തരച്ച സാമ്പാർ', emoji: '🍲', course: 'main', level: 2, prep: 15, cook: 40, serves: 6,
    taste: { sour: 3, spicy: 3, aromatic: 5, savory: 4 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['festive', 'comfort'],
    desc: 'Kerala’s sambar with coconut and spices roasted to a deep brown before grinding, giving a dark, nutty, smoky gravy.',
    story: '“Varutharacha” means roasted and ground. This sambar is a must at the Onam sadya (the banana-leaf feast), cooked with Kerala vegetables like ash gourd, yam and raw banana.',
    equip: ['Pressure cooker', 'Heavy kadai', 'Blender'],
    ing: ['#Dal', [150, 'g', 'toor dal'], [600, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'],
      '#Roasted masala', [80, 'g', 'grated coconut'], [1.5, 'tbsp', 'coriander seeds'], [5, '', 'dried red chilies'], [0.25, 'tsp', 'fenugreek seeds'], [6, '', 'shallots'], [10, 'leaf', 'curry leaves'], [1, 'tsp', 'coconut oil'],
      '#Vegetables', [350, 'g', 'mixed vegetables (ash gourd, yam, raw banana, carrot, beans)'], [2, '', 'moringa (drumstick) pods'], [8, '', 'shallots', 'peeled'], [1, '', 'tomato'], [2, 'tbsp', 'tamarind paste'], [1.25, 'tsp', 'salt'], [500, 'ml', 'water'],
      '#Tadka', [1, 'tbsp', 'coconut oil'], [1, 'tsp', 'mustard seeds'], [2, '', 'dried red chilies'], [10, 'leaf', 'curry leaves']],
    steps: [
      ['Dal', 'Pressure-cook the dal with water and turmeric for 4 whistles; mash.', 15],
      ['Roast dark', 'In the oil, roast the coconut, coriander, chilies, fenugreek, shallots and curry leaves on low, stirring, until the coconut is deep reddish-brown, 10–12 minutes. Grind smooth with water.', 12, 'Patience: the colour is the flavour. Pale coconut gives a flat sambar.'],
      ['Simmer', 'Cook the vegetables, shallots and tomato with the salt until tender, add the tamarind, dal and masala and [[simmer]] 8 minutes.', 18],
      ['Tadka', 'Finish with the coconut-oil [[tadka]].', 1],
    ],
    tips: ['Coconut oil in the tadka is essential for the Kerala taste.'], mistakes: ['Burnt coconut: bitter sambar. Roast on low.'],
    vars: ['Udupi sambar: sweeter, coconut not browned.', 'Tamil Nadu sambar: no coconut, sambar powder.'], serve: 'Kerala matta rice and the sadya spread.' });

  X('Andhra Pradesh', SIH, { id: 'tomato-pappu', name: 'Tomato Pappu (Andhra Dal)', local: 'టమాటా పప్పు', emoji: '🥣', course: 'main', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { sour: 4, spicy: 3, savory: 4 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['weeknight', 'comfort', 'budget', 'one-pot'],
    desc: 'Andhra’s everyday dal: toor dal cooked with lots of tomatoes and green chilies, finished with a garlic tadka.',
    story: 'Pappu (dal) with rice and ghee is the comfort meal of every Telugu home. Andhra cooks make it tangier and hotter than dal elsewhere; palak pappu and mamidikaya (raw mango) pappu are its cousins.',
    equip: ['Pressure cooker', 'Tadka pan'],
    ing: [[150, 'g', 'toor dal'], [3, '', 'tomatoes', 'chopped'], [4, '', 'green chilies', 'slit'], [1, '', 'onion', 'chopped'], [0.5, 'tsp', 'ground turmeric'], [600, 'ml', 'water'], [1, 'tsp', 'salt'], [1, 'tsp', 'tamarind paste'], [1, 'tbsp', 'ghee or oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'cumin seeds'], [6, 'clove', 'garlic', 'crushed'], [2, '', 'dried red chilies'], [10, 'leaf', 'curry leaves'], [1, 'pinch', 'asafoetida (hing)'], [2, 'tbsp', 'cilantro']],
    steps: [
      ['Cook', 'Pressure-cook the dal, tomatoes, green chilies, onion and turmeric with the water for 4 whistles.', 15],
      ['Mash', 'Mash well with a whisk, add the salt and tamarind and [[simmer]] 3 minutes.', 3],
      ['Tadka', 'Fry the mustard, cumin, garlic, chilies, curry leaves and hing in ghee until the garlic is golden ([[tadka]]); pour over and add cilantro.', 2],
    ],
    tips: ['Lots of garlic in the tadka is the Andhra signature.'], mistakes: ['Watery pappu: it should coat the rice.'],
    vars: ['Palak pappu: spinach instead of tomatoes.', 'Mamidikaya pappu: raw mango.'], serve: 'Hot rice, ghee and avakaya pickle.' });

  X('Karnataka', SI, { id: 'mysore-rasam', name: 'Mysore Rasam', local: 'ಮೈಸೂರು ಸಾರು', emoji: '🍵', course: 'soup', level: 2, prep: 10, cook: 25, serves: 4,
    taste: { sour: 3, aromatic: 5, spicy: 2, sweet: 1 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'rainy-day', 'winter', 'healthy'],
    desc: 'A richer rasam with dal and a freshly roasted spice-and-coconut paste, finished with ghee.',
    story: 'Mysore rasam (Mysore saaru) was made for the royal kitchens of Mysuru: unlike thin everyday rasam, it is thickened with dal and freshly ground masala.',
    equip: ['Pot', 'Small pan', 'Grinder'],
    ing: [[60, 'g', 'toor dal', 'cooked soft'], [2, '', 'tomatoes', 'chopped'], [1, 'tbsp', 'tamarind paste'], [800, 'ml', 'water'], [1, 'tsp', 'jaggery'], [1, 'tsp', 'salt'], [0.25, 'tsp', 'ground turmeric'],
      '#Masala', [1, 'tbsp', 'coriander seeds'], [1, 'tsp', 'chana dal'], [1, 'tsp', 'cumin seeds'], [0.5, 'tsp', 'black pepper'], [3, '', 'dried red chilies'], [2, 'tbsp', 'grated coconut'],
      '#Tadka', [1, 'tbsp', 'ghee'], [1, 'tsp', 'mustard seeds'], [10, 'leaf', 'curry leaves'], [1, 'pinch', 'asafoetida (hing)'], [2, 'tbsp', 'cilantro']],
    steps: [
      ['Masala', 'Dry-[[toast]] the coriander, chana dal, cumin, pepper and chilies, then the coconut briefly. Grind with a little water to a paste.', 5],
      ['Boil', 'Boil the tomatoes, tamarind, water, turmeric, jaggery and salt for 8 minutes until the raw tamarind smell goes.', 8],
      ['Rasam', 'Add the dal and masala paste and heat until it just froths; do not boil hard.', 4, 'A rolling boil kills the aroma.'],
      ['Tadka', 'Pour over a ghee [[tadka]] and add cilantro.', 1],
    ],
    tips: ['Use well-mashed dal for body.'], mistakes: ['Boiling after the masala goes in.'],
    vars: ['Pepper rasam: no dal, more pepper and garlic.'], serve: 'Hot rice and ghee, or drink it from a cup.' });

  X('Tamil Nadu', SIH, { id: 'pepper-rasam', name: 'Pepper Rasam (Milagu Rasam)', local: 'மிளகு ரசம்', emoji: '🍵', course: 'soup', level: 1, prep: 5, cook: 15, serves: 4,
    taste: { sour: 3, spicy: 4, aromatic: 5 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['quick', 'rainy-day', 'winter', 'healthy', 'budget'],
    desc: 'A thin, peppery, garlicky tamarind broth, Tamil Nadu’s cure for colds.',
    story: 'Milagu rasam is what Tamil grandmothers make the moment someone sneezes: black pepper, cumin and garlic pounded fresh and simmered in tamarind water.',
    equip: ['Mortar and pestle', 'Pot'],
    ing: [[1.5, 'tsp', 'black pepper', 'whole'], [1, 'tsp', 'cumin seeds'], [6, 'clove', 'garlic'], [1, 'tbsp', 'tamarind paste'], [1, '', 'tomato', 'crushed'], [800, 'ml', 'water'], [0.25, 'tsp', 'ground turmeric'], [1, 'tsp', 'salt'], [1, 'tbsp', 'ghee or oil'], [1, 'tsp', 'mustard seeds'], [10, 'leaf', 'curry leaves'], [1, 'pinch', 'asafoetida (hing)'], [2, 'tbsp', 'cilantro']],
    steps: [
      ['Pound', '[[pound|Pound]] the pepper, cumin and garlic coarsely.'],
      ['Boil', 'Boil the tamarind, tomato, water, turmeric and salt for 8 minutes.', 8],
      ['Tadka', 'Heat the ghee, crackle the mustard, add the curry leaves, hing and pounded spices for 30 seconds and pour into the rasam. Heat until frothy, then add cilantro.', 2],
    ],
    tips: ['Freshly pounded pepper is far stronger than ground pepper.'], mistakes: ['Over-boiling: bitter rasam.'],
    vars: ['Andhra charu: hotter, more tomato.', 'Mysore rasam: richer, with dal and coconut.'], serve: 'Rice and potato fry, or sip hot.' });

  /* ======================= CURRIES & SIDES ======================= */
  X('Tamil Nadu', ['south-indian', 'restaurant'], { id: 'veg-kurma', name: 'Hotel-Style Veg Kurma', local: 'காய்கறி குருமா', emoji: '🥘', course: 'main', level: 2, prep: 20, cook: 25, serves: 4,
    taste: { rich: 4, aromatic: 5, spicy: 2, savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'party', 'weeknight'],
    desc: 'Mixed vegetables in a fragrant coconut, cashew, poppy-seed and fennel gravy, the Tamil restaurant kurma.',
    story: 'Kurma is the South Indian cousin of the Mughlai korma: coconut replaces cream, and fennel and green chilies lead. Every Chennai hotel serves it with parotta and poori.',
    equip: ['Kadai', 'Blender'],
    ing: ['#Paste', [80, 'g', 'grated coconut'], [10, '', 'cashews'], [1, 'tbsp', 'poppy seeds'], [1, 'tsp', 'fennel seeds'], [3, '', 'green chilies'], [1, 'tbsp', 'roasted chana dal'],
      '#Kurma', [2, 'tbsp', 'oil'], [1, 'piece', 'cinnamon stick'], [3, '', 'whole cloves'], [1, '', 'bay leaf'], [1, '', 'onion', 'sliced'], [1, 'tbsp', 'ginger-garlic paste'], [1, '', 'tomato', 'chopped'], [350, 'g', 'mixed vegetables (carrot, beans, peas, potato, cauliflower)'], [0.25, 'tsp', 'ground turmeric'], [1, 'tsp', 'salt'], [400, 'ml', 'water'], [2, 'tbsp', 'cilantro']],
    steps: [
      ['Paste', 'Grind the coconut, cashews, poppy, fennel, chilies and roasted dal with water to a very smooth paste.'],
      ['Base', 'Fry the whole spices, then [[saute]] the onion until soft; add the ginger-garlic paste and tomato and cook until mushy.', 8],
      ['Simmer', 'Add the vegetables, turmeric, salt and water; cook until tender. Stir in the paste and [[simmer]] 5 minutes.', 15],
    ],
    tips: ['Soak the poppy seeds and cashews for a smoother gravy.'], mistakes: ['Boiling hard after the coconut paste: grainy.'],
    vars: ['Mughlai navratan korma: cream and dried fruit.', 'Kerala vegetable stew: no chilies or spices paste, just coconut milk.'], serve: 'Parotta, chapati, poori or appam.' });

  X('Andhra Pradesh', SIH, { id: 'bendakaya-pulusu', name: 'Bendakaya Pulusu (Okra Tamarind Stew)', local: 'బెండకాయ పులుసు', emoji: '🥘', course: 'main', level: 1, prep: 15, cook: 25, serves: 4,
    taste: { sour: 4, sweet: 2, spicy: 3, savory: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['weeknight', 'budget'],
    desc: 'Pan-fried okra in a sweet-sour tamarind and jaggery stew, an Andhra lunch classic.',
    story: 'Pulusu is Andhra’s tamarind stew, the equivalent of Tamil kuzhambu. Frying the okra first keeps it from getting slimy.',
    equip: ['Kadai'],
    ing: [[250, 'g', 'okra (bhindi)', '3 cm pieces'], [2, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'fenugreek seeds'], [10, 'leaf', 'curry leaves'], [1, '', 'onion', 'sliced'], [2, '', 'green chilies', 'slit'], [2, 'tbsp', 'tamarind paste'], [1, 'tbsp', 'jaggery'], [1, 'tsp', 'kashmiri chili powder'], [0.25, 'tsp', 'ground turmeric'], [1, 'tbsp', 'rice flour', 'mixed with water'], [400, 'ml', 'water'], [1, 'tsp', 'salt']],
    steps: [
      ['Fry the okra', '[[saute|Sauté]] the okra in 1 tbsp oil on medium until no longer slimy, 6 minutes; set aside.', 6],
      ['Base', 'Crackle the mustard and fenugreek in the rest of the oil, add the curry leaves, onion and chilies and cook 4 minutes.', 4],
      ['Pulusu', 'Add the tamarind, jaggery, chili, turmeric, salt and water; [[simmer]] 8 minutes. Add the okra and rice-flour slurry and simmer 4 minutes until slightly thick.', 12],
    ],
    tips: ['It tastes better a few hours later.'], mistakes: ['Washing okra after cutting: slime.'],
    vars: ['Tamil vendakkai puli kuzhambu: with sambar powder and gingelly oil.', 'Mixed vegetable pulusu.'], serve: 'Hot rice and pappu.' });

  X('Andhra Pradesh', SIH, { id: 'gutti-vankaya', name: 'Gutti Vankaya (Stuffed Brinjal Curry)', local: 'గుత్తి వంకాయ', emoji: '🍆', course: 'main', level: 2, prep: 20, cook: 30, serves: 4,
    taste: { spicy: 3, savory: 4, sour: 2, rich: 4, aromatic: 4 }, diet: ['vegan', 'gluten-free'], methods: ['braise'], tags: ['festive', 'party', 'impress'],
    desc: 'Whole baby brinjals stuffed with a roasted peanut, sesame, coconut and spice paste, braised until meltingly soft.',
    story: 'Gutti vankaya is the pride of Telugu wedding feasts. Hyderabad’s bagara baingan uses a similar nutty paste as a gravy; Tamil Nadu’s ennai kathirikai is made with more tamarind and gingelly oil.',
    equip: ['Heavy pan with lid', 'Spice grinder'],
    ing: [[400, 'g', 'baby eggplants (small brinjals)', 'slit in a cross, stem on'], '#Stuffing', [3, 'tbsp', 'peanuts'], [1, 'tbsp', 'sesame seeds'], [2, 'tbsp', 'dry coconut'], [1, 'tbsp', 'coriander seeds'], [1, 'tsp', 'cumin seeds'], [1, '', 'onion', 'chopped'], [4, 'clove', 'garlic'], [1.5, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'tamarind paste'], [1, 'tsp', 'jaggery'], [0.25, 'tsp', 'ground turmeric'], [1, 'tsp', 'salt'],
      '#Cooking', [4, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [10, 'leaf', 'curry leaves'], [150, 'ml', 'water'], [2, 'tbsp', 'cilantro']],
    steps: [
      ['Stuffing', 'Dry-[[toast]] the peanuts, sesame, coconut, coriander and cumin; grind with the onion, garlic, chili, tamarind, jaggery, turmeric and salt to a coarse paste.', 6],
      ['Stuff', 'Fill each brinjal generously with the paste; keep the leftover paste.'],
      ['Braise', 'Crackle the mustard and curry leaves in the oil, lay the brinjals in, cover and cook on low for 10 minutes, turning gently. Add the leftover paste and water and [[braise]] covered for 15 minutes until soft.', 25, 'Low heat and a lid: the brinjals steam in the oil.'],
    ],
    tips: ['Keep the stems on so the brinjals hold together.'], mistakes: ['High heat: the paste burns before the brinjals soften.'],
    vars: ['Bagara baingan (Hyderabad).', 'Tamil ennai kathirikai.'], serve: 'Rice, ghee, or with biryani.' });

  X('Tamil Nadu', SIH, { id: 'cabbage-kootu', name: 'Cabbage Kootu', local: 'முட்டைகோஸ் கூட்டு', emoji: '🥬', course: 'side', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { savory: 3, sweet: 2, aromatic: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['healthy', 'budget', 'weeknight'],
    desc: 'A mild, comforting stew of cabbage and moong dal with a coconut-cumin paste.',
    story: '“Kootu” means “together”: vegetables and lentils cooked together. It is the gentle, unspiced side on a Tamil plate, between fiery kuzhambu and rasam.',
    equip: ['Pot', 'Grinder'],
    ing: [[80, 'g', 'yellow moong dal'], [300, 'g', 'cabbage', 'shredded'], [500, 'ml', 'water'], [0.25, 'tsp', 'ground turmeric'], [0.75, 'tsp', 'salt'], [50, 'g', 'grated coconut'], [1, 'tsp', 'cumin seeds'], [2, '', 'green chilies'], [1, 'tbsp', 'coconut oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'urad dal'], [10, 'leaf', 'curry leaves']],
    steps: [
      ['Dal', '[[simmer|Simmer]] the moong dal with the water and turmeric until soft, 15 minutes.', 15],
      ['Cabbage', 'Add the cabbage and salt and cook 6 minutes until tender.', 6],
      ['Paste', 'Grind the coconut, cumin and chilies, stir in and simmer 3 minutes. Finish with a coconut-oil [[tadka]] of mustard, urad dal and curry leaves.', 4],
    ],
    tips: ['Kootu should be thick, not soupy.'], mistakes: ['Overcooking the cabbage to mush.'],
    vars: ['Snake gourd, chow chow or spinach kootu.', 'Kerala style: add a pinch of pepper.'], serve: 'Rice with rasam or sambar.' });

  X('Kerala', SIH, { id: 'beetroot-thoran', name: 'Beetroot Thoran', local: 'ബീറ്റ്റൂട്ട് തോരൻ', emoji: '🟣', course: 'side', level: 1, prep: 15, cook: 12, serves: 4,
    taste: { sweet: 3, savory: 3, herby: 2 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['healthy', 'quick', 'kids'],
    desc: 'Finely chopped beetroot stir-fried with coconut, green chili, shallots and curry leaves.',
    story: 'Thoran is Kerala’s dry vegetable stir-fry, always with crushed coconut. It is the Kerala version of Tamil poriyal and the Karnataka palya, and a must on the Onam sadya.',
    equip: ['Kadai'],
    ing: [[3, '', 'beetroot', 'finely chopped'], [60, 'g', 'grated coconut'], [2, '', 'green chilies'], [4, '', 'shallots'], [1, 'clove', 'garlic'], [0.25, 'tsp', 'cumin seeds'], [1, 'tbsp', 'coconut oil'], [1, 'tsp', 'mustard seeds'], [10, 'leaf', 'curry leaves'], [0.75, 'tsp', 'salt']],
    steps: [
      ['Crush the coconut', 'Pulse the coconut, chilies, shallots, garlic and cumin to a coarse crumble ([[pound]]), no water.'],
      ['Cook', 'Crackle the mustard and curry leaves in the oil, add the beetroot and salt, cover and cook 6 minutes.', 6],
      ['Finish', 'Make a well, add the coconut mix, cover it with beetroot for 2 minutes, then toss.', 3],
    ],
    tips: ['Chop the beetroot very fine so it cooks quickly.'], mistakes: ['Adding water: thoran should be dry.'],
    vars: ['Cabbage, beans or carrot thoran.', 'Tamil poriyal: with urad dal in the tadka.'], serve: 'Rice, sambar and the sadya.' });

  X('Karnataka', SIH, { id: 'pineapple-gojju', name: 'Pineapple Gojju', local: 'ಅನಾನಸ್ ಗೊಜ್ಜು', emoji: '🍍', course: 'side', level: 1, prep: 10, cook: 20, serves: 4,
    taste: { sweet: 4, sour: 3, spicy: 3, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'party'],
    desc: 'Pineapple simmered in a sweet, sour and spicy tamarind-jaggery sauce with sesame and spices.',
    story: 'Gojju is Karnataka’s sweet-sour-spicy relish curry. Pineapple gojju appears at weddings and festivals next to the rice.',
    equip: ['Kadai', 'Spice grinder'],
    ing: [[300, 'g', 'pineapple', 'small cubes'], [1, 'tbsp', 'tamarind paste'], [2, 'tbsp', 'jaggery'], [250, 'ml', 'water'], [0.5, 'tsp', 'salt'], '#Gojju powder', [1, 'tsp', 'sesame seeds'], [1, 'tsp', 'coriander seeds'], [0.25, 'tsp', 'fenugreek seeds'], [4, '', 'dried red chilies'], [1, 'tbsp', 'dry coconut'], '#Tadka', [1, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [10, 'leaf', 'curry leaves'], [1, 'pinch', 'asafoetida (hing)']],
    steps: [
      ['Powder', 'Dry-[[toast]] the sesame, coriander, fenugreek, chilies and coconut and grind to a powder.', 4],
      ['Simmer', 'Make a [[tadka]] of mustard, curry leaves and hing; add the pineapple, water, salt, tamarind and jaggery and [[simmer]] 10 minutes.', 10],
      ['Thicken', 'Stir in the powder and simmer until glossy and thick, 4 minutes.', 4],
    ],
    tips: ['Use ripe but firm pineapple.'], mistakes: ['Too thin: it should coat a spoon.'],
    vars: ['Bitter gourd or okra gojju.'], serve: 'Rice, chapati or as a festive side.' });

  X('Kerala', SIH, { id: 'mambazha-pulissery', name: 'Mambazha Pulissery (Ripe Mango Curry)', local: 'മാമ്പഴ പുളിശ്ശേരി', emoji: '🥭', course: 'side', level: 1, prep: 10, cook: 20, serves: 4,
    taste: { sweet: 4, sour: 3, spicy: 2, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'summer'],
    desc: 'Small ripe mangoes simmered whole, then folded into a turmeric-yellow coconut and yogurt curry.',
    story: 'A summer sadya favourite in Kerala when small country mangoes ripen. Mangaluru’s mango curry (mavinahannu gojju) is the sweeter, coconut-free cousin.',
    equip: ['Pot', 'Grinder'],
    ing: [[4, '', 'ripe mangoes', 'small, peeled'], [250, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], [0.5, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'jaggery'], [0.75, 'tsp', 'salt'], [80, 'g', 'grated coconut'], [0.5, 'tsp', 'cumin seeds'], [2, '', 'green chilies'], [250, 'g', 'yogurt', 'whisked'], [1, 'tbsp', 'coconut oil'], [1, 'tsp', 'mustard seeds'], [0.25, 'tsp', 'fenugreek seeds'], [2, '', 'dried red chilies'], [10, 'leaf', 'curry leaves']],
    steps: [
      ['Mangoes', '[[simmer|Simmer]] the mangoes in the water with the turmeric, chili, jaggery and salt for 10 minutes.', 10],
      ['Coconut', 'Grind the coconut, cumin and green chilies, add to the pot and simmer 3 minutes.', 3],
      ['Yogurt', 'Take the pot off the heat and stir in the yogurt; warm gently without boiling.', 2, 'Boiling splits the yogurt.'],
      ['Tadka', 'Pour over a coconut-oil [[tadka]] of mustard, fenugreek, red chilies and curry leaves.', 1],
    ],
    tips: ['Small, very ripe, fibrous country mangoes work best.'], mistakes: ['Boiling after adding yogurt.'],
    vars: ['Kaalan: raw banana and yam in a thicker version.'], serve: 'Rice and thoran.' });

  X('Karnataka', ['south-indian', 'restaurant'], { id: 'paneer-ghee-roast', name: 'Paneer Ghee Roast', local: 'ಪನೀರ್ ತುಪ್ಪ ರೋಸ್ಟ್', emoji: '🧀', course: 'starter', level: 2, prep: 15, cook: 20, serves: 4,
    taste: { spicy: 4, sour: 3, rich: 5, aromatic: 4 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['saute'], tags: ['party', 'impress'],
    desc: 'Paneer coated in a fiery red Mangalorean masala of roasted byadgi chilies, roasted in plenty of ghee.',
    story: 'Ghee roast was born in Kundapura and Mangaluru as a chicken dish. The paneer version has become a vegetarian favourite in Karnataka restaurants.',
    equip: ['Heavy pan', 'Blender'],
    ing: [[300, 'g', 'paneer', 'cubed'], [4, 'tbsp', 'ghee'], '#Ghee roast masala', [10, '', 'dried red chilies (byadgi)'], [1, 'tbsp', 'coriander seeds'], [1, 'tsp', 'cumin seeds'], [0.5, 'tsp', 'black pepper'], [0.25, 'tsp', 'fenugreek seeds'], [6, 'clove', 'garlic'], [1, 'tbsp', 'tamarind paste'], [1, 'tsp', 'jaggery'], [0.75, 'tsp', 'salt'], [10, 'leaf', 'curry leaves']],
    steps: [
      ['Masala', 'Dry-[[toast]] the chilies, coriander, cumin, pepper and fenugreek; grind with the garlic, tamarind, jaggery and a little water to a thick red paste.', 5],
      ['Sear the paneer', '[[sear|Sear]] the paneer in 1 tbsp ghee until golden; set aside.', 4],
      ['Roast', 'Fry the paste in the remaining ghee on low, stirring, until it darkens and the ghee separates, 8 minutes. Add salt, curry leaves and the paneer and toss 2 minutes.', 10, 'This long roasting in ghee is the whole dish.'],
    ],
    tips: ['Byadgi chilies give colour without too much heat.'], mistakes: ['Rushing the roast: raw-tasting masala.'],
    vars: ['Mushroom ghee roast.', 'Chicken ghee roast, the original.'], serve: 'Neer dosa or as a starter.' });

  /* ======================= EGG & NON-VEG CLASSICS ======================= */
  X('Karnataka', ['south-indian', 'restaurant'], { id: 'chicken-ghee-roast', name: 'Mangalorean Chicken Ghee Roast', local: 'ಚಿಕನ್ ಘೀ ರೋಸ್ಟ್', emoji: '🍗', course: 'main', level: 2, prep: 20, cook: 30, rest: 30, serves: 4,
    taste: { spicy: 4, sour: 3, rich: 5, aromatic: 4 }, diet: ['gluten-free', 'high-protein'], methods: ['saute'], tags: ['party', 'impress'],
    desc: 'Chicken roasted in ghee with a fiery, tangy masala of byadgi chilies and tamarind. Kundapura’s famous dish.',
    story: 'Created at Shetty Lunch Home in Kundapura in the 1950s, chicken ghee roast is now the signature dish of Mangalorean restaurants.',
    equip: ['Heavy pan', 'Blender'],
    ing: [[600, 'g', 'boneless chicken thighs', 'bite-size'], [150, 'g', 'yogurt'], [0.5, 'tsp', 'ground turmeric'], [1, 'tbsp', 'lemon juice'], [5, 'tbsp', 'ghee'], '#Masala', [14, '', 'dried red chilies (byadgi)'], [1.5, 'tbsp', 'coriander seeds'], [1, 'tsp', 'cumin seeds'], [1, 'tsp', 'black pepper'], [0.25, 'tsp', 'fenugreek seeds'], [8, 'clove', 'garlic'], [1.5, 'tbsp', 'tamarind paste'], [1, 'tsp', 'jaggery'], [1, 'tsp', 'salt'], [10, 'leaf', 'curry leaves']],
    steps: [
      ['Marinate', '[[marinate|Marinate]] the chicken with yogurt, turmeric, lemon and half the salt for 30 minutes.', 30],
      ['Masala', 'Dry-[[toast]] the chilies and whole spices; grind with the garlic, tamarind and jaggery to a thick paste.', 5],
      ['Cook', 'Cook the chicken in 1 tbsp ghee until the liquid is almost dry, 10 minutes.', 10],
      ['Ghee roast', 'In another pan, roast the paste in the remaining ghee on low until dark and glossy, 8 minutes. Add the chicken, salt and curry leaves and toss until coated and dry.', 10],
    ],
    tips: ['Use plenty of ghee; it carries the flavour.'], mistakes: ['Watery chicken: the masala won’t cling.'],
    vars: ['Paneer or mushroom ghee roast for vegetarians.'], serve: 'Neer dosa or appam.' });

  X('Kerala', SIH, { id: 'kerala-egg-roast', name: 'Kerala Egg Roast (Mutta Roast)', local: 'മുട്ട റോസ്റ്റ്', emoji: '🥚', course: 'main', level: 1, prep: 15, cook: 30, serves: 4,
    taste: { spicy: 3, savory: 4, aromatic: 4, sweet: 2 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['saute'], tags: ['weeknight', 'brunch', 'comfort'],
    desc: 'Boiled eggs in a dark, caramelized onion-tomato masala with coconut oil, fennel and curry leaves.',
    story: 'Mutta roast and appam is the classic Kerala breakfast, served at toddy shops and tea stalls. The secret is cooking the onions very slowly.',
    equip: ['Heavy pan'],
    ing: [[6, '', 'eggs', 'hard-boiled, peeled'], [3, 'tbsp', 'coconut oil'], [0.5, 'tsp', 'fennel seeds'], [3, '', 'onions', 'thinly sliced'], [2, '', 'green chilies', 'slit'], [1, 'tbsp', 'ginger-garlic paste'], [15, 'leaf', 'curry leaves'], [2, '', 'tomatoes', 'chopped'], [1.5, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'ground coriander'], [0.25, 'tsp', 'ground turmeric'], [0.5, 'tsp', 'garam masala'], [1, 'tsp', 'salt'], [100, 'ml', 'water']],
    steps: [
      ['Onions', 'Crackle the fennel in the oil, then cook the onions and chilies on medium-low until deep golden and jammy, 15 minutes ([[caramelize]]).', 15, 'Don’t rush this: it makes the gravy.'],
      ['Masala', 'Add the ginger-garlic paste and curry leaves, then the spices for 1 minute, then the tomatoes and salt; cook until the oil separates ([[bhuna]]).', 8],
      ['Eggs', 'Score the eggs, add with the water and toss over low heat 3 minutes until coated.', 3],
    ],
    tips: ['Score the eggs so the masala gets in.'], mistakes: ['Pale onions: weak, sweetish gravy.'],
    vars: ['Add a spoon of coconut milk for a milder roast.'], serve: 'Appam, idiyappam or parotta.' });

  X('Kerala', SIH, { id: 'nadan-chicken-curry', name: 'Nadan Chicken Curry (Kerala Village Style)', local: 'നാടൻ ചിക്കൻ കറി', emoji: '🍛', course: 'main', level: 2, prep: 20, cook: 40, serves: 4,
    taste: { spicy: 4, aromatic: 5, savory: 4 }, diet: ['dairy-free', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['comfort', 'party'],
    desc: 'Bone-in chicken in a peppery Kerala gravy of shallots, coconut oil, fennel and coconut milk.',
    story: '“Nadan” means homestyle or of the village. Every Kerala family has a nadan chicken curry, heavier on pepper and shallots than the Tamil Chettinad version.',
    equip: ['Heavy pot'],
    ing: [[800, 'g', 'chicken pieces', 'bone-in'], [3, 'tbsp', 'coconut oil'], [1, 'tsp', 'fennel seeds'], [15, '', 'shallots', 'sliced'], [1, 'tbsp', 'ginger-garlic paste'], [3, '', 'green chilies', 'slit'], [15, 'leaf', 'curry leaves'], [1, '', 'tomato', 'chopped'], [1.5, 'tsp', 'kashmiri chili powder'], [1.5, 'tbsp', 'ground coriander'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'black pepper', 'crushed'], [1, 'tsp', 'garam masala'], [1.25, 'tsp', 'salt'], [200, 'ml', 'water'], [200, 'ml', 'coconut milk']],
    steps: [
      ['Base', 'Fry the fennel in the coconut oil, then the shallots until golden, 8 minutes; add the ginger-garlic paste, chilies and curry leaves.', 10],
      ['Spices', 'Add the ground spices on low for 1 minute, then the tomato until soft ([[bhuna]]).', 5],
      ['Simmer', 'Add the chicken, salt and water; cover and [[simmer]] 25 minutes until tender.', 25],
      ['Finish', 'Stir in the coconut milk, pepper and garam masala; heat without boiling.', 3],
    ],
    tips: ['Use bone-in chicken for a richer gravy.'], mistakes: ['Burning the ground spices.'],
    vars: ['Chettinad chicken: with kalpasi and more whole spices.'], serve: 'Appam, Kerala parotta or rice.' });

  /* ======================= SNACKS ======================= */
  X('Tamil Nadu', SIH, { id: 'masala-vada', name: 'Masala Vada (Paruppu Vadai)', local: 'பருப்பு வடை', emoji: '🟠', course: 'snack', level: 1, prep: 15, cook: 20, rest: 120, serves: 4,
    taste: { savory: 4, spicy: 3, herby: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['deep-fry'], tags: ['rainy-day', 'street-food', 'party'],
    desc: 'Crunchy, coarse chana dal fritters with onion, chili, ginger, curry leaves and fennel.',
    story: 'Paruppu vadai is the tea-shop snack of Tamil Nadu, always on the festival menu. Karnataka calls it ambode, Andhra calls it masala garelu.',
    equip: ['Grinder', 'Kadai'],
    ing: [[200, 'g', 'chana dal', 'soaked 2 hours'], [3, '', 'dried red chilies'], [1, 'tsp', 'fennel seeds'], [1, '', 'onion', 'finely chopped'], [2, '', 'green chilies', 'chopped'], [1, 'tbsp', 'ginger', 'chopped'], [10, 'leaf', 'curry leaves', 'chopped'], [2, 'tbsp', 'cilantro'], [0.75, 'tsp', 'salt'], [1, 'l', 'oil', 'for frying']],
    steps: [
      ['Grind', 'Set aside 2 tbsp of the soaked dal. Grind the rest with the dried chilies and fennel coarsely without water.', null, 'No water: wet batter drinks oil.'],
      ['Mix', 'Mix in the whole dal, onion, chilies, ginger, curry leaves, cilantro and salt.'],
      ['Shape and fry', 'Flatten lime-size balls into thick discs and [[deep-fry]] on medium until deep golden and crisp, 4–5 minutes.', 15],
    ],
    tips: ['Keep some dal whole for crunch.'], mistakes: ['Frying on high: raw inside.'],
    vars: ['Add chopped spinach or dill.'], serve: 'Coconut chutney and filter coffee.' });

  X('Karnataka', ['south-indian', 'restaurant'], { id: 'mysore-bonda', name: 'Mysore Bonda', local: 'ಮೈಸೂರು ಬೋಂಡಾ', emoji: '🟡', course: 'snack', level: 1, prep: 10, cook: 15, rest: 180, serves: 4,
    taste: { savory: 3, sour: 2, spicy: 2 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['rainy-day', 'street-food', 'kids'],
    desc: 'Fluffy, crisp fritters of maida and sour curd with green chili, ginger, coconut and pepper.',
    story: 'Mysore bonda is the hotel snack of Karnataka, crisp outside and soft inside. Mangaluru’s goli baje is the same idea with a looser batter.',
    equip: ['Mixing bowl', 'Kadai'],
    ing: [[150, 'g', 'all-purpose flour'], [2, 'tbsp', 'rice flour'], [150, 'g', 'sour curd'], [0.25, 'tsp', 'baking soda'], [2, '', 'green chilies', 'chopped'], [1, 'tbsp', 'ginger', 'chopped'], [2, 'tbsp', 'grated coconut'], [0.5, 'tsp', 'black pepper', 'crushed'], [10, 'leaf', 'curry leaves', 'chopped'], [0.5, 'tsp', 'cumin seeds'], [0.5, 'tsp', 'salt'], [1, 'l', 'oil', 'for frying']],
    steps: [
      ['Batter', 'Mix everything except the oil into a thick, sticky batter and beat it with your hand for 2 minutes. [[rest|Rest]] 3 hours.', 180, 'Beating traps air for fluffy bondas.'],
      ['Fry', 'Drop small balls of batter with wet fingers into medium-hot oil and [[deep-fry]] until golden, 4 minutes, turning.', 12],
    ],
    tips: ['Sour curd and a long rest give the best texture.'], mistakes: ['Too-hot oil: brown outside, raw inside.'],
    vars: ['Goli baje (Mangaluru): looser batter.'], serve: 'Coconut chutney.' });

  X('Tamil Nadu', ['south-indian', 'sweets'], { id: 'murukku', name: 'Murukku', local: 'முறுக்கு', emoji: '🌀', course: 'snack', level: 2, prep: 20, cook: 30, serves: 10,
    taste: { savory: 4, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['deep-fry'], tags: ['festive', 'make-ahead', 'party'],
    desc: 'Crunchy spirals of rice and urad dal flour with sesame, cumin and butter, pressed and fried.',
    story: '“Murukku” means twisted in Tamil. It is the essential Diwali snack, pressed straight into hot oil from a brass mould.',
    equip: ['Murukku press with star disc', 'Kadai', 'Ladle'],
    ing: [[250, 'g', 'rice flour'], [50, 'g', 'urad dal flour', 'roasted'], [30, 'g', 'butter', 'soft'], [1, 'tbsp', 'sesame seeds'], [1, 'tsp', 'cumin seeds'], [1, 'pinch', 'asafoetida (hing)'], [0.75, 'tsp', 'salt'], [200, 'ml', 'water'], [1, 'l', 'oil', 'for frying']],
    steps: [
      ['Dough', 'Rub the butter into the flours with the spices and salt, then add water gradually to a soft, smooth dough.'],
      ['Press', 'Press spirals onto the back of a ladle or a piece of parchment.'],
      ['Fry', 'Slide into medium-hot oil and [[deep-fry]] until the bubbling stops and they are golden and crisp, 3–4 minutes.', 20, 'When the oil goes quiet, the moisture is gone: they’re done.'],
    ],
    tips: ['Cool completely before storing.'], mistakes: ['Dry dough: the spirals break while pressing.'],
    vars: ['Butter murukku.', 'Ribbon pakoda with the ribbon disc.'], serve: 'Tea or as a festive snack.', store: 'Airtight tin 2 weeks.' });

  X('Kerala', SIH, { id: 'kerala-banana-chips', name: 'Kerala Banana Chips', local: 'ഏത്തക്ക ഉപ്പേരി', emoji: '🍌', course: 'snack', level: 2, prep: 15, cook: 25, serves: 6,
    taste: { savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['deep-fry'], tags: ['festive', 'make-ahead'],
    desc: 'Paper-thin raw nendran banana slices fried in coconut oil and salted with turmeric water.',
    story: 'Ethakka upperi is Kerala’s most famous snack, always on the Onam sadya. Salt water is splashed into the hot oil for even seasoning.',
    equip: ['Mandoline or slicer', 'Kadai'],
    ing: [[4, '', 'raw nendran bananas', 'peeled'], [0.25, 'tsp', 'ground turmeric'], [1, 'tsp', 'salt'], [3, 'tbsp', 'water'], [1, 'l', 'coconut oil', 'for frying']],
    steps: [
      ['Prep', 'Dissolve the salt in the water. Soak the peeled bananas in turmeric water for 10 minutes and dry them.', 10],
      ['Slice and fry', 'Slice paper-thin directly into hot coconut oil and [[deep-fry]], stirring. When the sizzling dies down, sprinkle 1 tsp salt water into the oil (stand back, it splutters).', 20, 'Slicing straight into the oil is the traditional way.'],
      ['Drain', 'Fry until crisp and pale gold; drain and cool.'],
    ],
    tips: ['Coconut oil is essential for the Kerala flavour.'], mistakes: ['Ripe bananas: they burn and go soft.'],
    vars: ['Sharkara upperi: thick slices coated in jaggery and ginger.'], serve: 'Tea or the sadya.', store: 'Airtight 3 weeks.' });

  /* ======================= CHUTNEYS & PODI ======================= */
  X('Tamil Nadu', SI, { id: 'coconut-chutney', name: 'Coconut Chutney', local: 'தேங்காய் சட்னி', emoji: '🥥', course: 'sauce', level: 1, prep: 10, cook: 2, serves: 4,
    taste: { savory: 3, spicy: 2, sweet: 2 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['quick'],
    desc: 'The white chutney served with every idli, dosa and vada: fresh coconut, roasted gram and green chili with a mustard tadka.',
    story: 'Every South Indian state has its version: Tamil hotels add roasted chana dal, Karnataka adds ginger, Kerala uses shallots, Andhra makes it red.',
    equip: ['Grinder', 'Small pan'],
    ing: [[120, 'g', 'grated coconut'], [2, 'tbsp', 'roasted chana dal'], [2, '', 'green chilies'], [5, 'g', 'ginger'], [0.5, 'tsp', 'salt'], [100, 'ml', 'water'], [1, 'tsp', 'oil'], [0.5, 'tsp', 'mustard seeds'], [0.5, 'tsp', 'urad dal'], [8, 'leaf', 'curry leaves']],
    steps: [
      ['Grind', 'Grind the coconut, roasted dal, chilies, ginger and salt with the water to a smooth chutney.'],
      ['Tadka', 'Pour over a [[tadka]] of mustard, urad dal and curry leaves.', 1],
    ],
    tips: ['Fresh coconut only; desiccated tastes flat.'], mistakes: ['Too much water: it separates.'],
    vars: ['Red coconut chutney with dried chilies.', 'Green with mint and cilantro.'], serve: 'Idli, dosa, vada, upma.', store: 'Fridge 1 day.' });

  X('Andhra Pradesh', SI, { id: 'peanut-chutney', name: 'Peanut Chutney (Palli Chutney)', local: 'పల్లీ చట్నీ', emoji: '🥜', course: 'sauce', level: 1, prep: 5, cook: 6, serves: 4,
    taste: { savory: 4, spicy: 3, sour: 2, rich: 3 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['quick', 'budget'],
    desc: 'Roasted peanuts ground with red chilies, garlic and tamarind. The Andhra breakfast chutney.',
    story: 'Andhra and Telangana tiffin centres serve palli chutney with idli, dosa and pesarattu instead of (or as well as) coconut chutney.',
    equip: ['Pan', 'Grinder'],
    ing: [[100, 'g', 'peanuts'], [4, '', 'dried red chilies'], [3, 'clove', 'garlic'], [1, 'tsp', 'tamarind paste'], [0.5, 'tsp', 'salt'], [120, 'ml', 'water'], [1, 'tsp', 'oil'], [0.5, 'tsp', 'mustard seeds'], [8, 'leaf', 'curry leaves']],
    steps: [
      ['Roast', '[[toast|Toast]] the peanuts until spotted golden; rub off the skins. Fry the chilies and garlic for 1 minute.', 6],
      ['Grind', 'Grind with the tamarind, salt and water until smooth.'],
      ['Tadka', 'Finish with a mustard and curry leaf [[tadka]].', 1],
    ],
    tips: ['Add a piece of jaggery for the Karnataka style.'], mistakes: ['Burnt peanuts: bitter chutney.'],
    vars: ['No-coconut chutney for travel: keeps longer.'], serve: 'Idli, dosa, pesarattu.' });

  X('Tamil Nadu', SI, { id: 'idli-podi', name: 'Idli Podi (Gunpowder)', local: 'இட்லி பொடி', emoji: '🌶️', course: 'sauce', level: 1, prep: 5, cook: 10, serves: 20,
    taste: { spicy: 4, savory: 4, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['make-ahead', 'budget'],
    desc: 'A coarse, fiery powder of roasted lentils, red chilies and sesame, mixed with sesame oil or ghee to eat with idli.',
    story: 'Milagai podi, nicknamed “gunpowder”, is every South Indian traveller’s companion. A spoon of podi and oil turns plain idli into a meal.',
    equip: ['Heavy pan', 'Spice grinder'],
    ing: [[60, 'g', 'urad dal'], [40, 'g', 'chana dal'], [15, '', 'dried red chilies'], [2, 'tbsp', 'sesame seeds'], [1, 'pinch', 'asafoetida (hing)'], [10, 'leaf', 'curry leaves'], [1, 'tsp', 'jaggery'], [1, 'tsp', 'salt']],
    steps: [
      ['Roast', 'Dry-[[toast]] the dals separately on low until golden, then the chilies until crisp and the sesame until it pops, and the curry leaves until dry.', 10],
      ['Grind', 'Cool completely, then grind with the hing, jaggery and salt to a coarse powder.'],
    ],
    tips: ['Grind coarse, not fine.'], mistakes: ['Grinding while warm: it turns lumpy.'],
    vars: ['Add garlic for Andhra karam podi.', 'Flaxseed podi.'], serve: 'Mixed with sesame oil or ghee, with idli and dosa.', store: 'Airtight jar 1 month.' });

  X('Andhra Pradesh', SI, { id: 'allam-pachadi', name: 'Allam Pachadi (Ginger Chutney)', local: 'అల్లం పచ్చడి', emoji: '🫚', course: 'sauce', level: 1, prep: 10, cook: 10, serves: 8,
    taste: { spicy: 4, sour: 3, sweet: 3, aromatic: 4 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['make-ahead'],
    desc: 'A punchy sweet-sour-spicy ginger chutney with tamarind and jaggery, the essential partner of pesarattu.',
    story: 'In Andhra tiffin centres, pesarattu is always served with allam pachadi. Ginger aids digestion of the moong dal crepe.',
    equip: ['Pan', 'Grinder'],
    ing: [[80, 'g', 'ginger', 'peeled, chopped'], [1, 'tbsp', 'oil'], [1, 'tbsp', 'chana dal'], [1, 'tbsp', 'urad dal'], [8, '', 'dried red chilies'], [2, 'tbsp', 'tamarind paste'], [3, 'tbsp', 'jaggery'], [0.75, 'tsp', 'salt'], [0.5, 'tsp', 'mustard seeds'], [8, 'leaf', 'curry leaves']],
    steps: [
      ['Fry', 'Fry the dals and chilies in the oil until golden; add the ginger and [[saute]] 4 minutes.', 6],
      ['Grind', 'Grind with the tamarind, jaggery and salt to a thick paste with a little water.'],
      ['Tadka', 'Finish with a mustard and curry leaf [[tadka]].', 1],
    ],
    tips: ['Balance sweet and sour to taste.'], mistakes: ['Too little jaggery: harsh.'],
    vars: ['Thicker, cooked-down version keeps for weeks.'], serve: 'Pesarattu, dosa or upma.', store: 'Fridge 1 week.' });

  /* ======================= SWEETS ======================= */
  X('Karnataka', ['south-indian', 'sweets'], { id: 'kesari-bath', name: 'Kesari Bath', local: 'ಕೇಸರಿ ಬಾತ್', emoji: '🟧', course: 'dessert', level: 1, prep: 5, cook: 20, serves: 4,
    taste: { sweet: 5, rich: 4, aromatic: 4 }, diet: ['vegetarian'], methods: ['simmer'], tags: ['festive', 'quick', 'kids'],
    desc: 'Saffron-orange semolina pudding cooked in ghee with cardamom, cashews and raisins.',
    story: 'Kesari bath is half of Bengaluru’s “chow chow bath”. Tamil Nadu’s rava kesari is the same sweet; North India’s sooji halwa is its cousin, made with less water.',
    equip: ['Heavy pan'],
    ing: [[120, 'g', 'fine semolina (rava)'], [6, 'tbsp', 'ghee'], [10, '', 'cashews'], [1, 'tbsp', 'raisins'], [400, 'ml', 'water'], [1, 'pinch', 'saffron', 'soaked in 1 tbsp warm milk'], [150, 'g', 'sugar'], [0.5, 'tsp', 'cardamom powder'], [1, 'pinch', 'orange food color', 'optional']],
    steps: [
      ['Roast', 'Fry the cashews and raisins in 1 tbsp ghee; lift out. [[toast|Toast]] the rava in 2 tbsp ghee on low until fragrant, 5 minutes.', 7],
      ['Cook', 'Boil the water with the saffron (and colour), add the rava slowly while stirring, and cook covered 3 minutes until it absorbs the water.', 4],
      ['Sweeten', 'Add the sugar (it loosens again), then the remaining ghee and cardamom, and stir until it leaves the sides of the pan.', 6],
    ],
    tips: ['Add sugar only after the rava is cooked, or it stays hard.'], mistakes: ['Not enough ghee: sticky kesari.'],
    vars: ['Pineapple kesari bath.', 'Tamil rava kesari.'], serve: 'Warm, with khara bath.' });

  X('Kerala', ['south-indian', 'sweets'], { id: 'moong-dal-payasam', name: 'Parippu Payasam (Moong Dal Payasam)', local: 'പരിപ്പ് പായസം', emoji: '🍮', course: 'dessert', level: 2, prep: 10, cook: 40, serves: 6,
    taste: { sweet: 5, rich: 4, aromatic: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive'],
    desc: 'Roasted moong dal simmered with jaggery and two coconut milks, finished with cardamom, dry ginger and ghee-fried coconut.',
    story: 'Parippu pradhaman is one of the two classic payasams of the Onam sadya. Tamil Nadu’s paruppu payasam is lighter, made with milk.',
    equip: ['Heavy pot', 'Small pan'],
    ing: [[150, 'g', 'yellow moong dal'], [250, 'g', 'jaggery', 'melted and strained'], [400, 'ml', 'coconut milk', 'thin'], [200, 'ml', 'thick coconut milk'], [0.5, 'tsp', 'cardamom powder'], [0.25, 'tsp', 'dry ginger powder'], [2, 'tbsp', 'coconut oil'], [2, 'tbsp', 'fresh coconut', 'thin slivers'], [15, '', 'cashews']],
    steps: [
      ['Roast the dal', 'Dry-[[toast]] the moong dal until fragrant and light golden; pressure-cook with 500 ml water until soft and mash.', 20],
      ['Jaggery', 'Cook the dal with the melted jaggery, stirring, until thick, 8 minutes.', 8],
      ['Coconut milk', 'Add the thin coconut milk and [[simmer]] 8 minutes; then the thick milk, cardamom and dry ginger, and just warm through.', 10, 'Thick coconut milk splits if boiled.'],
      ['Garnish', 'Fry the coconut slivers and cashews in the oil (ghee if not vegan) and pour over.', 3],
    ],
    tips: ['Roasting the dal is what gives the nutty taste.'], mistakes: ['Boiling after adding thick coconut milk.'],
    vars: ['Tamil paruppu payasam with milk.', 'Ada pradhaman with rice flakes.'], serve: 'Warm, at the end of a sadya.' });

  X('Pan-India', ['sweets'], { id: 'coconut-burfi', name: 'Coconut Burfi', local: 'कोपरा पाक / தேங்காய் பர்பி', emoji: '🥥', course: 'dessert', level: 2, prep: 10, cook: 20, rest: 30, serves: 12,
    taste: { sweet: 5, rich: 3, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'make-ahead'],
    desc: 'Squares of fresh coconut cooked with sugar, milk and cardamom until set.',
    story: 'Thengai burfi in Tamil Nadu, kobbari mithai in Andhra, nariyal barfi in the north: coconut fudge is made all over India for festivals.',
    equip: ['Heavy pan', 'Greased tray'],
    ing: [[200, 'g', 'fresh grated coconut'], [200, 'g', 'sugar'], [120, 'ml', 'milk'], [1, 'tbsp', 'ghee'], [0.5, 'tsp', 'cardamom powder'], [1, 'tbsp', 'cashews', 'chopped, optional']],
    steps: [
      ['Cook', 'Cook the coconut, sugar and milk on medium, stirring, until the sugar melts and the mixture thickens, 15 minutes.', 15],
      ['Set point', 'Add the ghee and cardamom and keep stirring until it leaves the sides of the pan as a mass.', 4, 'Stop at this point or it turns hard.'],
      ['Set', 'Spread on a greased tray, press, cut into squares while warm and [[rest]] 30 minutes.', 30],
    ],
    tips: ['Use the white part of the coconut only for a pure white burfi.'], mistakes: ['Undercooked: it won’t set.'],
    vars: ['Jaggery coconut burfi.', 'Add a spoon of milk powder for richness.'], serve: 'As a festive sweet.', store: 'Airtight 1 week.' });
})();
