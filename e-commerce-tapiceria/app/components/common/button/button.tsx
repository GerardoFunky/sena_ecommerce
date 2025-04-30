import React from "react";
import * as reactSlot from "@radix-ui/react-slot";
import * as lucideReact from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./variants";
import { normalizeWhitespace } from "@/utils/helpers/stringHelpers";
import { cn } from "@/app/utils/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      width,
      iconPosition = "left",
      asChild = false,
      loading = false,
      loadingText,
      icon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    const isDisabled = disabled || loading;

    // Handle spacing between icon and text
    const iconSpacing = children
      ? iconPosition === "left"
        ? "mr-2"
        : "ml-2"
      : "";

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            width,
            iconPosition: icon ? iconPosition : "none",
            loading,
            className,
          })
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <lucideReact.Loader2 className="absolute h-4 w-4 animate-spin" />
        )}

        {icon && iconPosition === "left" && (
          <span className={cn(iconSpacing)}>{icon}</span>
        )}
        {loading ? loadingText : normalizeWhitespace(children)}
        {icon && iconPosition === "right" && (
          <span className={cn(iconSpacing)}>{icon}</span>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
