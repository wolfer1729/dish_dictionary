/* More world classics: Italy, Japan, China, Thailand, Korea */
'use strict';
(function () {
  const A = DD.add;
  const IT = { country: 'Italy', flag: '🇮🇹', region: 'Europe', styles: ['continental'] };
  const JP = { country: 'Japan', flag: '🇯🇵', region: 'East Asia' };
  const CN = { country: 'China', flag: '🇨🇳', region: 'East Asia' };
  const TH = { country: 'Thailand', flag: '🇹🇭', region: 'Southeast Asia' };
  const KR = { country: 'South Korea', flag: '🇰🇷', region: 'East Asia' };
  const X = (base, d) => A(Object.assign({}, base, d));

  /* ================= ITALY ================= */

  X(IT, {
    id: 'cannoli', name: 'Sicilian Cannoli', local: 'Cannoli siciliani',
    emoji: '🥐', course: 'dessert', level: 3, prep: 60, cook: 20, rest: 60, serves: 12,
    taste: { sweet: 4, rich: 4 }, diet: ['vegetarian'], methods: ['deep-fry'],
    tags: ['festive', 'party', 'impress'],
    desc: 'Crisp, blistered fried pastry tubes filled with sweet ricotta, chocolate chips and candied orange.',
    story: 'Born in Palermo during Carnival, possibly in the convents of Caltanissetta, cannoli are now Sicily’s most famous pastry. Fill them at the last minute so the shells stay crisp.',
    equip: ['Metal cannoli tubes', 'Kadai or deep pot', 'Rolling pin', 'Piping bag'],
    ing: ['#Shells', [250, 'g', 'all-purpose flour'], [25, 'g', 'sugar'], [1, 'tbsp', 'cocoa powder'], [30, 'g', 'butter', 'soft'], [1, '', 'egg'], [80, 'ml', 'Marsala wine or white wine vinegar + water'], [1, 'pinch', 'salt'], [1, 'l', 'oil', 'for frying'],
      '#Filling', [500, 'g', 'sheep or cow ricotta', 'drained overnight'], [100, 'g', 'powdered sugar'], [60, 'g', 'dark chocolate chips'], [40, 'g', 'candied orange peel', 'diced'], [30, 'g', 'pistachios', 'chopped']],
    steps: [
      ['Dough', 'Mix all shell ingredients into a firm dough. [[knead]] 5 minutes, wrap and rest 1 hour.', 60],
      ['Roll and wrap', 'Roll very thin (1 mm), cut {{10cm}} circles, wrap around tubes, seal the overlap with egg white.'],
      ['Fry', '[[deep-fry|Fry]] at {{175C}} 1–2 minutes until blistered and golden. Slide off the tubes while warm.', 2],
      ['Filling', 'Beat drained ricotta with sugar until smooth, [[fold]] in chocolate and orange peel. Chill.'],
      ['Fill and serve', 'Pipe filling into cooled shells right before serving. Dip the ends in pistachios and dust with sugar.', 0, 'Drained ricotta is essential, or the filling is runny.'],
    ],
    tips: ['Unfilled shells keep crisp for a week in a tin.'],
    mistakes: ['Filling early: soggy shells.'],
    vars: ['Chocolate-dipped shell ends.'],
    serve: 'With espresso.',
  });

  /* ================= JAPAN ================= */
  X(JP, {
    id: 'sushi-maki', name: 'Sushi (Maki & Nigiri)', local: '寿司', aka: ['sushi rolls'],
    emoji: '🍣', course: 'main', level: 3, prep: 60, cook: 20, rest: 20, serves: 4,
    taste: { umami: 5, savory: 3, sour: 2, sweet: 2 }, diet: ['dairy-free', 'pescatarian'], methods: ['no-cook', 'simmer'],
    tags: ['impress', 'date-night', 'party', 'healthy'],
    desc: 'Seasoned rice rolled with fish and vegetables in nori (maki) or topped with raw fish (nigiri).',
    story: 'Sushi began as fish fermented in rice to preserve it. In 1820s Edo (Tokyo), Hanaya Yohei invented fast “nigiri” as street food. Sushi chefs train for years on the rice alone. The rice, not the fish, is the true star.',
    equip: ['Bamboo rolling mat', 'Very sharp knife', 'Wide bowl (hangiri)', 'Rice cooker or pot'],
    ing: ['#Sushi rice', [400, 'g', 'Japanese short-grain rice'], [480, 'ml', 'water'], [70, 'ml', 'rice vinegar'], [2, 'tbsp', 'sugar'], [1.5, 'tsp', 'salt'],
      '#Fillings', [300, 'g', 'sashimi-grade salmon and tuna'], [1, '', 'cucumber', 'cut in sticks'], [1, '', 'avocado', 'sliced'], [5, 'sheet', 'nori'],
      '#To serve', [null, '', 'soy sauce, wasabi and pickled ginger']],
    steps: [
      ['Cook the rice', '[[wash-rice|Wash]] rice until the water runs clear, soak 20 minutes, then cook with the water. Rest 10 minutes covered.', 20],
      ['Season the rice', 'Dissolve sugar and salt in the vinegar. Spread hot rice in a wide bowl, pour over the vinegar and [[fold]] with cutting motions while fanning to cool to body temperature.', 0, 'Fanning makes the rice glossy; slicing (not stirring) keeps the grains whole.'],
      ['Maki rolls', 'Lay nori shiny side down on the mat. With wet hands, spread a thin layer of rice, leaving 2 cm bare at the top. Add a line of fish, cucumber and avocado. Roll tightly with the mat, pressing gently.'],
      ['Slice', 'Wet a very sharp knife and cut each roll into 8 pieces, wiping the blade between cuts.'],
      ['Nigiri', '[[slice|Slice]] fish against the grain into thin slabs. Mould 20 g rice into an oval, dab with wasabi and press the fish on top.'],
    ],
    tips: ['Keep a bowl of water with a splash of vinegar to wet your hands.'],
    mistakes: ['Hot rice under raw fish.', 'Overfilling the roll.'],
    vars: ['Vegan rolls with avocado, cucumber and pickled radish.', 'California roll (inside-out with crab stick).'],
    serve: 'Miso soup and green tea.',
  });

  X(JP, {
    id: 'sashimi', name: 'Sashimi', local: '刺身',
    emoji: '🐟', course: 'starter', level: 2, prep: 20, cook: 0, serves: 2,
    taste: { umami: 5, savory: 3 }, diet: ['dairy-free', 'gluten-free', 'pescatarian', 'high-protein'], methods: ['no-cook'],
    tags: ['healthy', 'impress', 'date-night', 'quick'],
    desc: 'Pristine slices of the freshest raw fish, served with daikon, shiso, wasabi and soy.',
    story: 'Sashimi is Japanese cooking at its most minimal: everything depends on the quality of the fish and the precision of the knife. A single long pull of the yanagiba knife gives a glossy, clean surface.',
    equip: ['Very sharp long knife', 'Chilled plate'],
    ing: [[300, 'g', 'sashimi-grade fish (tuna, salmon, yellowtail)', 'skinless block'], [100, 'g', 'daikon radish', 'very finely shredded'], [4, 'leaf', 'shiso leaves', 'optional'], [1, 'tsp', 'wasabi'], [null, '', 'soy sauce', 'to serve; tamari for gluten-free']],
    steps: [
      ['Chill', 'Keep the fish very cold until the moment you cut. Soak shredded daikon in ice water 10 minutes.'],
      ['Slice', 'Cut the fish against the grain into {{0.5cm}} slices in ONE long pulling stroke from heel to tip. Don’t saw.', 0, 'A sawing motion tears the flesh; one smooth pull keeps it glossy.'],
      ['Plate', 'Arrange slices leaning on a mound of daikon with shiso, with wasabi on the side. Serve immediately.'],
    ],
    tips: ['Buy only fish labeled sashimi-grade from a trusted fishmonger.'],
    mistakes: ['Mixing wasabi into the soy sauce; dab it on the fish instead.'],
    vars: ['Seared tuna tataki.'],
    serve: 'Soy sauce, wasabi, sake.',
  });

  X(JP, {
    id: 'shoyu-ramen', name: 'Shoyu Ramen', local: '醤油ラーメン',
    emoji: '🍜', course: 'soup', level: 3, prep: 30, cook: 120, rest: 240, serves: 4,
    taste: { umami: 5, savory: 5, rich: 3 }, diet: ['dairy-free', 'high-protein'], methods: ['simmer', 'braise'],
    tags: ['comfort', 'winter', 'rainy-day', 'impress'],
    desc: 'Tokyo-style soy-sauce ramen: clear chicken broth, springy noodles, braised pork, jammy egg and scallions.',
    story: 'Ramen came to Japan with Chinese immigrants in the late 1800s and became a national obsession. Tokyo’s original style is shoyu (soy) ramen. Every bowl has four parts: broth, tare (seasoning), noodles and toppings.',
    equip: ['Large stockpot', 'Saucepan', 'Fine sieve'],
    ing: ['#Broth', [1.5, 'kg', 'chicken carcasses and wings'], [3, 'l', 'water'], [1, '', 'onion', 'halved'], [30, 'g', 'ginger', 'sliced'], [4, '', 'scallions'], [10, 'g', 'kombu'], [3, '', 'dried shiitake'],
      '#Pork chashu & tare', [500, 'g', 'pork belly', 'rolled and tied'], [120, 'ml', 'soy sauce'], [60, 'ml', 'mirin'], [60, 'ml', 'sake'], [2, 'tbsp', 'sugar'],
      '#Bowls', [4, '', 'eggs'], [4, 'piece', 'fresh ramen noodles (portions)'], [4, '', 'scallions', 'sliced'], [4, 'sheet', 'nori'], [100, 'g', 'menma (bamboo shoots)', 'optional']],
    steps: [
      ['Broth', 'Blanch chicken bones 5 minutes, rinse. Simmer with water, onion, ginger and scallions very gently for 2 hours, [[skim|skimming]]. Add kombu and shiitake for the last 30 minutes. Strain.', 120, 'A bare [[simmer]] keeps the broth clear.'],
      ['Chashu', 'Brown the pork, then simmer in soy, mirin, sake, sugar and 300 ml water, covered, 2 hours, turning. Chill, then slice.', 0],
      ['Ramen eggs', 'Boil eggs exactly 6.5 minutes, ice, peel, and [[marinate]] in some of the cooled chashu liquid 4+ hours.', 7],
      ['Tare', 'Strain the chashu braising liquid; this is your shoyu tare.'],
      ['Assemble', 'Put 3 tbsp tare in each warmed bowl, add 400 ml boiling broth. Cook noodles 1–2 minutes, drain well and add. Top with chashu, halved egg, scallions, nori and menma.'],
    ],
    tips: ['Warm the bowls; ramen should be eaten scalding hot.'],
    mistakes: ['Overcooked noodles: they keep softening in the broth.'],
    vars: ['Miso ramen (Sapporo), shio (salt) ramen, or vegan shiitake-kombu ramen.'],
    serve: 'Gyoza on the side.',
  });

  X(JP, {
    id: 'tempura', name: 'Tempura', local: '天ぷら',
    emoji: '🍤', course: 'main', level: 2, prep: 20, cook: 20, serves: 4,
    taste: { savory: 3, umami: 3 }, diet: ['dairy-free', 'pescatarian'], methods: ['deep-fry'],
    tags: ['impress', 'party', 'date-night'],
    desc: 'Prawns and vegetables in a whisper-light, lacy, ultra-crisp batter with tentsuyu dipping sauce.',
    story: 'Portuguese missionaries brought battered frying to Japan in the 16th century; the name may come from “tempora”, Lent fasting days. Japanese cooks perfected it into the lightest batter in the world.',
    equip: ['Deep pot', 'Thermometer', 'Chopsticks', 'Wire rack'],
    ing: [[12, '', 'large prawns', 'peeled, tails on, belly scored'], [1, '', 'sweet potato', 'thin slices'], [1, '', 'eggplant', 'fanned slices'], [8, '', 'shiitake mushrooms'], [8, '', 'green beans'],
      '#Batter', [1, '', 'egg yolk'], [200, 'ml', 'ice-cold sparkling water'], [120, 'g', 'cake or low-protein flour', 'sifted, very cold'], [1, 'l', 'neutral oil', 'for frying'],
      '#Tentsuyu', [150, 'ml', 'dashi'], [2, 'tbsp', 'soy sauce'], [2, 'tbsp', 'mirin'], [50, 'g', 'daikon', 'grated']],
    steps: [
      ['Tentsuyu', 'Simmer dashi, soy and mirin 1 minute. Serve warm with grated daikon.'],
      ['Prep', 'Score prawn bellies and press straight so they don’t curl. Dry all ingredients well. Heat oil to {{180C}}.'],
      ['Batter at the last second', 'Mix yolk and ice water, add flour and stir only 10–15 strokes with chopsticks. Lumpy batter is correct.', 0, 'Cold temperature and under-mixing prevent gluten: that is the lacy crispness.'],
      ['Fry', 'Dip, let excess drip, and [[deep-fry]] in small batches: vegetables 2–3 minutes, prawns 1–2 minutes. Drizzle batter drops over prawns for extra lace.', 0],
      ['Serve', 'Drain on a rack and serve immediately with tentsuyu or matcha salt.'],
    ],
    tips: ['Keep the batter bowl over ice.'],
    mistakes: ['Smooth, overmixed batter: heavy and bready.'],
    vars: ['Vegetable tempura only (vegetarian): use water-only batter for vegan.'],
    serve: 'Rice, or on soba/udon noodles.',
  });

  X(JP, {
    id: 'gyoza', name: 'Gyoza', local: '餃子',
    emoji: '🥟', course: 'snack', level: 2, prep: 40, cook: 10, serves: 4,
    taste: { savory: 4, umami: 4, herby: 2 }, diet: ['dairy-free', 'high-protein'], methods: ['saute', 'steam'],
    tags: ['party', 'make-ahead', 'weeknight'],
    desc: 'Thin-skinned Japanese potstickers with pork, cabbage and garlic, crisp-bottomed and juicy.',
    story: 'Japanese soldiers returning from Manchuria after WWII brought Chinese jiaozi home. Japan made them garlicky with thinner wrappers, and Utsunomiya city calls itself the gyoza capital.',
    equip: ['Non-stick pan with lid'],
    ing: [[250, 'g', 'ground pork'], [200, 'g', 'napa cabbage', 'finely chopped, salted and squeezed'], [3, '', 'scallions', 'minced'], [2, 'clove', 'garlic', 'grated'], [1, 'tsp', 'ginger', 'grated'],
      [1, 'tbsp', 'soy sauce'], [1, 'tsp', 'toasted sesame oil'], [1, 'tsp', 'sake'], [30, '', 'gyoza wrappers'], [1, 'tbsp', 'neutral oil'], [80, 'ml', 'water'],
      '#Dipping sauce', [2, 'tbsp', 'soy sauce'], [2, 'tbsp', 'rice vinegar'], [0.5, 'tsp', 'chili oil (rayu)']],
    steps: [
      ['Filling', 'Mix pork, squeezed cabbage, scallions, garlic, ginger, soy, sesame oil and sake until sticky.'],
      ['Fold', 'Place a teaspoon on a wrapper, wet the edge and [[knead-noodle|pleat]] the front edge 5–6 times against the flat back.'],
      ['Fry', 'Arrange in a hot oiled pan; fry 2 minutes until golden underneath.', 2],
      ['Steam', 'Add water, cover and [[steam]] 4 minutes. Uncover and fry until the water evaporates and the bottoms re-crisp.', 5],
      ['Serve', 'Flip onto a plate, crisp side up, with the dipping sauce.'],
    ],
    tips: ['Salt and squeeze the cabbage to stop soggy filling.'],
    mistakes: ['Crowded pan: they steam instead of crisp.'],
    vars: ['Vegetable gyoza with tofu and mushrooms.'],
    serve: 'Ramen or a cold beer.',
  });

  X(JP, {
    id: 'kitsune-udon', name: 'Kitsune Udon', local: 'きつねうどん',
    emoji: '🍜', course: 'soup', level: 1, prep: 10, cook: 20, serves: 2,
    taste: { umami: 4, sweet: 3, savory: 4 }, diet: ['vegan'], methods: ['simmer'],
    tags: ['comfort', 'quick', 'rainy-day', 'winter'],
    desc: 'Thick, chewy udon noodles in a light dashi broth topped with sweet simmered fried tofu.',
    story: '“Kitsune” means fox. Japanese folklore says foxes love fried tofu (aburaage). This Osaka classic is one of Japan’s most comforting noodle bowls.',
    equip: ['Saucepans'],
    ing: ['#Kombu-shiitake dashi', [800, 'ml', 'water'], [10, 'g', 'kombu'], [3, '', 'dried shiitake'],
      '#Broth seasoning', [2, 'tbsp', 'light soy sauce'], [2, 'tbsp', 'mirin'], [0.5, 'tsp', 'salt'],
      '#Sweet tofu', [4, 'sheet', 'aburaage (fried tofu pockets)'], [100, 'ml', 'dashi'], [1.5, 'tbsp', 'soy sauce'], [1.5, 'tbsp', 'sugar'], [1, 'tbsp', 'mirin'],
      '#Bowls', [2, 'piece', 'frozen udon noodle portions'], [2, '', 'scallions', 'sliced'], [1, 'pinch', 'shichimi togarashi']],
    steps: [
      ['Dashi', 'Soak kombu and shiitake in water 20 minutes, heat to just below boiling, remove kombu, simmer 5 minutes. Strain.', 25],
      ['Sweet tofu', 'Pour boiling water over the aburaage to remove oil. Simmer in dashi, soy, sugar and mirin 8 minutes until absorbed.', 8],
      ['Broth', 'Season the remaining dashi with soy, mirin and salt.'],
      ['Udon', 'Boil udon 1–2 minutes, drain, put in bowls.'],
      ['Serve', 'Pour hot broth over, top with tofu, scallions and shichimi.'],
    ],
    tips: ['Frozen udon has the best chewy texture.'],
    mistakes: ['Overboiling the noodles.'],
    vars: ['Tempura udon, curry udon.'],
    serve: 'Alone, as a light meal.',
  });

  /* ================= CHINA ================= */
  X(CN, {
    id: 'peking-duck', name: 'Peking Duck (Home Oven)', local: '北京烤鸭',
    emoji: '🦆', course: 'main', level: 3, prep: 40, cook: 100, rest: 1440, serves: 6,
    taste: { rich: 5, savory: 4, sweet: 3, umami: 4 }, diet: ['dairy-free', 'high-protein'], methods: ['roast'],
    tags: ['festive', 'impress', 'party'],
    desc: 'Lacquered, glass-crisp duck skin and juicy meat, rolled in thin pancakes with hoisin, scallion and cucumber.',
    story: 'Roast duck has been prepared in Beijing since the imperial era; Quanjude restaurant has roasted ducks in wood-fired ovens since 1864. The skin is the prize, carved first and eaten dipped in sugar or rolled in pancakes.',
    equip: ['Roasting rack and tray', 'Fridge space for air-drying', 'Hair dryer (optional)'],
    ing: [[1, '', 'whole duck', 'about 2.2 kg'], [1, 'tbsp', 'salt'], [1, 'tsp', 'five-spice powder'], [3, 'tbsp', 'maltose or honey'], [2, 'tbsp', 'rice vinegar'], [1, 'tbsp', 'Shaoxing wine'],
      '#To serve', [20, '', 'Mandarin pancakes'], [100, 'ml', 'hoisin sauce'], [6, '', 'scallions', 'julienned'], [1, '', 'cucumber', 'julienned']],
    steps: [
      ['Scald the skin', 'Pour boiling water over the duck all over; the skin tightens. Pat dry. Rub the cavity with salt and five-spice.'],
      ['Glaze', 'Dissolve maltose in vinegar, wine and 2 tbsp hot water. Brush all over the skin.'],
      ['Air-dry', 'Refrigerate uncovered on a rack 24 hours (or blow-dry the skin 20 min). Dry skin = crisp skin.', 0, 'This drying step is what makes the skin crackle like glass.'],
      ['Roast', 'Roast breast up on a rack over a tray of water at {{180C}} 60 minutes, then {{220C}} 20–30 minutes until mahogany and crisp.', 90],
      ['Carve', '[[rest|Rest]] 10 minutes. Slice the skin first into small pieces, then the meat.'],
      ['Serve', 'Wrap skin and meat in warm pancakes with hoisin, scallion and cucumber.'],
    ],
    tips: ['Save the duck fat for roasting potatoes.'],
    mistakes: ['Wet skin: chewy, not crisp.'],
    vars: ['Use duck legs for a quicker version.'],
    serve: 'Pancakes, hoisin, scallion, cucumber; a duck-bone soup after.',
  });

  X(CN, {
    id: 'siu-mai', name: 'Siu Mai (Dim Sum)', local: '燒賣', aka: ['dim sum'],
    emoji: '🥟', course: 'snack', level: 2, prep: 40, cook: 12, serves: 4,
    taste: { savory: 4, umami: 5, sweet: 1 }, diet: ['dairy-free', 'high-protein'], methods: ['steam'],
    tags: ['brunch', 'party', 'impress'],
    desc: 'Open-topped Cantonese dumplings of pork and prawn, steamed in bamboo baskets, the icon of dim sum.',
    story: 'Dim sum (“touch the heart”) grew from Cantonese teahouses along the Silk Road where travelers rested. “Yum cha” (drinking tea) with baskets of siu mai and har gow is a Hong Kong weekend ritual.',
    equip: ['Bamboo steamer', 'Wok', 'Baking paper'],
    ing: [[300, 'g', 'ground pork', 'with some fat'], [150, 'g', 'raw prawns', 'chopped'], [4, '', 'dried shiitake', 'soaked, finely diced'], [1, 'tbsp', 'soy sauce'], [1, 'tbsp', 'oyster sauce'], [1, 'tsp', 'sugar'],
      [1, 'tsp', 'toasted sesame oil'], [1, 'tbsp', 'cornstarch'], [0.5, 'tsp', 'white pepper'], [24, '', 'round wonton wrappers'], [1, 'tbsp', 'carrot or fish roe', 'finely diced, to garnish']],
    steps: [
      ['Filling', 'Mix pork, prawns, mushrooms, sauces, sugar, sesame oil, cornstarch and pepper. Stir in one direction 2 minutes until springy.'],
      ['Shape', 'Make an “O” with thumb and index finger, place a wrapper on it, add a spoon of filling and squeeze gently into an open cup. Flatten the top with a wet spoon.', 0, 'Tap the base on the counter so they stand up flat.'],
      ['Garnish', 'Top each with a dot of carrot or roe.'],
      ['Steam', 'Line the steamer with perforated paper, arrange with gaps and [[steam]] over boiling water 8–10 minutes.', 10],
    ],
    tips: ['Fat in the pork keeps them juicy.'],
    mistakes: ['Wrappers drying out: keep covered.'],
    vars: ['Har gow (crystal prawn dumplings), char siu bao.'],
    serve: 'Chili oil, soy and jasmine tea.',
  });

  X(CN, {
    id: 'chow-mein', name: 'Chicken Chow Mein', local: '炒面',
    emoji: '🍜', course: 'main', level: 1, prep: 15, cook: 10, serves: 2,
    taste: { savory: 4, umami: 4, sweet: 1 }, diet: ['dairy-free', 'high-protein'], methods: ['stir-fry'],
    tags: ['weeknight', 'quick', 'kids'],
    desc: 'Stir-fried egg noodles with chicken, cabbage and bean sprouts in a savory soy-oyster sauce.',
    story: '“Chow mein” is Cantonese for fried noodles. Chinese immigrants brought it to the USA in the 1800s, where it became one of the first Chinese dishes Americans loved.',
    equip: ['Wok'],
    ing: [[200, 'g', 'egg noodles'], [250, 'g', 'chicken thigh', 'thinly sliced'], [1, 'tsp', 'cornstarch'], [2, 'tbsp', 'neutral oil'], [2, 'clove', 'garlic'], [150, 'g', 'cabbage', 'shredded'],
      [1, '', 'carrot', 'julienned'], [100, 'g', 'bean sprouts'], [4, '', 'scallions', 'cut in 4 cm lengths'],
      '#Sauce', [2, 'tbsp', 'soy sauce'], [1, 'tbsp', 'oyster sauce'], [1, 'tsp', 'dark soy sauce'], [1, 'tsp', 'sugar'], [1, 'tsp', 'toasted sesame oil'], [2, 'tbsp', 'water']],
    steps: [
      ['Noodles', 'Cook noodles 1 minute less than the packet, rinse cold, drain well and toss with a little oil.'],
      ['Velvet', '[[velvet|Velvet]] the chicken with cornstarch and a splash of soy.'],
      ['Stir-fry', '[[stir-fry|Stir-fry]] chicken in a smoking wok until cooked; remove. Fry garlic, cabbage and carrot 1 minute.', 4],
      ['Noodles in', 'Add noodles and sauce; toss 2 minutes until coated and slightly crispy. Add chicken, sprouts and scallions; toss 30 seconds.', 2],
    ],
    tips: ['Let the noodles sit untouched 30 seconds for crispy bits.'],
    mistakes: ['Wet noodles: they stew.'],
    vars: ['Veg chow mein with tofu.'],
    serve: 'Spring rolls on the side.',
  });

  X(CN, {
    id: 'sweet-sour-pork', name: 'Sweet and Sour Pork', local: '咕噜肉',
    emoji: '🍍', course: 'main', level: 2, prep: 20, cook: 20, serves: 4,
    taste: { sweet: 4, sour: 4, savory: 3 }, diet: ['dairy-free', 'high-protein'], methods: ['deep-fry', 'stir-fry'],
    tags: ['kids', 'party', 'weeknight'],
    desc: 'Crispy fried pork with pineapple and peppers in a glossy, tangy-sweet sauce.',
    story: 'Cantonese “gu lou yuk” was created in Guangdong in the 18th century for Western traders who liked sweet flavors. The double-fry makes the coating stay crisp under the sauce.',
    equip: ['Wok', 'Thermometer'],
    ing: [[500, 'g', 'pork shoulder', '2 cm cubes'], [1, 'tbsp', 'soy sauce'], [1, '', 'egg', 'beaten'], [80, 'g', 'cornstarch'], [1, 'l', 'neutral oil', 'for frying'],
      [1, '', 'green bell pepper', 'chunks'], [1, '', 'red bell pepper', 'chunks'], [1, '', 'onion', 'chunks'], [200, 'g', 'pineapple chunks'],
      '#Sauce', [4, 'tbsp', 'ketchup'], [3, 'tbsp', 'rice vinegar'], [3, 'tbsp', 'sugar'], [1, 'tbsp', 'soy sauce'], [100, 'ml', 'pineapple juice'], [1, 'tsp', 'cornstarch', 'in 2 tbsp water']],
    steps: [
      ['Marinate and coat', '[[marinate|Marinate]] pork with soy 15 minutes, toss in egg, then coat thickly in cornstarch.', 15],
      ['Double-fry', '[[deep-fry|Fry]] at {{170C}} 4 minutes, remove, raise to {{190C}} and fry again 1 minute until crisp.', 5, 'The second fry is the secret to lasting crunch.'],
      ['Sauce', 'Stir-fry peppers, onion and pineapple 1 minute. Add sauce ingredients and the slurry; simmer until glossy.'],
      ['Toss', 'Add the pork, toss 20 seconds and serve at once.'],
    ],
    tips: ['Taste the sauce and balance sweet and sour before adding pork.'],
    mistakes: ['Saucing too early.'],
    vars: ['Sweet and sour chicken or tofu.'],
    serve: 'Steamed rice.',
  });

  X(CN, {
    id: 'spring-rolls', name: 'Crispy Spring Rolls', local: '春卷',
    emoji: '🥢', course: 'starter', level: 2, prep: 30, cook: 15, serves: 6,
    taste: { savory: 4, umami: 3 }, diet: ['vegan'], methods: ['deep-fry'],
    tags: ['party', 'festive', 'kids', 'make-ahead'],
    desc: 'Golden, crackling rolls filled with cabbage, carrot, mushrooms and glass noodles.',
    story: 'Spring rolls were eaten at the Spring Festival (Chinese New Year) to welcome spring; their golden color resembles gold bars for prosperity.',
    equip: ['Wok', 'Pot for frying'],
    ing: [[50, 'g', 'glass noodles', 'soaked, cut short'], [2, 'tbsp', 'neutral oil'], [2, 'clove', 'garlic'], [250, 'g', 'cabbage', 'shredded'], [1, '', 'carrot', 'julienned'], [6, '', 'shiitake mushrooms', 'sliced'],
      [100, 'g', 'bean sprouts'], [2, 'tbsp', 'soy sauce'], [1, 'tsp', 'sugar'], [1, 'tsp', 'toasted sesame oil'], [20, 'sheet', 'spring roll wrappers'], [1, 'tbsp', 'flour', 'mixed with water as glue'], [1, 'l', 'oil', 'for frying']],
    steps: [
      ['Filling', '[[stir-fry]] garlic, cabbage, carrot and mushrooms 3 minutes. Add noodles, sprouts and seasoning. Cool and drain completely.', 3, 'A dry, cool filling keeps the rolls crisp and stops bursting.'],
      ['Roll', 'Place filling near one corner of a wrapper, roll once, fold in the sides, roll tightly and seal with flour paste.'],
      ['Fry', '[[deep-fry]] at {{170C}} 4–5 minutes until golden. Drain on a rack.', 5],
    ],
    tips: ['Freeze uncooked rolls and fry from frozen.'],
    mistakes: ['Wet filling: soggy, splitting rolls.'],
    vars: ['Pork and prawn filling.'],
    serve: 'Sweet chili sauce.',
  });

  /* ================= THAILAND ================= */
  X(TH, {
    id: 'som-tum', name: 'Som Tum (Green Papaya Salad)', local: 'ส้มตำ',
    emoji: '🥗', course: 'salad', level: 1, prep: 20, cook: 0, serves: 2,
    taste: { sour: 5, spicy: 4, sweet: 3, savory: 4 }, diet: ['dairy-free', 'gluten-free', 'pescatarian'], methods: ['no-cook'],
    tags: ['summer', 'healthy', 'street-food', 'quick'],
    desc: 'Crunchy shredded green papaya pounded with lime, chili, fish sauce, palm sugar, tomatoes and peanuts.',
    story: 'Som tum comes from Isaan in northeast Thailand and Laos. It is pounded to order in a clay mortar at every Thai street corner; the sound of the pestle is the sound of lunchtime.',
    equip: ['Large mortar and pestle', 'Julienne peeler'],
    ing: [[300, 'g', 'green papaya', 'julienned'], [2, 'clove', 'garlic'], [2, '', 'Thai bird’s eye chilies'], [1, 'tbsp', 'dried shrimp', 'optional'], [1.5, 'tbsp', 'palm sugar'], [2, 'tbsp', 'fish sauce'],
      [3, 'tbsp', 'lime juice'], [8, '', 'cherry tomatoes', 'halved'], [50, 'g', 'long beans', 'cut 3 cm'], [2, 'tbsp', 'roasted peanuts']],
    steps: [
      ['Pound aromatics', '[[pound|Pound]] garlic, chilies and dried shrimp to a rough paste.'],
      ['Dressing', 'Add palm sugar, fish sauce and lime; pound to dissolve.'],
      ['Bruise', 'Add beans and tomatoes and bruise lightly, then papaya. Pound and toss with a spoon so everything soaks up the dressing.', 0, 'Pound gently. You want to bruise, not mash.'],
      ['Taste', '[[season|Taste]]: sour, salty, sweet and hot in balance. Top with peanuts.'],
    ],
    tips: ['No papaya? Use green mango, cucumber or carrot.'],
    mistakes: ['Over-pounding into mush.'],
    vars: ['Vegan: soy sauce instead of fish sauce, no shrimp.'],
    serve: 'Sticky rice and grilled chicken (gai yang).',
  });

  X(TH, {
    id: 'pad-see-ew', name: 'Pad See Ew', local: 'ผัดซีอิ๊ว',
    emoji: '🍜', course: 'main', level: 1, prep: 15, cook: 10, serves: 2,
    taste: { savory: 4, sweet: 3, umami: 4, smoky: 3 }, diet: ['dairy-free'], methods: ['stir-fry'],
    tags: ['weeknight', 'street-food', 'quick', 'kids'],
    desc: 'Wide, chewy rice noodles stir-fried with sweet soy, Chinese broccoli and egg, smoky from the wok.',
    story: 'A Thai-Chinese street classic. “See ew” means soy sauce. The charred, caramelized edges of the wide noodles are the point.',
    equip: ['Wok'],
    ing: [[300, 'g', 'fresh wide rice noodles', 'separated'], [200, 'g', 'chicken or tofu', 'sliced'], [2, 'tbsp', 'neutral oil'], [3, 'clove', 'garlic', 'minced'], [200, 'g', 'Chinese broccoli (kai lan)', 'cut 5 cm'], [2, '', 'eggs'],
      '#Sauce', [2, 'tbsp', 'dark sweet soy sauce'], [1, 'tbsp', 'light soy sauce'], [1, 'tbsp', 'oyster sauce'], [1, 'tsp', 'sugar'], [1, 'tsp', 'white vinegar']],
    steps: [
      ['Sauce', 'Mix the sauce.'],
      ['Protein', '[[stir-fry]] chicken with garlic on high until cooked. Add kai lan stems, then leaves.', 3],
      ['Egg', 'Push aside, scramble the eggs.'],
      ['Noodles', 'Add noodles and sauce. Let them sit 20 seconds to char, toss, repeat for 2 minutes.', 2, 'Letting the noodles sit is what gives the smoky caramel edges.'],
    ],
    tips: ['Microwave fresh noodles 30 seconds to separate them without breaking.'],
    mistakes: ['Stirring constantly: no char.'],
    vars: ['Vegetarian with tofu and mushroom sauce.'],
    serve: 'Chili flakes and vinegar with chilies at the table.',
  });

  X(TH, {
    id: 'khao-pad', name: 'Khao Pad (Thai Fried Rice)', local: 'ข้าวผัด',
    emoji: '🍚', course: 'main', level: 1, prep: 10, cook: 8, serves: 2,
    taste: { savory: 4, umami: 4, sour: 1 }, diet: ['dairy-free'], methods: ['stir-fry'],
    tags: ['weeknight', 'quick', 'budget', 'kids'],
    desc: 'Jasmine fried rice with prawns, egg, onion and tomato, finished with lime and chili fish sauce.',
    story: 'Khao pad is Thailand’s everyday comfort lunch, lighter than Chinese fried rice and always served with a lime wedge, cucumber and prik nam pla (chili fish sauce).',
    equip: ['Wok'],
    ing: [[450, 'g', 'cooked jasmine rice', 'day-old'], [200, 'g', 'prawns or chicken'], [2, 'tbsp', 'neutral oil'], [3, 'clove', 'garlic'], [0.5, '', 'onion', 'sliced'], [2, '', 'eggs'], [1, '', 'tomato', 'wedges'],
      [1.5, 'tbsp', 'fish sauce'], [1, 'tbsp', 'light soy sauce'], [1, 'tsp', 'sugar'], [2, '', 'scallions'], [1, '', 'lime', 'wedges'], [1, '', 'cucumber', 'sliced'],
      '#Prik nam pla', [2, 'tbsp', 'fish sauce'], [3, '', 'bird’s eye chilies', 'sliced'], [1, 'tbsp', 'lime juice']],
    steps: [
      ['Protein', '[[stir-fry]] garlic, onion and prawns on high until pink.', 2],
      ['Egg', 'Push aside, scramble eggs until just set.'],
      ['Rice', 'Add rice, fish sauce, soy and sugar. Toss 3 minutes until hot and fragrant. Add tomato and scallions.', 3],
      ['Serve', 'Serve with lime, cucumber and prik nam pla.'],
    ],
    tips: ['Squeeze lime over just before eating.'],
    mistakes: ['Fresh rice turns mushy.'],
    vars: ['Pineapple fried rice, crab fried rice.'],
    serve: 'Prik nam pla on the side.',
  });

  X(TH, {
    id: 'mango-sticky-rice', name: 'Mango Sticky Rice', local: 'ข้าวเหนียวมะม่วง',
    emoji: '🥭', course: 'dessert', level: 2, prep: 10, cook: 25, rest: 240, serves: 4,
    taste: { sweet: 5, rich: 4 }, diet: ['vegan', 'gluten-free'], methods: ['steam'],
    tags: ['summer', 'impress', 'date-night'],
    desc: 'Sweet, salty coconut-soaked glutinous rice with ripe mango and a drizzle of coconut cream.',
    story: 'Khao niao mamuang is Thailand’s favorite dessert during mango season (April to May). Its balance of sweet, salty and creamy is perfect Thai flavor logic.',
    equip: ['Steamer basket lined with cloth', 'Saucepan'],
    ing: [[300, 'g', 'glutinous (sticky) rice', 'soaked 4 h'], [300, 'ml', 'coconut milk'], [80, 'g', 'sugar'], [0.75, 'tsp', 'salt'],
      '#Topping', [120, 'ml', 'coconut cream'], [1, 'tsp', 'rice flour or cornstarch'], [1, 'pinch', 'salt'], [2, '', 'ripe mangoes', 'sliced'], [1, 'tbsp', 'toasted mung beans or sesame seeds']],
    steps: [
      ['Steam the rice', 'Drain the soaked rice and [[steam]] in the cloth-lined basket 20–25 minutes until translucent and chewy.', 22],
      ['Coconut sauce', 'Warm coconut milk with sugar and salt until dissolved; don’t boil.'],
      ['Soak', 'Mix the hot rice with the coconut sauce, cover and rest 20 minutes. It absorbs everything.', 20],
      ['Topping', 'Heat coconut cream with rice flour and salt until slightly thick.'],
      ['Serve', 'Mound rice beside mango slices, spoon topping over and scatter mung beans.'],
    ],
    tips: ['Use the ripest, most fragrant mangoes.'],
    mistakes: ['Using regular rice: it won’t become sticky.'],
    vars: ['Durian sticky rice for the adventurous.'],
    serve: 'At room temperature.',
  });

  /* ================= KOREA ================= */
  X(KR, {
    id: 'kimchi', name: 'Napa Cabbage Kimchi', local: '배추김치',
    emoji: '🥬', course: 'side', level: 2, prep: 60, cook: 0, rest: 2880, serves: 20,
    taste: { sour: 4, spicy: 4, umami: 5, savory: 4 }, diet: ['dairy-free', 'gluten-free', 'pescatarian'], methods: ['no-cook'],
    tags: ['healthy', 'make-ahead', 'meal-prep'],
    desc: 'Salted napa cabbage fermented with a fiery paste of gochugaru, garlic, ginger and fish sauce.',
    story: 'Kimchi is eaten at almost every Korean meal. “Kimjang”, the communal autumn kimchi-making, is UNESCO-listed heritage. Families make hundreds of heads together to last the winter.',
    equip: ['Large bowl', 'Gloves', 'Large glass jar'],
    ing: [[1, 'head', 'napa cabbage', 'about 2 kg'], [100, 'g', 'coarse sea salt'],
      '#Paste', [2, 'tbsp', 'glutinous rice flour'], [200, 'ml', 'water'], [50, 'g', 'gochugaru (Korean chili flakes)'], [8, 'clove', 'garlic'], [20, 'g', 'ginger'], [3, 'tbsp', 'fish sauce'], [1, 'tbsp', 'sugar'],
      [1, '', 'Korean radish or daikon', 'julienned, 200 g'], [5, '', 'scallions', 'cut 3 cm']],
    steps: [
      ['Salt the cabbage', 'Quarter the cabbage lengthwise, sprinkle salt between every leaf, rest 2 hours, turning every 30 minutes, until bendy. Rinse 3 times and drain well.', 120, 'Properly wilted leaves bend without snapping.'],
      ['Rice porridge', 'Cook rice flour and water to a thin porridge. Cool.', 5],
      ['Paste', 'Blend garlic, ginger, fish sauce and sugar; mix with porridge and gochugaru. Fold in radish and scallions.'],
      ['Coat', 'Wearing gloves, smear paste between every leaf.'],
      ['Ferment', 'Pack tightly into a jar, pressing out air. Leave at room temperature 1–2 days until bubbly and sour, then refrigerate.', 0],
    ],
    tips: ['It keeps for months; older kimchi is perfect for jjigae.'],
    mistakes: ['Not rinsing well: too salty.'],
    vars: ['Vegan: soy sauce and seaweed instead of fish sauce.', 'Cucumber or radish kimchi.'],
    serve: 'With every Korean meal.', store: 'Fridge up to 3 months.',
  });

  X(KR, {
    id: 'bulgogi', name: 'Mushroom Bulgogi', local: '버섯 불고기',
    emoji: '🥩', course: 'main', level: 1, prep: 15, cook: 10, rest: 60, serves: 4,
    taste: { sweet: 4, savory: 5, umami: 5 }, diet: ['vegan'], methods: ['grill', 'saute'],
    tags: ['weeknight', 'kids', 'party'],
    desc: 'Meaty king oyster and shiitake mushrooms in the classic soy-pear-garlic bulgogi marinade, seared until caramelized.',
    story: '“Bul-gogi” means fire meat. Dating back to the Goguryeo era, it was once royal food. Mushrooms soak up the sweet-savory marinade beautifully, making a vegetarian bulgogi loved in Korea’s temple-food and vegan restaurants.',
    equip: ['Grill pan or cast-iron skillet'],
    ing: [[600, 'g', 'king oyster and shiitake mushrooms', 'king oyster sliced thin lengthwise'], [0.5, '', 'Asian pear or apple', 'grated'], [4, 'tbsp', 'soy sauce'], [2, 'tbsp', 'sugar'], [1, 'tbsp', 'toasted sesame oil'],
      [4, 'clove', 'garlic', 'grated'], [1, 'tsp', 'ginger', 'grated'], [0.5, 'tsp', 'black pepper'], [1, '', 'onion', 'sliced'], [3, '', 'scallions'], [1, 'tbsp', 'sesame seeds']],
    steps: [
      ['Slice', 'Tear or [[slice]] the mushrooms into thin, even strips.'],
      ['Marinate', '[[marinate|Marinate]] with pear, soy, sugar, sesame oil, garlic, ginger and pepper for 1 hour.', 60],
      ['Sear', 'Cook in batches in a smoking-hot pan with the onion, 2–3 minutes, until caramelized at the edges.', 3, 'Small batches = caramelization, not boiling.'],
      ['Finish', 'Top with scallions and sesame seeds.'],
    ],
    tips: ['Leftover marinade? Boil it 1 minute before using as sauce.'],
    mistakes: ['Crowding the pan: mushrooms steam and go soggy.'],
    vars: ['Spicy pork bulgogi (jeyuk) with gochujang.', 'Tofu bulgogi.'],
    serve: 'Rice, lettuce wraps, ssamjang and kimchi.',
  });

  X(KR, {
    id: 'japchae', name: 'Japchae', local: '잡채',
    emoji: '🍝', course: 'main', level: 2, prep: 25, cook: 20, serves: 4,
    taste: { savory: 4, sweet: 3, umami: 3 }, diet: ['vegan', 'gluten-free'], methods: ['stir-fry', 'simmer'],
    tags: ['festive', 'party', 'make-ahead'],
    desc: 'Glossy sweet-potato glass noodles stir-fried with colorful vegetables, sesame and soy.',
    story: 'Japchae was first made for King Gwanghaegun’s 17th-century banquet. It’s a must at Korean holidays and birthdays.',
    equip: ['Large pot', 'Frying pan'],
    ing: [[250, 'g', 'sweet potato glass noodles (dangmyeon)'], [1, '', 'carrot', 'julienned'], [1, '', 'onion', 'sliced'], [1, '', 'red bell pepper', 'julienned'], [6, '', 'shiitake mushrooms', 'sliced'], [200, 'g', 'spinach'], [2, 'tbsp', 'neutral oil'],
      '#Sauce', [4, 'tbsp', 'tamari or soy sauce'], [2, 'tbsp', 'sugar'], [2, 'tbsp', 'toasted sesame oil'], [2, 'clove', 'garlic', 'minced'], [1, 'tbsp', 'sesame seeds']],
    steps: [
      ['Noodles', '[[boil|Boil]] noodles 6 minutes, drain, cut with scissors into shorter lengths and toss with 1 tbsp sauce.', 6],
      ['Spinach', '[[blanch|Blanch]] spinach 30 seconds, squeeze, season with a little sauce.'],
      ['Vegetables', '[[stir-fry|Stir-fry]] each vegetable separately briefly with a pinch of salt.'],
      ['Combine', 'Toss noodles, vegetables and the remaining sauce in the pan 2 minutes until glossy. Top with sesame seeds.', 2],
    ],
    tips: ['Cooking vegetables separately keeps colors bright.'],
    mistakes: ['Overboiling noodles: they go limp.'],
    vars: ['Add mushroom bulgogi or egg strips.'],
    serve: 'Warm or room temperature.',
  });

  X(KR, {
    id: 'tteokbokki', name: 'Tteokbokki', local: '떡볶이',
    emoji: '🍢', course: 'snack', level: 1, prep: 10, cook: 15, serves: 2,
    taste: { spicy: 4, sweet: 4, savory: 3 }, diet: ['dairy-free'], methods: ['simmer'],
    tags: ['street-food', 'quick', 'rainy-day'],
    desc: 'Chewy rice cakes simmered in a sweet, spicy, glossy gochujang sauce with fish cakes and scallions.',
    story: 'Korea’s most-loved street snack, sold from red-tented pojangmacha carts. The spicy-red version appeared in Seoul’s Sindang-dong in the 1950s.',
    equip: ['Wide pan'],
    ing: [[400, 'g', 'cylinder rice cakes (garae-tteok)'], [400, 'ml', 'anchovy-kelp stock or water'], [2, 'tbsp', 'gochujang'], [1, 'tbsp', 'gochugaru'], [1, 'tbsp', 'sugar'], [1, 'tbsp', 'soy sauce'],
      [2, 'clove', 'garlic', 'minced'], [100, 'g', 'Korean fish cakes (eomuk)', 'sliced'], [3, '', 'scallions', 'cut 5 cm'], [1, '', 'egg', 'hard-boiled, optional'], [1, 'tsp', 'sesame seeds']],
    steps: [
      ['Soak', 'If rice cakes are hard, soak in warm water 10 minutes.'],
      ['Sauce', 'Bring stock to a boil and stir in gochujang, gochugaru, sugar, soy and garlic.'],
      ['Simmer', 'Add rice cakes and fish cakes; [[simmer]] 10–12 minutes, stirring, until the sauce is thick and glossy and the rice cakes are soft.', 11],
      ['Finish', 'Add scallions and egg for the last minute; top with sesame.'],
    ],
    tips: ['Add a slice of cheese on top for rose or cheese tteokbokki.'],
    mistakes: ['Not stirring: rice cakes stick.'],
    vars: ['Rosé tteokbokki with cream, gungjung (royal) soy tteokbokki (non-spicy).'],
    serve: 'With fried dumplings or kimbap.',
  });

  X(KR, {
    id: 'samgyeopsal', name: 'Samgyeopsal (Korean Pork Belly BBQ)', local: '삼겹살',
    emoji: '🥓', course: 'main', level: 1, prep: 20, cook: 20, serves: 4,
    taste: { rich: 5, savory: 4, spicy: 2, smoky: 3 }, diet: ['dairy-free', 'gluten-free', 'high-protein'], methods: ['grill'],
    tags: ['party', 'date-night'],
    desc: 'Thick pork belly slices grilled at the table, wrapped in lettuce with ssamjang, garlic and kimchi.',
    story: '“Samgyeop” means three layers (of fat and meat). Korean BBQ restaurants grill it at the table, and friends wrap each bite in lettuce with sauce, and drink soju.',
    equip: ['Tabletop grill or cast-iron grill pan', 'Scissors'],
    ing: [[800, 'g', 'pork belly', '1 cm thick slices, skinless'], [0.5, 'tsp', 'salt'], [0.5, 'tsp', 'black pepper'], [1, 'head', 'lettuce and perilla leaves'], [8, 'clove', 'garlic', 'sliced'], [2, '', 'green chilies', 'sliced'],
      [200, 'g', 'kimchi'], '#Ssamjang', [2, 'tbsp', 'doenjang (soybean paste)'], [1, 'tbsp', 'gochujang'], [1, 'tsp', 'toasted sesame oil'], [1, 'tsp', 'honey'], [1, '', 'scallion', 'minced'],
      '#Sesame salt dip', [2, 'tbsp', 'toasted sesame oil'], [0.5, 'tsp', 'salt'], [0.25, 'tsp', 'black pepper']],
    steps: [
      ['Sauces', 'Mix ssamjang ingredients; mix sesame oil, salt and pepper for the dip.'],
      ['Grill', 'Grill pork on a hot pan without oil until golden and crisp on both sides, 4–5 minutes per side. Grill garlic and kimchi in the rendered fat.', 10, 'Cut into bites with scissors once browned, Korean style.'],
      ['Wrap', 'Place pork in lettuce with ssamjang, garlic, chili and kimchi. Eat in one bite.'],
    ],
    tips: ['Let the fat [[render]]; that crisp fat is the best part.'],
    mistakes: ['Moving the meat constantly: no crust.'],
    vars: ['Marinated (yangnyeom) samgyeopsal with gochujang.'],
    serve: 'Doenjang jjigae, rice and soju.',
  });
})();
