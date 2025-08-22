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
      ? "bg-white hover:bg-gray-50 text-emerald-700 border-2 border-white"
      : "bg-emerald-100 hover:bg-emerald-200 text-emerald-800 border-2 border-emerald-200";

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses} ${className}`}
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
    <section className="relative py-20 overflow-hidden bg-white dark:bg-gray-900">
      {/* Map Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=800&fit=crop')",
        }}
      />

      {/* Darker Green Gradient Background Shapes */}
      <div className="absolute inset-0">
        {/* Main geometric background sections with transparency to show map */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-800/85 via-emerald-900/85 to-green-900/85"
          style={{
            clipPath: "polygon(0 0, 70% 0, 50% 100%, 0 100%)",
          }}
        />

        {/* Additional geometric overlays */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-emerald-700/80 to-emerald-800/80"
          style={{
            clipPath: "polygon(50% 0, 100% 0, 100% 80%, 30% 100%)",
          }}
        />
      </div>

      {/* Additional geometric shapes - no circles */}
      <div
        className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-emerald-600 to-emerald-700 opacity-20 transform rotate-45"
        style={{
          clipPath:
            "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
        }}
      />
      <div
        className="absolute bottom-32 right-32 w-32 h-32 bg-stone-200 opacity-25 transform -rotate-12"
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
            <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full border border-emerald-200">
              <MapPin className="w-4 h-4 text-emerald-700" />
              <span className="text-emerald-700 font-medium text-sm tracking-wide uppercase">
                Get Started
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Let's Start Mapping.
              </h2>

              <p className="text-xl text-stone-100 leading-relaxed max-w-2xl">
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
                <div className="text-sm text-stone-200">30-Day Trial</div>
              </div>
              <div className="w-px h-12 bg-stone-300"></div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-white">
                  50K+
                </div>
                <div className="text-sm text-stone-200">Happy Users</div>
              </div>
              <div className="w-px h-12 bg-stone-300"></div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-white">
                  24/7
                </div>
                <div className="text-sm text-stone-200">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
