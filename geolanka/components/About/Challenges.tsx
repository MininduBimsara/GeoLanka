"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Database,
  Clock,
  Shield,
  TrendingDown,
} from "lucide-react";

const AboutChallengesSection: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const challengeCards = [
    {
      icon: <Database className="w-6 h-6 text-white" />,
      title: "Fragmented Systems",
      description:
        "Data scattered across 15+ departments, often outdated or inaccessible",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=600&fit=crop",
      stat: "60%",
      statLabel: "Data Silos",
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Manual Processes",
      description: "40+ hours needed for single compliance report generation",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=600&fit=crop",
      stat: "40hrs",
      statLabel: "Manual Work",
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-white" />,
      title: "Delayed Decisions",
      description: "Critical environmental and development decisions postponed",
      image:
        "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=500&h=600&fit=crop",
      stat: "30%",
      statLabel: "Delays",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Full Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=1600&h=1200&fit=crop')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Geometric overlays */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-red-500/85 to-orange-500/85"
        style={{
          clipPath: "polygon(0 0, 70% 0, 50% 100%, 0 100%)",
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-l from-stone-100/95 to-white/95"
        style={{
          clipPath: "polygon(50% 0, 100% 0, 100% 100%, 30% 100%)",
        }}
      />

      {/* Background Decorative Elements */}
      <div
        className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-red-600 to-orange-600 opacity-20 transform rotate-45"
        style={{
          clipPath:
            "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
        }}
      />
      <div
        className="absolute bottom-32 left-32 w-32 h-32 bg-stone-200 opacity-25 transform -rotate-12"
        style={{
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="text-white space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn}>
              <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                <AlertTriangle className="w-5 h-5 text-white" />
                <span className="text-white font-medium">
                  Critical Challenges
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
                Problems We're
                <span className="text-orange-300 block">Solving Today</span>
              </h2>

              <p className="text-xl text-white/90 leading-relaxed">
                Sri Lanka faces urgent geospatial data challenges that demand
                immediate technological intervention and systematic solutions.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="grid gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Environmental Risks</h3>
                  <p className="text-sm text-white/80">
                    Unmonitored deforestation and climate threats without
                    real-time tracking systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Compliance Gaps</h3>
                  <p className="text-sm text-white/80">
                    Missing international standards for export compliance and
                    sustainability reporting.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.button
              variants={fadeIn}
              className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-medium hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ y: -2 }}
            >
              See Our Solution
            </motion.button>
          </motion.div>

          {/* Right Content - Challenge Cards Grid */}
          <motion.div
            className="lg:text-gray-800"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-6">
              {challengeCards.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="relative group h-48 rounded-2xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${challenge.image})` }}
                  />

                  {/* Geometric Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />

                  {/* Additional geometric shape */}
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"
                    style={{
                      clipPath: "polygon(0 0, 60% 0, 40% 100%, 0 100%)",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex justify-between items-center">
                    {/* Left content */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          {challenge.icon}
                        </div>
                        <h3 className="text-lg font-serif font-bold text-white">
                          {challenge.title}
                        </h3>
                      </div>
                      <p className="text-stone-100 text-sm leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>

                    {/* Right stat */}
                    <div className="text-center ml-4">
                      <div className="text-3xl font-serif font-bold text-red-400 mb-1">
                        {challenge.stat}
                      </div>
                      <div className="text-xs text-stone-200">
                        {challenge.statLabel}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutChallengesSection;
