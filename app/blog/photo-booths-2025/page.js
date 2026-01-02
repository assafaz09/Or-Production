"use client";

import { useRouter } from "next/navigation";
import Navbar from "../../../components/Navbar";
import { getCloudinaryUrl } from "../../../lib/cloudinary";

export default function PhotoBooths2025Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => router.push("/blog")}
            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            חזרה לבלוגים
          </button>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <div className="text-sm text-purple-400 mb-4 font-medium">
              12 בינואר 2025
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              עמדות צילום לאירועים - הטרנדים החמים לשנת 2025
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              הכירו את הטרנדים החדשים בעמדות הצילום שיהפכו את האירוע שלכם
              לוויראלי
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={getCloudinaryUrl("IMG_3263_j2g39g")}
              alt="עמדות צילום לאירועים 2025"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Article Content */}
          <div className="max-w-none">
            {/* Introduction */}
            <div className="mb-12 relative overflow-hidden rounded-xl">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                  backgroundImage: `url(${getCloudinaryUrl(
                    "IMG_3263_j2g39g"
                  )})`,
                }}
              />
              {/* Content Overlay */}
              <div className="relative z-10 p-8">
                <p className="text-gray-300 text-xl leading-relaxed text-center font-light">
                  צילום באירועים – לא מה שחשבתם. בעבר, צלם מקצועי היה מספיק כדי
                  להנציח את הרגעים היפים באירוע. כיום, הטכנולוגיה שינתה את המשחק
                  ועמדות צילום חדשניות הפכו לחלק בלתי נפרד מכל חגיגה.
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-12">
              {/* עמדת צילום 360 */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-purple-500 pb-3">
                  עמדת צילום 360
                </h2>
                <div className="relative overflow-hidden rounded-xl p-8 border-l-4 border-purple-500">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                    style={{
                      backgroundImage: `url(${getCloudinaryUrl(
                        "IMG_3263_j2g39g"
                      )})`,
                    }}
                  />
                  {/* Content Overlay */}
                  <div className="relative z-10">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      עמדת צילום 360 מאפשרת לאורחים להצטלם בזוויות שונות וליצור
                      סרטוני וידאו דינמיים ומרגשים. זוהי אחת האטרקציות המבוקשות
                      ביותר באירועים.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                          יתרונות עמדת 360:
                        </h3>
                        <ul className="space-y-2">
                          <li className="text-gray-300">
                            צילום בזוויות מרובות
                          </li>
                          <li className="text-gray-300">
                            יצירת סרטוני וידאו דינמיים
                          </li>
                          <li className="text-gray-300">
                            חוויה אינטראקטיבית ייחודית
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                          מתאים ל:
                        </h3>
                        <ul className="space-y-2">
                          <li className="text-gray-300">חתונות</li>
                          <li className="text-gray-300">בר/בת מצווה</li>
                          <li className="text-gray-300">ימי הולדת</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* מגנטים ועמדות אינסטגרם */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-purple-500 pb-3">
                  מגנטים ועמדות אינסטגרם
                </h2>
                <div className="relative overflow-hidden rounded-xl p-8 border-l-4 border-purple-500">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop)`,
                    }}
                  />
                  {/* Content Overlay */}
                  <div className="relative z-10">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      עמדות צילום מגנטים קלאסיות עדיין פופולריות, אך כיום ניתן
                      למצוא עמדות צילום מותאמות לרשתות החברתיות, המאפשרות העלאה
                      ישירה לאינסטגרם וטיקטוק.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                          עמדות קלאסיות:
                        </h3>
                        <ul className="space-y-2">
                          <li className="text-gray-300">מגנטים מיידיים</li>
                          <li className="text-gray-300">תחפושות ואקססוריז</li>
                          <li className="text-gray-300">אפקטים מיוחדים</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                          עמדות דיגיטליות:
                        </h3>
                        <ul className="space-y-2">
                          <li className="text-gray-300">העלאה לאינסטגרם</li>
                          <li className="text-gray-300">שיתוף בטיקטוק</li>
                          <li className="text-gray-300">שטאגים אוטומטיים</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* מייצגי תפאורה */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-purple-500 pb-3">
                  מייצגי תפאורה
                </h2>
                <div className="relative overflow-hidden rounded-xl p-8 border-l-4 border-purple-500">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop)`,
                    }}
                  />
                  {/* Content Overlay */}
                  <div className="relative z-10">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      שילוב של קירות צילום מעוצבים, שלטי ניאון ואקססוריז מיוחדים
                      מאפשרים לאורחים לצלם תמונות מושלמות שייראו כאילו נלקחו
                      ממגזין.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          קירות צילום
                        </h4>
                        <p className="text-gray-400 text-sm">
                          עיצובים ייחודיים עם תמונות רקע מעוצבות
                        </p>
                      </div>
                      <div className="text-center">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          שלטי ניאון
                        </h4>
                        <p className="text-gray-400 text-sm">
                          תאורה צבעונית יוצרת אווירה קסומה
                        </p>
                      </div>
                      <div className="text-center">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          אקססוריז
                        </h4>
                        <p className="text-gray-400 text-sm">
                          כובעים, משקפיים ופריטים מעוצבים
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* טיפים לבחירת עמדת צילום */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-purple-500 pb-3">
                  טיפים לבחירת עמדת צילום
                </h2>
                <div className="relative overflow-hidden rounded-xl p-8 border-l-4 border-purple-500">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop)`,
                    }}
                  />
                  {/* Content Overlay */}
                  <div className="relative z-10">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                          שיקולים חשובים:
                        </h3>
                        <ul className="space-y-3">
                          <li className="text-gray-300">
                            גודל האירוע ומספר האורחים
                          </li>
                          <li className="text-gray-300">
                            סוג האירוע והאווירה הרצויה
                          </li>
                          <li className="text-gray-300">תקציב זמין לאטרקציה</li>
                          <li className="text-gray-300">
                            מיקום ונגישות באירוע
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                          טיפים מעשיים:
                        </h3>
                        <ul className="space-y-3">
                          <li className="text-gray-300">
                            בדקו דוגמאות עבודות קודמות
                          </li>
                          <li className="text-gray-300">
                            הזמינו מראש לפחות חודש
                          </li>
                          <li className="text-gray-300">
                            בקשו חבילה כוללת עם הדפסה
                          </li>
                          <li className="text-gray-300">
                            וודאו שיש גיבוי טכני
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* סיכום */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-purple-500 pb-3">
                  סיכום
                </h2>
                <div className="relative overflow-hidden rounded-xl p-8 border-l-4 border-purple-500 bg-gradient-to-r from-purple-900 to-purple-700">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop)`,
                    }}
                  />
                  {/* Content Overlay */}
                  <div className="relative z-10">
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      עמדות הצילום של 2025 מביאות חוויית צילום אינטראקטיבית לכל
                      אירוע. בחירה בעמדה חדשנית תשדרג את החוויה ותבטיח שהאורחים
                      ייצאו עם זיכרון מצולם מהאירוע שלכם.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      זכרו - עמדת צילום טובה לא רק מתעדת רגעים, אלא יוצרת חוויה
                      שלמה שמשאירה את האורחים עם חיוך על הפנים וזיכרונות יפים
                      מהאירוע.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Related Articles */}
          <section className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              מאמרים נוספים שיעניינו אותכם
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="bg-gray-900 rounded-lg p-6 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
                onClick={() => router.push("/blog/how-to-choose-attractions")}
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  איך לבחור אטרקציות שיהפכו את האירוע שלכם לבלתי נשכח
                </h4>
                <p className="text-gray-400 text-sm">
                  מדריך מקיף לבחירת אטרקציות מושלמות
                </p>
              </div>
              <div
                className="bg-gray-900 rounded-lg p-6 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
                onClick={() => router.push("/blog/sweet-tables-events")}
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  שולחנות שוק באירועים - מה כדאי לדעת?
                </h4>
                <p className="text-gray-400 text-sm">
                  מדריך מקיף לשולחנות שוק מושלמים
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
