"use client";

import React from "react";
import { MapPin } from "lucide-react";

const HeroHeader = ({ activeTab, setActiveTab, features }) => {
  return (
    <div className="relative">
      {/* Hero Section with Sri Lankan Landscape */}
      <div
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=800&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />

        {/* Location Badge */}
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-800">Sri Lanka</span>
        </div>

        {/* Image Gallery Pills */}
        <div className="absolute top-6 right-6 flex items-center gap-2">
          <div className="flex -space-x-2">
            <img
              src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=60&h=60&fit=crop&q=80"
              alt=""
              className="w-10 h-10 rounded-lg border-2 border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=60&h=60&fit=crop&q=80"
              alt=""
              className="w-10 h-10 rounded-lg border-2 border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=60&h=60&fit=crop&q=80"
              alt=""
              className="w-10 h-10 rounded-lg border-2 border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=60&h=60&fit=crop&q=80"
              alt=""
              className="w-10 h-10 rounded-lg border-2 border-white object-cover"
            />
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
            <span className="text-xs font-medium text-gray-700">+5</span>
          </div>
        </div>

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl lg:text-7xl font-light mb-4">GeoLanka</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto px-6">
              Advanced geospatial mapping platform for precision data
              collection, real-time visualization, and automated reporting
              across Sri Lanka
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md rounded-2xl p-1">
            {Object.values(features).map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === feature.id
                    ? "bg-white text-gray-800 shadow-lg"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
