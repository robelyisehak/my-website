// src/components/auth/Login.jsx
import { useState } from "react";
import { Lock, AlertCircle } from "lucide-react";

const DEFAULT_PASSWORD = "rol123";

export default function Login({ onLogin }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Get password from localStorage or use default
    const savedPassword = localStorage.getItem("admin_password") || DEFAULT_PASSWORD;

    // Simulate a small delay for better UX
    setTimeout(() => {
      if (password === savedPassword) {
        // Store authentication in sessionStorage (clears when browser closes)
        sessionStorage.setItem("admin_authenticated", "true");
        onLogin(true);
      } else {
        setError("Incorrect password. Please try again.");
        setPassword("");
      }
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-gray-900/50 rounded-3xl p-10 border border-cyan-500/30 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-extrabold text-white mb-2">
              Admin Access
            </h1>
            <p className="text-gray-400">
              Enter password to access admin panel
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-gray-300 font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className="w-full px-6 py-4 bg-gray-800/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition"
                placeholder="Enter admin password"
                autoFocus
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="flex items-center gap-3 px-4 py-3 bg-red-900/30 border border-red-500/50 rounded-xl text-red-400">
                <AlertCircle size={20} />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || !password}
              className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-lg text-white hover:shadow-2xl hover:shadow-cyan-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  <Lock size={20} />
                  Login
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <a
              href="/"
              className="text-cyan-400 hover:text-cyan-300 text-sm transition"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

