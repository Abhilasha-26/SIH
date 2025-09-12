import React, { useState } from "react";
import { User, Mail, Lock, Briefcase } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Vite: use import.meta.env for environment variables
const API_URL = import.meta.env.VITE_API_URL || ""; // leave empty if you prefer relative paths

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    userId: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!formData.role) {
      setError("Please select a role");
      return;
    }

    setLoading(true);

    try {
      const fetchPath = API_URL
        ? `${API_URL}/api/auth/register`
        : `/api/auth/register`;

      const res = await fetch(fetchPath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName,
          email: formData.email,
          userId: formData.userId,
          password: formData.password,
          role: formData.role,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      if (data.token) localStorage.setItem("token", data.token);
      if (data.user) localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/profile");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Left side - Full image (UI from v1) */}
      <div className="relative hidden w-full h-screen md:block">
        <img
          src="/images/img2-Picsart-AiImageEnhancer.jpg"
          alt="Register illustration"
          className="absolute inset-0 object-cover object-center w-full h-full"
        />
      </div>

      {/* Right side - Register Form (v1 styling, v2 logic) */}
      <div className="flex items-center justify-center px-6 bg-white">
        <div className="w-full max-w-md p-8 space-y-6 transition-all duration-500 ease-out transform bg-white rounded-2xl drop-shadow-2xl hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-extrabold text-center text-purple-700">Create Account</h2>

          <p className="text-lg font-medium text-center text-gray-700">
            Welcome to{' '}
            <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              SIHchronize 🚀
            </span>
          </p>

          {error && <p className="text-sm text-center text-red-600">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name fields (v1 pattern) */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {["firstName", "middleName", "lastName"].map((name) => (
                <div key={name} className="flex items-center px-3 border rounded-lg">
                  <User className="w-5 h-5 text-purple-600" />
                  <input
                    type="text"
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required={name !== "middleName"}
                    className="w-full px-3 py-2 outline-none"
                    placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
                  />
                </div>
              ))}
            </div>

            {/* Email */}
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

            {/* Registration Number / userId (keep v2 field but v1 look) */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Registration Number</label>
              <div className="flex items-center px-3 mt-1 border rounded-lg">
                <Mail className="w-5 h-5 text-purple-600" />
                <input
                  type="text"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 outline-none"
                  placeholder="unique reg. no."
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <div className="flex items-center px-3 mt-1 border rounded-lg">
                <Briefcase className="w-5 h-5 text-purple-600" />
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-transparent outline-none"
                >
                  <option value="">Select a role</option>
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            {/* Passwords (v1 style) */}
            {['password', 'confirmPassword'].map((name, idx) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700">
                  {idx === 0 ? 'Password' : 'Confirm Password'}
                </label>
                <div className="flex items-center px-3 mt-1 border rounded-lg">
                  <Lock className="w-5 h-5 text-purple-600" />
                  <input
                    type="password"
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 outline-none"
                    placeholder={idx === 0 ? '••••••••' : 'Re-enter password'}
                  />
                </div>
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 font-semibold text-white transition rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {loading ? 'Registering...' : 'Sign Up'}
            </button>
          </form>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
