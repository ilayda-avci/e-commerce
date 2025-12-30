import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import ShopPage from "../pages/ShopPage.jsx";

export default function PageContent() {
  return (
    <main className="flex-1 flex flex-col">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </main>
  );
}