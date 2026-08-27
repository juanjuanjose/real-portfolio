import PropTypes from "prop-types";

const ExperienceSection = ({ sectionContent, experience, isVisible }) => {
  return (
    <section
      id={sectionContent.id}
      className={`px-6 py-24 transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-4xl">
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#d78a8a]">
              {sectionContent.eyebrow}
            </span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
              {sectionContent.title}
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-400 lg:justify-self-end">
            {sectionContent.intro}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {sectionContent.highlights.map((highlight, index) => (
            <div
              key={highlight}
              className={`rounded-[1.6rem] border px-5 py-5 backdrop-blur ${
                index === 0
                  ? "border-[#780606]/40 bg-black/72 text-base leading-8 text-white md:col-span-3 lg:col-span-1"
                  : "border-[#780606]/25 bg-white/[0.03] text-sm leading-7 text-slate-300"
              }`}
            >
              {highlight}
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {experience.map((item, index) => (
            <article
              key={`${item.company}-${item.title}`}
              className="rounded-[2rem] border border-[#780606]/30 bg-white/[0.03] p-6 backdrop-blur md:p-7"
            >
              <div className="flex flex-col gap-5 border-b border-[#780606]/18 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#d78a8a]">
                    {item.type}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-[1.9rem]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base text-slate-300">{item.company}</p>
                </div>

                <div className="flex flex-col gap-3 sm:items-end">
                  <span className="inline-flex rounded-full border border-[#780606]/45 bg-[#780606]/14 px-4 py-1.5 text-sm text-[#f0c6c6]">
                    {item.period}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#780606]" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#780606]/25 bg-black/60 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
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
    id: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default ExperienceSection;
