/* ==========================================================================
   Dish Dictionary — nutrition estimates
   Calories, protein, carbs, fat, fibre, sugar and sodium for every recipe,
   worked out from its ingredient list (values per 100 g from USDA FoodData
   Central and the Indian Food Composition Tables, rounded).
   It is an estimate: brands, ripeness and how much oil a fried food soaks up
   all change the real numbers.
   ========================================================================== */
'use strict';
(function () {
  // Each row: [pattern, kcal, protein g, carbs g, fat g, fibre g, sugar g, sodium mg, options]
  // options: d = density g/ml, e = grams per piece, b = bunch, h = handful, hd = head, sl = slice,
  //          sh = sheet, can = drained can, lf = leaf, st = stalk/stick, f = fraction eaten,
  //          z = not eaten, cookedAs = values once cooked/canned
  const OIL = { d: 0.92 };
  const SPICE = { d: 0.5, e: 0.3 };
  const HERB = { d: 0.25, b: 30, h: 10, e: 1, lf: 0.3, st: 15 };
  const T = [
    // ---- not eaten / no calories ----
    [/charcoal|banana lea|corn husk|silver leaf|food colou?r|gel food/, 0, 0, 0, 0, 0, 0, 0, { z: 1 }],
    [/\bice\b(?! cream)|ice cubes|crushed ice|\bwater\b(?! chestnut)|soda water|rose water|kewra|orange blossom|cream of tartar/, 0, 0, 0, 0, 0, 0, 2, { d: 1 }],
    [/\b(tea|coffee|espresso|matcha|hibiscus|rose petals)\b/, 2, 0.1, 0.3, 0, 0, 0, 2, { d: 0.5, e: 2 }],
    [/agar jelly|jelly cubes/, 60, 0, 15, 0, 0.5, 14, 5, {}],
    [/agar/, 0, 0, 0, 0, 0, 0, 0, { d: 0.6 }],

    // ---- salt, leaveners, flavourings ----
    [/eno|fruit salt/, 0, 0, 0, 0, 0, 0, 22000, { d: 1 }],
    [/\bsalt\b|namak/, 0, 0, 0, 0, 0, 0, 38700, { d: 1.2 }],
    [/baking soda|bicarbonate/, 0, 0, 0, 0, 0, 0, 27360, { d: 0.9 }],
    [/baking powder/, 53, 0, 28, 0, 0.2, 0, 10600, { d: 0.9 }],
    [/yeast/, 325, 40, 41, 7.6, 27, 0, 51, { d: 0.6 }],
    [/ice cream|kulfi/, 207, 3.5, 24, 11, 0.7, 21, 80, { e: 65 }],
    [/vanilla (extract|essence|pod|bean)/, 288, 0.1, 12.7, 0.1, 0, 12.7, 9, { d: 0.9, e: 2 }],
    [/stock cube|bouillon/, 250, 17, 18, 14, 0, 2, 24000, { e: 10 }],

    // ---- stocks ----
    [/dashi/, 3, 0.4, 0.2, 0, 0, 0, 160, { d: 1 }],
    [/chicken stock|chicken broth/, 15, 1.6, 1.4, 0.5, 0, 0.6, 350, { d: 1 }],
    [/stock|broth/, 8, 0.3, 1.5, 0.1, 0, 0.6, 280, { d: 1 }],

    // ---- fats & oils ----
    [/peanut butter/, 588, 25, 20, 50, 6, 9, 17, { d: 1.08 }],
    [/chil+i oil|rayu/, 700, 1, 4, 75, 2, 0, 50, OIL],
    [/\boil\b|shortening|\blard\b/, 884, 0, 0, 100, 0, 0, 0, OIL],
    [/ghee|clarified butter|niter kibbeh/, 900, 0.3, 0, 99.5, 0, 0, 2, { d: 0.91 }],
    [/buttermilk/, 40, 3.3, 4.8, 0.9, 0, 4.8, 105, { d: 1.03 }],
    [/giant beans|gigantes|dried butter beans|dried lima/, 338, 21.5, 63, 0.7, 19, 8.5, 18, { cookedAs: [115, 7.8, 21, 0.4, 7, 2.9, 2] }],
    [/butter beans|garrof/, 115, 7.8, 21, 0.4, 7, 2, 4, { can: 240 }],
    [/butter\b/, 717, 0.9, 0.1, 81, 0, 0.1, 200, { d: 0.96 }],
    [/mayo|kewpie/, 680, 1, 0.6, 75, 0, 0.6, 635, { d: 0.95 }],

    // ---- dairy ----
    [/condensed milk/, 321, 7.9, 54, 8.7, 0, 54, 127, { d: 1.3 }],
    [/evaporated milk/, 134, 6.8, 10, 7.6, 0, 10, 106, { d: 1.07 }],
    [/milk powder/, 496, 26, 38, 27, 0, 38, 371, { d: 0.5 }],
    [/coconut milk/, 230, 2.3, 5.5, 24, 2.2, 3.3, 15, { d: 1.0 }],
    [/coconut cream/, 330, 3.6, 6.6, 34.7, 2.2, 3, 4, { d: 1.0 }],
    [/soy milk|soya milk/, 43, 3.3, 3, 1.8, 0.5, 1, 50, { d: 1.03 }],
    [/oat milk/, 48, 1, 6.5, 1.5, 0.8, 4, 42, { d: 1.03 }],
    [/\bmilk\b/, 61, 3.2, 4.8, 3.3, 0, 5, 43, { d: 1.03 }],
    [/sour cream|crema|smetana/, 198, 2.4, 4.6, 19, 0, 3.4, 31, { d: 1.0 }],
    [/cream cheese/, 342, 6, 4, 34, 0, 3.2, 321, { d: 1.0 }],
    [/mascarpone/, 429, 4.6, 4.8, 44, 0, 4.8, 40, { d: 1.0 }],
    [/\bcream\b/, 340, 2.8, 2.7, 36, 0, 2.9, 27, { d: 1.0 }],
    [/hung curd|greek yogh?urt|thick (plain |chilled |greek )?yogh?urt|labneh/, 97, 9, 4, 5, 0, 4, 36, { d: 1.05 }],
    [/yogh?urt|\bcurd\b|dahi/, 61, 3.5, 4.7, 3.3, 0, 4.7, 46, { d: 1.04 }],
    [/tzatziki/, 75, 4, 4, 5, 0.3, 3, 300, {}],
    [/chhena|chenna/, 210, 15, 3, 15, 0, 3, 30, {}],
    [/paneer/, 265, 18.3, 1.2, 20.8, 0, 1.2, 18, {}],
    [/khoya|mawa/, 421, 14.6, 25, 31, 0, 25, 60, {}],
    [/farmer.?s cheese|twar[oó]g|tvorog|quark/, 121, 17, 1.8, 5, 0, 1.8, 40, {}],
    [/provolone/, 351, 25.6, 2.1, 26.6, 0, 0.6, 876, {}],
    [/ricotta/, 174, 11, 3, 13, 0, 0.3, 84, {}],
    [/parmesan|parmigiano|pecorino|kefalotyri|grana/, 392, 35.8, 3.2, 25.8, 0, 0.8, 1500, { d: 0.4 }],
    [/halloumi|akkawi/, 321, 21.5, 2.6, 25, 0, 2, 1200, {}],
    [/feta|cotija|queso fresco/, 264, 14, 4.1, 21, 0, 4.1, 1116, {}],
    [/goat cheese|chèvre/, 364, 21.6, 0.1, 30, 0, 0.1, 515, {}],
    [/mozzarella|oaxaca|fior di latte|burrata/, 280, 22, 2.2, 22, 0, 1, 627, {}],
    [/cheese|cheddar|gruy|comt|emmental|vacherin|monterey|minas/, 400, 25, 1.3, 33, 0, 0.5, 650, {}],

    // ---- eggs ----
    [/egg ?yolk/, 322, 16, 3.6, 26.5, 0, 0.6, 48, { e: 17 }],
    [/egg ?whites?/, 52, 10.9, 0.7, 0.2, 0, 0.7, 166, { e: 33 }],
    [/egg noodles/, 384, 14, 71, 4.4, 3.3, 1.9, 21, {}],
    [/\beggs?\b/, 143, 12.6, 0.7, 9.5, 0, 0.4, 142, { e: 50 }],

    // ---- tofu & soy ----
    [/tofu puffs?|tau pok/, 270, 17, 10, 20, 1, 1, 15, {}],
    [/aburaage|fried tofu/, 386, 23, 0.4, 33, 0.4, 0, 20, { sh: 15 }],
    [/silken|soft tofu/, 55, 4.8, 2.9, 2.7, 0.1, 1.3, 5, {}],
    [/tofu/, 144, 15.8, 2.8, 8.7, 2.3, 0.6, 14, {}],
    [/tempeh/, 192, 20, 7.6, 10.8, 5, 0, 9, {}],
    [/edamame/, 121, 12, 9, 5, 5, 2.2, 6, {}],

    // ---- sauces & pastes ----
    [/kecap manis|sweet soy/, 250, 3, 60, 0, 0, 50, 3000, { d: 1.25 }],
    [/dark soy/, 60, 5, 10, 0, 0.5, 6, 5000, { d: 1.2 }],
    [/soy sauce|tamari|shoyu/, 53, 8, 4.9, 0.6, 0.8, 0.4, 5490, { d: 1.15 }],
    [/fish sauce/, 35, 5, 3.6, 0, 0, 3.6, 7850, { d: 1.2 }],
    [/oyster sauce/, 51, 1.4, 11, 0.3, 0.3, 7, 2730, { d: 1.2 }],
    [/hoisin/, 220, 3.3, 44, 3.4, 2.8, 27, 1615, { d: 1.2 }],
    [/worcestershire/, 78, 0, 19, 0, 0, 10, 980, { d: 1.1 }],
    [/okonomiyaki sauce/, 120, 1, 28, 0.2, 0.5, 20, 2000, { d: 1.2 }],
    [/gochujang/, 200, 5, 40, 2, 2, 25, 2800, { d: 1.2 }],
    [/red bean paste|anko/, 250, 5, 55, 0.5, 5, 40, 30, {}],
    [/doubanjiang|bean paste|fermented black/, 180, 10, 18, 6, 5, 3, 5000, { d: 1.1 }],
    [/doenjang|miso/, 198, 12, 26, 6, 5.4, 6, 3730, { d: 1.1 }],
    [/curry paste|nam prik|chili jam|harissa|pepper paste|salçası|chipotles? in adobo/, 150, 3, 15, 9, 4, 6, 2500, { d: 1.1, e: 15 }],
    [/chil+i sauce|sriracha(?! mayo)/, 93, 2, 19, 1, 2, 15, 2100, { d: 1.1 }],
    [/ketchup/, 112, 1.7, 26, 0.4, 0.3, 22, 900, { d: 1.15 }],
    [/mustard(?! (seeds|oil|greens|powder))|dijon/, 66, 4, 5, 4, 3, 1, 1135, { d: 1.05 }],
    [/coriander chutney|cilantro chutney|mint chutney/, 60, 2.5, 8, 2, 3, 2, 400, { d: 1.05 }],
    [/chimichurri/, 400, 1, 3, 42, 1, 1, 500, { d: 0.95 }],
    [/tartar sauce/, 211, 1, 13, 17, 0.4, 4, 667, { d: 1.0 }],
    [/kurma|salna/, 110, 2.5, 8, 8, 2, 3, 350, { d: 1.0 }],
    [/grape juice/, 60, 0.4, 15, 0.1, 0.2, 14, 5, { d: 1.05 }],
    [/\bwhisk(e)?y\b|\brum\b|brandy/, 250, 0, 0, 0, 0, 0, 0, { d: 0.95 }],
    [/edible gum|\bgond\b|gum arabic/, 300, 1, 80, 0, 70, 0, 50, { d: 0.6 }],
    [/cluster beans?|gavar|guar/, 33, 3.2, 10.8, 0.4, 3.2, 1, 10, {}],
    [/pointed gourd|parwal|potol|parval/, 20, 2, 2.2, 0.3, 3, 1, 2, { e: 40 }],
    [/candlenuts?|macadamias?|kemiri/, 718, 7.9, 14, 76, 8.6, 4.6, 5, { d: 0.55, e: 4.5 }],
    [/wood ear|black fungus|cloud ear/, 284, 9, 73, 0.7, 70, 0, 35, { d: 0.3 }],
    [/golden syrup|treacle|corn syrup/, 325, 0, 79, 0, 0, 79, 270, { d: 1.4 }],
    [/lotus seed paste/, 300, 6, 60, 5, 3, 40, 10, {}],
    [/sambal/, 70, 1.5, 10, 2, 3, 6, 1500, { d: 1.05 }],
    [/pizza dough|bread dough/, 250, 8, 48, 3, 2, 1, 500, {}],
    [/mixed nuts|dry fruits?\b/, 600, 18, 22, 52, 7, 4, 5, { d: 0.6 }],
    [/makhana|fox nuts?|lotus seeds?(?! paste)/, 347, 9.7, 77, 0.1, 14.5, 0, 1, { d: 0.15 }],
    [/molokhia|jute leaves/, 34, 4.7, 6, 0.3, 2, 0, 9, {}],
    [/\bbzar\b|baharat|seven-spice/, 300, 10, 60, 10, 25, 2, 30, { d: 0.5 }],
    [/caraway/, 333, 20, 50, 15, 38, 0.6, 17, { d: 0.45 }],
    [/pecans?/, 691, 9.2, 14, 72, 9.6, 4, 0, { d: 0.45 }],
    [/orange juice/, 45, 0.7, 10.4, 0.2, 0.2, 8.4, 1, { d: 1.04 }],
    [/\boranges?\b(?! blossom| juice| zest| food)/, 47, 0.9, 12, 0.1, 2.4, 9, 0, { e: 130 }],
    [/french fries|\bfries\b/, 312, 3.4, 41, 15, 3.8, 0.3, 210, {}],
    [/\brocket\b|arugula|rucola/, 25, 2.6, 3.7, 0.7, 1.6, 2, 27, { h: 20 }],
    [/(?<!dried )\bapricots?\b/, 48, 1.4, 11, 0.4, 2, 9, 1, { e: 35 }],
    [/cornichons?|gherkins?/, 12, 0.5, 2.4, 0.2, 1.2, 1, 1200, {}],
    [/sauerkraut/, 19, 0.9, 4.3, 0.1, 2.9, 1.8, 661, {}],
    [/kefir/, 52, 3.4, 4.5, 2, 0, 4.5, 40, { d: 1.03 }],
    [/buckwheat|\bkasha\b/, 343, 13, 72, 3.4, 10, 0, 1, { d: 0.75 }],
    [/custard(?! powder)|cr[eè]me anglaise/, 122, 3.5, 17, 4.5, 0, 15, 60, { d: 1.05 }],
    [/kulchas?/, 290, 8.5, 50, 6, 2, 3, 450, { e: 80 }],
    [/schezwan|szechuan sauce/, 180, 2, 14, 13, 3, 6, 1100, { d: 1.05 }],
    [/baby corn/, 26, 2, 5, 0.2, 2, 2, 7, {}],
    [/soya chunks|soy chunks|textured soy|\btvp\b|nutrela/, 345, 52, 33, 0.5, 13, 0, 3, { d: 0.35 }],
    [/sprinkles|hundreds and thousands|nonpareils/, 400, 0, 95, 2, 0, 90, 10, { d: 0.8 }],
    [/cornflakes|corn flakes/, 357, 7.5, 84, 0.4, 3.3, 9, 700, { d: 0.12 }],
    [/green chutney/, 40, 2.5, 7, 0.5, 3, 2, 400, { d: 1.05 }],
    [/tamarind[- ]date chutney|tamarind chutney|sweet chutney|fruit chutney|sweet tamarind/, 200, 1, 50, 0.2, 2, 40, 300, { d: 1.25 }],
    [/tamarind|kudampuli/, 239, 2.8, 62, 0.6, 5, 57, 28, { d: 1.2, e: 3 }],
    [/pomegranate molasses/, 250, 0.5, 65, 0, 0.5, 55, 20, { d: 1.35 }],
    [/salsa verde/, 30, 1, 6, 0.5, 1.5, 3, 400, { d: 1.0 }],
    [/pico de gallo|\bsalsa\b/, 36, 1.5, 7, 0.2, 1.9, 4, 430, { d: 1.0 }],
    [/guacamole/, 155, 2, 8.5, 14, 6, 1, 250, {}],
    [/chocolate syrup/, 279, 2, 65, 1, 2, 50, 72, { d: 1.3 }],
    [/rose syrup/, 300, 0, 75, 0, 0, 75, 10, { d: 1.3 }],
    [/vinegar/, 20, 0, 0.6, 0, 0, 0.4, 2, { d: 1.01 }],
    [/mirin/, 241, 0.3, 43, 0, 0, 43, 5, { d: 1.1 }],
    [/sake|shaoxing|rice wine/, 134, 0.5, 5, 0, 0, 0, 5, { d: 1.0 }],
    [/\bwine\b|marsala|sherry/, 85, 0.1, 2.6, 0, 0, 0.9, 5, { d: 1.0 }],
    [/\bbeer\b|\bale\b|\bstout\b/, 43, 0.5, 3.6, 0, 0, 0, 4, { d: 1.0 }],
    [/\brum\b|kirsch|amaretto|brandy/, 230, 0, 5, 0, 0, 4, 1, { d: 0.95 }],

    // ---- sweeteners & chocolate ----
    [/jaggery|\bgur\b|palm sugar/, 383, 0.4, 98, 0.1, 0, 85, 30, { d: 0.9 }],
    [/brown sugar/, 380, 0.1, 98, 0, 0, 97, 28, { d: 0.9 }],
    [/powdered sugar|icing sugar/, 389, 0, 100, 0, 0, 98, 2, { d: 0.5 }],
    [/sugar cubes?/, 387, 0, 100, 0, 0, 100, 1, { e: 4 }],
    [/sugar/, 387, 0, 100, 0, 0, 100, 1, { d: 0.85 }],
    [/date syrup|grape molasses|pekmez|silan/, 290, 1, 75, 0.1, 0.5, 65, 20, { d: 1.35 }],
    [/dulce de leche|cajeta/, 315, 6.8, 55, 7.4, 0, 50, 130, { d: 1.3 }],
    [/granola/, 471, 10, 64, 20, 7, 25, 25, { d: 0.45 }],
    [/hummus/, 166, 7.9, 14, 9.6, 6, 0.3, 380, { d: 1.0 }],
    [/wasabi/, 290, 2.6, 46, 11, 6, 30, 3000, { d: 1.1 }],
    [/pandan|screwpine/, 0, 0, 0, 0, 0, 0, 0, { z: 1 }],
    [/honey|maltose/, 304, 0.3, 82, 0, 0.2, 82, 4, { d: 1.42 }],
    [/maple syrup/, 260, 0, 67, 0.1, 0, 60, 12, { d: 1.32 }],
    [/\bjam\b/, 278, 0.4, 69, 0.1, 1, 49, 32, { d: 1.3 }],
    [/cocoa/, 228, 19.6, 58, 13.7, 37, 1.8, 21, { d: 0.4 }],
    [/chocolate chips/, 480, 4.2, 63, 24, 6, 55, 10, {}],
    [/chocolate/, 598, 7.8, 46, 43, 11, 24, 20, {}],
    [/candied|orange peel/, 316, 0.3, 80, 0.1, 10, 70, 30, {}],

    // ---- spices (ground, whole, blends) ----
    [/chaat masala/, 250, 9, 40, 6, 15, 2, 15000, SPICE],
    [/cajun|seasoning/, 280, 9, 50, 6, 15, 3, 9000, SPICE],
    [/gunpowder|podi/, 400, 18, 45, 15, 15, 2, 2000, { d: 0.5 }],
    [/kasuri methi/, 323, 23, 58, 6.4, 25, 0, 67, { d: 0.2 }],
    [/saffron/, 310, 11.4, 65, 5.9, 3.9, 0, 148, { d: 0.3 }],
    [/asafoetida|\bhing\b/, 297, 4, 68, 1.1, 4, 0, 40, SPICE],
    [/peppercorn|whole black pepper/, 251, 10, 64, 3.3, 25, 0.6, 20, { d: 0.5, e: 0.05 }],
    [/\bcloves?\b|whole cloves/, 274, 6, 65, 13, 34, 2.4, 277, { d: 0.5, e: 0.1 }],
    [/black cardamom/, 311, 10.8, 68, 6.7, 28, 0, 18, { e: 1 }],
    [/cardamom/, 311, 10.8, 68, 6.7, 28, 0, 18, { d: 0.5, e: 0.25 }],
    [/star anise/, 337, 18, 50, 16, 15, 0, 16, { e: 0.5 }],
    [/\banise\b|aniseed/, 337, 17.6, 50, 15.9, 14.6, 0, 16, { d: 0.45 }],
    [/cinnamon/, 247, 4, 81, 1.2, 53, 2.2, 10, { d: 0.5, e: 3, st: 3 }],
    [/bay lea/, 313, 7.6, 75, 8.4, 26, 0, 23, { e: 0.2, lf: 0.2 }],
    [/curry lea|makrut|kaffir|lime leaves/, 108, 6, 18, 1, 6, 0, 10, { e: 0.1, lf: 0.1, h: 3 }],
    [/guajillo|ancho|chile de arbol|pasilla/, 324, 12, 56, 6, 27, 10, 90, { e: 6 }],
    [/dried .*chil|kashmiri dried|byadgi|mathania/, 324, 12, 56, 6, 27, 10, 90, { e: 1, d: 0.5 }],
    [/powder|masala|spice|blend|phoron|ras el|sumac|paprika|pimentón|cayenne|turmeric|cumin|coriander seeds|ground coriander|ground ginger|jeera|ajwain|carom|fennel|saunf|nigella|kalonji|fenugreek|methi seeds|mustard seeds|nutmeg|\bmace\b|allspice|amchur|anardana|oregano|thyme|mixed herbs|berbere|filé|garam|shichimi|togarashi|aonori|za.?atar|kalpasi|stone flower|white pepper|black pepper|sichuan|timur|chil+i flakes|pepper flakes|gochugaru/, 330, 12, 55, 12, 30, 3, 60, SPICE],

    // ---- breads, flours, grains, starches ----
    [/corn tortillas?/, 218, 5.7, 45, 2.9, 6.3, 0.9, 45, { e: 26 }],
    [/tortilla chips/, 489, 7, 63, 23, 5, 1, 400, {}],
    [/tortillas?|tostadas?/, 310, 8, 52, 8, 3, 3, 600, { e: 70 }],
    [/almond flour/, 571, 21, 21, 50, 10.8, 4.4, 1, { d: 0.45 }],
    [/makki|maize|masa harina|masarepa|cornmeal|polenta/, 365, 9.4, 76, 3.9, 7.3, 0.6, 5, { d: 0.5 }],
    [/cornstarch|corn ?flour|potato starch|tapioca starch|polvilho|arrowroot/, 375, 0.3, 90, 0.1, 0.9, 0, 9, { d: 0.55 }],
    [/glutinous rice flour|mochiko|shiratamako/, 370, 6, 80, 1.4, 2.4, 0, 5, { d: 0.6 }],
    [/bhajani/, 365, 14, 62, 4.5, 10, 2, 15, { d: 0.55 }],
    [/rice flour|puttu podi/, 366, 6, 80, 1.4, 2.4, 0.1, 5, { d: 0.6 }],
    [/ragi|finger millet|nachni/, 328, 7.3, 72, 1.3, 11.5, 0.5, 11, { d: 0.5 }],
    [/besan|gram flour|sattu/, 387, 22, 58, 6.7, 10.8, 10, 64, { d: 0.45 }],
    [/whole wheat|atta|teff/, 340, 13, 72, 2.5, 10.7, 0.4, 2, { d: 0.5 }],
    [/self-raising/, 354, 10, 74, 1, 2.7, 0.3, 1000, { d: 0.53 }],
    [/\bflour\b|maida/, 364, 10, 76, 1, 2.7, 0.3, 2, { d: 0.53 }],
    [/semolina|sooji|rava|suji/, 360, 12.7, 73, 1, 3.9, 0, 1, { d: 0.7 }],
    [/bulgur|broken wheat|\bdalia\b/, 342, 12, 76, 1.3, 18, 0.4, 17, { d: 0.75 }],
    [/atti[eé]k[eé]/, 160, 0.8, 38, 0.3, 1.8, 0, 10, {}],
    [/barnyard|jhangora|sanwa|samak/, 342, 11, 65, 3.9, 10, 0, 20, { d: 0.8 }],
    [/parott?as?|porottas?/, 320, 7, 45, 12, 2, 2, 450, { e: 80 }],
    [/couscous/, 376, 12.8, 77, 0.6, 5, 0, 10, { d: 0.75 }],
    [/breadcrumbs|panko|croutons/, 395, 13, 72, 5, 4.5, 6, 730, { d: 0.45, h: 20 }],
    [/sabudana|tapioca pearls/, 358, 0.2, 88.7, 0, 0.9, 3.4, 1, { d: 0.75 }],
    [/puffed rice|murmura/, 402, 6, 90, 0.5, 1.7, 0, 3, { d: 0.1 }],
    [/poha|flattened rice/, 350, 6.6, 77, 1.2, 2, 0, 5, { d: 0.35 }],
    [/\bsev\b|farsan|mixture|boondi|bhujia|namkeen/, 550, 15, 45, 35, 8, 2, 700, { d: 0.4 }],
    [/rice cakes?|tteok/, 225, 4, 50, 0.4, 0.8, 0, 5, {}],
    [/rice paper/, 333, 0.4, 83, 0.2, 1.4, 0, 30, { e: 10 }],
    [/rice noodles|rice vermicelli|rice sticks/, 364, 6, 80, 0.6, 1.6, 0, 180, {}],
    [/glass noodles|dangmyeon|cellophane/, 351, 0.2, 86, 0.1, 0.5, 0, 10, {}],
    [/falooda/, 350, 0.3, 87, 0.1, 0.5, 0, 10, {}],
    [/gnocchi/, 150, 3.5, 32, 0.5, 2, 0.5, 400, {}],
    [/rolled oats|\boats\b|oatmeal/, 389, 16.9, 66, 6.9, 10.6, 1, 2, { d: 0.4 }],
    [/quinoa/, 368, 14.1, 64, 6.1, 7, 0, 5, { cookedAs: [120, 4.4, 21.3, 1.9, 2.8, 0.9, 7] }],
    [/udon/, 105, 2.6, 21.6, 0.4, 1, 0, 120, { e: 200 }],
    [/ramen/, 280, 9, 55, 2, 2.5, 1, 450, { e: 130 }],
    [/spaghetti|penne|fettuccine|macaroni|ditalini|trofie|linguine|rigatoni|lasagna|pasta|vermicelli|semiya|noodles/, 371, 13, 75, 1.5, 3.2, 2.7, 6, { sh: 20 }],
    [/rice/, 360, 7, 79, 0.6, 1.3, 0.1, 1, { d: 0.85 }],
    [/mandarin pancakes/, 290, 8, 55, 4, 2, 1, 300, { e: 15 }],
    [/wrappers?/, 290, 9, 58, 1.5, 2, 0, 500, { e: 8, sh: 12 }],
    [/filo|phyllo|kataifi/, 299, 7, 53, 6, 1.9, 0.8, 480, { sh: 20 }],
    [/puff pastry/, 551, 7, 45, 38, 1.5, 1, 250, {}],
    [/savoiardi|ladyfingers/, 390, 8, 79, 4, 1, 40, 150, {}],
    [/digestive|graham/, 480, 7, 63, 21, 3.5, 20, 450, {}],
    [/saltine|crackers/, 420, 9, 72, 9, 3, 1, 900, { e: 3 }],
    [/hash browns?/, 265, 2.5, 35, 13, 3, 0.5, 400, { e: 50 }],
    [/puris?\b|golgappa/, 500, 7, 55, 28, 2, 1, 400, { e: 3 }],
    [/baatis?/, 400, 9, 55, 16, 5, 1, 300, { e: 80 }],
    [/rotis?\b|parathas?|chapati|naan/, 300, 9, 50, 7, 5, 1, 400, { e: 40 }],
    [/\bpitas?\b|flatbreads?/, 275, 9, 56, 1.2, 2.2, 1, 540, { e: 60 }],
    [/small baguettes?/, 270, 10, 52, 2, 2.5, 3, 600, { e: 150 }],
    [/baguette/, 270, 10, 52, 2, 2.5, 3, 600, { e: 250, sl: 25 }],
    [/\bpav\b|\bbuns?\b|bread|ciabatta|\btoast\b/, 265, 9, 49, 3.2, 2.7, 5, 490, { e: 40, sl: 30 }],
    [/idli\/dosa batter|dosa batter|idli batter/, 135, 4.5, 28, 0.6, 2, 0, 150, { d: 1.05 }],

    // ---- pulses & legumes ----
    [/sprout/, 45, 4, 7, 0.3, 2.2, 3, 6, {}],
    [/chickpeas?|chana(?! dal)|garbanzo|kabuli|ragda|chole/, 378, 20.5, 63, 6, 12, 10.7, 24, { cookedAs: [164, 8.9, 27, 2.6, 7.6, 4.8, 240], can: 240 }],
    [/baked beans/, 94, 4.8, 21, 0.4, 4, 8, 422, {}],
    [/kinema|natto|axone|akhuni|tungrymbai/, 211, 19.4, 12.7, 11, 5.4, 4.9, 7, {}],
    [/hyacinth|avarekalu|avarekai|lablab|sem phali/, 113, 8, 20, 0.5, 5, 1, 8, {}],
    [/cranberry beans|borlotti|roman beans/, 335, 23, 60, 1.2, 25, 2, 6, { cookedAs: [140, 9.3, 24.5, 0.5, 10, 0.3, 240], can: 240 }],
    [/\bsoybeans?\b(?! paste)|soya beans?/, 446, 36.5, 30, 20, 9.3, 7.3, 2, { cookedAs: [173, 16.6, 9.9, 9, 6, 3, 1] }],
    [/adzuki|azuki/, 329, 19.9, 63, 0.5, 12.7, 0, 5, { cookedAs: [128, 7.5, 24.8, 0.1, 7.3, 0, 8] }],
    [/(?<!dried |split )fava beans|broad beans|\bhabas\b/, 88, 7.9, 17.6, 0.7, 5.4, 9, 25, {}],
    [/hominy|ma[ií]z blanco|\bmote\b/, 360, 7.5, 75, 4, 9, 0.6, 10, { cookedAs: [72, 1.5, 14, 0.9, 2.4, 0.1, 210], can: 240 }],
    [/kidney|rajma|cannellini|pinto|black beans|white beans|refried|hominy|pozole|fava|\bful\b/, 333, 23.6, 60, 0.8, 24.9, 2.2, 12, { cookedAs: [127, 8.7, 22.8, 0.5, 6.4, 0.3, 300], can: 240 }],
    [/vatana|dried white peas|dried peas/, 341, 24.6, 60, 1.2, 25.5, 8, 15, {}],
    [/papads?|papadums?|appalams?|poppadoms?/, 371, 25.6, 60, 3.3, 18.6, 0, 1745, { e: 12 }],
    [/urad|moong|mung|toor|arhar|masoor|lentil|chana dal|\bdals?\b|\bmoth\b|matki/, 345, 24, 60, 1.5, 15, 2, 15, { d: 0.85 }],
    [/split peas|yellow peas|matar dal/, 341, 24.6, 60, 1.2, 25.5, 8, 15, { d: 0.85 }],
    [/green peas|frozen peas|(?<!eyed )\bpeas\b/, 81, 5.4, 14.5, 0.4, 5.7, 5.7, 5, {}],

    // ---- nuts & seeds ----
    [/peanuts?|groundnut/, 567, 26, 16, 49, 8.5, 4, 18, { d: 0.6 }],
    [/cashew/, 553, 18, 30, 44, 3.3, 6, 12, { d: 0.55, e: 1.5 }],
    [/almonds?/, 579, 21, 22, 50, 12.5, 4.4, 1, { d: 0.55, e: 1.2 }],
    [/pistachio/, 560, 20, 28, 45, 10.6, 7.7, 1, { d: 0.55 }],
    [/walnut/, 654, 15, 14, 65, 6.7, 2.6, 2, { d: 0.45 }],
    [/pine nuts/, 673, 13.7, 13, 68, 3.7, 3.6, 2, { d: 0.6 }],
    [/chestnuts?(?! mushroom)/, 131, 2, 28, 1.4, 5, 0, 2, {}],
    [/tahini/, 595, 17, 21, 54, 9.3, 0.5, 115, { d: 1.05 }],
    [/sesame/, 573, 17.7, 23, 50, 11.8, 0.3, 11, { d: 0.6 }],
    [/poppy|posto|\bkhus\b/, 525, 18, 28, 42, 19.5, 3, 26, { d: 0.6 }],
    [/melon seeds|magaz/, 557, 28, 15, 47, 4, 0, 10, { d: 0.55 }],
    [/pumpkin seeds|pepitas/, 559, 30, 10.7, 49, 6, 1.4, 7, { d: 0.55 }],
    [/basil seeds|sabja|\bchia\b/, 450, 20, 42, 25, 38, 0, 10, { d: 0.65 }],
    [/desiccated|dry coconut|dried coconut/, 660, 6.9, 24, 64.5, 16.3, 7.4, 37, { d: 0.35 }],
    [/coconut/, 354, 3.3, 15, 33.5, 9, 6.2, 20, { d: 0.45 }],

    // extra pantry items
    [/kokum/, 60, 1, 14, 0.5, 4, 8, 20, { e: 2 }],
    [/jowar|sorghum|bajra|millet flour/, 349, 10.4, 72.6, 1.9, 6.7, 1.5, 6, { d: 0.5 }],
    [/lotus stem|lotus root|nadru|kamal kakdi/, 74, 2.6, 17, 0.1, 4.9, 0.5, 40, {}],
    [/banana flower|banana blossom|\bmocha\b/, 51, 1.6, 9.9, 0.5, 5.7, 0, 20, { e: 300 }],
    [/\bkhar\b|slaked lime|\bchuna\b/, 0, 0, 0, 0, 0, 0, 30, { d: 1 }],
    [/umeboshi|pickled plum/, 33, 0.9, 8.6, 0.7, 3.6, 0, 8700, { e: 10 }],
    [/shortcrust|pie crust|pastry discs|empanada pastry/, 500, 6, 55, 28, 2, 3, 400, { e: 40 }],
    [/meringue/, 393, 5.5, 92, 0.2, 0, 92, 110, { e: 12 }],
    [/ivy gourd|tindora|tendli|dondakaya|kundru/, 18, 1.2, 3.1, 0.1, 1.6, 1.5, 2, {}],
    [/\bker\b|sangri|\bkair\b/, 280, 12, 50, 3, 30, 5, 30, {}],
    [/gongura|sorrel|colocasia|arbi leaves|taro leaves|chamakura|amaranth|thotakura|gundruk/, 42, 4, 7, 0.6, 3.5, 0, 10, { b: 200, h: 30, lf: 15 }],
    [/horse gram|ulava|kulthi|kollu|alasanda|lobia|black-eyed|cowpea/, 336, 22, 57, 0.6, 11, 2, 12, { cookedAs: [116, 7.7, 21, 0.5, 6.5, 1, 4], d: 0.85 }],
    [/ash gourd|bottle gourd|lauki|snake gourd|ridge gourd|chayote|chow chow|winter melon/, 14, 0.5, 3.2, 0.1, 1.5, 1.5, 2, { e: 400 }],
    [/bitter gourd|karela/, 17, 1, 3.7, 0.2, 2.8, 0, 5, { e: 100 }],
    [/dried (apricots?|figs?)|prunes|dried fruits?|barberr/, 241, 3.4, 63, 0.5, 7.3, 53, 10, { d: 0.6 }],
    [/\bbadi\b|\bbori\b|\bwadi\b/, 345, 24, 60, 1.5, 15, 2, 400, { e: 5 }],

    // vegetables whose names would otherwise match meat words
    [/moringa|drumstick pods|murungakkai/, 37, 2.1, 8.5, 0.2, 3.2, 0, 42, { e: 30 }],

    // ---- meat & fish (non-veg) ----
    [/carcass/, 200, 15, 0, 15, 0, 0, 70, { f: 0.15 }],
    [/whole duck|\bduck\b/, 250, 10, 0, 23, 0, 0, 60, { e: 2000 }],
    [/whole chicken|chicken (pieces|legs|thighs and|drumsticks)|drumstick/, 160, 13.5, 0, 11.5, 0, 0, 70, {}],
    [/chicken breast|\bbreasts?\b/, 120, 22.5, 0, 2.6, 0, 0, 45, { e: 200 }],
    [/ground chicken|chicken mince/, 143, 17.4, 0, 8.1, 0, 0, 60, {}],
    [/chicken/, 150, 19, 0, 8, 0, 0, 80, { e: 150 }],
    [/ground (lamb|mutton)|(lamb|mutton) mince/, 282, 16.6, 0, 23.4, 0, 0, 59, {}],
    [/mutton|lamb|\bgoat\b/, 200, 16, 0, 15, 0, 0, 65, {}],
    [/guanciale|pancetta|lardons|bacon|pork belly|streaky/, 520, 11, 0.5, 52, 0, 0, 900, { sl: 15 }],
    [/vegetarian sausages?|veggie sausages?/, 200, 15, 8, 12, 3, 1, 600, { e: 50 }],
    [/sausage|andouille/, 300, 13, 3, 26, 0, 1, 1000, { e: 60 }],
    [/ground pork|pork mince/, 263, 16.9, 0, 21, 0, 0, 56, {}],
    [/pork/, 190, 19, 0, 12, 0, 0, 60, { e: 150, sl: 120 }],
    [/rabbit/, 136, 20, 0, 5.5, 0, 0, 41, {}],
    [/octopus/, 82, 14.9, 2.2, 1, 0, 0, 230, {}],
    [/crab/, 30, 6, 0, 0.4, 0, 0, 100, {}],
    [/dried shrimp/, 264, 59, 2, 2.4, 0, 0, 3000, { d: 0.5 }],
    [/shrimp paste|terasi|belacan/, 200, 30, 10, 3, 0, 0, 7000, { d: 1.2 }],
    [/prawns?|shrimps?/, 85, 20, 0.2, 0.5, 0, 0, 119, { e: 25 }],
    [/anchov/, 210, 29, 0, 9.7, 0, 0, 3670, { e: 4 }],
    [/bonito/, 300, 70, 0, 2, 0, 0, 500, { h: 5 }],
    [/fish cakes?|eomuk/, 120, 10, 12, 3, 0, 3, 600, {}],
    [/salmon|tuna|yellowtail|sashimi|sushi-grade/, 170, 21, 0, 9, 0, 0, 50, {}],
    [/bombil|bombay duck/, 90, 15, 0, 1.5, 0, 0, 70, { e: 50 }],
    [/fish|\bcod\b|haddock|sea bass|halibut|\bsole\b|mahi|snapper|kingfish|pomfret|\bseer\b|rohu|karimeen|pearl spot/, 90, 19, 0, 1.5, 0, 0, 70, { e: 200 }],

    // ---- vegetables ----
    [/mixed vegetables|mixed veg\b|^vegetables/, 50, 2.5, 9, 0.3, 3, 3, 30, {}],
    [/kimchi/, 15, 1.1, 2.4, 0.5, 1.6, 1.1, 500, {}],
    [/ginger.*garlic|garlic.*ginger/, 115, 4, 25, 0.6, 2, 1.2, 15, { d: 1.0 }],
    [/ginger.*chil/, 70, 2, 15, 0.5, 2, 3, 10, { d: 1.0 }],
    [/pickled .*ginger|\bgari\b/, 40, 0.3, 9, 0.1, 1, 7, 800, {}],
    [/ginger|galangal/, 80, 1.8, 18, 0.8, 2, 1.7, 13, { d: 0.9, e: 10, sl: 3 }],
    [/chives/, 30, 3.3, 4.4, 0.7, 2.5, 1.9, 3, HERB],
    [/garlic/, 149, 6.4, 33, 0.5, 2.1, 1, 17, { e: 5, hd: 45, d: 0.6 }],
    [/scallions?|spring onions?|green onions?/, 32, 1.8, 7.3, 0.2, 2.6, 2.3, 16, { e: 15 }],
    [/shallots?/, 72, 2.5, 16.8, 0.1, 3.2, 7.9, 12, { e: 30 }],
    [/pearl onions?/, 40, 1.1, 9.3, 0.1, 1.7, 4.2, 4, { e: 10 }],
    [/small onion/, 40, 1.1, 9.3, 0.1, 1.7, 4.2, 4, { e: 70 }],
    [/large onion|sweet onion/, 40, 1.1, 9.3, 0.1, 1.7, 4.2, 4, { e: 160 }],
    [/onions?/, 40, 1.1, 9.3, 0.1, 1.7, 4.2, 4, { e: 110 }],
    [/tomato paste|tomato purée|tomato puree/, 82, 4.3, 19, 0.5, 4.1, 12, 59, { d: 1.1 }],
    [/passata|canned|crushed tomatoes|chopped tomatoes|san marzano/, 32, 1.6, 7, 0.3, 1.9, 4, 150, {}],
    [/cherry tomatoes/, 18, 0.9, 3.9, 0.2, 1.2, 2.6, 5, { e: 15 }],
    [/plum tomatoes/, 18, 0.9, 3.9, 0.2, 1.2, 2.6, 5, { e: 60 }],
    [/tomato/, 18, 0.9, 3.9, 0.2, 1.2, 2.6, 5, { e: 120 }],
    [/sweet potato|\byam\b/, 86, 1.6, 20, 0.1, 3, 4.2, 55, { e: 200 }],
    [/potato chips/, 536, 7, 53, 35, 4.4, 0.3, 525, {}],
    [/baby potatoes/, 77, 2, 17.5, 0.1, 2.2, 0.8, 6, { e: 40 }],
    [/potato/, 77, 2, 17.5, 0.1, 2.2, 0.8, 6, { e: 170 }],
    [/cassava/, 160, 1.4, 38, 0.3, 1.8, 1.7, 14, {}],
    [/green plantains?|green bananas?|matoke|matooke/, 122, 1.3, 32, 0.4, 2.3, 3, 4, { e: 180 }],
    [/plantain|raw banana|nendran/, 122, 1.3, 32, 0.4, 2.3, 15, 4, { e: 180 }],
    [/banana/, 89, 1.1, 23, 0.3, 2.6, 12, 1, { e: 120 }],
    [/carrots?/, 41, 0.9, 9.6, 0.2, 2.8, 4.7, 69, { e: 60 }],
    [/beet/, 43, 1.6, 9.6, 0.2, 2.8, 6.8, 78, { e: 120 }],
    [/korean radish/, 18, 0.6, 4.1, 0.1, 1.6, 2.5, 21, { e: 800 }],
    [/turnips?/, 28, 0.9, 6.4, 0.1, 1.8, 3.8, 67, { e: 120 }],
    [/radish|daikon/, 18, 0.6, 4.1, 0.1, 1.6, 2.5, 21, { e: 15 }],
    [/cucumber/, 15, 0.7, 3.6, 0.1, 0.5, 1.7, 2, { e: 200 }],
    [/zucchini|courgette/, 17, 1.2, 3.1, 0.3, 1, 2.5, 8, { e: 200 }],
    [/baby eggplant/, 25, 1, 5.9, 0.2, 3, 3.5, 2, { e: 60 }],
    [/large eggplant|bharta/, 25, 1, 5.9, 0.2, 3, 3.5, 2, { e: 450 }],
    [/eggplant|brinjal|baingan|garden eggs|aubergine/, 25, 1, 5.9, 0.2, 3, 3.5, 2, { e: 300 }],
    [/okra|bhindi/, 33, 1.9, 7.5, 0.2, 3.2, 1.5, 7, {}],
    [/green beans|long beans|flat beans|papdi|french beans|flat green/, 31, 1.8, 7, 0.2, 2.7, 3.3, 6, { e: 5 }],
    [/poblano/, 20, 0.9, 4.6, 0.2, 1.7, 2.4, 3, { e: 120 }],
    [/padr[oó]n|shishito/, 20, 1, 4.6, 0.2, 1.7, 2.4, 3, { e: 8 }],
    [/bell peppers?|capsicum|green peppers?|red peppers?|\bsivri\b/, 26, 1, 6, 0.3, 2, 4.2, 4, { e: 150 }],
    [/large mild green chil/, 40, 2, 9.5, 0.2, 1.5, 5, 7, { e: 20 }],
    [/scotch bonnet|habanero/, 40, 1.9, 8.8, 0.4, 1.5, 5, 9, { e: 8 }],
    [/jalape/, 29, 0.9, 6.5, 0.4, 2.8, 4, 3, { e: 15 }],
    [/serrano|chil|ají|\baji\b|bird/, 40, 2, 9.5, 0.2, 1.5, 5, 7, { e: 4 }],
    [/sweet corn|corn kernels|corn on the cob|corn cobs?|choclo|cancha/, 86, 3.3, 19, 1.4, 2, 6.3, 15, { e: 100, h: 30 }],
    [/dried (shiitake|mushrooms)/, 296, 9.6, 75, 1, 11.5, 2.2, 13, { e: 3 }],
    [/portobello/, 22, 3.1, 3.3, 0.3, 1, 2, 5, { e: 80 }],
    [/mushroom|shiitake|cremini/, 22, 3.1, 3.3, 0.3, 1, 2, 5, { e: 15 }],
    [/butternut|squash|pumpkin/, 30, 1, 7.5, 0.1, 1.2, 2.8, 2, {}],
    [/broccoli|kai lan|choy sum|bok choy|pak choi/, 34, 2.8, 6.6, 0.4, 2.6, 1.7, 33, {}],
    [/cauliflower/, 25, 1.9, 5, 0.3, 2, 1.9, 30, { hd: 600 }],
    [/cabbage wedge/, 25, 1.3, 5.8, 0.1, 2.5, 3.2, 18, { e: 150 }],
    [/cabbage/, 25, 1.3, 5.8, 0.1, 2.5, 3.2, 18, { e: 700, hd: 900 }],
    [/lettuce|romaine|perilla/, 15, 1.4, 2.9, 0.2, 1.3, 0.8, 28, { hd: 400, lf: 10 }],
    [/methi|fenugreek leaves/, 49, 4.4, 6, 0.9, 1.1, 0, 76, { b: 100, h: 20 }],
    [/spinach|palak|\bkale\b|greens|sarson|bathua/, 23, 2.9, 3.6, 0.4, 2.2, 0.4, 79, { b: 250, h: 30 }],
    [/leek/, 61, 1.5, 14, 0.3, 1.8, 3.9, 20, { e: 150 }],
    [/celery/, 16, 0.7, 3, 0.2, 1.6, 1.3, 80, { st: 40, e: 40 }],
    [/artichoke/, 45, 3, 9, 0.2, 5, 1, 300, {}],
    [/avocado/, 160, 2, 8.5, 14.7, 6.7, 0.7, 7, { e: 150 }],
    [/green papaya|raw papaya|\bpapaya\b/, 39, 0.6, 9.8, 0.1, 1.7, 5.9, 3, {}],
    [/bamboo|menma/, 27, 2.6, 5.2, 0.3, 2.2, 3, 400, {}],
    [/olives?/, 145, 1, 3.8, 15.3, 3.3, 0.5, 1550, { e: 4 }],
    [/capers/, 23, 2.4, 4.9, 0.9, 3.2, 0.4, 2350, { d: 0.6 }],
    [/vine leaves/, 93, 5.6, 17, 2.1, 11, 6, 2850, { e: 4 }],
    [/nori|kombu|wakame|seaweed|kelp/, 35, 5.8, 5, 0.3, 0.3, 0.5, 400, { sh: 3 }],
    [/cilantro|coriander lea|parsley|mint|\bdill\b|basil|shiso|\bsage\b|rosemary|herbs|lemongrass|tarragon/, 30, 2.5, 5, 0.5, 3, 0.5, 30, HERB],

    // ---- fruit ----
    [/lemon juice|lime juice/, 22, 0.4, 6.9, 0.2, 0.3, 2.5, 1, { d: 1.03 }],
    [/pineapple juice/, 53, 0.4, 12.9, 0.1, 0.2, 10, 2, { d: 1.04 }],
    [/lemons?|lemon wedge/, 29, 1.1, 9.3, 0.3, 2.8, 2.5, 2, { e: 60 }],
    [/\blimes?\b/, 30, 0.7, 10.5, 0.2, 2.8, 1.7, 2, { e: 45 }],
    [/raw mango|green mango/, 60, 0.8, 15, 0.4, 1.6, 11, 1, { e: 200 }],
    [/mango pulp/, 75, 0.5, 19, 0.2, 1, 17, 5, {}],
    [/mango/, 60, 0.8, 15, 0.4, 1.6, 13.7, 1, { e: 200 }],
    [/pineapple/, 50, 0.5, 13, 0.1, 1.4, 10, 1, {}],
    [/pomegranate/, 83, 1.7, 18.7, 1.2, 4, 13.7, 3, { e: 150, d: 0.6 }],
    [/\bdates\b/, 282, 2.5, 75, 0.4, 8, 63, 2, {}],
    [/raisins|sultanas/, 299, 3.1, 79, 0.5, 3.7, 59, 11, { d: 0.6 }],
    [/apples?/, 52, 0.3, 13.8, 0.2, 2.4, 10.4, 1, { e: 180 }],
    [/\bpears?\b/, 57, 0.4, 15, 0.1, 3.1, 9.8, 1, { e: 180 }],
    [/watermelon|cantaloupe|musk ?melon/, 30, 0.6, 7.6, 0.2, 0.4, 6.2, 1, {}],
    [/\bcherries\b|\bcherry\b(?! tomato)/, 63, 1.1, 16, 0.2, 2.1, 12.8, 0, { e: 8 }],
    [/\bpeach(es)?\b|nectarines?/, 39, 0.9, 9.5, 0.3, 1.5, 8.4, 0, { e: 150 }],
    [/a[cç]a[ií]/, 70, 1, 4, 5, 3, 0, 7, {}],
    [/young (green )?jackfruit|green jackfruit|raw jackfruit|kathal/, 40, 1.5, 9, 0.3, 4, 0, 200, {}],
    [/jackfruit/, 95, 1.7, 23, 0.6, 1.5, 19, 2, {}],
    [/purple corn|ma[ií]z morado/, 360, 9, 74, 4, 7, 1, 5, { f: 0.1 }],
    [/berries|strawberr|mixed fruit|passion|kiwi|grapes/, 45, 0.8, 11, 0.3, 2.5, 7, 1, {}],
  ];

  const UNIT_ML = { tsp: 5, tbsp: 15, cup: 240, ml: 1, l: 1000 };
  const norm = (s) => String(s || '').toLowerCase().replace(/[’']/g, "'");

  // "chicken or vegetable stock" -> "chicken stock"; "ghee or oil" -> "ghee"; "almonds and pistachios" -> "almonds"
  function candidates(name) {
    const full = norm(name);
    const noParen = full.replace(/\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
    const parts = noParen.split(/\s+or\s+/);
    let first = parts[0].split(/,| and /)[0].trim();
    if (parts.length > 1) {
      const after = parts[1].split(/,| and /)[0].trim().split(' ');
      if (first.split(' ').length === 1 && after.length >= 2) first = first + ' ' + after[after.length - 1];
    }
    return [first, noParen, full];
  }

  function find(name) {
    for (const s of candidates(name)) {
      for (const row of T) if (row[0].test(s)) return { row, cooked: /cooked|boiled|canned|refried|steamed|ragda|\bchole\b/.test(s) };
    }
    return null;
  }

  // grams of one ingredient line (for the recipe's own number of servings)
  function grams(q, u, row) {
    const o = row[8];
    if (u === 'g') return q;
    if (u === 'kg') return q * 1000;
    if (UNIT_ML[u]) return q * UNIT_ML[u] * (o.d || 1);
    const per = {
      '': o.e || 50, piece: o.e || 30, clove: 5, pinch: 0.35, drop: 0.05, sprig: 1, scoop: o.e || 65, fillet: 150,
      handful: o.h || 30, bunch: o.b || 50, head: o.hd || 500, leaf: o.lf || 0.5, stick: o.st || o.e || 3, stalk: o.st || 40,
      slice: o.sl || 30, sheet: o.sh || 10, can: o.can || 400,
    }[u || ''];
    return q * (per == null ? 30 : per);
  }

  const KEYS = ['kcal', 'protein', 'carbs', 'fat', 'fiber', 'sugar', 'sodium'];

  function compute(d) {
    const tot = { kcal: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sugar: 0, sodium: 0 };
    let known = 0, counted = 0, grams_ = 0; const miss = [];
    const serves = d.serves || 1;
    const boils = (d.items || []).some((i) => /\brice\b|pasta|spaghetti|penne|fettuccine|macaroni|noodles|linguine|rigatoni/.test(norm(i[2])) && !/flour|vinegar|paper|cooked/.test(norm(i[2])));
    for (const it of d.items || []) {
      const [q, u, name, note] = it;
      const nm = norm(name);
      const m = find(name);
      if (!m) { if (q != null) { counted++; miss.push(name); } continue; }
      const row = m.row, o = row[8];
      if (o.z) continue;
      const isFat = /\boil\b|ghee|\blard\b|shortening/.test(nm) && !/peanut butter/.test(nm);
      const isSalt = row[7] >= 30000;
      let g;
      if (q == null) {
        // "to taste": salt still adds sodium; frying oil counts what the food soaks up
        if (isSalt) g = 0.9 * serves;
        else if (isFat && /fry|frying/i.test((note || '') + ' ' + nm)) g = 14 * serves;
        else continue;
      } else {
        g = grams(q, u, row);
        if (isFat) {
          const ml = u === 'l' ? q * 1000 : u === 'ml' ? q : u === 'cup' ? q * 240 : 0;
          if (ml >= 400 || /deep[- ]?fry|for frying|to fry|for shallow/i.test(note || '')) g *= 0.1; // only ~10% of frying oil ends up in the food
          else if (ml >= 200 && (/reuse|confit|fry/i.test(note || '') || (d.methods || []).some((x) => x === 'deep-fry' || x === 'saute'))) g *= 0.25; // shallow frying: about a quarter is absorbed
        }
        if (isSalt && u === 'g' && q >= 40) g *= 0.1; // brining salt is rinsed away
        if (isSalt && /pasta water|for boiling|for the water|cooking water/i.test(note || '')) g *= 0.15;
        // a tablespoon or more of salt in a rice/pasta dish is mostly for the boiling water, which is drained
        else if (isSalt && UNIT_ML[u] && q * UNIT_ML[u] >= 15 && boils) g *= 0.3;
        counted++; known++;
      }
      g *= o.f || 1;
      let vals = row.slice(1, 8);
      if (o.cookedAs && (m.cooked || u === 'can')) vals = o.cookedAs;
      else if (m.cooked && /rice|noodle|pasta|spaghetti|udon/.test(nm) && !/flour|vinegar|paper|cake/.test(nm)) vals = vals.map((v, i) => (i === 6 ? v : v * 0.36));
      KEYS.forEach((k, i) => { tot[k] += (vals[i] * g) / 100; });
      if (!/water|\bice\b|stock|broth/.test(nm)) grams_ += g;
    }
    const per = {}; KEYS.forEach((k) => { per[k] = tot[k] / serves; });
    const p = per, flags = [];
    if (p.protein >= 15) flags.push('p15');
    if (p.protein >= 25) flags.push('p25');
    if (p.kcal > 0 && (p.protein * 4) / p.kcal >= 0.2) flags.push('pdense');
    if (p.fiber >= 6) flags.push('fiber');
    if (p.kcal <= 350) flags.push('kcal350');
    if (p.kcal <= 500) flags.push('kcal500');
    if (p.carbs <= 20) flags.push('lowcarb');
    if (p.fat <= 10) flags.push('lowfat');
    if (p.sugar <= 8) flags.push('lowsugar');
    if (p.sodium <= 600) flags.push('lowsodium');
    return { per, total: tot, serves, weight: grams_ / serves, cover: counted ? known / counted : 1, miss, flags };
  }

  // a home-page situation tile for protein
  if (DD.SITUATIONS && !DD.SITUATIONS.some((s) => s.t === 'High protein')) {
    const at = DD.SITUATIONS.findIndex((s) => /light/i.test(s.t));
    DD.SITUATIONS.splice(at >= 0 ? at + 1 : DD.SITUATIONS.length, 0, { icon: '💪', t: 'High protein', s: '15 g+ protein a serving', q: 'nut=p15&sort=protein' });
  }

  DD.nutrition = function (d) {
    if (!d._nut || d._nutItems !== d.items) { d._nut = compute(d); d._nutItems = d.items; }
    return d._nut;
  };
  DD.NUT = {
    keys: KEYS,
    // adult daily reference values (2,000 kcal diet)
    dv: { kcal: 2000, protein: 50, carbs: 275, fat: 78, fiber: 28, sugar: 50, sodium: 2300 },
    label: { kcal: 'Calories', protein: 'Protein', carbs: 'Carbs', fat: 'Fat', fiber: 'Fibre', sugar: 'Sugar', sodium: 'Sodium' },
    icon: { kcal: '🔥', protein: '💪', carbs: '🌾', fat: '🧈', fiber: '🥦', sugar: '🍬', sodium: '🧂' },
    unit: { kcal: 'kcal', protein: 'g', carbs: 'g', fat: 'g', fiber: 'g', sugar: 'g', sodium: 'mg' },
    flags: {
      p15: '💪 Protein 15 g+', p25: '💪 Protein 25 g+', pdense: '🏋️ Protein-dense (20%+ of calories)', fiber: '🥦 High fibre (6 g+)',
      kcal350: '🪶 Under 350 kcal', kcal500: '⚖️ Under 500 kcal', lowcarb: '🥑 Low carb (under 20 g)', lowfat: '💧 Low fat (under 10 g)',
      lowsugar: '🍏 Low sugar (under 8 g)', lowsodium: '🧂 Low sodium (under 600 mg)',
    },
    fmt(k, v) { return k === 'kcal' || k === 'sodium' ? String(Math.round(v)) : v < 10 ? String(Math.round(v * 10) / 10) : String(Math.round(v)); },
    find,
  };
})();
