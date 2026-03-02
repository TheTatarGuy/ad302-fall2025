export type Language = "en" | "tr" | "ru";

type NavLabels = {
  about: string;
  services: string;
  testimonials: string;
  contact: string;
};

type StatItem = {
  value: string;
  label: string;
};

type CardCopy = {
  title: string;
  short: string;
  long: string;
};

type ServiceItem = {
  title: string;
  description: string;
  duration: string;
  price: string;
};

type TestimonialItem = {
  name: string;
  text: string;
  rating: number;
};

type SiteContent = {
  header: {
    brandLong: string;
    brandShort: string;
    nav: NavLabels;
    cta: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    descriptionShort: string;
    descriptionLong: string;
    primaryCtaLong: string;
    primaryCtaShort: string;
    secondaryCta: string;
    stats: StatItem[];
    imageAlt: string;
  };
  about: {
    title: string;
    introShort: string;
    introLong: string;
    cards: [CardCopy, CardCopy, CardCopy];
    journeyTitle: string;
    journeyParagraphs: [string, string];
  };
  services: {
    title: string;
    introShort: string;
    introLong: string;
    items: [ServiceItem, ServiceItem, ServiceItem, ServiceItem];
    firstConsultationTitle: string;
    firstConsultationSubtitle: string;
    ctaLong: string;
    ctaShort: string;
  };
  testimonials: {
    title: string;
    introShort: string;
    introLong: string;
    items: [
      TestimonialItem,
      TestimonialItem,
      TestimonialItem,
      TestimonialItem,
      TestimonialItem,
      TestimonialItem,
    ];
    stats: StatItem[];
  };
  contact: {
    title: string;
    introShort: string;
    introLong: string;
    info: {
      phoneLabel: string;
      phoneValue: string;
      phoneShort: string;
      phoneLong: string;
      emailLabel: string;
      emailValue: string;
      addressLabel: string;
      addressValue: string;
      addressNote: string;
    };
    channels: {
      whatsapp: string;
      telegram: string;
    };
    form: {
      title: string;
      subtitleShort: string;
      subtitleLong: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      noteShort: string;
      noteLong: string;
    };
    toast: {
      title: string;
      description: string;
    };
  };
  footer: {
    brand: string;
    description: string;
    contactsTitle: string;
    servicesTitle: string;
    contacts: {
      phone: string;
      email: string;
      address: string;
    };
    services: [string, string, string, string];
    madeWith: string;
    madeWithTail: string;
    copyright: string;
  };
  notFound: {
    title: string;
    message: string;
    action: string;
  };
};

export const defaultLanguage: Language = "en";

export const content: Record<Language, SiteContent> = {
  en: {
    header: {
      brandLong: "Psychologist Dr. Emma Johnson",
      brandShort: "Emma Johnson",
      nav: {
        about: "About",
        services: "Services",
        testimonials: "Testimonials",
        contact: "Contact",
      },
      cta: "Book a Session",
    },
    hero: {
      titleLine1: "Professional",
      titleLine2: "psychological support",
      descriptionShort:
        "Individual and family therapy. I help you get through crises.",
      descriptionLong:
        "Individual and family therapy. I help you find inner resources, overcome crises, and build healthy relationships.",
      primaryCtaLong: "Book a consultation",
      primaryCtaShort: "Book",
      secondaryCta: "Learn more",
      stats: [
        { value: "10+", label: "years experience" },
        { value: "500+", label: "clients" },
        { value: "95%", label: "positive reviews" },
      ],
      imageAlt: "Psychologist Dr. Emma Johnson",
    },
    about: {
      title: "About",
      introShort:
        "Psychologist with 10 years of experience. Individual and family therapy.",
      introLong:
        "Psychologist with 10 years of experience. I specialize in individual and family therapy, crisis support, and personal growth.",
      cards: [
        {
          title: "Education",
          short: "Columbia University, Psychology",
          long: "Columbia University, Department of Psychology. Advanced training in family therapy and crisis counseling.",
        },
        {
          title: "Approach",
          short: "Humanistic approach, non-judgmental acceptance",
          long: "I use a humanistic and integrative approach, creating a safe space built on trust, empathy, and non-judgmental acceptance.",
        },
        {
          title: "Experience",
          short: "Over 500 successful cases",
          long: "Over 500 successful cases. I work with anxiety, depression, family conflict, burnout, and personal growth.",
        },
      ],
      journeyTitle: "My path in psychology",
      journeyParagraphs: [
        "My professional journey began with a deep desire to help people reconnect with their inner strength and move through difficult life periods with support.",
        "In my practice, I use an integrative approach, combining evidence-based methods depending on each client's needs and goals.",
      ],
    },
    services: {
      title: "Services",
      introShort: "Psychological support for people of all ages",
      introLong:
        "I offer comprehensive psychological support for people of all ages. Each session is tailored to your individual needs.",
      items: [
        {
          title: "Individual therapy",
          description:
            "Work with anxiety, depression, self-esteem, and personal growth",
          duration: "60 minutes",
          price: "from $80",
        },
        {
          title: "Family therapy",
          description:
            "Resolving family conflicts, improving relationships, and working with couples",
          duration: "90 minutes",
          price: "from $150",
        },
        {
          title: "Crisis therapy",
          description:
            "Support in acute crisis situations and during grief or major life changes",
          duration: "60 minutes",
          price: "from $90",
        },
        {
          title: "Work with children",
          description:
            "Child psychology, adaptation, emotional support, and behavioral issues",
          duration: "45 minutes",
          price: "from $65",
        },
      ],
      firstConsultationTitle: "First consultation",
      firstConsultationSubtitle: "Free (30 minutes)",
      ctaLong: "Book a free consultation",
      ctaShort: "Free consultation",
    },
    testimonials: {
      title: "Testimonials",
      introShort: "What my clients say",
      introLong:
        "Thoughts from people I helped find their way to inner balance",
      items: [
        {
          name: "Sarah M.",
          text: "Dr. Emma Johnson helped me through one of the hardest periods of my life. Her calm presence and professional support gave me the strength to move forward.",
          rating: 5,
        },
        {
          name: "Michael T.",
          text: "Family therapy with Emma completely changed the way we communicate at home. We learned to hear each other and rebuild trust.",
          rating: 5,
        },
        {
          name: "Jessica R.",
          text: "Working on my anxiety with Emma brought amazing results. I finally feel calmer, more confident, and more in control of my life.",
          rating: 5,
        },
        {
          name: "Daniel P.",
          text: "My daughter became much more confident after several sessions. Emma found the right approach and helped her adjust to school challenges.",
          rating: 5,
        },
        {
          name: "Olivia W.",
          text: "Individual therapy helped me understand myself and my relationships better. Emma is thoughtful, kind, and incredibly professional.",
          rating: 5,
        },
        {
          name: "James L.",
          text: "I came for crisis support during a very painful loss. Emma helped me process my emotions and slowly find solid ground again.",
          rating: 5,
        },
      ],
      stats: [
        { value: "98%", label: "satisfied clients" },
        { value: "4.9", label: "average rating" },
        { value: "120+", label: "reviews" },
      ],
    },
    contact: {
      title: "Contact",
      introShort: "Reach out in a way that is convenient for you",
      introLong:
        "I'm ready to support you on the way to inner balance. Reach out in a way that is convenient for you.",
      info: {
        phoneLabel: "Phone",
        phoneValue: "+1 (212) 555-0187",
        phoneShort: "9:00 AM–8:00 PM daily",
        phoneLong: "Available daily from 9:00 AM to 8:00 PM",
        emailLabel: "Email",
        emailValue: "emma.johnson@psychology.com",
        addressLabel: "Address",
        addressValue: "New York, 245 Madison Ave",
        addressNote: "Office visits by appointment only",
      },
      channels: {
        whatsapp: "WhatsApp",
        telegram: "Telegram",
      },
      form: {
        title: "Book a session",
        subtitleShort: "Fill out the form to book",
        subtitleLong:
          "Fill out the form and I will contact you to confirm the details",
        nameLabel: "Name *",
        namePlaceholder: "Your name",
        emailLabel: "Email *",
        emailPlaceholder: "your@email.com",
        phoneLabel: "Phone",
        phonePlaceholder: "+1 (___) ___-____",
        messageLabel: "Message",
        messagePlaceholder: "Describe your situation...",
        submit: "Send request",
        noteShort: "* First consultation (30 min) is free",
        noteLong:
          "* First consultation (30 minutes) is free. Confidentiality guaranteed.",
      },
      toast: {
        title: "Request sent!",
        description: "I will contact you shortly to schedule a consultation.",
      },
    },
    footer: {
      brand: "Psychologist Dr. Emma Johnson",
      description:
        "Professional psychological support. Individual and family therapy in New York.",
      contactsTitle: "Contacts",
      servicesTitle: "Services",
      contacts: {
        phone: "+1 (212) 555-0187",
        email: "emma.johnson@psychology.com",
        address: "New York, 245 Madison Ave",
      },
      services: [
        "Individual therapy",
        "Family therapy",
        "Crisis support",
        "Child psychology",
      ],
      madeWith: "Made with care",
      madeWithTail: "to help people",
      copyright: "© 2024 Dr. Emma Johnson. All rights reserved.",
    },
    notFound: {
      title: "404",
      message: "Oops! Page not found",
      action: "Return to Home",
    },
  },
  tr: {
    header: {
      brandLong: "Uzman Psikolog Dr. Elif Yılmaz",
      brandShort: "Dr. Elif Yılmaz",
      nav: {
        about: "Hakkımda",
        services: "Hizmetler",
        testimonials: "Yorumlar",
        contact: "İletişim",
      },
      cta: "Randevu Al",
    },
    hero: {
      titleLine1: "Profesyonel",
      titleLine2: "psikolojik destek",
      descriptionShort:
        "Bireysel ve aile terapisi. Krizleri aşmanıza yardımcı oluyorum.",
      descriptionLong:
        "Bireysel ve aile terapisi. İçsel kaynaklarınızı keşfetmenize, krizleri aşmanıza ve daha sağlıklı ilişkiler kurmanıza destek oluyorum.",
      primaryCtaLong: "Danışmanlık randevusu al",
      primaryCtaShort: "Randevu al",
      secondaryCta: "Daha fazla bilgi",
      stats: [
        { value: "10+", label: "yıl deneyim" },
        { value: "500+", label: "danışan" },
        { value: "95%", label: "olumlu yorum" },
      ],
      imageAlt: "Uzman Psikolog Dr. Elif Yılmaz",
    },
    about: {
      title: "Hakkımda",
      introShort:
        "10 yıllık deneyime sahip psikolog. Bireysel ve aile terapisi.",
      introLong:
        "10 yıllık deneyime sahip bir psikoloğum. Bireysel ve aile terapisi, kriz desteği ve kişisel gelişim alanlarında uzman olarak çalışıyorum.",
      cards: [
        {
          title: "Eğitim",
          short: "Boğaziçi Üniversitesi, Psikoloji",
          long: "Boğaziçi Üniversitesi Psikoloji Bölümü mezunuyum. Aile terapisi ve kriz danışmanlığı alanlarında ileri düzey eğitimler aldım.",
        },
        {
          title: "Yaklaşım",
          short: "İnsancıl yaklaşım, yargısız kabul",
          long: "İnsancıl ve bütüncül bir yaklaşımla çalışırım. Güven, empati ve yargısız kabul benim için terapinin temelidir.",
        },
        {
          title: "Deneyim",
          short: "500'den fazla başarılı danışan süreci",
          long: "500'den fazla başarılı danışan süreci. Kaygı, depresyon, aile içi çatışmalar, tükenmişlik ve kişisel gelişim alanlarında çalışıyorum.",
        },
      ],
      journeyTitle: "Psikolojide yolculuğum",
      journeyParagraphs: [
        "Mesleki yolculuğum, insanların yaşamın zor dönemlerinde kendi iç güçlerini fark etmelerine yardımcı olma isteğiyle başladı.",
        "Seanslarımda, danışanın ihtiyacına göre farklı terapi yöntemlerini bir araya getiren bütüncül bir yaklaşım kullanıyorum.",
      ],
    },
    services: {
      title: "Hizmetler",
      introShort: "Her yaştan birey için psikolojik destek",
      introLong:
        "Her yaştan birey için kapsamlı psikolojik destek sunuyorum. Her seans, ihtiyaçlarınıza ve yaşam koşullarınıza göre kişiselleştirilir.",
      items: [
        {
          title: "Bireysel terapi",
          description:
            "Kaygı, depresyon, özgüven ve kişisel gelişim üzerine çalışma",
          duration: "60 dakika",
          price: "₺2.500'den başlayan fiyatlarla",
        },
        {
          title: "Aile terapisi",
          description:
            "Aile içi çatışmaları çözme, ilişkileri güçlendirme ve çiftlerle çalışma",
          duration: "90 dakika",
          price: "₺4.500'den başlayan fiyatlarla",
        },
        {
          title: "Kriz terapisi",
          description:
            "Ani kriz durumlarında destek, kayıp ve zor yaşam dönemlerinde yardım",
          duration: "60 dakika",
          price: "₺3.000'den başlayan fiyatlarla",
        },
        {
          title: "Çocuklarla çalışma",
          description:
            "Çocuk psikolojisi, uyum süreci, duygusal destek ve davranış sorunları",
          duration: "45 dakika",
          price: "₺2.000'den başlayan fiyatlarla",
        },
      ],
      firstConsultationTitle: "İlk görüşme",
      firstConsultationSubtitle: "Ücretsiz (30 dakika)",
      ctaLong: "Ücretsiz ön görüşme için randevu al",
      ctaShort: "Ücretsiz görüşme",
    },
    testimonials: {
      title: "Yorumlar",
      introShort: "Danışanlarım ne söylüyor?",
      introLong:
        "İçsel dengeye ulaşmalarına destek olduğum danışanlarımın görüşleri",
      items: [
        {
          name: "Ayşe K.",
          text: "Dr. Elif Yılmaz hayatımın en zor dönemlerinden birinde bana gerçekten destek oldu. Seanslar sayesinde kendimi daha güçlü ve daha dengeli hissetmeye başladım.",
          rating: 5,
        },
        {
          name: "Mehmet T.",
          text: "Eşimle birlikte katıldığımız aile terapisi ilişkimize çok iyi geldi. Birbirimizi dinlemeyi ve daha sağlıklı iletişim kurmayı öğrendik.",
          rating: 5,
        },
        {
          name: "Zeynep A.",
          text: "Kaygı problemlerim için başladığım terapi süreci tahmin ettiğimden çok daha iyi geçti. Elif Hanım güven veren ve çok dikkatli bir uzman.",
          rating: 5,
        },
        {
          name: "Murat D.",
          text: "Oğlumun okul sürecindeki zorlukları için destek aldık. Çok kısa sürede çocuğuma uygun bir iletişim kurdu ve olumlu değişimler gördük.",
          rating: 5,
        },
        {
          name: "Elif S.",
          text: "Bireysel terapi sayesinde hem kendimi hem de ilişkilerimi daha iyi anlamaya başladım. Seanslar benim için çok dönüştürücü oldu.",
          rating: 5,
        },
        {
          name: "Can Y.",
          text: "Zor bir kayıp sürecinde aldığım kriz desteği benim için çok kıymetliydi. Kendimi ilk kez gerçekten anlaşılmış hissettim.",
          rating: 5,
        },
      ],
      stats: [
        { value: "98%", label: "memnuniyet" },
        { value: "4.9", label: "ortalama puan" },
        { value: "120+", label: "yorum" },
      ],
    },
    contact: {
      title: "İletişim",
      introShort: "Size en uygun yoldan iletişime geçin",
      introLong:
        "İç huzura giden yolda size destek olmaya hazırım. Bana size en uygun yoldan ulaşabilirsiniz.",
      info: {
        phoneLabel: "Telefon",
        phoneValue: "+90 (212) 555 12 34",
        phoneShort: "Her gün 09:00–20:00",
        phoneLong: "Her gün 09:00 ile 20:00 saatleri arasında ulaşabilirsiniz",
        emailLabel: "E-posta",
        emailValue: "elif.yilmaz@psikoloji.com.tr",
        addressLabel: "Adres",
        addressValue: "İstanbul, Bağdat Caddesi No: 120, Kadıköy",
        addressNote: "Görüşmeler randevu ile yapılmaktadır",
      },
      channels: {
        whatsapp: "WhatsApp",
        telegram: "Telegram",
      },
      form: {
        title: "Randevu al",
        subtitleShort: "Randevu için formu doldurun",
        subtitleLong:
          "Formu doldurun, detayları netleştirmek için en kısa sürede sizinle iletişime geçeyim",
        nameLabel: "Ad Soyad *",
        namePlaceholder: "Adınız ve soyadınız",
        emailLabel: "E-posta *",
        emailPlaceholder: "ornek@email.com",
        phoneLabel: "Telefon",
        phonePlaceholder: "+90 (5__) ___ __ __",
        messageLabel: "Mesaj",
        messagePlaceholder: "Durumunuzu kısaca anlatın...",
        submit: "Başvuru gönder",
        noteShort: "* İlk görüşme (30 dk) ücretsizdir",
        noteLong:
          "* İlk görüşme (30 dakika) ücretsizdir. Tüm görüşmeler gizlilik ilkesiyle yürütülür.",
      },
      toast: {
        title: "Başvurunuz alındı!",
        description: "Randevu için en kısa sürede sizinle iletişime geçeceğim.",
      },
    },
    footer: {
      brand: "Uzman Psikolog Dr. Elif Yılmaz",
      description:
        "Profesyonel psikolojik destek. İstanbul'da bireysel ve aile terapisi.",
      contactsTitle: "İletişim",
      servicesTitle: "Hizmetler",
      contacts: {
        phone: "+90 (212) 555 12 34",
        email: "elif.yilmaz@psikoloji.com.tr",
        address: "İstanbul, Bağdat Caddesi No: 120, Kadıköy",
      },
      services: [
        "Bireysel terapi",
        "Aile terapisi",
        "Kriz desteği",
        "Çocuk psikolojisi",
      ],
      madeWith: "Özenle hazırlandı",
      madeWithTail: "insanlara destek olmak için",
      copyright: "© 2024 Dr. Elif Yılmaz. Tüm hakları saklıdır.",
    },
    notFound: {
      title: "404",
      message: "Üzgünüz! Sayfa bulunamadı",
      action: "Ana sayfaya dön",
    },
  },
  ru: {
    header: {
      brandLong: "Психолог Анна Иванова",
      brandShort: "А. Иванова",
      nav: {
        about: "О себе",
        services: "Услуги",
        testimonials: "Отзывы",
        contact: "Контакты",
      },
      cta: "Записаться",
    },
    hero: {
      titleLine1: "Профессиональная",
      titleLine2: "психологическая помощь",
      descriptionShort:
        "Индивидуальная и семейная терапия. Помогаю преодолеть кризисы.",
      descriptionLong:
        "Индивидуальная и семейная терапия. Помогаю найти внутренние ресурсы, преодолеть кризисы и построить гармоничные отношения.",
      primaryCtaLong: "Записаться на консультацию",
      primaryCtaShort: "Записаться",
      secondaryCta: "Узнать больше",
      stats: [
        { value: "10+", label: "лет опыта" },
        { value: "500+", label: "клиентов" },
        { value: "95%", label: "положительных отзывов" },
      ],
      imageAlt: "Психолог Анна Иванова",
    },
    about: {
      title: "О себе",
      introShort:
        "Психолог с 10-летним опытом. Индивидуальная и семейная терапия.",
      introLong:
        "Психолог с 10-летним опытом работы. Специализируюсь на индивидуальной и семейной терапии, помощи в кризисных ситуациях и личностном росте.",
      cards: [
        {
          title: "Образование",
          short: "МГУ, факультет психологии",
          long: "МГУ им. М.В. Ломоносова, факультет психологии. Повышение квалификации в области семейной терапии.",
        },
        {
          title: "Подход",
          short: "Гуманистический подход, безоценочное принятие",
          long: "Гуманистический подход, эклектическая терапия. Работаю с принципами доверия и безоценочного принятия.",
        },
        {
          title: "Опыт",
          short: "Более 500 успешных случаев",
          long: "Более 500 успешных случаев. Работа с тревожностью, депрессией, семейными конфликтами и личностным ростом.",
        },
      ],
      journeyTitle: "Мой путь в психологии",
      journeyParagraphs: [
        "Моя профессиональная деятельность началась с желания помогать людям находить внутренние ресурсы для преодоления жизненных трудностей.",
        "В своей работе я использую интегративный подход, сочетая различные терапевтические методы в зависимости от потребностей клиента.",
      ],
    },
    services: {
      title: "Услуги",
      introShort: "Психологическая помощь для людей всех возрастов",
      introLong:
        "Предлагаю комплексную психологическую помощь для людей всех возрастов. Каждая сессия адаптируется под ваши индивидуальные потребности.",
      items: [
        {
          title: "Индивидуальная терапия",
          description:
            "Работа с тревогой, депрессией, самооценкой, личностным ростом",
          duration: "60 минут",
          price: "от 3500 ₽",
        },
        {
          title: "Семейная терапия",
          description:
            "Решение семейных конфликтов, улучшение отношений, работа с парами",
          duration: "90 минут",
          price: "от 5000 ₽",
        },
        {
          title: "Кризисная терапия",
          description:
            "Помощь в острых кризисных ситуациях, поддержка при утратах",
          duration: "60 минут",
          price: "от 4000 ₽",
        },
        {
          title: "Работа с детьми",
          description: "Детская психология, адаптация, поведенческие проблемы",
          duration: "45 минут",
          price: "от 3000 ₽",
        },
      ],
      firstConsultationTitle: "Первая консультация",
      firstConsultationSubtitle: "Бесплатно (30 минут)",
      ctaLong: "Записаться на бесплатную консультацию",
      ctaShort: "Бесплатная консультация",
    },
    testimonials: {
      title: "Отзывы",
      introShort: "Мнения моих клиентов",
      introLong:
        "Мнения людей, которым я помогла найти путь к внутренней гармонии",
      items: [
        {
          name: "Мария С.",
          text: "Анна помогла мне пройти через очень сложный период в жизни. Благодаря её поддержке и профессионализму я смогла найти внутренние ресурсы и изменить свою жизнь к лучшему.",
          rating: 5,
        },
        {
          name: "Алексей К.",
          text: "Семейная терапия с Анной Ивановой спасла наш брак. Она помогла нам научиться слушать друг друга и находить компромиссы. Очень благодарен за профессиональную помощь.",
          rating: 5,
        },
        {
          name: "Елена В.",
          text: "Работа с тревожностью дала потрясающие результаты. Анна использует эффективные методы и создаёт атмосферу полного доверия. Рекомендую всем, кто нуждается в помощи.",
          rating: 5,
        },
        {
          name: "Дмитрий Л.",
          text: "Сын стал более уверенным в себе после работы с психологом. Анна нашла подход к ребёнку и помогла ему справиться с трудностями в школе. Спасибо за профессионализм!",
          rating: 5,
        },
        {
          name: "Ольга М.",
          text: "Индивидуальная терапия помогла мне разобраться в себе и своих отношениях. Анна — внимательный и чуткий специалист, которому можно довериться.",
          rating: 5,
        },
        {
          name: "Игорь Р.",
          text: "Кризисная терапия в самый тяжёлый момент жизни. Анна помогла не только пережить потерю, но и найти силы жить дальше. Безмерно благодарен.",
          rating: 5,
        },
      ],
      stats: [
        { value: "98%", label: "довольных клиентов" },
        { value: "4.9", label: "оценка" },
        { value: "120+", label: "отзывов" },
      ],
    },
    contact: {
      title: "Контакты",
      introShort: "Свяжитесь со мной удобным способом",
      introLong:
        "Готова помочь вам на пути к внутренней гармонии. Свяжитесь со мной удобным способом.",
      info: {
        phoneLabel: "Телефон",
        phoneValue: "+7 (495) 123-45-67",
        phoneShort: "9:00-20:00, ежедневно",
        phoneLong: "Доступен с 9:00 до 20:00, ежедневно",
        emailLabel: "Email",
        emailValue: "anna.ivanova@psychology.ru",
        addressLabel: "Адрес",
        addressValue: "г. Москва, ул. Тверская, д. 15",
        addressNote: "Метро: Тверская, Пушкинская",
      },
      channels: {
        whatsapp: "WhatsApp",
        telegram: "Telegram",
      },
      form: {
        title: "Записаться",
        subtitleShort: "Заполните форму для записи",
        subtitleLong:
          "Заполните форму, и я свяжусь с вами для уточнения деталей",
        nameLabel: "Имя *",
        namePlaceholder: "Ваше имя",
        emailLabel: "Email *",
        emailPlaceholder: "your@email.com",
        phoneLabel: "Телефон",
        phonePlaceholder: "+7 (___) ___-__-__",
        messageLabel: "Сообщение",
        messagePlaceholder: "Опишите вашу ситуацию...",
        submit: "Отправить заявку",
        noteShort: "* Первая консультация (30 мин) - бесплатно",
        noteLong:
          "* Первая консультация (30 минут) - бесплатно. Конфиденциальность гарантирована.",
      },
      toast: {
        title: "Заявка отправлена!",
        description:
          "Я свяжусь с вами в ближайшее время для записи на консультацию.",
      },
    },
    footer: {
      brand: "Психолог Анна Иванова",
      description:
        "Профессиональная психологическая помощь. Индивидуальная и семейная терапия в Москве.",
      contactsTitle: "Контакты",
      servicesTitle: "Услуги",
      contacts: {
        phone: "+7 (495) 123-45-67",
        email: "anna.ivanova@psychology.ru",
        address: "г. Москва, ул. Тверская, д. 15",
      },
      services: [
        "Индивидуальная терапия",
        "Семейная терапия",
        "Кризисная помощь",
        "Детская психология",
      ],
      madeWith: "Сделано с заботой",
      madeWithTail: "для помощи людям",
      copyright: "© 2024 Анна Иванова. Все права защищены.",
    },
    notFound: {
      title: "404",
      message: "Упс! Страница не найдена",
      action: "На главную",
    },
  },
};

export const getContent = (lang: Language): SiteContent => {
  return content[lang] ?? content[defaultLanguage];
};