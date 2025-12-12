// src/App.jsx
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Launcher from "./pages/Launcher/Launcher";           // ← THIS IS KEY
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skill/Skills";
import Portfolio from "./pages/Portfolio/Portfolio";
import Certifications from "./pages/Certifications/Certifications";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <Routes>
      {/* THIS SHOWS YOUR LAUNCHER FIRST */}
      <Route path="/" element={<Launcher />} />

      {/* ALL OTHER PAGES */}
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}