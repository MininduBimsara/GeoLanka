import React, { Suspense } from "react";
import { usePreloadResources } from "@/hooks/usePerformanceOptimizations";

// Lazy load components for better performance
const Hero = React.lazy(() => import("../components/HomePage/Hero"));
const KeyFeaturesGrid = React.lazy(
  () => import("../components/HomePage/KeyFeaturesGrid")
);
const ImpactStatistics = React.lazy(
  () => import("../components/HomePage/ImpactStatistics")
);
const CallToActionSection = React.lazy(
  () => import("../components/HomePage/CallToActionSection")
);

// Loading skeletons
const HeroSkeleton = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="text-center space-y-8">
      <div className="h-16 w-96 bg-gray-700 rounded animate-pulse" />
      <div className="h-8 w-64 bg-gray-700 rounded animate-pulse mx-auto" />
      <div className="h-12 w-32 bg-gray-700 rounded-full animate-pulse mx-auto" />
    </div>
  </div>
);

const SectionSkeleton = ({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} bg-gray-100 dark:bg-gray-800 animate-pulse`} />
);

export default function Home() {
  // Preload critical resources
  usePreloadResources([
    "/earth-optimized.webp",
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=600&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop&auto=format",
  ]);

  return (
    <main>
      {/* Hero Section - Prioritized loading */}
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>

      {/* Key Features Grid - Lazy loaded */}
      <Suspense fallback={<SectionSkeleton />}>
        <KeyFeaturesGrid />
      </Suspense>

      {/* Impact Statistics - Lazy loaded */}
      <Suspense fallback={<SectionSkeleton />}>
        <ImpactStatistics />
      </Suspense>

      {/* Call to Action Section - Lazy loaded */}
      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <CallToActionSection />
      </Suspense>
    </main>
  );
}
