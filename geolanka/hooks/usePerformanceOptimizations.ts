// hooks/usePerformanceOptimizations.ts
"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * High-performance Intersection Observer hook
 */
export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);

        // Disconnect after first view for better performance
        if (entry.isIntersecting && (options as any).once !== false) {
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px",
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, isInView] as const;
};

/**
 * Optimized scroll animation hook
 */
export const useScrollAnimation = (className = "animate-fade-in-up") => {
  const [ref, isInView] = useInView({ once: true });

  return [ref, isInView ? `${className} is-visible` : className] as const;
};

/**
 * Debounced resize hook
 */
export const useDebounceResize = (delay = 250) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  const debounce = useCallback((func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(null, args), wait);
    };
  }, []);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, delay);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [debounce, delay]);

  return windowSize;
};

/**
 * Preload critical resources hook
 */
export const usePreloadResources = (resources: string[]) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const preloadedResources: HTMLLinkElement[] = [];

    resources.forEach((resource) => {
      const link = document.createElement("link");
      link.rel = "preload";

      // Determine resource type
      if (resource.endsWith(".woff2")) {
        link.as = "font";
        link.type = "font/woff2";
        link.crossOrigin = "anonymous";
      } else if (resource.match(/\.(jpg|jpeg|png|webp|avif)$/)) {
        link.as = "image";
      }

      link.href = resource;
      document.head.appendChild(link);
      preloadedResources.push(link);
    });

    return () => {
      preloadedResources.forEach((link) => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [resources]);
};
