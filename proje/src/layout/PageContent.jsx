import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import CategoriesPage from "../pages/CategoriesPage";

export default function PageContent() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/categories" element={<CategoriesPage />} />

      <Route path="/shop" element={<ShopPage />} />
      <Route path="/shop/:gender/:categoryName/:categoryId" element={<ShopPage />} />
    </Routes>
  );
}
