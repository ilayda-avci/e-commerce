import ProductCard from "../components/ProductCard.jsx";

import p1 from "../assets/products/product1.jpg";
import p2 from "../assets/products/product2.jpg";
import p3 from "../assets/products/product3.jpg";
import p4 from "../assets/products/product4.jpg";
import p5 from "../assets/products/product5.jpg";
import p6 from "../assets/products/product6.jpg";
import p7 from "../assets/products/product7.jpg";
import p8 from "../assets/products/product8.jpg";
import p9 from "../assets/products/product9.jpg";
import p10 from "../assets/products/product10.jpg";

const dummyProducts = [
  { id: 1, title: "Graphic Design", category: "English Department", price: "$6.48", oldPrice: "$16.48", image: p1 },
  { id: 2, title: "Graphic Design", category: "English Department", price: "$6.48", oldPrice: "$16.48", image: p2 },
  { id: 3, title: "Graphic Design", category: "English Department", price: "$6.48", oldPrice: "$16.48", image: p3 },
  { id: 4, title: "Graphic Design", category: "English Department", price: "$6.48", oldPrice: "$16.48", image: p4 },
  { id: 5, title: "Graphic Design", category: "English Department", price: "$6.48", oldPrice: "$16.48", image: p5 },
  { id: 6, title: "Graphic Design", category: "English Department", price: "$6.48", oldPrice: "$16.48", image: p6 },
  { id: 7, title: "Graphic Design", category: "English Department", price: "$6.48", oldPrice: "$16.48", image: p7 },
  { id: 8, title: "Graphic Design", category: "English Department", price: "$6.48", oldPrice: "$16.48", image: p8 },
  { id: 9, title: "Graphic Design", category: "English Department", price: "$6.48", oldPrice: "$16.48", image: p9 },
  { id: 10, title: "Graphic Design", category: "English Department", price: "$6.48", oldPrice: "$16.48", image: p10 },
];

export default function ShopPage() {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto w-full px-4 py-10">
        <div className="text-center">
          <h1 className="mt-2 text-2xl font-bold text-[#252B42]">
            BESTSELLER PRODUCTS
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 place-items-center gap-10 md:grid-cols-3 lg:grid-cols-5">
          {dummyProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button className="border border-blue-500 text-blue-500 px-8 py-3 rounded font-semibold text-sm">
            LOAD MORE PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
}
