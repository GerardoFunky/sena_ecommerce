import React from "react";
import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge Component", () => {
  it("renders with default variant and size", () => {
    render(<Badge>Test</Badge>);
    const badge = screen.getByText("Test");
    expect(badge).toBeInTheDocument();
    expect(badge.parentElement).toHaveClass("bg-primary");
  });

  it("renders with different variants", () => {
    const { rerender } = render(<Badge variant="secondary">Secondary</Badge>);
    expect(screen.getByText("Secondary").parentElement).toHaveClass(
      "bg-secondary"
    );

    rerender(<Badge variant="destructive">Destructive</Badge>);
    expect(screen.getByText("Destructive").parentElement).toHaveClass(
      "bg-destructive"
    );

    rerender(<Badge variant="outline">Outline</Badge>);
    expect(screen.getByText("Outline").parentElement).toHaveClass("border");

    rerender(<Badge variant="success">Success</Badge>);
    expect(screen.getByText("Success").parentElement).toHaveClass(
      "bg-green-100"
    );

    rerender(<Badge variant="warning">Warning</Badge>);
    expect(screen.getByText("Warning").parentElement).toHaveClass(
      "bg-yellow-100"
    );

    rerender(<Badge variant="info">Info</Badge>);
    expect(screen.getByText("Info").parentElement).toHaveClass("bg-blue-100");

    rerender(<Badge variant="new">New</Badge>);
    expect(screen.getByText("New").parentElement).toHaveClass("bg-purple-100");

    rerender(<Badge variant="sale">Sale</Badge>);
    expect(screen.getByText("Sale").parentElement).toHaveClass("bg-red-100");
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<Badge size="sm">Small</Badge>);
    expect(screen.getByText("Small").parentElement).toHaveClass("h-5");

    rerender(<Badge size="default">Default</Badge>);
    expect(screen.getByText("Default").parentElement).toHaveClass("h-6");

    rerender(<Badge size="lg">Large</Badge>);
    expect(screen.getByText("Large").parentElement).toHaveClass("h-7");
  });

  it("renders with count instead of children", () => {
    render(<Badge count={5} />);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("limits count display with maxCount", () => {
    render(<Badge count={120} maxCount={99} />);
    expect(screen.getByText("99+")).toBeInTheDocument();
  });

  it("renders with a dot indicator", () => {
    render(<Badge dot>New</Badge>);
    const dot = screen
      .getByText("New")
      .parentElement?.querySelector(".mr-1.h-2.w-2.rounded-full");
    expect(dot).toBeInTheDocument();
  });

  it("passes additional className to the component", () => {
    render(<Badge className="custom-class">Test</Badge>);
    expect(screen.getByText("Test").parentElement).toHaveClass("custom-class");
  });
});
