import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Wrench, Facebook, Twitter, Instagram } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import logoNew from "@/assets/logo-new.jpg";

export function Footer() {
  const { t, dir } = useI18n();

  return (
    <footer className="relative bg-section-dark text-section-dark-foreground overflow-hidden" dir={dir}>
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-cta">
                <img src={logoNew} alt="Colors and Shapes Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-extrabold text-lg">Colors and Shapes</div>
                <div className="text-[11px] text-section-dark-foreground/60">Jeddah Appliance Repair</div>
              </div>
            </div>
            <p className="text-section-dark-foreground/70 text-sm leading-relaxed">{t("footer.description")}</p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta hover:text-cta-foreground transition-colors" aria-label="social">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-cta">{t("footer.quicklinks")}</h3>
            <div className="space-y-2.5">
              <Link to="/" className="block text-sm text-section-dark-foreground/70 hover:text-section-dark-foreground transition-colors">{t("nav.home")}</Link>
              <Link to="/services" className="block text-sm text-section-dark-foreground/70 hover:text-section-dark-foreground transition-colors">{t("nav.services")}</Link>
              <Link to="/about" className="block text-sm text-section-dark-foreground/70 hover:text-section-dark-foreground transition-colors">{t("nav.about")}</Link>
              <Link to="/contact" className="block text-sm text-section-dark-foreground/70 hover:text-section-dark-foreground transition-colors">{t("nav.contact")}</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-cta">{t("footer.contact")}</h3>
            <div className="space-y-3">
              <div className="space-y-3">
                <a href="tel:0543650900" className="flex items-center gap-2.5 text-sm text-section-dark-foreground/70 hover:text-section-dark-foreground transition-colors">
                  <Phone className="w-4 h-4 shrink-0" /> 0543650900
                </a>
              </div>
              <a href="mailto:info@Colors and Shapes.sa" className="flex items-center gap-2.5 text-sm text-section-dark-foreground/70 hover:text-section-dark-foreground transition-colors">
                <Mail className="w-4 h-4 shrink-0" /> info@Colors and Shapes.sa
              </a>
              <div className="flex items-center gap-2.5 text-sm text-section-dark-foreground/70">
                <MapPin className="w-4 h-4 shrink-0" /> {t("contact.info.address")}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-section-dark-foreground/50">
          © {new Date().getFullYear()} Colors and Shapes. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
