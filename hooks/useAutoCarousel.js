"use client";

import { useRef, useCallback } from "react";

export const useAutoCarousel = () => {
  const containerRef = useRef(null);

  const getItemAdvance = useCallback(() => {
    const container = containerRef.current;
    if (!container) return 0;
    const firstItem = container.querySelector("[data-carousel-item]");
    const gap = parseFloat(
      getComputedStyle(container).columnGap ||
        getComputedStyle(container).gap ||
        "0"
    );
    const width = firstItem
      ? firstItem.getBoundingClientRect().width
      : container.clientWidth;
    return width + gap;
  }, []);

  const scrollNext = useCallback(() => {
    const c = containerRef.current;
    if (!c) return;
    c.scrollBy({ left: getItemAdvance(), behavior: "smooth" });
  }, [getItemAdvance]);

  const scrollPrev = useCallback(() => {
    const c = containerRef.current;
    if (!c) return;
    c.scrollBy({ left: -getItemAdvance(), behavior: "smooth" });
  }, [getItemAdvance]);

  return { containerRef, scrollNext, scrollPrev, getItemAdvance };
};

export default useAutoCarousel;
