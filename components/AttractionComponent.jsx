"use client";

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { getCloudinaryUrl } from "../lib/cloudinary";

const Attraction = ({ attraction, onAddToCart, animationDelay = 0 }) => {
  const router = useRouter();
  const [selectedGuestOption, setSelectedGuestOption] = useState(0); // Index of selected option

  const handleClick = useCallback(() => {
    router.push(`/attraction/${attraction.id}`);
  }, [router, attraction.id]);

  const getCurrentPrice = () => {
    if (attraction.guestOptions && attraction.guestOptions.length > 0) {
      return attraction.guestOptions[selectedGuestOption].price;
    }
    return attraction.price;
  };

  const handleAddToCart = useCallback(
    (e) => {
      e.stopPropagation();

      let attractionToAdd = { ...attraction };

      // If guest options exist, add selected option info
      if (attraction.guestOptions && attraction.guestOptions.length > 0) {
        const selectedOption = attraction.guestOptions[selectedGuestOption];
        attractionToAdd.selectedGuestOption = selectedOption;
        attractionToAdd.price = selectedOption.price;
        attractionToAdd.guestInfo = selectedOption.label;
      }

      // Get existing cart from localStorage
      const existingCart = localStorage.getItem("cart");
      const cart = existingCart ? JSON.parse(existingCart) : [];

      // Create unique ID for cart item (includes guest option if applicable)
      const cartItemId = attraction.guestOptions
        ? `${attraction.id}_${selectedGuestOption}`
        : attraction.id;

      // Check if item already exists in cart
      const existingItemIndex = cart.findIndex(
        (item) => (item.cartItemId || item.id) === cartItemId
      );

      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        cart[existingItemIndex].quantity += 1;
      } else {
        // Add new item to cart
        cart.push({
          ...attractionToAdd,
          cartItemId,
          quantity: 1,
        });
      }

      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      // Call parent callback if provided
      if (onAddToCart) {
        onAddToCart(attractionToAdd);
      }

      // Show success message
      const guestInfo = attraction.guestOptions
        ? ` (${attraction.guestOptions[selectedGuestOption].label})`
        : "";
      alert(`הוספת ${attraction.name}${guestInfo} לסל הקניות!`);
    },
    [attraction, onAddToCart, selectedGuestOption]
  );

  // Get Cloudinary URL for the first valid image
  const getValidImageUrl = () => {
    if (
      !attraction.images ||
      !Array.isArray(attraction.images) ||
      attraction.images.length === 0
    ) {
      return "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500";
    }

    // Find the first valid image (not empty string and not video)
    for (let i = 0; i < attraction.images.length; i++) {
      const image = attraction.images[i];

      // Skip if it's a video object
      if (
        typeof image === "object" &&
        image !== null &&
        image.type === "video"
      ) {
        continue;
      }

      // Skip if it's an empty string
      if (typeof image === "string" && image.trim() === "") {
        continue;
      }

      // If we found a valid image, return it
      if (typeof image === "string" && image.trim() !== "") {
        return getCloudinaryUrl(image);
      }
    }

    // If no valid images found, return fallback
    return "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500";
  };

  const imageUrl = getValidImageUrl();

  return (
    <div
      className="bg-gray-900 rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${animationDelay}s` }}
      onClick={handleClick}
    >
      <img
        src={imageUrl}
        alt={attraction.name}
        className="w-full h-48 object-cover rounded-t-lg"
        onError={(e) => {
          // Fallback to default image if loading fails
          e.target.src =
            "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500";
        }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-4">
          {attraction.name}
        </h3>

        {/* Guest Options Selector */}
        {attraction.guestOptions && attraction.guestOptions.length > 0 && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              בחר כמות סועדים:
            </label>
            <select
              value={selectedGuestOption}
              onChange={(e) => {
                e.stopPropagation();
                setSelectedGuestOption(parseInt(e.target.value));
              }}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              {attraction.guestOptions.map((option, index) => (
                <option key={index} value={index}>
                  {option.label} - ₪{option.price}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-400">
            ₪{getCurrentPrice()}
          </div>
          <button onClick={handleAddToCart} className="btn-primary">
            הוסף לסל
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Attraction);
