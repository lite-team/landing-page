"use client"

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

// FAQ data
const faqData = [
  {
    question: "Is my financial data secure?",
    answer: "Absolutely! All your financial calculations and data are stored locally on your device. FinTools uses iCloud for syncing, ensuring your data never leaves your control."
  },
  {
    question: "Does it work offline?",
    answer: "Yes! FinTools works completely offline. All calculations are performed on your device, so you can use it anywhere, anytime."
  },
  {
    question: "Can I sync across multiple devices?",
    answer: "Yes! FinTools seamlessly syncs across all your Apple devices via iCloud, keeping your financial data up-to-date everywhere."
  },
  {
    question: "What types of calculations are included?",
    answer: "FinTools includes comprehensive calculators for savings, loans, investments, and retirement planning. Each calculator provides detailed breakdowns and visualizations."
  },
  {
    question: "Is there a subscription fee?",
    answer: "FinTools is available for a one-time purchase on the App Store. No subscriptions, no recurring fees."
  }
];

// Animated Section Component
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
}

// FAQ Accordion Item
function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-white group-hover:text-yellow-400 transition-colors">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FinToolsPage() {
  const [scrollY, setScrollY] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSticky = scrollY > 600;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white selection:bg-yellow-500/30 overflow-x-hidden">

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-yellow-500/10 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute top-[30%] right-[-15%] w-[40vw] h-[40vw] bg-amber-500/10 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-[-10%] left-[30%] w-[35vw] h-[35vw] bg-yellow-500/10 rounded-full blur-[120px] opacity-20"></div>
      </div>

      {/* Sticky Header */}
      <div className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 transform ${showSticky ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/5 px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/icons/fintools.png" alt="FinTools" className="w-8 h-8 rounded-xl" />
              <span className="font-bold">FinTools</span>
            </div>
            <a
              href="https://apps.apple.com/us/app/fintools/id6746293973"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center bg-gradient-to-r from-[#eab308] via-[#facc15] to-[#fbbf24] text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-yellow-500/25"
            >
              Download Free
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-40 px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors group">
            <svg className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <img src="/icons/fintools.png" alt="FinTools" className="w-10 h-10 rounded-2xl shadow-lg" />
            <span className="font-bold text-lg">FinTools</span>
          </div>
          <div className="w-24"></div>
        </div>
      </nav>

      <main className="relative z-10">

        {/* Hero Section */}
        <section className="px-6 pt-10 pb-20 md:pt-16 md:pb-32">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto">
                {/* App Icon */}
                <div className="mb-8 flex justify-center">
                  <img src="/icons/fintools.png" alt="FinTools" className="w-28 h-28 md:w-36 md:h-36 rounded-[2rem] shadow-2xl shadow-yellow-500/25" />
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                  Financial Planning,<br />Made Simple
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Minimal calculators for <span className="text-gray-600 dark:text-white font-semibold">Savings, Loans & Financial Freedom</span>. Plan your future with powerful, easy-to-use tools.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://apps.apple.com/us/app/fintools/id6746293973"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-14 px-8 rounded-full bg-gradient-to-r from-[#d97706] via-[#eab308] to-[#facc15] text-white font-semibold text-lg flex items-center gap-3 transition-all hover:opacity-90 hover:scale-105 shadow-xl shadow-yellow-500/30"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                    </svg>
                    Download on App Store
                  </a>
                  <a
                    href="#features"
                    className="h-14 px-8 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white font-semibold text-lg flex items-center gap-2 transition-all hover:bg-gray-200 dark:hover:bg-white/20"
                  >
                    Explore Features
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>

                {/* Calculator Icons Visual */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: "💰", label: "Savings", color: "from-yellow-500/20 to-yellow-600/20" },
                    { icon: "🏠", label: "Loans", color: "from-amber-500/20 to-amber-600/20" },
                    { icon: "📈", label: "Investment", color: "from-orange-500/20 to-orange-600/20" },
                    { icon: "🎯", label: "Goals", color: "from-yellow-500/20 to-amber-600/20" }
                  ].map((item, idx) => (
                    <div key={idx} className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} border border-white/10 backdrop-blur-sm`}>
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <p className="text-sm font-medium text-gray-800 dark:text-white">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="px-6 py-20 md:py-32 bg-gray-50 dark:bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Financial Planning Can Be Overwhelming</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">We simplify the complex</p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🤔", title: "Complex calculations", color: "from-red-500/20 to-red-600/20" },
                { icon: "📊", title: "Too many spreadsheets", color: "from-orange-500/20 to-orange-600/20" },
                { icon: "💸", title: "Hidden loan costs", color: "from-yellow-500/20 to-yellow-600/20" },
                { icon: "⏰", title: "Time-consuming planning", color: "from-pink-500/20 to-pink-600/20" }
              ].map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 100} className="h-full">
                  <div className={`h-full p-6 rounded-3xl bg-gradient-to-br ${item.color} border border-white/10 backdrop-blur-sm text-center hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center`}>
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <p className="font-medium text-gray-800 dark:text-white">{item.title}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="px-6 py-20 md:py-32">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Powerful Features</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Everything you need for financial planning</p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1: Privacy First */}
              <AnimatedSection delay={0} className="h-full">
                <div className="group h-full p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#eab308]/50 transition-all duration-300 hover:-translate-y-2 shadow-lg dark:shadow-none flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#eab308] to-[#facc15] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Privacy First</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                    Your financial data stays secure with local data storage and processing. No cloud uploads, no third-party access.
                  </p>
                  <div className="mt-6 flex items-center gap-2">
                    <div className="px-3 py-1 rounded-full bg-[#eab308]/10 border border-[#eab308]/30 text-[#eab308] text-sm font-medium flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      100% Local
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Feature 2: Intuitive Interface */}
              <AnimatedSection delay={100} className="h-full">
                <div className="group h-full p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#facc15]/50 transition-all duration-300 hover:-translate-y-2 shadow-lg dark:shadow-none flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#facc15] to-[#fbbf24] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Intuitive and Detailed</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                    Beautiful, user-friendly interface with comprehensive details for complete financial visibility. See every number that matters.
                  </p>
                  <div className="mt-6 h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-[#eab308] to-[#fbbf24] rounded-full animate-pulse"></div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Feature 3: iCloud Sync */}
              <AnimatedSection delay={200} className="h-full">
                <div className="group h-full p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#fbbf24]/50 transition-all duration-300 hover:-translate-y-2 shadow-lg dark:shadow-none flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Sync Cross Apple Devices</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                    Seamless synchronization across all your Apple devices with real-time updates via iCloud. Access your data anywhere.
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/20 flex items-center justify-center">
                      <span className="text-xs">📱</span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/20 flex items-center justify-center">
                      <span className="text-xs">⌚</span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/20 flex items-center justify-center">
                      <span className="text-xs">💻</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-20 md:py-32 bg-gray-50 dark:bg-white/[0.02]">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Got questions? We've got answers.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="bg-white dark:bg-white/5 rounded-3xl border border-gray-200 dark:border-white/10 p-6 md:p-8 shadow-lg dark:shadow-none">
                {faqData.map((faq, idx) => (
                  <FAQItem
                    key={idx}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFAQ === idx}
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center p-8 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-[#d97706] via-[#eab308] to-[#facc15] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Start Planning Your Future Today</h2>
                  <p className="text-lg md:text-xl text-yellow-100 mb-8 max-w-xl mx-auto">
                    Join thousands of users who have already taken control of their financial future.
                  </p>
                  <a
                    href="https://apps.apple.com/us/app/fintools/id6746293973"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 h-14 px-8 rounded-full bg-gradient-to-r from-white via-[#fef3c7] to-white text-[#b45309] font-semibold text-lg hover:from-[#fef3c7] hover:via-white hover:to-[#fef3c7] transition-all hover:scale-105 shadow-xl border-2 border-white/80"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                    </svg>
                    Download Free on App Store
                  </a>
                  <p className="text-yellow-200 mt-4 text-sm">One-time Purchase • No Subscription Required</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
        <div className="bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-gray-200 dark:border-white/10 p-4">
          <a
            href="https://apps.apple.com/us/app/fintools/id6746293973"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-[#d97706] via-[#eab308] to-[#facc15] text-white font-semibold text-lg shadow-lg shadow-yellow-500/30"
          >
            <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
            </svg>
            Download Free
          </a>
        </div>
      </div>

      <div className="pb-20 md:pb-0">
        <Footer />
      </div>
    </div>
  );
}
