import React from "react";
import { MapPin } from "lucide-react";

const AboutHeroHeader = () => {
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

        {/* Title - Simple "ABOUT" text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl lg:text-7xl font-light mb-4">ABOUT</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto px-6">
              Discover our mission to revolutionize geospatial mapping and
              environmental monitoring across Sri Lanka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroHeader;
