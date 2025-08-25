"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/usePerformanceOptimizations";

interface HeroProps {
  onExploreClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [ref, isInView] = useInView({ once: true });

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-black"
      ref={ref}
    >
      {/* Optimized Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Earth.png" // Converted from Earth.png
          alt="Earth from space showing geographical data"
          fill
          priority // Critical for LCP
          quality={75} // Optimized quality
          sizes="100vw"
          className="object-cover scale-110 brightness-75 contrast-110"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />

        {/* Optimized gradient overlays using CSS instead of multiple divs */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-blue-900/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Optimized Stars - Reduced from 50 to 20 for better performance */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full pulse-optimized"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-20 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          {/* Centered Content - Using optimized CSS animations */}
          <div
            className={`space-y-8 text-center ${
              isInView ? "stagger-children" : ""
            }`}
          >
            {/* Main Headline - Optimized gradient text */}
            <h1 className="text-5xl lg:text-7xl font-sans font-bold text-white leading-tight">
              <span className="gradient-text-animate">
                Think better with GeoLanka
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Never miss a location, insight or connection. Advanced geo-mapping
              that transforms how you explore and understand our world.
            </p>

            {/* CTA Button - CSS hover effects instead of Framer Motion */}
            <div className="pt-4">
              <button
                onClick={onExploreClick}
                className="group btn-hover bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl flex items-center space-x-3 mx-auto"
              >
                <span>Let's Explore</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Feature Pills - Optimized animations */}
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <div className="w-2 h-2 bg-emerald-400 rounded-full pulse-optimized"></div>
                <span className="text-sm text-white font-medium">
                  Real-time Data
                </span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <div className="w-2 h-2 bg-emerald-300 rounded-full pulse-optimized"></div>
                <span className="text-sm text-white font-medium">
                  AI-Powered
                </span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full pulse-optimized"></div>
                <span className="text-sm text-white font-medium">
                  Global Coverage
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-5" />
    </section>
  );
};

export default Hero;
