"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";

const VirtualList = ({
  items,
  itemHeight,
  containerHeight,
  renderItem,
  overscan = 5, // Extra items to render outside viewport
  className = "",
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const scrollElementRef = useRef();

  const visibleRange = useMemo(() => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight) + overscan,
      items.length
    );

    return {
      startIndex: Math.max(0, startIndex - overscan),
      endIndex,
    };
  }, [scrollTop, itemHeight, containerHeight, items.length, overscan]);

  const visibleItems = useMemo(() => {
    return items
      .slice(visibleRange.startIndex, visibleRange.endIndex)
      .map((item, index) => ({
        ...item,
        index: visibleRange.startIndex + index,
        originalIndex: visibleRange.startIndex + index,
      }));
  }, [items, visibleRange]);

  const totalHeight = items.length * itemHeight;
  const offsetY = visibleRange.startIndex * itemHeight;

  const handleScroll = useCallback((e) => {
    const newScrollTop = e.target.scrollTop;
    setScrollTop(newScrollTop);
  }, []);

  // Smooth scrolling methods
  const scrollToIndex = useCallback(
    (index) => {
      if (scrollElementRef.current) {
        const targetScrollTop = index * itemHeight;
        scrollElementRef.current.scrollTo({
          top: targetScrollTop,
          behavior: "smooth",
        });
      }
    },
    [itemHeight]
  );

  const scrollToTop = useCallback(() => {
    scrollToIndex(0);
  }, [scrollToIndex]);

  // Performance monitoring
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log(
        `VirtualList: Rendering ${visibleItems.length} of ${items.length} items`
      );
    }
  }, [visibleItems.length, items.length]);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={scrollElementRef}
        className="overflow-auto"
        style={{ height: containerHeight }}
        onScroll={handleScroll}
      >
        <div style={{ height: totalHeight, position: "relative" }}>
          <div
            style={{
              transform: `translateY(${offsetY}px)`,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
            }}
          >
            {visibleItems.map((item) => (
              <div
                key={item.id || item.originalIndex}
                style={{ height: itemHeight }}
                className="virtual-list-item"
              >
                {renderItem(item, item.originalIndex)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicators */}
      {items.length > Math.ceil(containerHeight / itemHeight) && (
        <div className="absolute top-2 right-2 text-xs text-gray-500 bg-black/50 px-2 py-1 rounded">
          {Math.floor(scrollTop / itemHeight) + 1} -{" "}
          {Math.min(
            Math.floor(scrollTop / itemHeight) +
              Math.ceil(containerHeight / itemHeight),
            items.length
          )}{" "}
          of {items.length}
        </div>
      )}

      {/* Scroll to top button */}
      {scrollTop > containerHeight && (
        <button
          onClick={scrollToTop}
          className="absolute bottom-4 right-4 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default VirtualList;
