import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Plus, Minus } from "lucide-react";

const FeatureCardsAndMap = ({ currentFeature }) => {
  return (
    <div className="space-y-6">
      {/* Feature Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Main Feature Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer"
        >
          <div className="relative h-48">
            <img
              src={currentFeature.mainCard.image}
              alt={currentFeature.mainCard.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <button className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-gray-800" />
            </button>
            <div className="absolute bottom-4 left-4">
              <div className="flex items-center gap-1 text-yellow-400 mb-2">
                {[...Array(currentFeature.mainCard.rating)].map((_, i) => (
                  <span key={i} className="text-sm">
                    ★
                  </span>
                ))}
              </div>
              <h3 className="text-white font-semibold text-lg">
                {currentFeature.mainCard.title}
              </h3>
              <p className="text-white/80 text-sm flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {currentFeature.mainCard.location}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Side Cards */}
        <div className="space-y-4">
          {currentFeature.sideCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer"
            >
              <div className="flex">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-1">
                  <div className="flex items-center gap-1 text-yellow-400 mb-1">
                    {[...Array(card.rating)].map((_, i) => (
                      <span key={i} className="text-xs">
                        ★
                      </span>
                    ))}
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    {card.title}
                  </h4>
                  <p className="text-gray-600 text-xs flex items-center gap-1">
                    <MapPin className="w-2 h-2" />
                    {card.location}
                  </p>
                </div>
                <button className="p-4">
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Map Section */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-48 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=400&fit=crop&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-blue-900/20" />

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
          <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
            <Minus className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Map Pins */}
        {currentFeature.mapPins.map((pin, index) => (
          <div
            key={index}
            className={`absolute w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center ${
              pin.active ? "bg-emerald-500" : "bg-gray-400"
            }`}
            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
          >
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        ))}

        {/* Map Info */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
            <div className="text-sm font-medium text-gray-800">
              Active Locations
            </div>
            <div className="text-xs text-gray-600">Real-time monitoring</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCardsAndMap;
