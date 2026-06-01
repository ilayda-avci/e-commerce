import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../store/productSlice";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";

export default function ShopPage() {
  const dispatch = useDispatch();
  const { products, total, loading, error } = useSelector((state) => state.products);
  const { categoryId } = useParams();

  useEffect(() => {
    const params = categoryId ? { categoryId } : {};
    dispatch(fetchProducts(params));
  }, [dispatch, categoryId]);

  if (loading) return <Spinner />;

  if (error) {
    return (
      <div className="p-10 text-center text-red-500">
        Hata: {error}
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto w-full px-4 py-10">
        <div className="text-center">
          <p className="text-sm text-gray-400">Featured Products</p>
          <h1 className="mt-2 text-2xl font-bold text-[#252B42]">
            BESTSELLER PRODUCTS
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && !loading && (
          <p className="mt-10 text-center text-gray-400">Ürün bulunamadı.</p>
        )}

        <div className="mt-14 flex justify-center">
          <button className="rounded border border-blue-500 px-8 py-3 text-sm font-semibold text-blue-500">
            LOAD MORE PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
}