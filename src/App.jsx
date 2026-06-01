import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./store/categoriesSlice";
import { verifyToken } from "./store/clientSlice";

import Header from "./layout/Header.jsx";
import PageContent from "./layout/PageContent.jsx";
import Footer from "./layout/Footer.jsx";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());

    const token = localStorage.getItem("token");
    if (token) {
      dispatch(verifyToken());
    }
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}