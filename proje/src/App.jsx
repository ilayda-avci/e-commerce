import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./store/categoriesSlice";

import Header from "./layout/Header.jsx";
import PageContent from "./layout/PageContent.jsx";
import Footer from "./layout/Footer.jsx";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}
