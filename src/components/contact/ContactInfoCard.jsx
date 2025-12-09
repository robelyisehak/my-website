// src/components/contact/ContactInfoCard.jsx
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

export default function ContactInfoCard() {
  return (
    <div className="space-y-6">
      <div className="p-8 rounded-2xl bg-gray-800/60 border border-cyan-500/30 backdrop-blur-md shadow-xl hover:shadow-cyan-500/40 transition-all">
        <div className="flex items-center gap-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">
            <Phone className="w-10 h-10 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Call Directly</p>
            <a href="tel:+251943273092" className="text-2xl font-bold text-cyan-300 hover:text-cyan-400 transition-colors">
              +251-943-273-092
            </a>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-2xl bg-gray-800/60 border border-purple-500/30 backdrop-blur-md shadow-xl hover:shadow-purple-500/40 transition-all">
        <div className="flex items-center gap-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600">
            <Mail className="w-10 h-10 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Send Email</p>
            <a href="mailto:robelyisehak171@gmail.com" className="text-xl font-bold text-purple-300 hover:text-purple-400 transition-colors break-all">
              robelyisehak171@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-2xl bg-gray-800/60 border border-green-500/30 backdrop-blur-md shadow-xl hover:shadow-green-500/40 transition-all">
        <div className="flex items-center gap-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600">
            <MapPin className="w-10 h-10 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Location</p>
            <p className="text-xl font-bold text-green-300">Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-2xl bg-gray-800/60 border border-indigo-500/30 backdrop-blur-md shadow-xl hover:shadow-indigo-500/40 transition-all">
        <div className="flex items-center gap-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-700">
            <Linkedin className="w-10 h-10 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Connect on LinkedIn</p>
            <a href="https://linkedin.com/in/robel25" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-indigo-300 hover:text-indigo-400 transition-colors">
              linkedin.com/in/robel25
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}