import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { assetPath, portfolioContent } from "./content/portfolioContent";

describe("Portfolio language experience", () => {
  it("renders Spanish content by default", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /juan jos/i })).toBeInTheDocument();
    expect(screen.getByText(/hola, soy/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /evidencia de ejecuci.n, no promesas vac.as/i })).toBeInTheDocument();
    expect(screen.getByText(/hojas de vida/i)).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("es");
  });

  it("switches the full page to English and persists the selection", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /cambiar idioma/i }));

    expect(screen.getByText(/hi, i'm/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /execution you can verify, not empty promises/i })).toBeInTheDocument();
    expect(screen.getByText(/resumes/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /resume in english/i })).toHaveAttribute(
      "href",
      assetPath("hojavida/CV_JuanJose_en.pdf")
    );
    expect(window.localStorage.getItem("portfolio-language")).toBe("en");
    expect(document.documentElement.lang).toBe("en");
  });

  it("keeps both resume downloads available", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: /hoja de vida en espa.ol/i })).toHaveAttribute(
      "href",
      assetPath("hojavida/Hoja_de_vida.pdf")
    );
    expect(screen.getByRole("link", { name: /resume in english/i })).toHaveAttribute(
      "href",
      assetPath("hojavida/CV_JuanJose_en.pdf")
    );
  });

  it("keeps shared contact links consistent", () => {
    render(<App />);

    const githubLinks = screen.getAllByRole("link", { name: /github/i });
    const linkedinLinks = screen.getAllByRole("link", { name: /linkedin/i });
    const emailLinks = screen.getAllByRole("link", { name: /email|escr.beme directamente/i });

    githubLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", portfolioContent.es.contact.github);
    });

    linkedinLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", portfolioContent.es.contact.linkedin);
    });

    emailLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", `mailto:${portfolioContent.es.contact.email}`);
    });
  });
});
