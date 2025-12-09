// src/components/skills/BackendSection.jsx
import SkillCard from "./SkillCard";
import { skillsData } from "./skillsData";

export default function BackendSection({ onOpenModal }) {
  const backend = skillsData.filter(s => s.category === "backend");

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Backend & Tools
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {backend.map((skill) => (
            <SkillCard key={skill.name} skill={skill} onClick={() => onOpenModal(skill.name)} />
          ))}
        </div>
      </div>
    </section>
  );
}