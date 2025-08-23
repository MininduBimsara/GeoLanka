"use client";

import { motion } from "framer-motion";

const challenges = [
  {
    title: "Legacy Systems",
    description: "Outdated mapping infrastructure limiting accuracy and speed",
    category: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Limited Access",
    description: "Geographic data restricted to specialized users only",
    category: "Accessibility",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Data Inconsistency",
    description: "Fragmented mapping standards creating compatibility issues",
    category: "Data Quality",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Scalability Issues",
    description: "Traditional solutions unable to handle growing demands",
    category: "Performance",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
];

export function ChallengesSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 transition-colors duration-300" style={{ backgroundColor: 'var(--tw-prose-body)' }}>
      <div className="max-w-7xl mx-auto" style={{ backgroundColor: typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#0A0A0A' : '' }}>
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left side content */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-red-600 dark:text-red-400 font-medium text-sm uppercase tracking-wide mb-4">
                Technology Challenges
              </p>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 dark:text-white mb-6">
                Challenges we solve with modern solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Overcoming traditional mapping limitations through advanced
                technology and innovative approaches.
              </p>
            </motion.div>

            {/* Challenge metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
            >
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Problem Areas Addressed
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Legacy system modernization
                  </span>
                  <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                    Critical
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Data accessibility improvement
                  </span>
                  <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                    High
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Standards unification
                  </span>
                  <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                    Medium
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Scalability enhancement
                  </span>
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                    Resolved
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side masonry grid */}
          <div className="lg:col-span-2">
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* Top row - small cards */}
              <motion.div
                variants={fadeInUp}
                className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${challenges[0].image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-black/75 via-black/20 dark:via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg mb-1">
                    {challenges[0].title}
                  </h4>
                  <p className="text-xs opacity-80">
                    {challenges[0].category} • Critical Priority
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${challenges[1].image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-black/75 via-black/20 dark:via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg mb-1">
                    {challenges[1].title}
                  </h4>
                  <p className="text-xs opacity-80">
                    {challenges[1].category} • High Priority
                  </p>
                </div>
              </motion.div>

              {/* Large card spanning full width */}
              <motion.div
                variants={fadeInUp}
                className="col-span-2 relative h-64 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${challenges[2].image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-black/75 via-black/20 dark:via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="font-semibold text-2xl mb-2">
                    {challenges[2].title}
                  </h4>
                  <p className="text-sm opacity-90 mb-2">
                    {challenges[2].category} • Medium Priority
                  </p>
                  <p className="text-sm opacity-80 max-w-md">
                    {challenges[2].description} - requiring standardized
                    protocols and unified data formats.
                  </p>
                </div>
              </motion.div>

              {/* Bottom row */}
              <motion.div
                variants={fadeInUp}
                className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${challenges[3].image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-black/75 via-black/20 dark:via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg mb-1">
                    {challenges[3].title}
                  </h4>
                  <p className="text-xs opacity-80">
                    {challenges[3].category} • High Priority
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-black/75 via-black/20 dark:via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg mb-1">Security Gaps</h4>
                  <p className="text-xs opacity-80">
                    Data Security • Medium Priority
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}