// src/components/launcher/launcherData.js
export const launcherApps = [
  {
    name: "Home",
    path: "/home",
    icon: "🏠",
    gradient: "from-cyan-500 to-blue-600",
    shadow: "shadow-cyan-500/50"
  },
  {
    name: "About",
    path: "/about",
    icon: "👤",
    gradient: "from-purple-500 to-pink-600",
    shadow: "shadow-purple-500/50"
  },
  {
    name: "Skills",
    path: "/skills",           // ← FIXED: removed the comma!
    icon: "⚡",
    gradient: "from-yellow-500 to-orange-600",
    shadow: "shadow-yellow-500/50"
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    icon: "💼",
    gradient: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/50"
  },
  {
    name: "Education",
    path: "/certifications",
    icon: "🎓",
    gradient: "from-indigo-500 to-purple-600",
    shadow: "shadow-indigo-500/50"
  },
  {
    name: "Contact",
    path: "/contact",
    icon: "✉️",
    gradient: "from-rose-500 to-pink-600",
    shadow: "shadow-rose-500/50"
  }
];