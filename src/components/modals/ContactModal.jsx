export default function ContactModal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center 
                    bg-black/70 backdrop-blur-sm z-[999]">
      
      <div className="bg-white/10 border border-white/20 p-6 rounded-xl 
                      w-[90%] max-w-md shadow-xl animate-scaleIn">

        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-400"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
