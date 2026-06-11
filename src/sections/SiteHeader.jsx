import PropTypes from "prop-types";
import NavLink from "../components/NavLink/NavLink";

const FlagIcon = ({ language, title }) => {
  if (language === "es") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 28 20"
        className="h-5 w-7 overflow-hidden rounded-sm border border-white/20"
      >
        <title>{title}</title>
        <rect width="28" height="20" fill="#AA151B" />
        <rect y="5" width="28" height="10" fill="#F1BF00" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 28 20"
      className="h-5 w-7 overflow-hidden rounded-sm border border-white/20"
    >
      <title>{title}</title>
      <rect width="28" height="20" fill="#FFFFFF" />
      <rect width="28" height="2" y="0" fill="#B22234" />
      <rect width="28" height="2" y="4" fill="#B22234" />
      <rect width="28" height="2" y="8" fill="#B22234" />
      <rect width="28" height="2" y="12" fill="#B22234" />
      <rect width="28" height="2" y="16" fill="#B22234" />
      <rect width="12" height="10" fill="#3C3B6E" />
      <g fill="#FFFFFF">
        <circle cx="2.2" cy="2" r="0.6" />
        <circle cx="5" cy="2" r="0.6" />
        <circle cx="7.8" cy="2" r="0.6" />
        <circle cx="10.6" cy="2" r="0.6" />
        <circle cx="3.6" cy="4.2" r="0.6" />
        <circle cx="6.4" cy="4.2" r="0.6" />
        <circle cx="9.2" cy="4.2" r="0.6" />
        <circle cx="2.2" cy="6.4" r="0.6" />
        <circle cx="5" cy="6.4" r="0.6" />
        <circle cx="7.8" cy="6.4" r="0.6" />
        <circle cx="10.6" cy="6.4" r="0.6" />
        <circle cx="3.6" cy="8.6" r="0.6" />
        <circle cx="6.4" cy="8.6" r="0.6" />
        <circle cx="9.2" cy="8.6" r="0.6" />
      </g>
    </svg>
  );
};

const SiteHeader = ({
  nav,
  brand,
  language,
  languageOptions,
  languageSwitcher,
  onToggleLanguage
}) => {
  const alternateLanguage = language === "es" ? "en" : "es";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
        <a
          href="#inicio"
          className="shrink-0 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.3em] text-white"
        >
          {brand}
        </a>

        <div className="ml-auto flex min-w-0 items-center justify-end gap-3">
          <nav className="hidden min-w-0 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur md:flex">
            {nav.map((navItem) => (
              <NavLink key={navItem.id} navItem={navItem} />
            ))}
          </nav>

          <button
            type="button"
            aria-label={languageSwitcher.ariaLabel}
            title={`${languageSwitcher.ariaLabel}: ${languageOptions[alternateLanguage].name}. ${languageSwitcher.helper}`}
            onClick={onToggleLanguage}
            className="inline-flex h-14 w-[176px] items-center rounded-2xl border border-white/10 bg-white/5 px-3 text-sm font-medium text-slate-100 backdrop-blur transition-all hover:border-cyan-300/40 hover:bg-cyan-400/5 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]"
          >
            <div className="flex w-full items-center gap-3">
              <div className="flex shrink-0 items-center gap-3">
                <FlagIcon language={language} title={languageOptions[language].flag} />
                <span className="h-7 w-px bg-white/10" aria-hidden="true" />
              </div>

              <div className="min-w-0 flex-1 text-left">
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                  {languageSwitcher.title}
                </p>
                <div className="mt-1 flex items-center gap-2">
                  {Object.values(languageOptions).map((option) => {
                    const isActive = option.label.toLowerCase() === language;

                    return (
                      <span
                        key={option.label}
                        className={`inline-flex min-w-10 justify-center rounded-full border px-2 py-1 text-[11px] font-semibold tracking-[0.18em] transition-colors ${
                          isActive
                            ? "border-cyan-300/50 bg-cyan-400/15 text-cyan-100"
                            : "border-white/10 bg-slate-950/60 text-slate-500"
                        }`}
                      >
                        {option.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

FlagIcon.propTypes = {
  language: PropTypes.oneOf(["es", "en"]).isRequired,
  title: PropTypes.string.isRequired
};

SiteHeader.propTypes = {
  brand: PropTypes.string.isRequired,
  language: PropTypes.oneOf(["es", "en"]).isRequired,
  languageOptions: PropTypes.shape({
    en: PropTypes.shape({
      flag: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    es: PropTypes.shape({
      flag: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  languageSwitcher: PropTypes.shape({
    ariaLabel: PropTypes.string.isRequired,
    helper: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  nav: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  onToggleLanguage: PropTypes.func.isRequired
};

export default SiteHeader;
