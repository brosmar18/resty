import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; 
import Header from "./index";

describe("Header Component", () => {
  it("renders the header component", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("renders the full navigation for larger screens", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const fullNav = screen.getByTestId("header").querySelector(".full-nav");
    expect(fullNav).toBeInTheDocument();
  });

  it("renders the mobile navigation for smaller screens", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const mobileNav = screen.getByTestId("header").querySelector(".mobile-nav");
    expect(mobileNav).toBeInTheDocument();
  });
});
