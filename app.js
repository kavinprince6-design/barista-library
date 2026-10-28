/* Barista — app logic. Data is stored on this device (IndexedDB). */
"use strict";
/* ============ I18N ============ */
const L={ar:{
heroSub:"قهوة مختصة، وصفاتك الخاصة، ومسيرتك في عالم المشروبات.",welcomeSub:"اكتشف البن، طوّر مهاراتك، واحفظ ريسيبياتك بالطريقة التي تناسبك.",welcome:"مرحبًا بك في مكتبتك الشخصية",welcomeUser:"مرحبًا {n} في مكتبتك الشخصية",
stLib:"وصفة جاهزة في المكتبة",stMine:"من وصفاتي",stFav:"في المفضلة",stLessons:"دروسي التدريبية",
navHome:"الرئيسية",navLibrary:"مكتبة الوصفات",navEncy:"موسوعة القهوة",navEquip:"المعدات والأدوات",navTools:"الحاسبات الذكية",navCost:"التكلفة والأرباح",navRecipes:"ريسيبياتي",navFavs:"المفضلة",navSearch:"بحث متقدم",navLearn:"التدريب والدروس",navNotes:"ملاحظاتي",navAccount:"حسابي والإعدادات",
secHome:"أقسام المكتبة",phGlobal:"ابحث عن وصفة أو مكوّن أو معلومة...",featured:"وصفات مختارة",phLib:"ابحث في الوصفات والمكونات...",libIntro:"صور المشروبات، المقادير بالقياس الدقيق، خطوات التحضير، وأزمنة الاستخلاص. اضغط على أي وصفة لعرض التفاصيل.",
phEncy:"ابحث في الموسوعة...",phEquip:"ابحث في المعدات...",all:"الكل",
tShot:"حاسبة الجرعة والاستخلاص",lDose:"الجرعة (غ)",lYield:"الناتج (غ)",lTimeS:"الوقت (ثانية)",lTempC:"الحرارة (°م)",lPressure:"الضغط (بار)",lGrindSet:"درجة الطحن",lCoffeeName:"البن المستخدم",phCoffeeName:"مثال: إثيوبيا غوجي – مغسولة",lTaste:"الطعم والملاحظات",phTaste:"حلو، حموضة لطيفة...",rRatio:"نسبة الاستخلاص",rFlow:"معدل التدفق",rFlowUnit:"غ/ثانية",bSaveShot:"حفظ الإعدادات في السجل",tTimer:"مؤقت الاستخلاص",timerHint:"ابدأ مع بداية الضخ وأوقفه عند الوصول للناتج.",bStart:"ابدأ",bStop:"إيقاف",bContinue:"استمرار",bUseTime:"استخدم الوقت",bReset:"تصفير",timerNote:"المرجع الشائع للإسبريسو: 25–30 ثانية من بدء الضخ. الطعم هو الحكم النهائي.",
shotLog:"سجل الاستخلاصات",shotLogHint:"اختر استخلاصين أو أكثر للمقارنة",ristretto:"ريستريتو",normale:"إسبريسو عادي",lungo:"لونغو",compareTitle:"مقارنة الاستخلاصات",noShots:"لا توجد استخلاصات محفوظة بعد.",
thDate:"التاريخ",thCoffee:"البن",thRatio:"النسبة",thTime:"الوقت",thTemp:"الحرارة",thPress:"الضغط",thGrind:"الطحن",thNotes:"ملاحظات",thFlow:"التدفق",
tRatio:"نسب التحضير والدفعات الكبيرة",lCoffeeG:"كمية البن (غ)",lRatioN:"النسبة (15 تعني 1:15)",rWater:"الماء المقترح:",uG:"غ",lWaterAvail:"كمية الماء المتاحة (غ)",rCoffeeNeed:"البن المطلوب:",
tBatch:"دفعة كبيرة (عدة لترات)",batchHint:"أدخل كمية القهوة الجاهزة المطلوبة، وسنحسب البن والماء مع احتساب الماء الذي يمتصه البن.",lBatchL:"القهوة الجاهزة (لتر)",lCupMl:"حجم الكوب (مل)",lAbsorb:"امتصاص البن (غ ماء لكل غ بن)",rBatchCoffee:"البن المطلوب",rBatchWater:"الماء المطلوب",rBatchCups:"عدد الأكواب",
tScale:"تكبير وتصغير الوصفة",scaleHint:"اختر وصفة ثم حدّد عدد الحصص الجديد أو اكتب المعامل مباشرة (0.5 أو 2).",lRecipe:"الوصفة",lBaseServ:"الحصص الأصلية",lTargetServ:"الحصص المطلوبة",lFactor:"المعامل",lOutUnit:"وحدات الناتج",unitsAsIs:"كما هي (غ / مل)",unitsOz:"أونصة",lCustomIng:"المقادير (سطر لكل مكوّن)",phIngLines:"إسبريسو 36 غ\nحليب 200 مل\nثلج 150 غ",customIng:"✎ مقادير أكتبها بنفسي",grpLib:"المكتبة",grpMine:"ريسيبياتي",thOrig:"الأصل",thScaled:"بعد التعديل",cupTotal:"إجمالي الحجم",
tUnits:"تحويل الوحدات",lKind:"النوع",lValue:"القيمة",lFrom:"من",lTo:"إلى",rResult:"النتيجة:",kVol:"الحجم",kWt:"الوزن",kTemp:"الحرارة",quickRef:"مرجع سريع",
navCostH:"التكلفة والأرباح",cPantry:"أسعار المكونات",pantryHint:"سجّل سعر شراء كل مكوّن وحجم العبوة مرة واحدة. عند تغيّر السعر عدّله هنا، وستتحدث كل الحسابات المرتبطة به تلقائيًا.",thIng:"المكوّن",thPackPrice:"سعر العبوة",thPackSize:"حجم العبوة",thUnit:"الوحدة",thUnitPrice:"سعر الوحدة",thUpdated:"آخر تحديث",bAddIng:"+ إضافة مكوّن",bSeedPantry:"إضافة مكونات شائعة (أسعار مثال)",pantryEmpty:"لم تُسجّل أسعار بعد.",
cDrink:"تكلفة المشروب",drinkHint:"اكتب اسم المكوّن؛ إذا كان موجودًا في «أسعار المكونات» سيُربط تلقائيًا بسعره المحفوظ (🔗).",thUsed:"المستخدم في الكوب",thCupCost:"تكلفة الكوب",bAddRow:"+ إضافة سطر",bResetDefault:"إعادة الافتراضي",
cProfit:"الربح والتسعير",lSell:"سعر البيع",lOpCup:"مصاريف تشغيل لكل كوب",lTargetPct:"نسبة تكلفة المكونات المستهدفة %",lVat:"سعر البيع يشمل ضريبة القيمة المضافة 15%",
rCogs:"تكلفة المكونات (COGS)",rTotalCup:"التكلفة الكاملة للكوب",rNet:"صافي سعر البيع بدون ضريبة",rGross:"إجمالي الربح للكوب",rNetProfit:"صافي الربح للكوب",rGrossMargin:"هامش الربح الإجمالي",rNetMargin:"هامش الربح الصافي",rCogsPct:"نسبة تكلفة المكونات",rSuggest:"سعر البيع المقترح (تكلفة مكونات {p}%{v})",inclVat:" شامل الضريبة",
grossNetNote:"إجمالي الربح = صافي سعر البيع − تكلفة المكونات فقط. صافي الربح = إجمالي الربح − مصاريف التشغيل (رواتب، إيجار، كهرباء...). استخدم الصافي لمعرفة الربح الحقيقي.",
projTitle:"توقع المبيعات والأرباح",lCupsDay:"أكواب مباعة يوميًا",lDaysMonth:"أيام العمل في الشهر",lFixedMonth:"مصاريف ثابتة شهرية إضافية",pDay:"يوميًا",pMonth:"شهريًا",pYear:"سنويًا",pCups:"الأكواب",pRevenue:"الإيرادات (بدون ضريبة)",pCogs:"تكلفة المكونات",pGross:"إجمالي الربح",pOp:"مصاريف التشغيل",pNet:"صافي الربح",pBreak:"نقطة التعادل",pBreakTxt:"{n} كوب يوميًا لتغطية المصاريف الثابتة",pBreakNo:"سعر البيع لا يغطي التكلفة",
lSaveCalc:"حفظ هذه الحسبة باسم",phCalcName:"مثال: سبانش لاتيه 12 أونصة",bSaveCalc:"حفظ الحسبة",savedCalcs:"الحسبات المحفوظة",noCalcs:"لا توجد حسبات محفوظة.",calcUnnamed:"حسبة بدون اسم",kCost:"التكلفة",kSell:"البيع",kProfit:"الربح",kMargin:"الهامش",bOpen:"فتح",bDelete:"حذف",bEdit:"تعديل",
navRecipesH:"ريسيبياتي الخاصة",lDrinkName:"اسم المشروب",phDrinkName:"مثال: آيس لاتيه خاص",lType:"التصنيف",lCupSize:"حجم الكوب (مل)",lExtTime:"زمن الاستخلاص",lTemp:"الحرارة",lGrind:"درجة الطحن",lPhoto:"صورة المشروب",bRemovePhoto:"إزالة الصورة",lIngLines:"المقادير والكميات (سطر لكل مكوّن)",lStepLines:"طريقة التحضير (سطر لكل خطوة)",lNotes:"ملاحظاتك",phNotes:"الطعم، الطحن، الوقت، التعديلات...",bSaveRecipe:"حفظ الوصفة",bSaveChanges:"حفظ التعديلات",bCancelEdit:"إلغاء",savedRecipes:"الوصفات المحفوظة",myPhotos:"صوري المحفوظة",noPhotos:"الصور التي ترفقها مع وصفاتك تظهر هنا.",noRecipes:"ما حفظت وصفاتك بعد. أضف أول ريسيبي لك من النموذج أعلاه.",
saveHintGuest:"تُحفظ وصفاتك وصورها على هذا الجهاز. أنشئ حسابًا من «حسابي» لتكون بياناتك خاصة ومحمية بكلمة مرور.",saveHintUser:"تُحفظ وصفاتك وصورها في حساب {n} على هذا الجهاز.",
navFavsH:"المفضلة",noFavs:"لا توجد وصفات في المفضلة بعد. اضغط ♡ على أي وصفة لإضافتها.",
lQuery:"كلمة البحث",phSearch:"مثال: حليب، كراميل، إثيوبيا، طحن، milk...",lSection:"القسم",lDrinkType:"نوع المشروب",lSort:"الترتيب",lFavOnly:"المفضلة فقط",searchHint:"يبحث بالعربية والإنجليزية في الأسماء والمقادير والخطوات والمعدات والدروس والملاحظات.",
scAll:"كل الأقسام",scRecipes:"الوصفات",scEncy:"الموسوعة",scEquip:"المعدات",scTraining:"التدريب",scNotes:"الملاحظات",allTypes:"كل الأنواع",sortRel:"الأكثر صلة",sortName:"الاسم (أ–ي)",sortNew:"الأحدث",results:"{n} نتيجة",noResults:"لا توجد نتائج. جرّب كلمة أخرى أو غيّر الفلاتر.",typeHint:"اكتب كلمة للبحث، أو اختر نوع مشروب لعرض وصفاته.",
fromLib:"من المكتبة",mine:"وصفتي",lblSize:"الحجم",lblRatio:"النسبة",ml:"مل",
addLesson:"إضافة درس",editLesson:"تعديل الدرس",lCourse:"الدورة / المجموعة",phCourse:"مثال: دورة الباريستا للمبتدئين",lLessonTitle:"عنوان الدرس",lLevel:"المستوى",lCategory:"التصنيف",lContent:"محتوى الدرس",lImages:"صور",lFiles:"ملفات (PDF، فيديو، مستندات...)",bSaveLesson:"حفظ الدرس",myLessons:"دروسي ودوراتي",basicsTitle:"أساسيات للتعلم",noLessons:"أضف دروسك الخاصة وصورك وملفاتك، ونظّمها في دورات.",noCourse:"دروس بدون دورة",images:"صور",files:"ملفات",fileTooBig:"الملف {f} أكبر من 25 ميغابايت",
secNotes:"مفكرة تجارب القهوة",lNoteTitle:"عنوان الملاحظة",phNoteTitle:"مثال: تجربة محصول إثيوبي",phNoteText:"نوع البن، المحصول، المعالجة، التحميص، الطحن، الجرعة، الوقت والطعم...",bSaveNote:"حفظ الملاحظة",noNotes:"لا توجد ملاحظات محفوظة بعد.",noteNeed:"اكتب عنوان الملاحظة ومحتواها أولًا.",
guest:"ضيف",login:"تسجيل الدخول",myAccount:"حسابي",
ingredients:"المقادير",method:"طريقة التحضير",qty:"الكمية",asNeeded:"حسب الحاجة",bFav:"♡ أضف للمفضلة",bFavOn:"♥ في المفضلة",bScale:"⚖ تكبير/تصغير",bCost:"▦ احسب التكلفة",bCopy:"＋ انسخ إلى ريسيبياتي",copySuffix:" (نسختي)",
exDose:"الجرعة",exYield:"الناتج",exRatio:"النسبة",exTime:"زمن الاستخلاص",exTemp:"الحرارة",exPress:"الضغط",exGrind:"الطحن",exCup:"حجم الكوب",
tFavAdd:"أُضيفت إلى المفضلة",tFavDel:"أُزيلت من المفضلة",tSaved:"تم الحفظ",tUpdated:"تم التحديث",tDeleted:"تم الحذف",tCopied:"تم النسخ — عدّلها كما تريد",tCostHint:"أدخل سعر كل عبوة لحساب التكلفة",confirmDel:"هل تريد الحذف؟ لا يمكن التراجع.",imgErr:"تعذّر قراءة الصورة",
ssSaving:"جارٍ الحفظ…",ssSaved:"✓ محفوظ على الجهاز",ssErr:"⚠ تعذّر الحفظ",
accGuestNote:"أنت تستخدم المكتبة كـ <b>ضيف</b>. أنشئ حسابًا لتكون وصفاتك ومفضلتك وصورك ودروسك خاصة بك ومحمية بكلمة مرور، ويمكن لأكثر من شخص استخدام نفس الجهاز بحسابات منفصلة.",
lUser:"اسم المستخدم",lPass:"كلمة المرور",bLogin:"دخول",createAcc:"إنشاء حساب جديد",lDisplay:"الاسم الظاهر",phDisplay:"مثال: أبو دحيم",lUserEn:"اسم المستخدم (أحرف إنجليزية وأرقام)",lPassMin:"كلمة المرور (6 أحرف على الأقل)",lPass2:"تأكيد كلمة المرور",moveGuest:"انقل بياناتي الحالية (كضيف) إلى الحساب الجديد",bCreate:"إنشاء الحساب",
badLogin:"اسم المستخدم أو كلمة المرور غير صحيحة",tooMany:"محاولات كثيرة. انتظر {s} ثانية.",userTaken:"اسم المستخدم مستخدم مسبقًا",passMismatch:"كلمتا المرور غير متطابقتين",passShort:"كلمة المرور قصيرة (6 أحرف على الأقل)",userBad:"اسم المستخدم: 3–20 حرفًا إنجليزيًا أو أرقامًا أو _",welcomeBack:"أهلًا {n}",accCreated:"تم إنشاء حسابك، أهلًا {n}",loggedOut:"تم تسجيل الخروج",
memberSince:"عضو منذ",bLogout:"تسجيل الخروج",bChangeUser:"تغيير اسم المستخدم",bChangePass:"تغيير كلمة المرور",bDelAcc:"حذف الحساب",lockOpt:"اطلب كلمة المرور عند فتح التطبيق",curPass:"كلمة المرور الحالية:",newPass:"كلمة المرور الجديدة (6 أحرف على الأقل):",newUser:"اسم المستخدم الجديد:",wrongPass:"كلمة المرور الحالية غير صحيحة",passChanged:"تم تغيير كلمة المرور",userChanged:"تم تغيير اسم المستخدم",delAccConfirm:"سيتم حذف الحساب وجميع بياناته وصوره وملفاته نهائيًا من هذا الجهاز. هل أنت متأكد؟",accDeleted:"تم حذف الحساب",
profileTitle:"الملف الشخصي",lAvatar:"الصورة الشخصية",bRemoveAvatar:"استخدام الصورة الافتراضية",lTagline:"الوصف تحت الاسم",
installTitle:"تثبيت التطبيق",installIOS:"على iPhone: افتح الموقع في Safari ← زر المشاركة ⬆ ← «إضافة إلى الشاشة الرئيسية».",installMac:"على MacBook (Safari): من شريط القوائم «ملف» ← «إضافة إلى Dock».",installChrome:"في Chrome أو Edge: أيقونة التثبيت في شريط العنوان، أو القائمة ⋮ ← «تثبيت Barista».",bInstall:"تثبيت الآن",installed:"التطبيق مثبت ويعمل كتطبيق مستقل ✓",
backupTitle:"النسخ الاحتياطي ونقل البيانات",backupHint:"تُحفظ بياناتك على هذا الجهاز. لنقلها إلى جهاز آخر (مثل iPhone ↔ MacBook): صدّر نسخة احتياطية هنا ثم استوردها على الجهاز الآخر. ينصح بالتصدير بانتظام.",bExport:"⬇ تصدير نسخة احتياطية",bImport:"⬆ استيراد نسخة",exported:"تم تصدير النسخة الاحتياطية",imported:"تم الاستيراد: {n} عنصرًا جديدًا",badFile:"الملف غير صالح. اختر ملف نسخة احتياطية من هذا التطبيق.",
storageUse:"المساحة المستخدمة على هذا الجهاز: {u}",langTitle:"اللغة",
lockHint:"أدخل كلمة المرور لفتح مكتبتك",bUnlock:"فتح",bSwitchUser:"تبديل المستخدم",
homeLibrary:"{n} وصفة بالصور والمقادير وخطوات التحضير وأزمنة الاستخلاص.",homeEncy:"الأصناف، المعالجة، التحميص، الطحن، طرق التحضير، واستخلاص الإسبريسو.",homeEquip:"الماكينات، المطاحن، أدوات الدك، أباريق الحليب، أدوات البار، التنظيف وحل المشكلات.",homeTools:"الجرعة والاستخلاص، نسب التحضير، الدفعات الكبيرة، تكبير الوصفات، وتحويل الوحدات.",homeCost:"أسعار المكونات، تكلفة الكوب، الربح الإجمالي والصافي، الهامش، وتوقع المبيعات.",homeRecipes:"أضف وصفاتك مع صورها واحفظ المقادير والخطوات والملاحظات.",homeSearch:"ابحث بالعربية والإنجليزية مع فلترة وترتيب النتائج.",homeLearn:"دروسك ودوراتك الخاصة مع الصور والملفات.",homeAccount:"حساب خاص، صورتك الشخصية، تثبيت التطبيق والنسخ الاحتياطي.",openSec:"افتح القسم",
cur:"ر.س",trainTag:"تدريب",knowTag:"معرفة",equipTag:"معدات",noteTag:"ملاحظة",lessonTag:"درسي",diagTitle:"تشخيص المشكلة وحلها",thCase:"الحالة",thSigns:"العلامات",thFix:"الحل",thRatioM:"النسبة",thGrindM:"الطحن",thTimeM:"الوقت",thTempM:"الحرارة"
},en:{
heroSub:"Specialty coffee, your own recipes, and your journey in the world of drinks.",welcomeSub:"Explore coffee, sharpen your skills and save your recipes your way.",welcome:"Welcome to your personal library",welcomeUser:"Welcome {n} to your personal library",
stLib:"ready recipes in the library",stMine:"of my recipes",stFav:"favorites",stLessons:"my training lessons",
navHome:"Home",navLibrary:"Recipe library",navEncy:"Coffee encyclopedia",navEquip:"Equipment & tools",navTools:"Smart calculators",navCost:"Cost & profit",navRecipes:"My recipes",navFavs:"Favorites",navSearch:"Advanced search",navLearn:"Training & lessons",navNotes:"My notes",navAccount:"Account & settings",
secHome:"Library sections",phGlobal:"Search a recipe, ingredient or topic...",featured:"Featured recipes",phLib:"Search recipes and ingredients...",libIntro:"Drink photos, exact measurements, preparation steps and extraction times. Tap any recipe for details.",
phEncy:"Search the encyclopedia...",phEquip:"Search equipment...",all:"All",
tShot:"Dose & extraction calculator",lDose:"Dose (g)",lYield:"Yield (g)",lTimeS:"Time (s)",lTempC:"Temperature (°C)",lPressure:"Pressure (bar)",lGrindSet:"Grind setting",lCoffeeName:"Coffee used",phCoffeeName:"e.g. Ethiopia Guji – washed",lTaste:"Taste & notes",phTaste:"Sweet, gentle acidity...",rRatio:"Brew ratio",rFlow:"Flow rate",rFlowUnit:"g/second",bSaveShot:"Save to shot log",tTimer:"Extraction timer",timerHint:"Start with the pump and stop when you reach the yield.",bStart:"Start",bStop:"Stop",bContinue:"Resume",bUseTime:"Use this time",bReset:"Reset",timerNote:"Common espresso reference: 25–30 seconds from pump start. Taste is the final judge.",
shotLog:"Shot log",shotLogHint:"Select two or more shots to compare",ristretto:"Ristretto",normale:"Normale",lungo:"Lungo",compareTitle:"Shot comparison",noShots:"No saved shots yet.",
thDate:"Date",thCoffee:"Coffee",thRatio:"Ratio",thTime:"Time",thTemp:"Temp",thPress:"Pressure",thGrind:"Grind",thNotes:"Notes",thFlow:"Flow",
tRatio:"Brew ratios & large batches",lCoffeeG:"Coffee (g)",lRatioN:"Ratio (15 means 1:15)",rWater:"Suggested water:",uG:"g",lWaterAvail:"Water available (g)",rCoffeeNeed:"Coffee needed:",
tBatch:"Large batch (several litres)",batchHint:"Enter how much finished coffee you need; we calculate coffee and water, including the water the grounds absorb.",lBatchL:"Finished coffee (L)",lCupMl:"Cup size (ml)",lAbsorb:"Absorption (g water per g coffee)",rBatchCoffee:"Coffee needed",rBatchWater:"Water needed",rBatchCups:"Number of cups",
tScale:"Recipe scaling",scaleHint:"Pick a recipe and set the new number of servings, or type a factor directly (0.5 or 2).",lRecipe:"Recipe",lBaseServ:"Original servings",lTargetServ:"New servings",lFactor:"Factor",lOutUnit:"Output units",unitsAsIs:"As is (g / ml)",unitsOz:"Ounces",lCustomIng:"Ingredients (one per line)",phIngLines:"Espresso 36 g\nMilk 200 ml\nIce 150 g",customIng:"✎ Type my own ingredients",grpLib:"Library",grpMine:"My recipes",thOrig:"Original",thScaled:"Scaled",cupTotal:"Total volume",
tUnits:"Unit conversion",lKind:"Type",lValue:"Value",lFrom:"From",lTo:"To",rResult:"Result:",kVol:"Volume",kWt:"Weight",kTemp:"Temperature",quickRef:"Quick reference",
navCostH:"Cost & profit",cPantry:"Ingredient prices",pantryHint:"Record each ingredient's purchase price and pack size once. When a price changes, edit it here and every linked calculation updates automatically.",thIng:"Ingredient",thPackPrice:"Pack price",thPackSize:"Pack size",thUnit:"Unit",thUnitPrice:"Unit price",thUpdated:"Updated",bAddIng:"+ Add ingredient",bSeedPantry:"Add common ingredients (example prices)",pantryEmpty:"No prices saved yet.",
cDrink:"Drink cost",drinkHint:"Type an ingredient name; if it exists in “Ingredient prices” it links to the saved price automatically (🔗).",thUsed:"Used per cup",thCupCost:"Cost per cup",bAddRow:"+ Add line",bResetDefault:"Reset to default",
cProfit:"Profit & pricing",lSell:"Selling price",lOpCup:"Operating cost per cup",lTargetPct:"Target ingredient cost %",lVat:"Selling price includes 15% VAT",
rCogs:"Ingredient cost (COGS)",rTotalCup:"Full cost per cup",rNet:"Net price excl. VAT",rGross:"Gross profit per cup",rNetProfit:"Net profit per cup",rGrossMargin:"Gross margin",rNetMargin:"Net margin",rCogsPct:"COGS %",rSuggest:"Suggested price (COGS {p}%{v})",inclVat:" incl. VAT",
grossNetNote:"Gross profit = net selling price − ingredient cost only. Net profit = gross profit − operating expenses (salaries, rent, electricity...). Use net profit to see what you really earn.",
projTitle:"Sales & profit projection",lCupsDay:"Cups sold per day",lDaysMonth:"Working days per month",lFixedMonth:"Extra fixed costs per month",pDay:"Per day",pMonth:"Per month",pYear:"Per year",pCups:"Cups",pRevenue:"Revenue (excl. VAT)",pCogs:"Ingredient cost",pGross:"Gross profit",pOp:"Operating costs",pNet:"Net profit",pBreak:"Break-even",pBreakTxt:"{n} cups per day to cover fixed costs",pBreakNo:"Price does not cover the cost",
lSaveCalc:"Save this calculation as",phCalcName:"e.g. Spanish latte 12 oz",bSaveCalc:"Save calculation",savedCalcs:"Saved calculations",noCalcs:"No saved calculations.",calcUnnamed:"Untitled calculation",kCost:"Cost",kSell:"Price",kProfit:"Profit",kMargin:"Margin",bOpen:"Open",bDelete:"Delete",bEdit:"Edit",
navRecipesH:"My recipes",lDrinkName:"Drink name",phDrinkName:"e.g. Signature iced latte",lType:"Category",lCupSize:"Cup size (ml)",lExtTime:"Extraction time",lTemp:"Temperature",lGrind:"Grind",lPhoto:"Drink photo",bRemovePhoto:"Remove photo",lIngLines:"Ingredients & quantities (one per line)",lStepLines:"Method (one step per line)",lNotes:"Your notes",phNotes:"Taste, grind, time, adjustments...",bSaveRecipe:"Save recipe",bSaveChanges:"Save changes",bCancelEdit:"Cancel",savedRecipes:"Saved recipes",myPhotos:"My saved photos",noPhotos:"Photos you attach to your recipes appear here.",noRecipes:"No recipes yet. Add your first one using the form above.",
saveHintGuest:"Your recipes and photos are saved on this device. Create an account in “Account” to keep your data private and password-protected.",saveHintUser:"Your recipes and photos are saved in {n}'s account on this device.",
navFavsH:"Favorites",noFavs:"No favorites yet. Tap ♡ on any recipe to add it.",
lQuery:"Search",phSearch:"e.g. milk, caramel, Ethiopia, grind, حليب...",lSection:"Section",lDrinkType:"Drink type",lSort:"Sort by",lFavOnly:"Favorites only",searchHint:"Searches Arabic and English across names, ingredients, steps, equipment, lessons and notes.",
scAll:"All sections",scRecipes:"Recipes",scEncy:"Encyclopedia",scEquip:"Equipment",scTraining:"Training",scNotes:"Notes",allTypes:"All types",sortRel:"Most relevant",sortName:"Name (A–Z)",sortNew:"Newest",results:"{n} results",noResults:"No results. Try another word or change the filters.",typeHint:"Type a word to search, or pick a drink type to list its recipes.",
fromLib:"Library",mine:"Mine",lblSize:"Size",lblRatio:"Ratio",ml:"ml",
addLesson:"Add a lesson",editLesson:"Edit lesson",lCourse:"Course / group",phCourse:"e.g. Barista course for beginners",lLessonTitle:"Lesson title",lLevel:"Level",lCategory:"Category",lContent:"Lesson content",lImages:"Images",lFiles:"Files (PDF, video, documents...)",bSaveLesson:"Save lesson",myLessons:"My lessons & courses",basicsTitle:"Learning basics",noLessons:"Add your own lessons, images and files and organise them into courses.",noCourse:"Lessons without a course",images:"images",files:"files",fileTooBig:"The file {f} is larger than 25 MB",
secNotes:"Coffee tasting notebook",lNoteTitle:"Note title",phNoteTitle:"e.g. Ethiopian lot trial",phNoteText:"Coffee, lot, process, roast, grind, dose, time and taste...",bSaveNote:"Save note",noNotes:"No saved notes yet.",noteNeed:"Please write a title and content first.",
guest:"Guest",login:"Sign in",myAccount:"My account",
ingredients:"Ingredients",method:"Method",qty:"Quantity",asNeeded:"As needed",bFav:"♡ Add to favorites",bFavOn:"♥ In favorites",bScale:"⚖ Scale",bCost:"▦ Calculate cost",bCopy:"＋ Copy to my recipes",copySuffix:" (my copy)",
exDose:"Dose",exYield:"Yield",exRatio:"Ratio",exTime:"Extraction time",exTemp:"Temperature",exPress:"Pressure",exGrind:"Grind",exCup:"Cup size",
tFavAdd:"Added to favorites",tFavDel:"Removed from favorites",tSaved:"Saved",tUpdated:"Updated",tDeleted:"Deleted",tCopied:"Copied — edit it as you like",tCostHint:"Enter each pack price to calculate the cost",confirmDel:"Delete this? This cannot be undone.",imgErr:"Could not read the image",
ssSaving:"Saving…",ssSaved:"✓ Saved on device",ssErr:"⚠ Save failed",
accGuestNote:"You are using the library as a <b>guest</b>. Create an account to keep your recipes, favorites, photos and lessons private and password-protected. Several people can use the same device with separate accounts.",
lUser:"Username",lPass:"Password",bLogin:"Sign in",createAcc:"Create a new account",lDisplay:"Display name",phDisplay:"e.g. Abu Dahem",lUserEn:"Username (English letters & numbers)",lPassMin:"Password (at least 6 characters)",lPass2:"Confirm password",moveGuest:"Move my current (guest) data into the new account",bCreate:"Create account",
badLogin:"Incorrect username or password",tooMany:"Too many attempts. Wait {s} seconds.",userTaken:"That username is already taken",passMismatch:"Passwords don't match",passShort:"Password too short (at least 6 characters)",userBad:"Username: 3–20 English letters, numbers or _",welcomeBack:"Welcome {n}",accCreated:"Account created — welcome {n}",loggedOut:"Signed out",
memberSince:"Member since",bLogout:"Sign out",bChangeUser:"Change username",bChangePass:"Change password",bDelAcc:"Delete account",lockOpt:"Ask for my password when the app opens",curPass:"Current password:",newPass:"New password (at least 6 characters):",newUser:"New username:",wrongPass:"Current password is incorrect",passChanged:"Password changed",userChanged:"Username changed",delAccConfirm:"This permanently deletes the account and all its data, photos and files from this device. Are you sure?",accDeleted:"Account deleted",
profileTitle:"Profile",lAvatar:"Profile photo",bRemoveAvatar:"Use the default photo",lTagline:"Line under your name",
installTitle:"Install the app",installIOS:"iPhone: open the site in Safari → Share ⬆ → “Add to Home Screen”.",installMac:"MacBook (Safari): menu bar “File” → “Add to Dock”.",installChrome:"Chrome or Edge: the install icon in the address bar, or menu ⋮ → “Install Barista”.",bInstall:"Install now",installed:"Installed and running as a standalone app ✓",
backupTitle:"Backup & moving data",backupHint:"Your data is saved on this device. To move it to another device (e.g. iPhone ↔ MacBook), export a backup here and import it on the other device. Export regularly.",bExport:"⬇ Export backup",bImport:"⬆ Import backup",exported:"Backup exported",imported:"Imported: {n} new items",badFile:"Invalid file. Choose a backup file from this app.",
storageUse:"Space used on this device: {u}",langTitle:"Language",
lockHint:"Enter your password to open your library",bUnlock:"Unlock",bSwitchUser:"Switch user",
homeLibrary:"{n} recipes with photos, measurements, steps and extraction times.",homeEncy:"Varieties, processing, roasting, grinding, brewing methods and espresso extraction.",homeEquip:"Machines, grinders, tampers, milk pitchers, bar tools, cleaning and troubleshooting.",homeTools:"Dose & extraction, brew ratios, large batches, recipe scaling and unit conversion.",homeCost:"Ingredient prices, cost per cup, gross and net profit, margins and sales projection.",homeRecipes:"Add your recipes with photos and save ingredients, steps and notes.",homeSearch:"Search in Arabic and English with filters and sorting.",homeLearn:"Your own lessons and courses with images and files.",homeAccount:"Private account, profile photo, app install and backups.",openSec:"Open",
cur:"SAR",trainTag:"Training",knowTag:"Knowledge",equipTag:"Equipment",noteTag:"Note",lessonTag:"My lesson",diagTitle:"Diagnose and fix",thCase:"Problem",thSigns:"Signs",thFix:"Fix",thRatioM:"Ratio",thGrindM:"Grind",thTimeM:"Time",thTempM:"Temp"
}};
let LANG="ar";try{LANG=localStorage.getItem("bb_lang")||"ar"}catch(e){}
const t=(k,vars)=>{let s=(L[LANG]&&L[LANG][k])??L.ar[k]??k;if(vars)for(const[a,b]of Object.entries(vars))s=s.replace("{"+a+"}",b);return s};
const tx=v=>v==null?"":typeof v==="object"&&!Array.isArray(v)&&("ar" in v)?v[LANG]:v;
const both=v=>v==null?"":typeof v==="object"&&!Array.isArray(v)&&("ar" in v)?(Array.isArray(v.ar)?v.ar.join(" ")+" "+v.en.join(" "):v.ar+" "+v.en):String(v);

/* ============ HELPERS ============ */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
const AR="٠١٢٣٤٥٦٧٨٩";
const deAr=s=>String(s??"").replace(/[٠-٩]/g,d=>AR.indexOf(d));
function norm(s){return deAr(s).toLowerCase().replace(/[\u064B-\u0652\u0640]/g,"").replace(/[أإآ]/g,"ا").replace(/ة/g,"ه").replace(/ى/g,"ي")}
const terms=q=>norm(q).split(/\s+/).filter(Boolean);
function matches(text,ts){if(!ts.length)return true;const n=norm(text);return ts.every(x=>n.includes(x))}
function score(title,text,ts){const a=norm(title),b=norm(text);let s=0;ts.forEach(x=>{if(a.includes(x))s+=a.startsWith(x)?5:3;if(b.includes(x))s+=1});return s}
function hl(text,q){let h=esc(text);if(!q)return h;q.trim().split(/\s+/).filter(w=>w.length>1).forEach(w=>{const re=new RegExp("("+esc(w).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");h=h.replace(re,"<mark>$1</mark>")});return h}
const num=v=>Math.max(0,Number(v)||0);
const money=v=>(Number(v)||0).toFixed(2)+" "+t("cur");
const pct=v=>(isFinite(v)?v:0).toFixed(1)+"%";
function fmt(n){if(n==null||isNaN(n))return"";const r=Math.abs(n)>=100?Math.round(n):Math.round(n*10)/10;return String(r)}
function toast(m){const el=$("#toast");el.textContent=m;el.classList.add("show");clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove("show"),2000)}
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,8);
const fmtDate=ts=>ts?new Date(ts).toLocaleDateString(LANG==="ar"?"ar-SA-u-nu-latn":"en-GB",{day:"numeric",month:"short",year:"numeric"}):"";
const fmtSize=b=>b>1048576?(b/1048576).toFixed(1)+" MB":Math.max(1,Math.round(b/1024))+" KB";
const typeLabel=c=>TYPES[c]?tx(TYPES[c]):(c||"");
const unitLabel=u=>UNITS_LBL[u]?tx(UNITS_LBL[u]):(u||"");

/* ============ STORAGE ============ */
const DB=(()=>{let p=null;
 function open(){if(p)return p;p=new Promise((res,rej)=>{try{const r=indexedDB.open("baristaLibrary",1);r.onupgradeneeded=()=>r.result.createObjectStore("kv");r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)}catch(e){rej(e)}});return p}
 function tx_(mode,fn){return open().then(db=>new Promise((res,rej)=>{const tr=db.transaction("kv",mode);const r=fn(tr.objectStore("kv"));tr.oncomplete=()=>res(r&&r.result);tr.onerror=()=>rej(tr.error);tr.onabort=()=>rej(tr.error)}))}
 const ls={get:k=>{try{return JSON.parse(localStorage.getItem("kv:"+k))}catch(e){return null}},set:(k,v)=>{localStorage.setItem("kv:"+k,JSON.stringify(v))},del:k=>{try{localStorage.removeItem("kv:"+k)}catch(e){}}};
 return{get:k=>tx_("readonly",s=>s.get(k)).catch(()=>ls.get(k)),set:(k,v)=>tx_("readwrite",s=>s.put(v,k)).catch(()=>ls.set(k,v)),del:k=>tx_("readwrite",s=>s.delete(k)).catch(()=>ls.del(k))}})();
try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist()}catch(e){}
function setSaveState(s){const el=$("#saveState");el.className="saveState"+(s==="ok"?" ok":s==="err"?" err":"");el.textContent=s==="saving"?t("ssSaving"):s==="err"?t("ssErr"):t("ssSaved")}

/* ============ STATE ============ */
const S={uid:"guest",user:null,users:[],recipes:[],notes:[],favs:[],costs:[],pantry:[],shots:[],lessons:[],profile:{}};
const KEYS=["recipes","notes","favs","costs","pantry","shots","lessons","profile"];
const imgCache=new Map();let avatarData=null;
async function save(k){setSaveState("saving");try{await DB.set(S.uid+":"+k,S[k]);setSaveState("ok")}catch(e){setSaveState("err");toast(t("ssErr"))}updateStats()}
async function hashPw(pw,salt){const s=salt+"|"+pw;try{const enc=new TextEncoder();const key=await crypto.subtle.importKey("raw",enc.encode(pw),"PBKDF2",false,["deriveBits"]);const bits=await crypto.subtle.deriveBits({name:"PBKDF2",salt:enc.encode(salt),iterations:120000,hash:"SHA-256"},key,256);return"p2:"+[...new Uint8Array(bits)].map(x=>x.toString(16).padStart(2,"0")).join("")}catch(e){let h=5381;for(const c of s)h=((h<<5)+h+c.charCodeAt(0))|0;return"h"+h}}
function getSid(){try{return localStorage.getItem("bb_session")}catch(e){return null}}
function setSession(id){try{id?localStorage.setItem("bb_session",id):localStorage.removeItem("bb_session");sessionStorage.removeItem("bb_unlocked");if(id)sessionStorage.setItem("bb_unlocked",id)}catch(e){}}
const TYPE_MAP={"قهوة مختصة":"specialty","إسبريسو":"espresso","مشروب ساخن":"hot","مشروب بارد":"cold","موكتيل":"mocktail","عصير وسموذي":"juice","كوكتيل":"cocktail","أخرى":"other"};
async function loadSession(){
 S.users=(await DB.get("users"))||[];
 S.user=S.users.find(u=>u.id===getSid())||null;S.uid=S.user?S.user.id:"guest";
 for(const k of KEYS)S[k]=(await DB.get(S.uid+":"+k))||(k==="profile"?{}:[]);
 S.recipes.forEach(r=>{if(TYPE_MAP[r.type])r.type=TYPE_MAP[r.type]});
 avatarData=(await DB.get("avatar:"+S.uid))||null;imgCache.clear();
 renderAll();checkLock();setSaveState("ok");
}
async function migrateOld(){
 if(await DB.get("migratedV1"))return;
 try{const r=JSON.parse(localStorage.getItem("baristaRecipes")||"[]"),n=JSON.parse(localStorage.getItem("baristaNotes")||"[]");
  if(r.length){const cur=(await DB.get("guest:recipes"))||[];await DB.set("guest:recipes",cur.concat(r.map(x=>({...x,id:String(x.id),type:TYPE_MAP[x.type]||x.type,created:Number(x.id)||Date.now()}))))}
  if(n.length){const cur=(await DB.get("guest:notes"))||[];await DB.set("guest:notes",cur.concat(n))}}catch(e){}
 await DB.set("migratedV1",true);
}

/* ============ NAV & LANGUAGE ============ */
const NAV=[["home","⌂","navHome"],["library","📖","navLibrary"],["ency","◉","navEncy"],["equip","⚙","navEquip"],["tools","⚖","navTools"],["cost","▦","navCost"],["recipes","▤","navRecipes"],["favs","♥","navFavs"],["search","⌕","navSearch"],["learn","✧","navLearn"],["notes","✎","navNotes"],["account","👤","navAccount"]];
let current="home";
function renderNav(){$("#sideNav").innerHTML=NAV.map(([id,ic,k])=>`<button data-tab="${id}" class="${id===current?"active":""}"><span class="ic">${ic}</span>${t(k)}</button>`).join("");$("#topTabs").innerHTML=NAV.map(([id,,k])=>`<button data-tab="${id}" class="${id===current?"active":""}">${t(k)}</button>`).join("")}
function applyLang(){document.documentElement.lang=LANG;document.documentElement.dir=LANG==="ar"?"rtl":"ltr";$$("[data-i]").forEach(el=>el.textContent=t(el.dataset.i));$$("[data-ip]").forEach(el=>el.placeholder=t(el.dataset.ip));$("#langBtn").textContent=LANG==="ar"?"English":"العربية";renderNav()}
$("#langBtn").addEventListener("click",()=>{LANG=LANG==="ar"?"en":"ar";try{localStorage.setItem("bb_lang",LANG)}catch(e){}applyLang();renderAll();const m=$("#modal");if(m.classList.contains("open")&&m._reopen)m._reopen()});
function activate(id){current=id;$$(".section").forEach(s=>s.classList.toggle("active",s.id===id));$$("[data-tab]").forEach(b=>b.classList.toggle("active",b.dataset.tab===id));window.scrollTo({top:0,behavior:"smooth"});if(id==="search")runSearch();if(id==="favs")renderFavs();if(id==="account")renderAccount()}
function jumpTo(elId){const el=document.getElementById(elId);if(el)el.scrollIntoView({behavior:"smooth",block:"start"})}

document.addEventListener("click",e=>{const tb=e.target.closest("[data-tab]");if(tb){activate(tb.dataset.tab);return}
 const a=e.target.closest("[data-act]");if(!a)return;const id=a.dataset.id;
 switch(a.dataset.act){
  case"fav":e.stopPropagation();toggleFav(id);break;
  case"open":openRecipe(id);break;
  case"close":closeModal();break;
  case"edit":closeModal();editRecipe(id);break;
  case"del":deleteRecipe(id);break;
  case"copy":copyToMine(id);break;
  case"scale":closeModal();activate("tools");$("#scRecipe").value=id;renderScale();setTimeout(()=>jumpTo("t-scale"),350);break;
  case"cost":closeModal();costFromRecipe(id);break;
  case"jump":activate(a.dataset.sec);if(a.dataset.anchor)setTimeout(()=>jumpTo(a.dataset.anchor),350);break;
  case"anchor":jumpTo(a.dataset.to);break;
  case"loadCost":loadCost(id);break;
  case"delCost":if(confirm(t("confirmDel"))){S.costs=S.costs.filter(c=>c.id!==id);save("costs");renderCostList()}break;
  case"delNote":if(confirm(t("confirmDel"))){S.notes=S.notes.filter(n=>n.id!==id);save("notes");renderNotes()}break;
  case"delRow":costRows.splice(+a.dataset.i,1);renderCostRows();break;
  case"delPantry":if(confirm(t("confirmDel"))){S.pantry=S.pantry.filter(p=>p.id!==id);save("pantry");renderPantry();renderCostRows()}break;
  case"delShot":if(confirm(t("confirmDel"))){S.shots=S.shots.filter(s=>s.id!==id);save("shots");renderShots()}break;
  case"preset":$("#ratio").value=a.dataset.v;ratioCalc();break;
  case"libType":libType=a.dataset.v;renderLibrary();break;
  case"lesson":openLesson(id);break;
  case"editLesson":closeModal();editLesson(id);break;
  case"delLesson":deleteLesson(id);break;
  case"rmLsItem":lsRemove(a.dataset.kind,id);break;
  case"img":openImage(a.dataset.src||a.querySelector("img")?.src);break;
 }
});
$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
function showModal(html,reopen){$("#sheet").innerHTML=`<button class="close" data-act="close" aria-label="close">✕</button>`+html;const m=$("#modal");m.classList.add("open");m._reopen=reopen||null;document.body.style.overflow="hidden";hydrate($("#sheet"))}
function closeModal(){const m=$("#modal");m.classList.remove("open");m._reopen=null;document.body.style.overflow=""}
function openImage(src){if(!src)return;showModal(`<div style="background:#000"><img src="${src}" style="width:100%;display:block" alt=""></div>`)}

/* ============ RECIPES ============ */
const libR=()=>LIB.map(r=>({...r,lib:true}));
function allRecipes(){return[...libR(),...S.recipes]}
function findRecipe(id){return allRecipes().find(r=>r.id===id)}
const rName=r=>r.lib?tx(r.name):r.name;
const rSub=r=>r.lib?(LANG==="ar"?r.name.en:""):"";
function ingLines(r){return r.lib?r.ing.map(([n,q,u])=>q==null?(u?`${tx(n)} (${unitLabel(u)})`:tx(n)):`${tx(n)} ${q} ${unitLabel(u)}`):String(r.ingredients||"").split("\n").map(s=>s.trim()).filter(Boolean)}
function stepLines(r){return r.lib?tx(r.steps):String(r.steps||"").split("\n").map(s=>s.trim()).filter(Boolean)}
function recipeText(r){if(r.lib)return[both(r.name),both(TYPES[r.type]),r.ing.map(i=>both(i[0])).join(" "),both(r.steps),both(r.notes),Object.values(r.ext||{}).map(both).join(" ")].join(" ");const e=r.ext||{};return[r.name,both(TYPES[r.type])||r.type,r.ingredients,r.steps,r.notes,Object.values(e).join(" ")].join(" ")}
function ratioOf(e){return e&&Number(e.dose)&&Number(e.yield)?"1:"+(e.yield/e.dose).toFixed(1):null}
function phIcon(type){return TYPE_ICONS[type]||"☕"}
function thumbHTML(r){if(r.lib)return`<img src="${IMG(r.img)}" loading="lazy" alt="${esc(rName(r))}">`;if(r.hasImg)return`<img data-own="${esc(r.id)}" alt="${esc(r.name)}">`;return`<div class="ph">${phIcon(r.type)}</div>`}
function recipeCard(r,q=""){const fav=S.favs.includes(r.id),e=r.ext||{};const chips=[];if(r.size)chips.push(`<span><i>${t("lblSize")}</i> ${esc(r.size)} ${t("ml")}</span>`);if(e.time)chips.push(`<span><i>⏱</i> ${esc(tx(e.time))}</span>`);const ro=ratioOf(e);if(ro)chips.push(`<span><i>${t("lblRatio")}</i> ${ro}</span>`);
 return`<article class="card rcard" data-act="open" data-id="${esc(r.id)}"><div class="thumb">${thumbHTML(r)}<button class="fav ${fav?"on":""}" data-act="fav" data-id="${esc(r.id)}" aria-label="favorite">${fav?"♥":"♡"}</button><span class="badge ${r.lib?"":"mine"}">${r.lib?t("fromLib"):t("mine")}</span></div><div class="rbody"><span class="tag">${esc(typeLabel(r.type))}</span><h3>${hl(rName(r),q)}</h3>${rSub(r)?`<div class="en" dir="ltr" style="text-align:start">${esc(rSub(r))}</div>`:""}${chips.length?`<div class="kv">${chips.join("")}</div>`:""}</div></article>`}
async function getImg(key){let d=imgCache.get(key);if(d===undefined){d=(await DB.get(key))||null;imgCache.set(key,d)}return d}
async function hydrate(root){for(const img of (root||document).querySelectorAll("img[data-own],img[data-limg]")){if(img.getAttribute("src"))continue;const key=img.dataset.own?"img:"+S.uid+":"+img.dataset.own:"limg:"+S.uid+":"+img.dataset.limg;const d=await getImg(key);if(d)img.src=d;else img.replaceWith(Object.assign(document.createElement("div"),{className:"ph",textContent:"☕"}))}}
function grid(el,list,q,emptyMsg){el.innerHTML=list.length?list.map(r=>recipeCard(r,q)).join(""):`<div class="empty">${emptyMsg}</div>`;hydrate(el)}

let libType="all";
function renderLibrary(){const types=["all",...new Set(LIB.map(r=>r.type))];$("#libFilters").innerHTML=types.map(c=>`<button class="${c===libType?"on":""}" data-act="libType" data-v="${c}">${c==="all"?t("all"):esc(typeLabel(c))}</button>`).join("");
 const q=$("#libSearch").value,ts=terms(q);grid($("#libGrid"),libR().filter(r=>(libType==="all"||r.type===libType)&&matches(recipeText(r),ts)),q,t("noResults"))}
$("#libSearch").addEventListener("input",renderLibrary);

function openRecipe(id){const r=findRecipe(id);if(!r)return;const e=r.ext||{},fav=S.favs.includes(r.id);const ext=[];
 if(e.dose)ext.push([t("exDose"),e.dose+" "+t("uG")]);if(e.yield)ext.push([t("exYield"),e.yield+" "+t("uG")]);const ro=ratioOf(e);if(ro)ext.push([t("exRatio"),ro]);if(e.time)ext.push([t("exTime"),tx(e.time)]);if(e.temp)ext.push([t("exTemp"),tx(e.temp)]);if(e.pressure)ext.push([t("exPress"),tx(e.pressure)]);if(e.grind)ext.push([t("exGrind"),tx(e.grind)]);if(r.size)ext.push([t("exCup"),r.size+" "+t("ml")]);
 const ingT=r.lib?`<table class="tbl"><thead><tr><th>${t("thIng")}</th><th>${t("qty")}</th></tr></thead><tbody>${r.ing.map(([n,q,u])=>`<tr><td>${esc(tx(n))}</td><td>${q==null?esc(unitLabel(u)||t("asNeeded")):`<b>${q}</b> ${esc(unitLabel(u))}`}</td></tr>`).join("")}</tbody></table>`:`<ul class="steps">${ingLines(r).map(l=>`<li>${esc(l)}</li>`).join("")}</ul>`;
 const st=stepLines(r),notes=r.lib?tx(r.notes):r.notes;
 showModal(`<div class="hero-img">${r.lib?`<img src="${IMG(r.img).replace("w=800","w=1400")}" alt="">`:r.hasImg?`<img data-own="${esc(r.id)}" alt="" data-act="img" style="cursor:zoom-in">`:`<div class="ph">${phIcon(r.type)}</div>`}</div>
 <div class="sheet-body"><span class="tag">${esc(typeLabel(r.type))}</span>${r.lib?"":` <span class="tag" style="color:var(--green)">${t("mine")}</span>`}<h2>${esc(rName(r))}</h2>${rSub(r)?`<div class="small" dir="ltr" style="text-align:start">${esc(rSub(r))}</div>`:""}
 ${ext.length?`<div class="extbox">${ext.map(([k,v])=>`<div><b>${esc(v)}</b><span>${k}</span></div>`).join("")}</div>`:""}
 <h3 style="color:var(--gold);margin:16px 0 6px">${t("ingredients")}</h3>${ingT}
 ${st.length?`<h3 style="color:var(--gold);margin:16px 0 6px">${t("method")}</h3><ol class="steps">${st.map(s=>`<li>${esc(s)}</li>`).join("")}</ol>`:""}
 ${notes?`<div class="note">💡 ${esc(notes)}</div>`:""}
 <div class="actions"><button class="btn ${fav?"primary":""}" data-act="fav" data-id="${esc(r.id)}" id="mFav">${fav?t("bFavOn"):t("bFav")}</button><button class="btn" data-act="scale" data-id="${esc(r.id)}">${t("bScale")}</button><button class="btn" data-act="cost" data-id="${esc(r.id)}">${t("bCost")}</button>${r.lib?`<button class="btn" data-act="copy" data-id="${esc(r.id)}">${t("bCopy")}</button>`:`<button class="btn" data-act="edit" data-id="${esc(r.id)}">${t("bEdit")}</button><button class="btn danger" data-act="del" data-id="${esc(r.id)}">${t("bDelete")}</button>`}</div></div>`,()=>openRecipe(id))}

function toggleFav(id){const i=S.favs.indexOf(id);if(i>=0)S.favs.splice(i,1);else S.favs.push(id);save("favs");const on=S.favs.includes(id);
 $$(`.fav[data-id="${CSS.escape(id)}"]`).forEach(b=>{b.classList.toggle("on",on);b.textContent=on?"♥":"♡"});const m=$("#mFav");if(m&&m.dataset.id===id){m.classList.toggle("primary",on);m.textContent=on?t("bFavOn"):t("bFav")}
 toast(on?t("tFavAdd"):t("tFavDel"));if(current==="favs")renderFavs()}
function renderFavs(){grid($("#favGrid"),S.favs.map(findRecipe).filter(Boolean),"",t("noFavs"))}

/* my recipes */
let pendingImg=null,removeImg=false;
function fillTypeSelect(){const cur=$("#rtype").value;$("#rtype").innerHTML=Object.keys(TYPES).map(c=>`<option value="${c}">${esc(typeLabel(c))}</option>`).join("");if(cur)$("#rtype").value=cur}
function compressImage(file,M=1200){return new Promise((res,rej)=>{const fr=new FileReader();fr.onload=()=>{const im=new Image();im.onload=()=>{const sc=Math.min(1,M/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=Math.round(im.width*sc);c.height=Math.round(im.height*sc);c.getContext("2d").drawImage(im,0,0,c.width,c.height);res(c.toDataURL("image/jpeg",.82))};im.onerror=rej;im.src=fr.result};fr.onerror=rej;fr.readAsDataURL(file)})}
$("#rimg").addEventListener("change",async e=>{const f=e.target.files[0];if(!f)return;try{pendingImg=await compressImage(f);removeImg=false;showPrev(pendingImg)}catch(err){toast(t("imgErr"))}});
function showPrev(src){const p=$("#rimgPrev");if(src){p.style.display="flex";p.querySelector("img").src=src}else{p.style.display="none";p.querySelector("img").removeAttribute("src")}}
$("#rimgDel").addEventListener("click",()=>{pendingImg=null;removeImg=true;$("#rimg").value="";showPrev(null)});
function resetForm(){$("#recipeForm").reset();$("#editId").value="";pendingImg=null;removeImg=false;showPrev(null);$("#saveRecipeBtn").textContent=t("bSaveRecipe")}
$("#cancelEdit").addEventListener("click",resetForm);
$("#recipeForm").addEventListener("submit",async e=>{e.preventDefault();const old=$("#editId").value,id=old||uid(),prev=S.recipes.find(x=>x.id===id);
 const nv=v=>v===""?"":Number(v);
 const r={id,name:$("#rname").value.trim(),type:$("#rtype").value,size:$("#rsize").value,ingredients:$("#ring").value,steps:$("#rsteps").value,notes:$("#rnotes").value,
  ext:{dose:nv($("#rdose").value),yield:nv($("#ryield").value),time:$("#rtime").value.trim(),temp:$("#rtemp").value.trim(),pressure:$("#rpress").value.trim(),grind:$("#rgrind").value.trim()},
  hasImg:prev?!!prev.hasImg:false,created:prev?prev.created||Date.now():Date.now(),updated:Date.now()};
 const key="img:"+S.uid+":"+id;
 try{if(pendingImg){await DB.set(key,pendingImg);imgCache.set(key,pendingImg);r.hasImg=true}else if(removeImg){await DB.del(key);imgCache.delete(key);r.hasImg=false}}catch(err){setSaveState("err")}
 const i=S.recipes.findIndex(x=>x.id===id);if(i>=0)S.recipes[i]=r;else S.recipes.unshift(r);await save("recipes");resetForm();renderMine();toast(old?t("tUpdated"):t("tSaved"))});
function editRecipe(id){const r=S.recipes.find(x=>x.id===id);if(!r)return;activate("recipes");const e=r.ext||{};
 if(r.type&&![...$("#rtype").options].some(o=>o.value===r.type))$("#rtype").insertAdjacentHTML("beforeend",`<option value="${esc(r.type)}">${esc(r.type)}</option>`);
 const m={editId:r.id,rname:r.name,rtype:r.type,rsize:r.size,ring:r.ingredients,rsteps:r.steps,rnotes:r.notes,rdose:e.dose,ryield:e.yield,rtime:tx(e.time),rtemp:tx(e.temp),rpress:tx(e.pressure),rgrind:tx(e.grind)};
 for(const[k,v]of Object.entries(m))document.getElementById(k).value=v??"";pendingImg=null;removeImg=false;
 if(r.hasImg)getImg("img:"+S.uid+":"+r.id).then(d=>showPrev(d||null));else showPrev(null);$("#saveRecipeBtn").textContent=t("bSaveChanges")}
async function deleteRecipe(id){if(!confirm(t("confirmDel")))return;S.recipes=S.recipes.filter(x=>x.id!==id);S.favs=S.favs.filter(f=>f!==id);await DB.del("img:"+S.uid+":"+id);imgCache.delete("img:"+S.uid+":"+id);await save("recipes");await save("favs");closeModal();renderMine();toast(t("tDeleted"))}
async function copyToMine(id){const r=findRecipe(id);if(!r)return;const e=r.ext||{};const n={id:uid(),name:rName(r)+t("copySuffix"),type:r.type,size:r.size||"",ingredients:ingLines(r).join("\n"),steps:stepLines(r).join("\n"),notes:(r.lib?tx(r.notes):r.notes)||"",ext:{dose:e.dose||"",yield:e.yield||"",time:tx(e.time)||"",temp:tx(e.temp)||"",pressure:tx(e.pressure)||"",grind:tx(e.grind)||""},hasImg:false,created:Date.now()};
 S.recipes.unshift(n);await save("recipes");renderMine();closeModal();editRecipe(n.id);toast(t("tCopied"))}
function renderMine(){grid($("#myRecipes"),[...S.recipes],"",t("noRecipes"));renderGallery();fillScaleSelect();updateStats()}
function renderGallery(){const g=$("#gallery"),w=S.recipes.filter(r=>r.hasImg);if(!w.length){g.innerHTML=`<div class="empty">${t("noPhotos")}</div>`;return}
 g.innerHTML=w.map(r=>`<figure data-act="open" data-id="${esc(r.id)}"><img data-own="${esc(r.id)}" alt=""><figcaption>${esc(r.name)}</figcaption></figure>`).join("");hydrate(g)}

/* ============ ENCYCLOPEDIA & EQUIPMENT ============ */
function knowCard(it,q,tag){return`<article class="card"><span class="tag">${tag}</span><h3>${hl(tx(it[0]),q)}</h3><p>${hl(tx(it[1]),q)}</p></article>`}
function methodCard(m,q){return`<article class="card"><span class="tag">${t("knowTag")}</span><h3>${hl(tx(m[0]),q)}</h3><p>${hl(tx(m[1]),q)}</p><div class="kv"><span><i>${t("thRatioM")}</i> ${esc(m[2])}</span><span><i>${t("thGrindM")}</i> ${esc(tx(m[3]))}</span><span><i>${t("thTimeM")}</i> ${esc(tx(m[4]))}</span><span><i>${t("thTempM")}</i> ${esc(tx(m[5]))}</span></div></article>`}
function troubleTable(rows,q){return`<div class="box scroll" style="margin-top:12px"><b style="color:var(--gold)">${t("diagTitle")}</b><table class="tbl trouble" style="margin-top:6px"><thead><tr><th>${t("thCase")}</th><th>${t("thSigns")}</th><th>${t("thFix")}</th></tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${hl(tx(c),q)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`}
function renderKnowledge(SECS,prefix,body,jump,searchEl,tag){const q=$(searchEl).value,ts=terms(q);
 $(jump).innerHTML=SECS.map(s=>`<button data-act="anchor" data-to="${prefix}-${s.key}">${s.icon?s.icon+" ":""}${esc(tx(s.title))}</button>`).join("");
 $(body).innerHTML=SECS.map(sec=>{const items=(sec.items||[]).filter(it=>matches(both(it[0])+" "+both(it[1]),ts));const meth=(sec.methods||[]).filter(m=>matches(m.map(both).join(" "),ts));const rows=sec.table?sec.table.rows.filter(r=>matches(r.map(both).join(" "),ts)):[];const tr=(sec.trouble||[]).filter(r=>matches(r.map(both).join(" "),ts));
  if(ts.length&&!items.length&&!rows.length&&!tr.length&&!meth.length)return"";
  let h=`<h3 class="sub" id="${prefix}-${sec.key}">${sec.icon?sec.icon+" ":""}${esc(tx(sec.title))}</h3>`;
  if(rows.length)h+=`<div class="box scroll" style="margin-bottom:12px"><table class="tbl"><thead><tr>${tx(sec.table.head).map(x=>`<th>${x}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${hl(tx(c),q)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  if(items.length)h+=`<div class="grid">${items.map(it=>knowCard(it,q,tag)).join("")}</div>`;
  if(meth.length)h+=`<div class="grid">${meth.map(m=>methodCard(m,q)).join("")}</div>`;
  if(tr.length)h+=troubleTable(tr,q);return h}).join("")||`<div class="empty">${t("noResults")}</div>`}
const renderEncy=()=>renderKnowledge(ENCY,"ency","#encyBody","#encyJump","#encySearch",t("knowTag"));
const renderEquip=()=>renderKnowledge(EQUIP,"equip","#equipBody","#equipJump","#equipSearch",t("equipTag"));
$("#encySearch").addEventListener("input",renderEncy);$("#equipSearch").addEventListener("input",renderEquip);

/* ============ TOOLS ============ */
function renderToolJump(){$("#toolJump").innerHTML=[["t-shot","tShot"],["t-ratio","tRatio"],["t-scale","tScale"],["t-units","tUnits"]].map(([a,k])=>`<button data-act="anchor" data-to="${a}">${t(k)}</button>`).join("");$("#costJump").innerHTML=[["c-pantry","cPantry"],["c-drink","cDrink"],["c-profit","cProfit"]].map(([a,k])=>`<button data-act="anchor" data-to="${a}">${t(k)}</button>`).join("")}
/* shot calculator */
function shotStyle(x){return!x?"":x<1.5?t("ristretto"):x<=2.5?t("normale"):t("lungo")}
function shotCalc(){const d=num($("#shDose").value),y=num($("#shYield").value),tm=num($("#shTime").value),x=d?y/d:0;$("#shRatio").textContent=d?"1:"+x.toFixed(1):"—";$("#shStyle").textContent=shotStyle(x);$("#shFlow").textContent=tm?(y/tm).toFixed(2):"—"}
["shDose","shYield","shTime"].forEach(i=>$("#"+i).addEventListener("input",shotCalc));
$("#saveShot").addEventListener("click",()=>{S.shots.unshift({id:uid(),date:Date.now(),coffee:$("#shCoffee").value.trim(),dose:num($("#shDose").value),yield:num($("#shYield").value),time:num($("#shTime").value),temp:$("#shTemp").value,press:$("#shPress").value,grind:$("#shGrind").value.trim(),notes:$("#shNotes").value.trim()});save("shots");renderShots();toast(t("tSaved"))});
let cmpSel=new Set();
function renderShots(){const tb=$("#shotLog");if(!S.shots.length){tb.innerHTML=`<tbody><tr><td class="small">${t("noShots")}</td></tr></tbody>`;$("#shotCompare").innerHTML="";return}
 tb.innerHTML=`<thead><tr><th></th><th>${t("thDate")}</th><th>${t("thCoffee")}</th><th>${t("lDose")}</th><th>${t("lYield")}</th><th>${t("thRatio")}</th><th>${t("thTime")}</th><th>${t("thTemp")}</th><th>${t("thPress")}</th><th>${t("thGrind")}</th><th>${t("thNotes")}</th><th></th></tr></thead><tbody>${S.shots.map(s=>`<tr><td><input type="checkbox" class="cmp" value="${s.id}" ${cmpSel.has(s.id)?"checked":""}></td><td class="num">${fmtDate(s.date)}</td><td>${esc(s.coffee||"—")}</td><td class="num">${s.dose}</td><td class="num">${s.yield}</td><td class="num">${s.dose?"1:"+(s.yield/s.dose).toFixed(1):"—"}</td><td class="num">${s.time}s</td><td class="num">${esc(s.temp)}°</td><td class="num">${esc(s.press)}</td><td>${esc(s.grind)}</td><td>${esc(s.notes)}</td><td><button class="btn danger sm" data-act="delShot" data-id="${s.id}">✕</button></td></tr>`).join("")}</tbody>`;
 $$(".cmp").forEach(c=>c.addEventListener("change",()=>{c.checked?cmpSel.add(c.value):cmpSel.delete(c.value);renderCompare()}));renderCompare()}
function renderCompare(){const sel=S.shots.filter(s=>cmpSel.has(s.id));const el=$("#shotCompare");if(sel.length<2){el.innerHTML="";return}
 const rows=[[t("thCoffee"),s=>s.coffee||"—"],[t("lDose"),s=>s.dose],[t("lYield"),s=>s.yield],[t("thRatio"),s=>s.dose?"1:"+(s.yield/s.dose).toFixed(1):"—"],[t("thTime"),s=>s.time+"s"],[t("thFlow"),s=>s.time?(s.yield/s.time).toFixed(2)+" g/s":"—"],[t("thTemp"),s=>s.temp+"°"],[t("thPress"),s=>s.press],[t("thGrind"),s=>s.grind||"—"],[t("thNotes"),s=>s.notes||"—"]];
 el.innerHTML=`<h4 style="color:var(--gold);margin:14px 0 6px">${t("compareTitle")}</h4><div class="scroll"><table class="tbl"><thead><tr><th></th>${sel.map(s=>`<th class="num">${fmtDate(s.date)}</th>`).join("")}</tr></thead><tbody>${rows.map(([k,f])=>{const vals=sel.map(f);return`<tr><td>${k}</td>${vals.map((v,i)=>`<td class="num ${i&&String(v)!==String(vals[0])?"diff":""}">${esc(v)}</td>`).join("")}</tr>`}).join("")}</tbody></table></div>`}
/* timer */
let tmStart=0,tmAcc=0,tmRun=null;const tmMs=()=>tmAcc+(tmRun?Date.now()-tmStart:0);const tmFmt=ms=>{const s=ms/1000,m=Math.floor(s/60);return String(m).padStart(2,"0")+":"+(s%60).toFixed(1).padStart(4,"0")};
function tmTick(){$("#tmDisp").textContent=tmFmt(tmMs())}
$("#tmStart").addEventListener("click",()=>{if(tmRun){tmAcc+=Date.now()-tmStart;clearInterval(tmRun);tmRun=null;$("#tmStart").textContent=t("bContinue")}else{tmStart=Date.now();tmRun=setInterval(tmTick,100);$("#tmStart").textContent=t("bStop")}tmTick()});
$("#tmUse").addEventListener("click",()=>{const s=tmMs()/1000;if(!s)return;$("#shTime").value=s.toFixed(1);shotCalc();jumpTo("t-shot")});
$("#tmReset").addEventListener("click",()=>{clearInterval(tmRun);tmRun=null;tmAcc=0;$("#tmStart").textContent=t("bStart");tmTick()});
/* ratios & batch */
function ratioCalc(){$("#water").textContent=Math.round(num($("#dose").value)*num($("#ratio").value));const r2=num($("#ratio2").value);$("#dose2").textContent=r2?(num($("#water2").value)/r2).toFixed(1):"0";
 const V=num($("#bVol").value)*1000,R=num($("#bRatio").value),ab=num($("#bAbs").value),cup=num($("#bCup").value);const k=R-ab;
 if(V&&k>0){const d=V/k,w=d*R;$("#bCoffee").textContent=(d>=1000?(d/1000).toFixed(2)+" kg":Math.round(d)+" g");$("#bWater").textContent=(w/1000).toFixed(2)+" L";$("#bCups").textContent=cup?Math.floor(V/cup):"—"}else{$("#bCoffee").textContent=$("#bWater").textContent=$("#bCups").textContent="—"}}
["dose","ratio","water2","ratio2","bVol","bRatio","bCup","bAbs"].forEach(i=>$("#"+i).addEventListener("input",ratioCalc));
function renderPresets(){$("#ratioPresets").innerHTML=[[A("إسبريسو","Espresso"),"2"],[A("آيروبرس","AeroPress"),"13"],[A("V60","V60"),"16"],[A("كيمكس","Chemex"),"15"],[A("فرنش برس","French press"),"15"],[A("كولد برو","Cold brew"),"8"]].map(([n,v])=>`<button data-act="preset" data-v="${v}">${tx(n)} 1:${v}</button>`).join("")}
/* scaling */
function fillScaleSelect(){const cur=$("#scRecipe").value;$("#scRecipe").innerHTML=`<optgroup label="${t("grpLib")}">${LIB.map(r=>`<option value="${r.id}">${esc(tx(r.name))}</option>`).join("")}</optgroup>${S.recipes.length?`<optgroup label="${t("grpMine")}">${S.recipes.map(r=>`<option value="${esc(r.id)}">${esc(r.name)}</option>`).join("")}</optgroup>`:""}<option value="__custom">${t("customIng")}</option>`;if(cur&&[...$("#scRecipe").options].some(o=>o.value===cur))$("#scRecipe").value=cur;
 const cu=$("#scUnit").value;$("#scUnit").innerHTML=`<option value="asis">${t("unitsAsIs")}</option><option value="oz">${t("unitsOz")}</option>`;if(cu)$("#scUnit").value=cu;renderScale()}
const G_RE=/^(g|غ|غرام|جم|جرام|gram|grams)$/i,ML_RE=/^(ml|مل|ملل|مليلتر)$/i;
function convQty(q,u,mode){if(mode!=="oz")return[fmt(q),u];if(G_RE.test(u)||u==="g")return[(q/28.3495).toFixed(2),"oz"];if(ML_RE.test(u)||u==="ml")return[(q/29.5735).toFixed(2),"fl oz"];return[fmt(q),u]}
function scaleLine(line,f,mode){return deAr(line).replace(/(\d+(?:[.,]\d+)?)\s*([^\s\d.,]+)?/g,(m,n,u)=>{const v=parseFloat(n.replace(",","."))*f;if(u&&mode==="oz"&&(G_RE.test(u)||ML_RE.test(u))){const[a,b]=convQty(v,G_RE.test(u)?"g":"ml","oz");return a+" "+b}return fmt(v)+(u?" "+u:"")})}
function renderScale(){const id=$("#scRecipe").value,f=num($("#scFactor").value)||1,mode=$("#scUnit").value||"asis";$("#scCustomWrap").style.display=id==="__custom"?"block":"none";let rows=[];
 if(id==="__custom")rows=$("#scCustom").value.split("\n").filter(s=>s.trim()).map(l=>[esc(l),esc(scaleLine(l,f,mode))]);
 else{const r=findRecipe(id);if(!r)return;if(r.lib)rows=r.ing.map(([n,q,u])=>{if(q==null)return[esc(tx(n)),esc(tx(n)+" "+unitLabel(u))];const[a,b]=convQty(q*f,u,mode);return[esc(`${tx(n)} ${q} ${unitLabel(u)}`),`${esc(tx(n))} <b>${a}</b> ${esc(b==="oz"||b==="fl oz"?b:unitLabel(b))}`]});else rows=ingLines(r).map(l=>[esc(l),esc(scaleLine(l,f,mode))]);
  if(r.size){const[a,b]=convQty(r.size*f,"ml",mode);rows.push([esc(`${t("exCup")} ${r.size} ${t("ml")}`),`${t("cupTotal")} <b>${a}</b> ${b==="fl oz"?"fl oz":t("ml")}`])}}
 $("#scOut").innerHTML=rows.length?`<thead><tr><th>${t("thOrig")}</th><th>${t("thScaled")} ×${fmt(f)}</th></tr></thead><tbody>${rows.map(([a,b])=>`<tr><td>${a}</td><td>${b}</td></tr>`).join("")}</tbody>`:""}
function syncFactor(){const b=num($("#scBase").value),tg=num($("#scTarget").value);if(b)$("#scFactor").value=fmt(tg/b);renderScale()}
$("#scBase").addEventListener("input",syncFactor);$("#scTarget").addEventListener("input",syncFactor);["scFactor","scCustom"].forEach(i=>$("#"+i).addEventListener("input",renderScale));["scRecipe","scUnit"].forEach(i=>$("#"+i).addEventListener("change",renderScale));
/* units */
const UNITS={vol:{ml:[A("مل","ml"),1],l:[A("لتر","litre"),1000],floz:[A("أونصة سائلة","fl oz"),29.5735],cup:[A("كوب (240 مل)","cup (240 ml)"),240],tbsp:[A("ملعقة كبيرة","tablespoon"),15],tsp:[A("ملعقة صغيرة","teaspoon"),5],shot:[A("شوت (30 مل)","shot (30 ml)"),30]},wt:{g:[A("غرام","gram"),1],kg:[A("كيلوغرام","kilogram"),1000],oz:[A("أونصة","ounce (oz)"),28.3495],lb:[A("رطل","pound (lb)"),453.592]},temp:{c:[A("مئوي °م","Celsius °C"),0],f:[A("فهرنهايت °ف","Fahrenheit °F"),0]}};
function fillUnits(keep){const c=$("#ucCat").value||"vol";const prev=[$("#ucFrom").value,$("#ucTo").value];$("#ucCat").innerHTML=[["vol","kVol"],["wt","kWt"],["temp","kTemp"]].map(([v,k])=>`<option value="${v}">${t(k)}</option>`).join("");$("#ucCat").value=c;
 const o=Object.entries(UNITS[c]).map(([k,v])=>`<option value="${k}">${tx(v[0])}</option>`).join("");$("#ucFrom").innerHTML=o;$("#ucTo").innerHTML=o;if(keep&&prev[0]&&UNITS[c][prev[0]]){$("#ucFrom").value=prev[0];$("#ucTo").value=prev[1]}else $("#ucTo").selectedIndex=c==="vol"?2:1;
 const ref=c==="vol"?[["1 fl oz","29.6 ml"],["8 oz","237 ml"],["12 oz","355 ml"],["16 oz","473 ml"],[tx(A("1 ملعقة كبيرة","1 tablespoon")),"15 ml"],["1 shot","30 ml"]]:c==="wt"?[["1 oz","28.35 g"],["1 lb","453.6 g"],["1 kg","2.2 lb"],[tx(A("ملعقة بن ممسوحة","Level scoop of coffee")),"≈ 7 g"]]:[[tx(A("حليب مثالي","Ideal milk")),"60–65°C / 140–149°F"],[tx(A("ماء التقطير","Brew water")),"92–96°C / 198–205°F"],[tx(A("الماتشا","Matcha")),"75–80°C / 167–176°F"],[tx(A("الغليان","Boiling")),"100°C / 212°F"]];
 $("#ucRef").innerHTML=`<thead><tr><th>${t("quickRef")}</th><th></th></tr></thead><tbody>${ref.map(r=>`<tr><td>${r[0]}</td><td class="num" dir="ltr">${r[1]}</td></tr>`).join("")}</tbody>`;convert()}
function convert(){const c=$("#ucCat").value,v=Number($("#ucVal").value)||0,f=$("#ucFrom").value,to=$("#ucTo").value;let out;
 if(c==="temp"){const cv=f==="c"?v:(v-32)*5/9;out=to==="c"?cv:cv*9/5+32}else out=v*UNITS[c][f][1]/UNITS[c][to][1];
 $("#ucOut").textContent=(Math.round(out*100)/100)+" "+tx(UNITS[c][to][0]).replace(/\s*\(.*\)/,"")}
$("#ucCat").addEventListener("change",()=>fillUnits(false));["ucVal","ucFrom","ucTo"].forEach(i=>$("#"+i).addEventListener("input",convert));

/* ============ COST ============ */
const SEED=[[A("بن مختص","Specialty coffee"),120,1000,"g"],[A("حليب طازج","Fresh milk"),7,1000,"ml"],[A("حليب مكثف محلّى","Sweetened condensed milk"),7,397,"g"],[A("شراب (فانيلا/كراميل)","Syrup (vanilla/caramel)"),45,750,"ml"],[A("صوص شوكولاتة","Chocolate sauce"),55,1000,"ml"],[A("ثلج","Ice"),15,10000,"g"],[A("ماتشا","Matcha"),90,100,"g"],[A("كوب وغطاء","Cup & lid"),30,50,"pcs"]];
function pantryFind(name){const n=norm(name).trim();if(!n)return null;return S.pantry.find(p=>norm(p.n).trim()===n)||null}
function renderPantry(){const tb=$("#pantryRows");if(!S.pantry.length){tb.innerHTML=`<tr><td colspan="7" class="small">${t("pantryEmpty")}</td></tr>`}else
 tb.innerHTML=S.pantry.map(p=>`<tr><td><input data-pid="${p.id}" data-f="n" value="${esc(p.n)}" style="min-width:130px"></td><td><input type="number" step=".01" min="0" data-pid="${p.id}" data-f="p" value="${p.p}" style="width:90px"></td><td><input type="number" step="any" min="0" data-pid="${p.id}" data-f="s" value="${p.s}" style="width:90px"></td><td><select data-pid="${p.id}" data-f="unit" style="width:80px">${["g","ml","pcs"].map(u=>`<option value="${u}" ${p.unit===u?"selected":""}>${unitLabel(u)}</option>`).join("")}</select></td><td class="num" data-up="${p.id}">${p.s?(p.p/p.s).toFixed(4):"—"}</td><td class="num small">${fmtDate(p.upd)}</td><td><button class="btn danger sm" data-act="delPantry" data-id="${p.id}">✕</button></td></tr>`).join("");
 $("#pantryList")?.remove();document.body.insertAdjacentHTML("beforeend",`<datalist id="pantryList">${S.pantry.map(p=>`<option value="${esc(p.n)}">`).join("")}</datalist>`)}
let pantryT=null;
$("#pantryRows").addEventListener("input",e=>{const el=e.target,p=S.pantry.find(x=>x.id===el.dataset.pid);if(!p)return;const f=el.dataset.f;p[f]=f==="n"||f==="unit"?el.value:Number(el.value);p.upd=Date.now();const up=$(`[data-up="${p.id}"]`);if(up)up.textContent=p.s?(p.p/p.s).toFixed(4):"—";clearTimeout(pantryT);pantryT=setTimeout(()=>{save("pantry");renderCostRows(true)},400)});
$("#pantryRows").addEventListener("change",e=>{if(e.target.dataset.f==="n"||e.target.dataset.f==="unit")renderPantry()});
$("#addPantry").addEventListener("click",()=>{S.pantry.push({id:uid(),n:"",p:0,s:1000,unit:"g",upd:Date.now()});save("pantry");renderPantry();const ins=$$("#pantryRows input[data-f=n]");ins[ins.length-1]?.focus()});
$("#seedPantry").addEventListener("click",()=>{let n=0;SEED.forEach(([nm,p,s,u])=>{if(!pantryFind(tx(nm))){S.pantry.push({id:uid(),n:tx(nm),p,s,unit:u,upd:Date.now()});n++}});save("pantry");renderPantry();renderCostRows();toast("+"+n)});
const DEF_COST=()=>[{n:tx(A("بن مختص","Specialty coffee")),p:120,s:1000,u:18,unit:"g"},{n:tx(A("حليب طازج","Fresh milk")),p:7,s:1000,u:200,unit:"ml"},{n:tx(A("شراب (فانيلا/كراميل)","Syrup (vanilla/caramel)")),p:45,s:750,u:15,unit:"ml"},{n:tx(A("كوب وغطاء","Cup & lid")),p:30,s:50,u:1,unit:"pcs"}];
let costRows=null;
function effRow(r){const p=pantryFind(r.n);return p?{...r,p:p.p,s:p.s,unit:p.unit,linked:true}:{...r,linked:false}}
const rowCost=r=>{const e=effRow(r);return num(e.s)?num(e.p)/num(e.s)*num(e.u):0};
function renderCostRows(soft){if(!costRows)costRows=DEF_COST();const tb=$("#costRows");
 if(soft){costRows.forEach((r,i)=>{const e=effRow(r);const tr=tb.children[i];if(!tr)return;["p","s"].forEach(f=>{const el=tr.querySelector(`[data-f="${f}"]`);if(el&&e.linked){el.value=e[f];el.readOnly=true}});const c=tr.querySelector("[data-rc]");if(c)c.textContent=money(rowCost(r))});calcCost();return}
 tb.innerHTML=costRows.map((r,i)=>{const e=effRow(r);return`<tr><td><input data-i="${i}" data-f="n" value="${esc(r.n)}" list="pantryList" style="min-width:130px"></td><td><input type="number" step=".01" min="0" data-i="${i}" data-f="p" value="${e.p}" style="width:88px" ${e.linked?"readonly":""}></td><td><input type="number" step="any" min="0" data-i="${i}" data-f="s" value="${e.s}" style="width:85px" ${e.linked?"readonly":""}></td><td><input type="number" step="any" min="0" data-i="${i}" data-f="u" value="${r.u}" style="width:80px"></td><td class="small">${e.linked?"🔗 ":""}${esc(unitLabel(e.unit))}</td><td class="num" data-rc="${i}">${money(rowCost(r))}</td><td><button class="btn danger sm" data-act="delRow" data-i="${i}">✕</button></td></tr>`}).join("");calcCost()}
$("#costRows").addEventListener("input",e=>{const el=e.target,i=+el.dataset.i,f=el.dataset.f;if(f==null||!costRows[i])return;costRows[i][f]=f==="n"?el.value:Number(el.value);const c=$(`[data-rc="${i}"]`);if(c)c.textContent=money(rowCost(costRows[i]));calcCost()});
$("#costRows").addEventListener("change",e=>{if(e.target.dataset.f==="n"){const r=costRows[+e.target.dataset.i],p=pantryFind(r.n);if(p){r.unit=p.unit}renderCostRows()}});
$("#addCostRow").addEventListener("click",()=>{costRows.push({n:"",p:0,s:1000,u:0,unit:"g"});renderCostRows()});
$("#resetCost").addEventListener("click",()=>{costRows=DEF_COST();$("#opCost").value=2;$("#sellPrice").value=18;$("#targetPct").value=30;$("#vatIncl").checked=true;$("#costName").value="";renderCostRows()});
function costNumbers(rows,op,price,vat){const ing=rows.reduce((a,r)=>a+rowCost(r),0),net=vat?price/1.15:price,gross=net-ing,profit=gross-op;return{ing,total:ing+op,net,gross,profit}}
function calcCost(){const op=num($("#opCost").value),price=num($("#sellPrice").value),vat=$("#vatIncl").checked,tp=num($("#targetPct").value)||30;const c=costNumbers(costRows,op,price,vat);
 $("#rIng").textContent=money(c.ing);$("#rTotal").textContent=money(c.total);$("#rNet").textContent=money(c.net);
 const sg=(el,v)=>{el.textContent=money(v);el.classList.toggle("neg",v<0);el.classList.toggle("pos",v>0)};sg($("#rGross"),c.gross);sg($("#rProfit"),c.profit);
 $("#rGMargin").textContent=pct(c.net?c.gross/c.net*100:0);$("#rMargin").textContent=pct(c.net?c.profit/c.net*100:0);$("#rPct").textContent=pct(c.net?c.ing/c.net*100:0);
 $("#rSuggestLbl").textContent=t("rSuggest",{p:tp,v:vat?t("inclVat"):""});$("#rSuggest").textContent=money(c.ing/(tp/100)*(vat?1.15:1));
 const cups=num($("#pCups").value),days=num($("#pDays").value),fixed=num($("#pFixed").value);const per=(n,fx)=>({cups:n,rev:c.net*n,cogs:c.ing*n,gross:c.gross*n,op:op*n+fx,net:c.profit*n-fx});
 const cols=[per(cups,days?fixed/days:0),per(cups*days,fixed),per(cups*days*12,fixed*12)];const rowsP=[["pCups",x=>Math.round(x.cups).toLocaleString("en")],["pRevenue",x=>money(x.rev)],["pCogs",x=>money(x.cogs)],["pGross",x=>money(x.gross)],["pOp",x=>money(x.op)],["pNet",x=>`<b class="${x.net<0?"neg":"pos"}">${money(x.net)}</b>`]];
 const unitMargin=c.profit;const be=fixed&&days?(unitMargin>0?Math.ceil(fixed/days/unitMargin):null):null;
 $("#projTbl").innerHTML=`<thead><tr><th></th><th>${t("pDay")}</th><th>${t("pMonth")}</th><th>${t("pYear")}</th></tr></thead><tbody>${rowsP.map(([k,f])=>`<tr><td>${t(k)}</td>${cols.map(x=>`<td class="num">${f(x)}</td>`).join("")}</tr>`).join("")}${fixed?`<tr><td>${t("pBreak")}</td><td colspan="3">${be?t("pBreakTxt",{n:be}):`<span class="neg">${t("pBreakNo")}</span>`}</td></tr>`:""}</tbody>`}
["opCost","sellPrice","targetPct","vatIncl","pCups","pDays","pFixed"].forEach(i=>$("#"+i).addEventListener("input",calcCost));
const PACK={g:1000,ml:1000};
function parseIng(line){const l=deAr(line);const m=l.match(/(\d+(?:[.,]\d+)?)\s*(غرام|غ|جم|g|grams?|مل|ml|حبة|حبات|قطع|قطعة|pcs|ورقة|leaves)?/i);let n=(m?l.replace(m[0],""):l).replace(/[:\-–]/g," ").replace(/\s+/g," ").trim()||l.trim();if(!m)return{n,p:0,s:1,u:1,unit:"pcs"};let u=(m[2]||"").toLowerCase();u=/غ|جم|^g/.test(u)?"g":/مل|ml/.test(u)?"ml":"pcs";return{n,p:0,s:PACK[u]||1,u:parseFloat(m[1].replace(",",".")),unit:u}}
function matchPantry(name){const n=norm(name);return S.pantry.find(p=>{const pn=norm(p.n);return pn&&(n.includes(pn)||pn.includes(n))})}
function costFromRecipe(id){const r=findRecipe(id);if(!r)return;let rows=r.lib?r.ing.filter(x=>x[1]!=null).map(([n,q,u])=>({n:tx(n),p:0,s:PACK[u]||1,u:q,unit:u||"pcs"})):ingLines(r).map(parseIng);
 rows.forEach(x=>{const p=matchPantry(x.n);if(p)x.n=p.n});const cup=S.pantry.find(p=>p.unit==="pcs");rows.push(cup?{n:cup.n,p:cup.p,s:cup.s,u:1,unit:"pcs"}:{n:tx(A("كوب وغطاء","Cup & lid")),p:30,s:50,u:1,unit:"pcs"});
 costRows=rows;$("#costName").value=rName(r);activate("cost");renderCostRows();setTimeout(()=>jumpTo("c-drink"),350);toast(t("tCostHint"))}
$("#saveCost").addEventListener("click",()=>{const name=$("#costName").value.trim()||t("calcUnnamed");S.costs.unshift({id:uid(),name,rows:JSON.parse(JSON.stringify(costRows)),op:num($("#opCost").value),price:num($("#sellPrice").value),vat:$("#vatIncl").checked,target:num($("#targetPct").value),cups:num($("#pCups").value),days:num($("#pDays").value),fixed:num($("#pFixed").value),date:Date.now()});save("costs");renderCostList();toast(t("tSaved"))});
function loadCost(id){const c=S.costs.find(x=>x.id===id);if(!c)return;costRows=JSON.parse(JSON.stringify(c.rows));$("#opCost").value=c.op;$("#sellPrice").value=c.price;$("#vatIncl").checked=c.vat;$("#targetPct").value=c.target||30;$("#pCups").value=c.cups??80;$("#pDays").value=c.days??26;$("#pFixed").value=c.fixed??0;$("#costName").value=c.name;renderCostRows();jumpTo("c-drink")}
function renderCostList(){const el=$("#costList");if(!S.costs.length){el.innerHTML=`<div class="empty">${t("noCalcs")}</div>`;return}
 el.innerHTML=S.costs.map(c=>{const n=costNumbers(c.rows,c.op,c.price,c.vat);return`<article class="card"><h3>${esc(c.name)}</h3><div class="small">${fmtDate(c.date)}</div><div class="kv"><span><i>${t("kCost")}</i> ${money(n.total)}</span><span><i>${t("kSell")}</i> ${money(c.price)}</span><span><i>${t("kProfit")}</i> ${money(n.profit)}</span><span><i>${t("kMargin")}</i> ${pct(n.net?n.profit/n.net*100:0)}</span></div><div class="actions"><button class="btn" data-act="loadCost" data-id="${c.id}">${t("bOpen")}</button><button class="btn danger" data-act="delCost" data-id="${c.id}">${t("bDelete")}</button></div></article>`}).join("")}

/* ============ TRAINING ============ */
let lsItems={imgs:[],files:[]},lsRemoved=[];
function fillLessonSelects(){const lv=$("#lsLevel").value,ct=$("#lsCat").value;$("#lsLevel").innerHTML=Object.keys(LEVELS).map(k=>`<option value="${k}">${tx(LEVELS[k])}</option>`).join("");$("#lsCat").innerHTML=Object.keys(LESSON_CATS).map(k=>`<option value="${k}">${tx(LESSON_CATS[k])}</option>`).join("");if(lv)$("#lsLevel").value=lv;if(ct)$("#lsCat").value=ct;
 $("#courseList").innerHTML=[...new Set(S.lessons.map(l=>l.course).filter(Boolean))].map(c=>`<option value="${esc(c)}">`).join("")}
function renderLsPrev(){$("#lsPrev").innerHTML=lsItems.imgs.map(i=>`<span style="position:relative;display:inline-block"><img ${i.data?`src="${i.data}"`:`data-limg="${i.id}"`} alt=""><button type="button" class="btn danger sm" style="position:absolute;top:4px;inset-inline-end:4px;padding:2px 7px" data-act="rmLsItem" data-kind="imgs" data-id="${i.id}">✕</button></span>`).join("")+lsItems.files.map(f=>`<span class="kv" style="margin:0"><span>📎 ${esc(f.name)} · ${fmtSize(f.size)} <button type="button" class="btn danger sm" style="padding:0 6px" data-act="rmLsItem" data-kind="files" data-id="${f.id}">✕</button></span></span>`).join("");hydrate($("#lsPrev"))}
function lsRemove(kind,id){const it=lsItems[kind].find(x=>x.id===id);if(it&&!it.isNew)lsRemoved.push((kind==="imgs"?"limg:":"lfile:")+S.uid+":"+id);lsItems[kind]=lsItems[kind].filter(x=>x.id!==id);renderLsPrev()}
$("#lsImgs").addEventListener("change",async e=>{for(const f of e.target.files){try{lsItems.imgs.push({id:uid(),data:await compressImage(f,1600),isNew:true})}catch(err){toast(t("imgErr"))}}e.target.value="";renderLsPrev()});
$("#lsFiles").addEventListener("change",e=>{for(const f of e.target.files){if(f.size>25*1048576){alert(t("fileTooBig",{f:f.name}));continue}lsItems.files.push({id:uid(),name:f.name,type:f.type,size:f.size,blob:f,isNew:true})}e.target.value="";renderLsPrev()});
function resetLesson(){$("#lessonForm").reset();$("#lsId").value="";lsItems={imgs:[],files:[]};lsRemoved=[];renderLsPrev();$("#lessonFormTitle").textContent=t("addLesson")}
$("#lsCancel").addEventListener("click",resetLesson);
$("#lessonForm").addEventListener("submit",async e=>{e.preventDefault();const old=$("#lsId").value,id=old||uid(),prev=S.lessons.find(l=>l.id===id);setSaveState("saving");
 try{for(const i of lsItems.imgs)if(i.isNew){await DB.set("limg:"+S.uid+":"+i.id,i.data);imgCache.set("limg:"+S.uid+":"+i.id,i.data)}
  for(const f of lsItems.files)if(f.isNew)await DB.set("lfile:"+S.uid+":"+f.id,f.blob);
  for(const k of lsRemoved){await DB.del(k);imgCache.delete(k)}}catch(err){setSaveState("err");toast(t("ssErr"));return}
 const l={id,course:$("#lsCourse").value.trim(),title:$("#lsTitle").value.trim(),level:$("#lsLevel").value,cat:$("#lsCat").value,content:$("#lsContent").value,imgs:lsItems.imgs.map(i=>i.id),files:lsItems.files.map(f=>({id:f.id,name:f.name,type:f.type,size:f.size})),created:prev?prev.created:Date.now(),updated:Date.now()};
 const i=S.lessons.findIndex(x=>x.id===id);if(i>=0)S.lessons[i]=l;else S.lessons.unshift(l);await save("lessons");resetLesson();renderLessons();toast(old?t("tUpdated"):t("tSaved"))});
function editLesson(id){const l=S.lessons.find(x=>x.id===id);if(!l)return;activate("learn");$("#lsId").value=l.id;$("#lsCourse").value=l.course||"";$("#lsTitle").value=l.title;$("#lsLevel").value=l.level;$("#lsCat").value=l.cat;$("#lsContent").value=l.content||"";lsItems={imgs:(l.imgs||[]).map(id=>({id})),files:(l.files||[]).map(f=>({...f}))};lsRemoved=[];renderLsPrev();$("#lessonFormTitle").textContent=t("editLesson")}
async function deleteLesson(id){if(!confirm(t("confirmDel")))return;const l=S.lessons.find(x=>x.id===id);if(l){for(const i of l.imgs||[])await DB.del("limg:"+S.uid+":"+i);for(const f of l.files||[])await DB.del("lfile:"+S.uid+":"+f.id)}S.lessons=S.lessons.filter(x=>x.id!==id);await save("lessons");closeModal();renderLessons();toast(t("tDeleted"))}
function lessonCard(l,q=""){return`<article class="card rcard" data-act="lesson" data-id="${esc(l.id)}">${l.imgs&&l.imgs.length?`<div class="thumb" style="aspect-ratio:16/9"><img data-limg="${l.imgs[0]}" alt=""></div>`:""}<div class="rbody"><span class="tag">${esc(tx(LEVELS[l.level])||"")}</span> <span class="tag">${esc(tx(LESSON_CATS[l.cat])||"")}</span><h3>${hl(l.title,q)}</h3><p class="small" style="white-space:normal;margin-top:4px">${hl((l.content||"").slice(0,120),q)}${(l.content||"").length>120?"…":""}</p><div class="kv">${l.imgs?.length?`<span>🖼 ${l.imgs.length} ${t("images")}</span>`:""}${l.files?.length?`<span>📎 ${l.files.length} ${t("files")}</span>`:""}</div></div></article>`}
function renderLessons(){fillLessonSelects();const el=$("#lessonList");if(!S.lessons.length){el.innerHTML=`<div class="empty">${t("noLessons")}</div>`}else{const groups={};S.lessons.forEach(l=>{(groups[l.course||""]=groups[l.course||""]||[]).push(l)});
 el.innerHTML=Object.keys(groups).sort((a,b)=>a===""?1:b===""?-1:a.localeCompare(b)).map(c=>`<div class="course"><h4>📚 ${esc(c||t("noCourse"))} <span class="small">(${groups[c].length})</span></h4><div class="grid r">${groups[c].map(l=>lessonCard(l)).join("")}</div></div>`).join("");hydrate(el)}
 $("#learnCards").innerHTML=LEARN.map(x=>`<article class="card"><span class="tag">${t("trainTag")}</span><h3>${esc(tx(x[0]))}</h3><p>${esc(tx(x[1]))}</p></article>`).join("");updateStats()}
const fileURLs=[];
async function openLesson(id){const l=S.lessons.find(x=>x.id===id);if(!l)return;fileURLs.splice(0).forEach(u=>URL.revokeObjectURL(u));
 const files=[];for(const f of l.files||[]){const b=await DB.get("lfile:"+S.uid+":"+f.id);if(b){const u=URL.createObjectURL(b instanceof Blob?b:new Blob([b]));fileURLs.push(u);files.push(`<a href="${u}" download="${esc(f.name)}" target="_blank" rel="noopener"><span>📎 ${esc(f.name)}</span><span class="small">${fmtSize(f.size)} ⬇</span></a>`)}}
 showModal(`<div class="sheet-body" style="padding-top:56px"><span class="tag">${esc(tx(LEVELS[l.level])||"")}</span> <span class="tag">${esc(tx(LESSON_CATS[l.cat])||"")}</span>${l.course?` <span class="tag" style="color:var(--cream)">📚 ${esc(l.course)}</span>`:""}<h2>${esc(l.title)}</h2>
 ${l.content?`<p style="white-space:pre-wrap;color:#e2d4c0">${esc(l.content)}</p>`:""}
 ${l.imgs?.length?`<div class="gallery" style="margin-top:12px">${l.imgs.map(i=>`<figure data-act="img"><img data-limg="${i}" alt=""></figure>`).join("")}</div>`:""}
 ${files.length?`<div class="files">${files.join("")}</div>`:""}
 <div class="actions"><button class="btn" data-act="editLesson" data-id="${esc(l.id)}">${t("bEdit")}</button><button class="btn danger" data-act="delLesson" data-id="${esc(l.id)}">${t("bDelete")}</button></div></div>`,()=>openLesson(id))}

/* ============ NOTES ============ */
function renderNotes(){const el=$("#notesList");el.innerHTML=S.notes.length?S.notes.map(n=>`<article class="card"><h3>${esc(n.title)}</h3><div class="small">${fmtDate(n.date)}</div><p>${esc(n.text)}</p><div class="actions"><button class="btn danger" data-act="delNote" data-id="${esc(n.id)}">${t("bDelete")}</button></div></article>`).join(""):`<div class="empty">${t("noNotes")}</div>`;updateStats()}
$("#saveNote").addEventListener("click",()=>{const title=$("#noteTitle").value.trim(),text=$("#noteText").value.trim();if(!title||!text){alert(t("noteNeed"));return}S.notes.unshift({id:uid(),title,text,date:Date.now()});save("notes");$("#noteTitle").value="";$("#noteText").value="";renderNotes();toast(t("tSaved"))});

/* ============ SEARCH ============ */
function fillSearchSelects(){const sc=$("#sScope").value,ty=$("#sType").value,so=$("#sSort").value;
 $("#sScope").innerHTML=[["all","scAll"],["recipes","scRecipes"],["ency","scEncy"],["equip","scEquip"],["training","scTraining"],["notes","scNotes"]].map(([v,k])=>`<option value="${v}">${t(k)}</option>`).join("");
 const types=new Set(Object.keys(TYPES));S.recipes.forEach(r=>r.type&&types.add(r.type));$("#sType").innerHTML=`<option value="">${t("allTypes")}</option>`+[...types].map(c=>`<option value="${esc(c)}">${esc(typeLabel(c))}</option>`).join("");
 $("#sSort").innerHTML=[["rel","sortRel"],["name","sortName"],["new","sortNew"]].map(([v,k])=>`<option value="${v}">${t(k)}</option>`).join("");if(sc)$("#sScope").value=sc;if(ty)$("#sType").value=ty;if(so)$("#sSort").value=so}
function knowledgeIndex(SECS,kind,prefix){const out=[];SECS.forEach(sec=>{const base={kind,sec:tx(sec.title),anchor:prefix+"-"+sec.key};(sec.items||[]).forEach(it=>out.push({...base,title:tx(it[0]),text:tx(it[1]),all:both(it[0])+" "+both(it[1])}));(sec.methods||[]).forEach(m=>out.push({...base,title:tx(m[0]),text:`${tx(m[1])} — ${m[2]} · ${tx(m[3])} · ${tx(m[4])} · ${tx(m[5])}`,all:m.map(both).join(" ")}));if(sec.table)sec.table.rows.forEach(r=>out.push({...base,title:tx(r[0]),text:`${tx(r[1])} (${tx(r[2])})`,all:r.map(both).join(" ")}));(sec.trouble||[]).forEach(r=>out.push({...base,title:tx(r[0]),text:`${tx(r[1])} → ${tx(r[2])}`,all:r.map(both).join(" ")}))});return out}
function runSearch(){const q=$("#sq").value,ts=terms(q),scope=$("#sScope").value||"all",type=$("#sType").value,favOnly=$("#sFav").checked,sort=$("#sSort").value||"rel";
 const want=k=>scope==="all"||scope===k;const onlyRecipes=!!type||favOnly;let groups=[];
 const sorter=(arr,getT,getD)=>{if(sort==="name")arr.sort((a,b)=>getT(a).localeCompare(getT(b),LANG));else if(sort==="new")arr.sort((a,b)=>(getD(b)||0)-(getD(a)||0));else if(ts.length)arr.sort((a,b)=>b._s-a._s);return arr};
 if(want("recipes")&&(ts.length||onlyRecipes)){let l=allRecipes().filter(r=>(!type||r.type===type)&&(!favOnly||S.favs.includes(r.id))&&matches(recipeText(r),ts));l.forEach(r=>r._s=score(rName(r)+" "+(r.lib?both(r.name):""),recipeText(r),ts));sorter(l,rName,r=>r.created||(r.lib?1:0));if(l.length)groups.push([t("scRecipes"),`<div class="grid r">${l.map(r=>recipeCard(r,q)).join("")}</div>`,l.length])}
 if(ts.length&&!onlyRecipes){
  [["ency",ENCY,"scEncy","ency",t("knowTag")],["equip",EQUIP,"scEquip","equip",t("equipTag")]].forEach(([k,SECS,lbl,sec,tag])=>{if(!want(k))return;let l=knowledgeIndex(SECS,k,sec).filter(x=>matches(x.all,ts));l.forEach(x=>x._s=score(x.title,x.all,ts));sorter(l,x=>x.title,()=>0);if(l.length)groups.push([t(lbl),`<div class="grid">${l.map(x=>`<article class="card rcard" style="padding:16px" data-act="jump" data-sec="${sec}" data-anchor="${x.anchor}"><span class="tag">${esc(x.sec)}</span><h3>${hl(x.title,q)}</h3><p>${hl(x.text,q)}</p></article>`).join("")}</div>`,l.length])});
  if(want("training")){let l=S.lessons.filter(x=>matches([x.title,x.content,x.course,both(LEVELS[x.level]),both(LESSON_CATS[x.cat]),(x.files||[]).map(f=>f.name).join(" ")].join(" "),ts));l.forEach(x=>x._s=score(x.title,x.content||"",ts));sorter(l,x=>x.title,x=>x.updated);
   let b=LEARN.filter(x=>matches(both(x[0])+" "+both(x[1]),ts));const n=l.length+b.length;if(n)groups.push([t("scTraining"),`<div class="grid r">${l.map(x=>lessonCard(x,q)).join("")}${b.map(x=>`<article class="card"><span class="tag">${t("trainTag")}</span><h3>${hl(tx(x[0]),q)}</h3><p>${hl(tx(x[1]),q)}</p></article>`).join("")}</div>`,n])}
  if(want("notes")){let l=S.notes.filter(n=>matches(n.title+" "+n.text,ts));l.forEach(x=>x._s=score(x.title,x.text,ts));sorter(l,x=>x.title,x=>x.date);if(l.length)groups.push([t("scNotes"),`<div class="grid">${l.map(n=>`<article class="card"><span class="tag">${t("noteTag")}</span><h3>${hl(n.title,q)}</h3><p>${hl(n.text,q)}</p></article>`).join("")}</div>`,l.length])}}
 const total=groups.reduce((a,g)=>a+g[2],0);
 $("#sResults").innerHTML=!ts.length&&!onlyRecipes?`<div class="empty">${t("typeHint")}</div>`:(`<p class="small">${t("results",{n:total})}</p>`+(groups.map(([h,b,n])=>`<h3 class="sub">${h} (${n})</h3>${b}`).join("")||`<div class="empty">${t("noResults")}</div>`));hydrate($("#sResults"))}
$("#sq").addEventListener("input",runSearch);["sScope","sType","sSort","sFav"].forEach(i=>$("#"+i).addEventListener("change",runSearch));
$("#globalSearch").addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.value.trim()){$("#sq").value=e.target.value;e.target.value="";activate("search");$("#sq").focus()}});

/* ============ ACCOUNT ============ */
let attempts=0,lockUntil=0;
function throttled(){if(Date.now()<lockUntil){toast(t("tooMany",{s:Math.ceil((lockUntil-Date.now())/1000)}));return true}return false}
function failAttempt(){attempts++;if(attempts>=5){lockUntil=Date.now()+30000*Math.pow(2,Math.min(attempts-5,4))}}
let installEvt=null;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();installEvt=e;if(current==="account")renderAccount()});
const isStandalone=()=>window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===true;
async function renderAccount(){const b=$("#accountBody"),u=S.user,P=S.profile||{};
 const profile=`<div class="box"><h3 class="bt">${t("profileTitle")}</h3><div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap"><img src="${avatarData||"profile.jpg"}" style="width:78px;height:78px;border-radius:50%;object-fit:cover;border:2px solid var(--gold);padding:3px" alt=""><div style="flex:1;min-width:200px"><label style="margin-top:0">${t("lAvatar")}</label><input type="file" id="avatarIn" accept="image/*">${avatarData?`<button class="btn sm" id="avatarDel" style="margin-top:6px">${t("bRemoveAvatar")}</button>`:""}</div></div>
 <div class="formgrid">${u?"":`<div><label>${t("lDisplay")}</label><input id="pfName" value="${esc(P.name||"")}" placeholder="Barista"></div>`}<div><label>${t("lTagline")}</label><input id="pfTag" value="${esc(P.tagline||"")}" placeholder="Specialty Coffee & Drinks"></div></div></div>`;
 const install=`<div class="box"><h3 class="bt">📲 ${t("installTitle")}</h3>${isStandalone()?`<p class="pos" style="margin:4px 0">${t("installed")}</p>`:`<ul class="installsteps"><li>${t("installIOS")}</li><li>${t("installMac")}</li><li>${t("installChrome")}</li></ul>${installEvt?`<div class="actions"><button class="btn primary" id="installBtn">${t("bInstall")}</button></div>`:""}`}</div>`;
 const usage="";
 const backup=`<div class="box"><h3 class="bt">💾 ${t("backupTitle")}</h3><p class="small" style="margin:0">${t("backupHint")}</p><div class="actions"><button class="btn primary" id="expBtn">${t("bExport")}</button><button class="btn" id="impBtn">${t("bImport")}</button></div>${usage}</div>`;
 const lang=`<div class="box"><h3 class="bt">🌐 ${t("langTitle")}</h3><div class="actions"><button class="btn ${LANG==="ar"?"primary":""}" id="setAr">العربية</button><button class="btn ${LANG==="en"?"primary":""}" id="setEn">English</button></div></div>`;
 let main;
 if(!u)main=`<div class="note" style="margin:0 0 14px">${t("accGuestNote")}</div><div class="cols2"><div class="box"><h3 class="bt">${t("login")}</h3><form id="loginForm"><label>${t("lUser")}</label><input id="lUser" required autocomplete="username" dir="ltr"><label>${t("lPass")}</label><input id="lPass" type="password" required autocomplete="current-password" dir="ltr"><div class="actions"><button class="btn primary">${t("bLogin")}</button></div></form></div>
 <div class="box"><h3 class="bt">${t("createAcc")}</h3><form id="regForm"><label>${t("lDisplay")}</label><input id="rDisp" required placeholder="${t("phDisplay")}"><label>${t("lUserEn")}</label><input id="rUser" required dir="ltr" autocomplete="username"><label>${t("lPassMin")}</label><input id="rPass" type="password" required minlength="6" dir="ltr" autocomplete="new-password"><label>${t("lPass2")}</label><input id="rPass2" type="password" required minlength="6" dir="ltr" autocomplete="new-password"><label class="check" style="margin-top:10px"><input type="checkbox" id="rMove" checked> ${t("moveGuest")}</label><div class="actions"><button class="btn primary">${t("bCreate")}</button></div></form></div></div>`;
 else main=`<div class="box"><div style="display:flex;align-items:center;gap:14px"><img src="${avatarData||"profile.jpg"}" style="width:58px;height:58px;border-radius:50%;object-fit:cover" alt=""><div><h3 style="margin:0;color:var(--gold)">${esc(u.name)}</h3><div class="small" dir="ltr" style="text-align:start">@${esc(u.username)} · ${t("memberSince")} ${fmtDate(u.created)}</div></div></div>
 <div class="res-grid"><div class="card"><p>${t("navRecipes")}</p><div class="result">${S.recipes.length}</div></div><div class="card"><p>${t("navFavs")}</p><div class="result">${S.favs.length}</div></div><div class="card"><p>${t("myPhotos")}</p><div class="result">${S.recipes.filter(r=>r.hasImg).length}</div></div><div class="card"><p>${t("stLessons")}</p><div class="result">${S.lessons.length}</div></div><div class="card"><p>${t("savedCalcs")}</p><div class="result">${S.costs.length}</div></div></div>
 <label class="check" style="margin-top:14px"><input type="checkbox" id="lockChk" ${u.lock?"checked":""}> ${t("lockOpt")}</label>
 <div class="actions"><button class="btn primary" id="logoutBtn">${t("bLogout")}</button><button class="btn" id="userBtn">${t("bChangeUser")}</button><button class="btn" id="pwBtn">${t("bChangePass")}</button><button class="btn danger" id="delAccBtn">${t("bDelAcc")}</button></div></div>`;
 b.innerHTML=main+`<div class="cols2" style="margin-top:14px">${profile}${install}</div><div class="cols2" style="margin-top:14px">${backup}${lang}</div>`;bindAccount()}
async function saveUsers(){await DB.set("users",S.users)}
function bindAccount(){const on=(id,ev,fn)=>{const el=$("#"+id);if(el)el.addEventListener(ev,fn)};
 on("loginForm","submit",async e=>{e.preventDefault();if(throttled())return;const un=$("#lUser").value.trim().toLowerCase(),u=S.users.find(x=>x.username===un);if(!u||await hashPw($("#lPass").value,u.salt)!==u.hash){failAttempt();toast(t("badLogin"));return}attempts=0;setSession(u.id);await loadSession();toast(t("welcomeBack",{n:u.name}));activate("home")});
 on("regForm","submit",async e=>{e.preventDefault();const un=$("#rUser").value.trim().toLowerCase();if(!/^[a-z0-9_]{3,20}$/.test(un)){toast(t("userBad"));return}if(S.users.some(x=>x.username===un)){toast(t("userTaken"));return}const pw=$("#rPass").value;if(pw.length<6){toast(t("passShort"));return}if(pw!==$("#rPass2").value){toast(t("passMismatch"));return}
  const salt=uid()+uid(),u={id:"u_"+uid(),username:un,name:$("#rDisp").value.trim(),salt,hash:await hashPw(pw,salt),created:Date.now(),lock:false};S.users.push(u);await saveUsers();
  if($("#rMove").checked){for(const k of KEYS){await DB.set(u.id+":"+k,S[k]);await DB.set("guest:"+k,k==="profile"?{}:[])}
   const mv=async(a,bk)=>{const d=await DB.get(a);if(d!=null){await DB.set(bk,d);await DB.del(a)}};for(const r of S.recipes)if(r.hasImg)await mv("img:guest:"+r.id,"img:"+u.id+":"+r.id);for(const l of S.lessons){for(const i of l.imgs||[])await mv("limg:guest:"+i,"limg:"+u.id+":"+i);for(const f of l.files||[])await mv("lfile:guest:"+f.id,"lfile:"+u.id+":"+f.id)}await mv("avatar:guest","avatar:"+u.id)}
  setSession(u.id);await loadSession();toast(t("accCreated",{n:u.name}));activate("home")});
 on("logoutBtn","click",async()=>{setSession(null);await loadSession();toast(t("loggedOut"))});
 on("lockChk","change",async e=>{S.user.lock=e.target.checked;await saveUsers();toast(t("tSaved"))});
 on("userBtn","click",async()=>{const u=S.user;const o=prompt(t("curPass"));if(o==null)return;if(await hashPw(o,u.salt)!==u.hash){toast(t("wrongPass"));return}const n=(prompt(t("newUser"),u.username)||"").trim().toLowerCase();if(!n||n===u.username)return;if(!/^[a-z0-9_]{3,20}$/.test(n)){toast(t("userBad"));return}if(S.users.some(x=>x.username===n)){toast(t("userTaken"));return}u.username=n;await saveUsers();renderAccount();toast(t("userChanged"))});
 on("pwBtn","click",async()=>{const u=S.user;const o=prompt(t("curPass"));if(o==null)return;if(await hashPw(o,u.salt)!==u.hash){toast(t("wrongPass"));return}const n=prompt(t("newPass"));if(!n||n.length<6){toast(t("passShort"));return}u.salt=uid()+uid();u.hash=await hashPw(n,u.salt);await saveUsers();toast(t("passChanged"))});
 on("delAccBtn","click",async()=>{if(!confirm(t("delAccConfirm")))return;const u=S.user;for(const r of S.recipes)await DB.del("img:"+u.id+":"+r.id);for(const l of S.lessons){for(const i of l.imgs||[])await DB.del("limg:"+u.id+":"+i);for(const f of l.files||[])await DB.del("lfile:"+u.id+":"+f.id)}for(const k of KEYS)await DB.del(u.id+":"+k);await DB.del("avatar:"+u.id);S.users=S.users.filter(x=>x.id!==u.id);await saveUsers();setSession(null);await loadSession();toast(t("accDeleted"))});
 on("avatarIn","change",async e=>{const f=e.target.files[0];if(!f)return;try{avatarData=await compressImage(f,500);await DB.set("avatar:"+S.uid,avatarData);renderUser();renderAccount();toast(t("tSaved"))}catch(err){toast(t("imgErr"))}});
 on("avatarDel","click",async()=>{avatarData=null;await DB.del("avatar:"+S.uid);renderUser();renderAccount()});
 on("pfName","change",e=>{S.profile.name=e.target.value.trim();save("profile");renderUser()});on("pfTag","change",e=>{S.profile.tagline=e.target.value.trim();save("profile");renderUser()});
 on("installBtn","click",async()=>{if(!installEvt)return;installEvt.prompt();await installEvt.userChoice;installEvt=null;renderAccount()});
 on("setAr","click",()=>{if(LANG!=="ar")$("#langBtn").click()});on("setEn","click",()=>{if(LANG!=="en")$("#langBtn").click()});
 on("expBtn","click",exportData);on("impBtn","click",()=>$("#importFile").click());
}
const blobToData=b=>new Promise((res,rej)=>{const fr=new FileReader();fr.onload=()=>res(fr.result);fr.onerror=rej;fr.readAsDataURL(b)});
const dataToBlob=d=>fetch(d).then(r=>r.blob());
async function exportData(){setSaveState("saving");const images={},limgs={},lfiles={};for(const r of S.recipes)if(r.hasImg){const d=await DB.get("img:"+S.uid+":"+r.id);if(d)images[r.id]=d}
 for(const l of S.lessons){for(const i of l.imgs||[]){const d=await DB.get("limg:"+S.uid+":"+i);if(d)limgs[i]=d}for(const f of l.files||[]){const b=await DB.get("lfile:"+S.uid+":"+f.id);if(b)lfiles[f.id]=await blobToData(b instanceof Blob?b:new Blob([b]))}}
 const data={app:"barista-library",version:3,exported:new Date().toISOString(),user:S.user?{username:S.user.username,name:S.user.name}:null,avatar:avatarData};KEYS.forEach(k=>data[k]=S[k]);Object.assign(data,{images,limgs,lfiles});
 const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify(data)],{type:"application/json"}));a.download=`barista-backup-${(S.user&&S.user.username)||"guest"}-${new Date().toISOString().slice(0,10)}.json`;document.body.appendChild(a);a.click();a.remove();setSaveState("ok");toast(t("exported"))}
$("#importFile").addEventListener("change",async e=>{const f=e.target.files[0];e.target.value="";if(!f)return;try{const d=JSON.parse(await f.text());if(d.app!=="barista-library")throw 0;setSaveState("saving");let added=0;
 const mergeList=(k,onNew)=>{const ids=new Set(S[k].map(x=>x.id));for(const x of d[k]||[])if(x&&!ids.has(x.id)){if(k==="recipes"&&TYPE_MAP[x.type])x.type=TYPE_MAP[x.type];S[k].push(x);added++;onNew&&onNew(x)}};
 const jobs=[];mergeList("recipes",r=>{if(d.images&&d.images[r.id])jobs.push(DB.set("img:"+S.uid+":"+r.id,d.images[r.id]))});mergeList("lessons",l=>{(l.imgs||[]).forEach(i=>d.limgs&&d.limgs[i]&&jobs.push(DB.set("limg:"+S.uid+":"+i,d.limgs[i])));(l.files||[]).forEach(x=>d.lfiles&&d.lfiles[x.id]&&jobs.push(dataToBlob(d.lfiles[x.id]).then(b=>DB.set("lfile:"+S.uid+":"+x.id,b))))});
 ["notes","costs","pantry","shots"].forEach(k=>mergeList(k));S.favs=[...new Set([...S.favs,...(d.favs||[])])];if(d.profile&&!Object.keys(S.profile).length)S.profile=d.profile;if(d.avatar&&!avatarData){avatarData=d.avatar;jobs.push(DB.set("avatar:"+S.uid,d.avatar))}
 await Promise.all(jobs);for(const k of KEYS)await save(k);imgCache.clear();renderAll();toast(t("imported",{n:added}))}catch(err){setSaveState("ok");alert(t("badFile"))}});

/* ============ LOCK ============ */
function checkLock(){const u=S.user;let ok=true;try{ok=!u||!u.lock||sessionStorage.getItem("bb_unlocked")===u.id}catch(e){}$("#lock").classList.toggle("open",!ok);if(!ok){$("#lockName").textContent=u.name;$("#lockAva").src=avatarData||"profile.jpg";$("#lockPass").value="";setTimeout(()=>$("#lockPass").focus(),100)}}
$("#lockForm").addEventListener("submit",async e=>{e.preventDefault();if(throttled())return;const u=S.user;if(u&&await hashPw($("#lockPass").value,u.salt)===u.hash){attempts=0;try{sessionStorage.setItem("bb_unlocked",u.id)}catch(err){}checkLock()}else{failAttempt();toast(t("badLogin"))}});
$("#lockSwitch").addEventListener("click",async()=>{setSession(null);await loadSession();activate("account")});

/* ============ RENDER ============ */
function renderHome(){$("#homeCards").innerHTML=[["navLibrary",t("homeLibrary",{n:LIB.length}),"library"],["navEncy",t("homeEncy"),"ency"],["navEquip",t("homeEquip"),"equip"],["navTools",t("homeTools"),"tools"],["navCost",t("homeCost"),"cost"],["navRecipes",t("homeRecipes"),"recipes"],["navSearch",t("homeSearch"),"search"],["navLearn",t("homeLearn"),"learn"],["navAccount",t("homeAccount"),"account"]]
 .map(x=>`<article class="card"><span class="tag">YOUR LIBRARY</span><h3>${t(x[0])}</h3><p>${x[1]}</p><div class="actions"><button class="btn" data-act="jump" data-sec="${x[2]}">${t("openSec")} ${LANG==="ar"?"←":"→"}</button></div></article>`).join("");
 grid($("#homeFeatured"),["lib-spanish","lib-v60","lib-cappuccino","lib-mojito"].map(findRecipe).filter(Boolean),"","")}
function updateStats(){$("#libCount").textContent=LIB.length;$("#recipeCount").textContent=S.recipes.length;$("#favCount").textContent=S.favs.length;$("#lessonCount").textContent=S.lessons.length}
function renderUser(){const P=S.profile||{};const n=S.user?S.user.name:(P.name||t("guest"));$("#chipName").textContent=n;$("#chipAva").innerHTML=avatarData?`<img src="${avatarData}" alt="">`:esc((n[0]||"B").toUpperCase());$("#chipHint").textContent=S.user?t("myAccount"):t("login");
 $("#welcomeTitle").textContent=S.user||P.name?t("welcomeUser",{n}):t("welcome");$("#saveHint").textContent=S.user?t("saveHintUser",{n:S.user.name}):t("saveHintGuest");
 $("#sideAvatar").src=avatarData||"profile.jpg";$("#sideName").textContent=S.user?S.user.name:(P.name||"Barista");$("#sideTag").textContent=P.tagline||"Specialty Coffee & Drinks"}
function renderAll(){applyLang();renderUser();renderHome();renderLibrary();renderEncy();renderEquip();renderToolJump();renderPresets();fillTypeSelect();renderMine();renderNotes();renderPantry();renderCostRows();renderCostList();renderShots();renderLessons();renderFavs();fillSearchSelects();fillUnits(true);shotCalc();ratioCalc();updateStats();if(current==="search")runSearch();if(current==="account")renderAccount();
 $("#saveRecipeBtn").textContent=$("#editId").value?t("bSaveChanges"):t("bSaveRecipe");$("#lessonFormTitle").textContent=$("#lsId").value?t("editLesson"):t("addLesson");$("#tmStart").textContent=tmRun?t("bStop"):tmAcc?t("bContinue"):t("bStart")}

applyLang();
migrateOld().then(loadSession);
if("serviceWorker" in navigator&&location.protocol.startsWith("http"))window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
