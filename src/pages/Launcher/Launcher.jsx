// src/pages/Launcher/Launcher.jsx
import LauncherCard from "../../components/launcher/LauncherCard";
import { launcherApps } from "../../components/launcher/launcherData";

// Make sure image path is correct for Vite: use /src/assets/...
import profilePic from "../../assets/images/robel_cv_photo.jpg";

export default function Launcher() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden relative">
      {/* Subtle Background Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Clean Profile Photo + Name */}
        <div className="text-center mb-24">
          <div className="relative inline-block group">
            <div className="relative overflow-hidden rounded-full border-4 border-cyan-500/30 shadow-2xl">
              <img
                src={profilePic}
                alt="Robel Yisehak"
                className="w-40 h-40 md:w-52 md:h-52 object-cover"
              />
            </div>
            {/* Subtle ring glow on hover */}
            <div className="absolute inset-0 rounded-full ring-4 ring-cyan-400/0 group-hover:ring-cyan-400/40 transition-all duration-700" />
          </div>

          {/* Name & Title */}
          <h1 className="mt-10 text-6xl md:text-8xl font-extrabold text-white tracking-tight">
            ROBEL YISEHAK
          </h1>
          <p className="mt-4 text-2xl md:text-4xl text-cyan-400 font-bold tracking-wide">
            Frontend Web Developer
          </p>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Welcome to my digital universe. Choose your destination.
          </p>
        </div>

        {/* App Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-16 max-w-5xl mx-auto">
          {launcherApps.map((app) => (
            <LauncherCard key={app.name} app={app} />
          ))}
        </div>

        {/* Footer */}
        <p className="absolute bottom-8 text-gray-500 text-sm tracking-wide">
          © 2025 Robel Yisehak — Built with passion
        </p>
      </div>
    </div>
  );
}
