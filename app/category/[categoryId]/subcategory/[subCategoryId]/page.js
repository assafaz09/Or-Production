"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { categoriesData } from "../../../../../lib/categories";
import Attraction from "../../../../../components/AttractionComponent";

export default function SubCategoryPage() {
  const params = useParams();
  const router = useRouter();
  const { categoryId, subCategoryId } = params;
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [isLoading, setIsLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentSubCategory, setCurrentSubCategory] = useState(null);

  // Load category and subcategory when params change
  useEffect(() => {
    if (!categoryId || !subCategoryId) {
      return;
    }

    try {
      const category = categoriesData.categories.find(
        (cat) => cat.id === categoryId
      );
      const subCategory = category?.subCategories?.find(
        (sub) => sub.id === subCategoryId
      );

      setCurrentCategory(category || null);
      setCurrentSubCategory(subCategory || null);
    } catch (error) {
      console.error("Error loading subcategory:", error);
      setCurrentCategory(null);
      setCurrentSubCategory(null);
    } finally {
      setIsLoading(false);
    }
  }, [categoryId, subCategoryId]);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-16">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500 mb-4"></div>
          <p className="text-white text-lg">טוען תת קטגוריה...</p>
        </div>
      </div>
    );
  }

  if (!currentCategory || !currentSubCategory) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            תת קטגוריה לא נמצאה
          </h1>
          <button onClick={() => router.push("/")} className="btn-primary">
            חזרה לדף הבית
          </button>
        </div>
      </div>
    );
  }

  // Safe attractions array
  const attractionsArray = currentSubCategory?.attractions || [];

  const filteredAttractions = attractionsArray.filter(
    (attraction) =>
      attraction?.name?.includes(searchTerm) ||
      attraction?.description?.includes(searchTerm)
  );

  const sortedAttractions = [...filteredAttractions].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return (a?.name || "").localeCompare(b?.name || "");
      case "price":
        return (a?.price || 0) - (b?.price || 0);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Breadcrumbs */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={currentCategory.image}
          alt={currentSubCategory.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            {/* Breadcrumbs */}
            <div className="mb-4 text-sm">
              <button
                onClick={() => router.push("/")}
                className="hover:underline"
              >
                דף הבית
              </button>
              <span className="mx-2">/</span>
              <button
                onClick={() => router.push(`/category/${categoryId}`)}
                className="hover:underline"
              >
                {currentCategory.name}
              </button>
              <span className="mx-2">/</span>
              <span>{currentSubCategory.name}</span>
            </div>

            <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">
              {currentSubCategory.name}
            </h1>
            <p
              className="text-xl mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {currentSubCategory.description}
            </p>
            <button
              onClick={() => router.push(`/category/${categoryId}`)}
              className="btn-secondary animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              חזרה לקטגוריה
            </button>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-bold text-white">
              {sortedAttractions.length} אטרקציות נמצאו
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="חיפוש אטרקציות..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800 bg-gray-800 text-white placeholder-gray-400"
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800 bg-gray-800 text-white"
              >
                <option value="name">מיון לפי שם</option>
                <option value="price">מיון לפי מחיר</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {sortedAttractions.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-400 mb-4">
                לא נמצאו אטרקציות
              </h3>
              <p className="text-gray-500 mb-8">נסה לשנות את החיפוש או המיון</p>
              <button onClick={() => setSearchTerm("")} className="btn-primary">
                נקה חיפוש
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedAttractions.map((attraction, index) => (
                <Attraction
                  key={attraction.id}
                  attraction={attraction}
                  onAddToCart={() => {}}
                  animationDelay={index * 0.1}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Back to Home Button - Bottom */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-4 text-center">
          <button
            onClick={() => router.push("/")}
            className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            חזרה לדף הבית
          </button>
        </div>
      </section>
    </div>
  );
}
