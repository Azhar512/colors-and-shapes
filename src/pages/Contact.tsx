import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/Hero";
import { useI18n } from "@/lib/i18n";
import shopLocation from "@/assets/shop-location.jpg";

export default function Contact() {
  const { t, lang } = useI18n();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const serviceOptions = lang === "ar"
    ? [
        "تركيب وصيانة مكيف سبليت",
        "تركيب وصيانة مكيف شباك",
        "تركيب وصيانة مكيف جداري",
        "تركيب وصيانة مكيف كاسيت",
        "تركيب وصيانة مكيف دكت سبليت",
        "تأسيس مواسير النحاس والدكت",
        "شراء مكيفات قديمة",
        "شراء مكيفات سكراب",
        "شراء نحاس وألمنيوم وكهرباء",
        "تركيب وصيانة مكيفات باكج",
        "إصلاح المكيفات",
        "إصلاح الغسالات",
        "إصلاح الثلاجات",
        "إصلاح أجهزة المطبخ",
        "خدمة أخرى"
      ]
    : [
        "Split AC Installation & Maintenance",
        "Window AC Installation & Maintenance",
        "Wall-mounted AC Installation & Maintenance",
        "Cassette AC Installation & Maintenance",
        "Duct Split AC Installation & Maintenance",
        "Establishment of Copper Pipe and Duct",
        "Old AC Buyer",
        "Scrap AC Buyer",
        "Copper, Aluminum, and Electric Buyer",
        "Package AC Installation & Maintenance",
        "AC Repair",
        "Washing Machine Repair",
        "Refrigerator Repair",
        "Kitchen Appliance Repair",
        "Other Service"
      ];

  const inputClass =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors";

  return (
    <>
      <Helmet>
        <title>Contact Us — Colors and Shapes Jeddah</title>
        <meta name="description" content="Contact Colors and Shapes for fast appliance repair in Jeddah. Call, WhatsApp, or fill out our form for a free consultation." />
      </Helmet>

      <Hero
        eyebrow={t("hero.contact.title")}
        title={t("contact.cta.title")}
        subtitle={t("hero.contact.subtitle")}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-3 bg-card rounded-3xl p-7 md:p-9 shadow-card"
            >
              <h3 className="text-xl font-bold text-foreground mb-1">{t("contact.form.heading")}</h3>
              <p className="text-sm text-muted-foreground mb-6">{t("contact.form.subheading")}</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-whatsapp/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-whatsapp" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{t("contact.form.success")}</h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.form.name")} *</label>
                    <input type="text" required maxLength={100} className={inputClass} placeholder={t("contact.form.name")} />
                  </div>
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <select className="rounded-xl border border-input bg-background px-3 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>🇸🇦 +966</option>
                      <option>🇦🇪 +971</option>
                      <option>🇰🇼 +965</option>
                      <option>🇧🇭 +973</option>
                      <option>🇶🇦 +974</option>
                      <option>🇪🇬 +20</option>
                    </select>
                    <input type="tel" required maxLength={20} className={inputClass} placeholder={t("contact.form.phone") + " *"} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.form.address")}</label>
                    <input type="text" maxLength={200} className={inputClass} placeholder={t("contact.form.address")} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.form.service")}</label>
                    <select required className={inputClass}>
                      <option value="">{t("contact.form.service")}</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.form.message")}</label>
                    <textarea rows={3} maxLength={1000} className={`${inputClass} resize-none`} placeholder={t("contact.form.message")} />
                  </div>
                  <Button type="submit" variant="cta" size="lg" className="w-full gap-2 shadow-cta">
                    <Send className="w-4 h-4" /> {t("contact.form.submit")}
                  </Button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-card rounded-3xl p-7 shadow-card">
                <h3 className="font-bold text-foreground mb-5">{t("contact.info.title")}</h3>
                <div className="space-y-4">
                  <div className="space-y-4">
                    <a href="tel:0580706770" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">{t("contact.info.phone")}</div>
                        <div className="font-semibold text-foreground">0580706770</div>
                      </div>
                    </a>
                    <a href="tel:0543650900" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">{t("contact.info.phone")}</div>
                        <div className="font-semibold text-foreground">0543650900</div>
                      </div>
                    </a>
                  </div>
                  <a href="mailto:info@Colors and Shapes.sa" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{t("contact.info.email")}</div>
                      <div className="font-semibold text-foreground">info@Colors and Shapes.sa</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shrink-0 shadow-md">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="font-medium text-foreground">{t("contact.info.address")}</div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shrink-0 shadow-md">
                      <Clock className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="text-sm text-muted-foreground">{t("contact.info.hours")}</div>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/966543650900" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="whatsapp" size="lg" className="w-full gap-2">
                  <MessageCircle className="w-5 h-5" /> {t("hero.cta.whatsapp")}
                </Button>
              </a>

              <div className="bg-card rounded-3xl overflow-hidden shadow-card">
                <div className="relative h-48 overflow-hidden border-b border-border">
                  <img src={shopLocation} alt="Colors and Shapes Shop Location" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white font-bold text-sm drop-shadow-md">
                    {t("contact.info.title")}
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237856.4506987!2d39.0574!3d21.4858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Colors and Shapes Location - Jeddah"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
