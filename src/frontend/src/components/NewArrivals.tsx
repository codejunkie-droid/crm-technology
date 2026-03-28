import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  type Product,
  formatPrice,
  newArrivalGamingLaptops,
  newArrivalSSDs,
} from "@/data/products";
import { ShoppingCart, Star } from "lucide-react";

interface NewArrivalsProps {
  onAddToCart: (product: { id: number; name: string; price: number }) => void;
}

const printerProducts: Product[] = [
  {
    id: 50,
    name: "Brother HL-L2350DW Wireless Mono Laser Printer",
    price: 2999,
    category: "printers",
    colorClass: "bg-gray-100",
  },
  {
    id: 51,
    name: "HP LaserJet Pro M15w Wireless Mono Printer",
    price: 1899,
    originalPrice: 2199,
    category: "printers",
    colorClass: "bg-blue-100",
  },
  {
    id: 52,
    name: "Brother DCP-L2550DW 3-in-1 Mono Laser Printer",
    price: 3499,
    category: "printers",
    colorClass: "bg-slate-100",
  },
  {
    id: 53,
    name: "Epson EcoTank L3250 Wi-Fi All-in-One Ink Tank",
    price: 3799,
    originalPrice: 4299,
    category: "printers",
    colorClass: "bg-indigo-100",
  },
];

const m2Products: Product[] = [
  {
    id: 60,
    name: "Kingston NV2 500GB M.2 2280 NVMe PCIe 4.0 SSD",
    price: 799,
    category: "m2",
    colorClass: "bg-green-100",
  },
  {
    id: 61,
    name: "WD Black SN770 1TB M.2 NVMe SSD",
    price: 1999,
    originalPrice: 2499,
    category: "m2",
    colorClass: "bg-teal-100",
  },
  {
    id: 62,
    name: "Samsung 980 Pro 1TB PCIe 4.0 NVMe M.2 SSD",
    price: 3299,
    category: "m2",
    colorClass: "bg-cyan-100",
  },
  {
    id: 63,
    name: "Seagate FireCuda 530 2TB M.2 NVMe PCIe 4.0",
    price: 4499,
    originalPrice: 5199,
    category: "m2",
    colorClass: "bg-sky-100",
  },
];

const monitorProducts: Product[] = [
  {
    id: 70,
    name: 'Samsung 24" FHD 75Hz IPS LED Monitor',
    price: 2799,
    category: "monitors",
    colorClass: "bg-blue-100",
  },
  {
    id: 71,
    name: 'LG 27" QHD IPS 165Hz Gaming Monitor',
    price: 6499,
    originalPrice: 7499,
    category: "monitors",
    colorClass: "bg-indigo-100",
  },
  {
    id: 72,
    name: 'Acer 27" FHD IPS 100Hz Zero Frame Monitor',
    price: 3199,
    category: "monitors",
    colorClass: "bg-violet-100",
  },
  {
    id: 73,
    name: 'Philips 27" 4K UHD IPS USB-C Monitor',
    price: 8999,
    originalPrice: 10499,
    category: "monitors",
    colorClass: "bg-purple-100",
  },
];

const laptopProducts: Product[] = [
  {
    id: 80,
    name: "Lenovo IdeaPad Slim 3 Core i5 12th Gen 8GB 512GB",
    price: 8999,
    originalPrice: 10499,
    category: "laptops",
    colorClass: "bg-slate-100",
  },
  {
    id: 81,
    name: 'HP 15s Intel Core i5 8GB 512GB SSD 15.6" FHD',
    price: 9499,
    category: "laptops",
    colorClass: "bg-blue-100",
  },
  {
    id: 82,
    name: "Dell Inspiron 15 3000 Core i5 8GB 256GB SSD",
    price: 9999,
    category: "laptops",
    colorClass: "bg-indigo-100",
  },
  {
    id: 83,
    name: "Asus VivoBook 15 Core i5 1235U 8GB 512GB SSD",
    price: 9299,
    originalPrice: 10999,
    category: "laptops",
    colorClass: "bg-cyan-100",
  },
];

const externalHDDProducts: Product[] = [
  {
    id: 90,
    name: "WD My Passport 1TB USB-C Portable Hard Drive",
    price: 1199,
    category: "hdd",
    colorClass: "bg-orange-100",
  },
  {
    id: 91,
    name: "Seagate Backup Plus 2TB Portable External HDD",
    price: 1599,
    originalPrice: 1899,
    category: "hdd",
    colorClass: "bg-red-100",
  },
  {
    id: 92,
    name: "Transcend StoreJet 25M3 2TB USB 3.1 External HDD",
    price: 1399,
    category: "hdd",
    colorClass: "bg-yellow-100",
  },
  {
    id: 93,
    name: "Toshiba Canvio Basics 1TB Portable External HDD",
    price: 899,
    originalPrice: 1099,
    category: "hdd",
    colorClass: "bg-lime-100",
  },
];

const cctvProducts: Product[] = [
  {
    id: 104,
    name: "Hikvision 4-Channel 1080p DVR Kit with 2 Cameras",
    price: 3999,
    category: "cctv",
    colorClass: "bg-gray-100",
  },
  {
    id: 105,
    name: "TP-Link Tapo C320WS Outdoor Security Wi-Fi Camera",
    price: 1499,
    originalPrice: 1799,
    category: "cctv",
    colorClass: "bg-slate-100",
  },
  {
    id: 106,
    name: "Dahua 8-Channel 4MP NVR CCTV Security Kit",
    price: 7999,
    category: "cctv",
    colorClass: "bg-zinc-100",
  },
  {
    id: 107,
    name: "Reolink 4K PoE IP Camera 8MP Outdoor Security",
    price: 1999,
    originalPrice: 2499,
    category: "cctv",
    colorClass: "bg-neutral-100",
  },
];

const tabLabels: Record<string, string> = {
  ssds: "SSDs",
  m2: "M.2 Cards",
  hdd: "External HDD",
  gaming: "Gaming Laptops",
  cctv: "CCTV Kits",
  printers: "Printers",
  monitors: "Monitors",
  laptops: "Laptops",
};

function getIcon(category: string): string {
  if (category === "ssd" || category === "m2") return "\ud83d\udcbe";
  if (category === "gaming" || category === "laptops") return "\ud83d\udcbb";
  if (category === "printers") return "\ud83d\udda8\ufe0f";
  if (category === "monitors") return "\ud83d\udda5\ufe0f";
  if (category === "hdd") return "\ud83d\uddc4\ufe0f";
  if (category === "cctv") return "\ud83d\udcf7";
  return "\ud83d\udce6";
}

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
      className="bg-card rounded-xl border border-border shadow-card p-4 flex flex-col gap-3"
      data-ocid={`new_arrivals.item.${index + 1}`}
    >
      <div
        className={`${product.colorClass} rounded-lg h-36 flex items-center justify-center relative`}
      >
        {product.originalPrice && (
          <span className="absolute top-2 left-2 bg-orange text-white text-[10px] font-bold px-2 py-0.5 rounded">
            NEW
          </span>
        )}
        <span className="text-4xl">{getIcon(product.category)}</span>
      </div>
      <div className="flex-1">
        <p className="text-xs font-semibold text-foreground leading-tight line-clamp-2">
          {product.name}
        </p>
        <div className="flex items-center gap-0.5 mt-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              size={8}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-navy">
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
        className="flex items-center justify-center gap-2 py-2 bg-navy text-white rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
        data-ocid={`new_arrivals.button.${index + 1}`}
      >
        <ShoppingCart size={12} /> Add to Cart
      </button>
    </div>
  );
}

export function NewArrivals({ onAddToCart }: NewArrivalsProps) {
  const tabs = [
    "ssds",
    "printers",
    "m2",
    "monitors",
    "laptops",
    "hdd",
    "gaming",
    "cctv",
  ];
  const tabData: Record<string, Product[]> = {
    ssds: newArrivalSSDs,
    printers: printerProducts,
    m2: m2Products,
    monitors: monitorProducts,
    laptops: laptopProducts,
    hdd: externalHDDProducts,
    gaming: newArrivalGamingLaptops,
    cctv: cctvProducts,
  };

  return (
    <section data-ocid="new_arrivals.section">
      <h2 className="text-2xl font-bold text-foreground mb-5">New Arrivals</h2>
      <Tabs defaultValue="ssds">
        <TabsList className="bg-transparent gap-1 flex-wrap mb-6 h-auto">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="capitalize data-[state=active]:border-b-2 data-[state=active]:border-navy data-[state=active]:bg-transparent rounded-none text-xs"
              data-ocid="new_arrivals.tab"
            >
              {tabLabels[tab]}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab} value={tab}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {tabData[tab].map((p, i) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  index={i}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
