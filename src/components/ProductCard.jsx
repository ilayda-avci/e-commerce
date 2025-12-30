export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col bg-white border rounded-lg overflow-hidden w-full sm:w-[48%] lg:w-[23%]">
      <div className="w-full h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h5 className="font-semibold text-[#252B42]">{product.title}</h5>
        <p className="text-sm text-[#737373]">{product.category}</p>

        <div className="flex items-center gap-2 font-semibold">
          {product.oldPrice && (
            <span className="text-[#bdbdbd] line-through">{product.oldPrice}</span>
          )}
          <span className="text-[#23856d]">{product.price}</span>
        </div>
      </div>
    </div>
  );
}
