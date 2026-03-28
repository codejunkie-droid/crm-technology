import {
  bestSellerProducts,
  formatPrice,
  mostViewedProducts,
  topRatedProducts,
} from "@/data/products";
import { Star } from "lucide-react";

const sidebarColors = [
  "bg-cyan-100",
  "bg-teal-100",
  "bg-sky-100",
  "bg-blue-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-rose-100",
  "bg-fuchsia-100",
  "bg-lime-100",
  "bg-green-100",
  "bg-emerald-100",
  "bg-teal-100",
];

interface SidebarProductListProps {
  title: string;
  products: Array<{
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    colorClass: string;
  }>;
  ocidPrefix: string;
}

function SidebarProductList({
  title,
  products,
  ocidPrefix,
}: SidebarProductListProps) {
  return (
    <div
      className="bg-card rounded-xl border border-border shadow-card p-4"
      data-ocid={`${ocidPrefix}.section`}
    >
      <h3 className="font-bold text-base text-foreground mb-4 pb-2 border-b border-border">
        {title}
      </h3>
      <div className="flex flex-col gap-3">
        {products.slice(0, 4).map((p, i) => (
          <div
            key={p.id}
            className="flex items-center gap-3"
            data-ocid={`${ocidPrefix}.item.${i + 1}`}
          >
            <div
              className={`${p.colorClass || sidebarColors[i]} w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-xl`}
            >
              {i % 4 === 0
                ? "💾"
                : i % 4 === 1
                  ? "⚡"
                  : i % 4 === 2
                    ? "🔌"
                    : "📦"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-foreground leading-tight line-clamp-2">
                {p.name}
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={8}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-xs font-bold text-navy">
                  {formatPrice(p.price)}
                </span>
                {p.originalPrice && (
                  <span className="text-[10px] text-muted-foreground line-through">
                    {formatPrice(p.originalPrice)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SidebarProducts() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SidebarProductList
          title="Top Rated"
          products={topRatedProducts}
          ocidPrefix="top_rated"
        />
        <SidebarProductList
          title="Most Viewed"
          products={mostViewedProducts}
          ocidPrefix="most_viewed"
        />
        <SidebarProductList
          title="Best Seller"
          products={bestSellerProducts}
          ocidPrefix="best_seller"
        />
      </div>
    </section>
  );
}
