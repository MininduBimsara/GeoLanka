import React from "react";
import { motion } from "framer-motion";
import { Database, Zap, GitBranch, Globe2 } from "lucide-react";

const IntegrationsSection = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Geometric background shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-stone-200 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-gray-800">
              Seamless Data{" "}
              <span className="text-emerald-700">Integration</span>
            </h2>
            <p className="text-xl lg:text-2xl font-light text-gray-600 max-w-3xl mx-auto">
              Connect with tools and systems you already use.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Integration Cards */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Database className="w-8 h-8 text-emerald-700" />
            </div>
            <h3 className="font-serif font-bold text-xl mb-2 text-gray-800">
              GIS Export
            </h3>
            <p className="text-gray-600 mb-4">
              Export to QGIS, ArcGIS, or Google Earth with full compatibility.
            </p>
            <div className="flex space-x-2">
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                GeoJSON
              </span>
              <span className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-xs font-medium">
                KML
              </span>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-emerald-700" />
            </div>
            <h3 className="font-serif font-bold text-xl mb-2 text-gray-800">
              API Support
            </h3>
            <p className="text-gray-600 mb-4">
              Connect with government registries and external systems.
            </p>
            <div className="flex space-x-2">
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                REST API
              </span>
              <span className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-xs font-medium">
                WebHooks
              </span>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <GitBranch className="w-8 h-8 text-emerald-700" />
            </div>
            <h3 className="font-serif font-bold text-xl mb-2 text-gray-800">
              Multiple Formats
            </h3>
            <p className="text-gray-600 mb-4">
              Export in industry-standard formats for universal compatibility.
            </p>
            <div className="flex space-x-2">
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                Shapefile
              </span>
              <span className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-xs font-medium">
                CSV
              </span>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Globe2 className="w-8 h-8 text-emerald-700" />
            </div>
            <h3 className="font-serif font-bold text-xl mb-2 text-gray-800">
              Future-Ready
            </h3>
            <p className="text-gray-600 mb-4">
              Ready for cross-border compliance (EUDR, SDGs, etc.).
            </p>
            <div className="flex space-x-2">
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                EUDR
              </span>
              <span className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-xs font-medium">
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
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl mr-4">
            View API Documentation
          </button>
          <button className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-medium hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200">
            Contact Integration Team
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
