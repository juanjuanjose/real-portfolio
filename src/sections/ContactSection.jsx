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
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="rounded-[2.4rem] border border-[#780606]/35 bg-white/[0.03] p-8 backdrop-blur md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="max-w-4xl">
              <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#d78a8a]">
                {contact.eyebrow}
              </span>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
                {contact.title}
              </h2>
            </div>

            <div className="space-y-4 lg:justify-self-end">
              <p className="max-w-2xl text-base leading-8 text-slate-400">{contact.intro}</p>
              <span className="inline-flex rounded-full border border-[#780606]/35 bg-black/70 px-4 py-2 text-sm text-slate-300">
                {contact.availability}
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#780606]/30 bg-black/70 p-6 md:p-7">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#d78a8a]">
              {contact.resumesTitle}
            </p>
            <p className="mt-4 max-w-md text-base leading-8 text-slate-300">{contact.contactLead}</p>

            <div className="mt-6 grid gap-4">
              {contact.resumes.map((resume) => (
                <a
                  key={resume.label}
                  href={resume.url}
                  download
                  className="flex items-start gap-4 rounded-[1.6rem] border border-[#780606]/25 bg-white/[0.02] p-5 transition-colors hover:border-[#780606]"
                >
                  <div className="inline-flex shrink-0 rounded-xl border border-[#780606]/30 bg-[#780606]/14 p-3 text-[#e7b1b1]">
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

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {contact.contactCards.map((item) => {
              const Icon = contactIcons[item.key];
              const value = contactValues[item.key];

              return (
                <a
                  key={item.key}
                  href={value.href}
                  target={item.key === "email" ? undefined : "_blank"}
                  rel={item.key === "email" ? undefined : "noopener noreferrer"}
                  className="rounded-[2rem] border border-[#780606]/30 bg-white/[0.03] p-6 backdrop-blur transition-colors hover:border-[#780606]"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-[#780606]/30 bg-[#780606]/14 p-3 text-[#e7b1b1]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#d78a8a]">
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
    contactLead: PropTypes.string.isRequired,
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
