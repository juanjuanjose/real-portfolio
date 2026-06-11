import PropTypes from "prop-types";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const socialIcons = {
  email: Mail,
  github: Github,
  linkedin: Linkedin
};

const HeroSection = ({ hero, typingText }) => {
  return (
    <section id={hero.id} className="min-h-screen flex items-center px-6 pt-24 pb-16">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
        <div>
          <span className="inline-flex items-center px-1 text-lg font-medium text-cyan-100 md:text-xl">
            {hero.greeting}
          </span>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
            {hero.name}
          </h1>

          <div className="mt-5 h-16 text-2xl font-light text-slate-200 md:text-3xl">
            {typingText}
            <span className="animate-pulse text-cyan-300">|</span>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {hero.summary}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {hero.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <p className={`text-xs uppercase tracking-[0.25em] ${card.accent}`}>{card.title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {hero.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={
                  cta.variant === "primary"
                    ? "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                    : "inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 backdrop-blur transition-colors hover:border-cyan-300/30 hover:text-white"
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
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 backdrop-blur transition-colors hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-white/5 p-3 shadow-[0_0_80px_rgba(59,130,246,0.15)] backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_60%)]" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
                <img
                  src={hero.profileImage}
                  alt={hero.profileAlt}
                  className="h-[420px] w-full object-cover"
                />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-2">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <p className="text-sm font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
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
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        accent: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired,
    greeting: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profileAlt: PropTypes.string.isRequired,
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
