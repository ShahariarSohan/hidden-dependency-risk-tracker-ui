/* eslint-disable react/no-unescaped-entities */
"use client"
import { useState } from "react";
import { Plus, Minus, HelpCircle, TrendingUp } from "lucide-react";
import {  faqCategories } from "@/lib/faqCategories";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { colorClasses } from "@/lib/colorClasses";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

 

  return (
    <main className=" bg-gray-50 dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-red-500/20 rounded-full bg-red-500/5">
            <HelpCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-semibold text-red-600 dark:text-red-400">
              Help Center
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions about HDRT's features,
            implementation, and how it can help your organization manage risk
            effectively.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="space-y-16">
          {faqCategories.map((category, categoryIndex) => {
            const colors = colorClasses[category.color];
            const Icon = category.icon;

            return (
              <div key={categoryIndex}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className={`p-3 ${colors.bg} rounded-xl border ${colors.border}`}
                  >
                    <Icon className={`h-6 w-6 ${colors.icon}`} />
                  </div>
                  <h2 className={`text-3xl font-bold ${colors.text}`}>
                    {category.title}
                  </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={faqIndex}
                        className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300 dark:hover:border-slate-700"
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group"
                        >
                          <span className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                            {faq.question}
                          </span>
                          <div
                            className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full ${
                              colors.bg
                            } transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            {isOpen ? (
                              <Minus className={`h-5 w-5 ${colors.icon}`} />
                            ) : (
                              <Plus className={`h-5 w-5 ${colors.icon}`} />
                            )}
                          </div>
                        </button>

                        <div
                          className={`transition-all duration-300 ease-in-out ${
                            isOpen
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          } overflow-hidden`}
                        >
                          <div className="px-6 pb-5 pt-0">
                            <div className={`pt-4 border-t ${colors.border}`}>
                              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl border border-red-500/20 p-12 text-center overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-red-500/20 rounded-full bg-red-500/10">
                <TrendingUp className="h-4 w-4 text-red-600 dark:text-red-400" />
                <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                  Still Have Questions?
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                We're Here to Help
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Can't find the answer you're looking for? Our team is ready to
                provide personalized support and answer any questions about
                HDRT.
              </p>

              <Link href="/faq" className="w-full">
                <Button
                  type="button"
                  className="bg-primary text-white hover:bg-primary-hover shadow-md w-full"
                >
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
