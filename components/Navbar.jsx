"use client";

import { useState, useEffect } from "react";
import useCartCount from "../hooks/useCartCount";
import { useRouter } from "next/navigation";
import { categoriesData } from "../lib/categories";
import { getCloudinaryUrl } from "../lib/cloudinary";
import ShoppingCartIcon from "./icons/ShoppingCartIcon";

const Navbar = ({ cartItemCount = 0 }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const cartCount = useCartCount();
  const [isScrolled, setIsScrolled] = useState(false);

  // cartCount is handled by useCartCount hook (localStorage + cartUpdated events)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/85 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => router.push("/")}
              className="flex items-center"
            >
              <img
                src={getCloudinaryUrl(
                  "57ff2f4d-b134-45fe-ae9a-a122b63c8385_p0zm1y"
                )}
                alt="OR Productions Logo"
                className="h-10 w-auto rounded-full hover:opacity-80 transition-opacity"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
                className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                קטגוריות
              </button>
              {isCategoriesOpen && (
                <div
                  onMouseEnter={() => setIsCategoriesOpen(true)}
                  onMouseLeave={() => setIsCategoriesOpen(false)}
                  className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-md shadow-lg py-1 z-50"
                >
                  {categoriesData.categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        router.push(`/category/${category.id}`);
                        setIsCategoriesOpen(false);
                      }}
                      className="block w-full text-right px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-purple-400 transition-colors"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => router.push("/")}
              className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              דף הבית
            </button>
            <button
              onClick={() => router.push("/blog")}
              className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              בלוגים ומאמרים
            </button>
            <button
              onClick={() => {
                // עקוב אחרי לחיצה על המלצות בתפריט
                if (typeof window !== "undefined" && window.fbq) {
                  window.fbq("track", "CustomEvent", {
                    event_name: "NavigationClick",
                    menu_item: "testimonials",
                    location: "desktop_navbar",
                  });
                }
                router.push("/testimonials");
              }}
              className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              המלצות
            </button>
            <button
              onClick={() => router.push("/cart")}
              className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              עגלת קניות
            </button>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={() => router.push("/cart")}
              className="relative p-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <ShoppingCartIcon className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-sm border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Categories in Mobile */}
            <div className="space-y-1">
              <button
                onClick={toggleCategories}
                className="block w-full text-right px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-700 rounded-md transition-colors"
              >
                קטגוריות
              </button>
              {isCategoriesOpen && (
                <div className="pl-4 space-y-1">
                  {categoriesData.categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        router.push(`/category/${category.id}`);
                        setIsMenuOpen(false);
                        setIsCategoriesOpen(false);
                      }}
                      className="block w-full text-right px-3 py-2 text-sm text-gray-400 hover:text-purple-400 hover:bg-gray-700 rounded-md transition-colors"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                router.push("/");
                setIsMenuOpen(false);
              }}
              className="block w-full text-right px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-700 rounded-md transition-colors"
            >
              דף הבית
            </button>
            <button
              onClick={() => {
                router.push("/blog");
                setIsMenuOpen(false);
              }}
              className="block w-full text-right px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-700 rounded-md transition-colors"
            >
              בלוגים ומאמרים
            </button>
            <button
              onClick={() => {
                // עקוב אחרי לחיצה על המלצות בתפריט הנייד
                if (typeof window !== "undefined" && window.fbq) {
                  window.fbq("track", "CustomEvent", {
                    event_name: "NavigationClick",
                    menu_item: "testimonials",
                    location: "mobile_navbar",
                  });
                }
                router.push("/testimonials");
                setIsMenuOpen(false);
              }}
              className="block w-full text-right px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-700 rounded-md transition-colors"
            >
              המלצות
            </button>
            <button
              onClick={() => {
                router.push("/cart");
                setIsMenuOpen(false);
              }}
              className="block w-full text-right px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-700 rounded-md transition-colors"
            >
              עגלת קניות
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
