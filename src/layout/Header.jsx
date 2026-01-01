import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, ShoppingCart, Menu } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm ${isActive ? "font-semibold text-gray-900" : "text-gray-700"}`;

  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto w-full px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">
          Bandage
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/shop" className={linkClass}>
            Shop
          </NavLink>

          <a href="#" className="text-sm text-gray-700">
            Product
          </a>
          <a href="#" className="text-sm text-gray-700">
            Pricing
          </a>
          <a href="#" className="text-sm text-gray-700">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2" aria-label="Search">
            <Search size={20} />
          </button>

          <button className="p-2" aria-label="Cart">
            <ShoppingCart size={20} />
          </button>

          <button
            className="p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white w-full pt-6 pb-10"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col items-center gap-6 text-2xl text-blue-600">
              <NavLink to="/" onClick={() => setOpen(false)}>
                Home
              </NavLink>

              <NavLink to="/shop" onClick={() => setOpen(false)}>
                Shop
              </NavLink>

              <a href="#" onClick={() => setOpen(false)}>
                Product
              </a>
              <a href="#" onClick={() => setOpen(false)}>
                Pricing
              </a>
              <a href="#" onClick={() => setOpen(false)}>
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
