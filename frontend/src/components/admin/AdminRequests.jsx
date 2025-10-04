// src/components/admin/AdminRequests.jsx
import React, { useEffect, useState } from "react";
import { apiGet } from "../../lib/api";

export default function AdminRequests() {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    apiGet("/institutions/me/admin-requests")
      .then((d) => setRequests(d.requests || []))
      .catch(() => setRequests([]));
  }, []);
  return (
    <div className="p-6 bg-white rounded shadow">
      <h3 className="mb-3 font-semibold">Requests Sent to Platform Admin</h3>
      {requests.length === 0 ? (
        <div className="text-sm text-gray-500">No requests</div>
      ) : (
        requests.map((r) => (
          <div key={r._id} className="p-3 border-b">
            <div className="font-medium">
              {r.email} — {r.status}
            </div>
            <div className="text-xs text-gray-500">{r.justification}</div>
          </div>
        ))
      )}
    </div>
  );
}
