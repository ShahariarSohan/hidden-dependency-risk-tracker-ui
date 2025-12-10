"use client";
import { ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero({
  badge = { text: "Operational Risk Management" },
  heading = { line1: "Visualize Your", line2: "Hidden Dependency Risks" },
  description = [
    "HDRT helps organizations detect hidden risks caused by over-dependency",
    "on employees, teams, or critical systems, before they become problems.",
  ],
  buttons = {
    primary: { text: "Learn More" },
    secondary: { text: "About HDRT" },
  },
  stats = [
    { value: "500+", label: "Teams Monitored" },
    { value: "2000+", label: "Employees Tracked" },
    { value: "100%", label: "Risk Visibility" },
  ],
}) {
  return (
    <div className="w-full relative">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #fff 30%, #002F5C 100%)",
        }}
      />

      <div className="w-full py-12 relative">
        <div className="container mx-auto px-4  ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column */}
            <div className="flex flex-col justify-center space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 self-start rounded-full bg-[#002F5C]/10 px-4 py-2">
                <ShieldAlert className="text-[#FF4B4B]" />
                <span className="text-[12px] font-medium text-white">
                  {badge.text}
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-2">
                <h1 className="text-[50px] leading-[60px] font-bold text-[#002F5C]">
                  {heading.line1}
                </h1>
                <h1 className="text-[50px] leading-[60px] font-bold text-[#002F5C]">
                  {heading.line2}
                </h1>
              </div>

              {/* Description */}
              <div className="space-y-1 text-[17px] leading-7 text-[#002F5C]/80 dark:text-[#AAD4FF]/80">
                {description.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                {buttons.primary && (
                  <Link href="/learn-more">
                    <Button className=" gap-3 py-5  bg-[#002F5C]  text-[15px] text-white hover:bg-[#001F3B]">
                      {buttons.primary.text}
                    </Button>
                  </Link>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <p className="text-[25px] leading-9 font-semibold text-[#002F5C]">
                      {stat.value}
                    </p>
                    <p className="text-[14px] leading-6 text-[#002F5C]/70 dark:text-[#AAD4FF]/70">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Enhanced Illustration */}
            <div className="flex items-center justify-center lg:justify-end relative">
              <div className="w-full max-w-[560px] flex flex-col items-center justify-center relative">
                {/* Background Circle */}
                <div className="absolute w-[320px] h-[320px] rounded-full bg-[#002F5C]/20 dark:bg-[#002F5C]/30 -z-20 animate-pulse" />

                {/* Floating Shields */}
                <ShieldAlert className="absolute top-0 left-8 text-[#FF4B4B] size-[40px] animate-bounce" />
                <ShieldAlert className="absolute bottom-0 right-12 text-[#FF4B4B] size-[50px] animate-bounce delay-200" />

                {/* Main Shield */}
                <ShieldAlert className="text-[#FF4B4B] size-[180px] relative z-10" />

                {/* Mockup Card */}
                <div className="absolute bottom-0 w-[220px] h-[120px] bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 -z-10">
                  <div className="flex flex-col justify-center items-center h-full text-[#002F5C]/80 dark:text-[#AAD4FF]/80">
                    <p className="text-sm font-medium">Teams Monitored: 500+</p>
                    <p className="text-sm font-medium">
                      Employees Tracked: 2000+
                    </p>
                    <p className="text-sm font-medium">Risk Visibility: 100%</p>
                  </div>
                </div>

                {/* Supporting Text */}
                <p className="mt-6 text-center text-[#002F5C] dark:text-[#AAD4FF] text-lg font-medium max-w-[400px]">
                  <span className="font-extrabold">
                    Hidden Dependency Risk Tracker
                  </span>{" "}
                  helps organizations identify hidden dependency risks and
                  prevent operational failures before they happen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
