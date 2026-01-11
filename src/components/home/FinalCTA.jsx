// src/components/home/FinalCTA.jsx
import { ArrowRight } from "lucide-react";
import { homeData } from "./homeData";

export default function FinalCTA() {
  const { heading, text } = homeData.finalCTA;

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {heading}
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          {text}
        </p>
        <a 
          href="/contact"
          className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all group"
        >
          Get In Touch
          <ArrowRight className="group-hover:translate-x-2 transition" />
        </a>
      </div>
    </section>
  );
}