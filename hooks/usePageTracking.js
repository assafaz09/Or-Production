import { useEffect } from "react";
import { trackViewContent, trackCustomEvent } from "../lib/facebookPixel";

export const usePageTracking = (
  pageName,
  pageType = "page",
  customData = {}
) => {
  useEffect(() => {
    // Track page view
    trackViewContent(pageName, pageType, 0, "ILS");

    // Track custom page view event
    trackCustomEvent(`${pageType}PageView`, {
      page_name: pageName,
      ...customData,
    });

    // Track time on page
    const startTime = Date.now();

    const handleBeforeUnload = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      trackCustomEvent("TimeOnPage", {
        page_name: pageName,
        time_seconds: timeOnPage,
      });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pageName, pageType, customData]);
};

export const useScrollTracking = (pageName) => {
  useEffect(() => {
    let maxScroll = 0;

    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100
      );

      if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;

        // Track scroll milestones
        if ([25, 50, 75, 90].includes(scrollPercentage)) {
          trackCustomEvent("ScrollDepth", {
            page_name: pageName,
            scroll_percentage: scrollPercentage,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageName]);
};
