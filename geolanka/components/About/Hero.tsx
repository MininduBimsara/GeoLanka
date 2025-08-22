"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=1200&fit=crop')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full border border-emerald-500/20 mb-8 backdrop-blur-sm"
          >
            <span className="font-medium">GeoLanka Vision</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Sri Lanka's Geo-Intelligence Platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl lg:text-2xl text-white/90 mb-8 drop-shadow-md leading-relaxed max-w-4xl mx-auto"
          >
            Transforming land management through intelligent mapping, sustainable agriculture support, 
            and environmental protection across the Pearl of the Indian Ocean.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl">
              Explore Our Mission
            </button>
            <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg backdrop-blur-sm transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/70 flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium">Discover Our Story</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
