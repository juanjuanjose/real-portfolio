const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/juan.jose.6610?mibextid=ZbWKwL",
    svgPath:
      "M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2.1 1.2-3.2 3-3.2.9 0 1.8.2 1.8.2v2h-1.1c-1.1 0-1.4.7-1.4 1.3v1.9h2.4l-.4 2.9h-2v7A10 10 0 0 0 22 12z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/juanjose2_1",
    svgPath:
      "M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/juan-jose",
    svgPath:
      "M16 0H0v16h16V0zM4.9 14H2.1V5.3h2.8V14zM3.5 4c-.9 0-1.5-.7-1.5-1.5C2 2 2.6 1.3 3.5 1.3S5 2 5 2.5C5 3.3 4.4 4 3.5 4zm10.5 10h-2.8v-4c0-1-.5-1.5-1.4-1.5-1 0-1.4.7-1.4 1.5v4H6.1V5.3h2.8v1.1c.5-.7 1.2-1.2 2.2-1.2 2 0 3.2 1.4 3.2 3.8v5z",
  },
  {
    label: "GitHub",
    href: "https://github.com/juanjuanjose",
    svgPath:
      "M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-5 mt-8 flex-wrap align-center justify-center flex-row">
      {socialLinks.map(({ label, href, svgPath }) => (
        <a
          key={label}
          className="text-[--color-secondary] text-2xl transition-all duration-300 hover:text-[--color-bluewhite] hover:-translate-y-1"
          href={href}
          aria-label={label}
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d={svgPath} />
          </svg>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
