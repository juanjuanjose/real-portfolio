import { useEffect, useState } from "react";

export const useSectionVisibility = ({ selector = "section[id]", threshold = 0.2 } = {}) => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((previousSections) => {
              const nextSections = new Set(previousSections);
              nextSections.add(entry.target.id);
              return nextSections;
            });
          }
        });
      },
      { threshold }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector, threshold]);

  return visibleSections;
};
