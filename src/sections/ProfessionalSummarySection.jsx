import PropTypes from "prop-types";
import { BriefcaseBusiness, Workflow, Wrench } from "lucide-react";

const focusIcons = [BriefcaseBusiness, Workflow, Wrench];

const ProfessionalSummarySection = ({ summary, isVisible }) => {
  const [leadParagraph, supportingParagraph] = summary.paragraphs;

  return (
    <section
      id={summary.id}
      className={`px-6 py-24 transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-8 rounded-[2.4rem] border border-[#780606]/35 bg-white/[0.03] p-8 backdrop-blur md:p-10">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#d78a8a]">
                {summary.eyebrow}
              </span>
              <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-[2.8rem]">
                {summary.title}
              </h2>
            </div>

            <div className="h-px w-24 bg-[#780606]" aria-hidden="true" />

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <p className="text-lg leading-8 text-slate-200 md:text-xl md:leading-9">{leadParagraph}</p>
              <p className="text-base leading-8 text-slate-400">{supportingParagraph}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2.2rem] border border-[#780606]/35 bg-black/72 p-8">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#d78a8a]">
                {summary.focusTitle}
              </p>
              <div className="mt-6 space-y-4">
                {summary.focusAreas.map((area, index) => {
                  const Icon = focusIcons[index] ?? BriefcaseBusiness;

                  return (
                    <article
                      key={area.title}
                      className="rounded-[1.6rem] border border-[#780606]/25 bg-white/[0.02] p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="rounded-xl border border-[#780606]/30 bg-[#780606]/12 p-3 text-[#e7b1b1]">
                          <Icon size={18} />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-white">{area.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-400">{area.description}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-[#780606]/35 bg-white/[0.03] p-8 backdrop-blur">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#d78a8a]">
                {summary.educationTitle}
              </p>
              <div className="mt-6 space-y-5">
                {summary.education.map((item) => (
                  <article key={item.title} className="border-l border-[#780606]/45 pl-4">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-base text-slate-400">{item.subtitle}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2.4rem] border border-[#780606]/35 bg-white/[0.03] p-8 backdrop-blur md:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#d78a8a]">
                {summary.processTitle}
              </p>
              <h3 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-[2.35rem]">
                {summary.processHeadline}
              </h3>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-400">{summary.processIntro}</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {summary.process.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.6rem] border border-[#780606]/25 bg-black/72 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d78a8a]">
                  {(index + 1).toString().padStart(2, "0")}
                </p>
                <h4 className="mt-4 text-xl font-semibold text-white">{step.title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

ProfessionalSummarySection.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  summary: PropTypes.shape({
    eyebrow: PropTypes.string.isRequired,
    focusAreas: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired,
    focusTitle: PropTypes.string.isRequired,
    education: PropTypes.arrayOf(
      PropTypes.shape({
        subtitle: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired,
    educationTitle: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    process: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired,
    processHeadline: PropTypes.string.isRequired,
    processIntro: PropTypes.string.isRequired,
    processTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default ProfessionalSummarySection;
