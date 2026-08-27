import PropTypes from "prop-types";

const socialLinks = [
  { key: "github", label: "GitHub" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "email", label: "Email" }
];

const FooterSection = ({ contact, footer }) => {
  const socialValues = {
    email: `mailto:${contact.email}`,
    github: contact.github,
    linkedin: contact.linkedin
  };

  return (
    <footer className="border-t border-[#780606]/35 bg-black/70 px-6 py-12 backdrop-blur">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xl font-semibold text-white">{footer.name}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">{footer.role}</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">{footer.note}</p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm uppercase tracking-[0.22em] text-slate-400 lg:justify-self-end">
            {socialLinks.map((item, index) => (
              <a
                key={item.key}
                href={socialValues[item.key]}
                target={item.key === "email" ? undefined : "_blank"}
                rel={item.key === "email" ? undefined : "noopener noreferrer"}
                className="transition-colors hover:text-white"
              >
                {item.label}
                {index < socialLinks.length - 1 && (
                  <span className="ml-5 text-[#780606]" aria-hidden="true">
                    /
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#780606]/50 to-transparent" />

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
