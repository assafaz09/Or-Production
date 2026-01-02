"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

export default function ResponsiveCarousel({
  children,
  autoScrollSpeed = 3000,
  className = "",
  showNavigation = true,
  showDots = false,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const carouselRef = useRef(null);
  const autoScrollRef = useRef(null);

  // Calculate total items and visible items based on screen size
  const getVisibleItems = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1; // sm
    if (window.innerWidth < 768) return 2; // md
    if (window.innerWidth < 1024) return 3; // lg
    return 4; // xl and above
  };

  const [visibleItems, setVisibleItems] = useState(getVisibleItems());
  const totalItems = React.Children.count(children);

  // Update visible items on window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getVisibleItems());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling || isPaused) return;

    const autoScroll = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % (totalItems - visibleItems + 1);
        return nextIndex;
      });
    };

    autoScrollRef.current = setInterval(autoScroll, autoScrollSpeed);
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling, isPaused, autoScrollSpeed, totalItems, visibleItems]);

  // Pause on hover
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Manual navigation
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % (totalItems - visibleItems + 1);
      return nextIndex;
    });
    // Pause auto-scroll temporarily when manually navigating
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 2000);
  }, [totalItems, visibleItems]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const prevIndexValue = prevIndex - 1;
      return prevIndexValue < 0 ? totalItems - visibleItems : prevIndexValue;
    });
    // Pause auto-scroll temporarily when manually navigating
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 2000);
  }, [totalItems, visibleItems]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    // Pause auto-scroll temporarily when manually navigating
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 2000);
  }, []);

  // Calculate transform for smooth sliding
  const getTransform = () => {
    const itemWidth = 100 / visibleItems;
    return `translateX(-${currentIndex * itemWidth}%)`;
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="relative overflow-hidden rounded-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Carousel Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: getTransform() }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / visibleItems}%` }}
            >
              <div className="w-full h-full">
                {React.cloneElement(child, {
                  className: `${child.props.className || ""} w-full h-full`,
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showNavigation && totalItems > visibleItems && (
          <>
            {/* Previous Button */}
            <button
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Previous slide"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Next slide"
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {showDots && totalItems > visibleItems && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {Array.from({ length: totalItems - visibleItems + 1 }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        )}
      </div>

      {/* Auto-scroll Status Indicator */}
      <div className="mt-4 text-center">
        <button
          onClick={() => setIsAutoScrolling(!isAutoScrolling)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
            isAutoScrolling
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-gray-600 hover:bg-gray-700 text-white"
          }`}
        >
          {isAutoScrolling ? "Auto-scroll: ON" : "Auto-scroll: OFF"}
        </button>
      </div>
    </div>
  );
}
