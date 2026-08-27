const baseUrl = import.meta.env.BASE_URL;

export const assetPath = (path) => {
  const normalizedPath = path.replace(/^\/+/, "");
  return `${baseUrl}${normalizedPath}`;
};

export const defaultLanguage = "es";

export const languageOptions = {
  es: { label: "ES", name: "Español", flag: "España" },
  en: { label: "EN", name: "English", flag: "United States" }
};

export const portfolioContent = {
  es: {
    nav: [
      { id: "inicio", label: "Inicio" },
      { id: "perfil-profesional", label: "Perfil" },
      { id: "experiencia", label: "Experiencia" },
      { id: "automatizacion", label: "Automatización" },
      { id: "proyectos", label: "Proyectos" },
      { id: "contacto", label: "Contacto" }
    ],
    hero: {
      id: "inicio",
      profileImage: assetPath("images/Me.jpeg"),
      profileAlt: "Retrato profesional de Juan José",
      greeting: "Disponible para proyectos remotos",
      location: "Colombia · 2026",
      headline: "Frontend con intención. Automatización útil. Producto digital mejor resuelto.",
      portraitBadge: "Frontend",
      supportingLabel: "Lo que construyo",
      name: "Juan José",
      roles: [
        "Programador full stack",
        "Desarrollo asistido por IA",
        "Experiencias web orientadas a e-commerce",
        "Automatización con Zapier y Make"
      ],
      summary:
        "Diseño interfaces claras y conecto flujos para que un negocio se vea serio y funcione mejor.",
      cards: [
        {
          title: "Frontend con intención",
          accent: "text-[#f0c6c6]",
          description: "Interfaces con jerarquía, consistencia visual y base lista para evolucionar."
        },
        {
          title: "Automatización útil",
          accent: "text-[#e6a0a0]",
          description: "Conecto formularios, seguimiento y tareas repetitivas sin complejidad innecesaria."
        },
        {
          title: "Contexto de negocio",
          accent: "text-[#c86e6e]",
          description: "Pienso en sitios, contenido, leads y operación digital, no solo en pantallas bonitas."
        }
      ],
      stats: [
        { value: "Hotel Mocawa", label: "mantenimiento web real, reservas y formularios en producción" },
        { value: "Ridepedia", label: "React, TypeScript y 3D para una experiencia de producto más visual" },
        { value: "E-commerce + CMS", label: "contexto práctico en contenido, catálogos y operación digital" },
        { value: "Zapier + Make", label: "automatización de tareas, formularios y seguimiento" }
      ],
      ctas: [
        { label: "Ver proyectos", href: "#proyectos", variant: "primary" },
        { label: "Hablemos", href: "#contacto", variant: "secondary" }
      ],
      socialLinks: [
        { label: "GitHub", href: "https://github.com/juanjuanjose", platform: "github" },
        { label: "LinkedIn", href: "https://linkedin.com/in/juanjperezb", platform: "linkedin" },
        { label: "Email", href: "mailto:juanjoperez2121@gmail.com", platform: "email" }
      ]
    },
    summary: {
      id: "perfil-profesional",
      eyebrow: "Propuesta de valor",
      title: "No busco solo que un sitio se vea bien. Busco que se entienda rápido y tenga base para crecer.",
      focusTitle: "Lo que aporto",
      educationTitle: "Formación",
      processTitle: "Cómo trabajo",
      processHeadline: "Una forma de trabajar más clara que una lista de herramientas.",
      processIntro:
        "Primero bajo el problema, después ordeno la solución y recién ahí construyo.",
      paragraphs: [
        "Trabajo desde frontend y estructura para que una página se vea clara y se pueda mantener.",
        "Mi fuerte está en traducir una necesidad digital en una experiencia limpia y bien resuelta."
      ],
      focusAreas: [
        {
          title: "Interfaces con intención",
          description: "Frontend con jerarquía clara, mejor lectura y mejor presencia visual."
        },
        {
          title: "Estructura pensada para negocio",
          description: "Contenido, formularios y recorridos pensados para acompañar la operación."
        },
        {
          title: "Automatización bien usada",
          description: "Conecto tareas y seguimiento cuando aporta valor real."
        }
      ],
      education: [
        { title: "Ingeniería en Sistemas", subtitle: "UNAD · En curso" },
        { title: "Análisis y Desarrollo de Software", subtitle: "SENA · 2023-2025" },
        { title: "Bachiller Técnico", subtitle: "CASD · 2021" }
      ],
      process: [
        {
          title: "Entender",
          description: "Bajo el objetivo real antes de tocar diseño o código."
        },
        {
          title: "Estructurar",
          description: "Defino una dirección visual y técnica que tenga sentido y se pueda sostener."
        },
        {
          title: "Construir",
          description: "Construyo con foco en claridad, detalle visual y ejecución limpia."
        },
        {
          title: "Pulir",
          description: "Ajusto hasta que la experiencia se vea firme y no como una primera versión apurada."
        }
      ]
    },
    experienceSection: {
      id: "experiencia",
      eyebrow: "Perfil y experiencia",
      title: "Experiencia aplicada en frontend, mantenimiento web y trabajo con producto digital.",
      intro:
        "Mi recorrido mezcla trabajo en producción, frontend con API y proyectos donde la presentación del sitio sí importa.",
      highlights: [
        "Trabajo real sobre sitio web, reservas, formularios y contenido.",
        "Frontend responsive con integración a APIs y foco en experiencia.",
        "Base práctica en CMS, catálogo y evolución visual del producto."
      ]
    },
    experience: [
      {
        title: "Practicante Frontend",
        company: "Hotel Mocawa",
        period: "6 meses · 2024",
        type: "Práctica SENA",
        achievements: [
          "Mantenimiento y gestión continua del sitio web del hotel.",
          "Mejora de formularios de contacto y del sistema de reservas.",
          "Actualización de contenido y soporte técnico sobre la experiencia del sitio."
        ],
        tech: ["WordPress", "Hostinger", "CSS", "JavaScript"]
      },
      {
        title: "Desarrollador Frontend",
        company: "Proyecto Misak · SENA",
        period: "2024",
        type: "Proyecto formativo",
        achievements: [
          "Diseño e implementación de una experiencia web cultural con enfoque de catálogo.",
          "Responsabilidad directa sobre la propuesta visual y la experiencia frontend.",
          "Integración con API REST y trabajo coordinado con el equipo del proyecto."
        ],
        tech: ["React", "JavaScript", "CSS", "API"]
      }
    ],
    automationSection: {
      id: "automatizacion",
      eyebrow: "Automatización",
      title: "Automatización útil para quitar pasos manuales cuando de verdad hace falta.",
      intro:
        "Conecto formularios, tareas y seguimiento cuando eso ahorra tiempo y ordena mejor la operación.",
      pillars: [
        "Formularios conectados con correo, hojas de cálculo o CRM.",
        "Seguimiento simple para leads, solicitudes o tareas.",
        "Menos pasos manuales en procesos internos o comerciales."
      ],
      tools: [
        {
          name: "Zapier",
          category: "Automatización no-code",
          description:
            "Lo uso para conectar herramientas rápido y dejar flujos simples funcionando.",
          useCases: ["captura de leads", "notificaciones", "sincronización básica"]
        },
        {
          name: "Make",
          category: "Flujos visuales",
          description:
            "Me sirve cuando el flujo pide más lógica, más pasos y más control.",
          useCases: ["routers", "transformación de datos", "procesos multi-step"]
        },
        {
          name: "IA asistida",
          category: "Apoyo operativo",
          description:
            "La uso para explorar opciones, documentar mejor y acelerar tareas de apoyo con criterio técnico.",
          useCases: ["documentación", "copy", "exploración técnica"]
        }
      ]
    },
    projectsSection: {
      id: "proyectos",
      eyebrow: "Proyecto principal",
      title: "Ridepedia es la pieza que mejor muestra el nivel visual y técnico que quiero proyectar.",
      intro:
        "La pongo primero porque combina frontend, presencia visual e intención de producto con más claridad que el resto.",
      closingNote:
        "Los demás proyectos refuerzan mi experiencia en frontend, contenido y evolución de producto.",
      actions: {
        demo: "Ver demo",
        code: "Código",
        featured: "Proyecto principal",
        secondaryTitle: "Otros proyectos seleccionados"
      }
    },
    projects: [
      {
        title: "Ridepedia",
        description:
          "Experiencia web centrada en motocicletas, construida con React, TypeScript y 3D en navegador para lograr una presencia más visual, más interactiva y mejor resuelta.",
        image: assetPath("images/Ridepedia.png"),
        tags: ["React", "TypeScript", "Three.js", "Vite"],
        githubUrl: "https://github.com/juanjuanjose/Ridepedia",
        demoUrl: "https://juanjuanjose.github.io/Ridepedia/#/",
        featured: true,
        highlight: "Proyecto principal",
        imageFit: "contain",
        imagePosition: "center"
      },
      {
        title: "Sitio Web Misak",
        description:
          "Frontend para una experiencia cultural y de catálogo con foco en responsive design, accesibilidad e integración con API.",
        image: assetPath("images/misak.png"),
        tags: ["React", "JavaScript", "CSS", "API"],
        githubUrl: "https://github.com/jonathantombe/MisakGuambShop-Front",
        demoUrl: "https://misak-guamb-shop-front-qxyi.vercel.app/"
      },
      {
        title: "Portfolio Personal",
        description:
          "Landing modular en React pensada para comunicar mejor perfil, criterio visual y evolución técnica.",
        image: assetPath("images/profile.png"),
        tags: ["React", "JavaScript", "Tailwind", "CSS"],
        githubUrl: "https://github.com/juanjuanjose/real-portfolio",
        demoUrl: "https://juanjuanjose.github.io/real-portfolio/"
      }
    ],
    contact: {
      id: "contacto",
      eyebrow: "Contacto",
      title: "Si querés una presencia web más seria y mejor resuelta, hablemos.",
      intro:
        "Estoy disponible para colaborar en frontend, mejora visual de sitios, soporte evolutivo y automatización bien aterrizada cuando haga falta.",
      availability: "Remoto · por proyecto · comunicación clara",
      resumesTitle: "Hojas de vida",
      contactLead: "Podés escribirme directo o revisar mi perfil y repositorios.",
      resumes: [
        {
          label: "Hoja de vida en español",
          helper: "Versión para procesos y oportunidades en español.",
          url: assetPath("hojavida/CV_JuanJose_Completo.pdf")
        },
        {
          label: "Resume in English",
          helper: "Version for English-speaking recruiters and clients.",
          url: assetPath("hojavida/CV_JuanJose_Completo_EN.pdf")
        }
      ],
      contactCards: [
        { key: "email", label: "Email", platformLabel: "Escríbeme directamente" },
        { key: "linkedin", label: "LinkedIn", platformLabel: "Perfil profesional" },
        { key: "github", label: "GitHub", platformLabel: "Código y repositorios" }
      ],
      email: "juanjoperez2121@gmail.com",
      linkedin: "https://linkedin.com/in/juanjperezb",
      github: "https://github.com/juanjuanjose"
    },
    footer: {
      name: "Juan José Pérez Buriticá",
      role: "Frontend · automatización útil · producto digital",
      note: "Frontend, automatización útil y producto digital con más criterio.",
      copyright: "© 2026 Juan José Pérez Buriticá",
      tagline: "React + Tailwind · diseño, ejecución y evolución"
    },
    languageSwitcher: {
      ariaLabel: "Cambiar idioma",
      menuCloseLabel: "Cerrar menú de navegación",
      menuOpenLabel: "Abrir menú de navegación",
      title: "Idioma",
      helper: "Toca para alternar"
    }
  },
  en: {
    nav: [
      { id: "inicio", label: "Home" },
      { id: "perfil-profesional", label: "Profile" },
      { id: "experiencia", label: "Experience" },
      { id: "automatizacion", label: "Automation" },
      { id: "proyectos", label: "Projects" },
      { id: "contacto", label: "Contact" }
    ],
    hero: {
      id: "inicio",
      profileImage: assetPath("images/Me.jpeg"),
      profileAlt: "Professional portrait of Juan Jose",
      greeting: "Available for remote projects",
      location: "Colombia · 2026",
      headline: "Intentional frontend. Useful automation. Better resolved digital product.",
      portraitBadge: "Frontend",
      supportingLabel: "What I build",
      name: "Juan Jose",
      roles: [
        "Full stack developer",
        "AI-assisted development",
        "Web experiences built for e-commerce",
        "Automation with Zapier and Make"
      ],
      summary:
        "I design clear interfaces and connect workflows so a business looks serious and works better.",
      cards: [
        {
          title: "Intentional frontend",
          accent: "text-[#f0c6c6]",
          description: "Interfaces with stronger hierarchy, visual consistency, and room to evolve."
        },
        {
          title: "Useful automation",
          accent: "text-[#e6a0a0]",
          description: "I connect forms, follow-up, and repetitive tasks without unnecessary complexity."
        },
        {
          title: "Business context",
          accent: "text-[#c86e6e]",
          description: "Built with real websites, content, leads, and digital operations in mind."
        }
      ],
      stats: [
        { value: "Hotel Mocawa", label: "real website maintenance, reservations, and live contact forms" },
        { value: "Ridepedia", label: "React, TypeScript, and 3D for a more visual product experience" },
        { value: "E-commerce + CMS", label: "hands-on context across content, catalogs, and digital operations" },
        { value: "Zapier + Make", label: "automation for tasks, forms, and follow-up" }
      ],
      ctas: [
        { label: "View projects", href: "#proyectos", variant: "primary" },
        { label: "Let's talk", href: "#contacto", variant: "secondary" }
      ],
      socialLinks: [
        { label: "GitHub", href: "https://github.com/juanjuanjose", platform: "github" },
        { label: "LinkedIn", href: "https://linkedin.com/in/juanjperezb", platform: "linkedin" },
        { label: "Email", href: "mailto:juanjoperez2121@gmail.com", platform: "email" }
      ]
    },
    summary: {
      id: "perfil-profesional",
      eyebrow: "Value proposition",
      title: "I do not just want a site to look good. I want it to read fast and have room to grow.",
      focusTitle: "What I bring",
      educationTitle: "Education",
      processTitle: "How I work",
      processHeadline: "A clearer way of working than a list of tools.",
      processIntro:
        "I first break down the problem, then shape the solution, and only then build.",
      paragraphs: [
        "I work from frontend and structure so a website feels clear and stays maintainable.",
        "My strength is turning a digital need into a clean, well-resolved experience."
      ],
      focusAreas: [
        {
          title: "Interfaces with intention",
          description: "Frontend with clearer hierarchy, better readability, and stronger presence."
        },
        {
          title: "Business-aware structure",
          description: "Content, forms, and journeys shaped to support operations."
        },
        {
          title: "Well-used automation",
          description: "I connect tasks and follow-up when they add real value."
        }
      ],
      education: [
        { title: "Systems Engineering", subtitle: "UNAD · In progress" },
        { title: "Software Analysis and Development", subtitle: "SENA · 2023-2025" },
        { title: "Technical High School Diploma", subtitle: "CASD · 2021" }
      ],
      process: [
        {
          title: "Understand",
          description: "I ground the real goal before touching design or code."
        },
        {
          title: "Structure",
          description: "I define a visual and technical direction that makes sense and can hold up."
        },
        {
          title: "Build",
          description: "I build with clarity, visual detail, and clean execution in mind."
        },
        {
          title: "Refine",
          description: "I adjust until the experience feels firm, not like a rushed first version."
        }
      ]
    },
    experienceSection: {
      id: "experiencia",
      eyebrow: "Profile and experience",
      title: "Applied experience across frontend, website maintenance, and digital product work.",
      intro:
        "My background combines production work, API-based frontend, and projects where site presentation actually matters.",
      highlights: [
        "Real work across websites, reservations, forms, and content updates.",
        "Responsive frontend with API integration and experience focus.",
        "Practical base across CMS, catalog work, and visual product evolution."
      ]
    },
    experience: [
      {
        title: "Frontend Intern",
        company: "Hotel Mocawa",
        period: "6 months · 2024",
        type: "SENA internship",
        achievements: [
          "Maintained and managed the hotel's website on an ongoing basis.",
          "Improved contact forms and the reservation system.",
          "Handled content updates and technical support across the site experience."
        ],
        tech: ["WordPress", "Hostinger", "CSS", "JavaScript"]
      },
      {
        title: "Frontend Developer",
        company: "Misak Project · SENA",
        period: "2024",
        type: "Training project",
        achievements: [
          "Designed and implemented a cultural web experience with a catalog-oriented approach.",
          "Took direct responsibility for the visual proposal and frontend experience.",
          "Integrated a REST API and worked in coordination with the project team."
        ],
        tech: ["React", "JavaScript", "CSS", "API"]
      }
    ],
    automationSection: {
      id: "automatizacion",
      eyebrow: "Automation",
      title: "Useful automation to remove manual steps when they actually get in the way.",
      intro:
        "I connect forms, tasks, and follow-up when that saves time and makes operations easier to run.",
      pillars: [
        "Forms connected to email, spreadsheets, or a CRM.",
        "Simple follow-up for leads, requests, or tasks.",
        "Fewer manual steps in internal or commercial processes."
      ],
      tools: [
        {
          name: "Zapier",
          category: "No-code automation",
          description:
            "I use it to connect tools quickly and keep simple flows running.",
          useCases: ["lead capture", "notifications", "basic sync"]
        },
        {
          name: "Make",
          category: "Visual workflows",
          description:
            "It helps when a workflow needs more logic, more steps, and better control.",
          useCases: ["routers", "data transformation", "multi-step processes"]
        },
        {
          name: "AI-assisted",
          category: "Operational support",
          description:
            "I use it to explore options, document better, and speed up support work while keeping technical judgment in charge.",
          useCases: ["documentation", "copy", "technical exploration"]
        }
      ]
    },
    projectsSection: {
      id: "proyectos",
      eyebrow: "Primary project",
      title: "Ridepedia is the piece that shows the visual and technical level I want to project most clearly.",
      intro:
        "It comes first because it combines frontend execution, visual presence, and product intent more clearly than the rest.",
      closingNote:
        "The remaining projects reinforce my frontend, content, and product-evolution experience.",
      actions: {
        demo: "Live demo",
        code: "Source code",
        featured: "Primary project",
        secondaryTitle: "Other selected projects"
      }
    },
    projects: [
      {
        title: "Ridepedia",
        description:
          "A motorcycle-focused web experience built with React, TypeScript, and browser-based 3D to create a more visual, more interactive, and better resolved product presence.",
        image: assetPath("images/Ridepedia.png"),
        tags: ["React", "TypeScript", "Three.js", "Vite"],
        githubUrl: "https://github.com/juanjuanjose/Ridepedia",
        demoUrl: "https://juanjuanjose.github.io/Ridepedia/#/",
        featured: true,
        highlight: "Primary project",
        imageFit: "contain",
        imagePosition: "center"
      },
      {
        title: "Misak Website",
        description:
          "Frontend for a cultural and catalog experience focused on responsive design, accessibility, and API integration.",
        image: assetPath("images/misak.png"),
        tags: ["React", "JavaScript", "CSS", "API"],
        githubUrl: "https://github.com/jonathantombe/MisakGuambShop-Front",
        demoUrl: "https://misak-guamb-shop-front-qxyi.vercel.app/"
      },
      {
        title: "Personal Portfolio",
        description:
          "A modular React landing page designed to communicate profile, visual judgment, and technical evolution more clearly.",
        image: assetPath("images/profile.png"),
        tags: ["React", "JavaScript", "Tailwind", "CSS"],
        githubUrl: "https://github.com/juanjuanjose/real-portfolio",
        demoUrl: "https://juanjuanjose.github.io/real-portfolio/"
      }
    ],
    contact: {
      id: "contacto",
      eyebrow: "Contact",
      title: "If you want a stronger, better resolved web presence, let's talk.",
      intro:
        "I am available to collaborate on frontend work, visual improvement for websites, ongoing support, and well-grounded automation when it actually helps.",
      availability: "Remote · project-based · clear communication",
      resumesTitle: "Resumes",
      contactLead: "You can write to me directly or review my profile and repositories.",
      resumes: [
        {
          label: "Resume in English",
          helper: "Version for English-speaking recruiters and clients.",
          url: assetPath("hojavida/CV_JuanJose_Completo_EN.pdf")
        },
        {
          label: "Hoja de vida en español",
          helper: "Versión para procesos y oportunidades en español.",
          url: assetPath("hojavida/CV_JuanJose_Completo.pdf")
        }
      ],
      contactCards: [
        { key: "email", label: "Email", platformLabel: "Write to me directly" },
        { key: "linkedin", label: "LinkedIn", platformLabel: "Professional profile" },
        { key: "github", label: "GitHub", platformLabel: "Code and repositories" }
      ],
      email: "juanjoperez2121@gmail.com",
      linkedin: "https://linkedin.com/in/juanjperezb",
      github: "https://github.com/juanjuanjose"
    },
    footer: {
      name: "Juan Jose Perez Buritica",
      role: "Frontend · useful automation · digital product",
      note: "Frontend, useful automation, and digital product with stronger judgment.",
      copyright: "© 2026 Juan Jose Perez Buritica",
      tagline: "React + Tailwind · design, execution, and evolution"
    },
    languageSwitcher: {
      ariaLabel: "Switch language",
      menuCloseLabel: "Close navigation menu",
      menuOpenLabel: "Open navigation menu",
      title: "Language",
      helper: "Tap to switch"
    }
  }
};
