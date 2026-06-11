import PropTypes from "prop-types";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project, actions }) => {
  const { demoUrl, description, featured, githubUrl, image, tags, title } = project;

  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
    >
      {featured && (
        <div className="absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-1 text-xs font-semibold text-white">
          {actions.featured}
        </div>
      )}

      <div className="relative h-[260px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>

        <div className="mb-6 mt-5 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100"
              >
                {tag}
              </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            <ExternalLink size={16} />
            {actions.demo}
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-300/30 hover:text-white"
          >
            <Github size={16} />
            {actions.code}
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  actions: PropTypes.shape({
    code: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    featured: PropTypes.string.isRequired
  }).isRequired,
  project: PropTypes.shape({
    demoUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    featured: PropTypes.bool,
    githubUrl: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default ProjectCard;
