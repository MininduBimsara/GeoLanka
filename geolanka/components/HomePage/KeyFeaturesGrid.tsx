"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import {
  MapPin,
  Route,
  Navigation,
  Satellite,
  Users,
  BarChart3,
} from "lucide-react";
import { useInView } from "@/hooks/usePerformanceOptimizations";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  image,
  index,
}) => {
  const [ref, isInView] = useInView({ once: true });

  return (
    <div
      ref={ref}
      className={`relative group h-80 rounded-2xl overflow-hidden shadow-xl dark:shadow-gray-900/30 card-hover transition-all duration-300 ${
        isInView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Optimized Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          quality={80}
          loading="lazy"
        />
      </div>

      {/* Geometric Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 dark:from-black/70 via-black/50 dark:via-black/60 to-black/70 dark:to-black/80 transition-colors duration-300" />

      {/* Additional geometric shape */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-white/10 dark:from-white/5 to-transparent transition-colors duration-300"
        style={{
          clipPath: "polygon(0 0, 60% 0, 40% 100%, 0 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        {/* Icon */}
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 bg-white/20 dark:bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center transition-colors duration-300 gpu-accelerated">
            {icon}
          </div>
          <div className="w-8 h-8 border-2 border-stone-300/50 dark:border-stone-400/50 rounded-full transition-colors duration-300" />
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-sans font-bold text-white">{title}</h3>
          <p className="text-stone-100 dark:text-stone-200 text-sm leading-relaxed transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const KeyFeaturesGrid: React.FC = () => {
  const [headerRef, isHeaderInView] = useInView({ once: true });

  const features = [
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Real-Time Tracking",
      description:
        "Advanced GPS technology for precise location tracking across Sri Lanka with sub-meter accuracy.",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=600&fit=crop&auto=format",
    },
    {
      icon: <Route className="w-6 h-6 text-white" />,
      title: "Smart Route Planning",
      description:
        "AI-powered route optimization considering traffic, weather, and road conditions for efficient navigation.",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=600&fit=crop&auto=format",
    },
    {
      icon: <Satellite className="w-6 h-6 text-white" />,
      title: "Satellite Integration",
      description:
        "High-resolution satellite imagery and real-time data for comprehensive mapping solutions.",
      image:
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=600&fit=crop&auto=format",
    },
    {
      icon: <Navigation className="w-6 h-6 text-white" />,
      title: "Precision Navigation",
      description:
        "Turn-by-turn navigation with voice guidance optimized for Sri Lankan roads and landmarks.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=600&fit=crop&auto=format",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Community Mapping",
      description:
        "Collaborative platform allowing local communities to contribute and verify mapping data.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop&auto=format",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Analytics Dashboard",
      description:
        "Comprehensive analytics and reporting tools for businesses and government organizations.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=600&fit=crop&auto=format",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50 dark:bg-[#0A0A0A] transition-colors duration-300">
      {/* Background Geometric Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/30 rounded-full opacity-20 dark:opacity-15 blur-3xl transition-all duration-300" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-200 dark:bg-gray-600 rounded-full opacity-30 dark:opacity-20 blur-2xl transition-all duration-300" />

      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 ${
            isHeaderInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-sans font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-300">
            Advanced Mapping Solutions
          </h2>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-16 bg-gray-400 dark:bg-gray-500 transition-colors duration-300"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-light tracking-wide uppercase transition-colors duration-300">
              T E C H N O L O G Y
            </p>
            <div className="h-px w-16 bg-gray-400 dark:bg-gray-500 transition-colors duration-300"></div>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Cutting-edge geospatial technology designed specifically for Sri
            Lankan geography, providing unparalleled accuracy and comprehensive
            coverage.
          </p>
        </div>

        {/* Features Grid */}
        <Suspense
          fallback={
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="skeleton h-80 rounded-2xl" />
                ))}
            </div>
          }
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                index={index}
              />
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default KeyFeaturesGrid;
