import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CounterStat from "@/components/ui/CounterStat";
import clubhouseImg from "@/assets/clubhouse.png";
import membersImg from "@/assets/members.png";
import coachingImg from "@/assets/coaching.png";
import restaurantImg from "@/assets/restaurant.png";
import heroImg from "@/assets/hero-aerial.png";
import waterHazardImg from "@/assets/water-hazard.png";
import golfBallImg from "@/assets/golf-ball.png";
import equipmentImg from "@/assets/equipment.png";

const values = [
  { num: "01", title: "Приватность", desc: "Ограниченное членство. Каждый резидент чувствует себя в абсолютном уединении, даже в разгар сезона." },
  { num: "02", title: "Эстетика", desc: "Дизайн клуба вдохновлён британскими клубами, оснащён технологиями будущего для анализа вашей игры." },
  { num: "03", title: "Сообщество", desc: "Здесь заключаются сделки и заводятся знакомства в неформальной, доверительной атмосфере." },
  { num: "04", title: "Совершенство", desc: "Каждая деталь — от стрижки грина до меню ресторана — соответствует мировым стандартам." },
];

const team = [
  { name: "Сергей Николаев", role: "Директор клуба", desc: "25 лет в гольфе, бывший профессиональный игрок European Tour", initials: "СН" },
  { name: "Анна Петрова", role: "Главный тренер", desc: "Сертифицированный инструктор PGA, работала с игроками мирового уровня", initials: "АП" },
  { name: "Михаил Краснов", role: "Шеф-повар", desc: "Авторская кухня, ресторан удостоен двух звёзд Michelin", initials: "МК" },
  { name: "Елена Смирнова", role: "Клиентский опыт", desc: "Бывший управляющий сетью Aman Resorts", initials: "ЕС" },
];

const holes = [
  { hole: 1, par: 4, yards: 420, hdcp: 7 },
  { hole: 2, par: 5, yards: 545, hdcp: 1 },
  { hole: 3, par: 3, yards: 195, hdcp: 15 },
  { hole: 4, par: 4, yards: 385, hdcp: 11 },
  { hole: 5, par: 5, yards: 520, hdcp: 3 },
  { hole: 6, par: 4, yards: 410, hdcp: 5 },
  { hole: 7, par: 3, yards: 175, hdcp: 17 },
  { hole: 8, par: 4, yards: 440, hdcp: 9 },
  { hole: 9, par: 4, yards: 395, hdcp: 13 },
];

export default function About() {
  return (
    <div className="overflow-x-hidden">

      {/* ═══════════════════════════════════════════
          HERO — full-bleed with bottom-left text
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Golf course" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-[#1C3A2B]/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pb-20 pt-40 w-full">
          <AnimatedSection>
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-semibold mb-5">Verde Golf Club</p>
            <h1
              className="font-serif text-white uppercase leading-[0.93] mb-6"
              style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)", letterSpacing: "0.02em" }}
            >
              О КЛУБЕ<br />И ГОЛЬФ-ПОЛЕ
            </h1>
            <p className="text-white/60 max-w-xl leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)" }}>
              Verde — это не просто гольф-клуб. Это пространство для стратегического мышления,
              дисциплины и искусства безупречного отдыха в 40 минутах от Москвы.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PHILOSOPHY — full bleed split
      ═══════════════════════════════════════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <AnimatedSection direction="left" className="bg-[#F5F0E8] flex items-center order-2 lg:order-1">
          <div className="px-10 md:px-16 py-24">
            <p className="text-[#4A8862] text-xs tracking-[0.35em] uppercase font-semibold mb-6">Наша миссия</p>
            <h2
              className="font-serif text-[#1C3A2B] uppercase leading-tight mb-8"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", letterSpacing: "0.02em" }}
            >
              ОСНОВАНО<br />В 2019 ГОДУ
            </h2>
            <p className="text-[#1C3A2B]/60 leading-relaxed mb-5 text-sm md:text-base">
              Verde Golf Club создавался как ответ на потребность в по-настоящему закрытом и исключительном пространстве вблизи Москвы. Место, где профессиональный гольф встречается с роскошным отдыхом.
            </p>
            <p className="text-[#1C3A2B]/60 leading-relaxed text-sm md:text-base">
              За 5 лет мы стали домом для более чем 120 резидентов — предпринимателей, менеджеров и профессиональных игроков, объединённых страстью к игре.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" className="order-1 lg:order-2 overflow-hidden">
          <div className="h-full min-h-[400px] overflow-hidden">
            <img
              src={clubhouseImg}
              alt="Clubhouse"
              className="w-full h-full object-cover"
              style={{ minHeight: "500px" }}
            />
          </div>
        </AnimatedSection>
      </section>

      {/* ═══════════════════════════════════════════
          VALUES — numbered list
      ═══════════════════════════════════════════ */}
      <section className="bg-[#1C3A2B] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <AnimatedSection className="mb-16">
            <p className="text-[#C9A96E] text-xs tracking-[0.35em] uppercase font-semibold mb-4">Ценности</p>
            <h2
              className="font-serif text-white uppercase leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "0.02em" }}
            >
              ЧТО ЛЕЖИТ<br />В ОСНОВЕ КЛУБА
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {values.map((v, i) => (
              <AnimatedSection key={v.num} delay={i * 0.1}>
                <motion.div
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                  className="p-10 bg-[#1C3A2B] transition-colors duration-300"
                >
                  <div
                    className="font-serif text-white/20 mb-5 leading-none"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "0.02em" }}
                  >
                    {v.num}
                  </div>
                  <h3
                    className="font-serif text-white uppercase mb-3 leading-tight"
                    style={{ fontSize: "clamp(1.3rem, 2vw, 1.9rem)", letterSpacing: "0.03em" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS ROW
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white border-y border-[#1C3A2B]/8">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1C3A2B]/12">
            <CounterStat value={18} label="Лунок" description="Чемпионский курс PGA" />
            <CounterStat value={6800} suffix=" м" label="Длина поля" description="Par 72" />
            <CounterStat value={7} label="Водных объектов" description="Стратегические препятствия" />
            <CounterStat value={40} suffix=" мин" label="От Москвы" description="Удобная локация" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COURSE HERO — full bleed dark image
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: "60vh" }}>
        <img src={waterHazardImg} alt="Golf course water hazard" className="w-full h-full object-cover absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C3A2B]/90 via-[#1C3A2B]/60 to-transparent" />

        <div className="relative z-10 flex items-center min-h-[60vh] px-6 md:px-16 py-24">
          <AnimatedSection direction="right">
            <p className="text-[#C9A96E] text-xs tracking-[0.35em] uppercase font-semibold mb-5">Гольф-поле</p>
            <h2
              className="font-serif text-white uppercase leading-tight mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)", letterSpacing: "0.02em" }}
            >
              18-ЛУНОЧНЫЙ<br />ЧЕМПИОНСКИЙ<br />КУРС
            </h2>
            <p className="text-white/60 max-w-md leading-relaxed mb-8 text-sm md:text-base">
              Спроектированный мастерами своего дела, каждый метр поля Verde предлагает уникальный тактический вызов.
              Рейтинг курса — 73.2, Slope — 131.
            </p>
            <div className="flex gap-6 text-white/70 text-xs tracking-widest uppercase">
              <div><span className="block font-serif text-white" style={{ fontSize: "1.5rem" }}>Par 72</span>Стандарт</div>
              <div><span className="block font-serif text-white" style={{ fontSize: "1.5rem" }}>6800м</span>С чёрных ти</div>
              <div><span className="block font-serif text-white" style={{ fontSize: "1.5rem" }}>73.2</span>Рейтинг</div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SCORECARD — editorial table
      ═══════════════════════════════════════════ */}
      <section className="bg-[#F5F0E8] py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <AnimatedSection className="mb-12">
            <p className="text-[#4A8862] text-xs tracking-[0.35em] uppercase font-semibold mb-3">Scorecard</p>
            <h2
              className="font-serif text-[#1C3A2B] uppercase leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "0.02em" }}
            >
              КАРТОЧКА ПОЛЯ<br />(ПЕРЕДНЯЯ ДЕВЯТКА)
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C3A2B] text-white">
                    {["Лунка", "Пар", "Ярды", "ГКГП"].map((h) => (
                      <th key={h} className="px-6 py-4 text-left text-xs tracking-[0.2em] uppercase font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {holes.map((row, i) => (
                    <tr
                      key={row.hole}
                      className={`border-b border-[#1C3A2B]/8 transition-colors hover:bg-[#1C3A2B]/5 ${i % 2 === 0 ? "bg-white" : "bg-[#F5F0E8]"}`}
                    >
                      <td className="px-6 py-4 font-bold text-[#1C3A2B]">{row.hole}</td>
                      <td className="px-6 py-4 text-[#4A8862] font-semibold">{row.par}</td>
                      <td className="px-6 py-4 text-[#1C3A2B]/70">{row.yards}</td>
                      <td className="px-6 py-4 text-[#1C3A2B]/70">{row.hdcp}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#1C3A2B] text-white font-semibold">
                    <td className="px-6 py-4">Итого</td>
                    <td className="px-6 py-4">36</td>
                    <td className="px-6 py-4">3 485</td>
                    <td className="px-6 py-4">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COURSE FEATURES — three tall panels
      ═══════════════════════════════════════════ */}
      <section className="bg-[#1C3A2B]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { img: golfBallImg, title: "Гринс мирового класса", desc: "Выращены по технологии Augusta. Скорость 11-12 по стимпметру." },
            { img: coachingImg, title: "Тренировочный центр", desc: "300-метровый driving range, паттинг грин, бункерная зона." },
            { img: equipmentImg, title: "Прокат оборудования", desc: "Клюшки Callaway, Titleist и TaylorMade. Кэдди по запросу." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="relative overflow-hidden cursor-pointer group" style={{ aspectRatio: "3/4" }}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3
                    className="font-serif text-white uppercase mb-2 leading-tight"
                    style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)", letterSpacing: "0.03em" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/55 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COACHING — editorial horizontal layout
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <img
                  src={coachingImg}
                  alt="Golf coaching"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.15}>
              <p className="text-[#4A8862] text-xs tracking-[0.35em] uppercase font-semibold mb-5">Обучение</p>
              <h2
                className="font-serif text-[#1C3A2B] uppercase leading-tight mb-7"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", letterSpacing: "0.02em" }}
              >
                ТРЕНИРОВКИ<br />С МАСТЕРАМИ
              </h2>
              <p className="text-[#1C3A2B]/60 leading-relaxed mb-5 text-sm md:text-base">
                Программа обучения Verde разработана командой сертифицированных тренеров PGA. Подходит для начинающих и опытных игроков — от постановки удара до подготовки к турнирам.
              </p>
              <p className="text-[#1C3A2B]/60 leading-relaxed mb-10 text-sm md:text-base">
                Видеоанализ техники, индивидуальные программы тренировок, launch monitor — всё это входит в базовый пакет членства.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {["Индивидуальные уроки", "Групповые занятия", "Детская академия", "Онлайн-анализ техники"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#1C3A2B]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4A8862] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TEAM — stripped back list
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F5F0E8] border-t border-[#1C3A2B]/8">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <AnimatedSection className="mb-14">
            <p className="text-[#4A8862] text-xs tracking-[0.35em] uppercase font-semibold mb-4">Команда</p>
            <h2
              className="font-serif text-[#1C3A2B] uppercase leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "0.02em" }}
            >
              ЛЮДИ,<br />КОТОРЫЕ СОЗДАЮТ<br />КЛУБ
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1C3A2B]/10">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ backgroundColor: "#1C3A2B", color: "white" }}
                  className="group flex items-start gap-6 p-8 bg-[#F5F0E8] transition-colors duration-400 cursor-default"
                >
                  <div className="w-14 h-14 rounded-full bg-[#1C3A2B] group-hover:bg-white flex items-center justify-center text-white group-hover:text-[#1C3A2B] font-bold text-base flex-shrink-0 transition-colors duration-300">
                    {member.initials}
                  </div>
                  <div>
                    <div className="font-bold text-[#1C3A2B] group-hover:text-white text-base mb-0.5 transition-colors duration-300">{member.name}</div>
                    <div className="text-[#4A8862] group-hover:text-[#C9A96E] text-xs tracking-[0.15em] uppercase font-semibold mb-2 transition-colors duration-300">{member.role}</div>
                    <div className="text-[#1C3A2B]/55 group-hover:text-white/65 text-xs leading-relaxed transition-colors duration-300">{member.desc}</div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA — membership
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-32 bg-[#1C3A2B]">
        <div
          className="absolute inset-0 opacity-15"
          style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C3A2B]/90 to-[#0D1F17]/95" />

        <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-semibold mb-5">Присоединиться</p>
            <h2
              className="font-serif text-white uppercase leading-tight mb-7"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "0.02em" }}
            >
              НАЧНИТЕ ИГРУ<br />В VERDE
            </h2>
            <p className="text-white/55 mb-12 max-w-lg mx-auto leading-relaxed">
              Узнайте об условиях членства и запишитесь на ознакомительный визит.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership">
                <span
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1C3A2B] cursor-pointer hover:bg-[#C9A96E] transition-colors font-semibold text-sm tracking-wide"
                  style={{ borderRadius: "4px" }}
                >
                  Условия членства <ArrowRight size={15} />
                </span>
              </Link>
              <Link href="/contact">
                <span
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white cursor-pointer hover:bg-white/10 transition-colors font-medium text-sm tracking-wide"
                  style={{ borderRadius: "4px" }}
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
