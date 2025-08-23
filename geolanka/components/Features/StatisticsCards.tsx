// StatisticsCards.tsx - Updated with dark mode support
import React from "react";
import { TrendingUp } from "lucide-react";

const StatisticsCards = ({ currentFeature }) => {
  return (
    <div className="grid grid-cols-3 gap-6 mb-6">
      {/* Weather/Main Stat */}
      <div className="bg-white dark:bg-[#0a0c0b] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-3">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">
          {currentFeature?.weather || "N/A"}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Performance
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-white dark:bg-[#0a0c0b] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs bg-gray-100 dark:bg-[#1a1c1b] rounded-full px-2 py-1">
            💰
          </span>
        </div>
        <div className="text-xl font-bold text-gray-800 dark:text-white mb-1">
          {currentFeature?.pricing || "Contact Us"}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Enterprise pricing
        </div>
        <div className="flex items-center mt-2">
          <div className="flex">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`w-1 h-4 mx-0.5 rounded-full ${
                  i < 6 ? "bg-emerald-400" : "bg-gray-200 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className="bg-white dark:bg-[#0a0c0b] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center">
            <span className="text-xs text-white font-bold">Jun</span>
          </div>
          <span className="text-sm font-medium text-gray-800 dark:text-white">
            {currentFeature?.availability || "Available"}
          </span>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Deployment ready
        </div>
        <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-lg p-2 mb-2">
          <div className="bg-emerald-500 rounded h-6 flex items-center justify-center">
            <span className="text-xs text-white font-medium">Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCards;
