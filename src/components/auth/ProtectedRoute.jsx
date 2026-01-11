// src/components/auth/ProtectedRoute.jsx
import { useState, useEffect } from "react";
import Login from "./Login";

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  const checkAuth = () => {
    const authStatus = sessionStorage.getItem("admin_authenticated");
    setIsAuthenticated(authStatus === "true");
    setIsChecking(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogin = (success) => {
    if (success) {
      checkAuth();
    }
  };

  if (isChecking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return children;
}

