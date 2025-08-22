"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Play } from "lucide-react";

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
      ? "bg-white dark:bg-gray-100 hover:bg-gray-50 dark:hover:bg-gray-200 text-emerald-700 dark:text-emerald-800 border-2 border-white dark:border-gray-100"
      : "bg-emerald-100 dark:bg-emerald-900/50 hover:bg-emerald-200 dark:hover:bg-emerald-900/70 text-emerald-800 dark:text-emerald-300 border-2 border-emerald-200 dark:border-emerald-700";

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
    <section className="relative py-20 overflow-hidden bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
      {/* Map Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 dark:opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=800&fit=crop')",
        }}
      />

      {/* Darker Green Gradient Background Shapes */}
      <div className="absolute inset-0">
        {/* Main geometric background sections with transparency to show map */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-800/85 dark:from-emerald-900/90 via-emerald-900/85 dark:via-emerald-950/90 to-green-900/85 dark:to-green-950/90"
          style={{
            clipPath: "polygon(0 0, 70% 0, 50% 100%, 0 100%)",
          }}
        />

        {/* Additional geometric overlays */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-emerald-700/80 dark:from-emerald-800/85 to-emerald-800/80 dark:to-emerald-900/85"
          style={{
            clipPath: "polygon(50% 0, 100% 0, 100% 80%, 30% 100%)",
          }}
        />
      </div>

      {/* Additional geometric shapes - no circles */}
      <div
        className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-emerald-600 dark:from-emerald-500 to-emerald-700 dark:to-emerald-600 opacity-20 dark:opacity-15 transform rotate-45 transition-all duration-300"
        style={{
          clipPath:
            "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
        }}
      />
      <div
        className="absolute bottom-32 right-32 w-32 h-32 bg-stone-200 dark:bg-gray-600 opacity-25 dark:opacity-15 transform -rotate-12 transition-all duration-300"
        style={{
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Main Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900/50 px-4 py-2 rounded-full border border-emerald-200 dark:border-emerald-700 transition-colors duration-300">
              <MapPin className="w-4 h-4 text-emerald-700 dark:text-emerald-300" />
              <span className="text-emerald-700 dark:text-emerald-300 font-medium text-sm tracking-wide uppercase transition-colors duration-300">
                Get Started
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Let's Start Mapping.
              </h2>

              <p className="text-xl text-stone-100 dark:text-stone-200 leading-relaxed max-w-2xl transition-colors duration-300">
                Your geospatial adventure should start now. Join the most
                comprehensive mapping platform. We're happy to help you.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
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
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-white">
                  Free
                </div>
                <div className="text-sm text-stone-200 dark:text-stone-300 transition-colors duration-300">
                  30-Day Trial
                </div>
              </div>
              <div className="w-px h-12 bg-stone-300 dark:bg-stone-400 transition-colors duration-300"></div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-white">
                  50K+
                </div>
                <div className="text-sm text-stone-200 dark:text-stone-300 transition-colors duration-300">
                  Happy Users
                </div>
              </div>
              <div className="w-px h-12 bg-stone-300 dark:bg-stone-400 transition-colors duration-300"></div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-white">
                  24/7
                </div>
                <div className="text-sm text-stone-200 dark:text-stone-300 transition-colors duration-300">
                  Support
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
