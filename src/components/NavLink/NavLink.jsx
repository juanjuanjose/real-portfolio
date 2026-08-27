import PropTypes from "prop-types";

const NavLink = ({ navItem, className = "", onClick }) => {
  return (
    <a
      href={`#${navItem.id}`}
      onClick={onClick}
      className={`group relative rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white ${className}`}
    >
      <span className="absolute inset-x-2 bottom-0 h-0.5 origin-left scale-x-0 bg-[#780606] transition-transform duration-300 group-hover:scale-x-100" />
      {navItem.label}
    </a>
  );
};

NavLink.propTypes = {
  navItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default NavLink;
