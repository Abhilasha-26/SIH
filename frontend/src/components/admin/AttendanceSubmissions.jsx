// src/components/admin/AttendanceSubmissions.jsx
import React, { useEffect, useState } from "react";
import { apiGet, apiPost } from "../../lib/api";

export default function AttendanceSubmissions() {
  const [list, setList] = useState([]);
  useEffect(() => {
    apiGet("/institutions/me/attendance/pending")
      .then((d) => setList(d.submissions || []))
      .catch(() => setList([]));
  }, []);

  async function decide(id, decision) {
    const comment = prompt("Comment (optional)");
    try {
      await apiPost(`/attendance/${id}/${decision}`, { comment });
      alert("Updated (demo).");
    } catch (err) {
      alert("Failed");
    }
  }

  return (
    <div className="p-6 bg-white rounded shadow">
      <h3 className="mb-3 font-semibold">Attendance Submissions (Pending)</h3>
      {list.length === 0 ? (
        <div className="text-sm text-gray-500">No submissions</div>
      ) : (
        list.map((s) => (
          <div key={s._id} className="p-3 border-b">
            <div className="font-medium">
              {s.courseId} — {new Date(s.lectureDate).toLocaleDateString()}
            </div>
            <div className="text-xs text-gray-500">
              Submitted by: {s.professorName || s.professorId}
            </div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => decide(s._id, "approve")}
                className="px-3 py-1 text-white bg-green-600 rounded"
              >
                Approve
              </button>
              <button
                onClick={() => decide(s._id, "reject")}
                className="px-3 py-1 text-white bg-red-600 rounded"
              >
                Reject
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
