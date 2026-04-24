import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { WashingMachine, Snowflake, CookingPot, Phone, MessageCircle, Wrench, Zap, CheckCircle2, Wind, Layout, Grid, ArrowDownToLine, Activity, Box, Recycle, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/Hero";
import { useI18n } from "@/lib/i18n";
import serviceAc from "@/assets/service-ac.jpg";
import serviceWashing from "@/assets/service-washing.jpg";
import serviceFridge from "@/assets/service-fridge.jpg";
import serviceKitchen from "@/assets/service-kitchen.jpg";
import acTypes from "@/assets/ac-types.png";
import acBuying from "@/assets/ac-buying.png";
import acPiping from "@/assets/ac-piping.png";
import serviceCleaningCustom from "@/assets/service-cleaning-v2.jpg";
import serviceGasCustom from "@/assets/service-gas-custom.jpg";
import serviceRepairCustom from "@/assets/service-repair-custom.jpg";
import serviceInstallCustom from "@/assets/service-install-custom.jpg";
import serviceSplitCustom from "@/assets/service-split-custom.jpg";
import serviceWindowCustom from "@/assets/service-window-custom.jpg";
import serviceWallCustom from "@/assets/service-wall-custom.jpg";
import serviceCassetteCustom from "@/assets/service-cassette-custom.jpg";
import serviceDuctCustom from "@/assets/service-duct-custom.jpg";
import servicePipeCustom from "@/assets/service-pipe-custom.jpg";
import servicePackageCustom from "@/assets/service-package-custom.jpg";
import serviceOldAcBuyer from "@/assets/service-old-ac-buyer.jpg";
import serviceScrapAcBuyer from "@/assets/service-scrap-ac-buyer.jpg";
import serviceMetalsBuyer from "@/assets/service-metals-buyer.jpg";

export default function Services() {
  const { t } = useI18n();

  const services = [
    { icon: Snowflake, image: serviceAc, titleKey: "services.ac.title", descKey: "services.ac.desc", issuesKey: "services.ac.issues" },
    { icon: Snowflake, image: serviceFridge, titleKey: "services.fridge.title", descKey: "services.fridge.desc", issuesKey: "services.fridge.issues" },
  ];

  const acSubServices = [
    { icon: Wrench, titleKey: "services.ac.cleaning", descKey: "services.ac.cleaning.desc", image: serviceCleaningCustom },
    { icon: Snowflake, titleKey: "services.ac.gas", descKey: "services.ac.gas.desc", image: serviceGasCustom },
    { icon: Zap, titleKey: "services.ac.electrical", descKey: "services.ac.electrical.desc", image: serviceRepairCustom },
    { icon: CheckCircle2, titleKey: "services.ac.install", descKey: "services.ac.install.desc", image: serviceInstallCustom },
    { icon: Wind, titleKey: "services.ac.split", descKey: "services.ac.split.desc", image: serviceSplitCustom },
    { icon: Layout, titleKey: "services.ac.window", descKey: "services.ac.window.desc", image: serviceWindowCustom },
    { icon: Grid, titleKey: "services.ac.wall", descKey: "services.ac.wall.desc", image: serviceWallCustom },
    { icon: Activity, titleKey: "services.ac.cassette", descKey: "services.ac.cassette.desc", image: serviceCassetteCustom },
    { icon: ArrowDownToLine, titleKey: "services.ac.duct", descKey: "services.ac.duct.desc", image: serviceDuctCustom },
    { icon: Activity, titleKey: "services.ac.pipe", descKey: "services.ac.pipe.desc", image: servicePipeCustom },
  ];

  const buyingServices = [
    { icon: Recycle, titleKey: "services.buying.windowSplit", descKey: "services.buying.windowSplit.desc", image: acBuying },
    { icon: Box, titleKey: "services.ac.package", descKey: "services.ac.package.desc", image: servicePackageCustom },
    { icon: Recycle, titleKey: "services.buying.old", descKey: "services.buying.old.desc", image: serviceOldAcBuyer },
    { icon: Coins, titleKey: "services.buying.scrap", descKey: "services.buying.scrap.desc", image: serviceScrapAcBuyer },
    { icon: Coins, titleKey: "services.buying.metals", descKey: "services.buying.metals.desc", image: serviceMetalsBuyer },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services — Colors and Shapes Jeddah</title>
        <meta name="description" content="Professional washing machine, refrigerator, AC, and kitchen appliance repair services in Jeddah. Same-day service available." />
      </Helmet>

      <Hero
        eyebrow={t("hero.services.title")}
        title={t("services.title")}
        subtitle={t("services.subtitle")}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {services.map((svc, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={svc.titleKey}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="md:w-2/5 relative">
                    <img src={svc.image} alt={t(svc.titleKey)} className="w-full h-64 md:h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-none" />
                  </div>
                  <div className="md:w-3/5 p-7 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
                        <svc.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground">{t(svc.titleKey)}</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{t(svc.descKey)}</p>
                    <div className="bg-section-alt rounded-2xl p-4 mb-6">
                      <p className="text-sm text-muted-foreground">{t(svc.issuesKey)}</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <a href="tel:0543650900" className="w-full sm:w-auto">
                        <Button variant="cta" className="w-full gap-2 shadow-cta">
                          <Phone className="w-4 h-4" /> {t("hero.cta.call")}
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-section-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-3">{t("services.ac.title")}</h2>
          <div className="mx-auto w-16 h-1 rounded-full bg-gradient-cta mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {acSubServices.map((sub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 flex flex-col"
              >
                {sub.image && (
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img 
                      src={sub.image} 
                      alt={t(sub.titleKey)} 
                      className="w-full h-full object-contain" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                  </div>
                )}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center shrink-0 shadow-cta">
                      <sub.icon className="w-5 h-5 text-cta-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1 leading-tight">{t(sub.titleKey)}</h3>
                    </div>
                  </div>
                  {sub.descKey && <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{t(sub.descKey)}</p>}
                  <div className="mt-auto">
                    <a href="tel:0543650900" className="block">
                      <Button variant="cta" size="sm" className="w-full h-9 text-[11px] gap-1.5 shadow-cta uppercase font-bold">
                        <Phone className="w-3.5 h-3.5" /> {t("hero.cta.call")}
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-3">Recycling & Buying</h2>
          <div className="mx-auto w-16 h-1 rounded-full bg-gradient-to-br from-primary to-primary/70 mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {buyingServices.map((sub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 flex flex-col"
              >
                {sub.image && (
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img 
                      src={sub.image} 
                      alt={t(sub.titleKey)} 
                      className="w-full h-full object-contain" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                  </div>
                )}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shrink-0 shadow-md">
                      <sub.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1 leading-tight">{t(sub.titleKey)}</h3>
                    </div>
                  </div>
                  {sub.descKey && <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{t(sub.descKey)}</p>}
                  <div className="mt-auto">
                    <a href="tel:0543650900" className="block">
                      <Button variant="cta" size="sm" className="w-full h-9 text-[11px] gap-1.5 shadow-cta uppercase font-bold">
                        <Phone className="w-3.5 h-3.5" /> {t("hero.cta.call")}
                      </Button>
                    </a>
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
