/* India batch 9: Indo-Chinese restaurant and street favourites (all vegetarian).
   Original recipes written for Dish Dictionary. */
'use strict';
(function () {
  const X = (area, styles, d) => DD.add(Object.assign({ country: 'India', flag: '🇮🇳', region: 'South Asia', area, styles }, d));
  const IC = ['indo-chinese'], ICS = ['indo-chinese', 'chaat'];
  const SAUCE = [[2, 'tbsp', 'soy sauce'], [1, 'tbsp', 'chili sauce'], [1, 'tbsp', 'tomato ketchup'], [1, 'tsp', 'rice vinegar']];

  X('Kolkata', IC, { id: 'veg-manchurian', name: 'Veg Manchurian (Gravy)', local: 'वेज मंचूरियन', emoji: '🟤', course: 'main', level: 2, prep: 25, cook: 25, serves: 4,
    taste: { umami: 4, spicy: 3, sour: 2, savory: 4 }, diet: ['vegan'], methods: ['deep-fry', 'simmer'], tags: ['party', 'weeknight'],
    desc: 'Crisp balls of grated cabbage, carrot and beans in a glossy garlic-ginger-soy gravy with spring onions.',
    story: 'Invented in the 1970s by Nelson Wang, a Kolkata-born Chinese chef in Mumbai; Manchuria has nothing to do with it.',
    equip: ['Kadai', 'Wok'],
    ing: [[200, 'g', 'cabbage', 'finely grated'], [1, '', 'carrot', 'grated'], [60, 'g', 'green beans', 'finely chopped'], [4, 'tbsp', 'all-purpose flour'], [3, 'tbsp', 'cornstarch'], [0.5, 'tsp', 'salt'], [0.25, 'tsp', 'black pepper'], [700, 'ml', 'oil', 'for frying'], '#Gravy', [1, 'tbsp', 'oil'], [6, 'clove', 'garlic', 'minced'], [1, 'tbsp', 'ginger', 'minced'], [2, '', 'green chilies'], [4, '', 'scallions'], ...SAUCE, [350, 'ml', 'water'], [1, 'tbsp', 'cornstarch', 'in 3 tbsp water']],
    steps: [['Balls', 'Mix vegetables, flour, cornstarch, salt and pepper into balls (no water); [[deep-fry]] until crisp.', 15], ['Gravy', '[[stir-fry|Stir-fry]] garlic, ginger, chilies and scallion whites on high; add sauces and water; boil; thicken with the slurry.', 5], ['Toss', 'Add balls just before serving; top with scallion greens.', 1]],
    tips: ['Squeeze the vegetables so balls stay crisp.'], mistakes: ['Adding balls early: soggy.'], vars: ['Dry Manchurian (less gravy).'], serve: 'Fried rice or hakka noodles.' });

  X('Mumbai', IC, { id: 'schezwan-fried-rice', name: 'Schezwan Fried Rice', local: 'शेज़वान फ्राइड राइस', emoji: '🍚', course: 'main', level: 1, prep: 15, cook: 10, serves: 3,
    taste: { spicy: 5, umami: 4, savory: 4 }, diet: ['vegan'], methods: ['stir-fry'], tags: ['quick', 'street-food'],
    desc: 'Day-old rice wok-tossed with vegetables and fiery red schezwan sauce: the Indian street version of Sichuan.',
    story: 'Mumbai’s Chinese carts made “schezwan” a household word with garlic-red-chili sauce, quite unlike real Sichuan food.',
    equip: ['Wok'],
    ing: [[600, 'g', 'cooked rice', 'day-old'], [2, 'tbsp', 'oil'], [4, 'clove', 'garlic'], [1, '', 'onion', 'sliced'], [1, '', 'carrot', 'julienned'], [1, '', 'green bell pepper', 'sliced'], [80, 'g', 'cabbage', 'shredded'], [3, 'tbsp', 'schezwan chutney'], [1, 'tbsp', 'soy sauce'], [0.5, 'tsp', 'salt'], [0.25, 'tsp', 'black pepper'], [3, '', 'scallions']],
    steps: [['Vegetables', '[[stir-fry|Stir-fry]] garlic and vegetables on the highest heat 2 minutes.', 3], ['Rice', 'Add rice, schezwan chutney, soy, salt and pepper; toss until hot and coated.', 4], ['Finish', 'Add scallions.']],
    tips: ['Cold rice fries best.'], mistakes: ['Low heat: soggy rice.'], vars: ['Schezwan noodles.'], serve: 'With Manchurian.' });

  X('Mumbai', IC, { id: 'triple-schezwan-rice', name: 'Triple Schezwan Rice', local: 'ट्रिपल शेज़वान राइस', emoji: '🍛', course: 'main', level: 2, prep: 20, cook: 25, serves: 3,
    taste: { spicy: 5, umami: 4, sour: 2 }, diet: ['vegan'], methods: ['stir-fry', 'deep-fry'], tags: ['street-food', 'party'],
    desc: 'A Mumbai mega-plate: schezwan fried rice, hakka noodles and a spicy vegetable gravy, topped with crispy fried noodles.',
    story: 'An Indo-Chinese restaurant invention for the very hungry.',
    equip: ['Wok', 'Kadai'],
    ing: [[400, 'g', 'cooked rice', 'day-old'], [150, 'g', 'hakka noodles', 'boiled'], [50, 'g', 'hakka noodles', 'boiled, dried, to fry'], [500, 'ml', 'oil', 'for frying'], [3, 'tbsp', 'oil'], [5, 'clove', 'garlic'], [1, '', 'carrot'], [1, '', 'green bell pepper'], [100, 'g', 'cabbage'], [5, 'tbsp', 'schezwan chutney'], [2, 'tbsp', 'soy sauce'], [300, 'ml', 'water'], [1, 'tbsp', 'cornstarch', 'in water'], [0.75, 'tsp', 'salt'], [3, '', 'scallions']],
    steps: [['Crispy noodles', '[[deep-fry|Fry]] the dried noodles crisp.', 4], ['Rice and noodles', 'Stir-fry half the vegetables with garlic; toss half the sauce with rice, the rest with noodles.', 8], ['Gravy', 'Make a gravy with the remaining vegetables, schezwan, soy, water and slurry.', 6], ['Plate', 'Rice and noodles side by side, gravy over, crispy noodles on top.']],
    tips: ['Fry noodles only when bone dry.'], mistakes: ['Soggy crispy noodles: add last.'], vars: ['With Manchurian balls on top.'], serve: 'Immediately.' });

  X('Mumbai', IC, { id: 'american-chopsuey', name: 'American Chopsuey', local: 'अमेरिकन चॉप्सी', emoji: '🍝', course: 'main', level: 2, prep: 20, cook: 20, serves: 3,
    taste: { sweet: 4, sour: 4, umami: 3 }, diet: ['vegetarian'], methods: ['deep-fry', 'simmer'], tags: ['kids', 'party'],
    desc: 'Crispy fried noodles drowned in a sweet-and-sour tomato vegetable sauce and topped with a fried egg.',
    story: 'Neither American nor Chinese: invented in Indian Chinese restaurants in the 1960s.',
    equip: ['Kadai', 'Wok'],
    ing: [[200, 'g', 'hakka noodles', 'boiled, dried'], [700, 'ml', 'oil', 'for frying'], [1, 'tbsp', 'oil'], [3, 'clove', 'garlic'], [1, '', 'onion', 'squares'], [1, '', 'carrot', 'sliced'], [1, '', 'green bell pepper', 'squares'], [80, 'g', 'cabbage'], [5, 'tbsp', 'tomato ketchup'], [1, 'tbsp', 'soy sauce'], [1, 'tbsp', 'vinegar'], [2, 'tbsp', 'sugar'], [300, 'ml', 'water'], [1.5, 'tbsp', 'cornstarch', 'in water'], [0.5, 'tsp', 'salt'], [3, '', 'eggs', 'fried']],
    steps: [['Noodles', '[[deep-fry|Fry]] noodles into crisp nests.', 8], ['Sauce', 'Stir-fry vegetables; add ketchup, soy, vinegar, sugar, salt and water; thicken.', 8], ['Serve', 'Pour sauce over the nests and top with a fried egg.']],
    tips: ['Pour sauce at the table so noodles stay crisp.'], mistakes: ['Thin sauce: no gloss.'], vars: ['Eggless with tofu.'], serve: 'Immediately.' });

  X('Kolkata', IC, { id: 'chilli-mushroom', name: 'Chilli Mushroom', local: 'चिली मशरूम', emoji: '🍄', course: 'starter', level: 2, prep: 15, cook: 15, serves: 3,
    taste: { spicy: 4, umami: 5, sour: 2 }, diet: ['vegan'], methods: ['deep-fry', 'stir-fry'], tags: ['party'],
    desc: 'Batter-fried mushrooms tossed with onion, capsicum, green chilies and garlic in a dark, spicy soy glaze.',
    story: 'From Kolkata’s Tangra Chinatown kitchens, made the same way as chilli paneer.',
    equip: ['Kadai', 'Wok'],
    ing: [[300, 'g', 'button mushrooms', 'halved'], [3, 'tbsp', 'cornstarch'], [2, 'tbsp', 'all-purpose flour'], [0.25, 'tsp', 'salt'], [500, 'ml', 'oil', 'for frying'], [1, 'tbsp', 'oil'], [5, 'clove', 'garlic'], [3, '', 'green chilies', 'slit'], [1, '', 'onion', 'petals'], [1, '', 'green bell pepper', 'squares'], ...SAUCE, [3, 'tbsp', 'water'], [2, '', 'scallions']],
    steps: [['Fry', 'Coat dry mushrooms in a thick batter of cornstarch, flour, salt and water; [[deep-fry]] crisp.', 8], ['Toss', '[[stir-fry|Stir-fry]] garlic, chilies, onion and pepper; add sauces and water; toss mushrooms in the glaze.', 4]],
    tips: ['Wipe mushrooms, don’t wash.'], mistakes: ['Wet mushrooms: batter falls off.'], vars: ['Chilli baby corn.'], serve: 'As a starter.' });

  X('Kolkata', IC, { id: 'chilli-garlic-noodles', name: 'Chilli Garlic Noodles', local: 'चिली गार्लिक नूडल्स', emoji: '🍜', course: 'main', level: 1, prep: 10, cook: 10, serves: 2,
    taste: { spicy: 4, savory: 4, aromatic: 4 }, diet: ['vegan'], methods: ['stir-fry'], tags: ['quick', 'weeknight'],
    desc: 'Hakka noodles stir-fried with lots of garlic, dried red chilies, vegetables and soy.',
    story: 'An Indo-Chinese staple for garlic lovers.',
    equip: ['Wok'],
    ing: [[200, 'g', 'hakka noodles', 'boiled'], [3, 'tbsp', 'oil'], [10, 'clove', 'garlic', 'minced'], [4, '', 'dried red chilies', 'crushed'], [1, '', 'carrot'], [1, '', 'green bell pepper'], [80, 'g', 'cabbage'], [2, 'tbsp', 'soy sauce'], [1, 'tbsp', 'chili sauce'], [1, 'tsp', 'vinegar'], [0.5, 'tsp', 'salt'], [3, '', 'scallions']],
    steps: [['Garlic', 'Fry garlic and chilies in oil until golden.', 2], ['Toss', 'Add vegetables 1 minute, then noodles and sauces; toss on high heat.', 4]],
    tips: ['Golden, not brown, garlic.'], mistakes: ['Wet noodles: drain and oil them.'], vars: ['Burnt garlic noodles.'], serve: 'With Manchurian.' });

  X('Chennai', ['indo-chinese', 'south-indian'], { id: 'paneer-65', name: 'Paneer 65', local: 'பனீர் 65', emoji: '🔴', course: 'starter', level: 1, prep: 15, cook: 15, rest: 20, serves: 3,
    taste: { spicy: 4, sour: 2, aromatic: 3 }, diet: ['vegetarian', 'high-protein'], methods: ['deep-fry'], tags: ['party'],
    desc: 'Spicy red marinated paneer cubes fried crisp and tossed with curry leaves, green chilies and yogurt.',
    story: 'From the “65” family of snacks born at Chennai’s Buhari Hotel in 1965.',
    equip: ['Kadai'],
    ing: [[300, 'g', 'paneer', 'cubes'], [2, 'tbsp', 'cornstarch'], [1, 'tbsp', 'rice flour'], [1, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'ginger-garlic paste'], [0.5, 'tsp', 'garam masala'], [0.5, 'tsp', 'salt'], [500, 'ml', 'oil', 'for frying'], [1, 'tbsp', 'oil'], [1, 'sprig', 'curry leaves'], [3, '', 'green chilies'], [3, 'tbsp', 'yogurt'], [0.5, 'tsp', 'chili powder']],
    steps: [['Marinate', 'Coat paneer with flours, spices and salt; rest 20 minutes.', 20], ['Fry', '[[deep-fry|Fry]] until crisp.', 5], ['Toss', 'Fry curry leaves and chilies; add yogurt and chili powder until thick; toss paneer.', 4]],
    tips: ['Fry briefly so paneer stays soft.'], mistakes: ['Overfrying: chewy.'], vars: ['Gobi 65.'], serve: 'Onion rings and lemon.' });

  X('Mumbai', IC, { id: 'baby-corn-manchurian', name: 'Baby Corn Manchurian', local: 'बेबी कॉर्न मंचूरियन', emoji: '🌽', course: 'starter', level: 2, prep: 15, cook: 15, serves: 3,
    taste: { umami: 4, spicy: 3, sweet: 2 }, diet: ['vegan'], methods: ['deep-fry', 'stir-fry'], tags: ['party'],
    desc: 'Crunchy batter-fried baby corn tossed in a dry Manchurian sauce with garlic, ginger and scallions.',
    story: 'A wedding-buffet Indo-Chinese starter.',
    equip: ['Kadai', 'Wok'],
    ing: [[250, 'g', 'baby corn', 'halved, blanched'], [3, 'tbsp', 'cornstarch'], [2, 'tbsp', 'all-purpose flour'], [0.5, 'tsp', 'chili powder'], [0.25, 'tsp', 'salt'], [500, 'ml', 'oil', 'for frying'], [1, 'tbsp', 'oil'], [5, 'clove', 'garlic'], [1, 'tbsp', 'ginger'], [3, '', 'scallions'], ...SAUCE, [2, 'tbsp', 'water']],
    steps: [['Fry', 'Coat in a thick batter and [[deep-fry]] crisp.', 8], ['Toss', '[[stir-fry|Stir-fry]] garlic, ginger and scallion whites; add sauces and water; toss baby corn.', 3]],
    tips: ['Blanch baby corn first.'], mistakes: ['Thin batter: soggy.'], vars: ['Baby corn chilli dry.'], serve: 'Hot.' });

  X('Mumbai', IC, { id: 'dragon-potato', name: 'Dragon Potato', local: 'ड्रैगन पोटैटो', emoji: '🐉', course: 'starter', level: 1, prep: 15, cook: 15, serves: 3,
    taste: { spicy: 4, sweet: 3, sour: 2 }, diet: ['vegan'], methods: ['deep-fry', 'stir-fry'], tags: ['party', 'kids'],
    desc: 'Crispy potato fingers tossed in a sticky red sauce of chili, garlic, ketchup and brown sugar, with sesame.',
    story: 'A newer Indo-Chinese hit, cousin of honey chilli potato.',
    equip: ['Kadai', 'Wok'],
    ing: [[3, '', 'potatoes', 'fingers, parboiled'], [3, 'tbsp', 'cornstarch'], [0.25, 'tsp', 'salt'], [500, 'ml', 'oil', 'for frying'], [1, 'tbsp', 'oil'], [5, 'clove', 'garlic'], [1, '', 'onion', 'petals'], [1, '', 'red bell pepper'], [2, 'tbsp', 'schezwan chutney'], [2, 'tbsp', 'tomato ketchup'], [1, 'tbsp', 'soy sauce'], [1, 'tbsp', 'brown sugar'], [1, 'tbsp', 'sesame seeds']],
    steps: [['Fry', 'Coat potatoes in cornstarch and [[deep-fry]] twice for crunch.', 12], ['Toss', 'Stir-fry garlic, onion and pepper; add sauces and sugar; toss potatoes; sprinkle sesame.', 3]],
    tips: ['Double-fry for lasting crunch.'], mistakes: ['Saucing early: soggy.'], vars: ['Honey chilli potato.'], serve: 'Immediately.' });

  X('Mumbai', IC, { id: 'veg-lollipop', name: 'Veg Lollipop', local: 'वेज लॉलीपॉप', emoji: '🍭', course: 'starter', level: 2, prep: 25, cook: 15, serves: 4,
    taste: { savory: 4, spicy: 3 }, diet: ['vegan'], methods: ['deep-fry'], tags: ['party', 'kids'],
    desc: 'Spiced mashed vegetable balls on sticks, coated in crumbs and fried: the vegetarian answer to chicken lollipop.',
    story: 'Indo-Chinese party food invented for vegetarian guests.',
    equip: ['Kadai', 'Skewers or sticks'],
    ing: [[2, '', 'potatoes', 'boiled, mashed'], [150, 'g', 'mixed vegetables', 'finely chopped, sautéed'], [2, 'tbsp', 'cornstarch'], [1, 'tsp', 'ginger-garlic paste'], [1, 'tsp', 'chili sauce'], [1, 'tbsp', 'soy sauce'], [0.5, 'tsp', 'salt'], [80, 'g', 'breadcrumbs'], [3, 'tbsp', 'all-purpose flour', 'slurry'], [700, 'ml', 'oil', 'for frying'], [3, 'tbsp', 'schezwan chutney', 'to dip']],
    steps: [['Shape', 'Mix vegetables, potato, cornstarch and seasonings; shape balls on sticks.'], ['Coat', 'Dip in flour slurry and crumbs.'], ['Fry', '[[deep-fry|Fry]] until golden.', 10]],
    tips: ['Chill before frying.'], mistakes: ['Soft mix: falls off the stick.'], vars: ['Paneer lollipop.'], serve: 'Schezwan dip.' });

  X('Delhi', IC, { id: 'chilli-soya-chunks', name: 'Chilli Soya Chunks', local: 'चिली सोया', emoji: '🟫', course: 'starter', level: 1, prep: 15, cook: 15, serves: 3,
    taste: { spicy: 4, umami: 4, savory: 4 }, diet: ['vegan', 'high-protein'], methods: ['deep-fry', 'stir-fry'], tags: ['party', 'budget'],
    desc: 'Soya chunks soaked, squeezed, coated and fried, then tossed chilli-style with peppers and onion.',
    story: 'A protein-packed vegetarian swap in Indo-Chinese menus.',
    equip: ['Kadai', 'Wok'],
    ing: [[100, 'g', 'soya chunks', 'boiled, squeezed'], [2, 'tbsp', 'cornstarch'], [1, 'tbsp', 'all-purpose flour'], [1, 'tsp', 'ginger-garlic paste'], [0.25, 'tsp', 'salt'], [500, 'ml', 'oil', 'for frying'], [1, 'tbsp', 'oil'], [4, 'clove', 'garlic'], [1, '', 'onion', 'petals'], [1, '', 'green bell pepper'], [2, '', 'green chilies'], ...SAUCE],
    steps: [['Coat and fry', 'Coat chunks with flours, paste and salt; [[deep-fry]] crisp.', 6], ['Toss', '[[stir-fry|Stir-fry]] garlic and vegetables; add sauces; toss chunks.', 4]],
    tips: ['Squeeze chunks very dry.'], mistakes: ['Wet chunks: rubbery.'], vars: ['Soya Manchurian.'], serve: 'Hot.' });

  X('Kolkata', IC, { id: 'hot-garlic-veg', name: 'Vegetables in Hot Garlic Sauce', local: 'हॉट गार्लिक वेज', emoji: '🧄', course: 'main', level: 1, prep: 15, cook: 10, serves: 3,
    taste: { spicy: 4, sour: 2, umami: 3, aromatic: 4 }, diet: ['vegan'], methods: ['stir-fry'], tags: ['weeknight'],
    desc: 'Mixed vegetables in a red, garlicky, slightly sour sauce with dried chili paste.',
    story: 'A Tangra Chinatown classic, eaten with plain fried rice.',
    equip: ['Wok'],
    ing: [[2, 'tbsp', 'oil'], [10, 'clove', 'garlic', 'minced'], [6, '', 'dried red chilies', 'soaked, ground'], [400, 'g', 'mixed vegetables', 'broccoli, carrot, baby corn, beans, mushrooms'], [2, 'tbsp', 'soy sauce'], [2, 'tbsp', 'tomato ketchup'], [1, 'tbsp', 'vinegar'], [1, 'tsp', 'sugar'], [250, 'ml', 'water'], [1, 'tbsp', 'cornstarch', 'in water'], [0.5, 'tsp', 'salt']],
    steps: [['Sauce base', 'Fry garlic and chili paste 1 minute.', 1], ['Vegetables', 'Add vegetables and toss 2 minutes.', 2], ['Sauce', 'Add sauces, sugar, salt and water; boil and thicken.', 3]],
    tips: ['Keep vegetables crisp.'], mistakes: ['Burnt chili paste.'], vars: ['Paneer in hot garlic sauce.'], serve: 'Fried rice.' });

  X('Mumbai', IC, { id: 'schezwan-chutney', name: 'Schezwan Chutney', local: 'शेज़वान चटनी', emoji: '🌶️', course: 'sauce', level: 1, prep: 15, cook: 15, serves: 12,
    taste: { spicy: 5, aromatic: 4, sour: 2 }, diet: ['vegan'], methods: ['simmer'], tags: ['make-ahead'],
    desc: 'Fiery red sauce of soaked dried chilies, lots of garlic and ginger, vinegar and soy, cooked in oil.',
    story: 'The bottled red sauce behind every Indian “schezwan” dish.',
    equip: ['Blender', 'Pan'],
    ing: [[25, '', 'dried kashmiri chilies', 'soaked in hot water'], [6, '', 'dried red chilies', 'soaked'], [100, 'ml', 'oil'], [20, 'clove', 'garlic', 'minced'], [2, 'tbsp', 'ginger', 'minced'], [2, 'tbsp', 'soy sauce'], [2, 'tbsp', 'vinegar'], [1, 'tbsp', 'sugar'], [1, 'tsp', 'salt'], [0.5, 'tsp', 'sichuan pepper', 'optional']],
    steps: [['Paste', 'Blend soaked chilies with a little water.'], ['Fry', 'Fry garlic and ginger in oil until golden; add the paste and cook 8 minutes until oil separates.', 12], ['Season', 'Add soy, vinegar, sugar, salt and Sichuan pepper; cook 2 minutes; cool and bottle.', 2]],
    tips: ['Kashmiri chilies give colour without too much heat.'], mistakes: ['Undercooked paste: raw taste.'], vars: ['Add sesame oil.'], serve: 'With momos, rice and noodles.' });

  X('Kolkata', ICS, { id: 'chinese-bhel', name: 'Chinese Bhel', local: 'चाइनीज़ भेल', emoji: '🥗', course: 'snack', level: 1, prep: 15, cook: 10, serves: 3,
    taste: { spicy: 4, sour: 3, sweet: 2, savory: 4 }, diet: ['vegan'], methods: ['deep-fry', 'no-cook'], tags: ['street-food', 'quick'],
    desc: 'Crunchy fried noodles tossed with cabbage, carrot, capsicum, scallions and a sweet-spicy schezwan dressing.',
    story: 'Mumbai’s street mash-up of bhel puri and Chinese noodles.',
    equip: ['Kadai', 'Bowl'],
    ing: [[150, 'g', 'hakka noodles', 'boiled, dried, fried crisp'], [100, 'g', 'cabbage', 'shredded'], [1, '', 'carrot', 'julienned'], [1, '', 'green bell pepper', 'julienned'], [3, '', 'scallions'], [2, 'tbsp', 'schezwan chutney'], [2, 'tbsp', 'tomato ketchup'], [1, 'tsp', 'soy sauce'], [1, 'tsp', 'vinegar'], [2, 'tbsp', 'cilantro']],
    steps: [['Fry', 'Fry the noodles crisp.', 8], ['Toss', 'Toss vegetables with the sauces; add noodles just before serving.']],
    tips: ['Toss at the last second.'], mistakes: ['Soggy noodles.'], vars: ['Add peanuts.'], serve: 'Immediately.' });

  X('Mumbai', IC, { id: 'lemon-coriander-soup', name: 'Lemon Coriander Soup', local: 'लेमन कोरिएंडर सूप', emoji: '🍋', course: 'soup', level: 1, prep: 15, cook: 15, serves: 4,
    taste: { sour: 4, herby: 5, savory: 3 }, diet: ['vegan'], methods: ['simmer'], tags: ['healthy', 'quick', 'winter'],
    desc: 'Light, clear vegetable soup with ginger, garlic and finely chopped vegetables, finished with lemon and lots of coriander.',
    story: 'A modern Indo-Chinese restaurant soup, a lighter partner to manchow.',
    equip: ['Pot'],
    ing: [[1, 'tbsp', 'oil'], [3, 'clove', 'garlic'], [1, 'tbsp', 'ginger'], [2, '', 'green chilies'], [1, 'handful', 'cilantro stems', 'chopped'], [1, '', 'carrot', 'finely chopped'], [80, 'g', 'cabbage', 'finely chopped'], [60, 'g', 'green beans', 'finely chopped'], [1, 'l', 'vegetable stock'], [1, 'tbsp', 'soy sauce'], [2, 'tbsp', 'cornstarch', 'in water'], [0.5, 'tsp', 'salt'], [0.25, 'tsp', 'white pepper'], [1, '', 'lemon', 'juice'], [1, 'handful', 'cilantro leaves']],
    steps: [['Aromatics', 'Fry garlic, ginger, chilies and coriander stems.', 2], ['Simmer', 'Add vegetables and stock; [[simmer]] 6 minutes; add soy, salt and pepper; thicken lightly.', 8], ['Finish', 'Off the heat add lemon juice and coriander.']],
    tips: ['Add lemon off the heat.'], mistakes: ['Boiling lemon: bitter.'], vars: ['With tofu.'], serve: 'Hot.' });
})();
