import BeforeAfterTransformation from "@/components/modules/home/BeforeAfterTransformation";
import Hero from "@/components/modules/home/Hero";
import HowItWorks from "@/components/modules/home/HowItWorks";
import RiskVisualizer from "@/components/modules/home/RiskVisualizer";

import WhyRiskMatters from "@/components/modules/home/WhyRiskMatters";
import Head from "next/head";

export default async function Home() {
  // Fetch dynamic stats from Backend
  // Note: In Next.js Server Components, we can fetch directly.
  let landingStats = null;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/landing-stats`, {
      cache: "no-store", // Ensure real-time data
    });
    if (res.ok) {
      const result = await res.json();
      landingStats = result.data;
    }
  } catch (err) {
    console.error("Failed to fetch landing stats:", err);
  }

  // Format Hero stats if data exists
  // If stats exist, map them. If not, pass undefined so Hero uses defaults.
  const heroStats = landingStats ? [
    { value: `${landingStats.hero.teams}+`, label: "Teams Monitored" },
    { value: `${landingStats.hero.employees}+`, label: "Employees Tracked" },
    { value: `${landingStats.hero.coverage}%`, label: "Risk Visibility" },
  ] : undefined;

  return (
    <>
      <Head>
        <title>
          HDRT - Hidden Dependency Risk Tracker | Monitor & Mitigate Business
          Risks
        </title>
        <meta
          name="title"
          content="HDRT - Hidden Dependency Risk Tracker | Monitor & Mitigate Business Risks"
        />
        <meta
          name="description"
          content="HDRT helps organizations detect hidden dependency risks in employees, teams, and critical systems. Monitor risk levels, analyze dashboards, and make informed decisions proactively to protect your business continuity."
        />
        <meta
          name="keywords"
          content="risk management, dependency tracking, business continuity, risk assessment, employee risk, system dependencies, risk mitigation, organizational risk, team dependencies"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="HDRT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://hidden-dependency-risk-tracker.vercel.app"
        />
      </Head>

      <main className="min-h-screen  dark:bg-slate-950">
        {/* Hero Section */}
        <Hero stats={heroStats} />
        <WhyRiskMatters></WhyRiskMatters>
        <BeforeAfterTransformation stats={landingStats}></BeforeAfterTransformation>
        <RiskVisualizer></RiskVisualizer>
        <HowItWorks></HowItWorks>
      </main>
    </>
  );
}
