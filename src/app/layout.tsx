import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import LoginSuccessToast from "@/components/modules/auth/LoginSuccessToast";
import LogoutSuccessToast from "@/components/modules/auth/LogoutSuccessToast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
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
    <html lang="en" className={`${poppins.variable}  antialiased`}>
      <body>
        {children}
        <Toaster richColors position="bottom-right"></Toaster>
        <LoginSuccessToast />
        <LogoutSuccessToast />
      </body>
    </html>
  );
}
