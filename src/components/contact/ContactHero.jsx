// src/components/contact/ContactHero.jsx
import { CheckCircle } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-900/30 via-cyan-900/20 to-black opacity-70" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
          Let's Work Together
        </h1>
        <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto mb-12">
          Available for freelance, full-time, or collaboration opportunities worldwide
        </p>

        <div className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/50 rounded-full">
          <CheckCircle className="w-12 h-12 text-green-400" />
          <div className="text-left">
            <p className="text-2xl font-bold text-green-400">AVAILABLE FOR HIRE</p>
            <p className="text-gray-300">Freelance • Full-Time • Remote • On-Site</p>
          </div>
        </div>
      </div>
    </section>
  );
}