import React, { useState } from "react";
import { Camera, Save, XCircle } from "lucide-react";

const AdminEditProfile = () => {
  const [admin, setAdmin] = useState({
    profileUrl: "",
    name: "Dr. Ananya Sharma",
    designation: "Platform Admin",
    email: "admin@SIHnc.edu",
    phone: "+91 88400 47057",
    gender: "Female",
    dob: "1985-06-21",
    address: "MNNIT Campus, Allahabad, UP",
    institution: "MotiLal Nehru National Institute of Technology",
    aishe: "AISHE-98765",
    department: "Administration",
    role: "Platform Admin",
    joiningDate: "2017-08-15",
    empId: "EMP-MNNIT-102",
    apar: "APAR-556788",
    aadhaar: "XXXX-XXXX-4587",
    consent: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAdmin((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAdmin((prev) => ({ ...prev, profileUrl: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow p-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Edit Admin Profile
        </h2>

        {/* Profile photo + Basic Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <img
                  src={
                    admin.profileUrl ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      admin.name
                    )}&background=6366f1&color=fff&size=128`
                  }
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover shadow"
                />
                <label className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full cursor-pointer shadow">
                  <Camera className="w-4 h-4" />
                  <input type="file" className="hidden" onChange={handleImageUpload} />
                </label>
              </div>
              <p className="mt-3 text-lg font-semibold">{admin.name}</p>
              <p className="text-sm text-gray-500">{admin.designation}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input
                  name="name"
                  value={admin.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Designation</label>
                <input
                  name="designation"
                  value={admin.designation}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email (read-only)</label>
                <input
                  value={admin.email}
                  disabled
                  className="w-full border rounded-lg p-2 mt-1 bg-gray-100 text-gray-500"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Phone</label>
                <input
                  name="phone"
                  value={admin.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Gender</label>
                <select
                  name="gender"
                  value={admin.gender}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                >
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={admin.dob}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm text-gray-600">Address</label>
              <textarea
                name="address"
                value={admin.address}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1"
                rows={2}
              />
            </div>
          </div>
          {/* Right Column - Institution Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Institution Name</label>
              <input
                name="institution"
                value={admin.institution}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">AISHE Code</label>
              <input
                name="aishe"
                value={admin.aishe}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Department</label>
              <input
                name="department"
                value={admin.department}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Role</label>
              <input
                name="role"
                value={admin.role}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Joining Date</label>
              <input
                type="date"
                name="joiningDate"
                value={admin.joiningDate}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Employee ID</label>
              <input
                name="empId"
                value={admin.empId}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">APAR ID</label>
              <input
                name="apar"
                value={admin.apar}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Aadhaar (masked)</label>
              <input
                name="aadhaar"
                value={admin.aadhaar}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>
            <div className="col-span-2 mt-2 flex items-center gap-2">
              <input
                type="checkbox"
                name="consent"
                checked={admin.consent}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <label className="text-sm text-gray-600">
                I consent to store masked Aadhaar as per institutional policy.
              </label>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-end gap-4">
          <button
            className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg flex items-center gap-2 hover:bg-gray-300"
          >
            <XCircle className="w-4 h-4" /> Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg flex items-center gap-2 hover:from-indigo-700 hover:to-purple-700"
          >
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminEditProfile;
