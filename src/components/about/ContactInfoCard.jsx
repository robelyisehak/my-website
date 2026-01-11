// src/components/about/ContactInfoCard.jsx
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { aboutData } from "../about/aboutData";

export default function ContactInfoCard() {
  const contact = aboutData.contact;

  return (
    <div className="p-8 rounded-2xl bg-gray-800/60 border border-purple-500/30 backdrop-blur-md shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center gap-3">
        <Mail className="w-7 h-7" /> Contact Information
      </h3>

      <div className="space-y-5 text-lg">
        <div className="flex items-center gap-4 hover:text-cyan-400 transition-colors">
          <Phone className="w-6 h-6 text-cyan-400" />
          <span>{contact.phone}</span>
        </div>
        <div className="flex items-center gap-4 hover:text-cyan-400 transition-colors">
          <Mail className="w-6 h-6 text-cyan-400" />
          <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a>
        </div>
        <div className="flex items-center gap-4 hover:text-cyan-400 transition-colors">
          <MapPin className="w-6 h-6 text-cyan-400" />
          <span>{contact.location}</span>
        </div>
        <div className="flex items-center gap-4 hover:text-cyan-400 transition-colors">
          <Linkedin className="w-6 h-6 text-cyan-400" />
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
            linkedin.com/in/robel25
          </a>
        </div>
      </div>
    </div>
  );
}