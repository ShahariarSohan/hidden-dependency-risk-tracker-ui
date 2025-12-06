"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu, ShieldAlert } from "lucide-react";
import LogoutButton from "../modules/auth/LogoutButton";


const PublicNavbarClient = ({ accessToken }: { accessToken: string | null }) => {
  console.log(accessToken)
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hash = searchParams?.get("hash") || ""; // hash from URL

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#use-cases", label: "Use Cases" },
    { href: "/learn-more", label: "About Us" },
  ];

  const isActive = (itemHref: string) => {
    if (itemHref.startsWith("#")) {
      return pathname === "/" && hash === itemHref.replace("#", "");
    } else {
      return pathname === itemHref;
    }
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <ShieldAlert className="h-6 w-6 text-red-500" />
          <span className="text-lg font-bold tracking-tight">HDRT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
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
          <div className="hidden md:flex items-center space-x-2">
            {accessToken ? (
              <LogoutButton></LogoutButton>
            ) : (
              <Link href="/login" className="text-lg font-medium">
                <Button>Login</Button>
              </Link>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px] p-6">
              <SheetTitle className="sr-only">HDRT Navigation</SheetTitle>

              <nav className="flex flex-col gap-6 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`transition-colors ${
                      isActive(item.href)
                        ? "text-primary font-semibold"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="border-t pt-4 flex flex-col space-y-4">
                  <div className="flex justify-center"></div>
                  <Link href="/login" className="text-lg font-medium">
                    <Button>Login</Button>
                  </Link>
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
