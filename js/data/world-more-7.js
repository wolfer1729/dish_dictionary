/* World batch 7 (veg-first): Japan, Korea, China, Southeast Asia, the Mediterranean, the Middle East,
   Afghanistan, Pakistan, Bangladesh, Sri Lanka and Nepal. Original recipes written for Dish Dictionary. */
'use strict';
(function () {
  const C = (country, flag, region, extra) => Object.assign({ country, flag, region }, extra || {});
  const X = (base, d) => DD.add(Object.assign({}, base, d));
  const JP = C('Japan', '🇯🇵', 'East Asia'), KR = C('South Korea', '🇰🇷', 'East Asia'), CN = C('China', '🇨🇳', 'East Asia');
  const PH = C('Philippines', '🇵🇭', 'Southeast Asia'), ID = C('Indonesia', '🇮🇩', 'Southeast Asia'), MY = C('Malaysia', '🇲🇾', 'Southeast Asia');
  const IT = C('Italy', '🇮🇹', 'Europe', { styles: ['continental'] }), FR = C('France', '🇫🇷', 'Europe', { styles: ['continental'] }), GR = C('Greece', '🇬🇷', 'Europe');
  const LK = C('Sri Lanka', '🇱🇰', 'South Asia'), NP = C('Nepal', '🇳🇵', 'South Asia'), AF = C('Afghanistan', '🇦🇫', 'South Asia');

  /* ======================= JAPAN ======================= */
  X(JP, { id: 'nasu-dengaku', name: 'Nasu Dengaku', local: '茄子田楽', emoji: '🍆', course: 'side', level: 1, prep: 10, cook: 15, serves: 2,
    taste: { umami: 5, sweet: 3, savory: 4 }, diet: ['vegan'], methods: ['roast'], tags: ['quick', 'impress'],
    desc: 'Halved eggplants roasted until silky, glazed with sweet miso and broiled until bubbling.',
    story: 'Dengaku is any food grilled with miso glaze; it once meant tofu skewers sold at shrines.',
    equip: ['Baking tray'],
    ing: [[2, '', 'japanese eggplants', 'halved, flesh scored'], [1, 'tbsp', 'oil'], [3, 'tbsp', 'white or red miso'], [1, 'tbsp', 'mirin'], [1, 'tbsp', 'sugar'], [1, 'tbsp', 'sake or water'], [1, 'tsp', 'sesame seeds'], [1, '', 'scallion', 'sliced']],
    steps: [['Roast', 'Brush with oil and [[roast]] cut side down at {{220C}} 12 minutes until soft.', 12], ['Glaze', 'Mix miso, mirin, sugar and sake; spread on the cut sides.'], ['Broil', 'Grill until bubbling and spotted, 3 minutes; top with sesame and scallion.', 3]],
    tips: ['Score deeply so it cooks through.'], mistakes: ['Glaze burns fast under the grill.'], vars: ['Tofu or daikon dengaku.'], serve: 'Rice and miso soup.' });

  X(JP, { id: 'hiyayakko', name: 'Hiyayakko', local: '冷奴', emoji: '⬜', course: 'starter', level: 1, prep: 5, cook: 0, serves: 2,
    taste: { umami: 4, savory: 3 }, diet: ['vegan'], methods: ['no-cook'], tags: ['quick', 'summer', 'healthy', 'five'],
    desc: 'Chilled silken tofu topped with ginger, scallion and a splash of soy sauce.',
    story: 'An izakaya summer staple; the tofu is served as cold as possible.',
    equip: ['Plate'],
    ing: [[300, 'g', 'silken tofu', 'chilled'], [1, 'tsp', 'ginger', 'grated'], [1, '', 'scallion', 'finely sliced'], [1, 'tbsp', 'soy sauce'], [1, 'tsp', 'sesame seeds']],
    steps: [['Plate', 'Drain the tofu gently and cut into blocks.'], ['Top', 'Top with ginger, scallion and sesame; pour over soy just before eating.']],
    tips: ['Use the best tofu you can find.'], mistakes: ['Draining roughly: it breaks.'], vars: ['Top with kimchi or chili oil.'], serve: 'Cold, with beer or rice.' });

  X(JP, { id: 'goma-ae', name: 'Spinach Goma-ae', local: 'ほうれん草の胡麻和え', emoji: '🥬', course: 'side', level: 1, prep: 10, cook: 3, serves: 2,
    taste: { umami: 3, sweet: 3, savory: 3 }, diet: ['vegan'], methods: ['simmer', 'no-cook'], tags: ['quick', 'healthy'],
    desc: 'Blanched spinach dressed with a sweet-savoury toasted sesame paste.',
    story: 'A classic small side in Japanese bento boxes and set meals.',
    equip: ['Pot', 'Mortar (suribachi)'],
    ing: [[300, 'g', 'spinach'], [3, 'tbsp', 'sesame seeds', 'toasted'], [1, 'tbsp', 'soy sauce'], [2, 'tsp', 'sugar'], [1, 'tsp', 'mirin']],
    steps: [['Blanch', '[[blanch|Blanch]] spinach 30 seconds; cool in ice water and squeeze dry.', 2], ['Dressing', '[[pound|Grind]] sesame, then mix in soy, sugar and mirin.'], ['Toss', 'Cut spinach into lengths and toss with the dressing.']],
    tips: ['Squeeze well so the dressing clings.'], mistakes: ['Overcooked spinach.'], vars: ['Green beans goma-ae.'], serve: 'Small portions.' });

  X(JP, { id: 'mitarashi-dango', name: 'Mitarashi Dango', local: 'みたらし団子', emoji: '🍡', course: 'dessert', level: 2, prep: 15, cook: 15, serves: 4,
    taste: { sweet: 4, umami: 3 }, diet: ['vegan'], methods: ['simmer', 'grill'], tags: ['kids', 'festive'],
    desc: 'Chewy rice dumplings on skewers, lightly charred and coated in a glossy sweet-soy glaze.',
    story: 'Sold at Kyoto’s Shimogamo shrine; dango are eaten at cherry-blossom viewing (hanami).',
    equip: ['Pot', 'Skewers', 'Griddle'],
    ing: [[200, 'g', 'glutinous rice flour'], [50, 'g', 'silken tofu'], [100, 'ml', 'water'], '#Glaze', [3, 'tbsp', 'sugar'], [2, 'tbsp', 'soy sauce'], [1, 'tbsp', 'mirin'], [1, 'tbsp', 'cornstarch'], [100, 'ml', 'water']],
    steps: [['Dough', 'Mix flour, tofu and water to a soft dough; roll 20 balls.'], ['Boil', '[[simmer|Simmer]] until they float plus 2 minutes; cool in water; skewer 4–5 each.', 6], ['Char and glaze', '[[char|Char]] on a hot griddle; simmer glaze ingredients until glossy and pour over.', 6]],
    tips: ['Tofu keeps dango soft for longer.'], mistakes: ['Thin glaze: let it thicken.'], vars: ['Anko or matcha dango.'], serve: 'With green tea.' });

  X(JP, { id: 'taiyaki', name: 'Taiyaki', local: 'たい焼き', emoji: '🐟', course: 'dessert', level: 2, prep: 15, cook: 20, serves: 6,
    taste: { sweet: 4, rich: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['kids', 'street-food'],
    desc: 'Fish-shaped cakes with a crisp edge, filled with sweet red bean paste. No fish involved.',
    story: 'Tai (sea bream) is a lucky fish in Japan; the shape has been sold at festivals since 1909.',
    equip: ['Taiyaki pan'],
    ing: [[150, 'g', 'all-purpose flour'], [1, 'tsp', 'baking powder'], [2, 'tbsp', 'sugar'], [1, '', 'egg'], [180, 'ml', 'milk'], [1, 'tbsp', 'oil'], [250, 'g', 'sweet red bean paste (anko)']],
    steps: [['Batter', '[[whisk|Whisk]] all except anko into a smooth batter.'], ['Fill', 'Oil the hot mould, half-fill with batter, add anko and cover with more batter.'], ['Cook', 'Close and cook 3 minutes per side until golden.', 18]],
    tips: ['Moderate heat for a crisp shell.'], mistakes: ['Overfilling: leaks.'], vars: ['Custard or chocolate filling.'], serve: 'Hot.' });

  X(JP, { id: 'kakigori', name: 'Kakigōri', local: 'かき氷', emoji: '🍧', course: 'dessert', level: 1, prep: 15, cook: 5, serves: 2,
    taste: { sweet: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'kids'],
    desc: 'Feathery shaved ice drenched in strawberry or matcha syrup and condensed milk.',
    story: 'Eaten by Heian aristocrats a thousand years ago; now the symbol of Japanese summer festivals.',
    equip: ['Ice shaver or blender'],
    ing: [[4, 'cup', 'ice'], [150, 'g', 'strawberries'], [60, 'g', 'sugar'], [3, 'tbsp', 'sweetened condensed milk']],
    steps: [['Syrup', 'Simmer strawberries and sugar 5 minutes; blend and cool.', 5], ['Shave', 'Shave ice into a fluffy mound.'], ['Top', 'Pour over syrup and condensed milk.']],
    tips: ['Freeze the bowls first.'], mistakes: ['Crushed ice is crunchy: shave it fine.'], vars: ['Uji kintoki with matcha and anko.'], serve: 'Immediately.' });

  /* ======================= KOREA ======================= */
  X(KR, { id: 'gyeranjjim', name: 'Gyeranjjim', local: '계란찜', emoji: '🥚', course: 'side', level: 1, prep: 5, cook: 10, serves: 2,
    taste: { savory: 4, umami: 3 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['steam'], tags: ['quick', 'comfort'],
    desc: 'Fluffy Korean steamed eggs that puff over the pot, with scallion and sesame.',
    story: 'Served bubbling in a stone pot (ttukbaegi) at Korean barbecue restaurants to cool the spice.',
    equip: ['Small pot with lid'],
    ing: [[4, '', 'eggs'], [200, 'ml', 'water'], [0.5, 'tsp', 'salt'], [1, '', 'scallion', 'sliced'], [1, 'tsp', 'sesame oil'], [1, 'tsp', 'sesame seeds']],
    steps: [['Mix', '[[whisk|Whisk]] eggs, water and salt.'], ['Cook', 'Bring to a simmer, stirring, until it starts to set; add scallion, cover and cook on lowest heat 5 minutes until puffed.', 8], ['Finish', 'Drizzle sesame oil and seeds.']],
    tips: ['Lid on for the puff.'], mistakes: ['High heat: burnt bottom.'], vars: ['Steam in a bowl for a silky version.'], serve: 'With rice and banchan.' });

  X(KR, { id: 'hobak-jeon', name: 'Hobak Jeon', local: '호박전', emoji: '🥒', course: 'side', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { savory: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['festive', 'quick'],
    desc: 'Zucchini rounds dipped in flour and egg and pan-fried golden, with a soy-vinegar dip.',
    story: 'One of the jeon made for Chuseok and Lunar New Year ancestral tables.',
    equip: ['Frying pan'],
    ing: [[2, '', 'zucchini', '0.5 cm rounds'], [0.5, 'tsp', 'salt'], [40, 'g', 'flour'], [2, '', 'eggs', 'beaten'], [2, 'tbsp', 'oil'], [2, 'tbsp', 'soy sauce'], [1, 'tbsp', 'rice vinegar']],
    steps: [['Salt', 'Salt the zucchini 10 minutes; pat dry.', 10], ['Coat', '[[dredge|Dredge]] in flour, then egg.'], ['Fry', 'Pan-fry on medium until golden, 2 minutes per side.', 10]],
    tips: ['Medium heat keeps the egg yellow.'], mistakes: ['Wet zucchini: coating slides off.'], vars: ['Mushroom or tofu jeon.'], serve: 'Soy-vinegar dip.' });

  X(KR, { id: 'dubu-jorim', name: 'Dubu Jorim', local: '두부조림', emoji: '🟥', course: 'side', level: 1, prep: 10, cook: 15, serves: 3,
    taste: { spicy: 3, umami: 4, sweet: 2 }, diet: ['vegan', 'high-protein'], methods: ['braise'], tags: ['weeknight', 'meal-prep'],
    desc: 'Pan-fried tofu slices braised in a spicy soy, garlic and gochugaru sauce.',
    story: 'A banchan staple in Korean lunchboxes; the sauce reduces into a sticky glaze.',
    equip: ['Frying pan'],
    ing: [[400, 'g', 'firm tofu', '1 cm slices'], [2, 'tbsp', 'oil'], [3, 'tbsp', 'soy sauce'], [1, 'tbsp', 'gochugaru'], [1, 'tbsp', 'sugar'], [3, 'clove', 'garlic'], [120, 'ml', 'water'], [2, '', 'scallions'], [1, 'tsp', 'sesame oil']],
    steps: [['Fry', 'Pan-fry tofu until golden on both sides.', 8], ['Braise', 'Pour over the mixed sauce and [[braise]], spooning, until reduced, 6 minutes.', 6], ['Finish', 'Top with scallions and sesame oil.']],
    tips: ['Pat tofu dry for a good crust.'], mistakes: ['Moving tofu too early: it sticks.'], vars: ['Mild soy-only version for kids.'], serve: 'Rice.' });

  X(KR, { id: 'patbingsu', name: 'Patbingsu', local: '팥빙수', emoji: '🍧', course: 'dessert', level: 1, prep: 10, cook: 0, serves: 2,
    taste: { sweet: 4, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['summer'],
    desc: 'Milky shaved ice piled with sweet red beans, rice cakes and condensed milk.',
    story: 'Korea’s summer dessert; cafés serve towering bowls for sharing.',
    equip: ['Blender or ice shaver'],
    ing: [[300, 'ml', 'milk', 'frozen in cubes'], [150, 'g', 'sweet red bean paste (anko)'], [60, 'g', 'mochi or rice cake', 'small pieces'], [3, 'tbsp', 'sweetened condensed milk'], [2, 'tbsp', 'roasted soybean powder (injeolmi)', 'optional']],
    steps: [['Shave', 'Shave or blend the frozen milk to fluffy snow.'], ['Top', 'Pile beans and rice cake on top; drizzle condensed milk and dust soybean powder.']],
    tips: ['Frozen milk gives creamy “snow”.'], mistakes: ['Over-blending: slush.'], vars: ['Mango or injeolmi bingsu.'], serve: 'Share immediately.' });

  /* ======================= CHINA ======================= */
  X(CN, { id: 'dan-dan-noodles', name: 'Dan Dan Noodles (Vegetarian)', local: '担担面', emoji: '🌶️', course: 'main', level: 2, prep: 15, cook: 15, serves: 2,
    taste: { spicy: 4, umami: 4, rich: 4, aromatic: 3 }, diet: ['vegan'], methods: ['stir-fry'], tags: ['weeknight'],
    desc: 'Sichuan noodles in a sesame-chili oil sauce with numbing peppercorn, topped with crispy mushroom “mince” and preserved mustard greens.',
    story: 'Named after the shoulder pole (dan) vendors once carried through Chengdu.',
    equip: ['Pot', 'Wok'],
    ing: [[200, 'g', 'wheat noodles'], [150, 'g', 'mushrooms', 'finely chopped'], [1, 'tbsp', 'oil'], [2, 'tbsp', 'preserved mustard greens (ya cai)'], [1, 'tbsp', 'soy sauce'], '#Sauce', [2, 'tbsp', 'chinese sesame paste or tahini'], [2, 'tbsp', 'chili oil'], [1, 'tbsp', 'soy sauce'], [1, 'tsp', 'black vinegar'], [1, 'tsp', 'sugar'], [0.5, 'tsp', 'sichuan pepper', 'toasted, ground'], [2, '', 'scallions'], [100, 'g', 'bok choy']],
    steps: [['Topping', '[[stir-fry|Stir-fry]] mushrooms until crisp and brown; add ya cai and soy.', 8], ['Sauce', 'Mix sauce ingredients in two bowls.'], ['Noodles', 'Cook noodles and bok choy; add to bowls, top with mushrooms and scallions; toss.', 5]],
    tips: ['Fry the mushrooms until really crisp.'], mistakes: ['Too much sesame: claggy.'], vars: ['Pork topping (not vegetarian).'], serve: 'Toss well at the table.' });

  X(CN, { id: 'liangpi', name: 'Liangpi', local: '凉皮', emoji: '🍜', course: 'main', level: 3, prep: 30, cook: 20, rest: 240, serves: 3,
    taste: { sour: 4, spicy: 4, savory: 3 }, diet: ['vegan'], methods: ['steam', 'no-cook'], tags: ['summer', 'street-food'],
    desc: 'Xi’an’s cold, slippery wheat-starch noodles with cucumber, gluten pieces, chili oil, vinegar and garlic.',
    story: 'Shaanxi street food: the washed-out starch becomes noodles and the gluten (mianjin) goes in too.',
    equip: ['Shallow tin', 'Steamer'],
    ing: [[400, 'g', 'bread flour'], [250, 'ml', 'water'], [0.5, 'tsp', 'salt'], [1, '', 'cucumber', 'julienned'], [4, 'tbsp', 'chili oil'], [3, 'tbsp', 'black vinegar'], [2, 'tbsp', 'soy sauce'], [3, 'clove', 'garlic', 'crushed in water'], [1, 'tsp', 'sugar'], [2, 'tbsp', 'cilantro']],
    steps: [['Wash', 'Knead flour and water; rest 30 minutes, then wash the dough in water until only gluten remains; let the starchy water settle 4 hours.', 240], ['Steam', 'Pour off the clear top, stir the starch, pour thin layers into an oiled tin and [[steam]] 2–3 minutes each.', 15], ['Assemble', 'Cut sheets into noodles; steam the gluten and cube it; dress everything with the sauce and cucumber.']],
    tips: ['Thin layers give silky noodles.'], mistakes: ['Thick layer: rubbery.'], vars: ['Buy ready-made liangpi sheets.'], serve: 'Cold.' });

  X(CN, { id: 'hot-and-sour-soup', name: 'Hot and Sour Soup (Vegetarian)', local: '酸辣汤', emoji: '🥣', course: 'soup', level: 1, prep: 15, cook: 15, serves: 4,
    taste: { sour: 4, spicy: 3, umami: 4 }, diet: ['vegetarian', 'high-protein'], methods: ['simmer'], tags: ['winter', 'quick'],
    desc: 'Peppery, vinegary soup with tofu, shiitake, wood ear, bamboo shoots and silky egg ribbons.',
    story: 'A northern Chinese soup; the heat comes from white pepper, not chili.',
    equip: ['Pot'],
    ing: [[1, 'l', 'vegetable stock'], [6, '', 'dried shiitake', 'soaked, sliced'], [10, 'g', 'dried wood ear', 'soaked, sliced'], [80, 'g', 'bamboo shoots', 'julienned'], [200, 'g', 'firm tofu', 'strips'], [2, 'tbsp', 'soy sauce'], [4, 'tbsp', 'black vinegar'], [1, 'tsp', 'white pepper'], [3, 'tbsp', 'cornstarch', 'in 4 tbsp water'], [2, '', 'eggs', 'beaten'], [1, 'tsp', 'sesame oil'], [2, '', 'scallions']],
    steps: [['Simmer', 'Simmer stock, mushrooms, wood ear, bamboo and tofu 8 minutes; add soy.', 8], ['Thicken', 'Stir in cornstarch slurry until glossy.', 2], ['Egg', 'Drizzle egg in a thin stream while stirring gently; add vinegar, pepper, sesame oil and scallions off the heat.', 2]],
    tips: ['Add vinegar at the end so it stays sharp.'], mistakes: ['Stirring hard: no ribbons.'], vars: ['Vegan without egg.'], serve: 'Hot.' });

  X(CN, { id: 'jian-dui', name: 'Jian Dui (Sesame Balls)', local: '煎堆', emoji: '⚪', course: 'dessert', level: 2, prep: 25, cook: 20, serves: 12,
    taste: { sweet: 4, rich: 3 }, diet: ['vegan'], methods: ['deep-fry'], tags: ['festive', 'party'],
    desc: 'Hollow, chewy glutinous rice balls coated in sesame, filled with red bean paste and fried until puffed.',
    story: 'A dim sum favourite and Lunar New Year treat; they puff up as they fry, a sign of prosperity.',
    equip: ['Kadai'],
    ing: [[250, 'g', 'glutinous rice flour'], [60, 'g', 'sugar'], [180, 'ml', 'hot water'], [200, 'g', 'sweet red bean paste (anko)'], [60, 'g', 'sesame seeds'], [1, 'l', 'oil', 'for frying']],
    steps: [['Dough', 'Dissolve sugar in hot water; mix with flour to a soft dough.'], ['Fill and coat', 'Wrap balls of anko in dough; roll in wet hands then sesame.'], ['Fry', '[[deep-fry|Fry]] on low, pressing gently with a ladle so they puff, 10 minutes.', 15]],
    tips: ['Low oil temperature lets them expand.'], mistakes: ['Hot oil: they crack.'], vars: ['Lotus seed filling.'], serve: 'Warm.' });

  X(CN, { id: 'veg-baozi', name: 'Vegetable Baozi', local: '素包子', emoji: '🥟', course: 'breakfast', level: 3, prep: 45, cook: 15, rest: 75, serves: 6,
    taste: { savory: 4, umami: 4 }, diet: ['vegan'], methods: ['steam'], tags: ['brunch', 'make-ahead'],
    desc: 'Fluffy steamed buns filled with bok choy, shiitake, glass noodles and tofu.',
    story: 'Chinese breakfast from street steamers; Buddhist temples make the all-vegetable version.',
    equip: ['Steamer'],
    ing: [[400, 'g', 'all-purpose flour'], [5, 'g', 'instant yeast'], [1, 'tbsp', 'sugar'], [220, 'ml', 'warm water'], [300, 'g', 'bok choy', 'blanched, chopped, squeezed'], [6, '', 'dried shiitake', 'soaked, diced'], [150, 'g', 'firm tofu', 'diced'], [40, 'g', 'glass noodles', 'soaked, chopped'], [2, 'tbsp', 'soy sauce'], [1, 'tbsp', 'sesame oil'], [1, 'tsp', 'ginger'], [0.5, 'tsp', 'salt']],
    steps: [['Dough', '[[knead|Knead]] flour, yeast, sugar and water; [[proof]] 1 hour.', 60], ['Filling', 'Mix the filling ingredients.'], ['Shape', 'Roll circles, fill and pleat closed; rest 15 minutes.', 15], ['Steam', '[[steam|Steam]] 12 minutes; rest 3 before opening.', 15]],
    tips: ['Squeeze the greens dry.'], mistakes: ['Opening the lid at once: buns wrinkle.'], vars: ['Pork baozi (not vegetarian).'], serve: 'Soy-vinegar dip.' });

  X(CN, { id: 'dry-fried-green-beans', name: 'Dry-Fried Green Beans', local: '干煸四季豆', emoji: '🫛', course: 'side', level: 2, prep: 10, cook: 12, serves: 3,
    taste: { savory: 4, spicy: 3, umami: 4 }, diet: ['vegan'], methods: ['stir-fry'], tags: ['weeknight'],
    desc: 'Sichuan green beans fried until blistered and wrinkled, then tossed with garlic, chilies and preserved vegetables.',
    story: '“Dry-frying” means cooking without sauce so the beans concentrate their flavour.',
    equip: ['Wok'],
    ing: [[400, 'g', 'green beans', 'trimmed'], [3, 'tbsp', 'oil'], [6, '', 'dried red chilies'], [1, 'tsp', 'sichuan pepper'], [3, 'clove', 'garlic'], [2, 'tbsp', 'preserved mustard greens (ya cai)'], [1, 'tbsp', 'soy sauce'], [0.5, 'tsp', 'sugar']],
    steps: [['Blister', '[[stir-fry|Fry]] beans in oil on medium-high until wrinkled and spotted, 8 minutes; set aside.', 8], ['Aromatics', 'Fry chilies, Sichuan pepper and garlic 30 seconds; add ya cai.', 1], ['Toss', 'Return beans with soy and sugar; toss 1 minute.', 1]],
    tips: ['Dry the beans so they blister.'], mistakes: ['Crowding: they steam.'], vars: ['With minced pork (not vegetarian).'], serve: 'Rice.' });

  X(CN, { id: 'zongzi', name: 'Zongzi (Red Bean)', local: '粽子', emoji: '🍃', course: 'snack', level: 3, prep: 40, cook: 120, rest: 480, serves: 8,
    taste: { sweet: 3, savory: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'make-ahead'],
    desc: 'Pyramids of sticky rice and red beans wrapped in bamboo leaves and boiled for hours.',
    story: 'Eaten at the Dragon Boat Festival in memory of the poet Qu Yuan.',
    equip: ['Large pot', 'Kitchen string'],
    ing: [[500, 'g', 'glutinous rice', 'soaked overnight'], [150, 'g', 'adzuki beans', 'soaked overnight'], [0.5, 'tsp', 'salt'], [24, '', 'dried bamboo leaves', 'soaked'], [3, 'l', 'water'], [4, 'tbsp', 'sugar', 'to dip']],
    steps: [['Mix', 'Mix drained rice, beans and salt.'], ['Wrap', 'Fold two overlapping leaves into a cone, fill, fold over and tie into a pyramid.'], ['Boil', '[[simmer|Simmer]] fully covered in water 2 hours, topping up.', 120]],
    tips: ['Tie tightly so water stays out.'], mistakes: ['Loose wrapping: soggy rice.'], vars: ['Savoury zongzi with mushrooms and peanuts.'], serve: 'Dipped in sugar.' });

  X(CN, { id: 'mooncakes', name: 'Lotus Seed Mooncakes', local: '月饼', emoji: '🥮', course: 'dessert', level: 3, prep: 60, cook: 20, rest: 1440, serves: 12,
    taste: { sweet: 4, rich: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['festive', 'impress'],
    desc: 'Cantonese mooncakes with a thin golden syrup crust around sweet lotus seed paste, pressed in a patterned mould.',
    story: 'Shared at the Mid-Autumn Festival under the full moon; this version skips the salted egg yolk.',
    equip: ['Mooncake mould', 'Baking tray'],
    ing: [[150, 'g', 'all-purpose flour'], [100, 'g', 'golden syrup'], [40, 'g', 'oil'], [0.5, 'tsp', 'lye water or baking soda in water'], [600, 'g', 'lotus seed paste'], [1, '', 'egg yolk', 'with 1 tbsp water, to glaze']],
    steps: [['Dough', 'Mix syrup, oil and lye water; add flour to a soft dough; rest 2 hours.', 120], ['Wrap', 'Wrap 50 g paste balls in 15 g dough; press into the mould.'], ['Bake', 'Bake at {{180C}} 5 minutes, glaze thinly, bake 12 more.', 17], ['Rest', 'Rest 1–2 days in a box until the crust softens and shines.', 1440]],
    tips: ['Rest them: the crust turns soft and glossy.'], mistakes: ['Thick glaze hides the pattern.'], vars: ['Snow-skin mooncakes (no bake).'], serve: 'Thin wedges with tea.' });

  /* ======================= SOUTHEAST ASIA ======================= */
  X(MY, { id: 'veg-laksa', name: 'Curry Laksa (Vegetarian)', local: 'Kari laksa', emoji: '🍜', course: 'main', level: 2, prep: 20, cook: 25, serves: 4,
    taste: { spicy: 4, rich: 5, aromatic: 5 }, diet: ['vegan'], methods: ['simmer'], tags: ['comfort', 'impress'],
    desc: 'Rich coconut curry noodle soup with tofu puffs, bean sprouts and both rice and egg-free noodles, topped with sambal and mint.',
    story: 'Peranakan (Straits Chinese) food from Malaysia and Singapore; usually with prawns and cockles.',
    equip: ['Pot', 'Blender'],
    ing: [[3, '', 'shallots'], [3, 'clove', 'garlic'], [20, 'g', 'galangal'], [2, 'stalk', 'lemongrass'], [6, '', 'dried red chilies', 'soaked'], [6, '', 'candlenuts or macadamias'], [1, 'tsp', 'ground turmeric'], [1, 'tbsp', 'ground coriander'], [3, 'tbsp', 'oil'], [400, 'ml', 'coconut milk'], [700, 'ml', 'vegetable stock'], [1, 'tbsp', 'sugar'], [1, 'tsp', 'salt'], [200, 'g', 'tofu puffs', 'halved'], [300, 'g', 'rice vermicelli', 'soaked'], [150, 'g', 'bean sprouts'], [1, 'handful', 'mint (laksa leaf)'], [2, 'tbsp', 'sambal oelek'], [1, '', 'lime']],
    steps: [['Paste', 'Blend shallots, garlic, galangal, lemongrass, chilies, nuts and spices; fry in oil until fragrant and the oil splits, 8 minutes.', 8], ['Soup', 'Add stock, coconut milk, sugar, salt and tofu puffs; [[simmer]] 10 minutes.', 10], ['Serve', 'Noodles and sprouts in bowls, ladle over soup, top with mint, sambal and lime.']],
    tips: ['Fry the paste well: that’s the depth.'], mistakes: ['Boiling hard after coconut: it splits.'], vars: ['Asam laksa (tamarind, fish-based).'], serve: 'Hot.' });

  X(MY, { id: 'rojak', name: 'Fruit Rojak', local: 'Rojak buah', emoji: '🍍', course: 'salad', level: 1, prep: 15, cook: 0, serves: 4,
    taste: { sweet: 4, sour: 3, spicy: 3, umami: 2 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'street-food'],
    desc: 'Pineapple, green mango, cucumber and jicama tossed in a thick tamarind-palm sugar-chili dressing with crushed peanuts.',
    story: '“Rojak” means mixture in Malay; the hawker version uses shrimp paste, left out here.',
    equip: ['Bowl'],
    ing: [[200, 'g', 'pineapple'], [1, '', 'green mango'], [1, '', 'cucumber'], [150, 'g', 'jicama or apple'], [3, 'tbsp', 'tamarind paste'], [3, 'tbsp', 'palm sugar'], [1, 'tbsp', 'chili paste'], [1, 'tbsp', 'tamari (gluten-free soy sauce)'], [1, '', 'lime', 'juice'], [4, 'tbsp', 'roasted peanuts', 'crushed'], [1, 'tbsp', 'sesame seeds']],
    steps: [['Dressing', 'Mix tamarind, palm sugar, chili, tamari and lime until thick.'], ['Toss', 'Cut fruit into bite-size pieces and toss; top with peanuts and sesame.']],
    tips: ['Thick, sticky dressing.'], mistakes: ['Dressing too early: watery.'], vars: ['Indonesian rujak.'], serve: 'Right away.' });

  X(ID, { id: 'sayur-lodeh', name: 'Sayur Lodeh', local: 'Sayur lodeh', emoji: '🥘', course: 'main', level: 1, prep: 15, cook: 25, serves: 4,
    taste: { rich: 4, savory: 4, aromatic: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'healthy'],
    desc: 'Javanese vegetable stew in turmeric coconut milk with long beans, jackfruit, eggplant, chayote and tofu.',
    story: 'Served at Javanese gatherings and with lontong (pressed rice cakes) for Eid.',
    equip: ['Pot', 'Blender'],
    ing: [[4, '', 'shallots'], [3, 'clove', 'garlic'], [4, '', 'candlenuts or macadamias'], [20, 'g', 'galangal'], [1, 'tsp', 'ground coriander'], [1, 'tsp', 'ground turmeric'], [2, 'tbsp', 'oil'], [2, '', 'bay leaves'], [1, 'stalk', 'lemongrass'], [400, 'ml', 'coconut milk'], [400, 'ml', 'water'], [150, 'g', 'long beans'], [1, '', 'eggplant'], [1, '', 'chayote or zucchini'], [200, 'g', 'young green jackfruit', 'canned'], [200, 'g', 'firm tofu', 'fried'], [1, 'tbsp', 'palm sugar'], [1, 'tsp', 'salt']],
    steps: [['Paste', 'Blend shallots, garlic, nuts, galangal and spices; fry with bay leaves and lemongrass until fragrant.', 6], ['Simmer', 'Add water, vegetables and jackfruit; [[simmer]] 10 minutes.', 10], ['Coconut', 'Add coconut milk, tofu, sugar and salt; simmer gently 6 minutes.', 6]],
    tips: ['Stir while the coconut heats.'], mistakes: ['Boiling hard: curdled coconut.'], vars: ['Add rice cakes (lontong).'], serve: 'Rice or lontong.' });

  X(ID, { id: 'tumis-kangkung', name: 'Tumis Kangkung', local: 'Tumis kangkung', emoji: '🌿', course: 'side', level: 1, prep: 10, cook: 5, serves: 3,
    taste: { savory: 4, spicy: 3, umami: 3 }, diet: ['vegan', 'gluten-free'], methods: ['stir-fry'], tags: ['quick', 'healthy', 'weeknight'],
    desc: 'Water spinach flash-fried with garlic, shallots, chili and a little tamari.',
    story: 'An everyday green across Indonesia and Malaysia; the hawker version (belacan) uses shrimp paste.',
    equip: ['Wok'],
    ing: [[400, 'g', 'water spinach (kangkung) or spinach'], [2, 'tbsp', 'oil'], [4, 'clove', 'garlic'], [2, '', 'shallots'], [2, '', 'red chilies'], [1, 'tbsp', 'tamari (gluten-free soy sauce)'], [1, 'tsp', 'sugar']],
    steps: [['Aromatics', '[[stir-fry|Fry]] garlic, shallots and chili 1 minute.', 1], ['Greens', 'Add stems first, then leaves, tamari and sugar; toss on high heat 2 minutes.', 2]],
    tips: ['Very hot wok, very short time.'], mistakes: ['Overcooked: slimy.'], vars: ['Kangkung belacan (not vegetarian).'], serve: 'Rice.' });

  X(PH, { id: 'turon', name: 'Turon', local: 'Turon', emoji: '🍌', course: 'dessert', level: 1, prep: 15, cook: 15, serves: 6,
    taste: { sweet: 5, rich: 3 }, diet: ['vegan'], methods: ['deep-fry'], tags: ['street-food', 'kids'],
    desc: 'Banana and jackfruit wrapped in spring roll wrappers, fried and glazed in crackly caramel.',
    story: 'Filipino merienda sold on sticks by street vendors along with banana cue.',
    equip: ['Kadai'],
    ing: [[6, '', 'saba bananas or small plantains', 'halved lengthwise'], [100, 'g', 'ripe jackfruit', 'strips'], [12, '', 'spring roll wrappers'], [100, 'g', 'brown sugar'], [500, 'ml', 'oil', 'for frying']],
    steps: [['Roll', 'Roll banana and jackfruit in sugar, then in wrappers; seal with water.'], ['Fry', 'Fry until golden; sprinkle the rest of the sugar into the oil so it caramelizes around the rolls.', 12]],
    tips: ['Remove quickly once the caramel coats.'], mistakes: ['Burnt sugar: bitter.'], vars: ['Turon with ube.'], serve: 'Warm.' });

  X(PH, { id: 'ube-halaya', name: 'Ube Halaya', local: 'Ube halaya', emoji: '🟣', course: 'dessert', level: 2, prep: 15, cook: 40, serves: 8,
    taste: { sweet: 4, rich: 5 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive'],
    desc: 'Purple yam jam cooked down with coconut milk, condensed milk and butter until thick and glossy.',
    story: 'A Filipino Christmas dessert and the base of ube cakes and halo-halo.',
    equip: ['Non-stick pan'],
    ing: [[500, 'g', 'purple yam (ube)', 'boiled, grated'], [400, 'ml', 'coconut milk'], [200, 'g', 'sweetened condensed milk'], [40, 'g', 'butter'], [0.25, 'tsp', 'salt']],
    steps: [['Cook', 'Cook everything on low, stirring constantly, until very thick and it pulls from the pan, 35 minutes.', 35], ['Set', 'Press into a buttered dish and cool.']],
    tips: ['Keep stirring: it catches.'], mistakes: ['Undercooked: runny.'], vars: ['Ube with cheese on top.'], serve: 'Chilled or in halo-halo.' });

  X(PH, { id: 'biko', name: 'Biko', local: 'Biko', emoji: '🍚', course: 'dessert', level: 1, prep: 10, cook: 45, serves: 8,
    taste: { sweet: 5, rich: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer', 'bake'], tags: ['festive', 'party'],
    desc: 'Sticky rice cake cooked in coconut milk and brown sugar, topped with toasted coconut curds (latik).',
    story: 'Served at Filipino fiestas and birthdays; latik is coconut cream cooked until it separates into crispy curds.',
    equip: ['Pot', 'Baking dish'],
    ing: [[400, 'g', 'glutinous rice'], [500, 'ml', 'water'], [600, 'ml', 'coconut milk'], [200, 'g', 'brown sugar'], [0.25, 'tsp', 'salt'], [200, 'ml', 'coconut cream', 'for latik']],
    steps: [['Rice', 'Cook rice in water until absorbed, 15 minutes.', 15], ['Caramel', 'Cook coconut milk, sugar and salt until thick; fold in the rice and cook until sticky.', 15], ['Latik', 'Cook coconut cream until it splits into golden curds; spread the rice in a dish and top.', 15]],
    tips: ['Stir hard: it gets heavy.'], mistakes: ['Raw rice: cook it first.'], vars: ['Bake with a caramel topping.'], serve: 'Room temperature.' });

  X(C('Vietnam', '🇻🇳', 'Southeast Asia'), { id: 'xoi-xeo', name: 'Xôi Xéo', local: 'Xôi xéo', emoji: '🟡', course: 'breakfast', level: 2, prep: 20, cook: 40, rest: 480, serves: 4,
    taste: { savory: 4, rich: 3 }, diet: ['vegan', 'gluten-free'], methods: ['steam'], tags: ['street-food', 'brunch'],
    desc: 'Hanoi’s turmeric sticky rice topped with a slice of mung bean paste, crispy shallots and scallion oil.',
    story: 'A Hanoi breakfast wrapped in a leaf; vendors shave the mung bean ball into thin slices.',
    equip: ['Steamer'],
    ing: [[400, 'g', 'glutinous rice', 'soaked overnight with 1 tsp turmeric'], [0.75, 'tsp', 'salt'], [150, 'g', 'split mung beans', 'soaked, steamed, mashed'], [6, '', 'shallots', 'sliced'], [4, 'tbsp', 'oil'], [3, '', 'scallions', 'sliced']],
    steps: [['Rice', 'Drain the rice, mix with salt and [[steam]] 30 minutes, sprinkling with water halfway.', 30], ['Mung bean', 'Mash steamed mung beans with salt into a firm ball.'], ['Toppings', 'Fry shallots crisp; pour hot oil over scallions. Top rice with thin mung bean slices, shallots and scallion oil.', 8]],
    tips: ['Soaking with turmeric gives the colour.'], mistakes: ['Unsoaked rice stays hard.'], vars: ['Xôi gấc (red sticky rice).'], serve: 'In banana leaf.' });

  /* ======================= MEDITERRANEAN ======================= */
  X(IT, { id: 'pappa-al-pomodoro', name: 'Pappa al Pomodoro', local: 'Pappa al pomodoro', emoji: '🍅', course: 'soup', level: 1, prep: 10, cook: 30, serves: 4,
    taste: { sour: 2, savory: 4, herby: 4 }, diet: ['vegan'], methods: ['simmer'], tags: ['comfort', 'budget', 'summer'],
    desc: 'Tuscan tomato and bread soup: stale bread cooked down with ripe tomatoes, garlic and basil until thick.',
    story: 'A Florentine peasant dish to use up saltless Tuscan bread; eaten hot, warm or cold.',
    equip: ['Pot'],
    ing: [[5, 'tbsp', 'extra-virgin olive oil'], [4, 'clove', 'garlic'], [800, 'g', 'ripe tomatoes or canned tomatoes'], [600, 'ml', 'vegetable stock'], [250, 'g', 'stale bread', 'torn'], [1, 'handful', 'basil'], [0.75, 'tsp', 'salt']],
    steps: [['Tomato', 'Warm garlic in oil; add tomatoes and simmer 10 minutes.', 10], ['Bread', 'Add stock and bread; simmer, stirring, until it collapses into a thick mush, 15 minutes.', 15], ['Finish', 'Tear in basil; serve with a pour of olive oil.']],
    tips: ['Use really good olive oil.'], mistakes: ['Fresh bread: gluey.'], vars: ['Add chili.'], serve: 'Warm, not hot.' });

  X(IT, { id: 'creamy-polenta', name: 'Creamy Polenta with Mushrooms', local: 'Polenta con funghi', emoji: '🌽', course: 'main', level: 1, prep: 10, cook: 35, serves: 4,
    taste: { rich: 4, savory: 4, umami: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer', 'saute'], tags: ['comfort', 'winter'],
    desc: 'Soft polenta enriched with butter and parmesan, topped with garlicky sautéed mushrooms and thyme.',
    story: 'Polenta is the staple of northern Italy (Veneto, Lombardy), once stirred in copper pots for an hour.',
    equip: ['Heavy pot', 'Pan'],
    ing: [[200, 'g', 'polenta (cornmeal)'], [1, 'l', 'water'], [1, 'tsp', 'salt'], [40, 'g', 'butter'], [50, 'g', 'parmesan'], [500, 'g', 'mixed mushrooms', 'sliced'], [2, 'tbsp', 'olive oil'], [3, 'clove', 'garlic'], [3, 'sprig', 'thyme'], [0.25, 'tsp', 'salt']],
    steps: [['Polenta', 'Whisk polenta into boiling salted water; cook on low, stirring often, 30 minutes; beat in butter and cheese.', 30], ['Mushrooms', '[[saute|Sauté]] mushrooms on high until browned; add garlic and thyme.', 8], ['Serve', 'Spoon polenta onto plates; top with mushrooms.']],
    tips: ['Whisk in slowly to avoid lumps.'], mistakes: ['Undercooked polenta: gritty.'], vars: ['Grilled polenta slices.'], serve: 'Hot.' });

  X(FR, { id: 'socca', name: 'Socca', local: 'Socca', emoji: '🫓', course: 'snack', level: 1, prep: 5, cook: 15, rest: 30, serves: 4,
    taste: { savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['bake'], tags: ['street-food', 'five'],
    desc: 'Nice’s thin, crisp chickpea-flour pancake baked in a very hot pan, cut up and showered with black pepper.',
    story: 'Sold from wood-fired ovens in the old town of Nice; Liguria calls it farinata.',
    equip: ['Cast-iron pan'],
    ing: [[150, 'g', 'chickpea flour'], [300, 'ml', 'water'], [3, 'tbsp', 'olive oil'], [0.5, 'tsp', 'salt'], [0.5, 'tsp', 'black pepper']],
    steps: [['Batter', 'Whisk flour, water, 1 tbsp oil and salt; rest 30 minutes.', 30], ['Bake', 'Heat the oiled pan in a {{250C}} oven; pour in a thin layer and bake until crisp and spotted, 10 minutes; finish under the grill.', 12], ['Serve', 'Cut into rough pieces; pepper generously.']],
    tips: ['Thin batter, very hot pan.'], mistakes: ['Thick layer: soft, not crisp.'], vars: ['Add rosemary or onions.'], serve: 'Hot, with rosé.' });

  X(FR, { id: 'pissaladiere', name: 'Pissaladière (Olive & Onion)', local: 'Pissaladière', emoji: '🧅', course: 'snack', level: 2, prep: 20, cook: 70, rest: 60, serves: 6,
    taste: { sweet: 3, savory: 4, herby: 3 }, diet: ['vegan'], methods: ['bake'], tags: ['party'],
    desc: 'Provençal flatbread spread thick with slow-cooked sweet onions, black olives and thyme.',
    story: 'From Nice; traditionally laid with anchovies in a criss-cross, here just olives.',
    equip: ['Baking tray', 'Pan'],
    ing: [[300, 'g', 'pizza dough'], [1, 'kg', 'onions', 'thinly sliced'], [4, 'tbsp', 'olive oil'], [3, 'sprig', 'thyme'], [0.5, 'tsp', 'salt'], [80, 'g', 'black olives']],
    steps: [['Onions', 'Cook onions in oil with thyme and salt on low until soft and golden, 45 minutes.', 45, 'Don’t rush: they should melt.'], ['Assemble', 'Stretch dough on the tray; spread onions; dot with olives.'], ['Bake', 'Bake at {{220C}} 20 minutes.', 20]],
    tips: ['Cook the onions slowly.'], mistakes: ['Browning onions too fast: bitter.'], vars: ['With anchovies (not vegetarian).'], serve: 'Warm or room temperature.' });

  X(GR, { id: 'briam', name: 'Briam', local: 'Μπριάμ', emoji: '🥘', course: 'main', level: 1, prep: 20, cook: 70, serves: 4,
    taste: { savory: 4, herby: 4, sweet: 2 }, diet: ['vegan', 'gluten-free'], methods: ['roast'], tags: ['summer', 'healthy', 'meal-prep'],
    desc: 'Greek roasted summer vegetables (potato, zucchini, eggplant, peppers) baked slowly in tomato and plenty of olive oil.',
    story: 'A ladera (olive-oil) dish; tastes even better the next day at room temperature with feta.',
    equip: ['Roasting dish'],
    ing: [[3, '', 'potatoes', 'sliced'], [2, '', 'zucchini', 'sliced'], [1, '', 'eggplant', 'cubed'], [1, '', 'red bell pepper'], [1, '', 'red onion'], [3, 'clove', 'garlic'], [400, 'g', 'canned tomatoes'], [120, 'ml', 'olive oil'], [1, 'tsp', 'dried oregano'], [2, 'tbsp', 'parsley'], [1.25, 'tsp', 'salt']],
    steps: [['Toss', 'Toss vegetables with tomatoes, oil, garlic, oregano and salt.'], ['Roast', '[[roast|Roast]] covered at {{190C}} 40 minutes, then uncovered 30 minutes until jammy.', 70]],
    tips: ['Don’t skimp on oil.'], mistakes: ['Pulling it early: watery.'], vars: ['Add okra.'], serve: 'Feta and bread.' });

  X(GR, { id: 'tiropita', name: 'Tiropita', local: 'Τυρόπιτα', emoji: '🥧', course: 'snack', level: 2, prep: 20, cook: 30, serves: 8,
    taste: { savory: 4, rich: 5 }, diet: ['vegetarian'], methods: ['bake'], tags: ['party', 'brunch'],
    desc: 'Flaky filo triangles filled with feta, egg and a little yogurt, baked golden.',
    story: 'Greek bakery breakfast; the triangles (tiropitakia) are a party favourite.',
    equip: ['Baking tray'],
    ing: [[300, 'g', 'feta', 'crumbled'], [100, 'g', 'ricotta or yogurt'], [2, '', 'eggs'], [0.5, 'tsp', 'black pepper'], [12, 'sheet', 'filo pastry'], [80, 'g', 'butter', 'melted']],
    steps: [['Filling', 'Mix cheeses, eggs and pepper.'], ['Fold', 'Cut filo into strips, butter, add filling and fold into triangles.'], ['Bake', 'Brush with butter and bake at {{190C}} 25 minutes.', 25]],
    tips: ['Keep filo under a damp towel.'], mistakes: ['Dry filo cracks.'], vars: ['Spanakopita with spinach.'], serve: 'Warm.' });

  X(GR, { id: 'galaktoboureko', name: 'Galaktoboureko', local: 'Γαλακτομπούρεκο', emoji: '🍮', course: 'dessert', level: 3, prep: 30, cook: 50, rest: 120, serves: 12,
    taste: { sweet: 5, rich: 5, aromatic: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['festive', 'impress'],
    desc: 'Semolina custard baked between buttered filo layers and soaked in lemon syrup.',
    story: 'A Greek pastry-shop classic, also eaten after Easter fasting.',
    equip: ['Baking dish', 'Pot'],
    ing: [[1, 'l', 'whole milk'], [120, 'g', 'fine semolina'], [150, 'g', 'sugar'], [4, '', 'eggs'], [1, 'tsp', 'vanilla extract'], [40, 'g', 'butter'], [12, 'sheet', 'filo pastry'], [120, 'g', 'butter', 'melted'], '#Syrup', [300, 'g', 'sugar'], [250, 'ml', 'water'], [1, '', 'lemon', 'peel and juice']],
    steps: [['Custard', 'Heat milk; whisk in semolina and sugar and cook until thick; off the heat beat in eggs, vanilla and butter.', 10], ['Layer', 'Layer 6 buttered filo sheets, pour in custard, cover with 6 more; score the top.'], ['Bake', 'Bake at {{180C}} 45 minutes; pour cool syrup over the hot pie.', 45]],
    tips: ['Cool syrup on hot pastry.'], mistakes: ['Cutting too soon: custard runs.'], vars: ['Bougatsa with sugar and cinnamon.'], serve: 'Room temperature.' });

  X(C('Turkey', '🇹🇷', 'Middle East'), { id: 'cilbir', name: 'Çılbır', local: 'Çılbır', emoji: '🍳', course: 'breakfast', level: 1, prep: 5, cook: 10, serves: 2,
    taste: { rich: 4, sour: 2, spicy: 2 }, diet: ['vegetarian', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['quick', 'brunch'],
    desc: 'Poached eggs on garlicky yogurt, drizzled with chili-flake butter.',
    story: 'A dish from Ottoman palace kitchens, now a favourite Turkish breakfast.',
    equip: ['Pot', 'Small pan'],
    ing: [[250, 'g', 'thick yogurt', 'room temperature'], [1, 'clove', 'garlic', 'grated'], [0.25, 'tsp', 'salt'], [4, '', 'eggs'], [1, 'tbsp', 'vinegar'], [30, 'g', 'butter'], [1, 'tsp', 'aleppo pepper or chili flakes'], [1, 'tbsp', 'dill']],
    steps: [['Yogurt', 'Mix yogurt, garlic and salt; spread on plates.'], ['Poach', '[[poach|Poach]] eggs in simmering water with vinegar, 3 minutes.', 4], ['Butter', 'Foam butter with chili; pour over eggs and yogurt; add dill.', 2]],
    tips: ['Warm yogurt, not cold.'], mistakes: ['Burnt chili butter.'], vars: ['Turkish menemen.'], serve: 'Crusty bread.' });

  X(C('Palestine', '🇵🇸', 'Middle East'), { id: 'maqluba', name: 'Vegetable Maqluba', local: 'مقلوبة', emoji: '🍚', course: 'main', level: 3, prep: 30, cook: 60, serves: 6,
    taste: { savory: 4, aromatic: 5, rich: 3 }, diet: ['vegan', 'gluten-free'], methods: ['deep-fry', 'simmer'], tags: ['festive', 'impress'],
    desc: 'Layered pot of fried eggplant, cauliflower and potato with spiced rice, flipped upside down at the table.',
    story: 'Maqluba means “upside down”; the dramatic flip is the moment the family gathers.',
    equip: ['Heavy pot', 'Kadai'],
    ing: [[1, '', 'eggplant', 'slices'], [1, 'head', 'cauliflower', 'florets'], [2, '', 'potatoes', 'slices'], [700, 'ml', 'oil', 'for frying'], [2, '', 'tomatoes', 'sliced'], [400, 'g', 'basmati rice', 'soaked 30 min'], [1, 'tbsp', 'seven-spice (baharat)'], [1, 'tsp', 'ground turmeric'], [700, 'ml', 'vegetable stock'], [1.5, 'tsp', 'salt'], [40, 'g', 'almonds and pine nuts', 'toasted']],
    steps: [['Fry', '[[deep-fry|Fry]] eggplant, cauliflower and potato until golden; drain.', 20], ['Layer', 'Layer tomato, then vegetables, then rice mixed with spices in the pot; pour over hot stock with salt.'], ['Cook', 'Cover and cook on low 35 minutes; rest 10.', 45], ['Flip', 'Invert onto a platter; scatter nuts.']],
    tips: ['Press layers down so it holds after flipping.'], mistakes: ['Lifting the pot too fast: it collapses.'], vars: ['With chicken (not vegetarian).'], serve: 'Yogurt-cucumber salad.' });

  X(C('Lebanon', '🇱🇧', 'Middle East'), { id: 'pumpkin-kibbeh', name: 'Pumpkin Kibbeh', local: 'كبة اليقطين', emoji: '🎃', course: 'main', level: 2, prep: 30, cook: 40, serves: 6,
    taste: { savory: 4, sweet: 2, aromatic: 4 }, diet: ['vegan'], methods: ['bake'], tags: ['festive', 'healthy'],
    desc: 'Baked layers of pumpkin-bulgur dough around a filling of spinach, chickpeas, onion and sumac.',
    story: 'Kibbet laqteen is the Lenten kibbeh of Lebanese and Syrian Christians.',
    equip: ['Baking dish'],
    ing: [[500, 'g', 'pumpkin', 'roasted, mashed'], [200, 'g', 'fine bulgur', 'soaked, squeezed'], [60, 'g', 'flour'], [1, 'tsp', 'seven-spice (baharat)'], [1, 'tsp', 'salt'], [4, 'tbsp', 'olive oil'], '#Filling', [1, '', 'onion', 'chopped'], [200, 'g', 'spinach'], [1, 'can', 'chickpeas'], [1, 'tbsp', 'sumac'], [2, 'tbsp', 'walnuts'], [0.5, 'tsp', 'salt']],
    steps: [['Dough', 'Knead pumpkin, bulgur, flour, spice and salt into a firm dough.'], ['Filling', 'Fry onion; add spinach, chickpeas, sumac, walnuts and salt until dry.', 8], ['Layer and bake', 'Press half the dough in an oiled dish, add filling, cover with dough; score diamonds, brush oil and bake at {{190C}} 35 minutes.', 35]],
    tips: ['Wet hands help press the top layer.'], mistakes: ['Wet dough: soggy kibbeh.'], vars: ['Potato kibbeh.'], serve: 'Yogurt or salad.' });

  /* ======================= AFGHANISTAN, PAKISTAN, BANGLADESH ======================= */
  X(AF, { id: 'aushak', name: 'Aushak', local: 'آشک', emoji: '🥟', course: 'main', level: 3, prep: 50, cook: 20, serves: 4,
    taste: { savory: 4, sour: 2, herby: 4, rich: 4 }, diet: ['vegetarian'], methods: ['simmer'], tags: ['festive', 'impress'],
    desc: 'Afghan leek and scallion dumplings on garlic yogurt, topped with a tomato-lentil sauce and dried mint.',
    story: 'Made for Eid and special guests in Kabul; the vegetarian filling is the original.',
    equip: ['Pot', 'Pan'],
    ing: [[300, 'g', 'all-purpose flour'], [150, 'ml', 'water'], [0.5, 'tsp', 'salt'], [2, '', 'leeks', 'finely chopped'], [6, '', 'scallions', 'finely chopped'], [1, 'tsp', 'chili flakes'], [0.5, 'tsp', 'salt'], [1, 'tbsp', 'oil'], '#Toppings', [300, 'g', 'yogurt'], [2, 'clove', 'garlic'], [100, 'g', 'red lentils'], [2, 'tbsp', 'tomato paste'], [1, '', 'onion'], [3, 'tbsp', 'oil'], [1, 'tsp', 'ground coriander'], [300, 'ml', 'water'], [1, 'tbsp', 'dried mint']],
    steps: [['Dough', '[[knead|Knead]] flour, water and salt; rest 20 minutes.', 20], ['Fill', 'Mix leeks, scallions, chili, salt and oil; fill thin dough rounds and fold into half moons.'], ['Sauce', 'Fry onion, add tomato paste, coriander, lentils and water; [[simmer]] until thick, 15 minutes.', 15], ['Cook and serve', '[[simmer|Boil]] dumplings 5 minutes; spread garlic yogurt on a platter, add dumplings, sauce and mint.', 5]],
    tips: ['Squeeze the leeks so the filling isn’t wet.'], mistakes: ['Thick dough.'], vars: ['Meat sauce (not vegetarian).'], serve: 'Hot.' });

  X(C('Pakistan', '🇵🇰', 'South Asia'), { id: 'chana-chaat-pak', name: 'Lahori Chana Chaat', local: 'چنا چاٹ', emoji: '🥗', course: 'snack', level: 1, prep: 15, cook: 0, serves: 4,
    taste: { sour: 4, spicy: 3, sweet: 2, herby: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['no-cook'], tags: ['street-food', 'quick', 'healthy'],
    desc: 'Chickpeas tossed with onion, tomato, cucumber, chili, tamarind chutney, chaat masala and lemon.',
    story: 'An iftar favourite across Pakistan, sold from carts in Lahore’s Anarkali bazaar.',
    equip: ['Bowl'],
    ing: [[2, 'can', 'chickpeas', 'drained'], [1, '', 'onion', 'finely chopped'], [2, '', 'tomatoes', 'diced'], [1, '', 'cucumber', 'diced'], [2, '', 'green chilies'], [3, 'tbsp', 'tamarind chutney'], [1, 'tsp', 'chaat masala'], [0.5, 'tsp', 'roasted cumin powder'], [1, '', 'lemon', 'juice'], [2, 'tbsp', 'cilantro'], [0.5, 'tsp', 'salt']],
    steps: [['Toss', 'Toss everything together; taste and adjust lemon and salt.'], ['Serve', 'Serve immediately, topped with cilantro.']],
    tips: ['Warm chickpeas take the flavour better.'], mistakes: ['Dressing too early: soggy.'], vars: ['Add papri or boiled potatoes.'], serve: 'At iftar.' });

  X(C('Bangladesh', '🇧🇩', 'South Asia'), { id: 'bhuna-khichuri', name: 'Bhuna Khichuri', local: 'ভুনা খিচুড়ি', emoji: '🍛', course: 'main', level: 2, prep: 15, cook: 35, serves: 4,
    taste: { aromatic: 4, savory: 4, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['rainy-day', 'comfort'],
    desc: 'A drier, fragrant Bangladeshi khichuri: roasted moong dal and aromatic rice cooked with ghee, whole spices and onion.',
    story: 'The rainy-day meal of Bangladesh, eaten with fried eggplant (begun bhaja) and egg curry.',
    equip: ['Heavy pot'],
    ing: [[200, 'g', 'short-grain aromatic rice', 'kalijeera or gobindobhog'], [100, 'g', 'moong dal', 'dry-roasted'], [3, 'tbsp', 'ghee'], [1, '', 'onion', 'sliced'], [2, '', 'bay leaves'], [4, '', 'green cardamom'], [1, 'piece', 'cinnamon stick'], [1, 'tbsp', 'ginger paste'], [1, 'tsp', 'ground turmeric'], [1, 'tsp', 'ground cumin'], [3, '', 'green chilies'], [700, 'ml', 'hot water'], [1.25, 'tsp', 'salt']],
    steps: [['Roast', 'Dry-[[toast|roast]] the dal until fragrant; wash with the rice.', 5], ['Bhuna', 'Fry onion and whole spices in ghee; add ginger, spices, rice and dal and [[bhuna|fry]] 5 minutes.', 10], ['Cook', 'Add hot water, chilies and salt; cover and cook on low until dry and fluffy, 20 minutes.', 20]],
    tips: ['Roasting the dal gives the aroma.'], mistakes: ['Too much water: porridge, not bhuna.'], vars: ['Bhoger khichuri (looser, temple style).'], serve: 'Begun bhaja and pickle.' });

  /* ======================= SRI LANKA & NEPAL ======================= */
  X(LK, { id: 'hoppers', name: 'Hoppers (Appa)', local: 'ආප්ප', emoji: '🥣', course: 'breakfast', level: 3, prep: 15, cook: 30, rest: 480, serves: 4,
    taste: { savory: 3, sour: 2 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['brunch', 'street-food'],
    desc: 'Bowl-shaped Sri Lankan pancakes of fermented rice and coconut milk: lacy, crisp edges and a soft centre.',
    story: 'Eaten in the evening and at breakfast; an egg hopper has an egg cooked in the middle.',
    equip: ['Hopper pan (small wok)'],
    ing: [[300, 'g', 'rice flour'], [1, 'tsp', 'instant yeast'], [1, 'tbsp', 'sugar'], [250, 'ml', 'warm water'], [300, 'ml', 'coconut milk'], [0.5, 'tsp', 'salt'], [1, 'tsp', 'oil', 'for the pan']],
    steps: [['Ferment', 'Mix flour, yeast, sugar and water; [[ferment]] overnight.', 480], ['Batter', 'Stir in coconut milk and salt to a thin batter.'], ['Swirl', 'Pour a ladle into the hot oiled pan, swirl to coat the sides; cover and cook 3 minutes until edges are crisp.', 25]],
    tips: ['Swirl fast to get thin edges.'], mistakes: ['Thick batter: no lace.'], vars: ['Egg hopper; Kerala appam.'], serve: 'Pol sambol and dhal curry.' });

  X(LK, { id: 'string-hoppers', name: 'String Hoppers (Idiappa)', local: 'ඉඳිආප්ප', emoji: '🍥', course: 'breakfast', level: 2, prep: 25, cook: 15, serves: 4,
    taste: { savory: 2 }, diet: ['vegan', 'gluten-free'], methods: ['steam'], tags: ['healthy', 'brunch'],
    desc: 'Lacy nests of steamed rice-flour noodles, served with coconut sambol and kiri hodi (coconut milk curry).',
    story: 'A Sri Lankan breakfast and dinner staple, pressed through a wooden mould onto small woven mats.',
    equip: ['Idiyappam press', 'Steamer'],
    ing: [[300, 'g', 'roasted rice flour'], [0.5, 'tsp', 'salt'], [350, 'ml', 'boiling water'], '#Kiri hodi', [1, 'tbsp', 'oil'], [1, '', 'onion', 'sliced'], [1, 'sprig', 'curry leaves'], [2, '', 'green chilies'], [0.5, 'tsp', 'ground turmeric'], [400, 'ml', 'coconut milk'], [1, '', 'lime'], [0.5, 'tsp', 'salt']],
    steps: [['Dough', 'Mix flour and salt with boiling water to a soft dough.'], ['Press and steam', 'Press nests onto oiled plates and [[steam]] 8 minutes.', 10], ['Kiri hodi', 'Fry onion, curry leaves and chilies; add turmeric, coconut milk and salt; heat gently and add lime.', 6]],
    tips: ['Dough must be soft enough to press.'], mistakes: ['Dry dough: impossible to press.'], vars: ['Kerala idiyappam.'], serve: 'Pol sambol and kiri hodi.' });

  X(LK, { id: 'parippu', name: 'Sri Lankan Parippu', local: 'පරිප්පු', emoji: '🟡', course: 'main', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { rich: 4, savory: 4, aromatic: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['weeknight', 'comfort', 'budget'],
    desc: 'Red lentils simmered with turmeric and green chili, finished in coconut milk and a tempering of mustard, curry leaves and pandan.',
    story: 'Eaten daily in Sri Lanka with rice; the coconut milk makes it richer than Indian dal.',
    equip: ['Pot'],
    ing: [[250, 'g', 'red lentils'], [700, 'ml', 'water'], [0.5, 'tsp', 'ground turmeric'], [2, '', 'green chilies'], [200, 'ml', 'coconut milk'], [1, 'tsp', 'salt'], [2, 'tbsp', 'oil'], [1, 'tsp', 'mustard seeds'], [1, '', 'onion', 'sliced'], [3, 'clove', 'garlic'], [1, 'sprig', 'curry leaves'], [3, '', 'dried red chilies']],
    steps: [['Lentils', '[[simmer|Simmer]] lentils with water, turmeric and chilies until soft, 15 minutes.', 15], ['Coconut', 'Add coconut milk and salt; heat 3 minutes.', 3], ['Temper', '[[tadka|Temper]] mustard, onion, garlic, curry leaves and chilies until golden; pour in.', 5]],
    tips: ['Fry the onion until golden for flavour.'], mistakes: ['Boiling after coconut milk: it splits.'], vars: ['Add spinach.'], serve: 'Rice and pol sambol.' });

  X(LK, { id: 'wattalappam', name: 'Watalappan', local: 'වටලප්පන්', emoji: '🍮', course: 'dessert', level: 2, prep: 15, cook: 45, rest: 180, serves: 6,
    taste: { sweet: 4, rich: 4, aromatic: 5 }, diet: ['vegetarian', 'gluten-free'], methods: ['steam'], tags: ['festive', 'make-ahead'],
    desc: 'Steamed jaggery and coconut milk custard spiced with cardamom, nutmeg and clove, topped with cashews.',
    story: 'Brought by Malay traders; a must at Sri Lankan Eid and weddings.',
    equip: ['Steamer', 'Bowl'],
    ing: [[250, 'g', 'jaggery (kithul or palm)', 'grated'], [100, 'ml', 'water'], [400, 'ml', 'coconut milk'], [5, '', 'eggs'], [0.5, 'tsp', 'cardamom powder'], [0.25, 'tsp', 'nutmeg'], [1, 'pinch', 'ground cloves'], [2, 'tbsp', 'cashews']],
    steps: [['Jaggery', 'Melt jaggery in water; strain and cool.', 5], ['Custard', 'Whisk eggs (don’t froth), add coconut milk, jaggery and spices; strain into a bowl.'], ['Steam', 'Top with cashews, cover and [[steam]] gently 40 minutes until set; chill.', 40]],
    tips: ['Gentle steam keeps it smooth.'], mistakes: ['Hard boil: holes and curdling.'], vars: ['Baked in a water bath.'], serve: 'Cold.' });

  X(NP, { id: 'yomari', name: 'Yomari', local: 'योमरी', emoji: '🍐', course: 'dessert', level: 3, prep: 40, cook: 20, serves: 8,
    taste: { sweet: 5, rich: 3 }, diet: ['vegan', 'gluten-free'], methods: ['steam'], tags: ['festive'],
    desc: 'Newari steamed rice-flour dumplings shaped like figs, filled with molten chaku (jaggery) and sesame.',
    story: 'Made for Yomari Punhi, the Newar harvest festival in Kathmandu Valley in December.',
    equip: ['Steamer'],
    ing: [[300, 'g', 'rice flour'], [280, 'ml', 'boiling water'], [0.25, 'tsp', 'salt'], [200, 'g', 'jaggery', 'melted'], [60, 'g', 'sesame seeds', 'toasted'], [2, 'tbsp', 'coconut', 'grated']],
    steps: [['Filling', 'Cook jaggery with sesame and coconut until sticky; cool.', 8], ['Dough', 'Knead flour, salt and boiling water smooth.'], ['Shape', 'Shape each piece into a hollow cone, fill and pinch the top into a tail.'], ['Steam', '[[steam|Steam]] 15 minutes.', 15]],
    tips: ['Oil your hands to shape the cones.'], mistakes: ['Thick walls: doughy.'], vars: ['Khuwa (milk solids) filling.'], serve: 'Warm.' });

  X(NP, { id: 'aloo-tama', name: 'Aloo Tama Bodi', local: 'आलु तामा बोडी', emoji: '🥘', course: 'soup', level: 2, prep: 15, cook: 35, serves: 4,
    taste: { sour: 4, savory: 4, spicy: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['comfort', 'winter'],
    desc: 'Nepali sour curry-soup of potatoes, fermented bamboo shoots (tama) and black-eyed peas.',
    story: 'A Newari and Himalayan favourite; the fermented bamboo gives a sharp, sour flavour.',
    equip: ['Pot'],
    ing: [[2, 'tbsp', 'mustard oil or oil'], [0.25, 'tsp', 'fenugreek seeds'], [1, '', 'onion'], [3, 'clove', 'garlic'], [1, 'tbsp', 'ginger'], [2, '', 'tomatoes'], [1, 'tsp', 'ground turmeric'], [1, 'tsp', 'ground cumin'], [1, 'tsp', 'chili powder'], [3, '', 'potatoes', 'cubed'], [150, 'g', 'bamboo shoots', 'fermented or canned'], [1, 'can', 'black-eyed peas'], [800, 'ml', 'water'], [1, 'tsp', 'salt']],
    steps: [['Temper', 'Fry fenugreek until dark, then onion, garlic and ginger.', 6], ['Masala', 'Add tomatoes and spices and cook down.', 6], ['Simmer', 'Add potatoes, bamboo, beans, water and salt; [[simmer]] until potatoes break, 20 minutes.', 20]],
    tips: ['Canned bamboo + a squeeze of lemon if you can’t find tama.'], mistakes: ['Raw fenugreek: bitter.'], vars: ['With dried fish (not vegetarian).'], serve: 'Rice.' });

  X(NP, { id: 'chatamari', name: 'Chatamari', local: 'चतामरी', emoji: '🍕', course: 'snack', level: 2, prep: 15, cook: 20, rest: 120, serves: 4,
    taste: { savory: 4, spicy: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['street-food'],
    desc: 'Newari rice-flour crepe topped with egg, onion, tomato and chili, cooked covered: the “Nepali pizza”.',
    story: 'From Newar feasts in Kathmandu; often topped with minced meat, here egg and vegetables.',
    equip: ['Non-stick pan with lid'],
    ing: [[200, 'g', 'rice flour'], [250, 'ml', 'water'], [0.5, 'tsp', 'salt'], [2, '', 'eggs'], [1, '', 'onion', 'finely chopped'], [1, '', 'tomato', 'finely chopped'], [2, '', 'green chilies'], [2, 'tbsp', 'cilantro'], [1, 'tbsp', 'oil']],
    steps: [['Batter', 'Whisk flour, water and salt; rest 2 hours.', 120], ['Cook', 'Spread a thin layer in the oiled pan; top with beaten egg and vegetables; cover and cook on low until set and the base is crisp.', 15]],
    tips: ['Covered cooking sets the topping.'], mistakes: ['Thick batter: chewy.'], vars: ['Keema chatamari (not vegetarian).'], serve: 'Hot.' });
})();
