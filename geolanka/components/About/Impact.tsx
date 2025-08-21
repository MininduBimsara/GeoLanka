"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Leaf, Users, Globe } from "lucide-react";

const AboutImpactSection: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariant = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute -top-20 left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative container mx-auto px-4">
        {/* Header Section */}
        <motion.div className="text-center mb-16" {...fadeIn}>
          <div className="inline-flex items-center space-x-3 bg-blue-100 px-6 py-3 rounded-full mb-6">
            <Target className="w-5 h-5 text-blue-700" />
            <span className="text-blue-700 font-medium">Our Impact</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-6">
            Why <span className="text-blue-600">This Matters</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Building essential infrastructure for sustainable development,
            environmental protection, and economic growth across Sri Lanka.
          </p>
        </motion.div>

        {/* Impact Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Environmental Protection */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            variants={cardVariant}
            whileHover={{ y: -5 }}
          >
            <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Leaf className="w-8 h-8 text-emerald-700" />
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">
              Environmental Leadership
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Real-time forest monitoring, automated deforestation alerts, and
              compliance tracking for international environmental standards.
            </p>
          </motion.div>

          {/* Farmer Empowerment */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            variants={cardVariant}
            whileHover={{ y: -5 }}
          >
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">
              Farmer Empowerment
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Empowering smallholder farmers with digital tools for land
              documentation, crop monitoring, and export compliance
              certification.
            </p>
          </motion.div>

          {/* National Development */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 md:col-span-2 lg:col-span-1"
            variants={cardVariant}
            whileHover={{ y: -5 }}
          >
            <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-indigo-700" />
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">
              National Progress
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Supporting Sri Lanka's digital transformation and sustainable
              development goals through cutting-edge geospatial technology.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Feature Card */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 items-center">
              {/* Content */}
              <div className="p-8 lg:p-12 text-white">
                <h3 className="text-3xl font-serif font-bold mb-4">
                  Building Tomorrow's Infrastructure
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Every feature we build supports Sri Lanka's journey toward
                  sustainable development, environmental stewardship, and
                  economic prosperity through technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:-translate-y-1 transition-all duration-300">
                    See Our Solutions
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-all duration-300">
                    Join Our Mission
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-64 lg:h-80">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=600&fit=crop')",
                  }}
                />
                <div className="absolute inset-0 bg-blue-900/20" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutImpactSection;
