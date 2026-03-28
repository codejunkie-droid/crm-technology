import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    subtitle: '27" LED Monitor',
    title: "Borderless Design",
    desc: "IPS panel preserves color vividness and clarity across every inch of the screen.",
    cta: "Order now",
    accentColor: "from-blue-500 to-cyan-400",
    bgColor: "bg-gradient-to-r from-slate-50 to-blue-50",
    image: "/assets/generated/monitor-hero.dim_500x350.png",
  },
  {
    id: 2,
    subtitle: "Acer Aspire 3",
    title: "12th Gen Intel\u00ae Core\u2122 i5",
    desc: "Intel\u00ae Core\u2122 i5 Processor with UHD Graphics ideal for performance and productivity.",
    cta: "Order now",
    accentColor: "from-indigo-500 to-purple-400",
    bgColor: "bg-gradient-to-r from-slate-50 to-indigo-50",
    image: "/assets/generated/laptop-hero.dim_500x350.png",
  },
  {
    id: 3,
    subtitle: "2TB Seagate",
    title: "Solid State Drive",
    desc: "Improve performance and faster processing with sequential read/writes of up to 540/510 MB/s.",
    cta: "Order now",
    accentColor: "from-teal-500 to-green-400",
    bgColor: "bg-gradient-to-r from-slate-50 to-teal-50",
    image: "/assets/generated/ssd-hero.dim_500x350.png",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-card"
      data-ocid="hero.section"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`${slide.bgColor} flex items-center min-h-[360px] px-10 py-8 gap-8`}
        >
          <div className="flex-1 z-10">
            <span className="inline-block px-3 py-1 bg-orange text-white text-xs font-bold rounded-full mb-3">
              {slide.subtitle}
            </span>
            <h1 className="text-3xl font-bold text-foreground mb-3 leading-tight">
              {slide.title}
            </h1>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              {slide.desc}
            </p>
            <button
              type="button"
              className="px-6 py-2.5 bg-navy text-white font-semibold rounded-xl text-sm hover:opacity-90 transition-opacity"
              data-ocid="hero.primary_button"
            >
              {slide.cta}
            </button>
          </div>

          <div className="flex-shrink-0 relative w-80 h-64 hidden md:flex items-center justify-center">
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${slide.accentColor} opacity-15`}
            />
            <img
              src={slide.image}
              alt={slide.title}
              className="relative z-10 max-h-56 max-w-full object-contain drop-shadow-xl"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all"
        data-ocid="hero.pagination_prev"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all"
        data-ocid="hero.pagination_next"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-navy w-5" : "bg-gray-300"}`}
            data-ocid="hero.toggle"
          />
        ))}
      </div>
    </div>
  );
}
