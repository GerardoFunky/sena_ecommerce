import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { normalizeWhitespace } from "@/app/utils/Helpers/stringHelpers"; // Assuming this is where your cn utility is located

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  homeHref?: string;
  showHomeIcon?: boolean;
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  (
    {
      className,
      items,
      separator = (
        <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
      ),
      homeHref = "/",
      showHomeIcon = true,
      ...props
    },
    ref
  ) => {
    function cn(
      arg0: string,
      className: string | undefined
    ): string | undefined {
      throw new Error("Function not implemented.");
    }

    return (
      <nav
        ref={ref}
        className={cn(
          "flex items-center text-sm font-medium text-muted-foreground",
          className
        )}
        aria-label="Breadcrumb"
        {...props}
      >
        <ol className="flex items-center space-x-1">
          {showHomeIcon && (
            <li className="inline-flex items-center">
              <Link
                to={homeHref}
                className="inline-flex items-center text-gray-700 hover:text-primary transition-colors"
                aria-label="Home"
              >
                <Home className="h-4 w-4" />
              </Link>
              <span className="mx-1">{separator}</span>
            </li>
          )}

          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="inline-flex items-center">
                {item.href && !isLast ? (
                  <>
                    <Link
                      to={item.href}
                      className="text-gray-700 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                    <span className="mx-1">{separator}</span>
                  </>
                ) : (
                  <span
                    className="text-gray-700 hover:text-primary transition-colors"
                    aria-current="page"
                    dangerouslySetInnerHTML={{
                      __html: normalizeWhitespace(item.label),
                    }}
                  >
                    {item.label}
                  </span>
                )}

                {!isLast && !item.href && (
                  <span className="mx-1">{separator}</span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumb };
