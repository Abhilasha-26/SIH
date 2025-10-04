// src/components/admin/BulkUpload.jsx
import React, { useState } from "react";
import { apiPost } from "../../lib/api";
import { useNavigate } from "react-router-dom";

function parseCSV(text) {
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length < 2) return [];
  const headers = lines[0].split(",").map((h) => h.trim());
  return lines.slice(1).map((line) => {
    const cols = line.split(",").map((c) => c.trim());
    const obj = {};
    headers.forEach((h, i) => (obj[h] = cols[i] || ""));
    return obj;
  });
}

export default function BulkUpload() {
  const [csv, setCsv] = useState("");
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handlePreview() {
    setPreview(parseCSV(csv));
  }

  async function handleCreate() {
    const rows = parseCSV(csv);
    if (!rows.length) return alert("No rows");
    setLoading(true);
    try {
      await apiPost("/institutions/me/students/bulk-create", {
        students: rows,
      });
      alert("Bulk create finished. Check server for report.");
      setCsv("");
      setPreview([]);
      navigate("/admin/students");
    } catch (err) {
      console.error(err);
      alert("Bulk create failed (demo)");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 bg-white rounded shadow">
      <h3 className="mb-3 font-semibold">Bulk Student Upload (CSV)</h3>
      <p className="mb-3 text-sm text-gray-500">
        Header format: <code>firstName,lastName,email,roll,department</code>
      </p>
      <textarea
        value={csv}
        onChange={(e) => setCsv(e.target.value)}
        rows={8}
        className="w-full p-2 mb-3 border rounded"
      />
      <div className="flex gap-2 mb-4">
        <button onClick={handlePreview} className="px-3 py-2 border rounded">
          Preview
        </button>
        <button
          onClick={handleCreate}
          disabled={loading}
          className="px-3 py-2 text-white bg-green-600 rounded"
        >
          {loading ? "Creating..." : "Create Accounts"}
        </button>
      </div>

      <div>
        {preview.length === 0 ? (
          <div className="text-sm text-gray-500">No preview</div>
        ) : (
          preview.map((r, idx) => (
            <div key={idx} className="p-2 border-b">
              <div className="font-medium">
                {r.firstName} {r.lastName} — {r.email}
              </div>
              <div className="text-xs text-gray-500">
                {r.roll} • {r.department}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
