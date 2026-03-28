export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  colorClass: string;
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Acer A315 Intel Core i5 1235U 8GB 512GB SSD 15.6" FHD',
    price: 9299,
    originalPrice: 10999,
    category: "featured",
    colorClass: "bg-blue-100",
  },
  {
    id: 2,
    name: 'Acer Aspire Lite AL14-31P i3-N300 8GB 512GB SSD 15.6"',
    price: 7499,
    category: "featured",
    colorClass: "bg-slate-100",
  },
  {
    id: 3,
    name: 'ACER ASPIRE LITE CORE I5 8GB 512GB 16" LAPTOP',
    price: 8799,
    originalPrice: 10999,
    category: "featured",
    colorClass: "bg-indigo-100",
  },
  {
    id: 4,
    name: 'Acer Aspire Lite Intel i5 16" Screen 512GB SSD Win 11',
    price: 8999,
    category: "featured",
    colorClass: "bg-violet-100",
  },
];

export const saleProducts: Product[] = [
  {
    id: 5,
    name: "Acer ETBook Intel Core i5 16GB 512GB SSD Win 11",
    price: 8599,
    originalPrice: 9499,
    category: "sale",
    colorClass: "bg-emerald-100",
  },
  {
    id: 6,
    name: "ASUS TUF Gaming A15 AMD Ryzen 5 RTX2050 16GB 512GB",
    price: 12899,
    originalPrice: 14999,
    category: "sale",
    colorClass: "bg-red-100",
  },
  {
    id: 7,
    name: "ASUS TUF Gaming F15 Core i5 8GB 512GB RTX3050 4GB",
    price: 13999,
    category: "sale",
    colorClass: "bg-orange-100",
  },
  {
    id: 8,
    name: "Asus TUF Ryzen 7 7735HS 16GB 512GB RTX4050 6GB 144Hz",
    price: 19999,
    originalPrice: 22999,
    category: "sale",
    colorClass: "bg-yellow-100",
  },
];

export const topRatedProducts: Product[] = [
  {
    id: 9,
    name: "Arktek 4GB DDR3 1600Mhz Desktop Memory",
    price: 400,
    category: "toprated",
    colorClass: "bg-cyan-100",
  },
  {
    id: 10,
    name: "Arktek 4GB DDR3 1600Mhz Notebook Memory",
    price: 400,
    category: "toprated",
    colorClass: "bg-teal-100",
  },
  {
    id: 11,
    name: "Arktek 8GB DDR3 1600Mhz Desktop Memory",
    price: 600,
    category: "toprated",
    colorClass: "bg-sky-100",
  },
  {
    id: 12,
    name: "Arktek 8GB DDR3 1600Mhz Notebook Memory",
    price: 600,
    category: "toprated",
    colorClass: "bg-blue-100",
  },
];

export const mostViewedProducts: Product[] = [
  {
    id: 13,
    name: "Rogueware EX100M 512GB USB3.2 Type-C External SSD",
    price: 799,
    originalPrice: 999,
    category: "mostviewed",
    colorClass: "bg-purple-100",
  },
  {
    id: 14,
    name: "Hikvision 256GB Solid State Disk Drive USB3.1 Type-C",
    price: 650,
    originalPrice: 699,
    category: "mostviewed",
    colorClass: "bg-pink-100",
  },
  {
    id: 15,
    name: "Aorlis AO-77920 USB Rechargeable Vacuum Cleaner 120W",
    price: 299,
    originalPrice: 499,
    category: "mostviewed",
    colorClass: "bg-rose-100",
  },
  {
    id: 16,
    name: "Acer UP300 128GB USB 2.0 Flash Drive White",
    price: 149,
    originalPrice: 199,
    category: "mostviewed",
    colorClass: "bg-fuchsia-100",
  },
];

export const bestSellerProducts: Product[] = [
  {
    id: 17,
    name: "Tapo C425 Solar-Powered Security Camera TP-Link",
    price: 2149,
    originalPrice: 2599,
    category: "bestseller",
    colorClass: "bg-lime-100",
  },
  {
    id: 18,
    name: "Deco X20 AX1800 Whole Home Mesh Wi-Fi 6 System TP-Link",
    price: 4839,
    originalPrice: 5999,
    category: "bestseller",
    colorClass: "bg-green-100",
  },
  {
    id: 19,
    name: "TL-MR100 300Mbps Wireless N 4G LTE Router TP-Link",
    price: 999,
    originalPrice: 1299,
    category: "bestseller",
    colorClass: "bg-emerald-100",
  },
  {
    id: 20,
    name: "TP-Link Deco M4 3-pack AC1200 Whole Home Mesh Wi-Fi",
    price: 2749,
    originalPrice: 3299,
    category: "bestseller",
    colorClass: "bg-teal-100",
  },
];

export const easterDeals: Product[] = [
  {
    id: 21,
    name: 'Seagate Barracuda 960GB SATA 3.0 2.5" Solid State Drive',
    price: 2299,
    category: "easter",
    colorClass: "bg-sky-100",
  },
  {
    id: 22,
    name: "WD Blue SN580 1TB NVMe SSD Gen 3.0",
    price: 2499,
    category: "easter",
    colorClass: "bg-blue-100",
  },
  {
    id: 23,
    name: "ASUS TUF Gaming A15 Ryzen 5 RTX2050 16GB 512GB SSD",
    price: 12899,
    originalPrice: 14999,
    category: "easter",
    colorClass: "bg-red-100",
  },
];

export const newArrivalSSDs: Product[] = [
  {
    id: 30,
    name: 'Crucial BX500 240GB 3D NAND SATA 2.5" SSD',
    price: 799,
    originalPrice: 899,
    category: "ssd",
    colorClass: "bg-blue-100",
  },
  {
    id: 31,
    name: 'Crucial MX500 1TB 2.5" SSD',
    price: 2999,
    category: "ssd",
    colorClass: "bg-indigo-100",
  },
  {
    id: 32,
    name: 'Dato DS700 2.5" 1TB SATA III Internal SSD',
    price: 1999,
    category: "ssd",
    colorClass: "bg-slate-100",
  },
  {
    id: 33,
    name: 'Hikvision E100 256GB 2.5" SSD',
    price: 599,
    category: "ssd",
    colorClass: "bg-sky-100",
  },
];

export const newArrivalGamingLaptops: Product[] = [
  {
    id: 34,
    name: "ASUS TUF Gaming A15 AMD Ryzen 5 RTX2050 16GB",
    price: 12899,
    originalPrice: 14999,
    category: "gaming",
    colorClass: "bg-red-100",
  },
  {
    id: 35,
    name: "ASUS TUF Gaming F15 Core i7 16GB 1TB RTX3050 4GB",
    price: 16899,
    category: "gaming",
    colorClass: "bg-orange-100",
  },
  {
    id: 36,
    name: "ASUS TUF Gaming Laptop A15 Ryzen 7 8GB 512GB RTX2050",
    price: 11799,
    originalPrice: 13999,
    category: "gaming",
    colorClass: "bg-amber-100",
  },
  {
    id: 37,
    name: "Asus TUF Ryzen 7 16GB 512GB RTX4050 6GB 144Hz",
    price: 19999,
    originalPrice: 22999,
    category: "gaming",
    colorClass: "bg-yellow-100",
  },
];

export function formatPrice(price: number): string {
  return `R ${price.toLocaleString("en-ZA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
