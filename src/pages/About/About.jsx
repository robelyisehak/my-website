// src/pages/About/About.jsx
import { useState } from "react";
import { User, GraduationCap, Award, Languages } from "lucide-react";

import AboutHero from "../../components/about/AboutHero";
import ProfileCard from "../../components/about/ProfileCard";
import EducationCard from "../../components/about/EducationCard";
import CertificationsCard from "../../components/about/CertificationsCard";
import LanguageCard from "../../components/about/LanguageCard";
import ContactInfoCard from "../../components/about/ContactInfoCard";
import AboutModal from "../../components/modals/AboutModal";
import ProfileModal from "../../components/about/ProfileModal"; // ← NEW: Your CEO-level modal

import { aboutData } from "../../components/about/aboutData";

export default function About() {
  const [activeModal, setActiveModal] = useState(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false); // ← For the new modal

  const openModal = (key) => setActiveModal(key);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200">
      <main>
        <AboutHero />

        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Left Column */}
              <div className="space-y-10">
                <ProfileCard onOpenModal={() => setProfileModalOpen(true)} />
                <ContactInfoCard />
              </div>

              {/* Middle Column */}
              <div className="space-y-10">
                {/* Professional Profile Card — Now opens the new modal */}
                <div
                  className="p-10 rounded-2xl bg-gray-800/60 border border-cyan-500/30 backdrop-blur-md shadow-xl cursor-pointer hover:shadow-cyan-500/30 transition-all"
                  onClick={() => setProfileModalOpen(true)}
                >
                  <h3 className="text-3xl font-bold mb-6 text-cyan-400 flex items-center gap-3">
                    <User className="w-8 h-8" /> Professional Profile
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-300 line-clamp-6">
                    {aboutData.profile.fullText}
                  </p>
                  <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold hover:shadow-xl transition-all flex items-center gap-2">
                    View Full Profile →
                  </button>
                </div>

                <EducationCard onOpenModal={openModal} />
              </div>

              {/* Right Column */}
              <div className="space-y-10">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/40 backdrop-blur-md shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-3">
                    Featured Projects
                  </h3>
                  <div className="space-y-4">
                    {aboutData.featuredProjects.map((proj, i) => (
                      <div key={i} className="p-4 rounded-xl bg-black/40 border border-purple-500/30 hover:border-cyan-400 transition-colors">
                        <h4 className="font-bold text-white">{proj.title}</h4>
                        <p className="text-sm text-gray-400">{proj.tech}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  <CertificationsCard onOpenModal={openModal} />
                  <LanguageCard onOpenModal={openModal} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* === ALL MODALS === */}

      {/* 1. NEW: Full Professional Profile Modal (with photo on right) */}
      <ProfileModal 
        isOpen={profileModalOpen} 
        onClose={() => setProfileModalOpen(false)} 
      />

      {/* 2. Education Modal */}
      <AboutModal 
        isOpen={activeModal === 'education'} 
        onClose={closeModal} 
        title="Education Details" 
        icon={GraduationCap}
      >
        <p className="text-lg mb-6">Bachelor of Science in Computer Science from Debre Markos University.</p>
        <ul className="space-y-4 text-lg">
          <li>• Graduated: {aboutData.education.graduation}</li>
          <li>• GPA: {aboutData.education.gpa}</li>
          <li>• Exit Exam Score: {aboutData.education.exitExam}</li>
        </ul>
      </AboutModal>

      {/* 3. Certifications Modal */}
      <AboutModal 
        isOpen={activeModal === 'certifications'} 
        onClose={closeModal} 
        title="Certifications" 
        icon={Award}
      >
        {aboutData.certifications.map((c, i) => (
          <div key={i} className="flex items-start gap-4 mb-6">
            <Award className="w-8 h-8 text-purple-400 mt-1" />
            <div>
              <strong>{c.name}</strong> - {c.issuer}<br />
              <span className="text-gray-400">({c.date})</span>
            </div>
          </div>
        ))}
      </AboutModal>

      {/* 4. Languages Modal */}
      <AboutModal 
        isOpen={activeModal === 'languages'} 
        onClose={closeModal} 
        title="Language Proficiency" 
        icon={Languages}
      >
        {aboutData.languages.map((lang) => (
          <div key={lang.name} className="text-center mb-8">
            <h4 className="text-2xl font-bold text-cyan-400 mb-2">{lang.name}</h4>
            <p className="text-3xl font-bold text-green-400">{lang.level}</p>
          </div>
        ))}
      </AboutModal>
    </div>
  );
}