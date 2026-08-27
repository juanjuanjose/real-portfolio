import PropTypes from "prop-types";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project, actions, featured = false }) => {
  const {
    demoUrl,
    description,
    featured: isFeatured,
    githubUrl,
    highlight,
    image,
    imageFit,
    imagePosition,
    tags,
    title
  } = project;
  const imageClass = imageFit === "contain" ? "object-contain" : "object-cover";
  const imagePositionClass = imagePosition === "center" ? "object-center" : "object-center";

  if (featured) {
    return (
      <article className="group overflow-hidden rounded-[2.25rem] border border-[#780606]/40 bg-white/[0.03] shadow-[0_32px_100px_rgba(0,0,0,0.4)] backdrop-blur">
        <div className="grid lg:grid-cols-[1.18fr_0.82fr] lg:items-stretch">
          <div className="relative min-h-[320px] overflow-hidden bg-black lg:min-h-[520px]">
            <img
              src={image}
              alt={title}
              className={`h-full w-full ${imageClass} ${imagePositionClass} p-6 transition-transform duration-500 group-hover:scale-[1.02] lg:p-8`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#780606]/45 to-transparent" />
          </div>

          <div className="flex flex-col justify-between p-8 md:p-10">
            <div>
              {(isFeatured || highlight) && (
                <div className="inline-flex rounded-full border border-[#780606] bg-[#780606]/18 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {highlight ?? actions.featured}
                </div>
              )}

              <h3 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-4xl">{title}</h3>
              <p className="mt-5 text-base leading-8 text-slate-300">{description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#780606]/25 bg-black/60 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#780606] bg-[#780606] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-[#a30b0b] hover:bg-[#8c0707]"
              >
                <ExternalLink size={16} />
                {actions.demo}
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#780606]/55 px-5 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-[#780606] hover:bg-[#780606]/10 hover:text-white"
              >
                <Github size={16} />
                {actions.code}
              </a>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-[#780606]/35 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-[#780606] hover:shadow-[0_0_40px_rgba(120,6,6,0.18)]">
      {isFeatured && (
        <div className="absolute right-4 top-4 z-10 rounded-full border border-[#780606] bg-[#780606]/18 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
          {actions.featured}
        </div>
      )}

      <div className="relative h-[240px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>

        <div className="mb-6 mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#780606]/25 bg-black/60 px-3 py-1.5 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#780606] bg-[#780606] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-[#a30b0b] hover:bg-[#8c0707]"
          >
            <ExternalLink size={16} />
            {actions.demo}
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#780606]/55 px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-[#780606] hover:bg-[#780606]/10 hover:text-white"
          >
            <Github size={16} />
            {actions.code}
          </a>
        </div>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  actions: PropTypes.shape({
    code: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    featured: PropTypes.string.isRequired
  }).isRequired,
  featured: PropTypes.bool,
  project: PropTypes.shape({
    demoUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    featured: PropTypes.bool,
    githubUrl: PropTypes.string.isRequired,
    highlight: PropTypes.string,
      image: PropTypes.string.isRequired,
      imageFit: PropTypes.string,
      imagePosition: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
};

export default ProjectCard;
