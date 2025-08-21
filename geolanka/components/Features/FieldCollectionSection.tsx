import React from "react";
import { motion } from "framer-motion";
import { MapPin, Wifi, Languages, Users } from "lucide-react";

const FieldCollectionSection = () => {
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
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with map and geometric overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=1200&h=800&fit=crop')`,
          opacity: 0.4,
        }}
      />

      {/* Geometric overlays */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-emerald-800/85 to-emerald-900/85"
        style={{
          clipPath: "polygon(0 0, 65% 0, 45% 100%, 0 100%)",
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-l from-stone-200/90 to-stone-300/90"
        style={{
          clipPath: "polygon(45% 0, 100% 0, 100% 100%, 25% 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <motion.div
            className="text-white lg:text-gray-800 space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-4">
                Field Data Collection,
                <br />
                <span className="text-emerald-400 lg:text-emerald-700">
                  Anytime, Anywhere
                </span>
              </h1>
              <p className="text-xl lg:text-2xl font-light opacity-90">
                Web-based field collection that works offline when you need it
                most.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-600 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Offline Capability</h3>
                  <p className="text-sm opacity-80">
                    Capture coordinates, photos, and notes even in rural or
                    low-network regions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-600 p-3 rounded-full">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Auto Sync</h3>
                  <p className="text-sm opacity-80">
                    Automatic synchronization when an internet connection
                    becomes available.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-600 p-3 rounded-full">
                  <Languages className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Multi-Language</h3>
                  <p className="text-sm opacity-80">
                    Supports local languages (Sinhala/Tamil/English).
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-600 p-3 rounded-full">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">User-Friendly</h3>
                  <p className="text-sm opacity-80">
                    Designed for farmers, field officers, and surveyors.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.button
              variants={fadeInUp}
              className="bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ y: -2 }}
            >
              Start Field Collection
            </motion.button>
          </motion.div>

          {/* Web Interface Mockup */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="w-96 h-80 bg-gray-900 rounded-2xl p-3 shadow-2xl">
                <div className="w-full h-full bg-emerald-50 rounded-xl relative overflow-hidden">
                  <div className="absolute top-3 left-3 right-3">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-xs font-medium bg-white px-2 py-1 rounded">
                        GeoLanka Field
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-3 top-12 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center">
                    <MapPin className="w-20 h-20 text-white" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-xs text-gray-700 font-medium">
                        Status: Offline Ready
                      </div>
                      <div className="text-xs text-emerald-700">
                        ✓ Field data synced
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FieldCollectionSection;
