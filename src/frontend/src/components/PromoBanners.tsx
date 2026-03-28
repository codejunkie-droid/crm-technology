const banners = [
  {
    title: "WI-FI ROUTER",
    subtitle: "D-Link AC1200 Dual Band",
    cta: "Start Buying",
    bg: "bg-gradient-to-br from-blue-600 to-blue-800",
    icon: "\ud83d\udce1",
  },
  {
    title: "Brother 4-in-1 Laser Printer",
    subtitle: "Compact & affordable",
    cta: "Shop now",
    bg: "bg-gradient-to-br from-gray-700 to-gray-900",
    icon: "\ud83d\udda8\ufe0f",
  },
  {
    title: "35 Pcs TOOL SET",
    subtitle: "Electric Screwdriver",
    cta: "Start Buying",
    bg: "bg-gradient-to-br from-orange-500 to-red-600",
    icon: "\ud83d\udd27",
  },
  {
    title: "Rogueware 512GB",
    subtitle: "USB3.2 Type-C",
    cta: "Shop now",
    bg: "bg-gradient-to-br from-purple-600 to-indigo-700",
    icon: "\ud83d\udcbe",
  },
];

export function PromoBanners() {
  return (
    <section data-ocid="promo.section">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {banners.map((b, i) => (
          <div
            key={b.title}
            className={`${b.bg} rounded-xl p-5 flex flex-col gap-2 cursor-pointer hover:scale-[1.02] transition-transform`}
            data-ocid={`promo.item.${i + 1}`}
          >
            <span className="text-3xl">{b.icon}</span>
            <div>
              <div className="text-white font-bold text-sm leading-tight">
                {b.title}
              </div>
              <div className="text-white/70 text-xs mt-0.5">{b.subtitle}</div>
            </div>
            <button
              type="button"
              className="mt-auto self-start text-white/90 text-xs border border-white/40 px-3 py-1 rounded-full hover:bg-white/10 transition-colors"
              data-ocid={`promo.button.${i + 1}`}
            >
              {b.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
