import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import membersImg from "@/assets/members.png";
import clubhouseImg from "@/assets/clubhouse.png";
import restaurantImg from "@/assets/restaurant.png";
import heroImg from "@/assets/hero-aerial.png";

const plans = [
  {
    id: "social",
    name: "СОЦИАЛЬНОЕ",
    price: "от 200 000",
    period: "/ год",
    desc: "Доступ к клубной инфраструктуре без права игры на поле",
    features: [
      "Клубхаус и ресторан",
      "Участие в клубных событиях",
      "Спа и фитнес-центр",
      "До 5 гостевых приглашений / год",
      "Деловые переговорные",
      "Парковка на территории",
    ],
    highlight: false,
  },
  {
    id: "full",
    name: "ПОЛНОЕ",
    price: "от 500 000",
    period: "/ год",
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
  },
  {
    id: "resident",
    name: "РЕЗИДЕНТСКОЕ",
    price: "от 1 200 000",
    period: "/ год",
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

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-[65vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={membersImg} alt="Members" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pb-20 pt-40 w-full">
          <AnimatedSection>
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-semibold mb-5">Членство</p>
            <h1
              className="font-serif font-black text-white uppercase leading-[0.93] mb-6"
              style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)", letterSpacing: "0.02em" }}
            >
              СТАТЬ ЧАСТЬЮ<br />VERDE
            </h1>
            <p className="text-white/60 max-w-xl leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)" }}>
              Ограниченное число мест. Индивидуальный подход. Закрытое сообщество профессионалов.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PHILOSOPHY LINE
      ═══════════════════════════════════════════ */}
      <section className="bg-[#F5F0E8] py-24 border-b border-[#1C3A2B]/10">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <p className="text-[#4A8862] text-xs tracking-[0.35em] uppercase font-semibold mb-5">Наш подход</p>
            <h2
              className="font-serif font-black text-[#1C3A2B] uppercase leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "0.02em" }}
            >
              ЧЛЕНСТВО — ЭТО<br />ОБРАЗ ЖИЗНИ
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PLANS — editorial table layout
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection className="pt-20 pb-12">
            <p className="text-[#4A8862] text-xs tracking-[0.35em] uppercase font-semibold mb-3">Тарифы</p>
            <h2
              className="font-serif font-black text-[#1C3A2B] uppercase leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "0.02em" }}
            >
              ВЫБЕРИТЕ<br />СВОЁ ЧЛЕНСТВО
            </h2>
          </AnimatedSection>

          {/* Three-column plan layout — no rounded cards, uses borders */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#1C3A2B]/15 pb-20">
            {plans.map((plan, i) => (
              <AnimatedSection key={plan.id} delay={i * 0.1}>
                <motion.div
                  className={`p-10 h-full flex flex-col border-r border-[#1C3A2B]/10 last:border-r-0 ${plan.highlight ? "bg-[#1C3A2B]" : "bg-white"}`}
                >
                  {plan.highlight && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C9A96E]/20 border border-[#C9A96E]/30 mb-4 self-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                      <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.15em] uppercase">Популярный</span>
                    </div>
                  )}

                  <h3
                    className={`font-serif font-black uppercase leading-tight mb-2 ${plan.highlight ? "text-white" : "text-[#1C3A2B]"}`}
                    style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", letterSpacing: "0.03em" }}
                  >
                    {plan.name}
                  </h3>

                  <p className={`text-xs mb-6 leading-relaxed ${plan.highlight ? "text-white/50" : "text-[#1C3A2B]/50"}`}>
                    {plan.desc}
                  </p>

                  <div className="mb-8 pb-8 border-b border-current/10">
                    <span
                      className={`font-serif uppercase ${plan.highlight ? "text-[#C9A96E]" : "text-[#1C3A2B]"}`}
                      style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "0.02em" }}
                    >
                      {plan.price}
                    </span>
                    <span className={`text-xs ml-2 ${plan.highlight ? "text-white/40" : "text-[#1C3A2B]/40"}`}>
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-10 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <Check
                          size={14}
                          className={`mt-0.5 shrink-0 ${plan.highlight ? "text-[#C9A96E]" : "text-[#4A8862]"}`}
                        />
                        <span className={plan.highlight ? "text-white/70" : "text-[#1C3A2B]/70"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <span
                      className={`inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide cursor-pointer transition-all duration-300 ${
                        plan.highlight
                          ? "bg-[#C9A96E] text-[#1C3A2B] hover:bg-[#E4C99A]"
                          : "bg-[#1C3A2B] text-white hover:bg-[#2D5A40]"
                      }`}
                      style={{ borderRadius: "2px" }}
                      data-testid={`membership-cta-${plan.id}`}
                    >
                      Подать заявку <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BENEFITS — full bleed split
      ═══════════════════════════════════════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <AnimatedSection direction="right" className="overflow-hidden">
          <div className="h-full min-h-[400px] overflow-hidden">
            <img
              src={restaurantImg}
              alt="Club restaurant"
              className="w-full h-full object-cover"
              style={{ minHeight: "500px" }}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.15} className="bg-[#1C3A2B] flex items-center">
          <div className="px-10 md:px-16 py-20">
            <p className="text-[#C9A96E] text-xs tracking-[0.35em] uppercase font-semibold mb-5">Привилегии</p>
            <h2
              className="font-serif font-black text-white uppercase leading-tight mb-10"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "0.02em" }}
            >
              БОЛЬШЕ,<br />ЧЕМ ПРОСТО<br />ГОЛЬФ
            </h2>
            <div className="space-y-6">
              {[
                { title: "Партнёрские клубы", desc: "Доступ к 50+ клубам-партнёрам в России и Европе" },
                { title: "Деловые связи", desc: "Нетворкинг среди предпринимателей и топ-менеджеров" },
                { title: "Семейная программа", desc: "Академия гольфа для детей, семейные мероприятия" },
                { title: "Эксклюзивные события", desc: "Закрытые турниры, гастрономические вечера, арт-показы" },
              ].map((b, i) => (
                <div key={b.title} className={`flex gap-4 ${i < 3 ? "pb-6 border-b border-white/10" : ""}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] mt-2 shrink-0" />
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{b.title}</div>
                    <div className="text-white/45 text-xs leading-relaxed">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ — accordion-style without cards
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F5F0E8]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <AnimatedSection className="mb-12">
            <p className="text-[#4A8862] text-xs tracking-[0.35em] uppercase font-semibold mb-3">FAQ</p>
            <h2
              className="font-serif font-black text-[#1C3A2B] uppercase leading-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "0.02em" }}
            >
              ЧАСТО<br />ЗАДАВАЕМЫЕ<br />ВОПРОСЫ
            </h2>
          </AnimatedSection>
          <div className="divide-y divide-[#1C3A2B]/12">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="py-6">
                  <h3 className="font-semibold text-[#1C3A2B] mb-2.5 text-sm tracking-wide">{faq.q}</h3>
                  <p className="text-[#1C3A2B]/55 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-32">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-[#1C3A2B]/88" />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2
              className="font-serif font-black text-white uppercase leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "0.02em" }}
            >
              НАЧНИТЕ СВОЙ<br />ПУТЬ В VERDE
            </h2>
            <p className="text-white/50 mb-10 text-sm">Места ограничены. Подайте заявку сегодня.</p>
            <Link href="/contact">
              <span
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C9A96E] text-[#1C3A2B] cursor-pointer hover:bg-[#E4C99A] transition-colors font-semibold text-sm tracking-wide"
                style={{ borderRadius: "4px" }}
                data-testid="membership-final-cta"
              >
                Подать заявку
                <span className="w-7 h-7 rounded-full bg-[#1C3A2B] flex items-center justify-center">
                  <ArrowRight size={13} className="text-white" />
                </span>
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
