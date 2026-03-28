import { ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Laptops", badge: "Hot", badgeColor: "bg-orange" },
  { label: "Components" },
  { label: "Accessories" },
  { label: "Surveillance" },
  { label: "Networking" },
  { label: "Mega Sale", isSpecial: true, icon: "\ud83d\udd25" },
];

export function NavBar() {
  return (
    <nav className="bg-navy border-t border-white/10" data-ocid="nav.section">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                type="button"
                className={`flex items-center gap-1 px-4 py-3 text-sm font-medium transition-colors hover:bg-white/10 rounded ${
                  link.isSpecial ? "text-orange font-semibold" : "text-white"
                }`}
                data-ocid="nav.link"
              >
                {link.icon && <span>{link.icon}</span>}
                {link.label}
                {link.badge && (
                  <span className="ml-1 px-1.5 py-0.5 bg-orange text-white text-[10px] font-bold rounded">
                    {link.badge}
                  </span>
                )}
                <ChevronDown size={13} className="opacity-60" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
