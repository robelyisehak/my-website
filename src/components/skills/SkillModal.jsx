// src/components/skills/SkillModal.jsx
import { ChevronRight } from "lucide-react";

export default function SkillModal({ skill, isOpen, onClose }) {
  if (!isOpen || !skill) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-4" onClick={onClose}>
      <div
        className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/30 rounded-2xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-4xl">×</button>

        <h2 className="text-3xl font-bold text-cyan-400 mb-6">{skill.name}</h2>

        <div className="flex items-center gap-6 mb-8">
          {skill.img ? (
            <img src={skill.img} alt={skill.name} className="w-24 h-24 rounded-2xl bg-white/10 p-3" />
          ) : (
            <div className={`p-6 rounded-2xl bg-gradient-to-br ${skill.color}`}>
              {skill.icon}
            </div>
          )}
          <div>
            <p className="text-5xl font-bold text-white">{skill.level}%</p>
            <p className="text-gray-400 text-lg">Proficiency Level</p>
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-bold text-cyan-400 mb-3">Core Skills</h4>
          <p className="text-gray-300 leading-relaxed">{skill.desc}</p>
        </div>

        <div className="mt-8">
          <h4 className="text-2xl font-bold text-purple-400 mb-4">Used In</h4>
          <ul className="space-y-3">
            {skill.examples.map((ex, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <ChevronRight className="w-5 h-5 text-cyan-400" />
                {ex}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}