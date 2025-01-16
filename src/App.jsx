import "./index.css";
import NavLink from "./components/NavLink/NavLink";
import meProfile from "../public/images/me-profile.png";
import Separator from "./components/Separator/Separator";
import Ability from "./components/Abilities/Ability";
import curriculum from "../public/hojadevida/hoja de vida juan.pdf";
import SocialLinks from "./components/Social/Social";

const title = document.getElementById("title--name");
const subtitle = document.getElementById("home--title");
const textos = [
  { text: "Programador", color: "#6bffd0" },
  { text: "Frontend", color: "#6bffd0" },
  { text: "Juan Jose", color: "#6bffd0" },
];
let index = 0;

function cambiarTextoConAnimacion() {
  title.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  subtitle.style.transition = "opacity 0.5s ease, transform 0.5s ease";

  title.style.opacity = "0";
  title.style.transform = "translateY(-20px)";
  subtitle.style.opacity = "0";
  subtitle.style.transform = "translateY(-20px)";

  setTimeout(() => {
    title.innerHTML = title.innerHTML.replace(
      /<span.*?>.*?<\/span>/,
      `<span style="color: ${textos[index].color};">${textos[index].text}</span>`
    );
    subtitle.innerHTML = subtitle.innerHTML.replace(
      /<span.*?>.*?<\/span>/,
      `<span style="color: ${textos[index].color};">${textos[index].text}</span>`
    );

    index = (index + 1) % textos.length;

    title.style.transform = "translateY(20px)";
    subtitle.style.transform = "translateY(20px)";

    requestAnimationFrame(() => {
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";
      subtitle.style.opacity = "1";
      subtitle.style.transform = "translateY(0)";
    });
  }, 500);
}

setInterval(cambiarTextoConAnimacion, 5000);

function App() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 bg-[rgba(18,18,18,0.9)] backdrop-blur-[10px] z-[1000] shadow-sm">
        <div className="flex flex-col items-center py-[15px] px-[10%] mx-0 my-auto md:gap-[20px] md:justify-between md:flex-row md:px-[17.6%] md:py-[11px] ">
          <div className="text-2xl font-bold text-[--color-bluewhite] cursor-pointer transform hover:scale-105 transition duration-300">
            <h1>MY PORTFOLIO</h1>
          </div>
          <nav>
            <div className="flex-wrap justify-center py-[20px] gap-[25px] flex  md:flex-row md:justify-center md:gap-[30px] md:items-center">
              <NavLink href="#Home">INICIO</NavLink>
              <NavLink href="#about">SOBRE MI</NavLink>
              <NavLink href="#skills">HABILIDADES</NavLink>
              <NavLink href="#curriculum">CURRICULUM</NavLink>
            </div>
          </nav>
        </div>
      </header>

      <section
        id="Home"
        className="px-[5%] py-[110%] flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[--color-gray] to-[--color-really-black] sm:py-[224px]"
      >
        <img
          className="w-[200px] h-[200px] rounded-full object-cover border-[3px] border-[--color-bluewhite] mb-8 shadow-[0_0_20px_rgba(107,255,208,0.3)] "
          src={meProfile}
          alt="Profile"
        />
        <div>
          <h1
            id="home--title"
            className="text-[28px] font-bold text-[--color-secondary] mb-2.5 md:text-[48px]"
          >
            Hola, soy{" "}
            <span id="title--name" className="text-[--color-bluewhite] ">
              Juan Jose
            </span>
          </h1>
        </div>

        <h3 className="text-xl text-[--color-primary] mb-8 animate-[--animation-h2] sm:text-2xl">
          Programador Junior
        </h3>

        <div className="flex gap-[20px] mt-8 flex-wrap justify-center">
          <SocialLinks />
        </div>
      </section>

      <section id="about" className="p-10 bg-[--color-really-black]">
        <Separator />
        <div className="max-w-[800px] my-0 mx-auto">
          <div>
            <h2>Sobre mi</h2>
            <p>
              Soy un programador web junior, con 3 años de aprendizaje,
              actualmente estoy en el proceso de aprendizaje de React y Tailwind
              Me apasiona la tecnología y la programación, y estoy emocionado de
              seguir aprendiendo y creciendo en este campo. Me encanta trabajar
              en equipo y colaborar con otros para crear soluciones innovadoras
              y de alta calidad.
            </p>

            <div className="mt-10">
              <h2>Lugares de aprendizaje</h2>
              <div className="bg-[rgba(255,255,255,0.05)] p-5 mb-5 transition-[--transition] relative rounded-lg hover:-lg hover:trashadownslate-y-[-5px] hover:shadow-[0_5px_15px_rgba(107,255,208,0.2)] ">
                <h3 className="text-green-500 mb-2.5 mt-3">SENA</h3>
                <p>
                  Durante mi formación de dos años en el SENA, adquirí sólidos
                  conocimientos en desarrollo web, especializándome en HTML,
                  CSS, JavaScript y React, con un enfoque en la creación de
                  interfaces modernas y responsivas. En el proyecto formativo
                  para la etapa de prácticas, fui responsable del diseño del
                  sitio web Misak, el cual fue destacado por su propuesta
                  innovadora, estética atractiva y representación cultural,
                  reforzando mis habilidades en diseño web y atención al
                  detalle.{" "}
                </p>
                <img
                  className="max-w-full h-14 rounded mt-3.5 absolute right-[0.94rem] bottom-[0.94rem] pt-4"
                  src="/images/sena.png"
                  alt="sena image"
                />
              </div>
              <div className="bg-[rgba(255,255,255,0.05)] p-5 mb-5 transition-[--transition] relative rounded-lg hover:-lg hover:trashadownslate-y-[-5px] hover:shadow-[0_5px_15px_rgba(107,255,208,0.2)] ">
                <h3 className="text-red-500 mb-2.5 mt-3  ">CASD</h3>
                <p>
                  Durante los grados 10 y 11 en el CASD, cursé una formación
                  tecnológica de dos años donde adquirí conocimientos en
                  desarrollo de aplicaciones móviles con App Inventor,
                  fundamentos de hardware y ciberseguridad, lo que me permitió
                  desarrollar una base integral en tecnología y programación
                  desde temprana edad.
                </p>
                <img
                  className="max-w-full h-14 rounded mt-3.5 absolute right-[0.94rem] bottom-[0.94rem] pt-4"
                  src="/images/casd.png"
                  alt="casd image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-[5%] bg-[--color-really-black]">
        <Separator />
        <div className="">
          <div className="max-w-[800px] my-0 mx-auto">
            <h2>Mis habilidades</h2>
            <p className="mb-10 leading-[1.6]">
              Soy un desarrollador web junior con una sólida base en CSS, lo que
              me permite crear diseños modernos y responsivos con un enfoque
              visualmente atractivo. Aunque soy relativamente nuevo en el campo,
              manejo HTML, y CSS con fluidez, y tengo experiencia trabajando con
              frameworks como Tailwind y bibliotecas como React. Estoy
              desarrollando mis habilidades y combinando estos conocimientos
              para crear interfaces funcionales y estéticamente agradables.
            </p>
            <div className="flex justify-center gap-[20px] flex-wrap">
              <Ability
                imgSrc="https://cdn.worldvectorlogo.com/logos/html-1.svg"
                labelText="HTML"
                alt="HTML"
              />
              <Ability
                imgSrc="https://cdn.worldvectorlogo.com/logos/css-3.svg"
                labelText="CSS"
                alt="CSS"
              />
              <Ability
                imgSrc="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                labelText="JavaScript"
                alt="Javascript"
              />
              <Ability
                imgSrc="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
                labelText="React"
                alt="React"
              />
              <Ability
                imgSrc="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                labelText="Tailwind"
                alt="Tailwind"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="curriculum"
        className="py-24 px-[5%] bg-[--color-really-black]"
      >
        <Separator />
        <div className="curriculum_inner">
          <div className="max-w-[800px] my-0 mx-auto flex justify-center items-center flex-col">
            <h2>Descarga mi hoja de vida</h2>
            <p>
              Si deseas conocer más sobre mi formación académica y habilidades,
              puedes descargar mi hoja de vida en el siguiente boton.
            </p>
            <svg
              className="text-[--color-bluewhite] text-[54px] transition-[--transition] m-8 animate-bounce  text-center "
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
              className="bg-[rgba(74,144,226,0.1)] text-[--color-secondary] py-[25px] px-[45px] text-base rounded-3xl flex align-center gap-[10px] cursor-pointer no-underline hover:bg-[rgba(74,144,226,0.2)] hover:translate-y-[-5px] hover:shadow-[0_5px_15px_rgba(107,255,208,0.2)] p-6"
              alt="button download"
              href={curriculum}
              target="_blank"
            >
              {" "}
              Descargar
            </a>
          </div>
        </div>
      </section>

      <footer className="py-5 px-[5%] bg-[--color-gray] text-center">
        <div>
          <p>© 2025 Juan Jose Perez Buritica</p>
        </div>
      </footer>
    </>
  );
}

export default App;
