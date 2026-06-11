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
      profileImage: assetPath("images/yo.jpg"),
      profileAlt: "Retrato profesional de Juan José",
      greeting: "Hola, soy",
      name: "Juan José",
      roles: [
        "Programador full stack",
        "Desarrollo asistido por IA",
        "Experiencias web orientadas a e-commerce",
        "Automatización con Zapier y Make"
      ],
      summary:
        "Diseño experiencias web con una base visual más sólida, frontend en React, criterio de producto y automatizaciones que conectan procesos, contenido y operaciones sin perder claridad técnica.",
      cards: [
        {
          title: "Frontend",
          accent: "text-cyan-200",
          description: "Interfaces organizadas, escalables y con mejor presentación."
        },
        {
          title: "Automatización",
          accent: "text-fuchsia-200",
          description: "Zapier y Make para reducir tareas manuales y conectar herramientas."
        },
        {
          title: "Operación",
          accent: "text-emerald-200",
          description: "Pensado para sitios, contenido, leads y flujos reales de negocio."
        }
      ],
      stats: [
        { value: "React + Tailwind", label: "interfaces limpias para sitios, landings y producto" },
        { value: "E-commerce + CMS", label: "contexto práctico en sitios, catálogos y operación digital" },
        { value: "Zapier + Make", label: "automatización de tareas, formularios y flujos conectados" },
        { value: "IA aplicada", label: "investigación, prototipado y soporte de implementación" }
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
      eyebrow: "Perfil profesional",
      title: "Desarrollo web con criterio técnico, automatización útil y presentación profesional.",
      focusTitle: "En qué enfoco mi trabajo",
      educationTitle: "Formación",
      paragraphs: [
        "Soy tecnólogo en análisis y desarrollo de software con foco en crear productos web que se vean bien, comuniquen con claridad y resuelvan necesidades reales de negocio.",
        "Hoy me posiciono como programador full stack con una base fuerte en frontend, experiencia práctica en entornos CMS y una forma de trabajo apoyada por IA y automatización para investigar, iterar y entregar con más velocidad y mejor criterio."
      ],
      focusAreas: [
        {
          title: "Frontend con intención de negocio",
          description: "Interfaces en React y Tailwind orientadas a conversión, mantenimiento y consistencia visual."
        },
        {
          title: "Apoyo real a flujos e-commerce",
          description: "Interés aplicado en catálogos, contenido, integraciones y experiencias que acompañan la operación digital."
        },
        {
          title: "IA como acelerador, no atajo",
          description: "Uso herramientas asistidas para explorar soluciones, refinar copy y reducir tiempo de implementación con supervisión técnica."
        },
        {
          title: "Automatización útil",
          description: "Incorporo Zapier y Make para conectar formularios, tareas y seguimiento sin convertir el sitio en un caos manual."
        }
      ],
      education: [
        { title: "Ingeniería en Sistemas", subtitle: "UNAD · En curso" },
        { title: "Análisis y Desarrollo de Software", subtitle: "SENA · 2023-2025" },
        { title: "Bachiller Técnico", subtitle: "CASD · 2021" }
      ]
    },
    experienceSection: {
      id: "experiencia",
      eyebrow: "Experiencia relevante",
      title: "Trabajo y formación conectados con operación digital real.",
      intro:
        "Mi experiencia combina mantenimiento web, implementación frontend y trabajo formativo con foco en sitios, contenido y flujos que importan para marcas, catálogos y presencia digital confiable.",
      highlights: [
        "Experiencia práctica en CMS, contenido y soporte de operación web.",
        "Participación en proyectos frontend con APIs, responsive design y colaboración en equipo.",
        "Interés aplicado en e-commerce, automatización ligera y entregas asistidas por IA con supervisión técnica."
      ]
    },
    experience: [
      {
        title: "Practicante Frontend",
        company: "Hotel Mocawa",
        period: "6 meses · 2024",
        type: "Práctica SENA",
        achievements: [
          "Gestión y mantenimiento del sitio web con +500 visitas mensuales.",
          "Optimización de formularios de contacto y sistema de reservas.",
          "Implementación de actualizaciones de contenido semanales.",
          "Resolución de problemas técnicos relacionados con UX y rendimiento."
        ],
        tech: ["WordPress", "Hostinger", "CSS", "JavaScript"]
      },
      {
        title: "Desarrollador Frontend",
        company: "Proyecto Misak · SENA",
        period: "2024",
        type: "Proyecto formativo",
        achievements: [
          "Diseño e implementación de sitio web cultural de la comunidad Misak.",
          "Responsable del diseño UI/UX completo del proyecto.",
          "Integración con API REST para funcionalidades del sistema.",
          "Colaboración efectiva en equipo multidisciplinario."
        ],
        tech: ["React", "JavaScript", "CSS", "API"]
      }
    ],
    automationSection: {
      id: "automatizacion",
      eyebrow: "Automatización",
      title: "Herramientas para conectar procesos, no solo interfaces.",
      intro:
        "Además del frontend, integro automatizaciones ligeras para que formularios, leads, tareas y notificaciones no dependan de seguimiento manual innecesario.",
      pillars: [
        "Conectar formularios con correo, hojas de cálculo o CRM.",
        "Crear flujos de seguimiento para leads y solicitudes.",
        "Reducir tareas repetitivas en procesos comerciales o internos."
      ],
      tools: [
        {
          name: "Zapier",
          category: "Automatización no-code",
          description:
            "Ideal para enlazar formularios, correo, Google Sheets y apps comerciales con una configuración rápida.",
          useCases: ["captura de leads", "notificaciones", "sincronización básica"]
        },
        {
          name: "Make",
          category: "Flujos visuales",
          description:
            "Útil para escenarios más visuales y ramificados cuando el flujo necesita varias condiciones o pasos intermedios.",
          useCases: ["routers", "transformación de datos", "procesos multi-step"]
        },
        {
          name: "IA asistida",
          category: "Apoyo operativo",
          description:
            "La uso para acelerar documentación, copy técnico, exploración y definición de soluciones antes de implementar.",
          useCases: ["documentación", "copy", "exploración técnica"]
        }
      ]
    },
    projectsSection: {
      id: "proyectos",
      eyebrow: "Proyectos seleccionados",
      title: "Evidencia de ejecución, no promesas vacías.",
      intro:
        "Estos proyectos muestran cómo traduzco necesidades visuales y funcionales en experiencias web mantenibles. El foco está en frontend sólido, estructura clara y contexto útil para e-commerce, contenido y evolución del producto.",
      closingNote:
        "También utilizo flujos asistidos por IA y automatización ligera para iterar copy, explorar opciones técnicas y acelerar entregas, siempre con criterio humano sobre el resultado final.",
      actions: {
        demo: "Ver demo",
        code: "Código",
        featured: "Destacado"
      }
    },
    projects: [
      {
        title: "Sitio Web Misak",
        description:
          "Frontend para una experiencia cultural y de catálogo con énfasis en responsive design, accesibilidad e integración con API, cuidando la identidad visual y la claridad del recorrido.",
        image: assetPath("images/misak.png"),
        tags: ["React", "JavaScript", "CSS", "API"],
        githubUrl: "https://github.com/jonathantombe/MisakGuambShop-Front",
        demoUrl: "https://misak-guamb-shop-front-qxyi.vercel.app/",
        featured: true
      },
      {
        title: "Portfolio Personal",
        description:
          "Landing modular en React para presentar narrativa profesional, experiencia aplicada y una identidad visual más elegante, pensada para evolucionar sin volver al monolito inicial.",
        image: assetPath("images/profile.png"),
        tags: ["React", "JavaScript", "Tailwind", "CSS"],
        githubUrl: "https://github.com/juanjuanjose/real-portfolio",
        demoUrl: "https://juanjuanjose.github.io/real-portfolio/"
      }
    ],
    contact: {
      id: "contacto",
      eyebrow: "Contacto",
      title: "Si tu proyecto necesita presencia web y procesos más claros, conversemos.",
      intro:
        "Estoy disponible para colaborar en interfaces modernas, mantenimiento evolutivo de sitios, soporte frontend y trabajo relacionado con experiencias e-commerce o automatizaciones bien aterrizadas.",
      availability: "Remoto · colaboración por proyecto · documentación y comunicación clara",
      resumesTitle: "Hojas de vida",
      resumes: [
        {
          label: "Hoja de vida en español",
          helper: "Versión para procesos y oportunidades en español.",
          url: assetPath("hojavida/Hoja_de_vida.pdf")
        },
        {
          label: "Resume in English",
          helper: "Version for English-speaking recruiters and clients.",
          url: assetPath("hojavida/CV_JuanJose_en.pdf")
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
      role: "Programador full stack · React, automatización y experiencias digitales",
      note: "Construido con React y Tailwind para comunicar mejor experiencia, criterio y capacidad de ejecución.",
      copyright: "© 2026 Juan José Pérez Buriticá",
      tagline: "React + Tailwind · narrativa profesional, automatización y ejecución"
    },
    languageSwitcher: {
      ariaLabel: "Cambiar idioma",
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
      profileImage: assetPath("images/yo.jpg"),
      profileAlt: "Professional portrait of Juan Jose",
      greeting: "Hi, I'm",
      name: "Juan Jose",
      roles: [
        "Full stack developer",
        "AI-assisted development",
        "Web experiences built for e-commerce",
        "Automation with Zapier and Make"
      ],
      summary:
        "I design web experiences with stronger visual foundations, React frontend execution, product judgment, and automation that connects processes, content, and operations without losing technical clarity.",
      cards: [
        {
          title: "Frontend",
          accent: "text-cyan-200",
          description: "Organized, scalable interfaces with stronger presentation quality."
        },
        {
          title: "Automation",
          accent: "text-fuchsia-200",
          description: "Zapier and Make to reduce manual work and connect tools."
        },
        {
          title: "Operations",
          accent: "text-emerald-200",
          description: "Built for real websites, content workflows, leads, and business operations."
        }
      ],
      stats: [
        { value: "React + Tailwind", label: "clean interfaces for websites, landing pages, and product surfaces" },
        { value: "E-commerce + CMS", label: "hands-on context across websites, catalogs, and digital operations" },
        { value: "Zapier + Make", label: "task, form, and workflow automation across connected tools" },
        { value: "Applied AI", label: "research, prototyping, and implementation support" }
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
      eyebrow: "Professional summary",
      title: "Web development with technical judgment, useful automation, and professional presentation.",
      focusTitle: "What I focus on",
      educationTitle: "Education",
      paragraphs: [
        "I am a software analysis and development technologist focused on building web products that look sharp, communicate clearly, and solve real business needs.",
        "Today I position myself as a full stack developer with a strong frontend base, practical CMS experience, and a workflow supported by AI and automation to research, iterate, and deliver faster with better judgment."
      ],
      focusAreas: [
        {
          title: "Frontend with business intent",
          description: "React and Tailwind interfaces oriented toward conversion, maintainability, and visual consistency."
        },
        {
          title: "Real support for e-commerce flows",
          description: "Applied interest in catalogs, content, integrations, and experiences that support digital operations."
        },
        {
          title: "AI as an accelerator, not a shortcut",
          description: "I use assisted tools to explore solutions, refine copy, and reduce implementation time under technical supervision."
        },
        {
          title: "Useful automation",
          description: "I bring in Zapier and Make to connect forms, tasks, and follow-up without turning the site into manual chaos."
        }
      ],
      education: [
        { title: "Systems Engineering", subtitle: "UNAD · In progress" },
        { title: "Software Analysis and Development", subtitle: "SENA · 2023-2025" },
        { title: "Technical High School Diploma", subtitle: "CASD · 2021" }
      ]
    },
    experienceSection: {
      id: "experiencia",
      eyebrow: "Relevant experience",
      title: "Work and training connected to real digital operations.",
      intro:
        "My background combines website maintenance, frontend implementation, and training work focused on websites, content, and flows that matter for brands, catalogs, and reliable digital presence.",
      highlights: [
        "Hands-on experience with CMS platforms, content, and website operations support.",
        "Participation in frontend projects involving APIs, responsive design, and team collaboration.",
        "Applied interest in e-commerce, lightweight automation, and AI-assisted delivery with technical supervision."
      ]
    },
    experience: [
      {
        title: "Frontend Intern",
        company: "Hotel Mocawa",
        period: "6 months · 2024",
        type: "SENA internship",
        achievements: [
          "Managed and maintained a website with more than 500 monthly visits.",
          "Optimized contact forms and the reservation system.",
          "Implemented weekly content updates.",
          "Solved technical issues related to UX and performance."
        ],
        tech: ["WordPress", "Hostinger", "CSS", "JavaScript"]
      },
      {
        title: "Frontend Developer",
        company: "Misak Project · SENA",
        period: "2024",
        type: "Training project",
        achievements: [
          "Designed and implemented a cultural website for the Misak community.",
          "Owned the full UI/UX design of the project.",
          "Integrated a REST API for system functionality.",
          "Collaborated effectively within a multidisciplinary team."
        ],
        tech: ["React", "JavaScript", "CSS", "API"]
      }
    ],
    automationSection: {
      id: "automatizacion",
      eyebrow: "Automation",
      title: "Tools that connect processes, not just interfaces.",
      intro:
        "Beyond frontend work, I integrate lightweight automations so forms, leads, tasks, and notifications do not depend on unnecessary manual follow-up.",
      pillars: [
        "Connect forms with email, spreadsheets, or a CRM.",
        "Create follow-up flows for leads and requests.",
        "Reduce repetitive tasks in commercial or internal processes."
      ],
      tools: [
        {
          name: "Zapier",
          category: "No-code automation",
          description:
            "Ideal for linking forms, email, Google Sheets, and business apps with fast setup.",
          useCases: ["lead capture", "notifications", "basic sync"]
        },
        {
          name: "Make",
          category: "Visual workflows",
          description:
            "Useful for more visual and branched scenarios when a flow needs several conditions or intermediate steps.",
          useCases: ["routers", "data transformation", "multi-step processes"]
        },
        {
          name: "AI-assisted",
          category: "Operational support",
          description:
            "I use it to accelerate documentation, technical copy, exploration, and solution definition before implementation.",
          useCases: ["documentation", "copy", "technical exploration"]
        }
      ]
    },
    projectsSection: {
      id: "proyectos",
      eyebrow: "Selected projects",
      title: "Execution you can verify, not empty promises.",
      intro:
        "These projects show how I translate visual and functional needs into maintainable web experiences. The focus is solid frontend work, clear structure, and useful context for e-commerce, content, and product evolution.",
      closingNote:
        "I also use AI-assisted flows and lightweight automation to iterate on copy, explore technical options, and speed up delivery, always with human judgment over the final result.",
      actions: {
        demo: "Live demo",
        code: "Source code",
        featured: "Featured"
      }
    },
    projects: [
      {
        title: "Misak Website",
        description:
          "Frontend for a cultural and catalog experience with emphasis on responsive design, accessibility, and API integration, while preserving visual identity and journey clarity.",
        image: assetPath("images/misak.png"),
        tags: ["React", "JavaScript", "CSS", "API"],
        githubUrl: "https://github.com/jonathantombe/MisakGuambShop-Front",
        demoUrl: "https://misak-guamb-shop-front-qxyi.vercel.app/",
        featured: true
      },
      {
        title: "Personal Portfolio",
        description:
          "A modular React landing page designed to present professional narrative, applied experience, and a more polished visual identity, built to evolve without returning to the initial monolith.",
        image: assetPath("images/profile.png"),
        tags: ["React", "JavaScript", "Tailwind", "CSS"],
        githubUrl: "https://github.com/juanjuanjose/real-portfolio",
        demoUrl: "https://juanjuanjose.github.io/real-portfolio/"
      }
    ],
    contact: {
      id: "contacto",
      eyebrow: "Contact",
      title: "If your project needs stronger web presence and clearer processes, let's talk.",
      intro:
        "I am available to collaborate on modern interfaces, ongoing website maintenance, frontend support, and work related to e-commerce experiences or well-grounded automations.",
      availability: "Remote · project-based collaboration · clear documentation and communication",
      resumesTitle: "Resumes",
      resumes: [
        {
          label: "Resume in English",
          helper: "Version for English-speaking recruiters and clients.",
          url: assetPath("hojavida/CV_JuanJose_en.pdf")
        },
        {
          label: "Hoja de vida en español",
          helper: "Versión para procesos y oportunidades en español.",
          url: assetPath("hojavida/Hoja_de_vida.pdf")
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
      role: "Full stack developer · React, automation, and digital experiences",
      note: "Built with React and Tailwind to communicate experience, judgment, and execution more clearly.",
      copyright: "© 2026 Juan Jose Perez Buritica",
      tagline: "React + Tailwind · professional narrative, automation, and execution"
    },
    languageSwitcher: {
      ariaLabel: "Switch language",
      title: "Language",
      helper: "Tap to switch"
    }
  }
};
