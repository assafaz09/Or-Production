"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import CopyLinkButton from "../../../components/shared/CopyLinkButton";
import { getCloudinaryUrl } from "../../../lib/cloudinary";
import Navbar from "../../../components/Navbar";

// Copy Link Button Component
// Using shared CopyLinkButton component (see components/shared/CopyLinkButton.jsx)

export default function HowToChooseAttractionsPage() {
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
              15 בינואר 2025
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              איך לבחור אטרקציות שיהפכו את האירוע שלכם לבלתי נשכח
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              מדריך מקיף לבחירת אטרקציות מושלמות שיהפכו כל אירוע לחוויה בלתי
              נשכחת
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={getCloudinaryUrl("backgroundM_4_axxflu")}
              alt="אטרקציות לאירועים"
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
                    "backgroundM_4_axxflu"
                  )})`,
                }}
              />
              {/* Content Overlay */}
              <div className="relative z-10 p-8">
                <p className="text-gray-300 text-xl leading-relaxed text-center font-light">
                  אירוע מוצלח הוא כזה שמשאיר חותם על האורחים, ויוצר זיכרונות
                  שיחזיקו לשנים. אחת הדרכים הבטוחות להפוך כל אירוע לחוויה בלתי
                  נשכחת היא באמצעות שילוב אטרקציות ייחודיות ומקוריות.
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-12">
              {/* התאמה לסוג האירוע */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-purple-500 pb-3">
                  התאמה לסוג האירוע
                </h2>
                <div className="relative overflow-hidden rounded-xl p-8 border-l-4 border-purple-500">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                    style={{
                      backgroundImage: `url(${getCloudinaryUrl(
                        "backgroundM_4_axxflu"
                      )})`,
                    }}
                  />
                  {/* Content Overlay */}
                  <div className="relative z-10">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      בחירת האטרקציות צריכה להתבסס על סוג האירוע והאופי של הקהל.
                      כל אירוע הוא ייחודי, ולכן חשוב להתאים את האטרקציות לאווירה
                      הרצויה ולגיל המשתתפים.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                      <h3 className="text-xl font-semibold text-purple-400 mb-3">
                        חתונה
                      </h3>
                      <p className="text-gray-300 mb-3">
                        עמדת צילום 360 או בר קוקטיילים מעוצב
                      </p>
                      <p className="text-gray-400 text-sm">
                        אירוע רומנטי שמתאים לאטרקציות מעוצבות ואלגנטיות
                      </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                      <h3 className="text-xl font-semibold text-purple-400 mb-3">
                        בר/בת מצווה
                      </h3>
                      <p className="text-gray-300 mb-3">
                        שולחנות משחק אינטראקטיביים או מופעי לייזר מרהיבים
                      </p>
                      <p className="text-gray-400 text-sm">
                        אירוע שמח שמתאים לאטרקציות צבעוניות ופעילות
                      </p>
                    </div>
                  </div>

                  {/* סוגי אירועים נוספים */}
                  <div className="mt-8 grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <h4 className="text-lg font-semibold text-yellow-400 mb-2">
                        יום הולדת
                      </h4>
                      <p className="text-gray-300 text-sm">
                        עמדות צילום, מתנפחים, הפעלות
                      </p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">
                        אירוע עסקי
                      </h4>
                      <p className="text-gray-300 text-sm">
                        עמדות VR, שולחנות אינטראקטיביים
                      </p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <h4 className="text-lg font-semibold text-green-400 mb-2">
                        אירוע קהילתי
                      </h4>
                      <p className="text-gray-300 text-sm">
                        מתנפחים, עמדות משחק, הפעלות
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* הטרנדים החמים */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-purple-500 pb-3">
                  הטרנדים החמים
                </h2>
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    כיום, עמדות צילום מתקדמות, שולחנות שוק מעוצבים ושירותי VR הם
                    בין הטרנדים הפופולריים ביותר באירועים. בחירה בטרנד עדכני
                    יכולה לשדרג משמעותית את האווירה באירוע שלכם.
                  </p>

                  {/* פירוט הטרנדים */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-purple-400 mb-3">
                        עמדות צילום מתקדמות
                      </h3>
                      <p className="text-gray-300 text-sm mb-3">
                        עמדות צילום 360, עמדות עם רקעים וירטואליים, עמדות
                        שמדפיסות תמונות מיידית עם מסגרות מעוצבות
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                          360 מעלות
                        </span>
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                          רקעים וירטואליים
                        </span>
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                          הדפסה מיידית
                        </span>
                      </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-purple-400 mb-3">
                        שולחנות שוק מעוצבים
                      </h3>
                      <p className="text-gray-300 text-sm mb-3">
                        שולחנות עם עיצוב ייחודי, תאורה מתקדמת, קישוטים מעוצבים
                        ומגוון רחב של מתוקים
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                          עיצוב ייחודי
                        </span>
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                          תאורה מתקדמת
                        </span>
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                          קישוטים מעוצבים
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      עמדות צילום מתקדמות
                    </span>
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      שולחנות שוק מעוצבים
                    </span>
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      שירותי VR
                    </span>
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      מתנפחים מעוצבים
                    </span>
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      מופעי לייזר
                    </span>
                  </div>
                </div>
              </section>

              {/* טיפים לבחירת אטרקציות */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-purple-500 pb-3">
                  טיפים לבחירת אטרקציות
                </h2>
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-purple-400 mb-4">
                        שיקולים חשובים
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          גודל האירוע ומספר המשתתפים
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          גיל המשתתפים והעדפותיהם
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          תקציב זמין לאטרקציות
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          זמן האירוע והמקום הזמין
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-purple-400 mb-4">
                        טיפים מעשיים
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          הזמינו אטרקציות מראש (לפחות חודש)
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          בדקו ביקורות והמלצות
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          בקשו לראות דוגמאות עבודות
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          וודאו שיש ביטוח ואחריות
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
                    תכנון נכון של אטרקציות בהתאם לאורחים ולאווירה הרצויה הוא
                    המפתח להצלחת האירוע. השקעה בפרטים הקטנים תוביל לחוויה בלתי
                    נשכחת עבורכם ועבור האורחים שלכם.
                  </p>
                  <p className="text-gray-200 text-center">
                    זכרו - האירוע המושלם הוא זה שמשאיר את האורחים עם חיוך על
                    הפנים וזיכרונות שיחזיקו לשנים.
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
