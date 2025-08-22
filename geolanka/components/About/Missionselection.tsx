"use client";

import { motion } from "framer-motion";

const focusAreas = [
  {
    title: "Agriculture",
    description: "Help farmers monitor crop areas and prevent encroachment",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=100&h=100&fit=crop",
  },
  {
    title: "Flood Zones",
    description: "Identify high-risk areas for disaster preparedness",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=100&h=100&fit=crop",
  },
  {
    title: "Sustainable Land Use",
    description: "Track deforestation and protected zones",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop",
  },
  {
    title: "Government Support",
    description: "Assist agencies with urban planning decisions",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop",
  },
];

const missionScope = [
  {
    label: "Target Sectors",
    value: "Agriculture, Environment, Planning, NGOs",
  },
  { label: "Coverage Areas", value: "Across Sri Lanka" },
  { label: "Key Stakeholders", value: "Government, Farmers, Private Sector" },
];

export function MissionSection() {
  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full border border-emerald-200">
                <span className="font-medium text-sm tracking-wide uppercase">
                  Our Mission
                </span>
              </div>

              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
                  Empowering Sri Lanka with Intelligent Geo-Mapping Solutions
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Supporting sustainable agriculture, protecting vulnerable
                  regions, and guiding responsible land use across Sri Lanka.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                  className="group"
                >
                  <div className="bg-emerald-50 backdrop-blur-md rounded-lg p-4 border border-emerald-200 hover:bg-emerald-100 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={area.image}
                          alt={area.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-800 text-lg">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">
                Mission Scope
              </h4>
              <div className="space-y-6">
                {missionScope.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex justify-between items-start"
                  >
                    <span className="font-medium text-gray-600">
                      {item.label}:
                    </span>
                    <span className="text-right text-gray-800 font-semibold max-w-[60%]">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
