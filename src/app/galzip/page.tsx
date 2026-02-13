"use client"

import { useState, useEffect, useRef, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import './galzip.css';

// FAQ data
const faqData = [
  {
    question: "Is my data safe?",
    answer: "Absolutely! All compression happens locally on your device. Your photos never leave your iPhone—no uploads, no cloud storage, no third-party access. Your privacy is our priority."
  },
  {
    question: "How much space can I save?",
    answer: "You can save up to 99% of your photo storage. Results vary depending on your photos, but most users free up several gigabytes of space."
  },
  {
    question: "Does this reduce photo quality?",
    answer: "GalZip uses smart compression that automatically picks the optimal quality level. Your photos will look virtually identical while taking up significantly less space."
  },
  {
    question: "Can I restore original files?",
    answer: "Yes! You can choose to keep your original photos after compression. If you decide to delete originals, make sure you've backed them up first."
  },
  {
    question: "What formats are supported?",
    answer: "GalZip supports all common photo formats including JPEG, and HEIC. Video compression supports MP4 and MOV files."
  }
];

// Animated Section Component - Memoized for performance
const AnimatedSection = memo(function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
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
});

// FAQ Accordion Item
function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-white group-hover:text-green-400 transition-colors">{question}</span>
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

export default function GalZipPage() {
  const [showSticky, setShowSticky] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isSubdomain, setIsSubdomain] = useState(false);
  const [mainDomain, setMainDomain] = useState('');

  useEffect(() => {
    // Check if we're on a subdomain
    const hostname = window.location.hostname;
    const port = window.location.port;

    var hostnameParts = hostname.split('.');
      // For localhost with subdomain (e.g., fintools.localhost:3001)
      if (hostnameParts.length >= 2 && hostnameParts[hostnameParts.length - 1] === 'localhost') {
        setIsSubdomain(true);
        setMainDomain(`http://localhost${port ? ':' + port : ''}`);
    } else if (hostnameParts.length >= 3) {
      // We're on a production subdomain (e.g., fintools.liteteam.app)
      const domain = `https://${hostnameParts.slice(-2).join('.')}`;
      setIsSubdomain(true);
      setMainDomain(domain);
    } else {
      setMainDomain("/")
    }
  }, []);

  useEffect(() => {
    // Scroll to middle on mount
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      scrollContainerRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldShow = window.scrollY > 600;
          setShowSticky(prev => {
            if (prev !== shouldShow) return shouldShow;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white selection:bg-green-500/30 overflow-x-hidden">

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/10 rounded-full blur-[60px] opacity-40"></div>
        <div className="absolute top-[30%] right-[-15%] w-[40vw] h-[40vw] bg-purple-500/10 rounded-full blur-[60px] opacity-30"></div>
        <div className="absolute bottom-[-10%] left-[30%] w-[35vw] h-[35vw] bg-green-500/10 rounded-full blur-[60px] opacity-20"></div>
      </div>

      {/* Sticky Header */}
      <div className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 transform ${showSticky ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-gray-200/50 dark:border-white/5 px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/icons/galzip.png" alt="GalZip" className="w-8 h-8 rounded-xl" />
              <span className="font-bold">GalZip</span>
            </div>
            <a
              href="https://apps.apple.com/app/galzip"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center bg-gradient-to-r from-[#00C853] via-[#00BFA5] to-[#00ACC1] text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-green-500/25"
            >
              Download Free
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-40 px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href={mainDomain} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors group">
              <svg className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          <div className="flex items-center gap-3">
            <img src="/icons/galzip.png" alt="GalZip" className="w-10 h-10 rounded-2xl shadow-lg" />
            <span className="font-bold text-lg">GalZip</span>
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
                  <div className="relative w-28 h-28 md:w-36 md:h-36">
                    <Image
                      src="/icons/galzip.png"
                      alt="GalZip"
                      fill
                      className="rounded-[2rem] shadow-2xl shadow-purple-500/25 object-cover"
                      priority
                    />
                  </div>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                  Free Up Space,<br />Keep Your Memories
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Compress photos and videos up to <span className="text-gray-600 dark:text-white font-semibold">99%</span> on your iPhone without losing quality. <span className="text-gray-600 dark:text-white font-semibold">Simple, fast, and private.</span>
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://apps.apple.com/app/galzip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-14 px-8 rounded-full bg-gradient-to-r from-[#00C853] via-[#00BFA5] to-[#00ACC1] text-white font-semibold text-lg flex items-center gap-3 transition-all hover:opacity-90 hover:scale-105 shadow-xl shadow-green-500/30"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                    </svg>
                    Download on App Store
                  </a>
                  <a
                    href="#how-it-works"
                    className="h-14 px-8 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white font-semibold text-lg flex items-center gap-2 transition-all hover:bg-gray-200 dark:hover:bg-white/20"
                  >
                    See How It Works
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>

              </div>

              {/* App Screenshots Showcase */}
              <div className="mt-16 relative w-full mx-auto">
                {/* Gradient fade on edges */}
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-16 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-16 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>



                {/* Screenshots Container */}
                <div
                  ref={scrollContainerRef}
                  className="flex items-center gap-6 md:gap-8 overflow-x-auto pb-4 pl-16 pr-16 md:pl-20 md:pr-20 scrollbar-hide"
                  style={{ scrollPaddingLeft: '64px', scrollPaddingRight: '64px' }}
                >
                  {[1, 2, 3, 4].map((num, idx) => (
                    <div
                      key={num}
                      className={`screenshot-item flex-shrink-0 transition-all duration-500 ${idx === 1 ? 'scale-105 md:scale-110' : 'scale-95 md:scale-100 opacity-80 hover:opacity-100'
                        }`}
                    >
                      <div className="relative group screenshot-float">
                        {/* Phone frame */}
                        <div className="relative w-[200px] md:w-[260px] lg:w-[280px] h-[400px] md:h-[520px] lg:h-[560px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-gray-800 dark:border-gray-700 bg-black">
                          <Image
                            src={`/apps/galzip/Apple iPhone 16 Pro Max Screenshot ${num}.png`}
                            alt={`GalZip Screenshot ${num}`}
                            fill
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 260px, 280px"
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>

                        {/* Spotlight effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#00C853]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[2rem] md:rounded-[2.5rem]"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Scroll indicator for mobile */}
                <div className="flex justify-center gap-1.5 mt-6 md:hidden">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
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
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Running Out of Storage?</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">We understand the struggle. Here's what you're dealing with</p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📱", title: "Phone storage always full", color: "from-blue-500/20 to-blue-600/20" },
                { icon: "📸", title: "Can't take new photos", color: "from-purple-500/20 to-purple-600/20" },
                { icon: "☁️", title: "Expensive cloud subscriptions", color: "from-pink-500/20 to-pink-600/20" },
                { icon: "⏰", title: "Hours managing photos", color: "from-orange-500/20 to-orange-600/20" }
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
        <section className="px-6 py-20 md:py-32">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Powerful Features</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Everything you need to manage your photo library</p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1: Powerful Compression */}
              <AnimatedSection delay={0} className="h-full">
                <div className="group h-full p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#007AFF]/50 transition-all duration-300 hover:-translate-y-2 shadow-lg dark:shadow-none flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Compress Without Quality Loss</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                    Smart quality is picked automatically for the best results. Batch compress hundreds of photos in seconds. Keep or delete originals—you decide.
                  </p>
                  <div className="mt-6 h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-[#00C853] to-[#00A847] rounded-full animate-pulse"></div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Feature 2: Privacy First */}
              <AnimatedSection delay={100} className="h-full">
                <div className="group h-full p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#27AE60]/50 transition-all duration-300 hover:-translate-y-2 shadow-lg dark:shadow-none flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#27AE60] to-[#2ECC71] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Your Photos Stay Private</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                    Everything happens on your device. No uploads, no cloud, no sensitive tracking. Your memories are yours alone.
                  </p>
                  <div className="mt-6 flex items-center gap-2">
                    <div className="px-3 py-1 rounded-full bg-[#27AE60]/10 border border-[#27AE60]/30 text-[#27AE60] text-sm font-medium flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      100% Local
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Feature 3: Beautiful Interface */}
              <AnimatedSection delay={200} className="h-full">
                <div className="group h-full p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#8E44AD]/50 transition-all duration-300 hover:-translate-y-2 shadow-lg dark:shadow-none flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8E44AD] to-[#9B59B6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Designed for iOS</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                    Native iOS design. Dark mode support. Feels right at home on your iPhone.
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/20 flex items-center justify-center">
                      <span className="text-xs">☀️</span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-gray-900 dark:bg-white/20 border border-gray-700 dark:border-white/30 flex items-center justify-center">
                      <span className="text-xs">🌙</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="px-6 py-20 md:py-32 bg-gray-50 dark:bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">How It Works</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Four simple steps to free up your storage</p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
              {[
                { step: 1, title: "Select Photos", description: "Choose the photos you want to compress", icon: "👆" },
                { step: 2, title: "Choose Settings", description: "Let smart quality do its magic", icon: "⚙️" },
                { step: 3, title: "Compress Instantly", description: "Watch your photos shrink in seconds", icon: "⚡" },
                { step: 4, title: "Save Space", description: "Enjoy your freed-up storage", icon: "🎉" }
              ].map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="relative">
                    {idx < 3 && (
                      <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#00C853]/50 to-transparent -translate-x-1/2 z-0"></div>
                    )}
                    <div className="relative z-10 text-center">
                      <div className="w-24 h-24 mx-auto rounded-full bg-white dark:bg-white/10 border-2 border-[#00C853]/30 flex items-center justify-center mb-4 shadow-lg">
                        <span className="text-4xl">{item.icon}</span>
                      </div>
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#00C853] text-white text-sm font-bold mb-3">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
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
              <div className="text-center p-8 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-[#00C853] via-[#00BFA5] to-[#00ACC1] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Start Saving Space Today</h2>
                  <p className="text-lg md:text-xl text-green-100 mb-8 max-w-xl mx-auto">
                    Join thousands of users who have already freed up gigabytes of storage on their iPhones.
                  </p>
                  <a
                    href="https://apps.apple.com/app/galzip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 h-14 px-8 rounded-full bg-white text-[#00C853] font-semibold text-lg hover:bg-green-600 transition-all hover:scale-105 shadow-xl"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                    </svg>
                    Download Free on App Store
                  </a>
                  <p className="text-green-200 mt-4 text-sm">Free Download • No Credit Card Required</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
        <div className="bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-sm border-t border-gray-200 dark:border-white/10 p-4">
          <a
            href="https://apps.apple.com/app/galzip"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-[#00C853] via-[#00BFA5] to-[#00ACC1] text-white font-semibold text-lg shadow-lg shadow-green-500/30"
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
