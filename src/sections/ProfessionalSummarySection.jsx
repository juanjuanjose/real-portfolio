import PropTypes from "prop-types";
import { Bot, BrainCircuit, BriefcaseBusiness, GraduationCap } from "lucide-react";

const focusIcons = [BriefcaseBusiness, BrainCircuit, GraduationCap, Bot];

const ProfessionalSummarySection = ({ summary, isVisible }) => {
  return (
    <section
      id={summary.id}
      className={`px-6 py-24 transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-200">
            {summary.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-semibold text-white">{summary.title}</h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
            {summary.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">{summary.focusTitle}</h3>
            <div className="mt-6 space-y-4">
              {summary.focusAreas.map((area, index) => {
                const Icon = focusIcons[index] ?? BriefcaseBusiness;

                return (
                  <div
                    key={area.title}
                    className="rounded-2xl border border-white/10 bg-slate-950/60 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-200">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="font-medium text-white">{area.title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{area.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">{summary.educationTitle}</h3>
            <div className="mt-5 space-y-4">
              {summary.education.map((item) => (
                <div key={item.title} className="border-l border-cyan-400/30 pl-4">
                  <p className="font-medium text-slate-100">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProfessionalSummarySection.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  summary: PropTypes.shape({
    education: PropTypes.arrayOf(
      PropTypes.shape({
        subtitle: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired,
    educationTitle: PropTypes.string.isRequired,
    focusAreas: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired,
    focusTitle: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    eyebrow: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default ProfessionalSummarySection;
