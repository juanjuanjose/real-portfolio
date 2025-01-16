import React from "react";

const NavLink = ({ href, children }) => {
  return (
    <a
      className="text-[--color-secondary] no-underline text-base font-normal transition-[--transition] relative group after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-[5px] after:left-0 after:bg-[var(--color-bluewhite)] after:transition-all after:duration-300 after:ease-in-out hover:text-[--color-bluewhite]"
      href={href}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[--color-bluewhite] transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </a>
  );
};

export default NavLink;
