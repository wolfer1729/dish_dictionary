/* Every course, vegetarian: desserts & drinks from India and the world */
'use strict';
(function () {
  const X = (base, d) => DD.add(Object.assign({}, base, d));
  const IN = (area, styles) => ({ country: 'India', flag: '🇮🇳', region: 'South Asia', area, styles: styles || ['sweets'] });
  const W = (country, flag, region, styles) => ({ country, flag, region, styles: styles || [] });

  /* ================= INDIAN DESSERTS ================= */
  X(IN('Uttar Pradesh'), { id: 'kulfi', name: 'Malai Kulfi', local: 'मलाई कुल्फ़ी', emoji: '🍦', course: 'dessert', level: 2, prep: 10, cook: 45, rest: 480, serves: 6,
    taste: { sweet: 4, rich: 5, aromatic: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['summer', 'make-ahead', 'festive'],
    desc: 'Dense, creamy Indian ice cream of slow-reduced milk with cardamom, saffron and pistachios.',
    story: 'Kulfi dates to the Mughal era, when milk was frozen in metal cones packed in ice and saltpeter. It is denser than ice cream because it is never churned.',
    equip: ['Heavy wide pan', 'Kulfi moulds or cups'], ing: [[1.5, 'l', 'full-fat milk'], [100, 'g', 'sugar'], [0.5, 'tsp', 'cardamom powder'], [1, 'pinch', 'saffron'], [30, 'g', 'pistachios and almonds', 'finely chopped'], [2, 'tbsp', 'milk powder', 'optional, for creaminess']],
    steps: [['Reduce', '[[reduce|Reduce]] the milk on medium-low, stirring and scraping the sides, 40 minutes until a third of the volume.', 40, 'Scraping the cream from the sides back in gives rich texture.'], ['Sweeten', 'Add sugar, saffron, cardamom, milk powder and nuts; simmer 5 minutes. Cool.', 5], ['Freeze', 'Pour into moulds and freeze 8 hours. Dip in warm water to unmould.']],
    tips: ['Shortcut: condensed milk + evaporated milk + cream, no cooking.'], mistakes: ['Burning the milk: stir from the bottom.'], vars: ['Mango, rose or pista kulfi; kulfi falooda.'], serve: 'With falooda noodles and rose syrup.' });

  X(IN('Rajasthan'), { id: 'malpua', name: 'Malpua with Rabri', local: 'मालपुआ', emoji: '🥞', course: 'dessert', level: 2, prep: 15, cook: 30, serves: 4,
    taste: { sweet: 5, rich: 5, aromatic: 4 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['festive', 'rainy-day'],
    desc: 'Lacy-edged fried sweet pancakes soaked in cardamom syrup and served with thick rabri.',
    story: 'One of India’s oldest sweets, made at Holi and offered at the Puri Jagannath temple.',
    equip: ['Wide shallow pan', 'Saucepan'], ing: [[120, 'g', 'all-purpose flour'], [2, 'tbsp', 'semolina'], [200, 'ml', 'milk'], [2, 'tbsp', 'sugar'], [0.5, 'tsp', 'fennel seeds'], [0.25, 'tsp', 'cardamom powder'], [300, 'ml', 'ghee', 'for frying'],
      '#Syrup', [150, 'g', 'sugar'], [120, 'ml', 'water'], [1, 'pinch', 'saffron'], '#Rabri', [500, 'ml', 'full-fat milk', 'reduced to a third with 2 tbsp sugar'], [1, 'tbsp', 'pistachios']],
    steps: [['Batter', '[[whisk|Whisk]] flour, semolina, milk, sugar, fennel and cardamom to a pouring batter; rest 20 minutes.'], ['Syrup', 'Boil sugar, water and saffron 5 minutes to a light syrup.', 5], ['Fry', 'Pour a ladle into hot ghee; it spreads with lacy edges. Fry until golden on both sides.', 3], ['Soak', 'Dip in syrup 1 minute. Serve warm with rabri and pistachios.']],
    tips: ['The ghee should be shallow and hot.'], mistakes: ['Thick batter: no lacy edges.'], vars: ['Banana malpua.'], serve: 'Warm with rabri.' });

  X(IN('Uttar Pradesh'), { id: 'phirni', name: 'Phirni', local: 'फिरनी', emoji: '🍮', course: 'dessert', level: 1, prep: 10, cook: 25, rest: 120, serves: 6,
    taste: { sweet: 4, rich: 4, aromatic: 5 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'make-ahead', 'summer'],
    desc: 'Silky ground-rice pudding with saffron, cardamom and rose water, set in clay pots.',
    story: 'A Mughlai dessert served at Eid; clay pots (shikoras) give an earthy aroma.',
    equip: ['Heavy pan', 'Clay pots or bowls'], ing: [[50, 'g', 'basmati rice', 'soaked 30 min, ground coarse'], [1, 'l', 'full-fat milk'], [100, 'g', 'sugar'], [0.5, 'tsp', 'cardamom powder'], [1, 'pinch', 'saffron'], [1, 'tsp', 'rose water'], [2, 'tbsp', 'pistachios', 'slivered']],
    steps: [['Cook', 'Whisk ground rice into cold milk; bring to a simmer, stirring constantly, 15–20 minutes until thick.', 18, 'Constant stirring stops lumps.'], ['Flavor', 'Add sugar, saffron, cardamom; cook 3 minutes. Add rose water.'], ['Set', 'Pour into pots, garnish, chill 2 hours.']],
    tips: ['Clay pots absorb moisture and set it beautifully.'], mistakes: ['Lumps from adding rice to hot milk.'], vars: ['Mango phirni.'], serve: 'Chilled.' });

  X(IN('Hyderabad', ['sweets', 'mughlai']), { id: 'shahi-tukda', name: 'Shahi Tukda', local: 'शाही टुकड़ा', emoji: '🍞', course: 'dessert', level: 2, prep: 15, cook: 40, serves: 6,
    taste: { sweet: 5, rich: 5, aromatic: 4 }, diet: ['vegetarian'], methods: ['saute', 'simmer'], tags: ['festive', 'impress'],
    desc: 'Royal bread pudding: ghee-fried bread soaked in syrup and topped with saffron rabri and nuts.',
    story: '“Royal piece”, a Mughal-era dessert from Hyderabad, made especially at Eid.',
    equip: ['Frying pan', 'Saucepans'], ing: [[6, 'slice', 'white bread', 'crusts removed, halved'], [4, 'tbsp', 'ghee'], [100, 'g', 'sugar'], [100, 'ml', 'water'], [750, 'ml', 'full-fat milk'], [60, 'g', 'sugar', 'for rabri'], [1, 'pinch', 'saffron'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'almonds and pistachios']],
    steps: [['Rabri', 'Reduce milk to a third, add sugar, saffron and cardamom.', 30], ['Fry bread', 'Fry bread in ghee until golden and crisp.', 6], ['Syrup', 'Dip bread in a quick syrup of sugar and water.'], ['Assemble', 'Arrange bread, pour rabri over, garnish with nuts.']],
    tips: ['Serve warm or chilled.'], mistakes: ['Soggy bread: fry well.'], vars: ['Bake the bread instead of frying.'], serve: 'After biryani.' });

  X(IN('Pan-India'), { id: 'kaju-katli', name: 'Kaju Katli', local: 'काजू कतली', emoji: '💎', course: 'dessert', level: 2, prep: 10, cook: 15, rest: 30, serves: 20,
    taste: { sweet: 5, rich: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'make-ahead'],
    desc: 'Smooth diamond-shaped cashew fudge, often topped with edible silver leaf.',
    story: 'India’s most gifted Diwali sweet; the shiny silver leaf (vark) signals celebration.',
    equip: ['Grinder', 'Non-stick pan', 'Rolling pin', 'Butter paper'], ing: [[200, 'g', 'cashews', 'ground to fine powder'], [100, 'g', 'sugar'], [80, 'ml', 'water'], [1, 'tsp', 'ghee'], [0.25, 'tsp', 'cardamom powder'], [null, '', 'edible silver leaf', 'optional']],
    steps: [['Syrup', 'Boil sugar and water to one-string consistency.', 5], ['Cook', 'Add cashew powder, stir on low until it forms a soft dough that leaves the pan, 4–5 minutes. Add ghee.', 5, 'Overcooking makes it crumbly; stop when it’s like soft play-dough.'], ['Roll', 'Knead when warm, roll between butter paper to 5 mm, cut diamonds.']],
    tips: ['Pulse cashews in short bursts so they don’t turn oily.'], mistakes: ['Overcooked: cracks.'], vars: ['Kaju pista roll.'], serve: 'At festivals.', store: 'Airtight 2 weeks.' });

  X(IN('Pan-India'), { id: 'coconut-ladoo', name: 'Coconut Ladoo', local: 'नारियल लड्डू', emoji: '🥥', course: 'dessert', level: 1, prep: 5, cook: 15, serves: 12,
    taste: { sweet: 5, rich: 4, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'quick', 'kids'],
    desc: 'Quick 3-ingredient coconut and condensed-milk balls with cardamom.',
    story: 'A quick festival sweet made for Ganesh Chaturthi and Diwali.',
    equip: ['Non-stick pan'], ing: [[200, 'g', 'desiccated coconut', 'plus extra for rolling'], [200, 'g', 'sweetened condensed milk'], [1, 'tbsp', 'ghee'], [0.25, 'tsp', 'cardamom powder']],
    steps: [['Cook', 'Toast coconut in ghee 2 minutes, add condensed milk and cardamom; stir until it leaves the pan, 6–8 minutes.', 8], ['Shape', 'Cool slightly, roll into balls and coat in coconut.']],
    tips: ['Grease your palms.'], mistakes: ['Undercooked: sticky.'], vars: ['Rose or chocolate coconut ladoo.'], serve: 'As a festival treat.' });

  X(IN('Pan-India', ['sweets', 'home-style']), { id: 'sooji-halwa', name: 'Sooji Halwa (Sheera)', local: 'सूजी का हलवा', emoji: '🟡', course: 'dessert', level: 1, prep: 5, cook: 15, serves: 4,
    taste: { sweet: 5, rich: 4, aromatic: 4 }, diet: ['vegetarian'], methods: ['saute'], tags: ['quick', 'festive', 'comfort'],
    desc: 'Golden semolina pudding roasted in ghee with sugar, cardamom and nuts. 20 minutes start to finish.',
    story: 'The prasad (temple offering) of North India and Satyanarayan puja sheera in Maharashtra.',
    equip: ['Kadai', 'Saucepan'], ing: [[100, 'g', 'semolina (sooji)'], [80, 'g', 'ghee'], [100, 'g', 'sugar'], [400, 'ml', 'water or milk', 'hot'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'cashews and raisins']],
    steps: [['Roast', 'Roast semolina in ghee on low, stirring, until golden and nutty, 7–8 minutes.', 8, 'Slow roasting is the whole flavor.'], ['Cook', 'Carefully add hot water (it sputters), stir until absorbed, add sugar and cardamom.', 4], ['Finish', 'Cook until it leaves the pan; add fried nuts.']],
    tips: ['Hot water prevents lumps.'], mistakes: ['Under-roasting: raw taste.'], vars: ['Pineapple sheera, atta halwa.'], serve: 'Warm.' });

  /* ================= WORLD DESSERTS ================= */
  X(W('United States', '🇺🇸', 'North America', ['continental']), { id: 'chocolate-lava-cake', name: 'Chocolate Lava Cake', local: 'Molten chocolate cake', emoji: '🍫', course: 'dessert', level: 2, prep: 15, cook: 12, serves: 4,
    taste: { sweet: 4, rich: 5, bitter: 2 }, diet: ['vegetarian'], methods: ['bake'], tags: ['date-night', 'impress', 'quick'],
    desc: 'Individual chocolate cakes with a molten, flowing center.',
    story: 'Chef Jean-Georges Vongerichten famously “invented” it in 1987 when he pulled a cake out early, though French chefs claim the fondant au chocolat earlier.',
    equip: ['4 ramekins', 'Whisk'], ing: [[120, 'g', 'dark chocolate (70%)'], [100, 'g', 'butter'], [2, '', 'eggs'], [2, '', 'egg yolks'], [60, 'g', 'sugar'], [30, 'g', 'all-purpose flour'], [1, 'pinch', 'salt'], [1, 'tbsp', 'cocoa powder', 'for the ramekins']],
    steps: [['Prep', 'Butter ramekins and dust with cocoa. Preheat oven to {{220C}}.'], ['Melt', 'Melt chocolate and butter.'], ['Whisk', '[[whisk|Whisk]] eggs, yolks and sugar until pale; fold in chocolate, then flour and salt.'], ['Bake', 'Bake 10–12 minutes until edges are set but the center wobbles. Rest 1 minute, invert.', 11, 'Every oven differs: test one first.']],
    tips: ['Make ahead and refrigerate; bake from cold +2 min.'], mistakes: ['Overbaking: no lava.'], vars: ['Eggless: use yogurt and baking soda.'], serve: 'Vanilla ice cream and berries.' });

  X(W('United States', '🇺🇸', 'North America'), { id: 'fudgy-brownies', name: 'Fudgy Chocolate Brownies', local: 'Brownies', emoji: '🟫', course: 'dessert', level: 1, prep: 15, cook: 25, serves: 16,
    taste: { sweet: 5, rich: 5, bitter: 1 }, diet: ['vegetarian'], methods: ['bake'], tags: ['kids', 'party', 'make-ahead'],
    desc: 'Dense, fudgy brownies with a shiny crackly top.',
    story: 'Created at Chicago’s Palmer House Hotel for the 1893 World’s Fair as a portable ladies’ lunch dessert.',
    equip: ['20 cm square tin'], ing: [[150, 'g', 'butter'], [200, 'g', 'dark chocolate'], [200, 'g', 'sugar'], [3, '', 'eggs'], [1, 'tsp', 'vanilla extract'], [80, 'g', 'all-purpose flour'], [30, 'g', 'cocoa powder'], [0.5, 'tsp', 'salt'], [80, 'g', 'chocolate chips or walnuts']],
    steps: [['Melt', 'Melt butter and chocolate.'], ['Shiny top', 'Whisk sugar and eggs 3 minutes until pale and thick; that gives the crackly top.', 3], ['Combine', 'Fold in chocolate, flour, cocoa, salt and chips.'], ['Bake', 'Bake at {{175C}} 22–25 minutes until a skewer has moist crumbs.', 23]],
    tips: ['Cool fully before cutting.'], mistakes: ['Overbaking: cakey.'], vars: ['Eggless brownies with condensed milk.'], serve: 'With ice cream.' });

  X(W('Italy', '🇮🇹', 'Europe', ['continental']), { id: 'panna-cotta', name: 'Vanilla Panna Cotta (Vegetarian)', local: 'Panna cotta', emoji: '🍮', course: 'dessert', level: 1, prep: 10, cook: 5, rest: 240, serves: 4,
    taste: { sweet: 4, rich: 4, sour: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['date-night', 'make-ahead', 'impress'],
    desc: 'Silky, wobbly cooked cream set with agar-agar, with a bright berry sauce.',
    story: '“Cooked cream” from Piedmont. Traditionally set with gelatin; agar-agar (from seaweed) makes it vegetarian.',
    equip: ['Saucepan', 'Glasses or moulds'], ing: [[400, 'ml', 'heavy cream'], [100, 'ml', 'milk'], [60, 'g', 'sugar'], [1, 'tsp', 'vanilla extract'], [1, 'tsp', 'agar-agar powder'], [200, 'g', 'mixed berries'], [2, 'tbsp', 'sugar', 'for sauce']],
    steps: [['Set base', 'Whisk agar into the milk; bring to a boil with cream and sugar, simmer 2 minutes stirring.', 3, 'Agar must boil to activate.'], ['Pour', 'Add vanilla, pour into glasses; chill 4 hours.'], ['Sauce', 'Simmer berries and sugar 5 minutes. Spoon over.']],
    tips: ['Agar sets at room temperature; work quickly.'], mistakes: ['Too much agar: rubbery.'], vars: ['Mango or coffee panna cotta.'], serve: 'Chilled.' });

  X(W('United States', '🇺🇸', 'North America', ['continental']), { id: 'cheesecake', name: 'New York Cheesecake', local: 'New York cheesecake', emoji: '🍰', course: 'dessert', level: 2, prep: 25, cook: 70, rest: 480, serves: 12,
    taste: { sweet: 4, rich: 5, sour: 2 }, diet: ['vegetarian'], methods: ['bake'], tags: ['party', 'impress', 'make-ahead'],
    desc: 'Dense, ultra-creamy baked cheesecake on a buttery biscuit base.',
    story: 'New York’s style was made famous by Lindy’s and Junior’s restaurants in the 20th century.',
    equip: ['23 cm springform tin', 'Mixer', 'Roasting tin for water bath'], ing: [[200, 'g', 'digestive biscuits or graham crackers', 'crushed'], [80, 'g', 'butter', 'melted'], [900, 'g', 'cream cheese', 'room temperature'], [200, 'g', 'sugar'], [3, 'tbsp', 'all-purpose flour'], [4, '', 'eggs'], [200, 'ml', 'sour cream'], [1, 'tbsp', 'vanilla extract'], [1, '', 'lemon', 'zest']],
    steps: [['Base', 'Mix crumbs and butter, press into the tin; bake 10 minutes at {{170C}}.', 10], ['Filling', 'Beat cream cheese and sugar smooth on low; add flour, eggs one at a time, sour cream, vanilla and zest. Don’t over-beat.'], ['Bake', 'Wrap the tin in foil and bake in a water bath at {{160C}} 60–70 minutes until set with a slight wobble.', 65], ['Cool slowly', 'Turn off the oven, leave door ajar 1 hour, then chill overnight.', 0, 'Slow cooling prevents cracks.']],
    tips: ['Everything at room temperature = no lumps.'], mistakes: ['Over-beating: cracks.'], vars: ['Eggless no-bake cheesecake.'], serve: 'Berry compote.' });

  X(W('United States', '🇺🇸', 'North America', ['continental']), { id: 'apple-pie', name: 'Classic Apple Pie', local: 'Apple pie', emoji: '🥧', course: 'dessert', level: 2, prep: 40, cook: 55, rest: 60, serves: 8,
    taste: { sweet: 4, sour: 2, rich: 4, aromatic: 3 }, diet: ['vegetarian'], methods: ['bake'], tags: ['festive', 'party', 'winter'],
    desc: 'Flaky butter pastry filled with cinnamon-spiced apples.',
    story: '“As American as apple pie”, though it came from England, where recipes date to 1381.',
    equip: ['23 cm pie dish', 'Rolling pin'], ing: [[300, 'g', 'all-purpose flour'], [200, 'g', 'cold butter', 'cubed'], [1, 'tsp', 'sugar'], [0.5, 'tsp', 'salt'], [90, 'ml', 'ice water'],
      [1, 'kg', 'apples (mix tart and sweet)', 'sliced'], [120, 'g', 'brown sugar'], [2, 'tbsp', 'cornstarch'], [1.5, 'tsp', 'ground cinnamon'], [1, 'tbsp', 'lemon juice'], [2, 'tbsp', 'milk', 'to brush']],
    steps: [['Pastry', 'Rub butter into flour leaving pea-sized bits; add ice water to bring together. Chill 1 hour.', 0, 'Visible butter pieces = flaky crust.'], ['Filling', 'Toss apples with sugar, cornstarch, cinnamon and lemon.'], ['Assemble', 'Roll two discs, line the dish, fill, top, crimp and cut vents. Brush with milk.'], ['Bake', 'Bake at {{200C}} 20 minutes, then {{180C}} 35 minutes until bubbling.', 55]],
    tips: ['Cool 2 hours so the filling sets.'], mistakes: ['Warm butter: tough crust.'], vars: ['Crumble topping instead of pastry.'], serve: 'Vanilla ice cream.' });

  X(W('Japan', '🇯🇵', 'East Asia'), { id: 'mochi', name: 'Daifuku Mochi', local: '大福', emoji: '🍡', course: 'dessert', level: 2, prep: 20, cook: 10, serves: 8,
    taste: { sweet: 4, rich: 2 }, diet: ['vegan', 'gluten-free'], methods: ['steam'], tags: ['party', 'festive'],
    desc: 'Soft, chewy glutinous-rice cakes filled with sweet red bean paste.',
    story: 'Mochi is pounded at Japanese New Year (mochitsuki). Daifuku means “great luck”.',
    equip: ['Microwave-safe bowl', 'Cornstarch for dusting'], ing: [[150, 'g', 'glutinous rice flour (shiratamako or mochiko)'], [50, 'g', 'sugar'], [180, 'ml', 'water'], [240, 'g', 'sweet red bean paste (anko)'], [40, 'g', 'cornstarch', 'for dusting']],
    steps: [['Filling', 'Roll anko into 8 balls; chill.'], ['Dough', 'Mix flour, sugar and water; microwave covered 1 minute, stir, repeat 2–3 times until translucent and stretchy (or [[steam]] 15 min).', 3], ['Wrap', 'On a cornstarch-dusted surface, divide dough, flatten each, wrap around a bean ball and pinch closed.']],
    tips: ['Work with dusted hands; it’s sticky!'], mistakes: ['Undercooked dough: tears.'], vars: ['Strawberry daifuku.'], serve: 'With green tea.' });

  /* ================= DRINKS ================= */
  X(IN('Pan-India', ['chaat']), { id: 'nimbu-pani', name: 'Nimbu Pani (Shikanji)', local: 'नींबू पानी', emoji: '🍋', course: 'drink', level: 1, prep: 5, cook: 0, serves: 2,
    taste: { sour: 4, sweet: 3, aromatic: 2 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'quick', 'budget'],
    desc: 'India’s spiced lemonade with roasted cumin and black salt. The summer life-saver.',
    story: 'Sold from street carts in every Indian summer; “shikanji” adds cumin and black salt.',
    equip: ['Jug'], ing: [[2, '', 'lemons', 'juiced'], [3, 'tbsp', 'sugar'], [0.5, 'tsp', 'black salt'], [0.5, 'tsp', 'roasted cumin powder'], [500, 'ml', 'chilled water or soda'], [6, 'leaf', 'mint leaves'], [6, '', 'ice cubes']],
    steps: [['Dissolve', 'Stir lemon, sugar, black salt and cumin until dissolved.'], ['Serve', 'Add water and ice; garnish with mint.']],
    tips: ['Use soda for a fizzy “masala soda”.'], mistakes: ['Undissolved sugar.'], vars: ['Jaggery shikanji.'], serve: 'Ice cold.' });

  X(IN('Gujarat', ['home-style']), { id: 'masala-chaas', name: 'Masala Chaas (Spiced Buttermilk)', local: 'મસાલા છાશ', emoji: '🥛', course: 'drink', level: 1, prep: 5, cook: 0, serves: 3,
    taste: { sour: 3, herby: 3, savory: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'quick', 'healthy'],
    desc: 'Cooling, spiced buttermilk with ginger, cumin, mint and cilantro. The digestive after a big meal.',
    story: 'Served after every Gujarati thali and with Punjabi meals as a cooling digestive.',
    equip: ['Blender'], ing: [[200, 'g', 'yogurt'], [500, 'ml', 'cold water'], [1, 'piece', 'ginger', 'small'], [1, '', 'green chili', 'optional'], [1, 'handful', 'mint and cilantro'], [0.5, 'tsp', 'roasted cumin powder'], [0.5, 'tsp', 'black salt'], [0.25, 'tsp', 'salt']],
    steps: [['Blend', 'Blend everything until frothy.'], ['Serve', 'Serve chilled with a pinch of cumin on top.']],
    tips: ['Add a tadka of cumin and curry leaves for Gujarati-style.'], mistakes: ['Too thick: it should be thin and refreshing.'], vars: ['Sweet lassi.'], serve: 'After meals.' });

  X(IN('Uttar Pradesh', ['sweets']), { id: 'thandai', name: 'Thandai', local: 'ठंडाई', emoji: '🥛', course: 'drink', level: 1, prep: 15, cook: 0, rest: 120, serves: 4,
    taste: { sweet: 4, rich: 4, aromatic: 5 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['festive', 'summer'],
    desc: 'Chilled, aromatic milk with almonds, fennel, cardamom, pepper, rose and saffron. The drink of Holi.',
    story: 'Thandai (“cooling”) is drunk at Holi and Maha Shivratri, especially in Varanasi.',
    equip: ['Blender', 'Strainer'], ing: [[30, 'g', 'almonds', 'soaked'], [1, 'tbsp', 'cashews'], [1, 'tbsp', 'melon seeds'], [1, 'tbsp', 'fennel seeds'], [1, 'tsp', 'poppy seeds'], [8, '', 'green cardamom pods'], [10, '', 'black peppercorns'], [1, 'tbsp', 'dried rose petals'], [1, 'pinch', 'saffron'], [750, 'ml', 'cold milk'], [80, 'g', 'sugar']],
    steps: [['Soak', 'Soak nuts and spices in a little milk 2 hours.', 0], ['Blend', 'Blend to a smooth paste with sugar.'], ['Mix', 'Mix with cold milk, strain if you like; chill.']],
    tips: ['Make the paste ahead; it keeps a week.'], mistakes: ['Not soaking: gritty.'], vars: ['Mango or rose thandai.'], serve: 'Chilled at Holi.' });

  X(IN('Mumbai', ['sweets', 'chaat']), { id: 'falooda', name: 'Royal Falooda', local: 'फालूदा', emoji: '🍹', course: 'drink', level: 2, prep: 20, cook: 10, rest: 60, serves: 2,
    taste: { sweet: 5, rich: 4, aromatic: 4 }, diet: ['vegetarian'], methods: ['no-cook'], tags: ['summer', 'festive', 'kids'],
    desc: 'Layered rose milk with basil seeds, vermicelli, jelly and a scoop of kulfi or ice cream.',
    story: 'From the Persian “faloodeh”, it became a Mumbai icon at Irani cafés and Badshah Cold Drink House.',
    equip: ['Tall glasses'], ing: [[2, 'tbsp', 'sweet basil seeds (sabja)', 'soaked 15 min'], [40, 'g', 'falooda vermicelli', 'boiled, chilled'], [4, 'tbsp', 'rose syrup'], [400, 'ml', 'cold milk'], [100, 'g', 'agar jelly cubes', 'optional'], [2, 'scoop', 'kulfi or vanilla ice cream'], [1, 'tbsp', 'pistachios']],
    steps: [['Layer', 'In each glass, add rose syrup, basil seeds, vermicelli and jelly.'], ['Milk', 'Pour cold milk slowly.'], ['Top', 'Add a scoop of kulfi and pistachios.']],
    tips: ['Chill everything well.'], mistakes: ['Unsoaked sabja: hard seeds.'], vars: ['Mango falooda.'], serve: 'With a long spoon and straw.' });

  X(IN('Rajasthan', ['chaat']), { id: 'jaljeera', name: 'Jaljeera', local: 'जलजीरा', emoji: '🌿', course: 'drink', level: 1, prep: 10, cook: 0, serves: 4,
    taste: { sour: 4, spicy: 2, herby: 4, savory: 3 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'quick'],
    desc: 'Tangy, spicy cumin-mint water with tamarind and black salt; served with boondi.',
    story: '“Jal” (water) and “jeera” (cumin): a digestive summer cooler sold from earthen pots.',
    equip: ['Blender', 'Jug'], ing: [[1, 'handful', 'mint'], [0.5, 'handful', 'cilantro'], [1, 'tbsp', 'tamarind paste'], [1, 'tsp', 'roasted cumin powder'], [0.5, 'tsp', 'black salt'], [0.5, 'tsp', 'dry ginger powder'], [1, 'tbsp', 'lemon juice'], [1, 'tbsp', 'sugar'], [700, 'ml', 'chilled water'], [2, 'tbsp', 'boondi', 'optional']],
    steps: [['Blend', 'Blend herbs, tamarind and spices with a little water; strain.'], ['Mix', 'Add the rest of the water, lemon and sugar; top with boondi.']],
    tips: ['Serve in clay cups.'], mistakes: ['Too strong: dilute to taste.'], vars: ['Fizzy jaljeera with soda.'], serve: 'Before a meal.' });

  X(IN('Pan-India', ['chaat']), { id: 'cold-coffee', name: 'Indian Cold Coffee', local: 'कोल्ड कॉफ़ी', emoji: '🧋', course: 'drink', level: 1, prep: 5, cook: 0, serves: 2,
    taste: { sweet: 4, rich: 4, bitter: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'quick', 'kids'],
    desc: 'Frothy, creamy café-style blended iced coffee with ice cream.',
    story: 'The college-canteen and café favorite in every Indian city.',
    equip: ['Blender'], ing: [[2, 'tsp', 'instant coffee'], [2, 'tbsp', 'sugar'], [2, 'tbsp', 'hot water'], [400, 'ml', 'cold milk'], [1, 'scoop', 'vanilla ice cream'], [6, '', 'ice cubes'], [1, 'tbsp', 'chocolate syrup', 'optional']],
    steps: [['Dissolve', 'Whisk coffee and sugar with hot water until frothy.'], ['Blend', 'Blend with milk, ice cream and ice until thick and foamy.'], ['Serve', 'Drizzle chocolate syrup inside glasses and pour.']],
    tips: ['Whipping coffee with sugar first gives the froth.'], mistakes: ['Watery: use less ice, more ice cream.'], vars: ['Dalgona whipped coffee.'], serve: 'Ice cold.' });

  X(IN('Maharashtra', ['home-style']), { id: 'aam-panna', name: 'Aam Panna', local: 'आम पन्ना', emoji: '🥭', course: 'drink', level: 1, prep: 10, cook: 20, serves: 4,
    taste: { sour: 4, sweet: 3, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['summer', 'make-ahead'],
    desc: 'Tangy raw green mango drink with roasted cumin and black salt, the best protection against summer heatstroke.',
    story: 'Made across North and West India in April–May when raw mangoes flood the markets.',
    equip: ['Pot', 'Blender'], ing: [[2, '', 'raw green mangoes'], [100, 'g', 'sugar or jaggery'], [1, 'tsp', 'roasted cumin powder'], [0.5, 'tsp', 'black salt'], [1, 'handful', 'mint'], [1, 'l', 'chilled water']],
    steps: [['Cook', 'Boil or pressure cook mangoes until soft, 15 minutes. Cool, peel and scoop pulp.', 15], ['Concentrate', 'Blend pulp with sugar, cumin, black salt and mint.'], ['Serve', 'Mix 3 tbsp concentrate with a glass of chilled water.']],
    tips: ['Charred mangoes give a smoky version.'], mistakes: ['Too sweet: it should be tangy.'], vars: ['Fizzy aam panna with soda.'], serve: 'Chilled.', store: 'Concentrate keeps 1 week in the fridge.' });

  X(W('Mexico', '🇲🇽', 'Latin America'), { id: 'horchata', name: 'Horchata', local: 'Horchata de arroz', emoji: '🥛', course: 'drink', level: 1, prep: 10, cook: 0, rest: 480, serves: 6,
    taste: { sweet: 4, aromatic: 3, rich: 2 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'make-ahead', 'party'],
    desc: 'Creamy, chilled Mexican rice-and-cinnamon drink.',
    story: 'From Valencia’s tiger-nut horchata; in Mexico it is made with rice and cinnamon as an “agua fresca”.',
    equip: ['Blender', 'Fine strainer'], ing: [[200, 'g', 'long-grain rice'], [1, 'stick', 'cinnamon', 'broken'], [1.2, 'l', 'water'], [100, 'g', 'sugar'], [1, 'tsp', 'vanilla extract']],
    steps: [['Soak', 'Soak rice and cinnamon in 500 ml water overnight.', 0], ['Blend', 'Blend until very smooth; strain through a fine cloth.'], ['Finish', 'Add remaining water, sugar and vanilla; serve over ice.']],
    tips: ['Strain twice for silkiness.'], mistakes: ['Gritty: blend longer.'], vars: ['Add almonds for creaminess.'], serve: 'Over ice, with tacos.' });

  X(W('Mexico', '🇲🇽', 'Latin America'), { id: 'agua-de-jamaica', name: 'Agua de Jamaica (Hibiscus Cooler)', local: 'Agua de jamaica', emoji: '🌺', course: 'drink', level: 1, prep: 5, cook: 10, rest: 30, serves: 6,
    taste: { sour: 4, sweet: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['summer', 'healthy', 'party'],
    desc: 'Ruby-red, tart, cranberry-like iced hibiscus tea.',
    story: 'One of Mexico’s favorite aguas frescas, sold from big glass barrels at markets.',
    equip: ['Pot', 'Jug'], ing: [[30, 'g', 'dried hibiscus flowers'], [1.5, 'l', 'water'], [100, 'g', 'sugar'], [1, '', 'lime']],
    steps: [['Steep', 'Boil 500 ml water, add hibiscus, simmer 2 minutes and steep 20 minutes. Strain.', 22], ['Mix', 'Add sugar, remaining cold water and lime. Chill.']],
    tips: ['Add a cinnamon stick or ginger while steeping.'], mistakes: ['Over-steeping: bitter.'], vars: ['Sparkling jamaica.'], serve: 'Over ice.' });

  X(W('Thailand', '🇹🇭', 'Southeast Asia'), { id: 'thai-iced-tea', name: 'Thai Iced Tea', local: 'ชาเย็น', emoji: '🧋', course: 'drink', level: 1, prep: 5, cook: 10, serves: 2,
    taste: { sweet: 5, rich: 4, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['summer', 'street-food'],
    desc: 'Strong spiced orange tea sweetened with condensed milk, poured over ice.',
    story: '“Cha yen” is sold by every Bangkok street vendor in a plastic bag with ice.',
    equip: ['Pot', 'Strainer'], ing: [[4, 'tbsp', 'Thai tea mix or strong Ceylon tea + 1 star anise'], [500, 'ml', 'boiling water'], [4, 'tbsp', 'sweetened condensed milk'], [2, 'tbsp', 'sugar'], [4, 'tbsp', 'evaporated milk'], [2, 'cup', 'ice']],
    steps: [['Brew', 'Steep tea in boiling water 5 minutes; strain.', 5], ['Sweeten', 'Stir in condensed milk and sugar while hot.'], ['Serve', 'Pour over ice and float evaporated milk on top.']],
    tips: ['Brew strong; ice dilutes it.'], mistakes: ['Weak tea.'], vars: ['Thai green milk tea.'], serve: 'With spicy food.' });

  X(W('Japan', '🇯🇵', 'East Asia'), { id: 'matcha-latte', name: 'Matcha Latte', local: '抹茶ラテ', emoji: '🍵', course: 'drink', level: 1, prep: 5, cook: 3, serves: 1,
    taste: { bitter: 2, sweet: 3, rich: 3, herby: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['no-cook'], tags: ['quick', 'brunch', 'healthy'],
    desc: 'Vivid green stone-ground tea whisked smooth, with steamed milk.',
    story: 'Matcha has been used in the Japanese tea ceremony for 800 years; the latte is a modern café twist.',
    equip: ['Bowl and bamboo whisk (or small whisk)'], ing: [[1.5, 'tsp', 'matcha powder', 'sifted'], [60, 'ml', 'hot water (80 °C)'], [200, 'ml', 'milk or oat milk'], [1, 'tsp', 'honey or sugar']],
    steps: [['Whisk', 'Whisk matcha with hot (not boiling) water in a fast zigzag until frothy and smooth.', 1, 'Boiling water makes matcha bitter.'], ['Milk', 'Heat and froth the milk with sweetener.'], ['Combine', 'Pour milk over matcha.']],
    tips: ['Sift matcha to avoid lumps.'], mistakes: ['Boiling water.'], vars: ['Iced matcha latte.'], serve: 'With mochi.' });

  X(W('Taiwan', '🇹🇼', 'East Asia'), { id: 'bubble-tea', name: 'Brown Sugar Bubble Tea', local: '珍珠奶茶', emoji: '🧋', course: 'drink', level: 2, prep: 10, cook: 25, serves: 2,
    taste: { sweet: 5, rich: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['summer', 'kids', 'party'],
    desc: 'Chewy tapioca pearls in caramel brown sugar syrup with cold milk tea.',
    story: 'Invented in 1980s Taichung, Taiwan, bubble tea conquered the world in the 2010s.',
    equip: ['Pot', 'Wide straws'], ing: [[80, 'g', 'dried tapioca pearls'], [80, 'g', 'dark brown sugar'], [60, 'ml', 'water'], [2, 'tsp', 'strong black tea'], [250, 'ml', 'hot water'], [300, 'ml', 'cold milk'], [1, 'cup', 'ice']],
    steps: [['Pearls', '[[boil|Boil]] pearls per the packet (about 15 minutes), rest covered 10 minutes.', 25], ['Syrup', 'Simmer brown sugar and water 3 minutes; add drained pearls and coat.', 3], ['Tea', 'Brew tea strong and cool it.'], ['Assemble', 'Smear syrup and pearls up the glass, add ice, milk and tea.']],
    tips: ['Pearls harden in the fridge; make fresh.'], mistakes: ['Undercooked pearls: hard centers.'], vars: ['Taro or matcha bubble tea.'], serve: 'With wide straws.' });

  X(W('Cuba', '🇨🇺', 'Caribbean'), { id: 'virgin-mojito', name: 'Virgin Mojito', local: 'Mojito sin alcohol', emoji: '🍹', course: 'drink', level: 1, prep: 5, cook: 0, serves: 2,
    taste: { sour: 4, sweet: 3, herby: 5 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'party', 'quick'],
    desc: 'Muddled mint and lime with sugar, topped with crushed ice and soda.',
    story: 'Havana’s mojito, famously loved by Hemingway, made alcohol-free for everyone.',
    equip: ['Muddler', 'Tall glasses'], ing: [[1, 'handful', 'mint leaves'], [1, '', 'lime', 'cut in wedges'], [3, 'tsp', 'sugar'], [2, 'cup', 'crushed ice'], [400, 'ml', 'chilled soda water']],
    steps: [['Muddle', 'Gently [[pound|muddle]] mint, lime and sugar in each glass.', 0, 'Press gently; shredded mint turns bitter.'], ['Build', 'Fill with crushed ice and top with soda; stir.']],
    tips: ['Slap the mint sprig garnish to release aroma.'], mistakes: ['Over-muddling.'], vars: ['Watermelon or passion-fruit mojito.'], serve: 'Ice cold.' });
})();
