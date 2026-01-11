// src/components/skills/SkillsHero.jsx
import { Zap, Database, Users } from "lucide-react";

export default function SkillsHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-900/20 via-purple-900/20 to-black opacity-70" />
      <div className="absolute top-10 left-20 w-96 h-96 bg-cyan-600 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />

      <div className="relative z-10 text-center max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
          Technical Expertise
        </h1>
        <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto mb-16">
          Building modern, fast, and beautiful web experiences with cutting-edge tools
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Zap className="w-16 h-16" />, title: "Frontend Mastery", desc: "React · Next.js · Tailwind" },
            { icon: <Database className="w-16 h-16" />, title: "Backend & Data", desc: "Node · PHP · MySQL" },
            { icon: <Users className="w-16 h-16" />, title: "Soft Skills", desc: "Communication · Problem Solving" },
          ].map((card, i) => (
            <div key={i} className="p-8 rounded-2xl bg-gray-800/60 border border-gray-700/50 backdrop-blur-md shadow-xl">
              <div className="text-cyan-400 mx-auto mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-400">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}