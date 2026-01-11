// src/components/home/HomeModal.jsx
export default function HomeModal({ isOpen, onClose, title, content }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4" onClick={onClose}>
      <div 
        className="relative max-w-3xl w-full bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-cyan-500/50 rounded-2xl shadow-2xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-6 text-4xl text-gray-400 hover:text-white transition hover:rotate-90"
        >
          ×
        </button>
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">{title}</h2>
        <div className="text-gray-200 text-lg leading-relaxed">{content}</div>
      </div>
    </div>
  );
}