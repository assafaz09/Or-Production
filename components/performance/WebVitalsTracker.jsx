"use client";

import { useEffect } from "react";
import {
  initWebVitals,
  measurePageLoad,
  measureResourceLoading,
  measureBundleSize,
} from "../../lib/performance/webVitals";

const WebVitalsTracker = () => {
  useEffect(() => {
    // Initialize Web Vitals tracking
    initWebVitals();

    // Measure custom metrics
    measurePageLoad();
    measureResourceLoading();
    measureBundleSize();

    // Development mode performance tips
    if (process.env.NODE_ENV === "development") {
      console.log("🚀 Performance monitoring initialized");

      // Log performance tips
      setTimeout(() => {
        console.log("💡 Performance Tips:");
        console.log("- Check Network tab for large resources");
        console.log("- Monitor bundle size with npm run analyze");
        console.log("- Use Lighthouse for detailed analysis");
        console.log("- Watch Web Vitals in console");
      }, 3000);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default WebVitalsTracker;
