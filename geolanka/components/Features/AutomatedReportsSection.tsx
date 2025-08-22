"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, FileCheck, Building, Share2, FileText } from "lucide-react";

const AutomatedReportsSection = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden transition-colors duration-300">
      {/* Background with map */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop')`,
          opacity: 0.3,
        }}
      />

      {/* Geometric overlays - reversed */}
      <div
        className="absolute inset-0 bg-gradient-to-l from-emerald-800/85 dark:from-emerald-900/90 to-emerald-900/85 dark:to-emerald-950/90"
        style={{
          clipPath: "polygon(35% 0, 100% 0, 100% 100%, 55% 100%)",
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-stone-200/90 dark:from-gray-800/90 to-stone-300/90 dark:to-gray-700/90"
        style={{
          clipPath: "polygon(0 0, 55% 0, 75% 100%, 0 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            className="text-gray-800 dark:text-gray-200 lg:text-white space-y-8 transition-colors duration-300"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
                Instant Reports,
                <br />
                <span className="text-emerald-700 dark:text-emerald-300 lg:text-emerald-400">
                  Ready to Submit
                </span>
              </h2>
              <p className="text-xl lg:text-2xl font-light opacity-90">
                Save hours of manual report creation.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-600 dark:bg-emerald-500 p-3 rounded-full">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">One-Click Export</h3>
                  <p className="text-sm opacity-80">
                    Export to PDF, GeoJSON, or shapefiles instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-600 dark:bg-emerald-500 p-3 rounded-full">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Auto-Generated</h3>
                  <p className="text-sm opacity-80">
                    Compliance summaries for deforestation checks and protected
                    area overlaps.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-600 dark:bg-emerald-500 p-3 rounded-full">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Custom Branding</h3>
                  <p className="text-sm opacity-80">
                    Support for custom branding and government templates.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-600 dark:bg-emerald-500 p-3 rounded-full">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Easy Sharing</h3>
                  <p className="text-sm opacity-80">
                    Simple sharing with authorities or partner organizations.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.button
              variants={fadeInUp}
              className="bg-white dark:bg-gray-100 text-gray-800 dark:text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-300"
              whileHover={{ y: -2 }}
            >
              Generate Report
            </motion.button>
          </motion.div>

          {/* Report Preview */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl dark:shadow-gray-900/50 w-80 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-gray-800 dark:text-white transition-colors duration-300">
                      Compliance Report
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      Generated automatically
                    </p>
                  </div>
                  <FileText className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>

                <div className="space-y-4">
                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg border border-emerald-100 dark:border-emerald-800 transition-colors duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                        Protected Areas
                      </span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold transition-colors duration-300">
                        ✓ Clear
                      </span>
                    </div>
                  </div>

                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg border border-emerald-100 dark:border-emerald-800 transition-colors duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                        Forest Coverage
                      </span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold transition-colors duration-300">
                        95.2%
                      </span>
                    </div>
                  </div>

                  <div className="bg-stone-100 dark:bg-gray-700 p-4 rounded-lg border border-stone-200 dark:border-gray-600 transition-colors duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                        Data Points
                      </span>
                      <span className="text-gray-700 dark:text-gray-200 font-semibold transition-colors duration-300">
                        1,247
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600 transition-colors duration-300">
                  <div className="flex space-x-2">
                    <div className="bg-emerald-600 dark:bg-emerald-500 text-white px-4 py-2 rounded-full text-xs font-medium">
                      PDF
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full text-xs font-medium transition-colors duration-300">
                      GeoJSON
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full text-xs font-medium transition-colors duration-300">
                      KML
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutomatedReportsSection;
