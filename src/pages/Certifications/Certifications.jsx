// src/pages/Certifications/Certifications.jsx
import { useState } from "react";
import CertificationsHero from "../../components/certifications/CertificationsHero";
import CertificationCard from "../../components/certifications/CertificationCard";
import CertificationModal from "../../components/certifications/CertificationModal";
import { certificationsData } from "../../components/certifications/certificationsData";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Only 3 items — Degree + Udacity + Leadership
  const displayCerts = certificationsData.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200">
      <main>
        <CertificationsHero />

        <section className="py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto space-y-48">
            <h2 className="text-6xl md:text-7xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Education & Credentials
            </h2>

            {displayCerts.map((cert, index) => (
              <div 
                key={cert.id}
                className={`grid lg:grid-cols-2 gap-20 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Left / Right: Rich Side Text */}
                <div className="space-y-10">
                  <div className="inline-block">
                    <span className="text-cyan-400 font-bold text-sm tracking-widest uppercase">
                      Credential {index + 1} of 3
                    </span>
                  </div>

                  <h3 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent leading-tight">
                    {cert.title}
                  </h3>

                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                    {cert.type === "degree" 
                      ? "My Bachelor of Science in Computer Science — the foundation of everything I do today. Four years of rigorous training in algorithms, systems, and real-world problem-solving."
                      : cert.id === "udacity"
                      ? "My first step into structured online learning. This course solidified my programming fundamentals and gave me the confidence to build anything."
                      : "Recognition for leadership beyond code — organizing workshops, mentoring juniors, and driving tech community growth."}
                  </p>

                  <div className="space-y-4 text-lg">
                    <p className="text-purple-300 font-medium">Issued by: <span className="text-white">{cert.issuer}</span></p>
                    <p className="text-cyan-300 font-medium">Date: <span className="text-white">{cert.date}</span></p>
                    {cert.gpa && <p className="text-yellow-300 font-medium">GPA: <span className="text-white font-bold">{cert.gpa}</span></p>}
                    {cert.examScore && <p className="text-green-300 font-medium">Exit Exam: <span className="text-white font-bold">{cert.examScore}</span></p>}
                  </div>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/60 transition-all group"
                  >
                    View Full Details
                    <span className="group-hover:translate-x-3 transition">→</span>
                  </button>
                </div>

                {/* Right / Left: Small, Elegant Card */}
                <div className="flex justify-center">
                  <div className="w-full max-w-md">
                    <CertificationCard cert={cert} onOpen={setSelectedCert} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Modal */}
      <CertificationModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </div>
  );
}