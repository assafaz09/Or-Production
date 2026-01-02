// Cloudinary Configuration
// NOTE: Do NOT hardcode secrets here. Use environment variables instead.
// `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` is safe for client usage.
export const cloudinaryConfig = {
  cloudName:
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME || "dpgnqgyxe",
};

// Server-only credentials should live in environment variables and be
// accessed from server-side code (API routes, server utilities).
// Example (server-only): process.env.CLOUDINARY_API_KEY, process.env.CLOUDINARY_API_SECRET

// Cache for URLs to avoid regenerating the same URLs
const urlCache = new Map();

// Helper function to get Cloudinary URL with optimization
export const getCloudinaryUrl = (publicId, options = {}) => {
  // Create cache key
  const cacheKey = JSON.stringify({ publicId, options });

  // Check cache first
  if (urlCache.has(cacheKey)) {
    return urlCache.get(cacheKey);
  }

  let url;

  // For object format: { type: "video", src: "..." }
  if (
    typeof publicId === "object" &&
    publicId !== null &&
    publicId.type === "video"
  ) {
    const baseUrl = `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/video/upload`;
    const transformations = options.transformations || "";
    url = `${baseUrl}/${transformations}/${publicId.src}`;
  } else {
    // For string format: treat as image
    const baseUrl = `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload`;
    const transformations = options.transformations || "";
    url = `${baseUrl}/${transformations}/${publicId}`;
  }

  // Cache the result
  urlCache.set(cacheKey, url);

  return url;
};

// Preload critical images
export const preloadImage = (src) => {
  if (typeof window !== "undefined") {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  }
};

// Generate responsive image URLs
export const getResponsiveImageUrls = (
  publicId,
  widths = [320, 640, 960, 1280, 1920]
) => {
  return widths.map((width) => ({
    width,
    url: getCloudinaryUrl(publicId, {
      transformations: `c_scale,w_${width},f_auto,q_auto`,
    }),
  }));
};
