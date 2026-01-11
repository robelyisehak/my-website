// src/components/certifications/CertificationsHero.jsx
import { Download, FileText } from "lucide-react";
import { downloadCV } from "../../utils/helpers";

export default function CertificationsHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-cyan-900/20 to-black opacity-60" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-500 bg-clip-text text-transparent mb-8">
          Education & Certifications
        </h1>
        <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto mb-16">
          Bachelor of Science in Computer Science + Verified Professional Credentials
        </p>

        <button 
          onClick={downloadCV}
          className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full text-2xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all group"
        >
          <Download className="w-8 h-8 group-hover:scale-110 transition-transform" />
          Download My Full CV (PDF)
          <FileText className="w-8 h-8 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </section>
  );
}