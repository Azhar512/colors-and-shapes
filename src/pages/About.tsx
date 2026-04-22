import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Users } from "lucide-react";
import { Hero } from "@/components/Hero";
import { useI18n } from "@/lib/i18n";
import teamPhoto from "@/assets/team-photo.jpg";

export default function About() {
  const { t } = useI18n();

  const sections = [
    { icon: Award, titleKey: "about.experience.title", descKey: "about.experience.desc" },
    { icon: ShieldCheck, titleKey: "about.mission.title", descKey: "about.mission.desc" },
    { icon: Users, titleKey: "about.technicians.title", descKey: "about.technicians.desc" },
  ];

  const stats = [
    { value: t("stats.repairs"), label: t("stats.repairs.label") },
    { value: t("stats.years"), label: t("stats.years.label") },
    { value: t("stats.rating"), label: t("stats.rating.label") },
    { value: t("stats.technicians"), label: t("stats.technicians.label") },
  ];

  return (
    <>
      <Helmet>
        <title>About Us — Colors and Shapes Jeddah</title>
        <meta name="description" content="15+ years of trusted appliance repair in Jeddah. Learn about our certified technicians, mission, and commitment to quality." />
      </Helmet>

      <Hero
        eyebrow={t("hero.about.title")}
        title={t("about.title")}
        subtitle={t("about.intro")}
      />

      <section className="bg-section-dark text-section-dark-foreground py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="relative max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="text-3xl md:text-4xl font-extrabold text-gradient-cta">{s.value}</div>
              <div className="text-sm text-section-dark-foreground/70 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-hero mb-14"
          >
            <img src={teamPhoto} alt="Colors and Shapes Team" className="w-full h-64 md:h-96 object-cover" loading="lazy" />
          </motion.div>

          <div className="space-y-6">
            {sections.map((sec, i) => (
              <motion.div
                key={sec.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-3xl p-7 md:p-9 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shrink-0 shadow-md">
                    <sec.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">{t(sec.titleKey)}</h2>
                    <p className="text-muted-foreground leading-relaxed">{t(sec.descKey)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
