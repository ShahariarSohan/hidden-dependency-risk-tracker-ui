"use client";

import { ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroRightSection from "./HeroRightSection";

export default function Hero({
  badge = { text: "Operational Risk Management" },
  heading = { line1: "Visualize Your", line2: "Hidden Dependency Risks" },
  description = [
    "HDRT helps organizations detect hidden risks caused by over-dependency",
    "on employees, teams, or critical systems, before they become problems.",
  ],
  buttons = {
    primary: { text: "Learn More" },
  },
  stats = [
    { value: "500+", label: "Teams Monitored" },
    { value: "2000+", label: "Employees Tracked" },
    { value: "100%", label: "Risk Visibility" },
  ],
}) {
  return (
    <section
      className="relative w-full overflow-hidden min-h-[90vh]"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="container mx-auto flex items-center min-h-[90vh] px-4 pt-10 pb-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 w-full">
          {/* ================= LEFT ================= */}
          <div className=" text-center lg:text-start order-2 lg:order-1 flex flex-col justify-center space-y-6">
            {/* Badge */}
            <div className=" hidden lg:inline-flex items-center gap-3 self-start rounded-full bg-white/20 dark:bg-white/10 px-4 py-2 backdrop-blur-sm shadow-lg animate-fade-in">
              <ShieldAlert className="text-red-500 dark:text-red-400" />
              <span className="text-xs font-semibold text-[var(--hero-foreground)]">
                {badge.text}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-tight text-[var(--hero-foreground)] animate-slide-up">
              {heading.line1}
              <br />
              {heading.line2}
            </h1>

            {/* Description */}
            <div className="space-y-1 text-lg text-[var(--hero-foreground)]/80 animate-slide-up delay-150">
              {description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            {/* CTA */}
            <div className="animate-slide-up delay-300">
              <Link href="/learn-more">
                <Button className="bg-primary px-6 py-6 text-white hover:bg-primary-hover shadow-lg">
                  {buttons.primary.text}
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 animate-slide-up delay-500">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-[var(--hero-foreground)]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--hero-foreground)]/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          {/* Pulsing background orb */}
          <div className="order-1 lg:order-2">
            <HeroRightSection></HeroRightSection>
          </div>
        </div>
      </div>
    </section>
  );
}
