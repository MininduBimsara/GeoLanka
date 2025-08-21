"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Users,
  Navigation,
  Building2,
  TrendingUp,
  Globe,
} from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  description: string;
  image: string;
  delay: number;
  size?: "large" | "medium";
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  number,
  label,
  description,
  image,
  delay,
  size = "medium",
}) => {
  const isLarge = size === "large";

  return (
    <motion.div
      className={`relative group rounded-2xl overflow-hidden shadow-xl ${
        isLarge ? "md:col-span-2 lg:col-span-2 h-96" : "h-80"
      }`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Geometric Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />

      {/* Additional geometric shapes */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-white/15 to-transparent"
        style={{
          clipPath: isLarge
            ? "polygon(0 0, 40% 0, 60% 100%, 0 100%)"
            : "polygon(0 0, 50% 0, 30% 100%, 0 100%)",
        }}
      />

      <div
        className="absolute inset-0 bg-gradient-to-bl from-transparent to-white/10"
        style={{
          clipPath: isLarge
            ? "polygon(60% 0, 100% 0, 100% 80%, 80% 100%)"
            : "polygon(70% 0, 100% 0, 100% 70%, 85% 100%)",
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 p-8 h-full flex flex-col ${
          isLarge
            ? "justify-center items-center text-center"
            : "justify-between"
        }`}
      >
        {/* Top section */}
        <div
          className={`flex ${
            isLarge
              ? "flex-col items-center space-y-4"
              : "justify-between items-start"
          }`}
        >
          <div
            className={`${
              isLarge ? "w-16 h-16" : "w-12 h-12"
            } bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center`}
          >
            {icon}
          </div>
          {!isLarge && (
            <div className="w-8 h-8 border-2 border-stone-300/50 rounded-full" />
          )}
        </div>

        {/* Main content */}
        <div className={`space-y-4 ${isLarge ? "mt-6" : ""}`}>
          <div className="space-y-2">
            <div
              className={`${
                isLarge ? "text-6xl lg:text-7xl" : "text-4xl lg:text-5xl"
              } font-serif font-bold text-white`}
            >
              {number}
            </div>
            <h3
              className={`${
                isLarge ? "text-2xl" : "text-xl"
              } font-serif font-bold text-stone-100`}
            >
              {label}
            </h3>
          </div>
          <p
            className={`text-stone-200 ${
              isLarge ? "text-base max-w-md" : "text-sm"
            } leading-relaxed`}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ImpactStatistics: React.FC = () => {
  const stats = [
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      number: "25K+",
      label: "Locations Mapped",
      description:
        "Comprehensive coverage of Sri Lankan cities, towns, and rural areas with precise coordinates.",
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop",
      size: "large" as const,
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      number: "50K+",
      label: "Active Users",
      description:
        "Growing community of users across Sri Lanka utilizing our mapping platform daily.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=600&fit=crop",
      size: "medium" as const,
    },
    {
      icon: <Navigation className="w-6 h-6 text-white" />,
      number: "1M+",
      label: "Routes Optimized",
      description:
        "Smart route calculations saving time and fuel for businesses and individuals.",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=600&fit=crop",
      size: "medium" as const,
    },
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      number: "500+",
      label: "Business Partners",
      description:
        "Enterprise clients leveraging our mapping solutions for logistics and operations.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=600&fit=crop",
      size: "medium" as const,
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      number: "99.9%",
      label: "Accuracy Rate",
      description:
        "Industry-leading precision in location data and navigation services.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=600&fit=crop",
      size: "medium" as const,
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      number: "24/7",
      label: "Support Available",
      description:
        "Round-the-clock technical support and customer service for all users.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=600&fit=crop",
      size: "medium" as const,
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Geometric Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-stone-100 opacity-50 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-100 opacity-40 blur-2xl rounded-full" />

      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-stone-100 px-4 py-2 rounded-full mb-6">
            <Globe className="w-4 h-4 text-gray-700" />
            <span className="text-gray-700 font-medium text-sm tracking-wide uppercase">
              Impact Metrics
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-6">
            Transforming Sri Lanka's Digital Map
          </h2>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-16 bg-gray-400"></div>
            <p className="text-lg text-gray-600 font-light tracking-wide uppercase">
              S T A T I S T I C S
            </p>
            <div className="h-px w-16 bg-gray-400"></div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real numbers that demonstrate our commitment to revolutionizing
            geospatial technology and mapping services across Sri Lanka.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              description={stat.description}
              image={stat.image}
              delay={index * 0.1}
              size={stat.size}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStatistics;
