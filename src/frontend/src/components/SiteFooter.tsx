import { Mail, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer
      style={{ background: "oklch(0.25 0 0)" }}
      className="text-white mt-0"
      data-ocid="footer.section"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-base mb-4">Get in touch</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone size={14} /> Phone: 087 265 8348
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={14} /> 24/7 WhatsApp: 0735721090
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} /> info@crmtechnology.co.za
              </div>
              <button
                type="button"
                className="mt-2 self-start px-4 py-2 border border-white/30 text-white text-xs rounded-lg hover:bg-white/10 transition-colors"
                data-ocid="footer.contact.button"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4">Resources</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              {[
                "About Us",
                "Terms of Service",
                "Return & Refund policy",
                "Privacy Policy",
                "Delivery",
              ].map((link) => (
                <button
                  key={link}
                  type="button"
                  className="text-left hover:text-white transition-colors"
                  data-ocid="footer.link"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-base mb-1">Newsletter Signup</h4>
            <p className="text-xs text-gray-400 mb-3">
              Subscribe for more specials. Join our list for the latest deals!
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm placeholder:text-gray-500 outline-none focus:border-white/40"
                data-ocid="footer.newsletter.input"
              />
              <button
                type="button"
                className="px-4 py-2 bg-orange text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
                data-ocid="footer.newsletter.submit_button"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              *Don&apos;t worry, we don&apos;t spam
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>
            \u00a9 {year} CRM Technology Pty Ltd. All rights reserved.
          </span>
          <span>
            Built with \u2764\ufe0f using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
