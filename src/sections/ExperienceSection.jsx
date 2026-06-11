import PropTypes from "prop-types";

const ExperienceSection = ({ sectionContent, experience, isVisible }) => {
  return (
    <section
      id={sectionContent.id}
      className={`px-6 py-24 transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-200">
              {sectionContent.eyebrow}
            </span>
            <h2 className="mt-4 text-4xl font-semibold text-white">
              {sectionContent.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-400">{sectionContent.intro}</p>

            <div className="mt-8 space-y-3">
              {sectionContent.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-slate-300 backdrop-blur"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="absolute bottom-5 left-[11px] top-5 hidden w-px bg-gradient-to-b from-cyan-400/60 via-violet-500/20 to-transparent md:block" />

            <div className="space-y-6">
              {experience.map((item) => (
                <article
                  key={`${item.company}-${item.title}`}
                  className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:pl-16"
                >
                  <div className="absolute left-6 top-8 hidden h-3 w-3 rounded-full bg-cyan-300 ring-8 ring-slate-950 md:block" />

                  <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">
                        {item.type}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-base text-slate-300">{item.company}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-100 sm:mt-1">
                      {item.period}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ExperienceSection.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
      company: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      tech: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    })
  ).isRequired,
  isVisible: PropTypes.bool.isRequired,
    sectionContent: PropTypes.shape({
      id: PropTypes.string.isRequired,
      eyebrow: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    intro: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default ExperienceSection;
