import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, ArrowRight, Instagram, Twitter, Clock, MapPin, Users, Calendar } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CounterStat from "@/components/ui/CounterStat";
import heroImg from "@/assets/hero-aerial.png";
import clubhouseImg from "@/assets/clubhouse.png";
import coachingImg from "@/assets/coaching.png";
import restaurantImg from "@/assets/restaurant.png";
import membersImg from "@/assets/members.png";
import waterHazardImg from "@/assets/water-hazard.png";
import equipmentImg from "@/assets/equipment.png";
import testimonialsBg from "@assets/image_1775078449418.png";

const heroPills = [
  "Обучение с нуля",
  "Ресторан & SPA",
  "18 лунок PGA",
  "Прокат инвентаря",
];

const courseCards = [
  {
    img: waterHazardImg,
    title: "Водные препятствия",
    tag: "Стратегия",
    desc: "7 водных объектов создают уникальный стратегический рисунок курса.",
    stats: [{ label: "водных объектов", value: "7" }, { label: "лунок с водой", value: "11" }],
  },
  {
    img: equipmentImg,
    title: "Качество грина",
    tag: "Стандарты PGA",
    desc: "Профессиональный уход по стандартам Augusta National. Покрытие Bentgrass.",
    stats: [{ label: "га ухоженного поля", value: "65" }, { label: "сорт травы", value: "Bentgrass" }],
  },
  {
    img: coachingImg,
    title: "Тренировочная зона",
    tag: "Обучение",
    desc: "Driving range на 30 мест, паттинг грин и крытая зона с PGA-инструкторами.",
    stats: [{ label: "мест на driving range", value: "30" }, { label: "инструктора PGA", value: "4" }],
  },
];

const testimonials = [
  {
    step: "01",
    quote: "Verde Golf Club — это не просто поле. Это место, где время замедляется и каждый удар становится маленькой победой.",
    name: "Александр Морозов",
    title: "Член клуба с 2019 года",
    initials: "АМ",
  },
  {
    step: "02",
    quote: "Атмосфера исключительности чувствуется с первого визита. Сервис и инфраструктура на уровне лучших клубов Европы.",
    name: "Елена Соколова",
    title: "Член клуба с 2021 года",
    initials: "ЕС",
  },
  {
    step: "03",
    quote: "Здесь я провожу лучшие деловые переговоры. Гольф открывает людей по-настоящему.",
    name: "Дмитрий Волков",
    title: "Член клуба с 2020 года",
    initials: "ДВ",
  },
];

const infoRows = [
  { label: "Членство", value: "Ограниченное. Индивидуальный отбор каждого кандидата.", link: "/membership" },
  { label: "Мероприятия", value: "Турниры PGA, гала-вечера, деловые встречи и закрытые ужины." },
  { label: "Обучение", value: "Персональные программы с сертифицированными инструкторами PGA." },
  { label: "Режим работы", value: "Круглый год · 07:00 — 21:00 · Без выходных." },
  { label: "Расположение", value: "40 минут от Москвы · Истринский район, Московская область." },
  { label: "Гостевой доступ", value: "По приглашению действующего члена клуба.", link: "/contact" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.0]);

  return (
    <div className="overflow-x-hidden bg-white">

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative flex flex-col justify-end overflow-hidden rounded-3xl"
        style={{ margin: "96px 48px 0 48px", minHeight: "calc(100svh - 112px)" }}
      >
        {/* Background */}
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 will-change-transform">
          <img src={heroImg} alt="Verde Golf Course" className="w-full h-full object-cover object-center" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* CENTER TEXT — outlined, semi-transparent, 3 lines */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
            className="text-center"
            style={{ maxWidth: "min(480px, 55vw)" }}
          >
            <p
              className="uppercase font-extrabold leading-[1.05] break-words"
              style={{
                fontSize: "clamp(1.5rem, 3.8vw, 3.4rem)",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.06)",
                WebkitTextStroke: "1.5px rgba(255,255,255,0.72)",
              }}
            >
              ПОЛЕ ВЫСОКОГО<br />КЛАССА В 40<br />МИНУТАХ ОТ МОСКВЫ
            </p>
          </motion.div>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="relative z-10 w-full px-6 sm:px-10 md:px-14 pb-8 sm:pb-12 md:pb-14">

          {/* VERDE / GOLF / CLUB — bottom left */}
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="text-white uppercase font-extrabold leading-[0.88]"
              style={{
                fontSize: "clamp(1.15rem, 3vw, 2.65rem)",
                letterSpacing: "0.12em",
              }}
            >
              VERDE<br />GOLF<br />CLUB
            </motion.h1>
          </div>

          {/* Bottom row — CTA + pills */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
              <Link href="/membership">
                <span className="group inline-flex items-center gap-3 px-6 py-3 bg-white text-[#1C3A2B] cursor-pointer transition-all duration-300 hover:bg-[#C9A96E] font-semibold text-sm tracking-wide" style={{ borderRadius: "50px" }} data-testid="hero-cta">
                  Забронировать
                  <span className="w-6 h-6 rounded-full bg-[#1C3A2B] group-hover:bg-white flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                    <ArrowUpRight size={13} className="text-white group-hover:text-[#1C3A2B] transition-colors duration-300" />
                  </span>
                </span>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="grid grid-cols-2 gap-2">
              {heroPills.map((pill) => (
                <div key={pill} className="flex items-center gap-2 px-3 py-2 bg-white/12 backdrop-blur-md border border-white/18 text-white text-xs font-medium tracking-wide" style={{ borderRadius: "50px" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                  {pill}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════════ */}
      <section className="py-14 md:py-16 bg-white border-b border-[#1C3A2B]/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1C3A2B]/15">
            <CounterStat value={18} label="Лунок" description="Чемпионский курс PGA" />
            <CounterStat value={365} label="Дней" description="Открыт круглый год" />
            <CounterStat value={120} suffix="+" label="Резидентов" description="Закрытое сообщество" />
            <CounterStat value={2500} suffix=" м²" label="Клубхаус" description="Роскошная инфраструктура" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LIFESTYLE — Философия клуба
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28" style={{ margin: "0 48px" }}>
        <AnimatedSection className="mb-14 md:mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A8862]" />
            <p className="text-[#1C3A2B]/55 text-sm">Философия клуба</p>
          </div>
          <p className="text-[#1C3A2B] leading-snug font-medium max-w-3xl" style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.1rem)" }}>
            Verde Golf Club — это не просто{" "}
            <span className="text-[#4A8862]">65 гектаров</span>{" "}
            идеального ландшафта. Это закрытая экосистема, созданная для тех,
            кому важен{" "}
            <span className="text-[#4A8862]">баланс</span>{" "}
            между достижением целей и качественным восстановлением.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <AnimatedSection delay={0.05} className="bg-[#F5F0E8] rounded-2xl p-6 flex flex-col">
            <h3 className="text-[#1C3A2B] font-semibold text-sm mb-3 leading-snug">Приватность,<br />как стандарт:</h3>
            <p className="text-[#1C3A2B]/50 text-sm leading-relaxed flex-1">Мы ограничили количество клубных карт, чтобы каждый резидент чувствовал себя в абсолютном уединении.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="overflow-hidden rounded-2xl lg:col-span-1" style={{ minHeight: "260px" }}>
            <img src={membersImg} alt="Club lifestyle" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" style={{ minHeight: "260px" }} />
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="bg-[#F5F0E8] rounded-2xl p-6 flex flex-col">
            <h3 className="text-[#1C3A2B] font-semibold text-sm mb-3 leading-snug">Эстетика<br />вне времени</h3>
            <p className="text-[#1C3A2B]/50 text-sm leading-relaxed flex-1">Дизайн вдохновлён классическими британскими клубами, оснащён технологиями будущего для анализа игры.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="bg-[#F5F0E8] rounded-2xl p-6 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-[#1C3A2B] font-semibold text-sm leading-snug">Сообщество<br />равных</h3>
              <Link href="/about">
                <span className="w-7 h-7 rounded-full bg-[#1C3A2B] flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-[#4A8862] transition-colors">
                  <ArrowUpRight size={13} className="text-white" />
                </span>
              </Link>
            </div>
            <p className="text-[#1C3A2B]/50 text-sm leading-relaxed flex-1">Здесь заключаются сделки и завязываются знакомства в неформальной, доверительной атмосфере.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.25} className="bg-[#F5F0E8] rounded-2xl p-6 flex flex-col">
            <h3 className="text-[#1C3A2B] font-semibold text-sm mb-3 leading-snug">Инфраструктура<br />мирового уровня</h3>
            <p className="text-[#1C3A2B]/50 text-sm leading-relaxed flex-1">2 500 м² клубного дома: ресторан с шеф-поваром, SPA-комплекс, конференц-залы и лаундж.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT SPLIT
      ═══════════════════════════════════════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        <AnimatedSection direction="right" className="overflow-hidden">
          <div className="h-full min-h-[360px] lg:min-h-[560px] overflow-hidden">
            <img src={clubhouseImg} alt="Verde Clubhouse" className="w-full h-full object-cover" />
          </div>
        </AnimatedSection>
        <AnimatedSection direction="left" delay={0.15} className="bg-[#1C3A2B] flex items-center">
          <div className="px-8 sm:px-12 md:px-16 py-16 md:py-20">
            <p className="text-[#C9A96E] text-xs tracking-[0.35em] uppercase font-semibold mb-5">О клубе</p>
            <h2 className="font-serif font-black text-white uppercase leading-tight mb-7" style={{ fontSize: "clamp(2rem, 4vw, 3.6rem)", letterSpacing: "0.02em" }}>
              МЕСТО, ГДЕ<br />ВРЕМЯ<br />ЗАМЕДЛЯЕТСЯ
            </h2>
            <p className="text-white/55 leading-relaxed mb-5 text-sm md:text-base">
              Verde Golf Club — закрытое пространство для тех, кто ценит гольф и искусство безупречного отдыха. Расположен в 40 минутах от Москвы.
            </p>
            <p className="text-white/55 leading-relaxed mb-10 text-sm md:text-base">
              18-луночный курс чемпионского уровня, мировая кухня и нетворкинг среди лидеров бизнеса.
            </p>
            <Link href="/about">
              <span className="group inline-flex items-center gap-2 text-white font-semibold text-sm tracking-wide cursor-pointer border-b border-white/30 pb-1 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300" data-testid="home-about-link">
                О клубе <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* ═══════════════════════════════════════════
          COURSE — full-image cards
      ═══════════════════════════════════════════ */}
      <section className="pt-20 md:pt-28 pb-0" style={{ margin: "0 48px" }}>
        <AnimatedSection className="mb-12 md:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-[#4A8862] text-xs tracking-[0.35em] uppercase font-semibold mb-4">Гольф-поле</p>
            <h2 className="font-serif font-black text-[#1C3A2B] uppercase leading-tight" style={{ fontSize: "clamp(2rem, 3.8vw, 3.4rem)", letterSpacing: "0.02em" }}>
              ПОЛЕ<br />ЧЕМПИОНСКОГО<br />КЛАССА
            </h2>
          </div>
          <Link href="/about">
            <span className="group inline-flex items-center gap-2 text-[#1C3A2B]/50 hover:text-[#1C3A2B] text-sm tracking-wide cursor-pointer transition-colors border-b border-[#1C3A2B]/20 pb-1 hover:border-[#1C3A2B]/60 whitespace-nowrap self-start sm:self-auto mb-1">
              Подробнее <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {courseCards.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-2xl cursor-pointer"
                style={{ height: "520px" }}
              >
                {/* Full bleed image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Tag top */}
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                      {item.tag}
                    </span>
                  </div>

                  {/* Content bottom */}
                  <div>
                    <h3
                      className="font-serif font-black text-white uppercase mb-2 leading-tight"
                      style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)", letterSpacing: "0.03em", fontWeight: 900 }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-white/65 text-sm leading-relaxed mb-5">{item.desc}</p>
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/15">
                      {item.stats.map((s) => (
                        <div key={s.label}>
                          <div className="text-[#C9A96E] font-bold text-lg leading-none mb-1">{s.value}</div>
                          <div className="text-white/45 text-[10px] uppercase tracking-wide leading-tight">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIALS — image background, equal margins
      ═══════════════════════════════════════════ */}
      <section style={{ margin: "64px 48px 64px 48px" }}>
        <div className="relative rounded-3xl overflow-hidden px-6 sm:px-10 md:px-14 py-14 md:py-20">
          <div className="absolute inset-0">
            <img src={testimonialsBg} alt="Golf course" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#1C3A2B]/78" />
          </div>

          <AnimatedSection className="relative z-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
            <div>
              <p className="text-[#C9A96E] text-xs tracking-[0.35em] uppercase font-semibold mb-3">Отзывы резидентов</p>
              <h2 className="font-serif font-black text-white uppercase leading-tight" style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", letterSpacing: "0.02em" }}>
                ЧТО ГОВОРЯТ<br />НАШИ ЧЛЕНЫ
              </h2>
            </div>
            <Link href="/membership">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 text-white/80 hover:text-white hover:border-white/50 text-sm font-medium tracking-wide cursor-pointer transition-all whitespace-nowrap self-start sm:self-auto">
                Стать членом <ArrowRight size={14} />
              </span>
            </Link>
          </AnimatedSection>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white/10 backdrop-blur-sm border border-white/12 rounded-2xl p-6 flex flex-col h-full"
                  style={{ minHeight: "240px" }}
                >
                  <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1 self-start mb-6">
                    <span className="text-[#C9A96E] text-[10px] font-bold tracking-widest">Отзыв {t.step}</span>
                  </div>
                  <p className="text-white font-medium leading-relaxed mb-6 flex-1" style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)" }}>{t.quote}</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                    <div className="w-8 h-8 rounded-full bg-[#C9A96E]/25 flex items-center justify-center text-[#C9A96E] text-xs font-bold flex-shrink-0">{t.initials}</div>
                    <div>
                      <div className="font-semibold text-white text-sm">{t.name}</div>
                      <div className="text-white/40 text-xs mt-0.5">{t.title}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INFO TABLE — editorial style, no cards
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-24" style={{ margin: "0 48px" }}>
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-10 border-b border-[#1C3A2B]/12 mb-0">
          <div>
            <p className="text-[#4A8862] text-xs tracking-[0.35em] uppercase font-semibold mb-3">Всё о клубе</p>
            <h2 className="font-serif font-black text-[#1C3A2B] uppercase leading-tight" style={{ fontSize: "clamp(1.6rem, 3vw, 2.8rem)", letterSpacing: "0.02em" }}>
              ВАЖНАЯ<br />ИНФОРМАЦИЯ
            </h2>
          </div>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 text-[#1C3A2B]/50 hover:text-[#1C3A2B] text-sm tracking-wide cursor-pointer transition-colors border-b border-[#1C3A2B]/20 pb-1 hover:border-[#1C3A2B]/60 whitespace-nowrap self-start sm:self-auto mb-1">
              Связаться <ArrowRight size={14} />
            </span>
          </Link>
        </AnimatedSection>

        <div>
          {infoRows.map((row, i) => (
            <AnimatedSection key={row.label} delay={i * 0.07}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 py-5 border-b border-[#1C3A2B]/8 group">
                <span
                  className="text-[#1C3A2B]/35 text-xs uppercase tracking-[0.25em] font-semibold flex-shrink-0"
                  style={{ width: "200px" }}
                >
                  {row.label}
                </span>
                <span className="text-[#1C3A2B] text-sm sm:text-base leading-relaxed flex-1">
                  {row.value}
                </span>
                {row.link && (
                  <Link href={row.link}>
                    <span className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                      <ArrowUpRight size={16} className="text-[#4A8862]" />
                    </span>
                  </Link>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MEMBERSHIP CTA — full width, no horizontal margin, no rounded corners
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: "600px" }}>
        <div className="absolute inset-0">
          <img src={restaurantImg} alt="Verde Golf Club" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 sm:px-8 py-24" style={{ minHeight: "600px" }}>
          <AnimatedSection>
            <h2
              className="font-serif font-black text-white uppercase leading-tight mb-5"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
                letterSpacing: "0.03em",
                fontStyle: "italic",
                fontWeight: "800",
                textShadow: "0 2px 40px rgba(0,0,0,0.4)",
              }}
            >
              СТАНЬТЕ ЧАСТЬЮ<br />НАШЕГО СООБЩЕСТВА
            </h2>
            <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-12 max-w-lg mx-auto">
              Ограниченное число мест. Индивидуальное рассмотрение каждой заявки.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/membership">
                <span className="inline-flex items-center gap-3 px-7 py-3.5 bg-white/15 backdrop-blur-md border border-white/30 text-white cursor-pointer hover:bg-white/25 transition-all font-semibold text-sm tracking-wide rounded-full" data-testid="home-membership-cta">
                  Узнать об условиях <ArrowRight size={15} />
                </span>
              </Link>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/8 backdrop-blur-md border border-white/20 text-white/80 cursor-pointer hover:bg-white/18 hover:text-white transition-all font-medium text-sm tracking-wide rounded-full" data-testid="home-contact-cta">
                  Связаться с нами
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-8 sm:px-14 pb-7 pt-4 flex items-center justify-between">
          <span className="text-white/50 text-sm tracking-wide">+7 (000) 000-00-00</span>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/50 hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-white/50 hover:text-white transition-colors"><Twitter size={18} /></a>
          </div>
          <span className="text-white/30 text-xs tracking-[0.15em] uppercase font-medium hidden sm:block">Verde Golf Club</span>
        </div>
      </section>

    </div>
  );
}
