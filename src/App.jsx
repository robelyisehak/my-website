// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skill/Skills";
import Portfolio from "./pages/Portfolio/Portfolio";
import Certifications from "./pages/Certifications/Certifications";
import Contact from "./pages/Contact/Contact";
import Admin from "./pages/Admin/Admin";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } 
        />
      </Route>
    </Routes>
  );
}
