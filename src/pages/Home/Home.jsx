// src/pages/Home/Home.jsx
import { useState } from "react";
import HomeHero from "../../components/home/HomeHero";
import WhatIDoSection from "../../components/home/WhatIDoSection";
import FinalCTA from "../../components/home/FinalCTA";
import HomeModal from "../../components/home/HomeModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-200 font-sans antialiased">
      <main>
        <HomeHero />
        <WhatIDoSection onOpenModal={openModal} />
        <FinalCTA />
      </main>

      <HomeModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        title={modalContent.title} 
        content={modalContent.content} 
      />
    </div>
  );
}