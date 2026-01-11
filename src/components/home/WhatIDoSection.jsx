// src/components/home/WhatIDoSection.jsx
import { Code2, Smartphone, Palette, Briefcase } from "lucide-react";
import { homeData } from "./homeData";

const iconMap = { Code2, Smartphone, Palette, Briefcase };

export default function WhatIDoSection({ onOpenModal }) {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-900/40">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-20 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          What I Do
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {homeData.services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <div 
                key={i}
                onClick={() => onOpenModal(service.title, service.full)}
                className="group cursor-pointer p-8 rounded-2xl bg-gray-800/60 border border-gray-700 hover:border-cyan-500/70 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-3 text-center"
              >
                <div className="text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-14 h-14" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.short}</p>
                <span className="inline-block mt-4 text-cyan-400 text-sm font-medium group-hover:underline">
                  Learn more →
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}