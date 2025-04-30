import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        // E-commerce specific variants
        cart: "bg-green-600 text-white hover:bg-green-700",
        wishlist:
          "bg-pink-100 text-pink-700 hover:bg-pink-200 border border-pink-300",
        checkout: "bg-indigo-600 text-white hover:bg-indigo-700",
        apply: "bg-amber-500 text-white hover:bg-amber-600",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        xl: "h-12 px-10 rounded-md text-base",
        icon: "h-10 w-10",
      },
      width: {
        default: "",
        full: "w-full",
        auto: "w-auto",
      },
      iconPosition: {
        left: "flex-row",
        right: "flex-row-reverse",
        none: "",
      },
      loading: {
        true: "relative text-transparent transition-none hover:text-transparent",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      width: "default",
      iconPosition: "left",
      loading: false,
    },
  }
);

export type ButtonVariant = NonNullable<
  Parameters<typeof buttonVariants>[0]
>["variant"];
export type ButtonSize = NonNullable<
  Parameters<typeof buttonVariants>[0]
>["size"];
export type ButtonWidth = NonNullable<
  Parameters<typeof buttonVariants>[0]
>["width"];
export type ButtonIconPosition = NonNullable<
  Parameters<typeof buttonVariants>[0]
>["iconPosition"];
