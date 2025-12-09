// src/components/certifications/CertificationCard.jsx
import { GraduationCap, Award, Calendar, Trophy, Star } from "lucide-react";

export default function CertificationCard({ cert, onOpen }) {
  return (
    <div
      onClick={() => onOpen(cert)}
      className="group cursor-pointer p-6 rounded-2xl bg-gray-800/60 border border-purple-500/30 
                 backdrop-blur-md hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/30 
                 transition-all duration-500 hover:scale-105"
    >
      {/* Top Gradient Bar */}
      <div className={`h-2 rounded-t-2xl bg-gradient-to-r ${cert.badgeColor}`} />

      <div className="flex items-center justify-between mb-6 mt-6">
        <div className={`p-4 rounded-xl bg-gradient-to-br ${cert.badgeColor}`}>
          {cert.type === "degree" ? 
            <GraduationCap className="w-10 h-10 text-white" /> : 
            <Award className="w-10 h-10 text-white" />
          }
        </div>
        <span className="text-green-400 text-sm font-bold flex items-center gap-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
          Verified
        </span>
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
        {cert.title}
      </h3>
      <p className="text-purple-300 text-sm mb-4">{cert.issuer}</p>

      <div className="space-y-2 text-sm text-gray-400 mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{cert.date}</span>
        </div>
        {cert.gpa && (
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span>GPA: {cert.gpa}</span>
          </div>
        )}
        {cert.examScore && (
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-green-500" />
            <span>Exit Exam: {cert.examScore}</span>
          </div>
        )}
      </div>

      <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-bold text-sm 
                         hover:shadow-xl transition-all flex items-center justify-center gap-2">
        View Details →
      </button>
    </div>
  );
}