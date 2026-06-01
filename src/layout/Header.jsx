import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Heart } from "lucide-react";
import Gravatar from "react-gravatar";
import CategoriesDropdown from "../components/CategoriesDropdown";
import { logout } from "../store/clientSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.client);

  return (
    <header className="w-full">

      {/* Üst bar */}
      <div className="bg-[#252B42] text-white text-xs py-2 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span>(225) 555-0118</span>
            <span>michelle.rivera@example.com</span>
          </div>
          <span>Follow Us and get a chance to win 80% off</span>
          <div className="flex items-center gap-3">
            <span>Follow Us :</span>
            <a href="#" className="hover:text-blue-400">Instagram</a>
            <a href="#" className="hover:text-blue-400">Youtube</a>
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
          </div>
        </div>
      </div>

      {/* Ana nav */}
      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">

          <Link to="/" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </Link>

          <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link to="/" className="hover:text-blue-500">Home</Link>

            <div className="relative group py-2">
              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
                Shop <span className="text-xs">▾</span>
              </div>
              <div className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 top-full z-50 pt-2">
                <CategoriesDropdown />
              </div>
            </div>

            <Link to="/about" className="hover:text-blue-500">About</Link>
            <Link to="/team" className="hover:text-blue-500">Team</Link>
            <Link to="/contact" className="hover:text-blue-500">Contact</Link>
            <Link to="/pricing" className="hover:text-blue-500">Pricing</Link>
          </div>

          <div className="flex items-center gap-4 text-[#23A6F0]">
            {user ? (
              <div className="flex items-center gap-2">
                <Gravatar email={user.email} size={32} className="rounded-full" />
                <span className="text-sm font-medium text-gray-700">{user.name}</span>
                <button
                  onClick={() => dispatch(logout())}
                  className="text-xs text-red-500 hover:underline"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center gap-1 text-sm font-medium">
                <span>Login / Register</span>
              </Link>
            )}
            <Search size={18} className="cursor-pointer" />
            <div className="flex items-center gap-1">
              <ShoppingCart size={18} className="cursor-pointer" />
              <span className="text-xs font-semibold">0</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart size={18} className="cursor-pointer" />
              <span className="text-xs font-semibold">0</span>
            </div>
          </div>

        </div>
      </nav>

    </header>
  );
};

export default Header;