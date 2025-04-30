import React, { useEffect } from "react";
import { X } from "lucide-react";
import * as stringHelpers from "@/app/utils/Helpers/stringHelpers"; // Assuming this is where your cn utility is located

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  closeOnOverlayClick?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  position?: "center" | "top";
  showCloseButton?: boolean;
  closeOnEsc?: boolean;
  overlayClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  closeOnOverlayClick = true,
  size = "md",
  position = "center",
  showCloseButton = true,
  closeOnEsc = true,
  overlayClassName,
  contentClassName,
  titleClassName,
  bodyClassName,
  footerClassName,
}) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (closeOnEsc && isOpen && event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    // Lock body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, closeOnEsc]);

  // Don't render anything if modal is not open
  if (!isOpen) {
    return null;
  }

  // Size classes
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full m-4",
  };

  // Position classes
  const positionClasses = {
    center: "items-center",
    top: "items-start pt-10",
  };

  return (
    <div
      className={stringHelpers.cn(
        "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center",
        positionClasses[position],
        overlayClassName
      )}
      onClick={closeOnOverlayClick ? onClose : undefined}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Modal content container */}
      <div
        className={stringHelpers.cn(
          "bg-white rounded-lg shadow-xl w-full overflow-hidden",
          sizeClasses[size],
          "animate-in fade-in zoom-in-95 duration-300",
          contentClassName
        )}
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        {/* Modal header */}
        {(title || showCloseButton) && (
          <div
            className={stringHelpers.cn(
              "flex justify-between items-center border-b p-4",
              titleClassName
            )}
          >
            <div className="space-y-1">
              {title && (
                <h2 className="text-lg font-semibold" id="modal-title">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-sm text-gray-500">{description}</p>
              )}
            </div>

            {showCloseButton && (
              <button
                className="p-1 border-0 text-gray-400 hover:text-gray-500 rounded-full hover:bg-gray-100 transition-colors"
                onClick={onClose}
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        )}

        {/* Modal body */}
        <div className={stringHelpers.cn("p-4", bodyClassName)}>{children}</div>

        {/* Modal footer */}
        {footer && (
          <div
            className={stringHelpers.cn(
              "border-t p-4 bg-gray-50",
              footerClassName
            )}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export { Modal };
