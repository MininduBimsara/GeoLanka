"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Menu, X, Sun, Moon, MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";
import { useDebounceResize } from "@/hooks/usePerformanceOptimizations";

const GeoLankaNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Optimized scroll handler with debouncing
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Passive event listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { isDarkMode, toggleTheme } = useTheme();

  // Handler for navigating to contact page
  const handleStartMapping = () => {
    router.push("/contact");
    setIsMenuOpen(false); // Close mobile menu if open
  };

  // Memoize navigation links to prevent unnecessary re-renders
  const navLinks = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Features", href: "/features" },
      { name: "Use Cases", href: "/use-cases" },
      { name: "Contact", href: "/contact" },
    ],
    []
  );

  // Memoized logo component
  const Logo = React.memo(() => (
    <Link href="/">
      <div className="flex items-center space-x-3 cursor-pointer hover-lift">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg gpu-accelerated">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full pulse-optimized"></div>
        </div>
        <div className="font-sans font-bold text-xl text-gray-800 dark:text-white">
          Geo<span className="text-emerald-600">Lanka</span>
        </div>
      </div>
    </Link>
  ));

  Logo.displayName = "Logo";

  // Optimized background class calculation
  const getBackgroundClass = useMemo(() => {
    if (!isMounted) return "bg-transparent"; // Default during SSR

    if (isDarkMode) {
      return scrolled
        ? "bg-[#0a0c0b]/95 backdrop-blur-md shadow-lg"
        : "bg-transparent";
    } else {
      return scrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg"
        : "bg-transparent";
    }
  }, [isDarkMode, scrolled, isMounted]);

  // Don't render theme-dependent content until mounted
  if (!isMounted) {
    return (
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-emerald-600 font-medium text-base transition-colors duration-200 relative group"
                  >
                    <span
                      className="block animate-slide-in-left"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {link.name}
                    </span>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Placeholder for theme toggle during SSR */}
              <div className="w-9 h-9 rounded-full bg-gray-100 opacity-50"></div>

              {/* CTA Button - Desktop */}
              <button
                onClick={handleStartMapping}
                className="hidden lg:block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium text-sm btn-hover shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Mapping
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 btn-hover"
                aria-label="Toggle mobile menu"
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${getBackgroundClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-base transition-colors duration-200 relative group"
                >
                  <span
                    className="block animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.name}
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></div>
                </Link>
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle - Only render after mount */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-[#1a1c1b] hover:bg-gray-200 dark:hover:bg-[#2a2c2b] transition-colors duration-200 btn-hover"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* CTA Button - Desktop - Fixed with onClick */}
            <button
              onClick={handleStartMapping}
              className="hidden lg:block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium text-sm btn-hover shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Mapping
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-[#1a1c1b] hover:bg-gray-200 dark:hover:bg-[#2a2c2b] transition-colors duration-200 btn-hover"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Optimized with conditional rendering */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#0a0c0b]/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 animate-fade-in-up">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-[#1a1c1b] rounded-lg font-medium transition-all duration-200 flex items-center justify-between group animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))}
            {/* Mobile CTA Button - Fixed with onClick */}
            <button
              onClick={handleStartMapping}
              className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-full font-medium transition-all duration-200 btn-hover animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              Start Mapping
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default GeoLankaNavbar;
