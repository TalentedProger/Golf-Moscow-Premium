import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О клубе" },
  { href: "/membership", label: "Членство" },
  { href: "/events", label: "Мероприятия" },
  { href: "/contact", label: "Контакты" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#1C3A2B]/10 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/">
              <span className="flex items-center gap-2 cursor-pointer group">
                <span className={`font-serif font-bold tracking-[0.15em] transition-colors duration-300 text-lg md:text-xl ${
                  scrolled ? "text-[#1C3A2B]" : "text-white"
                }`}>
                  VERDE
                </span>
                <span className={`text-xs tracking-[0.25em] uppercase transition-colors duration-300 font-light ${
                  scrolled ? "text-[#4A8862]" : "text-white/70"
                }`}>
                  Golf Club
                </span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className={`relative px-4 py-2 text-sm font-medium tracking-wide cursor-pointer transition-all duration-300 rounded-lg group ${
                    location === link.href
                      ? scrolled ? "text-[#1C3A2B]" : "text-white"
                      : scrolled ? "text-[#1C3A2B]/70 hover:text-[#1C3A2B]" : "text-white/70 hover:text-white"
                  }`}>
                    {link.label}
                    {location === link.href && (
                      <motion.span
                        layoutId="nav-indicator"
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full ${
                          scrolled ? "bg-[#1C3A2B]" : "bg-white"
                        }`}
                      />
                    )}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Link href="/contact">
                <span className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide cursor-pointer transition-all duration-300 ${
                  scrolled
                    ? "bg-[#1C3A2B] text-white hover:bg-[#2D5A40]"
                    : "bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm"
                }`}
                data-testid="nav-cta"
                >
                  Записаться
                </span>
              </Link>
            </div>

            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-[#1C3A2B] hover:bg-[#1C3A2B]/10" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              data-testid="nav-mobile-toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#1C3A2B] flex flex-col pt-20"
          >
            <div className="flex flex-col items-start gap-1 px-8 pt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <Link href={link.href}>
                    <span className={`block py-4 text-2xl font-serif cursor-pointer border-b border-white/10 transition-colors ${
                      location === link.href ? "text-[#C9A96E]" : "text-white hover:text-[#C9A96E]"
                    }`}>
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8 w-full"
              >
                <Link href="/contact">
                  <span className="block text-center py-4 px-8 bg-[#C9A96E] text-[#1C3A2B] rounded-full font-medium text-lg cursor-pointer">
                    Записаться
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
