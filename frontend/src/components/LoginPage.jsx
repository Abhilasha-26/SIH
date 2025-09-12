import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_URL || "";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const fetchPath = API_BASE ? `${API_BASE}/api/auth/login` : `/api/auth/login`;

      const res = await fetch(fetchPath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");

      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      navigate("/profile");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Left side with full cover image (v1 UI) */}
      <div className="relative hidden w-full h-screen md:block">
        <img
          src="/images/sih2-Picsart-AiImageEnhancer.jpg"
          alt="Login illustration"
          className="absolute inset-0 object-cover object-center w-full h-full"
        />
      </div>

      {/* Right side with login form (v1 styling, v2 logic) */}
      <div className="flex items-center justify-center px-6 bg-white">
        <div className="w-full max-w-md p-8 space-y-6 transition-all duration-500 ease-out transform bg-white rounded-2xl drop-shadow-2xl hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-extrabold text-center text-purple-700">Login</h2>

          <p className="text-lg font-medium text-center text-gray-700">
            Welcome to{' '}
            <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              SIHchronize 🚀
            </span>
          </p>

          {error && <p className="text-sm text-center text-red-600">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="flex items-center px-3 mt-1 border rounded-lg">
                <Mail className="w-5 h-5 text-purple-600" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="flex items-center px-3 mt-1 border rounded-lg">
                <Lock className="w-5 h-5 text-purple-600" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 font-semibold text-white transition rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-sm text-center text-gray-600">
            Don’t have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
