/* Americas, Caribbean & Oceania */
'use strict';
(function () {
  const A = DD.add;

  /* ---------------- Mexico & Latin America ---------------- */
  A({
    id: 'guacamole', name: 'Guacamole', local: 'Guacamole', country: 'Mexico', flag: '🇲🇽', region: 'Latin America',
    emoji: '🥑', course: 'sauce', level: 1, prep: 10, cook: 0, serves: 4,
    taste: { rich: 4, herby: 3, sour: 3, spicy: 2 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'],
    tags: ['party', 'quick', 'summer', 'healthy', 'kids'],
    desc: 'Chunky avocado with lime, onion, chile and cilantro. The perfect first recipe.',
    story: 'The Aztecs made “ahuacamolli” (avocado sauce) over 500 years ago in a molcajete, a volcanic stone mortar. Mexican cooks still mash it by hand, keeping it chunky rather than smooth. It’s your first lesson in knife skills and seasoning to taste.',
    equip: ['Molcajete or bowl and fork', 'Sharp knife'],
    ing: [[3, '', 'ripe avocados', 'yield to gentle pressure'], [0.25, '', 'white onion', 'finely diced'], [1, '', 'serrano or jalapeño chile', 'minced, seeds optional'], [1, 'handful', 'cilantro', 'chopped'],
      [1, '', 'lime', 'juiced'], [0.75, 'tsp', 'salt'], [1, '', 'tomato', 'seeded and diced, optional']],
    steps: [
      ['Make a paste', '[[mince|Mince]] the chile. In the bowl, mash half the onion, the chile, half the cilantro and the salt into a rough paste. Releasing the oils this way gives deeper flavor.', 0, 'This is how it’s done in a molcajete in Mexico.'],
      ['Cut the avocados', 'Halve the avocados around the seed, twist apart, remove the seed and scoop out the flesh with a spoon.'],
      ['Mash', 'Add avocado and mash with a fork, leaving it chunky.'],
      ['Season', 'Fold in lime juice, remaining onion, cilantro and tomato. [[season|Taste]] with a chip. Add more salt or lime until it pops.', 0, 'Always taste on a chip; chips are salty and change how it tastes.'],
    ],
    tips: ['[[dice|Dice]] the onion small and rinse it in cold water to tame its bite.'],
    mistakes: ['Underripe avocados.', 'Blending smooth: it should be rustic and chunky.'],
    vars: ['Add charred corn or pomegranate seeds.', 'Smoky: a spoonful of chipotle in adobo.'],
    serve: 'Totopos (tortilla chips), tacos, eggs.', store: 'Press film directly onto the surface; 1 day in the fridge.',
  });

  A({
    id: 'chicken-tinga', name: 'Chicken Tinga Tacos', local: 'Tacos de tinga de pollo', country: 'Mexico', flag: '🇲🇽', region: 'Latin America',
    emoji: '🌮', course: 'main', level: 1, prep: 15, cook: 35, serves: 4,
    taste: { smoky: 4, spicy: 3, savory: 4, sour: 2, sweet: 1 }, diet: ['dairy-free', 'gluten-free', 'high-protein'], methods: ['simmer'],
    tags: ['weeknight', 'party', 'kids', 'meal-prep', 'budget'],
    desc: 'Shredded chicken in a smoky chipotle-tomato sauce, piled on warm corn tortillas.',
    story: 'Tinga comes from Puebla, a city famous for its cooking. The chipotle (smoked, dried jalapeño) gives deep smoky heat. It’s the go-to filling for tacos, tostadas and quesadillas across Mexico.',
    equip: ['Pot', 'Blender', 'Frying pan'],
    ing: [[700, 'g', 'boneless chicken breast or thighs'], [1, '', 'onion', 'half for poaching, half sliced'], [2, 'clove', 'garlic'], [1, '', 'bay leaf'], [1, 'tsp', 'salt'],
      [400, 'g', 'tomatoes or canned tomatoes'], [3, '', 'chipotles in adobo', 'plus 1 tbsp sauce'], [0.5, 'tsp', 'dried oregano (Mexican)'], [2, 'tbsp', 'neutral oil'],
      '#To serve', [12, '', 'corn tortillas'], [1, '', 'avocado', 'sliced'], [100, 'g', 'queso fresco or feta', 'crumbled, optional'], [null, '', 'pickled red onion, cilantro and lime']],
    steps: [
      ['Poach the chicken', 'Put chicken in a pot with half the onion, 1 garlic clove, bay and salt; cover with water. [[poach|Poach]] at a gentle simmer 15–20 minutes until cooked. Save the broth and shred the chicken with two forks.', 18],
      ['Blend the sauce', 'Blend tomatoes, chipotles with adobo, remaining garlic, oregano and 120 ml of the broth until smooth.'],
      ['Onions', 'Cook sliced onion in oil 5 minutes until soft.'],
      ['Simmer', 'Pour in the sauce (it will splatter), [[simmer]] 5 minutes. Add the chicken and simmer 5 more until saucy but not soupy.', 10],
      ['Warm tortillas', 'Warm tortillas in a dry hot pan 30 seconds per side until soft and spotted. Keep wrapped in a towel.'],
      ['Assemble', 'Pile tinga on tortillas, top with avocado, cheese, onion, cilantro and lime.'],
    ],
    tips: ['Start with 2 chipotles and add more to taste; they are hot.'],
    mistakes: ['Cold tortillas crack. Always warm them.'],
    vars: ['Vegetarian: use jackfruit or mushrooms.', 'Tostadas: on crispy fried tortillas with refried beans.'],
    serve: 'Mexican rice, black beans and agua fresca.', store: 'Fridge 4 days.',
  });

  A({
    id: 'ceviche', name: 'Ceviche Clásico', local: 'Cebiche', country: 'Peru', flag: '🇵🇪', region: 'Latin America',
    emoji: '🐟', course: 'starter', level: 2, prep: 25, cook: 0, serves: 4,
    taste: { sour: 5, spicy: 3, herby: 3, savory: 3 }, diet: ['dairy-free', 'gluten-free', 'pescatarian', 'high-protein'], methods: ['no-cook'],
    tags: ['summer', 'healthy', 'impress', 'date-night'],
    desc: 'Ultra-fresh raw fish “cooked” in lime juice with chile, red onion and cilantro.',
    story: 'Ceviche is Peru’s national dish, with its own national holiday on June 28. The fish is cured in lime only minutes before serving, Peruvian style. The marinade, “leche de tigre” (tiger’s milk), is drunk as a hangover cure and aphrodisiac.',
    equip: ['Glass or ceramic bowl (not metal)', 'Very sharp knife'],
    ing: [[500, 'g', 'very fresh white fish (sea bass, sole, halibut)', 'sushi-grade, 2 cm cubes'], [1, 'tsp', 'salt'], [1, '', 'red onion', 'very thinly sliced'],
      [1, '', 'ají limo or habanero chile', 'minced, to taste'], [150, 'ml', 'fresh lime juice', 'about 10 limes, squeezed gently'], [1, 'clove', 'garlic', 'grated'], [1, 'tsp', 'fresh ginger', 'grated'],
      [1, 'handful', 'cilantro', 'chopped'], [4, '', 'ice cubes'], '#To serve', [1, '', 'sweet potato', 'boiled, sliced'], [1, '', 'corn on the cob (choclo)', 'boiled'], [1, 'handful', 'cancha (toasted corn)', 'optional']],
    steps: [
      ['Chill everything', 'Keep the fish very cold. Soak the onion in iced water 10 minutes to make it crisp and mild.'],
      ['Salt the fish', 'Put fish in the cold bowl and toss with salt. Rest 2 minutes.', 2, 'Salting first “opens” the fish so it absorbs the lime.'],
      ['Add chile', 'Add the chile, garlic and ginger and toss.'],
      ['Lime', 'Squeeze limes gently and pour the juice over, add ice cubes and stir. Leave just 2–5 minutes until the outside of the fish turns opaque but the center is still translucent.', 3, 'Squeeze limes gently; pressing too hard releases bitter oils from the peel.'],
      ['Finish', 'Remove the ice. Add drained onion and cilantro. [[season|Taste]] the leche de tigre for salt and acid.'],
      ['Serve immediately', 'Serve in chilled bowls with sweet potato, corn and cancha.'],
    ],
    tips: ['Ceviche waits for no one. Serve it the moment it’s made.'],
    mistakes: ['Marinating for hours: the fish turns rubbery and chalky.', 'Using fish that isn’t ultra-fresh.'],
    vars: ['Mixed seafood: prawns, octopus, scallops.', 'Add ají amarillo paste for color.'],
    serve: 'A cold Pisco sour.',
  });


  A({
    id: 'pao-de-queijo', name: 'Pão de Queijo', local: 'Pão de queijo', country: 'Brazil', flag: '🇧🇷', region: 'Latin America',
    emoji: '🧀', course: 'bread', level: 1, prep: 15, cook: 25, serves: 6,
    taste: { savory: 4, rich: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['bake'],
    tags: ['brunch', 'party', 'kids', 'make-ahead'],
    desc: 'Crisp, chewy, cheesy Brazilian bread puffs made with tapioca. Naturally gluten-free.',
    story: 'Enslaved cooks in 18th-century Minas Gerais made bread from leftover cassava starch after processing tapioca, enriched with cheese and milk from the farms. Today, Brazilians eat pão de queijo at breakfast and as a snack with coffee.',
    equip: ['Saucepan', 'Mixing bowl', 'Baking tray'],
    ing: [[250, 'g', 'tapioca starch (polvilho)', 'sour or sweet, or a mix'], [120, 'ml', 'milk'], [60, 'ml', 'water'], [60, 'ml', 'neutral oil'], [1, 'tsp', 'salt'],
      [2, '', 'eggs'], [150, 'g', 'Parmesan or Minas cheese', 'finely grated']],
    steps: [
      ['Scald', 'Preheat oven to {{200C}}. Boil milk, water, oil and salt. Pour over the tapioca starch and mix. It will be lumpy and gluey. Let it cool 10 minutes.', 10, 'Scalding gelatinizes the starch, giving the chewy, stretchy inside.'],
      ['Eggs', 'Beat in the eggs one at a time until smooth and sticky.'],
      ['Cheese', 'Mix in the cheese. The dough will be soft and sticky.'],
      ['Shape', 'With oiled hands, roll into 3 cm balls and place on the lined tray, spaced apart.'],
      ['Bake', 'Bake 20–25 minutes until puffed and golden.', 22],
    ],
    tips: ['Freeze shaped balls and bake from frozen (add 5 min).'],
    mistakes: ['Opening the oven early: they deflate.'],
    vars: ['Add herbs or a little crumbled bacon.'],
    serve: 'Warm with coffee.',
  });


  A({
    id: 'arepas', name: 'Arepas', local: 'Arepas', country: 'Venezuela', flag: '🇻🇪', region: 'Latin America',
    emoji: '🫓', course: 'bread', level: 1, prep: 15, cook: 20, serves: 4,
    taste: { savory: 3, rich: 3 }, diet: ['gluten-free', 'dairy-free'], methods: ['saute', 'bake'],
    tags: ['brunch', 'budget', 'kids', 'street-food'],
    desc: 'Golden corn cakes, crisp outside and fluffy inside, split and stuffed with anything.',
    story: 'Arepas have been made by indigenous peoples of Venezuela and Colombia for over 3,000 years. Both countries claim them proudly. In Venezuela, arepas are eaten at every meal; “areperas” serve them stuffed with dozens of fillings.',
    equip: ['Mixing bowl', 'Cast-iron pan'],
    ing: [[250, 'g', 'pre-cooked white cornmeal (masarepa, e.g. P.A.N.)'], [400, 'ml', 'warm water'], [1, 'tsp', 'salt'], [1, 'tbsp', 'neutral oil'],
      '#Reina pepiada filling (optional)', [300, 'g', 'cooked shredded chicken'], [1, '', 'avocado'], [2, 'tbsp', 'mayonnaise'], [1, 'tbsp', 'lime juice'], [1, 'handful', 'cilantro']],
    steps: [
      ['Make the dough', 'Mix water and salt, then gradually add masarepa, mixing with your hand, until a soft dough forms. Rest 5 minutes; it thickens. It should feel like play-dough and not crack.', 5],
      ['Shape', 'Divide into 8 balls and flatten into discs about {{1.5cm}} thick. Smooth any cracks at the edges with wet fingers.'],
      ['Cook', 'Cook in a lightly oiled pan over medium heat 6–8 minutes per side until a golden crust forms. They should sound hollow when tapped.', 14, 'For extra fluffiness, finish 10 min in a {{180C}} oven.'],
      ['Filling', 'Mash avocado with mayo and lime, mix in chicken and cilantro.'],
      ['Stuff', 'Split arepas with a knife (like a pita) and stuff generously.'],
    ],
    tips: ['Masarepa is NOT the same as cornmeal or masa harina. It must be pre-cooked.'],
    mistakes: ['Dough too dry: cracks at the edges.'],
    vars: ['Domino: black beans and white cheese.', 'Pabellón-style: black beans, sweet plantain and white cheese.'],
    serve: 'For breakfast, lunch or dinner, with butter and cheese at minimum.',
  });

  /* ---------------- North America ---------------- */

  A({
    id: 'mac-and-cheese', name: 'Baked Mac and Cheese', local: 'Macaroni and cheese', country: 'United States', flag: '🇺🇸', region: 'North America',
    emoji: '🧀', course: 'main', level: 1, prep: 15, cook: 35, serves: 6,
    taste: { rich: 5, savory: 4, umami: 3 }, diet: ['vegetarian'], methods: ['bake', 'simmer'],
    tags: ['comfort', 'kids', 'party', 'make-ahead', 'budget'],
    desc: 'Creamy cheddar sauce, tender macaroni and a crunchy golden crumb top.',
    story: 'Thomas Jefferson is often credited with popularizing macaroni and cheese in America after encountering it in Europe. But it was James Hemings, the enslaved chef he brought to train in France, who mastered and cooked it. It is a cornerstone of Southern soul food.',
    equip: ['Large pot', 'Saucepan', 'Baking dish (23×33 cm)'],
    ing: [[450, 'g', 'elbow macaroni'], [60, 'g', 'butter'], [40, 'g', 'all-purpose flour'], [750, 'ml', 'whole milk', 'warm'], [1, 'tsp', 'mustard powder'], [0.25, 'tsp', 'smoked paprika'],
      [350, 'g', 'sharp cheddar', 'grated'], [100, 'g', 'Gruyère or mozzarella', 'grated'], [1, 'tsp', 'salt'], '#Topping', [60, 'g', 'panko breadcrumbs'], [2, 'tbsp', 'butter', 'melted'], [30, 'g', 'Parmesan', 'grated']],
    steps: [
      ['Cook the pasta', 'Preheat oven to {{190C}}. Boil macaroni 2 minutes less than the package says. Drain.', 7, 'Undercook! It finishes in the oven, absorbing the sauce.'],
      ['Make a roux', 'Melt butter, whisk in flour and cook 2 minutes to make a white [[roux]].'],
      ['Béchamel', 'Gradually [[whisk]] in the warm milk until smooth. Simmer 5 minutes, stirring, until thick enough to coat a spoon.', 5],
      ['Cheese sauce', 'Off the heat, stir in mustard, paprika, salt and the cheeses until melted and smooth.', 0, 'Adding cheese off the heat stops it turning grainy or oily.'],
      ['Combine and top', 'Fold the pasta into the sauce. Pour into the dish. Mix panko, melted butter and Parmesan and scatter over.'],
      ['Bake', 'Bake 20–25 minutes until bubbling and golden. Rest 5 minutes.', 22],
    ],
    tips: ['Grate your own cheese; pre-shredded has anti-caking powder that makes sauce gritty.'],
    mistakes: ['Overcooking the pasta first.'],
    vars: ['Add bacon, jalapeños or lobster.', 'Stovetop: skip baking and serve creamy.'],
    serve: 'Collard greens, BBQ ribs or a crisp salad.',
  });

  A({
    id: 'pancakes', name: 'Fluffy Buttermilk Pancakes', local: 'Buttermilk pancakes', country: 'United States', flag: '🇺🇸', region: 'North America',
    emoji: '🥞', course: 'breakfast', level: 1, prep: 10, cook: 20, serves: 4,
    taste: { sweet: 3, rich: 3 }, diet: ['vegetarian'], methods: ['saute'],
    tags: ['brunch', 'kids', 'budget', 'festive'],
    desc: 'Tall, tender, golden pancakes with maple syrup and butter.',
    story: 'Pancakes are ancient, but the tall, fluffy American pancake depends on the chemistry of buttermilk reacting with baking soda to create bubbles. Diners across North America serve stacks of them with maple syrup, a gift of Indigenous peoples of the northeast.',
    equip: ['2 mixing bowls', 'Non-stick pan or griddle', 'Ladle'],
    ing: [[250, 'g', 'all-purpose flour'], [2, 'tbsp', 'sugar'], [2, 'tsp', 'baking powder'], [0.5, 'tsp', 'baking soda'], [0.5, 'tsp', 'salt'],
      [480, 'ml', 'buttermilk', 'or milk + 1 tbsp lemon juice'], [2, '', 'eggs'], [50, 'g', 'butter', 'melted'], [1, 'tsp', 'vanilla extract'], [null, '', 'maple syrup and butter', 'to serve']],
    steps: [
      ['Dry ingredients', 'Whisk flour, sugar, baking powder, soda and salt in a large bowl.'],
      ['Wet ingredients', 'In another bowl, whisk buttermilk, eggs, melted butter and vanilla.'],
      ['Combine gently', 'Pour wet into dry and [[fold]] with a spatula just until combined. LUMPS ARE GOOD.', 0, 'Overmixing develops gluten and makes tough, flat pancakes.'],
      ['Rest', 'Rest the batter 5–10 minutes. It thickens and bubbles.', 5],
      ['Cook', 'Heat the pan over medium and wipe with butter. Pour 60 ml of batter per pancake. Cook until bubbles appear across the surface and the edges look dry, 2 minutes. Flip once and cook 1 minute more.', 3, 'Only flip once and never press down with the spatula.'],
      ['Serve', 'Keep warm in a low oven. Stack high with butter and maple syrup.'],
    ],
    tips: ['First pancake is a test for pan temperature.'],
    mistakes: ['Too-high heat: burnt outside, raw inside.'],
    vars: ['Blueberry: scatter berries on each pancake after pouring.', 'Chocolate chip.'],
    serve: 'Bacon, fresh berries and coffee.',
  });

  A({
    id: 'chocolate-chip-cookies', name: 'Chocolate Chip Cookies', local: 'Chocolate chip cookies', country: 'United States', flag: '🇺🇸', region: 'North America',
    emoji: '🍪', course: 'dessert', level: 1, prep: 15, cook: 12, rest: 60, serves: 18,
    taste: { sweet: 5, rich: 4 }, diet: ['vegetarian'], methods: ['bake'],
    tags: ['kids', 'party', 'make-ahead', 'festive'],
    desc: 'Crisp edges, chewy centers, pools of melted chocolate and flaky salt.',
    story: 'Ruth Wakefield invented the chocolate chip cookie around 1938 at the Toll House Inn in Massachusetts, chopping a Nestlé chocolate bar into her cookie dough. Nestlé bought the recipe in exchange for a lifetime supply of chocolate.',
    equip: ['Mixing bowls', 'Electric mixer or wooden spoon', 'Baking trays and paper'],
    ing: [[170, 'g', 'butter', 'browned or softened'], [200, 'g', 'brown sugar'], [100, 'g', 'granulated sugar'], [1, '', 'egg', 'plus 1 yolk'], [2, 'tsp', 'vanilla extract'],
      [280, 'g', 'all-purpose flour'], [1, 'tsp', 'baking soda'], [1, 'tsp', 'salt'], [250, 'g', 'dark chocolate', 'chopped'], [1, 'pinch', 'flaky sea salt', 'to finish']],
    steps: [
      ['Brown the butter', 'Melt the butter over medium heat and keep cooking, swirling, until it foams and smells nutty, with brown flecks, about 5 minutes. Cool 10 minutes.', 5, 'Brown butter adds a deep toffee flavor. This is the bakery secret.'],
      ['Mix sugars', 'Whisk butter with both sugars 1 minute. Add egg, yolk and vanilla and whisk 30 seconds until glossy.'],
      ['Add flour', 'Fold in flour, baking soda and salt until just combined. Fold in chocolate.'],
      ['Chill', 'Chill the dough at least 1 hour (or up to 72 h).', 60, 'Chilled dough spreads less and tastes more caramelized.'],
      ['Scoop and bake', 'Preheat oven to {{180C}}. Scoop 50 g balls onto lined trays, 8 cm apart. Bake 10–12 minutes until the edges are golden but the centers look underdone.', 11],
      ['Finish', 'Sprinkle with flaky salt. Cool 5 minutes on the tray (they firm up) before moving.'],
    ],
    tips: ['Bang the tray on the counter halfway through baking for rippled edges.'],
    mistakes: ['Overbaking: they keep cooking on the hot tray.'],
    vars: ['Add toasted pecans or walnuts.', 'Double chocolate: replace 30 g flour with cocoa.'],
    serve: 'A cold glass of milk.', store: 'Airtight 5 days; dough freezes 3 months.',
  });

  A({
    id: 'gumbo', name: 'Chicken & Sausage Gumbo', local: 'Gumbo', country: 'United States', flag: '🇺🇸', region: 'North America',
    emoji: '🍲', course: 'soup', level: 3, prep: 25, cook: 120, serves: 8,
    taste: { savory: 5, smoky: 4, spicy: 3, rich: 4, umami: 4 }, diet: ['dairy-free', 'high-protein'], methods: ['simmer'],
    tags: ['party', 'winter', 'comfort', 'one-pot', 'make-ahead', 'rainy-day'],
    desc: 'Louisiana’s soulful stew built on a chocolate-dark roux, the holy trinity and smoked sausage.',
    story: 'Gumbo is Louisiana in a pot: French roux, Spanish peppers, West African okra (the word “gumbo” comes from the Bantu “ki ngombo”, okra), Choctaw filé powder, and German sausage. The first rule of Cajun cooking: “First, you make a roux.”',
    equip: ['Large heavy Dutch oven', 'Flat-edged wooden spoon'],
    ing: [[150, 'ml', 'neutral oil'], [100, 'g', 'all-purpose flour'], [2, '', 'onions', 'diced'], [1, '', 'green bell pepper', 'diced'], [3, 'stalk', 'celery', 'diced'], [5, 'clove', 'garlic', 'minced'],
      [1, 'kg', 'chicken thighs', 'boneless, chunks'], [400, 'g', 'smoked sausage (andouille)', 'sliced'], [2, 'l', 'chicken stock', 'warm'], [2, 'tsp', 'Cajun seasoning'], [1, 'tsp', 'dried thyme'],
      [3, '', 'bay leaves'], [0.5, 'tsp', 'cayenne'], [1, 'tsp', 'salt'], [4, '', 'scallions', 'sliced'], [1, 'handful', 'parsley'], [1, 'tsp', 'filé powder', 'optional']],
    steps: [
      ['Brown meats', 'Brown sausage and then the seasoned chicken in a little oil. Set aside.'],
      ['Make the dark roux', 'Add the oil to the pot, whisk in flour. Stir constantly over medium heat for 30–45 minutes until the color of dark chocolate.', 35, 'Never stop stirring and never walk away. If you see black specks, it burned. Start again. This is a [[roux]] at its most extreme.'],
      ['Add the trinity', 'Add onion, pepper and celery. They stop the roux cooking. Stir 5 minutes until soft, then add garlic.'],
      ['Add stock', 'Slowly add warm stock, stirring until smooth. Add spices, bay, chicken and sausage.'],
      ['Simmer', '[[simmer|Simmer]] uncovered 1 hour, [[skim|skimming]] fat from the surface.', 60],
      ['Finish', '[[season|Taste]]. Add scallions and parsley. Stir in filé off the heat if using.'],
    ],
    tips: ['Make the roux in the oven: {{180C}} for 1.5 h, stirring every 20 min. Less risk!'],
    mistakes: ['Burning the roux.', 'Boiling after adding filé (it gets stringy).'],
    vars: ['Seafood gumbo: prawns and crab, add in the last 10 min.', 'Add okra to thicken.'],
    serve: 'White rice and potato salad (yes, in the bowl, Louisiana style).', store: 'Fridge 4 days, freezer 3 months.',
  });

  A({
    id: 'poutine', name: 'Poutine (Mushroom Gravy)', local: 'Poutine', country: 'Canada', flag: '🇨🇦', region: 'North America',
    emoji: '🍟', course: 'snack', level: 2, prep: 20, cook: 30, serves: 4,
    taste: { savory: 5, rich: 5, umami: 4 }, diet: ['vegetarian'], methods: ['deep-fry', 'simmer'],
    tags: ['comfort', 'street-food', 'party', 'winter'],
    desc: 'Crispy fries topped with squeaky cheese curds and hot, rich gravy.',
    story: 'Created in rural Québec in the 1950s; one story says a customer asked to add cheese curds to his fries, and the owner replied “ça va faire une maudite poutine” (“that’ll make a damn mess”). Fresh curds must squeak against your teeth.',
    equip: ['Large pot for frying', 'Saucepan'],
    ing: ['#Gravy', [40, 'g', 'butter'], [30, 'g', 'all-purpose flour'], [1, 'clove', 'garlic', 'minced'], [750, 'ml', 'rich mushroom or vegetable stock'], [1, 'tbsp', 'soy sauce', 'for depth'], [1, 'tbsp', 'ketchup'], [1, 'tsp', 'Worcestershire sauce'], [0.5, 'tsp', 'black pepper'],
      '#Fries', [1, 'kg', 'russet potatoes', 'cut in 1 cm fries'], [2, 'l', 'neutral oil'], [1, 'tsp', 'salt'],
      '#Topping', [300, 'g', 'fresh cheese curds', 'room temperature']],
    steps: [
      ['Make gravy', 'Melt butter, whisk in flour and cook to a light brown [[roux]], 4 minutes. Add garlic, then whisk in stocks, ketchup, Worcestershire and pepper. [[simmer|Simmer]] 10 minutes until it coats a spoon. Keep hot.', 10],
      ['Prepare fries', 'Soak fries in cold water 15 minutes, then dry thoroughly.'],
      ['Double-fry', '[[deep-fry|Fry]] at {{150C}} for 5 minutes until soft. Drain. Increase to {{185C}} and fry again 3 minutes until crisp and golden. Salt.', 8],
      ['Assemble', 'Put hot fries in bowls, scatter curds over, then pour very hot gravy on top so the curds just begin to melt.', 0, 'Curds at room temperature, gravy very hot. That’s the perfect half-melted, squeaky poutine.'],
    ],
    tips: ['Torn fresh mozzarella works if you can’t find curds.'],
    mistakes: ['Cold curds and lukewarm gravy.'],
    vars: ['Add pulled pork, smoked meat or a fried egg.'],
    serve: 'As a late-night feast or side.',
  });

  /* ---------------- Caribbean ---------------- */
  A({
    id: 'jerk-chicken', name: 'Jerk Chicken', local: 'Jerk chicken', country: 'Jamaica', flag: '🇯🇲', region: 'Caribbean',
    emoji: '🍗', course: 'main', level: 2, prep: 20, cook: 45, rest: 720, serves: 6,
    taste: { spicy: 5, smoky: 4, aromatic: 4, savory: 4, sweet: 2 }, diet: ['dairy-free', 'gluten-free', 'high-protein'], methods: ['grill', 'roast'],
    tags: ['summer', 'party', 'make-ahead'],
    desc: 'Chicken marinated overnight in fiery scotch bonnet, allspice and thyme, then smoked and charred.',
    story: 'Jerk was developed by the Maroons, Africans who escaped slavery and lived in Jamaica’s mountains. They cooked meat over pimento (allspice) wood in covered pits to hide the smoke. Roadside “jerk pans” made from oil drums still smoke across the island today.',
    equip: ['Blender', 'Grill or oven'],
    ing: ['#Jerk marinade', [6, '', 'scallions'], [3, '', 'scotch bonnet peppers', 'seeded for less heat'], [1, '', 'onion'], [5, 'clove', 'garlic'], [2, 'tbsp', 'fresh ginger'], [1, 'tbsp', 'fresh thyme leaves'],
      [1, 'tbsp', 'ground allspice'], [0.5, 'tsp', 'ground cinnamon'], [0.5, 'tsp', 'ground nutmeg'], [2, 'tbsp', 'brown sugar'], [3, 'tbsp', 'soy sauce', 'or tamari for gluten-free'], [2, 'tbsp', 'lime juice'], [3, 'tbsp', 'neutral oil'], [1.5, 'tsp', 'salt'],
      '#Chicken', [1.8, 'kg', 'chicken legs and thighs', 'bone-in, skin-on, slashed']],
    steps: [
      ['Blend marinade', 'Blend all marinade ingredients until smooth. Wear gloves when handling scotch bonnets!'],
      ['Marinate', 'Rub the marinade deep into the slashes. [[marinate|Marinate]] overnight (12–24 h).', 0, 'Long marination is essential. The flavor goes right to the bone.'],
      ['Grill indirect', 'Set up a grill for two-zone cooking. Cook the chicken on the cool side, lid closed, 35–40 minutes, turning occasionally. Add soaked allspice berries or wood chips to the coals for smoke.', 38],
      ['Char', 'Move to the hot side to [[char]] the skin 2–3 minutes per side until blistered and blackened in spots. Internal 80 °C for thighs.', 6],
      ['Oven method', 'No grill? Roast at {{220C}} on a rack for 40 minutes, then grill under the broiler 4–5 minutes to char.'],
      ['Rest and serve', '[[rest|Rest]] 5 minutes. Chop into pieces with a cleaver, Jamaican style.'],
    ],
    tips: ['Save some marinade (before it touches raw meat) to serve as a sauce.'],
    mistakes: ['Grilling only over high heat: burnt outside, raw near the bone.'],
    vars: ['Jerk pork, jerk tofu or jerk prawns.'],
    serve: 'Rice and peas, festival (sweet fried dumplings) and fried plantain.',
  });


  /* ---------------- Oceania ---------------- */
  A({
    id: 'pavlova', name: 'Pavlova', local: 'Pavlova', country: 'Australia', flag: '🇦🇺', region: 'Oceania',
    emoji: '🍰', course: 'dessert', level: 2, prep: 25, cook: 90, rest: 120, serves: 8,
    taste: { sweet: 5, sour: 2, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['bake'],
    tags: ['summer', 'festive', 'party', 'impress', 'make-ahead'],
    desc: 'A crisp meringue shell with a marshmallowy heart, whipped cream and tangy fresh fruit.',
    story: 'Named after Russian ballerina Anna Pavlova, who toured Australia and New Zealand in the 1920s. Both countries passionately claim to have invented it. It’s the centerpiece of every Australian Christmas, eaten in the middle of summer.',
    equip: ['Stand or electric mixer', 'Baking tray and paper', 'Spotlessly clean bowl'],
    ing: [[4, '', 'egg whites', 'room temperature'], [1, 'pinch', 'salt'], [220, 'g', 'caster sugar'], [2, 'tsp', 'cornstarch'], [1, 'tsp', 'white vinegar'], [1, 'tsp', 'vanilla extract'],
      '#Topping', [300, 'ml', 'heavy cream', 'whipped'], [400, 'g', 'mixed fruit (passion fruit, berries, kiwi, mango)']],
    steps: [
      ['Prepare', 'Preheat oven to {{150C}} (fan {{130C}}). Draw a 20 cm circle on baking paper and flip it over.'],
      ['Whip whites', 'Whip whites with salt to soft peaks.', 0, 'Any trace of yolk or grease stops whites from whipping. Wipe the bowl with lemon or vinegar first.'],
      ['Add sugar slowly', 'With the mixer on high, add sugar one spoon at a time over 5 minutes. Keep whipping until stiff, glossy and the sugar has dissolved (rub some between your fingers: no grit).', 8],
      ['Fold in', 'Sprinkle cornstarch, vinegar and vanilla over and [[fold]] in gently.', 0, 'Cornstarch and vinegar create the soft marshmallow center.'],
      ['Shape', 'Spoon onto the circle, making the sides higher than the middle like a nest.'],
      ['Bake', 'Put in the oven and immediately reduce to {{120C}}. Bake 75–90 minutes until crisp and dry outside.', 80],
      ['Cool in the oven', 'Turn off the oven, prop the door slightly open, and let it cool completely inside, 2 hours or more. This prevents cracking.', 120],
      ['Top and serve', 'Just before serving, top with whipped cream and fruit.'],
    ],
    tips: ['Cracks are normal and charming. The topping hides everything.'],
    mistakes: ['Adding sugar too fast: weeping, sticky meringue.', 'Topping too early: it softens.'],
    vars: ['Chocolate pavlova: fold in 2 tbsp cocoa.', 'Mini pavlovas: bake 45 min.'],
    serve: 'As the grand finale of a summer lunch.', store: 'Unfilled shell keeps 2 days airtight.',
  });

  A({
    id: 'poke-bowl', name: 'Ahi Poke Bowl', local: 'Poke', country: 'Hawaiʻi (USA)', flag: '🌺', region: 'Oceania',
    emoji: '🍣', course: 'main', level: 1, prep: 20, cook: 15, serves: 2,
    taste: { umami: 4, savory: 4, sweet: 2, herby: 2, spicy: 2 }, diet: ['dairy-free', 'pescatarian', 'high-protein'], methods: ['no-cook'],
    tags: ['summer', 'healthy', 'quick', 'date-night'],
    desc: 'Cubes of raw tuna in soy and sesame over rice with avocado, cucumber and seaweed.',
    story: '“Poke” (po-keh) means “to slice” in Hawaiian. Native Hawaiian fishermen seasoned the trimmings of their catch with sea salt, seaweed and roasted kukui nuts. Japanese immigrants added soy sauce and sesame, creating the modern version.',
    equip: ['Very sharp knife', 'Rice pot'],
    ing: [[300, 'g', 'sushi-grade ahi tuna', '2 cm cubes'], [2, 'tbsp', 'soy sauce'], [1, 'tbsp', 'toasted sesame oil'], [1, 'tsp', 'rice vinegar'], [1, 'tsp', 'fresh ginger', 'grated'],
      [2, '', 'scallions', 'sliced'], [0.25, '', 'sweet onion', 'thinly sliced'], [1, 'tsp', 'toasted sesame seeds'], [1, 'pinch', 'chili flakes'],
      '#Bowl', [300, 'g', 'cooked sushi rice', 'warm'], [1, '', 'avocado', 'sliced'], [0.5, '', 'cucumber', 'sliced'], [50, 'g', 'edamame'], [1, 'sheet', 'nori', 'cut in strips'], [1, 'tbsp', 'sriracha mayo', 'optional']],
    steps: [
      ['Cook rice', '[[wash-rice|Wash]] and cook the rice. Season with a splash of rice vinegar while warm.', 15],
      ['Dress the tuna', 'Mix soy, sesame oil, vinegar and ginger. Toss with tuna, onion, scallions, sesame seeds and chili. Chill 10 minutes (no longer).', 10, 'Use only fish labeled sushi- or sashimi-grade from a trusted fishmonger.'],
      ['Build bowls', 'Divide rice, top with poke, avocado, cucumber, edamame and nori. Drizzle with sriracha mayo.'],
    ],
    tips: ['Keep the fish ice cold until the last second.'],
    mistakes: ['Marinating for hours: the soy cures and toughens the fish.'],
    vars: ['Salmon poke, tofu poke (vegan), or cooked prawns.'],
    serve: 'Immediately, as a fresh lunch.',
  });

  A({
    id: 'kokoda', name: 'Kokoda', local: 'Kokoda', country: 'Fiji', flag: '🇫🇯', region: 'Oceania',
    emoji: '🥥', course: 'starter', level: 1, prep: 20, cook: 0, rest: 60, serves: 4,
    taste: { sour: 4, rich: 3, herby: 3, spicy: 2 }, diet: ['dairy-free', 'gluten-free', 'pescatarian', 'high-protein'], methods: ['no-cook'],
    tags: ['summer', 'healthy', 'impress'],
    desc: 'Fiji’s lime-cured fish in fresh coconut cream with chili, tomato and onion.',
    story: 'Found throughout the Pacific islands (as “ika mata” in the Cook Islands and “oka i’a” in Samoa), kokoda uses the islands’ two greatest treasures: just-caught reef fish and fresh coconut. Served in a coconut shell, it’s the taste of island life.',
    equip: ['Glass bowl'],
    ing: [[500, 'g', 'very fresh white fish (mahi-mahi, snapper)', '1.5 cm cubes'], [180, 'ml', 'lime juice'], [1, 'tsp', 'salt'], [200, 'ml', 'coconut cream'], [1, '', 'red onion', 'finely diced'],
      [1, '', 'tomato', 'seeded, diced'], [0.5, '', 'cucumber', 'diced'], [1, '', 'red chili', 'minced'], [1, 'handful', 'cilantro'], [1, '', 'red bell pepper', 'diced']],
    steps: [
      ['Cure the fish', 'Cover the fish with lime juice and salt. Refrigerate 1 hour, stirring occasionally, until opaque throughout.', 60],
      ['Drain', 'Drain off and discard most of the lime juice.'],
      ['Combine', 'Mix in coconut cream and the vegetables. [[season|Taste]] and adjust salt.'],
      ['Serve', 'Serve chilled, ideally in coconut shells.'],
    ],
    tips: ['Freshly grated coconut cream is incomparable if you can find it.'],
    mistakes: ['Leaving all the lime juice in: too sour.'],
    vars: ['Ika mata (Cook Islands): add more cucumber and spring onion.'],
    serve: 'With cassava chips or rice on a hot day.',
  });
})();
