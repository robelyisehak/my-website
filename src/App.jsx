import { Routes, Route } from "react-router-dom";

// Pages
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skill/Skills";
import Portfolio from "./pages/Portfolio/Portfolio";
import Certifications from "./pages/Certifications/Certifications";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />

      <Route path="/About" element={<Layout><About /></Layout>} />
      <Route path="/Skills" element={<Layout><Skills /></Layout>} />
      <Route path="/Portfolio" element={<Layout><Portfolio /></Layout>} />
      <Route path="/Certifications" element={<Layout><Certifications /></Layout>} />
      <Route path="/Contact" element={<Layout><Contact /></Layout>} />
    </Routes>
  );
}

export default App;
