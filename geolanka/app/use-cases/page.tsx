"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  TreePine,
  Wheat,
  Building,
  ArrowRight,
  MapPin,
  Satellite,
  BarChart3,
  Users,
} from "lucide-react";
import Head from "next/head";

const UseCasesPage = () => {
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

  const useCases = [
    {
      id: 1,
      title: "Flood-Prone Areas",
      icon: Shield,
      problem:
        "Many regions experience recurring floods, but risk maps are outdated or inaccessible.",
      solution:
        "Use satellite imagery & field data to map flood-prone zones and monitor changes over time.",
      impact:
        "Enables disaster management authorities to plan evacuation routes and minimize damage.",
      bgImage:
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "emerald",
    },
    {
      id: 2,
      title: "Deforestation Monitoring",
      icon: TreePine,
      problem:
        "Illegal logging and land clearing often go undetected until too late.",
      solution:
        "Automated detection of forest cover changes via geospatial data and alerts.",
      impact:
        "Early warnings for forest departments to act before irreversible damage occurs.",
      bgImage:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "green",
    },
    {
      id: 3,
      title: "Agricultural Zoning",
      icon: Wheat,
      problem:
        "Misallocation of land leads to soil degradation and reduced yields.",
      solution:
        "Map soil quality, crop patterns, and recommend optimized zoning.",
      impact:
        "Helps farmers and policymakers increase sustainable agricultural output.",
      bgImage:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "yellow",
    },
    {
      id: 4,
      title: "Urban Expansion",
      icon: Building,
      problem:
        "Rapid, unplanned urbanization causes encroachment on wetlands and forests.",
      solution:
        "Visualize urban growth over time and forecast expansion zones.",
      impact: "Informs zoning laws and sustainable city development plans.",
      bgImage:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "blue",
    },
  ];

  const testimonial = {
    quote:
      "GeoLanka's flood mapping capabilities helped us reduce emergency response time by 40% and saved countless lives during the 2024 monsoon season.",
    author: "Dr. Priya Jayasuriya",
    role: "Director, Disaster Management Centre",
    organization: "Ministry of Defence",
  };

  const successMetrics = [
    {
      number: "150+",
      label: "Active Projects",
      description: "Across government and private sector",
    },
    {
      number: "25M",
      label: "Data Points",
      description: "Processed monthly for insights",
    },
    {
      number: "99.9%",
      label: "Accuracy Rate",
      description: "In geospatial predictions",
    },
    {
      number: "40%",
      label: "Response Time",
      description: "Improvement in emergency situations",
    },
  ];

  return (
    <>
      <Head>
        <title>Use Cases - Real-World Applications | GeoLanka</title>
        <meta
          name="description"
          content="From flood preparedness to urban planning, our platform helps Sri Lanka make smarter, data-driven land management decisions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gray-50 dark:bg-[#0a0c0b] transition-colors duration-300">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          {/* Background with map overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-5"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
            }}
          />

          {/* Geometric background shapes */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-gradient-to-br from-emerald-800/5 to-emerald-900/10 dark:from-emerald-600/10 dark:to-emerald-700/15"
              style={{
                clipPath: "polygon(0 0, 70% 0, 50% 100%, 0 100%)",
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-bl from-stone-200/20 to-stone-300/10 dark:from-gray-700/20 dark:to-gray-600/10"
              style={{
                clipPath: "polygon(30% 0, 100% 0, 100% 100%, 20% 100%)",
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-gray-800 dark:text-white mb-6">
                Real-World Applications
              </h1>
              <p className="text-xl lg:text-2xl font-light text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
                From flood preparedness to urban planning, our platform helps
                Sri Lanka make smarter, data-driven land management decisions.
              </p>
            </motion.div>

            {/* Stats Preview */}
            <motion.div
              className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/80 dark:bg-[#1a1c1b]/80 backdrop-blur-sm rounded-2xl p-6 border border-stone-200/50 dark:border-gray-700/50"
                >
                  <div className="text-3xl lg:text-4xl font-serif font-bold text-emerald-700 dark:text-emerald-400">
                    {metric.number}
                  </div>
                  <div className="text-sm font-medium text-gray-800 dark:text-white mt-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {metric.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Left side content */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm uppercase tracking-wide mb-4">
                    Latest use cases
                  </p>
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 dark:text-white mb-6">
                    You are seconds away from a world of precise, data-driven
                    mapping solutions
                  </h2>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center space-x-2 group"
                  >
                    <span>All use cases</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>

                {/* Detailed use case card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-12 bg-white dark:bg-[#1a1c1b] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-xl font-serif font-bold text-gray-800 dark:text-white mb-4">
                    Flood Risk Assessment
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    GeoLanka consolidates the entire process of flood risk
                    mapping into one easy-to-use platform, offering 16+ data
                    layers and real-time monitoring capabilities.
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-emerald-600 dark:bg-emerald-500 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      Disaster Management
                    </span>
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
                    className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{
                        backgroundImage: `url('${useCases[0].bgImage}')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold text-lg mb-1">
                        {useCases[0].title}
                      </h4>
                      <p className="text-xs opacity-80">
                        Disaster Management • 19 Jan 2025
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{
                        backgroundImage: `url('${useCases[1].bgImage}')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold text-lg mb-1">
                        {useCases[1].title}
                      </h4>
                      <p className="text-xs opacity-80">
                        Environmental • 19 Jan 2025
                      </p>
                    </div>
                  </motion.div>

                  {/* Large card spanning full width */}
                  <motion.div
                    variants={fadeInUp}
                    className="col-span-2 relative h-64 rounded-2xl overflow-hidden group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{
                        backgroundImage: `url('${useCases[2].bgImage}')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="font-semibold text-2xl mb-2">
                        {useCases[2].title}
                      </h4>
                      <p className="text-sm opacity-90 mb-2">
                        Agricultural Planning • 19 Jan 2025
                      </p>
                      <p className="text-sm opacity-80 max-w-md">
                        Advanced soil analysis and crop pattern mapping help
                        optimize agricultural zones for maximum sustainable
                        yield.
                      </p>
                    </div>
                  </motion.div>

                  {/* Bottom row */}
                  <motion.div
                    variants={fadeInUp}
                    className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{
                        backgroundImage: `url('${useCases[3].bgImage}')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold text-lg mb-1">
                        {useCases[3].title}
                      </h4>
                      <p className="text-xs opacity-80">
                        Urban Planning • 19 Jan 2025
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold text-lg mb-1">
                        Infrastructure Planning
                      </h4>
                      <p className="text-xs opacity-80">
                        Smart Cities • 19 Jan 2025
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1a1c1b] transition-colors duration-300">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Quote icon */}
              <div className="text-6xl text-emerald-600 dark:text-emerald-400 font-serif mb-8">
                "
              </div>

              <blockquote className="text-xl lg:text-2xl font-light text-gray-700 dark:text-gray-300 italic mb-8">
                {testimonial.quote}
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-emerald-600 dark:bg-emerald-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-emerald-600 dark:text-emerald-400">
                    {testimonial.organization}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 dark:bg-[#0a0c0b]">
          {/* Background map */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 dark:opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
            }}
          />

          {/* Geometric overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-emerald-800/85 to-emerald-900/85 dark:from-emerald-600/85 dark:to-emerald-700/85"
            style={{
              clipPath: "polygon(0 0, 60% 0, 40% 100%, 0 100%)",
            }}
          />

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <MapPin className="w-16 h-16 text-emerald-400 mx-auto mb-6" />

              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                Ready to Transform Your Project?
              </h2>

              <p className="text-xl text-stone-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                See how our platform can support your project with precise
                geo-mapping solutions tailored for Sri Lanka's unique landscape.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-shadow"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-white text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-white/10 transition-colors"
                >
                  <Satellite className="w-4 h-4" />
                  <span>View Demo</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default UseCasesPage;
