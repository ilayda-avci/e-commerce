import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="rounded-xl border border-[#E8E8E8] p-4 hover:shadow-md transition">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full rounded-lg object-cover"
        />

        <p className="mt-3 font-bold text-[#252B42]">
          {product.name}
        </p>
        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <div className="mt-2 flex gap-2 text-sm font-semibold">
          <span className="text-gray-400 line-through">
            ${product.oldPrice}
          </span>
          <span className="text-green-600">
            ${product.price}
          </span>
        </div>
      </div>
    </Link>
  );
}
