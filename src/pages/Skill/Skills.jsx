// src/pages/Skills/Skills.jsx
import SkillsHero from "../../components/skills/SkillsHero";
import SkillSection from "../../components/skills/SkillSection";

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200">
      <main>
        <SkillsHero />
        <SkillSection />
      </main>
    </div>
  );
}