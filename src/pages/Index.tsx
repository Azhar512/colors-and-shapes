import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Wrench, Snowflake, CookingPot, WashingMachine, ShieldCheck, Clock, BadgeDollarSign, Star, MapPin, ThumbsUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/Hero";
import { useI18n } from "@/lib/i18n";
import serviceAc from "@/assets/service-ac.jpg";
import serviceWashing from "@/assets/service-washing.jpg";
import serviceFridge from "@/assets/service-fridge.jpg";
import serviceCleaningCustom from "@/assets/service-cleaning-v2.jpg";
import serviceInstallCustom from "@/assets/service-install-custom.jpg";

const testimonials = [
  { name: "Ahmed Al-Rashid", nameAr: "أحمد الراشد", text: "Excellent service! They fixed my washing machine the same day I called. Highly recommended.", textAr: "خدمة ممتازة! أصلحوا غسالتي في نفس اليوم الذي اتصلت فيه. أنصح بهم بشدة.", rating: 5 },
  { name: "Fatima Hassan", nameAr: "فاطمة حسن", text: "Very professional technicians. They explained the problem clearly and fixed it quickly. Fair pricing too.", textAr: "فنيون محترفون جداً. شرحوا المشكلة بوضوح وأصلحوها بسرعة. أسعار عادلة أيضاً.", rating: 5 },
  { name: "Mohammed Al-Sayed", nameAr: "محمد السيد", text: "My AC broke during summer. They came within 2 hours and fixed it. Lifesavers!", textAr: "تعطل مكيفي في الصيف. جاؤوا خلال ساعتين وأصلحوه. منقذون!", rating: 5 },
  { name: "Sara Abdullah", nameAr: "سارة عبدالله", text: "I've used Colors and Shapes three times now. Always reliable and professional. They're my go-to for all appliance repairs.", textAr: "استخدمت Colors and Shapes ثلاث مرات. دائماً موثوقون ومحترفون. هم خياري الأول لجميع الإصلاحات.", rating: 4 },
];

const areas = ["Al Hamra", "Al Rawdah", "Al Safa", "Al Zahra", "Al Muhammadiyah", "Al Naseem", "Al Salamah", "Obhur", "Al Marwah", "Al Faisaliyah", "Al Andalus", "Al Balad"];
const areasAr = ["الحمراء", "الروضة", "الصفا", "الزهراء", "المحمدية", "النسيم", "السلامة", "أبحر", "المروة", "الفيصلية", "الأندلس", "البلد"];
const brands = ["Samsung", "LG", "Daewoo", "Hitachi", "Whirlpool", "Toshiba", "Carrier", "Daikin"];

export default function Index() {
  const { t, lang } = useI18n();

  const serviceCards = [
    { icon: Snowflake, image: serviceAc, titleKey: "services.ac.title", descKey: "services.ac.desc" },
    { icon: Snowflake, image: serviceFridge, titleKey: "services.fridge.title", descKey: "services.fridge.desc" },
    { icon: Wrench, image: serviceInstallCustom, titleKey: "services.ac.install", descKey: "services.ac.install.desc" },
    { icon: Snowflake, image: serviceCleaningCustom, titleKey: "services.ac.cleaning", descKey: "services.ac.cleaning.desc" },
  ];

  const quickServices = [
    { icon: Snowflake, titleKey: "services.ac.title", descKey: "services.ac.cleaning" },
    { icon: Wrench, titleKey: "services.ac.gas", descKey: "services.ac.gas.desc" },
    { icon: Zap, titleKey: "services.ac.electrical", descKey: "services.ac.electrical.desc" },
  ];

  const whyUs = [
    { icon: Clock, title: t("why.sameday"), desc: t("why.sameday.desc") },
    { icon: ShieldCheck, title: t("why.certified"), desc: t("why.certified.desc") },
    { icon: BadgeDollarSign, title: t("why.affordable"), desc: t("why.affordable.desc") },
    { icon: ThumbsUp, title: t("why.guarantee"), desc: t("why.guarantee.desc") },
  ];

  const offers = [
    { value: t("offers.1.value"), title: t("offers.1.title"), desc: t("offers.1.desc") },
    { value: t("offers.2.value"), title: t("offers.2.title"), desc: t("offers.2.desc") },
    { value: t("offers.3.value"), title: t("offers.3.title"), desc: t("offers.3.desc") },
    { value: t("offers.4.value"), title: t("offers.4.title"), desc: t("offers.4.desc") },
  ];

  return (
    <>
      <Helmet>
        <title>Colors and Shapes — Fast & Reliable Appliance Repair in Jeddah</title>
        <meta name="description" content="Same-day home appliance repair in Jeddah. Washing machines, refrigerators, AC & kitchen appliances. Certified technicians. Call now!" />
      </Helmet>

      <Hero
        variant="home"
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        titleAccent={t("hero.titleAccent")}
        subtitle={t("hero.subtitle")}
        showStats
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {serviceCards.map((svc, i) => (
            <motion.div
              key={svc.titleKey}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
            >
              <Link to="/services" className="group relative rounded-2xl overflow-hidden aspect-[4/3] block ring-1 ring-white/10 hover:ring-cta/60 transition-all hover:-translate-y-1">
                <img src={svc.image} alt={t(svc.titleKey)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <svc.icon className="w-5 h-5 text-cta-glow mb-1.5" />
                  <span className="text-white text-xs sm:text-sm font-semibold leading-tight block">{t(svc.titleKey)}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Hero>

      {/* Quick services */}
      <section className="py-14 bg-section-dark text-section-dark-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-5">
            {quickServices.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-cta/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center shrink-0 shadow-cta">
                  <svc.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{t(svc.titleKey)}</h3>
                  <p className="text-xs text-section-dark-foreground/60 mt-0.5">{t(svc.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead title={t("services.title")} subtitle={t("services.subtitle")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {serviceCards.map((svc, i) => (
              <motion.div
                key={svc.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 group hover:-translate-y-1.5"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={svc.image} alt={t(svc.titleKey)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center">
                    <svc.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground mb-2">{t(svc.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{t(svc.descKey)}</p>
                  <a href="tel:0543650900" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-cta hover:gap-2 transition-all">
                    <Phone className="w-3.5 h-3.5" /> {t("hero.cta.call")}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 md:py-28 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead title={t("why.title")} subtitle={t("why.subtitle")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-3xl p-7 text-center shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead title={t("offers.title")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {offers.map((offer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative bg-card rounded-3xl p-6 shadow-card border-2 border-transparent hover:border-cta/40 transition-colors overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cta/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="text-3xl font-extrabold text-gradient-cta mb-2">{offer.value}</div>
                  <h3 className="font-bold text-foreground mb-1">{offer.title}</h3>
                  <p className="text-sm text-muted-foreground">{offer.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="tel:0543650900">
              <Button variant="cta" size="lg" className="gap-2 shadow-cta">
                <Phone className="w-5 h-5" /> {t("hero.cta.call")}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead title={t("testimonials.title")} subtitle={t("testimonials.subtitle")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {testimonials.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-cta text-cta" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  "{lang === "ar" ? review.textAr : review.text}"
                </p>
                <div className="font-semibold text-sm text-foreground">{lang === "ar" ? review.nameAr : review.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands marquee */}
      <section className="py-16 md:py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead title={t("brands.title")} subtitle={t("brands.subtitle")} />
        </div>
        <div className="mt-10 relative">
          <div className="flex gap-4 animate-marquee w-max">
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="px-7 py-3.5 bg-card rounded-2xl shadow-card text-foreground font-semibold text-sm whitespace-nowrap">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 md:py-24 bg-section-dark text-section-dark-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{t("experience.years")}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {(["experience.badge.residential", "experience.badge.commercial", "experience.badge.allbrands", "experience.badge.emergency"] as const).map((key) => (
              <span key={key} className="px-5 py-2.5 rounded-full bg-white/10 border border-white/15 text-sm font-medium backdrop-blur">
                {t(key)}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <p className="text-xl md:text-2xl font-bold text-cta-glow mb-4">{t("cta.click")}</p>
            <a href="tel:0543650900" className="text-3xl md:text-5xl font-extrabold tracking-tight hover:text-cta-glow transition-colors">0543650900</a>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="tel:0543650900">
                <Button variant="cta" size="lg" className="gap-2 shadow-cta">
                  <Phone className="w-5 h-5" /> {t("hero.cta.call")}
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="hero-outline" size="lg">{t("contact.cta.book")}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead title={t("coverage.title")} />
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {(lang === "ar" ? areasAr : areas).map((area) => (
              <span key={area} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card text-sm text-foreground shadow-card font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                <MapPin className="w-3.5 h-3.5" /> {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-hero text-hero-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">{t("cta.ready")}</h2>
          <p className="mt-3 text-hero-foreground/80 text-lg">{t("cta.desc")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="tel:0543650900">
              <Button variant="cta" size="lg" className="gap-2 shadow-cta">
                <Phone className="w-5 h-5" /> {t("hero.cta.call")}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHead({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-cta" />
    </div>
  );
}
