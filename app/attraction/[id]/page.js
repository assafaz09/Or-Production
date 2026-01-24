"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getAllAttractions } from "../../../lib/categories";
import { getCloudinaryUrl } from "../../../lib/cloudinary";
import CopyLinkButton from "../../../components/shared/CopyLinkButton";

// Copy Link Button Component
// Using shared CopyLinkButton component (see components/shared/CopyLinkButton.jsx)

export default function AttractionPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedGuestOption, setSelectedGuestOption] = useState(0); // Index of selected option

  const attractions = getAllAttractions();
  const attraction = attractions.find((attr) => attr.id === parseInt(id));

  // Get current price based on guest options
  const getCurrentPrice = () => {
    if (
      attraction &&
      attraction.guestOptions &&
      attraction.guestOptions.length > 0
    ) {
      return attraction.guestOptions[selectedGuestOption].price;
    }
    return attraction ? attraction.price : 0;
  };

  // עקוב אחרי צפייה באטרקציה
  useEffect(() => {
    if (attraction) {
      trackViewContent(
        attraction.name,
        attraction.category || "attraction",
        attraction.price || 0,
        "ILS"
      );
    }
  }, [attraction]);

  if (!attraction) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            אטרקציה לא נמצאה
          </h1>
          <button onClick={() => router.push("/")} className="btn-primary">
            חזרה לדף הבית
          </button>
        </div>
      </div>
    );
  }

  const addToCart = () => {
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
      cart[existingItemIndex].quantity += quantity;
    } else {
      // Add new item to cart
      cart.push({
        ...attractionToAdd,
        cartItemId,
        quantity: quantity,
      });
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show success message
    const guestInfo = attraction.guestOptions
      ? ` (${attraction.guestOptions[selectedGuestOption].label})`
      : "";
    alert(`הוספת ${quantity} ${attraction.name}${guestInfo} לסל הקניות!`);

    // Reset quantity to 1
    setQuantity(1);
  };

  const nextMedia = () => {
    setCurrentMediaIndex((prev) =>
      prev === attraction.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) =>
      prev === 0 ? attraction.images.length - 1 : prev - 1
    );
  };

  // Check if current media is a video
  const isVideo = (mediaItem) => {
    // Handle object format: { type: "video", src: "..." }
    if (typeof mediaItem === "object" && mediaItem !== null) {
      return mediaItem.type === "video";
    }

    // Handle string format: "video-name"
    if (typeof mediaItem === "string") {
      return (
        mediaItem.includes("video") ||
        mediaItem.includes("mp4") ||
        mediaItem.includes("mov") ||
        mediaItem.includes("avi") ||
        mediaItem.includes("webm")
      );
    }

    return false;
  };

  // Get Cloudinary URL for current media
  const getMediaUrl = (mediaItem) => {
    if (typeof mediaItem === "object" && mediaItem !== null) {
      // Object format: { type: "video", src: "..." }
      return getCloudinaryUrl(mediaItem); // Pass the whole object
    } else if (typeof mediaItem === "string") {
      // Check if it's already a full URL
      if (mediaItem.startsWith("http://") || mediaItem.startsWith("https://")) {
        return mediaItem; // Return as-is if it's already a URL
      } else {
        // String format: "media-name" - treat as Cloudinary ID
        return getCloudinaryUrl(mediaItem);
      }
    }
    return "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500";
  };

  const currentMediaUrl = attraction.images[currentMediaIndex]
    ? getMediaUrl(attraction.images[currentMediaIndex])
    : "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500";

  const currentMediaId = attraction.images[currentMediaIndex];
  const isCurrentVideo = currentMediaId ? isVideo(currentMediaId) : false;

  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumbs */}
      <section className="py-3 sm:py-4 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-xs sm:text-sm text-gray-300">
            <button
              onClick={() => router.push("/")}
              className="hover:underline text-center"
            >
              דף הבית
            </button>
            <span className="mx-1 sm:mx-2">/</span>
            <button
              onClick={() => router.push(`/category/${attraction.category}`)}
              className="hover:underline text-center"
            >
              {attraction.category}
            </button>
            <span className="mx-1 sm:mx-2">/</span>
            <span className="text-white truncate max-w-32 sm:max-w-none">
              {attraction.name}
            </span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Media Gallery */}
            <div className="space-y-4">
              {/* Main Media Display */}
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden mb-4 sm:mb-6">
                {isCurrentVideo ? (
                  <video
                    src={currentMediaUrl}
                    controls
                    autoPlay={true}
                    muted
                    loop
                    className="w-full h-full object-cover"
                    poster={
                      attraction.images[0]
                        ? getMediaUrl(attraction.images[0])
                        : undefined
                    }
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={currentMediaUrl}
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Navigation Buttons */}
                {attraction.images.length > 1 && (
                  <>
                    <button
                      onClick={prevMedia}
                      className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-80 rounded-full p-1.5 sm:p-2 hover:bg-opacity-100 transition-all"
                    >
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
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
                    </button>
                    <button
                      onClick={nextMedia}
                      className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-80 rounded-full p-1.5 sm:p-2 hover:bg-opacity-100 transition-all"
                    >
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {attraction.images.length > 1 && (
                <div className="flex space-x-2 rtl:space-x-reverse overflow-x-auto pb-2">
                  {attraction.images.map((media, index) => {
                    const isVideoThumb = isVideo(media);
                    const mediaUrl = getMediaUrl(media);

                    // Debug logging
                    console.log(`Thumbnail ${index}:`, {
                      media,
                      isVideo: isVideoThumb,
                      url: mediaUrl,
                    });

                    return (
                      <div
                        key={index}
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg cursor-pointer border-2 transition-all flex-shrink-0 ${
                          index === currentMediaIndex
                            ? "border-purple-800"
                            : "border-gray-700 hover:border-gray-600"
                        }`}
                        onClick={() => setCurrentMediaIndex(index)}
                      >
                        {isVideoThumb ? (
                          <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                            <svg
                              className="w-8 h-8 text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        ) : (
                          <img
                            src={mediaUrl}
                            alt={`${attraction.name} - תמונה ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                            onError={(e) => {
                              console.error(
                                `Failed to load image ${index}:`,
                                mediaUrl
                              );
                              e.target.src =
                                "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500";
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                  {attraction.name}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  {attraction.description}
                </p>
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-4 sm:mb-6">
                  ₪{getCurrentPrice()}
                </div>
              </div>

              {/* Guest Options Selector */}
              {attraction.guestOptions &&
                attraction.guestOptions.length > 0 && (
                  <div className="space-y-3">
                    <label className="block text-lg font-medium text-white">
                      בחר כמות סועדים:
                    </label>
                    <select
                      value={selectedGuestOption}
                      onChange={(e) =>
                        setSelectedGuestOption(parseInt(e.target.value))
                      }
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      {attraction.guestOptions.map((option, index) => (
                        <option key={index} value={index}>
                          {option.label} - ₪{option.price}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

              {/* Quantity Selector */}
              <div className="space-y-3 sm:space-y-4">
                <label className="block text-sm font-medium text-gray-300">
                  כמות:
                </label>
                <div className="flex items-center justify-center sm:justify-start space-x-3 sm:space-x-4 rtl:space-x-reverse">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-6 h-6 sm:w-5 sm:h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                  <span className="text-xl font-semibold w-16 text-center text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={addToCart}
                className="w-full btn-primary text-base sm:text-lg py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                הוסף לעגלה - ₪{getCurrentPrice() * quantity}
              </button>

              {/* Category Info */}
              <div className="pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  <span className="font-medium">קטגוריה:</span>{" "}
                  {attraction.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Attractions */}
      <section className="py-12 sm:py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            אטרקציות דומות
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {attractions
              .filter(
                (attr) =>
                  attr.category === attraction.category &&
                  attr.id !== attraction.id
              )
              .slice(0, 3)
              .map((relatedAttraction) => (
                <div
                  key={relatedAttraction.id}
                  className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  onClick={() =>
                    router.push(`/attraction/${relatedAttraction.id}`)
                  }
                >
                  {typeof relatedAttraction.images[0] === "object" &&
                  relatedAttraction.images[0].type === "video" ? (
                    <div className="w-full h-32 sm:h-48 bg-gray-700 rounded-t-lg flex items-center justify-center">
                      <svg
                        className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  ) : (
                    <img
                      src={getCloudinaryUrl(relatedAttraction.images[0])}
                      alt={relatedAttraction.name}
                      className="w-full h-32 sm:h-48 object-cover rounded-t-lg"
                    />
                  )}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                      {relatedAttraction.name}
                    </h3>
                    <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                      {relatedAttraction.description.substring(0, 100)}...
                    </p>
                    <div className="text-lg sm:text-xl font-bold text-purple-400">
                      ₪{relatedAttraction.price}
                    </div>
                  </div>
                </div>
              ))}
          </div>
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

      {/* Copy Link Button */}
      <CopyLinkButton />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/972544299492"
        target="_blank"
        rel="noopener noreferrer"
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
