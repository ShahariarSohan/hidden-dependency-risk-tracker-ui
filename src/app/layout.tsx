import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import LoginSuccessToast from "@/components/modules/auth/LoginSuccessToast";
import LogoutSuccessToast from "@/components/modules/auth/LogoutSuccessToast";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Suspense } from "react";
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "Hidden Dependency Risk Tracker",
  description:
    "Hidden Dependency Risk Tracker (HDRT) helps organizations identify and reduce operational risks caused by over-dependence on specific employees, teams, or critical systems by turning task and ownership data into clear, actionable risk insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable}  antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          {children}
          <Toaster richColors position="bottom-right"></Toaster>
          <Suspense fallback={null}>
            <LoginSuccessToast />
            <LogoutSuccessToast />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
