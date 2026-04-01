import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, Trophy, Users, Star, Clock, Leaf, Shield, Dumbbell, UtensilsCrossed, Briefcase, Calendar } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CounterStat from "@/components/ui/CounterStat";
import GlassCard from "@/components/ui/GlassCard";
import heroImg from "@/assets/hero-aerial.png";
import clubhouseImg from "@/assets/clubhouse.png";
import coachingImg from "@/assets/coaching.png";
import restaurantImg from "@/assets/restaurant.png";
import membersImg from "@/assets/members.png";
import waterHazardImg from "@/assets/water-hazard.png";
import golfBallImg from "@/assets/golf-ball.png";
import equipmentImg from "@/assets/equipment.png";

const features = [
  { icon: Trophy, title: "18-луночный чемпионский курс", desc: "Поле мирового класса по стандартам PGA" },
  { icon: Shield, title: "Закрытая атмосфера", desc: "Ограниченное членство, полная приватность" },
  { icon: Dumbbell, title: "Персональные тренеры", desc: "Инструкторы с международными сертификатами" },
  { icon: UtensilsCrossed, title: "Премиум-ресторан", desc: "Авторская кухня с видом на поле" },
  { icon: Briefcase, title: "Бизнес-зона", desc: "Переговорные комнаты и lounge" },
  { icon: Calendar, title: "Турниры и события", desc: "Насыщенный клубный календарь" },
  { icon: Users, title: "Партнёрская программа", desc: "Нетворкинг среди профессионалов" },
  { icon: Leaf, title: "Клубные резиденции", desc: "Отдых и проживание на территории" },
];

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

const marqueItems = ["18 лунок • ", "Московская область • ", "Мировой уровень • ", "Закрытое членство • ", "365 дней • ", "Премиум-сервис • "];

const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.08 + 0.3,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const titleLetters = "VERDE".split("");

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0 will-change-transform"
        >
          <img src={heroImg} alt="Aerial golf course view" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C3A2B]/50 via-[#1C3A2B]/30 to-[#1C3A2B]/70" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 text-center px-4"
        >
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-6 font-medium"
          >
            Est. 2019 · Московская область
          </motion.p>

          <div className="overflow-hidden mb-3">
            <div className="flex items-end justify-center" style={{ perspective: "600px" }}>
              {titleLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-serif font-bold text-white inline-block"
                  style={{ fontSize: "clamp(4rem, 14vw, 12rem)", lineHeight: 1, letterSpacing: "0.08em" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/70 tracking-[0.35em] uppercase text-sm md:text-base mb-10 font-light"
          >
            Premium Golf Club · Moscow
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Link href="/membership">
              <span className="group flex items-center gap-2 px-8 py-4 bg-[#C9A96E] text-[#1C3A2B] rounded-full font-semibold text-sm tracking-wide cursor-pointer hover:bg-[#E4C99A] transition-all duration-300 shadow-lg hover:shadow-xl" data-testid="hero-cta-primary">
                Вступить в клуб
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/course">
              <span className="flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-medium text-sm tracking-wide cursor-pointer border border-white/25 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm" data-testid="hero-cta-secondary">
                Узнать о поле
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} className="text-white/50" />
          </motion.div>
        </motion.div>

        {/* Marquee */}
        <div className="absolute bottom-0 left-0 right-0 z-10 py-3 bg-[#1C3A2B]/60 backdrop-blur-sm border-t border-white/10 overflow-hidden">
          <div className="marquee-container">
            <div className="marquee-track text-white/50 text-xs tracking-[0.3em] uppercase">
              {[...marqueItems, ...marqueItems].join("")}&nbsp;&nbsp;&nbsp;&nbsp;{[...marqueItems, ...marqueItems].join("")}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 md:py-32 bg-[#F5F0E8] noise-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                  <img src={clubhouseImg} alt="Verde Golf Clubhouse" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A2B]/40 to-transparent" />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute -bottom-6 -right-6 bg-[#1C3A2B] text-white rounded-2xl p-5 shadow-xl"
                >
                  <div className="text-3xl font-serif font-bold text-[#C9A96E]">2019</div>
                  <div className="text-xs text-white/60 tracking-[0.15em] mt-1">ОСНОВАН</div>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div>
                <p className="text-[#4A8862] text-xs tracking-[0.3em] uppercase font-semibold mb-4">О клубе</p>
                <h2 className="font-serif font-bold mb-6 text-[#1C3A2B] leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  Место, где время
                  <span className="block text-gradient-green">замедляется</span>
                </h2>
                <p className="text-[#1C3A2B]/65 leading-relaxed mb-4" style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}>
                  Verde Golf Club — это закрытое пространство для тех, кто ценит не только гольф, но и искусство безупречного отдыха в окружении единомышленников.
                </p>
                <p className="text-[#1C3A2B]/65 leading-relaxed mb-8" style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}>
                  Расположенный в 40 минутах от Москвы, клуб объединяет 18-луночный курс чемпионского уровня, мировую кухню и возможности для нетворкинга среди лидеров бизнеса.
                </p>
                <Link href="/about">
                  <span className="group inline-flex items-center gap-2 text-[#1C3A2B] font-semibold text-sm tracking-wide cursor-pointer hover:gap-3 transition-all" data-testid="home-about-link">
                    Узнать больше
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-[#4A8862]" />
                  </span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-[#1C3A2B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div style={{ backgroundImage: "radial-gradient(ellipse at 30% 50%, #4A8862 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, #C9A96E 0%, transparent 60%)" }} className="absolute inset-0" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            <CounterStat value={18} label="Лунок" description="Чемпионский курс мирового уровня" dark />
            <CounterStat value={365} label="Дней в году" description="Клуб работает без перерывов" dark />
            <CounterStat value={120} suffix="+" label="Резидентов" description="Закрытое сообщество профессионалов" dark />
            <CounterStat value={2500} suffix=" м²" label="Клубхаус" description="Роскошное пространство для отдыха" dark />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 md:py-32 bg-[#1C3A2B] relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${waterHazardImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Наши преимущества</p>
            <h2 className="font-serif font-bold text-white" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              В чём наша особенность?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.08} direction="up">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#C9A96E]/40 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#4A8862]/20 border border-[#4A8862]/30 flex items-center justify-center mb-4 group-hover:bg-[#C9A96E]/20 group-hover:border-[#C9A96E]/40 transition-all duration-300">
                    <feature.icon size={20} className="text-[#4A8862] group-hover:text-[#C9A96E] transition-colors duration-300" />
                  </div>
                  <h3 className="text-white font-medium text-sm mb-2 leading-snug">{feature.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed">{feature.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE PREVIEW */}
      <section className="py-24 md:py-32 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
            <AnimatedSection direction="right">
              <div>
                <p className="text-[#4A8862] text-xs tracking-[0.3em] uppercase font-semibold mb-3">Гольф-поле</p>
                <h2 className="font-serif font-bold text-[#1C3A2B]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  Поле чемпионского класса
                </h2>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <Link href="/course">
                <span className="inline-flex items-center gap-2 text-[#1C3A2B] font-medium text-sm cursor-pointer group hover:gap-3 transition-all" data-testid="home-course-link">
                  Подробнее о поле <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-[#4A8862]" />
                </span>
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { img: waterHazardImg, title: "Водные препятствия", desc: "7 водных объектов добавляют стратегическую глубину" },
              { img: golfBallImg, title: "Качество грина", desc: "Профессиональный уход по стандартам Augusta" },
              { img: coachingImg, title: "Тренировочная зона", desc: "Driving range, паттинг грин, бункерный тренажёр" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                >
                  <div className="aspect-[4/3]">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A2B]/80 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-serif font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/65 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE / SPLIT SECTION */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="up" delay={0}>
              <div className="space-y-5">
                <p className="text-[#4A8862] text-xs tracking-[0.3em] uppercase font-semibold">Клубная жизнь</p>
                <h2 className="font-serif font-bold text-[#1C3A2B] leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                  Гольф — это не просто игра, это состояние души
                </h2>
                <p className="text-[#1C3A2B]/60 leading-relaxed">
                  Здесь деловые встречи переходят в дружеские ужины, а каждый раунд игры становится личной победой. Мы создали место, где время замедляется.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { label: "Приватность", desc: "Ограниченное число резидентов" },
                    { label: "Сервис", desc: "24/7 персональный консьерж" },
                    { label: "Локация", desc: "40 мин от центра Москвы" },
                    { label: "Family", desc: "Академия для детей и семей" },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-xl bg-[#F5F0E8] border border-[#1C3A2B]/8">
                      <div className="text-[#1C3A2B] font-semibold text-sm mb-1">{item.label}</div>
                      <div className="text-[#1C3A2B]/50 text-xs">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md mt-8">
                    <img src={membersImg} alt="Club members" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-square shadow-md">
                    <img src={equipmentImg} alt="Golf equipment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <div className="space-y-4 mt-0">
                  <div className="rounded-2xl overflow-hidden aspect-square shadow-md">
                    <img src={restaurantImg} alt="Restaurant" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md">
                    <img src={coachingImg} alt="Coaching" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#F5F0E8] noise-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-[#4A8862] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Отзывы резидентов</p>
            <h2 className="font-serif font-bold text-[#1C3A2B] mb-16" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
              Что говорят наши члены
            </h2>
          </AnimatedSection>

          <div className="relative min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-center px-4"
              >
                <div className="text-[#C9A96E] text-5xl font-serif leading-none mb-4">"</div>
                <blockquote className="text-[#1C3A2B] font-serif leading-relaxed mb-8" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}>
                  {testimonials[activeTestimonial].quote}
                </blockquote>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1C3A2B] flex items-center justify-center text-white text-sm font-semibold">
                    {testimonials[activeTestimonial].initials}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-[#1C3A2B] text-sm">{testimonials[activeTestimonial].name}</div>
                    <div className="text-[#1C3A2B]/50 text-xs">{testimonials[activeTestimonial].title}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeTestimonial ? "w-8 bg-[#1C3A2B]" : "bg-[#1C3A2B]/25"}`}
                data-testid={`testimonial-dot-${i}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP CTA */}
      <section className="py-24 bg-[#1C3A2B] relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C3A2B]/80 to-[#0D1F17]/90" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-semibold mb-4">Членство</p>
            <h2 className="font-serif font-bold text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Станьте частью нашего сообщества
            </h2>
            <p className="text-white/60 mb-10 leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
              Ограниченное число мест. Индивидуальное рассмотрение каждой заявки. Присоединяйтесь к кругу людей, для которых важны качество, баланс и рост.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership">
                <span className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A96E] text-[#1C3A2B] rounded-full font-semibold text-sm cursor-pointer hover:bg-[#E4C99A] transition-colors shadow-lg" data-testid="home-membership-cta">
                  Узнать об условиях <ArrowRight size={16} />
                </span>
              </Link>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 px-8 py-4 border border-white/25 text-white rounded-full font-medium text-sm cursor-pointer hover:bg-white/10 transition-colors backdrop-blur-sm" data-testid="home-contact-cta">
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
