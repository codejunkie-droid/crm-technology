import { easterDeals, formatPrice } from "@/data/products";
import { ShoppingCart } from "lucide-react";

interface EasterDealsProps {
  onAddToCart: (product: { id: number; name: string; price: number }) => void;
}

const dealColors = ["bg-sky-200", "bg-blue-200", "bg-red-200"];
const dealIcons = ["\ud83d\udcbf", "\ud83d\udcbe", "\ud83d\udcbb"];

export function EasterDeals({ onAddToCart }: EasterDealsProps) {
  return (
    <section data-ocid="easter.section">
      <h2 className="text-2xl font-bold text-foreground mb-5">
        Easter Deals! <span className="text-orange">\ud83d\udc23</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {easterDeals.map((product, i) => (
          <div
            key={product.id}
            className="bg-card rounded-xl border border-border shadow-card p-4 flex flex-col gap-3"
            data-ocid={`easter.item.${i + 1}`}
          >
            <div
              className={`${dealColors[i]} rounded-lg h-32 flex items-center justify-center`}
            >
              <span className="text-4xl">{dealIcons[i]}</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground leading-tight">
                {product.name}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-base font-bold text-navy">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={() => onAddToCart(product)}
              className="flex items-center justify-center gap-2 py-2 bg-navy text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              data-ocid={`easter.button.${i + 1}`}
            >
              <ShoppingCart size={14} /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
