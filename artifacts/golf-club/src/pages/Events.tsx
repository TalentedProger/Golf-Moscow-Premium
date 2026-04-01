import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, ArrowRight, Clock, MapPin, Users } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import heroImg from "@/assets/hero-aerial.png";
import membersImg from "@/assets/members.png";
import coachingImg from "@/assets/coaching.png";
import restaurantImg from "@/assets/restaurant.png";
import waterHazardImg from "@/assets/water-hazard.png";
import clubhouseImg from "@/assets/clubhouse.png";

const events = [
  {
    id: 1,
    date: "15 мая",
    month: "Май 2025",
    title: "Открытие сезона Verde Open",
    category: "Турнир",
    time: "09:00 — 18:00",
    location: "Поле Verde, лунки 1-18",
    participants: "48 участников",
    desc: "Ежегодный открытый турнир для резидентов клуба. Формат: стэблфорд. Призовой фонд: трофеи и подарочные сертификаты.",
    img: waterHazardImg,
    cat: "tournament",
  },
  {
    id: 2,
    date: "28 мая",
    month: "Май 2025",
    title: "Гастрономический вечер с сомелье",
    category: "Событие",
    time: "19:00 — 23:00",
    location: "Ресторан Verde, терраса",
    participants: "До 40 гостей",
    desc: "Авторское меню от шеф-повара, дегустация коллекционных вин с ведущим сомелье. Дресс-код: smart casual.",
    img: restaurantImg,
    cat: "event",
  },
  {
    id: 3,
    date: "10 июня",
    month: "Июнь 2025",
    title: "Корпоративный турнир Leaders Cup",
    category: "Бизнес",
    time: "10:00 — 19:00",
    location: "Поле Verde, полный курс",
    participants: "72 участника",
    desc: "Закрытый турнир для партнёров клуба. Формат: команды по 4 игрока, scramble. Деловой нетворкинг.",
    img: membersImg,
    cat: "business",
  },
  {
    id: 4,
    date: "22 июня",
    month: "Июнь 2025",
    title: "Детская академия: Летний старт",
    category: "Обучение",
    time: "10:00 — 14:00",
    location: "Тренировочная зона",
    participants: "Дети 8-16 лет",
    desc: "Старт летней программы академии гольфа для детей. Обучение основам игры, развитие координации и спортивного духа.",
    img: coachingImg,
    cat: "academy",
  },
  {
    id: 5,
    date: "5 июля",
    month: "Июль 2025",
    title: "Закрытый мастер-класс: Mental Game",
    category: "Мастер-класс",
    time: "15:00 — 18:00",
    location: "Конференц-зал",
    participants: "До 20 человек",
    desc: "Спортивный психолог о ментальной подготовке к соревнованиям. Техники концентрации и управления стрессом на поле.",
    img: clubhouseImg,
    cat: "masterclass",
  },
  {
    id: 6,
    date: "20 июля",
    month: "Июль 2025",
    title: "Verde Invitational Championship",
    category: "Чемпионат",
    time: "08:00 — 20:00",
    location: "Поле Verde, лунки 1-18",
    participants: "64 участника",
    desc: "Главный турнир сезона. Двухдневное соревнование. Stroke play, нетто и брутто категории. Трансляция на экранах клуба.",
    img: heroImg,
    cat: "championship",
  },
];

const categoryColors: Record<string, string> = {
  tournament: "bg-green-50 text-green-800",
  event: "bg-amber-50 text-amber-800",
  business: "bg-blue-50 text-blue-800",
  academy: "bg-purple-50 text-purple-800",
  masterclass: "bg-orange-50 text-orange-800",
  championship: "bg-red-50 text-red-800",
};

export default function Events() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-28 min-h-[55vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={membersImg} alt="Club events" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A2B] via-[#1C3A2B]/50 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatedSection>
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-semibold mb-4">Мероприятия</p>
            <h1 className="font-serif font-bold text-white mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              Клубный календарь
            </h1>
            <p className="text-white/65 max-w-xl" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)" }}>
              Турниры, деловые встречи, гастрономические вечера и образовательные программы.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="py-24 bg-[#F5F0E8] noise-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <p className="text-[#4A8862] text-xs tracking-[0.3em] uppercase font-semibold mb-3">Расписание</p>
            <h2 className="font-serif font-bold text-[#1C3A2B]" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
              Ближайшие события
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {events.map((event, i) => (
              <AnimatedSection key={event.id} delay={i * 0.08} direction="up">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-2xl overflow-hidden border border-[#1C3A2B]/8 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative sm:w-48 sm:shrink-0 aspect-[16/10] sm:aspect-auto overflow-hidden">
                      <img
                        src={event.img}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1C3A2B]/10" />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 text-center min-w-[52px]">
                        <div className="text-[#1C3A2B] font-bold text-lg leading-none">{event.date.split(" ")[0]}</div>
                        <div className="text-[#4A8862] text-xs mt-0.5 font-medium">{event.date.split(" ")[1]}</div>
                      </div>
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[event.cat] || "bg-gray-50 text-gray-700"}`}>
                          {event.category}
                        </span>
                      </div>
                      <h3 className="font-serif font-semibold text-[#1C3A2B] text-lg leading-snug mb-2">{event.title}</h3>
                      <p className="text-[#1C3A2B]/55 text-xs leading-relaxed mb-4">{event.desc}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-[#1C3A2B]/55">
                        <span className="flex items-center gap-1"><Clock size={11} /> {event.time}</span>
                        <span className="flex items-center gap-1"><MapPin size={11} /> {event.location}</span>
                        <span className="flex items-center gap-1"><Users size={11} /> {event.participants}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ANNUAL TOURNAMENTS */}
      <section className="py-24 bg-[#1C3A2B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover" }} />
        <div className="absolute inset-0 bg-[#1C3A2B]/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase font-semibold mb-3">Турниры</p>
            <h2 className="font-serif font-bold text-white" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
              Ежегодные соревнования
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "Verde Open", date: "Май", desc: "Открытый турнир для резидентов. Формат: стэблфорд, нетто/брутто категории." },
              { name: "Leaders Cup", date: "Июнь", desc: "Корпоративный командный турнир. Форматы: scramble и foursome." },
              { name: "Verde Invitational", date: "Июль", desc: "Главный чемпионат сезона. Stroke play, двухдневный турнир." },
            ].map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="p-7 rounded-2xl bg-white/8 border border-white/12 hover:bg-white/12 transition-all duration-300 hover:border-[#C9A96E]/40 group">
                  <div className="text-[#C9A96E] text-xs tracking-[0.2em] uppercase font-semibold mb-2">{t.date}</div>
                  <h3 className="font-serif font-bold text-white text-xl mb-3">{t.name}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVATE EVENTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <img src={restaurantImg} alt="Private events" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <div>
                <p className="text-[#4A8862] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Частные события</p>
                <h2 className="font-serif font-bold text-[#1C3A2B] mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
                  Организуйте событие в Verde
                </h2>
                <p className="text-[#1C3A2B]/60 leading-relaxed mb-6">
                  Корпоративные турниры, деловые встречи, частные ужины и юбилейные торжества. Наш event-менеджер создаст безупречное мероприятие под ваш запрос.
                </p>
                <div className="space-y-3 mb-8">
                  {["Корпоративные турниры", "Деловые встречи и переговоры", "Гастрономические вечера", "Частные торжества"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-[#1C3A2B]/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4A8862]" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C3A2B] text-white rounded-full text-sm font-medium cursor-pointer hover:bg-[#2D5A40] transition-colors" data-testid="events-private-cta">
                    Обсудить событие <ArrowRight size={15} />
                  </span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ACADEMY */}
      <section className="py-24 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div>
                <p className="text-[#4A8862] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Академия</p>
                <h2 className="font-serif font-bold text-[#1C3A2B] mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
                  Академия гольфа Verde
                </h2>
                <p className="text-[#1C3A2B]/60 leading-relaxed mb-6">
                  Программы для детей и взрослых: от первого удара до участия в соревнованиях. Профессиональные тренеры, видеоанализ, индивидуальный подход.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "Дети 8-16 лет", desc: "Летние программы" },
                    { label: "Начинающие", desc: "Курс с нуля" },
                    { label: "Продвинутые", desc: "Турнирная подготовка" },
                    { label: "Частные уроки", desc: "Персональный тренер" },
                  ].map((item) => (
                    <div key={item.label} className="p-3.5 bg-white rounded-xl border border-[#1C3A2B]/8">
                      <div className="text-[#1C3A2B] font-semibold text-xs mb-0.5">{item.label}</div>
                      <div className="text-[#1C3A2B]/50 text-xs">{item.desc}</div>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <span className="inline-flex items-center gap-2 text-[#1C3A2B] font-semibold text-sm cursor-pointer group hover:gap-3 transition-all" data-testid="events-academy-link">
                    Записаться в академию <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform text-[#4A8862]" />
                  </span>
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <img src={coachingImg} alt="Golf academy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1C3A2B]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-serif font-bold text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
              Не пропустите следующее событие
            </h2>
            <p className="text-white/50 mb-8 text-sm">Подпишитесь на обновления клубного календаря</p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A96E] text-[#1C3A2B] rounded-full font-semibold cursor-pointer hover:bg-[#E4C99A] transition-colors" data-testid="events-subscribe-cta">
                Получать уведомления <ArrowRight size={16} />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
