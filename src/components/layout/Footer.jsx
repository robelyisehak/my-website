// src/components/layout/Footer.jsx
import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import { getPhoto } from "../../utils/helpers";
import defaultProfilePhoto from "../../assets/images/robel_cv_photo.jpg";

export default function Footer() {
  const [profilePhoto, setProfilePhoto] = useState(defaultProfilePhoto);

  useEffect(() => {
    const loadPhoto = () => {
      // Check for shared header/footer photo first, then fall back to individual footer photo
      const sharedPhoto = localStorage.getItem("admin_headerFooterPhoto");
      const savedPhoto = sharedPhoto || getPhoto("footerPhoto", defaultProfilePhoto);
      setProfilePhoto(savedPhoto);
    };
    
    loadPhoto();
    
    const handleStorageChange = (e) => {
      if (e.key === "admin_headerFooterPhoto" || e.key === "admin_footerPhoto") {
        loadPhoto();
      }
    };
    
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("photoUpdated", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("photoUpdated", handleStorageChange);
    };
  }, []);
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-black to-gray-900 border-t border-cyan-500/30 py-12">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
        
        {/* Left - Photo + Name */}
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-6 mb-8">
            <img 
              src={profilePhoto} 
              alt="Robel Yisehak"
              className="w-24 h-24 rounded-full object-cover border-4 border-cyan-500 shadow-2xl"
            />
            <div>
              <h3 className="text-3xl font-bold text-white">ROBEL YISEHAK</h3>
              <p className="text-cyan-400 font-medium">Frontend Web Developer</p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed text-sm">
            <strong className="text-white">BSc Computer Science</strong><br />
            Debre Markos University • Graduated June 20, 2025<br />
            GPA: 3.71 / 4.00 • Exit Exam: 86%
          </p>
        </div>

        {/* Center - Contact */}
        <div className="text-center">
          <h4 className="text-2xl font-bold text-cyan-400 mb-8">CONTACT</h4>

          <div className="space-y-5 text-lg text-white">
            <div className="flex items-center justify-center gap-4">
              <Phone className="w-6 h-6 text-cyan-400" />
              <a href="tel:+251943273092" className="hover:text-cyan-400 transition">
                +251-943-273-092
              </a>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Mail className="w-6 h-6 text-cyan-400" />
              <a href="mailto:robelyisehak171@gmail.com" className="hover:text-cyan-400 transition break-all">
                robelyisehak171@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center gap-4">
              <MapPin className="w-6 h-6 text-cyan-400" />
              <span className="text-white">Addis Ababa, Ethiopia</span>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Linkedin className="w-6 h-6 text-cyan-400" />
              <a href="https://linkedin.com/in/robel25" className="hover:text-cyan-400 transition">
                linkedin.com/in/robel25
              </a>
            </div>
          </div>
        </div>

        {/* Right - Quick Links */}
        <div className="text-center lg:text-right">
          <h4 className="text-2xl font-bold text-cyan-400 mb-8">QUICK LINKS</h4>

          <div className="space-y-3 text-white text-sm">
            <a href="/" className="block hover:text-cyan-400 transition">Home</a>
            <a href="/about" className="block hover:text-cyan-400 transition">About</a>
            <a href="/skills" className="block hover:text-cyan-400 transition">Skills</a>
            <a href="/portfolio" className="block hover:text-cyan-400 transition">Portfolio</a>
            <a href="/certifications" className="block hover:text-cyan-400 transition">
              Education & Certifications
            </a>
            <a href="/contact" className="block hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright — Super Compact */}
      <div className="mt-4 pt-2 border-t border-gray-800 text-center">
        <p className="text-sm text-gray-500">
          © 2025 Robel Yisehak. All rights reserved.
        </p>
      </div>
    </footer>
  );
}