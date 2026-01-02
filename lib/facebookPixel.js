// Facebook Pixel Helper Functions

// בדיקה אם פיקסל פייסבוק זמין
export const isFacebookPixelAvailable = () => {
  return typeof window !== "undefined" && window.fbq;
};

// עקוב אחרי צפייה בעמוד
export const trackPageView = () => {
  if (isFacebookPixelAvailable()) {
    window.fbq("track", "PageView");
  }
};

// עקוב אחרי הוספה לעגלה
export const trackAddToCart = (value, currency = "ILS") => {
  if (isFacebookPixelAvailable()) {
    window.fbq("track", "AddToCart", {
      value: value,
      currency: currency,
    });
  }
};

// עקוב אחרי התחלת תהליך רכישה
export const trackInitiateCheckout = (value, currency = "ILS") => {
  if (isFacebookPixelAvailable()) {
    window.fbq("track", "InitiateCheckout", {
      value: value,
      currency: currency,
    });
  }
};

// עקוב אחרי השלמת רכישה
export const trackPurchase = (value, currency = "ILS", contentIds = []) => {
  if (isFacebookPixelAvailable()) {
    window.fbq("track", "Purchase", {
      value: value,
      currency: currency,
      content_ids: contentIds,
    });
  }
};

// עקוב אחרי יצירת קשר
export const trackContact = () => {
  if (isFacebookPixelAvailable()) {
    window.fbq("track", "Contact");
  }
};

// עקוב אחרי לחיצה על כפתור
export const trackCustomEvent = (eventName, parameters = {}) => {
  if (isFacebookPixelAvailable()) {
    window.fbq("track", "CustomEvent", {
      event_name: eventName,
      ...parameters,
    });
  }
};

// עקוב אחרי צפייה בתוכן
export const trackViewContent = (
  contentName,
  contentCategory,
  value,
  currency = "ILS"
) => {
  if (isFacebookPixelAvailable()) {
    window.fbq("track", "ViewContent", {
      content_name: contentName,
      content_category: contentCategory,
      value: value,
      currency: currency,
    });
  }
};

// עקוב אחרי ניווט בין עמודים
export const trackPageNavigation = (fromPage, toPage) => {
  if (isFacebookPixelAvailable()) {
    window.fbq("track", "CustomEvent", {
      event_name: "PageNavigation",
      from_page: fromPage,
      to_page: toPage,
    });
  }
};

// עקוב אחרי חיפוש
export const trackSearch = (searchTerm, searchResults = []) => {
  if (isFacebookPixelAvailable()) {
    window.fbq("track", "Search", {
      search_string: searchTerm,
      content_category: "attractions",
      content_ids: searchResults.map((item) => item.id || item),
      search_results_count: searchResults.length,
    });
  }
};

// עקוב אחרי צפייה בקטגוריה
export const trackCategoryView = (categoryName, categoryId) => {
  if (isFacebookPixelAvailable()) {
    window.fbq("track", "ViewContent", {
      content_name: categoryName,
      content_category: "category",
      content_id: categoryId,
    });
  }
};

// עקוב אחרי זמן שהייה בעמוד
export const trackTimeOnPage = (pageName, timeSpent) => {
  if (isFacebookPixelAvailable()) {
    window.fbq("track", "CustomEvent", {
      event_name: "TimeOnPage",
      page_name: pageName,
      time_spent_seconds: timeSpent,
    });
  }
};

// עקוב אחרי גלילה בעמוד
export const trackScrollDepth = (pageName, scrollPercentage) => {
  if (isFacebookPixelAvailable()) {
    window.fbq("track", "CustomEvent", {
      event_name: "ScrollDepth",
      page_name: pageName,
      scroll_percentage: scrollPercentage,
    });
  }
};

// עקוב אחרי לחיצה על קישור
export const trackLinkClick = (linkText, linkUrl, linkType = "internal") => {
  if (isFacebookPixelAvailable()) {
    window.fbq("track", "CustomEvent", {
      event_name: "LinkClick",
      link_text: linkText,
      link_url: linkUrl,
      link_type: linkType,
    });
  }
};

// עקוב אחרי צפייה בסרטון
export const trackVideoView = (
  videoName,
  videoDuration,
  videoType = "hero"
) => {
  if (isFacebookPixelAvailable()) {
    window.fbq("track", "CustomEvent", {
      event_name: "VideoView",
      video_name: videoName,
      video_duration: videoDuration,
      video_type: videoType,
    });
  }
};

// עקוב אחרי הורדת קובץ או לחיצה על CTA
export const trackLead = (leadType, leadValue, leadSource = "website") => {
  if (isFacebookPixelAvailable()) {
    window.fbq("track", "Lead", {
      content_name: leadType,
      value: leadValue,
      currency: "ILS",
      content_category: leadSource,
    });
  }
};
