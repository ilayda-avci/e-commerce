export function slugifyTR(input) {
  return (input ?? "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function genderToPath(g) {
  const s = (g ?? "").toString().toLowerCase();
  if (s === "1" || s === "k" || s.includes("kad") || s.includes("fem")) return "kadin";
  if (s === "2" || s === "e" || s.includes("erk") || s.includes("mal")) return "erkek";
  return "kadin";
}
