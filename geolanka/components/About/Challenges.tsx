"use client";

import { motion } from "framer-motion";

const challenges = [
  {
    title: "Legacy Systems",
    description: "Outdated mapping infrastructure limiting accuracy and speed",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
  },
  {
    title: "Limited Accessibility",
    description: "Geographic data restricted to specialized users only",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=100&fit=crop",
  },
  {
    title: "Data Inconsistency",
    description: "Fragmented mapping standards creating compatibility issues",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop",
  },
  {
    title: "Scalability Issues",
    description: "Traditional solutions unable to handle growing demands",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=100&h=100&fit=crop",
  },
];

const challengeImpact = [
  { label: "System modernization needed", value: "60%" },
  { label: "Performance improvement target", value: "85%" },
  { label: "Data accuracy achieved", value: "99%" },
  { label: "Platform reliability score", value: "97%" },
];

export function ChallengesSection() {
  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full border border-emerald-200">
                <span className="font-medium text-sm tracking-wide uppercase">
                  Technology Challenges
                </span>
              </div>

              <div>
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
                  Overcoming Traditional Mapping Limitations
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Addressing critical gaps in existing geospatial infrastructure
                  and outdated mapping technologies.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                  className="group"
                >
                  <div className="bg-emerald-50 backdrop-blur-md rounded-lg p-4 border border-emerald-200 hover:bg-emerald-100 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={challenge.image}
                          alt={challenge.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-800 text-lg">
                        {challenge.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">
                Challenge Impact
              </h4>
              <div className="space-y-6">
                {challengeImpact.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex justify-between items-start"
                  >
                    <span className="font-medium text-gray-600">
                      {item.label}:
                    </span>
                    <span className="text-right text-sm font-semibold text-gray-800">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
