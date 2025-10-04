// src/components/admin/ActivityRequests.jsx
import React, { useEffect, useState } from "react";
import { apiGet, apiPost } from "../../lib/api";

export default function ActivityRequests() {
  const [list, setList] = useState([]);
  useEffect(() => {
    apiGet("/institutions/me/activity-requests/pending")
      .then((d) => setList(d.requests || []))
      .catch(() => setList([]));
  }, []);

  async function review(id, status) {
    const comment = prompt("Review comment (optional)");
    try {
      await apiPost(`/activity-requests/${id}/review`, { status, comment });
      alert("Reviewed (demo). Refresh to see update.");
    } catch (err) {
      alert("Failed to review");
    }
  }

  return (
    <div className="p-6 bg-white rounded shadow">
      <h3 className="mb-3 font-semibold">Pending Activity Proofs</h3>
      {list.length === 0 ? (
        <div className="text-sm text-gray-500">No pending proofs</div>
      ) : (
        list.map((r) => (
          <div key={r._id} className="p-3 border-b">
            <div className="font-medium">
              {r.title} — {r.type}
            </div>
            <div className="text-xs text-gray-500">{r.description}</div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => review(r._id, "approved")}
                className="px-3 py-1 text-white bg-green-600 rounded"
              >
                Approve
              </button>
              <button
                onClick={() => review(r._id, "rejected")}
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
