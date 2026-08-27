import { useEffect, useState } from "react";
import {
  defaultLanguage,
  languageOptions,
  portfolioContent
} from "./content/portfolioContent";
import { useSectionVisibility } from "./hooks/useSectionVisibility";
import ContactSection from "./sections/ContactSection";
import AutomationSection from "./sections/AutomationSection";
import ExperienceSection from "./sections/ExperienceSection";
import FooterSection from "./sections/FooterSection";
import HeroSection from "./sections/HeroSection";
import ProfessionalSummarySection from "./sections/ProfessionalSummarySection";
import ProjectsSection from "./sections/ProjectsSection";
import SiteHeader from "./sections/SiteHeader";

function App() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") {
      return defaultLanguage;
    }

    return window.localStorage.getItem("portfolio-language") ?? defaultLanguage;
  });
  const content = portfolioContent[language] ?? portfolioContent[defaultLanguage];
  const {
    contact,
    automationSection,
    experience,
    experienceSection,
    footer,
    hero,
    nav,
    projects,
    projectsSection,
    summary,
    languageSwitcher
  } = content;

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("portfolio-language", language);
    }

    document.documentElement.lang = language;
  }, [language]);

  const visibleSections = useSectionVisibility();
  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "es" ? "en" : "es"));
  };

  const animatedSections = [
    {
      id: summary.id,
      render: (isVisible) => (
        <ProfessionalSummarySection summary={summary} isVisible={isVisible} />
      )
    },
    {
      id: projectsSection.id,
      render: (isVisible) => (
        <ProjectsSection
          projectsSection={projectsSection}
          projects={projects}
          isVisible={isVisible}
        />
      )
    },
    {
      id: experienceSection.id,
      render: (isVisible) => (
        <ExperienceSection
          sectionContent={experienceSection}
          experience={experience}
          isVisible={isVisible}
        />
      )
    },
    {
      id: automationSection.id,
      render: (isVisible) => (
        <AutomationSection sectionContent={automationSection} isVisible={isVisible} />
      )
    },
    {
      id: contact.id,
      render: (isVisible) => <ContactSection contact={contact} isVisible={isVisible} />
    }
  ];

  return (
    <div className="page-shell min-h-screen text-white">
      <div className="page-grid" aria-hidden="true" />
      <div className="page-glow" aria-hidden="true" />
      <SiteHeader
        nav={nav}
        brand={hero.name}
        language={language}
        languageSwitcher={languageSwitcher}
        languageOptions={languageOptions}
        onToggleLanguage={toggleLanguage}
      />
      <main className="relative z-10">
        <HeroSection hero={hero} />
        {animatedSections.map((section) => (
          <div key={section.id}>{section.render(visibleSections.has(section.id))}</div>
        ))}
      </main>
      <FooterSection contact={contact} footer={footer} />
    </div>
  );
}

export default App;
