// src/components/skills/LanguageCard.jsx
export default function LanguageCard({ language, onOpenDetail }) {
  return (
    <div
      onClick={() => onOpenDetail(language)}
      className="group cursor-pointer p-8 rounded-2xl bg-gray-800/60 border border-gray-700 hover:border-purple-500/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
    >
      {language.icon ? (
        <img src={language.icon} alt={language.name} className="w-20 h-20 mx-auto mb-6 rounded-xl bg-white/10 p-3" />
      ) : (
        <div className="w-20 h-20 mx-auto mb-6 bg-gray-700 rounded-xl" />
      )}
      <h4 className="text-2xl font-bold text-center mb-3 group-hover:text-purple-400 transition-colors">
        {language.name}
      </h4>
      <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
        <div 
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000"
          style={{ width: `${language.level}%` }}
        />
      </div>
      <p className="text-right text-sm text-gray-400">{language.level}% Mastery</p>
    </div>
  );
}