"use client";

import { useState, useRef, useEffect } from "react";
import useImageLoader from "../../hooks/useImageLoader";

const LazyImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  quality = "auto",
  format = "auto",
  onClick,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Load immediately if priority
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (priority) return; // Skip observer for priority images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px", // Start loading 50px before entering viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const {
    optimizedSrc,
    srcSet,
    handleLoad,
    handleError,
    blurDataUrl,
  } = useImageLoader({ src, width, height, quality, format });

  const handleInternalLoad = () => {
    setIsLoaded(true);
    handleLoad();
  };

  const handleInternalError = () => {
    setHasError(true);
    setIsLoaded(true);
    handleError();
  };

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
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Blur placeholder - always visible until main image loads */}
      <img
        src={blurDataUrl}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
        loading="eager"
      />

      {/* Main image - only load when in view */}
      {isInView && (
        <img
          src={optimizedSrc}
          srcSet={srcSet}
          sizes={props.sizes}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleInternalLoad}
          onError={handleInternalError}
          onClick={handleClick}
          loading={priority ? "eager" : "lazy"}
          width={width}
          height={height}
          {...props}
        />
      )}

      {/* Loading indicator */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
