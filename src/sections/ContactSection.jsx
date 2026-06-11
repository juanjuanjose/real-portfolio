import PropTypes from "prop-types";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const contactIcons = {
  email: Mail,
  github: Github,
  linkedin: Linkedin
};

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
      id={contact.id}
      className={`px-6 py-24 transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-200">
            {contact.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-semibold text-white">{contact.title}</h2>
          <p className="mt-6 text-base leading-8 text-slate-300">{contact.intro}</p>

          <div className="mt-8 space-y-4">
            <span className="inline-flex rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-300">
              {contact.availability}
            </span>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">
                {contact.resumesTitle}
              </p>
              <div className="mt-4 grid gap-4">
                {contact.resumes.map((resume) => (
                  <a
                    key={resume.label}
                    href={resume.url}
                    download
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition-colors hover:border-cyan-300/30"
                  >
                    <div className="inline-flex shrink-0 rounded-xl bg-cyan-400/10 p-3 text-cyan-200">
                      <Download size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-base font-medium text-white">{resume.label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{resume.helper}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {contact.contactCards.map((item) => {
            const Icon = contactIcons[item.key];
            const value = contactValues[item.key];

            return (
              <a
                key={item.key}
                href={value.href}
                target={item.key === "email" ? undefined : "_blank"}
                rel={item.key === "email" ? undefined : "noopener noreferrer"}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-cyan-300/30"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-200">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">
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
    contactCards: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.oneOf(["email", "linkedin", "github"]).isRequired,
        label: PropTypes.string.isRequired,
        platformLabel: PropTypes.string.isRequired
      })
    ).isRequired,
    eyebrow: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    resumes: PropTypes.arrayOf(
      PropTypes.shape({
        helper: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    ).isRequired,
    resumesTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  isVisible: PropTypes.bool.isRequired
};

export default ContactSection;
