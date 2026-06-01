import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { genderToPath, slugifyTR } from "../utils/slug";

function normalizeCategory(c) {
  const id = c?.id ?? c?.categoryId ?? c?.category_id;
  const name = c?.title ?? c?.name ?? c?.categoryName ?? "";
  const gender = genderToPath(c?.gender ?? c?.genderId ?? c?.gender_id);
  const rating = Number(c?.rating ?? c?.rate ?? c?.score ?? c?.popularity ?? 0) || 0;
  const img =
    c?.img ??
    c?.image ??
    c?.imageUrl ??
    "https://images.unsplash.com/photo-1520975958225-0f4d8b49caa1?auto=format&fit=crop&w=900&q=60";

  return { id: Number(id), name, gender, rating, img, slug: slugifyTR(name) };
}

export default function TopCategories() {
  const { items = [] } = useSelector((state) => state.categories);

  const topFive = useMemo(() => {
    const normalized = (Array.isArray(items) ? items : [])
      .map(normalizeCategory)
      .filter((c) => c.id && c.name);
    return [...normalized].sort((a, b) => b.rating - a.rating).slice(0, 5);
  }, [items]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6">
      {topFive.map((cat) => (
        <Link
          key={cat.id}
          to={`/shop/${cat.gender}/${cat.slug}/${cat.id}`}
          className="relative h-64 overflow-hidden rounded-lg group shadow-md"
        >
          <img
            src={cat.img}
            alt={cat.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
            <h3 className="font-bold text-lg uppercase">{cat.name}</h3>
            <span>⭐ {cat.rating}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
