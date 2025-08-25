"use client";

import { motion } from "framer-motion";

const impactAreas = [
  {
    title: "Business Growth",
    description: "New models through geospatial intelligence",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Economic Development",
    description: "Supporting tourism and technology sectors",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Smart Cities",
    description: "Foundation for intelligent urban planning",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Digital Access",
    description: "Making technology accessible to all",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

const impactStats = [
  { number: "50K+", label: "Active Users" },
  { number: "99.9%", label: "Accuracy Rate" },
  { number: "226,000", label: "Data Points" },
];

export function ImpactSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-sans font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-300">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Driving Sri Lanka's digital transformation through advanced mapping
            technology
          </p>
        </motion.div>

        {/* Impact Areas Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {impactAreas.map((impact, index) => (
            <div
              key={impact.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <img
                src={impact.image}
                alt={impact.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2 transition-colors duration-300">
                  {impact.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                  {impact.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-12 mb-16"
        >
          {impactStats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-2 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300">
            Start Your Journey to Smart Mapping
          </button>
        </motion.div>
      </div>
    </section>
  );
}
