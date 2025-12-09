// src/components/modals/AboutModal.jsx
export default function AboutModal({ isOpen, onClose, title, icon: Icon, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
      <div className="relative w-full max-w-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/30 rounded-2xl shadow-2xl p-8 max-h-[85vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl">
          ×
        </button>
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
          {Icon && <Icon className="w-8 h-8" />}
          {title}
        </h2>
        <div className="text-gray-200 space-y-4 text-lg leading-relaxed">{children}</div>
      </div>
    </div>
  );
}