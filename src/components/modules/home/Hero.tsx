"use client";
import { ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero({
  badge = {
    text: "Operational Risk Management",
  },
  heading = {
    line1: "Visualize Your",
    line2: "Hidden Dependency Risks",
  },
  description = [
    "HDRT helps organizations detect hidden risks caused by over-dependency",
    "on employees, teams, or critical systems, before they become problems.",
  ],
  buttons = {
    primary: {
      text: "Learn More",
    },
    secondary: {
      text: "Get Started",
    },
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
            "radial-gradient(125% 125% at 50% 90%, #fff 30%, #1E293B 100%)",
        }}
      />

      <div className="w-full py-12 relative">
        {/* Align px with navbar/footer */}
        <div className="container mx-auto px-4 md:0">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column */}
            <div className="flex flex-col justify-center space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 self-start rounded-full bg-gray-100 px-4 py-2">
                <ShieldAlert className="text-red-500" />
                <span className="text-[12px] font-medium text-gray-700">
                  {badge.text}
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-2">
                <h1 className="text-[50px] leading-[60px] font-bold text-gray-900">
                  {heading.line1}
                </h1>
                <h1 className="text-[50px] leading-[60px] font-bold text-gray-900">
                  {heading.line2}
                </h1>
              </div>

              {/* Description */}
              <div className="space-y-1 text-[17px] leading-7 text-gray-600">
                {description.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                {buttons.primary && (
                  <Link href="/learn-more">
                    <Button className="h-[63px] gap-3 rounded-xl bg-gray-500 px-8 text-[15px] hover:bg-gray-600">
                      {buttons.primary.text}
                    </Button>
                  </Link>
                )}
                {buttons.secondary && (
                  <Button
                    variant="outline"
                    className="h-[63px] gap-3 rounded-xl border-gray-500 px-8 text-[15px] text-gray-700 hover:bg-gray-100"
                  >
                    {buttons.secondary.text}
                  </Button>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <p className="text-[25px] leading-9 font-semibold text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-[14px] leading-6 text-gray-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Enhanced Illustration */}
            <div className="flex items-center justify-center lg:justify-end relative">
              <div className="w-full max-w-[560px] flex flex-col items-center justify-center relative">
                {/* Background Gradient Circle */}
                <div className="absolute w-[320px] h-[320px] rounded-full bg-red-100/20 dark:bg-red-900/30 -z-20 animate-pulse" />

                {/* Floating Small Shields */}
                <ShieldAlert className="absolute top-0 left-8 text-red-400 size-[40px] animate-bounce" />
                <ShieldAlert className="absolute bottom-0 right-12 text-red-400 size-[50px] animate-bounce delay-200" />

                {/* Main Shield Icon */}
                <ShieldAlert className="text-red-500 size-[180px] relative z-10" />

                {/* Mockup Card Behind */}
                <div className="absolute bottom-0 w-[220px] h-[120px] bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 -z-10">
                  <div className="flex flex-col justify-center items-center h-full">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Teams Monitored: 500+
                    </p>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Employees Tracked: 2000+
                    </p>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Risk Visibility: 100%
                    </p>
                  </div>
                </div>

                {/* Supporting Text */}
                <p className="mt-6 text-center text-gray-700 dark:text-gray-300 text-lg font-medium max-w-[400px]">
                  HDRT helps organizations identify hidden dependency risks and
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
