"use client";
import React from "react";
import useAutoCarousel from "../hooks/useAutoCarousel";

export default function ScrollSnapCarousel({ children, className = "" }) {
  const { containerRef, scrollNext, scrollPrev } = useAutoCarousel();

  return (
    <div className={`relative w-full ${className}`}>
      <div
        ref={containerRef}
        className="overflow-x-auto overflow-y-hidden flex gap-6 snap-x snap-mandatory scroll-smooth scrollbar-hide"
      >
        {React.Children.map(children, (child) => (
          <div data-carousel-item className="snap-center shrink-0">
            {child}
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <button
          type="button"
          onClick={scrollPrev}
          className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700 transition-colors"
        >
          הקודם
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700 transition-colors"
        >
          הבא
        </button>
      </div>
    </div>
  );
}
