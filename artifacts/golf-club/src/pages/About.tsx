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
import championshipCourseImg from "@assets/championship_course.jpg";

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
              className="font-serif font-black text-white uppercase leading-[0.93] mb-6"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", letterSpacing: "0.02em" }}
            >
              О КЛУБЕ<br />И ГОЛЬФ-ПОЛЕ
            </h1>
            <p className="text-white/80 max-w-xl leading-relaxed font-light" style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.2rem)" }}>
              Verde — это не просто гольф-клуб. Это пространство для стратегического мышления,
              дисциплины и искусства безупречного отдыха в 40 минутах от Москвы.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PHILOSOPHY — full bleed split
      ═══════════════════════════════════════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-white">
        <AnimatedSection direction="left" className="flex items-center order-2 lg:order-1">
          <div className="px-10 md:px-14 lg:px-20 py-24 md:py-32">
            <p className="text-[#4A8862] text-xs tracking-[0.35em] uppercase font-bold mb-6">Наша миссия</p>
            <h2
              className="font-serif font-black text-[#1C3A2B] uppercase leading-[1.05] mb-8"
              style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)", letterSpacing: "0.01em" }}
            >
              ОСНОВАНО<br />В <span className="text-[#4A8862]">2019</span> ГОДУ
            </h2>
            <div className="w-12 h-0.5 bg-[#C9A96E] mb-8" />
            <p className="text-[#1C3A2B]/75 leading-relaxed mb-6 text-base md:text-lg font-medium">
              Verde Golf Club создавался как ответ на потребность в по-настоящему закрытом и исключительном пространстве вблизи Москвы. Место, где профессиональный гольф встречается с роскошным отдыхом.
            </p>
            <p className="text-[#1C3A2B]/60 leading-relaxed text-sm md:text-base">
              За 5 лет мы стали домом для более чем 120 резидентов — предпринимателей, менеджеров и профессиональных игроков, объединённых страстью к игре.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" className="order-1 lg:order-2 overflow-hidden h-full">
          <div className="h-full min-h-[400px] lg:min-h-full overflow-hidden relative">
            <div className="absolute inset-0 bg-black/10 z-10" />
            <img
              src={clubhouseImg}
              alt="Clubhouse"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </AnimatedSection>
      </section>

      {/* ═══════════════════════════════════════════
          VALUES — numbered list
      ═══════════════════════════════════════════ */}
      <section className="bg-[#1C3A2B] py-24 md:py-32 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#4A8862] rounded-full blur-[120px] opacity-10 pointer-events-none" />
        
        <div className="w-full px-10 md:px-14 lg:px-20 relative z-10">
          <AnimatedSection className="mb-16 md:mb-20 text-center md:text-right">
            <p className="text-[#C9A96E] text-xs tracking-[0.35em] uppercase font-semibold mb-4">Ценности</p>
            <h2
              className="font-serif font-black text-white uppercase leading-[1.05]"
              style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)", letterSpacing: "0.01em" }}
            >
              ЧТО ЛЕЖИТ<br />В ОСНОВЕ КЛУБА
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#4A8862]/20 border border-[#4A8862]/20">
            {values.map((v, i) => (
              <AnimatedSection key={v.num} delay={i * 0.1}>
                <motion.div
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.06)", scale: 1.01 }}
                  className="p-10 md:p-14 bg-[#1C3A2B] transition-all duration-400 h-full flex flex-col justify-center relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-1 h-0 bg-[#C9A96E] transition-all duration-500 group-hover:h-full" />
                  <div
                    className="font-serif font-black text-[#4A8862]/30 mb-6 leading-none transition-colors duration-500 group-hover:text-[#C9A96E]/40"
                    style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", letterSpacing: "0.02em" }}
                  >
                    {v.num}
                  </div>
                  <h3
                    className="font-serif font-black text-white uppercase mb-4 leading-tight group-hover:text-[#C9A96E] transition-colors duration-400"
                    style={{ fontSize: "clamp(1.4rem, 2.2vw, 2rem)", letterSpacing: "0.02em" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed font-light">{v.desc}</p>
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
          COURSE HERO & SCORECARD — MERGED SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24 md:py-32 flex flex-col justify-center" style={{ minHeight: "80vh" }}>
        <img src={championshipCourseImg} alt="Championship Course" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />

        <div className="relative z-10 w-full px-10 md:px-14 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AnimatedSection direction="left" className="w-full">
            <p className="text-[#C9A96E] text-xs tracking-[0.35em] uppercase font-semibold mb-5">Гольф-поле</p>
            <h2
              className="font-serif font-black text-white uppercase leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "0.02em" }}
            >
              18-ЛУНОЧНЫЙ<br />ЧЕМПИОНСКИЙ<br />КУРС
            </h2>
            <p className="text-white/75 leading-relaxed mb-10 text-base md:text-lg font-light">
              Спроектированный мастерами своего дела, каждый метр поля Verde предлагает уникальный тактический вызов.
              Рейтинг курса — 73.2, Slope — 131.
            </p>
            <div className="flex flex-wrap gap-8 text-white/50 text-xs tracking-[0.2em] uppercase font-semibold">
              <div><span className="block font-serif font-bold text-white mb-2" style={{ fontSize: "1.8rem", letterSpacing: "0.05em" }}>Par 72</span>Стандарт</div>
              <div><span className="block font-serif font-bold text-white mb-2" style={{ fontSize: "1.8rem", letterSpacing: "0.05em" }}>6800м</span>С чёрных ти</div>
              <div><span className="block font-serif font-bold text-white mb-2" style={{ fontSize: "1.8rem", letterSpacing: "0.05em" }}>73.2</span>Рейтинг</div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="w-full flex justify-end">
            <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-6 sm:p-10 border border-white/20 shadow-2xl w-full">
              <div className="mb-8">
                <p className="text-white/50 text-[10px] tracking-[0.3em] uppercase font-bold mb-2">Scorecard</p>
                <h3 className="font-serif font-black text-white uppercase text-2xl tracking-wide">КАРТОЧКА ПОЛЯ<br/><span className="text-[#C9A96E] text-lg">(ПЕРЕДНЯЯ ДЕВЯТКА)</span></h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-[0.15em]">
                      <th className="pb-4 font-semibold">Лунка</th>
                      <th className="pb-4 font-semibold">Пар</th>
                      <th className="pb-4 font-semibold">Ярды</th>
                      <th className="pb-4 font-semibold">ГКГП</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {holes.map((row) => (
                      <tr key={row.hole} className="text-white hover:bg-white/5 transition-colors">
                        <td className="py-3.5 font-bold">{row.hole}</td>
                        <td className="py-3.5 text-[#C9A96E] font-semibold">{row.par}</td>
                        <td className="py-3.5 text-white/70">{row.yards}</td>
                        <td className="py-3.5 text-white/70">{row.hdcp}</td>
                      </tr>
                    ))}
                    <tr className="text-white bg-white/5">
                      <td className="py-4 font-bold uppercase tracking-widest text-xs">Итого</td>
                      <td className="py-4 font-bold text-[#C9A96E]">36</td>
                      <td className="py-4 font-bold text-white/90">3 485</td>
                      <td className="py-4 text-white/50">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                    className="font-serif font-black text-white uppercase mb-2 leading-tight"
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
          ACADEMY & TEAM — MERGED SECTION
      ═══════════════════════════════════════════ */}
      <section className="bg-white border-b border-[#1C3A2B]/8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Coaching Side */}
          <div className="px-10 md:px-14 lg:px-20 py-24 md:py-32 flex flex-col justify-center">
            <AnimatedSection direction="left">
              <p className="text-[#4A8862] text-xs tracking-[0.35em] uppercase font-semibold mb-5">Обучение и Штаб</p>
              <h2
                className="font-serif font-black text-[#1C3A2B] uppercase leading-tight mb-7"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", letterSpacing: "0.02em" }}
              >
                АКАДЕМИЯ<br />И МАСТЕРА
              </h2>
              <p className="text-[#1C3A2B]/60 leading-relaxed mb-5 text-sm md:text-base max-w-lg">
                Программа обучения Verde разработана командой сертифицированных тренеров PGA. Подходит для начинающих и опытных игроков — от постановки удара до подготовки к турнирам.
              </p>
              <p className="text-[#1C3A2B]/60 leading-relaxed mb-10 text-sm md:text-base max-w-lg">
                Видеоанализ техники, индивидуальные программы тренировок, launch monitor — всё это входит в базовый пакет членства.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-16">
                {["Индивидуальные уроки", "Групповые занятия", "Детская академия", "Онлайн-анализ техники"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-[#1C3A2B]/80 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4A8862] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <img
                  src={coachingImg}
                  alt="Golf coaching"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Team Side */}
          <div className="bg-[#F5F0E8] px-10 md:px-14 lg:px-20 py-24 md:py-32 flex flex-col justify-center border-l border-[#1C3A2B]/8">
            <AnimatedSection direction="right">
              <h3 className="font-serif font-black text-[#1C3A2B] uppercase leading-tight mb-12" style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", letterSpacing: "0.02em" }}>
                Люди, которые<br />создают клуб
              </h3>
              <div className="flex flex-col gap-6">
                {team.map((member, i) => (
                  <motion.div
                    key={member.name}
                    whileHover={{ backgroundColor: "#1C3A2B", color: "white" }}
                    className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-white transition-all duration-400 border border-[#1C3A2B]/5 shadow-sm"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#1C3A2B] group-hover:bg-white flex items-center justify-center text-white group-hover:text-[#1C3A2B] font-bold text-xl flex-shrink-0 transition-colors duration-300">
                      {member.initials}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-[#1C3A2B] group-hover:text-white text-lg mb-1 transition-colors duration-300">{member.name}</div>
                      <div className="text-[#4A8862] group-hover:text-[#C9A96E] text-xs tracking-[0.15em] uppercase font-semibold mb-2 transition-colors duration-300">{member.role}</div>
                      <div className="text-[#1C3A2B]/55 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-300">{member.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA — membership (Modernized)
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <AnimatedSection direction="left" className="relative z-10 lg:pr-10">
              <p className="text-[#4A8862] text-xs tracking-[0.4em] uppercase font-bold mb-6">Присоединиться</p>
              <h2
                className="font-serif font-black text-[#1C3A2B] uppercase leading-[1.05] mb-8"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "0.01em" }}
              >
                НАЧНИТЕ ИГРУ<br />В VERDE
              </h2>
              <p className="text-[#1C3A2B]/75 leading-relaxed mb-10 text-base md:text-lg font-medium max-w-lg">
                Откройте для себя привилегии закрытого гольф-клуба. Узнайте об условиях членства и запишитесь на персональный ознакомительный визит поля и клубного дома.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/membership">
                  <span
                    className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#1C3A2B] text-white cursor-pointer hover:bg-[#C9A96E] transition-colors font-semibold text-sm tracking-wide"
                  >
                    Условия членства <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link href="/contact">
                  <span
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-[#1C3A2B]/20 text-[#1C3A2B] cursor-pointer hover:bg-[#1C3A2B]/5 transition-colors font-semibold text-sm tracking-wide"
                  >
                    Связаться с нами
                  </span>
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="relative h-full min-h-[500px]">
              <div className="absolute top-0 right-0 w-4/5 h-[85%] z-10 overflow-hidden shadow-2xl">
                <img src={heroImg} alt="Verde Experience" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="absolute bottom-0 left-0 w-3/5 h-[60%] z-20 overflow-hidden shadow-2xl border-4 border-white">
                <img src={clubhouseImg} alt="Verde Clubhouse" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              {/* Decorative accent */}
              <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#C9A96E] rounded-full mix-blend-multiply opacity-40 blur-2xl z-0" />
            </AnimatedSection>
            
          </div>
        </div>
      </section>

    </div>
  );
}
