import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Translations = Record<string, Record<Lang, string>>;

const translations: Translations = {
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.services": { en: "Services", ar: "خدماتنا" },
  "nav.about": { en: "About Us", ar: "من نحن" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا" },

  "promo.text": { en: "Limited Time — ﷼25 OFF AC Repair", ar: "لفترة محدودة — خصم ﷼25 على إصلاح المكيفات" },
  "promo.cta": { en: "For new customers. Call now!", ar: "للعملاء الجدد. اتصل الآن!" },

  "hero.eyebrow": { en: "Jeddah's #1 Appliance Repair", ar: "الأول في جدة لإصلاح الأجهزة" },
  "hero.title": { en: "Expert Appliance Repair in Jeddah", ar: "خبراء صيانة الأجهزة المنزلية بجدة" },
  "hero.titleAccent": { en: "Same-Day Service", ar: "خدمة في نفس اليوم" },
  "hero.subtitle": { en: "Fast, certified, and guaranteed repair for washing machines, refrigerators, AC units & kitchen appliances — across every neighborhood in Jeddah.", ar: "إصلاح سريع ومعتمد ومضمون للغسالات والثلاجات والمكيفات وأجهزة المطبخ — في جميع أحياء جدة." },
  "hero.cta.call": { en: "Call Now", ar: "اتصل الآن" },
  "hero.cta.whatsapp": { en: "Book via WhatsApp", ar: "احجز عبر واتساب" },
  "hero.cta.book": { en: "Book Service", ar: "احجز موعد الخدمة" },

  "hero.services.title": { en: "Expert Services", ar: "خدمات متخصصة" },
  "hero.services.subtitle": { en: "Choose your appliance repair", ar: "اختر إصلاح جهازك" },
  "hero.about.title": { en: "About Colors and Shapes", ar: "عن Colors and Shapes" },
  "hero.about.subtitle": { en: "15+ years fixing what matters", ar: "أكثر من 15 عاماً نصلح ما يهم" },
  "hero.contact.title": { en: "Get in Touch", ar: "تواصل معنا" },
  "hero.contact.subtitle": { en: "Free quote in minutes", ar: "عرض سعر مجاني خلال دقائق" },

  "services.title": { en: "Our Specialized Services", ar: "خدماتنا المتخصصة" },
  "services.subtitle": { en: "Expert repair for all major home appliances", ar: "إصلاح متخصص لجميع الأجهزة المنزلية الرئيسية" },
  "services.washing.title": { en: "Washing Machine Repair", ar: "إصلاح الغسالات" },
  "services.washing.desc": { en: "Expert diagnosis and repair for all washing machine brands. We fix leaks, drainage issues, spin problems, and electrical faults.", ar: "تشخيص وإصلاح متخصص لجميع ماركات الغسالات. نصلح التسريبات ومشاكل التصريف والدوران والأعطال الكهربائية." },
  "services.washing.issues": { en: "Common issues: Not spinning, water leaks, strange noises, won't drain, error codes", ar: "مشاكل شائعة: لا تدور، تسريب مياه، أصوات غريبة، لا تصرف، رموز أخطاء" },
  "services.fridge.title": { en: "Refrigerator Repair", ar: "إصلاح الثلاجات" },
  "services.fridge.desc": { en: "Professional refrigerator and freezer repair. From temperature issues to compressor problems, we handle it all.", ar: "إصلاح احترافي للثلاجات والمجمدات. من مشاكل الحرارة إلى أعطال الضاغط، نتعامل مع الجميع." },
  "services.fridge.issues": { en: "Common issues: Not cooling, ice buildup, noisy operation, water leaks, thermostat failure", ar: "مشاكل شائعة: لا تبرد، تراكم الثلج، تشغيل صاخب، تسريب مياه، عطل منظم الحرارة" },
  "services.ac.title": { en: "AC Repair & Maintenance", ar: "إصلاح وصيانة المكيفات" },
  "services.ac.desc": { en: "Complete air conditioning repair, maintenance and installation. Gas charging, cleaning, fault diagnosis for all AC types.", ar: "إصلاح وصيانة وتركيب كامل للمكيفات. شحن غاز، تنظيف، فحص الأعطال لجميع أنواع المكيفات." },
  "services.ac.issues": { en: "Common issues: Not cooling, strange smells, water dripping, compressor issues, gas leaks", ar: "مشاكل شائعة: لا يبرد، روائح غريبة، تنقيط ماء، مشاكل ضاغط، تسريب غاز" },
  "services.kitchen.title": { en: "Kitchen Appliance Repair", ar: "إصلاح أجهزة المطبخ" },
  "services.kitchen.desc": { en: "Oven, stove, dishwasher, and microwave repair. We fix all kitchen appliances with precision and care.", ar: "إصلاح الأفران والمواقد وغسالات الصحون والميكروويف. نصلح جميع أجهزة المطبخ بدقة وعناية." },
  "services.kitchen.issues": { en: "Common issues: Not heating, uneven cooking, ignition failure, door problems, electrical issues", ar: "مشاكل شائعة: لا يسخن، طهي غير متساوٍ، فشل الإشعال، مشاكل الباب، مشاكل كهربائية" },
  "services.cta": { en: "Get a Free Quote", ar: "احصل على عرض مجاني" },
  "services.ac.cleaning": { en: "Cleaning & Maintenance", ar: "تنظيف وصيانة" },
  "services.ac.cleaning.desc": { en: "Filter cleaning, internal and external unit maintenance for better performance and energy saving.", ar: "تنظيف الفلاتر والوحدات الداخلية والخارجية لتحسين الأداء وتوفير الطاقة." },
  "services.ac.gas": { en: "Gas Charging & Leak Detection", ar: "شحن غاز وفحص التسريب" },
  "services.ac.gas.desc": { en: "Cooling system inspection, leak detection, and gas recharging to specifications.", ar: "فحص نظام التبريد، كشف التسريبات، وإعادة شحن الغاز وفقًا للمواصفات." },
  "services.ac.electrical": { en: "Electrical & Mechanical Repair", ar: "إصلاح كهربائي وميكانيكي" },
  "services.ac.electrical.desc": { en: "Damaged part replacement, compressor repair, fan and circuit board issues.", ar: "استبدال القطع التالفة، إصلاح الضاغط، ومشاكل المراوح والدارات الكهربائية." },
  "services.ac.install": { en: "New Unit Installation", ar: "تركيب وحدات جديدة" },
  "services.ac.install.desc": { en: "Professional installation with performance tuning and electrical connections.", ar: "تركيب احترافي مع ضبط الأداء والتوصيلات الكهربائية." },

  "why.title": { en: "Why Choose Us", ar: "لماذا تختارنا" },
  "why.subtitle": { en: "We deliver excellence in every repair", ar: "نقدم التميز في كل إصلاح" },
  "why.sameday": { en: "Same Day Service", ar: "خدمة في نفس اليوم" },
  "why.sameday.desc": { en: "We understand urgency. Most repairs are completed within hours of your call.", ar: "نتفهم الاستعجال. معظم الإصلاحات تكتمل خلال ساعات من اتصالك." },
  "why.certified": { en: "Certified Technicians", ar: "فنيون معتمدون" },
  "why.certified.desc": { en: "Our team is trained and certified to handle all major appliance brands.", ar: "فريقنا مدرب ومعتمد للتعامل مع جميع ماركات الأجهزة الرئيسية." },
  "why.affordable": { en: "Affordable Pricing", ar: "أسعار معقولة" },
  "why.affordable.desc": { en: "Transparent pricing with no hidden charges. We provide quotes before starting.", ar: "أسعار شفافة بدون رسوم مخفية. نقدم عروض أسعار قبل البدء." },
  "why.guarantee": { en: "Satisfaction Guarantee", ar: "ضمان الرضا" },
  "why.guarantee.desc": { en: "Your satisfaction is our priority. We guarantee our work with warranty.", ar: "رضاك أولويتنا. نضمن عملنا مع كفالة." },

  "testimonials.title": { en: "What Our Customers Say", ar: "ماذا يقول عملاؤنا" },
  "testimonials.subtitle": { en: "Real reviews from satisfied customers in Jeddah", ar: "تقييمات حقيقية من عملاء راضين في جدة" },

  "brands.title": { en: "Brands We Service", ar: "الماركات التي نخدمها" },
  "brands.subtitle": { en: "We repair all major appliance brands", ar: "نصلح جميع ماركات الأجهزة الرئيسية" },

  "offers.title": { en: "Special Offers", ar: "العروض الخاصة" },
  "offers.1.title": { en: "AC Repair Discount", ar: "خصم على إصلاح المكيف" },
  "offers.1.desc": { en: "For first-time customers.", ar: "للعملاء لأول مرة." },
  "offers.1.value": { en: "﷼25 OFF", ar: "خصم ﷼25" },
  "offers.2.title": { en: "Free Diagnosis with Repair", ar: "فحص مجاني مع الإصلاح" },
  "offers.2.desc": { en: "Service fee waived when you proceed with repair.", ar: "إعفاء من رسوم الخدمة عند متابعة الإصلاح." },
  "offers.2.value": { en: "FREE", ar: "مجاني" },
  "offers.3.title": { en: "Leak Repair Credit", ar: "رصيد لإصلاح التسريبات" },
  "offers.3.desc": { en: "On door gasket or hose replacement.", ar: "على تبديل جراب الباب أو الخراطيم." },
  "offers.3.value": { en: "﷼40 Credit", ar: "رصيد ﷼40" },
  "offers.4.title": { en: "Senior & Military Discount", ar: "خصم لكبار السن والعسكريين" },
  "offers.4.desc": { en: "On qualifying repairs.", ar: "على الإصلاحات المؤهلة." },
  "offers.4.value": { en: "15% OFF", ar: "خصم 15%" },

  "about.title": { en: "About Us", ar: "من نحن" },
  "about.intro": { en: "With over 15 years of experience serving Jeddah, we are the city's most trusted appliance repair service. Our mission is to provide fast, reliable, and affordable repairs that keep your home running smoothly.", ar: "مع أكثر من 15 عاماً من الخبرة في خدمة جدة، نحن أكثر خدمة إصلاح أجهزة موثوقة في المدينة. مهمتنا هي تقديم إصلاحات سريعة وموثوقة وبأسعار معقولة." },
  "about.experience.title": { en: "Experience & Expertise", ar: "الخبرة والتخصص" },
  "about.experience.desc": { en: "Our team of certified technicians brings decades of combined experience. We've successfully completed over 50,000 repairs across Jeddah, handling everything from simple fixes to complex diagnostics.", ar: "يجلب فريقنا من الفنيين المعتمدين عقوداً من الخبرة المشتركة. أكملنا بنجاح أكثر من 50,000 إصلاح في جدة." },
  "about.mission.title": { en: "Our Mission & Values", ar: "مهمتنا وقيمنا" },
  "about.mission.desc": { en: "We believe every home deserves reliable appliances. Our values center around integrity, speed, and customer satisfaction. We use genuine parts and stand behind every repair with a warranty.", ar: "نؤمن بأن كل منزل يستحق أجهزة موثوقة. تتمحور قيمنا حول النزاهة والسرعة ورضا العملاء." },
  "about.technicians.title": { en: "Professional Technicians", ar: "فنيون محترفون" },
  "about.technicians.desc": { en: "Every technician is background-checked, insured, and regularly trained on the latest appliance technologies. They arrive on time, in uniform, with the right tools for the job.", ar: "كل فني خاضع لفحص خلفية ومؤمن عليه ومدرب بانتظام على أحدث تقنيات الأجهزة." },

  "contact.title": { en: "Contact Us", ar: "تواصل معنا" },
  "contact.subtitle": { en: "Get in touch for a free consultation", ar: "تواصل معنا للحصول على استشارة مجانية" },
  "contact.form.name": { en: "Full Name", ar: "الاسم الكامل" },
  "contact.form.phone": { en: "Phone Number", ar: "رقم الجوال" },
  "contact.form.address": { en: "Address", ar: "العنوان" },
  "contact.form.service": { en: "Service Type", ar: "نوع الخدمة" },
  "contact.form.message": { en: "Additional Details", ar: "تفاصيل إضافية" },
  "contact.form.submit": { en: "Get Free Quote", ar: "احصل على عرض سعر مجاني" },
  "contact.form.success": { en: "Message sent successfully! We'll contact you soon.", ar: "تم إرسال الرسالة بنجاح! سنتواصل معك قريباً." },
  "contact.form.heading": { en: "Get a Free Quote", ar: "احصل على عرض سعر مجاني" },
  "contact.form.subheading": { en: "Book your repair today and get a free diagnosis!", ar: "احجز خدمة الإصلاح اليوم واحصل على فحص مجاني!" },
  "contact.info.title": { en: "Get In Touch", ar: "تواصل معنا" },
  "contact.info.phone": { en: "Phone", ar: "الهاتف" },
  "contact.info.email": { en: "Email", ar: "البريد الإلكتروني" },
  "contact.info.address": { en: "JDBB5152, 5152 Yahya Al-Muallimi St, Jeddah, 23535, SA", ar: "JDBB5152، 5152 شارع يحيى المعلمي، جدة، 23535، SA" },
  "contact.info.hours": { en: "Working Hours: 8AM - 10PM, 7 days a week", ar: "ساعات العمل: 8 صباحاً - 10 مساءً، 7 أيام في الأسبوع" },
  "contact.cta.title": { en: "Call Now for Instant Service!", ar: "اتصل الآن للحصول على خدمة فورية!" },
  "contact.cta.or": { en: "or", ar: "أو" },
  "contact.cta.book": { en: "Book Online", ar: "احجز عبر الإنترنت" },

  "coverage.title": { en: "We Serve All Jeddah Neighborhoods", ar: "نخدم جميع أحياء جدة" },
  "coverage.desc": { en: "We serve all neighborhoods across Jeddah including:", ar: "نخدم جميع أحياء جدة بما في ذلك:" },

  "footer.description": { en: "Your trusted partner for home appliance repair in Jeddah. Fast, reliable, and affordable service.", ar: "شريكك الموثوق لإصلاح الأجهزة المنزلية في جدة. خدمة سريعة وموثوقة وبأسعار معقولة." },
  "footer.quicklinks": { en: "Quick Links", ar: "روابط سريعة" },
  "footer.contact": { en: "Contact Info", ar: "معلومات التواصل" },
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },

  "cta.ready": { en: "Ready to Fix Your Appliance?", ar: "مستعد لإصلاح جهازك؟" },
  "cta.desc": { en: "Contact us now for fast, same-day service in Jeddah", ar: "تواصل معنا الآن للحصول على خدمة سريعة في نفس اليوم في جدة" },
  "cta.click": { en: "Click to Book or Call Now", ar: "انقر للحجز أو اتصل الآن" },

  "stats.repairs": { en: "50,000+", ar: "+50,000" },
  "stats.repairs.label": { en: "Repairs Completed", ar: "إصلاح مكتمل" },
  "stats.years": { en: "15+", ar: "+15" },
  "stats.years.label": { en: "Years Experience", ar: "سنة خبرة" },
  "stats.rating": { en: "4.9/5", ar: "4.9/5" },
  "stats.rating.label": { en: "Customer Rating", ar: "تقييم العملاء" },
  "stats.technicians": { en: "40+", ar: "+40" },
  "stats.technicians.label": { en: "Expert Technicians", ar: "فني متخصص" },

  "experience.badge.residential": { en: "Residential", ar: "سكني" },
  "experience.badge.commercial": { en: "Commercial", ar: "تجاري" },
  "experience.badge.allbrands": { en: "All Brands", ar: "جميع الماركات" },
  "experience.badge.emergency": { en: "Emergency Service", ar: "خدمة طارئة" },
  "experience.years": { en: "Over 15 Years of Excellence in Appliance Repair", ar: "أكثر من 15 سنة من التميز في إصلاح الأجهزة" },

  "trust.warranty": { en: "90-day warranty", ar: "ضمان 90 يوم" },
  "trust.fast": { en: "Same-day arrival", ar: "وصول في نفس اليوم" },
  "trust.licensed": { en: "Licensed & insured", ar: "مرخص ومؤمن" },
};

interface I18nContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
  dir: "ltr",
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = useCallback((key: string) => translations[key]?.[lang] ?? key, [lang]);

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return <I18nContext.Provider value={{ lang, setLang, t, dir }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
