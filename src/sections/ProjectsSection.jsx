import PropTypes from "prop-types";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const ProjectsSection = ({ projectsSection, projects, isVisible }) => {
  const [featuredProject, ...secondaryProjects] = projects;

  return (
    <section
      id={projectsSection.id}
      className={`px-6 py-24 transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-4xl">
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#d78a8a]">
              {projectsSection.eyebrow}
            </span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
              {projectsSection.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-400 lg:justify-self-end">
            {projectsSection.intro}
          </p>
        </div>

        {featuredProject && (
          <div>
            <ProjectCard project={featuredProject} actions={projectsSection.actions} featured />
          </div>
        )}

        {secondaryProjects.length > 0 && (
          <div>
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-sm font-medium uppercase tracking-[0.25em] text-slate-300">
                {projectsSection.actions.secondaryTitle}
              </h3>
              <div className="h-px flex-1 bg-[#780606]/30" aria-hidden="true" />
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {secondaryProjects.map((project) => (
                <ProjectCard key={project.title} project={project} actions={projectsSection.actions} />
              ))}
            </div>
          </div>
        )}

        <div className="rounded-[2rem] border border-[#780606]/35 bg-black/70 px-6 py-5 text-sm leading-7 text-slate-300">
          {projectsSection.closingNote}
        </div>
      </div>
    </section>
  );
};

ProjectsSection.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      demoUrl: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      featured: PropTypes.bool,
      githubUrl: PropTypes.string.isRequired,
      highlight: PropTypes.string,
      image: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  projectsSection: PropTypes.shape({
    actions: PropTypes.shape({
      code: PropTypes.string.isRequired,
      demo: PropTypes.string.isRequired,
      featured: PropTypes.string.isRequired,
      secondaryTitle: PropTypes.string.isRequired
    }).isRequired,
    closingNote: PropTypes.string.isRequired,
    eyebrow: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default ProjectsSection;
