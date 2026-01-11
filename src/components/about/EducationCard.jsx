// src/components/about/EducationCard.jsx
import { GraduationCap, Calendar, Award } from "lucide-react";
import { aboutData } from "../about/aboutData";

export default function EducationCard({ onOpenModal }) {
  const edu = aboutData.education;

  return (
    <div
      className="p-8 rounded-2xl bg-gray-800/60 border border-purple-500/30 backdrop-blur-md shadow-lg cursor-pointer hover:shadow-purple-500/30 transition-all"
      onClick={() => onOpenModal('education')}
    >
      <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center gap-3">
        <GraduationCap className="w-8 h-8" /> Education
      </h3>

      <div className="space-y-4">
        <div>
          <h4 className="text-xl font-bold text-cyan-400">{edu.degree}</h4>
          <p className="text-lg text-gray-300">{edu.university}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-lg">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-gray-400" />
            <span>Graduated: {edu.graduation}</span>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-yellow-500" />
            <span>GPA: {edu.gpa}</span>
          </div>
          <div className="flex items-center gap-3 col-span-2">
            <Award className="w-5 h-5 text-green-500" />
            <span>Exit Exam: {edu.exitExam}</span>
          </div>
        </div>
      </div>
    </div>
  );
}