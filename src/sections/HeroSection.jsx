import PropTypes from "prop-types";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const socialIcons = {
  email: Mail,
  github: Github,
  linkedin: Linkedin
};

const HeroSection = ({ hero, typingText }) => {
  return (
    <section id="inicio" className="min-h-screen flex items-center px-6 pt-24 pb-16">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
        <div>
          <span className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
            {hero.greeting}
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight text-white">
            {hero.name}
          </h1>

          <div className="mt-5 h-16 text-2xl md:text-3xl text-slate-300 font-light">
            {typingText}
            <span className="animate-pulse text-violet-400">|</span>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            {hero.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {hero.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={
                  cta.variant === "primary"
                    ? "inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-500"
                    : "inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
                }
              >
                {cta.label}
                {cta.variant === "primary" && <ArrowRight size={18} />}
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {hero.socialLinks.map((link) => {
              const Icon = socialIcons[link.platform];

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.platform === "email" ? undefined : "_blank"}
                  rel={link.platform === "email" ? undefined : "noopener noreferrer"}
                  aria-label={link.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900/70 text-slate-300 transition-colors hover:border-violet-500/40 hover:bg-violet-600 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="mx-auto max-w-sm overflow-hidden rounded-[2rem] border border-violet-500/20 bg-slate-900/80 p-3 shadow-2xl shadow-black/30">
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-950">
              <img
                src={hero.profileImage}
                alt="Retrato profesional de Juan José"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 backdrop-blur"
              >
                <p className="text-sm font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
              </div>
            ))}
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
    name: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
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
    summary: PropTypes.string.isRequired
  }).isRequired,
  typingText: PropTypes.string.isRequired
};

export default HeroSection;
