import PropTypes from "prop-types";
import { Bot, Workflow, Zap } from "lucide-react";

const toolIcons = {
  "AI-assisted": Bot,
  "IA asistida": Bot,
  Make: Workflow,
  Zapier: Zap
};

const AutomationSection = ({ sectionContent, isVisible }) => {
  return (
    <section
      id={sectionContent.id}
      className={`px-6 py-24 transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-200">
              {sectionContent.eyebrow}
            </span>
            <h2 className="mt-4 text-4xl font-semibold text-white">{sectionContent.title}</h2>
            <p className="mt-6 text-base leading-8 text-slate-300">{sectionContent.intro}</p>

            <div className="mt-8 space-y-3">
              {sectionContent.pillars.map((pillar) => (
                <div
                  key={pillar}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 text-sm leading-7 text-slate-300"
                >
                  {pillar}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {sectionContent.tools.map((tool) => {
              const Icon = toolIcons[tool.name] ?? Workflow;

              return (
                <article
                  key={tool.name}
                  className="rounded-3xl border border-white/10 bg-slate-950/60 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-200">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-xl font-semibold text-white">{tool.name}</p>
                          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-cyan-200">
                            {tool.category}
                          </p>
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-slate-300">{tool.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {tool.useCases.map((useCase) => (
                          <span
                            key={useCase}
                            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

AutomationSection.propTypes = {
  isVisible: PropTypes.bool.isRequired,
    sectionContent: PropTypes.shape({
      id: PropTypes.string.isRequired,
      eyebrow: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    pillars: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(
      PropTypes.shape({
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        useCases: PropTypes.arrayOf(PropTypes.string).isRequired
      })
    ).isRequired
  }).isRequired
};

export default AutomationSection;
