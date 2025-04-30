import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Toaster } from "@/components/ui/toaster";

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  showSidebar?: boolean;
  fullWidth?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = "Tapicería Avanzada | Quality Upholstery Solutions",
  description = "Find premium upholstery materials and custom furniture solutions for your home and business needs.",
  showSidebar = true,
  fullWidth = false,
}) => {
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  // Check if current page is the homepage
  const isHomePage = router.pathname === "/";

  // Check if we're on pages where we don't want to show sidebar
  const hideSidebarOnPages = [
    "/checkout",
    "/cart",
    "/auth/login",
    "/auth/register",
    "/auth/forgot-password",
  ];
  const shouldShowSidebar =
    showSidebar && !hideSidebarOnPages.includes(router.pathname) && !isHomePage;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <div
            className={`container mx-auto px-4 ${
              fullWidth ? "max-w-full" : "max-w-7xl"
            }`}
          >
            {shouldShowSidebar ? (
              <div className="flex flex-col lg:flex-row gap-6 py-6">
                {isDesktop && (
                  <aside className="w-full lg:w-64 flex-shrink-0">
                    <Sidebar />
                  </aside>
                )}
                <div className="flex-grow">{children}</div>
              </div>
            ) : (
              <div className="py-6">{children}</div>
            )}
          </div>
        </main>

        <Footer />
      </div>

      {/* Toast notifications */}
      <Toaster />
    </>
  );
};

export default MainLayout;
