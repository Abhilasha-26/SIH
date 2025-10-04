// src/lib/api.js
const BASE = "/api";

async function handleRes(res) {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "API error");
  }
  return res.json().catch(() => ({}));
}

export async function apiGet(path) {
  const res = await fetch(BASE + path, { credentials: "include" });
  return handleRes(res);
}

export async function apiPost(path, body) {
  const res = await fetch(BASE + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(body),
  });
  return handleRes(res);
}
