// FeatureCardsAndMap.tsx - Updated with dark mode support
import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Plus, Minus } from "lucide-react";

const FeatureCardsAndMap = ({ currentFeature }) => {
  return (
    <div className="space-y-6 relative z-0">
      {/* Feature Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Main Feature Card */}
        <div className="bg-white dark:bg-[#0a0c0b] rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 group cursor-pointer hover:shadow-md dark:hover:shadow-lg transition-shadow duration-300 relative z-10">
          <div className="relative h-48 overflow-hidden">
            <img
              src={
                currentFeature?.mainCard?.image ||
                "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&q=80"
              }
              alt={currentFeature?.mainCard?.title || "Feature"}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            <button className="absolute top-4 right-4 w-8 h-8 bg-white/90 dark:bg-[#0a0c0b]/90 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-[#0a0c0b] transition-colors z-20">
              <ArrowRight className="w-4 h-4 text-gray-800 dark:text-gray-200" />
            </button>
            <div className="absolute bottom-4 left-4 z-20">
              <div className="flex items-center gap-1 text-yellow-400 mb-2">
                {[...Array(currentFeature?.mainCard?.rating || 5)].map(
                  (_, i) => (
                    <span key={i} className="text-sm">
                      ⭐
                    </span>
                  )
                )}
              </div>
              <h3 className="text-white font-semibold text-lg">
                {currentFeature?.mainCard?.title || "Main Feature"}
              </h3>
              <p className="text-white/80 text-sm flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {currentFeature?.mainCard?.location || "Global"}
              </p>
            </div>
          </div>
        </div>

        {/* Side Cards */}
        <div className="space-y-4">
          {(
            currentFeature?.sideCards || [
              {
                title: "Precision Mapping",
                location: "Available",
                rating: 4,
                image:
                  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop&q=80",
              },
              {
                title: "Real-time Analytics",
                location: "Active",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&q=80",
              },
            ]
          ).map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#0a0c0b] rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 group cursor-pointer hover:shadow-md dark:hover:shadow-lg transition-shadow duration-300 relative z-10"
            >
              <div className="flex">
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                  <img
                    src={
                      card?.image ||
                      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop&q=80"
                    }
                    alt={card?.title || "Feature"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-1">
                  <div className="flex items-center gap-1 text-yellow-400 mb-1">
                    {[...Array(card?.rating || 4)].map((_, i) => (
                      <span key={i} className="text-xs">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white text-sm">
                    {card?.title || "Side Feature"}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs flex items-center gap-1">
                    <MapPin className="w-2 h-2" />
                    {card?.location || "Available"}
                  </p>
                </div>
                <button className="p-4 hover:bg-gray-50 dark:hover:bg-[#1a1c1b] transition-colors z-20">
                  <ArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Map Section */}
      <div className="bg-white dark:bg-[#0a0c0b] rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 h-48 relative z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=400&fit=crop&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-blue-900/20 dark:bg-blue-900/40 pointer-events-none" />

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-30">
          <button className="w-8 h-8 bg-white dark:bg-[#0a0c0b] rounded-lg flex items-center justify-center shadow-sm hover:bg-gray-50 dark:hover:bg-[#1a1c1b] transition-colors">
            <Plus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>
          <button className="w-8 h-8 bg-white dark:bg-[#0a0c0b] rounded-lg flex items-center justify-center shadow-sm hover:bg-gray-50 dark:hover:bg-[#1a1c1b] transition-colors">
            <Minus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Map Pins */}
        {(
          currentFeature?.mapPins || [
            { x: 30, y: 40, active: true },
            { x: 60, y: 60, active: false },
            { x: 80, y: 30, active: true },
          ]
        ).map((pin, index) => (
          <div
            key={index}
            className={`absolute w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center transition-colors z-30 ${
              pin?.active ? "bg-emerald-500" : "bg-gray-400"
            }`}
            style={{ left: `${pin?.x || 50}%`, top: `${pin?.y || 50}%` }}
          >
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        ))}

        {/* Map Info */}
        <div className="absolute bottom-4 left-4 z-30">
          <div className="bg-white/90 dark:bg-[#0a0c0b]/90 backdrop-blur-sm rounded-lg px-3 py-2">
            <div className="text-sm font-medium text-gray-800 dark:text-white">
              Active Locations
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Real-time monitoring
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 z-30">
          <button className="bg-emerald-600 dark:bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors">
            View Details
          </button>
        </div>
      </div>

      {/* System Status Section */}
      <div className="bg-stone-100 dark:bg-[#0a0c0b] rounded-2xl p-6 relative z-10">
        <h3 className="text-2xl font-serif font-bold text-gray-800 dark:text-white mb-4">
          System Status
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              99.9%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Uptime
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              24/7
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Monitoring
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              Real-time
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Updates
            </div>
          </div>
        </div>
        <button className="w-full mt-4 bg-gray-800 dark:bg-[#1a1c1b] text-white py-3 rounded-full font-medium hover:bg-gray-700 dark:hover:bg-[#2a2c2b] transition-colors">
          Access Dashboard
        </button>
      </div>
    </div>
  );
};

export default FeatureCardsAndMap;
