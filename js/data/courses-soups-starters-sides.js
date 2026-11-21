/* Every course, all vegetarian: soups, starters, sides & chutneys */
'use strict';
(function () {
  const X = (base, d) => DD.add(Object.assign({}, base, d));
  const IN = { country: 'India', flag: '🇮🇳', region: 'South Asia' };
  const IC = { country: 'India', flag: '🇮🇳', region: 'South Asia', area: 'Kolkata', styles: ['indo-chinese'] };
  const FR = { country: 'France', flag: '🇫🇷', region: 'Europe', styles: ['continental'] };
  const US = { country: 'United States', flag: '🇺🇸', region: 'North America', styles: ['continental'] };

  /* ================= SOUPS ================= */
  X(Object.assign({}, IN, { area: 'Pan-India', styles: ['restaurant'] }), { id: 'tomato-soup', name: 'Restaurant-Style Tomato Soup', local: 'टमाटर सूप', emoji: '🍅', course: 'soup', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { sour: 3, sweet: 3, savory: 3, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'winter', 'rainy-day', 'kids', 'budget'],
    desc: 'Velvety tomato soup with butter, a hint of spice and crunchy croutons. The classic Indian restaurant starter.',
    story: 'Cream of tomato soup is the first course at Indian weddings and restaurants, served with bread croutons and a swirl of cream.',
    equip: ['Pot', 'Blender', 'Sieve'], ing: [[800, 'g', 'ripe tomatoes', 'chopped'], [20, 'g', 'butter'], [1, '', 'onion', 'chopped'], [3, 'clove', 'garlic'], [1, '', 'carrot', 'chopped', ], [1, '', 'bay leaf'], [500, 'ml', 'water or vegetable stock'], [1, 'tsp', 'salt'], [2, 'tsp', 'sugar'], [0.5, 'tsp', 'black pepper'], [3, 'tbsp', 'cream'], [1, 'handful', 'bread croutons', 'optional; skip for gluten-free']],
    steps: [['Sweat', '[[sweat|Sweat]] onion, garlic, carrot and bay leaf in butter 5 minutes.', 5], ['Simmer', 'Add tomatoes, water, salt and sugar; [[simmer]] 15 minutes.', 15], ['Blend and strain', 'Remove bay leaf, blend smooth and strain for a silky soup.'], ['Finish', 'Reheat, adjust salt, pepper and sugar; swirl in cream and top with croutons.']],
    tips: ['The carrot adds natural sweetness and color.'], mistakes: ['Skipping the straining: grainy soup.'], vars: ['Tomato shorba: add cumin, ginger and cilantro, no cream.'], serve: 'Garlic bread or croutons.' });

  X(IC, { id: 'sweet-corn-soup', name: 'Veg Sweet Corn Soup', local: 'स्वीट कॉर्न सूप', emoji: '🌽', course: 'soup', level: 1, prep: 10, cook: 15, serves: 4,
    taste: { sweet: 3, savory: 3, umami: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['quick', 'kids', 'rainy-day', 'winter'],
    desc: 'Silky, gently sweet corn soup with vegetables and white pepper, thickened just right.',
    story: 'The most-ordered soup in Indian Chinese restaurants: light, mild and comforting.',
    equip: ['Pot', 'Blender'], ing: [[300, 'g', 'sweet corn kernels', 'half blended'], [1, 'tbsp', 'oil'], [2, 'clove', 'garlic', 'minced'], [1, '', 'carrot', 'finely diced'], [50, 'g', 'green beans', 'finely diced'], [1, 'l', 'vegetable stock'], [1, 'tsp', 'salt'], [0.5, 'tsp', 'sugar'], [0.5, 'tsp', 'white pepper'], [2, 'tbsp', 'cornstarch', 'in 4 tbsp water'], [2, '', 'scallions', 'sliced']],
    steps: [['Vegetables', 'Fry garlic, carrot and beans 2 minutes.'], ['Simmer', 'Add stock, blended and whole corn, salt, sugar and pepper; simmer 8 minutes.', 8], ['Thicken', 'Stir in the slurry and simmer until silky. Top with scallions.', 2]],
    tips: ['Add a drizzle of vinegar and chili sauce at the table.'], mistakes: ['Too much slurry: gloopy.'], vars: ['Egg drop corn soup (egg).'], serve: 'Hot, as a starter.' });

  X(IC, { id: 'hot-sour-soup', name: 'Veg Hot and Sour Soup', local: 'हॉट एंड सॉर सूप', emoji: '🥣', course: 'soup', level: 1, prep: 15, cook: 15, serves: 4,
    taste: { sour: 4, spicy: 4, umami: 4, savory: 4 }, diet: ['vegan'], methods: ['simmer'], tags: ['rainy-day', 'winter', 'quick'],
    desc: 'Peppery, tangy soup with mushrooms, tofu, cabbage and carrot. Clears the sinuses instantly.',
    story: 'Originally from Sichuan, it became an Indian Chinese restaurant icon with extra chili and vinegar.',
    equip: ['Pot'], ing: [[1, 'tbsp', 'oil'], [3, 'clove', 'garlic'], [1, 'tbsp', 'ginger', 'minced'], [100, 'g', 'mushrooms', 'thinly sliced'], [100, 'g', 'firm tofu', 'strips'], [1, '', 'carrot', 'julienned'], [100, 'g', 'cabbage', 'shredded'], [1, 'l', 'vegetable stock'], [2, 'tbsp', 'soy sauce'], [3, 'tbsp', 'rice or white vinegar'], [1, 'tbsp', 'chili sauce'], [1, 'tsp', 'black pepper'], [2, 'tbsp', 'cornstarch', 'in 4 tbsp water'], [2, '', 'scallions']],
    steps: [['Aromatics', 'Fry garlic and ginger, add vegetables and mushrooms; [[stir-fry]] 2 minutes.'], ['Simmer', 'Add stock, soy, chili sauce and tofu; simmer 5 minutes.', 5], ['Thicken', 'Stir in slurry, then vinegar and pepper off the heat. Top with scallions.', 2, 'Vinegar added at the end keeps it bright and sour.']],
    tips: ['Lots of black pepper is the “hot”.'], mistakes: ['Boiling the vinegar: it loses its punch.'], vars: ['Add egg ribbons (not vegan).'], serve: 'Before noodles or fried rice.' });

  X(IC, { id: 'manchow-soup', name: 'Veg Manchow Soup', local: 'मनचाउ सूप', emoji: '🍜', course: 'soup', level: 1, prep: 15, cook: 15, serves: 4,
    taste: { spicy: 3, savory: 4, umami: 4, herby: 2 }, diet: ['vegan'], methods: ['simmer', 'deep-fry'], tags: ['rainy-day', 'winter', 'street-food'],
    desc: 'Dark, garlicky, spicy soup loaded with vegetables and topped with crunchy fried noodles.',
    story: 'An Indo-Chinese creation not found in China; the crispy noodle topping is the signature.',
    equip: ['Pot', 'Small pan'], ing: [[1, 'tbsp', 'oil'], [5, 'clove', 'garlic', 'minced'], [1, 'tbsp', 'ginger'], [2, '', 'green chilies'], [1, '', 'carrot', 'finely chopped'], [100, 'g', 'cabbage', 'finely chopped'], [1, '', 'green bell pepper', 'finely chopped'], [1, 'l', 'vegetable stock'], [2, 'tbsp', 'soy sauce'], [1, 'tsp', 'dark soy sauce'], [1, 'tbsp', 'vinegar'], [2, 'tbsp', 'cornstarch', 'in water'], [1, 'handful', 'cilantro'], [50, 'g', 'noodles', 'boiled and fried crisp']],
    steps: [['Aromatics', 'Fry garlic, ginger and chilies 30 seconds; add vegetables 2 minutes.'], ['Soup', 'Add stock, soy sauces and vinegar; simmer 5 minutes, thicken with slurry.', 6], ['Serve', 'Top with cilantro and crispy fried noodles.']],
    tips: ['Fry the noodles until golden for the crunch.'], mistakes: ['Adding noodles early: soggy.'], vars: ['Chicken manchow.'], serve: 'Hot.' });

  X(FR, { id: 'french-onion-soup', name: 'French Onion Soup', local: 'Soupe à l’oignon gratinée', emoji: '🧅', course: 'soup', level: 2, prep: 15, cook: 75, serves: 4,
    taste: { sweet: 3, savory: 5, umami: 5, rich: 4 }, diet: ['vegetarian'], methods: ['simmer', 'bake'], tags: ['winter', 'comfort', 'date-night'],
    desc: 'Deeply caramelized onions in a rich broth under a bubbling crust of Gruyère on toast.',
    story: 'Once the late-night meal of workers at Les Halles market in Paris. This version uses a mushroom-vegetable broth.',
    equip: ['Heavy pot', 'Oven-safe bowls'], ing: [[1, 'kg', 'onions', 'thinly sliced'], [50, 'g', 'butter'], [1, 'tsp', 'sugar'], [1, 'tsp', 'salt'], [2, 'tbsp', 'all-purpose flour'], [150, 'ml', 'dry white wine', 'or more stock'], [1.2, 'l', 'rich mushroom or vegetable stock'], [1, 'tbsp', 'soy sauce'], [2, 'sprig', 'thyme'], [4, 'slice', 'baguette', 'toasted'], [150, 'g', 'Gruyère', 'grated']],
    steps: [['Caramelize', '[[caramelize]] onions in butter with sugar and salt, 45–60 minutes, scraping and adding splashes of water, until deep brown.', 50, 'Patience: this is the whole flavor.'], ['Soup', 'Stir in flour, [[deglaze]] with wine, add stock, soy and thyme; simmer 15 minutes.', 15], ['Gratinée', 'Ladle into bowls, top with toast and lots of cheese; grill until bubbling and browned.', 4]],
    tips: ['Use yellow onions for the best sweetness.'], mistakes: ['Rushing the onions.'], vars: ['Vegan: olive oil and skip the cheese.'], serve: 'As a hearty starter or supper.' });

  X({ country: 'United States', flag: '🇺🇸', region: 'North America', styles: ['continental'] }, { id: 'pumpkin-soup', name: 'Roasted Pumpkin Soup', local: 'Pumpkin soup', emoji: '🎃', course: 'soup', level: 1, prep: 15, cook: 40, serves: 4,
    taste: { sweet: 3, rich: 4, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['roast', 'simmer'], tags: ['winter', 'healthy', 'comfort', 'meal-prep'],
    desc: 'Velvety roasted pumpkin soup with ginger, coconut milk and a hint of nutmeg.',
    story: 'An autumn favorite worldwide. Roasting the pumpkin first deepens its natural sweetness.',
    equip: ['Baking tray', 'Pot', 'Blender'], ing: [[1, 'kg', 'pumpkin or butternut squash', 'cubed'], [2, 'tbsp', 'olive oil'], [1, '', 'onion'], [2, 'clove', 'garlic'], [1, 'tbsp', 'ginger'], [700, 'ml', 'vegetable stock'], [200, 'ml', 'coconut milk'], [1, 'tsp', 'salt'], [1, 'pinch', 'nutmeg'], [2, 'tbsp', 'pumpkin seeds', 'toasted']],
    steps: [['Roast', '[[roast|Roast]] pumpkin with oil at {{200C}} 30 minutes until caramelized.', 30], ['Simmer', 'Soften onion, garlic and ginger, add pumpkin and stock; simmer 10 minutes.', 10], ['Blend', 'Blend with coconut milk, salt and nutmeg; top with seeds.']],
    tips: ['A squeeze of lime brightens it.'], mistakes: ['Boiling instead of roasting: flat flavor.'], vars: ['Thai red-curry pumpkin soup.'], serve: 'Crusty bread.' });

  X({ country: 'Thailand', flag: '🇹🇭', region: 'Southeast Asia' }, { id: 'tom-kha', name: 'Tom Kha Hed (Coconut Mushroom Soup)', local: 'ต้มข่าเห็ด', emoji: '🥥', course: 'soup', level: 1, prep: 15, cook: 15, serves: 4,
    taste: { sour: 3, rich: 4, herby: 4, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['quick', 'healthy', 'rainy-day'],
    desc: 'Creamy coconut soup fragrant with galangal, lemongrass and lime leaf, with mushrooms and tofu.',
    story: '“Tom kha” means boiled galangal; the coconut-milk cousin of tom yum.',
    equip: ['Pot'], ing: [[400, 'ml', 'coconut milk'], [400, 'ml', 'vegetable stock'], [2, 'stalk', 'lemongrass', 'smashed'], [6, 'slice', 'galangal'], [5, '', 'makrut lime leaves'], [3, '', 'bird’s eye chilies', 'smashed'], [250, 'g', 'oyster mushrooms'], [150, 'g', 'tofu', 'cubes'], [2, 'tbsp', 'soy sauce', 'tamari for gluten-free'], [1, 'tsp', 'sugar'], [3, 'tbsp', 'lime juice'], [1, 'handful', 'cilantro']],
    steps: [['Infuse', 'Simmer stock with lemongrass, galangal, lime leaves and chilies 5 minutes.', 5], ['Coconut', 'Add coconut milk, mushrooms and tofu; simmer gently 5 minutes.', 5], ['Season', 'Off the heat add soy, sugar and lime. Top with cilantro.']],
    tips: ['Don’t boil hard once the coconut milk is in.'], mistakes: ['Eating the galangal slices: they are for flavor.'], vars: ['Tom kha gai with chicken.'], serve: 'Jasmine rice.' });

  X({ country: 'India', flag: '🇮🇳', region: 'South Asia', area: 'Tamil Nadu', styles: ['south-indian'] }, { id: 'mulligatawny', name: 'Mulligatawny Soup', local: 'மிளகு தண்ணீர்', emoji: '🥣', course: 'soup', level: 1, prep: 15, cook: 30, serves: 4,
    taste: { aromatic: 4, spicy: 3, sweet: 2, rich: 3 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer'], tags: ['winter', 'healthy', 'comfort'],
    desc: 'Anglo-Indian spiced lentil soup with apple, coconut milk and curry spices.',
    story: 'From the Tamil “milagu thanni” (pepper water), adapted by the British Raj into a creamy soup.',
    equip: ['Pot', 'Blender'], ing: [[150, 'g', 'red lentils'], [2, 'tbsp', 'oil'], [1, '', 'onion'], [1, '', 'carrot'], [1, '', 'apple', 'chopped'], [1, 'tbsp', 'ginger-garlic paste'], [2, 'tsp', 'curry powder'], [1, 'tsp', 'black pepper'], [1, 'l', 'vegetable stock'], [200, 'ml', 'coconut milk'], [1, 'tsp', 'salt'], [1, 'tbsp', 'lemon juice']],
    steps: [['Base', 'Soften onion, carrot and apple; add ginger-garlic and spices.', 6], ['Simmer', 'Add lentils and stock; simmer 20 minutes.', 20], ['Blend', 'Blend with coconut milk; add salt, lemon and pepper.']],
    tips: ['Top with crispy onions or a spoon of rice.'], mistakes: ['Too thick: loosen with stock.'], vars: ['Chicken mulligatawny.'], serve: 'With rice or bread.' });

  /* ================= STARTERS ================= */
  X(Object.assign({}, IN, { area: 'Punjab', styles: ['restaurant', 'tandoori'] }), { id: 'hara-bhara-kabab', name: 'Hara Bhara Kabab', local: 'हरा भरा कबाब', emoji: '🟢', course: 'starter', level: 1, prep: 20, cook: 15, serves: 4,
    taste: { herby: 4, savory: 4, spicy: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['party', 'kids', 'healthy'],
    desc: 'Bright green patties of spinach, peas and potato, pan-fried until crisp.',
    story: '“Hara bhara” means lush green: a vegetarian party favorite from North Indian restaurants.',
    equip: ['Pan', 'Food processor'], ing: [[200, 'g', 'spinach', 'blanched and squeezed'], [150, 'g', 'green peas', 'boiled'], [2, '', 'potatoes', 'boiled'], [1, 'tbsp', 'ginger-green chili paste'], [3, 'tbsp', 'besan', 'roasted'], [1, 'tsp', 'chaat masala'], [0.5, 'tsp', 'garam masala'], [1, 'tsp', 'salt'], [16, '', 'cashews', 'one per kabab'], [4, 'tbsp', 'oil']],
    steps: [['Mix', 'Pulse spinach and peas coarsely; mix with potato, besan, spices and salt.'], ['Shape', 'Shape 16 patties, press a cashew into each.'], ['Fry', '[[shallow-fry|Shallow-fry]] 3 minutes per side until crisp.', 6]],
    tips: ['Squeeze spinach very dry.'], mistakes: ['Wet mix: patties break.'], vars: ['Air fry at {{190C}} 12 minutes.'], serve: 'Mint chutney.' });

  X(Object.assign({}, IN, { area: 'Uttar Pradesh', styles: ['mughlai', 'restaurant'] }), { id: 'dahi-kebab', name: 'Dahi ke Kebab', local: 'दही के कबाब', emoji: '🤍', course: 'starter', level: 2, prep: 25, cook: 15, rest: 480, serves: 4,
    taste: { rich: 4, sour: 2, savory: 3, aromatic: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['party', 'impress'],
    desc: 'Crisp outside, molten and creamy inside: hung-yogurt kebabs with paneer, onion and spices.',
    story: 'A Lucknowi Awadhi delicacy, made for vegetarian guests at royal feasts.',
    equip: ['Muslin', 'Pan'], ing: [[500, 'g', 'yogurt', 'hung overnight'], [100, 'g', 'paneer', 'grated'], [1, '', 'onion', 'finely chopped, fried golden'], [2, '', 'green chilies'], [1, 'tbsp', 'ginger'], [1, 'handful', 'cilantro'], [3, 'tbsp', 'roasted besan'], [0.5, 'tsp', 'cardamom powder'], [0.75, 'tsp', 'salt'], [60, 'g', 'breadcrumbs'], [4, 'tbsp', 'oil']],
    steps: [['Mix', 'Mix hung curd, paneer, onion, chilies, ginger, cilantro, besan, cardamom and salt. Chill 30 minutes.', 30], ['Shape', 'Shape soft patties and coat in breadcrumbs.'], ['Fry', '[[shallow-fry|Shallow-fry]] gently until golden, 2 minutes per side.', 4, 'Handle gently: the inside is creamy.']],
    tips: ['Very thick hung curd is essential.'], mistakes: ['Watery curd: kebabs melt.'], vars: ['Stuff with chopped nuts.'], serve: 'Mint chutney.' });

  X(Object.assign({}, IN, { area: 'Pan-India', styles: ['restaurant'] }), { id: 'corn-cheese-balls', name: 'Corn Cheese Balls', local: 'कॉर्न चीज़ बॉल्स', emoji: '🧀', course: 'starter', level: 1, prep: 20, cook: 15, serves: 4,
    taste: { rich: 5, savory: 4, spicy: 2 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['party', 'kids', 'rainy-day'],
    desc: 'Crunchy breadcrumb-coated balls of potato, sweet corn and gooey melting cheese.',
    story: 'A café and party favorite across India, loved by kids for the cheese pull.',
    equip: ['Kadai'], ing: [[3, '', 'potatoes', 'boiled, mashed'], [150, 'g', 'sweet corn', 'boiled'], [150, 'g', 'mozzarella', 'cubed'], [2, '', 'green chilies'], [0.5, 'tsp', 'oregano'], [0.5, 'tsp', 'chili flakes'], [0.75, 'tsp', 'salt'], [2, 'tbsp', 'cornstarch', 'plus slurry for coating'], [80, 'g', 'breadcrumbs'], [1, 'l', 'oil', 'for frying']],
    steps: [['Mix', 'Mix potato, corn, chilies, herbs, salt and cornstarch.'], ['Stuff', 'Wrap each mozzarella cube in the mixture, roll smooth.'], ['Coat and fry', 'Dip in cornstarch slurry, roll in breadcrumbs and [[deep-fry]] at {{180C}} until golden, 2–3 minutes.', 3]],
    tips: ['Chill before frying so they don’t burst.'], mistakes: ['Cracks: cheese leaks out.'], vars: ['Air fry for a lighter version.'], serve: 'Ketchup or mayo dip.' });

  X(US, { id: 'stuffed-mushrooms', name: 'Garlic Cheese Stuffed Mushrooms', local: 'Stuffed mushrooms', emoji: '🍄', course: 'starter', level: 1, prep: 15, cook: 20, serves: 4,
    taste: { umami: 5, rich: 4, herby: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['party', 'impress', 'date-night'],
    desc: 'Mushroom caps filled with garlicky cream cheese, Parmesan, herbs and crisp breadcrumbs.',
    story: 'A cocktail-party classic since the 1950s.',
    equip: ['Baking tray'], ing: [[20, '', 'button or cremini mushrooms', 'stems removed and chopped'], [2, 'tbsp', 'butter'], [2, 'clove', 'garlic'], [120, 'g', 'cream cheese'], [40, 'g', 'Parmesan'], [3, 'tbsp', 'breadcrumbs'], [1, 'tbsp', 'parsley'], [0.5, 'tsp', 'salt']],
    steps: [['Filling', 'Sauté chopped stems and garlic in butter until dry; mix with cream cheese, Parmesan, parsley and salt.', 5], ['Fill', 'Fill caps, top with breadcrumbs.'], ['Bake', 'Bake at {{200C}} 15–18 minutes until golden.', 16]],
    tips: ['Pat mushroom caps dry.'], mistakes: ['Watery filling.'], vars: ['Spinach and feta filling.'], serve: 'Warm.' });

  X({ country: 'Mexico', flag: '🇲🇽', region: 'Latin America' }, { id: 'loaded-nachos', name: 'Loaded Bean Nachos', local: 'Nachos', emoji: '🧀', course: 'starter', level: 1, prep: 15, cook: 10, serves: 4,
    taste: { savory: 4, rich: 4, spicy: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['bake'], tags: ['party', 'kids', 'quick'],
    desc: 'Tortilla chips piled with beans, melted cheese, jalapeños, salsa, guacamole and sour cream.',
    story: 'Invented in 1943 by Ignacio “Nacho” Anaya in Piedras Negras, Mexico, for hungry visitors when the kitchen was closed.',
    equip: ['Large baking tray'], ing: [[250, 'g', 'tortilla chips'], [300, 'g', 'black or refried beans'], [200, 'g', 'cheddar and Monterey Jack', 'grated'], [2, '', 'jalapeños', 'sliced'], [150, 'g', 'pico de gallo salsa'], [150, 'g', 'guacamole'], [100, 'g', 'sour cream'], [1, 'handful', 'cilantro']],
    steps: [['Layer', 'Layer chips, beans, cheese and jalapeños twice on the tray.'], ['Bake', 'Bake at {{200C}} 8–10 minutes until the cheese melts.', 9], ['Top', 'Top with salsa, guacamole, sour cream and cilantro.']],
    tips: ['Layering stops naked chips.'], mistakes: ['Topping cold toppings before baking.'], vars: ['Add corn and peppers.'], serve: 'Immediately.' });

  X(IC, { id: 'honey-chilli-potato', name: 'Honey Chilli Potato', local: 'हनी चिली पोटैटो', emoji: '🍟', course: 'starter', level: 1, prep: 15, cook: 20, serves: 3,
    taste: { sweet: 4, spicy: 3, savory: 3, sour: 2 }, diet: ['vegetarian'], methods: ['deep-fry', 'stir-fry'], tags: ['party', 'street-food', 'kids'],
    desc: 'Crispy potato fingers tossed in a sticky honey-chili-garlic glaze with sesame seeds.',
    story: 'A Delhi Indo-Chinese street and restaurant favorite.',
    equip: ['Kadai', 'Wok'], ing: [[3, '', 'potatoes', 'fingers, parboiled'], [3, 'tbsp', 'cornstarch'], [1, 'l', 'oil', 'for frying'], [4, 'clove', 'garlic'], [1, '', 'onion', 'petals'], [2, 'tbsp', 'honey'], [1, 'tbsp', 'soy sauce'], [1, 'tbsp', 'red chili sauce'], [1, 'tsp', 'vinegar'], [1, 'tsp', 'chili flakes'], [1, 'tbsp', 'sesame seeds'], [2, '', 'scallions']],
    steps: [['Coat and fry', 'Toss potatoes in cornstarch and [[deep-fry]] until crisp, twice for extra crunch.', 8], ['Sauce', 'Stir-fry garlic and onion, add soy, chili sauce, vinegar and chili flakes.'], ['Glaze', 'Toss potatoes in, turn off heat, add honey and sesame; toss quickly.']],
    tips: ['Honey goes in off the heat so it doesn’t burn.'], mistakes: ['Soggy fries: double-fry.'], vars: ['Honey chilli cauliflower.'], serve: 'Immediately.' });

  X(Object.assign({}, IN, { area: 'Pan-India', styles: ['restaurant', 'indo-chinese'] }), { id: 'crispy-corn', name: 'Crispy Corn', local: 'क्रिस्पी कॉर्न', emoji: '🌽', course: 'starter', level: 1, prep: 10, cook: 15, serves: 3,
    taste: { spicy: 3, savory: 4, sour: 2 }, diet: ['vegan', 'gluten-free'], methods: ['deep-fry'], tags: ['party', 'quick', 'rainy-day'],
    desc: 'Golden fried sweet corn kernels tossed with onion, chili, chaat masala and lemon.',
    story: 'A modern Indian restaurant starter that took over every menu in the 2010s.',
    equip: ['Kadai'], ing: [[300, 'g', 'sweet corn kernels', 'boiled and dried'], [3, 'tbsp', 'cornstarch'], [2, 'tbsp', 'rice flour'], [0.5, 'tsp', 'salt'], [1, 'l', 'oil', 'for frying'], [1, '', 'onion', 'finely chopped'], [1, '', 'green bell pepper', 'finely chopped'], [1, 'tsp', 'chaat masala'], [1, 'tsp', 'Kashmiri chili powder'], [1, 'tbsp', 'lemon juice'], [1, 'handful', 'cilantro']],
    steps: [['Coat', 'Toss dry corn with cornstarch, rice flour and salt; sprinkle a little water so it clings.'], ['Fry', '[[deep-fry]] in batches until crisp, 3–4 minutes. Use a splatter guard.', 4, 'Corn pops; keep a lid nearby.'], ['Toss', 'Toss with onion, pepper, spices, lemon and cilantro.']],
    tips: ['Dry corn thoroughly.'], mistakes: ['Wet corn: no crunch.'], vars: ['Schezwan crispy corn.'], serve: 'Immediately.' });

  X(US, { id: 'spinach-artichoke-dip', name: 'Spinach Artichoke Dip', local: 'Spinach artichoke dip', emoji: '🥬', course: 'starter', level: 1, prep: 10, cook: 20, serves: 6,
    taste: { rich: 5, savory: 4, herby: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['bake'], tags: ['party', 'make-ahead'],
    desc: 'Hot, bubbling, creamy dip of spinach, artichokes, cream cheese and Parmesan.',
    story: 'An American party staple since the 1950s, popularized by restaurant chains in the 1990s.',
    equip: ['Baking dish'], ing: [[200, 'g', 'spinach', 'wilted, squeezed'], [200, 'g', 'artichoke hearts', 'chopped'], [200, 'g', 'cream cheese'], [100, 'g', 'sour cream'], [80, 'g', 'mozzarella'], [50, 'g', 'Parmesan'], [2, 'clove', 'garlic'], [0.5, 'tsp', 'chili flakes'], [0.5, 'tsp', 'salt']],
    steps: [['Mix', 'Mix everything except half the mozzarella.'], ['Bake', 'Top with remaining mozzarella; bake at {{190C}} 20 minutes until bubbling.', 20]],
    tips: ['Squeeze spinach very dry.'], mistakes: ['Watery dip.'], vars: ['Add jalapeños.'], serve: 'Tortilla chips, pita or crackers.' });

  /* ================= SIDES & CHUTNEYS ================= */
  X(Object.assign({}, IN, { area: 'Punjab', styles: ['dhaba', 'home-style'] }), { id: 'jeera-aloo', name: 'Jeera Aloo', local: 'जीरा आलू', emoji: '🥔', course: 'side', level: 1, prep: 5, cook: 15, serves: 3,
    taste: { savory: 4, aromatic: 4, sour: 2 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['quick', 'budget', 'weeknight', 'kids'],
    desc: 'Boiled potatoes tossed in cumin-crackling oil with green chili, amchur and cilantro.',
    story: 'The simplest, most loved potato side in North India, perfect with dal and rotis.',
    equip: ['Kadai'], ing: [[500, 'g', 'potatoes', 'boiled, cubed'], [3, 'tbsp', 'oil'], [1.5, 'tsp', 'cumin seeds'], [2, '', 'green chilies'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'ground coriander'], [1, 'tsp', 'amchur'], [0.75, 'tsp', 'salt'], [1, 'handful', 'cilantro']],
    steps: [['Tadka', 'Crackle cumin and chilies in hot oil ([[tadka]]).'], ['Toss', 'Add potatoes, spices and salt; toss on medium-high 5–7 minutes until crisp-edged.', 6], ['Finish', 'Add amchur and cilantro.']],
    tips: ['Use cold boiled potatoes so they hold shape.'], mistakes: ['Mushy potatoes.'], vars: ['Jeera aloo with peas.'], serve: 'Puri or dal-rice.' });

  X(Object.assign({}, IN, { area: 'Tamil Nadu', styles: ['south-indian', 'home-style'] }), { id: 'cabbage-poriyal', name: 'Cabbage Poriyal', local: 'முட்டைகோஸ் பொரியல்', emoji: '🥬', course: 'side', level: 1, prep: 10, cook: 10, serves: 4,
    taste: { savory: 3, herby: 3, sweet: 2 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['healthy', 'quick', 'budget'],
    desc: 'Shredded cabbage stir-fried with mustard seeds, urad dal, curry leaves and fresh coconut.',
    story: 'Poriyal is the dry vegetable side of every Tamil meal.',
    equip: ['Kadai'], ing: [[500, 'g', 'cabbage', 'finely shredded'], [1, 'tbsp', 'coconut oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'urad dal'], [2, '', 'dried red chilies'], [10, 'leaf', 'curry leaves'], [0.25, 'tsp', 'ground turmeric'], [0.75, 'tsp', 'salt'], [50, 'g', 'grated coconut']],
    steps: [['Tadka', 'Crackle mustard seeds, then urad dal, chilies and curry leaves.'], ['Cook', 'Add cabbage, turmeric and salt; cook uncovered 6–8 minutes until tender-crisp.', 7], ['Coconut', 'Toss in coconut.']],
    tips: ['No water: it cooks in its own moisture.'], mistakes: ['Overcooking: soggy.'], vars: ['Beans or carrot poriyal.'], serve: 'Rice, sambar and rasam.' });

  X(Object.assign({}, IN, { area: 'Pan-India', styles: ['home-style'] }), { id: 'kachumber', name: 'Kachumber Salad', local: 'कचुम्बर', emoji: '🥗', course: 'salad', level: 1, prep: 10, cook: 0, serves: 4,
    taste: { sour: 3, herby: 3, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['quick', 'healthy', 'summer'],
    desc: 'Crunchy diced cucumber, tomato and onion with lemon, chili and chaat masala.',
    story: 'India’s everyday salad, served beside every curry and biryani.',
    equip: ['Knife', 'Bowl'], ing: [[1, '', 'cucumber', 'diced'], [2, '', 'tomatoes', 'diced'], [1, '', 'onion', 'diced'], [1, '', 'green chili'], [1, 'handful', 'cilantro'], [1, 'tbsp', 'lemon juice'], [0.5, 'tsp', 'chaat masala'], [0.5, 'tsp', 'salt']],
    steps: [['Dice', '[[dice|Dice]] vegetables small and evenly.'], ['Season', 'Toss with lemon, chaat masala, salt and cilantro just before serving.']],
    tips: ['Salt at the last minute to keep it crunchy.'], mistakes: ['Dressing early: watery.'], vars: ['Add roasted peanuts or pomegranate.'], serve: 'With any Indian meal.' });

  X(US, { id: 'coleslaw', name: 'Creamy Coleslaw', local: 'Coleslaw', emoji: '🥬', course: 'salad', level: 1, prep: 15, cook: 0, serves: 6,
    taste: { sour: 3, sweet: 2, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'party', 'quick', 'kids'],
    desc: 'Crunchy shredded cabbage and carrot in a tangy-creamy dressing.',
    story: 'From the Dutch “koolsla” (cabbage salad), brought to New York by Dutch settlers.',
    equip: ['Large bowl'], ing: [[400, 'g', 'cabbage', 'finely shredded'], [1, '', 'carrot', 'grated'], [4, 'tbsp', 'eggless mayo'], [2, 'tbsp', 'yogurt'], [1, 'tbsp', 'apple cider vinegar'], [1, 'tsp', 'sugar'], [1, 'tsp', 'mustard'], [0.5, 'tsp', 'salt']],
    steps: [['Dressing', 'Whisk mayo, yogurt, vinegar, sugar, mustard and salt.'], ['Toss', 'Toss with vegetables; chill 20 minutes.']],
    tips: ['Use eggless mayo for pure veg.'], mistakes: ['Thick-cut cabbage: chewy.'], vars: ['Vinegar slaw without mayo (vegan).'], serve: 'Burgers and sandwiches.' });

  X(FR, { id: 'roasted-vegetables', name: 'Herb Roasted Vegetables', local: 'Légumes rôtis', emoji: '🥕', course: 'side', level: 1, prep: 15, cook: 35, serves: 4,
    taste: { savory: 3, sweet: 3, herby: 4 }, diet: ['vegan', 'gluten-free'], methods: ['roast'], tags: ['healthy', 'meal-prep', 'budget'],
    desc: 'Caramelized carrots, potatoes, peppers, zucchini and onions with olive oil, garlic and herbs.',
    story: 'The universal side that turns any vegetables into something sweet and golden.',
    equip: ['Large baking tray'], ing: [[2, '', 'carrots'], [3, '', 'potatoes'], [1, '', 'red bell pepper'], [1, '', 'zucchini'], [1, '', 'red onion'], [4, 'clove', 'garlic', 'whole'], [4, 'tbsp', 'olive oil'], [1, 'tsp', 'dried mixed herbs'], [1, 'tsp', 'salt'], [0.5, 'tsp', 'black pepper']],
    steps: [['Cut', 'Cut vegetables into even chunks; harder ones smaller.'], ['Roast', 'Toss with oil, herbs and salt; [[roast]] at {{220C}} 35 minutes, turning once, in a single layer.', 35, 'Space on the tray = caramelization.']],
    tips: ['Squeeze roasted garlic over at the end.'], mistakes: ['Crowded tray: steamed vegetables.'], vars: ['Add chickpeas and feta.'], serve: 'With anything.' });

  X({ country: 'Mexico', flag: '🇲🇽', region: 'Latin America' }, { id: 'mexican-rice', name: 'Mexican Red Rice', local: 'Arroz rojo', emoji: '🍚', course: 'side', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { savory: 4, aromatic: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['party', 'weeknight'],
    desc: 'Fluffy rice toasted in oil then simmered in a tomato-garlic broth.',
    story: 'Served beside almost every Mexican main; toasting the rice first is the secret.',
    equip: ['Pot with lid', 'Blender'], ing: [[300, 'g', 'long-grain rice', 'rinsed'], [3, 'tbsp', 'oil'], [2, '', 'tomatoes'], [0.5, '', 'onion'], [2, 'clove', 'garlic'], [500, 'ml', 'vegetable stock'], [1, 'tsp', 'salt'], [80, 'g', 'peas and carrots'], [1, 'handful', 'cilantro']],
    steps: [['Toast', 'Fry rice in oil until golden, 5 minutes.', 5], ['Broth', 'Blend tomatoes, onion and garlic; add to rice and fry 2 minutes. Add stock, salt and vegetables.'], ['Cook', 'Cover and cook on low 18 minutes; rest 5.', 23]],
    tips: ['Don’t lift the lid while cooking.'], mistakes: ['Skipping the toasting: mushy rice.'], vars: ['Green rice with poblano and cilantro.'], serve: 'With beans and tacos.' });

  X(Object.assign({}, IN, { area: 'Kerala', styles: ['south-indian'] }), { id: 'coconut-rice', name: 'Coconut Rice', local: 'தேங்காய் சாதம்', emoji: '🥥', course: 'side', level: 1, prep: 5, cook: 10, serves: 3,
    taste: { savory: 3, rich: 3, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['quick', 'festive'],
    desc: 'Rice tossed with fresh coconut, cashews and a mustard-curry leaf tempering.',
    story: 'A festival and temple-offering rice in South India, especially on Varalakshmi Vratham.',
    equip: ['Kadai'], ing: [[450, 'g', 'cooked rice', 'cooled'], [2, 'tbsp', 'coconut oil'], [1, 'tsp', 'mustard seeds'], [1, 'tsp', 'chana dal'], [1, 'tsp', 'urad dal'], [12, '', 'cashews'], [2, '', 'dried red chilies'], [10, 'leaf', 'curry leaves'], [1, 'tsp', 'ginger'], [100, 'g', 'grated coconut'], [0.75, 'tsp', 'salt']],
    steps: [['Tadka', 'Make a [[tadka]] with mustard, dals, cashews, chilies, curry leaves and ginger.'], ['Coconut', 'Add coconut, toast 1 minute.'], ['Rice', 'Fold in rice and salt.']],
    tips: ['Fresh coconut is key.'], mistakes: ['Browning the coconut too much.'], vars: ['Tamarind rice, lemon rice.'], serve: 'Potato fry and papad.' });

  X(Object.assign({}, IN, { area: 'Pan-India', styles: ['chaat'] }), { id: 'green-chutney', name: 'Green Chutney (Mint-Cilantro)', local: 'हरी चटनी', emoji: '🟢', course: 'sauce', level: 1, prep: 10, cook: 0, serves: 8,
    taste: { herby: 5, sour: 3, spicy: 3 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['quick', 'party'],
    desc: 'Vibrant cilantro, mint, green chili and lemon chutney. India’s all-purpose sauce.',
    story: 'Every chaat, sandwich and kebab in India comes with this green chutney.',
    equip: ['Blender'], ing: [[1, 'bunch', 'cilantro'], [0.5, 'bunch', 'mint leaves'], [3, '', 'green chilies'], [1, 'piece', 'ginger', 'small'], [2, 'tbsp', 'lemon juice'], [1, 'tbsp', 'roasted chana dal or peanuts'], [0.5, 'tsp', 'chaat masala'], [0.5, 'tsp', 'salt'], [2, '', 'ice cubes']],
    steps: [['Blend', 'Blend everything with ice cubes to a smooth paste.', 0, 'Ice keeps the chutney bright green.'], ['Store', 'Store in a jar topped with a little lemon juice.']],
    tips: ['Add yogurt for a creamy dip.'], mistakes: ['Warm blending: turns dark.'], vars: ['Coconut green chutney.'], serve: 'Chaat, sandwiches, pakoras, kebabs.', store: 'Fridge 4 days, freezer 1 month.' });

  X(Object.assign({}, IN, { area: 'Pan-India', styles: ['chaat'] }), { id: 'imli-chutney', name: 'Sweet Tamarind-Date Chutney', local: 'इमली की चटनी', emoji: '🟤', course: 'sauce', level: 1, prep: 5, cook: 20, serves: 10,
    taste: { sweet: 4, sour: 4, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['make-ahead', 'party'],
    desc: 'Sticky sweet-sour chutney of tamarind, dates, jaggery and roasted cumin.',
    story: 'The sweet half of every chaat, balancing the spicy green chutney.',
    equip: ['Saucepan', 'Blender'], ing: [[80, 'g', 'tamarind', 'seedless'], [100, 'g', 'pitted dates'], [100, 'g', 'jaggery'], [500, 'ml', 'water'], [1, 'tsp', 'roasted cumin powder'], [1, 'tsp', 'dry ginger powder'], [1, 'tsp', 'Kashmiri chili powder'], [0.5, 'tsp', 'black salt']],
    steps: [['Simmer', 'Simmer tamarind, dates and water 10 minutes.', 10], ['Blend', 'Blend and strain.'], ['Thicken', 'Add jaggery and spices; simmer 8 minutes until syrupy.', 8]],
    tips: ['Thickens when cool.'], mistakes: ['Not straining: fibrous.'], vars: ['Saunth (with dry ginger only).'], serve: 'Chaat, samosa, pakora.', store: 'Fridge 1 month.' });

  X(Object.assign({}, IN, { area: 'Tamil Nadu', styles: ['south-indian'] }), { id: 'tomato-chutney', name: 'South Indian Tomato Chutney', local: 'தக்காளி சட்னி', emoji: '🍅', course: 'sauce', level: 1, prep: 5, cook: 15, serves: 6,
    taste: { sour: 3, spicy: 3, savory: 3 }, diet: ['vegan', 'gluten-free'], methods: ['saute'], tags: ['quick', 'budget'],
    desc: 'Spicy-tangy red chutney of cooked tomatoes, onion and red chilies with a mustard tadka.',
    story: 'The red sidekick to white coconut chutney with idli and dosa.',
    equip: ['Pan', 'Blender'], ing: [[1, 'tbsp', 'oil'], [1, 'tsp', 'urad dal'], [3, '', 'dried red chilies'], [1, '', 'onion'], [3, '', 'tomatoes'], [2, 'clove', 'garlic'], [1, 'tsp', 'tamarind paste'], [0.5, 'tsp', 'salt'], [1, 'tsp', 'oil', 'for tadka'], [0.5, 'tsp', 'mustard seeds'], [8, 'leaf', 'curry leaves']],
    steps: [['Cook', 'Fry dal and chilies, add onion, garlic and tomatoes; cook until mushy.', 10], ['Blend', 'Blend with tamarind and salt.'], ['Tadka', 'Pour over a [[tadka]] of mustard seeds and curry leaves.']],
    tips: ['Adjust chilies to taste.'], mistakes: ['Raw tomato taste: cook fully.'], vars: ['Onion-tomato kara chutney.'], serve: 'Idli, dosa, uttapam.' });
})();
