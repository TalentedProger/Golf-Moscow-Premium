import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, ArrowRight, Trophy, Users, Leaf, Shield, Dumbbell, UtensilsCrossed, Briefcase, Calendar } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CounterStat from "@/components/ui/CounterStat";
import heroImg from "@/assets/hero-aerial.png";
import clubhouseImg from "@/assets/clubhouse.png";
import coachingImg from "@/assets/coaching.png";
import restaurantImg from "@/assets/restaurant.png";
import membersImg from "@/assets/members.png";
import waterHazardImg from "@/assets/water-hazard.png";
import equipmentImg from "@/assets/equipment.png";

const testimonials = [
  {
    quote: "Verde Golf Club — это не просто поле. Это место, где время замедляется и каждый удар становится маленькой победой.",
    name: "Александр Морозов",
    title: "Член клуба с 2019 года",
    initials: "АМ",
  },
  {
    quote: "Атмосфера исключительности чувствуется с первого визита. Сервис и инфраструктура на уровне лучших клубов Европы.",
    name: "Елена Соколова",
    title: "Член клуба с 2021 года",
    initials: "ЕС",
  },
  {
    quote: "Здесь я провожу лучшие деловые переговоры. Гольф открывает людей по-настоящему.",
    name: "Дмитрий Волков",
    title: "Член клуба с 2020 года",
    initials: "ДВ",
  },
];

const heroPills = [
  "Обучение с нуля",
  "Ресторан & SPA",
  "18 лунок PGA",
  "Прокат инвентаря",
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.0]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">

      {/* ═══════════════════════════════════════════
          HERO — full-bleed, content bottom-left
      ═══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[640px] flex flex-col justify-end overflow-hidden"
      >
        {/* Background image */}
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0 will-change-transform"
        >
          <img
            src={heroImg}
            alt="Verde Golf Course"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Content row — bottom */}
        <div className="relative z-10 w-full px-6 md:px-12 pb-16 md:pb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-10">

          {/* LEFT — title + sub + CTA */}
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-white uppercase leading-[0.95] mb-5"
              style={{ fontSize: "clamp(1.8rem, 3.6vw, 3.4rem)", letterSpacing: "0.02em" }}
            >
              VERDE GOLF CLUB:<br />
              ПОЛЕ ВЫСОКОГО КЛАССА<br />
              В 40 МИНУТАХ ОТ МОСКВЫ
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/65 text-sm md:text-base leading-relaxed mb-8 max-w-sm"
            >
              Профессиональное поле на 18 лунок, закрытая инфраструктура для отдыха и обучения.
              Всё для игры и нетворкинга в одной локации.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href="/membership">
                <span
                  className="group inline-flex items-center gap-3 px-7 py-3.5 bg-white text-[#1C3A2B] cursor-pointer transition-all duration-300 hover:bg-[#C9A96E] font-semibold text-sm tracking-wide"
                  style={{ borderRadius: "50px" }}
                  data-testid="hero-cta"
                >
                  Забронировать
                  <span className="w-7 h-7 rounded-full bg-[#1C3A2B] group-hover:bg-white flex items-center justify-center transition-colors duration-300">
                    <ArrowUpRight size={14} className="text-white group-hover:text-[#1C3A2B] transition-colors duration-300" />
                  </span>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — feature pills 2×2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-2.5"
          >
            {heroPills.map((pill) => (
              <div
                key={pill}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#1C3A2B]/80 backdrop-blur-md border border-white/10 text-white text-xs font-medium tracking-wide"
                style={{ borderRadius: "50px" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#4A8862] flex-shrink-0" />
                {pill}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT SPLIT — image | editorial text
      ═══════════════════════════════════════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        <AnimatedSection direction="right" className="overflow-hidden">
          <div className="h-full min-h-[400px] lg:min-h-[600px] overflow-hidden relative">
            <img
              src={clubhouseImg}
              alt="Verde Clubhouse"
              className="w-full h-full object-cover"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.15} className="bg-[#1C3A2B] flex items-center">
          <div className="px-10 md:px-16 py-20">
            <p className="text-[#C9A96E] text-xs tracking-[0.35em] uppercase font-semibold mb-5">О клубе</p>
            <h2
              className="font-serif text-white uppercase leading-tight mb-7"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)", letterSpacing: "0.02em" }}
            >
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
          STATS BAR
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F5F0E8] border-y border-[#1C3A2B]/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1C3A2B]/15">
            <CounterStat value={18} label="Лунок" description="Чемпионский курс PGA" />
            <CounterStat value={365} label="Дней" description="Открыт круглый год" />
            <CounterStat value={120} suffix="+" label="Резидентов" description="Закрытое сообщество" />
            <CounterStat value={2500} suffix=" м²" label="Клубхаус" description="Роскошная инфраструктура" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COURSE PREVIEW — editorial full-bleed panels
      ═══════════════════════════════════════════ */}
      <section className="bg-[#1C3A2B]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-4">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
              <div>
                <p className="text-[#C9A96E] text-xs tracking-[0.35em] uppercase font-semibold mb-3">Гольф-поле</p>
                <h2
                  className="font-serif text-white uppercase leading-tight"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)", letterSpacing: "0.02em" }}
                >
                  ПОЛЕ<br />ЧЕМПИОНСКОГО<br />КЛАССА
                </h2>
              </div>
              <Link href="/about">
                <span className="group inline-flex items-center gap-2 text-white/50 hover:text-white text-sm tracking-wide cursor-pointer transition-colors border-b border-white/20 pb-1 hover:border-white/60">
                  Подробнее <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Three panels side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { img: waterHazardImg, title: "Водные препятствия", desc: "7 водных объектов, стратегическая глубина каждой лунки" },
            { img: equipmentImg, title: "Качество грина", desc: "Профессиональный уход по стандартам Augusta National" },
            { img: coachingImg, title: "Тренировочная зона", desc: "Driving range, паттинг грин, бункерный тренажёр" },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden cursor-pointer"
                style={{ aspectRatio: "3/4" }}
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3
                    className="font-serif text-white uppercase mb-2 leading-tight"
                    style={{ fontSize: "clamp(1.2rem, 2vw, 1.7rem)", letterSpacing: "0.03em" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/55 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LIFESTYLE — asymmetric editorial grid
      ═══════════════════════════════════════════ */}
      <section className="bg-[#F5F0E8] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection className="mb-16">
            <p className="text-[#4A8862] text-xs tracking-[0.35em] uppercase font-semibold mb-4">Клубная жизнь</p>
            <h2
              className="font-serif text-[#1C3A2B] uppercase leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "0.02em" }}
            >
              ГОЛЬФ — ЭТО<br />СОСТОЯНИЕ ДУШИ
            </h2>
          </AnimatedSection>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Large image left */}
            <AnimatedSection direction="right" className="col-span-12 md:col-span-7">
              <div className="overflow-hidden" style={{ aspectRatio: "16/11" }}>
                <img src={membersImg} alt="Members" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </AnimatedSection>

            {/* Right column — text + image */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-4 md:gap-6">
              <AnimatedSection direction="left" delay={0.1} className="bg-[#1C3A2B] p-10 flex flex-col justify-center flex-1">
                <div className="space-y-4">
                  {[
                    { label: "Приватность", desc: "Ограниченное число резидентов" },
                    { label: "Сервис 24/7", desc: "Персональный консьерж" },
                    { label: "Локация", desc: "40 мин от центра Москвы" },
                    { label: "Family", desc: "Академия для детей и семей" },
                  ].map((item, i) => (
                    <div key={item.label} className={`flex items-start gap-4 ${i < 3 ? "pb-4 border-b border-white/10" : ""}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] mt-2 flex-shrink-0" />
                      <div>
                        <div className="text-white font-semibold text-sm">{item.label}</div>
                        <div className="text-white/45 text-xs">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.2} className="overflow-hidden flex-1">
                <div className="h-full min-h-[200px] overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img src={restaurantImg} alt="Restaurant" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIALS — stripped back, editorial
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white border-y border-[#1C3A2B]/8">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <p className="text-[#4A8862] text-xs tracking-[0.35em] uppercase font-semibold mb-4">Отзывы резидентов</p>
            <h2
              className="font-serif text-[#1C3A2B] uppercase leading-tight mb-16"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "0.02em" }}
            >
              ЧТО ГОВОРЯТ<br />НАШИ ЧЛЕНЫ
            </h2>
          </AnimatedSection>

          <div className="relative min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-center px-4"
              >
                <div className="text-[#C9A96E] text-6xl font-bold leading-none mb-4" style={{ fontFamily: "Georgia, serif" }}>"</div>
                <blockquote
                  className="text-[#1C3A2B]/75 leading-relaxed mb-8"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                >
                  {testimonials[activeTestimonial].quote}
                </blockquote>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1C3A2B] flex items-center justify-center text-white text-xs font-bold">
                    {testimonials[activeTestimonial].initials}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-[#1C3A2B] text-sm">{testimonials[activeTestimonial].name}</div>
                    <div className="text-[#1C3A2B]/45 text-xs">{testimonials[activeTestimonial].title}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-1 rounded-full transition-all duration-400 ${i === activeTestimonial ? "w-10 bg-[#1C3A2B]" : "w-2 bg-[#1C3A2B]/20"}`}
                data-testid={`testimonial-dot-${i}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MEMBERSHIP CTA — full-bleed dark
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-32">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-[#1C3A2B]/85" />

        <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-semibold mb-5">Членство</p>
            <h2
              className="font-serif text-white uppercase leading-tight mb-7"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "0.02em" }}
            >
              СТАНЬТЕ ЧАСТЬЮ<br />НАШЕГО СООБЩЕСТВА
            </h2>
            <p className="text-white/55 mb-12 leading-relaxed max-w-xl mx-auto">
              Ограниченное число мест. Индивидуальное рассмотрение каждой заявки. Присоединяйтесь к кругу людей, для которых важны качество, баланс и рост.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership">
                <span
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C9A96E] text-[#1C3A2B] cursor-pointer hover:bg-[#E4C99A] transition-colors font-semibold text-sm tracking-wide"
                  style={{ borderRadius: "4px" }}
                  data-testid="home-membership-cta"
                >
                  Узнать об условиях <ArrowRight size={15} />
                </span>
              </Link>
              <Link href="/contact">
                <span
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white cursor-pointer hover:bg-white/10 transition-colors font-medium text-sm tracking-wide"
                  style={{ borderRadius: "4px" }}
                  data-testid="home-contact-cta"
                >
                  Связаться с нами
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
