import { Heart, ShoppingCart, User } from "lucide-react";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface SiteHeaderProps {
  cartItems: CartItem[];
  wishlistCount: number;
}

export function SiteHeader({ cartItems, wishlistCount }: SiteHeaderProps) {
  const [search, setSearch] = useState("");

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <header className="bg-navy text-white" data-ocid="header.section">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
            CRM
          </div>
          <div>
            <div className="font-bold text-sm leading-tight">
              CRM Technology
            </div>
            <div className="text-xs text-gray-400">Innovating Technologies</div>
          </div>
        </div>

        <div className="flex-1 flex items-center gap-0 max-w-xl mx-auto">
          <select className="h-9 px-2 text-xs bg-gray-100 text-gray-700 border border-r-0 border-gray-200 rounded-l-lg outline-none">
            <option>All Categories</option>
            <option>Laptops</option>
            <option>Components</option>
            <option>Accessories</option>
            <option>Surveillance</option>
            <option>Networking</option>
          </select>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="flex-1 h-9 px-3 text-sm bg-white text-gray-800 border border-gray-200 outline-none"
            data-ocid="header.search_input"
          />
          <button
            type="button"
            className="h-9 px-4 bg-orange text-white text-sm font-semibold rounded-r-lg hover:opacity-90 transition-opacity"
            data-ocid="header.button"
          >
            Search
          </button>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <button
            type="button"
            className="flex items-center gap-1 text-sm hover:text-orange transition-colors"
            data-ocid="header.login.button"
          >
            <User size={18} />
            <span className="hidden sm:inline">Login</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-1 text-sm hover:text-orange transition-colors relative"
            data-ocid="header.wishlist.button"
          >
            <Heart size={18} />
            <span className="text-xs">{wishlistCount}</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-2 text-sm hover:text-orange transition-colors"
            data-ocid="header.cart.button"
          >
            <div className="relative">
              <ShoppingCart size={18} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-orange rounded-full text-white text-[10px] flex items-center justify-center font-bold">
                  {cartItems.length}
                </span>
              )}
            </div>
            <span className="hidden sm:flex flex-col items-start leading-tight">
              <span className="text-[10px] text-gray-400">Cart</span>
              <span className="text-xs font-semibold">
                {cartItems.length} / R{" "}
                {cartTotal.toLocaleString("en-ZA", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
