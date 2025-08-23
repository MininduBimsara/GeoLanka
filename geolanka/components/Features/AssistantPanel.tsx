import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const AssistantPanel = ({ currentFeature }) => {
  return (
    <div className="lg:col-span-1">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-3xl p-6 h-80 relative overflow-hidden"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <currentFeature.mainCard.icon className="w-5 h-5 text-white" />
          </div>
          <span className="font-medium text-gray-800">Assistant</span>
          <button className="ml-auto p-1">
            <ArrowRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to explore {currentFeature.title.toLowerCase()}? Looking for
            <span className="text-emerald-700"> advanced features</span> or
            <span className="text-emerald-700"> integrations</span>?
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-white/50 rounded-full px-3 py-1 text-xs font-medium">
            Precision mapping
          </span>
          <span className="bg-white/50 rounded-full px-3 py-1 text-xs font-medium">
            Real-time sync
          </span>
          <span className="bg-white/50 rounded-full px-3 py-1 text-xs font-medium">
            Enterprise ready
          </span>
        </div>

        <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
          <button className="bg-white/80 rounded-2xl px-4 py-2 flex items-center gap-2 text-sm">
            <span>💬</span>
          </button>
          <button className="bg-black rounded-2xl px-6 py-3 flex-1 flex items-center justify-center">
            <span className="w-4 h-4 bg-white rounded-full"></span>
          </button>
          <button className="bg-white/80 rounded-2xl px-4 py-2 flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AssistantPanel;
