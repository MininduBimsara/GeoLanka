"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Route,
  Navigation,
  Satellite,
  Users,
  BarChart3,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  image,
  delay,
}) => {
  return (
    <motion.div
      className="relative group h-80 rounded-2xl overflow-hidden shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
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
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70" />

      {/* Additional geometric shape */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"
        style={{
          clipPath: "polygon(0 0, 60% 0, 40% 100%, 0 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        {/* Icon */}
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            {icon}
          </div>
          <div className="w-8 h-8 border-2 border-stone-300/50 rounded-full" />
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-serif font-bold text-white">{title}</h3>
          <p className="text-stone-100 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const KeyFeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Real-Time Tracking",
      description:
        "Advanced GPS technology for precise location tracking across Sri Lanka with sub-meter accuracy.",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=600&fit=crop",
    },
    {
      icon: <Route className="w-6 h-6 text-white" />,
      title: "Smart Route Planning",
      description:
        "AI-powered route optimization considering traffic, weather, and road conditions for efficient navigation.",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=600&fit=crop",
    },
    {
      icon: <Satellite className="w-6 h-6 text-white" />,
      title: "Satellite Integration",
      description:
        "High-resolution satellite imagery and real-time data for comprehensive mapping solutions.",
      image:
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=600&fit=crop",
    },
    {
      icon: <Navigation className="w-6 h-6 text-white" />,
      title: "Precision Navigation",
      description:
        "Turn-by-turn navigation with voice guidance optimized for Sri Lankan roads and landmarks.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=600&fit=crop",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Community Mapping",
      description:
        "Collaborative platform allowing local communities to contribute and verify mapping data.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Analytics Dashboard",
      description:
        "Comprehensive analytics and reporting tools for businesses and government organizations.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=600&fit=crop",
    },
  ];

  return (
    <section className="py-20  relative overflow-hidden">
      {/* Background Geometric Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-200 rounded-full opacity-30 blur-2xl" />

      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-emerald-700" />
            <span className="text-emerald-700 font-medium text-sm tracking-wide uppercase">
              Platform Features
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-6">
            Advanced Mapping Solutions
          </h2>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-16 bg-gray-400"></div>
            <p className="text-lg text-gray-600 font-light tracking-wide uppercase">
              T E C H N O L O G Y
            </p>
            <div className="h-px w-16 bg-gray-400"></div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge geospatial technology designed specifically for Sri
            Lankan geography, providing unparalleled accuracy and comprehensive
            coverage.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesGrid;
