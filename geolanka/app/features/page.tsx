"use client";

import React, { useState, Suspense } from "react";
import { Smartphone, BarChart3, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/usePerformanceOptimizations";

// Lazy load components for better performance
const HeroHeader = React.lazy(() => import("@/components/Features/HeroHeader"));
const AssistantPanel = React.lazy(
  () => import("@/components/Features/AssistantPanel")
);
const StatisticsCards = React.lazy(
  () => import("@/components/Features/StatisticsCards")
);
const FeatureCardsAndMap = React.lazy(
  () => import("@/components/Features/FeatureCardsAndMap")
);

// Loading skeletons
const HeroSkeleton = () => (
  <div className="h-80 bg-gray-200 dark:bg-gray-700 animate-pulse" />
);

const ContentSkeleton = () => (
  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <div className="h-80 bg-gray-200 dark:bg-gray-700 rounded-3xl animate-pulse" />
      </div>
      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-3 gap-6">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-32 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse"
              />
            ))}
        </div>
        <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
      </div>
    </div>
  </div>
);

export default function Features() {
  const [activeTab, setActiveTab] = useState("mobile");
  const [contentRef, contentClassName] =
    useScrollAnimation("animate-fade-in-up");

  // Optimized features data structure - memoized to prevent recreation
  const features = React.useMemo(
    () => ({
      mobile: {
        id: "mobile",
        title: "Mobile App",
        subtitle: "Offline Collection",
        mainCard: {
          image:
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80&auto=format",
          title: "GeoLanka Mobile",
          rating: 5,
          location: "Colombo, Sri Lanka",
          icon: Smartphone,
        },
        sideCards: [
          {
            image:
              "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&q=80&auto=format",
            title: "Field Data Collection",
            rating: 5,
            location: "Kandy District",
          },
          {
            image:
              "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&q=80&auto=format",
            title: "GPS Precision Tools",
            rating: 5,
            location: "Galle Province",
          },
        ],
        weather: "28°C",
        pricing: "$1,299 - $2,450",
        availability: "Available now",
        mapPins: [
          { x: 60, y: 40, active: true },
          { x: 75, y: 55, active: false },
        ],
      },
      dashboard: {
        id: "dashboard",
        title: "Web Dashboard",
        subtitle: "Visualization & Compliance",
        mainCard: {
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80&auto=format",
          title: "Analytics Dashboard",
          rating: 5,
          location: "Real-time Data",
          icon: BarChart3,
        },
        sideCards: [
          {
            image:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80&auto=format",
            title: "Data Visualization",
            rating: 5,
            location: "Live Updates",
          },
          {
            image:
              "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop&q=80&auto=format",
            title: "Compliance Reports",
            rating: 5,
            location: "Automated",
          },
        ],
        weather: "99.9%",
        pricing: "2,500+ Users",
        availability: "Cloud Ready",
        mapPins: [
          { x: 45, y: 35, active: true },
          { x: 80, y: 60, active: true },
        ],
      },
      reports: {
        id: "reports",
        title: "Automated Reports",
        subtitle: "Reports & Integrations",
        mainCard: {
          image:
            "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop&q=80&auto=format",
          title: "Report Generation",
          rating: 5,
          location: "Automated System",
          icon: FileText,
        },
        sideCards: [
          {
            image:
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&q=80&auto=format",
            title: "API Integrations",
            rating: 5,
            location: "25+ Services",
          },
          {
            image:
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&q=80&auto=format",
            title: "Custom Workflows",
            rating: 5,
            location: "Configurable",
          },
        ],
        weather: "50K+",
        pricing: "25 Integrations",
        availability: "Enterprise",
        mapPins: [
          { x: 55, y: 45, active: true },
          { x: 70, y: 30, active: false },
        ],
      },
    }),
    []
  );

  const currentFeature = features[activeTab];

  return (
    <main>
      {/* Hero Header Section */}
      <Suspense fallback={<HeroSkeleton />}>
        <HeroHeader
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          features={features}
        />
      </Suspense>

      {/* Content Section */}
      <div
        ref={contentRef}
        className={`relative bg-white dark:bg-[#0a0c0b] transition-colors duration-300 ${contentClassName}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Assistant Panel */}
            <Suspense
              fallback={
                <div className="lg:col-span-1 h-80 bg-gray-200 dark:bg-gray-700 rounded-3xl animate-pulse" />
              }
            >
              <AssistantPanel currentFeature={currentFeature} />
            </Suspense>

            {/* Right Content Area */}
            <div className="lg:col-span-2">
              {/* Optimized tab switching with CSS transitions instead of Framer Motion */}
              <div
                className="space-y-6 transition-all duration-300 ease-in-out"
                key={activeTab}
              >
                {/* Statistics Cards */}
                <Suspense
                  fallback={
                    <div className="grid grid-cols-3 gap-6 mb-6">
                      {Array(3)
                        .fill(0)
                        .map((_, i) => (
                          <div
                            key={i}
                            className="h-32 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse"
                          />
                        ))}
                    </div>
                  }
                >
                  <StatisticsCards currentFeature={currentFeature} />
                </Suspense>

                {/* Feature Cards & Map */}
                <Suspense
                  fallback={
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
                        <div className="space-y-4">
                          <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
                          <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
                        </div>
                      </div>
                      <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
                    </div>
                  }
                >
                  <FeatureCardsAndMap currentFeature={currentFeature} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
