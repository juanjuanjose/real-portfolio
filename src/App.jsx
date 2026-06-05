import { portfolioContent } from "./content/portfolioContent";
import { useSectionVisibility } from "./hooks/useSectionVisibility";
import { useTypingText } from "./hooks/useTypingText";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import FooterSection from "./sections/FooterSection";
import HeroSection from "./sections/HeroSection";
import ProfessionalSummarySection from "./sections/ProfessionalSummarySection";
import ProjectsSection from "./sections/ProjectsSection";
import SiteHeader from "./sections/SiteHeader";

function App() {
  const {
    contact,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SiteHeader nav={nav} brand={footer.name} />
      <main>
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
