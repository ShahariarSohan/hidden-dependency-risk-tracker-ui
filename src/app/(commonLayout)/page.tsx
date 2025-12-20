import BeforeAfterTransformation from "@/components/modules/home/BeforeAfterTransformation";
import Hero from "@/components/modules/home/Hero";
import HowItWorks from "@/components/modules/home/HowItWorks";
import RiskVisualizer from "@/components/modules/home/RiskVisualizer";
import UseCases from "@/components/modules/home/UseCases";
import WhyRiskMatters from "@/components/modules/home/WhyRiskMatters";
import Head from "next/head";

export default function Home() {
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

      <main className="min-h-screen  dark:bg-gray-900">
        {/* Hero Section */}
        <Hero />
        <WhyRiskMatters></WhyRiskMatters>
        <BeforeAfterTransformation></BeforeAfterTransformation>
        <RiskVisualizer></RiskVisualizer>
        <HowItWorks></HowItWorks>
      </main>
    </>
  );
}
