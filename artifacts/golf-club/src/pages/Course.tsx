import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Wind, Droplets, Sun, Target, Map, Flag } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CounterStat from "@/components/ui/CounterStat";
import heroImg from "@/assets/hero-aerial.png";
import waterHazardImg from "@/assets/water-hazard.png";
import golfBallImg from "@/assets/golf-ball.png";
import coachingImg from "@/assets/coaching.png";
import equipmentImg from "@/assets/equipment.png";

const holes = [
  { num: 1, par: 4, yards: 412, handicap: 7, difficulty: "Средняя" },
  { num: 2, par: 5, yards: 538, handicap: 3, difficulty: "Сложная" },
  { num: 3, par: 3, yards: 182, handicap: 15, difficulty: "Лёгкая" },
  { num: 4, par: 4, yards: 445, handicap: 1, difficulty: "Сложная" },
  { num: 5, par: 5, yards: 561, handicap: 11, difficulty: "Средняя" },
  { num: 6, par: 3, yards: 209, handicap: 17, difficulty: "Средняя" },
  { num: 7, par: 4, yards: 388, handicap: 9, difficulty: "Средняя" },
  { num: 8, par: 4, yards: 420, handicap: 5, difficulty: "Сложная" },
  { num: 9, par: 4, yards: 398, handicap: 13, difficulty: "Лёгкая" },
];

const facilities = [
  { icon: Target, title: "Driving Range", desc: "50 мест для отработки ударов, в т.ч. крытые позиции" },
  { icon: Map, title: "Паттинг-грин", desc: "6 тренировочных гринов с различными уклонами" },
  { icon: Flag, title: "Чиппинг-зона", desc: "Площадка для отработки коротких ударов и бункеров" },
  { icon: Wind, title: "Про-шоп", desc: "Полный ассортимент снаряжения и аксессуаров" },
  { icon: Droplets, title: "Прокат", desc: "Клюшки, тележки и электрокары для гостей" },
  { icon: Sun, title: "Уход за полем", desc: "Профессиональная команда агрономов работает круглосуточно" },
];

export default function Course() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-28 min-h-[70vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Golf course aerial" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A2B] via-[#1C3A2B]/40 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatedSection>
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-semibold mb-4">Гольф-поле</p>
            <h1 className="font-serif font-bold text-white mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              18 лунок. Стратегическая среда.
            </h1>
            <p className="text-white/65 max-w-xl" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)" }}>
              Каждая дистанция требует точности и тактического мышления. Поле, где решения имеют значение.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-16 bg-[#1C3A2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <CounterStat value={18} label="Лунок" dark />
            <CounterStat value={6840} label="Ярдов" description="Общая длина курса" dark />
            <CounterStat value={72} label="Par" description="Стандарт курса" dark />
            <CounterStat value={7} label="Водных объектов" dark />
          </div>
        </div>
      </section>

      {/* COURSE DESCRIPTION */}
      <section className="py-24 bg-[#F5F0E8] noise-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div>
                <p className="text-[#4A8862] text-xs tracking-[0.3em] uppercase font-semibold mb-4">О поле</p>
                <h2 className="font-serif font-bold text-[#1C3A2B] mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
                  Дизайн, который испытывает вас
                </h2>
                <p className="text-[#1C3A2B]/65 leading-relaxed mb-5">
                  Курс разработан ведущими гольф-архитекторами Европы. 70 гектаров ландшафта, включающего естественные лесные массивы, водные препятствия и перепады рельефа.
                </p>
                <p className="text-[#1C3A2B]/65 leading-relaxed mb-8">
                  Каждая лунка — это отдельная стратегическая задача, требующая как технической точности, так и тактического мышления. Поле одинаково интересно для новичков и для опытных игроков.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Par 72", "Championship tees", "Bent grass greens", "GPS carts", "Irrigation system"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-white border border-[#1C3A2B]/15 rounded-full text-[#1C3A2B] text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-lg">
                  <img src={waterHazardImg} alt="Water hazard" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden aspect-square shadow-lg">
                    <img src={golfBallImg} alt="Golf ball" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                    <img src={equipmentImg} alt="Equipment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SCORECARD */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-[#4A8862] text-xs tracking-[0.3em] uppercase font-semibold mb-3">Скоркарт</p>
            <h2 className="font-serif font-bold text-[#1C3A2B]" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
              Первые 9 лунок
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="overflow-x-auto rounded-2xl border border-[#1C3A2B]/10 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1C3A2B] text-white">
                    <th className="py-4 px-5 text-left font-semibold text-xs tracking-[0.1em]">Лунка</th>
                    <th className="py-4 px-5 text-center font-semibold text-xs tracking-[0.1em]">Par</th>
                    <th className="py-4 px-5 text-center font-semibold text-xs tracking-[0.1em]">Ярды</th>
                    <th className="py-4 px-5 text-center font-semibold text-xs tracking-[0.1em]">HCP</th>
                    <th className="py-4 px-5 text-center font-semibold text-xs tracking-[0.1em]">Сложность</th>
                  </tr>
                </thead>
                <tbody>
                  {holes.map((hole, i) => (
                    <tr key={hole.num} className={`border-b border-[#1C3A2B]/6 ${i % 2 === 0 ? "bg-white" : "bg-[#F5F0E8]/50"} hover:bg-[#E8F5EE]/50 transition-colors`}>
                      <td className="py-3.5 px-5">
                        <span className="w-8 h-8 rounded-full bg-[#1C3A2B] text-white text-xs font-bold flex items-center justify-center">
                          {hole.num}
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-center font-semibold text-[#1C3A2B]">{hole.par}</td>
                      <td className="py-3.5 px-5 text-center text-[#1C3A2B]/70">{hole.yards}</td>
                      <td className="py-3.5 px-5 text-center text-[#1C3A2B]/70">{hole.handicap}</td>
                      <td className="py-3.5 px-5 text-center">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          hole.difficulty === "Сложная" ? "bg-red-50 text-red-700" :
                          hole.difficulty === "Средняя" ? "bg-amber-50 text-amber-700" :
                          "bg-green-50 text-green-700"
                        }`}>
                          {hole.difficulty}
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-[#1C3A2B]/5 font-semibold">
                    <td className="py-3.5 px-5 text-[#1C3A2B] font-bold">Итого (1-9)</td>
                    <td className="py-3.5 px-5 text-center text-[#1C3A2B]">36</td>
                    <td className="py-3.5 px-5 text-center text-[#1C3A2B]">3553</td>
                    <td className="py-3.5 px-5 text-center text-[#1C3A2B]">—</td>
                    <td className="py-3.5 px-5" />
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* COACHING */}
      <section className="py-24 bg-[#1C3A2B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${coachingImg})`, backgroundSize: "cover" }} />
        <div className="absolute inset-0 bg-[#1C3A2B]/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div>
                <p className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Обучение</p>
                <h2 className="font-serif font-bold text-white mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
                  Тренировочный центр мирового уровня
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  Наши тренеры работают с игроками всех уровней — от начинающих до опытных игроков с гандикапом. Индивидуальные и групповые занятия, видеоанализ удара, тренажёры.
                </p>
                <Link href="/contact">
                  <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A96E] text-[#1C3A2B] rounded-full text-sm font-semibold cursor-pointer hover:bg-[#E4C99A] transition-colors" data-testid="course-booking-link">
                    Записаться на урок <ArrowRight size={15} />
                  </span>
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img src={coachingImg} alt="Golf coaching" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-24 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-[#4A8862] text-xs tracking-[0.3em] uppercase font-semibold mb-3">Инфраструктура</p>
            <h2 className="font-serif font-bold text-[#1C3A2B]" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
              Всё необходимое для игры
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.09}>
                <div className="p-6 bg-white rounded-2xl border border-[#1C3A2B]/8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-11 h-11 rounded-xl bg-[#1C3A2B]/8 flex items-center justify-center mb-4 group-hover:bg-[#1C3A2B] transition-colors duration-300">
                    <f.icon size={18} className="text-[#1C3A2B] group-hover:text-[#C9A96E] transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-[#1C3A2B] mb-2">{f.title}</h3>
                  <p className="text-[#1C3A2B]/55 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1C3A2B]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-serif font-bold text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
              Готовы сыграть первый раунд?
            </h2>
            <p className="text-white/55 mb-8">Свяжитесь с нами для бронирования тайм-слота</p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A96E] text-[#1C3A2B] rounded-full font-semibold cursor-pointer hover:bg-[#E4C99A] transition-colors" data-testid="course-cta">
                Забронировать игру <ArrowRight size={16} />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
