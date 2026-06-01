import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../store/productSlice";
import Spinner from "../components/Spinner";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { productList: products, fetchState } = useSelector((state) => state.products);
const loading = fetchState === "FETCHING";
const error = fetchState === "FAILED" ? "Ürün yüklenemedi." : null;

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const product = products.find((p) => p.id === Number(productId));

  if (loading) return <Spinner />;

  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

  if (!product) return <div className="p-10 text-center text-gray-500">Ürün bulunamadı.</div>;

  return (
    <section className="w-full bg-white px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start">

          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-2xl bg-gray-100">
              <img
                src={product.images?.[0]?.url ?? product.image}
                alt={product.name}
                className="block h-[320px] w-full object-cover md:h-[520px]"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <p className="text-xs font-bold tracking-widest text-gray-400">
              PRODUCT DETAIL
            </p>

            <h1 className="mt-3 text-3xl font-extrabold text-[#252B42] md:text-4xl">
              {product.name}
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              {product.description}
            </p>

            <div className="mt-4 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < Math.round(product.rating ?? 0) ? "text-yellow-400" : "text-gray-300"}>
                  ★
                </span>
              ))}
              <span className="ml-2 text-sm text-gray-500">{product.sell_count ?? 0} Reviews</span>
            </div>

            <div className="mt-6 flex gap-3 text-lg font-bold">
              <span className="text-gray-400 line-through">${product.price}</span>
              <span className="text-green-600">${product.price}</span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-md bg-blue-600 px-8 py-4 text-sm font-bold text-white">
                ADD TO CART
              </button>
              <button className="rounded-md border border-gray-300 px-8 py-4 text-sm font-bold text-gray-900">
                ADD TO FAVORITES
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}