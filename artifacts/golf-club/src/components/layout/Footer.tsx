import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const footerLinks = {
  "Услуги": [
    { href: "/course", label: "Тренировки" },
    { href: "/events", label: "Турниры" },
    { href: "/membership", label: "Ресторан" },
  ],
  "Информация": [
    { href: "/events", label: "Мероприятия" },
    { href: "/contact", label: "Контакты" },
    { href: "/about", label: "Как добраться" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a1f12 0%, #1C3A2B 45%, #0f2a1c 75%, #162e1f 100%)",
      }}
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(ellipse at 15% 40%, #4A8862 0%, transparent 55%), radial-gradient(ellipse at 85% 10%, #C9A96E 0%, transparent 45%)`
        }} />
      </div>

      {/* Top content */}
      <div className="relative px-8 sm:px-12 md:px-16 pt-16 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Logo + description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-serif font-bold tracking-[0.15em] text-xl">VERDE</span>
              <span className="text-xs tracking-[0.25em] text-white/50 uppercase">Golf Club</span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              Премиальный гольф-клуб в Подмосковье. Место, где каждый раунд становится незабываемым событием.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/55 hover:text-white hover:border-white/50 transition-colors" data-testid="social-instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/55 hover:text-white hover:border-white/50 transition-colors" data-testid="social-facebook">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A96E] mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span className="text-sm text-white/50 hover:text-white transition-colors cursor-pointer">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contacts */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A96E] mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/50">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#4A8862]" />
                <span>Московская область, Истринский район</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/50">
                <Phone size={14} className="shrink-0 text-[#4A8862]" />
                <span>+7 (495) 000-00-00</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/50">
                <Mail size={14} className="shrink-0 text-[#4A8862]" />
                <span>info@verdegolf.ru</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-white/8 pt-6 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© 2025 Verde Golf Club. Все права защищены.</p>
          <div className="flex gap-6">
            <span className="text-white/30 text-xs hover:text-white/55 cursor-pointer transition-colors">Политика конфиденциальности</span>
            <span className="text-white/30 text-xs hover:text-white/55 cursor-pointer transition-colors">Условия использования</span>
          </div>
        </div>

        {/* Big typographic line — VERDE GOLF CLUB — one line, inside section */}
        <div className="overflow-hidden pb-0 -mx-8 sm:-mx-12 md:-mx-16 px-6 sm:px-8 md:px-10" style={{ lineHeight: 0.85 }}>
          <div
            className="font-serif font-black text-white uppercase select-none whitespace-nowrap"
            style={{
              fontSize: "clamp(3rem, 10vw, 10rem)",
              letterSpacing: "-0.025em",
            }}
            aria-hidden="true"
          >
            VERDE GOLF CLUB
          </div>
        </div>
      </div>
    </footer>
  );
}
