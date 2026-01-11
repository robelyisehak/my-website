// src/components/certifications/CertificationModal.jsx
import { GraduationCap, Award, Download, Trophy, Star, Calendar } from "lucide-react";

export default function CertificationModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6 overflow-y-auto" onClick={onClose}>
      <div 
        className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/40 
                    rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500/30"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-3xl text-gray-400 hover:text-white transition-all hover:rotate-90">×</button>

        {/* Header */}
        <div className={`h-32 bg-gradient-to-r ${cert.badgeColor} relative flex items-center justify-center`}>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-2">{cert.title}</h2>
            <p className="text-xl text-white/90">{cert.issuer}</p>
          </div>
        </div>

        <div className="p-10">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-purple-500/30 text-center">
              <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <p className="text-2xl font-bold text-white">{cert.date}</p>
              <p className="text-gray-400 text-sm">Issued</p>
            </div>
            {cert.gpa && (
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-yellow-500/30 text-center">
                <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <p className="text-2xl font-bold text-yellow-300">{cert.gpa}</p>
                <p className="text-gray-400 text-sm">GPA</p>
              </div>
            )}
            {cert.examScore && (
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-green-500/30 text-center">
                <Star className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <p className="text-2xl font-bold text-green-300">{cert.examScore}</p>
                <p className="text-gray-400 text-sm">Exit Exam</p>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="bg-gray-800/50 rounded-2xl p-8 mb-10 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">About This Credential</h3>
            <p className="text-lg leading-relaxed text-gray-300">{cert.description}</p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Skills & Knowledge Gained</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {cert.skills.map((skill, i) => (
                <div key={i} className="bg-gray-800/50 rounded-xl p-4 border border-purple-500/30 flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a 
              href="/Robel-Yisehak-CV.pdf" 
              download="Robel-Yisehak-CV.pdf"
              className="inline-flex items-center gap-4 px-10 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 
                         rounded-xl font-bold text-lg hover:shadow-2xl transition-all"
            >
              <Download className="w-6 h-6" /> Download Full CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}