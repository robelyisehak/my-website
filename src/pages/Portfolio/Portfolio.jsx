// src/pages/Portfolio/Portfolio.jsx
import { useState } from "react";
import PortfolioHero from "../../components/portfolio/PortfolioHero";
import ProjectCard from "../../components/portfolio/ProjectCard";
import ProjectModal from "../../components/portfolio/ProjectModal";
import { projectsData } from "../../components/portfolio/projectsData";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (id) => setSelectedProject(projectsData.find(p => p.id === id));
  const closeModal = () => setSelectedProject(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200">
      <main>
        <PortfolioHero />

        <section className="py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto space-y-40">
            <h2 className="text-6xl md:text-7xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            {projectsData.map((project, index) => (
              <div 
                key={project.id}
                className={`grid lg:grid-cols-2 gap-20 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Left: Project Card */}
                <div className="flex justify-center">
                  <div className="w-full max-w-lg transform hover:scale-105 transition-all duration-700">
                    <ProjectCard project={project} onOpen={openModal} />
                  </div>
                </div>

                {/* Right: Short Description */}
                <div className="space-y-8">
                  <span className="text-cyan-400 font-bold text-sm tracking-widest uppercase">Project {index + 1}</span>
                  <h3 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span key={t} className="px-4 py-2 bg-purple-900/50 text-purple-300 rounded-full text-sm font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => openModal(project.id)}
                    className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/60 transition-all group"
                  >
                    View Full Project
                    <span className="group-hover:translate-x-3 transition">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={closeModal} />
    </div>
  );
}