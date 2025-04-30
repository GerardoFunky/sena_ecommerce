import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";

// Mock component to wrap our component with BrowserRouter
const BreadcrumbWithRouter = (
  props: React.ComponentProps<typeof Breadcrumb>
) => (
  <BrowserRouter>
    <Breadcrumb {...props} />
  </BrowserRouter>
);

describe("Breadcrumb Component", () => {
  const items: BreadcrumbItem[] = [
    { label: "Products", href: "/products" },
    { label: "Sofas", href: "/products/sofas" },
    { label: "Leather Sofa" },
  ];

  it("renders all breadcrumb items", () => {
    render(<BreadcrumbWithRouter items={items} />);

    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Sofas")).toBeInTheDocument();
    expect(screen.getByText("Leather Sofa")).toBeInTheDocument();
  });

  it("renders home icon when showHomeIcon is true", () => {
    render(<BreadcrumbWithRouter items={items} showHomeIcon={true} />);

    // Home icon is rendered as SVG, we can check for the aria-label
    const homeLink = screen.getByLabelText("Home");
    expect(homeLink).toBeInTheDocument();
  });

  it("does not render home icon when showHomeIcon is false", () => {
    render(<BreadcrumbWithRouter items={items} showHomeIcon={false} />);

    // Home icon should not be present
    const homeLink = screen.queryByLabelText("Home");
    expect(homeLink).not.toBeInTheDocument();
  });

  it("uses custom homeHref when provided", () => {
    const customHomeHref = "/dashboard";
    render(<BreadcrumbWithRouter items={items} homeHref={customHomeHref} />);

    const homeLink = screen.getByLabelText("Home");
    expect(homeLink).toHaveAttribute("href", customHomeHref);
  });

  it("renders links for items with href", () => {
    render(<BreadcrumbWithRouter items={items} />);

    // First two items should be links
    const productLink = screen.getByText("Products");
    const sofasLink = screen.getByText("Sofas");

    expect(productLink.closest("a")).toHaveAttribute("href", "/products");
    expect(sofasLink.closest("a")).toHaveAttribute("href", "/products/sofas");
  });

  it("renders last item without a link", () => {
    render(<BreadcrumbWithRouter items={items} />);

    // Last item should not be a link
    const leatherSofa = screen.getByText("Leather Sofa");
    expect(leatherSofa.closest("a")).toBeNull();
  });

  it("applies font-medium to the last item", () => {
    render(<BreadcrumbWithRouter items={items} />);

    const leatherSofa = screen.getByText("Leather Sofa");
    expect(leatherSofa).toHaveClass("font-medium");
  });

  it("applies custom className to the component", () => {
    const customClass = "custom-breadcrumb";
    render(<BreadcrumbWithRouter items={items} className={customClass} />);

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass(customClass);
  });

  it("accepts custom separator", () => {
    const customSeparator = <span data-testid="custom-separator">/</span>;
    render(<BreadcrumbWithRouter items={items} separator={customSeparator} />);

    const separators = screen.getAllByTestId("custom-separator");
    expect(separators.length).toBeGreaterThan(0);
  });
});
