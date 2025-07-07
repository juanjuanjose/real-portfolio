import { useState } from 'react';

const ProjectCard = ({ title, description, imgSrc, tags, githubUrl, demoUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-[rgba(255,255,255,0.05)] rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-[0_10px_20px_rgba(107,255,208,0.15)] border border-transparent hover:border-[rgba(107,255,208,0.2)] relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={imgSrc || "/images/placeholder.jpg"}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,23,42,0.9)] to-transparent"></div>
        <div className="absolute inset-0 flex items-end p-4">
          <h3 className="text-xl font-bold text-white relative z-10">
            {title}
          </h3>
        </div>
      </div>

      <div className="p-5">
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-[rgba(107,255,208,0.1)] text-[#6bffd0] border border-[rgba(107,255,208,0.2)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 bg-[#6bffd0] text-[#0f172a] rounded hover:bg-[#5ee2ba] font-medium transition-colors"
          >
            Ver demo
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm flex items-center text-gray-400 hover:text-[#6bffd0] transition-colors"
          >
            <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12...z" />
            </svg>
            Código
          </a>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-tr from-[#6bffd0] via-[#6B8BFF] to-[#FF6B8B] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;
