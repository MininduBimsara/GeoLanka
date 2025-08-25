// hooks/usePerformanceOptimizations.ts
import { useEffect, useRef, useState, useCallback } from "react";

/**
 * High-performance Intersection Observer hook
 * Replaces heavy Framer Motion viewport animations
 */
export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setHasBeenInView(true);

          // Disconnect observer after first view for better performance
          if (options.once !== false) {
            observer.disconnect();
          }
        } else {
          setIsInView(false);
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

  return [ref, isInView, hasBeenInView] as const;
};

/**
 * Optimized scroll animation hook
 * Uses CSS classes instead of JavaScript animations
 */
export const useScrollAnimation = (className = "animate-fade-in-up") => {
  const [ref, isInView] = useInView({ once: true });

  return [ref, isInView ? `${className} is-visible` : className] as const;
};

/**
 * Lazy loading hook for heavy components
 */
export const useLazyComponent = <T>(
  importFunc: () => Promise<{ default: T }>,
  fallback: T | null = null
) => {
  const [component, setComponent] = useState<T | null>(fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadComponent = async () => {
      try {
        const { default: Component } = await importFunc();
        if (mounted) {
          setComponent(Component);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError(err as Error);
          setLoading(false);
        }
      }
    };

    loadComponent();

    return () => {
      mounted = false;
    };
  }, [importFunc]);

  return { component, loading, error };
};

/**
 * Performance monitoring hook
 */
export const usePerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && "performance" in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("LCP:", entry.startTime);
          }
          if (entry.entryType === "first-input") {
            console.log("FID:", entry.processingStart - entry.startTime);
          }
          if (entry.entryType === "layout-shift") {
            if (!(entry as any).hadRecentInput) {
              console.log("CLS:", (entry as any).value);
            }
          }
        }
      });

      observer.observe({
        entryTypes: ["largest-contentful-paint", "first-input", "layout-shift"],
      });

      return () => observer.disconnect();
    }
  }, []);
};

/**
 * Optimized image loading hook
 */
export const useOptimizedImage = (src: string, options = {}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();

    img.onload = () => {
      setIsLoaded(true);
      setError(null);
    };

    img.onerror = () => {
      setError(new Error("Failed to load image"));
      setIsLoaded(false);
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return { isLoaded, error, imgRef };
};

/**
 * Debounced resize hook for responsive optimizations
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
      } else if (resource.endsWith(".css")) {
        link.as = "style";
      } else if (resource.endsWith(".js")) {
        link.as = "script";
      }

      link.href = resource;
      document.head.appendChild(link);
      preloadedResources.push(link);
    });

    return () => {
      preloadedResources.forEach((link) => {
        document.head.removeChild(link);
      });
    };
  }, [resources]);
};

/**
 * Virtual scrolling hook for large lists
 */
export const useVirtualScroll = (
  items: any[],
  itemHeight: number,
  containerHeight: number
) => {
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight) + 1,
    items.length
  );

  const visibleItems = items.slice(startIndex, endIndex);
  const totalHeight = items.length * itemHeight;
  const offsetY = startIndex * itemHeight;

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  return {
    visibleItems,
    totalHeight,
    offsetY,
    handleScroll,
    startIndex,
    endIndex,
  };
};
