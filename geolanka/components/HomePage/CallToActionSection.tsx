"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

interface CTAButtonProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  variant,
  children,
  icon,
  onClick,
  className = "",
}) => {
  const baseClasses =
    "group relative px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out";

  const variantClasses =
    variant === "primary"
      ? "bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-emerald-600 hover:border-emerald-700"
      : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-emerald-700 dark:text-emerald-400 border-2 border-emerald-600 dark:border-emerald-500";

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses} ${className} transition-colors duration-300`}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="flex items-center space-x-3">
        <span>{children}</span>
        {icon}
      </span>
    </motion.button>
  );
};

const CallToActionSection: React.FC = () => {
  const handleStartMapping = () => {
    console.log("Start mapping clicked");
  };

  const handleWatchDemo = () => {
    console.log("Watch demo clicked");
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gray-50 dark:bg-[#0A0A0A] transition-colors duration-300">
      {/* Background Geometric Elements - Similar to Features Section */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/30 rounded-full opacity-20 dark:opacity-15 blur-3xl transition-all duration-300" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-stone-200 dark:bg-gray-600 rounded-full opacity-30 dark:opacity-20 blur-2xl transition-all duration-300" />

      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header - Similar to other sections */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-300">
            Let's Start Mapping
          </h2>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-16 bg-gray-400 dark:bg-gray-500 transition-colors duration-300"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-light tracking-wide uppercase transition-colors duration-300">
              G E T &nbsp; S T A R T E D
            </p>
            <div className="h-px w-16 bg-gray-400 dark:bg-gray-500 transition-colors duration-300"></div>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 transition-colors duration-300">
            Your geospatial adventure should start now. Join the most
            comprehensive mapping platform designed specifically for Sri Lanka.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <CTAButton
              variant="primary"
              onClick={handleStartMapping}
              icon={
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              }
            >
              Book a Discovery Call
            </CTAButton>

            <CTAButton
              variant="secondary"
              onClick={handleWatchDemo}
              icon={<Play className="w-5 h-5" />}
            >
              Start Your Samples
            </CTAButton>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-serif font-bold text-gray-800 dark:text-white transition-colors duration-300">
                Free
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                30-Day Trial
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-600 transition-colors duration-300"></div>
            <div className="text-center">
              <div className="text-2xl font-serif font-bold text-gray-800 dark:text-white transition-colors duration-300">
                50K+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                Happy Users
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-600 transition-colors duration-300"></div>
            <div className="text-center">
              <div className="text-2xl font-serif font-bold text-gray-800 dark:text-white transition-colors duration-300">
                24/7
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                Support
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
