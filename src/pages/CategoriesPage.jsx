import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../store/categoriesSlice";
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

export default function CategoriesPage() {
  const dispatch = useDispatch();
  const { items = [], status, error } = useSelector((s) => s.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const normalized = useMemo(() => {
    return (Array.isArray(items) ? items : [])
      .map(normalizeCategory)
      .filter((c) => c.id && c.name);
  }, [items]);

  const topFive = useMemo(() => {
    return [...normalized].sort((a, b) => b.rating - a.rating).slice(0, 5);
  }, [normalized]);

  return (
    <div className="max-w-6xl mx-auto w-full px-4 py-10">
      <h1 className="text-3xl font-bold text-[#252B42]">Categories</h1>

      {error && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-[#252B42]">Top 5</h2>

        {status === "loading" && topFive.length === 0 ? (
          <div className="mt-4 text-gray-500">Loading...</div>
        ) : (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {topFive.map((c) => (
              <Link
                key={`top-${c.id}`}
                to={`/shop/${c.gender}/${c.slug}/${c.id}`}
                className="group rounded-2xl border overflow-hidden hover:shadow-sm transition"
              >
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <div className="text-sm font-semibold truncate">{c.name}</div>
                  <div className="mt-1 text-xs text-gray-600">⭐ {c.rating}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#252B42]">All Categories</h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {normalized.map((c) => (
            <Link
              key={`all-${c.id}`}
              to={`/shop/${c.gender}/${c.slug}/${c.id}`}
              className="px-3 py-2 rounded-full border text-sm hover:bg-gray-50"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
