// src/components/admin/AdminLayout.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b shadow-sm">
        <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center font-bold text-white rounded-lg w-9 h-9 bg-gradient-to-r from-blue-600 to-purple-600">
              S
            </div>
            <div className="text-lg font-semibold">
              College Admin — Smart Student Hub (MVP)
            </div>
          </div>
          <nav className="flex gap-3 text-sm">
            <Link to="/admin" className="px-3 py-1">
              Home
            </Link>
            <Link to="/admin/students" className="px-3 py-1">
              Students
            </Link>
            <Link to="/admin/bulk-upload" className="px-3 py-1">
              Bulk Upload
            </Link>
            <Link to="/admin/invite-admins" className="px-3 py-1">
              Invite Admins
            </Link>
            <Link to="/admin/requests" className="px-3 py-1">
              Admin Requests
            </Link>
            <Link to="/admin/activity-requests" className="px-3 py-1">
              Proofs
            </Link>
            <Link to="/admin/attendance" className="px-3 py-1">
              Attendance
            </Link>
            <Link to="/" className="px-3 py-1 text-red-600">
              Sign out
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl p-6 mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
