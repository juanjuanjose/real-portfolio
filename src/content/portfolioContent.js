const baseUrl = import.meta.env.BASE_URL;

export const assetPath = (path) => {
  const normalizedPath = path.replace(/^\/+/, "");
  return `${baseUrl}${normalizedPath}`;
};

export const portfolioContent = {
  nav: [
    { id: "inicio", label: "Inicio" },
    { id: "perfil-profesional", label: "Perfil" },
    { id: "experiencia", label: "Experiencia" },
    { id: "proyectos", label: "Proyectos" },
    { id: "contacto", label: "Contacto" }
  ],
  hero: {
    profileImage: assetPath("images/yo.jpg"),
    greeting: "Hola, soy",
    name: "Juan José",
    roles: [
      "Programador full stack",
      "Desarrollo asistido por IA",
      "Experiencias web orientadas a e-commerce"
    ],
    summary:
      "Construyo experiencias web funcionales y elegantes, combinando frontend en React, criterio de producto y apoyo de IA para acelerar entregas sin sacrificar claridad técnica.",
    stats: [
      { value: "React + Tailwind", label: "stack principal para interfaces de negocio" },
      { value: "E-commerce + CMS", label: "contexto práctico en sitios y operación digital" },
      { value: "IA aplicada", label: "prototipado, copy técnico y soporte de implementación" }
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
    title: "Perfil profesional",
    paragraphs: [
      "Soy tecnólogo en análisis y desarrollo de software con foco en crear productos web que se vean bien, comuniquen con claridad y resuelvan necesidades reales de negocio.",
      "Hoy me posiciono como programador full stack con una base fuerte en frontend, experiencia práctica en entornos CMS y una forma de trabajo apoyada por IA para investigar, iterar y entregar con más velocidad y mejor criterio."
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
      }
    ],
    education: [
      { title: "Ingeniería en Sistemas", subtitle: "UNAD · En curso" },
      { title: "Análisis y Desarrollo de Software", subtitle: "SENA · 2023-2025" },
      { title: "Bachiller Técnico", subtitle: "CASD · 2021" }
    ]
  },
  experienceSection: {
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
  projectsSection: {
    eyebrow: "Proyectos seleccionados",
    title: "Evidencia de ejecución, no promesas vacías.",
    intro:
      "Estos proyectos muestran cómo traduzco necesidades visuales y funcionales en experiencias web mantenibles. El foco está en frontend sólido, estructura clara y contexto útil para e-commerce, contenido y evolución del producto.",
    closingNote:
      "También utilizo flujos asistidos por IA para iterar copy, explorar opciones técnicas y acelerar entregas, siempre con criterio humano sobre el resultado final."
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
    eyebrow: "Contacto",
    title: "Si tu proyecto necesita una presencia web más clara, conversemos.",
    intro:
      "Estoy disponible para colaborar en interfaces modernas, mantenimiento evolutivo de sitios, soporte frontend y trabajo relacionado con experiencias e-commerce o flujos asistidos por IA bien aterrizados.",
    availability: "Remoto · colaboración por proyecto · documentación y comunicación clara",
    cvUrl: assetPath("hojavida/hojavida.pdf"),
    email: "juanjoperez2121@gmail.com",
    linkedin: "https://linkedin.com/in/juanjperezb",
    github: "https://github.com/juanjuanjose"
  },
  footer: {
    name: "Juan José Pérez Buriticá",
    role: "Programador full stack · React, e-commerce e IA asistida",
    note: "Construido con React y Tailwind para comunicar mejor experiencia, criterio y capacidad de ejecución."
  }
};
