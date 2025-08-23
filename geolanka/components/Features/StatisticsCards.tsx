import React from "react";
import { TrendingUp } from "lucide-react";

const StatisticsCards = ({ currentFeature }) => {
  return (
    <div className="grid grid-cols-3 gap-6 mb-6">
      {/* Weather/Main Stat */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-3">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <div className="text-3xl font-bold text-gray-800 mb-1">
          {currentFeature.weather}
        </div>
        <div className="text-sm text-gray-600">Performance</div>
      </div>

      {/* Pricing */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs bg-gray-100 rounded-full px-2 py-1">💰</span>
        </div>
        <div className="text-xl font-bold text-gray-800 mb-1">
          {currentFeature.pricing}
        </div>
        <div className="text-sm text-gray-600">Enterprise pricing</div>
        <div className="flex items-center mt-2">
          <div className="flex">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`w-1 h-4 mx-0.5 rounded-full ${
                  i < 6 ? "bg-emerald-400" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center">
            <span className="text-xs text-white font-bold">Jun</span>
          </div>
          <span className="text-sm font-medium text-gray-800">
            {currentFeature.availability}
          </span>
        </div>
        <div className="text-sm text-gray-600 mb-3">Deployment ready</div>
        <div className="bg-emerald-100 rounded-lg p-2 mb-2">
          <div className="bg-emerald-500 rounded h-6 flex items-center justify-center">
            <span className="text-xs text-white font-medium">Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCards;
