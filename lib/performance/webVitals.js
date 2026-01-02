import { getCLS, getFID, getFCP, getLCP, getTTFB } from "web-vitals";

// Performance thresholds (in milliseconds)
const THRESHOLDS = {
  FCP: { good: 1800, poor: 3000 },
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  TTFB: { good: 800, poor: 1800 },
};

// Analytics function - you can replace with your preferred analytics service
const sendToAnalytics = (metric) => {
  // Send to Facebook Pixel
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", "WebVital", {
      name: metric.name,
      value: Math.round(metric.value),
      rating: getMetricRating(metric),
      page: window.location.pathname,
    });
  }

  // Console logging for development
  if (process.env.NODE_ENV === "development") {
    console.log(`🔍 Web Vital: ${metric.name}`, {
      value: Math.round(metric.value),
      rating: getMetricRating(metric),
      threshold: THRESHOLDS[metric.name],
    });
  }

  // You can also send to other analytics services here
  // Google Analytics, Mixpanel, etc.
};

const getMetricRating = (metric) => {
  const threshold = THRESHOLDS[metric.name];
  if (!threshold) return "unknown";

  if (metric.value <= threshold.good) return "good";
  if (metric.value <= threshold.poor) return "needs-improvement";
  return "poor";
};

// Initialize Web Vitals monitoring
export const initWebVitals = () => {
  if (typeof window === "undefined") return;

  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
};

// Manual performance measurements
export const measureCustomMetric = (name, value) => {
  sendToAnalytics({
    name: `custom_${name}`,
    value,
    rating: "custom",
  });
};

// Page load time measurement
export const measurePageLoad = () => {
  if (typeof window === "undefined") return;

  window.addEventListener("load", () => {
    const loadTime = performance.now();
    measureCustomMetric("page_load_time", loadTime);
  });
};

// Resource loading measurement
export const measureResourceLoading = () => {
  if (typeof window === "undefined") return;

  // Measure when all resources are loaded
  window.addEventListener("load", () => {
    const entries = performance.getEntriesByType("resource");

    const imageResources = entries.filter(
      (entry) =>
        entry.name.includes(".jpg") ||
        entry.name.includes(".png") ||
        entry.name.includes(".webp") ||
        entry.name.includes("cloudinary")
    );

    const totalImageLoadTime = imageResources.reduce(
      (total, entry) => total + entry.duration,
      0
    );

    measureCustomMetric("image_load_time", totalImageLoadTime);
    measureCustomMetric("total_resources", entries.length);
  });
};

// Bundle size estimation
export const measureBundleSize = () => {
  if (typeof window === "undefined") return;

  window.addEventListener("load", () => {
    const entries = performance.getEntriesByType("resource");

    const jsResources = entries.filter(
      (entry) =>
        entry.name.includes(".js") && entry.name.includes("/_next/static/")
    );

    const totalJSSize = jsResources.reduce(
      (total, entry) => total + (entry.transferSize || 0),
      0
    );

    measureCustomMetric("bundle_size_kb", Math.round(totalJSSize / 1024));
  });
};
