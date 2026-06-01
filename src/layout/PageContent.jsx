import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import CategoriesPage from "../pages/CategoriesPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import TeamPage from "../pages/TeamPage";
import AboutPage from "../pages/AboutPage";

export default function PageContent() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/shop/:gender/:categoryName/:categoryId" element={<ShopPage />} />
      <Route path="/product/:productId" element={<ProductDetailPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}