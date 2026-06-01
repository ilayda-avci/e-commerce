import axios from "axios";

// Set VITE_API_BASE_URL in .env (example: VITE_API_BASE_URL="https://your-api.com")
const baseURL = (import.meta?.env?.VITE_API_BASE_URL ?? "").replace(/\/$/, "");

export const api = axios.create({
  baseURL,
});
