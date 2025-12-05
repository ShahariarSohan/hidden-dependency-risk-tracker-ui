import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu, ShieldAlert } from "lucide-react";
// import { getCookie } from "@/services/auth/tokenHandlers";
// import LogoutButton from "./LogoutButton";

const PublicNavbar = async () => {
//   const accessToken = await getCookie("accessToken");

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "/learn-more", label: "About Us" },
  ];

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
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        {/* <div className="hidden md:flex items-center gap-3">
          {accessToken ? (
            <>
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <LogoutButton />
            </>
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div> */}

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
                    className="text-base font-medium"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* <div className="border-t pt-6 flex flex-col gap-4">
                  {accessToken ? (
                    <>
                      <Link href="/dashboard">
                        <Button className="w-full">Dashboard</Button>
                      </Link>
                      <LogoutButton />
                    </>
                  ) : (
                    <Link href="/login">
                      <Button className="w-full">Login</Button>
                    </Link>
                  )}
                </div> */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default PublicNavbar;
