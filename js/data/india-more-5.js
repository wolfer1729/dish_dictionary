/* India batch 5: Kashmir, Punjab, Lucknow & UP, Bihar, Rajasthan, Gujarat, Maharashtra, Goa, Bengal, Karnataka,
   Kerala, Tamil Nadu, Andhra, the Northeast. Original recipes written for Dish Dictionary. */
'use strict';
(function () {
  const X = (area, styles, d) => DD.add(Object.assign({ country: 'India', flag: '🇮🇳', region: 'South Asia', area, styles }, d));
  const H = ['home-style'], SW = ['sweets'], ST = ['chaat'], SI = ['south-indian', 'home-style'];

  /* ---------- Kashmir ---------- */
  X('Kashmir', H, { id: 'nadru-yakhni', name: 'Nadru Yakhni (Lotus Stem in Yogurt)', local: 'ندرٕ یخنی', emoji: '🪷', course: 'main', level: 2, prep: 15, cook: 35, serves: 4,
    taste: { aromatic: 5, rich: 3, sour: 2 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'comfort'],
    desc: 'Crunchy lotus stem simmered in a fragrant fennel-cardamom yogurt gravy. A Kashmiri Pandit classic.',
    story: 'Kashmir’s Dal Lake gives the lotus stems (nadru). Yakhni means a yogurt-based gravy with no chili.',
    equip: ['Pot'],
    ing: [[300, 'g', 'lotus stem', 'peeled, sliced diagonally'], [400, 'g', 'yogurt', 'whisked with 1 tsp besan'], [2, 'tbsp', 'ghee'], [3, '', 'green cardamom pods'], [1, '', 'black cardamom'], [3, '', 'whole cloves'], [1, '', 'bay leaf'], [1.5, 'tsp', 'fennel powder (saunf)'], [1, 'tsp', 'dry ginger powder (sonth)'], [1, 'tsp', 'dried mint'], [300, 'ml', 'water'], [1, 'tsp', 'salt']],
    steps: [['Boil lotus', 'Simmer lotus stem in salted water until tender, 15 minutes.', 15], ['Yogurt', 'Heat ghee with whole spices, take off the heat, add yogurt and stir constantly back on low until it boils.', 6, 'Keep stirring or the yogurt splits.'], ['Simmer', 'Add lotus stem, fennel, dry ginger and some cooking water; [[simmer]] 10 minutes. Finish with dried mint.', 10]],
    tips: ['Choose lotus stems with clean holes.'], mistakes: ['Hot yogurt into hot ghee: curdles.'], vars: ['Mutton yakhni is the non-veg classic.'], serve: 'Steamed rice.' });

  X('Kashmir', H, { id: 'kahwa', name: 'Kashmiri Kahwa', local: 'قہوہ', emoji: '🍵', course: 'drink', level: 1, prep: 3, cook: 7, serves: 2,
    taste: { aromatic: 5, sweet: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['winter', 'quick', 'healthy'],
    desc: 'Green tea brewed with saffron, cardamom and cinnamon, served with slivered almonds.',
    story: 'Kashmiris drink kahwa from samovars through the long winter, especially after meals.',
    equip: ['Small pot or samovar'],
    ing: [[500, 'ml', 'water'], [1, 'tsp', 'green tea leaves'], [1, 'pinch', 'saffron'], [3, '', 'green cardamom pods', 'crushed'], [1, 'piece', 'cinnamon stick', 'small'], [2, 'tsp', 'sugar', 'or honey (not vegan)'], [1, 'tbsp', 'almonds', 'slivered']],
    steps: [['Infuse', 'Simmer water with saffron, cardamom and cinnamon 4 minutes.', 4], ['Brew', 'Add green tea, turn off heat, steep 2 minutes, strain and sweeten; top with almonds.', 2]],
    tips: ['Don’t boil the green tea: bitter.'], mistakes: ['Too much tea: harsh.'], vars: ['Noon chai: pink salted milk tea.'], serve: 'After meals.' });

  X('Kashmir', H, { id: 'haak-saag', name: 'Haak Saag', local: 'ہاک', emoji: '🥬', course: 'side', level: 1, prep: 10, cook: 20, serves: 4,
    taste: { savory: 4, spicy: 2, bitter: 1 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['healthy', 'budget', 'winter'],
    desc: 'Kashmiri collard greens simmered whole in mustard oil with dried chilies and asafoetida.',
    story: 'Haak with rice is the daily meal of Kashmir; the greens stay whole and tender.',
    equip: ['Pot'],
    ing: [[500, 'g', 'collard greens or kale', 'whole leaves'], [3, 'tbsp', 'mustard oil'], [3, '', 'dried red chilies'], [1, 'pinch', 'asafoetida (hing)'], [300, 'ml', 'water'], [0.75, 'tsp', 'salt']],
    steps: [['Smoke', 'Heat mustard oil until it smokes, cool a little, add chilies and hing.', 2], ['Simmer', 'Add greens, water and salt; [[simmer]] covered 15 minutes until tender.', 15]],
    tips: ['Leave leaves whole.'], mistakes: ['Overcooking: dull colour.'], vars: ['Monji haak with kohlrabi.'], serve: 'Rice.' });

  /* ---------- Punjab & Delhi ---------- */
  X('Punjab', ['dhaba'], { id: 'amritsari-kulcha', name: 'Amritsari Kulcha', local: 'ਅੰਮ੍ਰਿਤਸਰੀ ਕੁਲਚਾ', emoji: '🫓', course: 'breakfast', level: 3, prep: 30, cook: 20, rest: 120, serves: 4,
    taste: { savory: 4, spicy: 3, rich: 4 }, diet: ['vegetarian'], methods: ['bake'], tags: ['brunch', 'impress'],
    desc: 'Crisp, flaky stuffed bread with spiced potato, onion and pomegranate seed, baked hot and brushed with butter.',
    story: 'Amritsar’s breakfast: kulchas slapped onto tandoor walls and served with chole, onion chutney and a lump of white butter.',
    equip: ['Oven or tawa', 'Rolling pin'],
    ing: [[300, 'g', 'all-purpose flour'], [3, 'tbsp', 'yogurt'], [0.5, 'tsp', 'baking soda'], [0.5, 'tsp', 'salt'], [1, 'tsp', 'sugar'], [130, 'ml', 'warm water'], [3, 'tbsp', 'ghee'], '#Filling', [3, '', 'potatoes', 'boiled, mashed'], [1, '', 'onion', 'finely chopped'], [2, '', 'green chilies'], [1, 'tsp', 'anardana powder or amchur'], [1, 'tsp', 'ajwain'], [2, 'tbsp', 'cilantro'], [0.75, 'tsp', 'salt'], [40, 'g', 'butter', 'to brush']],
    steps: [['Dough', '[[knead|Knead]] flour, yogurt, soda, salt, sugar and water into a soft dough; rest 2 hours.', 120], ['Laminate', 'Roll each ball, brush ghee, pleat and coil; rest 10 minutes.', 10], ['Stuff', 'Flatten, stuff with filling and roll gently.'], ['Bake', 'Bake on a hot tray at {{250C}} for 8 minutes (or cook on a covered tawa) until crisp; brush with butter.', 10]],
    tips: ['Coil the dough for flaky layers.'], mistakes: ['Thick dough: bready kulcha.'], vars: ['Paneer or gobi kulcha.'], serve: 'Chole and onion-tamarind chutney.' });

  X('Delhi', ['chaat'], { id: 'bedmi-puri', name: 'Bedmi Puri & Aloo Sabzi', local: 'बेड़मी पूरी', emoji: '🫓', course: 'breakfast', level: 2, prep: 25, cook: 35, rest: 240, serves: 4,
    taste: { spicy: 3, savory: 4, aromatic: 4 }, diet: ['vegan'], methods: ['deep-fry', 'simmer'], tags: ['brunch', 'street-food'],
    desc: 'Crisp puris stuffed with spiced urad dal paste, with a fiery thin potato curry. Old Delhi’s breakfast.',
    story: 'Chandni Chowk’s halwais fry bedmi puri from dawn; the dal stuffing gives them a gritty, spicy crunch.',
    equip: ['Kadai', 'Pot'],
    ing: ['#Puri', [250, 'g', 'whole wheat flour (atta)'], [80, 'g', 'urad dal', 'soaked, ground coarse'], [1, 'tsp', 'fennel seeds'], [1, 'tsp', 'kashmiri chili powder'], [0.5, 'tsp', 'salt'], [100, 'ml', 'water'], [1, 'l', 'oil', 'for frying'],
      '#Aloo', [4, '', 'potatoes', 'boiled, broken'], [2, 'tbsp', 'oil'], [1, 'tsp', 'cumin seeds'], [1, 'tbsp', 'ginger'], [2, '', 'tomatoes'], [1, 'tsp', 'kashmiri chili powder'], [1, 'tsp', 'ground coriander'], [1, 'tsp', 'amchur'], [500, 'ml', 'water'], [1, 'tsp', 'salt']],
    steps: [['Dough', '[[knead|Knead]] the atta with the dal paste, spices, salt and water to a stiff dough.'], ['Aloo', 'Fry cumin and ginger, add tomatoes and spices, then potatoes, water and salt; [[simmer]] 15 minutes, mashing some.', 20], ['Fry', 'Roll small puris and [[deep-fry]] until crisp.', 15]],
    tips: ['Thin, spicy aloo is the Delhi style.'], mistakes: ['Soft dough: oily puris.'], vars: ['Nagori with halwa.'], serve: 'With pickle and halwa.' });

  /* ---------- Lucknow, Agra, Mathura ---------- */
  X('Lucknow', ['mughlai'], { id: 'rajma-galouti', name: 'Rajma Galouti Kebab', local: 'राजमा गलौटी', emoji: '🟤', course: 'starter', level: 2, prep: 25, cook: 20, serves: 4,
    taste: { rich: 4, aromatic: 5, spicy: 2 }, diet: ['vegetarian'], methods: ['saute'], tags: ['party', 'impress'],
    desc: 'Melt-in-the-mouth kebabs of mashed kidney beans with rose, kewra, saffron and Awadhi spices, seared in ghee.',
    story: 'Lucknow’s galouti was made so soft a toothless nawab could eat it. Vegetarian cooks recreate it with rajma or jackfruit.',
    equip: ['Food processor', 'Tawa'],
    ing: [[400, 'g', 'cooked red kidney beans', 'drained, very soft'], [2, 'tbsp', 'roasted besan'], [1, 'tbsp', 'ginger-garlic paste'], [1, '', 'onion', 'fried crisp'], [1, 'tsp', 'garam masala'], [0.5, 'tsp', 'cardamom powder'], [1, 'pinch', 'saffron'], [1, 'tsp', 'rose or kewra water'], [2, 'tbsp', 'cashews'], [0.75, 'tsp', 'salt'], [3, 'tbsp', 'ghee']],
    steps: [['Paste', 'Blend everything except ghee to a smooth paste.'], ['Shape', 'Shape small flat discs with oiled hands; chill 15 minutes.', 15], ['Sear', '[[sear|Sear]] in ghee on a hot tawa until crusty on both sides.', 8]],
    tips: ['Chill the mixture so it holds.'], mistakes: ['Wet mix: they fall apart.'], vars: ['Kathal (jackfruit) galouti.'], serve: 'Sheermal or ulte tawe ka paratha.' });

  X('Agra', SW, { id: 'petha', name: 'Agra Petha', local: 'आगरा पेठा', emoji: '🧊', course: 'dessert', level: 2, prep: 20, cook: 45, rest: 480, serves: 10,
    taste: { sweet: 5 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['make-ahead', 'festive'],
    desc: 'Translucent, crisp-edged candy of ash gourd soaked in sugar syrup, perfumed with rose or kewra.',
    story: 'Agra’s famous sweet, said to have been made in Shah Jahan’s kitchens during the building of the Taj Mahal.',
    equip: ['Pot', 'Fork'],
    ing: [[1, 'kg', 'ash gourd', 'peeled, cubed'], [1, 'tbsp', 'slaked lime (chuna)', 'food grade, optional'], [500, 'g', 'sugar'], [300, 'ml', 'water'], [1, 'tsp', 'rose water']],
    steps: [['Prick and soak', 'Prick the gourd cubes all over; soak in lime water overnight (makes them crisp), then rinse well.', 480], ['Boil', '[[boil|Boil]] the cubes until translucent, 15 minutes; drain.', 15], ['Syrup', 'Cook in sugar syrup on low until the syrup is absorbed and cubes glisten, 25 minutes; add rose water and dry.', 25]],
    tips: ['Rinse very well after the lime soak.'], mistakes: ['Skipping the soak: soft petha.'], vars: ['Kesar or paan petha.'], serve: 'As a sweet.', store: 'Airtight 2 weeks.' });

  X('Mathura', SW, { id: 'mathura-peda', name: 'Mathura Peda', local: 'मथुरा पेड़ा', emoji: '🟤', course: 'dessert', level: 2, prep: 10, cook: 25, serves: 12,
    taste: { sweet: 5, rich: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['festive', 'make-ahead'],
    desc: 'Caramel-brown milk fudge discs of roasted khoya, sugar and cardamom, rolled in powdered sugar.',
    story: 'The prasad of Krishna’s birthplace; Mathura’s pedas are browned longer than elsewhere for a caramel taste.',
    equip: ['Heavy pan'],
    ing: [[300, 'g', 'khoya (mawa)', 'crumbled'], [1, 'tbsp', 'ghee'], [120, 'g', 'powdered sugar'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'powdered sugar', 'for rolling']],
    steps: [['Roast', 'Roast khoya with ghee on low, stirring, until deep caramel brown, 20 minutes.', 20, 'The browning is the Mathura flavour.'], ['Mix', 'Cool until warm, mix in sugar and cardamom.'], ['Shape', 'Roll small discs and coat in sugar.']],
    tips: ['Stir constantly.'], mistakes: ['Adding sugar when hot: runny.'], vars: ['Dharwad peda (Karnataka) is even darker.'], serve: 'As prasad.' });

  /* ---------- Bihar & Rajasthan ---------- */
  X('Bihar', SW, { id: 'thekua', name: 'Thekua', local: 'ठेकुआ', emoji: '🍪', course: 'dessert', level: 1, prep: 15, cook: 25, serves: 15,
    taste: { sweet: 4, rich: 3, aromatic: 3 }, diet: ['vegetarian'], methods: ['deep-fry'], tags: ['festive', 'make-ahead'],
    desc: 'Crunchy whole-wheat jaggery cookies with coconut and fennel, pressed with a wooden mould and fried. The Chhath offering.',
    story: 'Families in Bihar make thekua in huge batches for Chhath Puja, offered to the Sun God at the river banks.',
    equip: ['Thekua mould (optional)', 'Kadai'],
    ing: [[300, 'g', 'whole wheat flour (atta)'], [150, 'g', 'jaggery', 'dissolved in 100 ml water'], [3, 'tbsp', 'ghee'], [3, 'tbsp', 'desiccated coconut'], [1, 'tsp', 'fennel seeds'], [0.5, 'tsp', 'cardamom powder'], [1, 'l', 'oil', 'for frying']],
    steps: [['Dough', 'Rub ghee into the flour with coconut and spices; [[knead]] stiff with the jaggery water.'], ['Press', 'Press small discs on a mould for the pattern.'], ['Fry', '[[deep-fry|Fry]] on low heat until deep brown and crisp.', 20]],
    tips: ['Low heat so they crisp all through.'], mistakes: ['Soft dough: they spread.'], vars: ['Bake at {{180C}} for 20 minutes.'], serve: 'With tea.', store: 'Airtight 3 weeks.' });

  X('Rajasthan', ['dhaba'], { id: 'mirchi-vada', name: 'Jodhpuri Mirchi Vada', local: 'मिर्ची वड़ा', emoji: '🌶️', course: 'snack', level: 2, prep: 20, cook: 20, serves: 6,
    taste: { spicy: 3, savory: 4, sour: 2 }, diet: ['vegan', 'gluten-free'], methods: ['deep-fry'], tags: ['street-food', 'rainy-day'],
    desc: 'Big green chilies stuffed with spicy potato, dipped in gram-flour batter and fried crisp.',
    story: 'Jodhpur’s favourite snack, eaten with tea and tangy chutney in the monsoon.',
    equip: ['Kadai'],
    ing: [[6, '', 'large mild green chilies', 'slit, deseeded'], [3, '', 'potatoes', 'boiled, mashed'], [1, 'tsp', 'amchur'], [1, 'tsp', 'garam masala'], [1, 'tsp', 'fennel seeds'], [2, 'tbsp', 'cilantro'], [0.75, 'tsp', 'salt'], [150, 'g', 'besan (gram flour)'], [0.25, 'tsp', 'baking soda'], [150, 'ml', 'water'], [1, 'l', 'oil', 'for frying']],
    steps: [['Stuff', 'Mix potato with spices and stuff the chilies.'], ['Batter', 'Whisk besan, soda, salt and water to a thick batter.'], ['Fry', 'Dip and [[deep-fry]] until golden; fry again briefly for extra crunch.', 15]],
    tips: ['Double-fry like Jodhpur vendors.'], mistakes: ['Thin batter: it slides off.'], vars: ['Andhra mirchi bajji with peanut-onion stuffing.'], serve: 'Tamarind chutney.' });

  /* ---------- Gujarat ---------- */

  X('Gujarat', H, { id: 'methi-muthia', name: 'Methi Muthia', local: 'મેથીના મુઠીયા', emoji: '🌿', course: 'snack', level: 2, prep: 15, cook: 25, serves: 4,
    taste: { savory: 4, bitter: 2, sweet: 2, aromatic: 3 }, diet: ['vegetarian'], methods: ['steam', 'saute'], tags: ['healthy', 'brunch'],
    desc: 'Steamed fist-shaped dumplings of fenugreek leaves and flours, sliced and tempered with mustard and sesame.',
    story: '“Muthi” means fist: the dough is shaped by squeezing it in your palm. They also go into undhiyu.',
    equip: ['Steamer', 'Pan'],
    ing: [[1, 'bunch', 'methi leaves', 'chopped'], [100, 'g', 'whole wheat flour (atta)'], [50, 'g', 'besan (gram flour)'], [2, 'tbsp', 'semolina'], [2, 'tbsp', 'yogurt'], [1, 'tbsp', 'ginger-green chili paste'], [1, 'tsp', 'sugar'], [1, 'tbsp', 'oil'], [0.75, 'tsp', 'salt'], [2, 'tbsp', 'oil', 'for tempering'], [1, 'tsp', 'mustard seeds'], [1, 'tbsp', 'sesame seeds']],
    steps: [['Dough', 'Mix everything into a soft dough without water if possible.'], ['Steam', 'Shape logs and [[steam]] 20 minutes; cool and slice.', 20], ['Temper', 'Toss slices in a [[tadka]] of mustard and sesame until crisp-edged.', 5]],
    tips: ['Salt the methi first to draw out water.'], mistakes: ['Too wet: sticky muthia.'], vars: ['Lauki (bottle gourd) muthia.'], serve: 'Tea.' });

  X('Gujarat', SW, { id: 'basundi', name: 'Basundi', local: 'બાસુંદી', emoji: '🥛', course: 'dessert', level: 1, prep: 5, cook: 50, serves: 4,
    taste: { sweet: 5, rich: 5, aromatic: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive'],
    desc: 'Milk slowly reduced to a thick, creamy sweet with saffron, cardamom, nutmeg and charoli nuts.',
    story: 'Served with puri at Gujarati and Maharashtrian weddings and on Bhai Dooj.',
    equip: ['Heavy wide pan'],
    ing: [[1.5, 'l', 'full-fat milk'], [100, 'g', 'sugar'], [1, 'pinch', 'saffron'], [0.5, 'tsp', 'cardamom powder'], [1, 'pinch', 'nutmeg'], [2, 'tbsp', 'almonds and pistachios', 'sliced']],
    steps: [['Reduce', '[[reduce|Reduce]] milk by half, stirring and scraping cream from the sides back in.', 45], ['Flavour', 'Add sugar, saffron and spices; cook 5 minutes; add nuts.', 5]],
    tips: ['Scraping the sides gives the texture.'], mistakes: ['Scorching: use a heavy pan.'], vars: ['Sitaphal (custard apple) basundi.'], serve: 'Chilled with puri.' });

  /* ---------- Maharashtra & Goa ---------- */
  X('Maharashtra', H, { id: 'thalipeeth', name: 'Thalipeeth', local: 'थालीपीठ', emoji: '🫓', course: 'breakfast', level: 2, prep: 15, cook: 20, serves: 4,
    taste: { savory: 4, spicy: 3, herby: 3 }, diet: ['vegan'], methods: ['saute'], tags: ['healthy', 'brunch'],
    desc: 'A crisp multigrain flatbread of roasted bhajani flour with onion, chili and cilantro, patted thin with holes.',
    story: 'Bhajani is a roasted mix of jowar, bajra, rice, wheat and dals; thalipeeth with white butter is a Maharashtrian breakfast.',
    equip: ['Tawa'],
    ing: [[250, 'g', 'thalipeeth bhajani flour', 'or jowar, besan and rice flour'], [1, '', 'onion', 'chopped'], [2, '', 'green chilies'], [2, 'tbsp', 'cilantro'], [1, 'tsp', 'cumin seeds'], [0.5, 'tsp', 'ground turmeric'], [0.75, 'tsp', 'salt'], [180, 'ml', 'water'], [4, 'tbsp', 'oil']],
    steps: [['Dough', 'Mix everything into a soft dough.'], ['Pat', 'Pat thin on an oiled cold tawa or plastic, make 4 holes and fill with oil.'], ['Cook', 'Cover and cook on medium 4 minutes, flip and cook 2 more.', 10]],
    tips: ['Use wet fingers to pat.'], mistakes: ['Thick: raw inside.'], vars: ['Sabudana thalipeeth for fasting.'], serve: 'White butter and curd.' });

  X('Maharashtra', ['home-style'], { id: 'sol-kadhi', name: 'Sol Kadhi', local: 'सोलकढी', emoji: '🩷', course: 'drink', level: 1, prep: 10, cook: 0, serves: 4,
    taste: { sour: 4, aromatic: 3, savory: 3 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['summer', 'quick', 'healthy'],
    desc: 'A pink, tangy Konkan digestive of kokum and coconut milk with garlic and green chili.',
    story: 'Served at the end of Malvani and Goan meals to cool the palate after spicy curries.',
    equip: ['Bowl', 'Blender'],
    ing: [[10, '', 'kokum', 'soaked in 200 ml warm water'], [400, 'ml', 'coconut milk'], [2, 'clove', 'garlic'], [1, '', 'green chili'], [0.5, 'tsp', 'salt'], [2, 'tbsp', 'cilantro']],
    steps: [['Kokum', 'Squeeze the kokum into its soaking water; strain.'], ['Blend', 'Blend garlic and chili with a little coconut milk; mix everything and chill.']],
    tips: ['Serve chilled.'], mistakes: ['Too much garlic.'], vars: ['Add a pinch of sugar.'], serve: 'After a meal, or with rice.' });

  X('Goa', SW, { id: 'bebinca', name: 'Bebinca', local: 'Bebinca', emoji: '🍰', course: 'dessert', level: 3, prep: 20, cook: 90, serves: 12,
    taste: { sweet: 5, rich: 5, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['bake'], tags: ['festive', 'impress'],
    desc: 'Goa’s layered coconut-milk and egg-yolk cake, built one thin caramelized layer at a time under a grill.',
    story: 'The queen of Goan Christmas sweets; traditional bebinca has 16 layers, each baked under coals.',
    equip: ['Deep round tin', 'Oven grill'],
    ing: [[10, '', 'egg yolks'], [400, 'ml', 'thick coconut milk'], [250, 'g', 'sugar'], [120, 'g', 'rice flour'], [0.5, 'tsp', 'nutmeg'], [120, 'g', 'ghee', 'melted']],
    steps: [['Batter', '[[whisk|Whisk]] yolks and sugar, add coconut milk, rice flour and nutmeg until smooth.'], ['First layer', 'Brush the tin with ghee, pour a thin layer and grill until set and golden, 6–8 minutes.', 8], ['Repeat', 'Brush with ghee, add another thin layer and grill; repeat until the batter is used.', 80, 'Patience: each layer must brown.']],
    tips: ['Thin layers for distinct stripes.'], mistakes: ['Thick layers: uneven cooking.'], vars: ['Baked bebinca in one go (quicker, fewer layers).'], serve: 'Room temperature, thin slices.' });

  /* ---------- Bengal ---------- */
  X('West Bengal', H, { id: 'mochar-ghonto', name: 'Mochar Ghonto (Banana Flower)', local: 'মোচার ঘণ্ট', emoji: '🌸', course: 'side', level: 3, prep: 45, cook: 25, serves: 4,
    taste: { savory: 4, sweet: 2, aromatic: 4 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['festive', 'healthy'],
    desc: 'Finely chopped banana flower cooked with potatoes, coconut, ghee and garam masala.',
    story: 'Cleaning banana flowers is slow work, so mochar ghonto is a labour of love in Bengali kitchens.',
    equip: ['Kadai', 'Bowl of buttermilk-water'],
    ing: [[1, '', 'banana flower', 'florets cleaned, chopped'], [1, '', 'potato', 'small cubes'], [3, 'tbsp', 'grated coconut'], [2, 'tbsp', 'mustard oil'], [1, 'tsp', 'cumin seeds'], [2, '', 'bay leaves'], [1, 'tbsp', 'ginger', 'paste'], [1, 'tsp', 'ground cumin'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'sugar'], [1, 'tsp', 'salt'], [1, 'tbsp', 'ghee'], [0.5, 'tsp', 'garam masala']],
    steps: [['Prep', 'Remove the hard stamen from each floret, chop, boil 5 minutes in salted water and squeeze.', 30], ['Cook', 'Fry cumin and bay leaves, then potato until golden; add ginger, spices and banana flower; cook covered 12 minutes.', 15], ['Finish', 'Add coconut, sugar, ghee and garam masala.', 2]],
    tips: ['Oil your hands: banana flower stains.'], mistakes: ['Leaving the stamens: bitter.'], vars: ['Mochar chop: croquettes.'], serve: 'Rice and dal.' });

  X('West Bengal', H, { id: 'dhokar-dalna', name: 'Dhokar Dalna', local: 'ধোকার ডালনা', emoji: '🟫', course: 'main', level: 3, prep: 30, cook: 35, rest: 240, serves: 4,
    taste: { savory: 4, aromatic: 4, sweet: 2 }, diet: ['vegan', 'gluten-free', 'high-protein'], methods: ['steam', 'saute', 'simmer'], tags: ['festive'],
    desc: 'Fried diamonds of spiced chana dal cake simmered in a ginger-cumin tomato gravy, without onion or garlic.',
    story: 'A Bengali niramish (no onion-garlic) festival dish, especially during Durga Puja.',
    equip: ['Grinder', 'Pan', 'Kadai'],
    ing: [[200, 'g', 'chana dal', 'soaked 4 hours'], [1, 'tbsp', 'ginger'], [2, '', 'green chilies'], [0.5, 'tsp', 'salt'], [3, 'tbsp', 'mustard oil'], [1, 'tsp', 'cumin seeds'], [2, '', 'bay leaves'], [1, '', 'potato', 'cubed'], [1, '', 'tomato', 'puréed'], [1, 'tbsp', 'ginger', 'paste'], [1, 'tsp', 'ground cumin'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'sugar'], [1, 'tsp', 'salt'], [300, 'ml', 'water'], [1, 'tsp', 'ghee or oil'], [0.5, 'tsp', 'garam masala']],
    steps: [['Dhoka', 'Grind the dal with ginger, chilies and salt; cook in a little oil until it leaves the pan, spread, cool and cut diamonds; fry until golden.', 25], ['Gravy', 'Fry cumin, bay leaves and potato; add tomato, ginger, spices and water; [[simmer]] until potato is soft.', 15], ['Finish', 'Add the dhoka and simmer 3 minutes; finish with ghee and garam masala.', 3]],
    tips: ['Add dhoka just before serving so they stay firm.'], mistakes: ['Over-soaking them in gravy: they break.'], vars: ['Steam the dhoka instead of frying.'], serve: 'Rice.' });

  X('Kolkata', ST, { id: 'kolkata-egg-roll', name: 'Kolkata Egg Roll', local: 'এগ রোল', emoji: '🌯', course: 'snack', level: 1, prep: 10, cook: 10, serves: 2,
    taste: { savory: 4, spicy: 3, sour: 3 }, diet: ['vegetarian'], methods: ['saute'], tags: ['street-food', 'quick'],
    desc: 'A crisp paratha cooked with a beaten egg on one side, rolled around onion, cucumber, chili, lime and ketchup.',
    story: 'The Kolkata street classic sold from countless roll stalls; quick, cheap and filling.',
    equip: ['Tawa'],
    ing: [[2, '', 'rotis or parathas'], [2, '', 'eggs', 'beaten with salt'], [1, '', 'onion', 'thinly sliced'], [0.5, '', 'cucumber', 'julienned'], [2, '', 'green chilies'], [1, '', 'lime'], [2, 'tbsp', 'ketchup'], [0.5, 'tsp', 'chaat masala'], [2, 'tbsp', 'oil']],
    steps: [['Egg', 'Pour egg on the hot oiled tawa, place the paratha on top, flip after 30 seconds and crisp both sides.', 3], ['Fill', 'Add onion, cucumber, chili, lime, ketchup and chaat masala.'], ['Roll', 'Roll tightly in paper.']],
    tips: ['Press the paratha onto the egg so they stick.'], mistakes: ['Soggy paratha: cook crisp.'], vars: ['Double egg roll.'], serve: 'Hot.' });

  /* ---------- Karnataka, Kerala, Tamil Nadu, Andhra ---------- */
  X('Kerala', SI, { id: 'inji-puli', name: 'Inji Puli', local: 'ഇഞ്ചിപ്പുളി', emoji: '🫚', course: 'sauce', level: 1, prep: 10, cook: 20, serves: 10,
    taste: { sour: 4, sweet: 4, spicy: 4, aromatic: 4 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['festive', 'make-ahead'],
    desc: 'A sticky, sweet-sour-hot relish of ginger, green chili, tamarind and jaggery. Called “the 100-curry pickle”.',
    story: 'Kerala tradition says inji puli equals a hundred curries; it’s the first item served on the Onam leaf.',
    equip: ['Pan'],
    ing: [[100, 'g', 'ginger', 'finely chopped'], [4, '', 'green chilies', 'chopped'], [2, 'tbsp', 'coconut oil'], [1, 'tsp', 'mustard seeds'], [10, 'leaf', 'curry leaves'], [3, 'tbsp', 'tamarind paste'], [250, 'ml', 'water'], [100, 'g', 'jaggery'], [0.5, 'tsp', 'kashmiri chili powder'], [0.5, 'tsp', 'salt']],
    steps: [['Fry', 'Fry ginger and chilies in coconut oil until golden; add mustard and curry leaves.', 6], ['Simmer', 'Add tamarind, water, jaggery, chili and salt; [[simmer]] until thick and jammy.', 14]],
    tips: ['Keeps a month in the fridge.'], mistakes: ['Burning the ginger.'], vars: ['Puli inji with green mango.'], serve: 'A little with rice and curd.' });

  X('Kerala', SI, { id: 'kalan', name: 'Kalan', local: 'കാളൻ', emoji: '🍛', course: 'main', level: 2, prep: 15, cook: 30, serves: 4,
    taste: { sour: 4, rich: 3, aromatic: 3 }, diet: ['vegetarian', 'gluten-free'], methods: ['simmer'], tags: ['festive'],
    desc: 'Thick Kerala curry of raw banana and yam in reduced sour yogurt with coconut, pepper and fenugreek.',
    story: 'Kalan is cooked longer than pulissery so it keeps for days; a sadya staple.',
    equip: ['Pot', 'Grinder'],
    ing: [[1, '', 'raw banana', 'cubed'], [200, 'g', 'purple yam or sweet potato', 'cubed'], [0.5, 'tsp', 'black pepper'], [0.5, 'tsp', 'ground turmeric'], [1, 'tsp', 'salt'], [400, 'g', 'sour curd'], [100, 'g', 'grated coconut'], [2, '', 'green chilies'], [0.5, 'tsp', 'cumin seeds'], [1, 'tbsp', 'coconut oil'], [0.5, 'tsp', 'fenugreek seeds'], [10, 'leaf', 'curry leaves']],
    steps: [['Cook', 'Cook vegetables with pepper, turmeric, salt and a little water until soft.', 12], ['Thicken', 'Add the curd and [[reduce]] on low until thick, 10 minutes, stirring.', 10], ['Coconut', 'Add ground coconut-chili-cumin paste; heat; finish with a fenugreek [[tadka]].', 5]],
    tips: ['Very sour curd works best.'], mistakes: ['Boiling after coconut: splits.'], vars: ['Pulissery: thinner.'], serve: 'Rice.' });

  X('Tamil Nadu', SI, { id: 'kozhukattai', name: 'Kozhukattai', local: 'கொழுக்கட்டை', emoji: '🥟', course: 'dessert', level: 2, prep: 30, cook: 20, serves: 12,
    taste: { sweet: 4, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['steam'], tags: ['festive'],
    desc: 'Tamil steamed rice dumplings with a coconut-jaggery filling, made for Vinayaka Chaturthi.',
    story: 'Tamil Nadu’s modak: shaped as pleated cones or half-moons and offered to Lord Ganesha.',
    equip: ['Steamer'],
    ing: [[200, 'g', 'rice flour'], [250, 'ml', 'water', 'boiling'], [1, 'tsp', 'oil'], [1, 'pinch', 'salt'], [150, 'g', 'fresh grated coconut'], [120, 'g', 'jaggery'], [0.5, 'tsp', 'cardamom powder']],
    steps: [['Filling', 'Cook coconut and jaggery until sticky; add cardamom.', 10], ['Dough', 'Mix flour, salt and oil with boiling water; [[knead]] smooth.'], ['Shape and steam', 'Shape cups, fill, seal and [[steam]] 10 minutes.', 10]],
    tips: ['Keep dough covered.'], mistakes: ['Cracked shells: knead while warm.'], vars: ['Savoury ulundu kozhukattai.'], serve: 'Warm.' });

  X('Tamil Nadu', SI, { id: 'athirasam', name: 'Athirasam', local: 'அதிரசம்', emoji: '🟤', course: 'dessert', level: 3, prep: 30, cook: 25, rest: 1440, serves: 12,
    taste: { sweet: 5, rich: 3, aromatic: 3 }, diet: ['vegan', 'gluten-free'], methods: ['deep-fry'], tags: ['festive', 'make-ahead'],
    desc: 'Chewy, glossy jaggery-rice doughnuts with sesame and cardamom, made for Diwali.',
    story: 'An ancient Tamil sweet mentioned in temple inscriptions; the dough rests a day to develop its flavour.',
    equip: ['Kadai', 'Plastic sheet'],
    ing: [[250, 'g', 'raw rice', 'soaked 2 hours, dried, ground'], [200, 'g', 'jaggery'], [80, 'ml', 'water'], [0.5, 'tsp', 'cardamom powder'], [1, 'tbsp', 'sesame seeds'], [1, 'l', 'oil', 'for frying']],
    steps: [['Syrup', 'Cook jaggery and water to soft-ball stage.', 10], ['Dough', 'Add the rice flour, cardamom and sesame to the hot syrup; mix into a soft dough; rest a day.'], ['Fry', 'Pat small discs and [[deep-fry]] slowly; press out excess oil.', 15]],
    tips: ['Soft-ball syrup is the key.'], mistakes: ['Hard syrup: hard athirasam.'], vars: ['Andhra ariselu is the same sweet.'], serve: 'Diwali plate.' });

  X('Andhra Pradesh', SI, { id: 'avakaya', name: 'Avakaya (Mango Pickle)', local: 'ఆవకాయ', emoji: '🥭', course: 'sauce', level: 2, prep: 40, cook: 0, rest: 4320, serves: 40,
    taste: { spicy: 5, sour: 4, savory: 4 }, diet: ['vegan', 'gluten-free'], methods: ['no-cook'], tags: ['make-ahead'],
    desc: 'Andhra’s fiery raw mango pickle with mustard powder, red chili and sesame oil.',
    story: 'Every Andhra summer, families gather to cut raw mangoes with the stone shell and make a year’s avakaya.',
    equip: ['Large dry ceramic jar', 'Dry knife'],
    ing: [[1, 'kg', 'raw mango', 'cubed with stone shell, dried'], [100, 'g', 'mustard powder'], [100, 'g', 'kashmiri chili powder'], [80, 'g', 'salt'], [1, 'tbsp', 'fenugreek seeds', 'powdered'], [300, 'ml', 'sesame oil']],
    steps: [['Dry', 'Wipe mango pieces completely dry.'], ['Mix', 'Mix powders and salt, coat the mango and press into a dry jar; pour oil to cover.'], ['Mature', 'Stir after 3 days with a dry spoon; ready in a week.']],
    tips: ['Everything must be bone dry.'], mistakes: ['Water: the pickle spoils.'], vars: ['Bellam avakaya with jaggery.'], serve: 'With rice, ghee and pappu.', store: 'A year, under oil.' });

  X('Andhra Pradesh', ['south-indian', 'chaat'], { id: 'mirchi-bajji', name: 'Mirchi Bajji', local: 'మిర్చి బజ్జీ', emoji: '🌶️', course: 'snack', level: 1, prep: 15, cook: 15, serves: 4,
    taste: { spicy: 4, savory: 4, sour: 2 }, diet: ['vegan', 'gluten-free'], methods: ['deep-fry'], tags: ['street-food', 'rainy-day'],
    desc: 'Long green chilies dipped in gram-flour batter and fried, slit and stuffed with onion, lemon and chaat masala.',
    story: 'Rainy evenings in Hyderabad and Guntur mean mirchi bajji from roadside stalls.',
    equip: ['Kadai'],
    ing: [[8, '', 'large mild green chilies'], [150, 'g', 'besan (gram flour)'], [2, 'tbsp', 'rice flour'], [0.5, 'tsp', 'kashmiri chili powder'], [0.25, 'tsp', 'baking soda'], [0.75, 'tsp', 'salt'], [150, 'ml', 'water'], [1, '', 'onion', 'finely chopped'], [1, 'tbsp', 'lemon juice'], [0.5, 'tsp', 'chaat masala'], [1, 'l', 'oil', 'for frying']],
    steps: [['Batter', 'Make a thick batter of flours, chili, soda, salt and water.'], ['Fry', 'Dip whole chilies and [[deep-fry]] until golden.', 10], ['Stuff', 'Slit and stuff with onion, lemon and chaat masala.']],
    tips: ['Slit chilies before frying to remove seeds.'], mistakes: ['Thin batter.'], vars: ['Stuffed with tamarind-peanut paste.'], serve: 'Hot, with tea.' });

  X('Karnataka', ['south-indian', 'sweets'], { id: 'dharwad-peda', name: 'Dharwad Peda', local: 'ಧಾರವಾಡ ಪೇಡ', emoji: '🟫', course: 'dessert', level: 2, prep: 5, cook: 45, serves: 12,
    taste: { sweet: 5, rich: 5, smoky: 1 }, diet: ['vegetarian', 'gluten-free'], methods: ['saute'], tags: ['festive', 'make-ahead'],
    desc: 'Dark, grainy caramelized milk sweet from Dharwad, rolled in sugar.',
    story: 'Made by the Thakur family of Dharwad for over 150 years; it has a GI (geographical indication) tag.',
    equip: ['Heavy pan'],
    ing: [[300, 'g', 'khoya (mawa)'], [150, 'g', 'sugar'], [2, 'tbsp', 'milk'], [0.5, 'tsp', 'cardamom powder'], [2, 'tbsp', 'sugar', 'for coating']],
    steps: [['Caramelize', 'Cook khoya, sugar and milk on low, stirring, until deep brown and grainy, 40 minutes.', 40], ['Shape', 'Add cardamom, cool slightly, shape cylinders and roll in sugar.']],
    tips: ['Low heat and patience.'], mistakes: ['High heat: burnt bits.'], vars: ['Mathura peda is lighter.'], serve: 'As a sweet.' });

  /* ---------- Northeast ---------- */
  X('Mizoram', H, { id: 'bai', name: 'Bai (Mizo Vegetable Stew)', local: 'Bai', emoji: '🥬', course: 'soup', level: 1, prep: 10, cook: 20, serves: 4,
    taste: { savory: 3, herby: 3 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['healthy', 'comfort'],
    desc: 'A simple Mizo stew of greens, pumpkin and bamboo shoot boiled with ginger and a pinch of baking soda.',
    story: 'Bai is eaten daily in Mizoram; it is cooked without oil, letting the vegetables shine.',
    equip: ['Pot'],
    ing: [[300, 'g', 'mustard greens or spinach'], [200, 'g', 'pumpkin', 'cubed'], [100, 'g', 'bamboo shoots'], [1, 'tbsp', 'ginger', 'sliced'], [2, '', 'green chilies'], [1, 'pinch', 'baking soda'], [800, 'ml', 'water'], [0.75, 'tsp', 'salt']],
    steps: [['Simmer', 'Boil water with ginger, chilies, soda and salt; add pumpkin and bamboo shoots and cook 10 minutes.', 10], ['Greens', 'Add greens and cook 5 minutes.', 5]],
    tips: ['No oil: it’s meant to be light.'], mistakes: ['Too much soda: soapy taste.'], vars: ['Add fermented soybeans (bekang).'], serve: 'Rice.' });

  X('Assam', H, { id: 'khar', name: 'Khar', local: 'খাৰ', emoji: '🍌', course: 'main', level: 2, prep: 15, cook: 25, serves: 4,
    taste: { savory: 3, bitter: 2 }, diet: ['vegan', 'gluten-free'], methods: ['simmer'], tags: ['healthy'],
    desc: 'Assam’s signature alkaline curry of raw papaya and lentils, flavoured with khar (filtered banana-peel ash water).',
    story: 'Every Assamese meal begins with khar; the alkaline water from burnt banana peels aids digestion.',
    equip: ['Pot'],
    ing: [[300, 'g', 'raw papaya', 'cubed'], [80, 'g', 'masoor dal'], [2, 'tbsp', 'khar (banana-ash alkaline water)', 'or a pinch of baking soda in water'], [1, 'tbsp', 'mustard oil'], [0.5, 'tsp', 'fenugreek seeds'], [2, '', 'green chilies'], [600, 'ml', 'water'], [0.75, 'tsp', 'salt']],
    steps: [['Cook', 'Boil dal and papaya in water with salt until soft.', 18], ['Khar', 'Add khar (or soda water) and chilies; simmer 3 minutes.', 3], ['Temper', 'Finish with a mustard oil and fenugreek [[tadka]].', 1]],
    tips: ['Use khar sparingly.'], mistakes: ['Too much soda: bitter.'], vars: ['Lau (bottle gourd) khar.'], serve: 'First course, with rice.' });
})();
