import PropTypes from "prop-types";
import NavLink from "../components/NavLink/NavLink";

const SiteHeader = ({ nav, brand }) => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
          {brand}
        </a>

        <nav className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur md:flex">
          {nav.map((navItem) => (
            <NavLink key={navItem.id} navItem={navItem} />
          ))}
        </nav>
      </div>
    </header>
  );
};

SiteHeader.propTypes = {
  brand: PropTypes.string.isRequired,
  nav: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired
};

export default SiteHeader;
