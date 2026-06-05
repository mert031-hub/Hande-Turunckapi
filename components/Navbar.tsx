"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hakkinda", label: "Hakkında" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#yaklasimlar", label: "Yaklaşımlar" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DDD0]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex flex-col items-start group cursor-pointer"
            >
              <span
                className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                  scrolled ? "text-[#7A9C75]" : "text-[#A8C4A3]"
                }`}
              >
                Uzm. Kl. Psk.
              </span>
              <span
                className={`text-base lg:text-lg font-semibold leading-tight transition-colors duration-300 ${
                  scrolled ? "text-[#3D2B1F]" : "text-white"
                }`}
              >
                Hande Turunçkapı
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[#7A9C75] cursor-pointer ${
                    scrolled ? "text-[#6B4C38]" : "text-white/90"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://wa.me/905343675775?text=Merhaba%2C%20terapi%2Frandevu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-5 py-2 rounded-full text-sm font-semibold bg-[#7A9C75] text-white hover:bg-[#5C7A58] transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Randevu Al
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                scrolled
                  ? "text-[#3D2B1F] hover:bg-[#E8DDD0]"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Menüyü aç/kapat"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#FAF7F2] flex flex-col pt-20 px-6 pb-8 overflow-y-auto"
          >
            <div className="flex flex-col gap-2 mt-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-4 text-lg font-medium text-[#3D2B1F] border-b border-[#E8DDD0] hover:text-[#7A9C75] transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <a
                href="https://wa.me/905343675775?text=Merhaba%2C%20terapi%2Frandevu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center py-4 rounded-2xl bg-[#7A9C75] text-white font-semibold text-base hover:bg-[#5C7A58] transition-colors shadow-md"
              >
                WhatsApp ile Randevu Al
              </a>
              <a
                href="tel:05343675775"
                onClick={() => setMenuOpen(false)}
                className="mt-3 block w-full text-center py-4 rounded-2xl border-2 border-[#D9CCB9] text-[#6B4C38] font-semibold text-base hover:border-[#7A9C75] transition-colors"
              >
                0534 367 57 75
              </a>
            </motion.div>
            <div className="mt-auto pt-8 text-center">
              <p className="text-sm text-[#9B7B68]">Uzm. Kl. Psk. Hande Turunçkapı</p>
              <p className="text-xs text-[#9B7B68] mt-1">Afyonkarahisar</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
