import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import clubhouseImg from "@/assets/clubhouse.png";
import heroImg from "@/assets/hero-aerial.png";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "membership",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-28 min-h-[50vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={clubhouseImg} alt="Clubhouse" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A2B] via-[#1C3A2B]/50 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatedSection>
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-semibold mb-4">Контакты</p>
            <h1 className="font-serif font-bold text-white" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              Свяжитесь с нами
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-20 bg-[#F5F0E8] noise-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              { icon: MapPin, label: "Адрес", value: "Московская область, Истринский район, с/о «Верхнее Сарокино»" },
              { icon: Phone, label: "Телефон", value: "+7 (495) 000-00-00\nежедневно 8:00–22:00" },
              { icon: Mail, label: "Email", value: "info@verdegolf.ru\nreservation@verdegolf.ru" },
              { icon: Clock, label: "Режим работы", value: "Пн–Вс: 07:00–22:00\nРесторан: 12:00–23:00" },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.08}>
                <div className="p-6 bg-white rounded-2xl border border-[#1C3A2B]/8 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#1C3A2B] flex items-center justify-center mb-4">
                    <item.icon size={18} className="text-[#C9A96E]" />
                  </div>
                  <div className="text-[#4A8862] text-xs tracking-[0.15em] uppercase font-semibold mb-2">{item.label}</div>
                  <div className="text-[#1C3A2B]/70 text-sm leading-relaxed whitespace-pre-line">{item.value}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="right">
              <div>
                <p className="text-[#4A8862] text-xs tracking-[0.3em] uppercase font-semibold mb-3">Напишите нам</p>
                <h2 className="font-serif font-bold text-[#1C3A2B] mb-8" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
                  Оставьте заявку
                </h2>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="p-8 bg-[#E8F5EE] rounded-2xl border border-[#4A8862]/20 text-center"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#1C3A2B] flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={24} className="text-[#C9A96E]" />
                      </div>
                      <h3 className="font-serif font-bold text-[#1C3A2B] text-xl mb-2">Заявка отправлена!</h3>
                      <p className="text-[#1C3A2B]/60 text-sm leading-relaxed">
                        Мы свяжемся с вами в течение 1-2 рабочих дней. Ценим ваш интерес к Verde Golf Club.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#1C3A2B]/60 tracking-wide uppercase mb-2">Имя *</label>
                          <input
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-[#1C3A2B]/12 bg-[#F5F0E8] text-[#1C3A2B] text-sm focus:outline-none focus:ring-2 focus:ring-[#4A8862]/30 focus:border-[#4A8862] transition-all placeholder:text-[#1C3A2B]/30"
                            placeholder="Александр Иванов"
                            data-testid="contact-name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#1C3A2B]/60 tracking-wide uppercase mb-2">Телефон</label>
                          <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-[#1C3A2B]/12 bg-[#F5F0E8] text-[#1C3A2B] text-sm focus:outline-none focus:ring-2 focus:ring-[#4A8862]/30 focus:border-[#4A8862] transition-all placeholder:text-[#1C3A2B]/30"
                            placeholder="+7 (900) 000-00-00"
                            data-testid="contact-phone"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1C3A2B]/60 tracking-wide uppercase mb-2">Email *</label>
                        <input
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#1C3A2B]/12 bg-[#F5F0E8] text-[#1C3A2B] text-sm focus:outline-none focus:ring-2 focus:ring-[#4A8862]/30 focus:border-[#4A8862] transition-all placeholder:text-[#1C3A2B]/30"
                          placeholder="your@email.com"
                          data-testid="contact-email"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1C3A2B]/60 tracking-wide uppercase mb-2">Тема</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#1C3A2B]/12 bg-[#F5F0E8] text-[#1C3A2B] text-sm focus:outline-none focus:ring-2 focus:ring-[#4A8862]/30 focus:border-[#4A8862] transition-all"
                          data-testid="contact-subject"
                        >
                          <option value="membership">Вступление в клуб</option>
                          <option value="course">Бронирование поля</option>
                          <option value="event">Частное мероприятие</option>
                          <option value="coaching">Обучение</option>
                          <option value="other">Другое</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1C3A2B]/60 tracking-wide uppercase mb-2">Сообщение</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-[#1C3A2B]/12 bg-[#F5F0E8] text-[#1C3A2B] text-sm focus:outline-none focus:ring-2 focus:ring-[#4A8862]/30 focus:border-[#4A8862] transition-all resize-none placeholder:text-[#1C3A2B]/30"
                          placeholder="Расскажите о вашем запросе..."
                          data-testid="contact-message"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-[#1C3A2B] text-white rounded-xl font-semibold text-sm tracking-wide hover:bg-[#2D5A40] transition-colors flex items-center justify-center gap-2 group"
                        data-testid="contact-submit"
                      >
                        Отправить заявку
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                  <img src={heroImg} alt="Verde Golf Club location" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 bg-[#F5F0E8] rounded-2xl border border-[#1C3A2B]/8">
                  <h3 className="font-serif font-semibold text-[#1C3A2B] mb-3">Как добраться</h3>
                  <div className="space-y-2.5 text-sm text-[#1C3A2B]/65">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#1C3A2B] text-white text-xs flex items-center justify-center shrink-0 mt-0.5">A</div>
                      <span>На автомобиле: МКАД → Новорижское шоссе → Истра → 5 км на север</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#4A8862] text-white text-xs flex items-center justify-center shrink-0 mt-0.5">T</div>
                      <span>Трансфер от клуба: ежедневно из центра Москвы (по запросу)</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#C9A96E] text-white text-xs flex items-center justify-center shrink-0 mt-0.5">Ж</div>
                      <span>ЖД: Рижское направление → ст. Истра → такси 15 мин</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* VISIT HOURS */}
      <section className="py-24 bg-[#1C3A2B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-8" style={{ backgroundImage: `url(${clubhouseImg})`, backgroundSize: "cover" }} />
        <div className="absolute inset-0 bg-[#1C3A2B]/92" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif font-bold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
              Время работы
            </h2>
            <p className="text-white/50 text-sm">Мы открыты для вас 365 дней в году</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: "Поле", hours: ["Пн–Пт: 07:00–20:00", "Сб–Вс: 06:30–21:00"] },
              { title: "Клубхаус", hours: ["Ежедневно: 08:00–22:00", "Спа: 09:00–21:00"] },
              { title: "Ресторан", hours: ["Обед: 12:00–16:00", "Ужин: 18:00–23:00"] },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-white/8 border border-white/10 text-center">
                  <h3 className="font-serif font-bold text-white text-lg mb-4">{item.title}</h3>
                  {item.hours.map((h) => (
                    <p key={h} className="text-white/60 text-sm mb-1">{h}</p>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#4A8862] text-xs tracking-[0.3em] uppercase font-semibold mb-3">Социальные сети</p>
            <h2 className="font-serif font-bold text-[#1C3A2B] mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Следите за жизнью клуба
            </h2>
            <p className="text-[#1C3A2B]/55 mb-8 text-sm">
              Публикуем анонсы событий, фотографии с турниров и эксклюзивный контент для подписчиков
            </p>
            <div className="flex justify-center gap-4">
              {["Instagram", "Telegram", "VKontakte"].map((social) => (
                <a key={social} href="#" className="px-5 py-2.5 rounded-full border border-[#1C3A2B]/15 text-[#1C3A2B]/70 text-sm font-medium hover:bg-[#1C3A2B] hover:text-white hover:border-[#1C3A2B] transition-all duration-300" data-testid={`contact-social-${social.toLowerCase()}`}>
                  {social}
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
