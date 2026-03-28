const services = [
  {
    icon: "\ud83d\udce6",
    title: "Free Pick-up Point",
    desc: "Order online, collect in store",
  },
  {
    icon: "\ud83d\udcb3",
    title: "Payment Process",
    desc: "Return money within 15 days",
  },
  {
    icon: "\ud83d\udcac",
    title: "24/7 Support",
    desc: "WhatsApp 073 572 1090",
  },
];

export function ServiceIcons() {
  return (
    <section data-ocid="services.section">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="bg-card rounded-xl border border-border p-5 flex items-center gap-4"
            data-ocid={`services.item.${i + 1}`}
          >
            <span className="text-3xl">{s.icon}</span>
            <div>
              <div className="font-bold text-sm text-foreground">{s.title}</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {s.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
