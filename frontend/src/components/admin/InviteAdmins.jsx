// src/components/admin/InviteAdmins.jsx
import React, { useState } from "react";
import { apiPost } from "../../lib/api";

export default function InviteAdmins() {
  const [emails, setEmails] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const list = emails
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (!list.length) return alert("Add emails (comma separated)");
    setSending(true);
    try {
      await apiPost("/institutions/me/create-admins", { emails: list });
      alert("Invites created (demo).");
      setEmails("");
    } catch (err) {
      console.error(err);
      alert("Failed to send invites");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="max-w-2xl p-6 bg-white rounded shadow">
      <h3 className="mb-3 font-semibold">Invite College Admins / Faculty</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={emails}
          onChange={(e) => setEmails(e.target.value)}
          placeholder="comma separated emails"
          rows={5}
          className="w-full p-2 mb-3 border rounded"
        />
        <div className="flex gap-2">
          <button
            disabled={sending}
            className="px-3 py-2 text-white bg-blue-600 rounded"
          >
            {sending ? "Sending..." : "Send Invites"}
          </button>
        </div>
      </form>
    </div>
  );
}
