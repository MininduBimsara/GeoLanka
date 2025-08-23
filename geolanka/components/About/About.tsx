"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AboutSectionProps {
  children: React.ReactNode;
  backgroundImage: string;
  variant?: "emerald" | "red" | "blue";
  className?: string;
}

export function AboutSection({
  children,
  backgroundImage,
  variant = "emerald",
  className,
}: AboutSectionProps) {
  const overlayVariants = {
    emerald: "bg-gradient-emerald",
    red: "bg-gradient-red",
    blue: "bg-gradient-blue",
  };

  return (
    <section
      className={cn(
        "relative min-h-screen py-20 overflow-hidden transition-colors duration-300",
        className
      )}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Gradient Overlay */}
      <div
        className={cn(
          "absolute inset-0 opacity-90 dark:opacity-95",
          overlayVariants[variant]
        )}
      />

      {/* Geometric Overlay */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-15"
        style={{
          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 85%)",
          background: "rgba(255, 255, 255, 0.1)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
