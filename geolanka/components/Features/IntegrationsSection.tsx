"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Zap, GitBranch, Globe2 } from "lucide-react";

const IntegrationsSection = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-white dark:bg-[#0A0A0A] overflow-hidden transition-colors duration-300">
      {/* Geometric background shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-stone-200 dark:bg-gray-700 rounded-full blur-3xl opacity-50 dark:opacity-30 transition-colors duration-300"></div>
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/30 rounded-full blur-3xl opacity-40 dark:opacity-20 transition-colors duration-300"></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-gray-800 dark:text-white transition-colors duration-300">
              Seamless Data{" "}
              <span className="text-emerald-700 dark:text-emerald-400">
                Integration
              </span>
            </h2>
            <p className="text-xl lg:text-2xl font-light text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Connect with tools and systems you already use.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Integration Cards */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-gray-900/20 hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-colors duration-300">
              <Database className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />
            </div>
            <h3 className="font-serif font-bold text-xl mb-2 text-gray-800 dark:text-white transition-colors duration-300">
              GIS Export
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              Export to QGIS, ArcGIS, or Google Earth with full compatibility.
            </p>
            <div className="flex space-x-2">
              <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300">
                GeoJSON
              </span>
              <span className="bg-stone-100 dark:bg-gray-700 text-stone-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300">
                KML
              </span>
            </div>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-gray-900/20 hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-colors duration-300">
              <Zap className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />
            </div>
            <h3 className="font-serif font-bold text-xl mb-2 text-gray-800 dark:text-white transition-colors duration-300">
              API Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              Connect with government registries and external systems.
            </p>
            <div className="flex space-x-2">
              <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300">
                REST API
              </span>
              <span className="bg-stone-100 dark:bg-gray-700 text-stone-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300">
                WebHooks
              </span>
            </div>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-gray-900/20 hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-colors duration-300">
              <GitBranch className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />
            </div>
            <h3 className="font-serif font-bold text-xl mb-2 text-gray-800 dark:text-white transition-colors duration-300">
              Multiple Formats
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              Export in industry-standard formats for universal compatibility.
            </p>
            <div className="flex space-x-2">
              <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300">
                Shapefile
              </span>
              <span className="bg-stone-100 dark:bg-gray-700 text-stone-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300">
                CSV
              </span>
            </div>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-gray-900/20 hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-colors duration-300">
              <Globe2 className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />
            </div>
            <h3 className="font-serif font-bold text-xl mb-2 text-gray-800 dark:text-white transition-colors duration-300">
              Future-Ready
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              Ready for cross-border compliance (EUDR, SDGs, etc.).
            </p>
            <div className="flex space-x-2">
              <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300">
                EUDR
              </span>
              <span className="bg-stone-100 dark:bg-gray-700 text-stone-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300">
                SDGs
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl mr-4">
            View API Documentation
          </button>
          <button className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-8 py-4 rounded-full text-lg font-medium hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-600">
            Contact Integration Team
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
