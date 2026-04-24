import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ShieldCheck, Clock, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import heroBg from "@/assets/hero-bg.jpg";


interface HeroProps {
  variant?: "home" | "page";
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  showCtas?: boolean;
  showStats?: boolean;
  children?: React.ReactNode;
}

export function Hero({
  variant = "page",
  eyebrow,
  title,
  titleAccent,
  subtitle,
  showCtas = true,
  showStats = false,
  children,
}: HeroProps) {
  const { t, dir } = useI18n();
  const isHome = variant === "home";

  const allServices = [
    "services.ac.title",
    "services.fridge.title",
    "services.ac.cleaning",
    "services.ac.gas",
    "services.ac.electrical",
    "services.ac.install",
    "services.ac.split",
    "services.ac.window",
    "services.ac.wall",
    "services.ac.cassette",
    "services.ac.duct",
    "services.ac.pipe",
    "services.ac.package",
    "services.buying.old",
    "services.buying.scrap",
    "services.buying.metals",
  ];

  const trust = [
    { icon: Clock, label: t("trust.fast") },
    { icon: ShieldCheck, label: t("trust.warranty") },
    { icon: Award, label: t("trust.licensed") },
  ];
  


  return (
    <section
      className={`relative isolate overflow-hidden ${isHome ? "min-h-[88vh]" : "min-h-[60vh]"}`}
      dir={dir}
    >
      {/* Services Marquee at Top */}
      <div className="relative z-20 bg-white/5 border-b border-white/10 overflow-hidden py-3 backdrop-blur-sm" dir="ltr">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 w-max items-center whitespace-nowrap"
        >
          {[...allServices, ...allServices, ...allServices, ...allServices].map((svcKey, i) => (
            <div key={i} className="flex items-center gap-3 text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cta shadow-cta" />
              <span>{t(svcKey)}</span>
              <span className="ml-8 text-white/20 font-light">/</span>
            </div>
          ))}
        </motion.div>
      </div>
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-70" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Floating accent orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-glow/20 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -right-20 w-[28rem] h-[28rem] rounded-full bg-cta/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isHome ? "py-20 md:py-28 lg:py-32" : "py-16 md:py-20"} text-hero-foreground`}>
        <div className="max-w-3xl">
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wide uppercase mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-cta-glow" />
              <span>{eyebrow}</span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className={`font-extrabold leading-[1.05] tracking-tight ${
              isHome ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl" : "text-3xl sm:text-4xl md:text-5xl"
            }`}
          >
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="text-gradient-cta">{titleAccent}</span>
              </>
            )}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className={`mt-5 max-w-2xl text-hero-foreground/85 leading-relaxed ${
                isHome ? "text-lg md:text-xl" : "text-base md:text-lg"
              }`}
            >
              {subtitle}
            </motion.p>
          )}

          {showCtas && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="tel:0580706770">
                <Button variant="cta" size="lg" className="gap-2 shadow-cta">
                  <Phone className="w-5 h-5" /> {t("hero.cta.call")}
                </Button>
              </a>
              <a href="https://wa.me/966543650900" target="_blank" rel="noopener noreferrer">
                <Button variant="hero-outline" size="lg" className="gap-2">
                  <MessageCircle className="w-5 h-5" /> {t("hero.cta.whatsapp")}
                </Button>
              </a>
            </motion.div>
          )}

          {showStats && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {trust.map((it) => (
                <div key={it.label} className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
                  <it.icon className="w-4 h-4 text-cta-glow" /> {it.label}
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {children && <div className="mt-12">{children}</div>}
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
