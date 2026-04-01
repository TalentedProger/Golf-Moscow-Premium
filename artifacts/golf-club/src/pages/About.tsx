import { motion } from "framer-motion";
import { ArrowRight, Award, Eye, Heart, Star } from "lucide-react";
import { Link } from "wouter";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CounterStat from "@/components/ui/CounterStat";
import GlassCard from "@/components/ui/GlassCard";
import clubhouseImg from "@/assets/clubhouse.png";
import membersImg from "@/assets/members.png";
import coachingImg from "@/assets/coaching.png";
import restaurantImg from "@/assets/restaurant.png";
import heroImg from "@/assets/hero-aerial.png";

const values = [
  { icon: Eye, title: "Приватность", desc: "Мы ограничиваем число резидентов, чтобы каждый чувствовал себя в абсолютном уединении, даже в разгар сезона." },
  { icon: Star, title: "Эстетика вне времени", desc: "Дизайн клуба вдохновлён классическими британскими клубами, но оснащён технологиями будущего для анализа вашей игры." },
  { icon: Heart, title: "Сообщество равных", desc: "Здесь заключаются сделки и заводятся знакомства в неформальной, доверительной атмосфере." },
  { icon: Award, title: "Совершенство", desc: "Каждая деталь — от стрижки грина до меню ресторана — продумана до мелочей и соответствует мировым стандартам." },
];

const team = [
  { name: "Сергей Николаев", role: "Директор клуба", desc: "25 лет в гольфе, бывший профессиональный игрок European Tour", initials: "СН" },
  { name: "Анна Петрова", role: "Главный тренер", desc: "Сертифицированный инструктор PGA, работала с игроками мирового уровня", initials: "АП" },
  { name: "Михаил Краснов", role: "Шеф-повар", desc: "Авторская кухня, ресторан удостоен двух звёзд Michelin", initials: "МК" },
  { name: "Елена Смирнова", role: "Директор по клиентскому опыту", desc: "Бывший управляющий сетью Aman Resorts", initials: "ЕС" },
];

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-[#1C3A2B] overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Golf course" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C3A2B]/60 to-[#1C3A2B]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-semibold mb-5">О клубе</p>
            <h1 className="font-serif font-bold text-white mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              Наша философия
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}>
              Verde — это не просто гольф-клуб. Это пространство для тех, кто ценит стратегическое мышление, дисциплину и искусство безупречного отдыха.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 bg-[#F5F0E8] noise-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                  <img src={clubhouseImg} alt="Clubhouse" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-xl">
                  <div className="text-[#1C3A2B] text-3xl font-serif font-bold">№1</div>
                  <div className="text-[#4A8862] text-xs tracking-[0.1em] mt-1">в Подмосковье</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <p className="text-[#4A8862] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Наша миссия</p>
                <h2 className="font-serif font-bold text-[#1C3A2B] mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
                  Клуб для тех, кто думает на дистанцию
                </h2>
                <p className="text-[#1C3A2B]/65 leading-relaxed mb-5">
                  Мы объединяем людей, которые остаются на курсе, когда другие меняют направление. Пространство для фокуса, стратегических разговоров и долгосрочных решений.
                </p>
                <p className="text-[#1C3A2B]/65 leading-relaxed mb-8">
                  Закрытая территория, ограниченное число резидентов и отсутствие внешнего шума создают среду, в которой можно думать ясно и действовать осознанно.
                </p>
                <Link href="/membership">
                  <span className="group inline-flex items-center gap-2 px-6 py-3 bg-[#1C3A2B] text-white rounded-full text-sm font-medium cursor-pointer hover:bg-[#2D5A40] transition-colors" data-testid="about-membership-link">
                    Узнать о членстве <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#4A8862] text-xs tracking-[0.3em] uppercase font-semibold mb-3">Ценности</p>
            <h2 className="font-serif font-bold text-[#1C3A2B]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              На чём мы стоим
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="p-7 rounded-2xl bg-[#F5F0E8] border border-[#1C3A2B]/8 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[#1C3A2B] flex items-center justify-center mb-5">
                    <v.icon size={18} className="text-[#C9A96E]" />
                  </div>
                  <h3 className="font-serif font-semibold text-[#1C3A2B] text-lg mb-3">{v.title}</h3>
                  <p className="text-[#1C3A2B]/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY / TIMELINE */}
      <section className="py-24 bg-[#1C3A2B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-8">
          <div style={{ backgroundImage: "radial-gradient(ellipse at 10% 50%, #4A8862 0%, transparent 50%)" }} className="absolute inset-0" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase font-semibold mb-3">История</p>
            <h2 className="font-serif font-bold text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Наш путь
            </h2>
          </AnimatedSection>
          <div className="space-y-0">
            {[
              { year: "2017", event: "Начало строительства первых 9 лунок на территории 70 га Подмосковья" },
              { year: "2019", event: "Официальное открытие Verde Golf Club. Первые 80 резидентов" },
              { year: "2021", event: "Запуск 18-луночного чемпионского курса. Первый закрытый турнир" },
              { year: "2023", event: "Открытие премиум-ресторана и SPA-центра. 120 резидентов" },
              { year: "2025", event: "Расширение клубхауса. Запуск Академии гольфа для детей" },
            ].map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.08} direction={i % 2 === 0 ? "right" : "left"}>
                <div className="flex gap-8 pb-10 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#C9A96E] flex items-center justify-center text-[#1C3A2B] font-bold text-xs shrink-0 z-10">
                      {item.year.slice(2)}
                    </div>
                    {i < 4 && <div className="w-0.5 flex-1 bg-white/15 mt-2" />}
                  </div>
                  <div className="pt-3 pb-8">
                    <div className="text-[#C9A96E] text-sm font-semibold mb-1">{item.year}</div>
                    <p className="text-white/70 leading-relaxed">{item.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#4A8862] text-xs tracking-[0.3em] uppercase font-semibold mb-3">Команда</p>
            <h2 className="font-serif font-bold text-[#1C3A2B]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Люди, которые создают атмосферу
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="group text-center p-6 rounded-2xl bg-white border border-[#1C3A2B]/8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-20 h-20 rounded-full bg-[#1C3A2B] flex items-center justify-center text-white text-xl font-serif font-bold mx-auto mb-4 group-hover:bg-[#2D5A40] transition-colors">
                    {member.initials}
                  </div>
                  <h3 className="font-serif font-semibold text-[#1C3A2B] text-lg mb-1">{member.name}</h3>
                  <p className="text-[#4A8862] text-xs tracking-wide uppercase font-semibold mb-3">{member.role}</p>
                  <p className="text-[#1C3A2B]/55 text-xs leading-relaxed">{member.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-white overflow-hidden">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-serif font-bold text-[#1C3A2B]" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
            Жизнь клуба
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-7xl mx-auto px-4">
          {[membersImg, coachingImg, restaurantImg, clubhouseImg].map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.1} direction="up">
              <div className={`rounded-2xl overflow-hidden ${i % 2 === 0 ? "aspect-[4/5]" : "aspect-square"} group cursor-pointer`}>
                <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1C3A2B]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-serif font-bold text-white mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              Готовы стать частью Verde?
            </h2>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A96E] text-[#1C3A2B] rounded-full font-semibold cursor-pointer hover:bg-[#E4C99A] transition-colors" data-testid="about-cta">
                Оставить заявку <ArrowRight size={16} />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
