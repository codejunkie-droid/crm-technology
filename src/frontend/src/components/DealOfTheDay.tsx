import { ShoppingCart } from "lucide-react";

interface DealOfTheDayProps {
  onAddToCart: (product: { id: number; name: string; price: number }) => void;
}

export function DealOfTheDay({ onAddToCart }: DealOfTheDayProps) {
  return (
    <section data-ocid="deal.section">
      <div className="bg-gradient-to-r from-navy to-blue-900 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-full opacity-10">
          <div className="w-full h-full bg-gradient-to-l from-white to-transparent" />
        </div>

        <div className="flex-1 text-white z-10">
          <span className="inline-block px-3 py-1 bg-orange text-white text-xs font-bold rounded-full mb-3">
            Deal of the day.
          </span>
          <h2 className="text-2xl font-bold leading-tight mb-2">
            ASUS Core i7 16GB RAM 1TB SSD
            <br />
            <span className="text-orange">Nvidia GeForce RTX 3050 4GB</span>
          </h2>
          <p className="text-white/70 text-sm mb-5">
            Gaming laptop with top-tier performance at an incredible price.
            Limited time offer!
          </p>
          <button
            type="button"
            onClick={() =>
              onAddToCart({
                id: 100,
                name: "ASUS Core i7 16GB RAM 1TB SSD Nvidia GeForce RTX 3050 4GB",
                price: 16899,
              })
            }
            className="flex items-center gap-2 px-6 py-3 bg-orange text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
            data-ocid="deal.primary_button"
          >
            <ShoppingCart size={16} /> Buy Now
          </button>
        </div>

        <div className="hidden md:flex w-48 h-40 items-center justify-center z-10">
          <div className="relative">
            <div className="w-36 h-36 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-7xl">\ud83d\udcbb</span>
            </div>
            <div className="absolute -top-1 -right-1 bg-orange text-white text-sm font-bold px-2 py-1 rounded-lg">
              R 16,899
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
