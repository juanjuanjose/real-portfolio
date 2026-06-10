import { portfolioContent } from "./content/portfolioContent";
import { useSectionVisibility } from "./hooks/useSectionVisibility";
import { useTypingText } from "./hooks/useTypingText";
import ContactSection from "./sections/ContactSection";
import AutomationSection from "./sections/AutomationSection";
import ExperienceSection from "./sections/ExperienceSection";
import FooterSection from "./sections/FooterSection";
import HeroSection from "./sections/HeroSection";
import ProfessionalSummarySection from "./sections/ProfessionalSummarySection";
import ProjectsSection from "./sections/ProjectsSection";
import SiteHeader from "./sections/SiteHeader";

function App() {
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
    summary
  } = portfolioContent;
  const typingText = useTypingText(hero.roles);
  const visibleSections = useSectionVisibility();
  const animatedSections = [
    {
      id: summary.id,
      render: (isVisible) => (
        <ProfessionalSummarySection summary={summary} isVisible={isVisible} />
      )
    },
    {
      id: "experiencia",
      render: (isVisible) => (
        <ExperienceSection
          sectionContent={experienceSection}
          experience={experience}
          isVisible={isVisible}
        />
      )
    },
    {
      id: "automatizacion",
      render: (isVisible) => (
        <AutomationSection sectionContent={automationSection} isVisible={isVisible} />
      )
    },
    {
      id: "proyectos",
      render: (isVisible) => (
        <ProjectsSection
          projectsSection={projectsSection}
          projects={projects}
          isVisible={isVisible}
        />
      )
    },
    {
      id: "contacto",
      render: (isVisible) => <ContactSection contact={contact} isVisible={isVisible} />
    }
  ];

  return (
    <div className="page-shell min-h-screen text-white">
      <div className="page-grid" aria-hidden="true" />
      <div className="page-glow" aria-hidden="true" />
      <SiteHeader nav={nav} brand={footer.name} />
      <main className="relative z-10">
        <HeroSection hero={hero} typingText={typingText} />
        {animatedSections.map((section) => (
          <div key={section.id}>{section.render(visibleSections.has(section.id))}</div>
        ))}
      </main>
      <FooterSection contact={contact} footer={footer} />
    </div>
  );
}

export default App;
