// src/components/skills/FrontendSection.jsx
import SkillCard from "./SkillCard";
import { skillsData } from "./skillsData";

export default function FrontendSection({ onOpenModal }) {
  const frontend = skillsData.filter(s => s.category === "frontend");

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Frontend Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frontend.map((skill) => (
            <SkillCard key={skill.name} skill={skill} onClick={() => onOpenModal(skill.name)} />
          ))}
        </div>
      </div>
    </section>
  );
}