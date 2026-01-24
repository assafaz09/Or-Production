"use client";

import { useState, useMemo, useCallback } from "react";
import { getCloudinaryUrl } from "../lib/cloudinary";

export const useImageLoader = ({
  src,
  width,
  height,
  quality = "auto",
  format = "auto",
} = {}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getOptimizedUrl = useCallback(
    (w, h) => {
      const transformations = [];

      if (w && h) {
        transformations.push(`c_fill,w_${w},h_${h}`);
      } else if (w) {
        transformations.push(`c_scale,w_${w}`);
      }

      transformations.push(`f_${format}`);
      transformations.push(`q_${quality}`);

      return getCloudinaryUrl(src, {
        transformations: transformations.join(","),
      });
    },
    [src, format, quality]
  );

  const generateSrcSet = useCallback(
    (baseWidth) => {
      if (!baseWidth) return undefined;
      const sizes = [0.5, 1, 1.5, 2];
      return sizes
        .map((scale) => {
          const scaledWidth = Math.round(baseWidth * scale);
          return `${getOptimizedUrl(
            scaledWidth,
            height && Math.round(height * scale)
          )} ${scaledWidth}w`;
        })
        .join(", ");
    },
    [getOptimizedUrl, height]
  );

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  const optimizedSrc = useMemo(
    () => getOptimizedUrl(width || 400, height || 300),
    [getOptimizedUrl, width, height]
  );

  const blurDataUrl = useMemo(() => getOptimizedUrl(10, 10), [getOptimizedUrl]);

  return {
    optimizedSrc,
    srcSet: generateSrcSet(width),
    isLoading,
    hasError,
    handleLoad,
    handleError,
    blurDataUrl,
  };
};

export default useImageLoader;
