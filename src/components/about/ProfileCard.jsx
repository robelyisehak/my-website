// src/components/about/ProfileCard.jsx
import { useState, useEffect } from "react";
import { User, Briefcase, ChevronRight } from "lucide-react";
import { aboutData } from "../about/aboutData";
import { getPhoto } from "../../utils/helpers";
import defaultProfileImage from "../../assets/images/profile1.jpg";

export default function ProfileCard({ onOpenModal }) {
  const [profileImage, setProfileImage] = useState(defaultProfileImage);

  useEffect(() => {
    const loadPhoto = () => {
      const savedPhoto = getPhoto("aboutProfileCardPhoto", defaultProfileImage);
      setProfileImage(savedPhoto);
    };
    
    loadPhoto();
    
    const handleStorageChange = (e) => {
      if (e.key === "admin_aboutProfileCardPhoto") {
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
    <div 
      className="group cursor-pointer"
      onClick={() => onOpenModal('profile')}
    >
      <div className="relative rounded-3xl overflow-hidden border-4 border-gradient-to-r from-cyan-500 to-purple-500 shadow-2xl group-hover:scale-105 transition-all duration-500">
        <img src={profileImage} alt={aboutData.profile.name} className="w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-8">
          <div>
            <h2 className="text-4xl font-bold text-white">{aboutData.profile.name}</h2>
            <p className="text-xl text-cyan-400 flex items-center gap-2 mt-2">
              <Briefcase className="w-6 h-6" /> {aboutData.profile.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}