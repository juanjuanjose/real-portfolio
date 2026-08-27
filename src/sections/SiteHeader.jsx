import { useState } from "react";
import PropTypes from "prop-types";
import { Menu, X } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const alternateLanguage = language === "es" ? "en" : "es";
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((current) => !current);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#780606]/45 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
        <a
          href="#inicio"
          onClick={closeMenu}
          className="shrink-0 whitespace-nowrap text-sm font-semibold tracking-[0.12em] text-white md:text-base"
        >
          {brand}
        </a>

        <div className="ml-auto flex min-w-0 items-center justify-end gap-3">
          <nav className="hidden min-w-0 items-center gap-2 rounded-full border border-[#780606]/40 bg-white/[0.03] px-3 py-2 backdrop-blur md:flex">
            {nav.map((navItem) => (
              <NavLink key={navItem.id} navItem={navItem} className="hover:bg-white/5" />
            ))}
          </nav>

          <button
            type="button"
            aria-label={languageSwitcher.ariaLabel}
            title={`${languageSwitcher.ariaLabel}: ${languageOptions[alternateLanguage].name}. ${languageSwitcher.helper}`}
            onClick={onToggleLanguage}
            className="inline-flex min-h-[56px] items-center rounded-[1.75rem] border border-[#780606]/45 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-100 backdrop-blur transition-colors hover:border-[#780606] hover:bg-[#780606]/10"
          >
            <div className="flex items-center gap-3 py-0.5">
              <div className="flex shrink-0 items-center gap-2">
                <FlagIcon language={language} title={languageOptions[language].flag} />
                <span className="hidden h-5 w-px bg-white/10 sm:block" aria-hidden="true" />
              </div>

              <div className="hidden min-w-0 text-left sm:block">
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                  {languageSwitcher.title}
                </p>
                <div className="mt-0.5 flex items-center gap-1.5">
                  {Object.values(languageOptions).map((option) => {
                    const isActive = option.label.toLowerCase() === language;

                    return (
                      <span
                        key={option.label}
                        className={`inline-flex min-w-9 justify-center rounded-full border px-2 py-1 text-[10px] font-semibold tracking-[0.16em] transition-colors ${
                          isActive
                            ? "border-[#780606] bg-[#780606]/20 text-white"
                            : "border-white/10 bg-black/50 text-slate-500"
                        }`}
                      >
                        {option.label}
                      </span>
                    );
                  })}
                </div>
              </div>

              <span className="text-xs font-semibold tracking-[0.18em] text-slate-200 sm:hidden">
                {languageOptions[language].label}
              </span>
            </div>
          </button>

          <button
            type="button"
            aria-label={
              isMenuOpen ? languageSwitcher.menuCloseLabel : languageSwitcher.menuOpenLabel
            }
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#780606]/45 bg-white/[0.03] text-slate-200 backdrop-blur transition-colors hover:border-[#780606] hover:text-white md:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[#780606]/35 bg-black/95 px-6 py-5 backdrop-blur md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2">
            {nav.map((navItem) => (
              <NavLink
                key={navItem.id}
                navItem={navItem}
                onClick={closeMenu}
                className="rounded-2xl border border-[#780606]/25 bg-white/[0.03] px-4 py-3 text-base hover:bg-[#780606]/10"
              />
            ))}
          </nav>
        </div>
      )}
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
    menuCloseLabel: PropTypes.string.isRequired,
    menuOpenLabel: PropTypes.string.isRequired,
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
