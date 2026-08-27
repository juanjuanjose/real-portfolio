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
          {sectionContent.pillars.map((pillar) => (
            <div
              key={pillar}
              className="rounded-[1.6rem] border border-[#780606]/25 bg-white/[0.03] px-5 py-5 text-sm leading-7 text-slate-300 backdrop-blur"
            >
              {pillar}
            </div>
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          {sectionContent.tools.map((tool) => {
            const Icon = toolIcons[tool.name] ?? Workflow;

            return (
              <article
                key={tool.name}
                className="rounded-[2rem] border border-[#780606]/25 bg-black/68 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-[#780606]/30 bg-[#780606]/14 p-3 text-[#e7b1b1]">
                    <Icon size={20} />
                  </div>

                  <div className="flex-1">
                    <p className="text-xl font-semibold text-white">{tool.name}</p>
                    <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[#d78a8a]">
                      {tool.category}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-300">{tool.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {tool.useCases.map((useCase) => (
                    <span
                      key={useCase}
                      className="rounded-full border border-[#780606]/35 bg-[#780606]/14 px-3 py-1 text-xs text-[#f0c6c6]"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

AutomationSection.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  sectionContent: PropTypes.shape({
    eyebrow: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
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
