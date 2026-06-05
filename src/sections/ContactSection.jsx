import PropTypes from "prop-types";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const contactCards = [
  { key: "email", label: "Email", platformLabel: "Escríbeme directamente", icon: Mail },
  { key: "linkedin", label: "LinkedIn", platformLabel: "Perfil profesional", icon: Linkedin },
  { key: "github", label: "GitHub", platformLabel: "Código y repositorios", icon: Github }
];

const ContactSection = ({ contact, isVisible }) => {
  const contactValues = {
    email: {
      href: `mailto:${contact.email}`,
      text: contact.email
    },
    linkedin: {
      href: contact.linkedin,
      text: "linkedin.com/in/juanjperezb"
    },
    github: {
      href: contact.github,
      text: "github.com/juanjuanjose"
    }
  };

  return (
    <section
      id="contacto"
      className={`bg-slate-950/60 px-6 py-24 transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 md:p-10">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
            {contact.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-semibold text-white">{contact.title}</h2>
          <p className="mt-6 text-base leading-8 text-slate-300">{contact.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={contact.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-500"
            >
              <Download size={18} />
              Descargar CV
            </a>
            <span className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-300">
              {contact.availability}
            </span>
          </div>
        </div>

        <div className="grid gap-4">
          {contactCards.map((item) => {
            const Icon = item.icon;
            const value = contactValues[item.key];

            return (
              <a
                key={item.key}
                href={value.href}
                target={item.key === "email" ? undefined : "_blank"}
                rel={item.key === "email" ? undefined : "noopener noreferrer"}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition-colors hover:border-violet-500/30"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-violet-500/10 p-3 text-violet-300">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-medium text-white">{item.platformLabel}</p>
                    <p className="mt-2 text-sm text-slate-400">{value.text}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

ContactSection.propTypes = {
  contact: PropTypes.shape({
    availability: PropTypes.string.isRequired,
    cvUrl: PropTypes.string.isRequired,
    eyebrow: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  isVisible: PropTypes.bool.isRequired
};

export default ContactSection;
