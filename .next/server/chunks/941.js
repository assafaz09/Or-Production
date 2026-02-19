exports.id=941,exports.ids=[941],exports.modules={50525:(e,t,i)=>{Promise.resolve().then(i.bind(i,28611)),Promise.resolve().then(i.bind(i,99286)),Promise.resolve().then(i.t.bind(i,44064,23))},97196:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,12994,23)),Promise.resolve().then(i.t.bind(i,96114,23)),Promise.resolve().then(i.t.bind(i,9727,23)),Promise.resolve().then(i.t.bind(i,79671,23)),Promise.resolve().then(i.t.bind(i,41868,23)),Promise.resolve().then(i.t.bind(i,84759,23))},28611:(e,t,i)=>{"use strict";i.d(t,{default:()=>p});var o=i(10326),s=i(17577);let r=()=>{let[e,t]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let e=()=>{t(0)};return e(),window.addEventListener("storage",e),window.addEventListener("cartUpdated",e),()=>{window.removeEventListener("storage",e),window.removeEventListener("cartUpdated",e)}},[]),e};var a=i(35047),n=i(9991),d=i(11321);let c=({className:e="w-6 h-6",...t})=>o.jsx("svg",{className:e,fill:"currentColor",viewBox:"0 0 24 24",...t,children:o.jsx("path",{d:"M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.42-.41 1.75-1.03L21.7 4H5.21l-.94-2H1z"})}),p=()=>{let e=(0,a.useRouter)(),[t,i]=(0,s.useState)(!1),[p,l]=(0,s.useState)(!1),g=r(),[m,u]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=()=>{u(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,o.jsxs)("nav",{className:`fixed top-0 w-full z-50 transition-all duration-300 ${m?"bg-gray-900/85 backdrop-blur-sm shadow-lg":"bg-transparent"}`,children:[o.jsx("div",{className:"max-w-7xl mx-auto px-4",children:(0,o.jsxs)("div",{className:"flex justify-between items-center h-16",children:[o.jsx("div",{className:"flex items-center",children:o.jsx("button",{onClick:()=>e.push("/"),className:"flex items-center",children:o.jsx("img",{src:(0,d.BB)("57ff2f4d-b134-45fe-ae9a-a122b63c8385_p0zm1y"),alt:"OR Productions Logo",className:"h-10 w-auto rounded-full hover:opacity-80 transition-opacity"})})}),(0,o.jsxs)("div",{className:"hidden md:flex items-center space-x-8 rtl:space-x-reverse",children:[(0,o.jsxs)("div",{className:"relative",children:[o.jsx("button",{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),className:"text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"קטגוריות"}),p&&o.jsx("div",{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),className:"absolute right-0 mt-2 w-64 bg-gray-800 rounded-md shadow-lg py-1 z-50",children:n.z.categories.map(t=>o.jsx("button",{onClick:()=>{e.push(`/category/${t.id}`),l(!1)},className:"block w-full text-right px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-purple-400 transition-colors",children:t.name},t.id))})]}),o.jsx("button",{onClick:()=>e.push("/"),className:"text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"דף הבית"}),o.jsx("button",{onClick:()=>e.push("/blog"),className:"text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"בלוגים ומאמרים"}),o.jsx("button",{onClick:()=>e.push("/testimonials"),className:"text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"המלצות"}),o.jsx("button",{onClick:()=>e.push("/cart"),className:"text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"עגלת קניות"})]}),(0,o.jsxs)("div",{className:"flex items-center space-x-4 rtl:space-x-reverse",children:[(0,o.jsxs)("button",{onClick:()=>e.push("/cart"),className:"relative p-2 text-gray-300 hover:text-purple-400 transition-colors",children:[o.jsx(c,{className:"w-6 h-6"}),g>0&&o.jsx("span",{className:"absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center",children:g})]}),o.jsx("button",{onClick:()=>{i(!t)},className:"md:hidden p-2 text-gray-300 hover:text-purple-400 transition-colors",children:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})]})}),t&&o.jsx("div",{className:"md:hidden bg-gray-800/95 backdrop-blur-sm border-t border-gray-700",children:(0,o.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[(0,o.jsxs)("div",{className:"space-y-1",children:[o.jsx("button",{onClick:()=>{l(!p)},className:"block w-full text-right px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-700 rounded-md transition-colors",children:"קטגוריות"}),p&&o.jsx("div",{className:"pl-4 space-y-1",children:n.z.categories.map(t=>o.jsx("button",{onClick:()=>{e.push(`/category/${t.id}`),i(!1),l(!1)},className:"block w-full text-right px-3 py-2 text-sm text-gray-400 hover:text-purple-400 hover:bg-gray-700 rounded-md transition-colors",children:t.name},t.id))})]}),o.jsx("button",{onClick:()=>{e.push("/"),i(!1)},className:"block w-full text-right px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-700 rounded-md transition-colors",children:"דף הבית"}),o.jsx("button",{onClick:()=>{e.push("/blog"),i(!1)},className:"block w-full text-right px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-700 rounded-md transition-colors",children:"בלוגים ומאמרים"}),o.jsx("button",{onClick:()=>{e.push("/testimonials"),i(!1)},className:"block w-full text-right px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-700 rounded-md transition-colors",children:"המלצות"}),o.jsx("button",{onClick:()=>{e.push("/cart"),i(!1)},className:"block w-full text-right px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-700 rounded-md transition-colors",children:"עגלת קניות"})]})})]})}},99286:(e,t,i)=>{"use strict";i.d(t,{default:()=>d});var o=i(17577);i(277);let s=()=>{},r=()=>{},a=()=>{},n=()=>{},d=()=>((0,o.useEffect)(()=>{s(),r(),a(),n()},[]),null)},9991:(e,t,i)=>{"use strict";i.d(t,{$:()=>s,z:()=>o});let o={categories:[{id:"inflatable-decorations",name:"מיצגי תפאורה מתנפחים לאירועים",description:"מיצגי תפאורה מתנפחים מרהיבים לאירועים מיוחדים",detailedDescription:"תפאורת האירועים שלנו נועדה להפוך כל חלל לחוויה מעוצבת ומלאת אווירה.\n\nאנו מציעים מייצגי תפאורה מתנפחים בגבהים שונים, אפשרות לשלב בינהם קירות צילום מעוצבים, רקעים מיוחדים לפריסה על במות ומתחמי ישיבה מעוצבים. כל אלמנט נבחר בקפידה ומותאם אישית לקונספט וצבעי האירוע שלכם.\n\nתוך שילוב גימיקים מיוחדים שירשימו את האורחים ויהפכו את החלל לקסום ובלתי נשכח.",image:"newYork3_i5b5ek",backgroundVideo:null,tiktokVideo:"7414619996401323272",mobileVideo:{type:"video",src:"decorations-showcase_def456"},subCategories:[{id:"decorations",name:"מיצגי תפאורה",description:"מגוון מיצגי תפאורה מתנפחים לאירועים",attractions:[{id:1,name:"מייצג תפאורה מתנפח בסגנון פסל החירות ניו יורק.",description:"מתנפח תפאורה ענק בגובה של 6 מטר על רוחב של 2 מטרים. המתנפח כולל מפוח חשמלי שמנפח אותו בדקות ספורות. כולל תאורת לד לשעות הערב.\n\nהבלעדיים בארץ למתנפח מסוג זה!\n\nהמחיר כולל הרכבה ופירוק.\n\nהמחיר משתנה לפי מיקום האירוע.\n\nמייצג התפאורה להשכרה בלבד.\n\nהמחיר לא כולל מע״מ",images:["newYork5_tlqiyc","newYork4_eyexr3","newYork2_mnkwmq","newYork_aqyhkh"],price:1250,category:"מיצגי תפאורה מתנפחים לאירועים"},{id:2,name:"מייצג תפאורה מתנפח בסגנון פיל בסגנון יווני",description:"מתנפח תפאורה בגובה של 4 מטרים על רוחב של 4 מטרים.\n\nהמתנפח כולל מפוח חשמלי שמנפח אותו בדקות ספורות.\n\nכולל תאורת לד משתה על ידי שלט לשעות הערב. הבלעדיים בארץ למתנפח מסוג זה!\n\nהמייצג תפאורה להשכרה בלבד.\n\nהמחיר כולל הרכבה ופירוק.\n\nהמחיר משתנה לפי מיקום האירוע.\n\nמייצג התפאורה להשכרה בלבד.\n\nהמחיר לא כולל מע״מ.",images:["elefent3_loezbf","elefent2_curam9","elefent4_aufbmi",{type:"video",src:"IMG_8952_dmyhqv"},{type:"video",src:"IMG_8501_njinez"}],price:1350,category:"מיצגי תפאורה מתנפחים לאירועים"},{id:3,name:"מיצג תפאורה מתנפח בצורת ירח",description:`מתנפח בסגנון ירח לבן באיכות גבוהה, הירח בקוטר של 2 מטרים הכולל מפוח שמובנה בתוכו עם חיבור חשמלי שניתן לתלייה בגובה או להנחה על הקרקע.

כולל תאורת לד מובנית בצבע לבן למתן הרגשה ריאליסטית של ירח מלא.

המחיר כולל קשת להרכבת הירח למקומות בהם אין אפשרות לתלות את הירח על התקרה.

המחיר כולל הרכבה ופירוק.

המחיר אינו כולל את טיובות הלד כמו שבתמונה התוספת עבורם הינו 500 שח.

מחיר משתנה לפי מיקום האירוע.

מייצג התפאורה להשכרה בלבד.

המחיר לא כולל מע״מ.`,images:["moon_g6dfyw",{type:"video",src:"IMG_9899_ww4lfg"},"moon1_hbm6nw","moon3_xxskyb","moon2_p9zqip",{type:"video",src:"IMG_6482_p1mkhq"}],price:1500,category:"מיצגי תפאורה מתנפחים לאירועים"},{id:4,name:"מתנפח תפאורה בצורת מסכה עם תאורת לד משתנה.",description:`מתנפח תפאורה מסוג מסיכה, המתנפח בגובה 3 מטרים ורוחבו כ2 וחצי מטרים. תאורת לד מתחלפת לאיזה צבע שרק תרצו עם שלט רחוק. המתנפח מגיע כולל מפוח חשמלי שמנפח אותו בדקות ספורות.

המחיר כולל הרכבה ופירוק.

המחיר משתנה לפי מיקום האירוע.

מייצג התפאורה להשכרה בלבד.

המחיר לא כולל מע״מ.`,images:["mask1_iofhrf","mask4_hfqrmx",{type:"video",src:"IMG_7917_tsdbi2"},"mask3_ue1g8d"],price:1100,category:"מיצגי תפאורה מתנפחים לאירועים"},{id:5,name:"מיצג תפאורה מתנפח בסגנון סטיץ",description:`מתנפח תפאורה בגובה של 3 מטר על רוחב של 3 מטרים. המתנפח כולל מפוח חשמלי שמנפח אותו בדקות ספורות. הבלעדיים בארץ למתנפח מסוג זה!

יש אפשרות להוסיף קיר צילום עם כיתוב לבחירתכם וסידור בלונים.

המחיר לא כולל הרכבה  ופירוק ובאיסוף בלבד.

המחיר משתנה לפי מיקום האירוע.

מייצג התפאורה להשכרה בלבד.

המחיר לא כולל מע״מ.`,images:["stitch1_qo5tzc","stitch2_rcwkoq","stitch_ggdh0d","stitch3_wbdaih"],price:700,category:"מיצגי תפאורה מתנפחים לאירועים"},{id:5.1,name:"מיצג תפאורה מתנפח ספיידרמן",description:`מייצג תפאורה מתנפח בסגנון ספיידרמן הכולל מפוח.

המתנפח המושכר ביותר לאירועי חברה ולימי הולדת.

המחיר הינו ללא הרבה  ובאיסוף עצמי בלבד.

מייצג התפאורה להשכרה בלבד.

המחיר לא כולל מע״מ`,images:["2eab184e-00bd-487a-8d43-19b2c4e6e140_mxg6cy"],price:500,category:"מיצגי תפאורה מתנפחים לאירועים"},{id:6,name:"ארנבי תפאורה בגודל 2 וחצי מטרים.",description:`מתנפח בסגנון ירח כתום באיכות גבוהה, הירח בקוטר של 1 מטרים הכולל מפוח שמובנה בתוכו עם חיבור חשמלי שניתן לתלייה בגובה או להנחה על הקרקע.
  
  ארנבים מתנפחים בגובה של 2.5 מטרים בגווני ורוד בייבי ותכלת.

  הארנבים מלאים בפרווה אשר נותן מראה ריאליסטי.

  המחיר הוא ליחידה.

  מחיר ללא הרכבה ופירוק באסיף בלבד..

  המחיר משתנה לפי מיקום האירוע.

  מייצג התפאורה להשכרה בלבד.
  
 `,images:["rabit2_cfzguw","rabit1_l3au5e"],price:800,category:"מיצגי תפאורה מתנפחים לאירועים"},{id:8,name:"מיצג מתנפח ירח כתום",description:`מתנפח בסגנון ירח כתום באיכות גבוהה, הירח בקוטר של 1 מטרים הכולל מפוח שמובנה בתוכו עם חיבור חשמלי שניתן לתלייה בגובה או להנחה על הקרקע.

כולל תאורת לד מובנית בצבע כתום מטושטש למתן הרגשה ריאליסטית של ירח מלא.

המחיר כולל קשת להרכבת המייצג למקומות בהם אין אפשרות לתלות את הירח על התקרה.

המחיר כולל הרכבה ופירוק.`,images:["orangeMoon1_jsh2ag","orangeMoon2_u0qb7b"],price:800,category:"מיצגי תפאורה מתנפחים לאירועים"}]}]},{id:"fruit-boats",name:"סירת פירות העונה במגוון גדלים",description:"סירות פירות טריות ומרהיבות לאירועים מיוחדים",detailedDescription:"סירות פירות טריות ומרהיבות במגוון גדלים, מעוצבות מעץ אלון איכותי ומלאות בפירות עונתיים טריים. הסירות מגיעות עם עגלה מתכווננת, תעודת כשרות מהרבנות, ותוספות כמו סושי שוקולד ומקרונים. הקיאק ממוקם במרכז רחבת הריקודים ומעניק רענון טבעוני ובריא לאורחים. הצוות המקצועי שלנו מבטיח הגעה בזמן והתאמה מושלמת לכל סוג אירוע, עם עיצוב ייחודי שמוסיף צבע ושמחה לאירוע.",image:"IMG_9959_osj1zt.jpg",backgroundVideo:null,tiktokVideo:"7499808919175302408",subCategories:[{id:"fruit-boat-sizes",name:"גדלי סירות פירות",description:"מגוון גדלים של סירות פירות לאירועים",attractions:[{id:9,name:" סירת פירות 1.7 מטר קומה אחת",description:"סירת פירות טריות בגודל 1.7 מטר - מושלמת לאירועים קטנים",images:["IMG_8512_dz84bz.jpg","IMG_7831_k1wgbd.jpg"],price:1400,category:"סירת פירות העונה במגוון גדלים"},{id:10,name:"סירת פירות 2 מטר קומה אחת",description:`סירת פירות העונה בעיצוב ייחודי ומיוחד מעץ אלון למראה קלאסי ונקי. 

אורך הסירה 2 מטרים ומגיעה על עגלה מתכווננת. 

סירת הפירות שלנו מתאימה לכל סוגי האירועים על הסירה שלנו ישנו מגוון רחב של פירות בהתאם לסוג העונה כ15 סוגי פירות בשפע גדול. 

אם אתם חושבים על סירת פירות אנחנו הכתובת בישבילכם! על הסירה - אבטיח, אננס, מלון, ענבים ירוקים, ליצ׳י, סברס, פסיפלורה, ענבים אדומים, תפוזים, קיווי, מנגו,אשכולית אדומה, פומלית, תמרים, תותים, פטאיה, פטל, אוכמניות. 

ישנה אפשרות למתג את סוג האירוע על הסירה בלוגו או כיתוב בתוספת תשלום.

הסירה כוללת-

 סושי שוקולד פרווה, ומקרונים בטעמים שונים.

יש לציין שהפירות על הסירה כפופים לעונת הפרי אך אנו מתחייבים לשפע רחב על הסירה וכל הפירות בכל העונות!

אנו מגיעים עם תעודת כשרות בהשגחת הרבנות אשקלון אשר מאשרת את פירוט המזון והכנסה למקום האירוע.

המחיר לא כולל מע״מ.
`,images:["IMG_9976_tbeqs4.jpg","IMG_1840_ytzou9.jpg","IMG_1845_vtbzmh.jpg","IMG_1833_hnfpnv.jpg"],price:1600,category:"סירת פירות העונה במגוון גדלים"},{id:11,name:" סירת פירות 2.5 מטר קומה אחת ",description:`סירת פירות העונה בעיצוב ייחודי ומיוחד מעץ אלון למראה קלאסי ונקי.

אורך הסירה 2 מטרים ומגיעה על עגלה מתכווננת.

סירת הפירות שלנו מתאימה לכל סוגי האירועים על הסירה שלנו ישנו מגוון רחב של פירות בהתאם לסוג העונה כ15 סוגי פירות בשפע גדול.

אם אתם חושבים על סירת פירות אנחנו הכתובת בישבילכם! על הסירה - אבטיח, אננס, מלון, ענבים ירוקים, ליצ׳י, סברס, פסיפלורה, ענבים אדומים, תפוזים, קיווי, מנגו, אשכולית אדומה, פומלית, תמרים, תותים, פטאיה, פטל, אוכמניות.

ישנה אפשרות למתג את סוג האירוע על הסירה בלוגו או כיתוב בתוספת תשלום.

הסירה כוללת לבחירתכם ללא תוספת עלות סושי שוקולד פרווה, ומקרונים בטעמים שונים.

יש לציין שהפירות על הסירה כפופים לעונת הפרי אך אנו מתחייבים לשפע רחב על הסירה וכל הפירות בכל העונות!

אנו מגיעים עם תעודת כשרות בהשגחת הרבנות אשקלון אשר מאשרת את פירוט המזון והכנסה למקום האירוע.`,images:["IMG_9876_tzquwe.jpg",{type:"video",src:"IMG_1842_ppocwq"}],price:1850,category:"סירת פירות העונה במגוון גדלים"},{id:12,name:" סירת פירות 2 מטרים עם קומת ממתקי גומי באורך 1.5 מטר",description:`סירת פירות העונה בעיצוב ייחודי ומיוחד מעץ אלון למראה קלאסי ונקי.

אורך הסירה 2 מטרים ומגיעה על עגלה מתכווננת.

סירת הפירות שלנו מתאימה לכל סוגי האירועים על הסירה שלנו ישנו מגוון רחב של פירות בהתאם לסוג העונה כ15 סוגי פירות בשפע גדול.

אם אתם חושבים על סירת פירות אנחנו הכתובת בישבילכם! על הסירה - אבטיח, אננס, מלון, ענבים ירוקים, ליצ׳י, סברס, פסיפלורה, ענבים אדומים, תפוזים, קיווי, מנגו,אשכולית אדומה, פומלית, תמרים, תותים, פטאיה, פטל, אוכמניות.

ישנה אפשרות למתג את סוג האירוע על הסירה בלוגו או כיתוב בתוספת תשלום.

הסירה כוללת לבחירתכם ללא תוספת עלות סושי שוקולד פרווה, ומקרונים בטעמים שונים.

יש לציין שהפירות על הסירה כפופים לעונת הפרי אך אנו מתחייבים לשפע רחב על הסירה וכל הפירות בכל העונות!

בנוסף סירת ממתקי גומי המכילה 6 ק"ג של ממתקי גומי שונים בשפע רחב.

אנו מגיעים עם תעודת כשרות בהשגחת הרבנות אשקלון אשר מאשרת את פירוט הפירות והכנסה למקום האירוע.`,images:["IMG_5048_kgja4r.jpg","IMG_9959_osj1zt.jpg","IMG_3349_uqtzq0.jpg",{type:"video",src:"IMG_9969_p0jtsa"},"IMG_4405_tnjawm.jpg",""],price:1900,category:"סירת פירות העונה במגוון גדלים"},{id:13,name:" סירת פירות 2 מטרים עם קומת ירקות חתוכים באורך 1.5 מטרים.",description:`סירת פירות העונה בעיצוב ייחודי ומיוחד מעץ אלון למראה קלאסי ונקי.

אורך הסירה 2 מטרים ומגיעה על עגלה מתכווננת.

סירת הפירות שלנו מתאימה לכל סוגי האירועים על הסירה שלנו ישנו מגוון רחב של פירות בהתאם לסוג העונה כ15 סוגי פירות בשפע גדול.

אם אתם חושבים על סירת פירות אנחנו הכתובת בישבילכם! על הסירה - אבטיח, אננס, מלון, ענבים ירוקים, ליצ׳י, סברס, פסיפלורה, ענבים אדומים, תפוזים, קיווי, מנגו,אשכולית אדומה, פומלית, תמרים, תותים, פטאיה, פטל, אוכמניות.

ישנה אפשרות למתג את סוג האירוע על הסירה בלוגו או כיתוב בתוספת תשלום.

הסירה כוללת לבחירתכם ללא תוספת עלות סושי שוקולד פרווה, ומקרונים בטעמים שונים.

יש לציין שהפירות על הסירה כפופים לעונת הפרי אך אנו מתחייבים לשפע רחב על הסירה וכל הפירות בכל העונות!

בנוסף סירת ירוקת חתוכים טריים ומיקס חמוצי הבית בשפע רחב.

אנו מגיעים עם תעודת כשרות בהשגחת הרבנות אשקלון אשר מאשרת את פירוט הפירות והכנסה למקום האירוע.`,images:["IMG_4459_cgineg.jpg"],price:2100,category:"סירת פירות העונה במגוון גדלים"},{id:14,name:" סירת פירות 2.5 מטר עם קומת קוקטליים",description:" ותמונות להשלים תיאור",images:["IMG_8568_bbtz30.jpg","IMG_7831_k1wgbd.jpg"],price:2500,category:"סירת פירות העונה במגוון גדלים"}]}]},{id:"sushi-boats",name:"סירות סושי במגוון גדלים",description:"סירות סושי עם מגוון סושי טרי לאירועים מיוחדים",detailedDescription:"סירת סושי בעיצוב ייחודי ומיוחד מעץ אלון למראה קלאסי ונקי. אורך הסירה 2 מטרים ומגיעה על עגלה מתכווננת. סירת הסושי מגיעה עם מגוון סוגי סושי שונים ( הכל אינסייד אאוט)  סירת הסושי מגוונת מאוד ומתאימה לכל האורחים שלכם כאשר היא מגיעה עם רולים - מטוגנים בציפוי פנקו, צמחוניים, עם דג נא, דג אפוי, מעטפת סלמון נא, מעטפת אבוקדו, מעטפת קצח ומגוון של תוספות של קריספי בטטה, קריספי בצל, שבבי טמפורה מטוגנים, פקאנים טחונים, מיקס בוטנים ועוד..  לצד הסירה מוגשים שלל של רטבים - ספייסי מיונז, טריאקי, סויה, צ׳ילי מתוק, רוטב חמוץ מתוק,חמוצי קימצ׳י יפניים. צ׳ופסטיקס וסירות קטנות להגשת הסושי לאורחים שלכם.מחיר משתנה לפי מיקום האירוע.אנו מגיעים עם תעודת כשרות בהשגחת הרבנות אשקלון אשר מאשרת את פירוט המזון והכנסה למקום האירוע.",image:"IMG_0731_d3mdrt.jpg",backgroundVideo:null,tiktokVideo:"7420742466397048071",subCategories:[{id:"sushi-boat-options",name:"אפשרויות סירת סושי",description:"מגוון אפשרויות של סירות סושי לאירועים",attractions:[{id:16,name:"סירת סושי 2 מטרים 300 יחידות סושי",description:`סירת סושי בעיצוב ייחודי ומיוחד מעץ אלון למראה קלאסי ונקי. אורך הסירה 2 מטרים ומגיעה על עגלה מתכווננת. סירת הסושי מגיעה עם  300 של מגוון סוגי סושי שונים ( הכל אינסייד אאוט)  סירת הסושי מגוונת מאוד ומתאימה לכל האורחים שלכם כאשר היא מגיעה עם רולים-   מטוגנים בציפוי פנקו, צמחוניים, עם דג נא, דג אפוי, מעטפת סלמון נא, מעטפת אבוקדו, מעטפת קצח ומגוון של תוספות של קריספי בטטה, קריספי בצל, שבבי טמפורה מטוגנים, פקאנים טחונים, מיקס בוטנים ועוד..  לצד הסירה מוגשים שלל של רטבים - ספייסי מיונז, טריאקי, סויה, צ׳ילי מתוק, רוטב חמוץ מתוק,חמוצי קימצ׳י יפניים. צ׳ופסטיקס וסירות קטנות להגשת הסושי לאורחים שלכם.

מחיר משתנה לפי מיקום האירוע.

אנו מגיעים עם תעודת כשרות בהשגחת הרבנות אשקלון אשר מאשרת את פירוט המזון והכנסה למקום האירוע.
`,images:["IMG_2222_ixdhcg.jpg","IMG_1433_dszfnk.jpg","IMG_1455_u51end.jpg"],price:2200,category:"סירת סושי"},{id:18,name:"סירת סושי 2.5 מטרים 400 יחידות סושי",description:"סירת סושי מקצועית בגודל 2.5 מטרים עם 400 יחידות סושי טריות",images:["IMG_1318_xluvey.jpg"],price:2600,category:"סירת סושי"}]}]},{id:"photo-booths",name:"עמדות צילום לאירועים",description:"עמדות צילום מקצועיות לאירועים מיוחדים",detailedDescription:"עמדות צילום מקצועיות לאירועים מיוחדים. אנו מתמחים במגוון עמדות צילום מתקדמות כולל עמדת סטריפים/מגנטים, עמדת 360 מסתובבת, ועמדת רטרו. כל העמדות כוללות תאורה מקצועית, שטיח אדום, עמודי תיחום, ואיש שירות מקצועי לאורך כל האירוע. אנו מבטיחים איכות צילום מקסימלית עם ממותג אישי לכל אירוע.",image:"IMG_3263_j2g39g.jpg",backgroundVideo:null,tiktokVideo:"7416273633171000594",subCategories:[{id:"photo-booth-types",name:"סוגי עמדות צילום",description:"מגוון סוגי עמדות צילום לאירועים",attractions:[{id:19,name:"עמדת צילום סטריפים/ מגנטים",description:`עמדת צילום סטריפים/ מגנטים לאירוע שלכם.

אנו מגיעים בקבלת פנים וממקמים את העמדה בקבלת פנים.

(במידה ויש/לבקשת הלקוח).

העמדה כוללת שטיח אדום ועמודי תיחום מסביב לעמדה.

שני עמודי תאורה ממול לעמדה לאיכות צילום מקסימלית. כל אורח באירוע מגיע לעמדה שלנו עומד ממולה ומקבל הדרכה מאיש הצוות שלנו. האורח מקבל סטריפ תמונות מגנטי עם תמונה גדולה ממותגת . העמדה מוגבלת ל3 שעות צילום מרגע העמדתה של העמדה בשעה שבעל האירוע ביקש כמובן.

כולל איש שירות לאורך כל האירוע!

לתפעול העמדה בלבד.

מחיר משתנה במיקום האירוע

המחיר לא כולל מע״מ.
`,images:["IMG_1696_srwyqn.jpg","IMG_2400_a7z1pf.jpg",{type:"video",src:"IMG_4567_dia5pv"},{type:"video",src:"IMG_4565_xjkrid"},"IMG_1698_q3c7xh.jpg","IMG_3263_j2g39g.jpg","IMG_4117_kfyivv.jpg","IMG_4581_umjgwb.jpg"],price:1500,category:"עמדות צילום לאירועים"},{id:20,name:"עמדת צילום מסתובבת 360",description:`עמדת צילום 360 לאירוע שלכם.

אנו מגיעים בקבלת פנים וממקמים את העמדה בתוך האולם.

העמדה כוללת שטיח אדום ועמודי תיחום מסביב לעמדה ועמודי תאורה מסביב לעמדה לאיכות צילום מקסימלית.

כל אורח באולם מגיע לעמדה שלנו עולה על העמדה,

(אפשרי עד שלושה אנשים על העמדה כל פעם לפי בחירת האורח) ומקבל סרטון מגניב אשר ממותג בסוג האירוע עם שמות של חוגגי השמחה ותאריך.

הסרטון מותאם במדוייק להעלאה לרשתות החברתיות. בנוסף הסרטון נשלח בשניות ספורות לטלפון הנייד של האורח שלכם בכל מיני אופציות שונות - איר דרופ, וואצאפ, מייל, sms כך שלא משנה עם איזה טלפון האורח שלכם מגיע זה ישלח אליו באיכות הגבוהה ביותר.

העמדה מוגבלת ל3 שעות צילום.

מחיר העמדה משתנה לפי מיקום האירוע

המחיר לא כולל מע״מ.
`,images:["IMG_4518_k9qrw8.jpg",{type:"video",src:"IMG_4317_xlhvui.mov"},{type:"video",src:"IMG_4305_dgxqth.mov"},{type:"video",src:"IMG_4599_rjldds.mov"},"IMG_7773_y0wrbs.jpg","IMG_7766_wxikd7.jpg"],price:1800,category:"עמדות צילום לאירועים"},{id:201,name:"עמדת צילום רטרו תמונה גדולה",description:`עמדת צילום 360 לאירוע שלכם.

אנו מגיעים בקבלת פנים וממקמים את העמדה בתוך האולם.

העמדה כוללת שטיח אדום ועמודי תיחום מסביב לעמדה ועמודי תאורה מסביב לעמדה לאיכות צילום מקסימלית.

עמדת צילום סטריפים לאירוע שלכם.

אנו מגיעים בקבלת פנים וממקמים את העמדה בקבלת פנים.( במידה ויש/לבקשת הלקוח).

העמדה כוללת שטיח אדום ועמודי תיחום מסביב לעמדה.

שני עמודי תאורה ממול לעמדה לאיכות צילום מקסימלית. כל אורח באירוע מגיע לעמדה שלנו עומד ממולה ומקבל הדרכה מאיש הצוות שלנו. האורח מקבל סטריפ תמונות מגנטי עם תמונה גדולה ממותגת . העמדה מוגבלת ל3 שעות צילום מרגע העמדתה של העמדה בשעה שבעל האירוע ביקש כמובן.

כולל איש שירות לאורך כל האירוע! 

לתפעול העמדה בלבד.

מחיר משתנה במיקום האירוע.

המחיר לא כולל מע״מ.
`,images:["IMG_4024_qipnsk.jpg","IMG_1688_vjzrph.jpg"],price:1750,category:"עמדות צילום לאירועים"}]}]},{id:"sunglasses-stand",name:"עמדת משקפיים",description:"עמדת משקפיים מקצועית עם מגוון צבעים לאירועים מיוחדים",detailedDescription:"עמדת משקפיים מקצועית עם מגוון צבעים לאירועים מיוחדים. אנו מתמחים בעמדות משקפיים מעוצבות עם 52 יחידות במגוון צבעים וסגנונות. העמדה כוללת תאורה מקצועית, עיצוב ייחודי, ומגוון רחב של משקפיים איכותיים. הצוות המקצועי שלנו מבטיח התאמה מושלמת לכל סוג אירוע עם שירות לקוחות מעולה.",image:"IMG_5205_zsvmyc.jpg",backgroundVideo:null,tiktokVideo:"7489216183141551378",mobileVideo:{type:"tiktok",src:"7489216183141551378"},subCategories:[{id:"sunglasses-options",name:"אפשרויות עמדת משקפיים",description:"מגוון אפשרויות של עמדת משקפיים לאירועים",attractions:[{id:21,name:"עמדת משקפיים 52 יחידות",description:"עמדת משקפיים מקצועית עם 52 יחידות במגוון צבעים - מושלמת לאירועים",images:["IMG_5132_vzro3q.jpg",{type:"video",src:"IMG_8307_ttj5yj"},"IMG_5144_pqjep4.jpg",{type:"video",src:"IMG_8308_pijftu"},"IMG_5206_kitnyv.jpg"],price:1500,category:"עמדת משקפיים"}]}]},{id:"lucido-bar",name:"בר קונספט פרימיום",description:"בר מקצועי עם שירותי מזיגה לאירועים מיוחדים - כולל מגוון משקאות אלכוהוליים ומקצועי מזיגה מנוסה",detailedDescription:"בר מקצועי עם שירותי מזיגה לאירועים מיוחדים. אנו מתמחים בברים מעוצבים עם מגוון רחב של משקאות אלכוהוליים איכותיים. הצוות שלנו כולל מקצועי מזיגה מנוסה עם ידע מעמיק בקוקטיילים קלאסיים וחדשניים. הבר מגיע עם כל הציוד הנדרש, תאורה מקצועית, ועיצוב ייחודי שמתאים לכל סוג אירוע. אנו מבטיחים חוויה בלתי נשכחת עם שירות מקצועי ואיכותי.",image:"IMG_9281_x4rykd.jpg",backgroundVideo:{type:"video",src:"bar.video_zhqxpq"},tiktokVideo:"7500983506097409298",subCategories:[{id:"burger-options",name:"בר שירותי מזיגה",description:"תיאור של אור",attractions:[{id:36,name:"בר קונספט פרימיום",description:"תיאור של אור",images:["ce40404b-1b2a-4799-86f2-6ad72902bcef_mlnftx.jpg","IMG_9657_i1ley2.jpg","IMG_9294_vjtqrf.jpg","IMG_9246_beegh3.jpg"],price:3e3,priceNote:'המחיר לא כולל מע"מ',category:"עמדת המבורגרים אורשוק",pricePerPerson:!0}]}]},{id:"fruit-bar",name:"בר פירות",description:"בר פירות מעוצב אשר מלא בפירות העונה הבר בעיצוב ייחודי ומיוחד למראה קלאסי ונקי.",detailedDescription:"בר פירות מעוצב אשר מלא בפירות העונה הבר בעיצוב ייחודי ומיוחד למראה קלאסי ונקי. אורך הבר כ-2.7 מטרים ומגיע על עגלה מתכווננת. הבר עצמו מגיע עם מעמדים יפים מזכוכית ועץ בגבהים שונים. בר הפירות שלנו מתאים לכל סוגי האירועים ויש בו מגוון רחב של פירות בהתאם לסוג העונה כ-15-20 סוגי פירות בשפע גדול. בנוסף אבטיח בגילוף של שמות החתן והכלה.",image:"IMG_0090_eqs6xv.jpg",backgroundVideo:null,tiktokVideo:"7500983506097409298",mobileVideo:{type:"video",src:"IMG_0096_wd641v"},subCategories:[{id:"fruit-bar-options",name:"בר שירותי מזיגה",description:"בר פירות מעוצב אשר מלא בפירות העונה הבר בעיצוב ייחודי ומיוחד למראה קלאסי ונקי.",attractions:[{id:102,name:"בר פירות",description:"בר פירות מעוצב אשר מלא בפירות העונה הבר בעיצוב ייחודי ומיוחד למראה קלאסי ונקי. אורך הבר כ-2.7 מטרים ומגיע על עגלה מתכווננת. הבר עצמו מגיע עם מעמדים יפים מזכוכית ועץ בגבהים שונים. בר הפירות שלנו מתאים לכל סוגי האירועים ויש בו מגוון רחב של פירות בהתאם לסוג העונה כ-15-20 סוגי פירות בשפע גדול. בנוסף אבטיח בגילוף של שמות החתן והכלה.",images:["IMG_0090_eqs6xv.jpg","IMG_0092_eayrkv.jpg",{type:"video",src:"IMG_0109_cejxoj"}],price:2500,priceNote:'המחיר לא כולל מע"מ',category:"בר פירות",pricePerPerson:!1}]}]},{id:"cocktail-wall",name:"קיר קוקטיילים/צ'ייסרים לאירועים",description:"קיר קוקטיילים מקצועי עם מגוון משקאות לאירועים מיוחדים",detailedDescription:'קיר קוקטיילים מקצועי עם מגוון משקאות לאירועים מיוחדים. אנו מתמחים בעיצוב קירות קוקטיילים מעוצבים עם 105 בקבוקונים מרובעים של 35 מ"ל. הקיר כולל 5 סוגי קוקטיילים בצבעים וטעמים שונים, שלט מואר עליון, שרשרת לד צבעונית, ומראה מגניבה. אנו מציעים אפשרות למתג את האירוע עם מדבקות עגולות על כל בקבוקון. הקיר מגיע עם אישור כשרות על האלכוהול ועיצוב ייחודי שמתאים לכל סוג אירוע.',image:"IMG_8344_ali0tb.jpg",backgroundVideo:null,tiktokVideo:"7415535927738649874",subCategories:[{id:"cocktail-options",name:"אפשרויות קיר קוקטיילים",description:"מגוון אפשרויות של קיר קוקטיילים לאירועים",attractions:[{id:22,name:'עמדת בקבוקוני אלכוהול 35 מ"ל ממותגים',description:`עמדת אלכוהול מעוצבת הכוללת לבחירתך- 105 בקבוקונים מרובעים עם 35 מ״ל אלכוהול לבחירתך. בקבוקונים אשר מלאים בקוקטליים מיוחדים 5 סוגים כל סוג בצבע וטעם אחר מה שיוצר עמדה צבעונית יפה ומגוונת. אפשר למלא בכל סוג אלכוהול שתרצו במידה ולא תרצו קוקטליים. העמדה כוללת שלט מואר עליון, ושרשרת לד צבעונית עם שלט לבחירתכם הצבעים שאתם תרצו על העמדה. 

יש אפשרות לשים מדבקה עגולה על כל בקבוקון שכוללת את סוג האירוע תאריך ושמות של חתן וכלה. 

כמובן שהעמדה מגיעה עם מראה מגניבה שמוסיפה המון יופי וייחודיות לעמדה. העמדה כוללת אישור כשרות על האלכוהול.

לבחירה 5 סוגי אלכוהול

מומלץ קוקטליים`,images:["IMG_7493_gqptbi.jpg","IMG_3676_kjlyx7.jpg","IMG_4609_dxyhjn.jpg","IMG_3673_hgqp4g.jpg",{type:"video",src:"IMG_7527_wqw5xt"}],price:1500,category:"קיר קוקטיילים/צ'ייסרים לאירועים"},{id:23,name:"קיר צ'ייסרים",description:`עמדת אלכוהול מעוצבת הכוללת לבחירתך- 105 בקבוקונים מרובעים עם 35 מ״ל אלכוהול לבחירתך. בקבוקונים אשר מלאים בקוקטליים מיוחדים 5 סוגים כל סוג בצבע וטעם אחר מה שיוצר עמדה צבעונית יפה ומגוונת. אפשר למלא בכל סוג אלכוהול שתרצו במידה ולא תרצו קוקטליים. העמדה כוללת שלט מואר עליון, ושרשרת לד צבעונית עם שלט לבחירתכם הצבעים שאתם תרצו על העמדה. 

יש אפשרות לשים מדבקה עגולה על כל בקבוקון שכוללת את סוג האירוע תאריך ושמות של חתן וכלה. 

כמובן שהעמדה מגיעה עם מראה מגניבה שמוסיפה המון יופי וייחודיות לעמדה. העמדה כוללת אישור כשרות על האלכוהול.

לבחירה 5 סוגי אלכוהול

מומלץ קוקטליים`,images:[""],price:1500,category:"קיר קוקטיילים/צ'ייסרים לאירועים"}]}]},{id:"belgian-waffle-stand",name:"עמדת וופל בלגי",description:"עמדת וופל בלגי מקצועית עם דונאטס משולבים לאירועים מיוחדים",detailedDescription:"עמדת וופל בלגי מקצועית עם דונאטס משולבים לאירועים מיוחדים. אנו מתמחים בעמדות וופל בלגי איכותיות עם מתכונים מסורתיים ומגוון תוספות טעימות. העמדה כוללת ציוד מקצועי, חומרי גלם איכותיים, ומגוון רחב של תוספות כמו שוקולד, פירות, וקצפת. הצוות המקצועי שלנו מבטיח הכנה במקום האירוע עם ריחות מדהימים שממלאים את האוויר. אנו מתאימים את העמדה לכל סוג אירוע עם שירות מקצועי ואיכותי.",image:"IMG_6539_hzymbx.jpg",backgroundVideo:null,tiktokVideo:"7435601320289094920",mobileVideo:{type:"video",src:"waffle-demo_abc123"},subCategories:[{id:"waffle-options",name:"אפשרויות עמדת וופל",description:"מגוון אפשרויות של עמדת וופל בלגי לאירועים",attractions:[{id:24,name:"מזנון וופל בלגי ודונאטס משולב",description:`עמדת המתוקים שלנו כוללת שני מכונות. אחת של וופל בלגי, ואחת של דונאטס. העמדה כוללת מזנון בופה הגשה בצבע לבן / עץ אלון לבחירתכם למראה קלאסי ונקי. העמדה כוללת מגוון שוקולדים איכותיים כמו- שוקולד קינדר בואנו, שוקולד פוררו רושה, בייגלה מלוח, סירופ שוקולד וסירופ מייפל. מגוון תוספת על העמדה- כדורי קליק,עדשים צבעוניים, סוכריות צבעוניות, סוכריות שוקולד, עוגיות אוראו, עוגיות לוטוס, מיני מרשמלו, קוקוס טחון, וכדורי שוקולד. העמדה כולה פרווה! ומבטיחים שלא תרגישו הכל באיכות הגבוהה ביותר. העמדה כולה בהשגחת הרבנות אשקלון הכל כשר פרווה.

המחיר משתנה לפי כמות הסועדים:

(מחיר משתנה לפי מיקום האירוע)

אנו מגיעים עם תעודת כשרות בהשגחת הרבנות אשקלון אשר מאשרת את פירוט המזון והכנסה למקום האירוע.

המחיר לא כולל מע״מ.`,images:["IMG_8643_fzuh0q.jpg","IMG_6539_hzymbx.jpg"],price:1199,guestOptions:[{label:"עד 35 אנשים",maxGuests:35,price:1199},{label:"עד 50 אנשים",maxGuests:50,price:1399},{label:"עד 70 אנשים",maxGuests:70,price:1699},{label:"עד 100 אנשים",maxGuests:100,price:1999}],category:"עמדת וופל בלגי"},{id:25,name:"קיר דונאטס לאירועים",description:`קיר עץ המלא במיני דונאטסים בטעמים וצבעים שונים! המיני דונאטס האמריקאי המקורי נוחת באירוע שלכם, והוא מגיע טרי , מתוק וטעים, צבעוני, וכשר פרווה בהשגחת הרבנות אשקלון. במילים אחרות, למה שלא יהיה קיר דונאטס באירוע שלכם? קינוח מושלם (יש האומרים – "מאנצ" לאפטר פרטי מצוין), והמחיר שלו אטרקטיבי בטירוף ביחס לאטרקציות מתוקות אחרות. מגיע עד לאירוע שלכם איש צוות מטעם אור הפקות, ומקים קיר דונאטס עצום מגיע לגובה של יותר מ-2 מטר! הקיר מכיל במקביל כ-80 יח' מיני דונאטס, אך ניתן לשדרג לאופצית Refill בה איש הצוות ממלא לאורך האירוע את הדונאטס, בכדי שתמיד הוא יראה מלא.

קיר המלא 80 יח׳ 999₪

קיר המלא 100 יח׳ 1199₪

קיר המלא 125 יח׳ 1499₪

אנו מגיעים עם תעודת כשרות בהשגחת הרבנות אשקלון אשר מאשרת את פירוט המזון והכנסה למקום האירוע.`,images:["IMG_9221_uuk95d.jpg","IMG_9291_gekmij.jpg","IMG_9339_r2hage.jpg"],price:999,category:"עמדת וופל בלגי"}]}]},{id:"succulent-stand",name:"עמדת שתילי סוקלנטים אישיים לאירועים",description:"עמדת שתילי סוקלנטים מעוצבת לאירועים מיוחדים",detailedDescription:"עמדת שתילי סוקלנטים מעוצבת לאירועים מיוחדים. אנו מתמחים בעמדות סוקלנטים ייחודיות עם מגוון רחב של צמחים עמידים ויפים. העמדה כוללת סוקלנטים במגוון צורות וצבעים, עציצים מעוצבים, ועיצוב ייחודי שמתאים לכל סוג אירוע. הצוות המקצועי שלנו מבטיח עיצוב מושלם עם תשומת לב לפרטים הקטנים. הסוקלנטים מהווים מזכרת נפלאה לאורחים ומשאירים רושם מתמשך על האירוע.",image:"IMG_2303_xdcask.jpg",backgroundVideo:null,tiktokVideo:"7500983506097409298",subCategories:[{id:"succulent-options",name:"אפשרויות עמדת סוקלנטים",description:"מגוון אפשרויות של עמדת שתילי סוקלנטים לאירועים",attractions:[{id:26,name:"עמדת שתילי סוקלנטים לאירועים",description:`עמדת שתילים חיים כמתנה מיוחדת ויוצאת דופן לאורחים שלכם. עמדת השתילים שלנו מכניסה צד ייחודי עם הקדשה לכל אורח שלכם אשר לוקח  מזכרת איתו לביתו ובכל פעם שהוא מטפל בשתיל הוא נזכר באירוע שלכם. שתיל הסוקולנט הינו צמח אשר מלא בתאים אוגרי מים,  כך שאינו זקוק להשקייה מרובה ולשמש ישירה. ישנם מגוון רחב של סוגי סוקולנטים במגוון צבעים וסגנונות לבחירתכם.

מחיר לשתיל סוקולנט בקוטר 5.5 ס״מ עם הקדשה אישית וכיסוי פשתן -

20 ש"ח ליחידה.

המחיר כולל בר הגשה לבן יפיפה עם הרכבה ופירוק.

המחיר המוצג עבור 100 יחידות שתילים.

(מחיר משתנה לפי מיקום האירוע)`,images:["IMG_2265_fluryw.jpg","IMG_2339_ahwvs3.jpg","IMG_9391_n0fffe.jpg",{type:"video",src:"IMG_2345_w7e4co"}],price:2e3,category:"עמדת שתילי סוקלנטים אישיים לאירועים"}]}]},{id:"photo-walls",name:"קירות צילום לאירועים",description:"קירות צילום מעוצבים לאירועים מיוחדים",detailedDescription:"קירות צילום מעוצבים לאירועים מיוחדים. אנו מתמחים בעיצוב קירות צילום ייחודיים במגוון סגנונות כולל יווני, טיקטוק, בת מצווה, מקווה/חינה, הכנסת ספר תורה, בריתה, וברית. כל קיר מעוצב עם תשומת לב לפרטים הקטנים ועיצוב שמתאים לנושא האירוע. הצוות המקצועי שלנו מבטיח התקנה מהירה ובטוחה עם עיצוב מושלם שמתאים לכל סוג אירוע. הקירות מהווים רקע מדהים לצילומים ומשאירים רושם מתמשך על האירוע.",image:"IMG_9481_flld1f.jpg",backgroundVideo:null,tiktokVideo:"7410343750876105992",subCategories:[{id:"photo-wall-options",name:"אפשרויות קירות צילום",description:"מגוון אפשרויות של קירות צילום לאירועים",attractions:[{id:27,name:"קיר צילום בסגנון יווני",description:"קיר צילום מרהיב בסגנון יווני - מושלם לאירועים יווניים",images:["IMG_7667_ckvfho.jpg","IMG_9480_lfpzjx.jpg",{type:"video",src:"IMG_9482_imh2mx"},"IMG_8666_rklhdq.jpg",{type:"video",src:"IMG_7659_lqgquv"},"7d18629f-4511-4fcc-9df8-3defe6fa6f58_heismn.jpg",{type:"video",src:"IMG_9986_nzjder"}],price:2e3,category:"קירות צילום לאירועים"}]}]},{id:"buffet-designs",name:"עיצובי בופה קייטרינג",description:"עיצובי בופה מקצועיים ומרהיבים לאירועים מיוחדים",detailedDescription:"עיצובי בופה מקצועיים ומרהיבים לאירועים מיוחדים. אנו מתמחים בעיצוב בופים מעוצבים עם מגוון רחב של אפשרויות כולל בופה חלבי ובשרי. הצוות שלנו כולל מינימום 2 דיילים מקצועיים עם ניסיון רב בעיצוב בופים. אנו מחזיקים כלים חלביים ובשריים בהפרדה מלאה ומבטיחים עיצוב מושלם שמתאים לכל סוג אירוע. הבופים שלנו כוללים תאורה מקצועית, עיצוב ייחודי, ותשומת לב לפרטים הקטנים שיוצרים חוויה ויזואלית מדהימה.",image:"IMG_8200_i6bmpe.jpg",backgroundVideo:{type:"video",src:"bufe.video_vu3qa1"},tiktokVideo:"7551366768527281415",subCategories:[{id:"buffet-options",name:"אפשרויות עיצוב בופה",description:"מגוון אפשרויות של עיצובי בופה לאירועים",attractions:[{id:34,name:"עיצוב בופה חלבי",description:'המחירים נעים החל מ-1200 ש"ח לעיצוב הכולל מינימום 2 דיילים.\n\nיש לציין שאנו מחזיקים כלים חלביים ובשריים בהפרדה מלאה.',images:["IMG_9034_msdo3h.jpg","IMG_8931_efeat2.jpg","IMG_4725_zhdgry.jpg","IMG_3467_ljtifh.jpg",{type:"video",src:"IMG_4883_kfebkh"}],price:1200,category:"עיצובי בופה קייטרינג"},{id:35,name:"עיצוב בופה",description:`המחירים נעים החל מ1200 ש"ח לעיצוב הכולל מינימום 2 דיילים.

יש לציין שאנו מחזיקים כלים חלביים ובשריים בהפרדה מלאה`,images:["IMG_8200_i6bmpe.jpg","IMG_8151_rjuvv3.jpg"],price:1200,category:"עיצובי בופה קייטרינג"}]}]},{id:"p-nuts-boat",name:"סירת פיצוחים טריים",description:"עיצובי סירת פיצוחים מקצועיים ומרהיבים לאירועים מיוחדים",detailedDescription:"סירת פיצוחים מושלמת לכל אירוע הכוללת מעל 30 קג של פיצוחים טריים הכוללים תעודת כשרות מפורטת יש אופציה לתוספת של קומה נוספת.",image:"IMG_0832_r0nhlf.jpg",backgroundVideo:null,tiktokVideo:"7551366768527281415",mobileVideo:{type:"video",src:"IMG_0889_guwbci"},subCategories:[{id:"p-nuts-options",name:"אפשרויות סירת פיצוחים",description:"מגוון אפשרויות של סירת פיצוחים לאירועים",attractions:[{id:100,name:"סירת פיצוחים באורך 2 מטרים ",description:"סירת פיצוחים מושלמת לכל אירוע הכוללת מעל 30 קג של פיצוחים טריים הכוללים תעודת כשרות מפורטת יש אופציה לתוספת של קומה נוספת.",images:["IMG_0832_r0nhlf.jpg","IMG_0824_cpwhqn.jpg","IMG_0819_y8yqhk.jpg","IMG_0810_oz4bmc.jpg","IMG_0802_qa4rgy.jpg"],price:1200,category:"סירת פיצוחים"}]}]},{id:"new-baby",name:"עמדת גילוי מין העובר",description:"עמדת גילוי מין העובר",detailedDescription:"",image:"rabit2_cfzguw.jpg",backgroundVideo:null,tiktokVideo:"7519157818331532551",subCategories:[{id:"new-baby-options",name:"אפשרויות עמדת גילוי מין העובר",description:"מגוון אפשרויות של עמדת גילוי מין העובר לאירועים",attractions:[{id:101,name:"עיצוב עמדת גילוי מין העובר",description:"",images:["rabit2_cfzguw.jpg","rabit3_qk3w8n.jpg","rabit1_l3au5e.jpg"],price:1500,category:"עמדת גילוי מין העובר"}]}]},{id:"orshok-burger-stand",name:"עמדת המבורגרים אורשוק",description:"עמדת המבורגרים מקצועית עם הכנה במקום האירוע",detailedDescription:"עמדת המבורגרים מקצועית עם הכנה במקום האירוע. אנו מתמחים בעמדות המבורגרים מעוצבות עם הכנה טרייה במקום האירוע. הצוות המקצועי שלנו מבטיח הכנה מהירה ואיכותית של המבורגרים עם חומרי גלם איכותיים. המחירים מתחילים מ-80 ₪ לאדם עם אפשרויות התאמה אישית לכל סוג אירוע. העמדה כוללת ציוד מקצועי, תאורה מתאימה, ועיצוב ייחודי שמתאים לכל סוג אירוע. אנו מבטיחים חוויה קולינרית מדהימה עם ריחות שממלאים את האוויר.",image:"IMG_3766_p20cau.jpg",backgroundVideo:{type:"video",src:"burger-video_kcxyva",mobileVideo:"burger-video_kcxyva"},tiktokVideo:"7555088288546180370",subCategories:[{id:"burger-options",name:"אפשרויות עמדת המבורגרים",description:"מגוון אפשרויות של עמדת המבורגרים לאירועים",attractions:[{id:104,name:"עמדת המבורגרים הכנה במקום האירוע",description:"עמדת המבורגרים מקצועית עם הכנה במקום האירוע - החל מ-80 ₪ לאדם",images:["IMG_5500_tmqbt9.jpg","IMG_8828_y46lkw.jpg","IMG_5496_ws7mjh.jpg"],price:80,category:"עמדת המבורגרים אורשוק",pricePerPerson:!0}]}]},{id:"dj-after-party",name:"עמדות דיגיי לאפטר פארטי",description:"עמדות דיגיי מקצועיות לאפטר פארטי לאירועים מיוחדים",detailedDescription:"עמדות דיגיי מקצועיות לאפטר פארטי לאירועים מיוחדים. אנו מתמחים בעמדות דיגיי מעוצבות עם ציוד מקצועי איכותי ומגוון רחב של מוזיקה. הצוות שלנו כולל דיגיי מקצועי עם ניסיון רב במגוון סגנונות מוזיקליים. העמדה כוללת מערכת סאונד מתקדמת, תאורה מקצועית, ועיצוב ייחודי שמתאים לכל סוג אירוע. אנו מבטיחים חוויה מוזיקלית מדהימה שמתאימה לכל סוג אירוע עם שירות מקצועי ואיכותי.",image:"IMG_5902_gaindl.jpg",backgroundVideo:{type:"video",src:"DJ.video_nblhi9",mobileVideo:"IMG_8711_f55ogs"},mobileVideo:{type:"video",src:"IMG_1383_nmsfh6"},subCategories:[{id:"dj-options",name:"אפשרויות עמדת דיגיי",description:"מגוון אפשרויות של עמדות דיגיי לאפטר פארטי",attractions:[{id:37,name:"עמדת דיגיי לאפטר פארטי",description:"עמדת דיגיי מקצועית לאפטר פארטי - מושלמת להמשך האירוע",images:["IMG_5902_gaindl.jpg",{type:"video",src:"IMG_1383_nmsfh6"},{type:"video",src:"IMG_8712_ptyrbe"}],price:0,category:"עמדות דיגיי לאפטר פארטי",priceOnRequest:!0}]}]}]},s=()=>{let e=[];return o.categories.forEach(t=>{t.subCategories.forEach(t=>{e.push(...t.attractions)})}),e};console.log("categories.js loaded, categoriesData:",o)},11321:(e,t,i)=>{"use strict";i.d(t,{BB:()=>r});let o={cloudName:process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME||process.env.CLOUDINARY_CLOUD_NAME||"dpgnqgyxe"},s=new Map,r=(e,t={})=>{let i;let r=JSON.stringify({publicId:e,options:t});if(s.has(r))return s.get(r);if("object"==typeof e&&null!==e&&"video"===e.type){let s=`https://res.cloudinary.com/${o.cloudName}/video/upload`,r=t.transformations||"";i=`${s}/${r}/${e.src}`}else{let s=`https://res.cloudinary.com/${o.cloudName}/image/upload`,r=t.transformations||"";i=`${s}/${r}/${e}`}return s.set(r,i),i}},41292:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>p,metadata:()=>c,viewport:()=>d});var o=i(19510);i(67272);var s=i(68570);let r=(0,s.createProxy)(String.raw`C:\assaf\FullStack\projects\orProductions\components\Navbar.jsx#default`),a=(0,s.createProxy)(String.raw`C:\assaf\FullStack\projects\orProductions\components\performance\WebVitalsTracker.jsx#default`);var n=i(9720);let d="width=device-width, initial-scale=1",c={title:"OR Productions - אטרקציות לאירועים | השכרת ציוד מקצועי לאירועים בישראל",description:"השכרת אטרקציות מקצועיות לאירועים בישראל | עמדות צילום, מיצגי תפאורה ועוד. מחירים הוגנים, שירות מקצועי ומהיר. הזמינו עכשיו!",keywords:"אטרקציות לאירועים, השכרת ציוד לאירועים,  עמדות צילום, אירועים בישראל, חתונות, בר מצווה, ימי הולדת",author:"OR Productions",robots:"index, follow",charset:"utf-8",openGraph:{title:"OR Productions - אטרקציות מקצועיות לאירועים",description:"השכרת אטרקציות מקצועיות לאירועים בישראל. פוטובוט, בר מיצים, עמדות צילום ועוד. שירות מקצועי ומהיר!",url:"https://orproductions.co.il",siteName:"OR Productions",images:[{url:"https://res.cloudinary.com/your-cloud/image/upload/v1/og-image.jpg",width:1200,height:630,alt:"OR Productions - אטרקציות לאירועים"}],locale:"he_IL",type:"website"},twitter:{card:"summary_large_image",title:"OR Productions - אטרקציות לאירועים",description:"השכרת אטרקציות מקצועיות לאירועים בישראל",images:["https://res.cloudinary.com/your-cloud/image/upload/v1/og-image.jpg"]},other:{"google-site-verification":"YOUR_GOOGLE_VERIFICATION_CODE","msvalidate.01":"YOUR_BING_VERIFICATION_CODE","theme-color":"#7c3aed","mobile-web-app-capable":"yes","apple-mobile-web-app-capable":"yes","apple-mobile-web-app-status-bar-style":"black-translucent"}};function p({children:e}){return(0,o.jsxs)("html",{lang:"he",dir:"rtl",children:[(0,o.jsxs)("head",{children:[o.jsx(n.default,{id:"fb-pixel",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1826301894912517');
              fbq('track', 'PageView');
            `}}),o.jsx("noscript",{children:o.jsx("img",{height:"1",width:"1",style:{display:"none"},src:"https://www.facebook.com/tr?id=1826301894912517&ev=PageView&noscript=1",alt:""})}),o.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),o.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),o.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap",rel:"stylesheet"}),o.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap",rel:"stylesheet"})]}),(0,o.jsxs)("body",{className:"font-rubik",children:[o.jsx(a,{}),o.jsx(r,{}),e]})]})}},67272:()=>{}};