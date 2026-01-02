"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CopyLinkButton from "../../../components/shared/CopyLinkButton";
import { trackViewContent, trackCustomEvent } from "../../../lib/facebookPixel";
import { getCloudinaryUrl } from "../../../lib/cloudinary";

// Copy Link Button Component
// Using shared CopyLinkButton component (see components/shared/CopyLinkButton.jsx)

export default function HowToChooseSuppliersPage() {
  const router = useRouter();

  // עקוב אחרי צפייה במאמר
  useEffect(() => {
    trackViewContent(
      "איך לבחור ספקים נכון לאירוע שלכם",
      "blog_article",
      0,
      "ILS"
    );

    trackCustomEvent("BlogArticleView", {
      article_id: "how-to-choose-suppliers",
      article_title: "איך לבחור ספקים נכון לאירוע שלכם",
      article_category: "suppliers",
      article_date: "10 בינואר 2025",
    });
  }, []);

  // מעקב אחרי חזרה לבלוג
  const handleBackToBlog = () => {
    trackCustomEvent("BlogNavigation", {
      from: "how-to-choose-suppliers",
      to: "blog_main",
      action: "back_button",
    });
    router.push("/blog");
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={handleBackToBlog}
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
              10 בינואר 2025
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              איך לבחור ספקים נכון לאירוע שלכם
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              מדריך מקיף לבחירת ספקים אמינים ומקצועיים שיהפכו את האירוע שלכם
              להצלחה
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={getCloudinaryUrl("IMG_1833_hnfpnv.jpg")}
              alt="בחירת ספקים לאירועים"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12 relative overflow-hidden rounded-xl">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                  backgroundImage: `url(${getCloudinaryUrl(
                    "IMG_1833_hnfpnv.jpg"
                  )})`,
                }}
              />
              {/* Content Overlay */}
              <div className="relative z-10 p-8">
                <p className="text-gray-300 text-xl leading-relaxed text-center font-light">
                  בחירת ספקים נכונה היא אחד המפתחות החשובים ביותר להצלחת האירוע
                  שלכם. ספק מקצועי ואמין יכול להפוך אירוע רגיל לחוויה בלתי
                  נשכחת, בעוד שספק לא מקצועי יכול להרוס את כל התכנון שלכם.
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-12">
              {/* סוגי ספקים חשובים */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-purple-500 pb-3">
                  סוגי ספקים חשובים לאירוע
                </h2>
                <div className="relative overflow-hidden rounded-xl p-8 border-l-4 border-purple-500">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                    style={{
                      backgroundImage: `url(${getCloudinaryUrl(
                        "IMG_1833_hnfpnv.jpg"
                      )})`,
                    }}
                  />
                  {/* Content Overlay */}
                  <div className="relative z-10">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      כל אירוע דורש שילוב של מספר ספקים מקצועיים. חשוב להבין
                      איזה ספקים נדרשים לאירוע שלכם ואיך לבחור אותם נכון.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                      <h3 className="text-xl font-semibold text-purple-400 mb-3">
                        ספקי קייטרינג
                      </h3>
                      <p className="text-gray-300 mb-3">
                        אוכל, שתייה, שירותים וציוד
                      </p>
                      <p className="text-gray-400 text-sm">
                        אחד הספקים החשובים ביותר - האוכל הוא מה שהאורחים יזכרו
                      </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                      <h3 className="text-xl font-semibold text-purple-400 mb-3">
                        ספקי אטרקציות
                      </h3>
                      <p className="text-gray-300 mb-3">
                        עמדות צילום, מתנפחים, הפעלות ומופעים
                      </p>
                      <p className="text-gray-400 text-sm">
                        מוסיפים עניין ואווירה מיוחדת לאירוע
                      </p>
                    </div>
                  </div>

                  {/* סוגי ספקים נוספים */}
                  <div className="mt-8 grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <h4 className="text-lg font-semibold text-yellow-400 mb-2">
                        ספקי תאורה וסאונד
                      </h4>
                      <p className="text-gray-300 text-sm">
                        תאורה, מערכות סאונד, מיקרופונים
                      </p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">
                        ספקי עיצוב וקישוט
                      </h4>
                      <p className="text-gray-300 text-sm">
                        פרחים, בלונים, קישוטים מעוצבים
                      </p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <h4 className="text-lg font-semibold text-green-400 mb-2">
                        ספקי ציוד
                      </h4>
                      <p className="text-gray-300 text-sm">
                        שולחנות, כיסאות, אוהלים
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* קריטריונים לבחירת ספקים */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-purple-500 pb-3">
                  קריטריונים לבחירת ספקים
                </h2>
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    בחירת ספקים צריכה להתבסס על מספר קריטריונים חשובים. לא מספיק
                    לבחור לפי המחיר - צריך לבדוק גם איכות, מקצועיות ואמינות.
                  </p>

                  {/* פירוט הקריטריונים */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-purple-400 mb-3">
                        ניסיון ומוניטין
                      </h3>
                      <p className="text-gray-300 text-sm mb-3">
                        בדקו כמה שנים הספק עובד בתחום, איזה ביקורות יש לו והאם
                        יש לו המלצות מאירועים דומים
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                          שנות ניסיון
                        </span>
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                          ביקורות חיוביות
                        </span>
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                          המלצות לקוחות
                        </span>
                      </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-purple-400 mb-3">
                        מקצועיות ואיכות
                      </h3>
                      <p className="text-gray-300 text-sm mb-3">
                        בדקו את איכות השירותים, הציוד והמוצרים שהספק מספק. בקשו
                        לראות דוגמאות עבודות
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                          איכות חומרים
                        </span>
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                          דוגמאות עבודות
                        </span>
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                          ציוד מתקדם
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      ניסיון ומוניטין
                    </span>
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      מקצועיות ואיכות
                    </span>
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      מחיר ותקציב
                    </span>
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      זמינות ותזמון
                    </span>
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      שירות לקוחות
                    </span>
                  </div>
                </div>
              </section>

              {/* תהליך בחירת הספקים */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-purple-500 pb-3">
                  תהליך בחירת הספקים
                </h2>
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-purple-400 mb-4">
                        שלבי התהליך
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          הגדרת צרכים ודרישות לאירוע
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          חיפוש ספקים פוטנציאליים
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          קבלת הצעות מחיר מכמה ספקים
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          בדיקת המלצות וביקורות
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-purple-400 mb-4">
                        טיפים חשובים
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          התחילו לחפש ספקים לפחות 3-4 חודשים מראש
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          בקשו חוזים מפורטים עם כל הפרטים
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          וודאו שיש ביטוח ואחריות
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          תקשרו עם הספקים באופן ברור ומפורט
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* סיכום */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-purple-500 pb-3">
                  סיכום
                </h2>
                <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-xl p-8 border border-purple-600">
                  <p className="text-gray-200 text-lg leading-relaxed text-center mb-4">
                    בחירת ספקים נכונה היא השקעה חשובה באירוע שלכם. ספקים
                    מקצועיים ואמינים יבטיחו שהאירוע יתנהל בצורה חלקה וישאיר רושם
                    חיובי על האורחים.
                  </p>
                  <p className="text-gray-200 text-center">
                    זכרו - עדיף לשלם קצת יותר ולקבל שירות איכותי ומקצועי, מאשר
                    לחסוך כסף ולסבול מאיכות ירודה באירוע.
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Related Articles */}
          <section className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              מאמרים נוספים שיעניינו אותכם
            </h3>
            <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
              <div
                className="bg-gray-900 rounded-lg p-6 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
                onClick={() => router.push("/blog/photo-booths-2025")}
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  עמדות צילום לאירועים - הטרנדים החמים לשנת 2025
                </h4>
                <p className="text-gray-400 text-sm">
                  הכירו את הטרנדים החדשים בעמדות הצילום
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* Copy Link Button */}
      <CopyLinkButton />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/972544299492"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          // עקוב אחרי לחיצה על WhatsApp
          if (typeof window !== "undefined" && window.fbq) {
            window.fbq("track", "CustomEvent", {
              event_name: "WhatsAppClick",
              source: "floating_button",
              page: "blog_article_page",
            });
          }
        }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        title="צור קשר ב-WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      </a>
    </div>
  );
}
