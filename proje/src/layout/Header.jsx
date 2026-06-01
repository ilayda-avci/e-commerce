import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../store/categoriesSlice";
import CategoriesDropdown from "../components/CategoriesDropdown";

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <header className="bg-white">
      <nav className="container mx-auto flex items-center gap-8 py-4 px-6">
        <Link to="/" className="text-2xl font-bold">
          Bandage
        </Link>

        <Link to="/">Home</Link>

        <div className="relative group py-2">
          <div className="flex items-center cursor-pointer font-medium hover:text-blue-500">
            Shop <i className="fa-solid fa-chevron-down ml-1 text-[10px]"></i>
          </div>

          <div className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 top-full z-50 pt-2 transition-all">
            <CategoriesDropdown />
          </div>
        </div>

        <Link to="/categories">Categories</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
