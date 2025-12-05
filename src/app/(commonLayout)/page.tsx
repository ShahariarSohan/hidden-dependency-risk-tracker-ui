
import Hero from "@/components/modules/home/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>HDRT - Hidden Dependency Risk Tracker</title>
        <meta
          name="description"
          content="HDRT helps organizations detect hidden dependency risks in employees, teams, and critical systems. Monitor risk levels, analyze dashboards, and make informed decisions proactively."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <Hero />

        {/* Future Sections */}
        {/* Example: 
            - Risk Dashboard Overview
            - High-Risk Employees
            - Team & System Analysis
            - Quick Risk Check
            - Admin Management Shortcuts
            - About HDRT / How it Works
        */}
      </main>
    </>
  );
}
