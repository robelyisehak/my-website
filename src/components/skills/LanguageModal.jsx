// src/components/skills/LanguageModal.jsx
export default function LanguageModal({ language, isOpen, onClose }) {
  if (!isOpen || !language) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-6" onClick={onClose}>
      <div className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-purple-500/50 rounded-3xl shadow-2xl p-10 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-6 right-6 text-4xl text-gray-400 hover:text-white transition-all hover:rotate-90">×</button>

        <div className="text-center mb-10">
          {language.icon && <img src={language.icon} alt={language.name} className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-white/10 p-4" />}
          <h2 className="text-5xl font-bold text-purple-400 mb-4">{language.name}</h2>
          <div className="text-6xl font-bold text-white mb-2">{language.level}%</div>
          <p className="text-xl text-gray-400">Proficiency Level</p>
        </div>

        <div className="space-y-8 text-lg">
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-3">How I Learned</h3>
            <p className="text-gray-300 leading-relaxed">{language.learnedFrom}</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-3">Projects Built</h3>
            <ul className="space-y-3">
              {language.projects.map((proj, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  {proj}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-pink-400 mb-3">What I Mastered</h3>
            <p className="text-gray-300 leading-relaxed">{language.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}