"use client";

import { useState } from "react";
import useImageLoader from "../../hooks/useImageLoader";

const OptimizedCloudinaryImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  quality = "auto",
  format = "auto",
  loading = "lazy",
  sizes = "100vw",
  onClick,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const { optimizedSrc, srcSet, handleLoad, handleError } = useImageLoader({
    src,
    width,
    height,
    quality,
    format,
  });

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-200 ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">תמונה לא נמצאה</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
          style={{ width, height }}
        />
      )}
      <img
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
        loading={priority ? "eager" : loading}
        onLoad={() => {
          setIsLoading(false);
          handleLoad();
        }}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
          handleError();
        }}
        onClick={handleClick}
        width={width}
        height={height}
        {...props}
      />
    </div>
  );
};

export default OptimizedCloudinaryImage;
