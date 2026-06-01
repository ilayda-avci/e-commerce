import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { genderToPath, slugifyTR } from "../utils/slug";

function normalizeCategory(c) {
  const id = c?.id ?? c?.categoryId ?? c?.category_id;
  const name = c?.title ?? c?.name ?? c?.categoryName ?? "";
  const gender = genderToPath(c?.gender ?? c?.genderId ?? c?.gender_id);
  return { id: Number(id), name, gender, slug: slugifyTR(name) };
}

export default function CategoriesDropdown() {
  const { items = [], status, error } = useSelector((state) => state.categories);

  const normalized = useMemo(() => {
    return (Array.isArray(items) ? items : [])
      .map(normalizeCategory)
      .filter((c) => c.id && c.name);
  }, [items]);

  const women = useMemo(
    () => normalized.filter((c) => c.gender === "kadin"),
    [normalized]
  );
  const men = useMemo(
    () => normalized.filter((c) => c.gender === "erkek"),
    [normalized]
  );

  return (
    <div className="flex bg-white shadow-xl p-6 gap-10 border rounded-md min-w-[300px] text-left">
      {error && (
        <div className="text-sm text-red-600 border border-red-200 bg-red-50 rounded-lg p-3">
          {error}
        </div>
      )}

      <div className="min-w-[160px]">
        <h4 className="font-bold border-b mb-2 text-gray-800">Kadın</h4>
        <div className="flex flex-col gap-1">
          {status === "loading" && women.length === 0 ? (
            <span className="text-sm text-gray-400">Loading...</span>
          ) : women.length === 0 ? (
            <span className="text-sm text-gray-400">No categories</span>
          ) : (
            women.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop/${cat.gender}/${cat.slug}/${cat.id}`}
                className="text-gray-600 hover:text-blue-500 text-sm"
              >
                {cat.name}
              </Link>
            ))
          )}
        </div>
      </div>

      <div className="min-w-[160px]">
        <h4 className="font-bold border-b mb-2 text-gray-800">Erkek</h4>
        <div className="flex flex-col gap-1">
          {status === "loading" && men.length === 0 ? (
            <span className="text-sm text-gray-400">Loading...</span>
          ) : men.length === 0 ? (
            <span className="text-sm text-gray-400">No categories</span>
          ) : (
            men.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop/${cat.gender}/${cat.slug}/${cat.id}`}
                className="text-gray-600 hover:text-blue-500 text-sm"
              >
                {cat.name}
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
