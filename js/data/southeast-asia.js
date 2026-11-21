/* Southeast Asia: Thailand, Vietnam, Philippines, Indonesia */
'use strict';
(function () {
  const A = DD.add;

  A({
    id: 'pad-thai', name: 'Pad Thai', local: 'ผัดไทย', country: 'Thailand', flag: '🇹🇭', region: 'Southeast Asia',
    emoji: '🍜', course: 'main', level: 2, prep: 25, cook: 10, serves: 2,
    taste: { sweet: 3, sour: 3, savory: 4, umami: 4, spicy: 2 }, diet: ['dairy-free', 'gluten-free'], methods: ['stir-fry'],
    tags: ['street-food', 'date-night', 'weeknight'],
    desc: 'Chewy rice noodles stir-fried with prawns, egg and tamarind, finished with peanuts and lime.',
    story: 'Pad thai was promoted in the 1930s–40s by Prime Minister Plaek Phibunsongkhram as a national dish, part of a campaign to build Thai identity and reduce rice consumption during shortages. Now it is sold from street woks on every corner of Bangkok. The real flavor comes from sour tamarind, not ketchup.',
    equip: ['Wok or large frying pan', 'Large bowl for soaking'],
    ing: ['#Sauce', [3, 'tbsp', 'tamarind paste (concentrate)'], [2.5, 'tbsp', 'fish sauce'], [2.5, 'tbsp', 'palm sugar or brown sugar'], [1, 'tsp', 'chili flakes', 'to taste'],
      '#Stir-fry', [180, 'g', 'dried flat rice noodles (5 mm)'], [3, 'tbsp', 'neutral oil'], [200, 'g', 'raw prawns', 'peeled'], [100, 'g', 'firm tofu', 'small cubes'], [2, '', 'shallots', 'sliced'], [3, 'clove', 'garlic', 'minced'], [2, '', 'eggs'],
      [100, 'g', 'bean sprouts'], [4, '', 'garlic chives or scallions', 'in 4 cm lengths'], [1, 'tbsp', 'dried shrimp', 'chopped, optional'],
      '#To serve', [40, 'g', 'roasted peanuts', 'roughly chopped'], [1, '', 'lime', 'cut in wedges']],
    steps: [
      ['Soak the noodles', 'Soak noodles in room-temperature water for 30–40 minutes until flexible but still firm (they bend but don’t break). Drain.', 30, 'Never use boiling water. The noodles finish cooking in the wok; pre-soaked in hot water they turn to mush.'],
      ['Make the sauce', 'Heat tamarind, fish sauce, palm sugar and chili flakes in a small pan until the sugar dissolves. Taste: it should be sour, sweet and salty, all strong. Set up your [[mise-en-place]].'],
      ['Cook prawns and tofu', 'Heat 1 tbsp oil in the wok over high. Fry tofu until golden, add prawns and cook 1–2 minutes until pink. Remove.'],
      ['Aromatics and noodles', 'Add 2 tbsp oil, the shallots, garlic and dried shrimp; stir 20 seconds. Add the noodles and half the sauce. Toss constantly for 2 minutes until the noodles soften and absorb the sauce. Add a splash of water if they stick.'],
      ['Add the egg', 'Push the noodles to one side, crack in the eggs, scramble briefly, then fold through the noodles.'],
      ['Finish', 'Add the remaining sauce, prawns, tofu, bean sprouts and chives. Toss 1 minute. [[season|Taste]] and adjust.', 0, 'Bean sprouts should stay crunchy. Add them at the very end.'],
      ['Serve', 'Pile onto plates with peanuts, lime wedges, extra bean sprouts and chili flakes on the side.'],
    ],
    tips: ['Cook max 2 portions at a time; a home wok can’t handle more.', 'Thais adjust at the table with sugar, fish sauce, chili and vinegar.'],
    mistakes: ['Over-soaking noodles: they break and clump.', 'Using ketchup instead of tamarind.'],
    vars: ['Vegetarian: skip prawns and use soy sauce instead of fish sauce.', 'Chicken: thin slices, cooked like the prawns.'],
    serve: 'Thai iced tea and a green papaya salad.',
  });

  A({
    id: 'thai-green-curry', name: 'Thai Green Curry', local: 'แกงเขียวหวาน', country: 'Thailand', flag: '🇹🇭', region: 'Southeast Asia',
    emoji: '🥘', course: 'main', level: 2, prep: 15, cook: 20, serves: 4,
    taste: { spicy: 4, sweet: 3, savory: 4, rich: 4, herby: 4, aromatic: 3 }, diet: ['dairy-free', 'gluten-free'], methods: ['simmer'],
    tags: ['weeknight', 'date-night', 'comfort', 'one-pot'],
    desc: 'Fragrant coconut curry with chicken, Thai eggplant and basil. Creamy, sweet, salty and fiery.',
    story: 'Its Thai name, “kaeng khiao wan”, means “sweet green curry”. The sweetness refers to the lovely pale green color, not sugar. Developed in central Thailand in the early 20th century, its paste is pounded from fresh green chilies, lemongrass, galangal, makrut lime and shrimp paste.',
    equip: ['Wok or wide pot'],
    ing: [[400, 'ml', 'coconut milk', '1 can, do not shake'], [3, 'tbsp', 'green curry paste', 'more for hotter'], [500, 'g', 'boneless chicken thighs', 'thinly sliced'],
      [200, 'ml', 'chicken stock or water'], [150, 'g', 'Thai eggplant or regular eggplant', 'chunks'], [100, 'g', 'green beans', 'in 4 cm lengths'], [4, '', 'makrut lime leaves', 'torn'],
      [1.5, 'tbsp', 'fish sauce'], [1, 'tbsp', 'palm sugar or brown sugar'], [1, 'handful', 'Thai basil leaves'], [1, '', 'red chili', 'sliced, to garnish']],
    steps: [
      ['Crack the coconut cream', 'Scoop 4 tbsp of the thick cream from the top of the can into a hot wok over medium heat. Simmer, stirring, 3–4 minutes until the oil separates and it looks curdled.', 4, 'This “cracking” of the coconut cream is the Thai technique for frying curry paste properly.'],
      ['Fry the paste', 'Add the curry paste and fry 2 minutes in the coconut oil, stirring, until very fragrant.'],
      ['Cook the chicken', 'Add the chicken and stir to coat; cook 3 minutes.'],
      ['Simmer', 'Add the rest of the coconut milk, the stock, eggplant, beans and lime leaves. [[simmer|Simmer]] gently 10 minutes until the eggplant is tender.', 10],
      ['Balance', 'Add fish sauce and palm sugar. [[season|Taste]]: it should be hot, salty, slightly sweet and rich. Adjust.', 0, 'Thai cooks balance each curry by taste every time. Pastes vary a lot.'],
      ['Finish', 'Turn off the heat, stir in Thai basil so it just wilts. Garnish with chili.'],
    ],
    tips: ['Homemade or Thai-brand paste (Mae Ploy, Maesri) makes a huge difference.', 'Thai basil has an anise flavor; Italian basil is not the same but works in a pinch.'],
    mistakes: ['Boiling hard after adding coconut milk makes it grainy.', 'Adding basil too early turns it black.'],
    vars: ['Vegan: tofu, vegetable stock and soy sauce.', 'Prawns: add in the last 3 minutes.', 'Add bamboo shoots or pea eggplants.'],
    serve: 'Jasmine rice or round rice noodles (khanom jeen).', store: 'Fridge 3 days; tastes even better the next day.',
  });

  A({
    id: 'tom-yum', name: 'Tom Yum Goong', local: 'ต้มยำกุ้ง', country: 'Thailand', flag: '🇹🇭', region: 'Southeast Asia',
    emoji: '🍤', course: 'soup', level: 1, prep: 15, cook: 15, serves: 4,
    taste: { sour: 5, spicy: 4, herby: 4, savory: 3, umami: 3 }, diet: ['dairy-free', 'gluten-free', 'pescatarian', 'high-protein'], methods: ['simmer'],
    tags: ['healthy', 'rainy-day', 'quick'],
    desc: 'A hot and sour lemongrass broth with prawns, mushrooms and lime. Clears your head instantly.',
    story: '“Tom” means boil and “yum” means mixed salad, a nod to its bright, salad-like sour-spicy flavor. It is one of Thailand’s most famous exports and has been nominated for UNESCO intangible heritage status.',
    equip: ['Medium pot'],
    ing: [[1, 'l', 'chicken stock or water'], [2, 'stalk', 'lemongrass', 'cut in 4 cm lengths, smashed'], [5, 'slice', 'galangal', 'or ginger'], [5, '', 'makrut lime leaves', 'torn'],
      [4, '', 'Thai bird’s eye chilies', 'smashed'], [400, 'g', 'large raw prawns', 'peeled, tails on'], [200, 'g', 'oyster or straw mushrooms', 'torn'], [3, 'tbsp', 'fish sauce'],
      [4, 'tbsp', 'lime juice', 'about 2 limes'], [1, 'tbsp', 'nam prik pao (Thai chili jam)', 'optional, for richness'], [1, 'handful', 'cilantro leaves']],
    steps: [
      ['Bruise aromatics', '[[smash|Smash]] the lemongrass with the back of a knife and tear the lime leaves to release their oils.'],
      ['Infuse the broth', 'Bring stock to a boil with lemongrass, galangal, lime leaves and chilies. [[simmer|Simmer]] 5 minutes until very fragrant.', 5],
      ['Mushrooms', 'Add mushrooms and simmer 2 minutes.'],
      ['Prawns', 'Add prawns and cook just 2 minutes until pink and curled. Turn off the heat.', 2, 'Overcooked prawns turn rubbery. They keep cooking in the hot broth.'],
      ['Season off the heat', 'Stir in fish sauce, lime juice and chili jam. Lime juice goes in off the heat: boiling makes it bitter. [[season|Taste]] for strong sour-salty-spicy balance.'],
      ['Serve', 'Ladle into bowls and top with cilantro.'],
    ],
    tips: ['The lemongrass, galangal and lime leaves are for flavor, not for eating.', 'Use the prawn shells and heads to make the stock for extra depth.'],
    mistakes: ['Boiling after adding lime juice.'],
    vars: ['Tom yum nam khon: add 100 ml evaporated milk for a creamy version.', 'Chicken (tom yum gai) or mixed seafood.'],
    serve: 'Jasmine rice on the side.',
  });


  A({
    id: 'goi-cuon', name: 'Fresh Spring Rolls', local: 'Gỏi cuốn', country: 'Vietnam', flag: '🇻🇳', region: 'Southeast Asia',
    emoji: '🌯', course: 'starter', level: 1, prep: 30, cook: 5, serves: 4,
    taste: { herby: 5, savory: 3, sweet: 2, sour: 2 }, diet: ['dairy-free', 'gluten-free', 'pescatarian'], methods: ['no-cook', 'simmer'],
    tags: ['summer', 'healthy', 'party', 'kids'],
    desc: 'Translucent rice paper rolls packed with prawns, herbs and noodles, dipped in peanut-hoisin sauce.',
    story: 'Known as summer rolls or salad rolls, gỏi cuốn are the fresh, unfried counterpart to fried chả giò. They show Vietnam’s love of raw herbs: mint, Thai basil and cilantro are layered in for fresh, cool bites.',
    equip: ['Wide shallow bowl of warm water', 'Damp clean kitchen towel or board'],
    ing: [[12, '', 'rice paper sheets (22 cm)'], [100, 'g', 'rice vermicelli'], [12, '', 'cooked prawns', 'halved lengthwise'], [1, 'head', 'soft lettuce', 'leaves separated'],
      [1, '', 'cucumber', 'julienned'], [1, '', 'carrot', 'julienned'], [1, 'bunch', 'mint'], [1, 'bunch', 'Thai basil'], [1, 'bunch', 'cilantro'],
      '#Peanut dipping sauce', [3, 'tbsp', 'hoisin sauce'], [2, 'tbsp', 'smooth peanut butter'], [4, 'tbsp', 'water', 'hot'], [1, 'tsp', 'lime juice'], [1, 'tbsp', 'crushed peanuts', 'to garnish']],
    steps: [
      ['Cook the noodles', 'Cook vermicelli per the packet (usually 3–4 minutes), rinse in cold water and drain well.', 4],
      ['Prep everything', '[[julienne]] the vegetables. Pick herb leaves. Arrange everything around your work surface in the order you’ll layer it.'],
      ['Make the sauce', '[[whisk|Whisk]] hoisin, peanut butter, hot water and lime until smooth. Top with crushed peanuts.'],
      ['Wet the rice paper', 'Dip a rice paper sheet in warm water for 2–3 seconds only. It will still feel slightly firm; it softens as you work. Lay it flat on the damp towel.', 0, 'Over-soaked rice paper tears and sticks. Quick dip, then work.'],
      ['Layer and roll', 'Place 3 prawn halves pink-side down in a line across the center. On top lay lettuce, noodles, vegetables and herbs. Fold the bottom up over the filling, fold in the sides, then roll up tightly like a burrito.', 0, 'Prawns first means they show through the wrapper beautifully.'],
      ['Serve', 'Serve immediately with the sauce, or cover with a damp towel for up to 2 hours.'],
    ],
    tips: ['Don’t overfill: less is more for a tight, neat roll.'],
    mistakes: ['Refrigerating them: the rice paper turns hard and chewy.'],
    vars: ['Vegan: fried tofu strips and avocado.', 'Grilled pork (thịt nướng) or chicken.', 'Nuoc cham dipping sauce instead of peanut.'],
    serve: 'As a starter or light lunch.',
  });

  A({
    id: 'chicken-adobo', name: 'Chicken Adobo', local: 'Adobong manok', country: 'Philippines', flag: '🇵🇭', region: 'Southeast Asia',
    emoji: '🍗', course: 'main', level: 1, prep: 10, cook: 45, serves: 4,
    taste: { sour: 4, savory: 5, umami: 4, sweet: 1 }, diet: ['dairy-free', 'gluten-free', 'high-protein'], methods: ['braise'],
    tags: ['comfort', 'budget', 'one-pot', 'meal-prep', 'weeknight'],
    desc: 'The Philippines’ unofficial national dish: chicken braised in vinegar, soy, garlic and bay leaves.',
    story: 'Before refrigeration, Filipinos preserved meat by cooking it in vinegar and salt. When the Spanish arrived they called it “adobo” (marinade), but the method is indigenous. Every family, island and grandmother has their version, and it’s even better on day two.',
    equip: ['Heavy pot or deep frying pan with lid'],
    ing: [[1.2, 'kg', 'chicken thighs and drumsticks', 'bone-in, skin-on'], [120, 'ml', 'cane or white vinegar'], [80, 'ml', 'soy sauce', 'use tamari for gluten-free'], [1, 'head', 'garlic', 'cloves smashed'],
      [4, '', 'bay leaves'], [1, 'tsp', 'whole black peppercorns', 'lightly crushed'], [1, 'tbsp', 'brown sugar', 'optional'], [250, 'ml', 'water'], [1, 'tbsp', 'neutral oil']],
    steps: [
      ['Combine', 'Put chicken, vinegar, soy, garlic, bay, peppercorns, sugar and water in the pot. Optional: [[marinate]] 1 hour or overnight.'],
      ['Boil without stirring', 'Bring to a boil and let it bubble uncovered for 3 minutes WITHOUT stirring.', 3, 'Filipino grandmothers insist: don’t stir until the vinegar boils, or it tastes raw and sharp. This cooks off the harsh acidity.'],
      ['Braise', 'Cover, lower the heat and [[braise|simmer gently]] 30 minutes, turning once, until the chicken is tender.', 30],
      ['Brown the chicken', 'Lift out the chicken and pat dry. Heat oil in a frying pan and [[sear]] the chicken skin-side down until crispy and brown, 4–5 minutes.', 5, 'This step is optional but takes adobo from good to unforgettable.'],
      ['Reduce the sauce', 'Meanwhile, boil the sauce uncovered until reduced by half and slightly syrupy. [[season|Taste]].', 8],
      ['Combine and serve', 'Return the chicken to the sauce and spoon it over.'],
    ],
    tips: ['Better the next day as the flavors deepen.', 'Fry the garlic cloves from the sauce until crisp and scatter them on top.'],
    mistakes: ['Stirring before the vinegar boils off.'],
    vars: ['Adobo sa gata: add 200 ml coconut milk.', 'Pork adobo with pork belly.', 'Adobong puti: no soy sauce, just vinegar and salt.'],
    serve: 'Lots of steamed white rice to soak up the sauce, and a fried egg.', store: 'Fridge 5 days. Freezes well.',
  });

  A({
    id: 'nasi-goreng', name: 'Nasi Goreng', local: 'Nasi goreng', country: 'Indonesia', flag: '🇮🇩', region: 'Southeast Asia',
    emoji: '🍳', course: 'main', level: 1, prep: 10, cook: 10, serves: 2,
    taste: { sweet: 3, savory: 4, umami: 4, spicy: 2, smoky: 2 }, diet: ['dairy-free'], methods: ['stir-fry'],
    tags: ['weeknight', 'budget', 'brunch', 'street-food'],
    desc: 'Indonesia’s smoky-sweet fried rice with kecap manis and chili, crowned with a crispy fried egg.',
    story: 'Nasi goreng is eaten at any time of day in Indonesia, from breakfast to late-night street stalls. Its distinctive dark color and caramel sweetness come from kecap manis, a thick palm-sugar soy sauce. Barack Obama, who lived in Jakarta as a child, named it among his favorite foods.',
    equip: ['Wok or large frying pan'],
    ing: [[450, 'g', 'cooked jasmine rice', 'day-old, cold'], [2, '', 'shallots', 'chopped'], [2, 'clove', 'garlic'], [2, '', 'red chilies'], [1, 'tsp', 'shrimp paste (terasi)', 'optional'],
      [2, 'tbsp', 'neutral oil'], [150, 'g', 'chicken breast or prawns', 'diced'], [2, 'tbsp', 'kecap manis (sweet soy sauce)'], [1, 'tbsp', 'soy sauce'],
      [2, '', 'eggs', 'for frying'], [2, '', 'scallions', 'sliced'], [null, '', 'cucumber, tomato and prawn crackers', 'to serve']],
    steps: [
      ['Make the spice paste', '[[pound|Pound]] or blend shallots, garlic, chilies and shrimp paste into a rough paste.'],
      ['Fry the paste', 'Heat oil in a wok over medium-high. Fry the paste 1–2 minutes until it smells sweet and darkens.'],
      ['Cook the protein', 'Add chicken or prawns and [[stir-fry]] 2–3 minutes until cooked.'],
      ['Fry the rice', 'Add the rice, break it up, and toss over high heat 3 minutes.'],
      ['Season', 'Add kecap manis and soy sauce and toss until every grain is evenly coated and caramelized.'],
      ['Fry the eggs', 'In a separate pan, fry the eggs in hot oil until the edges are lacy and crisp but the yolks are runny.'],
      ['Serve', 'Mound the rice, top with an egg, scallions and serve with cucumber, tomato and prawn crackers.'],
    ],
    tips: ['Toasted shrimp paste gives authentic depth. Wrap it in foil and dry-fry 1 minute.'],
    mistakes: ['Using fresh rice.'],
    vars: ['Vegetarian: skip shrimp paste and use tofu.', 'Add sambal oelek for more heat.'],
    serve: 'Prawn crackers, sliced cucumber and sambal.',
  });

})();
