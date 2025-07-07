import { useEffect, useState, useCallback, useMemo } from "react";
import NavLink from "./components/NavLink/NavLink";
import meProfile from "../public/images/me-profile.png";
import Separator from "./components/Separator/Separator";
import Ability from "./components/Abilities/Ability";
import curriculum from "../public/hojavida/hojavida.pdf";
import SocialLinks from "./components/Social/Social";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import "./index.css";

// Constantes para evitar números mágicos y centralizar configuración
const ANIMATION_CONFIG = {
  textChangeInterval: 4000,
  transitionDuration: 400,
  observerThreshold: 0.3
};

const TEXT_ANIMATIONS = [
  { text: "Programador", color: "#64DFDF" },
  { text: "Frontend", color: "#8D99AE" },
  { text: "Juan Jose", color: "#48BFE3" },
];

const SKILLS_DATA = {
  main: [
    { imgSrc: "https://cdn.worldvectorlogo.com/logos/html-1.svg", labelText: "HTML", alt: "HTML" },
    { imgSrc: "https://cdn.worldvectorlogo.com/logos/css-3.svg", labelText: "CSS", alt: "CSS" },
    { imgSrc: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg", labelText: "JavaScript", alt: "Javascript" },
    { imgSrc: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg", labelText: "Tailwind", alt: "Tailwind" },
    { imgSrc: "https://cdn.worldvectorlogo.com/logos/react-2.svg", labelText: "React", alt: "React" }
  ],
  tools: [
    { imgSrc: "https://cdn.worldvectorlogo.com/logos/git-icon.svg", labelText: "Git", alt: "Git" },
    { imgSrc: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg", labelText: "GitHub", alt: "GitHub" },
    { imgSrc: "https://cdn.worldvectorlogo.com/logos/vitejs.svg", labelText: "Vite", alt: "Vite" },
    { imgSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/figma.svg", labelText: "Figma", alt: "Figma" }
  ],
  services: [
    { imgSrc: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg", labelText: "Firebase", alt: "Firebase" },
    { imgSrc: "https://cdn.worldvectorlogo.com/logos/netlify.svg", labelText: "Netlify", alt: "Netlify" },
    { imgSrc: "https://cdn.worldvectorlogo.com/logos/vercel.svg", labelText: "Vercel", alt: "Vercel" }
  ],
  learning: [
    { imgSrc: "https://cdn.worldvectorlogo.com/logos/typescript.svg", labelText: "TypeScript", alt: "TypeScript", className: "opacity-50" }
  ]
};

const PROJECTS_DATA = [
  {
    title: "Sitio Web Misak",
    description: "Un sitio web cultural sobre la comunidad Misak, desarrollado como proyecto en el SENA, donde me encargué del diseño y la creación de la interfaz.",
    imgSrc: "public/images/misak.png",
    tags: ["React", "JavaScript", "CSS", "API"],
    githubUrl: "https://github.com/jonathantombe/MisakGuambShop-Front",
    demoUrl: "https://misak-guamb-shop-front-qxyi.vercel.app/"
  },
  {
    title: "Portafolio personal",
    description: "Este es mi portafolio, el cual muestro mis habilidades sobre lo que he aprendido y lo que quiero aprender.",
    imgSrc: "public/images/profile.png",
    tags: ["React", "JavaScript", "CSS", "Tailwind"],
    githubUrl: "https://github.com/juanjuanjose/real-portfolio",
    demoUrl: "https://juanjuanjose.github.io/real-portfolio/"
  },
];

// Hook personalizado para manejar la visibilidad de secciones
const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState({
    skills: false,
    projects: false,
    about: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          if (entry.isIntersecting && id) {
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        });
      }, 
      { threshold: ANIMATION_CONFIG.observerThreshold }
    );
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));
    
    return () => observer.disconnect();
  }, []);

  return isVisible;
};

// Hook personalizado para la animación de texto
const useTextAnimation = () => {
  useEffect(() => {
    const titleElement = document.getElementById("title--name");
    const subtitleElement = document.getElementById("home--title");
    
    if (!titleElement || !subtitleElement) return;

    let index = 0;

    const animateText = () => {
      const { color, text } = TEXT_ANIMATIONS[index];
      
      // Fade out
      [titleElement, subtitleElement].forEach(el => {
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        el.style.opacity = "0";
        el.style.transform = "translateY(-20px)";
      });

      setTimeout(() => {
        // Update content
        const newSpan = `<span style="color: ${color};">${text}</span>`;
        titleElement.innerHTML = titleElement.innerHTML.replace(
          /<span.*?>.*?<\/span>/,
          newSpan
        );
        subtitleElement.innerHTML = subtitleElement.innerHTML.replace(
          /<span.*?>.*?<\/span>/,
          newSpan
        );

        index = (index + 1) % TEXT_ANIMATIONS.length;

        // Prepare for fade in
        [titleElement, subtitleElement].forEach(el => {
          el.style.transform = "translateY(20px)";
        });

        // Fade in
        requestAnimationFrame(() => {
          [titleElement, subtitleElement].forEach(el => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          });
        });
      }, ANIMATION_CONFIG.transitionDuration);
    };

    const interval = setInterval(animateText, ANIMATION_CONFIG.textChangeInterval);
    return () => clearInterval(interval);
  }, []);
};

// Componente para renderizar grupos de habilidades
const SkillGroup = ({ title, skills, emoji, color }) => (
  <div className="mb-16">
    <h3 className={`text-lg font-semibold text-[${color}] mb-4`}>
      {emoji} {title}
    </h3>
    <div className="flex justify-center gap-[20px] flex-wrap mb-10">
      {skills.map((skill, index) => (
        <Ability
          key={`${skill.labelText}-${index}`}
          imgSrc={skill.imgSrc}
          labelText={skill.labelText}
          alt={skill.alt}
          className={skill.className}
        />
      ))}
    </div>
  </div>
);

// Componente principal
function App() {
  const isVisible = useIntersectionObserver();
  useTextAnimation();

  const skillGroups = useMemo(() => [
    { title: "Tecnologías principales", skills: SKILLS_DATA.main, emoji: "📦", color: "#64DFDF" },
    { title: "Herramientas", skills: SKILLS_DATA.tools, emoji: "🛠️", color: "#48BFE3" },
    { title: "Servicios", skills: SKILLS_DATA.services, emoji: "☁️", color: "#8D99AE" },
    { title: "En proceso de aprendizaje", skills: SKILLS_DATA.learning, emoji: "🧠", color: "gray-400" }
  ], []);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 inset-x-0 bg-[rgba(18,18,18,0.9)] backdrop-blur-[10px] z-[1000] shadow-[0_4px_15px_rgba(100,223,223,0.15)]">
        <div className="flex flex-col items-center py-[15px] px-[10%] mx-0 my-auto md:gap-[20px] md:justify-between md:flex-row md:px-[17.6%] md:py-[11px]">
          <div className="text-2xl font-bold text-[--color-bluewhite] cursor-pointer transform hover:scale-105 transition duration-300">
            <h1>MY PORTFOLIO</h1>
          </div>
          <nav>
            <div className="flex-wrap justify-center py-[20px] gap-[25px] flex md:flex-row md:justify-center md:gap-[30px] md:items-center">
              <NavLink href="#Home">INICIO</NavLink>
              <NavLink href="#about">SOBRE MI</NavLink>
              <NavLink href="#skills">HABILIDADES</NavLink>
              <NavLink href="#projects">PROYECTOS</NavLink>
              <NavLink href="#curriculum">CURRICULUM</NavLink>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="Home"
        className="px-[5%] py-[110%] flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#1a202c] to-[#111827] sm:py-[224px]"
      >
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#64DFDF] via-[#48BFE3] to-[#8D99AE] rounded-full blur opacity-75 animate-pulse"></div>
          <img
            className="relative w-[200px] h-[200px] rounded-full object-cover border-[3px] border-[--color-bluewhite] mb-8 shadow-[0_0_20px_rgba(100,223,223,0.3)]"
            src={meProfile}
            alt="Profile"
          />
        </div>
        
        {/* Nueva sección de presentación moderna */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[3px] w-8 bg-gradient-to-r from-[#64DFDF] to-[#48BFE3]"></div>
            <span className="text-[#64DFDF] text-sm uppercase tracking-wider font-medium">Bienvenido</span>
            <div className="h-[3px] w-8 bg-gradient-to-r from-[#48BFE3] to-[#64DFDF]"></div>
          </div>
          
          <h1 id="home--title" className="text-[28px] font-bold text-[--color-secondary] mb-2.5 md:text-[48px] text-center">
            Soy <span id="title--name" className="text-[--color-bluewhite] relative inline-block">
              <span className="text-[--color-bluewhite]">Juan Jose</span>
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#64DFDF] to-[#48BFE3]"></span>
            </span>
          </h1>
          
          <div className="flex items-center gap-3 mt-4">
            <div className="h-[2px] w-6 bg-[#8D99AE] opacity-50"></div>
            <h3 className="text-xl text-[--color-primary] animate-[--animation-h2] sm:text-2xl px-3 py-1 border border-[rgba(100,223,223,0.3)] rounded-full bg-[rgba(100,223,223,0.05)]">
              Desarrollador Frontend
            </h3>
            <div className="h-[2px] w-6 bg-[#8D99AE] opacity-50"></div>
          </div>
          
          <p className="text-center max-w-[500px] mt-6 text-gray-400 leading-relaxed">
            Codigo con intención, diseño con propósito
          </p>
        </div>

        <div className="flex gap-[20px] mt-12 flex-wrap justify-center">
          <SocialLinks />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-10 bg-gradient-to-b from-[#111827] to-[#0f172a]">
        <Separator />
        <div className={`max-w-[800px] my-0 mx-auto transition-all duration-1000 ${
          isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div>
            <h2 className="relative inline-block pb-2 mb-6">
              <span className="relative z-10">Sobre mí</span>
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-[#64DFDF] to-[#48BFE3]"></span>
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              Soy desarrollador web junior con una base sólida en HTML, CSS y JavaScript.
              Me especializo en crear interfaces modernas, responsivas y accesibles, utilizando
              frameworks como Tailwind CSS y bibliotecas como React. Actualmente sigo
              perfeccionando mis habilidades enfocándome en la creación de experiencias
              interactivas, visualmente atractivas y funcionales desde el frontend.
            </p>

            <div className="mt-10">
              <h2 className="relative inline-block pb-2 mb-6">
                <span className="relative z-10">Lugares de aprendizaje</span>
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-[#48BFE3] to-[#8D99AE]"></span>
              </h2>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-[rgba(255,255,255,0.05)] p-6 mb-2 transition-all duration-300 relative rounded-lg hover:translate-y-[-5px] hover:shadow-[0_5px_15px_rgba(100,223,223,0.2)] border border-transparent hover:border-[rgba(100,223,223,0.2)] md:w-1/2">
                  <div className="absolute top-0 right-0 bg-[#64DFDF] text-gray-800 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    2021-2024
                  </div>
                  <h3 className="text-[#64DFDF] font-bold text-xl mb-3 mt-2">SENA</h3>
                  <p className="text-gray-200">
                    Durante mi formación de dos años en el SENA, adquirí sólidos
                    conocimientos en desarrollo web, especializándome en HTML,
                    CSS, JavaScript y React, con un enfoque en la creación de
                    interfaces modernas y responsivas. En el proyecto formativo
                    para la etapa de prácticas, fui responsable del diseño del
                    sitio web Misak, el cual fue destacado por su propuesta
                    innovadora, estética atractiva y representación cultural.
                  </p>
                  <img
                    className="max-w-full h-14 rounded mt-3.5 absolute right-[0.94rem] bottom-[0.94rem] pt-4"
                    src="./images/sena.png"
                    alt="sena image"
                  />
                </div>
                
                <div className="bg-[rgba(255,255,255,0.05)] p-6 mb-2 transition-all duration-300 relative rounded-lg hover:translate-y-[-5px] hover:shadow-[0_5px_15px_rgba(100,223,223,0.2)] border border-transparent hover:border-[rgba(100,223,223,0.2)] md:w-1/2 md:mt-12">
                  <div className="absolute top-0 right-0 bg-[#8D99AE] text-gray-800 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    2019-2021
                  </div>
                  <h3 className="text-[#8D99AE] font-bold text-xl mb-3 mt-2">CASD</h3>
                  <p className="text-gray-200">
                    Durante los grados 10 y 11 en el CASD, cursé una formación
                    tecnológica de dos años donde adquirí conocimientos en
                    desarrollo de aplicaciones móviles con App Inventor,
                    fundamentos de hardware y ciberseguridad, lo que me permitió
                    desarrollar una base integral en tecnología y programación
                    desde temprana edad.
                  </p>
                  <img
                    className="max-w-full h-14 rounded mt-3.5 absolute right-[0.94rem] bottom-[0.94rem] pt-4"
                    src="./images/casd.png"
                    alt="casd image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-[5%] bg-gradient-to-b from-[#0f172a] to-[#0f1729]">
        <Separator />
        <div className={`transition-all duration-1000 ${
          isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-[800px] my-0 mx-auto">
            <h2 className="relative inline-block pb-2 mb-6">
              <span className="relative z-10">Mis habilidades</span>
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-[#8D99AE] to-[#64DFDF]"></span>
            </h2>
            
            {skillGroups.map((group, index) => (
              <SkillGroup
                key={`skill-group-${index}`}
                title={group.title}
                skills={group.skills}
                emoji={group.emoji}
                color={group.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-[5%] bg-gradient-to-b from-[#0f1729] to-[#111827]">
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              tags={project.tags}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </section>

      {/* Curriculum Section */}
      <section
        id="curriculum"
        className="py-24 px-[5%] bg-gradient-to-b from-[#111827] to-[#1a202c]"
      >
        <Separator />
        <div className="curriculum_inner">
          <div className="max-w-[800px] my-0 mx-auto flex justify-center items-center flex-col">
            <h2 className="relative inline-block pb-2 mb-6">
              <span className="relative z-10">Descarga mi hoja de vida</span>
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-[#48BFE3] to-[#64DFDF]"></span>
            </h2>
            <p className="text-center max-w-[600px] mb-6">
              Si deseas conocer más sobre mi formación académica y habilidades,
              puedes descargar mi hoja de vida en el siguiente botón.
            </p>
            <svg
              className="text-[#64DFDF] text-[54px] transition-all duration-300 m-8 animate-bounce text-center"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
              />
            </svg>

            <a
              className="bg-[rgba(74,144,226,0.1)] text-[--color-secondary] py-[25px] px-[45px] text-base rounded-3xl flex align-center gap-[10px] cursor-pointer no-underline hover:bg-[rgba(74,144,226,0.2)] hover:translate-y-[-5px] hover:shadow-[0_5px_15px_rgba(100,223,223,0.2)] transition-all duration-300 border border-transparent hover:border-[rgba(100,223,223,0.3)]"
              alt="button download"
              href={curriculum}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg 
                className="w-6 h-6 mr-2" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
                  clipRule="evenodd"
                />
              </svg>
              Descargar CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-[5%] bg-gradient-to-b from-[#1a202c] to-[#111827] text-center">
        <div className="max-w-[800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="text-2xl font-bold text-[--color-bluewhite] mb-4 md:mb-0">
              Juan Jose Perez Buritica
            </div>
            <div className="flex gap-4">
              <SocialLinks small />
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(100,223,223,0.3)] to-transparent my-6"></div>
          <p className="text-gray-400">© 2025 Juan Jose Perez Buritica - Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
}

export default App;