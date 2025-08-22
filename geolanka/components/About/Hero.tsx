"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full border border-emerald-200 mb-8"
        >
          <span className="font-medium text-sm uppercase tracking-wide">
            GeoLanka Platform
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-6xl lg:text-8xl font-serif font-bold text-gray-800 mb-8 leading-tight">
            GeoLanka Geo-Mapping
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            An all-in-one solution for intelligent land management and
            environmental protection across Sri Lanka
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
            Get Started
          </button>
          <button className="border-2 border-gray-300 text-gray-700 hover:border-emerald-600 hover:text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors">
            Learn More
          </button>
        </motion.div>

        {/* Simple Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="GeoLanka Platform"
            className="w-full h-96 object-cover rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
