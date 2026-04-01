import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, ArrowRight, Star, Shield, Trophy, Crown } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import heroImg from "@/assets/hero-aerial.png";
import membersImg from "@/assets/members.png";
import clubhouseImg from "@/assets/clubhouse.png";
import restaurantImg from "@/assets/restaurant.png";

const plans = [
  {
    id: "social",
    name: "Социальное",
    price: "от 200 000",
    period: "/ год",
    icon: Star,
    desc: "Доступ к клубной инфраструктуре без права игры на поле",
    features: [
      "Клубхаус и ресторан",
      "Участие в клубных событиях",
      "Спа и фитнес-центр",
      "До 5 гостевых приглашений/год",
      "Деловые переговорные",
      "Парковка на территории",
    ],
    highlight: false,
    color: "#4A8862",
  },
  {
    id: "full",
    name: "Полное",
    price: "от 500 000",
    period: "/ год",
    icon: Shield,
    desc: "Полный доступ к полю и всем услугам клуба",
    features: [
      "Неограниченная игра на поле",
      "Весь функционал «Социального»",
      "Персональный локер",
      "10 гостевых зелёных сборов",
      "Приоритетное бронирование",
      "Скидка 20% на обучение",
      "Участие в рейтинге клуба",
    ],
    highlight: true,
    color: "#1C3A2B",
  },
  {
    id: "resident",
    name: "Резидентское",
    price: "от 1 200 000",
    period: "/ год",
    icon: Crown,
    desc: "Эксклюзивное членство с максимальными привилегиями",
    features: [
      "Всё из «Полного» членства",
      "Клубная резиденция для ночёвок",
      "Личный гольф-кадди",
      "Безлимитные гостевые визиты",
      "Приоритет на все турниры",
      "Персональный менеджер",
      "Доступ к партнёрским клубам",
    ],
    highlight: false,
    color: "#C9A96E",
  },
];

const faqs = [
  { q: "Как стать членом Verde Golf Club?", a: "Подайте заявку через сайт или позвоните нам. Каждая заявка рассматривается индивидуально. Срок рассмотрения — до 5 рабочих дней." },
  { q: "Нужна ли рекомендация действующего члена?", a: "Рекомендация приветствуется, но не является обязательной. Мы рассматриваем каждую заявку на основе общих ценностей клуба." },
  { q: "Могу ли я приходить с гостями?", a: "Да, в зависимости от типа членства вы получаете определённое количество гостевых визитов и зелёных сборов." },
  { q: "Есть ли сезонные ограничения?", a: "Нет. Клуб работает 365 дней в году. В зимний период доступны крытые тренировочные зоны и вся клубная инфраструктура." },
];

export default function Membership() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-28 min-h-[60vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={membersImg} alt="Members" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A2B] via-[#1C3A2B]/50 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatedSection>
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-semibold mb-4">Членство</p>
            <h1 className="font-serif font-bold text-white mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              Стать частью Verde
            </h1>
            <p className="text-white/65 max-w-xl" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)" }}>
              Ограниченное число мест. Индивидуальный подход. Закрытое сообщество профессионалов.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-[#F5F0E8] noise-bg">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#4A8862] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Наш подход</p>
            <h2 className="font-serif font-bold text-[#1C3A2B] mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
              Членство — это не статус. Это образ жизни.
            </h2>
            <p className="text-[#1C3A2B]/60 leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
              Мы не продаём доступ к полю. Мы приглашаем в сообщество людей, для которых важен баланс между достижением целей и качественным восстановлением.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* PLANS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#4A8862] text-xs tracking-[0.3em] uppercase font-semibold mb-3">Тарифы</p>
            <h2 className="font-serif font-bold text-[#1C3A2B]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Выберите своё членство
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan, i) => (
              <AnimatedSection key={plan.id} delay={i * 0.12} direction="up">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative p-8 rounded-3xl border-2 transition-all duration-300 ${
                    plan.highlight
                      ? "bg-[#1C3A2B] border-[#1C3A2B] shadow-2xl"
                      : "bg-white border-[#1C3A2B]/12 hover:border-[#1C3A2B]/30 shadow-md hover:shadow-xl"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#C9A96E] text-[#1C3A2B] text-xs font-bold tracking-wider rounded-full uppercase">
                      Популярный
                    </div>
                  )}

                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    plan.highlight ? "bg-[#C9A96E]/20" : "bg-[#1C3A2B]/8"
                  }`}>
                    <plan.icon size={20} className={plan.highlight ? "text-[#C9A96E]" : "text-[#1C3A2B]"} />
                  </div>

                  <h3 className={`font-serif font-bold text-xl mb-1 ${plan.highlight ? "text-white" : "text-[#1C3A2B]"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-5 ${plan.highlight ? "text-white/55" : "text-[#1C3A2B]/55"}`}>
                    {plan.desc}
                  </p>

                  <div className="mb-6">
                    <span className={`font-serif font-bold ${plan.highlight ? "text-white" : "text-[#1C3A2B]"}`} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ml-1 ${plan.highlight ? "text-white/50" : "text-[#1C3A2B]/50"}`}>
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check size={15} className={`mt-0.5 shrink-0 ${plan.highlight ? "text-[#C9A96E]" : "text-[#4A8862]"}`} />
                        <span className={plan.highlight ? "text-white/75" : "text-[#1C3A2B]/75"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <span className={`block text-center py-3 px-6 rounded-full font-semibold text-sm cursor-pointer transition-all ${
                      plan.highlight
                        ? "bg-[#C9A96E] text-[#1C3A2B] hover:bg-[#E4C99A]"
                        : "bg-[#1C3A2B] text-white hover:bg-[#2D5A40]"
                    }`}
                    data-testid={`membership-cta-${plan.id}`}
                    >
                      Подать заявку
                    </span>
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-[#1C3A2B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${clubhouseImg})`, backgroundSize: "cover" }} />
        <div className="absolute inset-0 bg-[#1C3A2B]/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div>
                <p className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Привилегии</p>
                <h2 className="font-serif font-bold text-white mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
                  Больше, чем просто гольф
                </h2>
                <div className="space-y-4">
                  {[
                    { title: "Партнёрские клубы", desc: "Доступ к 50+ клубам-партнёрам в России и Европе" },
                    { title: "Деловые связи", desc: "Нетворкинг среди предпринимателей и топ-менеджеров" },
                    { title: "Семейная программа", desc: "Академия гольфа для детей, семейные мероприятия" },
                    { title: "Эксклюзивные события", desc: "Закрытые турниры, гастрономические вечера, арт-показы" },
                  ].map((b) => (
                    <div key={b.title} className="flex gap-4 p-4 rounded-xl bg-white/6 border border-white/10">
                      <div className="w-2 h-2 rounded-full bg-[#C9A96E] mt-2 shrink-0" />
                      <div>
                        <div className="text-white font-medium text-sm mb-1">{b.title}</div>
                        <div className="text-white/50 text-xs">{b.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img src={restaurantImg} alt="Club restaurant" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F5F0E8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="text-[#4A8862] text-xs tracking-[0.3em] uppercase font-semibold mb-3">Вопросы и ответы</p>
            <h2 className="font-serif font-bold text-[#1C3A2B]" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
              Часто задаваемые вопросы
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="p-6 bg-white rounded-2xl border border-[#1C3A2B]/8 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-[#1C3A2B] mb-2 text-sm">{faq.q}</h3>
                  <p className="text-[#1C3A2B]/60 text-sm leading-relaxed">{faq.a}</p>
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
              Начните свой путь в Verde
            </h2>
            <p className="text-white/50 mb-8 text-sm">Места ограничены. Подайте заявку сегодня.</p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A96E] text-[#1C3A2B] rounded-full font-semibold cursor-pointer hover:bg-[#E4C99A] transition-colors" data-testid="membership-final-cta">
                Подать заявку <ArrowRight size={16} />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
