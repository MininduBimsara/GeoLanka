"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, ArrowRight, Map, Compass } from "lucide-react";

interface HeroProps {
  onExploreClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
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

  const float = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
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
    <section className="relative min-h-screen overflow-hidden">
      {/* Map Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&h=1200&fit=crop')",
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Geometric Background Overlays */}
      <div className="absolute inset-0">
        {/* Left emerald section */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-800/80 via-emerald-700/75 to-emerald-900/80"
          style={{
            clipPath: "polygon(0 0, 60% 0, 40% 100%, 0 100%)",
          }}
        />

        {/* Right stone section */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-stone-100/85 via-stone-200/80 to-stone-300/85"
          style={{
            clipPath: "polygon(40% 0, 100% 0, 100% 100%, 20% 100%)",
          }}
        />

        {/* Additional accent overlays */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-emerald-600/30 to-transparent"
          style={{
            clipPath: "polygon(0 50%, 30% 0, 50% 30%, 10% 100%)",
          }}
        />
      </div>

      {/* Central Logo and Branding */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          {/* Logo */}
          <motion.div className="mb-6 flex justify-center" {...logoFloat}>
            <div className="relative">
              {/* Outer ring */}
              <div className="w-32 h-32 border-4 border-white/60 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm shadow-2xl">
                {/* Inner logo */}
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center shadow-lg">
                  <div className="relative">
                    <MapPin
                      className="w-10 h-10 text-white"
                      strokeWidth={2.5}
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-stone-300 rounded-full flex items-center justify-center">
                      <Compass className="w-2.5 h-2.5 text-emerald-800" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/40 rounded-full"></div>
              <div className="absolute -bottom-1 -left-3 w-4 h-4 bg-emerald-600/80 rounded-full"></div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-7xl lg:text-8xl font-serif font-bold text-white mb-4 tracking-wide drop-shadow-lg"
            style={{ fontFamily: "Playfair Display, serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            GeoLanka
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="flex items-center justify-center space-x-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="h-px w-12 bg-white/60"></div>
            <p className="text-lg font-light text-white/90 tracking-widest uppercase">
              H O L D I N G S
            </p>
            <div className="h-px w-12 bg-white/60"></div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Mapping the future of Sri Lanka, one location at a time
          </motion.p>
        </motion.div>
      </div>

      {/* Right Side - Phone Mockup */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Left Side - Empty for clean layout */}
          <div></div>

          {/* Right Side - Phone Mockup */}
          <motion.div
            className="flex justify-center lg:justify-end"
            {...slideInRight}
          >
            <motion.div
              className="relative w-80 h-[600px] rounded-[3rem] shadow-2xl bg-gradient-to-b from-gray-100 to-gray-200"
              style={{
                border: "8px solid #374151",
              }}
              {...float}
            >
              {/* Phone Screen */}
              <div className="w-full h-full rounded-[2.5rem] relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
                {/* Phone UI Content */}
                <div className="absolute inset-0">
                  {/* Status Bar */}
                  <div className="px-6 py-3 flex items-center justify-between text-white text-sm">
                    <span className="font-medium">20:09</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex space-x-1">
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                        <div className="w-1 h-3 bg-white opacity-50 rounded-full"></div>
                      </div>
                      <div className="w-6 h-3 border border-white rounded-sm">
                        <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="px-6 py-4 flex items-center justify-between text-white">
                    <ArrowRight className="w-6 h-6 rotate-180" />
                    <span className="font-semibold">username</span>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full mx-0.5"></div>
                      <div className="w-1 h-1 bg-white rounded-full mx-0.5"></div>
                      <div className="w-1 h-1 bg-white rounded-full mx-0.5"></div>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="px-6 pt-8 pb-6 h-full">
                    <div
                      className="w-full h-96 rounded-2xl relative overflow-hidden shadow-xl"
                      style={{
                        backgroundImage: `linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.9)), 
                                        linear-gradient(45deg, #f3f4f6, #e5e7eb)`,
                      }}
                    >
                      {/* Content overlay */}
                      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                        {/* Logo in phone */}
                        <motion.div className="mb-6" {...logoFloat}>
                          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <MapPin className="w-8 h-8 text-white" />
                          </div>
                        </motion.div>

                        {/* Title in phone */}
                        <h3 className="text-3xl font-serif font-bold text-white mb-2 tracking-wide">
                          GeoLanka
                        </h3>

                        <div className="flex items-center space-x-2 mb-4">
                          <div className="h-px w-8 bg-white opacity-60"></div>
                          <span className="text-sm text-white opacity-80 tracking-widest uppercase">
                            Mapping
                          </span>
                          <div className="h-px w-8 bg-white opacity-60"></div>
                        </div>

                        <p className="text-white text-sm opacity-90 max-w-xs leading-relaxed">
                          Advanced geospatial solutions for Sri Lanka
                        </p>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-12 h-12 border border-white border-opacity-30 rounded-full"></div>
                      <div className="absolute bottom-6 left-6 w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
                      <div className="absolute top-1/2 left-4 w-2 h-16 bg-white bg-opacity-20 rounded-full transform -rotate-12"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-32 right-32 w-40 h-40 bg-emerald-400/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-stone-300/20 rounded-full blur-lg"></div>
    </section>
  );
};

export default Hero;
