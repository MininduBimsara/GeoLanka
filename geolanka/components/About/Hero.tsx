"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Users } from "lucide-react";

const AboutHeroSection: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 1, delay: 0.2 },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 1, delay: 0.4 },
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=1200&fit=crop')",
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Geometric Background Overlays */}
      <div className="absolute inset-0">
        {/* Left emerald section */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-800/85 via-emerald-700/80 to-emerald-900/85"
          style={{
            clipPath: "polygon(0 0, 65% 0, 45% 100%, 0 100%)",
          }}
        />

        {/* Right stone section */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-stone-100/90 via-stone-200/85 to-stone-300/90"
          style={{
            clipPath: "polygon(45% 0, 100% 0, 100% 100%, 25% 100%)",
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

      {/* Background Decorative Elements */}
      <div
        className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-emerald-600 to-emerald-700 opacity-20 transform rotate-45"
        style={{
          clipPath:
            "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
        }}
      />
      <div
        className="absolute bottom-32 left-32 w-32 h-32 bg-stone-200 opacity-25 transform -rotate-12"
        style={{
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            className="text-white lg:text-gray-800 space-y-8"
            {...slideInLeft}
          >
            <div className="space-y-6">
              <motion.div
                className="inline-flex items-center space-x-3 bg-white/20 lg:bg-emerald-100 backdrop-blur-sm px-6 py-3 rounded-full"
                {...fadeInUp}
              >
                <MapPin className="w-5 h-5 text-white lg:text-emerald-700" />
                <span className="text-white lg:text-emerald-700 font-medium">
                  About GeoLanka
                </span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-serif font-bold leading-tight">
                Mapping Sri Lanka's
                <span className="text-emerald-400 lg:text-emerald-700 block">
                  Digital Future
                </span>
              </h1>

              <p className="text-xl text-white/90 lg:text-gray-600 leading-relaxed max-w-lg">
                We're a dedicated team of geospatial experts building
                cutting-edge mapping solutions specifically designed for Sri
                Lankan geography and governance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="bg-white lg:bg-emerald-600 text-emerald-700 lg:text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <span className="flex items-center space-x-3">
                  <span>Our Mission</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.button>
              <motion.button
                className="bg-white/20 lg:bg-white text-white lg:text-gray-800 px-8 py-4 rounded-full text-lg font-medium border-2 border-white/30 lg:border-gray-200 backdrop-blur-sm hover:bg-white/30 lg:hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ y: -2 }}
              >
                Meet the Team
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Statistics Card */}
          <motion.div className="relative lg:text-gray-800" {...slideInRight}>
            <div className="relative group h-96 rounded-2xl overflow-hidden shadow-2xl">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop')",
                }}
              />

              {/* Geometric Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />

              {/* Additional geometric shapes */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-white/15 to-transparent"
                style={{
                  clipPath: "polygon(0 0, 50% 0, 30% 100%, 0 100%)",
                }}
              />

              <div
                className="absolute inset-0 bg-gradient-to-bl from-transparent to-white/10"
                style={{
                  clipPath: "polygon(70% 0, 100% 0, 100% 70%, 85% 100%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                {/* Top section */}
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-8 h-8 border-2 border-stone-300/50 rounded-full" />
                </div>

                {/* Main content */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-4xl lg:text-5xl font-serif font-bold text-white">
                      85+
                    </div>
                    <h3 className="text-xl font-serif font-bold text-stone-100">
                      Team Members
                    </h3>
                  </div>
                  <p className="text-stone-200 text-sm leading-relaxed">
                    Distributed across 18 countries, working together to
                    digitize Sri Lanka's land management systems with local
                    expertise and international standards.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
