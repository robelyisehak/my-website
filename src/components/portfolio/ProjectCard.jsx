// src/components/portfolio/ProjectCard.jsx
import { ArrowRight, Globe } from "lucide-react";

export default function ProjectCard({ project, onOpen }) {
  return (
    <div
      onClick={() => onOpen(project.id)}
      className="group cursor-pointer bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-cyan-900/20 
                 border border-purple-500/40 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl
                 hover:shadow-purple-500/50 hover:border-cyan-400 transition-all duration-700 
                 hover:scale-[1.02] hover:-translate-y-4 flex flex-col h-full"
    >
      {/* Glowing Top Bar */}
      <div className="h-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />

      {/* Hero Image Area */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />
        <Globe className="w-32 h-32 text-cyan-400/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                         group-hover:scale-150 group-hover:rotate-45 transition-all duration-1000" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <span className="px-5 py-2 bg-gradient-to-r from-emerald-500/30 to-green-500/30 text-emerald-300 
                           font-bold text-sm rounded-full border border-emerald-500/50 shadow-lg">
            {project.status}
          </span>
          <ArrowRight className="w-7 h-7 text-purple-400 group-hover:translate-x-4 group-hover:text-cyan-400 transition-all" />
        </div>

        <h3 className="text-3xl font-extrabold mb-3 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent 
                       group-hover:from-purple-300 group-hover:to-cyan-300 transition-all">
          {project.title}
        </h3>
        <p className="text-purple-300 text-lg mb-6 font-medium">{project.type}</p>

        <div className="flex flex-wrap gap-3 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-4 py-2 bg-cyan-900/50 text-cyan-300 text-sm font-bold rounded-full 
                                     border border-cyan-500/40 hover:bg-cyan-800/70 transition-all">
              {t}
            </span>
          ))}
        </div>

        <p className="text-gray-300 text-base leading-relaxed line-clamp-3 flex-grow">
          {project.description}
        </p>

        <button className="mt-8 w-full py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 
                           rounded-2xl font-extrabold text-xl hover:shadow-2xl hover:shadow-purple-500/60 
                           transition-all duration-500 flex items-center justify-center gap-4 
                           group-hover:gap-6 group-hover:scale-105">
          Explore Project <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition" />
        </button>
      </div>
    </div>
  );
}