"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { trackCustomEvent, trackViewContent } from "../../lib/facebookPixel";
import Navbar from "../../components/Navbar";
import { getCloudinaryUrl } from "../../lib/cloudinary";
import CopyLinkButton from "../../components/shared/CopyLinkButton";
import WhatsAppButton from "../../components/shared/WhatsAppButton";
import { usePageTracking } from "../../hooks/usePageTracking";

export default function BlogPage() {
  const router = useRouter();

  // עקוב אחרי צפייה בעמוד הבלוג
  useEffect(() => {
    trackViewContent("Blog Page", "blog", 0, "ILS");
  }, []);

  const blogPosts = [
    {
      id: "how-to-choose-suppliers",
      title: "איך לבחור ספקים נכון לאירוע שלכם",
      image: getCloudinaryUrl("IMG_1833_hnfpnv.jpg"),
      excerpt:
        "מדריך מקיף לבחירת ספקים אמינים ומקצועיים שיהפכו את האירוע שלכם להצלחה",
      date: "10 בינואר 2025",
    },
    {
      id: "how-to-choose-attractions",
      title: "איך לבחור אטרקציות שיהפכו את האירוע שלכם לבלתי נשכח",
      image: getCloudinaryUrl("backgroundM_4_axxflu"),
      excerpt:
        "גלו את הסודות לבחירת אטרקציות מושלמות שיהפכו כל אירוע לחוויה בלתי נשכחת",
      date: "15 בינואר 2025",
    },
    {
      id: "photo-booths-2025",
      title: "עמדות צילום לאירועים - הטרנדים החמים לשנת 2025",
      image: getCloudinaryUrl("IMG_3263_j2g39g"),
      excerpt:
        "הכירו את הטרנדים החדשים בעמדות הצילום שיהפכו את האירוע שלכם לוויראלי",
      date: "12 בינואר 2025",
    },
  ];

  // מעקב אחרי לחיצה על מאמר
  const handleArticleClick = (post) => {
    trackCustomEvent("BlogArticleClick", {
      article_id: post.id,
      article_title: post.title,
      article_category: "blog",
    });
    router.push(`/blog/${post.id}`);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <section className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 animate-fade-in-up text-white leading-tight">
            בלוגים ומאמרים
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 animate-fade-in-up px-4 sm:px-0 leading-relaxed">
            גלו תובנות, טיפים וחדשות מעולם האירועים והאטרקציות
          </p>
        </section>

        {/* Blog Posts Grid */}
        <section className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group bg-gray-900"
                onClick={() => handleArticleClick(post)}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Content */}
                <div className="relative z-10">
                  {/* Blog Post Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
                  </div>

                  {/* Blog Post Content */}
                  <div className="p-4 sm:p-6">
                    <div className="text-sm text-purple-400 mb-3 font-medium">
                      {post.date}
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 line-clamp-3 group-hover:text-purple-300 transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Read More Button */}
                    <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-200">
                      <span className="text-sm font-medium">קרא עוד</span>
                      <svg
                        className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200"
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
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="max-w-4xl mx-auto mt-16 sm:mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-900 to-purple-700 rounded-lg p-6 sm:p-8 border border-purple-600 mx-4 sm:mx-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              הישארו מעודכנים
            </h2>
            <p className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base">
              קבלו עדכונים על מאמרים חדשים, טיפים וטרנדים בעולם האירועים
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="האימייל שלכם"
                className="flex-1 px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button className="bg-white text-purple-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                הרשמה
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Copy Link Button */}
      <CopyLinkButton pageName="blog_page" />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
