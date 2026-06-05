import PropTypes from "prop-types";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const ProjectsSection = ({ projectsSection, projects, isVisible }) => {
  return (
    <section
      id="proyectos"
      className={`px-6 py-24 transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
            {projectsSection.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-semibold text-white">{projectsSection.title}</h2>
          <p className="mt-6 text-base leading-8 text-slate-400">{projectsSection.intro}</p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/60 px-6 py-5 text-sm leading-7 text-slate-300">
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
      image: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  projectsSection: PropTypes.shape({
    closingNote: PropTypes.string.isRequired,
    eyebrow: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default ProjectsSection;
