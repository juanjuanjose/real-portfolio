import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { assetPath, portfolioContent } from "./content/portfolioContent";

describe("Portfolio language experience", () => {
  it("renders Spanish content by default", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /frontend con intenci.n. automatizaci.n .til. producto digital mejor resuelto/i
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/disponible para proyectos remotos/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /ridepedia es la pieza que mejor muestra el nivel visual y t.cnico que quiero proyectar/i
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/hojas de vida/i)).toBeInTheDocument();
    expect(screen.getByText((_, element) => element?.textContent === "Formación")).toBeInTheDocument();
    expect(screen.getByText(/ingenier.a en sistemas/i)).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("es");
  });

  it("switches the full page to English and persists the selection", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /cambiar idioma/i }));

    expect(screen.getByText(/available for remote projects/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /intentional frontend. useful automation. better resolved digital product/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /ridepedia is the piece that shows the visual and technical level i want to project most clearly/i
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/resumes/i)).toBeInTheDocument();
    expect(screen.getByText((_, element) => element?.textContent === "Education")).toBeInTheDocument();
    expect(screen.getByText(/systems engineering/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /resume in english/i })).toHaveAttribute(
      "href",
      assetPath("hojavida/CV_JuanJose_Completo_EN.pdf")
    );
    expect(window.localStorage.getItem("portfolio-language")).toBe("en");
    expect(document.documentElement.lang).toBe("en");
  });

  it("keeps both resume downloads available", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: /hoja de vida en espa.ol/i })).toHaveAttribute(
      "href",
      assetPath("hojavida/CV_JuanJose_Completo.pdf")
    );
    expect(screen.getByRole("link", { name: /resume in english/i })).toHaveAttribute(
      "href",
      assetPath("hojavida/CV_JuanJose_Completo_EN.pdf")
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
