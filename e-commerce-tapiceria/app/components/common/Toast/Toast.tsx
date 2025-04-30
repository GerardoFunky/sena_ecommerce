import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal } from "./Modal";
import "@testing-library/jest-dom";

describe("Modal Component", () => {
  // Mock functions
  const onCloseMock = jest.fn();

  // Reset mock function calls between tests
  beforeEach(() => {
    onCloseMock.mockReset();
  });

  it("does not render when isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={onCloseMock}>
        <div>Modal content</div>
      </Modal>
    );

    expect(screen.queryByText("Modal content")).not.toBeInTheDocument();
  });

  it("renders when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <div>Modal content</div>
      </Modal>
    );

    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });

  it("renders with a title when provided", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} title="Test Modal">
        <div>Modal content</div>
      </Modal>
    );

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
  });

  it("renders with a description when provided", () => {
    render(
      <Modal
        isOpen={true}
        onClose={onCloseMock}
        title="Test Modal"
        description="This is a test description"
      >
        <div>Modal content</div>
      </Modal>
    );

    expect(screen.getByText("This is a test description")).toBeInTheDocument();
  });

  it("renders with a footer when provided", () => {
    render(
      <Modal
        isOpen={true}
        onClose={onCloseMock}
        footer={<button>Submit</button>}
      >
        <div>Modal content</div>
      </Modal>
    );

    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("calls onClose when clicking the close button", async () => {
    const user = userEvent.setup();

    render(
      <Modal isOpen={true} onClose={onCloseMock} showCloseButton={true}>
        <div>Modal content</div>
      </Modal>
    );

    const closeButton = screen.getByLabelText("Close modal");
    await user.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when clicking the overlay if closeOnOverlayClick is true", async () => {
    const user = userEvent.setup();

    render(
      <Modal isOpen={true} onClose={onCloseMock} closeOnOverlayClick={true}>
        <div>Modal content</div>
      </Modal>
    );

    const overlay = screen.getByRole("dialog").parentElement;
    if (overlay) {
      await user.click(overlay);
      expect(onCloseMock).toHaveBeenCalledTimes(1);
    }
  });

  it("does not call onClose when clicking the overlay if closeOnOverlayClick is false", async () => {
    const user = userEvent.setup();

    render(
      <Modal isOpen={true} onClose={onCloseMock} closeOnOverlayClick={false}>
        <div>Modal content</div>
      </Modal>
    );

    const overlay = screen.getByRole("dialog").parentElement;
    if (overlay) {
      await user.click(overlay);
      expect(onCloseMock).not.toHaveBeenCalled();
    }
  });

  it("calls onClose when pressing Escape key if closeOnEsc is true", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} closeOnEsc={true}>
        <div>Modal content</div>
      </Modal>
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("does not call onClose when pressing Escape key if closeOnEsc is false", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} closeOnEsc={false}>
        <div>Modal content</div>
      </Modal>
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onCloseMock).not.toHaveBeenCalled();
  });

  it("applies different size classes correctly", () => {
    const { rerender } = render(
      <Modal isOpen={true} onClose={onCloseMock} size="sm">
        <div>Modal content</div>
      </Modal>
    );

    // Get the dialog content (not the overlay)
    let modalContent = screen.getByRole("document");
    expect(modalContent).toHaveClass("max-w-sm");

    // Test other sizes
    rerender(
      <Modal isOpen={true} onClose={onCloseMock} size="lg">
        <div>Modal content</div>
      </Modal>
    );

    modalContent = screen.getByRole("document");
    expect(modalContent).toHaveClass("max-w-lg");
  });

  it("applies different position classes correctly", () => {
    const { rerender } = render(
      <Modal isOpen={true} onClose={onCloseMock} position="center">
        <div>Modal content</div>
      </Modal>
    );

    let modalOverlay = screen.getByRole("dialog").parentElement;
    expect(modalOverlay).toHaveClass("items-center");

    rerender(
      <Modal isOpen={true} onClose={onCloseMock} position="top">
        <div>Modal content</div>
      </Modal>
    );

    modalOverlay = screen.getByRole("dialog").parentElement;
    expect(modalOverlay).toHaveClass("items-start");
  });

  it("applies custom class names when provided", () => {
    render(
      <Modal
        isOpen={true}
        onClose={onCloseMock}
        overlayClassName="custom-overlay"
        contentClassName="custom-content"
        titleClassName="custom-title"
        bodyClassName="custom-body"
        footer={<div>Footer</div>}
        footerClassName="custom-footer"
      >
        <div>Modal content</div>
      </Modal>
    );

    const overlay = screen.getByRole("dialog").parentElement;
    expect(overlay).toHaveClass("custom-overlay");

    const content = screen.getByRole("document");
    expect(content).toHaveClass("custom-content");
    // Check other custom classes if needed
  });
});
