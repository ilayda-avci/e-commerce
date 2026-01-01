export default function ProductCard({ product }) {
  return (
    <div className="w-full max-w-[260px] flex flex-col items-center text-center">
      <div className="w-full bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full aspect-[3/4] object-cover"
          loading="lazy"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-bold text-[#252B42]">{product.title}</h3>
        <p className="mt-2 text-xs font-bold text-gray-400">
          {product.category}
        </p>

        <div className="mt-3 flex items-baseline justify-center gap-2 text-sm">
          <span className="text-gray-300">{product.oldPrice}</span>
          <span className="text-green-600 font-bold">{product.price}</span>
        </div>
      </div>
    </div>
  );
}
