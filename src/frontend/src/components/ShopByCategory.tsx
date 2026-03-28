import { motion } from "motion/react";

const categories = [
  { label: "Gaming Laptops", icon: "🎮" },
  { label: "Monitors", icon: "🖥️" },
  { label: "M.2 Cards", icon: "💾" },
  { label: "Printers", icon: "🖨️" },
  { label: "SSD Drives", icon: "⚡" },
  { label: "Laptops", icon: "💻" },
  { label: "External HDDs", icon: "🗄️" },
  { label: "CCTV Kits", icon: "📷" },
];

export function ShopByCategory() {
  return (
    <section data-ocid="category.section">
      <h2 className="text-2xl font-bold text-foreground text-center mb-6">
        Shop By Category
      </h2>
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-3">
        {categories.map((cat, i) => (
          <motion.button
            key={cat.label}
            whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(15,34,56,0.12)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border shadow-xs cursor-pointer"
            data-ocid={`category.item.${i + 1}`}
          >
            <span className="text-2xl">{cat.icon}</span>
            <span className="text-xs font-medium text-center text-foreground leading-tight">
              {cat.label}
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
