import PropTypes from "prop-types";
import { ArrowRight } from "lucide-react";

const HeroSection = ({ hero }) => {
  const [primaryRole] = hero.roles;
  const highlightedStats = hero.stats.slice(0, 2);

  return (
    <section id={hero.id} className="px-6 pb-24 pt-24 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-start lg:gap-14">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
              <span className="text-white">{hero.name}</span>
              <span className="text-[#780606]">/</span>
              <span>{hero.location}</span>
              <span className="text-[#780606]">/</span>
              <span>{hero.greeting}</span>
            </div>

            <p className="mt-10 text-sm font-medium uppercase tracking-[0.3em] text-[#d78a8a]">
              {hero.supportingLabel}
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-tight text-white md:text-6xl lg:text-[5rem]">
              {hero.headline}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              {hero.summary}
            </p>

            <div className="mt-8 inline-flex items-center rounded-full border border-[#780606]/28 bg-black/45 px-4 py-2.5 text-sm text-slate-300">
              <span className="font-medium uppercase tracking-[0.18em] text-[#f0c6c6]">{primaryRole}</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {hero.ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={
                    cta.variant === "primary"
                      ? "inline-flex items-center gap-2 rounded-full border border-[#780606] bg-[#780606] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-all hover:-translate-y-0.5 hover:border-[#a30b0b] hover:bg-[#8c0707]"
                      : "inline-flex items-center gap-2 rounded-full border border-[#780606]/40 bg-white/[0.02] px-6 py-3 text-sm font-medium uppercase tracking-[0.16em] text-slate-200 transition-colors hover:border-[#780606] hover:bg-[#780606]/10 hover:text-white"
                  }
                >
                  {cta.label}
                  {cta.variant === "primary" && <ArrowRight size={18} />}
                </a>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5 text-sm uppercase tracking-[0.22em] text-slate-400">
              {hero.socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.platform === "email" ? undefined : "_blank"}
                  rel={link.platform === "email" ? undefined : "noopener noreferrer"}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                  {index < hero.socialLinks.length - 1 && (
                    <span className="ml-5 text-[#780606]" aria-hidden="true">
                      /
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {highlightedStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.75rem] border border-[#780606]/20 bg-black/38 px-5 py-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d78a8a]">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:-mt-[236px] lg:justify-self-end lg:self-center">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -bottom-6 -left-6 right-10 top-10 rounded-[2.6rem] border border-[#780606]/20 bg-[linear-gradient(180deg,rgba(120,6,6,0.1),rgba(0,0,0,0.18))]" />
              <div className="absolute -right-3 top-14 h-24 w-24 rounded-full bg-[#780606]/12 blur-3xl" aria-hidden="true" />

              <div className="relative overflow-hidden rounded-[2.4rem] border border-[#780606]/35 bg-white/[0.03] p-4 shadow-[0_32px_110px_rgba(0,0,0,0.4)] backdrop-blur">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(120,6,6,0.14),transparent_24%)]" />
                <div className="relative flex items-center justify-between px-2 pb-4">
                  <span className="inline-flex rounded-full border border-[#780606]/35 bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f0c6c6]">
                    {hero.portraitBadge}
                  </span>
                  <span className="h-px w-16 bg-gradient-to-r from-[#780606]/70 to-transparent" aria-hidden="true" />
                </div>

                <div className="relative overflow-hidden rounded-[2rem] border border-[#780606]/28 bg-black">
                  <img
                    src={hero.profileImage}
                    alt={hero.profileAlt}
                    className="h-[540px] w-full object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/28 to-transparent" />
                </div>

                <div className="relative flex items-center gap-3 px-2 pt-4" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-[#780606]" />
                  <span className="h-px flex-1 bg-gradient-to-r from-[#780606]/70 via-[#780606]/15 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  hero: PropTypes.shape({
    ctas: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        variant: PropTypes.string.isRequired
      })
    ).isRequired,
    greeting: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profileAlt: PropTypes.string.isRequired,
    portraitBadge: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
    socialLinks: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        platform: PropTypes.string.isRequired
      })
    ).isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      })
    ).isRequired,
    summary: PropTypes.string.isRequired,
    supportingLabel: PropTypes.string.isRequired
  }).isRequired
};

export default HeroSection;
