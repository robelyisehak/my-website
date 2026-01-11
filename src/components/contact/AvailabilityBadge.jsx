// src/components/contact/AvailabilityBadge.jsx
import { CheckCircle } from "lucide-react";

export default function AvailabilityBadge() {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/50 text-center shadow-xl">
      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
      <p className="text-3xl font-bold text-green-400">AVAILABLE FOR HIRE</p>
      <p className="text-gray-300 mt-2 text-lg">
        Freelance • Full-Time • Remote • On-Site
      </p>
    </div>
  );
}