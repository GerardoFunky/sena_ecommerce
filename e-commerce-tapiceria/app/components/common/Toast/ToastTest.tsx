import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toast from "./Toast";

// Mock timers
beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe("Toast Component", () => {
  const defaultProps = {
    message: "Test message",
    isVisible: true,
    onClose: jest.fn(),
  };

  it("renders correctly when visible", () => {
    render(<Toast {...defaultProps} />);
    expect(screen.getByText("Test message")).toBeInTheDocument();
  });

  it("does not render when not visible", () => {
    render(<Toast {...defaultProps} isVisible={false} />);
    expect(screen.queryByText("Test message")).not.toBeInTheDocument();
  });

  it("renders with correct variant styling", () => {
    const { rerender } = render(<Toast {...defaultProps} variant="success" />);
    expect(screen.getByRole("alert")).toHaveClass("opacity-100");

    rerender(<Toast {...defaultProps} variant="error" />);
    expect(screen.getByRole("alert")).toHaveClass("opacity-100");

    rerender(<Toast {...defaultProps} variant="warning" />);
    expect(screen.getByRole("alert")).toHaveClass("opacity-100");

    rerender(<Toast {...defaultProps} variant="info" />);
    expect(screen.getByRole("alert")).toHaveClass("opacity-100");
  });

  it("renders description when provided", () => {
    render(<Toast {...defaultProps} description="Test description" />);
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("renders action button when provided", () => {
    const onAction = jest.fn();
    render(
      <Toast {...defaultProps} actionLabel="Action" onAction={onAction} />
    );

    const actionButton = screen.getByText("Action");
    expect(actionButton).toBeInTheDocument();

    userEvent.click(actionButton);
    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when close button is clicked", () => {
    render(<Toast {...defaultProps} />);
    const closeButton = screen.getByLabelText("Close toast");

    userEvent.click(closeButton);

    // Fast-forward through the closing animation
    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("auto-closes after specified duration", async () => {
    render(<Toast {...defaultProps} duration={2000} />);

    // Fast-forward past the duration
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    // Fast-forward through the closing animation
    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("does not auto-close when duration is 0", () => {
    render(<Toast {...defaultProps} duration={0} />);

    // Fast-forward a long time
    act(() => {
      jest.advanceTimersByTime(10000);
    });

    expect(defaultProps.onClose).not.toHaveBeenCalled();
  });
});
