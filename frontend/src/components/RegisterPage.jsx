// src/components/RegisterPage.jsx
import React, { useState } from "react";
import { User, Mail, Lock, Briefcase } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
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
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left side - Full image */}
            <div className="hidden md:block relative h-screen w-full">
        <img
          src="/images\img2-Picsart-AiImageEnhancer.jpg"
          alt="Login illustration"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* Right side - Register Form */}
      <div className="flex items-center justify-center bg-white px-6">
        <div className="max-w-md w-full bg-white rounded-2xl drop-shadow-2xl p-8 space-y-6 transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl">
          {/* Title */}
          <h2 className="text-3xl font-extrabold text-center text-purple-700">
            Create Account
          </h2>

          {/* Subtitle */}
          <p className="text-center text-lg font-medium text-gray-700">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
              SIHchronize 🚀
            </span>
          </p>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["firstName", "middleName", "lastName"].map((name) => (
                <div
                  key={name}
                  className="flex items-center border rounded-lg px-3"
                >
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
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1 flex items-center border rounded-lg px-3">
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

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <div className="mt-1 flex items-center border rounded-lg px-3">
                <Briefcase className="w-5 h-5 text-purple-600" />
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 outline-none bg-transparent"
                >
                  <option value="">Select a role</option>
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            {/* Password */}
            {["password", "confirmPassword"].map((name, idx) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700">
                  {idx === 0 ? "Password" : "Confirm Password"}
                </label>
                <div className="mt-1 flex items-center border rounded-lg px-3">
                  <Lock className="w-5 h-5 text-purple-600" />
                  <input
                    type="password"
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 outline-none"
                    placeholder={idx === 0 ? "••••••••" : "Re-enter password"}
                  />
                </div>
              </div>
            ))}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition"
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
