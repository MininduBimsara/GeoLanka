"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <div
          className="relative h-80 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1499159058454-75067059248a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />

          {/* Location Badge */}
          <div className="absolute top-6 left-6 bg-white/90 dark:bg-[#1a1c1b]/90 backdrop-blur-sm rounded-2xl px-4 py-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            <span className="text-sm font-medium text-gray-800 dark:text-white">
              Colombo, Sri Lanka
            </span>
          </div>

          {/* Office Gallery Pills */}
          <div className="absolute top-6 right-6 flex items-center gap-2">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=60&h=60&fit=crop&q=80"
                alt="Office"
                className="w-10 h-10 rounded-lg border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=60&h=60&fit=crop&q=80"
                alt="Team"
                className="w-10 h-10 rounded-lg border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=60&h=60&fit=crop&q=80"
                alt="Meeting"
                className="w-10 h-10 rounded-lg border-2 border-white object-cover"
              />
            </div>
            <div className="bg-white/90 dark:bg-[#1a1c1b]/90 backdrop-blur-sm rounded-lg px-2 py-1">
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Office
              </span>
            </div>
          </div>

          {/* Title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-6xl lg:text-7xl font-light mb-4">
                Contact Us
              </h1>
              <p className="text-lg opacity-90 max-w-2xl mx-auto px-6">
                Get in touch with our expert team for enterprise mapping
                solutions, technical support, and partnership opportunities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative bg-white dark:bg-[#0a0c0b] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Panel - Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-emerald-600 to-emerald-700 dark:from-emerald-500 dark:to-emerald-600 rounded-3xl p-6 h-auto relative overflow-hidden text-white"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white dark:bg-[#1a1c1b] rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="font-medium">Get in Touch</span>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to start your
                    <span className="text-emerald-200 dark:text-emerald-300">
                      {" "}
                      mapping journey
                    </span>
                    ? Let's discuss your
                    <span className="text-emerald-200 dark:text-emerald-300">
                      {" "}
                      requirements
                    </span>
                    .
                  </h3>
                </div>

                {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 dark:bg-black/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Head Office</h4>
                      <p className="text-sm text-emerald-100 dark:text-emerald-200 leading-relaxed">
                        Lotus Tower Complex, Floor 23
                        <br />
                        Colombo 01, Sri Lanka
                        <br />
                        Western Province
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 dark:bg-black/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-sm text-emerald-100 dark:text-emerald-200">
                        info@geolanka.com
                        <br />
                        support@geolanka.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 dark:bg-black/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-sm text-emerald-100 dark:text-emerald-200">
                        +94 11 7200 2020
                        <br />
                        +94 11 7200 2021
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white/20 dark:bg-black/20 rounded-full px-3 py-1 text-xs font-medium">
                    Enterprise support
                  </span>
                  <span className="bg-white/20 dark:bg-black/20 rounded-full px-3 py-1 text-xs font-medium">
                    24/7 assistance
                  </span>
                  <span className="bg-white/20 dark:bg-black/20 rounded-full px-3 py-1 text-xs font-medium">
                    Custom solutions
                  </span>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  <button className="w-10 h-10 bg-white/20 dark:bg-black/20 rounded-lg flex items-center justify-center hover:bg-white/30 dark:hover:bg-black/30 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-white/20 dark:bg-black/20 rounded-lg flex items-center justify-center hover:bg-white/30 dark:hover:bg-black/30 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-white/20 dark:bg-black/20 rounded-lg flex items-center justify-center hover:bg-white/30 dark:hover:bg-black/30 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-white/20 dark:bg-black/20 rounded-lg flex items-center justify-center hover:bg-white/30 dark:hover:bg-black/30 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Contact Form Card */}
                <div className="bg-white dark:bg-[#1a1c1b] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                      Send us a message
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Tell us about your project and we'll get back to you
                      within 24 hours
                    </p>
                  </div>
                  <form
                    action="https://formsubmit.co/minindubim@gmail.com"
                    method="POST"
                    className="space-y-6"
                  >
                    {/* FormSubmit.co Configuration - Fixed */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="hidden"
                      name="_autoresponse"
                      value="Thank you for contacting GeoLanka! We have received your message and will get back to you within 24 hours."
                    />
                    <input type="hidden" name="_template" value="table" />
                    {/* Remove the duplicate _next field or set a specific URL */}
                    <input
                      type="hidden"
                      name="_next"
                      value="https://yourdomain.com/thank-you"
                    />
                    {/* Honeypot field for spam protection */}
                    <input
                      type="text"
                      name="_honey"
                      style={{ display: "none" }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-[#0a0c0b] text-gray-900 dark:text-white transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-[#0a0c0b] text-gray-900 dark:text-white transition-all"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-[#0a0c0b] text-gray-900 dark:text-white transition-all"
                          placeholder="+94 XX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-[#0a0c0b] text-gray-900 dark:text-white transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-[#0a0c0b] text-gray-900 dark:text-white transition-all"
                        placeholder="What can we help you with?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-[#0a0c0b] text-gray-900 dark:text-white resize-none transition-all"
                        placeholder="Tell us about your project, requirements, or any questions you have..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </motion.button>
                  </form>
                </div>

                {/* Google Maps Section */}
                <div className="bg-white dark:bg-[#1a1c1b] rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                  <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      Find Us Here
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Visit our office at Lotus Tower Complex, Colombo
                    </p>
                  </div>

                  <div className="relative h-80">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.63206680726!2d79.8437927!3d6.9345031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2592431e92cf7%3A0x9f9525402fc84319!2sChatham%20St%2C%20Colombo!5e0!3m2!1sen!2slk!4v1756108608870!5m2!1sen!2slk"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
