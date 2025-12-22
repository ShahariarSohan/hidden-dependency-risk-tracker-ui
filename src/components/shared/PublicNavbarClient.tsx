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

  /** ✅ Dashboard removed from navItems */
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) =>
    href.startsWith("#")
      ? pathname === "/" && hash === href.slice(1)
      : pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ===== SHARED GRADIENT ===== */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--hero-gradient)" }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-(--hero-foreground)/10" />

      <div className="container mx-auto flex h-16 items-center px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <ShieldAlert className="h-6 w-6 text-red-500 dark:text-red-400" />
          <span className="text-lg font-bold text-(--hero-foreground)">
            HDRT
          </span>
        </Link>

        {/* ================= DESKTOP ================= */}
        <div className="hidden w-full lg:flex">
          <div className="flex-1" />

          <nav className="flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-(--hero-foreground)/75 hover:text-(--hero-foreground) transition-colors
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
                  after:bg-[var(--hero-foreground)] after:transition-all after:duration-300
                  ${
                    isActive(item.href)
                      ? "text-(--hero-foreground) after:w-full"
                      : "hover:after:w-full"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ===== RIGHT ACTIONS ===== */}
          <div className="flex flex-1 items-center justify-end gap-4">
            <AnimatedThemeToggler />

            {accessToken && (
              <Link href={dashboardPath}>
                <Button className="bg-primary text-white hover:bg-primary-hover shadow-md">
                  Dashboard
                </Button>
              </Link>
            )}

            {accessToken ? (
              <LogoutButton />
            ) : (
              <Link href="/login">
                <Button className="bg-primary text-white hover:bg-primary-hover shadow-md">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="ml-auto flex items-center gap-4 lg:hidden">
          <AnimatedThemeToggler />

          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-white/10 dark:hover:bg-white/5 rounded-lg transition-colors">
                <Menu className="h-5 w-5 text-(--hero-foreground)" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              style={{ background: "var(--hero-gradient)" }}
            >
              <SheetTitle className="sr-only">Navigation</SheetTitle>

              <nav className="mt-6 flex flex-col gap-6 p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* ===== MOBILE ACTION BUTTONS ===== */}
                {accessToken && (
                  <Link href={dashboardPath}>
                    <Button className="bg-primary text-white hover:bg-primary-hover shadow-md w-full">
                      Dashboard
                    </Button>
                  </Link>
                )}

                {!accessToken && (
                  <Link href="/login">
                    <Button className="bg-primary text-white hover:bg-primary-hover shadow-md w-full">
                      Login
                    </Button>
                  </Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default PublicNavbarClient;
