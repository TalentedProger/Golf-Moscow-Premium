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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Floating nav — black semi-transparent */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-3 z-50 transition-all duration-400 rounded-[2rem] ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl shadow-xl border border-white/10"
            : "bg-black/65 backdrop-blur-lg shadow-md border border-white/8"
        }`}
        style={{ left: "16px", right: "16px" }}
      >
        <div className="px-5 lg:px-7">
          <div className="flex items-center justify-between h-14 lg:h-16">

            {/* Logo */}
            <Link href="/">
              <span className="flex items-center gap-2 cursor-pointer flex-shrink-0">
                <span className="font-serif tracking-[0.12em] text-white text-base lg:text-lg">
                  VERDE
                </span>
                <span className="text-xs tracking-[0.22em] uppercase text-white/55 font-medium hidden sm:block">
                  Golf Club
                </span>
              </span>
            </Link>

            {/* Desktop nav — only on lg+ */}
            <nav className="hidden lg:flex items-center gap-0.5 px-1 py-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className={`relative px-4 py-1.5 text-sm font-medium tracking-wide cursor-pointer transition-all duration-250 rounded-full whitespace-nowrap ${
                    location === link.href
                      ? "bg-white/15 text-white shadow-sm"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* CTA button — only on lg+ */}
            <div className="hidden lg:flex items-center">
              <Link href="/contact">
                <span
                  className="px-5 py-2 bg-white/15 hover:bg-white/25 text-white text-sm font-medium tracking-wide cursor-pointer transition-colors duration-250 rounded-full border border-white/20 whitespace-nowrap"
                  data-testid="nav-cta"
                >
                  Записаться
                </span>
              </Link>
            </div>

            {/* Mobile burger — shows below lg */}
            <button
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-testid="nav-mobile-toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col pt-20"
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
                    <span className={`block py-4 font-serif text-2xl uppercase cursor-pointer border-b border-white/10 transition-colors ${
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
                  <span className="block text-center py-4 px-8 bg-[#C9A96E] text-[#1C3A2B] rounded-full font-semibold text-lg cursor-pointer">
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
