// src/components/about/CertificationsCard.jsx
import { Award, ChevronRight } from "lucide-react";
import { aboutData } from "../about/aboutData";

export default function CertificationsCard({ onOpenModal }) {
  return (
    <div
      className="p-6 rounded-2xl bg-gray-800/60 border border-cyan-500/30 backdrop-blur-md cursor-pointer hover:shadow-cyan-500/30 transition-all"
      onClick={() => onOpenModal('certifications')}
    >
      <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-3">
        <Award className="w-7 h-7" /> Certifications
      </h3>

      <ul className="space-y-3 text-gray-300">
        {aboutData.certifications.map((cert, i) => (
          <li key={i} className="flex items-center gap-3">
            <ChevronRight className="w-5 h-5 text-purple-400" />
            <div>
              <span className="font-medium">{cert.name}</span> - {cert.issuer}
              <span className="text-sm text-gray-500 block">({cert.date})</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}