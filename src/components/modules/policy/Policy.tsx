/* eslint-disable react/no-unescaped-entities */

"use client"
import { FileText, AlertCircle, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { colorClasses } from "@/lib/colorClasses";
import { policies } from "@/lib/policies";
import Link from "next/link";

export default function Policy() {
  return (
    <main className="bg-gray-50 dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-red-500/20 rounded-full bg-red-500/5">
            <FileText className="h-4 w-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-semibold text-red-600 dark:text-red-400">
              Legal Documentation
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Policies & Legal
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Our commitment to transparency, security, and compliance. Review our
            policies to understand how we protect your data and ensure
            responsible platform usage.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 px-4 border-y border-gray-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {policies.map((policy, index) => {
              const colors = colorClasses[policy.color as keyof typeof colorClasses];
              const Icon = policy.icon;

              return (
                <a
                  key={index}
                  href={`#${policy.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`flex items-center gap-2 px-5 py-3 ${colors.bg} border ${colors.border} rounded-xl hover:scale-105 transition-all duration-300`}
                >
                  <Icon className={`h-5 w-5 ${colors.icon}`} />
                  <span className={`font-semibold ${colors.text}`}>
                    {policy.title}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20 px-4">
        <div className="container mx-auto space-y-20">
          {policies.map((policy, policyIndex) => {
            const colors = colorClasses[policy.color as keyof typeof colorClasses];
            const Icon = policy.icon;

            return (
              <div
                key={policyIndex}
                id={policy.title.toLowerCase().replace(/\s+/g, "-")}
                className="scroll-mt-20"
              >
                {/* Policy Header */}
                <div
                  className={`relative ${colors.bg} rounded-2xl border ${colors.border} p-8 mb-8`}
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-4 ${colors.bg} rounded-xl border ${colors.border}`}
                      >
                        <Icon className={`h-8 w-8 ${colors.icon}`} />
                      </div>
                      <div>
                        <h2
                          className={`text-3xl md:text-4xl font-bold mb-2 ${colors.text}`}
                        >
                          {policy.title}
                        </h2>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Info className="h-4 w-4" />
                          <span>Last Updated: {policy.lastUpdated}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Policy Content */}
                <div className="space-y-6">
                  {policy.sections.map((section, sectionIndex) => (
                    <div
                      key={sectionIndex}
                      className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-8 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center border ${colors.border} mt-1`}
                        >
                          <CheckCircle className={`h-5 w-5 ${colors.icon}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                            {section.heading}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto">
          <div className="relative bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-800 p-12 text-center overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-red-500/20 rounded-full bg-red-500/5">
                <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                  Questions About Our Policies?
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                We're Here to Help
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                If you have questions about our policies, data practices, or
                compliance measures, our legal and privacy teams are available
                to provide clarification.
              </p>

              <Link href="/faq" className="w-full">
                <Button
                  type="button"
                  className="bg-primary text-white hover:bg-primary-hover shadow-md w-full"
                >
                  Contact Legal Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
