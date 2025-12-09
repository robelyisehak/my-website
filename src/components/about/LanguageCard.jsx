// src/components/about/LanguageCard.jsx
import { Languages } from "lucide-react";
import { aboutData } from "../about/aboutData";

export default function LanguageCard({ onOpenModal }) {
  return (
    <div
      className="p-6 rounded-2xl bg-gray-800/60 border border-purple-500/30 backdrop-blur-md cursor-pointer hover:shadow-purple-500/30 transition-all"
      onClick={() => onOpenModal('languages')}
    >
      <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-3">
        <Languages className="w-7 h-7" /> Languages
      </h3>

      <div className="space-y-4">
        {aboutData.languages.map((lang) => (
          <div key={lang.name} className="flex justify-between items-center">
            <span className="text-gray-300">{lang.name}</span>
            <span className={`font-bold ${lang.color}`}>{lang.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}