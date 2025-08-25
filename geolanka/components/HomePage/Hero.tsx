"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onExploreClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Earth Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-110"
          style={{
            backgroundImage: "url('/Earth.png')",
            filter: "brightness(0.7) contrast(1.1)",
          }}
        />
        {/* Updated gradient overlay with emerald tones */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-blue-900/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Animated Stars/Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-20 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          {/* Centered Content */}
          <motion.div
            className="space-y-8 text-center"
            initial="initial"
            animate="animate"
          >
            {/* Main Headline */}
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              variants={fadeInUp}
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #10b981 50%, #059669 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Think better with <span className="block">GeoLanka</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Never miss a location, insight or connection. Advanced geo-mapping
              that transforms how you explore and understand our world.
            </motion.p>

            {/* CTA Button */}
            <motion.div className="pt-4" variants={fadeInUp}>
              <motion.button
                onClick={onExploreClick}
                className="group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center space-x-3 mx-auto"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Let's Explore</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center pt-6"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-white font-medium">
                  Real-time Data
                </span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
                <span className="text-sm text-white font-medium">
                  AI-Powered
                </span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-white font-medium">
                  Global Coverage
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-5" />
    </section>
  );
};

export default Hero;
