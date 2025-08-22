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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors"
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm">{area.description}</p>
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
            className="w-full h-80 object-cover rounded-3xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
