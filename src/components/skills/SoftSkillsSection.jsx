// src/components/skills/SoftSkillsSection.jsx
import SkillCard from "./SkillCard";
import { skillsData } from "./skillsData";

export default function SoftSkillsSection({ onOpenModal }) {
  const programming = skillsData.filter(s => s.category === "programming");
  const soft = skillsData.filter(s => s.category === "soft");

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
            Programming Languages
          </h2>
          <div className="space-y-8">
            {programming.map((skill) => (
              <SkillCard key={skill.name} skill={skill} onClick={() => onOpenModal(skill.name)} compact />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
            Soft & Design Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {soft.map((skill) => (
              <SkillCard key={skill.name} skill={skill} onClick={() => onOpenModal(skill.name)} compact />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}