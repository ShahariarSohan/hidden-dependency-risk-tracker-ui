"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu, ShieldAlert } from "lucide-react";
import LogoutButton from "../modules/auth/LogoutButton";
import { AnimatedThemeToggler } from "./AnimatedThemeToggler";

const PublicNavbarClient = ({
  accessToken,
  dashboardPath,
}: {
  accessToken: string | null;
  dashboardPath: string;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hash = searchParams?.get("hash") || "";

  const navItems = [
    { href: "/", label: "Home" },
    accessToken && { href: dashboardPath, label: "Dashboard" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#use-cases", label: "Use Cases" },
    { href: "/learn-more", label: "About Us" },
  ].filter(Boolean) as { href: string; label: string }[];

  const isActive = (itemHref: string) => {
    if (itemHref.startsWith("#")) {
      return pathname === "/" && hash === itemHref.replace("#", "");
    }
    return pathname === itemHref;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center px-4">
        {/* Logo (LEFT) */}
        <Link href="/" className="flex items-center gap-2">
          <ShieldAlert className="h-6 w-6 text-red-500" />
          <span className="text-lg font-bold tracking-tight">HDRT</span>
        </Link>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:flex items-center w-full">
          {/* Spacer */}
          <div className="flex-1" />

          {/* Center navigation */}
          <nav className="flex items-center space-x-5 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 ${
                  isActive(item.href)
                    ? "text-primary font-semibold after:w-full"
                    : "text-muted-foreground hover:text-primary hover:after:w-full"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <AnimatedThemeToggler />
            {accessToken ? (
              <LogoutButton />
            ) : (
              <Link href="/login">
                <Button>Login</Button>
              </Link>
            )}
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="ml-auto flex items-center gap-4 lg:hidden">
          <AnimatedThemeToggler />

          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px] p-6">
              <SheetTitle className="sr-only">HDRT Navigation</SheetTitle>

              <nav className="mt-6 flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-sm transition-colors ${
                      isActive(item.href)
                        ? "text-primary font-semibold"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="border-t pt-4">
                  {accessToken ? (
                    <LogoutButton />
                  ) : (
                    <Link href="/login">
                      <Button className="w-full">Login</Button>
                    </Link>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default PublicNavbarClient;
