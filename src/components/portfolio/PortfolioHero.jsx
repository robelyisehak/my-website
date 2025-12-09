// src/components/portfolio/PortfolioHero.jsx
import { Zap, Shield, Users } from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-cyan-900/20 to-black opacity-60" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
          My Portfolio
        </h1>
        <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto mb-12">
          Real Projects • Real Solutions • Real Impact
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-gray-400">
          <div className="flex items-center gap-3"><Zap className="w-8 h-8 text-yellow-500" /> Full-Stack Development</div>
          <div className="flex items-center gap-3"><Shield className="w-8 h-8 text-green-500" /> Secure Systems</div>
          <div className="flex items-center gap-3"><Users className="w-8 h-8 text-cyan-400" /> User-Centered Design</div>
        </div>
      </div>
    </section>
  );
}