import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  type Product,
  featuredProducts,
  formatPrice,
  saleProducts,
  topRatedProducts,
} from "@/data/products";
import { ShoppingCart, Star } from "lucide-react";

interface BestProductsProps {
  onAddToCart: (product: { id: number; name: string; price: number }) => void;
}

const cardColors = [
  "bg-blue-100",
  "bg-indigo-100",
  "bg-violet-100",
  "bg-purple-100",
  "bg-emerald-100",
  "bg-red-100",
  "bg-orange-100",
  "bg-yellow-100",
  "bg-cyan-100",
  "bg-teal-100",
  "bg-sky-100",
  "bg-blue-100",
];

function ProductCard({
  product,
  index,
  onAddToCart,
}: {
  product: Product;
  index: number;
  onAddToCart: (p: { id: number; name: string; price: number }) => void;
}) {
  return (
    <div
      className="bg-card rounded-xl border border-border shadow-card p-4 flex flex-col gap-3 group"
      data-ocid={`products.item.${index + 1}`}
    >
      <div
        className={`${product.colorClass || cardColors[index % cardColors.length]} rounded-lg h-40 flex items-center justify-center relative overflow-hidden`}
      >
        {product.originalPrice && (
          <span className="absolute top-2 left-2 bg-orange text-white text-[10px] font-bold px-2 py-0.5 rounded">
            SALE
          </span>
        )}
        <span className="text-5xl">\ud83d\udcbb</span>
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-foreground leading-tight line-clamp-2">
          {product.name}
        </p>
        <div className="flex items-center gap-1 mt-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              size={10}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-base font-bold text-navy">
          {formatPrice(product.price)}
        </span>
        {product.originalPrice && (
          <span className="text-xs text-muted-foreground line-through">
            {formatPrice(product.originalPrice)}
          </span>
        )}
      </div>
      <button
        type="button"
        onClick={() => onAddToCart(product)}
        className="flex items-center justify-center gap-2 py-2 bg-navy text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
        data-ocid={`products.button.${index + 1}`}
      >
        <ShoppingCart size={14} /> Add to Cart
      </button>
    </div>
  );
}

export function BestProducts({ onAddToCart }: BestProductsProps) {
  return (
    <section data-ocid="best_products.section">
      <h2 className="text-2xl font-bold text-foreground text-center mb-6">
        Discover Our Best Products
      </h2>
      <Tabs defaultValue="featured">
        <TabsList className="mb-6 bg-transparent gap-2">
          <TabsTrigger
            value="featured"
            className="data-[state=active]:border-b-2 data-[state=active]:border-navy data-[state=active]:bg-transparent rounded-none"
            data-ocid="best_products.tab"
          >
            Featured
          </TabsTrigger>
          <TabsTrigger
            value="sale"
            className="data-[state=active]:border-b-2 data-[state=active]:border-navy data-[state=active]:bg-transparent rounded-none"
            data-ocid="best_products.tab"
          >
            Sale
          </TabsTrigger>
          <TabsTrigger
            value="toprated"
            className="data-[state=active]:border-b-2 data-[state=active]:border-navy data-[state=active]:bg-transparent rounded-none"
            data-ocid="best_products.tab"
          >
            Top Rate
          </TabsTrigger>
        </TabsList>
        <TabsContent value="featured">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {featuredProducts.map((p, i) => (
              <ProductCard
                key={p.id}
                product={p}
                index={i}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="sale">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {saleProducts.map((p, i) => (
              <ProductCard
                key={p.id}
                product={p}
                index={i}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="toprated">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {topRatedProducts.map((p, i) => (
              <ProductCard
                key={p.id}
                product={p}
                index={i}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
