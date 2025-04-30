import React, { forwardRef } from "react";
import { cn } from "@/app/utils/Helpers/stringHelpers"; // assuming you have a cn utility for class merging

export type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "success"
  | "warning"
  | "info"
  | "new"
  | "sale";

export type BadgeSize = "sm" | "default" | "lg";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Badge visual style variant */
  variant?: BadgeVariant;
  /** Badge size */
  size?: BadgeSize;
  /** Optional numeric count to display instead of children */
  count?: number;
  /** Maximum count to display before showing "+" suffix */
  maxCount?: number;
  /** Whether to show a dot indicator */
  dot?: boolean;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      children,
      count,
      maxCount = 99,
      dot = false,
      ...props
    },
    ref
  ) => {
    // Variant styles mapping
    const variantStyles = {
      default: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      destructive: "bg-destructive text-destructive-foreground",
      outline: "border border-input bg-background text-foreground",
      success: "bg-green-100 text-green-800 border-green-200",
      warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
      info: "bg-blue-100 text-blue-800 border-blue-200",
      new: "bg-purple-100 text-purple-800 border-purple-200",
      sale: "bg-red-100 text-red-800 border-red-200",
    };

    // Size styles mapping
    const sizeStyles = {
      sm: "h-5 text-xs px-2",
      default: "h-6 text-xs px-2.5",
      lg: "h-7 text-sm px-3",
    };

    // Determine badge content
    const content =
      count !== undefined
        ? count > maxCount
          ? `${maxCount}+`
          : `${count}`
        : children;

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {dot && <span className="mr-1 h-2 w-2 rounded-full bg-current" />}
        {content}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
