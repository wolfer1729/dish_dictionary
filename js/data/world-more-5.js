/* World batch 5 (veg-first): Himalaya & Central Asia, Middle East, Europe, the Americas, East & Southeast Asia, Africa.
   Original recipes written for Dish Dictionary. */
'use strict';
(function () {
  const C = (country, flag, region, extra) => Object.assign({ country, flag, region }, extra || {});
  const X = (base, d) => DD.add(Object.assign({}, base, d));
  const TR = C('Turkey', '🇹🇷', 'Middle East'), IT = C('Italy', '🇮🇹', 'Europe', { styles: ['continental'] }), FR = C('France', '🇫🇷', 'Europe', { styles: ['continental'] });
  const ES = C('Spain', '🇪🇸', 'Europe'), UK = C('United Kingdom', '🇬🇧', 'Europe', { styles: ['continental'] }), MX = C('Mexico', '🇲🇽', 'Latin America');
  const CN = C('China', '🇨🇳', 'East Asia'), TH = C('Thailand', '🇹🇭', 'Southeast Asia');

  /* ======================= HIMALAYA & CENTRAL ASIA ======================= */
  X(C('Bhutan', '🇧🇹', 'South Asia'), { id: 'ema-datshi', name: 'Ema Datshi', local: 'ཨེ་མ་དར་ཚིལ', emoji: '🌶️', course: 'main', level: 1, prep: 10, cook: 15, serves: 3,
    taste: { spicy: 5, rich: 4, savory: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'quick'],
    desc: 'Bhutan’s national dish: green chilies simmered in a melting cheese sauce with onion and tomato.',
    story: 'In Bhutan chilies are a vegetable, not a spice. Ema datshi is eaten daily with red rice.',
    equip: ['Pot'],
    ing: [[200, 'g', 'mild green chilies', 'slit lengthwise'], [1, '', 'onion', 'sliced'], [1, '', 'tomato', 'chopped'], [3, 'clove', 'garlic'], [250, 'ml', 'water'], [1, 'tbsp', 'butter'], [150, 'g', 'feta or farmer cheese', 'crumbled'], [0.25, 'tsp', 'salt']],
    steps: [['Simmer', 'Simmer chilies, onion, garlic, butter and water 8 minutes.', 8], ['Cheese', 'Add tomato and cheese; cook 4 minutes until the cheese melts into a sauce.', 4]],
    tips: ['Use milder chilies if you can’t handle the heat.'], mistakes: ['Stirring too much: stringy cheese.'], vars: ['Kewa datshi with potatoes; shamu datshi with mushrooms.'], serve: 'Red rice.' });

  X(C('Tibet', '🏔️', 'East Asia'), { id: 'tingmo', name: 'Tingmo', local: 'ཏིང་མོ', emoji: '🌀', course: 'bread', level: 2, prep: 25, cook: 15, rest: 60, serves: 6,
    taste: { savory: 3, aromatic: 2 }, diet: ['vegan'], methods: ['steam'], tags: ['winter'],
    desc: 'Soft, fluffy Tibetan steamed buns twisted into flower shapes with a little scallion oil.',
    story: 'Tingmo is eaten with spicy curries and dal in Tibet, Ladakh and Sikkim; the twisted layers soak up gravy.',
    equip: ['Steamer'],
    ing: [[300, 'g', 'all-purpose flour'], [1, 'tsp', 'instant yeast'], [1, 'tsp', 'sugar'], [0.5, 'tsp', 'baking powder'], [170, 'ml', 'warm water'], [2, 'tbsp', 'oil'], [3, '', 'scallions', 'finely chopped'], [0.5, 'tsp', 'salt']],
    steps: [['Dough', '[[knead|Knead]] flour, yeast, sugar, baking powder and water; [[proof]] 1 hour.', 60], ['Shape', 'Roll thin, brush with oil, salt and scallions; fold, cut strips, stretch and twist into knots.'], ['Steam', '[[steam|Steam]] 12–15 minutes.', 15]],
    tips: ['Don’t open the steamer early.'], mistakes: ['Over-proofing: buns collapse.'], vars: ['Plain tingmo without scallion.'], serve: 'Shapta-style tofu or dal.' });

  X(C('Uzbekistan', '🇺🇿', 'Middle East'), { id: 'pumpkin-samsa', name: 'Pumpkin Samsa', local: 'Qovoqli somsa', emoji: '🥟', course: 'snack', level: 2, prep: 30, cook: 30, serves: 8,
    taste: { sweet: 2, savory: 4, aromatic: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['street-food', 'party'],
    desc: 'Flaky triangular pastries filled with pumpkin, onion and cumin, baked until golden.',
    story: 'Central Asian samsa are baked in tandoors; pumpkin samsa are the autumn version of the meat ones.',
    equip: ['Baking tray'],
    ing: [[400, 'g', 'puff pastry'], [400, 'g', 'pumpkin', 'small dice'], [1, '', 'onion', 'finely chopped'], [1, 'tsp', 'cumin seeds'], [30, 'g', 'butter', 'diced'], [0.75, 'tsp', 'salt'], [0.25, 'tsp', 'black pepper'], [1, '', 'egg', 'beaten'], [1, 'tbsp', 'sesame seeds']],
    steps: [['Filling', 'Mix pumpkin, onion, cumin, salt and pepper.'], ['Fill', 'Cut pastry squares, fill with filling and a dot of butter, fold into triangles.'], ['Bake', 'Brush with egg, sprinkle sesame and bake at {{200C}} 30 minutes.', 30]],
    tips: ['Raw filling cooks in the pastry.'], mistakes: ['Big pumpkin pieces stay hard.'], vars: ['Chickpea-potato samsa.'], serve: 'Green tea.' });

  /* ======================= MIDDLE EAST ======================= */
  X(TR, { id: 'gozleme', name: 'Gözleme', local: 'Gözleme', emoji: '🫓', course: 'snack', level: 2, prep: 25, cook: 20, rest: 30, serves: 4,
    taste: { savory: 4, rich: 3, herby: 2 }, diet: ['vegetarian'], methods: ['saute'], tags: ['street-food', 'brunch'],
    desc: 'Thin hand-rolled dough filled with spinach and white cheese, folded and cooked on a griddle with butter.',
    story: 'Village women roll gözleme paper-thin with a long thin rolling pin and cook them on a domed griddle (sac).',
    equip: ['Thin rolling pin', 'Griddle'],
    ing: [[300, 'g', 'all-purpose flour'], [180, 'ml', 'water'], [0.5, 'tsp', 'salt'], [1, 'tbsp', 'olive oil'], [250, 'g', 'spinach', 'chopped'], [150, 'g', 'feta', 'crumbled'], [1, '', 'onion', 'finely chopped'], [0.5, 'tsp', 'chili flakes'], [30, 'g', 'butter', 'melted']],
    steps: [['Dough', '[[knead|Knead]] flour, water, salt and oil; rest 30 minutes.', 30], ['Fill', 'Roll very thin, spread filling on half and fold.'], ['Cook', 'Cook on a hot griddle, brushing with butter, until spotted golden on both sides.', 12]],
    tips: ['Roll as thin as possible.'], mistakes: ['Wet spinach: soggy gözleme.'], vars: ['Potato or cheese-only gözleme.'], serve: 'Ayran.' });

  X(TR, { id: 'kisir', name: 'Kısır', local: 'Kısır', emoji: '🥗', course: 'salad', level: 1, prep: 20, cook: 0, serves: 4,
    taste: { sour: 3, spicy: 2, herby: 4, savory: 3 }, diet: ['vegan'], methods: ['no-cook'], tags: ['party', 'summer', 'healthy'],
    desc: 'Turkish bulgur salad with tomato and pepper paste, pomegranate molasses, lemon and lots of herbs.',
    story: 'Kısır is served at Turkish women’s gatherings (gün) and picnics; redder and spicier than tabbouleh.',
    equip: ['Bowl'],
    ing: [[200, 'g', 'fine bulgur (#1)'], [250, 'ml', 'hot water'], [1, 'tbsp', 'turkish pepper paste (biber salçası)'], [1, 'tbsp', 'tomato paste'], [2, 'tbsp', 'pomegranate molasses'], [1, '', 'lemon', 'juice'], [4, 'tbsp', 'olive oil'], [4, '', 'scallions'], [1, 'bunch', 'flat-leaf parsley'], [1, 'handful', 'mint leaves'], [1, 'tsp', 'chili flakes'], [1, 'tsp', 'salt']],
    steps: [['Soak', 'Pour hot water over bulgur and pastes; cover 15 minutes.', 15], ['Mix', 'Knead in oil, molasses, lemon and spices, then fold in herbs and scallions.']],
    tips: ['Knead the bulgur with the pastes for colour.'], mistakes: ['Too much water: mushy.'], vars: ['Add cucumber and tomato.'], serve: 'In lettuce leaves.' });

  X(TR, { id: 'simit', name: 'Simit', local: 'Simit', emoji: '🥯', course: 'bread', level: 2, prep: 30, cook: 20, rest: 75, serves: 8,
    taste: { savory: 3, sweet: 2, rich: 2 }, diet: ['vegan'], methods: ['bake'], tags: ['brunch', 'street-food'],
    desc: 'Crunchy sesame-crusted bread rings, dipped in grape molasses water before baking.',
    story: 'Istanbul’s street breakfast, sold from red carts and eaten with tea and white cheese.',
    equip: ['Baking tray'],
    ing: [[500, 'g', 'all-purpose flour'], [7, 'g', 'instant yeast'], [300, 'ml', 'warm water'], [1, 'tsp', 'salt'], [1, 'tbsp', 'sugar'], [3, 'tbsp', 'grape molasses (pekmez)', 'or date syrup'], [100, 'ml', 'water'], [120, 'g', 'sesame seeds']],
    steps: [['Dough', '[[knead|Knead]] and [[proof]] 1 hour.', 60], ['Shape', 'Twist two ropes together into rings.'], ['Coat and bake', 'Dip in molasses water, coat in sesame, rest 15 minutes and bake at {{220C}} 18 minutes.', 18]],
    tips: ['Lots of sesame.'], mistakes: ['Pale simit: bake longer.'], vars: ['Thessaloniki koulouri.'], serve: 'Tea and cheese.' });

  X(TR, { id: 'sutlac', name: 'Fırın Sütlaç', local: 'Fırın sütlaç', emoji: '🍮', course: 'dessert', level: 1, prep: 5, cook: 45, rest: 120, serves: 6,
    taste: { sweet: 4, rich: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer', 'bake'], tags: ['comfort', 'make-ahead'],
    desc: 'Creamy Turkish rice pudding baked until its top caramelizes in brown spots.',
    story: 'Found in every Turkish muhallebici (pudding shop); the oven-browned top is the best part.',
    equip: ['Pot', 'Ovenproof bowls'],
    ing: [[80, 'g', 'short-grain rice'], [250, 'ml', 'water'], [1, 'l', 'whole milk'], [150, 'g', 'sugar'], [2, 'tbsp', 'rice flour', 'in 100 ml milk'], [1, 'tsp', 'vanilla extract']],
    steps: [['Rice', 'Cook rice in water until absorbed.', 10], ['Milk', 'Add milk and sugar; simmer 15 minutes; stir in rice-flour slurry until thick.', 18], ['Brown', 'Pour into bowls set in a water tray; grill at the top of the oven until spotted brown.', 15]],
    tips: ['Chill for 2 hours.'], mistakes: ['Not stirring: catches.'], vars: ['Sprinkle cinnamon or hazelnuts.'], serve: 'Cold.' });

  X(C('Israel', '🇮🇱', 'Middle East'), { id: 'sabich', name: 'Sabich', local: 'סביח', emoji: '🥙', course: 'main', level: 1, prep: 15, cook: 15, serves: 4,
    taste: { savory: 4, rich: 4, sour: 3 }, diet: ['vegetarian'], methods: ['saute', 'no-cook'], tags: ['street-food', 'weeknight'],
    desc: 'Pita stuffed with fried eggplant, hard-boiled egg, hummus, tahini, chopped salad and amba mango sauce.',
    story: 'Brought by Iraqi Jews, who ate fried eggplant and eggs on Shabbat morning.',
    equip: ['Frying pan'],
    ing: [[4, '', 'pita breads'], [1, '', 'eggplant', 'slices'], [4, 'tbsp', 'oil'], [4, '', 'eggs', 'hard-boiled, sliced'], [6, 'tbsp', 'hummus'], [4, 'tbsp', 'tahini', 'with lemon and water'], [2, '', 'tomatoes', 'diced'], [1, '', 'cucumber', 'diced'], [2, 'tbsp', 'parsley'], [3, 'tbsp', 'amba or mango pickle'], [0.5, 'tsp', 'salt']],
    steps: [['Fry', '[[shallow-fry|Fry]] salted eggplant until golden.', 10], ['Fill', 'Spread pita with hummus; fill with eggplant, egg, salad, tahini and amba.']],
    tips: ['Amba (mango pickle) is the signature.'], mistakes: ['Soggy eggplant.'], vars: ['Sabich plate with laffa bread.'], serve: 'Pickles.' });

  X(C('Lebanon', '🇱🇧', 'Middle East'), { id: 'manakish', name: 'Manakish Za’atar', local: 'مناقيش زعتر', emoji: '🫓', course: 'breakfast', level: 2, prep: 20, cook: 10, rest: 60, serves: 6,
    taste: { herby: 4, sour: 2, savory: 4 }, diet: ['vegan'], methods: ['bake'], tags: ['brunch', 'street-food'],
    desc: 'Flatbreads spread with za’atar and olive oil, baked until crisp at the edges.',
    story: 'The Lebanese breakfast from the corner bakery (furn), wrapped with tomato, cucumber and mint.',
    equip: ['Baking tray'],
    ing: [[400, 'g', 'all-purpose flour'], [5, 'g', 'instant yeast'], [250, 'ml', 'warm water'], [1, 'tsp', 'salt'], [1, 'tsp', 'sugar'], [5, 'tbsp', 'za’atar'], [6, 'tbsp', 'olive oil']],
    steps: [['Dough', '[[knead|Knead]] and [[proof]] 1 hour.', 60], ['Spread', 'Roll rounds, dimple and spread with za’atar mixed with oil.'], ['Bake', 'Bake on a very hot tray at {{250C}} 7–9 minutes.', 9]],
    tips: ['Leave a border without za’atar.'], mistakes: ['Dry za’atar: burns.'], vars: ['Cheese (jibneh) manakish.'], serve: 'Tomato, cucumber, mint and olives.' });

  X(C('Iran', '🇮🇷', 'Middle East'), { id: 'ash-reshteh', name: 'Ash Reshteh', local: 'آش رشته', emoji: '🥣', course: 'soup', level: 2, prep: 20, cook: 70, serves: 6,
    taste: { savory: 4, herby: 5, sour: 2, rich: 3 }, diet: ['vegetarian', 'high-protein'], methods: ['simmer'], tags: ['festive', 'winter', 'comfort'],
    desc: 'A thick Persian soup of beans, lentils, herbs and noodles, topped with whey, fried mint and crispy onions.',
    story: 'Eaten for Nowruz and before journeys; the noodles (reshteh) symbolise the paths of life.',
    equip: ['Large pot', 'Pan'],
    ing: [[1, 'can', 'chickpeas'], [1, 'can', 'cannellini or kidney beans'], [100, 'g', 'brown lentils'], [2, 'l', 'water'], [2, 'bunch', 'parsley', 'chopped'], [1, 'bunch', 'cilantro', 'chopped'], [1, 'bunch', 'dill'], [200, 'g', 'spinach'], [150, 'g', 'linguine or reshteh noodles'], [1, 'tsp', 'ground turmeric'], [1.5, 'tsp', 'salt'], [3, '', 'onions', 'sliced'], [4, 'tbsp', 'oil'], [1, 'tbsp', 'dried mint'], [120, 'g', 'kashk or sour cream']],
    steps: [['Base', 'Fry half the onions with turmeric; add lentils, water and salt and simmer 20 minutes.', 25], ['Herbs', 'Add beans, herbs and spinach and simmer 30 minutes.', 30], ['Noodles', 'Add noodles and cook 10 minutes until thick.', 10], ['Top', 'Top with kashk, crispy onions and dried mint fried in oil.', 5]],
    tips: ['Lots of herbs: it should be green.'], mistakes: ['Not stirring: noodles stick.'], vars: ['Ash-e jo with barley.'], serve: 'Hot in big bowls.' });

  X(C('Iran', '🇮🇷', 'Middle East'), { id: 'sholeh-zard', name: 'Sholeh Zard', local: 'شله زرد', emoji: '🍚', course: 'dessert', level: 1, prep: 5, cook: 60, serves: 6,
    taste: { sweet: 5, aromatic: 5 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive'],
    desc: 'Bright-yellow saffron rice pudding with rose water, cardamom and slivered almonds, decorated with cinnamon.',
    story: 'Made in big pots as nazri (votive offering) and shared with neighbours.',
    equip: ['Heavy pot'],
    ing: [[150, 'g', 'short-grain rice'], [1.5, 'l', 'water'], [250, 'g', 'sugar'], [1, 'pinch', 'saffron', 'in 3 tbsp hot water'], [3, 'tbsp', 'rose water'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'almonds', 'slivered'], [1, 'tsp', 'ground cinnamon']],
    steps: [['Cook', 'Simmer rice in water until very soft, 35 minutes.', 35], ['Sweeten', 'Add sugar, saffron, rose water and cardamom; cook 20 minutes until thick.', 20], ['Decorate', 'Top with almonds and cinnamon patterns.']],
    tips: ['Stir gently to keep grains intact.'], mistakes: ['Too thick: it sets hard.'], vars: ['Add a spoon of butter.'], serve: 'Cool.' });

  X(C('Egypt', '🇪🇬', 'Middle East'), { id: 'basbousa', name: 'Basbousa', local: 'بسبوسة', emoji: '🍰', course: 'dessert', level: 1, prep: 15, cook: 30, serves: 12,
    taste: { sweet: 5, rich: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['festive', 'party'],
    desc: 'A moist semolina cake soaked in syrup, topped with almonds.',
    story: 'Eaten across the Middle East during Ramadan, called hareeseh in the Levant and revani in Turkey.',
    equip: ['Baking tin'],
    ing: [[250, 'g', 'fine semolina'], [100, 'g', 'sugar'], [100, 'g', 'butter', 'melted'], [200, 'g', 'yogurt'], [1, 'tsp', 'baking powder'], [40, 'g', 'desiccated coconut'], [16, '', 'almonds'], '#Syrup', [250, 'g', 'sugar'], [150, 'ml', 'water'], [1, 'tbsp', 'lemon juice'], [1, 'tsp', 'orange blossom water']],
    steps: [['Batter', 'Mix semolina, sugar, butter, yogurt, baking powder and coconut; spread in a tin, score diamonds and top with almonds.'], ['Bake', 'Bake at {{180C}} 30 minutes until golden.', 30], ['Syrup', 'Pour cool syrup over the hot cake.']],
    tips: ['Hot cake, cool syrup.'], mistakes: ['Overmixing: tough cake.'], vars: ['Add cream filling (Egyptian style).'], serve: 'With tea.' });

  X(C('United Arab Emirates', '🇦🇪', 'Middle East'), { id: 'luqaimat', name: 'Luqaimat', local: 'لقيمات', emoji: '🟤', course: 'dessert', level: 1, prep: 10, cook: 20, rest: 60, serves: 6,
    taste: { sweet: 5, rich: 3, aromatic: 3 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['festive'],
    desc: 'Crisp fried dough balls with saffron and cardamom, drizzled with date syrup and sesame.',
    story: 'An Emirati Ramadan sweet; “luqaimat” means “small bites”.',
    equip: ['Kadai'],
    ing: [[250, 'g', 'all-purpose flour'], [1, 'tsp', 'instant yeast'], [1, 'tbsp', 'sugar'], [1, 'pinch', 'saffron'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'yogurt'], [220, 'ml', 'warm water'], [1, 'l', 'oil', 'for frying'], [4, 'tbsp', 'date syrup'], [1, 'tbsp', 'sesame seeds']],
    steps: [['Batter', 'Mix into a sticky batter; [[proof]] 1 hour.', 60], ['Fry', 'Drop small balls into hot oil and fry until golden.', 15], ['Glaze', 'Toss with date syrup and sesame.']],
    tips: ['Wet spoon for round balls.'], mistakes: ['Cool oil: oily.'], vars: ['Honey instead of date syrup.'], serve: 'With Arabic coffee.' });

  /* ======================= EUROPE ======================= */
  X(IT, { id: 'panzanella', name: 'Panzanella', local: 'Panzanella', emoji: '🥗', course: 'salad', level: 1, prep: 20, cook: 0, serves: 4,
    taste: { sour: 3, savory: 4, herby: 3 }, diet: ['vegan'], methods: ['no-cook'], tags: ['summer', 'budget'],
    desc: 'Tuscan bread salad of ripe tomatoes, cucumber, red onion and basil, with stale bread soaking up the juices.',
    story: 'A peasant summer salad that rescues stale Tuscan bread.',
    equip: ['Bowl'],
    ing: [[200, 'g', 'stale bread', 'torn'], [500, 'g', 'ripe tomatoes', 'chunks'], [1, '', 'cucumber'], [1, '', 'red onion', 'thinly sliced'], [1, 'handful', 'basil'], [5, 'tbsp', 'extra-virgin olive oil'], [2, 'tbsp', 'red wine vinegar'], [0.75, 'tsp', 'salt']],
    steps: [['Juice', 'Salt the tomatoes and leave 15 minutes to release juice.', 15], ['Toss', 'Toss with bread, onion, cucumber, oil, vinegar and basil; rest 15 minutes.', 15]],
    tips: ['Really stale bread holds up.'], mistakes: ['Soft bread: mush.'], vars: ['Toast the bread first.'], serve: 'At room temperature.' });

  X(IT, { id: 'arancini', name: 'Arancini', local: 'Arancini', emoji: '🟠', course: 'starter', level: 3, prep: 40, cook: 30, rest: 120, serves: 6,
    taste: { savory: 4, rich: 5 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['party', 'impress'],
    desc: 'Sicilian fried saffron-risotto balls stuffed with mozzarella and peas.',
    story: 'Named for their orange colour (arancia); Palermo says arancina, Catania arancino.',
    equip: ['Pot', 'Kadai'],
    ing: [[300, 'g', 'arborio rice'], [900, 'ml', 'vegetable stock'], [1, 'pinch', 'saffron'], [40, 'g', 'parmesan'], [20, 'g', 'butter'], [100, 'g', 'mozzarella', 'cubes'], [80, 'g', 'frozen peas'], [100, 'g', 'flour'], [2, '', 'eggs'], [150, 'g', 'breadcrumbs'], [1, 'l', 'oil', 'for frying']],
    steps: [['Risotto', 'Cook rice in stock with saffron until thick; stir in parmesan and butter; cool completely.', 30], ['Shape', 'Shape balls around mozzarella and peas.'], ['Coat and fry', '[[breading|Bread]] in flour, egg and crumbs; [[deep-fry]] until golden.', 12]],
    tips: ['Cold, firm risotto shapes best.'], mistakes: ['Warm rice: they fall apart.'], vars: ['Spinach and cheese arancini.'], serve: 'Tomato sauce.' });

  X(IT, { id: 'pasta-e-fagioli', name: 'Pasta e Fagioli', local: 'Pasta e fagioli', emoji: '🥣', course: 'soup', level: 1, prep: 10, cook: 35, serves: 4,
    taste: { savory: 4, herby: 3, rich: 3 }, diet: ['vegan', 'high-protein'], methods: ['simmer'], tags: ['comfort', 'budget', 'one-pot'],
    desc: 'A thick Italian pasta and bean soup with rosemary, garlic and tomato.',
    story: 'Every Italian region has its version of this cucina povera classic.',
    equip: ['Pot'],
    ing: [[3, 'tbsp', 'olive oil'], [1, '', 'onion'], [1, '', 'carrot'], [1, 'stalk', 'celery'], [2, 'clove', 'garlic'], [1, 'sprig', 'rosemary'], [2, 'tbsp', 'tomato paste'], [2, 'can', 'cannellini beans'], [1, 'l', 'vegetable stock'], [150, 'g', 'small pasta (ditalini)'], [0.75, 'tsp', 'salt']],
    steps: [['Base', '[[sweat|Sweat]] the vegetables with garlic and rosemary.', 8], ['Simmer', 'Add tomato paste, beans (mash half) and stock; simmer 15 minutes.', 15], ['Pasta', 'Add pasta and cook until tender and the soup is thick.', 10]],
    tips: ['Mash some beans for creaminess.'], mistakes: ['Overcooked pasta absorbs everything.'], vars: ['Venetian pasta e fasoi with borlotti.'], serve: 'Olive oil and parmesan.' });

  X(FR, { id: 'soupe-au-pistou', name: 'Soupe au Pistou', local: 'Soupe au pistou', emoji: '🥣', course: 'soup', level: 1, prep: 20, cook: 35, serves: 6,
    taste: { herby: 5, savory: 4 }, diet: ['vegetarian'], methods: ['simmer'], tags: ['summer', 'healthy'],
    desc: 'Provençal summer vegetable and bean soup finished with a garlicky basil pistou.',
    story: 'Provence’s cousin of minestrone: pistou is pesto without pine nuts.',
    equip: ['Pot', 'Mortar'],
    ing: [[2, '', 'zucchini'], [150, 'g', 'green beans'], [2, '', 'carrots'], [2, '', 'potatoes'], [1, 'can', 'cannellini beans'], [2, '', 'tomatoes'], [1.5, 'l', 'water'], [100, 'g', 'small pasta (ditalini)'], [1, 'tsp', 'salt'], '#Pistou', [1, 'handful', 'basil'], [3, 'clove', 'garlic'], [40, 'g', 'parmesan'], [5, 'tbsp', 'olive oil']],
    steps: [['Simmer', 'Simmer the vegetables in water with salt 25 minutes.', 25], ['Pasta', 'Add beans and pasta; cook 10 minutes.', 10], ['Pistou', '[[pound|Pound]] basil, garlic, cheese and oil; stir into bowls.']],
    tips: ['Add pistou off the heat.'], mistakes: ['Cooking the pistou: loses colour.'], vars: ['Vegan pistou without cheese.'], serve: 'Bread.' });

  X(FR, { id: 'clafoutis', name: 'Cherry Clafoutis', local: 'Clafoutis aux cerises', emoji: '🍒', course: 'dessert', level: 1, prep: 15, cook: 40, serves: 6,
    taste: { sweet: 4, sour: 2, rich: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['summer', 'party'],
    desc: 'Cherries baked in a puffy vanilla flan-like batter, dusted with sugar.',
    story: 'From the Limousin region; traditionally the cherry stones are left in for almond flavour.',
    equip: ['Baking dish'],
    ing: [[400, 'g', 'cherries'], [3, '', 'eggs'], [80, 'g', 'sugar'], [70, 'g', 'all-purpose flour'], [300, 'ml', 'milk'], [20, 'g', 'butter'], [1, 'tsp', 'vanilla extract'], [1, 'tbsp', 'powdered sugar']],
    steps: [['Batter', '[[whisk|Whisk]] eggs and sugar, then flour, milk and vanilla.'], ['Bake', 'Butter the dish, add cherries, pour over batter; bake at {{180C}} 40 minutes.', 40]],
    tips: ['Serve warm, it sinks as it cools.'], mistakes: ['Lumpy batter: whisk well.'], vars: ['Plum or pear flaugnarde.'], serve: 'Warm.' });

  X(FR, { id: 'madeleines', name: 'Madeleines', local: 'Madeleines', emoji: '🐚', course: 'dessert', level: 2, prep: 15, cook: 12, rest: 60, serves: 16,
    taste: { sweet: 4, rich: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['party'],
    desc: 'Shell-shaped butter cakes with a signature hump, flavoured with lemon zest.',
    story: 'Made famous by Proust, whose madeleine dipped in tea unlocked his childhood memories.',
    equip: ['Madeleine tin'],
    ing: [[2, '', 'eggs'], [100, 'g', 'sugar'], [100, 'g', 'all-purpose flour'], [0.5, 'tsp', 'baking powder'], [100, 'g', 'butter', 'browned and cooled'], [1, '', 'lemon', 'zest']],
    steps: [['Batter', '[[whisk|Whisk]] eggs and sugar until thick, fold in flour, baking powder, zest and butter; chill 1 hour.', 60], ['Bake', 'Fill buttered moulds and bake at {{210C}} 10–12 minutes.', 12, 'Cold batter in a hot oven gives the hump.']],
    tips: ['Chill the batter.'], mistakes: ['Overfilling moulds.'], vars: ['Honey or matcha madeleines.'], serve: 'With tea.' });

  X(ES, { id: 'salmorejo', name: 'Salmorejo', local: 'Salmorejo cordobés', emoji: '🍅', course: 'soup', level: 1, prep: 15, cook: 0, rest: 60, serves: 4,
    taste: { sour: 2, savory: 4, rich: 4 }, diet: ['vegan'], methods: ['no-cook'], tags: ['summer'],
    desc: 'Thick, creamy cold tomato soup from Córdoba, blended with bread, garlic and olive oil.',
    story: 'Thicker than gazpacho; usually topped with ham and egg, here with egg-free toppings.',
    equip: ['Blender'],
    ing: [[1, 'kg', 'very ripe tomatoes'], [150, 'g', 'day-old white bread'], [1, 'clove', 'garlic'], [120, 'ml', 'extra-virgin olive oil'], [1, 'tbsp', 'sherry vinegar'], [1, 'tsp', 'salt']],
    steps: [['Blend', 'Blend tomatoes, then add bread, garlic, vinegar and salt; drizzle in oil until creamy.'], ['Chill', 'Chill 1 hour.', 60]],
    tips: ['Ripest tomatoes only.'], mistakes: ['Not enough oil: thin.'], vars: ['Top with chopped egg (vegetarian).'], serve: 'Cold, with olive oil.' });

  X(ES, { id: 'espinacas-garbanzos', name: 'Espinacas con Garbanzos', local: 'Espinacas con garbanzos', emoji: '🥬', course: 'main', level: 1, prep: 10, cook: 20, serves: 4,
    taste: { savory: 4, smoky: 3, sour: 2 }, diet: ['vegan', 'high-protein'], methods: ['simmer'], tags: ['weeknight', 'healthy', 'budget'],
    desc: 'Seville tapa of chickpeas and spinach in a garlicky, smoky paprika-cumin sauce thickened with fried bread.',
    story: 'A Moorish-influenced tapa from Seville’s bars.',
    equip: ['Pan', 'Mortar'],
    ing: [[4, 'tbsp', 'olive oil'], [2, 'slice', 'bread'], [4, 'clove', 'garlic'], [1, 'tsp', 'ground cumin'], [1, 'tsp', 'smoked paprika'], [1, 'tbsp', 'sherry vinegar'], [2, 'can', 'chickpeas'], [300, 'g', 'spinach'], [150, 'ml', 'water'], [0.75, 'tsp', 'salt']],
    steps: [['Picada', 'Fry bread and garlic; [[pound]] with spices and vinegar.', 5], ['Spinach', '[[wilt|Wilt]] spinach.', 3], ['Simmer', 'Add chickpeas, picada, water and salt; simmer 10 minutes.', 10]],
    tips: ['The fried-bread paste thickens it.'], mistakes: ['Burnt paprika.'], vars: ['Add raisins.'], serve: 'Crusty bread.' });

  X(ES, { id: 'crema-catalana', name: 'Crema Catalana', local: 'Crema catalana', emoji: '🍮', course: 'dessert', level: 2, prep: 15, cook: 15, rest: 240, serves: 6,
    taste: { sweet: 4, rich: 4, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['impress', 'make-ahead'],
    desc: 'Custard flavoured with lemon zest and cinnamon under a crackling burnt-sugar crust.',
    story: 'Catalonia’s answer to crème brûlée, eaten on St Joseph’s Day (19 March).',
    equip: ['Pot', 'Blowtorch'],
    ing: [[500, 'ml', 'whole milk'], [1, '', 'lemon', 'peel'], [1, 'piece', 'cinnamon stick'], [5, '', 'egg yolks'], [100, 'g', 'sugar'], [25, 'g', 'cornstarch'], [6, 'tbsp', 'sugar', 'for topping']],
    steps: [['Infuse', 'Heat milk with lemon peel and cinnamon; rest 15 minutes.', 15], ['Custard', 'Whisk yolks, sugar and cornstarch; add milk and cook, stirring, until thick.', 6], ['Set and burn', 'Chill 4 hours; sprinkle sugar and caramelize with a torch.', 240]],
    tips: ['Burn just before serving.'], mistakes: ['Boiling hard: lumps.'], vars: ['Orange zest version.'], serve: 'Cold with a hot crust.' });

  X(UK, { id: 'cauliflower-cheese', name: 'Cauliflower Cheese', local: 'Cauliflower cheese', emoji: '🧀', course: 'side', level: 1, prep: 10, cook: 30, serves: 4,
    taste: { rich: 5, savory: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['comfort', 'winter'],
    desc: 'Cauliflower baked in a mustardy cheddar cheese sauce until bubbling and golden.',
    story: 'A British Sunday-roast side and comfort supper.',
    equip: ['Baking dish', 'Pot'],
    ing: [[1, 'head', 'cauliflower', 'florets'], [40, 'g', 'butter'], [40, 'g', 'flour'], [500, 'ml', 'milk'], [150, 'g', 'mature cheddar', 'grated'], [1, 'tsp', 'mustard'], [0.5, 'tsp', 'salt']],
    steps: [['Blanch', '[[blanch|Blanch]] cauliflower 4 minutes; drain well.', 5], ['Sauce', 'Make a [[roux]], whisk in milk until thick, add most of the cheese and mustard.', 8], ['Bake', 'Pour over, top with cheese and bake at {{200C}} 20 minutes.', 20]],
    tips: ['Drain cauliflower well.'], mistakes: ['Watery sauce.'], vars: ['Add broccoli.'], serve: 'With roast potatoes.' });

  X(UK, { id: 'scones', name: 'Scones with Jam & Cream', local: 'Scones', emoji: '🥮', course: 'dessert', level: 1, prep: 15, cook: 15, serves: 8,
    taste: { sweet: 3, rich: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['party', 'brunch'],
    desc: 'Tall, fluffy buttery scones served warm with clotted cream and strawberry jam.',
    story: 'The heart of a British cream tea; Devon puts cream first, Cornwall jam first.',
    equip: ['Round cutter', 'Baking tray'],
    ing: [[350, 'g', 'self-raising flour'], [1, 'tsp', 'baking powder'], [80, 'g', 'cold butter'], [3, 'tbsp', 'sugar'], [175, 'ml', 'milk'], [1, 'tsp', 'vanilla extract'], [1, '', 'egg', 'to glaze'], [150, 'g', 'clotted or whipped cream'], [150, 'g', 'strawberry jam']],
    steps: [['Rub', 'Rub butter into flour, baking powder and sugar.'], ['Mix', 'Add milk and vanilla; bring together lightly, pat 3 cm thick and cut.'], ['Bake', 'Glaze and bake at {{220C}} 12 minutes.', 12]],
    tips: ['Don’t twist the cutter: they rise straight.'], mistakes: ['Overworking: tough scones.'], vars: ['Cheese scones.'], serve: 'Jam and cream.' });

  X(C('Ireland', '🇮🇪', 'Europe'), { id: 'soda-bread', name: 'Irish Soda Bread', local: 'Arán sóide', emoji: '🍞', course: 'bread', level: 1, prep: 10, cook: 40, serves: 8,
    taste: { savory: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['quick', 'budget'],
    desc: 'A crusty no-yeast bread leavened with baking soda and buttermilk, marked with a cross.',
    story: 'Irish families baked soda bread daily; the cross on top “lets the fairies out”.',
    equip: ['Baking tray'],
    ing: [[450, 'g', 'whole wheat flour (atta)'], [1, 'tsp', 'baking soda'], [1, 'tsp', 'salt'], [400, 'ml', 'buttermilk']],
    steps: [['Mix', 'Mix flour, soda and salt; add buttermilk to a soft, sticky dough.'], ['Shape', 'Shape a round and cut a deep cross.'], ['Bake', 'Bake at {{220C}} 35–40 minutes until hollow-sounding.', 40]],
    tips: ['Work quickly once wet.'], mistakes: ['Kneading: dense bread.'], vars: ['Add oats and treacle.'], serve: 'Butter and soup.' });

  X(UK, { id: 'bubble-and-squeak', name: 'Bubble and Squeak', local: 'Bubble and squeak', emoji: '🥔', course: 'breakfast', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { savory: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['budget', 'brunch'],
    desc: 'Leftover mashed potato and cabbage fried into a crispy cake.',
    story: 'Named for the sounds it makes in the pan; Boxing Day uses up the Christmas leftovers.',
    equip: ['Frying pan'],
    ing: [[500, 'g', 'mashed potatoes', 'leftover'], [250, 'g', 'cabbage', 'cooked'], [1, '', 'onion', 'sliced'], [30, 'g', 'butter'], [0.5, 'tsp', 'salt'], [0.25, 'tsp', 'black pepper']],
    steps: [['Mix', 'Mix potato, cabbage, onion, salt and pepper.'], ['Fry', 'Fry in butter, pressing flat; cook until a crust forms, flip and crust the other side.', 12]],
    tips: ['Leave it alone to crust.'], mistakes: ['Stirring: no crust.'], vars: ['Add Brussels sprouts.'], serve: 'With a fried egg.' });

  X(C('Hungary', '🇭🇺', 'Europe'), { id: 'langos', name: 'Lángos', local: 'Lángos', emoji: '🫓', course: 'snack', level: 2, prep: 20, cook: 15, rest: 60, serves: 6,
    taste: { savory: 4, rich: 4 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['street-food'],
    desc: 'Puffy fried dough rubbed with garlic and topped with sour cream and grated cheese.',
    story: 'Hungary’s beach and market snack, especially at Lake Balaton.',
    equip: ['Kadai'],
    ing: [[400, 'g', 'all-purpose flour'], [1, '', 'potato', 'boiled, mashed'], [7, 'g', 'instant yeast'], [250, 'ml', 'warm milk'], [1, 'tsp', 'salt'], [1, 'l', 'oil', 'for frying'], [3, 'clove', 'garlic', 'in 2 tbsp oil'], [150, 'g', 'sour cream'], [100, 'g', 'cheese', 'grated']],
    steps: [['Dough', '[[knead|Knead]] flour, potato, yeast, milk and salt; [[proof]] 1 hour.', 60], ['Fry', 'Stretch discs and [[deep-fry]] until puffed and golden.', 12], ['Top', 'Brush garlic oil, spread sour cream and add cheese.']],
    tips: ['Potato in the dough keeps it soft.'], mistakes: ['Thin dough: crisp, not puffy.'], vars: ['Sweet lángos with jam.'], serve: 'Hot.' });

  X(C('Ukraine', '🇺🇦', 'Europe'), { id: 'syrniki', name: 'Syrniki', local: 'Сирники', emoji: '🥞', course: 'breakfast', level: 1, prep: 10, cook: 15, serves: 3,
    taste: { sweet: 3, rich: 3, sour: 2 }, diet: ['vegetarian', 'high-protein'], methods: ['saute'], tags: ['brunch', 'kids'],
    desc: 'Golden fried pancakes of farmer’s cheese, egg and a little flour, served with sour cream and jam.',
    story: 'A breakfast favourite across Ukraine, Russia and Belarus.',
    equip: ['Frying pan'],
    ing: [[400, 'g', 'farmer’s cheese (twaróg) or ricotta', 'well drained'], [1, '', 'egg'], [3, 'tbsp', 'sugar'], [60, 'g', 'all-purpose flour'], [1, 'pinch', 'salt'], [1, 'tsp', 'vanilla extract'], [3, 'tbsp', 'oil'], [4, 'tbsp', 'sour cream']],
    steps: [['Mix', 'Mix cheese, egg, sugar, salt, vanilla and most of the flour.'], ['Shape', 'Shape thick discs, dust in flour.'], ['Fry', 'Fry on medium-low until golden on both sides.', 12]],
    tips: ['Dry cheese = no extra flour needed.'], mistakes: ['Wet cheese: they spread.'], vars: ['Add raisins.'], serve: 'Sour cream and jam.' });

  X(C('Poland', '🇵🇱', 'Europe'), { id: 'placki-ziemniaczane', name: 'Placki Ziemniaczane', local: 'Placki ziemniaczane', emoji: '🥔', course: 'main', level: 1, prep: 20, cook: 20, serves: 4,
    taste: { savory: 4 }, diet: ['vegetarian'], methods: ['saute'], tags: ['comfort', 'budget'],
    desc: 'Crispy Polish potato pancakes with onion, served with sour cream or apple sauce.',
    story: 'The same family as Jewish latkes and German Reibekuchen.',
    equip: ['Grater', 'Frying pan'],
    ing: [[1, 'kg', 'floury potatoes', 'grated'], [1, '', 'onion', 'grated'], [1, '', 'egg'], [3, 'tbsp', 'all-purpose flour'], [1, 'tsp', 'salt'], [6, 'tbsp', 'oil'], [4, 'tbsp', 'sour cream']],
    steps: [['Squeeze', 'Squeeze the grated potato very dry.'], ['Mix', 'Mix with onion, egg, flour and salt.'], ['Fry', 'Fry thin pancakes in hot oil until crisp.', 15]],
    tips: ['Squeeze hard for crispness.'], mistakes: ['Wet potato: soggy.'], vars: ['Latkes with matzo meal.'], serve: 'Sour cream.' });

  X(C('Romania', '🇷🇴', 'Europe'), { id: 'mamaliga', name: 'Mămăligă cu Brânză', local: 'Mămăligă', emoji: '🌽', course: 'main', level: 1, prep: 5, cook: 30, serves: 4,
    taste: { savory: 4, rich: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'budget'],
    desc: 'Romanian cornmeal polenta served with salty sheep’s cheese and sour cream.',
    story: 'Romania’s staple, once eaten daily instead of bread.',
    equip: ['Heavy pot'],
    ing: [[250, 'g', 'cornmeal'], [1, 'l', 'water'], [1, 'tsp', 'salt'], [30, 'g', 'butter'], [150, 'g', 'feta', 'crumbled'], [150, 'g', 'sour cream']],
    steps: [['Cook', 'Rain cornmeal into boiling salted water, stirring; cook 25 minutes until thick.', 25], ['Serve', 'Stir in butter; serve with cheese and sour cream.']],
    tips: ['Stir with a wooden spoon.'], mistakes: ['Lumps: add slowly.'], vars: ['Bulz: baked cheese-stuffed balls.'], serve: 'Hot.' });

  X(C('Austria', '🇦🇹', 'Europe', { styles: ['continental'] }), { id: 'kaiserschmarrn', name: 'Kaiserschmarrn', local: 'Kaiserschmarrn', emoji: '🥞', course: 'dessert', level: 2, prep: 15, cook: 15, serves: 3,
    taste: { sweet: 4, rich: 4 }, diet: ['vegetarian'], methods: ['saute'], tags: ['comfort', 'winter'],
    desc: 'A fluffy, caramelized shredded pancake with raisins, dusted with sugar and served with plum compote.',
    story: 'Said to be Emperor Franz Joseph’s favourite: the “emperor’s mess”.',
    equip: ['Ovenproof pan'],
    ing: [[4, '', 'eggs', 'separated'], [250, 'ml', 'milk'], [130, 'g', 'all-purpose flour'], [2, 'tbsp', 'sugar'], [2, 'tbsp', 'raisins'], [40, 'g', 'butter'], [2, 'tbsp', 'powdered sugar'], [150, 'g', 'plum compote or jam']],
    steps: [['Batter', 'Mix yolks, milk, flour and sugar; [[fold]] in whipped whites.'], ['Cook', 'Pour into buttered pan, add raisins, cook until set underneath; flip in sections.', 8], ['Shred', 'Tear into pieces with two forks and caramelize with sugar.', 4]],
    tips: ['Whipped whites make it fluffy.'], mistakes: ['High heat: burnt outside.'], vars: ['Apple compote.'], serve: 'Plum compote.' });

  X(C('Switzerland', '🇨🇭', 'Europe'), { id: 'bircher-muesli', name: 'Bircher Müesli', local: 'Birchermüesli', emoji: '🥣', course: 'breakfast', level: 1, prep: 10, cook: 0, rest: 480, serves: 2,
    taste: { sweet: 3, sour: 2 }, diet: ['vegetarian'], methods: ['no-cook'], tags: ['healthy', 'make-ahead'],
    desc: 'Oats soaked overnight with grated apple, yogurt, milk and nuts. The original overnight oats.',
    story: 'Created around 1900 by Swiss doctor Maximilian Bircher-Benner for his patients.',
    equip: ['Bowl'],
    ing: [[80, 'g', 'rolled oats'], [150, 'ml', 'milk'], [100, 'g', 'yogurt'], [1, '', 'apple', 'grated'], [1, 'tbsp', 'honey'], [1, 'tbsp', 'lemon juice'], [2, 'tbsp', 'hazelnuts or almonds'], [100, 'g', 'berries']],
    steps: [['Soak', 'Mix oats, milk, yogurt and lemon; refrigerate overnight.', 480], ['Finish', 'Stir in grated apple and honey; top with nuts and berries.']],
    tips: ['Grate the apple just before eating.'], mistakes: ['Too thick: add milk.'], vars: ['Vegan with oat milk and coconut yogurt.'], serve: 'Cold.' });

  /* ======================= AMERICAS ======================= */
  X(MX, { id: 'enmoladas', name: 'Enmoladas (Mole Enchiladas)', local: 'Enmoladas', emoji: '🌮', course: 'main', level: 3, prep: 30, cook: 40, serves: 4,
    taste: { rich: 5, sweet: 3, smoky: 4, spicy: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'impress'],
    desc: 'Corn tortillas rolled around cheese and drenched in a rich mole of dried chilies, nuts, sesame and chocolate.',
    story: 'Mole poblano from Puebla can have 20+ ingredients; enmoladas are how families use leftover mole.',
    equip: ['Blender', 'Pot', 'Frying pan'],
    ing: [[3, '', 'dried ancho chiles'], [2, '', 'dried guajillo chiles'], [2, 'tbsp', 'oil'], [1, '', 'onion'], [2, 'clove', 'garlic'], [2, '', 'tomatoes'], [30, 'g', 'almonds'], [2, 'tbsp', 'sesame seeds'], [2, 'tbsp', 'raisins'], [1, '', 'stale corn tortilla'], [0.5, 'tsp', 'ground cinnamon'], [3, '', 'whole cloves'], [40, 'g', 'dark chocolate'], [500, 'ml', 'vegetable stock'], [1, 'tbsp', 'sugar'], [1, 'tsp', 'salt'], [12, '', 'corn tortillas'], [200, 'g', 'queso fresco or feta'], [0.5, '', 'onion', 'sliced, to serve']],
    steps: [['Toast', '[[toast|Toast]] chiles, soak in hot water; fry onion, garlic, tomatoes, nuts, sesame, raisins, bread and spices.', 15], ['Blend', 'Blend everything with stock until smooth.'], ['Simmer', 'Fry the paste in oil, add chocolate, sugar and salt; [[simmer]] 15 minutes.', 15], ['Roll', 'Dip warm tortillas in mole, fill with cheese, roll and cover with more mole and sesame.']],
    tips: ['Toast chiles briefly: they burn fast.'], mistakes: ['Burnt chiles: bitter mole.'], vars: ['Mole with vegetables and potatoes.'], serve: 'Rice and onion.' });

  X(MX, { id: 'molletes', name: 'Molletes', local: 'Molletes', emoji: '🥖', course: 'breakfast', level: 1, prep: 10, cook: 10, serves: 4,
    taste: { savory: 4, rich: 4 }, diet: ['vegetarian', 'high-protein'], methods: ['bake'], tags: ['quick', 'brunch', 'kids'],
    desc: 'Toasted bread rolls spread with refried beans and melted cheese, topped with pico de gallo.',
    story: 'A cheap, beloved Mexican breakfast made with bolillo rolls.',
    equip: ['Oven'],
    ing: [[4, '', 'small baguettes', 'halved'], [30, 'g', 'butter'], [300, 'g', 'refried beans'], [150, 'g', 'cheese', 'grated'], [150, 'g', 'pico de gallo salsa']],
    steps: [['Toast', 'Butter and toast the rolls.', 4], ['Top', 'Spread beans, add cheese and bake until melted.', 6], ['Finish', 'Top with pico de gallo.']],
    tips: ['Use crusty rolls.'], mistakes: ['Cold beans: warm them first.'], vars: ['Sweet molletes with butter and sugar.'], serve: 'Hot.' });

  X(MX, { id: 'esquites', name: 'Esquites', local: 'Esquites', emoji: '🌽', course: 'snack', level: 1, prep: 5, cook: 10, serves: 4,
    taste: { sweet: 3, sour: 3, spicy: 3, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['street-food', 'quick'],
    desc: 'Charred corn kernels in a cup with mayonnaise, lime, chili powder and crumbly cheese.',
    story: 'The cup version of elote, sold by street vendors across Mexico.',
    equip: ['Frying pan'],
    ing: [[500, 'g', 'sweet corn kernels'], [1, 'tbsp', 'butter'], [3, 'tbsp', 'mayonnaise'], [2, 'tbsp', 'lime juice'], [1, 'tsp', 'chili powder'], [60, 'g', 'cotija or feta'], [2, 'tbsp', 'cilantro']],
    steps: [['Char', '[[char|Char]] the corn in butter until spotted.', 8], ['Mix', 'Toss with mayo, lime, chili, cheese and cilantro.']],
    tips: ['Don’t stir too often: let it char.'], mistakes: ['Wet corn won’t char.'], vars: ['Add epazote.'], serve: 'In cups.' });

  X(MX, { id: 'conchas', name: 'Conchas', local: 'Conchas', emoji: '🐚', course: 'dessert', level: 2, prep: 30, cook: 20, rest: 120, serves: 12,
    taste: { sweet: 4, rich: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['brunch', 'kids'],
    desc: 'Soft Mexican sweet bread buns with a crunchy shell-patterned sugar topping.',
    story: 'The most famous pan dulce, eaten with hot chocolate in the afternoon (merienda).',
    equip: ['Baking tray'],
    ing: [[500, 'g', 'all-purpose flour'], [7, 'g', 'instant yeast'], [80, 'g', 'sugar'], [2, '', 'eggs'], [180, 'ml', 'warm milk'], [80, 'g', 'butter'], [0.5, 'tsp', 'salt'], '#Topping', [100, 'g', 'all-purpose flour'], [100, 'g', 'powdered sugar'], [80, 'g', 'butter'], [1, 'tbsp', 'cocoa powder', 'optional']],
    steps: [['Dough', '[[knead|Knead]] and [[proof]] 1.5 hours.', 90], ['Topping', 'Mix topping to a paste; press discs onto dough balls and score shell patterns.'], ['Bake', 'Rise 30 minutes and bake at {{180C}} 18 minutes.', 18]],
    tips: ['Keep the topping soft and cool.'], mistakes: ['Topping cracks: too dry.'], vars: ['Chocolate conchas.'], serve: 'Hot chocolate.' });

  X(C('Puerto Rico', '🇵🇷', 'Caribbean'), { id: 'mofongo', name: 'Garlic Mofongo', local: 'Mofongo', emoji: '🍌', course: 'main', level: 2, prep: 15, cook: 20, serves: 4,
    taste: { savory: 4, rich: 3, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['deep-fry'], tags: ['comfort'],
    desc: 'Fried green plantains mashed in a wooden pilón with garlic and olive oil, shaped into domes.',
    story: 'Puerto Rico’s beloved dish, descended from West African fufu; usually with pork crackling, here with garlic oil.',
    equip: ['Kadai', 'Mortar (pilón)'],
    ing: [[3, '', 'green plantains', 'chunks'], [1, 'l', 'oil', 'for frying'], [5, 'clove', 'garlic'], [4, 'tbsp', 'olive oil'], [0.75, 'tsp', 'salt'], [120, 'ml', 'vegetable stock', 'warm']],
    steps: [['Fry', '[[deep-fry|Fry]] plantain chunks until golden but not crisp.', 10], ['Mash', '[[pound|Pound]] garlic with salt and oil, add plantains and mash with a splash of stock.'], ['Shape', 'Press into a bowl and turn out as a dome.']],
    tips: ['Mash while hot.'], mistakes: ['Over-fried plantains: dry mofongo.'], vars: ['Stuff with vegetable stew.'], serve: 'With broth or a tomato sauce.' });

  X(C('Jamaica', '🇯🇲', 'Caribbean'), { id: 'rice-and-peas', name: 'Jamaican Rice and Peas', local: 'Rice and peas', emoji: '🍚', course: 'side', level: 1, prep: 10, cook: 30, serves: 4,
    taste: { savory: 4, aromatic: 4, rich: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'one-pot'],
    desc: 'Rice cooked in coconut milk with kidney beans, thyme, allspice and a whole scotch bonnet.',
    story: 'The Sunday side dish of Jamaica; “peas” means kidney beans.',
    equip: ['Pot'],
    ing: [[300, 'g', 'long-grain rice'], [1, 'can', 'red kidney beans (rajma)'], [400, 'ml', 'coconut milk'], [250, 'ml', 'water'], [3, '', 'scallions'], [3, 'sprig', 'thyme'], [4, '', 'allspice or seven-spice'], [1, '', 'scotch bonnet', 'whole'], [2, 'clove', 'garlic'], [1, 'tsp', 'salt']],
    steps: [['Simmer', 'Simmer coconut milk, water, beans, garlic, scallions, thyme, allspice and whole chili 5 minutes.', 5], ['Rice', 'Add rice and salt, cover and cook on low 20 minutes. Remove the chili.', 20]],
    tips: ['Don’t burst the scotch bonnet.'], mistakes: ['Stirring: mushy rice.'], vars: ['Pigeon peas at Christmas.'], serve: 'With curries.' });

  X(C('Brazil', '🇧🇷', 'Latin America'), { id: 'acai-bowl', name: 'Açaí Bowl', local: 'Açaí na tigela', emoji: '🫐', course: 'breakfast', level: 1, prep: 10, cook: 0, serves: 2,
    taste: { sweet: 4, sour: 2 }, diet: ['vegan'], methods: ['no-cook'], tags: ['healthy', 'summer', 'quick'],
    desc: 'Thick frozen açaí berry blended with banana, topped with granola and fruit.',
    story: 'Surfers in Rio popularised açaí bowls from the Amazon in the 1980s.',
    equip: ['Blender'],
    ing: [[200, 'g', 'frozen açaí pulp'], [1, '', 'banana', 'frozen'], [80, 'ml', 'coconut water or water'], [4, 'tbsp', 'granola'], [100, 'g', 'mixed berries'], [1, 'tbsp', 'chia seeds']],
    steps: [['Blend', 'Blend açaí, banana and a little liquid until very thick.'], ['Top', 'Top with granola, fruit and seeds.']],
    tips: ['Minimal liquid: it should be spoonable.'], mistakes: ['Too much liquid: a smoothie.'], vars: ['Add peanut butter.'], serve: 'Immediately.' });

  X(C('Brazil', '🇧🇷', 'Latin America'), { id: 'moqueca-banana', name: 'Moqueca de Banana-da-Terra', local: 'Moqueca de banana-da-terra', emoji: '🍲', course: 'main', level: 1, prep: 15, cook: 25, serves: 4,
    taste: { rich: 4, sweet: 2, aromatic: 4, sour: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['comfort'],
    desc: 'A Bahian stew of ripe plantain, peppers and tomato in coconut milk with red palm oil and lime.',
    story: 'Moqueca is usually fish; the plantain version is a favourite vegetarian moqueca in Bahia.',
    equip: ['Clay pot or wide pan'],
    ing: [[3, '', 'ripe plantains', 'thick slices'], [1, '', 'onion', 'rings'], [1, '', 'red bell pepper', 'rings'], [2, '', 'tomatoes', 'slices'], [3, 'clove', 'garlic'], [400, 'ml', 'coconut milk'], [2, 'tbsp', 'red palm oil or oil'], [1, '', 'lime', 'juice'], [1, 'handful', 'cilantro'], [1, 'tsp', 'salt']],
    steps: [['Layer', 'Layer onion, pepper, tomato and plantain in the pot with garlic and salt.'], ['Simmer', 'Pour over coconut milk and palm oil; cover and [[simmer]] 20 minutes.', 20], ['Finish', 'Add lime and cilantro.']],
    tips: ['Don’t stir: keep the layers.'], mistakes: ['Underripe plantain: starchy.'], vars: ['Add hearts of palm.'], serve: 'Rice and farofa.' });

  X(C('Peru', '🇵🇪', 'Latin America'), { id: 'chicha-morada', name: 'Chicha Morada', local: 'Chicha morada', emoji: '🟣', course: 'drink', level: 1, prep: 10, cook: 45, serves: 6,
    taste: { sweet: 4, sour: 3, aromatic: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['summer', 'party'],
    desc: 'A deep purple Peruvian drink of purple corn simmered with pineapple, cinnamon and cloves, finished with lime.',
    story: 'Purple corn has been grown in the Andes for thousands of years; chicha morada is Peru’s favourite soft drink.',
    equip: ['Large pot', 'Strainer'],
    ing: [[300, 'g', 'dried purple corn (maíz morado)'], [2, 'l', 'water'], [200, 'g', 'pineapple', 'peel and chunks'], [1, '', 'apple', 'quartered'], [1, 'piece', 'cinnamon stick'], [5, '', 'whole cloves'], [150, 'g', 'sugar'], [2, '', 'limes', 'juice']],
    steps: [['Boil', 'Simmer corn, pineapple, apple and spices 45 minutes.', 45], ['Finish', 'Strain, add sugar, cool and add lime juice. Serve cold.']],
    tips: ['Add lime only when cool.'], mistakes: ['Boiling with lime: bitter.'], vars: ['Mazamorra morada: thickened as a pudding.'], serve: 'Iced.' });

  X(C('Colombia', '🇨🇴', 'Latin America'), { id: 'patacones', name: 'Patacones', local: 'Patacones', emoji: '🍌', course: 'snack', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['deep-fry'], tags: ['street-food', 'party'],
    desc: 'Twice-fried smashed green plantain discs, crunchy and salty, topped with hogao tomato sauce or guacamole.',
    story: 'Called tostones in the Caribbean; patacones are served with almost every Colombian meal.',
    equip: ['Kadai', 'Flat-bottomed glass'],
    ing: [[3, '', 'green plantains', '3 cm chunks'], [1, 'l', 'oil', 'for frying'], [1, 'tsp', 'salt'], [150, 'g', 'guacamole']],
    steps: [['First fry', 'Fry chunks until pale golden, 4 minutes.', 4], ['Smash', '[[smash|Smash]] flat with a glass.'], ['Second fry', 'Fry again until crisp; salt.', 4]],
    tips: ['Dip the glass in water to stop sticking.'], mistakes: ['Ripe plantains: soft, not crunchy.'], vars: ['Patacón pisao topped with cheese.'], serve: 'Guacamole or hogao.' });

  X(C('Argentina', '🇦🇷', 'Latin America'), { id: 'alfajores', name: 'Alfajores de Maicena', local: 'Alfajores', emoji: '🍪', course: 'dessert', level: 2, prep: 25, cook: 12, rest: 30, serves: 12,
    taste: { sweet: 5, rich: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['party', 'kids'],
    desc: 'Melt-in-the-mouth cornstarch cookies sandwiched with dulce de leche and rolled in coconut.',
    story: 'Argentina eats more alfajores than anywhere; the cornstarch (maicena) version is the classic home-baked one.',
    equip: ['Round cutter', 'Baking tray'],
    ing: [[200, 'g', 'cornstarch'], [100, 'g', 'all-purpose flour'], [1, 'tsp', 'baking powder'], [100, 'g', 'butter', 'soft'], [80, 'g', 'sugar'], [2, '', 'egg yolks'], [1, 'tsp', 'vanilla extract'], [1, '', 'lemon', 'zest'], [300, 'g', 'dulce de leche'], [40, 'g', 'desiccated coconut']],
    steps: [['Dough', 'Cream butter and sugar, add yolks, vanilla and zest, then the dry ingredients; chill 30 minutes.', 30], ['Bake', 'Roll, cut and bake at {{170C}} 10 minutes without browning.', 10], ['Fill', 'Sandwich with dulce de leche and roll edges in coconut.']],
    tips: ['Don’t let them brown.'], mistakes: ['Overbaking: hard cookies.'], vars: ['Chocolate-dipped alfajores.'], serve: 'With coffee.' });

  X(C('Ecuador', '🇪🇨', 'Latin America'), { id: 'llapingachos', name: 'Llapingachos', local: 'Llapingachos', emoji: '🥔', course: 'main', level: 2, prep: 25, cook: 20, serves: 4,
    taste: { savory: 4, rich: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['comfort'],
    desc: 'Cheese-stuffed potato patties tinted with achiote, griddled golden and served with peanut sauce.',
    story: 'From Ecuador’s highlands, served with salad, avocado and a fried egg.',
    equip: ['Griddle'],
    ing: [[800, 'g', 'floury potatoes', 'boiled, mashed'], [1, 'tsp', 'paprika or achiote'], [1, '', 'onion', 'finely chopped, fried'], [150, 'g', 'mozzarella or queso fresco'], [2, 'tbsp', 'oil'], [0.75, 'tsp', 'salt'], [100, 'ml', 'peanut sauce']],
    steps: [['Mix', 'Mix potato with paprika, onion and salt.'], ['Stuff', 'Shape patties with cheese inside.'], ['Griddle', 'Cook in oil until golden on both sides.', 12]],
    tips: ['Chill patties so they hold.'], mistakes: ['Wet mash: they break.'], vars: ['Serve with fried egg.'], serve: 'Peanut sauce and salad.' });

  X(C('United States', '🇺🇸', 'North America'), { id: 'peach-cobbler', name: 'Peach Cobbler', local: 'Peach cobbler', emoji: '🍑', course: 'dessert', level: 1, prep: 15, cook: 45, serves: 6,
    taste: { sweet: 4, rich: 3, aromatic: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['comfort', 'summer'],
    desc: 'Juicy cinnamon peaches baked under a buttery, golden biscuit topping.',
    story: 'A Southern summer dessert from Georgia, the Peach State.',
    equip: ['Baking dish'],
    ing: [[800, 'g', 'peaches', 'sliced'], [80, 'g', 'sugar'], [1, 'tsp', 'ground cinnamon'], [1, 'tbsp', 'lemon juice'], [150, 'g', 'self-raising flour'], [80, 'g', 'butter', 'cold'], [2, 'tbsp', 'sugar'], [120, 'ml', 'milk']],
    steps: [['Fruit', 'Toss peaches with sugar, cinnamon and lemon in the dish.'], ['Topping', 'Rub butter into flour and sugar, add milk; drop spoonfuls over the fruit.'], ['Bake', 'Bake at {{190C}} 40–45 minutes.', 45]],
    tips: ['Leave gaps for juices to bubble.'], mistakes: ['Underbaked topping: doughy.'], vars: ['Blackberry cobbler.'], serve: 'Vanilla ice cream.' });

  X(C('United States', '🇺🇸', 'North America'), { id: 'buffalo-cauliflower', name: 'Buffalo Cauliflower Bites', local: 'Buffalo cauliflower', emoji: '🥦', course: 'starter', level: 1, prep: 15, cook: 30, serves: 4,
    taste: { spicy: 4, sour: 3, rich: 3 }, diet: ['vegetarian'], methods: ['roast'], tags: ['party', 'kids'],
    desc: 'Oven-crisp battered cauliflower tossed in tangy buffalo hot sauce, with a cool yogurt-herb dip.',
    story: 'The vegetarian take on Buffalo, New York’s famous wings.',
    equip: ['Baking tray'],
    ing: [[1, 'head', 'cauliflower', 'florets'], [80, 'g', 'all-purpose flour'], [120, 'ml', 'milk'], [1, 'tsp', 'garlic powder'], [0.5, 'tsp', 'salt'], [80, 'ml', 'chili sauce', 'buffalo-style'], [30, 'g', 'butter', 'melted'], [150, 'g', 'thick yogurt', 'with dill and garlic']],
    steps: [['Batter', 'Dip florets in flour-milk-garlic batter.'], ['Roast', '[[roast|Roast]] at {{230C}} 20 minutes.', 20], ['Sauce', 'Toss in hot sauce and butter; roast 8 minutes more.', 8]],
    tips: ['Space them out for crispness.'], mistakes: ['Crowding: soggy.'], vars: ['Air-fryer version.'], serve: 'Yogurt dip and celery.' });

  /* ======================= EAST & SOUTHEAST ASIA ======================= */
  X(C('Japan', '🇯🇵', 'East Asia'), { id: 'zaru-soba', name: 'Zaru Soba', local: 'ざるそば', emoji: '🍜', course: 'main', level: 1, prep: 10, cook: 10, serves: 2,
    taste: { umami: 4, savory: 3 }, diet: ['vegan'], methods: ['simmer', 'no-cook'], tags: ['summer', 'quick', 'healthy'],
    desc: 'Chilled buckwheat noodles on a bamboo tray, dipped in cold soy-mirin sauce with scallions and wasabi.',
    story: 'The classic Japanese summer lunch; the noodle cooking water (soba-yu) is drunk afterwards.',
    equip: ['Pot', 'Bamboo tray or plate'],
    ing: [[200, 'g', 'soba noodles'], [150, 'ml', 'kombu-shiitake dashi'], [3, 'tbsp', 'soy sauce'], [2, 'tbsp', 'mirin'], [2, '', 'scallions', 'finely sliced'], [1, 'sheet', 'nori', 'shredded']],
    steps: [['Dipping sauce', 'Simmer dashi, soy and mirin 1 minute; chill.', 2], ['Noodles', 'Cook soba, rinse well in cold water.', 5], ['Serve', 'Top with nori; dip in sauce with scallions.']],
    tips: ['Rinse off the starch.'], mistakes: ['Overcooking: soft noodles.'], vars: ['Tororo soba with grated yam.'], serve: 'Cold.' });

  X(C('South Korea', '🇰🇷', 'East Asia'), { id: 'kongguksu', name: 'Kongguksu', local: '콩국수', emoji: '🥛', course: 'main', level: 2, prep: 15, cook: 25, rest: 480, serves: 2,
    taste: { savory: 3, rich: 4 }, diet: ['vegan', 'high-protein'], methods: ['simmer', 'no-cook'], tags: ['summer', 'healthy'],
    desc: 'Noodles in an ice-cold, creamy broth of blended soybeans, topped with cucumber and sesame.',
    story: 'A Korean summer dish; the soy-milk broth is cooling and rich in protein.',
    equip: ['Pot', 'Blender'],
    ing: [[120, 'g', 'dried soybeans', 'soaked overnight'], [600, 'ml', 'cold water'], [1, 'tbsp', 'toasted sesame seeds'], [0.75, 'tsp', 'salt'], [200, 'g', 'wheat noodles'], [0.5, '', 'cucumber', 'julienned']],
    steps: [['Cook beans', 'Boil the soaked soybeans 10 minutes; peel and cool.', 12], ['Blend', 'Blend with water, sesame and salt until silky; chill.'], ['Serve', 'Pour over cold noodles; top with cucumber.']],
    tips: ['Don’t overboil soybeans: beany taste.'], mistakes: ['Warm broth: serve icy.'], vars: ['Add ice cubes.'], serve: 'With kimchi.' });

  X(C('China', '🇨🇳', 'East Asia'), { id: 'congee', name: 'Vegetable Congee', local: '粥', emoji: '🥣', course: 'breakfast', level: 1, prep: 5, cook: 60, serves: 4,
    taste: { savory: 3, umami: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'healthy'],
    desc: 'Silky rice porridge with ginger, shiitake and greens, topped with scallions, sesame oil and fried shallots.',
    story: 'Comfort food across China and Southeast Asia, eaten for breakfast and when ill.',
    equip: ['Heavy pot'],
    ing: [[150, 'g', 'jasmine rice'], [1.6, 'l', 'water'], [20, 'g', 'ginger', 'julienned'], [6, '', 'dried shiitake', 'soaked, sliced'], [1, 'tsp', 'salt'], [100, 'g', 'bok choy'], [2, '', 'scallions'], [1, 'tsp', 'toasted sesame oil'], [1, 'tbsp', 'tamari (gluten-free soy sauce)']],
    steps: [['Simmer', 'Simmer rice, water, ginger and mushrooms 50 minutes, stirring, until creamy.', 50], ['Greens', 'Add bok choy and salt for 3 minutes.', 3], ['Top', 'Top with scallions, sesame oil and tamari.']],
    tips: ['Freeze the washed rice for faster, creamier congee.'], mistakes: ['Not stirring: sticks.'], vars: ['Century egg congee (not vegan).'], serve: 'Youtiao (fried dough).' });

  X(C('China', '🇨🇳', 'East Asia'), { id: 'tangyuan', name: 'Tangyuan', local: '汤圆', emoji: '⚪', course: 'dessert', level: 2, prep: 30, cook: 10, serves: 4,
    taste: { sweet: 4, rich: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive'],
    desc: 'Chewy glutinous-rice balls filled with black sesame paste, in a ginger syrup.',
    story: 'Eaten at the Lantern Festival and Winter Solstice; their roundness means family reunion.',
    equip: ['Pot'],
    ing: [[200, 'g', 'glutinous rice flour'], [170, 'ml', 'warm water'], [80, 'g', 'black sesame seeds', 'toasted, ground'], [50, 'g', 'sugar'], [40, 'g', 'coconut oil', 'soft'], [600, 'ml', 'water'], [30, 'g', 'ginger', 'sliced'], [60, 'g', 'brown sugar']],
    steps: [['Filling', 'Mix sesame, sugar and coconut oil; chill and roll small balls.', 15], ['Wrap', 'Knead flour and water; wrap each filling ball.'], ['Cook', '[[boil|Boil]] until they float plus 2 minutes; serve in ginger syrup.', 6]],
    tips: ['Chill the filling so it’s easy to wrap.'], mistakes: ['Cracks: dough too dry.'], vars: ['Peanut filling.'], serve: 'Hot, in syrup.' });

  X(C('China', '🇨🇳', 'East Asia'), { id: 'buddhas-delight', name: 'Buddha’s Delight', local: '罗汉斋', emoji: '🥬', course: 'main', level: 2, prep: 25, cook: 20, serves: 4,
    taste: { umami: 4, savory: 4 }, diet: ['vegan'], methods: ['braise'], tags: ['festive', 'healthy'],
    desc: 'A Buddhist vegetable braise of mushrooms, tofu skin, napa cabbage, glass noodles and more in a savoury sauce.',
    story: 'Eaten on the first day of Chinese New Year, when many families avoid meat.',
    equip: ['Wok or clay pot'],
    ing: [[6, '', 'dried shiitake', 'soaked'], [100, 'g', 'firm tofu', 'fried'], [300, 'g', 'napa cabbage'], [1, '', 'carrot'], [100, 'g', 'snow peas'], [50, 'g', 'glass noodles', 'soaked'], [2, 'tbsp', 'oil'], [3, 'clove', 'garlic'], [2, 'tbsp', 'soy sauce'], [1, 'tbsp', 'vegetarian oyster sauce'], [250, 'ml', 'shiitake soaking water']],
    steps: [['Fry', '[[stir-fry|Stir-fry]] garlic, mushrooms and carrot.', 3], ['Braise', 'Add cabbage, tofu, sauces and soaking water; [[braise]] 10 minutes.', 10], ['Finish', 'Add noodles and snow peas for 3 minutes.', 3]],
    tips: ['Use the mushroom water for depth.'], mistakes: ['Overcooked greens.'], vars: ['Add lotus root and wood ear.'], serve: 'Rice.' });

  X(C('Taiwan', '🇹🇼', 'East Asia'), { id: 'douhua', name: 'Douhua (Tofu Pudding)', local: '豆花', emoji: '🍮', course: 'dessert', level: 1, prep: 10, cook: 10, rest: 60, serves: 4,
    taste: { sweet: 3, aromatic: 2 }, diet: ['vegan', 'gluten-free'], methods: ['steam'], tags: ['summer', 'healthy'],
    desc: 'Silky set soy milk pudding in ginger syrup with peanuts and red beans.',
    story: 'Sweet in Taiwan and southern China, savoury in the north; a popular night-market dessert.',
    equip: ['Pot', 'Bowls'],
    ing: [[800, 'ml', 'unsweetened soy milk'], [1, 'tsp', 'agar-agar powder'], [100, 'g', 'brown sugar'], [300, 'ml', 'water'], [20, 'g', 'ginger', 'sliced'], [3, 'tbsp', 'roasted peanuts'], [3, 'tbsp', 'sweet red bean paste (anko)']],
    steps: [['Set', 'Boil soy milk with agar 2 minutes; pour into bowls and set 1 hour.', 60], ['Syrup', 'Simmer brown sugar, water and ginger 8 minutes.', 8], ['Serve', 'Spoon syrup over; top with peanuts and red beans.']],
    tips: ['Agar sets firmer than traditional gypsum; use less for silkier pudding.'], mistakes: ['Too much agar: rubbery.'], vars: ['Savoury douhua with soy and chili.'], serve: 'Warm or chilled.' });

  X(TH, { id: 'khao-soi', name: 'Khao Soi (Vegetarian)', local: 'ข้าวซอย', emoji: '🍜', course: 'main', level: 2, prep: 20, cook: 25, serves: 4,
    taste: { spicy: 3, rich: 5, aromatic: 5, sour: 2 }, diet: ['vegan'], methods: ['simmer', 'deep-fry'], tags: ['comfort', 'impress'],
    desc: 'Chiang Mai’s curry noodle soup: egg-free wheat noodles in a rich coconut curry with tofu, topped with crispy noodles.',
    story: 'Northern Thailand’s signature dish, influenced by Burmese and Chinese Muslim traders.',
    equip: ['Pot', 'Pan'],
    ing: [[3, 'tbsp', 'vegan red curry paste'], [1, 'tsp', 'curry powder'], [400, 'ml', 'coconut milk'], [500, 'ml', 'vegetable stock'], [300, 'g', 'firm tofu', 'cubed'], [2, 'tbsp', 'soy sauce'], [1, 'tbsp', 'palm sugar'], [400, 'g', 'wheat noodles'], [500, 'ml', 'oil', 'to fry some noodles'], [2, '', 'shallots', 'sliced'], [2, '', 'limes'], [3, 'tbsp', 'pickled mustard greens']],
    steps: [['Curry', 'Fry curry paste and powder in coconut cream, add rest of coconut milk, stock, tofu, soy and sugar; [[simmer]] 10 minutes.', 15], ['Crispy noodles', '[[deep-fry|Fry]] a handful of noodles until crisp.', 3], ['Serve', 'Boiled noodles in bowls, curry over, crispy noodles on top, with shallots, lime and pickles.']],
    tips: ['The toppings make the dish.'], mistakes: ['Soggy crispy noodles: add at the table.'], vars: ['Classic chicken khao soi (not vegetarian).'], serve: 'Lime, shallots, pickled mustard greens.' });

  X(TH, { id: 'pad-kra-pao-tofu', name: 'Pad Kra Pao with Tofu', local: 'ผัดกะเพราเต้าหู้', emoji: '🌿', course: 'main', level: 1, prep: 10, cook: 10, serves: 2,
    taste: { spicy: 5, savory: 4, herby: 4 }, diet: ['vegetarian', 'high-protein'], methods: ['stir-fry'], tags: ['quick', 'weeknight'],
    desc: 'Crumbled tofu stir-fried with holy basil, garlic and bird’s eye chilies, served on rice with a crispy fried egg.',
    story: 'Thailand’s most-ordered street lunch; holy basil (kra pao) is the essential herb.',
    equip: ['Wok'],
    ing: [[300, 'g', 'firm tofu', 'crumbled'], [2, 'tbsp', 'oil'], [5, 'clove', 'garlic'], [4, '', 'thai bird’s eye chilies'], [1, 'tbsp', 'soy sauce'], [1, 'tbsp', 'vegetarian oyster sauce'], [1, 'tsp', 'dark soy sauce'], [1, 'tsp', 'sugar'], [1, 'handful', 'thai basil leaves', 'or holy basil'], [2, '', 'eggs', 'fried crispy'], [400, 'g', 'cooked jasmine rice']],
    steps: [['Pound', '[[pound|Pound]] garlic and chilies.'], ['Stir-fry', '[[stir-fry|Stir-fry]] the paste, add tofu and sauces until browned.', 5], ['Basil', 'Toss in basil until wilted; serve with rice and fried egg.', 1]],
    tips: ['Fry the egg in lots of hot oil for crispy edges.'], mistakes: ['Adding basil early: it blackens.'], vars: ['Mushroom kra pao.'], serve: 'Rice and egg.' });

  X(C('Vietnam', '🇻🇳', 'Southeast Asia'), { id: 'che-ba-mau', name: 'Chè Ba Màu', local: 'Chè ba màu', emoji: '🍧', course: 'dessert', level: 2, prep: 25, cook: 40, rest: 60, serves: 4,
    taste: { sweet: 4, rich: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['summer'],
    desc: 'Three-colour Vietnamese dessert of red beans, mung bean paste and green jelly over crushed ice with coconut cream.',
    story: 'A street-cart dessert in Saigon, layered in tall glasses.',
    equip: ['Pots', 'Tall glasses'],
    ing: [[100, 'g', 'adzuki beans', 'cooked with sugar'], [100, 'g', 'split mung beans', 'cooked, mashed with sugar'], [150, 'g', 'agar jelly cubes', 'pandan-flavoured'], [200, 'ml', 'coconut cream', 'with a pinch of salt and sugar'], [2, 'cup', 'crushed ice']],
    steps: [['Prepare', 'Cook adzuki beans soft with sugar; cook mung beans and mash to a paste.', 40], ['Layer', 'Layer red beans, mung paste and jelly in glasses.'], ['Top', 'Top with crushed ice and coconut cream.']],
    tips: ['Chill all layers.'], mistakes: ['Undersweet beans: bland.'], vars: ['Chè chuối (banana).'], serve: 'Stir before eating.' });

  X(C('Indonesia', '🇮🇩', 'Southeast Asia'), { id: 'tempeh-mendoan', name: 'Tempeh Mendoan', local: 'Tempe mendoan', emoji: '🟫', course: 'snack', level: 1, prep: 10, cook: 10, serves: 4,
    taste: { savory: 4, herby: 3 }, diet: ['vegan', 'high-protein'], methods: ['deep-fry'], tags: ['street-food', 'quick'],
    desc: 'Thin tempeh slices in a scallion-coriander batter, fried soft and served with sweet soy and chili.',
    story: 'From Banyumas in Central Java; “mendo” means half-cooked, as the batter stays soft.',
    equip: ['Kadai'],
    ing: [[300, 'g', 'tempeh', 'thin slices'], [100, 'g', 'rice flour'], [2, 'tbsp', 'all-purpose flour'], [150, 'ml', 'water'], [2, 'clove', 'garlic', 'crushed'], [1, 'tsp', 'ground coriander'], [3, '', 'scallions'], [0.5, 'tsp', 'salt'], [500, 'ml', 'oil', 'for frying'], [3, 'tbsp', 'kecap manis']],
    steps: [['Batter', 'Mix flours, water, garlic, coriander, scallions and salt.'], ['Fry', 'Dip tempeh and fry briefly until just set (soft, not crisp).', 6]],
    tips: ['Fry briefly: mendoan stays soft.'], mistakes: ['Over-frying: becomes crispy.'], vars: ['Crispy tempe goreng.'], serve: 'Kecap manis with chili.' });

  X(C('Indonesia', '🇮🇩', 'Southeast Asia'), { id: 'jackfruit-rendang', name: 'Jackfruit Rendang', local: 'Rendang nangka', emoji: '🍛', course: 'main', level: 3, prep: 30, cook: 90, serves: 4,
    taste: { rich: 5, spicy: 3, aromatic: 5 }, diet: ['vegan', 'gluten-free'], methods: ['braise'], tags: ['festive', 'impress'],
    desc: 'Young jackfruit slow-cooked in coconut milk and a lemongrass-galangal-chili paste until dry, dark and caramelized.',
    story: 'Rendang from West Sumatra is traditionally a slow-cooked meat dish; this vegan version uses young jackfruit, as in Javanese gudeg.',
    equip: ['Heavy wok', 'Blender'],
    ing: [[600, 'g', 'young green jackfruit', 'canned, drained'], '#Paste', [8, '', 'shallots'], [4, 'clove', 'garlic'], [30, 'g', 'ginger'], [20, 'g', 'galangal'], [2, 'stalk', 'lemongrass'], [6, '', 'dried red chilies'], [1, 'tsp', 'ground turmeric'], '#Cooking', [3, 'tbsp', 'oil'], [400, 'ml', 'coconut milk'], [4, '', 'makrut lime leaves'], [1, 'piece', 'cinnamon stick'], [3, 'tbsp', 'desiccated coconut', 'toasted'], [1, 'tbsp', 'palm sugar'], [1, 'tsp', 'salt']],
    steps: [['Paste', 'Blend the paste ingredients; fry in oil until fragrant, 8 minutes.', 8], ['Braise', 'Add jackfruit, coconut milk, lime leaves, cinnamon, sugar and salt; [[braise]] on low, stirring often, until nearly dry, 60 minutes.', 60], ['Caramelize', 'Add toasted coconut and fry until dark and dry.', 15]],
    tips: ['Patience: rendang is dry, not saucy.'], mistakes: ['High heat: it burns.'], vars: ['Mushroom rendang.'], serve: 'Rice.' });

  X(C('Singapore', '🇸🇬', 'Southeast Asia'), { id: 'kaya-toast', name: 'Kaya Toast', local: 'Kaya toast', emoji: '🍞', course: 'breakfast', level: 2, prep: 10, cook: 30, serves: 4,
    taste: { sweet: 4, rich: 4 }, diet: ['vegetarian'], methods: ['simmer'], tags: ['brunch'],
    desc: 'Toast with coconut-egg jam (kaya) and slices of cold butter, served with soft-boiled eggs and kopi.',
    story: 'Singapore’s kopitiam breakfast, from Hainanese cooks.',
    equip: ['Double boiler', 'Toaster'],
    ing: [[3, '', 'eggs'], [150, 'ml', 'coconut milk'], [100, 'g', 'sugar'], [2, 'tbsp', 'palm sugar'], [2, '', 'pandan leaves', 'optional'], [8, 'slice', 'white bread'], [60, 'g', 'butter', 'cold, sliced']],
    steps: [['Kaya', 'Whisk eggs, coconut milk and sugars; cook over simmering water with pandan, stirring, until thick, 25 minutes.', 25], ['Toast', 'Toast bread, spread kaya and add cold butter slices.']],
    tips: ['Low heat or it scrambles.'], mistakes: ['Lumpy kaya: blend it.'], vars: ['Green pandan kaya.'], serve: 'Soft-boiled eggs with soy and pepper.' });

  X(C('Philippines', '🇵🇭', 'Southeast Asia'), { id: 'halo-halo', name: 'Halo-Halo', local: 'Halo-halo', emoji: '🍧', course: 'dessert', level: 1, prep: 15, cook: 0, serves: 2,
    taste: { sweet: 5, rich: 3 }, diet: ['vegetarian'], methods: ['no-cook'], tags: ['summer', 'kids'],
    desc: 'Shaved ice layered with sweet beans, jellies, fruit, evaporated milk, ube jam and leche flan, topped with ice cream.',
    story: '“Halo-halo” means “mix-mix”: stir everything together before eating.',
    equip: ['Tall glasses'],
    ing: [[3, 'tbsp', 'sweet red bean paste (anko)'], [3, 'tbsp', 'agar jelly cubes'], [100, 'g', 'mango', 'diced'], [2, 'cup', 'crushed ice'], [120, 'ml', 'evaporated milk'], [2, 'tbsp', 'sugar'], [2, 'scoop', 'vanilla ice cream'], [2, 'tbsp', 'cornflakes or rice crispies']],
    steps: [['Layer', 'Layer beans, jelly and fruit in glasses.'], ['Ice', 'Pack in ice, pour over sweetened evaporated milk.'], ['Top', 'Top with ice cream and crunch.']],
    tips: ['Use ube ice cream if you can find it.'], mistakes: ['Not enough milk: icy.'], vars: ['Add leche flan cubes.'], serve: 'Immediately, mixed.' });

  X(C('Cambodia', '🇰🇭', 'Southeast Asia'), { id: 'tofu-amok', name: 'Tofu Amok', local: 'អាម៉ុក', emoji: '🍃', course: 'main', level: 2, prep: 25, cook: 25, serves: 4,
    taste: { aromatic: 5, rich: 4, sweet: 2 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['steam'], tags: ['impress'],
    desc: 'Tofu steamed in a fragrant lemongrass-galangal coconut custard, traditionally in banana-leaf cups.',
    story: 'Cambodia’s national dish is fish amok; tofu makes a gentle vegetarian version with the same kroeung paste.',
    equip: ['Steamer', 'Banana leaf cups or ramekins', 'Blender'],
    ing: [[400, 'g', 'firm tofu', 'cubes'], [400, 'ml', 'coconut milk'], [2, '', 'eggs'], '#Kroeung paste', [2, 'stalk', 'lemongrass'], [20, 'g', 'galangal'], [3, 'clove', 'garlic'], [3, '', 'shallots'], [1, 'tsp', 'ground turmeric'], [4, '', 'makrut lime leaves'], [1, 'tbsp', 'palm sugar'], [1, 'tbsp', 'tamari (gluten-free soy sauce)'], [0.5, 'tsp', 'salt'], [100, 'g', 'spinach']],
    steps: [['Paste', 'Blend the kroeung paste.'], ['Custard', 'Whisk paste with coconut milk, eggs, sugar, soy and salt; fold in tofu.'], ['Steam', 'Line cups with spinach, fill and [[steam]] 20 minutes until set.', 20]],
    tips: ['Leaf cups add aroma.'], mistakes: ['Over-steaming: curdles.'], vars: ['Mushroom amok.'], serve: 'Jasmine rice.' });

  /* ======================= AFRICA ======================= */
  X(C('Uganda', '🇺🇬', 'Africa'), { id: 'rolex', name: 'Rolex', local: 'Rolex', emoji: '🌯', course: 'breakfast', level: 1, prep: 10, cook: 10, serves: 2,
    taste: { savory: 4 }, diet: ['vegetarian', 'high-protein'], methods: ['saute'], tags: ['street-food', 'quick'],
    desc: 'An omelette with cabbage, tomato and onion, rolled up in a chapati. Uganda’s favourite street snack.',
    story: 'The name comes from “rolled eggs”; Kampala even holds a Rolex festival.',
    equip: ['Frying pan'],
    ing: [[2, '', 'rotis or parathas'], [4, '', 'eggs'], [80, 'g', 'cabbage', 'shredded'], [1, '', 'tomato', 'diced'], [0.5, '', 'onion', 'diced'], [0.5, 'tsp', 'salt'], [2, 'tbsp', 'oil']],
    steps: [['Omelette', 'Beat eggs with vegetables and salt; fry thin omelettes.', 5], ['Roll', 'Place on warm chapatis and roll.']],
    tips: ['Same size omelette as the chapati.'], mistakes: ['Thick omelette: hard to roll.'], vars: ['Add avocado.'], serve: 'Hot.' });

  X(C('Ethiopia', '🇪🇹', 'Africa'), { id: 'gomen', name: 'Gomen', local: 'ጎመን', emoji: '🥬', course: 'side', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { savory: 4, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['healthy', 'budget'],
    desc: 'Ethiopian collard greens slow-cooked with onion, garlic, ginger and green chili.',
    story: 'Part of the colourful fasting platter (beyaynetu) served on injera.',
    equip: ['Pot'],
    ing: [[500, 'g', 'collard greens or kale', 'chopped'], [3, 'tbsp', 'oil'], [1, '', 'red onion', 'chopped'], [3, 'clove', 'garlic'], [1, 'tbsp', 'ginger'], [2, '', 'green chilies'], [150, 'ml', 'water'], [0.75, 'tsp', 'salt']],
    steps: [['Base', 'Cook onion slowly in oil, add garlic and ginger.', 8], ['Greens', 'Add greens, chilies, water and salt; [[simmer]] covered 15 minutes.', 15]],
    tips: ['Cook until very tender.'], mistakes: ['Undercooked collards: tough.'], vars: ['Gomen with potatoes.'], serve: 'Injera and shiro.' });

  X(C('Mozambique', '🇲🇿', 'Africa'), { id: 'matapa', name: 'Matapa', local: 'Matapa', emoji: '🥬', course: 'main', level: 2, prep: 15, cook: 45, serves: 4,
    taste: { rich: 4, savory: 4 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['comfort'],
    desc: 'Pounded cassava (or spinach) leaves slow-cooked with ground peanuts, garlic and coconut milk.',
    story: 'Mozambique’s national dish, often with crab or shrimp; the leaves are pounded in a wooden mortar.',
    equip: ['Pot', 'Blender'],
    ing: [[500, 'g', 'spinach or kale', 'finely chopped'], [150, 'g', 'roasted peanuts', 'ground'], [3, 'clove', 'garlic'], [1, '', 'onion'], [400, 'ml', 'coconut milk'], [200, 'ml', 'water'], [1, 'tsp', 'salt']],
    steps: [['Cook', 'Simmer greens, onion and garlic in water 15 minutes.', 15], ['Peanuts', 'Add ground peanuts, coconut milk and salt; simmer 25 minutes, stirring, until thick.', 25]],
    tips: ['Stir often: peanuts catch.'], mistakes: ['Not cooking long enough: raw peanut taste.'], vars: ['With shrimp on the coast (not vegetarian).'], serve: 'Rice or xima.' });

  X(C('Somalia', '🇸🇴', 'Africa'), { id: 'canjeero', name: 'Canjeero', local: 'Canjeero', emoji: '🫓', course: 'breakfast', level: 1, prep: 10, cook: 20, rest: 480, serves: 4,
    taste: { sour: 2, savory: 2 }, diet: ['vegan'], methods: ['saute'], tags: ['brunch'],
    desc: 'Spongy, slightly sour Somali fermented pancakes, eaten with tea, sugar and sesame oil for breakfast.',
    story: 'A cousin of Ethiopian injera, cooked on one side only, with a spiral pattern.',
    equip: ['Non-stick pan'],
    ing: [[200, 'g', 'all-purpose flour'], [80, 'g', 'cornmeal'], [1, 'tsp', 'instant yeast'], [1, 'tsp', 'sugar'], [450, 'ml', 'warm water'], [0.5, 'tsp', 'salt']],
    steps: [['Ferment', 'Mix to a thin batter; [[ferment]] overnight.', 480], ['Cook', 'Pour into a hot pan and spread in a spiral with the ladle; cover and cook one side until full of holes.', 3]],
    tips: ['Cook one side only.'], mistakes: ['Thick batter: no holes.'], vars: ['With sorghum flour.'], serve: 'Sesame oil, sugar and tea.' });

  X(C('Tunisia', '🇹🇳', 'Africa'), { id: 'lablabi', name: 'Lablabi', local: 'لبلابي', emoji: '🥣', course: 'soup', level: 1, prep: 10, cook: 20, serves: 4,
    taste: { spicy: 3, sour: 3, savory: 4 }, diet: ['vegan', 'high-protein'], methods: ['simmer'], tags: ['winter', 'street-food'],
    desc: 'Tunisian chickpea soup with cumin and garlic, poured over stale bread and topped with harissa, olive oil and lemon.',
    story: 'A cheap, warming breakfast for workers in Tunis, eaten from big bowls.',
    equip: ['Pot'],
    ing: [[2, 'can', 'chickpeas'], [1, 'l', 'vegetable stock'], [4, 'clove', 'garlic', 'crushed'], [2, 'tsp', 'ground cumin'], [0.5, 'tsp', 'salt'], [150, 'g', 'stale bread', 'torn'], [2, 'tbsp', 'harissa or chili flakes'], [4, 'tbsp', 'olive oil'], [1, '', 'lemon'], [1, 'tbsp', 'capers']],
    steps: [['Simmer', 'Simmer chickpeas, stock, garlic, cumin and salt 15 minutes.', 15], ['Serve', 'Pour over bread in bowls; top with harissa, oil, lemon, capers and more cumin.']],
    tips: ['Let each person season their own bowl.'], mistakes: ['Fresh bread turns gluey.'], vars: ['Add a soft-boiled egg (vegetarian).'], serve: 'Hot.' });

  X(C('Morocco', '🇲🇦', 'Africa'), { id: 'chebakia', name: 'Chebakia', local: 'شباكية', emoji: '🌸', course: 'dessert', level: 3, prep: 45, cook: 30, serves: 20,
    taste: { sweet: 5, aromatic: 4, rich: 3 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['festive'],
    desc: 'Flower-shaped sesame cookies with anise and orange blossom, fried and soaked in honey.',
    story: 'Made in huge batches for Ramadan in Morocco, served with harira at iftar.',
    equip: ['Rolling pin', 'Fluted cutter', 'Kadai'],
    ing: [[300, 'g', 'all-purpose flour'], [80, 'g', 'sesame seeds', 'toasted, ground'], [1, 'tsp', 'ground anise'], [1, 'pinch', 'saffron'], [1, '', 'egg'], [50, 'g', 'butter', 'melted'], [2, 'tbsp', 'orange blossom water'], [2, 'tbsp', 'vinegar'], [1, 'l', 'oil', 'for frying'], [300, 'g', 'honey', 'warm'], [2, 'tbsp', 'sesame seeds']],
    steps: [['Dough', '[[knead|Knead]] all dough ingredients smooth.'], ['Shape', 'Roll thin, cut rectangles with 4 slits and fold into flowers.'], ['Fry and soak', '[[deep-fry|Fry]] until golden, then soak in warm honey and sprinkle sesame.', 25]],
    tips: ['Honey must be warm, not hot.'], mistakes: ['Thick dough: soft chebakia.'], vars: ['Baked version.'], serve: 'With harira at iftar.' });

  X(C('Senegal', '🇸🇳', 'Africa'), { id: 'thiakry', name: 'Thiakry', local: 'Thiakry', emoji: '🥣', course: 'dessert', level: 1, prep: 10, cook: 15, rest: 60, serves: 4,
    taste: { sweet: 4, sour: 2, rich: 3 }, diet: ['vegetarian'], methods: ['steam'], tags: ['summer', 'festive'],
    desc: 'Steamed millet couscous folded into sweetened yogurt with nutmeg, vanilla and raisins.',
    story: 'A West African dessert served at Eid and celebrations, eaten chilled.',
    equip: ['Steamer or pot'],
    ing: [[150, 'g', 'couscous', 'or millet couscous'], [200, 'ml', 'boiling water'], [400, 'g', 'yogurt'], [150, 'g', 'sweetened condensed milk'], [0.25, 'tsp', 'nutmeg'], [1, 'tsp', 'vanilla extract'], [2, 'tbsp', 'raisins']],
    steps: [['Couscous', 'Pour boiling water over couscous, cover 5 minutes; fluff and cool.', 5], ['Mix', 'Mix yogurt, condensed milk, nutmeg and vanilla; fold in couscous and raisins; chill.', 60]],
    tips: ['Millet couscous is traditional.'], mistakes: ['Warm couscous: thin mix.'], vars: ['Add coconut.'], serve: 'Chilled.' });
})();
