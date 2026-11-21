/* India: Indo-Chinese, mithai & drinks */
'use strict';
(function () {
  const IN = { country: 'India', flag: '🇮🇳', region: 'South Asia' };
  const A = (d) => DD.add(Object.assign({}, IN, d));

  /* ================= INDO-CHINESE ================= */
  A({
    id: 'veg-hakka-noodles', name: 'Veg Hakka Noodles', local: 'हक्का नूडल्स', area: 'Kolkata', styles: ['indo-chinese', 'chaat'],
    emoji: '🍜', course: 'main', level: 1, prep: 15, cook: 10, serves: 3,
    taste: { savory: 4, umami: 4, spicy: 2, sour: 2 }, diet: ['vegan'], methods: ['stir-fry'],
    tags: ['street-food', 'quick', 'kids', 'weeknight'],
    desc: 'Smoky street-cart noodles tossed in a roaring wok with crunchy vegetables, soy, vinegar and chili.',
    story: 'Indo-Chinese food was born in Kolkata’s Tangra, where Hakka Chinese immigrants adapted their cooking to Indian tastes with more chili, garlic and vinegar. Hakka noodles are now sold from carts in every Indian city.',
    equip: ['Wok', 'Large pot'],
    ing: [[200, 'g', 'Hakka noodles', 'choose an eggless brand for pure veg'], [3, 'tbsp', 'neutral oil'], [4, 'clove', 'garlic', 'minced'], [1, '', 'onion', 'sliced'], [1, '', 'carrot', 'julienned'], [1, '', 'green bell pepper', 'julienned'],
      [150, 'g', 'cabbage', 'shredded'], [50, 'g', 'green beans', 'thinly sliced'], [2, 'tbsp', 'soy sauce'], [1, 'tbsp', 'rice or white vinegar'], [1, 'tbsp', 'green chili sauce'], [0.5, 'tsp', 'black pepper'], [0.5, 'tsp', 'salt'], [3, '', 'scallions', 'sliced']],
    steps: [
      ['Boil the noodles', 'Boil noodles until just [[al-dente]], drain, rinse in cold water and toss with 1 tsp oil so they don’t stick.', 4, 'Rinsing stops cooking and keeps them separate.'],
      ['Mise en place', '[[julienne]] all vegetables thinly so they cook in seconds.'],
      ['Stir-fry vegetables', 'Heat the wok until smoking. Add oil and garlic, then onion and vegetables. [[stir-fry]] on maximum heat 2 minutes, keeping them crunchy.', 2],
      ['Toss noodles', 'Add noodles, soy, vinegar, chili sauce, pepper and salt. Toss with two spatulas 2 minutes until smoky.', 2],
      ['Finish', 'Toss in scallions and serve hot.'],
    ],
    tips: ['Maximum heat and small batches give the street-cart wok smoke.'],
    mistakes: ['Overcooked noodles break and clump.'],
    vars: ['Schezwan noodles: add 2 tbsp Schezwan sauce.', 'Add paneer, egg or chicken.'],
    serve: 'Gobi Manchurian or chilli paneer.',
  });

  A({
    id: 'gobi-manchurian', name: 'Gobi Manchurian', local: 'गोबी मंचूरियन', area: 'Kolkata', styles: ['indo-chinese', 'chaat'],
    emoji: '🥦', course: 'starter', level: 2, prep: 20, cook: 20, serves: 4,
    taste: { savory: 4, spicy: 3, sweet: 2, sour: 2, umami: 4 }, diet: ['vegan'], methods: ['deep-fry', 'stir-fry'],
    tags: ['party', 'street-food', 'kids'],
    desc: 'Crispy fried cauliflower tossed in a glossy, garlicky soy-chili sauce.',
    story: 'Manchurian was invented in 1975 by chef Nelson Wang at the Cricket Club of India in Mumbai, who improvised a dish with chicken, garlic, ginger, soy and cornstarch. The cauliflower version became one of India’s most-loved veg starters.',
    equip: ['Kadai for frying', 'Wok'],
    ing: ['#Fritters', [1, 'head', 'cauliflower', 'small florets (about 400 g)'], [50, 'g', 'all-purpose flour'], [40, 'g', 'cornstarch'], [1, 'tsp', 'ginger-garlic paste'], [0.5, 'tsp', 'Kashmiri chili powder'], [0.5, 'tsp', 'salt'], [100, 'ml', 'water'], [1, 'l', 'oil', 'for frying'],
      '#Sauce', [2, 'tbsp', 'oil'], [6, 'clove', 'garlic', 'minced'], [1, 'tbsp', 'ginger', 'minced'], [2, '', 'green chilies', 'chopped'], [1, '', 'onion', 'diced'], [1, '', 'green bell pepper', 'diced'],
      [2, 'tbsp', 'soy sauce'], [1, 'tbsp', 'red chili sauce'], [2, 'tbsp', 'ketchup'], [1, 'tbsp', 'vinegar'], [1, 'tsp', 'sugar'], [1, 'tbsp', 'cornstarch', 'in 100 ml water'], [3, '', 'scallions', 'sliced']],
    steps: [
      ['Blanch', '[[blanch|Blanch]] florets in boiling salted water 2 minutes. Drain and dry well.', 2],
      ['Batter and fry', 'Mix flour, cornstarch, ginger-garlic, chili, salt and water into a thick batter. Coat florets and [[deep-fry]] at {{180C}} until crisp, 4 minutes. For extra crunch, fry again 1 minute.', 5],
      ['Sauce base', 'Heat oil in the wok on high. Add garlic, ginger and chilies for 30 seconds, then onion and pepper for 1 minute.'],
      ['Sauces', 'Add soy, chili sauce, ketchup, vinegar and sugar. Stir the slurry and pour it in; toss until glossy and thick, 1 minute.'],
      ['Toss', 'Add the fried cauliflower and toss quickly to coat. Top with scallions and serve immediately.', 0, 'Toss only at the last second so it stays crunchy.'],
    ],
    tips: ['Double-frying keeps them crunchy in the sauce.'],
    mistakes: ['Saucing too early: soggy cauliflower.'],
    vars: ['Gravy Manchurian: more slurry and water, serve with fried rice.', 'Veg Manchurian balls with grated cabbage and carrot.'],
    serve: 'Veg fried rice or Hakka noodles.',
  });

  A({
    id: 'chilli-paneer', name: 'Chilli Paneer', local: 'चिली पनीर', area: 'Kolkata', styles: ['indo-chinese', 'restaurant'],
    emoji: '🌶️', course: 'starter', level: 1, prep: 15, cook: 15, serves: 3,
    taste: { spicy: 4, savory: 4, sour: 2, sweet: 2, umami: 3 }, diet: ['vegetarian', 'high-protein'], methods: ['saute', 'stir-fry'],
    tags: ['party', 'weeknight', 'quick', 'date-night'],
    desc: 'Crispy paneer cubes tossed with peppers, onions and green chilies in a spicy soy-garlic sauce.',
    story: 'The vegetarian star of every Indo-Chinese menu, from Tangra restaurants to college canteens. It’s served dry as a starter or with gravy alongside fried rice.',
    equip: ['Wok'],
    ing: [[250, 'g', 'paneer', '2.5 cm cubes'], [2, 'tbsp', 'cornstarch'], [1, 'tbsp', 'all-purpose flour'], [0.25, 'tsp', 'salt'], [0.25, 'tsp', 'black pepper'], [4, 'tbsp', 'oil'],
      [5, 'clove', 'garlic', 'chopped'], [1, 'tbsp', 'ginger', 'chopped'], [3, '', 'green chilies', 'slit'], [1, '', 'onion', 'petals'], [1, '', 'green bell pepper', 'squares'],
      [1.5, 'tbsp', 'soy sauce'], [1, 'tbsp', 'red chili sauce'], [1, 'tbsp', 'vinegar'], [1, 'tsp', 'sugar'], [1, 'tsp', 'cornstarch', 'in 4 tbsp water'], [2, '', 'scallions', 'sliced']],
    steps: [
      ['Coat paneer', 'Toss paneer with cornstarch, flour, salt, pepper and a sprinkle of water so it’s lightly coated.'],
      ['Fry', '[[shallow-fry|Shallow-fry]] in 3 tbsp oil until golden and crisp on all sides. Drain.', 4],
      ['Stir-fry', 'Heat 1 tbsp oil in a smoking wok, add garlic, ginger and chilies, then onion and pepper. [[stir-fry]] 1 minute.'],
      ['Sauce', 'Add soy, chili sauce, vinegar and sugar, then the slurry. Toss until glossy.'],
      ['Toss', 'Add paneer, toss 30 seconds, finish with scallions.'],
    ],
    tips: ['Soak store-bought paneer in hot water 10 min first so it stays soft.'],
    mistakes: ['Overcooking makes paneer chewy.'],
    vars: ['Chilli mushroom, chilli baby corn or chilli chicken.'],
    serve: 'Veg fried rice or Hakka noodles.',
  });

  /* ================= MITHAI & DESSERTS ================= */
  A({
    id: 'gulab-jamun', name: 'Gulab Jamun', local: 'गुलाब जामुन', area: 'Pan-India', styles: ['sweets'],
    emoji: '🟤', course: 'dessert', level: 2, prep: 20, cook: 30, rest: 120, serves: 6,
    taste: { sweet: 5, rich: 4, aromatic: 3 }, diet: ['vegetarian'], methods: ['deep-fry'],
    tags: ['festive', 'party', 'make-ahead', 'kids'],
    desc: 'Soft, spongy milk dumplings fried golden and soaked in cardamom-rose sugar syrup.',
    story: 'Brought to India from Persia (where luqmat al-qadi were honey-soaked fritters), gulab jamun gets its name from “gulab” (rose water in the syrup) and “jamun”, a dark purple fruit of the same size. It is the sweet of Diwali, weddings and every celebration.',
    equip: ['Kadai', 'Wide pan for syrup'],
    ing: ['#Syrup', [400, 'g', 'sugar'], [400, 'ml', 'water'], [4, '', 'green cardamom pods', 'crushed'], [1, 'tsp', 'rose water'], [1, 'pinch', 'saffron', 'optional'],
      '#Jamuns', [120, 'g', 'milk powder'], [40, 'g', 'all-purpose flour'], [0.25, 'tsp', 'baking soda'], [1, 'tbsp', 'ghee'], [1, 'tbsp', 'yogurt'], [70, 'ml', 'milk', 'approx.'], [500, 'ml', 'ghee or oil', 'for frying']],
    steps: [
      ['Syrup', 'Boil sugar and water with cardamom 5 minutes until slightly sticky (not stringy). Add rose water and saffron. Keep warm.', 5],
      ['Dough', 'Mix milk powder, flour and soda. Rub in ghee and yogurt, then add milk a little at a time to make a very soft, sticky dough. Do NOT knead. Rest 10 minutes.', 10, 'Just bring it together. Kneading makes jamuns hard.'],
      ['Shape', 'Grease your palms and roll into 18 small balls, perfectly smooth with no cracks. They double in size.'],
      ['Fry slowly', 'Heat ghee to low ({{140C}}). Fry the balls on low heat, gently moving the oil around them, for 7–8 minutes until deep brown all over.', 8, 'Low heat cooks them through. If they brown in 2 minutes they will be raw inside.'],
      ['Soak', 'Drop the hot jamuns straight into the warm syrup. Soak at least 2 hours.', 120],
    ],
    tips: ['The syrup should be warm, not boiling, and the jamuns hot.'],
    mistakes: ['Cracks in the balls: they break in the oil.', 'Frying on high heat.'],
    vars: ['Kala jamun: fried darker with a sugar coating.', 'Serve warm with vanilla ice cream.'],
    serve: 'Warm, with a little syrup, or with ice cream.', store: 'Fridge in syrup for 1 week.',
  });

  A({
    id: 'gajar-halwa', name: 'Gajar ka Halwa', local: 'गाजर का हलवा', area: 'Punjab', styles: ['sweets', 'home-style'],
    emoji: '🥕', course: 'dessert', level: 1, prep: 20, cook: 60, serves: 6,
    taste: { sweet: 5, rich: 4, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'],
    tags: ['winter', 'festive', 'make-ahead'],
    desc: 'Grated red carrots slow-cooked in milk with ghee, sugar and cardamom, topped with nuts.',
    story: 'When the sweet red Delhi carrots arrive in winter, every North Indian home fills with the smell of gajar ka halwa. It’s cooked slowly until the milk reduces completely and the carrots turn jewel-like.',
    equip: ['Heavy wide pan', 'Grater'],
    ing: [[1, 'kg', 'red carrots', 'grated'], [1, 'l', 'whole milk'], [150, 'g', 'sugar'], [4, 'tbsp', 'ghee'], [1, 'tsp', 'cardamom powder'], [30, 'g', 'cashews and almonds', 'chopped'], [20, 'g', 'raisins'], [100, 'g', 'khoya (mawa)', 'crumbled, optional']],
    steps: [
      ['Cook carrots in milk', 'Cook grated carrots and milk in a heavy pan on medium, stirring often, 40–45 minutes until all the milk evaporates.', 45, 'Stir from the bottom regularly; milk catches easily.'],
      ['Ghee', 'Add ghee and cook 5 minutes until glossy.'],
      ['Sugar', 'Add sugar. It will melt and loosen. Cook 8–10 minutes until dry again.', 10],
      ['Finish', 'Add khoya, cardamom, nuts (fried in a little ghee) and raisins. Mix and serve warm.'],
    ],
    tips: ['Use juicy red Delhi carrots if you can find them.'],
    mistakes: ['Adding sugar too early: the carrots stay hard.'],
    vars: ['Shortcut: use condensed milk instead of milk and sugar, 25 minutes.'],
    serve: 'Warm, with vanilla ice cream.', store: 'Fridge 5 days.',
  });

  A({
    id: 'kheer', name: 'Rice Kheer', local: 'खीर', area: 'Pan-India', styles: ['sweets', 'home-style'],
    emoji: '🍚', course: 'dessert', level: 1, prep: 5, cook: 50, serves: 6,
    taste: { sweet: 4, rich: 4, aromatic: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'],
    tags: ['festive', 'make-ahead', 'budget'],
    desc: 'Creamy rice pudding slow-simmered in milk with cardamom, saffron and nuts.',
    story: 'One of India’s oldest desserts, kheer (from Sanskrit “ksheer”, milk) is offered at temples and cooked for every festival, from Diwali to Eid, where it is known as sheer.',
    equip: ['Heavy-bottomed pot'],
    ing: [[50, 'g', 'basmati or short-grain rice', 'washed, soaked 20 min'], [1, 'l', 'whole milk'], [80, 'g', 'sugar'], [0.5, 'tsp', 'cardamom powder'], [1, 'pinch', 'saffron'], [20, 'g', 'almonds and pistachios', 'sliced'], [1, 'tbsp', 'raisins']],
    steps: [
      ['Boil milk', 'Bring the milk to a boil in a heavy pot.'],
      ['Cook the rice', 'Add drained rice and [[simmer]] on low, stirring every few minutes and scraping the bottom, 35–40 minutes until the rice is completely soft and the milk has reduced by about a third.', 38, 'Low heat and regular stirring prevent scorching.'],
      ['Sweeten', 'Add sugar, saffron and cardamom; simmer 5 minutes.', 5],
      ['Finish', 'Add nuts and raisins. Serve warm or chilled. It thickens as it cools.'],
    ],
    tips: ['Lightly crush the rice after soaking for a creamier kheer.'],
    mistakes: ['Adding sugar too early: rice stays firm.'],
    vars: ['Semiya (vermicelli) kheer, makhana kheer, or gur (jaggery) kheer.'],
    serve: 'Chilled in small clay pots (kulhads).',
  });

  A({
    id: 'mango-lassi', name: 'Mango Lassi', local: 'आम लस्सी', area: 'Punjab', styles: ['dhaba', 'sweets'],
    emoji: '🥭', course: 'drink', level: 1, prep: 5, cook: 0, serves: 2,
    taste: { sweet: 4, sour: 2, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'],
    tags: ['summer', 'quick', 'kids'],
    desc: 'Thick, chilled yogurt blended with sweet mango and a hint of cardamom.',
    story: 'Lassi is Punjab’s summer drink, served in giant steel glasses at dhabas with a layer of malai (cream) on top. Amritsar’s lassi is so thick a spoon stands up in it.',
    equip: ['Blender'],
    ing: [[250, 'g', 'ripe mango pulp', 'Alphonso or Kesar'], [250, 'g', 'thick chilled yogurt'], [100, 'ml', 'cold milk'], [2, 'tbsp', 'sugar', 'to taste'], [0.25, 'tsp', 'cardamom powder'], [4, '', 'ice cubes'], [1, 'pinch', 'saffron or chopped pistachios', 'to garnish']],
    steps: [
      ['Blend', 'Blend mango, yogurt, milk, sugar, cardamom and ice until thick and frothy.'],
      ['Taste', '[[season|Taste]] and adjust sweetness.'],
      ['Serve', 'Pour into tall glasses and garnish with saffron or pistachios.'],
    ],
    tips: ['Use full-fat yogurt for a thick, creamy lassi.'],
    mistakes: ['Too much milk: thin lassi.'],
    vars: ['Sweet Punjabi lassi, salted chaas with cumin, or rose lassi.'],
    serve: 'With a spicy meal or on a hot afternoon.',
  });
})();
