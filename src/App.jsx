import { useEffect, useState } from "react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Calendar, 
  Award, 
  TrendingUp,
  Code2,
  FileCode,
  Palette,
  Layout,
  FileText,
  ShoppingBag,
  BookOpen,
  TestTube,
  Route,
  Package
} from "lucide-react";

const ANIMATION_CONFIG = {
  textChangeInterval: 3000,
  transitionDuration: 400,
  observerThreshold: 0.2
};

const TYPING_TEXTS = [
  "Desarrollador Frontend",
  "Creador de Interfaces"
];

const SKILLS_DATA = {
  frontend: [
    { name: "React", level: 60, color: "#7C3AED", iconName: "Code2" },
    { name: "JavaScript", level: 40, color: "#F59E0B", iconName: "FileCode" },
    { name: "Tailwind CSS", level: 60, color: "#8B5CF6", iconName: "Palette" },
    { name: "HTML & CSS", level: 75, color: "#EC4899", iconName: "Layout" }
  ],
  cms: [
    { name: "WordPress", level: 70, color: "#6366F1", iconName: "FileText" },
    { name: "Shopify", level: 50, color: "#A855F7", iconName: "ShoppingBag" }
  ]
};

const EXPERIENCE_DATA = [
  {
    title: "Practicante Frontend",
    company: "Hotel Mocawa",
    period: "6 meses - 2024",
    type: "Práctica SENA",
    achievements: [
      "Gestión y mantenimiento del sitio web con +500 visitas mensuales",
      "Optimización de formularios de contacto y sistema de reservas",
      "Implementación de actualizaciones de contenido semanales",
      "Resolución de problemas técnicos relacionados con UX y rendimiento"
    ],
    tech: ["WordPress", "Hostinger", "CSS", "JavaScript"]
  },
  {
    title: "Desarrollador Frontend",
    company: "Proyecto Misak - SENA",
    period: "2024",
    type: "Proyecto Formativo",
    achievements: [
      "Diseño e implementación de sitio web cultural de la comunidad Misak",
      "Responsable del diseño UI/UX completo del proyecto",
      "Integración con API REST para funcionalidades del sistema",
      "Colaboración efectiva en equipo multidisciplinario"
    ],
    tech: ["React", "JavaScript", "CSS", "API"]
  }
];

const PROJECTS_DATA = [
  {
    title: "Sitio Web Misak",
    description: "Plataforma web enfocada en la preservación cultural de la comunidad Misak. Desarrollo integral del frontend con énfasis en diseño responsivo y accesibilidad.",
    image: "public/images/misak.png",
    tags: ["React", "JavaScript", "CSS", "API"],
    githubUrl: "https://github.com/jonathantombe/MisakGuambShop-Front",
    demoUrl: "https://misak-guamb-shop-front-qxyi.vercel.app/",
    featured: true
  },
  {
    title: "Portfolio Personal",
    description: "Sitio personal desarrollado para mostrar proyectos y habilidades técnicas. Implementación de animaciones y diseño moderno.",
    image: "",
    tags: ["React", "JavaScript", "Tailwind", "CSS"],
    githubUrl: "https://github.com/juanjuanjose/real-portfolio",
    demoUrl: "https://juanjuanjose.github.io/real-portfolio/"
  }
];

const LEARNING_DATA = [
  { name: "TypeScript", iconName: "BookOpen", status: "En progreso" },
  { name: "React Testing Library", iconName: "TestTube", status: "Próximamente" },
  { name: "React Router", iconName: "Route", status: "En progreso" },
  { name: "Zustand", iconName: "Package", status: "Próximamente" }
];

const useTypingEffect = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = TYPING_TEXTS[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return displayText;
};

const useIntersectionObserver = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: ANIMATION_CONFIG.observerThreshold }
    );

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return visibleSections;
};

const SkillBar = ({ skill, isVisible }) => {
  const [progress, setProgress] = useState(0);
  
  const iconComponents = {
    Code2,
    FileCode,
    Palette,
    Layout,
    FileText,
    ShoppingBag
  };
  
  const IconComponent = iconComponents[skill.iconName];

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setProgress(skill.level), 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          {IconComponent && <IconComponent size={20} className="text-gray-400" />}
          <span className="text-gray-200 font-medium">{skill.name}</span>
        </div>
        <span className="text-gray-400 font-bold">{skill.level}%</span>
      </div>
      <div className="h-3 bg-gray-800/80 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
          }}
        />
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-gray-800/40 rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/40 transition-all duration-300">
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Destacado
        </div>
      )}
      
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 leading-relaxed text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-md text-xs border border-purple-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            <ExternalLink size={16} />
            Ver Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gray-700/50 text-gray-200 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            <Github size={16} />
            Código
          </a>
        </div>
      </div>
    </div>
  );
};

const ExperienceItem = ({ experience }) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute left-0 top-0 w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-900" />
      <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 to-transparent last:hidden" />
      
      <div className="bg-gray-800/40 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
            <p className="text-purple-400 font-semibold">{experience.company}</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
              {experience.period}
            </span>
            <span className="text-xs text-gray-400 mt-1">{experience.type}</span>
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
              <span className="text-purple-400 mt-1">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

function App() {
  const typingText = useTypingEffect();
  const visibleSections = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white">
      <header className="fixed top-0 inset-x-0 bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              JJ
            </div>
            <nav className="hidden md:flex gap-8">
              {['Inicio', 'Sobre Mí', 'Experiencia', 'Habilidades', 'Proyectos', 'Contacto'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <section id="inicio" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-8">
            <div className="w-64 h-80 rounded-full border-2 border-purple-500/40 p-1 bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="public/images/yo.jpg"
                  alt="Foto de perfil"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hola, soy{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              Juan José
            </span>
          </h1>

          <div className="h-16 mb-8">
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              {typingText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Desarrollador enfocado en crear interfaces web intuitivas y funcionales. 
            Trabajo principalmente con React y me enfoco en escribir código limpio y mantenible.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-gray-800/50 px-5 py-2.5 rounded-full border border-gray-700/50 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="text-purple-400" size={18} />
                <span className="text-gray-300">6 meses de experiencia</span>
              </div>
            </div>
            
            {/* <div className="bg-gray-800/50 px-5 py-2.5 rounded-full border border-gray-700/50 text-sm">
              <div className="flex items-center gap-2">
                <Code className="text-purple-400" size={18} />
                <span className="text-gray-300">2 proyectos en producción</span>
              </div>
            </div> */}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#proyectos"
              className="px-8 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              Ver Proyectos
              <ExternalLink size={18} />
            </a>
            <a
              href="#contacto"
              className="px-8 py-3 bg-gray-800 border border-gray-700 rounded-lg font-medium hover:border-gray-600 transition-colors"
            >
              Contáctame
            </a>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <a
              href="https://github.com/juanjuanjose"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/juanjperezb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:juanjoperez2121@gmail.com"
              className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      <section
        id="sobre-mí"
        className={`py-24 px-6 transition-all duration-1000 ${
          visibleSections.has('sobre-mí') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-white">
            Sobre Mí
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto mb-12 rounded-full" />

          <div className="bg-gray-800/40 rounded-xl p-8 border border-gray-700/50">
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              Desarrollador web con formación en análisis y desarrollo de software. Cuento con experiencia práctica en la creación de interfaces responsivas y funcionales, utilizando tecnologías modernas como React y Tailwind CSS.
            </p>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              Me interesa seguir aprendiendo y mejorando mis habilidades en el desarrollo frontend, con especial atención a las mejores prácticas de código y experiencia de usuario.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
                <h3 className="text-purple-400 font-bold text-base mb-3 flex items-center gap-2">
                  <Award size={20} />
                  Formación
                </h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li>
                    <div className="font-semibold">Ingeniería en Sistemas</div>
                    <div className="text-xs text-gray-400">UNAD - En curso</div>
                  </li>
                  <li>
                    <div className="font-semibold">Análisis y Desarrollo de Software</div>
                    <div className="text-xs text-gray-400">SENA - 2023-2025</div>
                  </li>
                  <li>
                    <div className="font-semibold">Bachiller Técnico</div>
                    <div className="text-xs text-gray-400">CASD - 2021</div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
                <h3 className="text-purple-400 font-bold text-base mb-3 flex items-center gap-2">
                  <TrendingUp size={20} />
                  Competencias
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    Comunicación efectiva
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    Trabajo colaborativo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    Resolución de problemas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    Aprendizaje continuo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    Adaptabilidad
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experiencia"
        className={`py-24 px-6 bg-gray-900/50 transition-all duration-1000 ${
          visibleSections.has('experiencia') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-white">
            Experiencia
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto mb-12 rounded-full" />

          <div className="relative">
            {EXPERIENCE_DATA.map((exp, index) => (
              <ExperienceItem key={index} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="habilidades"
        className={`py-24 px-6 transition-all duration-1000 ${
          visibleSections.has('habilidades') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-white">
            Habilidades
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/40 rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                <Code size={24} />
                Frontend
              </h3>
              {SKILLS_DATA.frontend.map((skill, i) => (
                <SkillBar key={i} skill={skill} isVisible={visibleSections.has('habilidades')} />
              ))}
            </div>

            <div className="space-y-8">
              <div className="bg-gray-800/40 rounded-xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                  📝 CMS
                </h3>
                {SKILLS_DATA.cms.map((skill, i) => (
                  <SkillBar key={i} skill={skill} isVisible={visibleSections.has('habilidades')} />
                ))}
              </div>

              <div className="bg-gray-800/40 rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-bold text-amber-400 mb-6">
              🧠 En aprendizaje
              </h3>
              <div className="space-y-3">
              {LEARNING_DATA.map((item, i) => {
                const iconComponents = {
                  BookOpen,
                  TestTube,
                  Route,
                  Package
                };
                const IconComponent = iconComponents[item.iconName];
                
                return (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="flex items-center gap-3">
                      {IconComponent && <IconComponent size={20} className="text-amber-400" />}
                      <span className="text-gray-200 text-sm">{item.name}</span>
                    </div>
                    <span className="text-xs bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-full">
                      {item.status}
                    </span>
             </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="proyectos"
        className={`py-24 px-6 bg-gray-900/50 transition-all duration-1000 ${
          visibleSections.has('proyectos') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-white">
            Proyectos
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto mb-4 rounded-full" />
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-sm">
            Proyectos desarrollados aplicando conocimientos en frontend
          </p>
 
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS_DATA.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

{/* 
          <div className="mt-12 text-center">
            <div className="inline-block bg-gray-800/40 rounded-xl p-6 border border-gray-700/50">
              <p className="text-gray-300 mb-2 text-sm">
                <span className="font-semibold text-purple-400">En desarrollo:</span> Nuevos proyectos con TypeScript y testing
              </p>
            </div>
          </div> */}

        </div>
      </section>

      <section
        id="contacto"
        className={`py-24 px-6 transition-all duration-1000 ${
          visibleSections.has('contacto') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-white">
            Contacto
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto mb-12 rounded-full" />

          <div className="text-center">
            <p className="text-base text-gray-300 mb-8 max-w-2xl mx-auto">
              Si estás interesado en mi perfil o quieres conocer más sobre mi experiencia, puedes descargar mi currículum o contactarme directamente.
            </p>

            <a
              href="public/hojavida/hojavida.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 rounded-lg font-medium text-base hover:bg-purple-700 transition-colors mb-12"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 16">
                <rect width="24" height="16" fill="#C60B1E"/>
                <rect width="24" height="6.4" y="4.8" fill="#FFC400"/>
              </svg>
              Descargar CV
            </a>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <a
                href="mailto:juanjoperez2121@gmail.com"
                className="bg-gray-800/40 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all"
              >
                <Mail className="text-purple-400 mx-auto mb-3" size={28} />
                <h3 className="font-semibold text-white mb-2 text-sm">Email</h3>
                <p className="text-gray-400 text-xs">juanjoperez2121@gmail.com</p>
              </a>

              <a
                href="https://linkedin.com/in/juanjperezb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/40 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all"
              >
                <Linkedin className="text-purple-400 mx-auto mb-3" size={28} />
                <h3 className="font-semibold text-white mb-2 text-sm">LinkedIn</h3>
                <p className="text-gray-400 text-xs">juanjperezb</p>
              </a>

              <a
                href="https://github.com/juanjuanjose"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/40 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all"
              >
                <Github className="text-purple-400 mx-auto mb-3" size={28} />
                <h3 className="font-semibold text-white mb-2 text-sm">GitHub</h3>
                <p className="text-gray-400 text-xs">juanjuanjose</p>
              </a>
            </div>
          </div>
        </div>
      </section>

    <footer className="py-12 px-6 bg-gray-900/80 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-white mb-2">
                Juan José Pérez Buriticá
              </div>
              <p className="text-gray-400 text-sm">Frontend Developer | React Specialist</p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/juanjuanjose"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com/in/juanjperezb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:juanjoperez2121@gmail.com"
                className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8" />

          <div className="text-center text-gray-400 text-sm">
            <p>© 2025 Juan José Pérez Buriticá</p>
            <p className="mt-2">Desarrollado con React + Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;