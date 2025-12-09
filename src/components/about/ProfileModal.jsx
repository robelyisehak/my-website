// src/components/about/ProfileModal.jsx
import { X, User, Briefcase, MapPin, Mail, Linkedin, Globe, Download } from "lucide-react";

export default function ProfileModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/30 rounded-3xl shadow-2xl my-8 max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white text-4xl z-20 transition hover:rotate-90"
        >
          ×
        </button>

        {/* Header with Photo on Right */}
        <div className="h-32 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 relative">
          <div className="absolute -bottom-20 right-10">
            <div className="relative group">
              <img 
                src="../../src/assets/images/profile 2.jpg" 
                alt="Robel Yisehak"
                className="w-40 h-40 rounded-2xl object-cover border-8 border-gray-900 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/40 to-purple-600/40 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* SCROLLABLE CONTENT AREA */}
        <div className="flex-1 overflow-y-auto px-12 pt-24 pb-12 scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-gray-900">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left & Center: Professional Details */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-5xl font-extrabold text-white mb-2">Robel Yisehak</h2>
                <p className="text-2xl text-cyan-400 font-bold flex items-center gap-3">
                  <Briefcase className="w-7 h-7" /> Frontend Web Developer
                </p>
                <p className="text-lg text-gray-400 mt-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Addis Ababa, Ethiopia
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Professional Summary</h3>
                <p className="text-lg leading-relaxed text-gray-300">
                  Computer Science graduate with a passion for crafting high-performance, visually stunning web experiences. 
                  Specializing in React, Next.js, and Tailwind CSS, I transform ideas into scalable, user-centric digital solutions. 
                  Experienced in full-stack development (PHP, Node.js, MySQL), responsive design, and modern DevOps workflows.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-purple-400 mb-6">What Drives Me</h3>
                <p className="text-lg leading-relaxed text-gray-300">
                  I believe great software isn't just about code — it's about solving real problems, delighting users, 
                  and pushing the boundaries of what's possible on the web. Every project is an opportunity to learn, grow, 
                  and deliver measurable impact. I'm driven by clean code, elegant design, and making technology work for people.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/20">
                  <h4 className="text-xl font-bold text-purple-400 mb-4">Currently Open To</h4>
                  <ul className="text-gray-300 space-y-3 text-lg">
                    <li>• Full-Time Roles</li>
                    <li>• Freelance Projects</li>
                    <li>• Remote Opportunities</li>
                    <li>• Tech Mentorship</li>
                    <li>• Open Source</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-green-500/20">
                  <h4 className="text-xl font-bold text-green-400 mb-4">Let's Connect</h4>
                  <div className="space-y-4 text-lg">
                    <a href="mailto:robelyisehak171@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition">
                      <Mail className="w-6 h-6" /> robelyisehak171@gmail.com
                    </a>
                    <a href="https://linkedin.com/in/robel25" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition">
                      <Linkedin className="w-6 h-6" /> linkedin.com/in/robel25
                    </a>
                    <a href="/Robel-Yisehak-CV.pdf" download className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition">
                      <Download className="w-6 h-6" /> Download Full CV
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl border border-purple-500/30">
                <p className="text-2xl font-bold text-cyan-300 text-center">
                  Ready to build something amazing together?
                </p>
                <p className="text-center text-gray-300 mt-4 text-lg">
                  Let's turn your vision into reality — one line of code at a time.
                </p>
              </div>
            </div>

            {/* Right Column (empty — photo is in header) */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </div>
  );
}