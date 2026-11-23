/* World batch 9 (veg-first): Europe from Portugal to Russia, and Turkey. Original recipes written for Dish Dictionary. */
'use strict';
(function () {
  const C = (country, flag, region, extra) => Object.assign({ country, flag, region }, extra || {});
  const X = (base, d) => DD.add(Object.assign({}, base, d));
  const CONT = { styles: ['continental'] };
  const PT = C('Portugal', '🇵🇹', 'Europe'), ES = C('Spain', '🇪🇸', 'Europe'), FR = C('France', '🇫🇷', 'Europe', CONT), IT = C('Italy', '🇮🇹', 'Europe', CONT);
  const DE = C('Germany', '🇩🇪', 'Europe', CONT), AT = C('Austria', '🇦🇹', 'Europe', CONT), UK = C('United Kingdom', '🇬🇧', 'Europe', CONT), RU = C('Russia', '🇷🇺', 'Europe');
  const GR = C('Greece', '🇬🇷', 'Europe'), TR = C('Turkey', '🇹🇷', 'Middle East'), BG = C('Bulgaria', '🇧🇬', 'Europe');

  /* ======================= IBERIA ======================= */
  X(PT, { id: 'acorda', name: 'Açorda Alentejana', local: 'Açorda alentejana', emoji: '🥣', course: 'soup', level: 1, prep: 10, cook: 10, serves: 4,
    taste: { herby: 5, savory: 4 }, diet: ['vegetarian'], methods: ['simmer'], tags: ['budget', 'quick', 'comfort'],
    desc: 'Alentejo bread soup: garlic and coriander pounded with olive oil, poured over stale bread with boiling water and topped with poached eggs.',
    story: 'A shepherd’s soup from Portugal’s dry Alentejo, made from almost nothing.',
    equip: ['Mortar', 'Pot'],
    ing: [[4, 'clove', 'garlic'], [1, 'bunch', 'cilantro'], [1, 'tsp', 'coarse salt'], [5, 'tbsp', 'olive oil'], [250, 'g', 'stale country bread', 'sliced'], [1.2, 'l', 'boiling water'], [4, '', 'eggs']],
    steps: [['Pound', '[[pound|Pound]] garlic, cilantro and salt; add olive oil.'], ['Eggs', '[[poach|Poach]] eggs in the boiling water.', 4], ['Serve', 'Put paste and bread in bowls, pour over the hot egg water and top with an egg.']],
    tips: ['Use dense, stale bread.'], mistakes: ['Fresh bread dissolves.'], vars: ['Açorda de marisco (not vegetarian).'], serve: 'Immediately.' });

  X(PT, { id: 'arroz-doce', name: 'Arroz Doce', local: 'Arroz doce', emoji: '🍚', course: 'dessert', level: 1, prep: 5, cook: 45, serves: 6,
    taste: { sweet: 4, rich: 4, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'comfort'],
    desc: 'Portuguese lemon-scented rice pudding enriched with egg yolks, decorated with cinnamon lattice.',
    story: 'Made for Christmas and village festas; the cinnamon pattern is drawn with a stencil or fingers.',
    equip: ['Pot'],
    ing: [[200, 'g', 'short-grain rice'], [400, 'ml', 'water'], [1, '', 'lemon', 'peel'], [1, 'piece', 'cinnamon stick'], [800, 'ml', 'whole milk'], [180, 'g', 'sugar'], [3, '', 'egg yolks'], [1, 'tsp', 'ground cinnamon']],
    steps: [['Rice', 'Simmer rice in water with lemon peel and cinnamon until absorbed.', 12], ['Milk', 'Add hot milk gradually, stirring, until creamy; add sugar.', 25], ['Yolks', 'Off the heat stir in yolks; return briefly to thicken; pour into a dish and decorate with cinnamon.', 3]],
    tips: ['Add milk slowly like risotto.'], mistakes: ['Yolks in boiling pudding: scrambled.'], vars: ['Arroz con leche (Spain, Latin America).'], serve: 'Room temperature.' });

  X(ES, { id: 'torrijas', name: 'Torrijas', local: 'Torrijas', emoji: '🍞', course: 'dessert', level: 1, prep: 15, cook: 15, rest: 30, serves: 6,
    taste: { sweet: 4, rich: 4, aromatic: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['festive'],
    desc: 'Spanish Easter “French toast”: thick bread soaked in cinnamon-lemon milk, dipped in egg, fried and coated in sugar or honey.',
    story: 'Made in Holy Week across Spain, a way to use up bread during Lent.',
    equip: ['Pot', 'Frying pan'],
    ing: [[1, '', 'day-old baguette', '2 cm slices'], [500, 'ml', 'milk'], [80, 'g', 'sugar'], [1, 'piece', 'cinnamon stick'], [1, '', 'lemon', 'peel'], [3, '', 'eggs', 'beaten'], [250, 'ml', 'olive oil', 'for frying'], [4, 'tbsp', 'sugar with cinnamon', 'to coat']],
    steps: [['Infuse', 'Heat milk with sugar, cinnamon and lemon peel; cool slightly.', 10], ['Soak', 'Soak bread slices well.', 15], ['Fry', 'Dip in egg and fry until golden; roll in cinnamon sugar.', 10]],
    tips: ['Stale bread soaks without breaking.'], mistakes: ['Over-soaking: falls apart.'], vars: ['Torrijas with wine or honey syrup.'], serve: 'Cold or warm.' });

  X(ES, { id: 'escalivada', name: 'Escalivada', local: 'Escalivada', emoji: '🫑', course: 'side', level: 1, prep: 10, cook: 45, serves: 4,
    taste: { smoky: 4, sweet: 3, savory: 3 }, diet: ['vegan', 'gluten-free'], methods: ['roast'], tags: ['summer', 'make-ahead'],
    desc: 'Catalan smoky roasted eggplant, red peppers and onions, peeled into strips and dressed with olive oil and garlic.',
    story: '“Escalivar” means to cook in embers; served on toast or with grilled food.',
    equip: ['Roasting tray'],
    ing: [[2, '', 'eggplants'], [3, '', 'red bell peppers'], [2, '', 'onions', 'halved in skin'], [5, 'tbsp', 'extra-virgin olive oil'], [1, 'clove', 'garlic', 'minced'], [0.5, 'tsp', 'flaky sea salt'], [1, 'tbsp', 'parsley']],
    steps: [['Roast', '[[roast|Roast]] whole vegetables at {{220C}} until collapsed and charred, 45 minutes.', 45], ['Peel', 'Steam in a covered bowl 10 minutes; peel and tear into strips.'], ['Dress', 'Dress with oil, garlic, salt and parsley.']],
    tips: ['Save the juices for the dressing.'], mistakes: ['Underroasted: tough.'], vars: ['On toast with romesco.'], serve: 'Room temperature.' });

  X(ES, { id: 'ajoblanco', name: 'Ajoblanco', local: 'Ajoblanco', emoji: '🥛', course: 'soup', level: 1, prep: 15, cook: 0, rest: 120, serves: 4,
    taste: { rich: 4, sour: 2, savory: 3 }, diet: ['vegan'], methods: ['no-cook'], tags: ['summer'],
    desc: 'Andalusian chilled white soup of almonds, bread, garlic, olive oil and sherry vinegar, served with green grapes.',
    story: 'Older than gazpacho: the Moorish-era version before tomatoes reached Spain.',
    equip: ['Blender'],
    ing: [[150, 'g', 'blanched almonds'], [100, 'g', 'stale white bread', 'soaked'], [1, 'clove', 'garlic'], [100, 'ml', 'extra-virgin olive oil'], [2, 'tbsp', 'sherry vinegar'], [600, 'ml', 'cold water'], [0.75, 'tsp', 'salt'], [150, 'g', 'green grapes', 'halved']],
    steps: [['Blend', 'Blend almonds, bread, garlic and water until very smooth; drizzle in oil, vinegar and salt.'], ['Chill', 'Chill 2 hours; serve with grapes.', 120]],
    tips: ['Blend long for silkiness.'], mistakes: ['Raw garlic overload.'], vars: ['With melon.'], serve: 'Very cold.' });

  X(ES, { id: 'berenjenas-con-miel', name: 'Berenjenas con Miel', local: 'Berenjenas con miel de caña', emoji: '🍆', course: 'starter', level: 1, prep: 15, cook: 15, rest: 30, serves: 4,
    taste: { sweet: 3, savory: 4 }, diet: ['vegan'], methods: ['deep-fry'], tags: ['party', 'street-food'],
    desc: 'Crisp fried eggplant strips drizzled with dark sugar-cane molasses: a Córdoba and Málaga tapa.',
    story: 'An Andalusian tapa with Moorish roots; the cane molasses is made in Frigiliana.',
    equip: ['Kadai'],
    ing: [[2, '', 'eggplants', 'sticks'], [500, 'ml', 'salted water', 'to soak'], [80, 'g', 'all-purpose flour'], [0.5, 'tsp', 'salt'], [700, 'ml', 'olive oil', 'for frying'], [4, 'tbsp', 'cane molasses (miel de caña) or date syrup']],
    steps: [['Soak', 'Soak eggplant 30 minutes; drain and pat dry.', 30], ['Coat and fry', '[[dredge|Dredge]] in salted flour and [[deep-fry]] until crisp.', 12], ['Drizzle', 'Drizzle with molasses and a pinch of salt.']],
    tips: ['Eat immediately.'], mistakes: ['Wet eggplant: oily.'], vars: ['With honey (not vegan).'], serve: 'Hot.' });

  /* ======================= FRANCE ======================= */
  X(FR, { id: 'aligot', name: 'Aligot', local: 'Aligot', emoji: '🧀', course: 'side', level: 2, prep: 15, cook: 30, serves: 4,
    taste: { rich: 5, savory: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'winter'],
    desc: 'Stretchy mashed potatoes from Aubrac, beaten with butter, cream, garlic and fresh tomme cheese until they pull in long ribbons.',
    story: 'Cooked for pilgrims on the way to Santiago de Compostela; stirred in huge pots at Aubrac markets.',
    equip: ['Pot', 'Wooden spoon'],
    ing: [[1, 'kg', 'floury potatoes'], [60, 'g', 'butter'], [150, 'ml', 'cream'], [1, 'clove', 'garlic', 'crushed'], [300, 'g', 'tomme fraîche or mozzarella and gruyère', 'grated'], [1, 'tsp', 'salt']],
    steps: [['Mash', 'Boil potatoes, then mash very smooth with butter, cream and garlic.', 25], ['Stretch', 'Over low heat, beat in the cheese in batches, lifting and stretching, until elastic, 5 minutes.', 5]],
    tips: ['Keep beating: it gets stretchy.'], mistakes: ['Overheating: oily.'], vars: ['Truffade with potatoes slices.'], serve: 'With green salad.' });

  X(FR, { id: 'gougeres', name: 'Gougères', local: 'Gougères', emoji: '🧀', course: 'starter', level: 2, prep: 20, cook: 25, serves: 8,
    taste: { savory: 4, rich: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['party', 'impress'],
    desc: 'Puffy Burgundy cheese choux puffs with gruyère, crisp outside and hollow inside.',
    story: 'Served with wine at Burgundy cellar tastings.',
    equip: ['Pot', 'Piping bag', 'Baking tray'],
    ing: [[125, 'ml', 'water'], [125, 'ml', 'milk'], [100, 'g', 'butter'], [0.5, 'tsp', 'salt'], [150, 'g', 'all-purpose flour'], [4, '', 'eggs'], [120, 'g', 'gruyère', 'grated'], [0.25, 'tsp', 'nutmeg']],
    steps: [['Panade', 'Boil water, milk, butter and salt; beat in flour until it leaves the pan.', 4], ['Eggs', 'Off the heat beat in eggs one by one, then cheese and nutmeg.'], ['Bake', 'Pipe balls and bake at {{200C}} 25 minutes without opening the oven.', 25]],
    tips: ['Dry the dough well before eggs.'], mistakes: ['Opening the oven: they collapse.'], vars: ['Comté or cheddar.'], serve: 'Warm, with drinks.' });

  X(FR, { id: 'far-breton', name: 'Far Breton', local: 'Far breton', emoji: '🍮', course: 'dessert', level: 1, prep: 10, cook: 45, rest: 60, serves: 8,
    taste: { sweet: 4, rich: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['comfort', 'make-ahead'],
    desc: 'Dense Breton custard flan studded with prunes, with caramelized buttery edges.',
    story: 'Brittany’s Sunday dessert; originally a savoury porridge.',
    equip: ['Baking dish'],
    ing: [[120, 'g', 'all-purpose flour'], [120, 'g', 'sugar'], [4, '', 'eggs'], [750, 'ml', 'whole milk'], [40, 'g', 'butter', 'melted, plus more for the dish'], [1, 'tsp', 'vanilla extract'], [200, 'g', 'prunes', 'pitted']],
    steps: [['Batter', 'Whisk flour, sugar and eggs, then milk, butter and vanilla; rest 1 hour.', 60], ['Bake', 'Butter the dish generously, scatter prunes, pour batter; bake at {{200C}} 45 minutes until puffed and brown.', 45]],
    tips: ['Lots of butter in the dish for the edges.'], mistakes: ['Cutting warm: it’s set when cool.'], vars: ['With raisins soaked in rum.'], serve: 'Cool, in squares.' });

  X(FR, { id: 'ile-flottante', name: 'Île Flottante', local: 'Île flottante', emoji: '☁️', course: 'dessert', level: 2, prep: 20, cook: 20, rest: 60, serves: 4,
    taste: { sweet: 4, rich: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['impress'],
    desc: '“Floating island”: soft poached meringue on vanilla custard (crème anglaise), with caramel threads and almonds.',
    story: 'A French bistro classic; light as a cloud after a heavy meal.',
    equip: ['Pot', 'Mixer'],
    ing: [[500, 'ml', 'whole milk'], [1, 'tsp', 'vanilla extract'], [4, '', 'egg yolks'], [70, 'g', 'sugar'], [4, '', 'egg whites'], [60, 'g', 'sugar'], [80, 'g', 'sugar', 'for caramel'], [2, 'tbsp', 'flaked almonds', 'toasted']],
    steps: [['Anglaise', 'Whisk yolks and sugar; add hot vanilla milk and cook gently until it coats a spoon; chill.', 10], ['Meringue', 'Whip whites with sugar to stiff peaks; [[poach|poach]] spoonfuls in simmering milk or water 1 minute per side.', 6], ['Caramel', 'Make a caramel and drizzle threads over the islands; scatter almonds.', 4]],
    tips: ['Never boil the anglaise.'], mistakes: ['Overpoached meringue: rubbery.'], vars: ['Oeufs à la neige.'], serve: 'Cold custard, room-temperature islands.' });

  X(FR, { id: 'pain-perdu', name: 'Pain Perdu', local: 'Pain perdu', emoji: '🍞', course: 'breakfast', level: 1, prep: 5, cook: 10, serves: 2,
    taste: { sweet: 4, rich: 4 }, diet: ['vegetarian'], methods: ['saute'], tags: ['quick', 'brunch', 'kids'],
    desc: 'French “lost bread”: stale brioche soaked in vanilla custard and caramelized in butter.',
    story: 'The French name means lost bread, because it saves bread that would be thrown away.',
    equip: ['Frying pan'],
    ing: [[4, 'slice', 'stale brioche or bread'], [2, '', 'eggs'], [150, 'ml', 'milk'], [1, 'tbsp', 'sugar'], [0.5, 'tsp', 'vanilla extract'], [30, 'g', 'butter'], [1, 'tbsp', 'sugar', 'to caramelize']],
    steps: [['Soak', 'Whisk eggs, milk, sugar and vanilla; soak the bread.'], ['Fry', 'Fry in butter, sprinkling sugar, until caramelized on both sides.', 8]],
    tips: ['Medium heat so the centre cooks.'], mistakes: ['Fresh bread: soggy.'], vars: ['Savoury with cheese.'], serve: 'Berries and crème fraîche.' });

  /* ======================= ITALY ======================= */
  X(IT, { id: 'risi-e-bisi', name: 'Risi e Bisi', local: 'Risi e bisi', emoji: '🟢', course: 'main', level: 2, prep: 10, cook: 30, serves: 4,
    taste: { savory: 4, sweet: 2, rich: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['comfort'],
    desc: 'Venetian soupy rice with fresh peas cooked in a pea-pod broth, finished with butter and parmesan.',
    story: 'Served to the Doge of Venice on 25 April, the feast of St Mark, when the first peas arrived.',
    equip: ['Pot'],
    ing: [[40, 'g', 'butter'], [1, '', 'onion', 'finely chopped'], [250, 'g', 'vialone nano or arborio rice'], [400, 'g', 'green peas'], [1.2, 'l', 'vegetable stock', 'hot'], [50, 'g', 'parmesan'], [2, 'tbsp', 'parsley'], [0.5, 'tsp', 'salt']],
    steps: [['Base', '[[sweat|Sweat]] onion in half the butter; add rice and toast.', 5], ['Cook', 'Add peas and stock in two goes; simmer, stirring now and then, 18 minutes until soupy.', 20], ['Finish', 'Beat in remaining butter, parmesan and parsley.']],
    tips: ['Looser than risotto: eat it with a spoon.'], mistakes: ['Too dry: add stock.'], vars: ['With pancetta (not vegetarian).'], serve: 'Immediately.' });

  X(IT, { id: 'pasta-e-ceci', name: 'Pasta e Ceci', local: 'Pasta e ceci', emoji: '🥣', course: 'main', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { savory: 4, herby: 3, rich: 3 }, diet: ['vegan', 'high-protein'], methods: ['simmer'], tags: ['budget', 'comfort', 'one-pot'],
    desc: 'Roman pasta and chickpea stew with rosemary, garlic, tomato and plenty of olive oil.',
    story: 'Traditionally eaten on Fridays in Rome; half-blended chickpeas make it creamy.',
    equip: ['Pot', 'Hand blender'],
    ing: [[4, 'tbsp', 'olive oil'], [3, 'clove', 'garlic'], [1, 'sprig', 'rosemary'], [0.5, 'tsp', 'chili flakes'], [2, 'tbsp', 'tomato paste'], [2, 'can', 'chickpeas'], [900, 'ml', 'vegetable stock'], [180, 'g', 'small pasta (ditalini)'], [0.75, 'tsp', 'salt']],
    steps: [['Base', 'Warm garlic, rosemary and chili in oil; add tomato paste.', 3], ['Chickpeas', 'Add chickpeas and stock; simmer 10 minutes; blend half.', 12], ['Pasta', 'Cook pasta in the soup until thick.', 10]],
    tips: ['Finish with raw olive oil.'], mistakes: ['Too thin: simmer longer.'], vars: ['With mussels in Naples (not vegetarian).'], serve: 'Pecorino on the side.' });

  X(IT, { id: 'panelle', name: 'Panelle', local: 'Panelle', emoji: '🟨', course: 'snack', level: 2, prep: 10, cook: 25, rest: 60, serves: 6,
    taste: { savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer', 'deep-fry'], tags: ['street-food'],
    desc: 'Palermo’s crisp chickpea-flour fritters with parsley, eaten in a sesame bun with lemon.',
    story: 'Arab-era street food of Palermo, sold beside potato croquettes (cazzilli).',
    equip: ['Pot', 'Tray', 'Kadai'],
    ing: [[250, 'g', 'chickpea flour'], [750, 'ml', 'water'], [1, 'tsp', 'salt'], [2, 'tbsp', 'parsley'], [700, 'ml', 'oil', 'for frying'], [1, '', 'lemon']],
    steps: [['Cook', 'Whisk flour into cold water with salt; cook, stirring, until very thick, 10 minutes; add parsley.', 10], ['Set', 'Spread thin on a tray; cool 1 hour and cut squares.', 60], ['Fry', '[[deep-fry|Fry]] until golden and crisp.', 10]],
    tips: ['Spread thin for crisp panelle.'], mistakes: ['Lumps: whisk from cold.'], vars: ['Socca (Nice), farinata (Liguria).'], serve: 'In bread with lemon.' });

  X(IT, { id: 'piadina', name: 'Piadina', local: 'Piadina romagnola', emoji: '🫓', course: 'main', level: 2, prep: 20, cook: 15, rest: 30, serves: 4,
    taste: { savory: 4, rich: 3, herby: 2 }, diet: ['vegetarian'], methods: ['saute'], tags: ['street-food', 'quick'],
    desc: 'Romagna’s soft flatbread cooked on a griddle and folded around soft cheese, rocket and tomato.',
    story: 'Sold from striped kiosks along the Romagna coast; traditionally made with lard, here with olive oil.',
    equip: ['Griddle'],
    ing: [[300, 'g', 'all-purpose flour'], [1, 'tsp', 'baking powder'], [0.5, 'tsp', 'salt'], [3, 'tbsp', 'olive oil'], [150, 'ml', 'milk and water'], [200, 'g', 'stracchino or ricotta'], [1, 'handful', 'rocket'], [2, '', 'tomatoes', 'sliced']],
    steps: [['Dough', '[[knead|Knead]] flour, baking powder, salt, oil and liquid; rest 30 minutes.', 30], ['Cook', 'Roll thin rounds and cook on a hot griddle, pricking bubbles, 2 minutes each side.', 10], ['Fill', 'Spread cheese, add rocket and tomato; fold.']],
    tips: ['Fill while hot.'], mistakes: ['Thick dough: bready.'], vars: ['With grilled vegetables.'], serve: 'Warm.' });

  X(IT, { id: 'zeppole', name: 'Zeppole di San Giuseppe', local: 'Zeppole', emoji: '🍩', course: 'dessert', level: 3, prep: 30, cook: 30, rest: 60, serves: 10,
    taste: { sweet: 4, rich: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['festive', 'impress'],
    desc: 'Neapolitan choux rings filled with vanilla custard and topped with sour cherries, made for St Joseph’s Day.',
    story: 'Eaten on 19 March, Father’s Day in Italy; traditionally fried, often baked today.',
    equip: ['Piping bag', 'Baking tray', 'Pot'],
    ing: [[250, 'ml', 'water'], [100, 'g', 'butter'], [150, 'g', 'all-purpose flour'], [4, '', 'eggs'], [1, 'pinch', 'salt'], '#Custard', [400, 'ml', 'milk'], [3, '', 'egg yolks'], [90, 'g', 'sugar'], [35, 'g', 'cornstarch'], [1, '', 'lemon', 'zest'], [10, '', 'amarena cherries'], [2, 'tbsp', 'powdered sugar']],
    steps: [['Choux', 'Make choux: boil water, butter and salt, beat in flour, then eggs one by one.', 8], ['Bake', 'Pipe double rings and bake at {{200C}} 25 minutes.', 25], ['Custard', 'Cook custard until thick; chill 1 hour.', 10], ['Fill', 'Pipe custard in the centre; top with a cherry and sugar.']],
    tips: ['Don’t open the oven early.'], mistakes: ['Wet choux: flat rings.'], vars: ['Fried zeppole.'], serve: 'Same day.' });

  X(IT, { id: 'suppli', name: 'Supplì', local: 'Supplì', emoji: '🟠', course: 'snack', level: 3, prep: 30, cook: 40, rest: 120, serves: 8,
    taste: { savory: 4, rich: 5, sour: 1 }, diet: ['vegetarian'], methods: ['simmer', 'deep-fry'], tags: ['street-food', 'party'],
    desc: 'Roman fried rice croquettes cooked in tomato sauce with a mozzarella heart that stretches like a telephone cord.',
    story: 'Called “supplì al telefono” in Rome because of the cheese strings; usually with meat ragù, here with plain tomato.',
    equip: ['Pot', 'Kadai'],
    ing: [[300, 'g', 'arborio rice'], [400, 'g', 'tomato passata'], [700, 'ml', 'vegetable stock'], [30, 'g', 'butter'], [40, 'g', 'parmesan'], [150, 'g', 'mozzarella', 'cubes'], [2, '', 'eggs'], [150, 'g', 'breadcrumbs'], [1, 'l', 'oil', 'for frying'], [0.5, 'tsp', 'salt']],
    steps: [['Rice', 'Cook rice in passata and stock until thick; add butter and parmesan; cool completely.', 30], ['Shape', 'Shape ovals around mozzarella.'], ['Fry', 'Dip in egg and crumbs; [[deep-fry]] until golden.', 10]],
    tips: ['Cold rice holds its shape.'], mistakes: ['Warm rice: falls apart.'], vars: ['Arancini (Sicily).'], serve: 'Hot.' });

  /* ======================= CENTRAL EUROPE ======================= */
  X(DE, { id: 'dampfnudeln', name: 'Dampfnudeln', local: 'Dampfnudeln', emoji: '⚪', course: 'dessert', level: 3, prep: 20, cook: 30, rest: 90, serves: 6,
    taste: { sweet: 3, rich: 4 }, diet: ['vegetarian'], methods: ['steam'], tags: ['comfort', 'winter'],
    desc: 'Bavarian yeast dumplings steamed in a covered pan with milk and butter so the bottoms turn crisp and caramelized; served with vanilla sauce.',
    story: 'From Bavaria and the Palatinate; listen for the crackle that tells you the crust is ready.',
    equip: ['Heavy pan with tight lid'],
    ing: [[400, 'g', 'all-purpose flour'], [7, 'g', 'instant yeast'], [40, 'g', 'sugar'], [200, 'ml', 'warm milk'], [1, '', 'egg'], [50, 'g', 'butter'], [0.25, 'tsp', 'salt'], '#To cook', [150, 'ml', 'milk'], [30, 'g', 'butter'], [1, 'tbsp', 'sugar'], '#Vanilla sauce', [400, 'ml', 'milk'], [2, '', 'egg yolks'], [50, 'g', 'sugar'], [1, 'tbsp', 'cornstarch'], [1, 'tsp', 'vanilla extract']],
    steps: [['Dough', '[[knead|Knead]] and [[proof]] 1 hour; shape 8 balls and rise 30 minutes.', 90], ['Steam', 'Heat milk, butter and sugar in the pan, add the buns, cover tightly and cook on low 25 minutes until it crackles.', 25, 'Don’t lift the lid.'], ['Sauce', 'Cook vanilla sauce until it coats a spoon.', 8]],
    tips: ['A tight lid is essential.'], mistakes: ['Opening the lid: buns collapse.'], vars: ['Rohrnudeln (baked).'], serve: 'With vanilla sauce or plum compote.' });

  X(DE, { id: 'rote-grutze', name: 'Rote Grütze', local: 'Rote Grütze', emoji: '🍒', course: 'dessert', level: 1, prep: 10, cook: 10, rest: 120, serves: 4,
    taste: { sweet: 4, sour: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['summer', 'make-ahead'],
    desc: 'North German red berry pudding of cherries, raspberries and currants thickened lightly, served cold.',
    story: 'From Hamburg and Schleswig-Holstein; Danes call it rødgrød med fløde.',
    equip: ['Pot'],
    ing: [[600, 'g', 'mixed red berries and cherries'], [250, 'ml', 'red grape or cherry juice'], [80, 'g', 'sugar'], [3, 'tbsp', 'cornstarch'], [1, 'tsp', 'vanilla extract']],
    steps: [['Cook', 'Bring juice, sugar and half the berries to a boil.', 4], ['Thicken', 'Stir in cornstarch slurry; boil 1 minute; add remaining berries and vanilla.', 2], ['Chill', 'Chill 2 hours.', 120]],
    tips: ['Add the softest berries last.'], mistakes: ['Too much starch: gluey.'], vars: ['Grüne Grütze with gooseberries.'], serve: 'With vanilla sauce or cream.' });

  X(AT, { id: 'germknodel', name: 'Germknödel', local: 'Germknödel', emoji: '⚫', course: 'dessert', level: 3, prep: 25, cook: 20, rest: 90, serves: 4,
    taste: { sweet: 4, rich: 4 }, diet: ['vegetarian'], methods: ['steam'], tags: ['winter', 'comfort'],
    desc: 'Big fluffy steamed yeast dumplings filled with spiced plum butter, doused in melted butter and poppy-seed sugar.',
    story: 'A ski-hut favourite in the Austrian Alps.',
    equip: ['Steamer'],
    ing: [[400, 'g', 'all-purpose flour'], [7, 'g', 'instant yeast'], [40, 'g', 'sugar'], [200, 'ml', 'warm milk'], [1, '', 'egg yolk'], [40, 'g', 'butter'], [0.25, 'tsp', 'salt'], [150, 'g', 'plum butter (powidl) or plum jam'], [60, 'g', 'butter', 'melted, to serve'], [50, 'g', 'ground poppy seeds'], [40, 'g', 'powdered sugar']],
    steps: [['Dough', '[[knead|Knead]] and [[proof]] 1 hour.', 60], ['Fill', 'Divide into 4, fill each with plum butter and seal; rise 30 minutes.', 30], ['Steam', '[[steam|Steam]] 15–18 minutes.', 18], ['Serve', 'Pour over butter and sprinkle poppy sugar.']],
    tips: ['Seal well so the jam stays in.'], mistakes: ['Lifting the lid early.'], vars: ['With vanilla sauce.'], serve: 'Hot.' });

  X(AT, { id: 'marillenknodel', name: 'Marillenknödel', local: 'Marillenknödel', emoji: '🍑', course: 'dessert', level: 2, prep: 25, cook: 15, rest: 30, serves: 4,
    taste: { sweet: 4, sour: 2, rich: 4 }, diet: ['vegetarian'], methods: ['simmer', 'saute'], tags: ['summer'],
    desc: 'Whole apricots wrapped in soft quark dough, simmered and rolled in butter-toasted sugary breadcrumbs.',
    story: 'From the Wachau valley on the Danube, famous for apricots.',
    equip: ['Pot', 'Pan'],
    ing: [[250, 'g', 'quark or ricotta'], [1, '', 'egg'], [30, 'g', 'butter', 'soft'], [120, 'g', 'all-purpose flour'], [1, 'pinch', 'salt'], [8, '', 'apricots'], [8, '', 'sugar cubes'], [60, 'g', 'butter'], [80, 'g', 'breadcrumbs'], [2, 'tbsp', 'sugar'], [1, 'tsp', 'ground cinnamon']],
    steps: [['Dough', 'Mix quark, egg, butter, flour and salt; rest 30 minutes.', 30], ['Wrap', 'Replace each apricot stone with a sugar cube; wrap in dough.'], ['Simmer', '[[simmer|Simmer]] in gently boiling water 12 minutes.', 12], ['Crumbs', 'Toast crumbs in butter with sugar and cinnamon; roll the dumplings.', 5]],
    tips: ['Gentle simmer, not a boil.'], mistakes: ['Thin dough: bursts.'], vars: ['Zwetschgenknödel (plums).'], serve: 'Dusted with sugar.' });

  X(C('Switzerland', '🇨🇭', 'Europe'), { id: 'raclette', name: 'Raclette', local: 'Raclette', emoji: '🧀', course: 'main', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { rich: 5, savory: 4, sour: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['roast'], tags: ['party', 'winter'],
    desc: 'Melted raclette cheese scraped over boiled potatoes, with pickled onions and cornichons.',
    story: 'From Valais; shepherds melted half wheels by the fire and scraped (racler) the cheese.',
    equip: ['Raclette grill or oven'],
    ing: [[1, 'kg', 'small waxy potatoes'], [600, 'g', 'raclette cheese', 'sliced'], [150, 'g', 'cornichons'], [150, 'g', 'pickled onions'], [0.5, 'tsp', 'black pepper'], [0.5, 'tsp', 'paprika']],
    steps: [['Potatoes', 'Boil potatoes in their skins.', 20], ['Melt', 'Melt cheese under a grill or in raclette pans until bubbling.', 5], ['Serve', 'Scrape over potatoes; season with pepper and paprika.']],
    tips: ['Keep potatoes warm in a cloth.'], mistakes: ['Overmelting: oily.'], vars: ['With mushrooms and peppers on the grill.'], serve: 'Pickles and white wine.' });

  /* ======================= BENELUX & BRITAIN ======================= */
  X(C('Belgium', '🇧🇪', 'Europe'), { id: 'stoemp', name: 'Stoemp', local: 'Stoemp', emoji: '🥕', course: 'side', level: 1, prep: 15, cook: 25, serves: 4,
    taste: { savory: 4, sweet: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['comfort', 'budget'],
    desc: 'Brussels mash of potatoes with carrots, leeks or spinach, butter and nutmeg.',
    story: 'Brussels home cooking; every family has its favourite vegetable mix.',
    equip: ['Pot', 'Masher'],
    ing: [[800, 'g', 'floury potatoes'], [3, '', 'carrots'], [1, '', 'leek', 'sliced'], [50, 'g', 'butter'], [100, 'ml', 'milk'], [0.25, 'tsp', 'nutmeg'], [1, 'tsp', 'salt'], [0.25, 'tsp', 'black pepper']],
    steps: [['Boil', 'Boil potatoes and carrots until soft.', 20], ['Leeks', 'Soften leek in butter.', 6], ['Mash', 'Mash everything roughly with milk, nutmeg, salt and pepper.']],
    tips: ['Leave it chunky.'], mistakes: ['Over-mashing: gluey.'], vars: ['Spinach or Brussels sprout stoemp.'], serve: 'With a fried egg.' });

  X(C('Belgium', '🇧🇪', 'Europe'), { id: 'speculoos', name: 'Speculoos', local: 'Speculoos', emoji: '🍪', course: 'dessert', level: 2, prep: 20, cook: 15, rest: 480, serves: 24,
    taste: { sweet: 4, aromatic: 5 }, diet: ['vegetarian'], methods: ['bake'], tags: ['festive', 'make-ahead'],
    desc: 'Thin, crunchy caramelized spice biscuits with cinnamon, nutmeg, clove and ginger, pressed in patterned moulds.',
    story: 'Baked for St Nicholas Day (6 December) in Belgium and the Netherlands.',
    equip: ['Baking tray', 'Cookie moulds or cutters'],
    ing: [[250, 'g', 'all-purpose flour'], [150, 'g', 'dark brown sugar'], [125, 'g', 'butter', 'soft'], [1, 'tbsp', 'speculaas spice (cinnamon, nutmeg, clove, ginger)'], [0.5, 'tsp', 'baking soda'], [0.25, 'tsp', 'salt'], [3, 'tbsp', 'milk']],
    steps: [['Dough', 'Cream butter and sugar; mix in flour, spices, soda, salt and milk; rest overnight.', 480], ['Shape', 'Roll thin and cut or press into moulds.'], ['Bake', 'Bake at {{175C}} 12–15 minutes until crisp.', 15]],
    tips: ['Resting deepens the spice.'], mistakes: ['Thick biscuits: not crunchy.'], vars: ['Speculoos spread.'], serve: 'With coffee.' });

  X(C('Netherlands', '🇳🇱', 'Europe'), { id: 'stroopwafels', name: 'Stroopwafels', local: 'Stroopwafels', emoji: '🧇', course: 'dessert', level: 3, prep: 30, cook: 30, rest: 60, serves: 12,
    taste: { sweet: 5, rich: 4, aromatic: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['make-ahead'],
    desc: 'Thin crisp waffle cookies split while hot and sandwiched with cinnamon caramel syrup.',
    story: 'From Gouda; Dutch people rest one on a hot coffee cup to soften the caramel.',
    equip: ['Pizzelle or thin waffle iron'],
    ing: [[300, 'g', 'all-purpose flour'], [7, 'g', 'instant yeast'], [150, 'g', 'butter', 'melted'], [80, 'g', 'sugar'], [1, '', 'egg'], [60, 'ml', 'warm milk'], '#Filling', [200, 'g', 'brown sugar'], [100, 'g', 'butter'], [100, 'g', 'golden syrup'], [1, 'tsp', 'ground cinnamon']],
    steps: [['Dough', 'Knead to a soft dough; rest 45 minutes.', 45], ['Filling', 'Boil filling ingredients 3 minutes; keep warm.', 5], ['Bake and fill', 'Bake balls in the iron 1 minute; split while hot, spread filling and close.', 25]],
    tips: ['Split immediately; they harden fast.'], mistakes: ['Cool waffle: won’t split.'], vars: ['Honey stroopwafels.'], serve: 'On top of a hot drink.' });

  X(UK, { id: 'crumpets', name: 'Crumpets', local: 'Crumpets', emoji: '🥞', course: 'breakfast', level: 2, prep: 15, cook: 20, rest: 60, serves: 8,
    taste: { savory: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['brunch'],
    desc: 'Spongy griddle cakes full of holes, cooked in rings and toasted with melting butter.',
    story: 'A British teatime staple since the 1600s; the holes trap the butter.',
    equip: ['Griddle', 'Metal rings'],
    ing: [[250, 'g', 'strong flour'], [7, 'g', 'instant yeast'], [1, 'tsp', 'sugar'], [175, 'ml', 'warm milk'], [175, 'ml', 'warm water'], [0.5, 'tsp', 'baking soda'], [1, 'tsp', 'salt'], [30, 'g', 'butter', 'to serve']],
    steps: [['Batter', 'Whisk flour, yeast, sugar, milk and water; rest 1 hour; beat in soda and salt.', 60], ['Cook', 'Pour into oiled rings on a low griddle; cook until holes form and the top sets, 8 minutes; flip briefly.', 18]],
    tips: ['Low heat gives the holes time.'], mistakes: ['Hot griddle: burnt base, raw top.'], vars: ['Pikelets (no rings).'], serve: 'Toasted with butter.' });

  X(UK, { id: 'bread-butter-pudding', name: 'Bread and Butter Pudding', local: 'Bread and butter pudding', emoji: '🍞', course: 'dessert', level: 1, prep: 15, cook: 40, rest: 20, serves: 6,
    taste: { sweet: 4, rich: 4, aromatic: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['comfort', 'budget'],
    desc: 'Buttered bread layered with sultanas, soaked in nutmeg custard and baked until crisp on top.',
    story: 'A frugal British pudding from the 1700s.',
    equip: ['Baking dish'],
    ing: [[8, 'slice', 'white bread'], [50, 'g', 'butter', 'soft'], [60, 'g', 'sultanas or raisins'], [3, '', 'eggs'], [400, 'ml', 'milk'], [100, 'ml', 'cream'], [70, 'g', 'sugar'], [1, 'tsp', 'vanilla extract'], [0.25, 'tsp', 'nutmeg']],
    steps: [['Layer', 'Butter the bread, cut into triangles and layer with sultanas.'], ['Soak', 'Whisk eggs, milk, cream, sugar and vanilla; pour over; rest 20 minutes; grate nutmeg on top.', 20], ['Bake', 'Bake at {{180C}} 35–40 minutes.', 40]],
    tips: ['Let it soak before baking.'], mistakes: ['Dry top: press bread under the custard.'], vars: ['Panettone pudding.'], serve: 'Warm, with custard.' });

  X(UK, { id: 'glamorgan-sausages', name: 'Glamorgan Sausages', local: 'Selsig Morgannwg', emoji: '🧀', course: 'main', level: 2, prep: 20, cook: 15, rest: 30, serves: 4,
    taste: { savory: 4, rich: 4, herby: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['comfort'],
    desc: 'Welsh meatless “sausages” of Caerphilly cheese, leek, breadcrumbs, mustard and herbs, crumbed and fried.',
    story: 'Recorded in Wales in the 1850s; a vegetarian classic long before it was fashionable.',
    equip: ['Frying pan'],
    ing: [[150, 'g', 'caerphilly or crumbly cheese', 'grated'], [1, '', 'leek', 'finely chopped, softened in butter'], [150, 'g', 'fresh breadcrumbs'], [1, 'tsp', 'english mustard'], [2, 'tbsp', 'parsley'], [1, 'tsp', 'thyme'], [2, '', 'eggs'], [0.25, 'tsp', 'black pepper'], [50, 'g', 'breadcrumbs', 'to coat'], [3, 'tbsp', 'oil']],
    steps: [['Mix', 'Mix cheese, leek, crumbs, mustard, herbs, one egg and pepper; shape 8 sausages; chill 30 minutes.', 30], ['Coat', 'Dip in beaten egg and crumbs.'], ['Fry', 'Fry until golden all over.', 10]],
    tips: ['Chill so they hold.'], mistakes: ['Hot pan: burnt before hot inside.'], vars: ['Baked version.'], serve: 'Mash and onion gravy.' });

  X(C('Ireland', '🇮🇪', 'Europe'), { id: 'boxty', name: 'Boxty', local: 'Bacstaí', emoji: '🥞', course: 'breakfast', level: 1, prep: 15, cook: 20, serves: 4,
    taste: { savory: 4 }, diet: ['vegetarian'], methods: ['saute'], tags: ['comfort', 'brunch'],
    desc: 'Irish potato pancakes of grated raw and mashed potato with flour and buttermilk, fried in butter.',
    story: '“Boxty on the griddle, boxty in the pan; if you can’t make boxty, you’ll never get a man” goes the rhyme.',
    equip: ['Frying pan', 'Grater'],
    ing: [[300, 'g', 'raw potatoes', 'grated, squeezed'], [300, 'g', 'mashed potatoes'], [150, 'g', 'all-purpose flour'], [1, 'tsp', 'baking soda'], [0.75, 'tsp', 'salt'], [200, 'ml', 'buttermilk'], [30, 'g', 'butter']],
    steps: [['Mix', 'Mix potatoes, flour, soda and salt; add buttermilk to a thick batter.'], ['Fry', 'Fry pancakes in butter on medium until golden, 4 minutes per side.', 16]],
    tips: ['Squeeze the raw potato dry.'], mistakes: ['High heat: raw inside.'], vars: ['Boxty dumplings.'], serve: 'With sour cream and chives.' });

  /* ======================= NORDICS ======================= */
  X(C('Norway', '🇳🇴', 'Europe'), { id: 'lefse', name: 'Lefse', local: 'Lefse', emoji: '🫓', course: 'dessert', level: 3, prep: 30, cook: 30, rest: 240, serves: 12,
    taste: { sweet: 3, rich: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['festive'],
    desc: 'Soft, thin Norwegian potato flatbreads spread with butter, sugar and cinnamon and rolled up.',
    story: 'Made by grandmothers before Christmas with a grooved rolling pin and a long turning stick.',
    equip: ['Griddle', 'Rolling pin'],
    ing: [[800, 'g', 'floury potatoes', 'riced, cooled'], [60, 'g', 'butter'], [60, 'ml', 'cream'], [1, 'tbsp', 'sugar'], [1, 'tsp', 'salt'], [200, 'g', 'all-purpose flour'], [60, 'g', 'butter', 'soft, to spread'], [4, 'tbsp', 'sugar with cinnamon']],
    steps: [['Dough', 'Mix warm riced potatoes with butter, cream, sugar and salt; chill 4 hours; knead in flour.', 240], ['Roll', 'Roll paper-thin on a floured cloth.'], ['Cook', 'Cook on a dry hot griddle until spotted, 1 minute per side; stack under a towel.', 25], ['Spread', 'Spread with butter and cinnamon sugar; roll up.']],
    tips: ['Cold dough rolls thinner.'], mistakes: ['Warm dough: sticky.'], vars: ['Savoury lefse wraps.'], serve: 'With coffee.' });

  X(C('Finland', '🇫🇮', 'Europe'), { id: 'mustikkapiirakka', name: 'Mustikkapiirakka', local: 'Mustikkapiirakka', emoji: '🫐', course: 'dessert', level: 1, prep: 20, cook: 30, serves: 8,
    taste: { sweet: 3, sour: 3, rich: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['summer'],
    desc: 'Finnish blueberry pie: a soft butter crust filled with wild blueberries under a sour cream custard.',
    story: 'Made in late summer when Finns pick wild blueberries in the forests (everyman’s right).',
    equip: ['Pie dish'],
    ing: [[100, 'g', 'butter', 'soft'], [80, 'g', 'sugar'], [1, '', 'egg'], [200, 'g', 'all-purpose flour'], [1, 'tsp', 'baking powder'], [400, 'g', 'blueberries'], [200, 'g', 'sour cream'], [1, '', 'egg'], [60, 'g', 'sugar'], [1, 'tsp', 'vanilla extract']],
    steps: [['Crust', 'Cream butter and sugar, add egg, flour and baking powder; press into the dish.'], ['Fill', 'Add blueberries; pour over sour cream whisked with egg, sugar and vanilla.'], ['Bake', 'Bake at {{200C}} 30 minutes.', 30]],
    tips: ['Frozen blueberries go in frozen.'], mistakes: ['Thick crust: doughy.'], vars: ['Lingonberry pie.'], serve: 'Warm with vanilla sauce.' });

  X(C('Iceland', '🇮🇸', 'Europe'), { id: 'kleinur', name: 'Kleinur', local: 'Kleinur', emoji: '🥨', course: 'dessert', level: 2, prep: 30, cook: 20, serves: 24,
    taste: { sweet: 3, aromatic: 3 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['make-ahead'],
    desc: 'Icelandic twisted doughnuts flavoured with cardamom, cut into diamonds, slit and pulled through themselves.',
    story: 'Every Icelandic grandmother keeps a tin of kleinur for coffee guests.',
    equip: ['Pastry wheel', 'Kadai'],
    ing: [[500, 'g', 'all-purpose flour'], [150, 'g', 'sugar'], [2, 'tsp', 'baking powder'], [0.5, 'tsp', 'baking soda'], [1, 'tsp', 'cardamom powder'], [60, 'g', 'butter'], [1, '', 'egg'], [200, 'ml', 'buttermilk'], [1, 'l', 'oil', 'for frying']],
    steps: [['Dough', 'Rub butter into dry ingredients; add egg and buttermilk to a soft dough.'], ['Shape', 'Roll 5 mm thick, cut diamonds, slit the middle and pull one end through.'], ['Fry', '[[deep-fry|Fry]] until golden.', 15]],
    tips: ['Fry a test one first.'], mistakes: ['Hot oil: raw centres.'], vars: ['Norwegian fattigmann.'], serve: 'With coffee.' });

  /* ======================= EASTERN EUROPE ======================= */
  X(RU, { id: 'vinegret', name: 'Vinegret', local: 'Винегрет', emoji: '🥗', course: 'salad', level: 1, prep: 20, cook: 40, serves: 6,
    taste: { sour: 3, sweet: 2, savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer', 'no-cook'], tags: ['festive', 'healthy', 'make-ahead'],
    desc: 'Russian beetroot salad of diced cooked beets, potatoes and carrots with pickles, sauerkraut, peas and sunflower oil.',
    story: 'A staple of Russian New Year and Soviet canteens; the beet juice colours everything pink.',
    equip: ['Pot', 'Bowl'],
    ing: [[3, '', 'beetroots', 'cooked, diced'], [3, '', 'potatoes', 'cooked, diced'], [2, '', 'carrots', 'cooked, diced'], [3, '', 'dill pickles', 'diced'], [150, 'g', 'sauerkraut'], [100, 'g', 'green peas'], [1, '', 'red onion', 'finely chopped'], [4, 'tbsp', 'sunflower oil'], [0.5, 'tsp', 'salt'], [2, 'tbsp', 'dill']],
    steps: [['Beets', 'Toss the beets with a little oil first so they don’t stain everything.'], ['Mix', 'Add remaining vegetables, oil, salt and dill; rest 30 minutes.']],
    tips: ['Oil the beets first.'], mistakes: ['Hot vegetables: mushy salad.'], vars: ['Add beans.'], serve: 'With black bread.' });

  X(RU, { id: 'okroshka', name: 'Okroshka', local: 'Окрошка', emoji: '🥣', course: 'soup', level: 1, prep: 20, cook: 20, rest: 60, serves: 4,
    taste: { sour: 4, herby: 4, savory: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'healthy'],
    desc: 'Cold Russian summer soup of chopped cucumber, radish, potato, egg and dill in kefir with a little mustard.',
    story: 'Traditionally made with kvass (fermented bread drink); kefir is the other popular base.',
    equip: ['Bowl'],
    ing: [[2, '', 'cucumbers', 'diced'], [8, '', 'radishes', 'diced'], [3, '', 'potatoes', 'boiled, diced'], [3, '', 'eggs', 'hard-boiled, chopped'], [4, '', 'scallions'], [1, 'bunch', 'dill'], [1, 'l', 'kefir'], [300, 'ml', 'cold sparkling water'], [1, 'tsp', 'mustard'], [0.75, 'tsp', 'salt'], [1, 'tbsp', 'lemon juice']],
    steps: [['Chop', 'Chop all vegetables and eggs small.'], ['Mix', 'Mix kefir, sparkling water, mustard, salt and lemon; pour over and chill.', 60]],
    tips: ['Ice cubes on hot days.'], mistakes: ['Not chilling: flat.'], vars: ['With kvass.'], serve: 'Very cold.' });

  X(RU, { id: 'cabbage-pirozhki', name: 'Cabbage Pirozhki', local: 'Пирожки с капустой', emoji: '🥟', course: 'snack', level: 2, prep: 40, cook: 25, rest: 90, serves: 12,
    taste: { savory: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['make-ahead', 'party'],
    desc: 'Soft baked Russian buns filled with sautéed cabbage, onion, egg and dill.',
    story: 'Russian grandmothers bake trays of pirozhki for guests and train journeys.',
    equip: ['Baking tray', 'Pan'],
    ing: [[500, 'g', 'all-purpose flour'], [7, 'g', 'instant yeast'], [1, 'tbsp', 'sugar'], [1, 'tsp', 'salt'], [250, 'ml', 'warm milk'], [1, '', 'egg'], [50, 'g', 'butter', 'melted'], '#Filling', [500, 'g', 'cabbage', 'shredded'], [1, '', 'onion'], [2, 'tbsp', 'oil'], [2, '', 'eggs', 'hard-boiled, chopped'], [2, 'tbsp', 'dill'], [0.5, 'tsp', 'salt'], [1, '', 'egg', 'to glaze']],
    steps: [['Dough', '[[knead|Knead]] and [[proof]] 1 hour.', 60], ['Filling', 'Cook cabbage and onion in oil until soft and golden, 15 minutes; add egg, dill and salt.', 15], ['Shape and bake', 'Fill rounds, pinch closed, rise 20 minutes, glaze and bake at {{190C}} 20 minutes.', 40]],
    tips: ['Cool filling before shaping.'], mistakes: ['Wet filling: soggy buns.'], vars: ['Potato or mushroom pirozhki.'], serve: 'With soup.' });

  X(RU, { id: 'grechka', name: 'Grechka with Mushrooms', local: 'Гречка с грибами', emoji: '🍄', course: 'main', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { savory: 4, umami: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer', 'saute'], tags: ['budget', 'healthy', 'one-pot'],
    desc: 'Nutty toasted buckwheat cooked fluffy and tossed with fried mushrooms and onions.',
    story: 'Buckwheat kasha is the everyday grain of Russia, Ukraine and Belarus.',
    equip: ['Pot', 'Pan'],
    ing: [[250, 'g', 'buckwheat groats (kasha)'], [500, 'ml', 'water'], [0.75, 'tsp', 'salt'], [3, 'tbsp', 'oil'], [2, '', 'onions', 'sliced'], [400, 'g', 'mushrooms', 'sliced'], [2, 'tbsp', 'dill']],
    steps: [['Toast', 'Dry-[[toast]] the buckwheat 3 minutes.', 3], ['Cook', 'Add water and salt; cover and cook on low 15 minutes; rest 5.', 20], ['Mushrooms', 'Fry onions and mushrooms until golden; toss through with dill.', 12]],
    tips: ['Don’t stir buckwheat while it cooks.'], mistakes: ['Too much water: mushy.'], vars: ['With butter (vegetarian).'], serve: 'With pickles.' });

  X(C('Ukraine', '🇺🇦', 'Europe'), { id: 'deruny', name: 'Deruny', local: 'Деруни', emoji: '🥔', course: 'main', level: 1, prep: 20, cook: 20, serves: 4,
    taste: { savory: 4 }, diet: ['vegetarian'], methods: ['saute'], tags: ['comfort', 'budget'],
    desc: 'Ukrainian potato pancakes with onion, fried crisp and served with sour cream; Belarus calls them draniki.',
    story: '“Deruny” comes from the verb to grate; a national dish of Ukraine.',
    equip: ['Grater', 'Frying pan'],
    ing: [[1, 'kg', 'potatoes', 'finely grated'], [1, '', 'onion', 'grated'], [1, '', 'egg'], [2, 'tbsp', 'all-purpose flour'], [1, 'tsp', 'salt'], [6, 'tbsp', 'sunflower oil'], [150, 'g', 'sour cream']],
    steps: [['Drain', 'Drain grated potato and onion well.'], ['Mix', 'Mix with egg, flour and salt.'], ['Fry', 'Fry spoonfuls in hot oil until crisp.', 15]],
    tips: ['Fine grating gives a smooth pancake.'], mistakes: ['Soggy: drain better.'], vars: ['Stuffed with mushrooms.'], serve: 'Sour cream and dill.' });

  X(C('Slovakia', '🇸🇰', 'Europe'), { id: 'halusky', name: 'Bryndzové Halušky', local: 'Bryndzové halušky', emoji: '🧀', course: 'main', level: 2, prep: 20, cook: 15, serves: 4,
    taste: { rich: 4, savory: 4, sour: 2 }, diet: ['vegetarian'], methods: ['simmer', 'saute'], tags: ['comfort'],
    desc: 'Slovakia’s national dish: small potato dumplings tossed with tangy sheep’s cheese, topped with crispy onions.',
    story: 'Normally topped with bacon; here with buttery fried onions and chives.',
    equip: ['Pot', 'Halušky grater or colander'],
    ing: [[600, 'g', 'potatoes', 'finely grated'], [200, 'g', 'all-purpose flour'], [1, 'tsp', 'salt'], [250, 'g', 'bryndza or feta mashed with sour cream'], [40, 'g', 'butter'], [2, '', 'onions', 'sliced'], [2, 'tbsp', 'chives']],
    steps: [['Dough', 'Mix potato, flour and salt into a sticky dough.'], ['Cook', 'Press through a colander into boiling salted water; cook until they float, 3 minutes.', 6], ['Toss', 'Toss with the cheese; top with onions fried golden in butter and chives.', 8]],
    tips: ['Work fast so the potato doesn’t darken.'], mistakes: ['Too much flour: heavy.'], vars: ['Strapačky with sauerkraut.'], serve: 'With buttermilk.' });

  X(C('Moldova', '🇲🇩', 'Europe'), { id: 'placinte', name: 'Plăcinte cu Brânză', local: 'Plăcinte', emoji: '🥧', course: 'snack', level: 2, prep: 30, cook: 20, rest: 30, serves: 8,
    taste: { savory: 4, rich: 4 }, diet: ['vegetarian'], methods: ['saute'], tags: ['party'],
    desc: 'Moldovan pan-fried pastries of stretched dough filled with salty cheese and dill.',
    story: 'Moldova’s favourite food, also filled with potato, cabbage or pumpkin.',
    equip: ['Frying pan'],
    ing: [[300, 'g', 'all-purpose flour'], [170, 'ml', 'warm water'], [1, 'tbsp', 'oil'], [0.5, 'tsp', 'salt'], [250, 'g', 'feta or brânză', 'crumbled'], [1, '', 'egg'], [2, 'tbsp', 'dill'], [3, 'tbsp', 'oil', 'for frying']],
    steps: [['Dough', '[[knead|Knead]] a soft dough; rest 30 minutes.', 30], ['Fill', 'Roll thin, fill with cheese-egg-dill, fold edges to the centre and flatten.'], ['Fry', 'Fry in oil until golden, 4 minutes per side.', 16]],
    tips: ['Thin dough, lots of filling.'], mistakes: ['Holes: filling leaks.'], vars: ['Pumpkin plăcinte.'], serve: 'With sour cream.' });

  X(C('Slovenia', '🇸🇮', 'Europe'), { id: 'potica', name: 'Potica', local: 'Potica', emoji: '🌀', course: 'dessert', level: 3, prep: 40, cook: 60, rest: 120, serves: 12,
    taste: { sweet: 4, rich: 4, aromatic: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['festive'],
    desc: 'Slovenian rolled yeast cake with a swirl of honey-walnut filling, baked in a ring mould.',
    story: 'Made for Christmas and Easter; Slovenia has around 80 kinds of potica.',
    equip: ['Ring (bundt) tin'],
    ing: [[500, 'g', 'all-purpose flour'], [7, 'g', 'instant yeast'], [60, 'g', 'sugar'], [250, 'ml', 'warm milk'], [2, '', 'egg yolks'], [60, 'g', 'butter'], [0.5, 'tsp', 'salt'], '#Filling', [300, 'g', 'walnuts', 'ground'], [150, 'ml', 'hot milk'], [100, 'g', 'honey'], [60, 'g', 'sugar'], [1, 'tsp', 'ground cinnamon'], [1, '', 'egg white']],
    steps: [['Dough', '[[knead|Knead]] and [[proof]] 1 hour.', 60], ['Filling', 'Pour hot milk over walnuts; add honey, sugar and cinnamon; cool; fold in whisked egg white.'], ['Roll and bake', 'Roll the dough thin, spread filling, roll up and place in the tin; rise 45 minutes; bake at {{175C}} 55 minutes.', 100]],
    tips: ['Roll tightly for many swirls.'], mistakes: ['Gaps: dough too thick.'], vars: ['Tarragon potica.'], serve: 'Sliced, with coffee.' });

  X(C('Hungary', '🇭🇺', 'Europe'), { id: 'somloi-galuska', name: 'Somlói Galuska', local: 'Somlói galuska', emoji: '🍰', course: 'dessert', level: 3, prep: 40, cook: 30, rest: 240, serves: 8,
    taste: { sweet: 5, rich: 5 }, diet: ['vegetarian'], methods: ['bake'], tags: ['festive', 'impress'],
    desc: 'Hungarian trifle of vanilla, walnut and chocolate sponges soaked in syrup, layered with custard, raisins and walnuts, topped with chocolate sauce and cream.',
    story: 'Created at Budapest’s Gundel restaurant in the 1950s.',
    equip: ['Baking trays', 'Deep dish'],
    ing: [[6, '', 'eggs'], [150, 'g', 'sugar'], [150, 'g', 'all-purpose flour'], [30, 'g', 'cocoa powder'], [60, 'g', 'walnuts', 'ground'], [300, 'ml', 'sugar syrup', 'with rum or orange zest'], [400, 'ml', 'vanilla custard'], [50, 'g', 'raisins'], [60, 'g', 'walnuts', 'chopped'], [150, 'ml', 'chocolate sauce'], [200, 'ml', 'cream', 'whipped']],
    steps: [['Sponges', 'Make a sponge batter; divide into three (plain, cocoa, walnut) and bake thin at {{180C}} 12 minutes each.', 36], ['Layer', 'Layer sponges soaked in syrup with custard, raisins and walnuts; chill overnight.', 240], ['Serve', 'Scoop into bowls; top with chocolate sauce and cream.']],
    tips: ['Make a day ahead.'], mistakes: ['Dry sponge: soak well.'], vars: ['Alcohol-free with orange syrup.'], serve: 'Scooped, like dumplings.' });

  /* ======================= BALKANS, GREECE & TURKEY ======================= */
  X(BG, { id: 'banitsa', name: 'Banitsa', local: 'Баница', emoji: '🥧', course: 'breakfast', level: 2, prep: 20, cook: 40, serves: 8,
    taste: { savory: 4, rich: 5, sour: 2 }, diet: ['vegetarian'], methods: ['bake'], tags: ['festive', 'brunch'],
    desc: 'Bulgarian filo pie with feta, eggs and yogurt, coiled or layered and baked golden.',
    story: 'Baked on New Year’s Eve with lucky charms (kusmeti) hidden inside.',
    equip: ['Baking dish'],
    ing: [[500, 'g', 'filo pastry'], [300, 'g', 'feta', 'crumbled'], [4, '', 'eggs'], [300, 'g', 'yogurt'], [0.5, 'tsp', 'baking soda'], [100, 'g', 'butter', 'melted']],
    steps: [['Filling', 'Mix feta, eggs, yogurt and soda.'], ['Layer', 'Brush filo with butter, scatter filling, scrunch or roll, and fill the dish.'], ['Bake', 'Bake at {{200C}} 40 minutes.', 40]],
    tips: ['Soda in the yogurt makes it fluffy.'], mistakes: ['Dry filo cracks.'], vars: ['Spinach or pumpkin banitsa.'], serve: 'With boza or ayran.' });

  X(BG, { id: 'tarator', name: 'Tarator', local: 'Таратор', emoji: '🥒', course: 'soup', level: 1, prep: 10, cook: 0, rest: 60, serves: 4,
    taste: { sour: 3, herby: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'quick', 'healthy'],
    desc: 'Bulgarian cold soup of yogurt, cucumber, garlic, dill and walnuts with a drizzle of oil.',
    story: 'Bulgarians eat it all summer; Bulgarian yogurt is famous for its Lactobacillus bulgaricus.',
    equip: ['Bowl'],
    ing: [[500, 'g', 'yogurt'], [300, 'ml', 'cold water'], [1, '', 'cucumber', 'finely diced'], [2, 'clove', 'garlic', 'crushed'], [1, 'bunch', 'dill'], [40, 'g', 'walnuts', 'chopped'], [2, 'tbsp', 'sunflower oil'], [0.5, 'tsp', 'salt']],
    steps: [['Mix', 'Whisk yogurt with water, garlic and salt; add cucumber and dill.'], ['Chill', 'Chill 1 hour; top with walnuts and oil.', 60]],
    tips: ['Ice cubes make it extra cold.'], mistakes: ['Thick yogurt: add more water.'], vars: ['Snezhanka (thick salad version).'], serve: 'Cold.' });

  X(GR, { id: 'gigantes', name: 'Gigantes Plaki', local: 'Γίγαντες πλακί', emoji: '🫘', course: 'main', level: 1, prep: 15, cook: 90, rest: 480, serves: 6,
    taste: { savory: 4, sweet: 2, herby: 4 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['simmer', 'bake'], tags: ['make-ahead', 'healthy'],
    desc: 'Greek giant white beans baked in a thick tomato, onion and dill sauce with olive oil.',
    story: 'A meze and Lenten dish; Prespes in northern Greece grows the best gigantes.',
    equip: ['Pot', 'Baking dish'],
    ing: [[400, 'g', 'dried giant beans (gigantes) or butter beans', 'soaked overnight'], [100, 'ml', 'olive oil'], [2, '', 'onions'], [3, 'clove', 'garlic'], [1, '', 'carrot', 'grated'], [400, 'g', 'canned tomatoes'], [2, 'tbsp', 'tomato paste'], [1, 'tsp', 'dried oregano'], [1, 'bunch', 'dill and parsley'], [1.25, 'tsp', 'salt'], [300, 'ml', 'bean cooking water']],
    steps: [['Beans', '[[simmer|Simmer]] soaked beans until just tender, 50 minutes.', 50], ['Sauce', 'Cook onions, garlic and carrot in oil; add tomatoes, paste and oregano.', 10], ['Bake', 'Mix beans, sauce, herbs, salt and water; bake at {{180C}} 40 minutes until thick.', 40]],
    tips: ['Don’t overcook beans before baking.'], mistakes: ['Dry: add water.'], vars: ['With feta crumbled on top.'], serve: 'Bread and feta.' });

  X(GR, { id: 'spanakorizo', name: 'Spanakorizo', local: 'Σπανακόρυζο', emoji: '🥬', course: 'main', level: 1, prep: 10, cook: 25, serves: 4,
    taste: { herby: 4, sour: 3, savory: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['healthy', 'weeknight', 'one-pot'],
    desc: 'Greek spinach rice with onion, dill and lemon, cooked in olive oil until creamy.',
    story: 'A Lenten ladera dish; Greeks serve it with feta and olives.',
    equip: ['Pot'],
    ing: [[5, 'tbsp', 'olive oil'], [1, '', 'onion'], [4, '', 'scallions'], [500, 'g', 'spinach', 'chopped'], [150, 'g', 'medium-grain rice'], [500, 'ml', 'water'], [1, 'bunch', 'dill'], [1, '', 'lemon', 'juice'], [1, 'tsp', 'salt']],
    steps: [['Base', 'Soften onions in oil; add spinach until wilted.', 6], ['Rice', 'Add rice, water and salt; simmer covered 18 minutes.', 18], ['Finish', 'Stir in dill and lemon.']],
    tips: ['Creamy, not dry.'], mistakes: ['Too much lemon early: hard rice.'], vars: ['Prasorizo (leeks).'], serve: 'Feta and olives.' });

  X(TR, { id: 'peynirli-pide', name: 'Peynirli Pide', local: 'Peynirli pide', emoji: '⛵', course: 'main', level: 2, prep: 25, cook: 15, rest: 60, serves: 4,
    taste: { savory: 4, rich: 5 }, diet: ['vegetarian'], methods: ['bake'], tags: ['party'],
    desc: 'Turkish boat-shaped flatbread filled with melting cheese and an egg cracked in the middle.',
    story: 'Black Sea pide shops bake them in wood-fired ovens; the cheese version is the classic.',
    equip: ['Baking tray'],
    ing: [[400, 'g', 'all-purpose flour'], [5, 'g', 'instant yeast'], [1, 'tsp', 'sugar'], [1, 'tsp', 'salt'], [250, 'ml', 'warm water'], [2, 'tbsp', 'olive oil'], [200, 'g', 'mozzarella', 'grated'], [150, 'g', 'feta', 'crumbled'], [4, '', 'eggs'], [30, 'g', 'butter', 'melted']],
    steps: [['Dough', '[[knead|Knead]] and [[proof]] 1 hour.', 60], ['Shape', 'Roll ovals, fill with cheese, fold the edges and twist the ends into boats.'], ['Bake', 'Bake at {{240C}} 8 minutes; crack in an egg and bake 4 more; brush with butter.', 12]],
    tips: ['Very hot oven.'], mistakes: ['Thick dough: bready.'], vars: ['Spinach pide.'], serve: 'With ayran.' });

  X(TR, { id: 'mucver', name: 'Mücver', local: 'Mücver', emoji: '🥒', course: 'starter', level: 1, prep: 20, cook: 15, serves: 4,
    taste: { herby: 4, savory: 4 }, diet: ['vegetarian'], methods: ['saute'], tags: ['summer', 'party'],
    desc: 'Turkish zucchini fritters with feta, dill, mint and scallions, served with garlic yogurt.',
    story: 'A summer meze across Turkey; Greeks make kolokithokeftedes.',
    equip: ['Grater', 'Frying pan'],
    ing: [[3, '', 'zucchini', 'grated, salted, squeezed'], [100, 'g', 'feta', 'crumbled'], [3, '', 'scallions'], [1, 'handful', 'dill and mint'], [2, '', 'eggs'], [60, 'g', 'all-purpose flour'], [0.5, 'tsp', 'chili flakes'], [4, 'tbsp', 'olive oil'], [200, 'g', 'yogurt', 'with garlic']],
    steps: [['Squeeze', 'Salt zucchini 10 minutes; squeeze very dry.', 10], ['Mix', 'Mix with feta, herbs, eggs, flour and chili.'], ['Fry', 'Fry spoonfuls until golden on both sides.', 12]],
    tips: ['Squeeze hard.'], mistakes: ['Wet mix: falls apart.'], vars: ['Baked mücver.'], serve: 'Garlic yogurt.' });

  X(TR, { id: 'taze-fasulye', name: 'Zeytinyağlı Taze Fasulye', local: 'Zeytinyağlı taze fasulye', emoji: '🫛', course: 'side', level: 1, prep: 15, cook: 40, serves: 4,
    taste: { savory: 4, sweet: 2, sour: 2 }, diet: ['vegan', 'gluten-free'], methods: ['braise'], tags: ['summer', 'make-ahead'],
    desc: 'Flat green beans braised slowly in olive oil with onion and tomato, served at room temperature.',
    story: 'One of the zeytinyağlı (olive-oil) dishes Turkish cooks serve cold the next day.',
    equip: ['Pot'],
    ing: [[500, 'g', 'flat green beans', 'cut'], [6, 'tbsp', 'olive oil'], [1, '', 'onion', 'sliced'], [3, '', 'tomatoes', 'grated'], [1, 'tsp', 'sugar'], [1, 'tsp', 'salt'], [200, 'ml', 'water']],
    steps: [['Base', 'Soften onion in oil.', 6], ['Braise', 'Add beans, tomatoes, sugar, salt and water; [[braise]] covered on low 35 minutes until silky.', 35], ['Cool', 'Cool in the pot.']],
    tips: ['Serve at room temperature.'], mistakes: ['High heat: beans fall apart.'], vars: ['Greek fasolakia.'], serve: 'Bread and yogurt.' });

  X(TR, { id: 'asure', name: 'Aşure (Noah’s Pudding)', local: 'Aşure', emoji: '🥣', course: 'dessert', level: 2, prep: 20, cook: 90, rest: 480, serves: 10,
    taste: { sweet: 4, aromatic: 3 }, diet: ['vegan'], methods: ['simmer'], tags: ['festive', 'make-ahead'],
    desc: 'Turkish pudding of wheat berries, chickpeas and white beans with dried apricots, figs and raisins, topped with nuts and pomegranate.',
    story: 'Said to be the dish Noah made from the last ingredients on the Ark; shared with neighbours in the month of Muharram.',
    equip: ['Large pot'],
    ing: [[200, 'g', 'wheat berries', 'soaked overnight'], [1, 'can', 'chickpeas'], [1, 'can', 'cannellini beans'], [2, 'l', 'water'], [250, 'g', 'sugar'], [100, 'g', 'dried apricots', 'chopped'], [80, 'g', 'dried figs', 'chopped'], [60, 'g', 'raisins'], [1, '', 'orange', 'zest'], [60, 'g', 'walnuts and hazelnuts'], [3, 'tbsp', 'pomegranate seeds'], [1, 'tsp', 'ground cinnamon']],
    steps: [['Wheat', '[[simmer|Simmer]] wheat in water until soft, 60 minutes.', 60], ['Add', 'Add beans, chickpeas, sugar, dried fruit and zest; simmer 25 minutes until thick.', 25], ['Top', 'Pour into bowls; cool and top with nuts, pomegranate and cinnamon.']],
    tips: ['It thickens as it cools.'], mistakes: ['Too thin: simmer longer.'], vars: ['Add rose water.'], serve: 'Cold, shared with neighbours.' });
})();
