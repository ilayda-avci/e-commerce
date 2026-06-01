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
    <section className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm text-gray-400 font-semibold">Featured Products</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#252B42]">BESTSELLER PRODUCTS</h2>
          <p className="mt-2 text-sm text-gray-500">Problems trying to resolve the conflict between</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {topFive.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop/${cat.gender}/${cat.slug}/${cat.id}`}
              className="relative flex-1 h-72 overflow-hidden rounded-lg group shadow-md"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-end p-4 text-white">
                <h3 className="font-bold text-lg uppercase">{cat.name}</h3>
                <span className="text-sm text-yellow-400">⭐ {cat.rating.toFixed(1)}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}