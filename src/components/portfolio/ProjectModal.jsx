// src/components/portfolio/ProjectModal.jsx
import { useState, useEffect } from "react";
import { Globe, Zap, Shield, Code2, Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectModal({ project, isOpen, onClose }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!isOpen || !project?.screenshots) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.screenshots.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isOpen, project?.screenshots]);

  if (!isOpen || !project) return null;

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % project.screenshots.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto" onClick={onClose}>
      <div 
        className="relative w-full max-w-7xl bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20 
                    border-2 border-purple-500/50 rounded-3xl shadow-2xl max-h-[95vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white text-5xl z-10 transition hover:rotate-90">×</button>

        <h2 className="text-5xl font-extrabold text-cyan-300 text-center py-10 bg-gradient-to-b from-purple-900/50 to-transparent">
          {project.title}
        </h2>

        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500/30 px-10 pb-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Details */}
            <div className="space-y-10">
              <div className="mb-8">
                <span className="px-6 py-3 bg-gradient-to-r from-emerald-500/30 to-green-500/30 text-emerald-300 font-bold rounded-full text-lg border border-emerald-500/50">
                  {project.status}
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-purple-300 mb-4">{project.type}</h3>
                <p className="text-xl leading-relaxed text-gray-300 mb-10">{project.description}</p>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-4">
                  <Zap className="w-8 h-8" /> Key Features
                </h4>
                <ul className="space-y-5 text-lg">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-5">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-pink-400 mb-6 flex items-center gap-4">
                  <Shield className="w-8 h-8" /> Business Impact
                </h4>
                <p className="text-xl leading-relaxed text-gray-300">{project.impact}</p>
              </div>
            </div>

            {/* Right: Auto-Sliding Gallery */}
            <div className="space-y-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {project.screenshots ? (
                  <>
                    <img 
                      src={project.screenshots[currentImage]} 
                      alt={`${project.title} screenshot ${currentImage + 1}`}
                      className="w-full h-96 object-cover"
                    />
                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition">
                      <ChevronLeft size={32} />
                    </button>
                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition">
                      <ChevronRight size={32} />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.screenshots.map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === currentImage ? "bg-cyan-400 w-8" : "bg-gray-600"}`} />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="h-96 bg-gray-800/50 border-2 border-dashed border-gray-600 rounded-3xl flex items-center justify-center">
                    <Globe className="w-24 h-24 text-cyan-400/40" />
                    <p className="text-gray-500 mt-4">Live demo available upon request</p>
                  </div>
                )}
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/40 to-cyan-900/40 border border-purple-500/50">
                <h4 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-4">
                  <Code2 className="w-8 h-8" /> Technology Stack
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {project.tech.map((t) => (
                    <div key={t} className="p-4 bg-black/50 rounded-2xl border border-cyan-500/40 text-center font-bold text-cyan-300 hover:bg-cyan-900/30 transition-all">
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-6">
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                   className="flex-1 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all flex items-center justify-center gap-4">
                  <Github className="w-7 h-7" /> View Code
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                     className="flex-1 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all flex items-center justify-center gap-4">
                    <ExternalLink className="w-7 h-7" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}