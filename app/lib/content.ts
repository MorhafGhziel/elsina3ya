/**
 * Single source of truth for every string on the site.
 * Sections import from here; no copy lives inside components.
 */

export const site = {
  name: "الصناعية",
  latin: "ALSINAIYAH",
  /** The descriptor that sits under the wordmark in the identity manual. */
  descriptor: "بيت صنّاع المحتوى",
  /** The Latin endline from the identity manual. */
  endline: "MADE WITH IMPACT",
  year: "2026",
  tagline: "شغل وكالة، مو شغل نص كم",
  description:
    "وكالة سعودية تجمع صنّاع المحتوى في ورشة واحدة، تنظّم حضورهم الرقمي، وتربطهم بالعلامات التجارية المناسبة.",
  url: "https://snaya.sa",
} as const;

export const contact = {
  email: "Info@snaya.sa",
  phoneDisplay: "+966 55 036 6160",
  phoneDial: "+966550366160",
  whatsapp: "966550366160",
  city: "الرياض",
  country: "المملكة العربية السعودية",
  instagram: "https://www.instagram.com/alsnaya_sa",
  x: "https://x.com/alsnaya_sa?s=21",
  linkedin: "https://www.linkedin.com/company/alsnaya%D9%80sa/",
} as const;

export const nav = [
  { id: "hero", label: "الرئيسية", index: "00" },
  { id: "about", label: "من نحن", index: "01" },
  { id: "vision", label: "الرؤية", index: "02" },
  { id: "process", label: "كيف نشتغل", index: "03" },
  { id: "services", label: "الخدمات", index: "04" },
  { id: "offer", label: "وش تستفيد", index: "05" },
  { id: "values", label: "القيم", index: "06" },
  { id: "contact", label: "تواصل", index: "07" },
] as const;

export const hero = {
  eyebrow: "صنّاع الأثر في العالم الرقمي",
  lines: ["نرتّب", "ظهورك", "ونصنع", "تأثيرك"],
  accentLine: 3,
  body: "نجمع صنّاع المحتوى والمؤثرين في ورشة احترافية واحدة، ننظّم حضورهم الرقمي، ونربطهم بالعلامات التجارية المناسبة؛ لصناعة تأثير حقيقي ومستدام.",
  primaryCta: "ابدأ معنا",
  secondaryCta: "شوف الخدمات",
  spec: [
    { k: "TALENT", v: "إدارة مواهب" },
    { k: "CONTENT", v: "إنتاج محتوى" },
    { k: "BRANDS", v: "شراكات تجارية" },
  ],
} as const;

export const ticker = ["نصقل الموهبة", "نصنع الأثر", "نوصل النقاط"] as const;

export const about = {
  index: "01",
  kicker: "من نحن",
  latin: "WHO WE ARE",
  headline: "وكالة تشتغل على الموهبة، مو على الصدفة",
  body: "في الصناعية، نصنع كل ما تحتاجه العلامة التجارية لبناء حضورها. من الاستراتيجية، إلى المحتوى، إلى الحملات والشراكات، نوحّد كل العناصر في منظومة واحدة تصنع أثرًا يدوم.",
  quote:
    "التأثير الحقيقي لا يُصنع بالظهور العشوائي، بل بالتخطيط المدروس والشراكات الاستراتيجية",
  stats: [
    { value: 100, suffix: "+", label: "علامة وصانع محتوى" },
    { value: 52, suffix: "", label: "محتوى سنوي للباقة الكاملة" },
    { value: 24, suffix: "/7", label: "منسق أعمال خاص" },
  ],
} as const;

/** The three safety pictograms from the brand key visual. */
export const pictograms = [
  { id: "warning", label: "تنظيم", latin: "ORDER" },
  { id: "umbrella", label: "إبداع", latin: "CRAFT" },
  { id: "flame", label: "شغف", latin: "DRIVE" },
] as const;

export const vision = {
  index: "02",
  kicker: "الرؤية",
  latin: "VISION",
  headline: "أن نكون الوجهة الأولى لصناعة الأثر الرقمي",
  body: "نسعى لصناعة أثر رقمي يدوم، من خلال بناء شراكات ذكية، وصناعة حملات ومحتوى يحقق نتائج حقيقية للعلامات التجارية.",
  pillars: [
    {
      index: "I",
      title: "صناعة الأثر",
      body: "نحوّل الأفكار إلى حملات تترك أثرًا حقيقيًا.",
    },
    {
      index: "II",
      title: "بناء الشراكات",
      body: "نجمع العلامات التجارية بالشركاء المناسبين لتحقيق أفضل النتائج.",
    },
    {
      index: "III",
      title: "إدارة التعاونات",
      body: "تحويل كل تعاون إلى قصة نجاح ملهمة وقابلة للقياس.",
    },
  ],
} as const;

export const process = {
  index: "03",
  kicker: "كيف نشتغل",
  latin: "THE METHOD",
  headline: "ثلاث مراحل، بدون ارتجال",
  steps: [
    {
      no: "01",
      title: "تشغيل المواهب",
      body: "نستقطب صنّاع المحتوى ونمكّنهم داخل منظومة واضحة واحترافية، من العقد إلى خطة النشر.",
    },
    {
      no: "02",
      title: "صناعة الحضور الرقمي",
      body: "نبني الهوية، ونطوّر المحتوى، وننتج أصولاً رقمية تعكس قيمة كل موهبة وعلامة.",
    },
    {
      no: "03",
      title: "شراكات استراتيجية",
      body: "نوصل العلامات التجارية بالشركاء الأنسب، ونبني تعاونات تحقق نتائج قابلة للقياس وأثراً يدوم.",
    },
  ],
} as const;

export const services = {
  index: "04",
  kicker: "الخدمات",
  latin: "SERVICES",
  headline: "وش نسوّي بالضبط",
  items: [
    {
      no: "01",
      title: "إدارة التعاونات",
      body: "إدارة كاملة للحساب والعلاقات والجدول، بحيث يتفرّغ المؤثر للإبداع فقط.",
    },
    {
      no: "02",
      title: "التسويق عبر المؤثرين",
      body: "حملات مبنية على مطابقة القصة بين المؤثر والعلامة، لا على أرقام المتابعين وحدها.",
    },
    {
      no: "03",
      title: "صناعة الحملات الرقمية",
      body: "من الفكرة إلى التنفيذ إلى التوزيع، بمعايير إنتاج احترافية.",
    },
    {
      no: "04",
      title: "ربط العلامة بالمؤثر المناسب",
      body: "اختيار مبني على الجمهور والقيم والهوية، وليس على الترند المؤقت.",
    },
    {
      no: "05",
      title: "بناء الهوية الرقمية",
      body: "دليل هوية، أسلوب بصري، ونبرة صوت ثابتة عبر كل المنصات.",
    },
    {
      no: "06",
      title: "تقارير أداء",
      body: "قياس دوري واضح: وش اشتغل، وش ما اشتغل، ووش الخطوة الجاية.",
    },
  ],
} as const;

export const offer = {
  index: "05",
  kicker: "وش تستفيد",
  latin: "WHAT YOU GET",
  headline: "طرفان، منفعة واحدة",
  tracks: [
    {
      id: "creators",
      tab: "للمؤثرين",
      latin: "FOR CREATORS",
      promise: "نمو مهني + دخل أعلى + إدارة كاملة",
      highlights: [
        "تحويل المؤثر من فرد يعمل وحده إلى كيان إعلامي مُدار باحتراف",
        "تقديم محتوى احترافي بجودة شركات الإنتاج الكبيرة",
      ],
      items: [
        "إدارة حسابات يومية",
        "تحليل أداء المحتوى أسبوعيًا",
        "بناء الهوية + Guidelines",
        "إعداد خطة محتوى شهرية",
        "بناء بروفايل وإدارة علاقات العلامات التجارية",
        "إدارة الحملات الإعلانية",
        "التفاوض على العقود",
        "إدارة الدخل والمصروفات",
        "منسق أعمال خاص",
        "تطوير مهارات التقديم والتصوير",
        "إنتاج محتوى احترافي عبر شريك الإنتاج",
      ],
    },
    {
      id: "brands",
      tab: "للعلامات التجارية",
      latin: "FOR BRANDS",
      promise: "استدامة المحتوى + وجوه ثابتة + محتوى قابل للاستخدام",
      highlights: [
        "استدامة المحتوى بدلاً من التغطيات المؤقتة",
        "مؤثر واحد أو عدة مؤثرين كوجوه ثابتة للعلامة",
        "محتوى قابل للاستخدام في الإعلانات والديجيتال ماركتنق على مدار السنة",
      ],
      items: [
        "إدارة افتتاحات وتدشين مشاريع بطرق مبتكرة",
        "بناء سكتشات قصيرة تمثل العلامة التجارية",
        "إنتاج محتوى سينمائي قصير",
        "اختيار المؤثر المناسب وخلق Story Match",
        "إدارة العقود السنوية للعلامات التجارية",
        "إنتاج (12 – 52) محتوى سنوي حسب الباقة",
        "توزيع المحتوى على منصات السوشيال",
        "تحليل الأداء شهريًا",
      ],
    },
  ],
} as const;

export const values = {
  index: "06",
  kicker: "القيم",
  latin: "VALUES",
  headline: "خمس قواعد ما نتنازل عنها",
  items: [
    {
      no: "01",
      title: "الإبداع",
      body: "نبتكر أفكارًا أصلية تواكب ثقافة اليوم، وتتماهى مع هوية العلامات التجارية بأسلوب ذكي وغير تقليدي.",
    },
    {
      no: "02",
      title: "التأثير",
      body: "نحوّل التواجد الرقمي إلى نمو وتأثير حقيقي قابل للقياس.",
    },
    {
      no: "03",
      title: "الموثوقية",
      body: "نلتزم بعقود واضحة، ونقدّم تقارير دورية تبني الثقة طويلة المدى مع شركائنا.",
    },
    {
      no: "04",
      title: "الانتماء",
      body: "نصنع مجتمعًا متكاملاً يضم المواهب والعلامات التجارية لننمو معًا على المدى الطويل.",
    },
    {
      no: "05",
      title: "التعاون",
      body: "نربط الشركات بالمؤثر المناسب، ونبقي الجميع على مسار واحد لتحقيق الأهداف.",
    },
  ],
} as const;

export const roster = {
  kicker: "وجوه من الورشة",
  latin: "THE ROSTER",
  faces: [
    { name: "أبو عمر", role: "Host & Content Creator", image: "/images/person/person-1.jpg" },
    { name: "بندر", role: "Digital Influencer", image: "/images/person/person-2.jpg" },
    { name: "للي", role: "Lifestyle Creator", image: "/images/person/person-3.jpg" },
    { name: "أودين", role: "Media Personality", image: "/images/person/person-4.jpg" },
  ],
} as const;

export const contactSection = {
  index: "07",
  kicker: "تواصل",
  latin: "GET IN TOUCH",
  headline: "جاهز تبدأ؟",
  body: "احكِ لنا عن مشروعك أو حسابك، ونرجع لك بخطة واضحة خلال يومين عمل.",
  form: {
    name: { label: "الاسم", placeholder: "اسمك الكامل" },
    email: { label: "البريد الإلكتروني", placeholder: "you@example.com" },
    phone: { label: "رقم الجوال", hint: "اختياري", placeholder: "05X XXX XXXX" },
    message: { label: "الرسالة", placeholder: "وش اللي تبي تسويه؟" },
    submit: "أرسل الطلب",
    sending: "جاري الإرسال…",
    success: "وصلتنا رسالتك. نرجع لك قريب.",
  },
} as const;

export const footer = {
  wordmark: "الصناعية",
  blurb: "صنّاع الأثر في العالم الرقمي. نرتّب ظهورك، ونصنع تأثيرك.",
  columns: [
    {
      title: "الوكالة",
      links: [
        { label: "من نحن", href: "#about" },
        { label: "الرؤية", href: "#vision" },
        { label: "كيف نشتغل", href: "#process" },
        { label: "القيم", href: "#values" },
      ],
    },
    {
      title: "الخدمات",
      links: [
        { label: "إدارة المؤثرين", href: "#services" },
        { label: "التسويق عبر المؤثرين", href: "#services" },
        { label: "إنتاج المحتوى", href: "#services" },
        { label: "تقارير الأداء", href: "#services" },
      ],
    },
  ],
  builtBy: { label: "INNO", href: "https://www.inno.sa/" },
} as const;
