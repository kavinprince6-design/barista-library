/* Barista — built-in content (Arabic + English). A(ar,en) = bilingual text. */
const A=(ar,en)=>({ar,en});
const IMG=id=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=75`;

const TYPES={
 specialty:A("قهوة مختصة","Specialty coffee"),espresso:A("إسبريسو","Espresso"),hot:A("مشروب ساخن","Hot drink"),
 cold:A("مشروب بارد","Cold drink"),mocktail:A("موكتيل","Mocktail"),juice:A("عصير وسموذي","Juice & smoothie"),
 cocktail:A("كوكتيل","Cocktail"),other:A("أخرى","Other")};
const TYPE_ICONS={specialty:"☕",espresso:"☕",hot:"🍵",cold:"🧊",mocktail:"🍹",cocktail:"🍸",juice:"🥤",other:"🥛"};
const UNITS_LBL={g:A("غ","g"),ml:A("مل","ml"),pcs:A("قطعة","pcs"),leaf:A("ورقة","leaves"),pinch:A("رشة","pinch"),"":A("","")};

const ESP={dose:18,yield:36,time:A("25–30 ث","25–30 s"),temp:"93°C",pressure:"9 bar",grind:A("ناعم","Fine")};
const LIB=[
{id:"lib-espresso",img:"1559496417-e7f25cb247f3",type:"espresso",size:40,name:A("إسبريسو","Espresso (double)"),
 ing:[[A("بن مختص مطحون ناعم","Fine-ground specialty coffee"),18,"g"],[A("ماء مفلتر (من الماكينة)","Filtered water (from the machine)"),null,""]],ext:{...ESP},
 steps:A(["نظّف السلة وجففها جيدًا.","زن 18 غ من البن المطحون حديثًا.","وزّع البن بالتساوي ثم ادكّه بضغط ثابت ومستوٍ.","اشطف رأس المجموعة لثانيتين لضبط الحرارة.","ركّب الذراع وابدأ الاستخلاص فورًا مع الميزان والمؤقت.","أوقف عند 36 غ تقريبًا في الكوب وتذوّق."],
  ["Clean and dry the basket.","Weigh 18 g of freshly ground coffee.","Distribute evenly, then tamp level with steady pressure.","Purge the group head for 2 seconds.","Lock in the portafilter and start the shot immediately with scale and timer.","Stop at about 36 g in the cup and taste."]),
 notes:A("إذا كان الطعم حامضًا والاستخلاص سريعًا: اطحن أنعم. إذا كان مرًا وبطيئًا: اطحن أخشن.","Sour and fast: grind finer. Bitter and slow: grind coarser.")},
{id:"lib-americano",img:"1551030173-122aabc4489c",type:"espresso",size:240,name:A("أمريكانو","Americano"),
 ing:[[A("إسبريسو دبل","Double espresso"),36,"g"],[A("ماء ساخن (85–90°م)","Hot water (85–90°C)"),200,"ml"]],ext:{...ESP},
 steps:A(["سخّن الكوب.","صب الماء الساخن في الكوب أولًا.","استخلص الإسبريسو مباشرة فوق الماء للحفاظ على الكريما.","قدّمه فورًا."],["Preheat the cup.","Pour the hot water first.","Pull the espresso directly over the water to keep the crema.","Serve immediately."]),
 notes:A("يمكن تعديل الماء بين 150 و250 مل حسب القوة المطلوبة.","Adjust the water between 150 and 250 ml to taste.")},
{id:"lib-cappuccino",img:"1572442388796-11668a67e53d",type:"espresso",size:180,name:A("كابتشينو","Cappuccino"),
 ing:[[A("إسبريسو دبل","Double espresso"),36,"g"],[A("حليب طازج كامل الدسم","Fresh whole milk"),130,"ml"]],ext:{...ESP},
 steps:A(["استخلص الإسبريسو في كوب 180 مل مُسخّن.","بخّر الحليب حتى 60–65°م مع إدخال هواء كافٍ لرغوة بسماكة 1.5–2 سم.","اطرق الإبريق ولفّه لتلميع الرغوة.","اسكب الحليب وارسم شكل اللاتيه آرت."],["Pull the espresso into a preheated 180 ml cup.","Steam the milk to 60–65°C with enough air for 1.5–2 cm of foam.","Tap and swirl the pitcher to polish the foam.","Pour and finish with latte art."]),
 notes:A("الكابتشينو يحتاج رغوة أكثر من اللاتيه.","A cappuccino needs more foam than a latte.")},
{id:"lib-latte",img:"1541167760496-1628856ab772",type:"espresso",size:300,name:A("لاتيه","Caffè latte"),
 ing:[[A("إسبريسو دبل","Double espresso"),36,"g"],[A("حليب طازج","Fresh milk"),230,"ml"]],ext:{...ESP},
 steps:A(["استخلص الإسبريسو في كوب 300 مل.","بخّر الحليب حتى 60–65°م مع رغوة ناعمة رقيقة (حوالي 1 سم).","اسكب الحليب ببطء ثم ارسم الشكل."],["Pull the espresso into a 300 ml cup.","Steam the milk to 60–65°C with thin, silky foam (about 1 cm).","Pour slowly, then draw the pattern."]),
 notes:A("لنكهات إضافية أضف 15–20 مل شراب (فانيلا، كراميل) قبل الحليب.","For flavoured lattes add 15–20 ml syrup (vanilla, caramel) before the milk.")},
{id:"lib-flatwhite",img:"1485808191679-5f86510681a2",type:"espresso",size:160,name:A("فلات وايت","Flat white"),
 ing:[[A("ريستريتو دبل","Double ristretto"),30,"g"],[A("حليب طازج","Fresh milk"),120,"ml"]],ext:{dose:18,yield:30,time:A("20–25 ث","20–25 s"),temp:"93°C",pressure:"9 bar",grind:A("ناعم","Fine")},
 steps:A(["استخلص ريستريتو: 18 غ بن ← 30 غ ناتج.","بخّر الحليب برغوة دقيقة جدًا ولامعة (أقل من 1 سم).","اسكب بسرعة ثابتة للحصول على سطح مسطح وشكل بسيط."],["Pull a ristretto: 18 g in → 30 g out.","Steam the milk with very fine, glossy microfoam (under 1 cm).","Pour at a steady speed for a flat surface and a simple pattern."]),
 notes:A("طعم قهوة أوضح من اللاتيه بسبب قلة الحليب.","Stronger coffee flavour than a latte because of less milk.")},
{id:"lib-cortado",img:"1517487881594-2787fef5ebf7",type:"espresso",size:120,name:A("كورتادو","Cortado"),
 ing:[[A("إسبريسو دبل","Double espresso"),36,"g"],[A("حليب مبخّر","Steamed milk"),60,"ml"]],ext:{...ESP},
 steps:A(["استخلص الإسبريسو في كوب زجاجي صغير.","بخّر الحليب برغوة قليلة جدًا.","أضف الحليب بنسبة 1:1 تقريبًا مع الإسبريسو."],["Pull the espresso into a small glass.","Steam the milk with very little foam.","Add milk at roughly 1:1 with the espresso."]),notes:A("","")},
{id:"lib-spanish",img:"1517701604599-bb29b565090c",type:"cold",size:350,name:A("سبانش لاتيه بارد","Iced Spanish latte"),
 ing:[[A("إسبريسو دبل","Double espresso"),36,"g"],[A("حليب مكثف محلّى","Sweetened condensed milk"),35,"ml"],[A("حليب بارد","Cold milk"),180,"ml"],[A("ثلج","Ice"),150,"g"]],ext:{...ESP},
 steps:A(["ضع الحليب المكثف في قاع الكوب.","أضف الثلج ثم الحليب البارد.","استخلص الإسبريسو واسكبه ببطء فوق الحليب لتكوين الطبقات.","قلّب قبل الشرب."],["Put the condensed milk in the bottom of the cup.","Add ice, then the cold milk.","Pour the espresso slowly on top to create layers.","Stir before drinking."]),
 notes:A("من أكثر المشروبات طلبًا في المقاهي السعودية.","One of the best sellers in Saudi cafés.")},
{id:"lib-icedlatte",img:"1461023058943-07fcbe16d735",type:"cold",size:350,name:A("آيس لاتيه","Iced latte"),
 ing:[[A("إسبريسو دبل","Double espresso"),36,"g"],[A("حليب بارد","Cold milk"),200,"ml"],[A("ثلج","Ice"),150,"g"],[A("شراب (اختياري)","Syrup (optional)"),15,"ml"]],ext:{...ESP},
 steps:A(["املأ الكوب بالثلج.","أضف الحليب البارد (والشراب إن وُجد).","اسكب الإسبريسو فوق الحليب."],["Fill the cup with ice.","Add cold milk (and syrup if using).","Pour the espresso over the milk."]),notes:A("","")},
{id:"lib-icedmocha",img:"1578314675249-a6910f80cc4e",type:"cold",size:400,name:A("آيس موكا","Iced mocha"),
 ing:[[A("إسبريسو دبل","Double espresso"),36,"g"],[A("صوص شوكولاتة","Chocolate sauce"),30,"ml"],[A("حليب بارد","Cold milk"),180,"ml"],[A("ثلج","Ice"),150,"g"],[A("كريمة مخفوقة (اختياري)","Whipped cream (optional)"),20,"g"]],ext:{...ESP},
 steps:A(["اخلط الإسبريسو الساخن مع صوص الشوكولاتة حتى يذوب.","ضع الثلج والحليب في الكوب.","اسكب خليط الموكا وزيّن بالكريمة."],["Mix the hot espresso with the chocolate sauce until dissolved.","Add ice and milk to the cup.","Pour the mocha mix on top and finish with cream."]),notes:A("","")},
{id:"lib-v60",img:"1442512595331-e89e73853f31",type:"specialty",size:250,name:A("V60","V60 pour over"),
 ing:[[A("بن مختص مطحون متوسط-ناعم","Medium-fine specialty coffee"),15,"g"],[A("ماء (92–94°م)","Water (92–94°C)"),250,"g"]],ext:{dose:15,yield:250,time:A("2:30–3:00 د","2:30–3:00 min"),temp:"93°C",grind:A("متوسط-ناعم","Medium-fine")},
 steps:A(["اشطف الفلتر الورقي بالماء الساخن وتخلّص من الماء.","أضف البن وسوِّ سطحه وصفّر الميزان.","التحميص (Bloom): صب 30–40 غ ماء وانتظر 30–45 ثانية.","صب حتى 150 غ بحركة دائرية بطيئة.","عند 1:15 صب حتى 250 غ.","انتهاء التقطير بين 2:30 و3:00 دقائق."],
  ["Rinse the paper filter with hot water and discard the water.","Add the coffee, level the bed and tare the scale.","Bloom: pour 30–40 g of water and wait 30–45 seconds.","Pour to 150 g in slow circles.","At 1:15 pour to 250 g.","Drawdown should finish between 2:30 and 3:00."]),
 notes:A("النسبة 1:16.7. إذا كان الطعم حامضًا اطحن أنعم، وإذا كان مرًا اطحن أخشن.","Ratio 1:16.7. Sour: grind finer. Bitter: grind coarser.")},
{id:"lib-coldbrew",img:"1521302080334-4bebac2763a6",type:"specialty",size:1000,name:A("كولد برو","Cold brew"),
 ing:[[A("بن مطحون خشن جدًا","Extra-coarse ground coffee"),100,"g"],[A("ماء بارد مفلتر","Cold filtered water"),1000,"ml"]],ext:{dose:100,yield:1000,time:A("12–18 ساعة","12–18 hours"),temp:A("ثلاجة 4°م","Fridge 4°C"),grind:A("خشن جدًا","Extra coarse")},
 steps:A(["اخلط البن مع الماء البارد وقلّب حتى يتبلل كله.","غطِّ الوعاء واتركه في الثلاجة 12–18 ساعة.","صفِّه بفلتر قماش أو ورق.","قدّمه على الثلج، ويمكن تخفيفه بالماء أو الحليب 1:1 حسب التركيز."],["Mix the coffee with cold water and stir until fully wet.","Cover and leave in the fridge for 12–18 hours.","Filter through cloth or paper.","Serve over ice; dilute 1:1 with water or milk if strong."]),
 notes:A("يحفظ في الثلاجة حتى 7 أيام.","Keeps in the fridge for up to 7 days.")},
{id:"lib-matcha",img:"1515823064-d6e0c04616a7",type:"hot",size:250,name:A("ماتشا لاتيه","Matcha latte"),
 ing:[[A("ماتشا","Matcha"),2,"g"],[A("ماء (75–80°م)","Water (75–80°C)"),40,"ml"],[A("حليب","Milk"),200,"ml"],[A("شراب أو عسل (اختياري)","Syrup or honey (optional)"),10,"ml"]],ext:{temp:"80°C"},
 steps:A(["انخل الماتشا في وعاء.","أضف الماء واخفق بحركة حرف W حتى تتكوّن رغوة ناعمة.","بخّر الحليب حتى 60°م.","اسكب الحليب فوق الماتشا."],["Sift the matcha into a bowl.","Add the water and whisk in a W motion until frothy.","Steam the milk to 60°C.","Pour the milk over the matcha."]),
 notes:A("لا تستخدم ماءً مغليًا حتى لا تصبح الماتشا مُرّة.","Never use boiling water or the matcha turns bitter.")},
{id:"lib-hotchoc",img:"1542990253-0d0f5be5f0ed",type:"hot",size:250,name:A("شوكولاتة ساخنة","Hot chocolate"),
 ing:[[A("شوكولاتة داكنة مقطعة","Chopped dark chocolate"),30,"g"],[A("كاكاو خام","Cocoa powder"),5,"g"],[A("حليب","Milk"),220,"ml"],[A("سكر","Sugar"),10,"g"]],ext:{temp:"65°C"},
 steps:A(["سخّن الحليب حتى يقارب الغليان دون أن يغلي.","أضف الشوكولاتة والكاكاو والسكر واخفق حتى الذوبان.","قدّمه مع رغوة خفيفة أو مارشملو."],["Heat the milk until just below boiling.","Add the chocolate, cocoa and sugar and whisk until melted.","Serve with light foam or marshmallows."]),notes:A("","")},
{id:"lib-karak",img:"1544787219-7f47ccb76574",type:"hot",size:200,name:A("شاي كرك","Karak chai"),
 ing:[[A("شاي أسود ناعم","Fine black tea"),6,"g"],[A("ماء","Water"),150,"ml"],[A("حليب مبخّر","Evaporated milk"),100,"ml"],[A("سكر","Sugar"),15,"g"],[A("هيل مطحون","Ground cardamom"),1,"g"],[A("زعفران","Saffron"),null,"pinch"]],ext:{time:A("5–7 د غلي","5–7 min boil")},
 steps:A(["اغلِ الماء مع الشاي والهيل 3 دقائق.","أضف السكر والزعفران.","أضف الحليب المبخر واتركه يغلي مرتين على نار هادئة.","صفِّه وقدّمه ساخنًا."],["Boil the water with the tea and cardamom for 3 minutes.","Add the sugar and saffron.","Add the evaporated milk and let it rise twice on low heat.","Strain and serve hot."]),notes:A("","")},
{id:"lib-mojito",img:"1513558161293-cdaf765ed2fd",type:"mocktail",size:350,name:A("موهيتو (بدون كحول)","Virgin mojito"),
 ing:[[A("ليمون أخضر مقطّع","Lime wedges"),4,"pcs"],[A("أوراق نعناع","Mint leaves"),10,"leaf"],[A("شراب سكر","Simple syrup"),20,"ml"],[A("عصير ليمون طازج","Fresh lime juice"),20,"ml"],[A("ثلج مجروش","Crushed ice"),150,"g"],[A("مياه صودا","Soda water"),150,"ml"]],ext:{},
 steps:A(["اهرس الليمون والنعناع مع شراب السكر برفق في قاع الكوب.","أضف عصير الليمون والثلج المجروش.","أكمل بالصودا وقلّب من الأسفل للأعلى.","زيّن بغصن نعناع وشريحة ليمون."],["Gently muddle the lime and mint with the syrup in the glass.","Add lime juice and crushed ice.","Top with soda and stir from the bottom up.","Garnish with a mint sprig and lime slice."]),
 notes:A("لا تهرس النعناع بقوة حتى لا يصبح مرًا.","Don't over-muddle the mint or it turns bitter.")},
{id:"lib-lemonmint",img:"1621263764928-df1444c5e859",type:"mocktail",size:350,name:A("ليمون بالنعناع","Lemon mint"),
 ing:[[A("عصير ليمون طازج","Fresh lemon juice"),40,"ml"],[A("أوراق نعناع","Mint leaves"),12,"leaf"],[A("شراب سكر","Simple syrup"),30,"ml"],[A("ماء بارد","Cold water"),150,"ml"],[A("ثلج","Ice"),150,"g"]],ext:{},
 steps:A(["ضع جميع المكونات في الخلاط.","اخلط 20–30 ثانية حتى يصبح ناعمًا.","اسكب في كوب وزيّن بالنعناع."],["Put everything in a blender.","Blend 20–30 seconds until smooth.","Pour and garnish with mint."]),notes:A("","")},
{id:"lib-icedtea",img:"1556679343-c7306c1976bc",type:"mocktail",size:350,name:A("آيس تي بالليمون","Iced lemon tea"),
 ing:[[A("شاي أسود","Black tea"),5,"g"],[A("ماء ساخن (95°م)","Hot water (95°C)"),150,"ml"],[A("شراب سكر","Simple syrup"),20,"ml"],[A("عصير ليمون","Lemon juice"),15,"ml"],[A("ثلج","Ice"),150,"g"]],ext:{time:A("4 د نقع","4 min steep"),temp:"95°C"},
 steps:A(["انقع الشاي في الماء الساخن 4 دقائق ثم صفِّه.","أضف شراب السكر والليمون.","اسكبه مباشرة على الثلج لتبريده بسرعة."],["Steep the tea in hot water for 4 minutes, then strain.","Add the syrup and lemon.","Pour straight over ice to chill quickly."]),notes:A("","")},
{id:"lib-mango",img:"1546173159-315724a31696",type:"juice",size:400,name:A("مانجو كولر","Mango cooler"),
 ing:[[A("مانجو طازجة أو مجمدة","Fresh or frozen mango"),150,"g"],[A("عصير برتقال","Orange juice"),80,"ml"],[A("شراب سكر","Simple syrup"),15,"ml"],[A("ثلج","Ice"),120,"g"]],ext:{},
 steps:A(["ضع المكونات في الخلاط.","اخلط حتى يصبح القوام ناعمًا.","قدّمه مع شريحة مانجو."],["Add everything to the blender.","Blend until smooth.","Serve with a mango slice."]),notes:A("","")},
{id:"lib-berry",img:"1553530666-ba11a7da3888",type:"juice",size:400,name:A("سموذي التوت","Berry smoothie"),
 ing:[[A("توت مشكل مجمد","Frozen mixed berries"),150,"g"],[A("موز","Banana"),60,"g"],[A("زبادي","Yogurt"),100,"g"],[A("حليب","Milk"),80,"ml"],[A("عسل","Honey"),15,"ml"]],ext:{},
 steps:A(["ضع الحليب والزبادي أولًا في الخلاط.","أضف الفواكه والعسل.","اخلط 40 ثانية حتى يصبح ناعمًا."],["Put the milk and yogurt in the blender first.","Add the fruit and honey.","Blend 40 seconds until smooth."]),notes:A("","")}
];

const ENCY=[
{key:"species",title:A("الأنواع الرئيسية","Main species"),items:[
[A("أرابيكا · Arabica","Arabica"),A("نوع واسع الانتشار، معروف بتنوع الروائح والنكهات، ويضم أصنافًا كثيرة.","The most widespread species, known for diverse aromas and flavours, with many varieties.")],
[A("روبوستا · Canephora","Robusta · Canephora"),A("غالبًا أعلى كافيينًا وأكثر مرارة وقوامًا؛ يستخدم في بعض الخلطات والقهوة الفورية.","Usually higher in caffeine, more bitter and heavier bodied; used in some blends and instant coffee.")],
[A("ليبيريكا · Liberica","Liberica"),A("نوع أقل انتشارًا، وقد تظهر في بعض محاصيله روائح فاكهية وخشبية.","Less common; some lots show fruity and woody aromas.")],
[A("إكسلسا · Excelsa","Excelsa"),A("اسم شائع تاريخيًا ضمن مجموعة ليبيريكا، وله طابع عطري مميز في بعض المحاصيل.","Historically grouped with Liberica, with a distinctive aromatic character in some lots.")]]},
{key:"varieties",title:A("أصناف وسلالات مشهورة","Famous varieties"),items:[
[A("جيشا · Geisha","Geisha / Gesha"),A("صنف مشهور بعطر زهري ونكهات دقيقة في بعض المحاصيل.","Famous for floral aroma and delicate flavours.")],[A("بوربون · Bourbon","Bourbon"),A("صنف من أرابيكا، تختلف خصائصه حسب البيئة والمعالجة.","An Arabica variety whose character changes with terroir and processing.")],[A("تيبيكا · Typica","Typica"),A("من السلالات التقليدية لأرابيكا.","One of the original traditional Arabica lines.")],[A("كاتورا · Caturra","Caturra"),A("طفرة من بوربون تزرع في دول متعددة.","A Bourbon mutation grown in many countries.")],[A("كاتواي · Catuai","Catuai"),A("هجين من موندو نوفو وكاتورا.","A hybrid of Mundo Novo and Caturra.")],[A("SL28 وSL34","SL28 & SL34"),A("سلالات مرتبطة بمحاصيل كينية معروفة.","Selections linked to famous Kenyan coffees.")],[A("بكّامارا · Pacamara","Pacamara"),A("هجين بحبوب كبيرة وإمكانات نكهة معقدة.","A large-bean hybrid with complex flavour potential.")],[A("سيدرا · Sidra","Sidra"),A("صنف يظهر في بعض مزارع القهوة المختصة.","A variety found on some specialty farms.")]]},
{key:"process",title:A("المعالجة بعد الحصاد","Processing"),items:[
[A("مغسولة · Washed","Washed"),A("تزال طبقات الثمرة قبل التجفيف غالبًا؛ قد تبرز الوضوح والحموضة.","Fruit layers are removed before drying; often highlights clarity and acidity.")],[A("طبيعية · Natural","Natural"),A("تجفف الثمرة حول الحبة؛ قد تزيد النكهات الفاكهية والقوام.","The cherry dries around the bean; often more fruit and body.")],[A("عسلية · Honey","Honey"),A("يبقى جزء من المادة اللزجة أثناء التجفيف، ولها درجات متعددة (أصفر، أحمر، أسود).","Some mucilage stays on during drying; comes in yellow, red and black styles.")],[A("لاهوائية · Anaerobic","Anaerobic"),A("تخمير مضبوط ببيئة محدودة الأكسجين؛ تختلف النتيجة حسب المنهج.","Controlled fermentation with little oxygen; results vary by method.")],[A("تخمير كربوني · Carbonic Maceration","Carbonic maceration"),A("تستخدم بعض المعالجات بيئة غنية بثاني أكسيد الكربون.","Fermentation in a CO₂-rich environment.")],[A("منزوعة الكافيين · Decaf","Decaf"),A("يُزال معظم الكافيين بطرق مختلفة (ماء سويسري، ثاني أكسيد الكربون، مذيبات)، وقد تبقى كمية قليلة.","Most caffeine is removed (Swiss Water, CO₂, solvents); a little may remain.")]]},
{key:"origins",title:A("دول ومناطق الإنتاج","Origins"),items:[
[A("إثيوبيا","Ethiopia"),A("تنوع كبير في الأصناف المحلية؛ قد تظهر نكهات زهرية وحمضيات وفواكه.","Huge diversity of heirloom varieties; floral, citrus and fruit notes.")],[A("كولومبيا","Colombia"),A("مناطق ومحاصيل متنوعة، تتغير نكهاتها حسب الصنف والمعالجة.","Many regions; flavours change with variety and processing.")],[A("البرازيل","Brazil"),A("كثير من المحاصيل تقدم نكهات مكسرات وشوكولاتة.","Many lots give nutty and chocolate notes.")],[A("كينيا","Kenya"),A("قد تتميز بعض المحاصيل بحموضة مشرقة وطابع فاكهي.","Often bright acidity and a juicy, fruity character.")],[A("اليمن","Yemen"),A("تاريخ طويل في زراعة القهوة ومحاصيل ذات طابع مميز.","A long coffee history with distinctive lots.")],[A("كوستاريكا","Costa Rica"),A("تشتهر بتنوع المناطق وطرق المعالجة.","Known for diverse regions and processing styles.")],[A("بنما","Panama"),A("مرتبطة بمحاصيل جيشا مشهورة إلى جانب أصناف أخرى.","Famous for Geisha, alongside other varieties.")],[A("إندونيسيا","Indonesia"),A("محاصيل متنوعة وقد تقدم بعضها قوامًا ممتلئًا.","Diverse lots, some with a full body.")],[A("السعودية (جازان)","Saudi Arabia (Jazan)"),A("زراعة تقليدية في المدرجات الجبلية لصنف الخولاني، باهتمام متزايد بالقهوة المختصة.","Traditional terrace farming of Khawlani coffee, with growing specialty interest.")]]},
{key:"roast",title:A("التحميص","Roasting"),items:[
[A("تحميص فاتح · Light","Light roast"),A("يحافظ على حموضة البن ونكهات المنشأ (زهور، فواكه). مناسب للتقطير اليدوي. ينتهي غالبًا بعد الفرقعة الأولى بقليل.","Keeps acidity and origin flavours (floral, fruit). Great for pour over. Usually ends shortly after first crack.")],
[A("تحميص متوسط · Medium","Medium roast"),A("توازن بين الحموضة والحلاوة والقوام؛ نكهات كراميل ومكسرات. مناسب للإسبريسو والفلتر.","Balance of acidity, sweetness and body; caramel and nut notes. Good for espresso and filter.")],
[A("متوسط-داكن · Medium-Dark","Medium-dark roast"),A("قوام أعلى وحموضة أقل؛ يبدأ ظهور مرارة لطيفة وشوكولاتة. شائع في خلطات الإسبريسو مع الحليب.","More body, less acidity; gentle bitterness and chocolate. Common for milk-based espresso.")],
[A("تحميص داكن · Dark","Dark roast"),A("سطح زيتي ونكهات محمّصة ومدخّنة؛ تختفي معظم نكهات المنشأ. يتجاوز الفرقعة الثانية.","Oily surface, roasty and smoky; most origin character is lost. Goes past second crack.")],
[A("مراحل التحميص","Roast stages"),A("التجفيف (اصفرار الحبة) ← تفاعل ميلارد والكرملة ← الفرقعة الأولى ← وقت التطوير ← الفرقعة الثانية.","Drying (yellowing) → Maillard & caramelisation → first crack → development → second crack.")],
[A("وقت التطوير · DTR","Development time ratio (DTR)"),A("الوقت بعد الفرقعة الأولى كنسبة من زمن التحميص الكلي، غالبًا 15–25%؛ يؤثر على الحلاوة والحموضة.","Time after first crack as a share of total roast time, usually 15–25%; affects sweetness and acidity.")],
[A("الراحة بعد التحميص · Degassing","Resting / degassing"),A("يخرج ثاني أكسيد الكربون من البن بعد التحميص. الفلتر غالبًا بعد 4–7 أيام، والإسبريسو بعد 7–14 يومًا.","Coffee releases CO₂ after roasting. Filter is usually best after 4–7 days, espresso after 7–14 days.")],
[A("التخزين","Storage"),A("في عبوة محكمة بصمام أحادي الاتجاه، بعيدًا عن الضوء والحرارة والرطوبة. لا تحفظ البن المفتوح في الثلاجة.","Airtight bag with a one-way valve, away from light, heat and moisture. Don't keep opened coffee in the fridge.")]]},
{key:"grind",title:A("الطحن","Grinding"),
 table:{head:A(["طريقة التحضير","درجة الطحن","الملمس التقريبي"],["Brew method","Grind size","Feels like"]),rows:[
 [A("قهوة تركية","Turkish coffee"),A("فائق النعومة","Extra fine"),A("مثل الدقيق","Flour")],[A("إسبريسو","Espresso"),A("ناعم","Fine"),A("مثل السكر الناعم","Powdered sugar")],[A("موكا بوت","Moka pot"),A("ناعم إلى متوسط","Fine-medium"),A("أخشن قليلًا من الإسبريسو","Slightly coarser than espresso")],[A("V60 / آيروبرس","V60 / AeroPress"),A("متوسط-ناعم","Medium-fine"),A("مثل ملح الطعام","Table salt")],[A("كيمكس / فلتر آلي","Chemex / batch brew"),A("متوسط إلى متوسط-خشن","Medium to medium-coarse"),A("مثل الرمل الخشن","Coarse sand")],[A("فرنش برس","French press"),A("خشن","Coarse"),A("مثل ملح البحر","Sea salt")],[A("كولد برو","Cold brew"),A("خشن جدًا","Extra coarse"),A("مثل الفلفل المجروش","Cracked pepper")]]},
 items:[
[A("المطحنة ذات الأقراص · Burr","Burr grinder"),A("تطحن بحجم متجانس، وهي الأساس للحصول على استخلاص متوازن. الأقراص المسطحة تعطي وضوحًا والمخروطية قوامًا أكثر غالبًا.","Produces an even particle size — the basis of balanced extraction. Flat burrs tend toward clarity, conical toward body.")],
[A("مطحنة الشفرات · Blade","Blade grinder"),A("تكسر الحبوب بشكل غير متجانس، فينتج استخلاص زائد وناقص في نفس الكوب. لا ينصح بها للقهوة المختصة.","Chops unevenly, so the same cup is both over- and under-extracted. Not recommended for specialty coffee.")],
[A("الطحن الطازج","Grind fresh"),A("تفقد القهوة كثيرًا من روائحها خلال دقائق من الطحن؛ اطحن مباشرة قبل التحضير.","Ground coffee loses aroma within minutes; grind right before brewing.")],
[A("قاعدة التعديل","Adjustment rule"),A("أنعم = استخلاص أبطأ وأقوى. أخشن = استخلاص أسرع وأخف. غيّر الطحن بخطوات صغيرة.","Finer = slower, stronger extraction. Coarser = faster, lighter. Change in small steps.")]]},
{key:"methods",title:A("طرق التحضير","Brewing methods"),methods:[
[A("V60","V60"),A("صب يدوي بفلتر ورقي.","Hand pour over with a paper filter."),"1:15–1:17",A("متوسط-ناعم","Medium-fine"),A("2:30–3:00 د","2:30–3:00 min"),"92–94°C"],
[A("كيمكس · Chemex","Chemex"),A("فلتر ورقي سميك يعطي كوبًا واضحًا ونظيفًا.","Thick paper filter for a very clean, clear cup."),"1:15–1:16",A("متوسط-خشن","Medium-coarse"),A("4:00–4:30 د","4:00–4:30 min"),"93°C"],
[A("إسبريسو · Espresso","Espresso"),A("استخلاص مركز تحت ضغط حوالي 9 بار.","Concentrated extraction at about 9 bar."),"1:2",A("ناعم","Fine"),A("25–30 ث","25–30 s"),"90–96°C"],
[A("آيروبرس · AeroPress","AeroPress"),A("أداة مرنة بالغمر والضغط اليدوي.","Flexible immersion + hand pressure brewer."),"1:12–1:16",A("متوسط-ناعم","Medium-fine"),A("1:30–2:30 د","1:30–2:30 min"),"80–92°C"],
[A("فرنش برس · French Press","French press"),A("غمر كامل مع فلتر معدني يعطي قوامًا أعلى.","Full immersion with a metal filter for more body."),"1:15",A("خشن","Coarse"),A("4 د","4 min"),"94°C"],
[A("كولد برو · Cold Brew","Cold brew"),A("استخلاص بالماء البارد لفترة طويلة.","Long extraction with cold water."),"1:8–1:10",A("خشن جدًا","Extra coarse"),A("12–18 ساعة","12–18 h"),A("بارد","Cold")],
[A("موكا بوت · Moka Pot","Moka pot"),A("تحضير على الموقد ينتج قهوة مركزة، لكنها ليست إسبريسو.","Stovetop brewer making strong coffee — not true espresso."),"1:7–1:10",A("ناعم-متوسط","Fine-medium"),A("4–5 د","4–5 min"),A("ماء ساخن مسبقًا","Pre-heated water")],
[A("قهوة تركية","Turkish coffee"),A("غلي البن الناعم جدًا مع الماء في الدلّة.","Extra-fine coffee simmered with water in a cezve."),"1:10",A("فائق النعومة","Extra fine"),A("3–4 د","3–4 min"),A("حتى ظهور الرغوة","Until foam rises")],
[A("لاتيه وكابتشينو","Latte & cappuccino"),A("مشروبات إسبريسو مع حليب مبخر، تختلف نسبة الحليب والرغوة.","Espresso with steamed milk; milk and foam ratios differ."),"—",A("ناعم","Fine"),"—",A("حليب 60–65°م","Milk 60–65°C")]]},
{key:"espresso",title:A("استخلاص الإسبريسو","Espresso extraction"),items:[
[A("الجرعة · Dose","Dose"),A("كمية البن الجاف في السلة، عادة 16–20 غ للدبل. ثبّتها أولًا قبل تعديل أي متغير.","Dry coffee in the basket, usually 16–20 g for a double. Fix it before changing anything else.")],
[A("الناتج · Yield","Yield"),A("وزن السائل في الكوب. الشائع 1:2 (18 غ ← 36 غ). ريستريتو 1:1–1:1.5، لونغو 1:3 أو أكثر.","Weight of liquid in the cup. Common 1:2 (18 g → 36 g). Ristretto 1:1–1:1.5, lungo 1:3 or more.")],
[A("الوقت · Time","Time"),A("من بدء الضخ حتى إيقافه، غالبًا 25–30 ثانية. هو نتيجة للطحن والجرعة، وليس هدفًا بحد ذاته.","From pump start to stop, usually 25–30 s. It is a result of grind and dose, not a goal by itself.")],
[A("الحرارة · Temperature","Temperature"),A("بين 90 و96°م. التحميص الفاتح يحتاج حرارة أعلى، والداكن حرارة أقل.","90–96°C. Light roasts like it hotter, dark roasts cooler.")],
[A("الضغط · Pressure","Pressure"),A("حوالي 9 بار في معظم الماكينات التجارية، وبعضها يتيح التحكم بالضغط المسبق (Pre-infusion).","About 9 bar on most commercial machines; some allow pre-infusion control.")],
[A("التوزيع والدك","Distribution & tamping"),A("توزيع متساوٍ ودك مستوٍ يمنع تكوّن القنوات (Channeling) حيث يمر الماء من مناطق ضعيفة.","Even distribution and a level tamp prevent channeling, where water rushes through weak spots.")],
[A("نسبة الاستخلاص · Extraction Yield","Extraction yield"),A("النسبة المذابة من البن في الكوب، المثالية غالبًا 18–22%. وتقاس مع TDS بجهاز الريفراكتوميتر.","Share of the coffee dissolved into the cup, ideally 18–22%. Measured from TDS with a refractometer.")]],
 trouble:[[A("استخلاص ناقص (Under)","Under-extracted"),A("حامض، مالح، خفيف، ينتهي بسرعة","Sour, salty, thin, runs fast"),A("اطحن أنعم، أو زِد الناتج قليلًا، أو ارفع الحرارة","Grind finer, increase yield slightly, or raise temperature")],[A("استخلاص زائد (Over)","Over-extracted"),A("مر، جاف، قابض، يتقطر ببطء","Bitter, dry, astringent, runs slow"),A("اطحن أخشن، أو قلّل الناتج، أو اخفض الحرارة","Grind coarser, reduce yield, or lower temperature")],[A("قنوات (Channeling)","Channeling"),A("تدفق غير متساوٍ، بقع فاتحة، طعم حامض ومر معًا","Uneven flow, blond spots, both sour and bitter"),A("حسّن التوزيع والدك، وتأكد من جفاف السلة ونظافتها","Improve distribution and tamping; keep the basket clean and dry")],[A("متوازن","Balanced"),A("حلو، حموضة لطيفة، قوام جيد، نهاية نظيفة","Sweet, gentle acidity, good body, clean finish"),A("ثبّت الوصفة وسجّلها","Lock in the recipe and save it")]]}
];

const EQUIP=[
{key:"machines",icon:"☕",title:A("ماكينات الإسبريسو","Espresso machines"),items:[
[A("ماكينة بغلاية واحدة","Single boiler"),A("غلاية واحدة للقهوة والبخار بالتناوب. مناسبة للمنزل، لكن يجب الانتظار بين الاستخلاص والتبخير.","One boiler for brewing and steam in turns. Fine for home, but you wait between shots and steaming.")],
[A("مبادل حراري · HX","Heat exchanger (HX)"),A("غلاية بخار كبيرة يمر خلالها أنبوب لماء القهوة؛ تبخير واستخلاص في نفس الوقت، مع الحاجة لشطف الرأس لضبط الحرارة.","A large steam boiler with a tube for brew water; steam and brew at once, but needs a cooling flush.")],
[A("غلايتان · Dual boiler","Dual boiler"),A("غلاية مستقلة للقهوة وأخرى للبخار مع تحكم PID بالحرارة. الأفضل لثبات الحرارة في العمل التجاري.","Separate brew and steam boilers with PID control. Best temperature stability for café work.")],
[A("رأس المجموعة · Group head","Group head"),A("موضع تركيب الذراع. يجب تنظيف الجوان والشاور سكرين يوميًا، وتغيير الجوان كل 6–12 شهرًا.","Where the portafilter locks in. Clean the gasket and shower screen daily; replace the gasket every 6–12 months.")],
[A("الضغط المسبق · Pre-infusion","Pre-infusion"),A("ترطيب البن بضغط منخفض لثوانٍ قبل الضغط الكامل؛ يقلل القنوات ويحسّن تجانس الاستخلاص.","Wetting the puck at low pressure before full pressure; reduces channeling and evens extraction.")]]},
{key:"grinders",icon:"⚙",title:A("مطاحن القهوة","Coffee grinders"),items:[
[A("أقراص مسطحة · Flat burrs","Flat burrs"),A("حجم جزيئات متجانس ونكهات واضحة. شائعة في مطاحن المقاهي.","Even particles and clear flavours. Common in café grinders.")],
[A("أقراص مخروطية · Conical burrs","Conical burrs"),A("أهدأ وأقل حرارة غالبًا، وتعطي قوامًا أعلى.","Often quieter and cooler, with more body in the cup.")],
[A("مطحنة عند الطلب · On-demand","On-demand grinder"),A("تطحن الجرعة لحظة الطلب بالوقت أو بالوزن، فتبقى القهوة طازجة.","Grinds each dose on request by time or weight, keeping coffee fresh.")],
[A("المطحنة اليدوية","Hand grinder"),A("خيار ممتاز للتقطير والسفر، ولبعضها دقة كافية للإسبريسو.","Great for filter and travel; some are precise enough for espresso.")],
[A("معايرة المطحنة · Dial-in","Dialling in"),A("ثبّت الجرعة، ثم غيّر الطحن بخطوات صغيرة حتى تصل للناتج والوقت المطلوبين، وتذوّق كل مرة. أعد المعايرة عند تغيير البن أو صباح كل يوم.","Fix the dose, then adjust the grind in small steps until yield and time are on target, tasting each time. Re-dial for every new coffee and each morning.")],
[A("الاحتفاظ · Retention","Retention"),A("بقايا البن داخل المطحنة؛ تخلّص من أول جرعة بعد تغيير الطحن.","Old grounds left inside; purge the first dose after changing the grind.")]]},
{key:"scales",icon:"⚖",title:A("الموازين وأدوات التقطير","Scales & brewing tools"),items:[
[A("ميزان القهوة","Coffee scale"),A("بدقة 0.1 غ مع مؤقت مدمج؛ أساسي للإسبريسو والتقطير.","0.1 g accuracy with a built-in timer; essential for espresso and filter.")],
[A("غلاية بعنق الإوزة","Gooseneck kettle"),A("تتحكم بسرعة واتجاه الصب، ويفضّل مع ضبط الحرارة.","Controls pour speed and direction; temperature control is a bonus.")],
[A("أدوات التقطير","Brewers"),A("V60، كيمكس، كاليتا، آيروبرس، فرنش برس، وكولد برو؛ لكل منها فلتر وطحن مختلف.","V60, Chemex, Kalita, AeroPress, French press and cold brew — each with its own filter and grind.")],
[A("الريفراكتوميتر","Refractometer"),A("يقيس TDS لحساب نسبة الاستخلاص بدقة.","Measures TDS to calculate extraction yield precisely.")]]},
{key:"tampers",icon:"⬤",title:A("أدوات الدك والتوزيع","Tampers & distribution"),items:[
[A("الدكّاك · Tamper","Tamper"),A("اختر مقاسًا مطابقًا للسلة (غالبًا 58 مم). المهم أن يكون الدك مستويًا، لا قويًا جدًا.","Match the basket size (often 58 mm). Level matters more than force.")],
[A("أداة التوزيع · Distributor","Distribution tool"),A("تسوّي سطح البن قبل الدك لتوزيع متساوٍ.","Levels the coffee bed before tamping.")],
[A("أداة WDT","WDT tool"),A("إبر رفيعة لتفكيك التكتلات وتوزيع البن بعمق؛ تقلل القنوات بشكل واضح.","Fine needles that break clumps and distribute deeply; clearly reduces channeling.")],
[A("حلقة التعبئة · Dosing funnel","Dosing funnel"),A("تمنع تناثر البن أثناء الطحن والتوزيع.","Stops grounds spilling while dosing and distributing.")],
[A("شاشة البك · Puck screen","Puck screen"),A("شبكة معدنية فوق البن تحمي الشاور سكرين وتوزّع الماء.","A metal mesh on the puck that protects the shower screen and spreads water.")]]},
{key:"milk",icon:"🥛",title:A("أباريق الحليب واللاتيه آرت","Milk pitchers & latte art"),items:[
[A("أحجام الإبريق","Pitcher sizes"),A("350 مل لكوب واحد صغير، 600 مل للاتيه، و1 لتر لأكثر من كوب.","350 ml for one small drink, 600 ml for a latte, 1 L for several.")],
[A("شكل المصب","Spout shape"),A("المصب الحاد يسهل الرسومات الدقيقة، والدائري مناسب للقلوب والتوليب.","A sharp spout suits fine designs; a round spout suits hearts and tulips.")],
[A("مقياس الحرارة","Thermometer"),A("يساعد المبتدئ على التوقف عند 60–65°م قبل أن يتعلم الإحساس باليد.","Helps beginners stop at 60–65°C until they learn by touch.")],
[A("أقلام الرسم · Etching pen","Etching pen"),A("لرسم تفاصيل إضافية فوق الرغوة.","For adding fine details on top of the foam.")]]},
{key:"bar",icon:"🍸",title:A("أدوات البارتندر","Bartending tools"),items:[
[A("الشيكر","Shaker"),A("بوسطن (قطعتان) للسرعة، أو كوبلر (ثلاث قطع مع مصفاة).","Boston (two tins) for speed, or cobbler (three-piece with strainer).")],
[A("الجيغر","Jigger"),A("مكيال دقيق للمقادير، غالبًا 30/45 مل أو 25/50 مل.","Accurate measure, usually 30/45 ml or 25/50 ml.")],
[A("الهاون · Muddler","Muddler"),A("لهرس الفواكه والأعشاب برفق.","For gently pressing fruit and herbs.")],
[A("المصافي","Strainers"),A("هوثورن لتصفية الشيكر، وفاين سترينر لإزالة الشوائب الصغيرة.","Hawthorne for the shaker, fine strainer for small bits.")],
[A("ملعقة البار","Bar spoon"),A("للتقليب والطبقات.","For stirring and layering.")],
[A("الثلج","Ice"),A("مكعبات كبيرة للتقديم البطيء، مجروش للموهيتو، وثلج نظيف وشفاف قدر الإمكان.","Large cubes melt slowly, crushed for mojitos; keep ice clean and clear.")]]},
{key:"science",icon:"🔬",title:A("الضغط والطحن والاستخلاص","Pressure, grind & extraction"),items:[
[A("لماذا 9 بار؟","Why 9 bar?"),A("ضغط كافٍ لاستخلاص الزيوت والمركبات بسرعة وتكوين الكريما، دون ضغط البن بشكل مفرط.","Enough to extract oils and compounds quickly and create crema without over-compacting the puck.")],
[A("العلاقة بين الطحن والتدفق","Grind vs flow"),A("كلما نعم الطحن زادت المقاومة فبطؤ التدفق وزاد الاستخلاص.","Finer grind → more resistance → slower flow → more extraction.")],
[A("مراحل الاستخلاص","Extraction order"),A("تخرج الأحماض أولًا، ثم السكريات، ثم المركبات المرة؛ لذلك الاستخلاص القصير حامض والطويل مر.","Acids come first, then sugars, then bitter compounds — so short shots taste sour and long ones bitter.")],
[A("جودة الماء","Water quality"),A("الماء يشكل أكثر من 90% من القهوة. استخدم ماءً مفلترًا بعسر معتدل لحماية الماكينة وتحسين الطعم.","Water is over 90% of the drink. Use filtered water with moderate hardness to protect the machine and improve taste.")]]},
{key:"clean",icon:"🧽",title:A("التنظيف والصيانة","Cleaning & maintenance"),items:[
[A("يوميًا","Daily"),A("تنظيف عكسي (Backflush) بالماء، تنظيف الذراع والسلال، مسح عصا البخار وتنفيسها بعد كل استخدام، وتفريغ صينية التصريف.","Water backflush, clean portafilters and baskets, wipe and purge the steam wand after every use, empty the drip tray.")],
[A("أسبوعيًا","Weekly"),A("تنظيف عكسي بمسحوق التنظيف، نقع السلال والذراع، وفك الشاور سكرين وتنظيفه.","Backflush with cleaning powder, soak baskets and portafilters, remove and clean the shower screen.")],
[A("المطحنة","Grinder"),A("تفريغ الحاوية وتنظيفها من الزيوت أسبوعيًا، واستخدام أقراص التنظيف أو تنظيف الأقراص بالفرشاة.","Empty and wipe the hopper weekly; use grinder cleaning tablets or brush the burrs.")],
[A("إزالة الترسبات","Descaling"),A("حسب عسر الماء وتعليمات الشركة المصنعة؛ الفلتر الجيد يقلل الحاجة لها.","Depends on water hardness and the manufacturer; good filtration reduces the need.")],
[A("قطع الغيار","Replacement parts"),A("الجوان والشاور سكرين كل 6–12 شهرًا، وفلتر الماء حسب الاستهلاك.","Gasket and shower screen every 6–12 months; water filter by volume used.")]]},
{key:"trouble",icon:"🛠",title:A("حل مشكلات التحضير","Troubleshooting"),
 trouble:[
 [A("الإسبريسو سريع جدًا","Shot runs too fast"),A("طعم حامض ومائي","Sour and watery"),A("اطحن أنعم أو زد الجرعة قليلًا، وتحقق من الدك والتوزيع","Grind finer or add a little dose; check tamping and distribution")],
 [A("الإسبريسو بطيء أو يتقطر","Shot is slow or drips"),A("مر وثقيل","Bitter and heavy"),A("اطحن أخشن أو قلّل الجرعة","Grind coarser or reduce the dose")],
 [A("كريما قليلة","Little crema"),A("لون فاتح ورغوة ضعيفة","Pale, thin crema"),A("بن قديم أو حرارة منخفضة؛ استخدم بنًا طازجًا وتحقق من الحرارة","Old beans or low temperature; use fresh coffee and check temperature")],
 [A("رغوة الحليب بفقاعات كبيرة","Big bubbles in milk"),A("رغوة خشنة لا تلمع","Coarse, dull foam"),A("أدخل الهواء أقل وفي البداية فقط، ثم اصنع دوامة؛ اطرق الإبريق","Less air, only at the start, then create a whirlpool; tap the pitcher")],
 [A("الحليب لا يرغو","Milk won't foam"),A("لا تتكوّن رغوة","No foam forms"),A("استخدم حليبًا باردًا طازجًا وإبريقًا باردًا، ونظّف عصا البخار","Use cold fresh milk and a cold pitcher; clean the steam wand")],
 [A("قهوة التقطير مرة","Pour over is bitter"),A("مرارة وجفاف","Bitter and dry"),A("اطحن أخشن أو اخفض الحرارة أو قلّل زمن التلامس","Grind coarser, lower temperature or shorten contact time")],
 [A("قهوة التقطير حامضة وخفيفة","Pour over is sour and weak"),A("حموضة حادة","Sharp acidity"),A("اطحن أنعم أو ارفع الحرارة أو زد زمن الصب","Grind finer, raise temperature or slow the pour")]]}
];

const LEARN=[
[A("أساسيات القهوة المختصة","Specialty coffee basics"),A("من الحبة الخضراء إلى التحميص والطحن والاستخلاص والتذوق.","From green bean to roasting, grinding, extraction and tasting.")],
[A("معادلة الإسبريسو","The espresso equation"),A("Dose · Grind · Yield · Time · Temperature · Pressure · Taste.","Dose · Grind · Yield · Time · Temperature · Pressure · Taste.")],
[A("التذوق الحسي","Sensory tasting"),A("تدرب على الحموضة والحلاوة والمرارة والقوام والعطر والتوازن.","Practise acidity, sweetness, bitterness, body, aroma and balance.")],
[A("تبخير الحليب","Milk steaming"),A("إدخال الهواء في أول 3–5 ثوانٍ، ثم دوامة لتنعيم الرغوة حتى 60–65°م. لا تعيد تبخير الحليب.","Add air in the first 3–5 seconds, then whirlpool to polish the foam up to 60–65°C. Never re-steam milk.")],
[A("أساسيات اللاتيه آرت","Latte art basics"),A("ابدأ بالقلب، ثم التوليب، ثم الروزيتا. التحكم في الارتفاع وسرعة الصب هو الأساس.","Start with the heart, then tulip, then rosetta. Control of height and flow is everything.")],
[A("الباريستا والبارتندر","Barista & bartender"),A("تنظيم محطة العمل والنظافة ووصفات المشروبات وخدمة الضيوف.","Station organisation, hygiene, drink specs and guest service.")],
[A("أساسيات الموكتيل","Mocktail basics"),A("التوازن بين الحلو والحامض، الثلج المناسب، والتزيين. القاعدة الشائعة: 2 حلو : 1 حامض.","Balance sweet and sour, choose the right ice, garnish well. Common rule: 2 sweet : 1 sour.")],
[A("إدارة الوصفات","Recipe management"),A("سجل المقادير الدقيقة، خطوات التحضير، حجم الحصة، والتكلفة.","Record exact quantities, steps, portion size and cost.")],
[A("تطوير الوصفة","Recipe development"),A("غيّر متغيرًا واحدًا في كل تجربة وسجل أثره على الطعم.","Change one variable at a time and record its effect on taste.")],
[A("النظافة والصيانة","Cleaning & maintenance"),A("تنظيف رأس المجموعة يوميًا (Backflush)، وتنظيف عصا البخار بعد كل استخدام، وإزالة الترسبات دوريًا.","Backflush daily, clean the steam wand after every use, descale regularly.")]
];
const LESSON_CATS={espresso:A("الإسبريسو ومعايرة المطحنة","Espresso & grinder dial-in"),brewing:A("طرق التحضير","Brewing methods"),milk:A("الحليب واللاتيه آرت","Milk & latte art"),bar:A("أساسيات البارتندر","Bartending basics"),trouble:A("حل مشكلات الاستخلاص والنكهة","Extraction & flavour troubleshooting"),other:A("أخرى","Other")};
const LEVELS={beginner:A("مبتدئ","Beginner"),pro:A("محترف","Professional"),all:A("لجميع المستويات","All levels")};
