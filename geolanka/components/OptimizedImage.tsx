/ components/IOadeegiimmptz.tsx;
import React, { useState } from "react";
import Image from "next/image";
import { useOptimizedImage } from "@/hooks/usePerformanceOptimizations";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  loading?: "lazy" | "eager";
  onLoad?: () => void;
  onError?: () => void;
}

// Generate blur placeholder for images
const generateBlurDataURL = (width = 8, height = 8) => {
  const canvas =
    typeof window !== "undefined" ? document.createElement("canvas") : null;
  if (!canvas) return "";

  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  // Create a simple gradient blur placeholder
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#f3f4f6");
  gradient.addColorStop(1, "#e5e7eb");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  return canvas.toDataURL();
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 75,
  placeholder = "blur",
  blurDataURL,
  objectFit = "cover",
  loading = "lazy",
  onLoad,
  onError,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate blur placeholder if not provided
  const defaultBlurDataURL = blurDataURL || generateBlurDataURL();

  // Fallback image for errors
  const fallbackSrc = "/images/placeholder.webp"; // Create a generic placeholder

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setImageError(true);
    onError?.();
  };

  // Convert Unsplash URLs to optimized versions
  const optimizeSrc = (originalSrc: string) => {
    if (originalSrc.includes("unsplash.com")) {
      const url = new URL(originalSrc);
      // Add Unsplash optimization parameters
      url.searchParams.set("auto", "format");
      url.searchParams.set("fit", "crop");
      url.searchParams.set("q", quality.toString());
      if (width) url.searchParams.set("w", width.toString());
      if (height) url.searchParams.set("h", height.toString());
      return url.toString();
    }
    return originalSrc;
  };

  const optimizedSrc = imageError ? fallbackSrc : optimizeSrc(src);

  if (fill) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={optimizedSrc}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={defaultBlurDataURL}
          className={`transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${objectFit === "cover" ? "object-cover" : `object-${objectFit}`}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? "eager" : loading}
        />

        {/* Loading skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <Image
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={defaultBlurDataURL}
        className={`transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? "eager" : loading}
      />

      {/* Loading skeleton */}
      {!isLoaded && width && height && (
        <div
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"
          style={{ width, height }}
        />
      )}

      {/* Error state */}
      {imageError && (
        <div
          className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center rounded"
          style={{ width, height }}
        >
          <span className="text-gray-400 text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
