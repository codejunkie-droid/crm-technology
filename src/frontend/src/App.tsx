import { BestProducts } from "@/components/BestProducts";
import { DealOfTheDay } from "@/components/DealOfTheDay";
import { EasterDeals } from "@/components/EasterDeals";
import { HeroCarousel } from "@/components/HeroCarousel";
import { NavBar } from "@/components/NavBar";
import { NewArrivals } from "@/components/NewArrivals";
import { PromoBanners } from "@/components/PromoBanners";
import { ServiceIcons } from "@/components/ServiceIcons";
import { ShopByCategory } from "@/components/ShopByCategory";
import { SidebarProducts } from "@/components/SidebarProducts";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import { toast } from "sonner";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: {
    id: number;
    name: string;
    price: number;
  }) => {
    setCartItems((prev) => [...prev, product]);
    toast.success("Added to cart!", {
      description:
        product.name.slice(0, 50) + (product.name.length > 50 ? "..." : ""),
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader cartItems={cartItems} wishlistCount={0} />
      <NavBar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-10">
          <HeroCarousel />
          <ShopByCategory />
          <EasterDeals onAddToCart={handleAddToCart} />
          <BestProducts onAddToCart={handleAddToCart} />
          <PromoBanners />
          <SidebarProducts />
          <DealOfTheDay onAddToCart={handleAddToCart} />
          <NewArrivals onAddToCart={handleAddToCart} />
          <ServiceIcons />
        </div>
      </main>

      <SiteFooter />
      <Toaster />
    </div>
  );
}
