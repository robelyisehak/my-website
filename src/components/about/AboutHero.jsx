// src/components/about/AboutHero.jsx
import { aboutData } from "../about/aboutData";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-cyan-900/20 opacity-60" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />

      <div className="relative z-10 text-center max-w-6xl mx-auto animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
          {aboutData.hero.title}
        </h1>
        <p className="text-2xl text-gray-400 max-w-4xl mx-auto animate-fade-in-delay">
          {aboutData.hero.subtitle}
        </p>
      </div>
    </section>
  );
}