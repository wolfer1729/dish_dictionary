/* Regional styles: dishes that are the same idea cooked differently from region to region.
   "members" are full recipes in the app; "notes" describe other regional versions in one line. */
'use strict';
(function () {
  DD.FAMILIES = [];
  const F = (key, name, members, notes) => {
    const m = members.filter((id) => DD.byId[id]);
    DD.FAMILIES.push({ key, name, members: m, notes: notes || [] });
  };

  /* ---------------- India: South ---------------- */
  F('dosa', 'Dosa', ['masala-dosa', 'mysore-masala-dosa', 'rava-dosa', 'ragi-dosa', 'set-dosa', 'neer-dosa', 'pesarattu', 'uttapam'], [
    ['Davangere (Karnataka)', 'Benne dosa: thick, spongy and soaked in white butter.'],
    ['Tamil Nadu', 'Ghee roast dosa: paper-thin, rolled into a tall crisp cone.'],
    ['Kerala', 'Appam: lacy rice-coconut hoppers with a soft centre, cooked in a curved pan.'],
    ['Andhra Pradesh', 'MLA pesarattu: green moong dosa stuffed with upma.'],
  ]);
  F('idli', 'Idli', ['idli', 'rava-idli', 'kanchipuram-idli', 'kuzhi-paniyaram'], [
    ['Karnataka', 'Thatte idli: one big, flat, plate-size idli.'],
    ['Udupi & Mangaluru', 'Kotte kadubu: batter steamed inside jackfruit-leaf cones.'],
    ['Tamil Nadu', 'Podi idli: mini idlis tossed in gunpowder and ghee.'],
  ]);
  F('sambar', 'Sambar', ['sambar', 'udupi-sambar', 'kerala-sambar', 'sambar-sadam', 'bisi-bele-bath'], [
    ['Tamil Nadu (arachuvitta)', 'Spices and coconut ground fresh, without roasting.'],
    ['Andhra Pradesh', 'Pappu charu: thinner and tangier, more chili, no coconut.'],
    ['Maharashtra', 'Amti: kokum, goda masala and jaggery instead of tamarind and sambar powder.'],
  ]);
  F('rasam', 'Rasam', ['rasam', 'mysore-rasam', 'pepper-rasam'], [
    ['Andhra Pradesh', 'Tomato charu: hotter, with lots of tomato and garlic.'],
    ['Tamil Nadu', 'Lemon rasam: no tamarind; lemon juice stirred in at the end.'],
    ['Karnataka', 'Tili saaru: thin, everyday rasam with a little jaggery.'],
  ]);
  F('variety-rice', 'South Indian variety rice', ['lemon-rice', 'coconut-rice', 'tomato-rice', 'puliyogare', 'vangi-bath', 'curd-rice', 'ghee-rice', 'coconut-milk-pulao'], [
    ['Andhra Pradesh', 'Pulihora: sharper tamarind rice with green chilies, no spice powder.'],
    ['Tamil Nadu', 'Puli sadam: tamarind rice without jaggery or coconut, more sesame.'],
    ['Karnataka', 'Chitranna: lemon rice with grated coconut and peanuts.'],
  ]);
  F('upma', 'Upma', ['upma', 'khara-bath', 'poha'], [
    ['Tamil Nadu', 'Rava kichadi: softer, with vegetables, ghee and a pinch of turmeric.'],
    ['Kerala', 'Uppumavu: with grated coconut and coconut oil.'],
    ['Maharashtra', 'Sanja: semolina with turmeric, onion and peanuts.'],
  ]);
  F('south-veg-sides', 'Dry vegetable sides of the South', ['cabbage-poriyal', 'beetroot-thoran', 'cabbage-kootu', 'avial'], [
    ['Karnataka', 'Palya: like poriyal, often with a little jaggery and lemon.'],
    ['Andhra Pradesh', 'Kura or vepudu: spicier, with red chili powder.'],
    ['Kerala', 'Olan (ash gourd in coconut milk) and erissery (pumpkin with roasted coconut).'],
  ]);
  F('chutney', 'Chutneys', ['coconut-chutney', 'peanut-chutney', 'green-chutney', 'tomato-chutney', 'imli-chutney', 'allam-pachadi', 'idli-podi'], [
    ['Maharashtra', 'Thecha: coarse, fiery green chili and garlic chutney.'],
    ['West Bengal', 'Tomato-khejur: sweet tomato chutney with dates, served at the end of a meal.'],
    ['Andhra Pradesh', 'Gongura pachadi: tangy sorrel-leaf chutney.'],
    ['Kerala', 'Chammanthi: coarse coconut, shallot and chili, ground on stone.'],
  ]);

  /* ---------------- India: rice, dal, beans ---------------- */
  F('biryani', 'Biryani', ['chicken-biryani', 'veg-biryani', 'mushroom-biryani'], [
    ['Lucknow (Awadhi)', 'Dum pukht: rice cooked in meat stock, delicate spices, sealed and slow-cooked.'],
    ['Kolkata', 'Lightly spiced with kewra and saffron; famous for its potato and boiled egg.'],
    ['Malabar (Thalassery)', 'Short fragrant jeerakasala rice, ghee, fried onions, cashews and raisins.'],
    ['Ambur & Dindigul (Tamil Nadu)', 'Small seeraga samba rice, red chili paste or pepper, cooked one-pot.'],
    ['Sindh', 'Tangy, with potatoes, dried plums and lots of green chili.'],
  ]);
  F('pulao', 'Pulao', ['veg-pulao', 'jeera-rice', 'coconut-milk-pulao', 'tawa-pulao', 'ghee-rice', 'mexican-rice'], [
    ['Kashmir', 'Kashmiri pulao: saffron, dried fruit and nuts, mildly sweet.'],
    ['West Bengal', 'Mishti pulao: sweet ghee rice with raisins, for festive meals.'],
    ['Afghanistan', 'Kabuli pulao: carrots and raisins over spiced rice.'],
  ]);
  F('dal', 'Dal', ['dal-tadka', 'dal-makhani', 'chana-dal-fry', 'dal-palak', 'tomato-pappu', 'cabbage-kootu'], [
    ['Gujarat', 'Gujarati dal: thin, sweet and sour with jaggery and kokum.'],
    ['West Bengal', 'Cholar dal: chana dal with coconut, raisins and a little sugar.'],
    ['Rajasthan', 'Panchmel dal: five lentils with ghee, eaten with baati.'],
    ['Kerala', 'Parippu curry: moong dal with coconut, eaten with ghee at the sadya.'],
  ]);
  F('khichdi', 'Khichdi', ['khichdi', 'ven-pongal', 'bisi-bele-bath', 'sambar-sadam', 'sabudana-khichdi'], [
    ['West Bengal', 'Bhoger khichuri: roasted moong dal and rice, offered at Durga Puja.'],
    ['Hyderabad', 'Khichdi with khatta (tamarind curry) and keema.'],
    ['Odisha', 'Adahengu khechudi: temple khichdi with ginger and asafoetida.'],
  ]);
  F('chole', 'Chickpea curries', ['chana-masala', 'chole-bhature', 'chickpea-spinach-curry', 'puttu-kadala', 'ragda-pattice'], [
    ['Amritsar', 'Amritsari chole: dark, tangy, boiled with tea leaves.'],
    ['Rawalpindi (Pindi)', 'Pindi chole: dry, very dark, with anardana and no tomato gravy.'],
    ['Kerala', 'Kadala curry: black chickpeas in roasted coconut gravy (with puttu).'],
  ]);
  F('rajma', 'Kidney bean curries', ['rajma-chawal'], [
    ['Jammu', 'Small red Jammu rajma, creamier and cooked longer.'],
    ['Himachal Pradesh', 'Madra-style: rajma in yogurt gravy with whole spices.'],
  ]);

  /* ---------------- India: vegetables & paneer ---------------- */
  F('paneer', 'Paneer, region by region', ['paneer-butter-masala', 'shahi-paneer', 'kadai-paneer', 'palak-paneer', 'matar-paneer', 'malai-kofta', 'paneer-bhurji', 'chilli-paneer', 'paneer-tikka', 'paneer-ghee-roast', 'paneer-pepper-fry'], [
    ['Kashmir', 'Chaman kaliya: paneer in turmeric, fennel and milk, no tomato.'],
    ['West Bengal', 'Chhanar dalna: soft chhena cubes in a light potato-tomato curry.'],
  ]);
  F('potato', 'Potato curries across India', ['dum-aloo', 'aloo-gobi', 'jeera-aloo', 'aloo-matar', 'aloo-methi', 'aloo-posto', 'luchi-alur-dom'], [
    ['Kashmir', 'Kashmiri dum aloo: yogurt, fennel and dry ginger, no onion or garlic.'],
    ['Varanasi', 'Banarasi dum aloo: stuffed potatoes in cashew-tomato gravy.'],
    ['Gujarat', 'Batata nu shaak: sweet-sour potatoes with jaggery and lemon.'],
    ['Maharashtra', 'Batata bhaji: turmeric potatoes with mustard and curry leaves.'],
  ]);
  F('brinjal', 'Brinjal (eggplant) across India', ['baingan-bharta', 'bagara-baingan', 'gutti-vankaya', 'vangi-bath'], [
    ['West Bengal', 'Begun bhaja: thick slices fried in mustard oil.'],
    ['Maharashtra', 'Bharli vangi: brinjals stuffed with peanut, coconut and goda masala.'],
    ['Tamil Nadu', 'Ennai kathirikai: stuffed brinjals in tamarind and gingelly oil.'],
    ['Gujarat', 'Ringan no olo: smoky mashed brinjal, the Gujarati bharta.'],
  ]);
  F('okra', 'Okra (bhindi)', ['bhindi-masala', 'bendakaya-pulusu'], [
    ['Punjab', 'Bharwan bhindi: whole okra stuffed with spices and amchur.'],
    ['Tamil Nadu', 'Vendakkai poriyal: crisp okra with coconut.'],
    ['Gujarat', 'Bhinda nu shaak: with besan and a little sugar.'],
  ]);
  F('korma', 'Korma & kurma', ['navratan-korma', 'veg-kurma', 'appam-stew', 'chicken-korma'], [
    ['Hyderabad', 'Shahi korma with fried onion paste, cashews and yogurt.'],
    ['Kerala', 'Vegetable stew: coconut milk, whole spices and green chilies, very mild.'],
  ]);
  F('greens', 'Greens', ['sarson-ka-saag', 'palak-paneer', 'dal-palak', 'aloo-methi', 'methi-thepla'], [
    ['West Bengal', 'Shaak bhaja: greens stir-fried in mustard oil with nigella.'],
    ['Kashmir', 'Haak: collard greens simmered in mustard oil with dried chili.'],
    ['Andhra Pradesh', 'Gongura: tangy sorrel leaves, cooked with dal or as pickle.'],
  ]);
  F('yogurt-curry', 'Yogurt curries', ['kadhi-pakora', 'mambazha-pulissery'], [
    ['Gujarat', 'Gujarati kadhi: thin, sweet, white, without pakoras.'],
    ['Sindh', 'Sindhi kadhi: besan and tamarind with vegetables, no yogurt.'],
    ['Tamil Nadu', 'Mor kuzhambu: buttermilk with coconut, ginger and vegetables.'],
  ]);
  F('indo-chinese', 'Indo-Chinese', ['gobi-manchurian', 'chilli-paneer', 'veg-hakka-noodles', 'honey-chilli-potato', 'manchow-soup', 'hot-sour-soup', 'sweet-corn-soup', 'crispy-corn'], [
    ['Kolkata (Tangra)', 'The birthplace: Hakka Chinese cooks adapting to Indian taste.'],
    ['Mumbai', 'Street “Chinese”: Schezwan everything, very spicy.'],
    ['Northeast India', 'Closer to Tibetan and Chinese: thukpa, momos, chow.'],
  ]);

  /* ---------------- India: snacks, street food, breads ---------------- */
  F('fritters', 'Fritters & vadas', ['onion-pakora', 'masala-vada', 'medu-vada', 'mysore-bonda', 'vada-pav', 'pazham-pori', 'kadhi-pakora'], [
    ['West Bengal', 'Beguni: brinjal slices in besan batter.'],
    ['Andhra Pradesh', 'Mirchi bajji: big green chilies stuffed and fried.'],
    ['Rajasthan', 'Mirchi vada: chilies stuffed with spiced potato.'],
    ['Mangaluru', 'Goli baje: fluffy maida-curd fritters.'],
  ]);
  F('chaat', 'Chaat', ['pani-puri', 'bhel-puri', 'dahi-puri', 'aloo-tikki-chaat', 'ragda-pattice', 'masala-corn', 'misal-pav'], [
    ['Kolkata', 'Puchka: spicier tamarind water, filled with mashed potato and black chickpeas.'],
    ['Delhi', 'Golgappe with jaljeera water and sweet chutney.'],
    ['Lucknow', 'Basket chaat in a fried potato-string basket.'],
    ['Varanasi', 'Tamatar chaat: spiced tomato mash with ghee, served in clay cups.'],
  ]);
  F('mumbai-street', 'Mumbai street food', ['pav-bhaji', 'vada-pav', 'misal-pav', 'bombay-sandwich', 'mumbai-frankie', 'tawa-pulao', 'masala-corn', 'bhel-puri'], [
    ['Kolkata', 'Kathi roll: paratha rolled around kebab, egg and onions (the frankie’s cousin).'],
  ]);
  F('samosa', 'Samosa & kachori', ['samosa', 'kachori'], [
    ['West Bengal', 'Shingara: smaller, with cauliflower and peanuts, crisp flaky pastry.'],
    ['Hyderabad', 'Lukhmi: square, flat, filled with minced meat.'],
    ['Gujarat', 'Patti samosa: thin wrapper, onion-cabbage filling.'],
  ]);
  F('baked-dough', 'Baked dough balls', ['dal-baati-churma', 'litti-chokha'], [
    ['Madhya Pradesh', 'Bafla: baatis boiled first, then baked and dipped in ghee.'],
  ]);
  F('breads', 'Indian breads', ['phulka-roti', 'butter-naan', 'aloo-paratha', 'methi-thepla', 'akki-roti', 'luchi-alur-dom', 'chole-bhature', 'mangalore-buns'], [
    ['Kerala', 'Parotta: flaky layered bread, beaten and coiled.'],
    ['Maharashtra', 'Bhakri: rustic jowar or bajra flatbread.'],
    ['Rajasthan', 'Bajra roti with garlic chutney and ghee.'],
    ['Hyderabad', 'Sheermal: saffron-milk bread.'],
  ]);
  F('himalayan', 'Himalayan dumplings & noodles', ['momo', 'thukpa'], [
    ['Nepal', 'Jhol momo: dumplings in a sesame-tomato soup.'],
    ['Tibet', 'Thenthuk: hand-pulled noodle soup.'],
    ['Darjeeling', 'Steamed veg momos with fiery tomato achar.'],
  ]);

  /* ---------------- India: sweets & drinks ---------------- */
  F('kheer', 'Kheer, payasam & rice puddings', ['kheer', 'semiya-payasam', 'moong-dal-payasam', 'phirni', 'mango-sticky-rice'], [
    ['West Bengal', 'Payesh made with gobindobhog rice and date-palm jaggery (nolen gur).'],
    ['Kerala', 'Palada pradhaman: rice flakes in sweet milk.'],
    ['Spain', 'Arroz con leche with cinnamon and lemon peel.'],
    ['Turkey', 'Sütlaç: baked rice pudding with a caramelized top.'],
  ]);
  F('halwa', 'Halwa', ['gajar-halwa', 'sooji-halwa', 'kesari-bath'], [
    ['Tamil Nadu', 'Tirunelveli halwa: glossy wheat halwa slow-cooked in ghee.'],
    ['Kerala', 'Kozhikode halwa: chewy, colourful, made with maida and coconut oil.'],
    ['Rajasthan', 'Moong dal halwa: rich, slow-roasted, a winter treat.'],
  ]);
  F('ladoo', 'Ladoo & burfi', ['motichoor-laddu', 'rava-ladoo', 'coconut-ladoo', 'coconut-burfi', 'kaju-katli', 'mysore-pak', 'peanut-chikki'], [
    ['Andhra Pradesh', 'Tirupati laddu: the famous temple prasadam with ghee and cardamom.'],
    ['Maharashtra', 'Besan ladoo: roasted gram flour and ghee.'],
    ['Rajasthan', 'Gond ladoo: edible gum and nuts for winter.'],
  ]);
  F('milk-sweets', 'Milk sweets', ['rasgulla', 'ras-malai', 'gulab-jamun', 'shrikhand', 'malpua'], [
    ['Odisha', 'Rasagola: softer and lightly caramel-coloured; Odisha and Bengal both claim it.'],
    ['West Bengal', 'Sandesh: fresh chhena pressed with sugar or date-palm jaggery.'],
    ['Madhya Pradesh', 'Kala jamun: darker, fried longer, with a sweet filling.'],
  ]);
  F('fried-dough-sweets', 'Fried dough sweets', ['jalebi', 'churros', 'loukoumades', 'gulab-jamun'], [
    ['Rajasthan & UP', 'Imarti: urad dal jalebi in flower shapes.'],
    ['Turkey', 'Lokma: syrup-soaked fried dough balls.'],
    ['Italy', 'Zeppole: fried dough for St Joseph’s Day.'],
  ]);
  F('frozen', 'Kulfi & frozen desserts', ['kulfi', 'falooda', 'mango-ice-cream', 'affogato'], [
    ['Delhi', 'Matka kulfi set in clay pots.'],
    ['Lucknow', 'Kulfi falooda with rose syrup and vermicelli.'],
  ]);
  F('tea', 'Tea, region by region', ['masala-chai', 'thai-iced-tea', 'bubble-tea', 'matcha-latte'], [
    ['Kashmir', 'Noon chai: pink salted tea with milk and baking soda.'],
    ['Hyderabad', 'Irani chai: thick, slow-brewed with condensed milk.'],
    ['Kerala', 'Sulaimani: black tea with lemon and spices.'],
    ['Malaysia', 'Teh tarik: “pulled” sweet milk tea.'],
  ]);
  F('coffee', 'Coffee drinks', ['filter-coffee', 'cold-coffee', 'affogato'], [
    ['Vietnam', 'Cà phê sữa đá: strong drip coffee over condensed milk and ice.'],
    ['Turkey', 'Türk kahvesi: finely ground coffee boiled in a cezve.'],
  ]);
  F('coolers', 'Summer coolers', ['nimbu-pani', 'masala-chaas', 'jaljeera', 'aam-panna', 'mango-lassi', 'virgin-mojito', 'agua-de-jamaica', 'horchata', 'thandai'], [
    ['Tamil Nadu', 'Neer mor: thin buttermilk with ginger, curry leaves and asafoetida.'],
    ['Kerala', 'Sambharam: spiced buttermilk with shallots and green chili.'],
    ['Punjab', 'Salted lassi: thick, whisked, with roasted cumin.'],
  ]);

  /* ---------------- India: egg, chicken, mutton, fish ---------------- */
  F('egg-curry', 'Egg curries', ['egg-curry', 'kerala-egg-roast', 'masala-omelette', 'akuri'], [
    ['West Bengal', 'Dimer dalna: fried eggs with potatoes in a light curry.'],
    ['Hyderabad', 'Khagina: spiced scrambled eggs.'],
    ['Andhra Pradesh', 'Egg pulusu: eggs in tamarind gravy.'],
  ]);
  F('chicken-curry', 'Chicken curries across India', ['butter-chicken', 'chicken-tikka-masala', 'dhaba-chicken', 'chettinad-chicken', 'chicken-korma', 'nadan-chicken-curry', 'chicken-ghee-roast', 'chicken-65', 'chicken-karahi', 'tandoori-chicken'], [
    ['Goa', 'Xacuti: roasted coconut, poppy seeds and up to 15 spices.'],
    ['West Bengal', 'Kosha murgi: slow-fried, dark and dry.'],
    ['Kolhapur', 'Tambda rassa: fiery red mutton or chicken broth.'],
    ['Mangaluru', 'Kori rotti: chicken curry poured over crisp rice wafers.'],
  ]);
  F('mutton', 'Mutton curries', ['rogan-josh', 'laal-maas', 'chettinad-mutton', 'mutton-mappas', 'mutton-do-pyaza', 'haleem', 'keema-matar'], [
    ['Kolkata', 'Kosha mangsho: slow-cooked dark mutton with potato.'],
    ['Bihar', 'Champaran handi meat: cooked sealed in a clay pot with whole garlic.'],
    ['Hyderabad', 'Dalcha: mutton cooked with chana dal and tamarind.'],
  ]);
  F('fish-curry', 'Fish curries of the coast', ['kerala-fish-curry', 'macher-jhol', 'karimeen-pollichathu', 'bombil-fry'], [
    ['Goa', 'Xitti kodi: coconut fish curry soured with kokum or raw mango.'],
    ['Mangaluru', 'Fish gassi: red chili-coconut curry with tamarind.'],
    ['West Bengal', 'Shorshe ilish: hilsa in mustard paste.'],
    ['Andhra Pradesh', 'Chepala pulusu: fish in tangy tamarind gravy.'],
  ]);
  F('shellfish', 'Prawns & crab', ['goan-crab-masala', 'prawn-koliwada', 'jhinga-nisha', 'gambas-al-ajillo'], [
    ['Kerala', 'Chemmeen roast: prawns dry-roasted with shallots and coconut oil.'],
    ['West Bengal', 'Chingri malai curry: prawns in coconut milk.'],
    ['Mangaluru', 'Prawn sukka: dry prawns with roasted coconut.'],
  ]);

  /* ---------------- Europe ---------------- */
  F('pizza', 'Pizza', ['margherita-pizza'], [
    ['Rome', 'Pizza romana: thin and crackly; also pizza al taglio by the slice.'],
    ['Sicily', 'Sfincione: thick, spongy, with tomato, onion and breadcrumbs.'],
    ['New York', 'Large, thin, foldable slices.'],
    ['Chicago', 'Deep dish: a tall crust filled with cheese and topped with sauce.'],
  ]);
  F('pasta', 'Pasta, region by region', ['carbonara', 'cacio-e-pepe', 'aglio-olio', 'penne-arrabbiata', 'pesto-genovese', 'fettuccine-alfredo', 'pasta-primavera', 'baked-feta-pasta', 'lemon-orzo-peas', 'veg-lasagna'], [
    ['Sicily', 'Pasta alla Norma: fried eggplant, tomato and salted ricotta.'],
    ['Bologna', 'Tagliatelle al ragù: the real “bolognese”, slow-cooked meat sauce.'],
    ['Naples', 'Pasta e patate: pasta and potatoes cooked together with provola.'],
    ['Puglia', 'Orecchiette with turnip greens (cime di rapa).'],
  ]);
  F('risotto', 'Risotto', ['risotto-milanese'], [
    ['Veneto', 'Risi e bisi: soupy rice with spring peas.'],
    ['Piedmont', 'Risotto al Barolo with red wine, or with white truffle.'],
    ['Lombardy', 'Risotto ai funghi porcini.'],
  ]);
  F('gnocchi', 'Gnocchi', ['gnocchi', 'sheet-pan-gnocchi'], [
    ['Rome', 'Gnocchi alla romana: semolina discs baked with butter and parmesan.'],
    ['Sardinia', 'Malloreddus: small ridged durum-wheat gnocchi.'],
    ['Friuli', 'Gnocchi di susine: potato dumplings filled with plums.'],
  ]);
  F('eggplant-med', 'Eggplant across the Mediterranean', ['parmigiana', 'moussaka', 'imam-bayildi', 'baba-ganoush', 'baingan-bharta'], [
    ['Sicily', 'Caponata: sweet-sour eggplant stew with capers and olives.'],
    ['Provence', 'Ratatouille-style tian of sliced vegetables.'],
  ]);
  F('eggs', 'Eggs around the world', ['french-omelette', 'tortilla-espanola', 'vegetable-frittata', 'menemen', 'shakshuka', 'huevos-rancheros', 'masala-omelette', 'akuri', 'tomato-egg', 'kerala-egg-roast'], [
    ['Japan', 'Tamagoyaki: sweet rolled omelette made in a square pan.'],
    ['Iran', 'Kuku sabzi: herb-packed baked omelette.'],
    ['India', 'Anda bhurji: spicy scrambled eggs from street carts.'],
  ]);
  F('pancakes', 'Pancakes & crepes', ['pancakes', 'crepes', 'banana-oat-pancakes', 'malpua', 'okonomiyaki'], [
    ['Brittany', 'Galettes: savoury buckwheat crepes with egg and cheese.'],
    ['Netherlands', 'Poffertjes: tiny puffy pancakes with butter and sugar.'],
    ['Russia', 'Blini: yeasted pancakes for Maslenitsa.'],
    ['Japan', 'Soufflé pancakes: tall, wobbly and airy.'],
  ]);
  F('potatoes-europe', 'Potatoes of Europe', ['rosti', 'patatas-bravas', 'fish-and-chips', 'poutine', 'veg-au-gratin', 'tortilla-espanola'], [
    ['Ireland', 'Colcannon: mash with cabbage or kale and butter.'],
    ['Germany', 'Bratkartoffeln: pan-fried sliced potatoes.'],
    ['France', 'Gratin dauphinois: potatoes baked in cream and garlic.'],
  ]);
  F('tomato-soup', 'Tomato soups', ['tomato-soup', 'gazpacho'], [
    ['Córdoba', 'Salmorejo: thick, bread-thickened cold tomato soup.'],
    ['Tuscany', 'Pappa al pomodoro: tomato and bread soup.'],
    ['India', 'Tomato shorba: thin, spiced with cumin and ginger.'],
  ]);
  F('mushrooms', 'Mushroom classics', ['mushroom-bourguignon', 'mushroom-stroganoff', 'mushroom-wellington', 'cream-of-mushroom', 'kadai-mushroom', 'garlic-mushroom-toast', 'stuffed-mushrooms'], [
    ['Spain', 'Champiñones al ajillo: mushrooms sizzled with garlic and parsley.'],
    ['Poland', 'Grzybowa: wild-mushroom soup.'],
  ]);
  F('borscht', 'Borscht', ['borscht'], [
    ['Poland', 'Barszcz czerwony: clear, sour beet broth, served with dumplings.'],
    ['Ukraine (green)', 'Zelenyi borshch: with sorrel and egg, in spring.'],
    ['Lithuania', 'Šaltibarščiai: cold pink beet soup with kefir.'],
  ]);
  F('dumplings', 'Dumplings of the world', ['momo', 'gyoza', 'pork-dumplings', 'siu-mai', 'varenyky', 'spring-rolls'], [
    ['Poland', 'Pierogi: potato-cheese or cabbage dumplings, boiled then fried.'],
    ['Georgia', 'Khinkali: twisted, juicy dumplings eaten by the knob.'],
    ['Korea', 'Mandu: steamed or fried, often with kimchi.'],
  ]);
  F('cheese-melts', 'Melted cheese', ['cheese-fondue', 'mac-and-cheese', 'khachapuri', 'cheese-toastie', 'spinach-cheese-quesadillas', 'cheese-souffle'], [
    ['Switzerland', 'Raclette: melted cheese scraped over potatoes and pickles.'],
    ['Wales', 'Welsh rarebit: cheese sauce with ale and mustard on toast.'],
  ]);
  F('chocolate', 'Chocolate desserts', ['chocolate-lava-cake', 'fudgy-brownies', 'chocolate-mousse', 'chocolate-chip-cookies'], [
    ['Austria', 'Sachertorte: chocolate cake with apricot jam.'],
    ['Brazil', 'Brigadeiros: chocolate condensed-milk truffles.'],
  ]);

  /* ---------------- Middle East & Africa ---------------- */
  F('mezze', 'Chickpeas, fava & mezze', ['hummus', 'falafel', 'ful-medames', 'baba-ganoush', 'tabbouleh', 'fattoush'], [
    ['Egypt', 'Ta’ameya: falafel made with fava beans, bright green inside.'],
    ['Palestine', 'Musabbaha: warm, chunky hummus with whole chickpeas.'],
    ['Sudan', 'Ful with feta, sesame oil and cumin.'],
  ]);
  F('lentils-world', 'Lentils of the world', ['mercimek', 'mujaddara', 'injera-misir-wat', 'mulligatawny', 'dal-tadka', 'koshari'], [
    ['Egypt', 'Shorbet ads: smooth yellow lentil soup with cumin and lemon.'],
    ['Italy', 'Lenticchie: lentils for New Year’s luck.'],
  ]);
  F('kebab', 'Grilled skewers & kebabs', ['souvlaki', 'koobideh', 'chicken-shawarma', 'suya', 'tandoori-chicken', 'paneer-tikka', 'jerk-chicken'], [
    ['Turkey', 'Adana kebab: hand-minced spiced lamb on wide skewers.'],
    ['Indonesia', 'Satay with peanut sauce.'],
    ['Japan', 'Yakitori: chicken skewers over charcoal.'],
  ]);
  F('peanut-stew', 'West African peanut stews', ['mafe', 'fufu-groundnut-soup'], [
    ['Nigeria', 'Groundnut stew with chili and leafy greens.'],
    ['The Gambia', 'Domoda: peanut stew with pumpkin.'],
  ]);
  F('jollof', 'Jollof & one-pot rice', ['jollof-rice', 'paella', 'mexican-rice'], [
    ['Ghana', 'Ghana jollof: basmati rice, spicier, served with shito.'],
    ['Senegal', 'Thieboudienne: the fish-and-rice ancestor of jollof.'],
    ['Valencia', 'Paella valenciana: rabbit, chicken and two kinds of beans.'],
  ]);
  F('tagine-couscous', 'Tagine & couscous', ['chicken-tagine', 'veg-couscous'], [
    ['Tunisia', 'Spicier couscous with harissa.'],
    ['Algeria', 'Couscous with chickpeas and a tomato broth.'],
  ]);
  F('cucumber-yogurt', 'Cucumber-yogurt dips', ['cucumber-raita', 'tzatziki'], [
    ['Turkey', 'Cacık: thinner, with dried mint, sometimes served as a cold soup.'],
    ['Iran', 'Mast-o-khiar: with walnuts, raisins and rose petals.'],
  ]);
  F('chopped-salad', 'Chopped salads', ['kachumber', 'greek-salad', 'fattoush', 'tabbouleh', 'som-tum', 'gado-gado', 'caesar-salad', 'smashed-cucumber-salad'], [
    ['Turkey', 'Çoban salatası: shepherd’s salad of tomato, cucumber and pepper.'],
    ['Iran', 'Salad shirazi: finely diced with dried mint and lime.'],
  ]);

  /* ---------------- Asia ---------------- */
  F('fried-rice', 'Fried rice across Asia', ['egg-fried-rice', 'khao-pad', 'nasi-goreng', 'kimchi-fried-rice', 'tawa-pulao'], [
    ['Yangzhou (China)', 'With egg, scallion and diced vegetables, every grain separate.'],
    ['Japan', 'Chahan: light, with soy and egg.'],
    ['Philippines', 'Sinangag: garlic fried rice for breakfast.'],
    ['India', 'Schezwan fried rice: fiery Indo-Chinese style.'],
  ]);
  F('noodles', 'Noodles across Asia', ['pad-thai', 'pad-see-ew', 'chow-mein', 'japchae', 'veg-hakka-noodles', 'peanut-noodles', 'kitsune-udon', 'shoyu-ramen', 'thukpa'], [
    ['Sapporo', 'Miso ramen with corn and butter.'],
    ['Fukuoka (Hakata)', 'Tonkotsu ramen: creamy pork-bone broth, thin noodles.'],
    ['Northern Thailand', 'Khao soi: curry noodle soup with crispy noodles on top.'],
    ['Malaysia', 'Char kway teow: smoky flat rice noodles.'],
  ]);
  F('asian-curry', 'Curries of East & Southeast Asia', ['thai-green-curry', 'japanese-curry', 'tom-kha'], [
    ['Thailand', 'Massaman: mild peanut-potato curry with Persian roots; Panang: thick and rich.'],
    ['Malaysia', 'Kari kapitan: Nyonya curry with candlenut and lime leaves.'],
    ['Burma', 'Hinga curries cooked until the oil separates.'],
  ]);
  F('tofu', 'Tofu dishes', ['mapo-tofu', 'agedashi-tofu', 'soy-garlic-tofu', 'teriyaki-tofu-bowl', 'tofu-banh-mi'], [
    ['Korea', 'Sundubu-jjigae: soft-tofu stew with chili.'],
    ['Indonesia', 'Tahu goreng with peanut sauce.'],
  ]);
  F('raw-fish', 'Raw & cured fish', ['ceviche', 'kokoda', 'poke-bowl', 'sashimi', 'sushi-maki'], [
    ['Mexico', 'Ceviche with tomato and served on tostadas.'],
    ['Ecuador', 'Shrimp ceviche in a tomato-citrus sauce.'],
    ['Philippines', 'Kinilaw: fish cured in vinegar and calamansi.'],
  ]);
  F('kimchi-stews', 'Korean comfort', ['kimchi-jjigae', 'tteokbokki', 'bibimbap', 'kimchi', 'kimchi-fried-rice', 'bulgogi'], [
    ['Jeonju', 'Jeonju bibimbap: the most famous version, with many toppings and raw egg.'],
    ['Busan', 'Eomuk (fish cake) tteokbokki from street carts.'],
  ]);

  /* ---------------- Americas ---------------- */
  F('mexico-tortilla', 'Tacos, tortillas & Tex-Mex', ['tacos-al-pastor', 'black-bean-tacos', 'enchiladas', 'bean-burrito', 'chicken-tinga', 'chicken-fajitas', 'spinach-cheese-quesadillas', 'loaded-nachos', 'tamales'], [
    ['Yucatán', 'Cochinita pibil: achiote-marinated slow-roasted pork.'],
    ['Baja California', 'Fish tacos with cabbage and crema.'],
    ['Oaxaca', 'Tlayudas: giant crisp tortillas with beans and cheese.'],
  ]);
  F('corn-breads', 'Corn & cheese breads', ['arepas', 'pao-de-queijo', 'tamales', 'elote'], [
    ['Colombia', 'Arepa de queso: cheese-stuffed and grilled.'],
    ['El Salvador', 'Pupusas: thick stuffed corn cakes with curtido.'],
  ]);
  F('bean-stews', 'Bean pots & chili', ['sweet-potato-chili', 'gumbo', 'pozole', 'feijoada'], [
    ['Brazil', 'Feijoada: black beans slow-cooked, served with orange and farofa.'],
    ['Cuba', 'Moros y cristianos: black beans cooked with rice.'],
  ]);
  F('stuffed-veg', 'Stuffed vegetables', ['stuffed-peppers', 'dolmades', 'chiles-en-nogada', 'stuffed-mushrooms', 'gutti-vankaya'], [
    ['Turkey', 'Dolma: peppers and tomatoes stuffed with spiced rice.'],
    ['Romania', 'Ardei umpluți: peppers stuffed with rice and herbs in tomato sauce.'],
  ]);

  /* ---------------- more families, so every dish has its regional cousins ---------------- */
  F('hyderabadi', 'The Hyderabadi kitchen', ['chicken-biryani', 'veg-biryani', 'mirchi-ka-salan', 'bagara-baingan', 'haleem', 'mutton-do-pyaza', 'shahi-tukda'], [
    ['Hyderabad', 'Double ka meetha: the local name for shahi tukda, bread pudding with saffron milk.'],
    ['Hyderabad', 'Qubani ka meetha: stewed dried apricots with cream.'],
  ]);
  F('kerala-breakfast', 'Kerala breakfasts', ['idiyappam', 'puttu-kadala', 'appam-stew', 'kerala-egg-roast', 'pazham-pori'], [
    ['Kerala', 'Palappam: lacy appam made with coconut milk.'],
    ['Kerala', 'Ela ada: rice parcels with sweet coconut-jaggery, steamed in banana leaf.'],
  ]);
  F('steamed-cakes', 'Steamed savoury cakes', ['dhokla', 'idli', 'rava-idli', 'kanchipuram-idli'], [
    ['Gujarat', 'Khandvi: thin gram-flour rolls with a mustard-sesame tadka.'],
    ['Gujarat', 'Handvo: baked rice-lentil-vegetable cake.'],
    ['Tamil Nadu', 'Kozhukattai: steamed rice dumplings with sweet or savoury fillings.'],
  ]);
  F('gram-flour', 'Gram-flour (besan) dishes', ['besan-chilla', 'gatte-ki-sabzi', 'kadhi-pakora', 'dhokla', 'onion-pakora'], [
    ['Maharashtra', 'Pitla: thick besan curry eaten with bhakri.'],
    ['Rajasthan', 'Besan ke gatte ka pulao.'],
  ]);
  F('mixed-veg', 'Mixed vegetable curries', ['veg-kolhapuri', 'undhiyu', 'navratan-korma', 'avial', 'veg-kurma'], [
    ['West Bengal', 'Shukto: mildly bitter mixed vegetables with milk, eaten first in a meal.'],
    ['Rajasthan', 'Panchkuta: five desert beans and berries, dried and cooked.'],
  ]);
  F('veg-kebabs', 'Vegetarian kebabs', ['hara-bhara-kabab', 'dahi-kebab', 'paneer-tikka', 'corn-cheese-balls'], [
    ['Lucknow', 'Galouti-style kebabs made with rajma or jackfruit.'],
    ['Delhi', 'Soya chaap: tandoori soy skewers from street stalls.'],
    ['Kolkata', 'Mochar chop: banana-flower croquettes.'],
  ]);
  F('goan', 'Goan classics', ['pork-vindaloo', 'goan-crab-masala'], [
    ['Goa', 'Cafreal: chicken in a green coriander-chili masala.'],
    ['Goa', 'Xacuti: roasted coconut and poppy-seed curry.'],
    ['Goa', 'Sorpotel: tangy, spiced pork stew that improves over days.'],
  ]);
  F('festive-snacks', 'Crunchy festive snacks', ['murukku', 'kerala-banana-chips', 'peanut-chikki', 'samosa'], [
    ['Maharashtra', 'Chakli: the Maharashtrian murukku, made with roasted flour mix (bhajani).'],
    ['Andhra Pradesh', 'Chekkalu: flat, crisp rice-flour crackers.'],
    ['Karnataka', 'Kodubale: ring-shaped spicy rice-flour snack.'],
  ]);
  F('relish-curries', 'Sweet-sour relish curries', ['pineapple-gojju', 'mambazha-pulissery', 'allam-pachadi', 'imli-chutney'], [
    ['Kerala', 'Pineapple pachadi: with yogurt and mustard, on the Onam sadya.'],
    ['Tamil Nadu', 'Mango pachadi for Tamil New Year, with neem flowers and jaggery: sweet, sour and bitter together.'],
  ]);
  F('cutlets', 'Breaded cutlets', ['tonkatsu', 'wiener-schnitzel'], [
    ['Milan', 'Cotoletta alla milanese: bone-in veal-style cutlet fried in butter.'],
    ['Argentina', 'Milanesa: thin breaded cutlet, often topped with tomato and cheese (a la napolitana).'],
    ['India', 'Railway veg cutlet: spiced vegetable patties in breadcrumbs.'],
  ]);
  F('teriyaki', 'Teriyaki', ['chicken-teriyaki', 'teriyaki-tofu-bowl'], [
    ['Hawaiʻi', 'Sweeter teriyaki with pineapple.'],
    ['Seattle', 'Char-grilled teriyaki chicken over rice, a local fast-food staple.'],
  ]);
  F('japanese-soups', 'Japanese soups', ['miso-soup', 'kitsune-udon', 'shoyu-ramen'], [
    ['Nagoya', 'Akadashi: dark red hatcho-miso soup.'],
    ['Kyoto', 'Saikyo miso: pale, sweet white miso soup.'],
  ]);
  F('sichuan', 'Sichuan classics', ['kung-pao-chicken', 'mapo-tofu', 'smashed-cucumber-salad', 'hot-sour-soup'], [
    ['Sichuan', 'Yu xiang qiezi: “fish-fragrant” eggplant with no fish at all.'],
    ['Sichuan', 'Dan dan noodles with chili oil and preserved vegetables.'],
    ['Guizhou', 'Gong bao (kung pao) is said to come from Guizhou’s governor Ding Baozhen.'],
  ]);
  F('thai-soups', 'Thai soups', ['tom-yum', 'tom-kha'], [
    ['Bangkok', 'Tom yum nam khon: creamy version with evaporated milk.'],
    ['Thailand', 'Tom yum het: vegetarian, with mushrooms.'],
  ]);
  F('rolls', 'Rolls & wraps', ['spring-rolls', 'goi-cuon', 'mumbai-frankie', 'tofu-banh-mi'], [
    ['Philippines', 'Lumpia: thin crisp spring rolls.'],
    ['Thailand', 'Po pia tod: fried rolls with glass noodles.'],
  ]);
  F('adobo', 'Adobo', ['chicken-adobo'], [
    ['Bicol', 'Adobo sa gata: finished with coconut milk.'],
    ['Philippines', 'Adobong kangkong: water spinach cooked adobo-style (vegetarian).'],
  ]);
  F('ethiopian', 'Ethiopian wats', ['doro-wat', 'injera-misir-wat'], [
    ['Ethiopia', 'Shiro wat: smooth chickpea-flour stew, a fasting-day staple.'],
    ['Ethiopia', 'Atkilt wat: cabbage, potato and carrot with turmeric.'],
  ]);
  F('cape-malay', 'Cape Malay cooking', ['bobotie'], [
    ['Cape Town', 'Bredie: slow-cooked tomato stew.'],
    ['Cape Town', 'Cape Malay curry: mild and slightly sweet with dried fruit.'],
  ]);
  F('italian-desserts', 'Italian desserts', ['tiramisu', 'panna-cotta', 'cannoli', 'affogato'], [
    ['Sicily', 'Cassata: sponge, ricotta and candied fruit.'],
    ['Naples', 'Sfogliatella: crisp shell-shaped pastry filled with ricotta.'],
    ['Piedmont', 'Bonet: chocolate-amaretti custard.'],
  ]);
  F('veg-stews-med', 'Mediterranean vegetable stews', ['ratatouille', 'roasted-vegetables', 'imam-bayildi'], [
    ['Spain (La Mancha)', 'Pisto: zucchini, peppers and tomato, often with an egg.'],
    ['Catalonia', 'Samfaina: the Catalan ratatouille.'],
    ['Hungary', 'Lecsó: peppers and tomato stewed with paprika.'],
  ]);
  F('dips', 'Dips & spreads', ['guacamole', 'hummus', 'baba-ganoush', 'spinach-artichoke-dip', 'tzatziki'], [
    ['Turkey', 'Muhammara: roasted red pepper and walnut dip.'],
    ['Mexico (Michoacán)', 'Chunky guacamole with a pestle, only lime and onion.'],
  ]);
  F('meringue', 'Meringue desserts', ['pavlova', 'macarons'], [
    ['England', 'Eton mess: crushed meringue, cream and strawberries.'],
    ['Nancy (France)', 'Rustic macarons without filling, older than the Parisian kind.'],
  ]);
  F('custards', 'Custards & puddings', ['creme-brulee', 'panna-cotta', 'tres-leches', 'cheesecake'], [
    ['Catalonia', 'Crema catalana: thinner, flavoured with lemon and cinnamon.'],
    ['Spain', 'Flan: caramel custard.'],
    ['Basque Country', 'Burnt cheesecake: crustless, caramelized dark on top.'],
  ]);
  F('syrup-pastries', 'Syrup-soaked pastries', ['baklava', 'kunafa', 'loukoumades'], [
    ['Hatay (Turkey)', 'Künefe: with stretchy local cheese, served hot.'],
    ['Nablus (Palestine)', 'Kunafa Nabulsieh: with white Nabulsi cheese.'],
    ['Greece', 'Galaktoboureko: semolina custard in filo.'],
  ]);
  F('savoury-pies', 'Savoury pies & bakes', ['quiche', 'spanakopita', 'shepherds-pie', 'mushroom-wellington', 'croissant'], [
    ['Turkey', 'Börek: filo pie with cheese, spinach or potato.'],
    ['Cornwall', 'Cornish pasty: crimped pastry with potato and swede.'],
  ]);
  F('british', 'British classics', ['fish-and-chips', 'sunday-roast-yorkshire', 'full-english', 'bangers-and-mash', 'sticky-toffee-pudding', 'shepherds-pie'], [
    ['Scotland', 'Full Scottish: with tattie scones and haggis.'],
    ['Wales', 'Cawl: lamb and leek broth.'],
    ['Ireland', 'Full Irish: with soda bread and white pudding.'],
  ]);
  F('wine-braises', 'French braises', ['coq-au-vin', 'mushroom-bourguignon'], [
    ['Alsace', 'Coq au Riesling: with white wine and cream.'],
    ['Provence', 'Daube: slow red-wine stew with orange peel and olives.'],
  ]);
  F('french-pastry', 'French bakery classics', ['croissant', 'macarons', 'creme-brulee', 'crepes'], [
    ['Vienna', 'Kipferl: the crescent-shaped ancestor of the croissant.'],
    ['Brittany', 'Kouign-amann: buttery caramelized layered cake.'],
  ]);
  F('tapas', 'Spanish tapas', ['pulpo-gallega', 'gambas-al-ajillo', 'patatas-bravas', 'tortilla-espanola', 'gazpacho'], [
    ['Galicia', 'Pimientos de Padrón: blistered green peppers, “some are hot, some are not”.'],
    ['Catalonia', 'Pa amb tomàquet: bread rubbed with tomato and olive oil.'],
    ['Basque Country', 'Pintxos: small bites pinned to bread.'],
  ]);
  F('antipasti', 'Italian starters', ['caprese', 'bruschetta', 'garlic-bread'], [
    ['Puglia', 'Friselle: twice-baked rings soaked and topped with tomato.'],
    ['Rome', 'Supplì: fried rice balls with mozzarella inside.'],
  ]);
  F('peru', 'Peruvian classics', ['papa-huancaina', 'ceviche'], [
    ['Lima', 'Causa limeña: layered yellow-potato terrine.'],
    ['Arequipa', 'Ocopa: potatoes in a peanut and huacatay-herb sauce.'],
  ]);
  F('veg-soups', 'Comforting vegetable soups', ['french-onion-soup', 'pumpkin-soup', 'minestrone', 'cream-of-mushroom', 'sweet-corn-soup', 'tomato-soup'], [
    ['Tuscany', 'Ribollita: bread and bean soup, reboiled the next day.'],
    ['Spain', 'Sopa de ajo: garlic and bread soup with paprika.'],
  ]);
  F('rice-cakes', 'Rice cakes & dumplings', ['mochi', 'tteokbokki', 'mango-sticky-rice'], [
    ['China', 'Tangyuan: glutinous rice balls in sweet soup.'],
    ['Philippines', 'Bibingka: coconut rice cake baked in banana leaf.'],
    ['Tamil Nadu', 'Kozhukattai: rice dumplings with jaggery-coconut for Ganesh Chaturthi.'],
  ]);
  F('chicken-grill', 'Roast & glazed chicken', ['grilled-herb-chicken', 'honey-garlic-chicken', 'chicken-teriyaki', 'jerk-chicken'], [
    ['Peru', 'Pollo a la brasa: rotisserie chicken with green ají sauce.'],
    ['Portugal', 'Frango piri-piri: grilled chicken with chili oil.'],
    ['Lebanon', 'Shish taouk: garlicky yogurt-marinated chicken skewers.'],
  ]);
  F('fish-europe', 'Simple fish of Europe', ['lemon-garlic-salmon', 'fish-and-chips', 'gambas-al-ajillo'], [
    ['Scandinavia', 'Gravlax: salmon cured with salt, sugar and dill.'],
    ['Spain', 'Pescado a la plancha: fish seared on a hot griddle with garlic and parsley.'],
  ]);
  F('bowls', 'Rice bowls', ['buddha-bowl', 'poke-bowl', 'bibimbap', 'teriyaki-tofu-bowl'], [
    ['Japan', 'Donburi: rice topped with anything from tempura to egg and onion (oyakodon).'],
    ['Mexico / USA', 'Burrito bowl: rice, beans, salsa and toppings, no tortilla.'],
  ]);
  F('roast-duck', 'Roast duck', ['peking-duck'], [
    ['Hong Kong / Guangdong', 'Cantonese roast duck: hung in shop windows, glossy and anise-scented.'],
    ['France', 'Canard à l’orange: duck with bitter-orange sauce.'],
  ]);
  F('sweet-sour', 'Sweet & sour', ['sweet-sour-pork', 'honey-chilli-potato', 'gobi-manchurian'], [
    ['Northeast China', 'Guo bao rou: thin crisp pork slices in a vinegar-sugar glaze.'],
    ['Hong Kong', 'Gu lou yuk with pineapple and peppers.'],
  ]);
  F('korean-bbq', 'Korean barbecue', ['samgyeopsal', 'bulgogi'], [
    ['Chuncheon', 'Dak-galbi: spicy stir-fried chicken with cabbage and rice cakes.'],
    ['Korea', 'Mushroom bulgogi: the vegetarian take.'],
  ]);
  F('salads-more', 'Fresh salads', ['coleslaw', 'halloumi-watermelon-salad', 'greek-salad', 'caprese', 'kachumber'], [
    ['Germany', 'Kartoffelsalat: potato salad with vinegar and onion (south) or mayo (north).'],
    ['Russia', 'Olivier salad: potatoes, peas and pickles in mayonnaise.'],
  ]);

  F('batter-fried', 'Batter-fried vegetables & seafood', ['tempura', 'onion-pakora', 'pazham-pori', 'fish-and-chips'], [
    ['Korea', 'Twigim: thicker, crunchier batter, sold at street stalls with tteokbokki.'],
    ['West Bengal', 'Beguni and fish fry in mustard-oil batter.'],
  ]);
  F('fruit-pies', 'Fruit pies & tarts', ['apple-pie'], [
    ['Austria', 'Apfelstrudel: paper-thin stretched pastry around spiced apples.'],
    ['France', 'Tarte Tatin: upside-down caramelized apple tart.'],
    ['Netherlands', 'Appeltaart: deep, lattice-topped, with cinnamon and raisins.'],
    ['United Kingdom', 'Apple crumble: no pastry, a buttery crumb topping.'],
  ]);

  /* ---------------- batch 3: add new dishes to their families ---------------- */
  const ADD = (key, ids) => { const f = DD.FAMILIES.find((x) => x.key === key); if (f) ids.forEach((id) => { if (DD.byId[id] && !f.members.includes(id)) f.members.push(id); }); };
  ADD('dal', ['gujarati-dal', 'cholar-dal', 'kerala-parippu-curry', 'maharashtrian-amti', 'panchmel-dal', 'khatti-dal', 'mamidikaya-pappu']);
  ADD('yogurt-curry', ['gujarati-kadhi', 'mor-kuzhambu']);
  ADD('cucumber-yogurt', ['perugu-pachadi']);
  ADD('potato', ['kashmiri-dum-aloo', 'aloo-vellulli-karam']);
  ADD('potatoes-europe', ['gratin-dauphinois', 'colcannon']);
  ADD('okra', ['bharwan-bhindi']);
  ADD('brinjal', ['begun-bhaja', 'bharli-vangi']);
  ADD('chole', ['pindi-chole']);
  ADD('pulao', ['kashmiri-pulao', 'bagara-rice']);
  ADD('khichdi', ['bhoger-khichuri']);
  ADD('steamed-cakes', ['khandvi', 'handvo', 'patra']);
  ADD('gram-flour', ['khandvi', 'pitla-bhakri', 'patra', 'shiro-wat']);
  ADD('chutney', ['thecha', 'gongura-pachadi', 'salla-mirapakayalu']);
  ADD('mixed-veg', ['shukto']);
  ADD('chaat', ['kolkata-puchka']);
  ADD('breads', ['kerala-parotta', 'laccha-paratha', 'paneer-paratha', 'pitla-bhakri', 'sarva-pindi', 'dibba-rotte']);
  ADD('paneer', ['chaman-kaliya', 'paneer-paratha']);
  ADD('milk-sweets', ['sandesh', 'mishti-doi', 'bhapa-doi']);
  ADD('ladoo', ['besan-ladoo', 'sunnundalu']);
  ADD('halwa', ['moong-dal-halwa', 'karah-prasad']);
  ADD('kheer', ['bengali-payesh', 'chak-hao-kheer', 'gil-e-firdaus', 'pala-poorilu']);
  ADD('coolers', ['neer-mor', 'panakam', 'ragi-ambali']);
  ADD('tea', ['sulaimani']);
  ADD('rasam', ['pacchi-pulusu', 'ulava-charu']);
  ADD('variety-rice', ['pulihora', 'capsicum-rice', 'nuvvula-saddi']);
  ADD('fritters', ['alasanda-vada', 'makka-garelu', 'punugulu', 'perugu-vada']);
  ADD('festive-snacks', ['chegodilu', 'shakkarpara']);
  ADD('egg-curry', ['egg-methi-malai']);
  ADD('hyderabadi', ['khatti-dal', 'bagara-rice', 'gil-e-firdaus', 'qubani-ka-meetha']);
  ADD('fried-dough-sweets', ['badusha', 'gujiya', 'unniyappam']);
  ADD('rice-cakes', ['unniyappam']);
  ADD('lentils-world', ['ulava-guggillu', 'shiro-wat', 'harira']);
  ADD('pasta', ['pasta-alla-norma']);
  ADD('risotto', ['risotto-ai-funghi']);
  ADD('veg-soups', ['ribollita', 'harira']);
  ADD('antipasti', ['focaccia', 'pan-con-tomate']);
  ADD('gnocchi', ['gnocchi-alla-romana']);
  ADD('eggplant-med', ['caponata', 'pasta-alla-norma']);
  ADD('sichuan', ['yu-xiang-qiezi']);
  ADD('tapas', ['pimientos-de-padron', 'pan-con-tomate', 'pisto']);
  ADD('custards', ['flan']);
  ADD('fruit-pies', ['tarte-tatin', 'apfelstrudel']);
  ADD('dips', ['muhammara']);
  ADD('savoury-pies', ['borek']);
  ADD('eggs', ['kuku-sabzi', 'tamagoyaki']);
  ADD('corn-breads', ['pupusas']);
  ADD('mexico-tortilla', ['chilaquiles']);
  ADD('jollof', ['moros-y-cristianos']);
  ADD('chocolate', ['brigadeiros']);
  ADD('peru', ['causa-limena']);
  ADD('asian-curry', ['thai-red-curry-veg', 'massaman-curry']);
  ADD('tofu', ['tahu-goreng', 'sundubu-jjigae']);
  ADD('kimchi-stews', ['sundubu-jjigae']);
  ADD('ethiopian', ['shiro-wat']);
  ADD('dumplings', ['pierogi-ruskie']);
  ADD('pancakes', ['blini']);
  ADD('veg-stews-med', ['lecso', 'pisto']);
  ADD('meringue', ['eton-mess']);
  F('sweet-flatbreads', 'Sweet stuffed flatbreads', ['bobbatlu', 'puran-poli'], [
    ['Karnataka', 'Holige / obbattu: with chana dal or coconut-jaggery filling.'],
    ['Gujarat', 'Vedmi: thinner, with toor dal and nutmeg.'],
    ['Tamil Nadu', 'Poli: often with a coconut filling, sold at sweet shops.'],
  ]);
  F('millets', 'Millet staples', ['ragi-mudde', 'ragi-dosa', 'ragi-ambali', 'pitla-bhakri'], [
    ['Rajasthan', 'Bajra roti with garlic chutney and ghee in winter.'],
    ['Maharashtra', 'Jowar bhakri: the daily bread of the Deccan plateau.'],
  ]);
  F('gourds', 'Gourds & bitter gourd', ['dondakaya-vepudu', 'stuffed-kakarakaya', 'shukto'], [
    ['Punjab', 'Bharwan karela: bitter gourd stuffed with amchur and fennel.'],
    ['Tamil Nadu', 'Pavakkai pitlai: bitter gourd in tamarind-coconut gravy.'],
    ['Gujarat', 'Tindora nu shaak: ivy gourd stir-fry with besan.'],
  ]);

  /* ---------------- batch 4 ---------------- */
  ADD('dal', ['dalma', 'dal-bhat', 'sai-bhaji', 'veg-dhansak', 'dal-dhokli']);
  ADD('milk-sweets', ['chhena-poda', 'malaiyyo']);
  ADD('variety-rice', ['pakhala-bhata']);
  ADD('potato', ['aloo-pitika', 'aloo-ke-gutke']);
  ADD('chopped-salad', ['singju', 'shopska-salad', 'lahpet-thoke']);
  ADD('greens', ['gundruk-soup', 'kafuli', 'sai-bhaji', 'sukuma-wiki-ugali']);
  ADD('breads', ['sattu-paratha', 'siddu', 'roti-canai', 'scallion-pancakes']);
  ADD('baked-dough', ['sattu-paratha']);
  ADD('fritters', ['dhuska', 'sabudana-vada', 'maddur-vada', 'kothimbir-vadi']);
  ADD('chaat', ['bhutte-ka-kees', 'tamatar-chaat', 'ghugni', 'dabeli']);
  ADD('upma', ['poha-jalebi']);
  ADD('mumbai-street', ['dabeli']);
  ADD('ladoo', ['ghevar']);
  ADD('yogurt-curry', ['himachali-madra']);
  ADD('chole', ['himachali-madra', 'ghugni', 'doubles']);
  ADD('mixed-veg', ['khatkhate', 'undhiyu']);
  ADD('steamed-cakes', ['ukadiche-modak', 'kothimbir-vadi']);
  ADD('rice-cakes', ['ukadiche-modak', 'kiribath']);
  ADD('dosa', ['adai']);
  ADD('rasam', ['kara-kuzhambu']);
  ADD('kheer', ['sakkarai-pongal', 'ada-pradhaman']);
  ADD('south-veg-sides', ['olan', 'erissery']);
  ADD('rolls', ['kolkata-kathi-roll', 'lumpia-gulay', 'kimbap']);
  ADD('mumbai-street', ['kolkata-kathi-roll']);
  ADD('okra', []);
  ADD('gourds', ['jhinge-posto']);
  ADD('custards', ['lagan-nu-custard', 'egg-tarts', 'pasteis-de-nata', 'chawanmushi']);
  ADD('himalayan', ['dal-bhat', 'sel-roti', 'gundruk-soup']);
  ADD('festive-snacks', ['sel-roti', 'ker-sangri']);
  ADD('chutney', ['pol-sambol', 'ajvar']);
  ADD('fried-rice', ['kottu-roti']);
  ADD('eggplant-med', ['borani-banjan', 'badrijani-nigvzit', 'zaalouk', 'di-san-xian']);
  ADD('halwa', ['halwa-puri']);
  ADD('noodles', ['mee-goreng', 'yakisoba', 'pho-chay']);
  ADD('pancakes', ['banh-xeo', 'jianbing', 'martabak-manis', 'dorayaki', 'pajeon', 'hotteok', 'cachapas', 'scallion-pancakes', 'liege-waffles']);
  ADD('chocolate', ['champorado']);
  ADD('bowls', ['onigiri', 'kimbap']);
  ADD('kimchi-stews', ['kimbap', 'hotteok', 'pajeon']);
  ADD('bean-stews', ['lobio', 'fasolada', 'red-red', 'moi-moi']);
  ADD('stuffed-veg', ['gemista']);
  ADD('cheese-melts', ['kasespatzle']);
  ADD('potatoes-europe', ['kartoffelsalat', 'stamppot', 'caldo-verde']);
  ADD('veg-soups', ['caldo-verde', 'fasolada', 'pho-chay']);
  ADD('french-pastry', ['kanelbullar', 'pasteis-de-nata']);
  ADD('fried-dough-sweets', ['puff-puff', 'mandazi', 'sopaipillas']);
  ADD('batter-fried', ['kelewele']);
  ADD('peanut-stew', ['sukuma-wiki-ugali']);
  ADD('dips', ['ajvar', 'zaalouk']);
  ADD('corn-breads', ['cornbread', 'cachapas', 'empanadas-humita']);
  ADD('fruit-pies', ['pumpkin-pie', 'butter-tarts']);
  ADD('savoury-pies', ['empanadas-humita', 'bolani']);
  ADD('meringue', ['lamingtons']);
  ADD('chaat', ['sev-tameta']);
  ADD('breads', ['dal-pakwan', 'msemen']);
  ADD('dal', ['dal-pakwan']);
  ADD('bean-stews', ['chakalaka']);
  ADD('custards', ['malva-pudding']);
  ADD('stuffed-flatbreads', ['msemen']);
  F('bakery-breads', 'Bakery breads', ['focaccia', 'brezel', 'cornbread', 'croissant', 'garlic-bread', 'pao-de-queijo'], [
    ['France', 'Baguette: crisp crust, open crumb, baked several times a day.'],
    ['Turkey', 'Simit: sesame-crusted bread rings sold from street carts.'],
    ['Mumbai', 'Pav: soft bread rolls brought by the Portuguese, now the base of vada pav.'],
  ]);
  F('cookies', 'Biscuits & small cakes', ['anzac-biscuits', 'lamingtons', 'chocolate-chip-cookies', 'butter-tarts', 'dorayaki'], [
    ['Scotland', 'Shortbread: butter, sugar and flour, nothing more.'],
    ['Italy', 'Biscotti: twice-baked almond biscuits from Prato.'],
    ['India', 'Nankhatai: ghee and cardamom shortbread baked in Surat.'],
  ]);
  F('stuffed-flatbreads', 'Stuffed flatbreads', ['aloo-paratha', 'paneer-paratha', 'sattu-paratha', 'bolani', 'khachapuri', 'roti-canai', 'pupusas', 'martabak-manis'], [
    ['Uzbekistan', 'Katlama: flaky layered flatbread rolled with onion and butter.'],
    ['Yemen', 'Mutabbaq: paper-thin dough folded around egg, leek and spices.'],
  ]);
  F('plantains', 'Plantains', ['kelewele', 'red-red', 'pazham-pori', 'kerala-banana-chips'], [
    ['Cuba', 'Maduros: sweet ripe plantains fried until caramelised.'],
    ['Nigeria', 'Dodo: fried ripe plantain served with stew and beans.'],
  ]);

  /* ---------------- batch 5 ---------------- */
  F('fried-breads', 'Puffed & fried breads', ['bedmi-puri', 'chole-bhature', 'luchi-alur-dom', 'langos', 'kachori', 'sel-roti', 'puff-puff', 'mandazi', 'sopaipillas'], [
    ['Navajo Nation (USA)', 'Frybread: quick dough stretched and fried, topped sweet or savoury.'],
    ['Bengal', 'Radhaballavi: puris stuffed with spiced urad dal.'],
  ]);
  F('porridge', 'Porridges & breakfast bowls', ['congee', 'bircher-muesli', 'acai-bowl', 'champorado', 'ragi-ambali', 'ven-pongal', 'mamaliga'], [
    ['Scotland', 'Porridge: oats simmered with water and salt, eaten with cream.'],
    ['Japan', 'Okayu: soft rice porridge with umeboshi, for the sick and for New Year.'],
    ['Ghana', 'Hausa koko: spiced, fermented millet porridge with koose.'],
  ]);
  F('potato-cakes', 'Potato cakes & pancakes', ['llapingachos', 'placki-ziemniaczane', 'bubble-and-squeak', 'rosti', 'aloo-tikki-chaat'], [
    ['Jewish (Ashkenazi)', 'Latkes: grated potato pancakes fried for Hanukkah.'],
    ['Ireland', 'Boxty: pancakes of grated and mashed potato.'],
    ['Sweden', 'Raggmunk: thin potato pancakes with lingonberries.'],
  ]);
  F('peda-mithai', 'Peda & regional mithai', ['mathura-peda', 'dharwad-peda', 'petha', 'thekua', 'athirasam'], [
    ['Gujarat', 'Thabdi: grainy, caramel-brown milk fudge.'],
    ['Bengal', 'Sandesh: soft fresh-chhena sweet pressed in moulds.'],
  ]);
  ADD('yogurt-curry', ['nadru-yakhni', 'kalan', 'sol-kadhi']);
  ADD('tea', ['kahwa']);
  ADD('greens', ['haak-saag', 'bai', 'gomen', 'matapa']);
  ADD('breads', ['amritsari-kulcha', 'bedmi-puri', 'thalipeeth']);
  ADD('stuffed-flatbreads', ['amritsari-kulcha', 'gozleme', 'manakish']);
  ADD('potato', ['bedmi-puri']);
  ADD('veg-kebabs', ['rajma-galouti']);
  ADD('rajma', ['rajma-galouti', 'rice-and-peas']);
  ADD('milk-sweets', ['mathura-peda', 'basundi', 'dharwad-peda']);
  ADD('gourds', ['petha']);
  ADD('fried-dough-sweets', ['thekua', 'athirasam', 'luqaimat', 'chebakia']);
  ADD('festive-snacks', ['athirasam', 'thekua']);
  ADD('fritters', ['mirchi-vada', 'mirchi-bajji']);
  ADD('steamed-cakes', ['methi-muthia', 'kozhukattai']);
  ADD('gram-flour', ['methi-muthia', 'mirchi-vada', 'mirchi-bajji']);
  ADD('rice-cakes', ['kozhukattai', 'tangyuan']);
  ADD('goan', ['bebinca', 'sol-kadhi']);
  ADD('coolers', ['sol-kadhi', 'chicha-morada']);
  ADD('mixed-veg', ['mochar-ghonto', 'bai', 'khar']);
  ADD('dal', ['dhokar-dalna']);
  ADD('rolls', ['kolkata-egg-roll', 'rolex', 'sabich']);
  ADD('eggs', ['kolkata-egg-roll', 'rolex', 'kaya-toast']);
  ADD('relish-curries', ['inji-puli']);
  ADD('chutney', ['inji-puli', 'avakaya']);
  ADD('millets', ['thalipeeth']);
  ADD('himalayan', ['ema-datshi', 'tingmo']);
  ADD('cheese-melts', ['ema-datshi', 'cauliflower-cheese', 'mamaliga']);
  ADD('samosa', ['pumpkin-samsa']);
  ADD('savoury-pies', ['pumpkin-samsa']);
  ADD('mezze', ['kisir', 'espinacas-garbanzos', 'lablabi']);
  ADD('salads-more', ['kisir', 'panzanella']);
  ADD('chopped-salad', ['panzanella']);
  ADD('bakery-breads', ['simit', 'manakish', 'soda-bread', 'conchas', 'tingmo']);
  ADD('kheer', ['sutlac', 'sholeh-zard']);
  ADD('eggplant-med', ['sabich']);
  ADD('veg-soups', ['ash-reshteh', 'pasta-e-fagioli', 'soupe-au-pistou', 'lablabi']);
  ADD('bean-stews', ['ash-reshteh', 'pasta-e-fagioli', 'molletes']);
  ADD('syrup-pastries', ['basbousa', 'chebakia']);
  ADD('risotto', ['arancini']);
  ADD('antipasti', ['arancini']);
  ADD('pasta', ['pasta-e-fagioli']);
  ADD('fruit-pies', ['clafoutis', 'peach-cobbler']);
  ADD('custards', ['clafoutis', 'crema-catalana', 'douhua', 'bebinca']);
  ADD('cookies', ['madeleines', 'scones', 'alfajores']);
  ADD('french-pastry', ['madeleines']);
  ADD('tomato-soup', ['salmorejo']);
  ADD('tapas', ['salmorejo', 'espinacas-garbanzos']);
  ADD('british', ['cauliflower-cheese', 'scones', 'soda-bread', 'bubble-and-squeak']);
  ADD('potatoes-europe', ['bubble-and-squeak', 'placki-ziemniaczane']);
  ADD('pancakes', ['syrniki', 'placki-ziemniaczane', 'kaiserschmarrn', 'canjeero']);
  ADD('corn-breads', ['mamaliga', 'esquites']);
  ADD('mexico-tortilla', ['enmoladas', 'molletes', 'esquites']);
  ADD('plantains', ['mofongo', 'patacones', 'moqueca-banana']);
  ADD('jollof', ['rice-and-peas']);
  ADD('peru', ['chicha-morada']);
  ADD('batter-fried', ['buffalo-cauliflower', 'tempeh-mendoan']);
  ADD('noodles', ['zaru-soba', 'kongguksu', 'khao-soi']);
  ADD('kimchi-stews', ['kongguksu']);
  ADD('dumplings', ['tangyuan']);
  ADD('tofu', ['buddhas-delight', 'douhua', 'pad-kra-pao-tofu', 'tempeh-mendoan', 'tofu-amok']);
  ADD('asian-curry', ['khao-soi', 'jackfruit-rendang', 'tofu-amok']);
  ADD('thai-soups', ['khao-soi']);
  ADD('bowls', ['pad-kra-pao-tofu']);
  ADD('frozen', ['che-ba-mau', 'halo-halo']);
  ADD('ethiopian', ['gomen', 'canjeero']);
  ADD('peanut-stew', ['matapa']);
  ADD('tagine-couscous', ['thiakry']);

  /* ---------------- batch 6 ---------------- */
  F('fruit-nut-sweets', 'Date, fruit & nut sweets', ['churchkhela', 'kleicha', 'makroud', 'pinni', 'peanut-chikki', 'til-pitha'], [
    ['Iran', 'Ranginak: dates stuffed with walnuts under a flour-butter crumble.'],
    ['Turkey', 'Pestil and köme: dried mulberry or grape leather with nuts.'],
  ]);
  ADD('pulao', ['modur-pulao', 'tehri']);
  ADD('himalayan', ['skyu', 'kinema-curry']);
  ADD('veg-soups', ['skyu', 'saltibarsciai', 'bissara', 'chamthong']);
  ADD('breads', ['makki-di-roti', 'koki', 'zunka-bhakri', 'veg-kothu-parotta', 'dholl-puri']);
  ADD('corn-breads', ['makki-di-roti', 'chipa', 'sopa-paraguaya']);
  ADD('millets', ['zunka-bhakri', 'bajre-ki-khichdi', 'jhangora-kheer']);
  ADD('ladoo', ['pinni']);
  ADD('chole', ['hara-dhania-choliya']);
  ADD('khichdi', ['bajre-ki-khichdi', 'veg-galho']);
  ADD('potato', ['nimona']);
  ADD('fried-dough-sweets', ['imarti', 'balushahi', 'chhena-jhili', 'koeksisters', 'makroud']);
  ADD('fried-breads', ['baursak']);
  ADD('milk-sweets', ['rabri', 'bal-mithai', 'chhena-jhili']);
  ADD('peda-mithai', ['bal-mithai', 'balushahi', 'imarti']);
  ADD('kheer', ['jhangora-kheer', 'palada-payasam', 'paal-kozhukattai']);
  ADD('bean-stews', ['bhatt-ki-churkani', 'avarekalu-saaru', 'baleadas', 'gallo-pinto', 'porotos-granados', 'waakye', 'githeri', 'bunny-chow']);
  ADD('baked-dough', ['dal-bafla']);
  ADD('yogurt-curry', ['sindhi-kadhi', 'majjige-huli']);
  ADD('gram-flour', ['sindhi-kadhi', 'zunka-bhakri', 'shan-tofu']);
  ADD('chaat', ['sev-usal']);
  ADD('festive-snacks', ['chakli', 'sakinalu']);
  ADD('custards', ['double-ka-meetha', 'haupia']);
  ADD('hyderabadi', ['double-ka-meetha']);
  ADD('fritters', ['goli-baje', 'akara']);
  ADD('batter-fried', ['akara']);
  ADD('rice-cakes', ['paal-kozhukattai', 'til-pitha', 'pumaloi', 'patoleo', 'fara']);
  ADD('steamed-cakes', ['patoleo', 'fara', 'pumaloi']);
  ADD('dal', ['paruppu-urundai-kuzhambu']);
  ADD('fried-rice', ['veg-kothu-parotta', 'gallo-pinto']);
  ADD('goan', ['patoleo']);
  ADD('mixed-veg', ['santula', 'chamthong']);
  ADD('paneer', ['chhanar-dalna', 'potoler-dorma']);
  ADD('stuffed-veg', ['potoler-dorma']);
  ADD('gourds', ['potoler-dorma', 'majjige-huli']);
  ADD('pancakes', ['kilanji', 'aebleskiver', 'poffertjes']);
  ADD('tofu', ['shan-tofu', 'kinema-curry']);
  ADD('dips', ['pkhali']);
  ADD('greens', ['pkhali', 'zhingyalov-hats', 'qutab', 'mukimo']);
  ADD('stuffed-flatbreads', ['zhingyalov-hats', 'qutab', 'dholl-puri']);
  ADD('cucumber-yogurt', ['qurutob']);
  ADD('salads-more', ['qurutob', 'tam-mak-hoong']);
  ADD('noodles', ['ashlan-fu']);
  ADD('mezze', ['fatteh', 'bissara']);
  ADD('syrup-pastries', ['bint-al-sahn']);
  ADD('cookies', ['kleicha', 'nanaimo-bars']);
  ADD('savoury-pies', ['pastizzi', 'pita-krompirusa', 'gibanica', 'karelian-pies', 'brik']);
  ADD('potatoes-europe', ['pita-krompirusa']);
  ADD('cheese-melts', ['gibanica', 'strukli', 'smazeny-syr', 'welsh-rarebit', 'tequenos', 'provoleta']);
  ADD('cutlets', ['smazeny-syr']);
  ADD('borscht', ['saltibarsciai']);
  ADD('bakery-breads', ['karelian-pies', 'chipa', 'damper', 'panipopo']);
  ADD('british', ['welsh-rarebit', 'cranachan']);
  ADD('chocolate', ['nanaimo-bars']);
  ADD('plantains', ['mangu', 'matoke', 'attieke']);
  ADD('mexico-tortilla', ['baleadas', 'tlayudas']);
  ADD('jollof', ['waakye']);
  ADD('eggs', ['chipsi-mayai', 'brik']);
  ADD('tagine-couscous', ['attieke']);
  ADD('rajma', ['bunny-chow']);
  ADD('cape-malay', ['koeksisters', 'bunny-chow']);

  /* ---------------- batch 7 ---------------- */
  F('japanese-sides', 'Japanese small plates', ['nasu-dengaku', 'hiyayakko', 'goma-ae', 'agedashi-tofu', 'tamagoyaki', 'onigiri'], [
    ['Japan', 'Kinpira gobo: burdock and carrot stir-fried with soy and sesame.'],
    ['Japan', 'Sunomono: cucumber and wakame in sweet rice vinegar.'],
  ]);
  ADD('tofu', ['hiyayakko', 'dubu-jorim']);
  ADD('greens', ['goma-ae', 'tumis-kangkung']);
  ADD('rice-cakes', ['mitarashi-dango', 'jian-dui', 'zongzi', 'biko', 'xoi-xeo', 'yomari']);
  ADD('pancakes', ['taiyaki', 'socca', 'chatamari']);
  ADD('frozen', ['kakigori', 'patbingsu']);
  ADD('custards', ['gyeranjjim', 'galaktoboureko', 'wattalappam']);
  ADD('kimchi-stews', ['gyeranjjim', 'hobak-jeon', 'dubu-jorim', 'patbingsu']);
  ADD('batter-fried', ['hobak-jeon']);
  ADD('noodles', ['dan-dan-noodles', 'liangpi', 'veg-laksa']);
  ADD('sichuan', ['dan-dan-noodles', 'dry-fried-green-beans']);
  ADD('veg-soups', ['hot-and-sour-soup', 'pappa-al-pomodoro']);
  ADD('fried-dough-sweets', ['jian-dui']);
  ADD('dumplings', ['veg-baozi', 'aushak', 'yomari']);
  ADD('cookies', ['mooncakes']);
  ADD('asian-curry', ['veg-laksa', 'sayur-lodeh']);
  ADD('salads-more', ['rojak']);
  ADD('mixed-veg', ['sayur-lodeh']);
  ADD('plantains', ['turon']);
  ADD('rolls', ['turon']);
  ADD('halwa', ['ube-halaya']);
  ADD('tomato-soup', ['pappa-al-pomodoro']);
  ADD('mushrooms', ['creamy-polenta']);
  ADD('porridge', ['creamy-polenta']);
  ADD('gram-flour', ['socca']);
  ADD('pizza', ['pissaladiere']);
  ADD('savoury-pies', ['pissaladiere', 'tiropita']);
  ADD('veg-stews-med', ['briam']);
  ADD('syrup-pastries', ['galaktoboureko']);
  ADD('eggs', ['cilbir', 'gyeranjjim']);
  ADD('jollof', ['maqluba']);
  ADD('eggplant-med', ['maqluba', 'nasu-dengaku']);
  ADD('mezze', ['pumpkin-kibbeh']);
  ADD('chaat', ['chana-chaat-pak']);
  ADD('chole', ['chana-chaat-pak']);
  ADD('khichdi', ['bhuna-khichuri']);
  ADD('dosa', ['hoppers']);
  ADD('kerala-breakfast', ['hoppers', 'string-hoppers']);
  ADD('dal', ['parippu']);
  ADD('potato', ['aloo-tama']);
  ADD('himalayan', ['aloo-tama', 'chatamari', 'yomari']);

  /* ---------------- batch 8 ---------------- */
  F('cassava', 'Cassava & yuca', ['yuca-con-mojo', 'farofa', 'tapioca-crepe', 'attieke', 'chipa', 'pao-de-queijo'], [
    ['Ghana', 'Fufu: boiled cassava and plantain pounded into a smooth, stretchy dough.'],
    ['Kerala', 'Kappa puzhukku: mashed tapioca with coconut and green chili.'],
    ['Indonesia', 'Getuk: steamed sweet cassava cakes with coconut.'],
  ]);
  ADD('fruit-nut-sweets', ['shufta']);
  ADD('ladoo', ['panjiri', 'mohanthal']);
  ADD('pulao', ['meethe-chawal', 'masale-bhat']);
  ADD('samosa', ['pyaaz-kachori', 'mawa-kachori', 'hing-kochuri']);
  ADD('milk-sweets', ['mawa-kachori', 'mawa-bati', 'pantua', 'chomchom', 'rasabali']);
  ADD('breads', ['bajre-ki-roti', 'sheermal', 'khakhra']);
  ADD('millets', ['bajre-ki-roti']);
  ADD('yogurt-curry', ['papad-ki-sabzi', 'majjiga-pulusu']);
  ADD('potato', ['aloo-rasedar']);
  ADD('bakery-breads', ['sheermal', 'bannock']);
  ADD('fried-dough-sweets', ['mawa-bati', 'neyyappam', 'pantua', 'khaja', 'chin-chin', 'sfenj', 'picarones']);
  ADD('gram-flour', ['fafda', 'mohanthal', 'pithla']);
  ADD('festive-snacks', ['fafda', 'khakhra', 'achappam', 'sundal']);
  ADD('brinjal', ['ringan-no-olo']);
  ADD('variety-rice', ['masale-bhat', 'menthya-bath']);
  ADD('fried-breads', ['aamras-puri', 'hing-kochuri', 'vetkoek', 'jamaican-festival', 'bannock']);
  ADD('goan', ['mushroom-xacuti', 'sannas']);
  ADD('mushrooms', ['mushroom-xacuti', 'diri-djon-djon']);
  ADD('steamed-cakes', ['sannas']);
  ADD('rice-cakes', ['sannas', 'dal-pitha', 'mofo-gasy']);
  ADD('salads-more', ['kosambari', 'taktouka', 'mechouia', 'solterito']);
  ADD('chopped-salad', ['kosambari']);
  ADD('relish-curries', ['ulli-theeyal', 'vatha-kuzhambu']);
  ADD('chole', ['sundal']);
  ADD('sweet-flatbreads', ['pootharekulu']);
  ADD('mixed-veg', ['labra']);
  ADD('chaat', ['jhal-muri', 'dahi-bara-aloo-dum']);
  ADD('fritters', ['dahi-bara-aloo-dum', 'taameya', 'hush-puppies', 'bunuelos']);
  ADD('dumplings', ['dal-pitha']);
  ADD('chutney', ['pehak']);
  ADD('himalayan', ['pehak']);
  ADD('tofu', ['yassa-tofu']);
  ADD('peanut-stew', ['ndole', 'sadza-muriwo', 'sopa-de-mani']);
  ADD('greens', ['ndole', 'efo-riro', 'molokhia', 'callaloo']);
  ADD('coolers', ['zobo']);
  ADD('plantains', ['tatale', 'rellenitos']);
  ADD('pancakes', ['tatale', 'kisra', 'mofo-gasy', 'tapioca-crepe']);
  ADD('ethiopian', ['atkilt-wat', 'kik-alicha', 'kisra']);
  ADD('dal', ['kik-alicha']);
  ADD('mezze', ['taameya']);
  ADD('stuffed-veg', ['mahshi', 'chiles-rellenos']);
  ADD('custards', ['om-ali', 'melktert', 'capirotada', 'quindim', 'suspiro-limeno']);
  ADD('veg-soups', ['molokhia', 'corn-chowder', 'locro', 'sopa-de-mani']);
  ADD('tagine-couscous', ['bazeen', 'seffa']);
  ADD('dips', ['taktouka', 'mechouia']);
  ADD('porridge', ['sadza-muriwo', 'cheese-grits']);
  ADD('bean-stews', ['succotash', 'red-beans-rice', 'enfrijoladas', 'arroz-con-gandules', 'locro']);
  ADD('cheese-melts', ['cheese-grits', 'api-con-pastel', 'bunuelos']);
  ADD('fruit-pies', ['pecan-pie', 'key-lime-pie']);
  ADD('rajma', ['red-beans-rice']);
  ADD('corn-breads', ['hush-puppies', 'jamaican-festival']);
  ADD('mexico-tortilla', ['sopes', 'chiles-rellenos', 'enfrijoladas']);
  ADD('chocolate', ['champurrado']);
  ADD('kheer', ['arroz-con-leche']);
  ADD('jollof', ['arroz-con-gandules', 'diri-djon-djon']);
  ADD('cookies', ['bolo-de-cenoura']);
  ADD('peru', ['ocopa', 'solterito', 'picarones', 'suspiro-limeno']);
  ADD('meringue', ['suspiro-limeno']);

  /* ---------------- batch 9 ---------------- */
  F('french-toast', 'Bread puddings & French toast', ['pain-perdu', 'torrijas', 'bread-butter-pudding', 'capirotada', 'om-ali', 'double-ka-meetha', 'shahi-tukda'], [
    ['Hong Kong', 'Sai do si: deep-fried French toast with peanut butter and condensed milk.'],
    ['Mumbai', 'Bombay toast: sweet egg-dipped bread fried in ghee.'],
  ]);
  ADD('veg-soups', ['acorda', 'ajoblanco', 'okroshka', 'tarator']);
  ADD('eggs', ['acorda']);
  ADD('kheer', ['arroz-doce']);
  ADD('veg-stews-med', ['escalivada', 'spanakorizo', 'taze-fasulye']);
  ADD('eggplant-med', ['escalivada', 'berenjenas-con-miel']);
  ADD('tapas', ['berenjenas-con-miel']);
  ADD('potatoes-europe', ['aligot', 'stoemp', 'boxty', 'lefse']);
  ADD('cheese-melts', ['aligot', 'gougeres', 'raclette', 'glamorgan-sausages', 'halusky', 'peynirli-pide']);
  ADD('french-pastry', ['gougeres', 'far-breton']);
  ADD('custards', ['far-breton', 'ile-flottante', 'somloi-galuska']);
  ADD('meringue', ['ile-flottante']);
  ADD('risotto', ['risi-e-bisi', 'suppli']);
  ADD('pasta', ['pasta-e-ceci']);
  ADD('bean-stews', ['pasta-e-ceci', 'gigantes']);
  ADD('gram-flour', ['panelle']);
  ADD('antipasti', ['panelle', 'suppli']);
  ADD('stuffed-flatbreads', ['piadina', 'placinte']);
  ADD('italian-desserts', ['zeppole']);
  ADD('fried-dough-sweets', ['zeppole', 'kleinur']);
  ADD('dumplings', ['dampfnudeln', 'germknodel', 'marillenknodel', 'halusky']);
  ADD('bakery-breads', ['dampfnudeln', 'potica']);
  ADD('fruit-pies', ['rote-grutze', 'mustikkapiirakka']);
  ADD('cookies', ['speculoos', 'stroopwafels']);
  ADD('pancakes', ['crumpets']);
  ADD('british', ['crumpets', 'bread-butter-pudding', 'glamorgan-sausages']);
  ADD('potato-cakes', ['boxty', 'deruny']);
  ADD('sweet-flatbreads', ['lefse']);
  ADD('salads-more', ['vinegret']);
  ADD('borscht', ['vinegret']);
  ADD('cucumber-yogurt', ['okroshka', 'tarator']);
  ADD('savoury-pies', ['cabbage-pirozhki', 'placinte', 'banitsa']);
  ADD('porridge', ['grechka']);
  ADD('mushrooms', ['grechka']);
  ADD('chocolate', ['somloi-galuska']);
  ADD('mezze', ['gigantes', 'mucver']);
  ADD('greens', ['spanakorizo']);
  ADD('pizza', ['peynirli-pide']);
  ADD('fritters', ['mucver']);
  ADD('fruit-nut-sweets', ['asure']);

  /* ---------------- index ---------------- */
  DD.familyOf = {};
  for (const f of DD.FAMILIES) {
    for (const id of f.members) {
      const d = DD.byId[id];
      (DD.familyOf[id] = DD.familyOf[id] || []).push(f);
      d.families = d.families || [];
      d.families.push(f.key);
      d.search += ' ' + f.name.toLowerCase() + ' ' + f.notes.map((n) => n[0]).join(' ').toLowerCase();
    }
  }
})();
