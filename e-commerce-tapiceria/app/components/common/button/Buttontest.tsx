import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
import { Heart, ShoppingCart } from "lucide-react";

describe("Button Component", () => {
  it("renders with default variant and size", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-primary");
  });

  it("renders with different variants", () => {
    const { rerender } = render(
      <Button variant="destructive">Destructive</Button>
    );
    expect(screen.getByRole("button")).toHaveClass("bg-destructive");

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole("button")).toHaveClass("border-input");

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-secondary");

    rerender(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole("button")).toHaveClass("hover:bg-accent");

    rerender(<Button variant="link">Link</Button>);
    expect(screen.getByRole("button")).toHaveClass("hover:underline");

    // E-commerce specific variants
    rerender(<Button variant="cart">Add to Cart</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-green-600");

    rerender(<Button variant="wishlist">Add to Wishlist</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-pink-100");

    rerender(<Button variant="checkout">Checkout</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-indigo-600");

    rerender(<Button variant="apply">Apply Coupon</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-amber-500");
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole("button")).toHaveClass("h-9");

    rerender(<Button size="default">Default</Button>);
    expect(screen.getByRole("button")).toHaveClass("h-10");

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole("button")).toHaveClass("h-11");

    rerender(<Button size="xl">Extra Large</Button>);
    expect(screen.getByRole("button")).toHaveClass("h-12");

    rerender(
      <Button size="icon">
        <Heart />
      </Button>
    );
    expect(screen.getByRole("button")).toHaveClass("w-10");
  });

  it("renders with different width options", () => {
    const { rerender } = render(<Button width="default">Default Width</Button>);
    expect(screen.getByRole("button")).not.toHaveClass("w-full");
    expect(screen.getByRole("button")).not.toHaveClass("w-auto");

    rerender(<Button width="full">Full Width</Button>);
    expect(screen.getByRole("button")).toHaveClass("w-full");

    rerender(<Button width="auto">Auto Width</Button>);
    expect(screen.getByRole("button")).toHaveClass("w-auto");
  });

  it("renders with an icon on the left", () => {
    render(
      <Button icon={<ShoppingCart data-testid="cart-icon" />}>
        Add to Cart
      </Button>
    );
    const button = screen.getByRole("button");
    const icon = screen.getByTestId("cart-icon");

    expect(icon).toBeInTheDocument();
    expect(button).toHaveClass("flex-row");
    expect(icon.parentElement).toHaveClass("mr-2");
  });

  it("renders with an icon on the right", () => {
    render(
      <Button icon={<Heart data-testid="heart-icon" />} iconPosition="right">
        Add to Wishlist
      </Button>
    );

    const button = screen.getByRole("button");
    const icon = screen.getByTestId("heart-icon");

    expect(icon).toBeInTheDocument();
    expect(button).toHaveClass("flex-row-reverse");
    expect(icon.parentElement).toHaveClass("ml-2");
  });

  it("renders in loading state", () => {
    render(<Button loading>Submit</Button>);

    const button = screen.getByRole("button");
    const loader = button.querySelector(".animate-spin");

    expect(loader).toBeInTheDocument();
    expect(button).toHaveClass("text-transparent");
    expect(button).toBeDisabled();
  });

  it("renders with loading text when provided", () => {
    render(
      <Button loading loadingText="Processing...">
        Submit
      </Button>
    );

    const button = screen.getByRole("button", { name: /processing/i });
    expect(button).toBeInTheDocument();
  });

  it("handles click events when not disabled or loading", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not handle click events when disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("does not handle click events when loading", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} loading>
        Click me
      </Button>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("passes additional className to the component", () => {
    render(<Button className="custom-class">Test</Button>);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });
});
