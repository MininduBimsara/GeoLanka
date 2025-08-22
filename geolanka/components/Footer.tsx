import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Globe,
  Twitter,
  Linkedin,
  Github,
  ChevronRight,
  MapPin,
} from "lucide-react";

const GeoLankaFooter = () => {
  const Logo = () => (
    <motion.div
      className="flex items-center space-x-3"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg">
          <MapPin className="w-6 h-6 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
      </div>
      <div className="font-serif font-bold text-xl text-gray-800 dark:text-white">
        Geo<span className="text-emerald-600">Lanka</span>
      </div>
    </motion.div>
  );

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Sri Lanka's premier geo-mapping platform delivering precision
              geographic intelligence with advanced satellite integration and
              AI-powered analysis.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Github].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-emerald-600 hover:text-white transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-serif font-bold text-gray-800 dark:text-white mb-4">
              Platform
            </h3>
            <ul className="space-y-3">
              {[
                "Features",
                "Use Cases",
                "API Documentation",
                "Mobile App",
                "Dashboard",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm transition-colors duration-200 flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 group-hover:translate-x-1 transition-transform duration-200" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-serif font-bold text-gray-800 dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Careers",
                "Privacy Policy",
                "Terms of Service",
                "Support",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm transition-colors duration-200 flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 group-hover:translate-x-1 transition-transform duration-200" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-serif font-bold text-gray-800 dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@geolanka.lk"
                    className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm transition-colors duration-200"
                  >
                    info@geolanka.lk
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+94112345678"
                    className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm transition-colors duration-200"
                  >
                    +94 11 234 5678
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Globe className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    Colombo, Sri Lanka
                  </span>
                </div>
              </li>
            </ul>

            {/* CTA in Footer */}
            <motion.button
              className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-full font-medium text-sm transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Discovery Call
            </motion.button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              © 2025 GeoLanka. All rights reserved. Precision mapping technology
              for Sri Lankan excellence.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-xs transition-colors duration-200"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-xs transition-colors duration-200"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-xs transition-colors duration-200"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GeoLankaFooter;
