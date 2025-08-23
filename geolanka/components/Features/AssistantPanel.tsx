// AssistantPanel.tsx - Updated with dark mode support
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MessageCircle, Mic } from "lucide-react";

const AssistantPanel = ({ currentFeature }) => {
  // Default feature data if not provided
  const feature = currentFeature || {
    title: "Automated Reports",
    mainCard: {
      icon: MessageCircle,
    },
  };

  return (
    <div className="lg:col-span-1">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-gradient-to-br from-yellow-200 to-yellow-300 dark:from-yellow-600 dark:to-yellow-700 rounded-3xl p-6 h-80 relative overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="w-10 h-10 bg-black dark:bg-[#1a1c1b] rounded-full flex items-center justify-center">
            <feature.mainCard.icon className="w-5 h-5 text-white" />
          </div>
          <span className="font-medium text-gray-800 dark:text-white">Assistant</span>
          <button className="ml-auto p-1 hover:bg-white/20 dark:hover:bg-black/20 rounded-full transition-colors">
            <ArrowRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Main Content */}
        <div className="mb-6 relative z-10">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
            Ready to explore {feature.title.toLowerCase()}? Looking for
            <span className="text-emerald-700 dark:text-emerald-400"> advanced features</span> or
            <span className="text-emerald-700 dark:text-emerald-400"> integrations</span>?
          </h3>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-2 mb-12 relative z-10">
          <span className="bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200">
            Precision mapping
          </span>
          <span className="bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200">
            Real-time sync
          </span>
          <span className="bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200">
            Enterprise ready
          </span>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3 z-20">
          {/* Chat Button */}
          <button className="bg-white/80 dark:bg-[#0a0c0b]/80 backdrop-blur-sm rounded-2xl px-4 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-white/90 dark:hover:bg-[#1a1c1b]/90 transition-colors">
            <MessageCircle className="w-4 h-4" />
          </button>

          {/* Main Action Button */}
          <button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 rounded-2xl px-6 py-3 flex-1 flex items-center justify-center gap-2 transition-colors group">
            <Mic className="w-4 h-4 text-white" />
            <span className="text-white font-medium text-sm">
              Start Conversation
            </span>
          </button>

          {/* Time/Schedule Button */}
          <button className="bg-white/80 dark:bg-[#0a0c0b]/80 backdrop-blur-sm rounded-2xl px-4 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-white/90 dark:hover:bg-[#1a1c1b]/90 transition-colors">
            <Clock className="w-4 h-4" />
          </button>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-4 w-16 h-16 bg-white/10 dark:bg-black/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-4 w-12 h-12 bg-emerald-400/20 dark:bg-emerald-500/30 rounded-full blur-lg"></div>
      </motion.div>
    </div>
  );
};

export default AssistantPanel;