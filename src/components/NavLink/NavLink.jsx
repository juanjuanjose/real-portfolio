const NavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="relative group text-[--color-secondary] text-sm font-medium hover:text-[--color-bluewhite] transition-colors duration-300 px-2 py-1"
    >
      {/* Línea de subrayado animada */}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#6bffd0] to-[#6B8BFF] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
      
      {children}
    </a>
  );
};

export default NavLink;