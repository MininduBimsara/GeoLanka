import React from "react";
import { motion } from "framer-motion";
import { Globe, Eye, Shield, Settings, AlertTriangle } from "lucide-react";

const WebDashboardSection = () => {
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

  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Large geometric shapes with blur */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-stone-300 rounded-full blur-3xl opacity-40"></div>

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-emerald-50 rounded-xl p-6 h-80">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-emerald-600 h-8 rounded"></div>
                    <div className="bg-stone-300 h-8 rounded"></div>
                    <div className="bg-stone-300 h-8 rounded"></div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-100 to-stone-100 rounded-lg h-48 flex items-center justify-center">
                    <Globe className="w-16 h-16 text-emerald-700" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-emerald-600 p-4 rounded-full shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-1 lg:order-2 text-gray-800 space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
                Interactive Mapping &<br />
                <span className="text-emerald-700">
                  Compliance at Your Fingertips
                </span>
              </h2>
              <p className="text-xl lg:text-2xl font-light text-gray-600">
                Centralized dashboard for smarter land monitoring.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Eye className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">
                    Real-time Visualization
                  </h3>
                  <p className="text-gray-600">
                    View real-time maps with customizable layers (flood zones,
                    protected forests).
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">
                    Instant Compliance
                  </h3>
                  <p className="text-gray-600">
                    Detect overlaps with restricted or protected areas
                    instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Settings className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">
                    User Management
                  </h3>
                  <p className="text-gray-600">
                    Manage users, permissions, and regions from one place.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <AlertTriangle className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">
                    Smart Alerts
                  </h3>
                  <p className="text-gray-600">
                    Generate alerts for potential compliance issues.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.button
              variants={fadeInUp}
              className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ y: -2 }}
            >
              Explore Dashboard
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebDashboardSection;
