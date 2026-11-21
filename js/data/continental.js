/* Continental: café & restaurant classics (Italian, French, Western) */
'use strict';
(function () {
  const A = (d) => DD.add(Object.assign({ styles: ['continental'] }, d));
  const IT = { country: 'Italy', flag: '🇮🇹', region: 'Europe' };
  const FR = { country: 'France', flag: '🇫🇷', region: 'Europe' };

  A(Object.assign({}, IT, {
    id: 'penne-arrabbiata', name: 'Penne Arrabbiata', local: 'Penne all’arrabbiata',
    emoji: '🍝', course: 'main', level: 1, prep: 5, cook: 20, serves: 2,
    taste: { spicy: 4, sour: 2, savory: 4, herby: 2 }, diet: ['vegan'], methods: ['simmer'],
    tags: ['weeknight', 'budget', 'quick', 'date-night'],
    desc: '“Angry” penne in a fiery tomato sauce with garlic, chili and olive oil. Pantry cooking at its best.',
    story: 'Arrabbiata means “angry” in Italian, from the heat of the chili. A Roman classic, it is proof that a few good ingredients (olive oil, garlic, chili and tomatoes) make a perfect dinner in 20 minutes.',
    equip: ['Large pot', 'Frying pan'],
    ing: [[200, 'g', 'penne rigate'], [4, 'tbsp', 'extra-virgin olive oil'], [4, 'clove', 'garlic', 'thinly sliced'], [1, 'tsp', 'red chili flakes', 'or 2 dried chilies'], [400, 'g', 'canned whole tomatoes', 'crushed by hand'], [0.75, 'tsp', 'salt'], [1, 'handful', 'parsley or basil', 'chopped'], [null, '', 'salt', 'for pasta water']],
    steps: [
      ['Boil water', 'Boil 3 L water and salt it well.'],
      ['Infuse oil', 'Gently warm oil, garlic and chili flakes on low heat until the garlic is pale golden, 3 minutes.', 0, 'Low heat infuses the oil. Burnt garlic ruins the sauce.'],
      ['Sauce', 'Add tomatoes and salt. [[simmer|Simmer]] 12–15 minutes until thick.', 13],
      ['Pasta', 'Cook penne 1 minute short of [[al-dente]]. Save a cup of pasta water.', 10],
      ['Toss', 'Toss penne in the sauce with a splash of pasta water for 1 minute until glossy. Add parsley.'],
    ],
    tips: ['Finish with a drizzle of raw olive oil.'],
    mistakes: ['Drained, dry pasta piled with sauce on top. Always toss together.'],
    vars: ['Add olives and capers for puttanesca.', 'Top with Parmesan if not vegan.'],
    serve: 'Garlic bread and a green salad.',
  }));

  A(Object.assign({}, IT, {
    id: 'fettuccine-alfredo', name: 'Fettuccine Alfredo', local: 'Fettuccine Alfredo',
    emoji: '🍝', course: 'main', level: 1, prep: 5, cook: 15, serves: 2,
    taste: { rich: 5, savory: 4, umami: 3 }, diet: ['vegetarian'], methods: ['simmer'],
    tags: ['comfort', 'kids', 'date-night', 'quick'],
    desc: 'Silky ribbons of pasta in a rich, glossy sauce of butter and Parmesan.',
    story: 'Alfredo di Lelio created “fettuccine al burro” in Rome in 1908 for his wife after childbirth. Hollywood stars Mary Pickford and Douglas Fairbanks loved it on their honeymoon and made it famous in America, where cream was added.',
    equip: ['Large pot', 'Wide pan'],
    ing: [[200, 'g', 'fettuccine'], [50, 'g', 'butter'], [150, 'ml', 'heavy cream', 'optional, café style'], [70, 'g', 'Parmigiano Reggiano', 'finely grated'], [0.5, 'tsp', 'black pepper'], [1, 'pinch', 'nutmeg'], [1, 'tbsp', 'parsley', 'chopped'], [null, '', 'salt', 'for pasta water']],
    steps: [
      ['Cook pasta', 'Cook fettuccine in salted water until [[al-dente]]. Save 200 ml pasta water.', 10],
      ['Butter sauce', 'Melt butter in a wide pan on low heat. Add cream (if using) and simmer 2 minutes.'],
      ['Toss', 'Add pasta and a splash of pasta water. Off the heat, add Parmesan in handfuls while tossing vigorously until it melts into a glossy sauce: an [[emulsify|emulsion]].', 0, 'Add cheese off the heat, or it turns stringy and clumpy.'],
      ['Season', 'Add pepper and nutmeg; loosen with pasta water if needed. Serve immediately with parsley.'],
    ],
    tips: ['Use real Parmigiano, not pre-grated.'],
    mistakes: ['Boiling the cheese: oily, grainy sauce.'],
    vars: ['Add sautéed mushrooms, broccoli or grilled chicken.', 'Indian café style: add a pinch of oregano and chili flakes.'],
    serve: 'Garlic bread and a crisp salad.',
  }));

  A(Object.assign({}, IT, {
    id: 'aglio-olio', name: 'Spaghetti Aglio e Olio', local: 'Spaghetti aglio, olio e peperoncino',
    emoji: '🧄', course: 'main', level: 1, prep: 5, cook: 12, serves: 2,
    taste: { savory: 4, spicy: 3, herby: 2 }, diet: ['vegan'], methods: ['simmer', 'saute'],
    tags: ['quick', 'budget', 'weeknight', 'date-night'],
    desc: 'Spaghetti with golden garlic, chili and olive oil. Five ingredients, 15 minutes, pure magic.',
    story: 'The midnight pasta of Naples and Rome, made when the cupboard is bare. It teaches the most important Italian pasta technique: emulsifying oil with starchy pasta water into a silky sauce.',
    equip: ['Large pot', 'Wide frying pan'],
    ing: [[200, 'g', 'spaghetti'], [5, 'tbsp', 'extra-virgin olive oil'], [5, 'clove', 'garlic', 'thinly sliced'], [0.5, 'tsp', 'red chili flakes'], [1, 'handful', 'parsley', 'finely chopped'], [null, '', 'salt', 'for pasta water']],
    steps: [
      ['Cook pasta', 'Cook spaghetti in well-salted water 2 minutes short of [[al-dente]]. Save a mug of pasta water.', 9],
      ['Garlic oil', 'Meanwhile, warm oil, garlic and chili in a cold pan over medium-low until the garlic is light golden, 3–4 minutes.', 0, 'Golden, never brown. Pull it off the heat the moment it colors.'],
      ['Emulsify', 'Add pasta and 100 ml pasta water to the pan. Toss vigorously over medium heat 1–2 minutes until the oil and water [[emulsify]] into a creamy sauce clinging to the spaghetti.', 2],
      ['Finish', 'Toss in parsley, [[season|taste]] for salt and serve.'],
    ],
    tips: ['Lots of tossing is what creates the sauce.'],
    mistakes: ['Burnt garlic: bitter.'],
    vars: ['Add prawns, mushrooms or a squeeze of lemon and zest.'],
    serve: 'On its own, with a glass of white wine.',
  }));

  A(Object.assign({}, IT, {
    id: 'veg-lasagna', name: 'Vegetable Lasagna', local: 'Lasagne alle verdure',
    emoji: '🫕', course: 'main', level: 2, prep: 40, cook: 45, serves: 6,
    taste: { rich: 5, savory: 4, herby: 3, umami: 3 }, diet: ['vegetarian'], methods: ['bake'],
    tags: ['party', 'make-ahead', 'comfort', 'kids', 'festive'],
    desc: 'Layers of pasta, herby tomato-vegetable sauce, creamy béchamel and bubbling mozzarella.',
    story: 'Lasagna has been baked in Emilia-Romagna since the Middle Ages. This vegetable version, with a béchamel white sauce, is a favorite on continental menus worldwide.',
    equip: ['Baking dish (23×33 cm)', '2 saucepans'],
    ing: ['#Vegetable ragù', [3, 'tbsp', 'olive oil'], [1, '', 'onion', 'chopped'], [3, 'clove', 'garlic'], [1, '', 'zucchini', 'diced'], [1, '', 'red bell pepper', 'diced'], [200, 'g', 'mushrooms', 'sliced'], [100, 'g', 'spinach'], [700, 'g', 'tomato passata'], [1, 'tsp', 'dried oregano'], [1, 'tsp', 'salt'], [1, 'handful', 'basil'],
      '#Béchamel', [50, 'g', 'butter'], [50, 'g', 'all-purpose flour'], [700, 'ml', 'milk', 'warm'], [0.5, 'tsp', 'salt'], [1, 'pinch', 'nutmeg'],
      '#Assembly', [12, 'sheet', 'lasagna sheets', 'no-boil'], [250, 'g', 'mozzarella', 'grated'], [60, 'g', 'Parmesan', 'grated']],
    steps: [
      ['Ragù', 'Cook onion and garlic in olive oil 5 minutes. Add zucchini, pepper and mushrooms; [[saute]] 8 minutes. Add passata, oregano and salt; [[simmer]] 15 minutes. Stir in spinach and basil.', 15],
      ['Béchamel', 'Make a white [[roux]] with butter and flour, then [[whisk]] in warm milk gradually. Simmer 5 minutes until thick. Season with salt and nutmeg.', 5],
      ['Layer', 'Preheat oven to {{190C}}. Spread a little ragù in the dish, then layer: pasta, ragù, béchamel, mozzarella. Repeat 3–4 times, finishing with béchamel, mozzarella and Parmesan.'],
      ['Bake', 'Cover with foil, bake 25 minutes; uncover and bake 15–20 minutes until golden and bubbling.', 45],
      ['Rest', 'Rest 15 minutes before cutting so the layers set.', 0, 'Cutting immediately makes it slide apart.'],
    ],
    tips: ['Make it a day ahead. It slices even better.'],
    mistakes: ['A watery ragù: cook it thick.'],
    vars: ['Add ricotta-spinach layers.', 'Mushroom-lentil “Bolognese” lasagna.'],
    serve: 'Green salad and garlic bread.', store: 'Fridge 4 days; freezes well.',
  }));

  A(Object.assign({}, IT, {
    id: 'minestrone', name: 'Minestrone', local: 'Minestrone',
    emoji: '🥣', course: 'soup', level: 1, prep: 20, cook: 40, serves: 6,
    taste: { savory: 4, herby: 4, umami: 2 }, diet: ['vegan', 'high-protein'], methods: ['simmer'],
    tags: ['healthy', 'budget', 'winter', 'meal-prep', 'one-pot', 'rainy-day'],
    desc: 'A hearty Italian vegetable soup with beans, small pasta and tomatoes.',
    story: 'Minestrone (“big soup”) is the thrifty Italian soup of whatever vegetables are in season. There is no single recipe; every region and season makes its own.',
    equip: ['Large pot'],
    ing: [[3, 'tbsp', 'olive oil'], [1, '', 'onion', 'diced'], [2, '', 'carrots', 'diced'], [2, 'stalk', 'celery', 'diced'], [3, 'clove', 'garlic'], [1, '', 'zucchini', 'diced'], [100, 'g', 'green beans', 'chopped'],
      [400, 'g', 'canned chopped tomatoes'], [1.5, 'l', 'vegetable stock'], [1, 'can', 'cannellini or kidney beans', 'drained'], [80, 'g', 'small pasta (ditalini)'], [1, 'handful', 'spinach or kale'], [1, 'tsp', 'dried oregano'], [1, 'tsp', 'salt'], [1, 'handful', 'basil']],
    steps: [
      ['Soffritto', '[[sweat|Sweat]] onion, carrot and celery in olive oil 8 minutes. Add garlic for 1 minute.', 8],
      ['Vegetables', 'Add zucchini and beans; cook 3 minutes. Add tomatoes, stock, oregano and salt. [[simmer|Simmer]] 20 minutes.', 20],
      ['Beans and pasta', 'Add beans and pasta; simmer 10 minutes until the pasta is tender.', 10],
      ['Finish', 'Stir in greens and basil. [[season|Season]] and drizzle with olive oil.'],
    ],
    tips: ['A Parmesan rind simmered in the soup adds amazing depth (then it isn’t vegan).'],
    mistakes: ['Cooking pasta in leftovers: it turns mushy. Cook it fresh when reheating.'],
    vars: ['Pesto minestrone: a spoon of pesto in each bowl.'],
    serve: 'Crusty bread.', store: 'Fridge 4 days.',
  }));

  A(Object.assign({}, FR, {
    id: 'veg-au-gratin', name: 'Vegetable Au Gratin', local: 'Gratin de légumes',
    emoji: '🧀', course: 'main', level: 1, prep: 20, cook: 35, serves: 4,
    taste: { rich: 5, savory: 4 }, diet: ['vegetarian'], methods: ['bake'],
    tags: ['comfort', 'kids', 'party', 'winter'],
    desc: 'Tender vegetables baked in a creamy white sauce under a golden, bubbling cheese crust.',
    story: '“Au gratin” describes the golden crust from baking with cheese or breadcrumbs, a French technique. Vegetable au gratin became a star of Indian continental menus and Parsi wedding feasts.',
    equip: ['Saucepan', 'Baking dish'],
    ing: [[500, 'g', 'mixed vegetables (carrot, beans, cauliflower, peas, corn, broccoli)', 'chopped'], [40, 'g', 'butter'], [40, 'g', 'all-purpose flour'], [500, 'ml', 'milk', 'warm'],
      [0.75, 'tsp', 'salt'], [0.5, 'tsp', 'black pepper'], [1, 'pinch', 'nutmeg'], [0.5, 'tsp', 'dried mixed herbs'], [150, 'g', 'cheddar or processed cheese', 'grated'], [3, 'tbsp', 'breadcrumbs']],
    steps: [
      ['Blanch', 'Preheat oven to {{200C}}. [[blanch|Blanch]] the vegetables 3 minutes until just tender. Drain.', 3],
      ['White sauce', 'Make a [[roux]] with butter and flour (2 min), then [[whisk]] in the warm milk gradually. Simmer until thick, 4 minutes. Season with salt, pepper, nutmeg and herbs.', 4],
      ['Combine', 'Fold vegetables and half the cheese into the sauce. Pour into the dish.'],
      ['Top and bake', 'Scatter remaining cheese and breadcrumbs. Bake 20–25 minutes until golden and bubbling.', 22],
    ],
    tips: ['A spoon of mustard in the white sauce makes it pop.'],
    mistakes: ['Lumpy sauce: add milk gradually, whisking.'],
    vars: ['Pasta au gratin, potato gratin dauphinois.'],
    serve: 'Garlic bread.',
  }));

  A(Object.assign({}, FR, {
    id: 'cream-of-mushroom', name: 'Cream of Mushroom Soup', local: 'Velouté de champignons',
    emoji: '🍄', course: 'soup', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { umami: 5, rich: 4, savory: 4, herby: 2 }, diet: ['vegetarian'], methods: ['simmer'],
    tags: ['comfort', 'winter', 'rainy-day', 'date-night'],
    desc: 'Velvety, deeply savory mushroom soup with thyme and a swirl of cream.',
    story: 'A velouté is one of the classic French soups, thickened lightly with a roux. Browning the mushrooms well first gives it its deep, earthy flavor.',
    equip: ['Pot', 'Blender'],
    ing: [[400, 'g', 'mushrooms', 'sliced'], [30, 'g', 'butter'], [1, 'tbsp', 'olive oil'], [1, '', 'onion', 'chopped'], [2, 'clove', 'garlic'], [2, 'sprig', 'thyme'], [2, 'tbsp', 'all-purpose flour'],
      [700, 'ml', 'vegetable stock'], [100, 'ml', 'heavy cream'], [0.75, 'tsp', 'salt'], [0.5, 'tsp', 'black pepper']],
    steps: [
      ['Brown the mushrooms', 'Heat butter and oil in the pot on high. [[saute|Sauté]] mushrooms in batches without crowding until deep golden, 6–8 minutes. Set aside a few for garnish.', 8, 'Browning = flavor. Crowded mushrooms steam and stay grey.'],
      ['Aromatics', 'Add onion, garlic and thyme; cook 4 minutes. Sprinkle flour and stir 1 minute.'],
      ['Simmer', 'Whisk in stock, simmer 12 minutes.', 12],
      ['Blend', 'Remove thyme stems and blend until smooth. Stir in cream, salt and pepper.'],
      ['Serve', 'Top with reserved mushrooms and a little cream.'],
    ],
    tips: ['Mix in a few dried porcini for extra depth.'],
    mistakes: ['Boiling after the cream: it can split.'],
    vars: ['Cream of tomato, broccoli or spinach with the same method.'],
    serve: 'Toasted garlic bread.',
  }));

  A(Object.assign({}, FR, {
    id: 'grilled-herb-chicken', name: 'Grilled Herb Chicken with Pepper Sauce & Mash', local: 'Poulet grillé, sauce au poivre',
    emoji: '🍗', course: 'main', level: 2, prep: 20, cook: 35, rest: 30, serves: 4,
    taste: { savory: 5, rich: 4, herby: 4, spicy: 2 }, diet: ['gluten-free', 'high-protein'], methods: ['saute', 'grill'],
    tags: ['date-night', 'impress', 'weeknight'],
    desc: 'Juicy lemon-herb chicken with creamy mashed potatoes, buttered vegetables and a peppercorn sauce.',
    story: 'This plate is the backbone of continental café menus everywhere: a seared protein, buttery mash, sautéed vegetables and a classic French pan sauce. Master it and you can cook any restaurant main.',
    equip: ['Griddle or heavy pan', 'Pot for potatoes', 'Masher'],
    ing: ['#Chicken', [4, 'piece', 'boneless chicken breasts or thighs', 'flattened evenly'], [2, 'tbsp', 'olive oil'], [1, '', 'lemon', 'zest and juice'], [3, 'clove', 'garlic', 'minced'], [1, 'tsp', 'dried mixed herbs'], [1, 'tsp', 'salt'], [0.5, 'tsp', 'black pepper'],
      '#Mash', [800, 'g', 'floury potatoes', 'peeled, chunks'], [60, 'g', 'butter'], [120, 'ml', 'milk', 'hot'], [0.5, 'tsp', 'salt'],
      '#Pepper sauce', [20, 'g', 'butter'], [1, '', 'shallot', 'finely chopped'], [1.5, 'tsp', 'black peppercorns', 'coarsely crushed'], [150, 'ml', 'chicken stock'], [100, 'ml', 'heavy cream'],
      '#Vegetables', [300, 'g', 'broccoli, carrots and beans'], [15, 'g', 'butter']],
    steps: [
      ['Marinate', '[[marinate|Marinate]] chicken with oil, lemon, garlic, herbs, salt and pepper for 30 minutes.', 30],
      ['Mash', 'Boil potatoes in salted water until very soft, 15 minutes. Drain, steam-dry 2 minutes, mash with butter and hot milk until smooth.', 15, 'Hot milk and dry potatoes make the fluffiest mash.'],
      ['Sear the chicken', '[[sear|Sear]] on a hot griddle 5–6 minutes per side until charred and cooked through (74 °C). [[rest|Rest]] 5 minutes.', 12],
      ['Pepper sauce', 'In the same pan, melt butter, soften the shallot, add peppercorns, [[deglaze]] with stock and [[reduce]] by half. Add cream and simmer until it coats a spoon.', 6],
      ['Vegetables', '[[blanch|Blanch]] the vegetables 3 minutes, then toss in butter with a pinch of salt.'],
      ['Plate', 'Slice the chicken over the mash, add vegetables and spoon the sauce over.'],
    ],
    tips: ['Flatten chicken evenly so it cooks evenly.'],
    mistakes: ['Overcooking breast meat: use a thermometer.'],
    vars: ['Veg: grilled paneer or cottage cheese steak with the same sides.', 'Mushroom sauce instead of pepper.'],
    serve: 'As the main plate; a glass of white wine.',
  }));

  A({
    id: 'mushroom-stroganoff', name: 'Mushroom Stroganoff', local: 'Бефстроганов (грибной)', country: 'Russia', flag: '🇷🇺', region: 'Europe',
    emoji: '🍄', course: 'main', level: 1, prep: 10, cook: 20, serves: 4,
    taste: { umami: 5, rich: 4, savory: 4, sour: 2 }, diet: ['vegetarian'], methods: ['saute'],
    tags: ['comfort', 'weeknight', 'quick', 'winter'],
    desc: 'Golden mushrooms in a creamy, tangy paprika-mustard sauce, served over rice or buttered noodles.',
    story: 'Beef Stroganoff was named after the aristocratic Stroganov family of 19th-century St Petersburg. The mushroom version keeps all the creamy, tangy comfort and is a café-menu favorite.',
    equip: ['Large frying pan'],
    ing: [[600, 'g', 'mixed mushrooms', 'thickly sliced'], [30, 'g', 'butter'], [1, 'tbsp', 'olive oil'], [1, '', 'onion', 'sliced'], [2, 'clove', 'garlic'], [1, 'tsp', 'paprika'],
      [1, 'tsp', 'Dijon mustard'], [200, 'ml', 'vegetable stock'], [150, 'g', 'sour cream or hung curd'], [0.75, 'tsp', 'salt'], [1, 'tbsp', 'parsley or dill'], [null, '', 'rice or buttered noodles', 'to serve']],
    steps: [
      ['Brown mushrooms', '[[saute|Sauté]] mushrooms in batches in butter and oil on high until deep golden. Remove.', 8],
      ['Onion', 'Cook onion 5 minutes, add garlic and paprika for 30 seconds.'],
      ['Sauce', 'Add stock and mustard; [[reduce]] 3 minutes. Return mushrooms.', 3],
      ['Cream', 'Turn the heat to low and stir in sour cream. Warm through without boiling. Season and add herbs.', 0, 'Sour cream splits if boiled.'],
    ],
    tips: ['A splash of soy sauce deepens the umami.'],
    mistakes: ['Crowding the mushrooms.'],
    vars: ['Chicken stroganoff with thin strips of chicken.'],
    serve: 'Rice, egg noodles or mashed potatoes.',
  });

  A({
    id: 'garlic-bread', name: 'Cheesy Garlic Bread', local: 'Garlic bread', country: 'United States', flag: '🇺🇸', region: 'North America',
    styles: ['continental'],
    emoji: '🥖', course: 'bread', level: 1, prep: 10, cook: 12, serves: 4,
    taste: { savory: 4, rich: 4, herby: 3 }, diet: ['vegetarian'], methods: ['bake'],
    tags: ['quick', 'kids', 'party'],
    desc: 'Crusty baguette slathered with garlic-herb butter and baked golden, with or without molten cheese.',
    story: 'Garlic bread is an Italian-American creation inspired by Italian bruschetta, and became the default side of every pizzeria and continental café.',
    equip: ['Baking tray'],
    ing: [[1, '', 'baguette', 'about 300 g'], [80, 'g', 'butter', 'softened'], [4, 'clove', 'garlic', 'minced'], [2, 'tbsp', 'parsley', 'chopped'], [0.5, 'tsp', 'dried oregano'], [0.25, 'tsp', 'chili flakes'], [0.25, 'tsp', 'salt'], [100, 'g', 'mozzarella', 'grated, optional']],
    steps: [
      ['Garlic butter', 'Preheat oven to {{200C}}. Mash butter with garlic, parsley, oregano, chili and salt.'],
      ['Spread', 'Slice the baguette in half lengthwise (or into thick slices) and spread generously with garlic butter. Top with cheese.'],
      ['Bake', 'Bake 10–12 minutes until golden and the cheese bubbles. Grill 1 minute for extra color.', 11],
    ],
    tips: ['Use soft, room-temperature butter for easy spreading.'],
    mistakes: ['Raw garlic chunks: mince it fine.'],
    vars: ['Pav garlic bread for an Indian twist.'],
    serve: 'With pasta, soup or lasagna.',
  });

  A({
    id: 'caesar-salad', name: 'Chicken Caesar Salad', local: 'Ensalada César', country: 'Mexico', flag: '🇲🇽', region: 'Latin America',
    emoji: '🥗', course: 'salad', level: 1, prep: 20, cook: 15, serves: 2,
    taste: { savory: 4, umami: 4, rich: 4, sour: 2 }, diet: ['high-protein'], methods: ['saute', 'no-cook'],
    tags: ['healthy', 'quick', 'summer', 'date-night'],
    desc: 'Crisp romaine, garlic croutons and grilled chicken in a creamy, tangy Parmesan dressing.',
    story: 'Surprise: Caesar salad was invented in Tijuana, Mexico, in 1924 by Italian-American restaurateur Caesar Cardini, who threw it together from leftovers on a busy Fourth of July weekend. It went on to conquer every continental menu.',
    equip: ['Large bowl', 'Frying pan', 'Whisk'],
    ing: ['#Dressing', [1, '', 'egg yolk', 'or 3 tbsp mayonnaise'], [1, 'clove', 'garlic', 'grated'], [2, '', 'anchovy fillets', 'mashed, optional'], [1, 'tsp', 'Dijon mustard'], [1, 'tbsp', 'lemon juice'], [1, 'tsp', 'Worcestershire sauce'], [80, 'ml', 'olive oil'], [30, 'g', 'Parmesan', 'grated'],
      '#Salad', [2, 'piece', 'chicken breasts', 'flattened'], [0.5, 'tsp', 'salt'], [2, 'slice', 'bread', 'cubed'], [2, 'tbsp', 'olive oil'], [1, 'head', 'romaine lettuce', 'torn'], [20, 'g', 'Parmesan', 'shaved']],
    steps: [
      ['Dressing', '[[whisk|Whisk]] yolk, garlic, anchovy, mustard, lemon and Worcestershire, then drizzle in oil slowly while whisking to [[emulsify]]. Stir in Parmesan.'],
      ['Croutons', 'Toss bread cubes in oil and fry or bake until golden and crunchy.', 6],
      ['Chicken', 'Season and [[sear]] chicken 5 minutes per side. [[rest|Rest]] and slice.', 10],
      ['Toss', 'Toss crisp, dry lettuce with dressing, top with chicken, croutons and shaved Parmesan.'],
    ],
    tips: ['Lettuce must be completely dry for the dressing to cling.'],
    mistakes: ['Dressing too early: soggy leaves.'],
    vars: ['Veg Caesar: grilled paneer or chickpeas, no anchovy.'],
    serve: 'As a light main.',
  });

  /* ---------- tag existing Western dishes as continental ---------- */
  DD.addStyle('continental', ['carbonara', 'margherita-pizza', 'risotto-milanese', 'tiramisu', 'french-omelette', 'beef-bourguignon', 'crepes', 'ratatouille',
    'tortilla-espanola', 'gazpacho', 'greek-salad', 'fish-and-chips', 'wiener-schnitzel', 'mac-and-cheese', 'pancakes', 'chocolate-chip-cookies', 'smash-burger',
    'chimichurri-steak', 'paella', 'goulash', 'borscht', 'pavlova']);
})();
