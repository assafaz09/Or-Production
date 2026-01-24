"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { categoriesData } from "../lib/categories";
import { getCloudinaryUrl } from "../lib/cloudinary";
import {
  trackCustomEvent,
  trackTimeOnPage,
  trackScrollDepth,
  trackVideoView,
  trackLinkClick,
} from "../lib/facebookPixel";
import Navbar from "../components/Navbar";
import InfiniteCarousel from "./components/InfiniteCarousel.jsx";
import CopyLinkButton from "../components/shared/CopyLinkButton";
import WhatsAppButton from "../components/shared/WhatsAppButton";
import { BusinessSchema, FAQSchema } from "../components/seo/StructuredData";

export default function HomePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // FAQ data for structured data
  const faqData = [
    {
      question: "איזה סוגי אטרקציות אתם מציעים לאירועים?",
      answer:
        "אנו מציעים מגוון רחב של אטרקציות מקצועיות כולל פוטובוט, בר מיצים, עמדות צילום, מיצגי תפאורה מתנפחים, עמדות משקפיים, קירות צילום ועוד.",
    },
    {
      question: "באילו אזורים בישראל אתם מספקים שירות?",
      answer:
        "אנו מספקים שירות בכל רחבי הארץ - מצפון ועד דרום. המחיר משתנה בהתאם למרחק ממיקום הבסיס שלנו.",
    },
    {
      question: "כמה זמן מראש צריך להזמין?",
      answer:
        "מומלץ להזמין לפחות 2-3 שבועות מראש, במיוחד בעונות עמוסות כמו קיץ וחגים. לתאריכים דחופים ניתן ליצור קשר ונבדוק זמינות.",
    },
    {
      question: "האם המחיר כולל הרכבה ופירוק?",
      answer:
        "כן, המחיר כולל הגעה, הרכבה מקצועית, הדרכה על השימוש ופירוק בסיום האירוע. אנו דואגים לכל הפרטים הטכניים.",
    },
  ];

  // מעקב אחרי זמן שהייה בעמוד
  useEffect(() => {
    const handleBeforeUnload = () => {
      const timeSpent = Math.floor((Date.now() - pageLoadTime) / 1000);
      trackTimeOnPage("home", timeSpent);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  // מעקב אחרי עומק גלילה
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // עקוב אחרי גלילה ב-25%, 50%, 75%, 100%
      if (scrollPercent >= 25 && scrollPercent < 50) {
        trackScrollDepth("home", 25);
      } else if (scrollPercent >= 50 && scrollPercent < 75) {
        trackScrollDepth("home", 50);
      } else if (scrollPercent >= 75 && scrollPercent < 100) {
        trackScrollDepth("home", 75);
      } else if (scrollPercent >= 100) {
        trackScrollDepth("home", 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Contact form removed - use quote request API instead

  // עקוב אחרי לחיצות על כפתורים
  const handleButtonClick = (buttonType) => {
    trackCustomEvent("ButtonClick", {
      button_type: buttonType,
      page: "home",
    });
  };

  // Array of videos to play sequentially
  const videos = [
    {
      src: "IMG_0245_af4zrj",
    },
  ];

  // Function to handle video end - restart video
  const handleVideoEnd = () => {
    console.log("Video ended, restarting...");
    // עקוב אחרי צפייה בסרטון
    trackVideoView(videos[0].src, "hero", "hero_section");
  };

  // עקוב אחרי התחלת סרטון
  const handleVideoPlay = () => {
    trackVideoView(videos[0].src, "hero", "hero_section");
  };

  return (
    <div className="min-h-screen bg-black">
      {/* SEO Structured Data */}
      <BusinessSchema />
      <FAQSchema faqs={faqData} />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Dynamic Layout Based on Video */}
      <section className="relative text-center overflow-hidden min-h-screen lg:min-h-screen">
        <div className="relative h-screen w-full flex items-center justify-center">
          {/* Background Image (Desktop Only) */}
          <div className="hidden lg:block absolute inset-0">
            <img
              src={getCloudinaryUrl("moon4_kruhah")}
              alt="Background"
              className="w-full h-full object-cover opacity-40"
            />
          </div>

          {/* Video */}
          <video
            src={getCloudinaryUrl({
              type: "video",
              src: videos[0].src,
            })}
            className="absolute inset-0 w-full h-full object-cover lg:hidden"
            autoPlay
            muted
            loop
            playsInline
            onEnded={handleVideoEnd}
            onPlay={handleVideoPlay}
          />

          {/* Content Layout */}
          <div className="relative z-10">
            {/* Phone Frame + Content Side by Side (Desktop Only) */}
            <div className="hidden lg:flex w-full items-center justify-center">
              <div className="flex items-center justify-center w-full max-w-6xl px-8">
                {/* Real iPhone 15 Pro Frame with Video */}
                <div className="relative ml-16">
                  <div
                    className="relative"
                    style={{ width: "260px", height: "520px" }}
                  >
                    {/* Real iPhone Frame - Titanium Design */}
                    <div className="relative w-full h-full transform hover:rotate-0 transition-all duration-500 hover:scale-105">
                      {/* Main Phone Body - Titanium Frame */}
                      <div
                        className="relative w-full h-full rounded-[3.5rem] p-[2px] shadow-2xl"
                        style={{
                          background:
                            "linear-gradient(145deg, #8B8D98 0%, #6B6D75 25%, #4A4C54 50%, #6B6D75 75%, #8B8D98 100%)",
                          boxShadow:
                            "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                        }}
                      >
                        {/* Glass Back */}
                        <div
                          className="absolute inset-[2px] rounded-[3.3rem] bg-black"
                          style={{
                            background:
                              "radial-gradient(ellipse at center, #1a1a1a 0%, #000000 100%)",
                            boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.8)",
                          }}
                        />

                        {/* Screen Area */}
                        <div className="relative bg-black rounded-[3.2rem] p-[3px] w-full h-full">
                          {/* OLED Screen */}
                          <div
                            className="relative bg-black rounded-[3rem] overflow-hidden w-full h-full"
                            style={{
                              boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.9)",
                            }}
                          >
                            {/* Video inside phone */}
                            <video
                              src={getCloudinaryUrl({
                                type: "video",
                                src: videos[0].src,
                              })}
                              className="w-full h-full object-cover"
                              autoPlay
                              muted
                              loop
                              playsInline
                              onEnded={handleVideoEnd}
                            />

                            {/* OLED Screen Reflection */}
                            <div
                              className="absolute inset-0 pointer-events-none"
                              style={{
                                background:
                                  "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 25%, transparent 50%, rgba(255,255,255,0.05) 75%, transparent 100%)",
                              }}
                            />
                          </div>
                        </div>

                        {/* Dynamic Island */}
                        <div
                          className="absolute top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full"
                          style={{
                            boxShadow:
                              "inset 0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <div className="absolute inset-[1px] bg-black rounded-full">
                            {/* Front Camera */}
                            <div
                              className="absolute left-5 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full"
                              style={{
                                background:
                                  "radial-gradient(circle, #1a1a1a 30%, #000 100%)",
                                boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.8)",
                              }}
                            />
                            {/* Speaker */}
                            <div
                              className="absolute right-5 top-1/2 transform -translate-y-1/2 w-10 h-1.5 rounded-full"
                              style={{
                                background:
                                  "linear-gradient(90deg, #2a2a2a 0%, #1a1a1a 50%, #2a2a2a 100%)",
                                boxShadow: "inset 0 1px 1px rgba(0, 0, 0, 0.8)",
                              }}
                            />
                          </div>
                        </div>

                        {/* Home Indicator */}
                        <div
                          className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-36 h-1.5 rounded-full"
                          style={{
                            background: "rgba(255, 255, 255, 0.4)",
                            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                          }}
                        />

                        {/* Side Buttons - Volume */}
                        <div
                          className="absolute top-28 -left-[1px] w-[2px] h-12 rounded-r-sm"
                          style={{
                            background:
                              "linear-gradient(180deg, #9B9DA8 0%, #7B7D85 50%, #9B9DA8 100%)",
                            boxShadow: "1px 0 2px rgba(0, 0, 0, 0.3)",
                          }}
                        />
                        <div
                          className="absolute top-44 -left-[1px] w-[2px] h-10 rounded-r-sm"
                          style={{
                            background:
                              "linear-gradient(180deg, #9B9DA8 0%, #7B7D85 50%, #9B9DA8 100%)",
                            boxShadow: "1px 0 2px rgba(0, 0, 0, 0.3)",
                          }}
                        />

                        {/* Power Button */}
                        <div
                          className="absolute top-32 -right-[1px] w-[2px] h-16 rounded-l-sm"
                          style={{
                            background:
                              "linear-gradient(180deg, #9B9DA8 0%, #7B7D85 50%, #9B9DA8 100%)",
                            boxShadow: "-1px 0 2px rgba(0, 0, 0, 0.3)",
                          }}
                        />

                        {/* USB-C Port */}
                        <div
                          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-8 h-2 rounded-sm"
                          style={{
                            background:
                              "linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)",
                            boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.8)",
                          }}
                        />

                        {/* Speaker Grilles */}
                        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -ml-12 flex space-x-1">
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={i}
                              className="w-[1px] h-[6px] rounded-full"
                              style={{
                                background:
                                  "linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)",
                              }}
                            />
                          ))}
                        </div>
                        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 ml-12 flex space-x-1">
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={i}
                              className="w-[1px] h-[6px] rounded-full"
                              style={{
                                background:
                                  "linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)",
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Realistic Phone Shadow */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-black/50 rounded-full blur-xl" />
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-36 h-4 bg-black/30 rounded-full blur-lg" />

                      {/* Ambient Light Reflection */}
                      <div
                        className="absolute inset-0 rounded-[3.5rem] pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 30%, transparent 70%, rgba(138,43,226,0.1) 100%)",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Content Right Side */}
                <div className="text-white text-right flex-1 max-w-lg">
                  <h1
                    className="text-6xl font-black mb-6 animate-fade-in-up drop-shadow-2xl"
                    style={{
                      textShadow:
                        "2px 2px 4px rgba(0,0,0,1), 4px 4px 8px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,0.8)",
                    }}
                  >
                    ברוכים הבאים <br /> OR Productions
                  </h1>
                  <p
                    className="text-2xl mb-8 animate-fade-in-up font-semibold drop-shadow-lg"
                    style={{
                      animationDelay: "0.2s",
                      textShadow:
                        "2px 2px 4px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,0.8)",
                    }}
                  >
                    אנחנו נדאג לאירוע שלכם
                  </p>
                  <div className="flex justify-start space-x-4 rtl:space-x-reverse">
                    <button
                      onClick={() => {
                        handleButtonClick("contact_us");
                        trackLinkClick(
                          "דברו איתנו",
                          "#contact-form",
                          "internal"
                        );
                        document
                          .getElementById("contact-form")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      className="btn-primary animate-fade-in-up"
                      style={{ animationDelay: "0.4s" }}
                    >
                      דברו איתנו
                    </button>
                    <button
                      onClick={() => {
                        handleButtonClick("lets_start");
                        trackLinkClick(
                          "בואו נתחיל",
                          "#categories-section",
                          "internal"
                        );
                        document
                          .getElementById("categories-section")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      className="btn-secondary animate-fade-in-up"
                      style={{ animationDelay: "0.6s" }}
                    >
                      בואו נתחיל
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Always Full Screen */}
          <div className="lg:hidden absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center px-4 sm:px-8 max-w-sm sm:max-w-md mx-auto z-10">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 animate-fade-in-up drop-shadow-2xl leading-tight"
                style={{
                  textShadow:
                    "2px 2px 4px rgba(0,0,0,1), 4px 4px 8px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,0.8)",
                }}
              >
                ברוכים הבאים <br className="sm:hidden" /> OR Productions
              </h1>
              <p
                className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 animate-fade-in-up font-semibold drop-shadow-lg leading-relaxed"
                style={{
                  animationDelay: "0.2s",
                  textShadow:
                    "2px 2px 4px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,0.8)",
                }}
              >
                אנחנו נדאג לאירוע שלכם
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 rtl:sm:space-x-reverse">
                <button
                  onClick={() => {
                    handleButtonClick("contact_us");
                    trackLinkClick("דברו איתנו", "#contact-form", "internal");
                    document
                      .getElementById("contact-form")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-primary animate-fade-in-up w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300"
                  style={{ animationDelay: "0.4s" }}
                >
                  דברו איתנו
                </button>
                <button
                  onClick={() => {
                    handleButtonClick("lets_start");
                    trackLinkClick(
                      "בואו נתחיל",
                      "#categories-section",
                      "internal"
                    );
                    document
                      .getElementById("categories-section")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-secondary animate-fade-in-up w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300"
                  style={{ animationDelay: "0.6s" }}
                >
                  בואו נתחיל
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto">
        {/* Categories Section */}
        <section id="categories-section" className="mb-16">
          <h2
            className="w-full text-center mb-12 animate-fade-in-up"
            style={{
              fontSize: "4rem",
              letterSpacing: "0.1em",
              fontWeight: 900,
            }}
          >
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: "2px white",
                textStroke: "2px white",
                fontFamily: "inherit",
                textTransform: "uppercase",
              }}
            >
              ? WHAT CAN WE OFFER TO
            </span>
            <span
              className="text-white"
              style={{
                fontWeight: 900,
                fontFamily: "inherit",
                textTransform: "uppercase",
              }}
            >
              {" "}
              YOU
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoriesData.categories.map((category, index) => (
              <div
                key={category.id}
                className="group cursor-pointer transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
                onClick={() => router.push(`/category/${category.id}`)}
              >
                <div className="relative h-80 rounded-lg overflow-hidden shadow-xl bg-gray-900">
                  {/* Category Image */}
                  <img
                    src={
                      category.image
                        ? getCloudinaryUrl(category.image)
                        : "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500"
                    }
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                  />

                  {/* White Text Overlay at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 px-6 py-4 rounded-t-lg">
                    <h3 className="text-lg font-semibold text-gray-800 text-center">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* לקוחותינו - רשימת חברות סטטית */}
        <section className="w-full py-16 flex flex-col items-center justify-center bg-black">
          <div className="max-w-7xl w-full mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              מבין לקוחותינו
            </h3>

            <InfiniteCarousel
              images={[
                {
                  src: getCloudinaryUrl(
                    "dfa4ebda-d24a-4582-ae08-150d05d0879e_vcekpj"
                  ),
                  alt: "לוגו 1",
                  height: 200,
                },
                {
                  src: getCloudinaryUrl(
                    "88d32aab-e04e-47c9-a382-795dada9cf2f_jzpumf"
                  ),
                  alt: "לוגו 2",
                  height: 200,
                },
                {
                  src: getCloudinaryUrl(
                    "99d7dce7-9ba3-4582-9bc2-03ee283179ea_si2piw"
                  ),
                  alt: "לוגו 3",
                  height: 200,
                },
                {
                  src: getCloudinaryUrl(
                    "e150c7f4-ef94-479b-9253-8447cea334ff_opshf3"
                  ),
                  alt: "לוגו 4",
                  height: 200,
                },
                {
                  src: getCloudinaryUrl(
                    "61b78232-fae0-4796-9192-a339c02012ba_qby3vr"
                  ),
                  alt: "לוגו 5",
                  height: 200,
                },
              ]}
              speedSec={20}
              height={200}
              gap={48}
            />

            {/* כפתור לעמוד המלצות */}
            <div className="text-center mt-12">
              <button
                onClick={() => router.push("/testimonials")}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                לראות עוד המלצות לקוחות
              </button>
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2
              className="w-full text-5xl md:text-6xl font-extrabold text-center mb-16 animate-fade-in-up"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px white",
                textStroke: "2px white",
                fontFamily: "inherit",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              FOLLOW US ON
              <span
                className="text-white"
                style={{
                  fontWeight: 900,
                  fontFamily: "inherit",
                  textTransform: "uppercase",
                }}
              >
                {" "}
                INSTAGRAM
              </span>
            </h2>

            <InfiniteCarousel
              images={[
                {
                  src: getCloudinaryUrl("real1_jdr5mk"),
                  alt: "Instagram Reel 1",
                  height: 300,
                  link: "https://www.instagram.com/p/DIpgkNMItxA/",
                },
                {
                  src: getCloudinaryUrl("real4_qnoftb"),
                  alt: "Instagram Reel 2",
                  height: 300,
                  link: "https://www.instagram.com/p/DJBn1i_sImj/",
                },
                {
                  src: getCloudinaryUrl("rreal7_kfndge"),
                  alt: "Instagram Reel 3",
                  height: 300,
                  link: "https://www.instagram.com/p/DMfOBP_MXvX/",
                },
                {
                  src: getCloudinaryUrl("real5_dqxzbm"),
                  alt: "Instagram Reel 4",
                  height: 300,
                  link: "https://www.instagram.com/p/DLPu_Cuo0gu/",
                },
                {
                  src: getCloudinaryUrl("real6_ogyrm8"),
                  alt: "Instagram Reel 5",
                  height: 300,
                  link: "https://www.instagram.com/p/DLPu1tdI8dQ/",
                },
                {
                  src: getCloudinaryUrl("pic1_crutdi"),
                  alt: "Instagram Post 6",
                  height: 300,
                  link: "https://www.instagram.com/p/DKp38ebMaj8",
                },
              ]}
              speedSec={40}
              height={300}
              gap={32}
            />

            {/* Instagram Follow Button */}
            <div className="text-center mt-12">
              <a
                href="https://www.instagram.com/or_production_/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackCustomEvent("InstagramFollowClick", {
                    source: "home_page",
                    action: "follow_button",
                  });
                }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                עקבו אחרינו באינסטגרם
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* About Us Section - Full Width */}
      <section
        className="w-full min-h-[100vh] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${getCloudinaryUrl("moon3_xxskyb")})`, // אפשר להחליף כאן לרקע שתרצה
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full text-center px-4 py-12">
          <div className="relative max-w-4xl mx-auto">
            {/* Background with gradient overlay */}
            <div
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0.65) 20%, rgba(0,0,0,0.65) 80%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0) 100%)",
              }}
            ></div>

            {/* Content overlay */}
            <div className="relative z-10 px-8 py-6">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Nice to meet you || OR Production
              </h3>
              <h4 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                אז מי אנחנו בעצם?
              </h4>
              <p
                className="text-lg md:text-xl leading-loose text-white whitespace-pre-line"
                style={{ letterSpacing: "0.04em", lineHeight: "2.2" }}
              >
                אנו מאמינים ביצירת חוויות יוצאות דופן שיהפכו כל אירוע לזיכרון
                בלתי נשכח. מטרתנו היא להעניק ללקוחותינו לא רק שירות איכותי
                ומתקדם, אלא גם חוויה ייחודית עם גימיקים חדשניים שישדרגו את
                האירוע שלהם לרמה הבאה. אנו מתחייבים לשירות אדיב, מקצועי ולמגוון
                רחב של אפשרויות התאמה אישית כדי להבטיח שהאירוע שלכם יהיה בדיוק
                כמו שחלמתם עליו.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto">
        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-16 flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          <div className="max-w-5xl w-full mx-auto px-4">
            <div className="flex flex-col items-center justify-center mb-10">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span
                  className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400 tracking-widest"
                  style={{ WebkitTextStroke: "2px #fff" }}
                >
                  לקוחות
                </span>
              </div>
              <h3
                className="text-4xl md:text-5xl font-bold text-white text-center"
                style={{ letterSpacing: "0.08em" }}
              >
                ממליצים
              </h3>
            </div>
            <InfiniteCarousel
              images={[
                {
                  src: getCloudinaryUrl("IMG_0267_fqpkhl"),
                  alt: "לקוח ממליץ 1",
                  height: 400,
                },
                {
                  src: getCloudinaryUrl("IMG_0266_glskbe"),
                  alt: "לקוח ממליץ 2",
                  height: 400,
                },
                {
                  src: getCloudinaryUrl("IMG_0262_t7onux"),
                  alt: "לקוח ממליץ 3",
                  height: 400,
                },
                {
                  src: getCloudinaryUrl("IMG_0263_xrxccp"),
                  alt: "לקוח ממליץ 4",
                  height: 400,
                },
                {
                  src: getCloudinaryUrl("IMG_0264_xjptwr"),
                  alt: "לקוח ממליץ 5",
                  height: 400,
                },
                {
                  src: getCloudinaryUrl("IMG_0256_wlzwbl"),
                  alt: "לקוח ממליץ 6",
                  height: 400,
                },
                {
                  src: getCloudinaryUrl("IMG_0261_o2bftt"),
                  alt: "לקוח ממליץ 7",
                  height: 400,
                },
                {
                  src: getCloudinaryUrl("IMG_0251_tktvj8"),
                  alt: "לקוח ממליץ 8",
                  height: 400,
                },
                {
                  src: getCloudinaryUrl("IMG_0254_cwu4k6"),
                  alt: "לקוח ממליץ 9",
                  height: 400,
                },
              ]}
              speedSec={60}
              height={400}
              gap={32}
            />

            {/* כפתור לעמוד המלצות */}
            <div className="text-center mt-12">
              <button
                onClick={() => router.push("/testimonials")}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                לראות עוד המלצות לקוחות
              </button>
            </div>
          </div>
        </section>

        {/* Contact & Info Section */}
        <section className="w-full bg-black border-t border-gray-800 py-16 px-4 flex flex-col items-center justify-center">
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-white">
            {/* Contact Form */}
            <div
              id="contact-form"
              className="md:col-span-1 flex flex-col items-center md:items-start"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">דברו איתנו</h3>
              {/* 
                להתחבר לאוטומציה ב-n8n זה פשוט:
                - צור באוטומציה שלך webhook מסוג POST (לדוג' ב-node של webhook ב-n8n).
                - קבל ממנה URL (למשל: https://n8n.mydomain.com/webhook/xxxxx).
                - שלח לטופס הזה את המידע ל-URL הזה במקום ואולי בנוסף ל-API הרגיל שלך.
                - בתגובת הצלחה מה-n8n, אפשר להציג ללקוח הודעה מותאמת וכו'.

                דוגמה לשימוש ישיר בטופס (עם שליחת פרטי הטופס ל-n8n):
              */}
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!name.trim() || !tel.trim() || !email.trim()) {
                    alert("נא למלא את כל הפרטים");
                    return;
                  }
                  setLoading(true);

                  // שלח את הפרטים ל-Formspree
                  try {
                    const res = await fetch("https://formspree.io/f/xzdeolrq", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        name,
                        phone: tel,
                        email,
                        message: msg,
                        source: "homepage",
                      }),
                    });
                    if (!res.ok) throw new Error("שליחה נכשלה");

                    setSuccess(true);
                    setName("");
                    setTel("");
                    setEmail("");
                    setMsg("");
                  } catch {
                    alert("שליחה נכשלה, נסה/י שוב.");
                  } finally {
                    setLoading(false);
                  }
                }}
                className="w-full max-w-xs flex flex-col gap-4 "
              >
                <input
                  type="text"
                  placeholder="שם מלא"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-900 border border-gray-700 rounded px-4 py-2 text-center text-white focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="טלפון"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  className="text-center bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="אימייל"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-center bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white focus:outline-none"
                />
                <textarea
                  placeholder="הודעה"
                  rows={3}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="bg-gray-900 text-center  border border-gray-700 rounded px-4 py-2 text-white focus:outline-none resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 rounded transition-colors duration-200"
                >
                  {loading ? "שולח..." : "שליחה"}
                </button>
              </form>
              {/* 
                הכנס את כתובת ה-webhook של ה-n8n שלך לדוגמת הכתובת ב-fetch.
                תוכל גם להוסיף שליחה כפולה לשרת שלך וגם ל-n8n, לפי הצורך.
              */}

              {/* Success Message */}
              {success && (
                <div className="mt-4 p-3 bg-green-900 border border-green-600 rounded text-green-300 text-center text-sm">
                  ✅ הודעתך נשלחה בהצלחה! נציג יצור איתך קשר תוך 24 שעות
                </div>
              )}
              <div className="mt-4 flex items-center gap-2">
                <span className="text-green-400 text-lg">WhatsApp</span>
                <a
                  href="https://wa.me/972544299492"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-gray-300"
                >
                  054-4299492
                </a>
              </div>
            </div>
            {/* General Info */}
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold mb-2 text-purple-400">
                כללי
              </h4>
              <ul className="space-y-1 text-gray-300">
                <li>אודות OR Productions</li>
                <li>שאלות נפוצות</li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-white transition-colors"
                  >
                    המלצות מלקוחות
                  </a>
                </li>
                <li>צור קשר</li>
                <li>
                  <a
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    תקנון
                  </a>
                </li>
              </ul>
            </div>
            {/* Attractions & Services */}
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold mb-2 text-yellow-400">
                אטרקציות ושירותים
              </h4>
              <ul className="space-y-1 text-gray-300">
                <li>אטרקציות לאירועים</li>
                <li>מתנפחים ודקורציות</li>
                <li>עמדות צילום</li>
                <li>שירותי בר מתוקים</li>
                <li>הפעלות לילדים</li>
                <li>הפקות אירועים</li>
              </ul>
            </div>
            {/* Locations */}
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold mb-2 text-pink-400">
                מיקומים
              </h4>
              <ul className="space-y-1 text-gray-300">
                <li>כל הארץ</li>
                <li>מרכז</li>
                <li>שרון</li>
                <li>שפלה</li>
                <li>צפון</li>
                <li>דרום</li>
              </ul>
              <div className="mt-4 text-xs text-gray-500">
                כתובת: הרצל 5 אשקלון
                <br />
                טלפון:{" "}
                <a href="tel:0523206571" className="underline">
                  052-3206571
                </a>
                <br />
              </div>
            </div>
          </div>
          <div className="w-full text-center mt-12 text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} OR Productions. כל הזכויות שמורות.
          </div>

          {/* Back to Home Button - Bottom */}
          <div className="w-full text-center mt-8">
            <button
              onClick={() => router.push("/")}
              className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              חזרה לדף הבית
            </button>
          </div>
        </section>
      </main>

      {/* Copy Link Button */}
      <CopyLinkButton pageName="home_page" />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
