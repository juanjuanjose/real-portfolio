import { render, screen, within } from "@testing-library/react";
import App from "./App";
import { assetPath, portfolioContent } from "./content/portfolioContent";

describe("Portfolio landing spec coverage", () => {
  it("professional narrative consistency - hero and summary align", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /juan jos/i })).toBeInTheDocument();
    expect(screen.getByText(/hoy me posiciono como programador full stack/i)).toBeInTheDocument();
    expect(screen.getAllByText(/programador full stack .* automatizaci.n/i).length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: /trabajo y formaci.n conectados con operaci.n digital real/i })).toBeInTheDocument();
    expect(screen.getByText(/react \+ tailwind .* automatizaci.n y ejecuci.n/i)).toBeInTheDocument();
  });

  it("professional narrative consistency - no inflated claims", () => {
    render(<App />);

    expect(screen.queryByText(/junior/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/senior/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/experto/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/ninja/i)).not.toBeInTheDocument();
  });

  it("evidence-based capability presentation - skill percentages removed", () => {
    render(<App />);

    expect(screen.queryByRole("heading", { name: /habilidades/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/\d+%/)).not.toBeInTheDocument();
  });

  it("evidence-based capability presentation - replacement remains useful", () => {
    render(<App />);

    const projectsSection = screen.getByRole("heading", {
      name: /evidencia de ejecuci.n, no promesas vac.as/i,
    }).closest("section");

    expect(projectsSection).not.toBeNull();
    expect(screen.getByRole("heading", { name: /trabajo y formaci.n conectados/i })).toBeInTheDocument();
    expect(within(projectsSection).getByText(/sitio web misak/i)).toBeInTheDocument();
    expect(within(projectsSection).getByText(/portfolio personal/i)).toBeInTheDocument();
  });

  it("e-commerce and AI focus preservation - domain focus remains visible", () => {
    render(<App />);

    expect(screen.getAllByText(/e-commerce/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/ia asistida/i)).toBeInTheDocument();
    expect(screen.getByText(/ia como acelerador, no atajo/i)).toBeInTheDocument();
  });

  it("e-commerce and AI focus preservation - focus stays credible", () => {
    render(<App />);

    expect(screen.getByText(/wordpress/i)).toBeInTheDocument();
    expect(screen.getAllByText(/react/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/api/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/operaci.n digital/i).length).toBeGreaterThan(0);
  });

  it("automation stack visibility - zapier and make are present", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /herramientas para conectar procesos/i })).toBeInTheDocument();
    expect(screen.getAllByText(/zapier/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/make/i).length).toBeGreaterThan(0);
  });

  it("futuristic visual system - app renders background layers", () => {
    render(<App />);

    expect(document.querySelector(".page-grid")).not.toBeNull();
    expect(document.querySelector(".page-glow")).not.toBeNull();
  });

  it("safe public assets and links - asset paths survive deployment", () => {
    render(<App />);

    const cvLink = screen.getByRole("link", { name: /descargar cv/i });
    expect(cvLink).toHaveAttribute("href", assetPath("hojavida/hojavida.pdf"));

    const heroImage = screen.getByAltText(/retrato profesional de juan jos/i);
    expect(heroImage).toHaveAttribute("src", assetPath("images/yo.jpg"));

    expect(assetPath("images/profile.png")).toBe(`${import.meta.env.BASE_URL}images/profile.png`);
  });

  it("safe public assets and links - repeated links stay consistent", () => {
    render(<App />);

    const githubLinks = screen.getAllByRole("link", { name: /github/i });
    const linkedinLinks = screen.getAllByRole("link", { name: /linkedin/i });
    const emailLinks = screen.getAllByRole("link", { name: /email|escr.beme directamente/i });

    githubLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", portfolioContent.contact.github);
    });

    linkedinLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", portfolioContent.contact.linkedin);
    });

    emailLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", `mailto:${portfolioContent.contact.email}`);
    });
  });
});
