// src/components/launcher/LauncherCard.jsx
import { Link } from "react-router-dom";

export default function LauncherCard({ app }) {
  return (
    <Link to={app.path} className="block w-full">
      <div
        className={`relative aspect-square w-full rounded-3xl overflow-hidden
                    bg-gradient-to-br ${app.gradient}
                    shadow-2xl border border-white/20 backdrop-blur-xl
                    transform transition-all duration-500
                    hover:scale-110 hover:-translate-y-6 hover:shadow-3xl ${app.shadow}
                    hover:border-cyan-400/60 cursor-pointer flex items-center justify-center`}
      >
        {/* Inner Glass Effect */}
        <div className="absolute inset-4 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20" />

        {/* Floating Glow */}
        <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent blur-3xl scale-0 hover:scale-150 transition-transform duration-1000" />

        {/* Icon + Name — Perfectly Centered */}
        <div className="relative flex flex-col items-center justify-center text-white z-10 h-full w-full p-4">
          <span className="text-6xl md:text-7xl lg:text-8xl mb-4 drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-110">
            {app.icon}
          </span>
          <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent text-center px-2">
            {app.name}
          </h3>
        </div>

        {/* Shine Sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
      </div>
    </Link>
  );
}