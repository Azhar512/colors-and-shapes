import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Phone, Menu, X, Globe, Wrench } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PromoBanner() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="bg-gradient-cta text-promo-foreground text-center py-2.5 px-4 text-sm font-medium relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <span className="relative">{t("promo.text")}</span>
      <span className="mx-2 relative">·</span>
      <span className="opacity-90 relative">{t("promo.cta")}</span>
      <button onClick={() => setVisible(false)} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100" aria-label="Dismiss">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export function Header() {
  const { t, lang, setLang, dir } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/services", label: t("nav.services") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <>
      <PromoBanner />
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled ? "bg-card/85 backdrop-blur-xl border-b border-border shadow-sm" : "bg-card/60 backdrop-blur-md border-b border-transparent",
        )}
        dir={dir}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md group-hover:shadow-glow transition-shadow">
                <img src="/logo.png" alt="Colors and Shapes Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-foreground tracking-tight leading-tight">Colors and Shapes</span>
                <span className="text-[10px] text-muted-foreground leading-tight font-medium">{lang === "ar" ? "إصلاح الأجهزة" : "Appliance Repair"}</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end
                  className={({ isActive }) =>
                    cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors relative",
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-accent",
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cta" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setLang(lang === "en" ? "ar" : "en")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                <Globe className="w-4 h-4" />
                {lang === "en" ? "العربية" : "English"}
              </button>

              <a href="tel:0580706770" className="hidden sm:inline-flex">
                <Button variant="cta" size="sm" className="gap-1.5 shadow-cta">
                  <Phone className="w-3.5 h-3.5" />
                  {t("hero.cta.call")}
                </Button>
              </a>

              <button
                className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-xl animate-fade-in">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end
                  className={({ isActive }) =>
                    cn(
                      "block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      isActive ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground hover:bg-accent",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a href="tel:0580706770" className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-cta">
                <Phone className="w-4 h-4 inline mr-2" />
                0580706770 / 0543650900
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
