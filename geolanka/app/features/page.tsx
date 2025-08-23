"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Smartphone, BarChart3, FileText } from "lucide-react";

// Import your components with correct names
import HeroHeader from "@/components/Features/HeroHeader";
import AssistantPanel from "@/components/Features/AssistantPanel";
import StatisticsCards from "@/components/Features/StatisticsCards";
import FeatureCardsAndMap from "@/components/Features/FeatureCardsAndMap";

export default function Features() {
  const [activeTab, setActiveTab] = useState("mobile");

  // Complete features data structure
  const features = {
    mobile: {
      id: "mobile",
      title: "Mobile App",
      subtitle: "Offline Collection",
      mainCard: {
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80",
        title: "GeoLanka Mobile",
        rating: 5,
        location: "Colombo, Sri Lanka",
        icon: Smartphone,
      },
      sideCards: [
        {
          image:
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&q=80",
          title: "Field Data Collection",
          rating: 5,
          location: "Kandy District",
        },
        {
          image:
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&q=80",
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
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
        title: "Analytics Dashboard",
        rating: 5,
        location: "Real-time Data",
        icon: BarChart3,
      },
      sideCards: [
        {
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80",
          title: "Data Visualization",
          rating: 5,
          location: "Live Updates",
        },
        {
          image:
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop&q=80",
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
          "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop&q=80",
        title: "Report Generation",
        rating: 5,
        location: "Automated System",
        icon: FileText,
      },
      sideCards: [
        {
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&q=80",
          title: "API Integrations",
          rating: 5,
          location: "25+ Services",
        },
        {
          image:
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&q=80",
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
  };

  const currentFeature = features[activeTab];

  return (
    <main>
      {/* Hero Header Section */}
      <HeroHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        features={features}
      />

      {/* Content Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Assistant Panel */}
            <AssistantPanel currentFeature={currentFeature} />

            {/* Right Content Area */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {/* Statistics Cards */}
                  <StatisticsCards currentFeature={currentFeature} />

                  {/* Feature Cards & Map */}
                  <FeatureCardsAndMap currentFeature={currentFeature} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
