"use client";

import { useRouter } from "next/navigation";
import {
  getCategoryById,
  loadCategories,
} from "../../../lib/data/categoriesAPI";
import CopyLinkButton from "../../../components/shared/CopyLinkButton";
import { cache } from "../../../lib/cache/advancedCache";
import { getCloudinaryUrl } from "../../../lib/cloudinary";
import {
  trackCategoryView,
  trackPageNavigation,
} from "../../../lib/facebookPixel";
import Attraction from "../../../components/AttractionComponent";
import { useState, useEffect } from "react";

// Using shared CopyLinkButton component (see components/shared/CopyLinkButton.jsx)

export default function CategoryPage({ params }) {
  const router = useRouter();
  const { categoryId } = params;
  const [relatedCategories, setRelatedCategories] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showFullCategoryDescription, setShowFullCategoryDescription] =
    useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Find current category
  const [currentCategory, setCurrentCategory] = useState(null);

  // Get all attractions from current category
  const allAttractions =
    currentCategory?.subCategories?.flatMap((sub) => sub.attractions || []) ||
    [];

  // עקוב אחרי צפייה בקטגוריה
  useEffect(() => {
    if (currentCategory) {
      trackCategoryView(currentCategory.name, categoryId);
    }
  }, [currentCategory, categoryId]);

  // Load category data
  useEffect(() => {
    const loadCategory = async () => {
      setIsLoading(true);
      try {
        const category = await getCategoryById(categoryId);
        setCurrentCategory(category);
      } catch (error) {
        console.error("Error loading category:", error);
        setCurrentCategory(null);
      } finally {
        setIsLoading(false);
      }
    };
    loadCategory();
  }, [categoryId]);

  // Select 3 random related categories (excluding current)
  useEffect(() => {
    const loadRelatedCategories = async () => {
      // Get all categories and filter out current one
      const allCategories = await loadCategories();
      const availableCategories = allCategories.filter(
        (cat) => cat.id !== categoryId
      );

      // Shuffle and take 3
      const shuffled = availableCategories.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 3);

      setRelatedCategories(selected);
    };
    loadRelatedCategories();
  }, [categoryId]);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-16">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500 mb-4"></div>
          <p className="text-white text-xl">טוען קטגוריה...</p>
        </div>
      </div>
    );
  }

  // Category not found state
  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            קטגוריה לא נמצאה
          </h1>
          <button onClick={() => router.push("/")} className="btn-primary">
            חזרה לדף הבית
          </button>
        </div>
      </div>
    );
  }

  const categoryImageUrl = currentCategory.image
    ? getCloudinaryUrl(currentCategory.image)
    : "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500";

  // מעקב אחרי ניווט
  const handleNavigation = (toPage) => {
    trackPageNavigation("category", toPage);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Background Image/Video */}
      <section className="relative h-screen overflow-hidden">
        {/* Background - Video if available, otherwise image */}
        {currentCategory.backgroundVideo ? (
          <>
            {/* Desktop Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover hidden lg:block"
            >
              <source
                src={getCloudinaryUrl(currentCategory.backgroundVideo, "video")}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Mobile Video */}
            {currentCategory.backgroundVideo.mobileVideo ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover lg:hidden"
              >
                <source
                  src={getCloudinaryUrl(
                    {
                      type: "video",
                      src: currentCategory.backgroundVideo.mobileVideo,
                    },
                    "video"
                  )}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover lg:hidden"
              >
                <source
                  src={getCloudinaryUrl(
                    currentCategory.backgroundVideo,
                    "video"
                  )}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            )}
          </>
        ) : (
          <img
            src={categoryImageUrl}
            alt={currentCategory.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Breadcrumb Navigation */}
        <div className="absolute top-4 sm:top-8 right-4 sm:right-8 text-gray-300 text-xs sm:text-sm z-20">
          <span
            className="hover:underline cursor-pointer"
            onClick={() => router.push("/")}
          >
            עמוד הבית
          </span>
          <span className="mx-1 sm:mx-2">/</span>
          <span className="truncate max-w-32 sm:max-w-none">
            {currentCategory.name}
          </span>
        </div>

        {/* Single Background Container for Title and Description */}
        <div className="absolute top-1/4 left-0 right-0 z-20">
          <div className="px-4 sm:px-8 lg:px-16 py-6 sm:py-8 lg:py-10 rounded-lg shadow-xl">
            {/* Background with fade effect on sides */}
            <div
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0.65) 20%, rgba(0,0,0,0.65) 80%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0) 100%)",
              }}
            ></div>

            {/* Content overlay */}
            <div className="relative z-10 max-w-6xl mx-auto">
              {/* Mobile Layout - Stacked */}
              <div className="block lg:hidden">
                {/* Title */}
                <div className="text-center mb-6">
                  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    {currentCategory.name}
                  </h1>
                </div>

                {/* Description */}
                <div className="text-center">
                  <div className="text-gray-200 text-sm sm:text-base leading-relaxed px-4 max-w-2xl mx-auto">
                    <p
                      className={`whitespace-pre-line transition-all duration-300 ${
                        showFullDescription
                          ? "line-clamp-none mb-32"
                          : "line-clamp-6"
                      }`}
                    >
                      {currentCategory.detailedDescription ||
                        currentCategory.description}
                    </p>
                    <button
                      onClick={() =>
                        setShowFullDescription(!showFullDescription)
                      }
                      className="mt-4 mb-4 px-4 py-2 bg-purple-600/100 hover:bg-purple-700/90 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105 backdrop-blur-sm border border-purple-500/30"
                    >
                      {showFullDescription ? "הצג פחות" : "קרא עוד"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Side by Side */}
              <div className="hidden lg:grid grid-cols-2 gap-16">
                {/* Right Side - Title */}
                <div className="text-right">
                  <h1 className="text-4xl font-bold text-white">
                    {currentCategory.name}
                  </h1>
                </div>

                {/* Left Side - Description */}
                <div className="text-right">
                  <div className="text-gray-200 text-base leading-relaxed">
                    <p className="whitespace-pre-line">
                      {currentCategory.detailedDescription ||
                        currentCategory.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="absolute bottom-8 right-8 z-20">
          <button onClick={() => router.push("/")} className="btn-primary">
            חזרה לדף הבית
          </button>
        </div>
      </section>

      {/* TikTok/Mobile Video Section */}
      {(currentCategory.tiktokVideo || currentCategory.mobileVideo) && (
        <section className="mb-12 mx-2 md:mx-8">
          <div className="text-center mb-8">
            <h3
              className="text-4xl md:text-5xl font-extrabold mb-10 mt-4 text-center"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px white",
                textStroke: "2px white",
                fontFamily: "inherit",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              SEE{" "}
              <span
                className="text-white"
                style={{
                  WebkitTextStroke: "0",
                  textStroke: "0",
                  color: "white",
                  textTransform: "none",
                }}
              >
                MORE
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch min-h-[600px] max-h-[700px]">
            {/* Mobile Video - Left Side */}
            <div className="w-full flex justify-center items-stretch">
              <div className="w-full max-w-md mx-2 md:mx-4 flex flex-col h-full">
                {/* Mobile Video Title */}

                {/* Realistic iPhone Frame Container */}
                <div className="relative w-full flex justify-center items-center">
                  {/* iPhone Frame */}
                  <div
                    className="relative"
                    style={{ width: "260px", height: "520px" }}
                  >
                    {/* iPhone Frame - Ultra Realistic */}
                    <div className="relative w-full h-full transform hover:rotate-0 transition-all duration-500 hover:scale-105">
                      {/* Main Phone Body */}
                      <div className="relative bg-gradient-to-b from-slate-800 via-slate-900 to-black rounded-[3.5rem] p-[3px] shadow-2xl border border-slate-700/50 w-full h-full">
                        {/* Inner Frame */}
                        <div className="relative bg-gradient-to-b from-slate-900 to-black rounded-[3.3rem] p-[2px] w-full h-full shadow-inner">
                          {/* Screen Bezel */}
                          <div className="relative bg-black rounded-[3.1rem] p-[6px] w-full h-full">
                            {/* Actual Screen */}
                            <div className="relative bg-black rounded-[2.8rem] overflow-hidden w-full h-full shadow-inner">
                              {/* Video Content */}
                              <div className="relative w-full h-full overflow-hidden">
                                {currentCategory.mobileVideo &&
                                currentCategory.mobileVideo.type === "video" ? (
                                  /* Regular Video */
                                  <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover"
                                  >
                                    <source
                                      src={getCloudinaryUrl(
                                        {
                                          type: "video",
                                          src: currentCategory.mobileVideo.src,
                                        },
                                        "video"
                                      )}
                                      type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                  </video>
                                ) : (
                                  /* TikTok Video (default) */
                                  <iframe
                                    src={`https://www.tiktok.com/embed/${
                                      currentCategory.mobileVideo?.src ||
                                      currentCategory.tiktokVideo
                                    }`}
                                    className="absolute inset-0 w-full h-full"
                                    frameBorder="0"
                                    allowFullScreen
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    style={{
                                      width: "120%",
                                      height: "120%",
                                      marginLeft: "-10%",
                                      marginTop: "-10%",
                                      objectFit: "cover",
                                    }}
                                  />
                                )}
                              </div>

                              {/* Screen Reflection */}
                              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
                            </div>
                          </div>
                        </div>

                        {/* Dynamic Island (Top Notch) */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-black rounded-full shadow-lg border border-slate-800">
                          <div className="absolute inset-[1px] bg-gradient-to-b from-slate-900 to-black rounded-full">
                            {/* Front Camera */}
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-slate-800 rounded-full border border-slate-700"></div>
                            {/* Speaker */}
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-slate-800 rounded-full border border-slate-700"></div>
                          </div>
                        </div>

                        {/* Home Indicator */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full shadow-sm"></div>

                        {/* Side Buttons */}
                        {/* Volume Buttons */}
                        <div className="absolute top-24 -left-[2px] w-[3px] h-8 bg-gradient-to-r from-slate-600 to-slate-700 rounded-r-sm shadow-sm"></div>
                        <div className="absolute top-36 -left-[2px] w-[3px] h-8 bg-gradient-to-r from-slate-600 to-slate-700 rounded-r-sm shadow-sm"></div>

                        {/* Power Button */}
                        <div className="absolute top-28 -right-[2px] w-[3px] h-12 bg-gradient-to-l from-slate-600 to-slate-700 rounded-l-sm shadow-sm"></div>

                        {/* Lightning Port */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-slate-800 rounded-sm shadow-inner border border-slate-700"></div>

                        {/* Speaker Holes */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -ml-8 flex space-x-1">
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className="w-[2px] h-[2px] bg-slate-700 rounded-full"
                            ></div>
                          ))}
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 ml-8 flex space-x-1">
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className="w-[2px] h-[2px] bg-slate-700 rounded-full"
                            ></div>
                          ))}
                        </div>
                      </div>

                      {/* Realistic Phone Shadow */}
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black/40 rounded-full blur-lg"></div>
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-3 bg-black/20 rounded-full blur-md"></div>

                      {/* Ambient Light Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/5 to-blue-500/10 rounded-[3.5rem] pointer-events-none"></div>

                      {/* Edge Highlight */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-[3.5rem] pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* General Description - Right Side */}
            <div className="w-full flex items-stretch">
              <div className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg mx-2 md:mx-4 flex flex-col h-full justify-between w-full">
                <div className="flex flex-col h-full justify-between w-full">
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 w-full">
                    על הקטגוריה
                  </h4>

                  {/* Mobile Description with Read More */}
                  <div className="block lg:hidden mb-4">
                    <p
                      className={`text-gray-300 mb-10 w-full text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                        showFullCategoryDescription
                          ? "line-clamp-none mb-8"
                          : "line-clamp-4"
                      }`}
                      style={{
                        lineHeight: "1.8",
                        marginBottom: "30px",
                        padding: "10px",
                      }}
                    >
                      {currentCategory.detailedDescription ||
                        currentCategory.description}
                    </p>
                    <button
                      onClick={() =>
                        setShowFullCategoryDescription(
                          !showFullCategoryDescription
                        )
                      }
                      className="mt-2 mb-4 px-3 py-1.5 bg-black/40 hover:bg-black/60 text-white text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105 backdrop-blur-sm border border-white/20"
                    >
                      {showFullCategoryDescription ? "הצג פחות" : "קרא עוד"}
                    </button>
                  </div>

                  {/* Desktop Description - Full */}
                  <p
                    className="hidden lg:block text-gray-300 mb-3 w-full h-full flex-1"
                    style={{ lineHeight: "2.2" }}
                  >
                    {currentCategory.detailedDescription ||
                      currentCategory.description}
                  </p>

                  {/* Desktop Bullet Points */}
                  <div className="hidden lg:block space-y-2 mt-2 w-full">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-800 rounded-full mr-3"></div>
                      <span className="text-gray-300">איכות מקצועית גבוהה</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-800 rounded-full mr-3"></div>
                      <span className="text-gray-300">שירות אישי ומקצועי</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-800 rounded-full mr-3"></div>
                      <span className="text-gray-300">
                        מגוון רחב של אפשרויות
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-800 rounded-full mr-3"></div>
                      <span className="text-gray-300">
                        התאמה אישית לכל אירוע
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Attractions Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-5 mt-7 sm:mb-12 animate-fade-in-up">
            כל האטרקציות בקטגוריה
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {allAttractions.map((attraction, index) => (
              <Attraction
                key={attraction.id}
                attraction={attraction}
                onAddToCart={() => {}}
                animationDelay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Related Categories Section */}
      <section className="py-12 sm:py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12 animate-fade-in-up">
            עשוי לעניין אותכם גם
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedCategories.map((relatedCategory, index) => (
              <div
                key={relatedCategory.id}
                className="bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                  <img
                    src={getCloudinaryUrl(relatedCategory.image)}
                    alt={relatedCategory.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center"
                    style={{ display: "none" }}
                  >
                    <span className="text-white text-2xl font-bold">
                      {relatedCategory.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white">
                      {relatedCategory.name}
                    </h3>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    {relatedCategory.description}
                  </p>
                  <button
                    onClick={() =>
                      router.push(`/category/${relatedCategory.id}`)
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
                  >
                    צפה בקטגוריה
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              page: "category_page",
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
