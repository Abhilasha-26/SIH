// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ProfilePage from "./components/ProfilePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />         
        <Route path="/register" element={<RegisterPage />} /> 
      </Routes>
    </Router>
  );
}
