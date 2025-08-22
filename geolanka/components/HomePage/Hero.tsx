"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, ArrowRight, Map, Compass } from "lucide-react";

interface HeroProps {
  onExploreClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1.2, ease: "easeOut", delay: 0.2 },
  };

  const globeRotation = {
    animate: {
      rotateY: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const pinFloat = {
    animate: (i: number) => ({
      y: [0, -15, 0],
      transition: {
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.3,
      },
    }),
  };

  const logoFloat = {
    animate: {
      y: [-5, 5, -5],
      rotate: [0, 2, 0, -2, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden transition-colors duration-300">
      {/* Gradient Background inspired by honey design */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 dark:from-[#0A0A0A] via-white dark:via-gray-800 to-blue-50 dark:to-[#0A0A0A] transition-colors duration-300" />

      {/* Map Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 dark:opacity-20 transition-opacity duration-300"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&h=1200&fit=crop')",
        }}
      />

      {/* Geometric Background Overlays */}
      <div className="absolute inset-0">
        {/* Left emerald section */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 dark:from-emerald-600/20 via-emerald-500/15 dark:via-emerald-700/15 to-emerald-600/20 dark:to-emerald-800/20 transition-colors duration-300"
          style={{
            clipPath: "polygon(0 0, 60% 0, 40% 100%, 0 100%)",
          }}
        />

        {/* Right section */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-100/40 dark:from-gray-700/40 via-white/30 dark:via-gray-800/30 to-emerald-100/40 dark:to-gray-700/40 transition-colors duration-300"
          style={{
            clipPath: "polygon(40% 0, 100% 0, 100% 100%, 20% 100%)",
          }}
        />

        {/* Additional accent overlays */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-emerald-400/10 dark:from-emerald-600/10 to-transparent transition-colors duration-300"
          style={{
            clipPath: "polygon(0 50%, 30% 0, 50% 30%, 10% 100%)",
          }}
        />
      </div>
      <div className="relative z-20 container mx-auto px-6 lg:px-8 py-12 lg:py-20">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Headline */}
            <motion.h1
              className="text-5xl lg:text-7xl font-serif font-bold text-gray-800 dark:text-white leading-tight transition-colors duration-300"
              style={{ fontFamily: "Playfair Display, serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              Explore the World at Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Fingertips
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl font-light transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Advanced geo-mapping platform delivering real-time location data,
              global insights, and precision mapping solutions for Sri Lanka and
              beyond.
            </motion.p>

            {/* Features List */}
            <motion.div
              className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="font-medium text-sm">Real-time Data</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="font-medium text-sm">Sub-meter Accuracy</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="font-medium text-sm">AI-Powered Insights</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={onExploreClick}
                className="group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start Exploring</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-serif font-bold text-emerald-600 dark:text-emerald-400 transition-colors duration-300">
                  99.9%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">
                  Accuracy
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-serif font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">
                  24/7
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">
                  Real-time
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-serif font-bold text-purple-600 dark:text-purple-400 transition-colors duration-300">
                  1M+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">
                  Locations
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Globe */}
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            {/* Main Globe Container */}
            <div className="relative">
              {/* 3D Globe */}
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full shadow-2xl dark:shadow-gray-900/50 transition-shadow duration-300"
                style={{
                  background: `
                    radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 50%),
                    linear-gradient(135deg, #3B82F6 0%, #10B981 30%, #059669 70%, #047857 100%)
                  `,
                  backgroundSize: "100% 100%, 200% 200%",
                }}
                {...globeRotation}
              >
                {/* Globe Surface Details */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  {/* Continents overlay */}
                  <div className="absolute inset-0 opacity-40">
                    <div className="absolute top-1/4 left-1/3 w-12 h-10 bg-emerald-800 dark:bg-emerald-700 rounded-full transform -rotate-12 transition-colors duration-300"></div>
                    <div className="absolute top-1/2 right-1/4 w-10 h-16 bg-emerald-800 dark:bg-emerald-700 rounded-full transform rotate-45 transition-colors duration-300"></div>
                    <div className="absolute bottom-1/3 left-1/4 w-16 h-6 bg-emerald-800 dark:bg-emerald-700 rounded-full transition-colors duration-300"></div>
                    <div className="absolute top-1/3 right-1/3 w-6 h-12 bg-emerald-800 dark:bg-emerald-700 rounded-full transform -rotate-30 transition-colors duration-300"></div>
                    <div className="absolute bottom-1/4 right-1/2 w-8 h-8 bg-emerald-800 dark:bg-emerald-700 rounded-full transition-colors duration-300"></div>
                  </div>

                  {/* Latitude/Longitude lines */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white transform"></div>
                    <div className="absolute top-1/4 left-0 right-0 h-px bg-white transform -rotate-6"></div>
                    <div className="absolute bottom-1/4 left-0 right-0 h-px bg-white transform rotate-6"></div>
                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white"></div>
                    <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white transform"></div>
                    <div className="absolute top-0 bottom-0 right-1/4 w-px bg-white transform"></div>
                  </div>

                  {/* Gloss effect */}
                  <div className="absolute top-6 left-6 w-20 h-20 bg-white rounded-full opacity-30 blur-xl"></div>
                </div>

                {/* Globe shadow */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-72 h-6 bg-gray-900/20 dark:bg-black/30 rounded-full blur-xl transition-colors duration-300"></div>
              </motion.div>

              {/* Floating Map Pins */}
              {[...Array(8)].map((_, i) => {
                const positions = [
                  { top: "15%", left: "25%" },
                  { top: "35%", right: "20%" },
                  { bottom: "30%", left: "15%" },
                  { top: "55%", right: "25%" },
                  { top: "20%", right: "35%" },
                  { bottom: "35%", right: "15%" },
                  { top: "65%", left: "35%" },
                  { bottom: "15%", left: "55%" },
                ];

                return (
                  <motion.div
                    key={i}
                    className="absolute z-10"
                    style={positions[i]}
                    custom={i}
                    variants={pinFloat}
                    animate="animate"
                  >
                    <div className="relative">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-red-500 dark:bg-red-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-200 transition-colors duration-300">
                        <MapPin
                          className="w-3 h-3 lg:w-4 lg:h-4 text-white"
                          strokeWidth={2.5}
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500/40 dark:bg-red-400/40 rounded-full blur-sm transition-colors duration-300"></div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Orbital rings */}
              <motion.div
                className="absolute inset-0 border-2 border-emerald-400/30 dark:border-emerald-500/30 rounded-full transition-colors duration-300"
                style={{ transform: "scale(1.2)" }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute inset-0 border-2 border-blue-400/20 dark:border-blue-500/20 rounded-full transition-colors duration-300"
                style={{ transform: "scale(1.4) rotateX(60deg)" }}
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Floating icons around globe */}
              <motion.div
                className="absolute -top-4 -left-4"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-8 h-8 bg-white/90 dark:bg-gray-100/90 rounded-full flex items-center justify-center shadow-lg dark:shadow-gray-900/20 transition-colors duration-300">
                  <Navigation className="w-4 h-4 text-emerald-600 dark:text-emerald-700" />
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="w-8 h-8 bg-white/90 dark:bg-gray-100/90 rounded-full flex items-center justify-center shadow-lg dark:shadow-gray-900/20 transition-colors duration-300">
                  <Compass className="w-4 h-4 text-blue-600 dark:text-blue-700" />
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/4 -right-8"
                animate={{
                  x: [0, 10, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <div className="w-8 h-8 bg-white/90 dark:bg-gray-100/90 rounded-full flex items-center justify-center shadow-lg dark:shadow-gray-900/20 transition-colors duration-300">
                  <Map className="w-4 h-4 text-purple-600 dark:text-purple-700" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wavy Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 lg:h-20 fill-white dark:fill-[#0A0A0A] transition-colors duration-300"
        >
          <path d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-2 h-20 bg-emerald-400/20 dark:bg-emerald-500/20 rounded-full blur-sm transform rotate-12 transition-colors duration-300"></div>
      <div className="absolute bottom-1/3 left-10 w-2 h-16 bg-blue-400/20 dark:bg-blue-500/20 rounded-full blur-sm transform -rotate-12 transition-colors duration-300"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-400/10 dark:bg-emerald-500/10 rounded-full blur-xl transition-colors duration-300"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-2xl transition-colors duration-300"></div>

      {/* Additional honey-inspired decorative elements */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-emerald-400 dark:bg-emerald-500 rounded-full opacity-60 dark:opacity-40 transition-all duration-300"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-blue-400 dark:bg-blue-500 rounded-full opacity-40 dark:opacity-30 transition-all duration-300"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 dark:bg-purple-500 rounded-full opacity-50 dark:opacity-35 transition-all duration-300"></div>
    </section>
  );
};

export default Hero;
