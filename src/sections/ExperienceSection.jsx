import PropTypes from "prop-types";

const ExperienceSection = ({ sectionContent, experience, isVisible }) => {
  return (
    <section
      id="experiencia"
      className={`bg-slate-950/60 px-6 py-24 transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
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
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 px-5 py-4 text-sm leading-7 text-slate-300"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[11px] top-5 bottom-5 hidden w-px bg-gradient-to-b from-violet-500/60 via-violet-500/20 to-transparent md:block" />

            <div className="space-y-6">
              {experience.map((item) => (
                <article
                  key={`${item.company}-${item.title}`}
                  className="relative rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:pl-10"
                >
                  <div className="absolute left-6 top-8 hidden h-3 w-3 rounded-full bg-violet-400 ring-8 ring-slate-950 md:block" />

                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
                        {item.type}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-base text-slate-300">{item.company}</p>
                    </div>
                    <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-200">
                      {item.period}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-violet-400" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-300"
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
    eyebrow: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    intro: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default ExperienceSection;
