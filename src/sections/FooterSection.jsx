import PropTypes from "prop-types";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { key: "github", icon: Github },
  { key: "linkedin", icon: Linkedin },
  { key: "email", icon: Mail }
];

const FooterSection = ({ contact, footer }) => {
  const socialValues = {
    email: `mailto:${contact.email}`,
    github: contact.github,
    linkedin: contact.linkedin
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950/70 px-6 py-12 backdrop-blur">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-semibold text-white">{footer.name}</p>
            <p className="mt-2 text-sm text-slate-400">{footer.role}</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">{footer.note}</p>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.key}
                  href={socialValues[item.key]}
                  target={item.key === "email" ? undefined : "_blank"}
                  rel={item.key === "email" ? undefined : "noopener noreferrer"}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <div className="flex flex-col gap-2 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>{footer.copyright}</p>
          <p>{footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

FooterSection.propTypes = {
  contact: PropTypes.shape({
    email: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired
  }).isRequired,
  footer: PropTypes.shape({
    copyright: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired
  }).isRequired
};

export default FooterSection;
