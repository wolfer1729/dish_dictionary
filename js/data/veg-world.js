/* Vegetarian dishes from around the world */
'use strict';
(function () {
  const X = (base, d) => DD.add(Object.assign({}, base, d));
  const IT = { country: 'Italy', flag: '🇮🇹', region: 'Europe', styles: ['continental'] };
  const CH = { country: 'Switzerland', flag: '🇨🇭', region: 'Europe', styles: ['continental'] };
  const MX = { country: 'Mexico', flag: '🇲🇽', region: 'Latin America' };
  const ME = { country: 'Lebanon', flag: '🇱🇧', region: 'Middle East' };
  const TR = { country: 'Turkey', flag: '🇹🇷', region: 'Middle East' };

  /* ---------- Italy ---------- */
  X(IT, { id: 'pesto-genovese', name: 'Trofie al Pesto Genovese', local: 'Pasta al pesto genovese', emoji: '🌿', course: 'main', level: 1, prep: 15, cook: 12, serves: 4,
    taste: { herby: 5, rich: 4, savory: 4 }, diet: ['vegetarian'], methods: ['simmer', 'no-cook'], tags: ['quick', 'summer', 'weeknight', 'date-night'],
    desc: 'Pasta with vivid green basil pesto, pine nuts, Parmesan and olive oil, plus potatoes and green beans the Ligurian way.',
    story: 'Pesto comes from Genoa, named after “pestare” (to pound) in a marble mortar. Ligurians cook potatoes and green beans with the pasta.',
    equip: ['Mortar or food processor', 'Large pot'], ing: [[60, 'g', 'fresh basil leaves'], [30, 'g', 'pine nuts', 'toasted'], [1, 'clove', 'garlic'], [50, 'g', 'Parmigiano Reggiano', 'grated'], [20, 'g', 'Pecorino', 'grated'], [100, 'ml', 'extra-virgin olive oil'], [0.25, 'tsp', 'coarse salt'],
      [400, 'g', 'trofie or linguine'], [1, '', 'potato', 'small cubes'], [100, 'g', 'green beans', 'cut']],
    steps: [['Pesto', '[[pound|Pound]] garlic and salt, add pine nuts, then basil with a circular motion, then cheeses and oil. (Or pulse briefly in a cold processor.)', 0, 'Don’t over-blend: heat darkens basil and makes it bitter.'], ['Cook', 'Boil potato 5 minutes, add pasta, add beans for the last 5 minutes.', 12], ['Toss', 'Drain (save water) and toss off the heat with pesto and a splash of pasta water.']],
    tips: ['Use young, small basil leaves.'], mistakes: ['Cooking pesto: never heat it.'], vars: ['Nut-free: sunflower seeds.', 'Vegan: nutritional yeast for cheese.'], serve: 'Ligurian white wine.' });

  X(IT, { id: 'gnocchi', name: 'Potato Gnocchi with Sage Butter', local: 'Gnocchi di patate', emoji: '🥔', course: 'main', level: 2, prep: 40, cook: 30, serves: 4,
    taste: { rich: 4, savory: 4, herby: 3 }, diet: ['vegetarian'], methods: ['simmer', 'saute'], tags: ['comfort', 'date-night', 'impress'],
    desc: 'Pillowy homemade potato dumplings browned in sage butter with Parmesan.',
    story: 'Gnocchi were once made from bread or flour; potatoes from the Americas made them fluffy. Rome eats gnocchi on Thursdays.',
    equip: ['Potato ricer', 'Large pot', 'Frying pan'], ing: [[1, 'kg', 'floury potatoes', 'whole, skin on'], [200, 'g', 'all-purpose flour', 'approx.'], [1, '', 'egg yolk'], [1, 'tsp', 'salt'], [80, 'g', 'butter'], [12, 'leaf', 'sage leaves'], [50, 'g', 'Parmesan', 'grated']],
    steps: [['Potatoes', 'Bake potatoes at {{200C}} 1 hour (drier than boiling). Scoop and rice while hot.', 60], ['Dough', 'Mix in yolk, salt and flour gradually with your hands until just smooth. Minimal kneading.', 0, 'Less flour and less working = lighter gnocchi.'], ['Shape', 'Roll into ropes, cut 2 cm pieces; roll over a fork for ridges.'], ['Cook', 'Boil in salted water; they’re done 30 seconds after floating.', 3], ['Sage butter', 'Fry sage in butter until nutty brown; toss gnocchi in it, top with Parmesan.']],
    tips: ['Freeze shaped gnocchi on a tray.'], mistakes: ['Too much flour: gummy.'], vars: ['Gnocchi alla sorrentina (tomato and mozzarella).'], serve: 'Green salad.' });

  X(IT, { id: 'caprese', name: 'Insalata Caprese', local: 'Insalata caprese', emoji: '🍅', course: 'salad', level: 1, prep: 10, cook: 0, serves: 2,
    taste: { herby: 4, rich: 3, sour: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'quick', 'healthy', 'date-night'],
    desc: 'Ripe tomatoes, creamy mozzarella and basil with olive oil, in the colors of the Italian flag.',
    story: 'From the island of Capri, said to be created in the 1950s. Simplicity means every ingredient must be perfect.',
    equip: ['Sharp knife', 'Platter'], ing: [[3, '', 'ripe tomatoes', 'sliced'], [250, 'g', 'buffalo mozzarella', 'sliced'], [1, 'handful', 'basil leaves'], [3, 'tbsp', 'extra-virgin olive oil'], [0.5, 'tsp', 'flaky salt'], [0.25, 'tsp', 'black pepper']],
    steps: [['Arrange', 'Alternate tomato and mozzarella slices with basil.'], ['Dress', 'Season with salt and pepper and drizzle olive oil just before serving.']],
    tips: ['Never refrigerate the tomatoes.'], mistakes: ['Cold mozzarella: let it come to room temperature.'], vars: ['Add balsamic glaze or peaches.'], serve: 'Crusty bread.' });

  X(IT, { id: 'parmigiana', name: 'Eggplant Parmigiana', local: 'Parmigiana di melanzane', emoji: '🍆', course: 'main', level: 2, prep: 30, cook: 50, serves: 6,
    taste: { rich: 5, savory: 4, umami: 4, herby: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['bake', 'saute'], tags: ['comfort', 'party', 'make-ahead'],
    desc: 'Layers of fried eggplant, basil tomato sauce, mozzarella and Parmesan, baked until bubbling.',
    story: 'Claimed by both Naples and Sicily, parmigiana is a summer Sunday lunch classic across southern Italy.',
    equip: ['Frying pan', 'Baking dish'], ing: [[3, '', 'large eggplants', '1 cm slices, salted'], [6, 'tbsp', 'olive oil'], [700, 'g', 'tomato passata'], [2, 'clove', 'garlic'], [1, 'handful', 'basil'], [0.75, 'tsp', 'salt'], [300, 'g', 'mozzarella', 'sliced'], [80, 'g', 'Parmigiano Reggiano', 'grated']],
    steps: [['Salt', 'Salt eggplant slices 30 minutes, pat dry.', 30], ['Fry', 'Fry slices in oil until golden on both sides (or brush and roast at {{220C}} 20 min).', 15], ['Sauce', 'Simmer passata with garlic, basil and salt 15 minutes.', 15], ['Layer and bake', 'Layer sauce, eggplant, mozzarella and Parmesan, repeat; finish with sauce and Parmesan. Bake at {{190C}} 35 minutes. Rest 20 minutes.', 35]],
    tips: ['Better the next day.'], mistakes: ['Wet eggplant: soggy layers.'], vars: ['Zucchini parmigiana.'], serve: 'Bread and salad.' });

  X(IT, { id: 'bruschetta', name: 'Tomato Bruschetta', local: 'Bruschetta al pomodoro', emoji: '🍞', course: 'starter', level: 1, prep: 10, cook: 5, serves: 4,
    taste: { herby: 4, savory: 3, sour: 2 }, diet: ['vegan'], methods: ['grill', 'no-cook'], tags: ['quick', 'summer', 'party'],
    desc: 'Charred bread rubbed with garlic and topped with juicy tomatoes, basil and olive oil.',
    story: 'From “bruscare”, to roast over coals. Tuscan farmers tested their new olive oil on grilled bread.',
    equip: ['Grill pan'], ing: [[8, 'slice', 'rustic bread or ciabatta'], [1, 'clove', 'garlic', 'halved'], [4, '', 'ripe tomatoes', 'diced'], [1, 'handful', 'basil', 'torn'], [3, 'tbsp', 'extra-virgin olive oil'], [0.5, 'tsp', 'salt']],
    steps: [['Tomatoes', 'Mix tomatoes, basil, oil and salt; rest 10 minutes.'], ['Toast', '[[char|Grill]] the bread until charred; rub with garlic.', 4], ['Top', 'Spoon tomatoes on just before serving.']],
    tips: ['Drain excess tomato juice so the bread stays crisp.'], mistakes: ['Topping too early.'], vars: ['Mushroom or bean bruschetta.'], serve: 'As antipasto.' });

  /* ---------- Switzerland ---------- */
  X(CH, { id: 'rosti', name: 'Swiss Rösti', local: 'Rösti', emoji: '🥔', course: 'side', level: 1, prep: 15, cook: 25, serves: 4,
    taste: { savory: 4, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['brunch', 'comfort', 'budget'],
    desc: 'A giant golden, crisp potato cake from Switzerland, crunchy outside and tender inside.',
    story: 'Once a farmers’ breakfast in Bern, rösti is so Swiss that the cultural divide between German and French Switzerland is called the “Röstigraben” (rösti ditch).',
    equip: ['Heavy non-stick or cast-iron pan', 'Box grater'], ing: [[800, 'g', 'waxy potatoes', 'boiled the day before, cooled'], [40, 'g', 'butter'], [1, 'tbsp', 'oil'], [1, 'tsp', 'salt'], [0.25, 'tsp', 'black pepper']],
    steps: [['Grate', 'Peel and coarsely grate the cold boiled potatoes; season.', 0, 'Day-old boiled potatoes give the best texture.'], ['Fry', 'Heat butter and oil, add potatoes, press lightly into a cake. Cook on medium 10–12 minutes until golden underneath.', 12], ['Flip', 'Slide onto a plate, invert back into the pan, add butter at the edges and cook 10 minutes more.', 10]],
    tips: ['Press gently, don’t pack.'], mistakes: ['High heat: burnt outside, raw inside.'], vars: ['Top with a fried egg or melted raclette.'], serve: 'Mushroom cream sauce or a fried egg.' });

  X(CH, { id: 'cheese-fondue', name: 'Swiss Cheese Fondue', local: 'Fondue moitié-moitié', emoji: '🫕', course: 'main', level: 2, prep: 15, cook: 15, serves: 4,
    taste: { rich: 5, savory: 4, umami: 4 }, diet: ['vegetarian'], methods: ['simmer'], tags: ['winter', 'party', 'date-night', 'festive'],
    desc: 'Molten Gruyère and Vacherin with white wine and garlic, for dipping bread cubes. Made for sharing.',
    story: 'Swiss alpine families melted hard winter cheese with wine to make it last. It was promoted as the national dish in the 1930s.',
    equip: ['Fondue pot (caquelon) and burner', 'Long forks'], ing: [[1, 'clove', 'garlic', 'halved'], [300, 'ml', 'dry white wine'], [1, 'tbsp', 'lemon juice'], [400, 'g', 'Gruyère', 'grated'], [400, 'g', 'Vacherin Fribourgeois or Emmental', 'grated'], [1, 'tbsp', 'cornstarch'], [2, 'tbsp', 'kirsch', 'optional'], [1, 'pinch', 'nutmeg'], [1, '', 'baguette', 'cubed, day-old'], [null, '', 'boiled potatoes, pickles, apples', 'to dip']],
    steps: [['Garlic', 'Rub the pot with garlic.'], ['Wine', 'Heat wine and lemon until simmering.'], ['Melt', 'Toss cheese with cornstarch; add by handfuls, stirring in a figure-eight until melted and creamy.', 8, 'Stir in a figure-eight; it stops the cheese splitting.'], ['Serve', 'Add kirsch and nutmeg; keep warm over the burner and dip.']],
    tips: ['Whoever drops their bread pays a forfeit!'], mistakes: ['Boiling hard: stringy.'], vars: ['Non-alcoholic: apple juice and stock.'], serve: 'White wine or tea.' });

  /* ---------- Middle East & North Africa ---------- */
  X({ country: 'Egypt', flag: '🇪🇬', region: 'Africa' }, { id: 'ful-medames', name: 'Ful Medames', local: 'فول مدمس', emoji: '🫘', course: 'breakfast', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { savory: 4, sour: 3, herby: 3, rich: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['brunch', 'budget', 'healthy'],
    desc: 'Egypt’s ancient breakfast: fava beans stewed and mashed with garlic, cumin, lemon and olive oil.',
    story: 'Eaten in Egypt since the Pharaohs, ful is cooked overnight in huge pots called “idra” and sold from carts every morning.',
    equip: ['Saucepan', 'Masher'], ing: [[2, 'can', 'fava beans (ful)', '800 g total'], [2, 'clove', 'garlic', 'crushed'], [1, 'tsp', 'ground cumin'], [3, 'tbsp', 'lemon juice'], [4, 'tbsp', 'extra-virgin olive oil'], [0.75, 'tsp', 'salt'], [1, '', 'tomato', 'diced'], [1, 'handful', 'parsley'], [0.5, 'tsp', 'chili flakes']],
    steps: [['Simmer', 'Simmer beans with their liquid 10 minutes.', 10], ['Mash', 'Mash half with garlic, cumin, lemon, salt and oil.'], ['Top', 'Top with tomato, parsley, chili and more oil.']],
    tips: ['A spoon of tahini makes it extra creamy.'], mistakes: ['Under-seasoning: lots of lemon and cumin.'], vars: ['Add a boiled egg (not vegan).'], serve: 'Pita, pickles and falafel.' });

  X(ME, { id: 'mujaddara', name: 'Mujaddara', local: 'مجدرة', emoji: '🍚', course: 'main', level: 1, prep: 10, cook: 45, serves: 4,
    taste: { savory: 4, sweet: 2, aromatic: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer', 'saute'], tags: ['budget', 'comfort', 'meal-prep', 'one-pot'],
    desc: 'Lentils and rice crowned with a mountain of deeply caramelized, crispy onions.',
    story: 'A medieval Arab dish called “the poor man’s feast”, eaten across the Levant. The crispy onions make it luxurious.',
    equip: ['Large pan', 'Pot'], ing: [[200, 'g', 'brown or green lentils'], [200, 'g', 'basmati rice', 'rinsed'], [4, '', 'onions', 'thinly sliced'], [100, 'ml', 'olive oil'], [1.5, 'tsp', 'ground cumin'], [0.5, 'tsp', 'ground cinnamon'], [1.5, 'tsp', 'salt'], [700, 'ml', 'water']],
    steps: [['Onions', 'Fry onions in oil, stirring, 25–30 minutes until deep brown and crisp. Drain, keep the oil.', 28, 'Dark (not burnt) onions are the heart of the dish.'], ['Lentils', 'Boil lentils 15 minutes until half done; drain.', 15], ['Rice', 'In 2 tbsp onion oil, toast rice with spices, add lentils, water, salt and half the onions. Cover and cook 15 minutes; rest 10.', 25], ['Serve', 'Top with remaining crispy onions.']],
    tips: ['Serve with yogurt or a tomato-cucumber salad.'], mistakes: ['Pale onions.'], vars: ['Bulgur mujaddara.'], serve: 'Yogurt and salad.' });

  X(ME, { id: 'fattoush', name: 'Fattoush', local: 'فتوش', emoji: '🥗', course: 'salad', level: 1, prep: 15, cook: 8, serves: 4,
    taste: { sour: 4, herby: 4, savory: 3 }, diet: ['vegan'], methods: ['no-cook', 'roast'], tags: ['summer', 'healthy', 'quick'],
    desc: 'Crunchy Levantine bread salad with lettuce, cucumber, tomato, radish, herbs and tangy sumac dressing.',
    story: '“Fatteh” means crumbs: fattoush uses up stale pita, toasted until crisp.',
    equip: ['Oven', 'Large bowl'], ing: [[2, '', 'pita breads', 'torn'], [2, 'tbsp', 'olive oil'], [1, 'head', 'romaine lettuce', 'chopped'], [1, '', 'cucumber', 'chopped'], [3, '', 'tomatoes', 'chopped'], [6, '', 'radishes', 'sliced'], [4, '', 'scallions'], [1, 'handful', 'mint'], [1, 'handful', 'parsley'],
      '#Dressing', [4, 'tbsp', 'olive oil'], [3, 'tbsp', 'lemon juice'], [1, 'tbsp', 'pomegranate molasses'], [2, 'tsp', 'sumac'], [1, 'clove', 'garlic'], [0.5, 'tsp', 'salt']],
    steps: [['Crisp pita', 'Toss pita with oil and bake at {{200C}} 8 minutes until crisp.', 8], ['Dressing', 'Whisk dressing ingredients.'], ['Toss', 'Toss vegetables, herbs and dressing; add pita last.']],
    tips: ['Add pita right before serving.'], mistakes: ['Soggy pita.'], vars: ['Add purslane.'], serve: 'With grilled halloumi.' });

  X(TR, { id: 'imam-bayildi', name: 'Imam Bayildi', local: 'İmam bayıldı', emoji: '🍆', course: 'main', level: 2, prep: 20, cook: 50, serves: 4,
    taste: { savory: 4, sweet: 3, rich: 4, herby: 3 }, diet: ['vegan', 'gluten-free'], methods: ['bake', 'saute'], tags: ['summer', 'make-ahead', 'party'],
    desc: 'Whole eggplants stuffed with onion, tomato and garlic, slow-baked in olive oil until meltingly soft.',
    story: '“The imam fainted”: legend says he swooned at its taste, or at how much olive oil it used. A classic Ottoman olive-oil dish served at room temperature.',
    equip: ['Frying pan', 'Baking dish'], ing: [[4, '', 'medium eggplants'], [120, 'ml', 'olive oil'], [3, '', 'onions', 'sliced'], [5, 'clove', 'garlic', 'sliced'], [3, '', 'tomatoes', 'chopped'], [1, '', 'green pepper', 'chopped'], [1, 'handful', 'parsley'], [1, 'tsp', 'sugar'], [1, 'tsp', 'salt'], [150, 'ml', 'water']],
    steps: [['Fry', 'Peel eggplants in stripes, fry whole in oil until soft and golden. Slit lengthwise.', 10], ['Filling', 'Cook onions slowly in oil 15 minutes, add garlic, pepper, tomatoes, sugar and salt; cook 10 minutes. Add parsley.', 25], ['Bake', 'Stuff eggplants, add water around them and bake at {{180C}} 30 minutes.', 30], ['Serve', 'Serve at room temperature.']],
    tips: ['Better the next day.'], mistakes: ['Skimping on olive oil.'], vars: ['Karnıyarık: the meat-stuffed sibling.'], serve: 'Bread and yogurt.' });

  X(TR, { id: 'menemen', name: 'Menemen', local: 'Menemen', emoji: '🍳', course: 'breakfast', level: 1, prep: 10, cook: 15, serves: 2,
    taste: { savory: 4, sweet: 2, spicy: 2 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['saute'], tags: ['brunch', 'quick', 'budget'],
    desc: 'Turkish scrambled eggs cooked softly into sweet peppers and tomatoes in olive oil.',
    story: 'The heart of a Turkish breakfast, served in the small two-handled pan (sahan) it was cooked in.',
    equip: ['Small frying pan'], ing: [[2, 'tbsp', 'olive oil or butter'], [2, '', 'green peppers (sivri)', 'chopped'], [3, '', 'ripe tomatoes', 'grated'], [4, '', 'eggs'], [0.5, 'tsp', 'salt'], [0.5, 'tsp', 'Aleppo pepper or chili flakes'], [50, 'g', 'feta', 'optional']],
    steps: [['Peppers', 'Soften peppers in oil 5 minutes.'], ['Tomatoes', 'Add grated tomatoes and salt; cook until jammy, 5 minutes.', 5], ['Eggs', 'Crack in eggs and stir gently until just set and creamy.', 2, 'Stop while soft: menemen should be loose.']],
    tips: ['Eat straight from the pan with bread.'], mistakes: ['Overcooking eggs.'], vars: ['With onion (a hot Turkish debate!).'], serve: 'Bread, olives and tea.' });

  X({ country: 'Morocco', flag: '🇲🇦', region: 'Africa' }, { id: 'veg-couscous', name: 'Seven-Vegetable Couscous', local: 'كسكس بسبع خضار', emoji: '🥕', course: 'main', level: 2, prep: 25, cook: 50, serves: 6,
    taste: { aromatic: 5, savory: 4, sweet: 2 }, diet: ['vegan', 'high-protein'], methods: ['simmer', 'steam'], tags: ['festive', 'party', 'healthy', 'one-pot'],
    desc: 'Fluffy couscous under a fragrant stew of seven vegetables and chickpeas with ras el hanout.',
    story: 'Couscous is the Friday family meal of Morocco, Algeria and Tunisia, and UNESCO-listed heritage. Seven is a lucky number.',
    equip: ['Large pot', 'Bowl'], ing: [[3, 'tbsp', 'olive oil'], [1, '', 'onion'], [2, 'tsp', 'ras el hanout'], [1, 'tsp', 'ground turmeric'], [1, 'tsp', 'ground ginger'], [1, 'pinch', 'saffron'], [2, '', 'carrots'], [2, '', 'turnips'], [2, '', 'zucchini'], [300, 'g', 'pumpkin'], [1, '', 'cabbage wedge'], [2, '', 'tomatoes'], [1, 'can', 'chickpeas'], [1.2, 'l', 'vegetable stock'], [1.5, 'tsp', 'salt'], [1, 'handful', 'cilantro and parsley'],
      '#Couscous', [400, 'g', 'couscous'], [400, 'ml', 'boiling stock'], [2, 'tbsp', 'olive oil']],
    steps: [['Stew base', 'Soften onion in oil with spices, add tomatoes, carrots, turnips and cabbage with stock and salt. [[simmer|Simmer]] 20 minutes.', 20], ['More vegetables', 'Add pumpkin, zucchini, chickpeas and herbs; simmer 20 minutes.', 20], ['Couscous', 'Pour boiling stock over couscous with oil, cover 5 minutes, fluff with a fork.', 5], ['Serve', 'Mound couscous, make a well, arrange vegetables and ladle broth over.']],
    tips: ['Serve harissa on the side.'], mistakes: ['Lumpy couscous: fluff with oiled fingers.'], vars: ['Tfaya: sweet caramelized onions and raisins on top.'], serve: 'Buttermilk (lben).' });

  /* ---------- Asia ---------- */
  X({ country: 'Indonesia', flag: '🇮🇩', region: 'Southeast Asia' }, { id: 'gado-gado', name: 'Gado-Gado', local: 'Gado-gado', emoji: '🥜', course: 'salad', level: 1, prep: 25, cook: 15, serves: 4,
    taste: { rich: 4, sweet: 3, savory: 4, spicy: 2, sour: 2 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer', 'no-cook'], tags: ['healthy', 'party', 'street-food'],
    desc: 'Indonesian salad of blanched vegetables, tofu, tempeh and boiled egg with a rich peanut sauce.',
    story: '“Gado-gado” means mix-mix. A Jakarta street favorite, the peanut sauce is ground fresh on a stone cobek.',
    equip: ['Pot', 'Blender'], ing: [[200, 'g', 'firm tofu', 'fried cubes'], [150, 'g', 'tempeh', 'fried slices'], [2, '', 'eggs', 'boiled'], [200, 'g', 'green beans'], [200, 'g', 'cabbage'], [150, 'g', 'bean sprouts'], [2, '', 'potatoes', 'boiled'], [1, '', 'cucumber'],
      '#Peanut sauce', [150, 'g', 'roasted peanuts'], [2, 'clove', 'garlic'], [2, '', 'red chilies'], [2, 'tbsp', 'palm sugar'], [2, 'tbsp', 'kecap manis'], [1, 'tbsp', 'tamarind paste'], [200, 'ml', 'water'], [0.5, 'tsp', 'salt'], [null, '', 'cassava or emping crackers', 'to serve']],
    steps: [['Blanch', '[[blanch|Blanch]] beans, cabbage and sprouts separately.', 5], ['Sauce', 'Blend all sauce ingredients, then simmer 5 minutes until thick.', 5], ['Arrange', 'Arrange vegetables, tofu, tempeh, potato, cucumber and egg; pour sauce over.']],
    tips: ['Kecap manis gives the classic sweet depth.'], mistakes: ['Overcooked vegetables.'], vars: ['Vegan: skip the egg.'], serve: 'Krupuk crackers and rice cakes (lontong).' });

  X({ country: 'Vietnam', flag: '🇻🇳', region: 'Southeast Asia' }, { id: 'tofu-banh-mi', name: 'Lemongrass Tofu Bánh Mì', local: 'Bánh mì đậu hũ', emoji: '🥖', course: 'snack', level: 1, prep: 20, cook: 15, rest: 30, serves: 4,
    taste: { herby: 4, sour: 3, savory: 4, spicy: 2, sweet: 2 }, diet: ['vegetarian', 'high-protein'], methods: ['saute', 'no-cook'], tags: ['street-food', 'quick', 'summer'],
    desc: 'Crisp Vietnamese baguette with lemongrass tofu, pickled carrot and daikon, cucumber, chili and cilantro.',
    story: 'A legacy of French baguettes meeting Vietnamese flavors, bánh mì became Saigon’s favorite street sandwich in the 1950s.',
    equip: ['Pan', 'Bowl'], ing: [[400, 'g', 'firm tofu', 'pressed, sliced'], [2, 'tbsp', 'soy sauce'], [1, 'stalk', 'lemongrass', 'minced'], [1, 'clove', 'garlic'], [1, 'tsp', 'sugar'], [2, 'tbsp', 'oil'],
      '#Quick pickle', [1, '', 'carrot', 'julienned'], [100, 'g', 'daikon', 'julienned'], [80, 'ml', 'rice vinegar'], [1, 'tbsp', 'sugar'], [0.5, 'tsp', 'salt'],
      '#Assemble', [4, '', 'small baguettes'], [4, 'tbsp', 'mayonnaise'], [1, '', 'cucumber', 'strips'], [1, 'handful', 'cilantro'], [1, '', 'red chili', 'sliced']],
    steps: [['Pickle', 'Toss carrot and daikon with vinegar, sugar and salt; rest 30 minutes.', 30], ['Tofu', '[[marinate|Marinate]] tofu in soy, lemongrass, garlic and sugar 15 minutes, then fry until golden.', 10], ['Assemble', 'Warm baguettes until crisp, spread mayo, fill with tofu, pickles, cucumber, cilantro and chili.']],
    tips: ['Light, airy baguettes are best.'], mistakes: ['Soft bread: toast it.'], vars: ['Vegan mayo; pork bánh mì classic.'], serve: 'Iced coffee.' });

  X({ country: 'Japan', flag: '🇯🇵', region: 'East Asia' }, { id: 'agedashi-tofu', name: 'Agedashi Tofu', local: '揚げ出し豆腐', emoji: '🍢', course: 'starter', level: 2, prep: 15, cook: 10, serves: 2,
    taste: { umami: 5, savory: 4 }, diet: ['vegan'], methods: ['deep-fry', 'simmer'], tags: ['date-night', 'quick'],
    desc: 'Silky tofu with a delicate crisp starch crust, in a warm dashi-soy broth with grated daikon.',
    story: 'An izakaya favorite for over 200 years, it appears in a 1782 Japanese tofu cookbook, “Tofu Hyakuchin”.',
    equip: ['Small pot for frying', 'Saucepan'], ing: [[300, 'g', 'firm silken tofu', 'drained, cubed'], [4, 'tbsp', 'potato starch or cornstarch'], [500, 'ml', 'oil', 'for frying'],
      '#Broth', [200, 'ml', 'kombu-shiitake dashi'], [2, 'tbsp', 'soy sauce'], [2, 'tbsp', 'mirin'], [60, 'g', 'daikon', 'grated'], [1, '', 'scallion', 'sliced'], [1, 'tsp', 'ginger', 'grated']],
    steps: [['Dry tofu', 'Drain tofu on towels 15 minutes.'], ['Coat and fry', 'Dust with starch and [[deep-fry]] at {{175C}} 3 minutes until crisp.', 3], ['Broth', 'Heat dashi, soy and mirin.'], ['Serve', 'Place tofu in bowls, pour broth around, top with daikon, ginger and scallion.']],
    tips: ['Coat right before frying.'], mistakes: ['Wet tofu splatters.'], vars: ['Add bonito flakes (not vegan).'], serve: 'Rice and miso soup.' });

  X({ country: 'Japan', flag: '🇯🇵', region: 'East Asia' }, { id: 'japanese-curry', name: 'Japanese Vegetable Curry', local: '野菜カレー', emoji: '🍛', course: 'main', level: 1, prep: 15, cook: 35, serves: 4,
    taste: { savory: 4, sweet: 3, rich: 4, aromatic: 3 }, diet: ['vegetarian'], methods: ['simmer'], tags: ['comfort', 'kids', 'meal-prep', 'one-pot'],
    desc: 'Thick, mild and slightly sweet curry with potatoes, carrots and onions over rice.',
    story: 'British sailors brought curry powder to Japan in the 1800s; the navy served it every Friday. Kare raisu is now Japan’s most popular home dish.',
    equip: ['Pot'], ing: [[2, 'tbsp', 'oil'], [2, '', 'onions', 'sliced'], [2, '', 'carrots', 'chunks'], [3, '', 'potatoes', 'chunks'], [200, 'g', 'mushrooms or pumpkin'], [800, 'ml', 'vegetable stock'], [1, '', 'apple', 'grated'],
      '#Roux', [40, 'g', 'butter'], [4, 'tbsp', 'all-purpose flour'], [2, 'tbsp', 'curry powder'], [1, 'tbsp', 'soy sauce'], [1, 'tbsp', 'ketchup'], [1, 'tsp', 'honey'], [0.5, 'tsp', 'salt']],
    steps: [['Onions', '[[caramelize|Cook onions]] until golden, 10 minutes.', 10], ['Simmer', 'Add vegetables, stock and apple; simmer 15 minutes.', 15], ['Roux', 'Make a brown [[roux]] with butter and flour, add curry powder.', 3], ['Thicken', 'Whisk roux into the pot with soy, ketchup, honey and salt; simmer 5 minutes until thick.', 5]],
    tips: ['Tastes better the next day.'], mistakes: ['Lumps: whisk roux in gradually.'], vars: ['Katsu curry with fried tofu katsu.'], serve: 'Japanese rice and fukujinzuke pickles.' });

  /* ---------- Americas & Europe ---------- */
  X(MX, { id: 'bean-burrito', name: 'Bean & Rice Burrito', local: 'Burrito de frijoles', emoji: '🌯', course: 'main', level: 1, prep: 15, cook: 20, serves: 4,
    taste: { savory: 4, spicy: 2, rich: 3 }, diet: ['vegetarian', 'high-protein'], methods: ['saute'], tags: ['weeknight', 'kids', 'meal-prep', 'budget'],
    desc: 'Big flour tortillas wrapped around cumin black beans, cilantro-lime rice, cheese, salsa and guacamole.',
    story: 'Burritos (“little donkeys”) come from northern Mexico; the giant stuffed version was born in San Francisco’s Mission District.',
    equip: ['Pan', 'Pot'], ing: [[2, 'can', 'black beans', 'drained'], [1, 'tsp', 'ground cumin'], [1, 'tsp', 'chili powder'], [2, 'clove', 'garlic'], [1, 'tbsp', 'oil'], [300, 'g', 'cooked rice'], [1, '', 'lime'], [1, 'handful', 'cilantro'], [4, '', 'large flour tortillas'], [150, 'g', 'cheddar', 'grated'], [150, 'g', 'salsa'], [1, '', 'avocado']],
    steps: [['Beans', 'Fry garlic and spices, add beans and mash half.', 6], ['Rice', 'Toss rice with lime juice and cilantro.'], ['Roll', 'Warm tortillas, fill with rice, beans, cheese, salsa and avocado; fold sides and roll tightly.'], ['Toast', 'Toast seam-side down in a dry pan until golden.', 3]],
    tips: ['Freeze for grab-and-go lunches.'], mistakes: ['Cold tortillas tear.'], vars: ['Add grilled peppers or paneer.'], serve: 'Salsa and sour cream.' });

  X(MX, { id: 'elote', name: 'Elote (Mexican Street Corn)', local: 'Elote', emoji: '🌽', course: 'snack', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { sweet: 3, rich: 4, sour: 2, spicy: 2, smoky: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['grill'], tags: ['street-food', 'summer', 'party', 'kids'],
    desc: 'Charred corn on the cob slathered in lime mayo-crema, cotija cheese and chili powder.',
    story: 'Sold by “eloteros” from carts across Mexico; esquites is the version served in cups.',
    equip: ['Grill or griddle'], ing: [[4, '', 'corn cobs', 'husked'], [3, 'tbsp', 'mayonnaise'], [3, 'tbsp', 'Mexican crema or sour cream'], [1, '', 'lime'], [60, 'g', 'cotija or feta', 'crumbled'], [1, 'tsp', 'chili powder'], [1, 'handful', 'cilantro']],
    steps: [['Char', '[[char]] corn on a hot grill 10–12 minutes, turning, until blackened in spots.', 12], ['Coat', 'Mix mayo, crema and lime zest; brush over the hot corn.'], ['Finish', 'Roll in cheese, dust with chili, add cilantro and a lime squeeze.']],
    tips: ['Eat immediately.'], mistakes: ['Undercharred corn: no smoky flavor.'], vars: ['Esquites: cut kernels into a cup.'], serve: 'As a snack.' });

  X(MX, { id: 'huevos-rancheros', name: 'Huevos Rancheros', local: 'Huevos rancheros', emoji: '🍳', course: 'breakfast', level: 1, prep: 10, cook: 20, serves: 2,
    taste: { savory: 4, spicy: 3, smoky: 2 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['saute', 'simmer'], tags: ['brunch', 'weeknight'],
    desc: 'Fried eggs on crisp corn tortillas with warm ranchero tomato-chile sauce, beans and avocado.',
    story: '“Ranch-style eggs” was the mid-morning meal on Mexican farms.',
    equip: ['Frying pan', 'Blender'], ing: [[4, '', 'corn tortillas'], [4, '', 'eggs'], [3, 'tbsp', 'oil'], [200, 'g', 'refried beans'], [1, '', 'avocado'], [50, 'g', 'queso fresco or feta'],
      '#Ranchero sauce', [3, '', 'tomatoes'], [0.5, '', 'onion'], [1, 'clove', 'garlic'], [1, '', 'jalapeño'], [0.5, 'tsp', 'salt']],
    steps: [['Sauce', 'Blend sauce ingredients; simmer in a little oil 8 minutes.', 8], ['Tortillas', 'Fry tortillas briefly until lightly crisp.', 2], ['Eggs', 'Fry eggs sunny-side up.', 3], ['Assemble', 'Spread beans on tortillas, add eggs, spoon sauce over, top with avocado and cheese.']],
    tips: ['Keep yolks runny.'], mistakes: ['Soggy tortillas.'], vars: ['Divorciados: red and green sauces.'], serve: 'Coffee.' });

  X({ country: 'Peru', flag: '🇵🇪', region: 'Latin America' }, { id: 'papa-huancaina', name: 'Papa a la Huancaína', local: 'Papa a la huancaína', emoji: '🥔', course: 'starter', level: 1, prep: 15, cook: 20, serves: 4,
    taste: { rich: 5, spicy: 2, savory: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer', 'no-cook'], tags: ['party', 'summer'],
    desc: 'Boiled yellow potatoes under a silky, golden ají amarillo and cheese sauce, with eggs and olives.',
    story: 'From Huancayo in Peru’s Andes, the birthplace of the potato, which has over 3,000 varieties there.',
    equip: ['Pot', 'Blender'], ing: [[6, '', 'yellow potatoes'], [3, '', 'ají amarillo chiles or 3 tbsp paste'], [150, 'g', 'queso fresco or feta'], [150, 'ml', 'evaporated milk'], [4, '', 'saltine crackers'], [3, 'tbsp', 'oil'], [0.5, 'tsp', 'salt'], [2, '', 'eggs', 'boiled'], [8, '', 'black olives'], [4, 'leaf', 'lettuce']],
    steps: [['Potatoes', '[[boil|Boil]] potatoes until tender; cool and slice.', 20], ['Sauce', 'Blend ají, cheese, milk, crackers, oil and salt until silky and pourable.'], ['Plate', 'Lay potatoes on lettuce, coat with sauce, top with egg and olives.']],
    tips: ['The sauce doubles as a dip.'], mistakes: ['Thin sauce: add a cracker.'], vars: ['Ocopa (peanut-herb sauce).'], serve: 'Chilled.' });

  X({ country: 'Ukraine', flag: '🇺🇦', region: 'Europe' }, { id: 'varenyky', name: 'Potato Varenyky', local: 'Вареники з картоплею', emoji: '🥟', course: 'main', level: 2, prep: 50, cook: 20, serves: 4,
    taste: { savory: 4, rich: 4 }, diet: ['vegetarian'], methods: ['simmer', 'saute'], tags: ['comfort', 'festive', 'make-ahead'],
    desc: 'Half-moon dumplings filled with potato and onion, topped with caramelized onions and sour cream.',
    story: 'Ukraine’s beloved dumplings are part of the 12-dish Christmas Eve supper (Sviat Vechir).',
    equip: ['Rolling pin', 'Round cutter', 'Large pot'], ing: ['#Dough', [300, 'g', 'all-purpose flour'], [150, 'ml', 'warm water'], [1, 'tbsp', 'oil'], [0.5, 'tsp', 'salt'],
      '#Filling', [4, '', 'potatoes', 'boiled, mashed'], [2, '', 'onions', 'sliced'], [40, 'g', 'butter'], [0.75, 'tsp', 'salt'], [0.5, 'tsp', 'black pepper'], [150, 'g', 'sour cream'], [1, 'handful', 'dill']],
    steps: [['Dough', '[[knead]] a soft dough; rest 30 minutes.', 30], ['Onions', '[[caramelize]] onions in butter; mix half into the mashed potatoes with salt and pepper.', 20], ['Fill', 'Roll thin, cut circles, fill, fold and pinch shut.'], ['Boil', '[[boil|Boil]] until they float plus 2 minutes.', 4], ['Serve', 'Toss with remaining onions; serve with sour cream and dill.']],
    tips: ['Freeze on trays.'], mistakes: ['Thick dough: chewy.'], vars: ['Cherry varenyky (sweet).'], serve: 'Sour cream.' });
})();
