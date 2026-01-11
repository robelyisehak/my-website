// src/components/skills/SkillSection.jsx
import { useState } from "react";
import CategoryCard from "./CategoryCard";
import LanguageCard from "./LanguageCard";
import LanguageModal from "./LanguageModal";
import { skillsCategories } from "./skillsData";

export default function SkillSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const categoryExplanations = {
    basic: "These are the foundational languages that power every website on the internet. My journey began here — mastering structure, styling, and interactivity.",
    frontend: "The heart of modern web development. I specialize in building fast, beautiful, and scalable user interfaces that users love.",
    backend: "Behind every great frontend is a solid backend. I build secure, efficient server-side systems that handle data and logic flawlessly.",
    programming: "Beyond web tech — core programming languages that taught me logic, algorithms, and problem-solving at a deeper level.",
    tools: "My daily drivers. These tools make me 10x faster and more productive as a developer.",
    soft: "Technical skills get you the interview. Soft skills get you the job — and keep you growing."
  };

  return (
    <>
      {/* === MY TECHNICAL JOURNEY — CINEMATIC STYLE === */}
      {!selectedCategory ? (
        <section className="py-32 px-6 md:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Epic Title */}
            <div className="text-center mb-32">
              <h2 className="text-7xl md:text-9xl font-extrabold tracking-tighter bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-none">
                My Technical Journey
              </h2>
              <p className="text-2xl md:text-3xl text-gray-400 mt-8 max-w-4xl mx-auto font-light">
                From writing my first line of code to building full-stack systems — this is how I became the developer I am today.
              </p>
            </div>

            {/* Category Sections */}
            <div className="space-y-40">
              {skillsCategories.map((cat, index) => (
                <div
                  key={cat.id}
                  className={`grid lg:grid-cols-2 gap-20 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left/Right: Epic Explanation */}
                  <div className="space-y-8">
                    <div className="inline-block">
                      <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase">
                        Chapter {index + 1}
                      </span>
                    </div>
                    <h3 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-tight">
                      {cat.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                      {categoryExplanations[cat.id]}
                    </p>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className="mt-10 inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all group"
                    >
                      Dive Into {cat.title}
                      <span className="group-hover:translate-x-3 transition">→</span>
                    </button>
                  </div>

                  {/* Right/Left: Category Card */}
                  <div className="flex justify-center">
                    <div className="transform hover:scale-105 transition-all duration-500">
                      <CategoryCard category={cat} onOpenCategory={() => setSelectedCategory(cat)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* === LANGUAGE GRID (Unchanged — Still Perfect) === */
        <section className="py-20 px-6 md:px-12 bg-gray-900/40">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-10 text-cyan-400 hover:text-cyan-300 flex items-center gap-2 text-lg font-medium transition-all"
            >
              ← Back to Journey
            </button>

            <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {selectedCategory.title}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedCategory.languages.map((lang) => (
                <LanguageCard
                  key={lang.name}
                  language={lang}
                  onOpenDetail={setSelectedLanguage}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final Modal — Still Perfect */}
      <LanguageModal
        language={selectedLanguage}
        isOpen={!!selectedLanguage}
        onClose={() => setSelectedLanguage(null)}
      />
    </>
  );
}