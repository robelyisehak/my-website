// src/components/skills/SkillCard.jsx
import { ChevronRight } from "lucide-react";

export default function SkillCard({ skill, onClick, compact = false }) {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer p-8 rounded-2xl bg-gray-800/60 border border-gray-700/50 backdrop-blur-md shadow-lg hover:shadow-2xl hover:scale- hover:scale-105 transition-all duration-300 ${compact ? 'p-6' : ''}`}
    >
      <div className="flex items-start justify-between mb-6">
        {skill.img ? (
          <img src={skill.img} alt={skill.name} className="w-16 h-16 rounded-xl bg-white/5 p-2" />
        ) : (
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} text-white group-hover:rotate-12 transition-transform`}>
            {skill.icon}
          </div>
        )}
        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
          {skill.level}%
        </span>
      </div>

      <h3 className="text-2xl font-bold mb-3">{skill.name}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>

      <button className="mt-6 text-cyan-400 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
        View Details <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}