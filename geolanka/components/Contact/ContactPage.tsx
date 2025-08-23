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
    <div className="min-h-screen bg-gray-50">
      {/* Main Contact Section - White Background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Side - Get in touch */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Get in touch
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-8">
                    Sekolaq Oyunlar teknisk işqlanımlami qazma ştrukturda
                    <br />
                    məlumat hazırlıqları növü effekt edim.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  {/* Head Office */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">
                        Head Office
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Lotus Tower Complex, Floor 23
                        <br />
                        Colombo 01, Sri Lanka
                        <br />
                        Western Province
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">
                        Email Us
                      </h3>
                      <p className="text-gray-600 text-sm">
                        info@geolanka.com
                        <br />
                        support@geolanka.com
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">
                        Call Us
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Phone: +94 11 7200 2020
                        <br />
                        Fax: +94 11 7200 2021
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">
                    Follow our social media
                  </h3>
                  <div className="flex space-x-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-sky-600 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Send us a message */}
              <motion.div
                className="bg-white"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Send us a message
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
                        placeholder="Company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
                        placeholder="Phone"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
                      placeholder="Subject"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 resize-none"
                      placeholder="Message..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>SEND</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white">
        <div className="w-full">
          <div
            className="w-full h-96 bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&h=600&fit=crop')",
            }}
          >
            {/* Map marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                <MapPin className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Optional: Office location info overlay */}
            <div className="absolute bottom-6 left-6 bg-white rounded-lg p-4 shadow-lg max-w-xs">
              <h4 className="font-bold text-gray-900 mb-1">
                GeoLanka Head Office
              </h4>
              <p className="text-sm text-gray-600">
                Lotus Tower Complex, Floor 23
                <br />
                Colombo 01, Sri Lanka
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
