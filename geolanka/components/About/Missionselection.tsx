"use client";

import { motion } from "framer-motion";

const focusAreas = [
  {
    title: "Agriculture",
    description: "Monitor crop areas and prevent encroachment",
    icon: "🌾",
  },
  {
    title: "Flood Management",
    description: "Identify high-risk areas for disaster preparedness",
    icon: "🌊",
  },
  {
    title: "Land Protection",
    description: "Track deforestation and protected zones",
    icon: "🌳",
  },
  {
    title: "Urban Planning",
    description: "Support agencies with development decisions",
    icon: "🏛️",
  },
];

export function MissionSection() {
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
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-300">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Empowering Sri Lanka with intelligent geo-mapping solutions for
            sustainable development
          </p>
        </motion.div>

        {/* Focus Areas Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2 transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                {area.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <img
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Team working on mapping solutions"
            className="w-full h-80 object-cover rounded-3xl shadow-xl dark:shadow-gray-900/30 transition-all duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
