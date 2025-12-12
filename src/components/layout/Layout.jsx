// src/components/layout/Layout.jsx
import { Outlet } from "react-router-dom";  // ← THIS LINE IS REQUIRED
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32">
        <Outlet />   {/* ← THIS RENDERS Home, About, Skills, etc. */}
      </main>
      <Footer />
    </div>
  );
}