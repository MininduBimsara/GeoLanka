"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, ArrowRight } from "lucide-react";

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

  const pulse = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.7, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-50">
      {/* Geometric Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-900 to-stone-200"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
          background: `linear-gradient(135deg, 
            #3B82F6 0%, 
            #3B82F6 35%, 
            #1E3A8A 35%, 
            #1E3A8A 70%, 
            #ECE5D5 70%, 
            #ECE5D5 100%)`,
        }}
      />

      {/* Background Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-300 bg-opacity-20 rounded-full blur-2xl" />

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Left Side - Text Content */}
          <motion.div className="space-y-8" {...fadeInUp}>
            {/* Logo and Title */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-blue-500" />
                </div>
                <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white">
                  GeoLanka
                </h1>
              </div>

              {/* Tagline */}
              <p className="text-xl lg:text-2xl text-blue-50 font-medium leading-relaxed max-w-lg">
                Mapping the future of Sri Lanka, one location at a time
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <motion.button
                className="group bg-blue-400 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-out"
                onClick={onExploreClick}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center space-x-2">
                  <span>Explore Maps</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </div>

            {/* Feature Points */}
            <div className="pt-8 space-y-4">
              <div className="flex items-center space-x-3 text-white text-opacity-90">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span className="font-medium">Real-time location tracking</span>
              </div>
              <div className="flex items-center space-x-3 text-white text-opacity-90">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span className="font-medium">
                  Comprehensive Sri Lankan coverage
                </span>
              </div>
              <div className="flex items-center space-x-3 text-white text-opacity-90">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span className="font-medium">Advanced route optimization</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Phone Mockup */}
          <motion.div
            className="flex justify-center lg:justify-end"
            {...slideInRight}
          >
            <motion.div
              className="relative w-80 h-[600px] rounded-[3rem] shadow-2xl"
              style={{
                background: "linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%)",
                border: "8px solid #1e293b",
              }}
              {...float}
            >
              {/* Phone Screen */}
              <div
                className="w-full h-full rounded-[2.5rem] relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(145deg, #0f172a 0%, #1e293b 100%)",
                }}
              >
                {/* Background Landscape */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-600 to-emerald-400">
                  {/* Mountains */}
                  <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-gray-700 to-gray-500 opacity-80">
                    <div
                      className="absolute bottom-0 w-full h-full"
                      style={{
                        clipPath:
                          "polygon(0 100%, 20% 60%, 35% 40%, 50% 65%, 70% 30%, 85% 55%, 100% 45%, 100% 100%)",
                      }}
                    />
                  </div>

                  {/* Coastline */}
                  <div
                    className="absolute bottom-0 w-full h-24 bg-blue-800"
                    style={{
                      clipPath:
                        "polygon(0 70%, 25% 60%, 50% 80%, 75% 50%, 100% 70%, 100% 100%, 0 100%)",
                    }}
                  />
                </div>

                {/* Map Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500 from-opacity-10 to-blue-900 to-opacity-20 backdrop-blur-sm">
                  {/* Top Navigation Bar */}
                  <div className="bg-white bg-opacity-95 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-800">
                        GeoLanka
                      </span>
                    </div>
                    <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
                  </div>

                  {/* Map Markers */}
                  <div className="absolute top-32 left-16">
                    <motion.div
                      className="w-8 h-8 bg-red-500 rounded-full shadow-lg flex items-center justify-center"
                      {...pulse}
                    >
                      <MapPin className="w-5 h-5 text-white" />
                    </motion.div>
                    <div className="bg-white rounded-lg shadow-lg px-3 py-2 mt-2 text-xs font-medium">
                      Sigiriya
                    </div>
                  </div>

                  <div className="absolute top-48 right-20">
                    <div className="w-6 h-6 bg-blue-500 rounded-full shadow-lg"></div>
                    <div className="bg-white rounded-lg shadow-lg px-2 py-1 mt-1 text-xs">
                      Colombo
                    </div>
                  </div>

                  <div className="absolute bottom-40 left-12">
                    <div className="w-5 h-5 bg-green-500 rounded-full shadow-lg"></div>
                  </div>

                  {/* Navigation Route */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 320 584"
                  >
                    <motion.path
                      d="M60 200 Q 120 180 180 220 T 280 250"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8,4"
                      opacity="0.8"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                    />
                  </svg>

                  {/* Bottom UI Panel */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm rounded-t-3xl p-6"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-800">
                          Route to Sigiriya
                        </h3>
                        <span className="text-sm text-blue-600 font-medium">
                          2h 45min
                        </span>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Navigation className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">
                              Fastest Route
                            </p>
                            <p className="text-xs text-gray-500">
                              Via A1 Highway
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-500 rounded-xl py-3 text-center cursor-pointer hover:bg-blue-600 transition-colors">
                          <span className="text-white font-semibold">
                            Start Navigation
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
