/* eslint-disable react/no-unescaped-entities */
"use client";

import {  Brain, Zap, Eye, TrendingDown } from "lucide-react";

export default function WhyRiskMatters() {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-12 dark:bg-slate-950">
      <div className="container mx-auto text-center space-y-10">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900  dark:text-white">
          Why Hidden Risks Matter
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Most organizations don’t fail because of the risks they see— they fail
          because of the ones they didn’t even know existed.
        </p>

        {/* 3 Emotional Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
            <Eye className="mx-auto text-red-500 size-10 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Invisible Dependencies
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
              Critical tasks often rely on one person or one system— and nobody
              realizes it until it's too late.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
            <Brain className="mx-auto text-red-500 size-10 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Human Overload
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
              High-performing teams often carry silent burnout risks that
              disrupt operations unexpectedly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
            <Zap className="mx-auto text-red-500 size-10 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Sudden Breakdowns
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
              A single point of failure can halt entire operations— costing
              time, trust, and revenue.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
            <TrendingDown className="mx-auto text-red-500 size-10 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              False Sense of Safety
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
              When leadership decisions rely on surface-level metrics, hidden
              risks stay buried— until they explode into crises.
            </p>
          </div>
        </div>

        {/* Bottom statement */}
        <p className="mt-16 text-lg font-medium text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          HDRT doesn’t just show dashboards— it reveals the unseen risks that
          truly matter.
        </p>
      </div>
    </section>
  );
}
