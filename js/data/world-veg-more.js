/* More world classics (veg-first): Italy, Spain, France, Turkey & the Middle East, the Americas, Asia, Africa, Europe.
   Original recipes written for Dish Dictionary. */
'use strict';
(function () {
  const X = (base, d) => DD.add(Object.assign({}, base, d));
  const IT = { country: 'Italy', flag: '🇮🇹', region: 'Europe', styles: ['continental'] };
  const ES = { country: 'Spain', flag: '🇪🇸', region: 'Europe' };
  const FR = { country: 'France', flag: '🇫🇷', region: 'Europe', styles: ['continental'] };

  /* ======================= ITALY ======================= */
  X(Object.assign({}, IT, { area: 'Sicily' }), { id: 'pasta-alla-norma', name: 'Pasta alla Norma', local: 'Pasta alla Norma', emoji: '🍆', course: 'main', level: 1, prep: 15, cook: 30, serves: 4,
    taste: { savory: 4, sweet: 2, rich: 3, herby: 3 }, diet: ['vegetarian'], methods: ['saute', 'simmer'], tags: ['weeknight', 'summer'],
    desc: 'Pasta with fried eggplant in a garlicky tomato sauce, finished with basil and grated salted ricotta.',
    story: 'Named in Catania after Bellini’s opera “Norma”: a writer declared the dish was “a real Norma”, meaning a masterpiece.',
    equip: ['Frying pan', 'Pot'],
    ing: [[2, '', 'eggplant', 'cubed'], [5, 'tbsp', 'olive oil'], [3, 'clove', 'garlic', 'sliced'], [400, 'g', 'canned chopped tomatoes'], [0.5, 'tsp', 'chili flakes'], [1, 'tsp', 'salt'], [350, 'g', 'rigatoni or penne'], [1, 'handful', 'basil'], [60, 'g', 'ricotta salata or pecorino', 'grated']],
    steps: [['Fry the eggplant', 'Salt the eggplant 15 minutes, pat dry and [[shallow-fry]] in 4 tbsp oil until deep golden.', 12], ['Sauce', 'Cook the garlic in the remaining oil, add the tomatoes, chili and salt and [[simmer]] 15 minutes.', 15], ['Toss', 'Cook the pasta [[al-dente]], toss with the sauce, most of the eggplant and basil. Top with the rest of the eggplant and cheese.', 10]],
    tips: ['Fry the eggplant well: soft and golden, not oily.'], mistakes: ['Crowding the pan: soggy eggplant.'], vars: ['Bake the eggplant to use less oil.'], serve: 'A glass of chilled water and bread.' });

  X(Object.assign({}, IT, { area: 'Lombardy & Piedmont' }), { id: 'risotto-ai-funghi', name: 'Risotto ai Funghi', local: 'Risotto ai funghi', emoji: '🍄', course: 'main', level: 2, prep: 15, cook: 30, serves: 4,
    taste: { umami: 5, rich: 4, savory: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'date-night', 'winter'],
    desc: 'Creamy risotto with sautéed mushrooms and dried porcini, finished with butter and parmesan.',
    story: 'In autumn, northern Italian families forage porcini and turn them into this earthy risotto.',
    equip: ['Wide heavy pan', 'Small pot for stock'],
    ing: [[15, 'g', 'dried porcini mushrooms', 'soaked in 250 ml hot water'], [300, 'g', 'mixed mushrooms', 'sliced'], [3, 'tbsp', 'olive oil'], [1, '', 'onion', 'finely chopped'], [2, 'clove', 'garlic'], [300, 'g', 'carnaroli or arborio rice'], [120, 'ml', 'dry white wine'], [1, 'l', 'vegetable stock', 'hot'], [40, 'g', 'butter'], [50, 'g', 'parmesan', 'grated'], [2, 'tbsp', 'parsley'], [0.5, 'tsp', 'salt']],
    steps: [['Mushrooms', '[[sear|Sear]] the fresh mushrooms in half the oil until golden; add the chopped porcini.', 6], ['Base', '[[sweat|Sweat]] the onion and garlic, add the rice and [[toast]] 2 minutes, then the wine.', 5], ['Stir', 'Add the hot stock and porcini water a ladle at a time, stirring, for 18 minutes until creamy and al dente.', 18], ['Mantecatura', 'Off the heat, beat in the butter, parmesan and mushrooms ([[mount-butter]]); rest 2 minutes.', 2]],
    tips: ['Strain the porcini water: it can be gritty.'], mistakes: ['Adding cold stock: the rice stops cooking.'], vars: ['Use a vegetarian hard cheese for strict vegetarians.'], serve: 'Green salad.' });

  X(Object.assign({}, IT, { area: 'Tuscany' }), { id: 'ribollita', name: 'Ribollita', local: 'Ribollita', emoji: '🥣', course: 'soup', level: 1, prep: 20, cook: 50, serves: 6,
    taste: { savory: 4, herby: 3, rich: 3 }, diet: ['vegan', 'high-protein'], methods: ['simmer'], tags: ['comfort', 'winter', 'budget', 'meal-prep'],
    desc: 'Thick Tuscan soup of cannellini beans, cavolo nero and vegetables, thickened with stale bread.',
    story: '“Ribollita” means reboiled: a peasant soup made one day and reheated the next, when it is even better.',
    equip: ['Large pot'],
    ing: [[4, 'tbsp', 'extra-virgin olive oil'], [1, '', 'onion', 'chopped'], [2, '', 'carrots', 'chopped'], [2, 'stalk', 'celery', 'chopped'], [3, 'clove', 'garlic'], [400, 'g', 'canned chopped tomatoes'], [2, 'can', 'cannellini beans', 'drained'], [200, 'g', 'cavolo nero (Tuscan kale)', 'shredded'], [1.2, 'l', 'vegetable stock'], [150, 'g', 'stale bread', 'torn'], [1, 'tsp', 'salt'], [2, 'sprig', 'thyme']],
    steps: [['Soffritto', '[[sweat|Sweat]] the onion, carrot, celery and garlic in the oil 10 minutes.', 10], ['Simmer', 'Add tomatoes, beans (mash half), kale, thyme, stock and salt and [[simmer]] 30 minutes.', 30], ['Bread', 'Stir in the bread and cook 10 minutes until thick. Serve with a drizzle of oil.', 10]],
    tips: ['Even better the next day.'], mistakes: ['Fresh bread turns gluey.'], vars: ['Use Savoy cabbage if there’s no cavolo nero.'], serve: 'A swirl of olive oil.' });

  X(Object.assign({}, IT, { area: 'Liguria' }), { id: 'focaccia', name: 'Focaccia Genovese', local: 'Fügassa', emoji: '🍞', course: 'bread', level: 2, prep: 20, cook: 22, rest: 240, serves: 8,
    taste: { savory: 4, rich: 3 }, diet: ['vegan'], methods: ['bake'], tags: ['party', 'make-ahead'],
    desc: 'Soft, airy Ligurian flatbread with a crisp golden bottom, dimpled and soaked with olive oil and salty brine.',
    story: 'In Genoa, focaccia is breakfast, dipped in milky coffee. The salt-water brine poured over before baking is the secret.',
    equip: ['Large bowl', 'Baking tray 30 × 40 cm'],
    ing: [[500, 'g', 'bread flour'], [380, 'ml', 'water', 'lukewarm'], [5, 'g', 'instant yeast'], [10, 'g', 'salt'], [6, 'tbsp', 'extra-virgin olive oil'], '#Brine', [60, 'ml', 'water'], [1, 'tsp', 'salt'], [1, 'tsp', 'flaky salt'], [1, 'sprig', 'rosemary']],
    steps: [['Dough', 'Mix the flour, water and yeast, rest 15 minutes, add salt and 1 tbsp oil and [[knead]] until smooth.'], ['Rise', '[[proof|Proof]] 2 hours, then stretch onto an oiled tray and rise 1 hour more.', 180], ['Dimple', 'Press deep dimples with oiled fingers, pour over oil and the brine, sprinkle flaky salt and rosemary.'], ['Bake', 'Bake at {{230C}} for 20–22 minutes until golden.', 22]],
    tips: ['Don’t skip the brine: it makes the soft pools.'], mistakes: ['Too little oil: dry focaccia.'], vars: ['Top with cherry tomatoes and olives.'], serve: 'Warm, with soup or on its own.' });

  X(Object.assign({}, IT, { area: 'Rome' }), { id: 'gnocchi-alla-romana', name: 'Gnocchi alla Romana', local: 'Gnocchi alla romana', emoji: '🟡', course: 'main', level: 2, prep: 20, cook: 40, rest: 60, serves: 4,
    taste: { rich: 5, savory: 4 }, diet: ['vegetarian'], methods: ['simmer', 'bake'], tags: ['comfort', 'make-ahead'],
    desc: 'Semolina cooked in milk, cut into discs and baked with butter and parmesan until golden.',
    story: 'Roman gnocchi have no potato at all: they are made of semolina and baked, traditionally on Thursdays.',
    equip: ['Pot', 'Baking dish', 'Round cutter'],
    ing: [[1, 'l', 'milk'], [250, 'g', 'semolina'], [1, 'pinch', 'nutmeg'], [1, 'tsp', 'salt'], [80, 'g', 'butter'], [2, '', 'egg yolks'], [100, 'g', 'parmesan', 'grated']],
    steps: [['Cook', 'Bring the milk with salt and nutmeg to a simmer, add the semolina in a stream while whisking and cook 10 minutes until very thick.', 12], ['Enrich and set', 'Off the heat beat in half the butter, the yolks and half the cheese. Spread 1.5 cm thick on a wet tray and cool 1 hour.', 60], ['Bake', 'Cut into discs, overlap in a buttered dish, top with butter and cheese and bake at {{220C}} for 25 minutes.', 25]],
    tips: ['Wet the knife or cutter between cuts.'], mistakes: ['Thin layer: flat gnocchi.'], vars: ['Add sage to the butter.'], serve: 'Green salad.' });

  X(Object.assign({}, IT, { area: 'Sicily' }), { id: 'caponata', name: 'Caponata', local: 'Capunata', emoji: '🍆', course: 'starter', level: 1, prep: 20, cook: 35, serves: 6,
    taste: { sweet: 3, sour: 4, savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['saute', 'simmer'], tags: ['make-ahead', 'summer', 'party'],
    desc: 'Sicily’s sweet-and-sour eggplant stew with celery, olives, capers and tomato.',
    story: 'Agrodolce (sweet-sour) shows Sicily’s Arab heritage. Caponata is better a day later, at room temperature.',
    equip: ['Large pan'],
    ing: [[2, '', 'eggplant', 'cubed'], [6, 'tbsp', 'olive oil'], [1, '', 'onion', 'chopped'], [2, 'stalk', 'celery', 'sliced'], [200, 'g', 'tomato passata'], [60, 'g', 'green olives'], [2, 'tbsp', 'capers'], [3, 'tbsp', 'red wine vinegar'], [1.5, 'tbsp', 'sugar'], [2, 'tbsp', 'pine nuts', 'toasted'], [1, 'handful', 'basil'], [1, 'tsp', 'salt']],
    steps: [['Fry', 'Fry the eggplant in batches in 4 tbsp oil until golden.', 12], ['Base', 'Soften the onion and celery in the rest of the oil, add passata, olives and capers and [[simmer]] 10 minutes.', 12], ['Agrodolce', 'Add the eggplant, vinegar, sugar and salt and cook 8 minutes. Cool; add pine nuts and basil.', 8]],
    tips: ['Rest overnight for the best flavour.'], mistakes: ['Eating it hot: flavours aren’t settled.'], vars: ['Add raisins and cocoa (Palermo style).'], serve: 'On bread or with pasta.' });

  /* ======================= SPAIN ======================= */
  X(Object.assign({}, ES, { area: 'Galicia' }), { id: 'pimientos-de-padron', name: 'Pimientos de Padrón', local: 'Pementos de Padrón', emoji: '🫑', course: 'starter', level: 1, prep: 2, cook: 6, serves: 4,
    taste: { savory: 4, smoky: 3, spicy: 1 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['quick', 'party'],
    desc: 'Small green peppers blistered in hot olive oil and showered with sea salt. “Some are hot, some are not.”',
    story: 'From the town of Padrón in Galicia. Most are mild, but about one in ten is fiery, which is the fun of it.',
    equip: ['Heavy frying pan'],
    ing: [[250, 'g', 'padrón peppers'], [3, 'tbsp', 'olive oil'], [1, 'tsp', 'flaky salt']],
    steps: [['Blister', 'Fry the peppers in very hot oil, tossing, until blistered and slightly collapsed, 4–5 minutes ([[char]]).', 5], ['Salt', 'Tip onto a plate and scatter flaky salt.']],
    tips: ['Use a very hot pan.'], mistakes: ['Salting before frying: they steam.'], vars: ['Shishito peppers work the same.'], serve: 'As tapas with bread.' });

  X(Object.assign({}, ES, { area: 'Catalonia' }), { id: 'pan-con-tomate', name: 'Pan con Tomate', local: 'Pa amb tomàquet', emoji: '🍅', course: 'starter', level: 1, prep: 5, cook: 4, serves: 4,
    taste: { sour: 2, savory: 3, rich: 2 }, diet: ['vegan'], methods: ['grill', 'no-cook'], tags: ['quick', 'summer', 'brunch'],
    desc: 'Toasted bread rubbed with garlic and ripe tomato, drizzled with olive oil and salt.',
    story: 'Catalans eat pa amb tomàquet with almost every meal. It was a way to soften stale bread.',
    equip: ['Grill pan or toaster', 'Grater'],
    ing: [[4, 'slice', 'rustic bread or ciabatta'], [2, '', 'ripe tomatoes', 'halved'], [1, 'clove', 'garlic', 'halved'], [3, 'tbsp', 'extra-virgin olive oil'], [0.5, 'tsp', 'flaky salt']],
    steps: [['Toast', '[[char|Char]] the bread on a hot grill pan until crisp.', 4], ['Rub', 'Rub with the cut garlic, then the cut tomato until the bread is pink and juicy.'], ['Finish', 'Drizzle with oil and sprinkle salt.']],
    tips: ['Use the ripest tomatoes you can find.'], mistakes: ['Soft bread: it goes soggy.'], vars: ['Grate the tomato and spoon it on.'], serve: 'With tortilla or olives.' });

  X(Object.assign({}, ES, { area: 'La Mancha' }), { id: 'pisto', name: 'Pisto Manchego', local: 'Pisto manchego', emoji: '🥘', course: 'main', level: 1, prep: 15, cook: 40, serves: 4,
    taste: { sweet: 3, savory: 4, herby: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['weeknight', 'summer', 'budget'],
    desc: 'Slow-cooked peppers, zucchini, onion and tomato, served with a fried egg on top.',
    story: 'Spain’s ratatouille, from the land of Don Quixote. It is cooked slowly until the vegetables melt together.',
    equip: ['Wide pan'],
    ing: [[4, 'tbsp', 'olive oil'], [1, '', 'onion', 'diced'], [1, '', 'green bell pepper', 'diced'], [1, '', 'red bell pepper', 'diced'], [2, '', 'zucchini', 'diced'], [400, 'g', 'crushed tomatoes'], [1, 'tsp', 'sugar'], [1, 'tsp', 'salt'], [4, '', 'eggs', 'optional, fried']],
    steps: [['Soften', '[[sweat|Sweat]] the onion and peppers 15 minutes on low.', 15], ['Zucchini', 'Add the zucchini and cook 8 minutes.', 8], ['Tomato', 'Add tomatoes, sugar and salt and [[simmer]] 15 minutes until jammy. Top with fried eggs.', 15]],
    tips: ['Cook slowly: it should be soft and sweet.'], mistakes: ['High heat: it browns instead of melting.'], vars: ['Leave out the egg for a vegan pisto.'], serve: 'Crusty bread.' });

  X(ES, { id: 'flan', name: 'Flan (Caramel Custard)', local: 'Flan', emoji: '🍮', course: 'dessert', level: 2, prep: 15, cook: 50, rest: 240, serves: 6,
    taste: { sweet: 4, rich: 4, bitter: 1 }, diet: ['vegetarian', 'gluten-free'], methods: ['bake'], tags: ['make-ahead', 'party'],
    desc: 'Silky baked egg custard under a layer of amber caramel.',
    story: 'Flan travelled from Spain to every Spanish-speaking country; Mexico, Cuba and the Philippines all have their own.',
    equip: ['Ramekins or a round tin', 'Roasting tin for a water bath'],
    ing: [[150, 'g', 'sugar', 'for the caramel'], [4, '', 'eggs'], [2, '', 'egg yolks'], [500, 'ml', 'whole milk'], [90, 'g', 'sugar'], [1, 'tsp', 'vanilla extract']],
    steps: [['Caramel', 'Melt the 150 g sugar to a deep amber and pour into the mould.', 6], ['Custard', 'Warm the milk; [[whisk]] the eggs, yolks and sugar, add the milk and vanilla and strain.'], ['Bake', 'Pour over the caramel and bake in a water bath at {{160C}} for 45 minutes until just set. Chill 4 hours, then turn out.', 45]],
    tips: ['A water bath keeps it silky.'], mistakes: ['Too hot oven: bubbles and holes.'], vars: ['Mexican flan with condensed milk and cream cheese.'], serve: 'Chilled.' });

  /* ======================= FRANCE ======================= */
  X(FR, { id: 'tarte-tatin', name: 'Tarte Tatin', local: 'Tarte Tatin', emoji: '🍎', course: 'dessert', level: 2, prep: 20, cook: 45, serves: 8,
    taste: { sweet: 5, rich: 4, sour: 1 }, diet: ['vegetarian'], methods: ['bake'], tags: ['impress', 'date-night'],
    desc: 'Apples caramelized in butter and sugar, baked under pastry and turned out upside down.',
    story: 'The Tatin sisters ran a hotel in the Loire Valley in the 1880s; legend says the tart was a happy accident.',
    equip: ['Ovenproof frying pan (24 cm)'],
    ing: [[6, '', 'apples', 'peeled, quartered'], [120, 'g', 'sugar'], [70, 'g', 'butter'], [1, 'tsp', 'lemon juice'], [250, 'g', 'puff pastry']],
    steps: [['Caramel', 'Melt the sugar in the pan to a light amber, add the butter, then pack in the apples rounded side down.', 8], ['Cook the apples', 'Cook 15 minutes until the apples are soft and the caramel deep amber ([[caramelize]]).', 15], ['Bake', 'Lay the pastry over, tuck in the edges and bake at {{200C}} for 25 minutes. Rest 5 minutes and invert carefully.', 25]],
    tips: ['Firm apples (like Granny Smith) hold their shape.'], mistakes: ['Inverting too late: the caramel sets in the pan.'], vars: ['Pear or banana Tatin.'], serve: 'Warm with crème fraîche or ice cream.' });

  X(FR, { id: 'gratin-dauphinois', name: 'Gratin Dauphinois', local: 'Gratin dauphinois', emoji: '🥔', course: 'side', level: 1, prep: 15, cook: 75, serves: 6,
    taste: { rich: 5, savory: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['bake'], tags: ['comfort', 'party', 'winter'],
    desc: 'Thinly sliced potatoes slowly baked in garlic-scented cream until meltingly soft and golden on top.',
    story: 'From the Dauphiné in the French Alps. The true version uses no cheese; the potato starch thickens the cream.',
    equip: ['Mandoline or sharp knife', 'Baking dish'],
    ing: [[1, 'kg', 'waxy potatoes', 'thinly sliced'], [400, 'ml', 'heavy cream'], [200, 'ml', 'milk'], [2, 'clove', 'garlic'], [1, 'pinch', 'nutmeg'], [1, 'tsp', 'salt'], [20, 'g', 'butter']],
    steps: [['Infuse', 'Rub the dish with a cut garlic clove and butter. Warm the cream and milk with crushed garlic, nutmeg and salt.', 5], ['Layer', 'Layer the potatoes (don’t rinse them) and pour over the cream.'], ['Bake', 'Bake at {{160C}} for 70 minutes until a knife slides through and the top is golden.', 70]],
    tips: ['Don’t rinse the slices: the starch thickens the cream.'], mistakes: ['High heat: the cream splits.'], vars: ['Gratin savoyard with stock and cheese.'], serve: 'With salad or roasted vegetables.' });

  /* ======================= TURKEY & MIDDLE EAST ======================= */
  X({ country: 'Syria', flag: '🇸🇾', region: 'Middle East' }, { id: 'muhammara', name: 'Muhammara', local: 'محمرة', emoji: '🌶️', course: 'sauce', level: 1, prep: 15, cook: 0, serves: 6,
    taste: { sweet: 3, sour: 3, smoky: 3, rich: 4, spicy: 2 }, diet: ['vegan'], methods: ['no-cook'], tags: ['party', 'make-ahead'],
    desc: 'A rich dip of roasted red peppers, walnuts, breadcrumbs and pomegranate molasses.',
    story: 'From Aleppo, famous for its peppers. It is now part of mezze tables across Syria, Lebanon and Turkey.',
    equip: ['Food processor'],
    ing: [[3, '', 'roasted red peppers'], [100, 'g', 'walnuts', 'toasted'], [40, 'g', 'breadcrumbs'], [2, 'tbsp', 'pomegranate molasses'], [1, 'tsp', 'aleppo pepper or chili flakes'], [1, 'tsp', 'ground cumin'], [1, 'clove', 'garlic'], [3, 'tbsp', 'olive oil'], [1, 'tbsp', 'lemon juice'], [0.5, 'tsp', 'salt']],
    steps: [['Blend', 'Pulse everything to a thick, slightly coarse paste.'], ['Serve', 'Spread on a plate, drizzle with oil and a little more molasses.']],
    tips: ['Toast the walnuts for depth.'], mistakes: ['Over-blending: it turns oily.'], vars: ['Gluten-free with ground almonds instead of breadcrumbs.'], serve: 'Pita and raw vegetables.' });

  X({ country: 'Turkey', flag: '🇹🇷', region: 'Middle East' }, { id: 'borek', name: 'Spinach & Feta Börek', local: 'Ispanaklı börek', emoji: '🥧', course: 'snack', level: 2, prep: 25, cook: 40, serves: 8,
    taste: { savory: 4, rich: 4, herby: 2 }, diet: ['vegetarian'], methods: ['bake'], tags: ['party', 'brunch', 'make-ahead'],
    desc: 'Layers of filo brushed with a milk-egg wash, filled with spinach and feta, baked crisp.',
    story: 'Börek is Turkey’s everyday pastry, from breakfast bakeries to holiday tables, with endless fillings.',
    equip: ['Baking dish', 'Pastry brush'],
    ing: [[400, 'g', 'filo pastry'], [300, 'g', 'spinach', 'chopped, wilted, squeezed'], [200, 'g', 'feta', 'crumbled'], [1, '', 'onion', 'finely chopped'], [2, '', 'eggs'], [150, 'ml', 'milk'], [80, 'ml', 'olive oil'], [1, 'tbsp', 'nigella seeds'], [1, 'tbsp', 'sesame seeds']],
    steps: [['Filling', 'Mix the spinach, feta and onion.'], ['Layer', 'Whisk the eggs, milk and oil. Layer filo sheets, brushing each with the wash; spread filling halfway and on top, then more filo.'], ['Bake', 'Brush the top, sprinkle seeds and bake at {{190C}} for 40 minutes until deep golden.', 40]],
    tips: ['Squeeze the spinach very dry.'], mistakes: ['Dry filo sheets: they crack.'], vars: ['Potato or cheese-only börek.'], serve: 'Turkish tea.' });

  X({ country: 'Iran', flag: '🇮🇷', region: 'Middle East' }, { id: 'kuku-sabzi', name: 'Kuku Sabzi', local: 'کوکو سبزی', emoji: '🌿', course: 'main', level: 1, prep: 20, cook: 25, serves: 4,
    taste: { herby: 5, savory: 4, sour: 2 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['saute', 'bake'], tags: ['festive', 'brunch', 'healthy'],
    desc: 'A vivid green Persian herb frittata packed with parsley, cilantro, dill and chives, studded with walnuts and barberries.',
    story: 'Eaten at Nowruz, the Persian New Year, the green herbs symbolise rebirth and spring.',
    equip: ['Non-stick pan with lid or baking dish'],
    ing: [[6, '', 'eggs'], [2, 'bunch', 'parsley', 'finely chopped'], [2, 'bunch', 'cilantro', 'finely chopped'], [1, 'bunch', 'dill', 'chopped'], [4, '', 'scallions', 'chopped'], [3, 'tbsp', 'walnuts', 'chopped'], [2, 'tbsp', 'dried barberries or cranberries'], [1, 'tsp', 'ground turmeric'], [1, 'tsp', 'baking powder'], [1, 'tsp', 'salt'], [3, 'tbsp', 'olive oil']],
    steps: [['Mix', '[[whisk|Whisk]] the eggs with turmeric, baking powder and salt, then fold in all the herbs, walnuts and barberries. It should be more green than yellow.'], ['Cook', 'Pour into a hot oiled pan, cover and cook on low 15 minutes; flip (or bake at {{180C}}) and cook 8 minutes more.', 23]],
    tips: ['Dry the herbs well before chopping.'], mistakes: ['Too much egg: it should be mostly herbs.'], vars: ['Bake in a muffin tin for picnic portions.'], serve: 'Flatbread, yogurt and pickles.' });

  /* ======================= AMERICAS ======================= */
  X({ country: 'El Salvador', flag: '🇸🇻', region: 'Latin America' }, { id: 'pupusas', name: 'Pupusas with Curtido', local: 'Pupusas', emoji: '🫓', course: 'main', level: 2, prep: 30, cook: 20, rest: 60, serves: 4,
    taste: { savory: 4, sour: 3, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute', 'no-cook'], tags: ['weeknight', 'kids', 'street-food'],
    desc: 'Thick corn cakes stuffed with beans and cheese, griddled and served with tangy pickled cabbage slaw.',
    story: 'El Salvador’s national dish, with its own national day. Pupuserías serve them hot off the comal with curtido and tomato salsa.',
    equip: ['Bowl', 'Griddle or heavy pan', 'Jar'],
    ing: ['#Curtido', [300, 'g', 'cabbage', 'finely shredded'], [1, '', 'carrot', 'grated'], [0.5, '', 'onion', 'sliced'], [120, 'ml', 'apple cider vinegar'], [1, 'tsp', 'dried oregano'], [0.5, 'tsp', 'chili flakes'], [0.5, 'tsp', 'salt'],
      '#Pupusas', [300, 'g', 'masa harina'], [400, 'ml', 'warm water'], [0.5, 'tsp', 'salt'], [200, 'g', 'refried beans'], [150, 'g', 'mozzarella', 'grated'], [2, 'tbsp', 'oil']],
    steps: [['Curtido', 'Pour boiling water over the cabbage, drain, then mix with the rest of the curtido ingredients; rest 1 hour.', 60], ['Dough', 'Mix masa, water and salt into a soft dough like play-dough.'], ['Fill', 'Flatten a ball in your palm, add beans and cheese, close and pat into a 1 cm thick disc.'], ['Griddle', 'Cook on an oiled griddle 3–4 minutes per side until spotted and the cheese melts.', 12]],
    tips: ['Wet hands stop the dough sticking.'], mistakes: ['Dry dough: cracks when filled.'], vars: ['Loroco flower or squash filling.'], serve: 'Curtido and thin tomato salsa.' });

  X({ country: 'Mexico', flag: '🇲🇽', region: 'Latin America' }, { id: 'chilaquiles', name: 'Chilaquiles Verdes', local: 'Chilaquiles verdes', emoji: '🌮', course: 'breakfast', level: 1, prep: 10, cook: 15, serves: 3,
    taste: { sour: 3, spicy: 3, savory: 4, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['brunch', 'quick', 'comfort'],
    desc: 'Crisp tortilla pieces simmered briefly in green salsa, topped with crema, cheese, onion and a fried egg.',
    story: 'A Mexican breakfast born from leftover tortillas, and a famous hangover cure.',
    equip: ['Large frying pan'],
    ing: [[200, 'g', 'tortilla chips', 'thick, unsalted'], [400, 'ml', 'salsa verde'], [100, 'ml', 'water'], [60, 'g', 'queso fresco or feta', 'crumbled'], [3, 'tbsp', 'mexican crema or sour cream'], [0.5, '', 'white onion', 'thinly sliced'], [1, 'handful', 'cilantro'], [3, '', 'eggs', 'optional, fried']],
    steps: [['Sauce', 'Heat the salsa with the water until bubbling.', 3], ['Toss', 'Add the chips and toss for 1 minute so they soften at the edges but stay crunchy.', 1, 'Serve immediately: they go soggy fast.'], ['Top', 'Top with crema, cheese, onion, cilantro and fried eggs.']],
    tips: ['Thick chips hold up better.'], mistakes: ['Simmering too long: mush.'], vars: ['Chilaquiles rojos with red salsa.'], serve: 'Refried beans on the side.' });

  X({ country: 'Cuba', flag: '🇨🇺', region: 'Caribbean' }, { id: 'moros-y-cristianos', name: 'Moros y Cristianos', local: 'Moros y cristianos', emoji: '🍚', course: 'main', level: 1, prep: 10, cook: 35, serves: 4,
    taste: { savory: 4, smoky: 2, aromatic: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['one-pot', 'budget', 'comfort'],
    desc: 'Rice cooked together with black beans, peppers, garlic, cumin and oregano. Cuba’s everyday staple.',
    story: 'The name (“Moors and Christians”) refers to the black beans and white rice cooked in one pot.',
    equip: ['Heavy pot with lid'],
    ing: [[3, 'tbsp', 'olive oil'], [1, '', 'onion', 'chopped'], [1, '', 'green bell pepper', 'chopped'], [4, 'clove', 'garlic'], [1, 'tsp', 'ground cumin'], [1, 'tsp', 'dried oregano'], [1, '', 'bay leaf'], [250, 'g', 'long-grain rice', 'rinsed'], [1, 'can', 'black beans', 'with their liquid'], [400, 'ml', 'water'], [1, 'tsp', 'salt'], [1, 'tbsp', 'vinegar']],
    steps: [['Sofrito', '[[saute|Sauté]] the onion, pepper and garlic 6 minutes, add cumin, oregano and bay leaf.', 7], ['Cook', 'Add the rice, beans with their liquid, water, salt and vinegar; boil, cover and cook on low 20 minutes. Rest 5 minutes.', 25]],
    tips: ['The bean liquid colours the rice.'], mistakes: ['Lifting the lid while cooking.'], vars: ['Gallo pinto (Costa Rica) is fried leftover rice and beans.'], serve: 'Fried plantains and avocado.' });

  X({ country: 'Brazil', flag: '🇧🇷', region: 'Latin America' }, { id: 'brigadeiros', name: 'Brigadeiros', local: 'Brigadeiros', emoji: '🍫', course: 'dessert', level: 1, prep: 20, cook: 12, rest: 60, serves: 20,
    taste: { sweet: 5, rich: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['kids', 'party', 'festive'],
    desc: 'Fudgy chocolate truffles of condensed milk, cocoa and butter, rolled in chocolate sprinkles.',
    story: 'Named after Brigadier Eduardo Gomes in the 1940s. No Brazilian birthday party is complete without them.',
    equip: ['Non-stick pan', 'Spatula'],
    ing: [[395, 'g', 'sweetened condensed milk'], [2, 'tbsp', 'cocoa powder'], [1, 'tbsp', 'butter'], [60, 'g', 'chocolate sprinkles']],
    steps: [['Cook', 'Cook the condensed milk, cocoa and butter on low, stirring constantly, until it pulls away from the pan as one mass, 10–12 minutes.', 12], ['Chill', 'Cool on a buttered plate, then chill 1 hour.', 60], ['Roll', 'Roll into small balls with buttered hands and coat in sprinkles.']],
    tips: ['Test: drag the spatula; if the base shows for 2 seconds, it’s ready.'], mistakes: ['Under-cooked: they won’t hold shape.'], vars: ['Beijinho with coconut instead of cocoa.'], serve: 'In little paper cases.' });

  X({ country: 'Peru', flag: '🇵🇪', region: 'Latin America' }, { id: 'causa-limena', name: 'Causa Limeña (Vegetarian)', local: 'Causa limeña', emoji: '🥔', course: 'starter', level: 2, prep: 30, cook: 25, rest: 60, serves: 6,
    taste: { sour: 3, spicy: 2, rich: 3, savory: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['party', 'summer', 'impress'],
    desc: 'Layers of lime- and ají-seasoned yellow potato mash with avocado, tomato and creamy filling, served cold.',
    story: 'A Lima classic usually filled with tuna or chicken. This vegetarian version layers avocado, egg and tomato.',
    equip: ['Potato ricer or masher', 'Ring mould or loaf tin'],
    ing: [[1, 'kg', 'yellow potatoes', 'boiled'], [2, 'tbsp', 'ají amarillo paste'], [3, 'tbsp', 'lime juice'], [4, 'tbsp', 'oil'], [1, 'tsp', 'salt'], [2, '', 'ripe avocados', 'sliced'], [2, '', 'tomatoes', 'sliced'], [3, '', 'eggs', 'hard-boiled, sliced'], [4, 'tbsp', 'mayonnaise'], [6, '', 'black olives']],
    steps: [['Mash', 'Mash the potatoes smooth with ají paste, lime, oil and salt.'], ['Layer', 'Layer potato, avocado and tomato, mayonnaise and egg, then potato again in a mould.'], ['Chill', 'Chill 1 hour, turn out and decorate with olives and egg.', 60]],
    tips: ['Mash while warm, layer when cool.'], mistakes: ['Watery potatoes: use floury yellow ones.'], vars: ['Eggless: more avocado and corn.'], serve: 'Cold, as a starter.' });

  /* ======================= ASIA ======================= */
  X({ country: 'China', flag: '🇨🇳', region: 'East Asia', area: 'Sichuan' }, { id: 'yu-xiang-qiezi', name: 'Fish-Fragrant Eggplant', local: '鱼香茄子', emoji: '🍆', course: 'main', level: 2, prep: 15, cook: 15, serves: 3,
    taste: { spicy: 3, sour: 3, sweet: 3, umami: 4, aromatic: 4 }, diet: ['vegan'], methods: ['saute', 'stir-fry'], tags: ['weeknight', 'comfort'],
    desc: 'Silky eggplant in a glossy sauce of chili bean paste, garlic, ginger, vinegar and sugar. No fish at all.',
    story: '“Yu xiang” (fish-fragrant) is a Sichuan flavour originally used for fish, made with pickled chilies, garlic and ginger.',
    equip: ['Wok'],
    ing: [[2, '', 'eggplant', 'batons'], [4, 'tbsp', 'neutral oil'], [1.5, 'tbsp', 'doubanjiang (sichuan chili bean paste)'], [3, 'clove', 'garlic', 'minced'], [1, 'tbsp', 'ginger', 'minced'], [3, '', 'scallions', 'sliced'], [1, 'tbsp', 'soy sauce'], [1.5, 'tbsp', 'chinkiang black vinegar'], [1, 'tbsp', 'sugar'], [1, 'tsp', 'cornstarch'], [120, 'ml', 'water']],
    steps: [['Fry the eggplant', 'Salt the eggplant 15 minutes, squeeze dry, then fry in the oil until soft and golden; set aside.', 8], ['Sauce', 'Fry the bean paste until the oil turns red, then garlic, ginger and scallion whites ([[stir-fry]]).', 2], ['Glaze', 'Add the soy, vinegar, sugar and water, then the eggplant; thicken with cornstarch slurry and toss in the green scallions.', 3]],
    tips: ['Salting the eggplant stops it soaking up oil.'], mistakes: ['Burning the bean paste.'], vars: ['Add minced pork for the classic home version (not vegetarian).'], serve: 'Steamed rice.' });

  X({ country: 'Thailand', flag: '🇹🇭', region: 'Southeast Asia' }, { id: 'thai-red-curry-veg', name: 'Thai Red Curry with Vegetables & Tofu', local: 'แกงเผ็ด', emoji: '🍛', course: 'main', level: 1, prep: 15, cook: 20, serves: 4,
    taste: { spicy: 4, sweet: 2, aromatic: 5, rich: 4 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['weeknight', 'comfort'],
    desc: 'Coconut milk curry with red curry paste, tofu, bamboo shoots, peppers and Thai basil.',
    story: 'Gaeng phet (spicy curry) gets its heat and colour from dried red chilies in the paste.',
    equip: ['Wok or pot'],
    ing: [[400, 'ml', 'coconut milk'], [2, 'tbsp', 'vegan red curry paste'], [300, 'g', 'firm tofu', 'cubed'], [150, 'g', 'bamboo shoots'], [1, '', 'red bell pepper', 'sliced'], [100, 'g', 'green beans'], [1, 'tbsp', 'palm sugar'], [1.5, 'tbsp', 'tamari or soy sauce'], [4, '', 'makrut lime leaves'], [1, 'handful', 'thai basil leaves']],
    steps: [['Crack the cream', 'Boil 4 tbsp of the coconut cream until the oil separates, then fry the curry paste 2 minutes ([[bloom]]).', 3], ['Simmer', 'Add the rest of the coconut milk, tofu, vegetables, sugar, soy and lime leaves; [[simmer]] 10 minutes.', 10], ['Basil', 'Stir in the Thai basil.']],
    tips: ['Most curry pastes contain shrimp; buy a vegan one.'], mistakes: ['Boiling hard: the coconut milk splits too much.'], vars: ['Add pumpkin or pineapple.'], serve: 'Jasmine rice.' });

  X({ country: 'Thailand', flag: '🇹🇭', region: 'Southeast Asia' }, { id: 'massaman-curry', name: 'Massaman Curry with Potato & Tofu', local: 'แกงมัสมั่น', emoji: '🥘', course: 'main', level: 1, prep: 15, cook: 35, serves: 4,
    taste: { rich: 5, sweet: 3, aromatic: 5, spicy: 2, sour: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'winter', 'party'],
    desc: 'A mild, rich curry with cinnamon, cardamom and peanuts, potatoes and tofu in coconut milk.',
    story: 'Massaman shows Persian and Indian influence in Thai cooking: dry spices like cinnamon and cardamom, plus peanuts and tamarind.',
    equip: ['Heavy pot'],
    ing: [[400, 'ml', 'coconut milk'], [3, 'tbsp', 'massaman curry paste'], [3, '', 'potatoes', 'chunks'], [1, '', 'onion', 'wedges'], [300, 'g', 'firm tofu', 'fried cubes'], [50, 'g', 'roasted peanuts'], [1, 'tbsp', 'tamarind paste'], [1.5, 'tbsp', 'palm sugar'], [1.5, 'tbsp', 'tamari or soy sauce'], [1, 'piece', 'cinnamon stick'], [3, '', 'green cardamom pods'], [200, 'ml', 'water']],
    steps: [['Paste', 'Fry the paste in a few spoons of coconut cream until fragrant ([[bloom]]).', 3], ['Simmer', 'Add the rest of the coconut milk, water, potatoes, onion and spices; [[simmer]] 20 minutes.', 20], ['Finish', 'Add tofu, peanuts, tamarind, sugar and soy and simmer 5 minutes.', 5]],
    tips: ['Check the paste for shrimp if vegan.'], mistakes: ['Undercooked potatoes.'], vars: ['Sweet potato massaman.'], serve: 'Jasmine rice or roti.' });

  X({ country: 'Indonesia', flag: '🇮🇩', region: 'Southeast Asia' }, { id: 'tahu-goreng', name: 'Tahu Goreng with Peanut Sauce', local: 'Tahu goreng', emoji: '🥜', course: 'starter', level: 1, prep: 15, cook: 15, serves: 4,
    taste: { sweet: 3, savory: 4, spicy: 3, rich: 4 }, diet: ['vegan', 'high-protein'], methods: ['saute'], tags: ['quick', 'street-food'],
    desc: 'Crisp fried tofu with crunchy bean sprouts and cucumber, drenched in a sweet-spicy peanut sauce.',
    story: 'A Javanese street food sold from carts, built on fried tofu, kecap manis and peanuts.',
    equip: ['Frying pan', 'Bowl'],
    ing: [[400, 'g', 'firm tofu', 'pressed, cubed'], [4, 'tbsp', 'neutral oil'], [100, 'g', 'bean sprouts', 'blanched'], [1, '', 'cucumber', 'julienned'], '#Peanut sauce', [4, 'tbsp', 'smooth peanut butter'], [2, 'tbsp', 'kecap manis'], [1, 'tbsp', 'lime juice'], [1, 'clove', 'garlic'], [1, 'tsp', 'sambal or chili sauce'], [5, 'tbsp', 'hot water'], [2, 'tbsp', 'crushed peanuts']],
    steps: [['Fry', '[[shallow-fry|Shallow-fry]] the tofu until golden and crisp on all sides.', 10], ['Sauce', '[[whisk|Whisk]] the peanut sauce ingredients until smooth and pourable.'], ['Serve', 'Top the tofu with sprouts and cucumber, pour over the sauce and scatter peanuts.']],
    tips: ['Press the tofu for crispness.'], mistakes: ['Thick sauce: thin with water.'], vars: ['Gado-gado with vegetables and egg.'], serve: 'With rice or as a snack.' });

  X({ country: 'South Korea', flag: '🇰🇷', region: 'East Asia' }, { id: 'sundubu-jjigae', name: 'Veggie Sundubu-Jjigae', local: '순두부찌개', emoji: '🍲', course: 'main', level: 1, prep: 10, cook: 15, serves: 2,
    taste: { spicy: 4, umami: 4, savory: 4 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['comfort', 'quick', 'winter'],
    desc: 'A bubbling, spicy stew of silken tofu, mushrooms and zucchini, finished with a raw egg cracked on top.',
    story: 'Served sizzling in a stone pot at Korean restaurants. Seafood or pork is common; this version uses a kombu-mushroom broth.',
    equip: ['Small pot or stone bowl'],
    ing: [[1, 'tbsp', 'neutral oil'], [2, 'clove', 'garlic', 'minced'], [1.5, 'tbsp', 'gochugaru (korean chili flakes)'], [100, 'g', 'mushrooms', 'sliced'], [0.5, '', 'zucchini', 'sliced'], [400, 'ml', 'kombu-shiitake dashi'], [300, 'g', 'silken tofu'], [1, 'tbsp', 'tamari or soy sauce'], [2, '', 'eggs'], [2, '', 'scallions']],
    steps: [['Chili oil', 'Fry the garlic and gochugaru in the oil on low for 1 minute until red ([[bloom]]).', 1], ['Simmer', 'Add mushrooms, zucchini and dashi and [[simmer]] 5 minutes. Spoon in the tofu in big pieces and add tamari.', 8], ['Egg', 'Crack the eggs on top, add scallions and serve bubbling.', 1]],
    tips: ['Don’t stir after adding tofu: keep it in big soft curds.'], mistakes: ['Burnt chili flakes: bitter.'], vars: ['Add kimchi (vegan) for depth.'], serve: 'Rice and banchan.' });

  X({ country: 'Japan', flag: '🇯🇵', region: 'East Asia' }, { id: 'tamagoyaki', name: 'Tamagoyaki', local: '卵焼き', emoji: '🍳', course: 'breakfast', level: 2, prep: 5, cook: 10, serves: 2,
    taste: { sweet: 3, savory: 3, umami: 3 }, diet: ['vegetarian', 'high-protein'], methods: ['saute'], tags: ['brunch', 'kids'],
    desc: 'A sweet, layered Japanese rolled omelette, cooked in thin sheets and rolled up in a rectangular pan.',
    story: 'Found in bento boxes and on sushi. Tokyo style is sweet; Osaka’s dashimaki is savoury with dashi.',
    equip: ['Tamagoyaki pan or small non-stick pan', 'Chopsticks'],
    ing: [[4, '', 'eggs'], [1, 'tbsp', 'sugar'], [1, 'tsp', 'soy sauce'], [1, 'tbsp', 'mirin'], [2, 'tbsp', 'kombu dashi or water'], [1, 'tbsp', 'neutral oil']],
    steps: [['Mix', 'Beat the eggs gently with the sugar, soy, mirin and dashi without making foam.'], ['First layer', 'Oil the hot pan, pour a thin layer; when half-set, roll it to one end.', 1], ['Layer and roll', 'Oil the pan, pour another thin layer, lift the roll so egg flows under, and roll back. Repeat until the egg is used.', 6], ['Shape', 'Wrap in a bamboo mat or foil for 2 minutes, then slice.']],
    tips: ['Medium-low heat: no browning.'], mistakes: ['Thick layers: it won’t roll neatly.'], vars: ['Add chopped scallion or nori.'], serve: 'Rice and miso soup.' });

  /* ======================= AFRICA ======================= */
  X({ country: 'Ethiopia', flag: '🇪🇹', region: 'Africa' }, { id: 'shiro-wat', name: 'Shiro Wat', local: 'ሽሮ ወጥ', emoji: '🥣', course: 'main', level: 1, prep: 10, cook: 30, serves: 4,
    taste: { spicy: 4, savory: 4, aromatic: 4 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['comfort', 'budget', 'healthy'],
    desc: 'A smooth, spicy stew of chickpea flour cooked with onions, garlic and berbere. Ethiopia’s fasting-day favourite.',
    story: 'Ethiopian Orthodox Christians fast from animal products for more than 180 days a year, and shiro is the most loved fasting dish.',
    equip: ['Heavy pot', 'Whisk'],
    ing: [[2, '', 'red onions', 'finely chopped'], [4, 'tbsp', 'oil'], [3, 'clove', 'garlic', 'minced'], [1, 'tbsp', 'ginger', 'grated'], [2, 'tbsp', 'berbere spice'], [1, '', 'tomato', 'grated'], [100, 'g', 'chickpea flour'], [800, 'ml', 'water'], [1, 'tsp', 'salt']],
    steps: [['Onions', 'Cook the onions dry on low for 8 minutes, then add oil, garlic, ginger and berbere for 2 minutes.', 10], ['Flour', '[[whisk|Whisk]] the chickpea flour into the water, add with the tomato and salt.'], ['Simmer', '[[simmer|Simmer]] 15 minutes, whisking, until smooth and thick as a sauce.', 15]],
    tips: ['Cooking the onions dry first is the Ethiopian way.'], mistakes: ['Not whisking: lumps.'], vars: ['Add spinach (shiro with gomen).'], serve: 'Injera.' });

  X({ country: 'Morocco', flag: '🇲🇦', region: 'Africa' }, { id: 'harira', name: 'Vegetarian Harira', local: 'الحريرة', emoji: '🥣', course: 'soup', level: 1, prep: 15, cook: 45, serves: 6,
    taste: { sour: 3, aromatic: 4, savory: 4, herby: 3 }, diet: ['vegan', 'high-protein'], methods: ['simmer'], tags: ['comfort', 'winter', 'festive', 'meal-prep'],
    desc: 'Morocco’s Ramadan soup of lentils, chickpeas, tomato and herbs, thickened with a little flour and finished with lemon.',
    story: 'Families break the fast during Ramadan with harira, dates and sweet chebakia. Lamb is common; this version is all vegetable.',
    equip: ['Large pot'],
    ing: [[3, 'tbsp', 'olive oil'], [1, '', 'onion', 'chopped'], [2, 'stalk', 'celery', 'chopped'], [1, 'tsp', 'ground ginger'], [1, 'tsp', 'ground turmeric'], [1, 'tsp', 'ground cinnamon'], [1, 'tsp', 'black pepper'], [400, 'g', 'crushed tomatoes'], [120, 'g', 'brown lentils'], [1, 'can', 'chickpeas', 'drained'], [1.5, 'l', 'water'], [1, 'handful', 'cilantro and parsley', 'chopped'], [50, 'g', 'vermicelli'], [2, 'tbsp', 'flour', 'mixed with 120 ml water'], [1.25, 'tsp', 'salt'], [1, '', 'lemon', 'juice']],
    steps: [['Base', 'Soften the onion and celery in the oil, add the spices for 1 minute ([[bloom]]).', 8], ['Simmer', 'Add tomatoes, lentils, chickpeas, water, half the herbs and salt; [[simmer]] 30 minutes.', 30], ['Thicken', 'Add the vermicelli, then the flour slurry while stirring; cook 5 minutes until silky. Add the rest of the herbs and lemon.', 6]],
    tips: ['The flour slurry (tadouira) gives the velvet texture.'], mistakes: ['Adding the slurry too fast: lumps.'], vars: ['Gluten-free: thicken with rice flour, use rice instead of vermicelli.'], serve: 'Dates and lemon wedges.' });

  /* ======================= EUROPE ======================= */
  X({ country: 'Poland', flag: '🇵🇱', region: 'Europe' }, { id: 'pierogi-ruskie', name: 'Pierogi Ruskie', local: 'Pierogi ruskie', emoji: '🥟', course: 'main', level: 2, prep: 45, cook: 25, serves: 4,
    taste: { savory: 4, rich: 4 }, diet: ['vegetarian'], methods: ['simmer', 'saute'], tags: ['comfort', 'festive', 'make-ahead'],
    desc: 'Soft dumplings filled with potato, farmer’s cheese and fried onion, boiled and then pan-fried in butter.',
    story: 'Poland’s favourite pierogi. “Ruskie” refers to Red Ruthenia (old western Ukraine), not Russia.',
    equip: ['Rolling pin', 'Round cutter', 'Large pot', 'Frying pan'],
    ing: ['#Dough', [300, 'g', 'all-purpose flour'], [150, 'ml', 'warm water'], [2, 'tbsp', 'oil'], [0.5, 'tsp', 'salt'], '#Filling', [500, 'g', 'floury potatoes', 'boiled, mashed'], [200, 'g', 'farmer’s cheese (twaróg) or ricotta'], [2, '', 'onions', 'finely chopped'], [40, 'g', 'butter'], [0.5, 'tsp', 'black pepper'], [0.75, 'tsp', 'salt'], [4, 'tbsp', 'sour cream', 'to serve']],
    steps: [['Dough', '[[knead|Knead]] the dough ingredients until smooth; [[rest]] 30 minutes.', 30], ['Filling', 'Fry the onions in butter until golden; mix half into the potato and cheese with salt and pepper.', 10], ['Fill', 'Roll thin, cut 8 cm circles, fill, fold and pinch tightly.'], ['Cook', 'Boil until they float plus 2 minutes, then fry in butter with the rest of the onions.', 12]],
    tips: ['Seal well or they burst.'], mistakes: ['Thick dough: chewy pierogi.'], vars: ['Sauerkraut and mushroom pierogi for Christmas Eve.'], serve: 'Sour cream and fried onion.' });

  X({ country: 'Russia', flag: '🇷🇺', region: 'Europe' }, { id: 'blini', name: 'Blini', local: 'Блины', emoji: '🥞', course: 'breakfast', level: 1, prep: 10, cook: 25, rest: 15, serves: 4,
    taste: { savory: 2, sweet: 2, rich: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['brunch', 'festive'],
    desc: 'Thin, lacy Russian pancakes, buttered and stacked, eaten with sour cream, jam or mushrooms.',
    story: 'Blini are the centre of Maslenitsa, the week-long festival saying goodbye to winter; their round shape stands for the sun.',
    equip: ['Bowl', 'Crepe pan'],
    ing: [[500, 'ml', 'milk'], [2, '', 'eggs'], [200, 'g', 'all-purpose flour'], [1, 'tbsp', 'sugar'], [0.5, 'tsp', 'salt'], [2, 'tbsp', 'oil'], [100, 'ml', 'boiling water'], [30, 'g', 'butter', 'melted']],
    steps: [['Batter', '[[whisk|Whisk]] the milk, eggs, sugar, salt and flour smooth, then whisk in the oil and boiling water. [[rest]] 15 minutes.', 15], ['Cook', 'Pour a thin layer into a hot greased pan, cook until lacy and golden, flip briefly.', 20, 'Boiling water in the batter makes the lacy holes.'], ['Butter', 'Brush each with butter as you stack them.']],
    tips: ['Keep the first one for the cook.'], mistakes: ['Thick batter: heavy pancakes.'], vars: ['Buckwheat yeast blini for caviar.'], serve: 'Sour cream, jam or honey.' });

  X({ country: 'Ireland', flag: '🇮🇪', region: 'Europe' }, { id: 'colcannon', name: 'Colcannon', local: 'Cál ceannann', emoji: '🥔', course: 'side', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { rich: 4, savory: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'budget', 'winter'],
    desc: 'Buttery mashed potatoes with kale or cabbage and scallions, served with a pool of melted butter.',
    story: 'Traditional on Halloween in Ireland, when charms were hidden in the colcannon to tell fortunes.',
    equip: ['Pot', 'Masher'],
    ing: [[1, 'kg', 'floury potatoes', 'peeled'], [200, 'g', 'kale or cabbage', 'shredded'], [4, '', 'scallions', 'sliced'], [200, 'ml', 'milk'], [60, 'g', 'butter'], [1, 'tsp', 'salt'], [0.25, 'tsp', 'black pepper']],
    steps: [['Boil', '[[boil|Boil]] the potatoes until tender; drain and steam dry.', 20], ['Greens', 'Cook the kale in half the butter until soft; warm the scallions in the milk.', 5], ['Mash', 'Mash the potatoes with the milk, scallions, greens, salt and pepper. Serve with the rest of the butter melting in a hollow on top.']],
    tips: ['Warm milk keeps the mash fluffy.'], mistakes: ['Blending: gluey mash.'], vars: ['Champ: scallions only, no cabbage.'], serve: 'With vegetarian sausages or on its own.' });

  X({ country: 'Austria', flag: '🇦🇹', region: 'Europe', styles: ['continental'] }, { id: 'apfelstrudel', name: 'Apfelstrudel', local: 'Apfelstrudel', emoji: '🍎', course: 'dessert', level: 2, prep: 30, cook: 40, serves: 8,
    taste: { sweet: 4, sour: 2, aromatic: 3, rich: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['festive', 'winter', 'impress'],
    desc: 'Paper-thin pastry rolled around cinnamon apples, raisins and buttered breadcrumbs, baked golden.',
    story: 'Vienna’s coffee houses made apple strudel famous; the dough was traditionally stretched so thin you could read a newspaper through it.',
    equip: ['Baking tray', 'Clean tea towel', 'Pastry brush'],
    ing: [[8, 'sheet', 'filo pastry'], [80, 'g', 'butter', 'melted'], [5, '', 'apples', 'peeled, thinly sliced'], [60, 'g', 'sugar'], [1, 'tsp', 'ground cinnamon'], [40, 'g', 'raisins'], [40, 'g', 'walnuts', 'chopped'], [50, 'g', 'breadcrumbs', 'toasted in butter'], [1, 'tbsp', 'lemon juice'], [1, 'tbsp', 'powdered sugar']],
    steps: [['Filling', 'Toss the apples with sugar, cinnamon, raisins, walnuts and lemon.'], ['Layer', 'Brush filo sheets with butter and stack on a towel. Scatter the breadcrumbs along one side and pile the apples on top.'], ['Roll and bake', 'Roll up using the towel, place seam-down on a tray, brush with butter and bake at {{190C}} for 40 minutes.', 40], ['Finish', 'Dust with powdered sugar.']],
    tips: ['Breadcrumbs absorb the apple juices so the pastry stays crisp.'], mistakes: ['Wet filling: soggy strudel.'], vars: ['Topfenstrudel with sweet curd cheese.'], serve: 'Warm with vanilla sauce or ice cream.' });

  X({ country: 'Hungary', flag: '🇭🇺', region: 'Europe' }, { id: 'lecso', name: 'Lecsó', local: 'Lecsó', emoji: '🫑', course: 'main', level: 1, prep: 10, cook: 30, serves: 4,
    taste: { sweet: 3, savory: 4, smoky: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['summer', 'weeknight', 'budget'],
    desc: 'Hungarian stew of yellow peppers, onions and tomatoes with sweet paprika, often with eggs stirred in.',
    story: 'Made all over Hungary in late summer when peppers are cheapest; every family has its own version.',
    equip: ['Wide pan'],
    ing: [[3, 'tbsp', 'sunflower oil'], [2, '', 'onions', 'sliced'], [6, '', 'bell peppers', 'yellow or light green, sliced'], [4, '', 'tomatoes', 'chopped'], [1.5, 'tsp', 'sweet paprika'], [1, 'tsp', 'salt'], [3, '', 'eggs', 'optional']],
    steps: [['Onions', 'Soften the onions in the oil 8 minutes, add paprika off the heat.', 8], ['Peppers', 'Add the peppers and cook 10 minutes, then tomatoes and salt for 10 minutes.', 20], ['Eggs', 'Stir in beaten eggs until just set (optional).', 2]],
    tips: ['Add paprika off the heat; it burns easily.'], mistakes: ['Watery lecsó: cook uncovered.'], vars: ['Serve over rice for a full meal.'], serve: 'Fresh bread.' });

  X({ country: 'United Kingdom', flag: '🇬🇧', region: 'Europe' }, { id: 'eton-mess', name: 'Eton Mess', local: 'Eton mess', emoji: '🍓', course: 'dessert', level: 1, prep: 15, cook: 0, serves: 4,
    taste: { sweet: 4, sour: 2, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'quick', 'party'],
    desc: 'Crushed meringue folded with whipped cream and strawberries.',
    story: 'Served at Eton College’s cricket match against Harrow since the 1800s.',
    equip: ['Bowl', 'Whisk'],
    ing: [[400, 'g', 'strawberries', 'hulled'], [1, 'tbsp', 'sugar'], [300, 'ml', 'heavy cream'], [4, '', 'meringue nests', 'store-bought'], [1, 'tsp', 'vanilla extract']],
    steps: [['Berries', 'Mash a third of the strawberries with sugar; quarter the rest.'], ['Whip', '[[whisk|Whip]] the cream with vanilla to soft peaks.'], ['Fold', 'Gently [[fold]] in the crushed meringue and strawberries; ripple in the mashed berries.']],
    tips: ['Assemble just before serving so the meringue stays crunchy.'], mistakes: ['Over-mixing: pink soup.'], vars: ['Raspberries or mango.'], serve: 'In glasses, straight away.' });
})();
