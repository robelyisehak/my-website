import { useState } from "react";
import { Menu, X } from "lucide-react";

// IMPORT IMAGE CORRECTLY
import profilePhoto from "../../assets/images/robel_cv_photo.jpg";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Education & Certs", href: "/certifications" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        
        {/* LEFT SIDE - Your CV Photo + Name + Title */}
        <a href="/" className="flex items-center gap-4 group">
          <div className="relative">
            <img 
              src={profilePhoto}
              alt="Robel Yisehak"
              className="w-16 h-16 rounded-full object-cover border-4 border-cyan-500 shadow-xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 opacity-40 blur-xl group-hover:opacity-60 transition-opacity" />
          </div>
          
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wider">
              ROBEL YISEHAK
            </h1>
            <p className="text-sm text-cyan-400 font-medium tracking-widest">
              FRONTEND WEB DEVELOPER
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-cyan-400 font-medium text-lg transition-all hover:translate-y-[-2px]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-cyan-400 text-3xl"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-900/98 border-t border-cyan-500/30">
          <nav className="py-8 px-6 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-medium text-gray-300 hover:text-cyan-400 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
