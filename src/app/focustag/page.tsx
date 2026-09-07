"use client";

import { useState, useEffect, useRef, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

// App Store Link Constant
const APP_STORE_URL = "https://apps.apple.com/app/id6783407321";

// Screenshots List (8 slices) - Optimized JPEG assets
const screenshots = [
  { id: 1, src: '/apps/focustag/screenshot-1.jpg', alt: 'FocusTag Home & Daily Tasks' },
  { id: 2, src: '/apps/focustag/screenshot-2.jpg', alt: 'FocusTag Active Pomodoro Focus Timer' },
  { id: 3, src: '/apps/focustag/screenshot-3.jpg', alt: 'FocusTag Apple Screen Time App Shielding' },
  { id: 4, src: '/apps/focustag/screenshot-4.jpg', alt: 'FocusTag Ambient Audio Soundscapes' },
  { id: 5, src: '/apps/focustag/screenshot-5.jpg', alt: 'FocusTag Tag & Preset Customization' },
  { id: 6, src: '/apps/focustag/screenshot-6.jpg', alt: 'FocusTag Pomodoro Cycles & Mindful Breaks' },
  { id: 7, src: '/apps/focustag/screenshot-7.jpg', alt: 'FocusTag Detailed Statistics & Target Insights' },
  { id: 8, src: '/apps/focustag/screenshot-8.jpg', alt: 'FocusTag Lock Screen Live Activities & Dynamic Island' },
];

// Target Audiences (from App Store Description)
const idealForList = [
  {
    icon: "🧠",
    title: "ADHD & Executive Function",
    description: "Visual structure, color tags, and digital friction to overcome task paralysis and hyperfocus burnout."
  },
  {
    icon: "📚",
    title: "Students & Academics",
    description: "Manage multiple subjects and study schedules with custom app blocking rules to ace exam prep."
  },
  {
    icon: "💻",
    title: "Developers & Remote Workers",
    description: "Enter sustained deep work blocks with offline ambient audio and zero phone interruptions."
  },
  {
    icon: "📵",
    title: "Mindful Habit Builders",
    description: "Break the cycle of dopamine loops, compare planned vs. actual focus, and reclaim screen time."
  }
];

// FAQ Data
const faqData = [
  {
    question: "How does the app blocking work on iPhone?",
    answer: "FocusTag integrates directly with Apple's official Screen Time (FamilyControls & ManagedSettings) APIs. When a focus session begins, your selected distraction apps are shielded at the operating system level, making them inaccessible until your session or break concludes."
  },
  {
    question: "How does FocusTag support ADHD and neurodivergent focus?",
    answer: "FocusTag uses visual color-coding to reduce cognitive friction when switching tasks, adaptable Pomodoro intervals to prevent hyperfocus exhaustion, and deliberate hold-to-quit friction (1.5 seconds) to stop split-second impulsive quitting."
  },
  {
    question: "Is my personal data private and secure?",
    answer: "100% private. FocusTag operates completely offline and on-device. We don't require an account, we don't have servers collecting your data, and your app usage or focus history never leaves your iPhone."
  },
  {
    question: "Can I set different blocked apps for different tasks?",
    answer: "Yes! Each FocusTag can have its own dedicated App Shield list. Block social media while studying, or block email and messaging apps during deep coding or creative writing."
  },
  {
    question: "Does it support Live Activities and Dynamic Island?",
    answer: "Yes! When you start a session, your active task, tag, and remaining focus time appear in real time on your Lock Screen and in the Dynamic Island, so you never need to unlock your phone and risk getting sidetracked."
  },
  {
    question: "Can I customize the scenes and ambient sounds?",
    answer: "Yes! FocusTag includes a library of beautiful scenes and offline soundscapes (Rain, Cozy Café, Forest, White Noise, Lofi). You can also create custom scenes with your own photos to personalize the vibe for each FocusTask."
  },
  {
    question: "What are the FocusTag Pro subscription options?",
    answer: "FocusTag is free to start. For power users wanting unlimited tags, custom ambient soundscapes, and advanced analytics, FocusTag Pro is available in flexible Weekly, Monthly, and Yearly subscription options."
  },
  {
    question: "Do I need an internet connection to use FocusTag?",
    answer: "No. FocusTag is designed to be fully functional offline. All timers, ambient audio tracks, stats, and shielding rules run entirely on your device with zero data usage."
  }
];

// Animated Section Wrapper
const AnimatedSection = memo(function AnimatedSection({
  children,
  className = "",
  delay = 0,
  initialVisible = false
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  initialVisible?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(initialVisible);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialVisible) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
        }
      },
      { threshold: 0.01, rootMargin: '150px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay, initialVisible]);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
});

// FAQ Accordion Item
function FAQItem({
  question,
  answer,
  isOpen,
  onClick
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-white group-hover:text-[#FCA37C] transition-colors pr-4">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#C2652A]/20 border-[#C2652A]/40 text-[#FCA37C]' : 'text-gray-400'}`}>
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-56 pb-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-300 leading-relaxed text-base">{answer}</p>
      </div>
    </div>
  );
}

export default function FocusTagPage() {
  const [showSticky, setShowSticky] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isSubdomain, setIsSubdomain] = useState(false);
  const [mainDomain, setMainDomain] = useState('/');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Subdomain detection
  useEffect(() => {
    const hostname = window.location.hostname;
    const port = window.location.port;
    const hostnameParts = hostname.split('.');

    if (hostnameParts.length >= 2 && hostnameParts[hostnameParts.length - 1] === 'localhost') {
      setIsSubdomain(true);
      setMainDomain(`http://localhost${port ? ':' + port : ''}`);
    } else if (hostnameParts.length >= 3) {
      const domain = `https://${hostnameParts.slice(-2).join('.')}`;
      setIsSubdomain(true);
      setMainDomain(domain);
    } else {
      setMainDomain('/');
    }
  }, []);

  // Center screenshots on mount
  useEffect(() => {
    if (scrollContainerRef.current) {
      requestAnimationFrame(() => {
        if (scrollContainerRef.current) {
          const { scrollWidth, clientWidth } = scrollContainerRef.current;
          scrollContainerRef.current.scrollLeft = (scrollWidth - clientWidth) / 4;
        }
      });
    }
  }, []);

  // Sticky navbar scroll listener
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldShow = window.scrollY > 400;
          setShowSticky(prev => (prev !== shouldShow ? shouldShow : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0B0A] text-white selection:bg-[#C2652A]/30 overflow-x-hidden font-sans">
      
      {/* Liquid Glass Background Ambient Mesh Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-[#C2652A]/15 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute top-[25%] right-[-15%] w-[45vw] h-[45vw] bg-[#FCA37C]/10 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] bg-[#8B4513]/15 rounded-full blur-[90px] opacity-30"></div>
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      </div>

      {/* Sticky Top Header */}
      <div
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 transform ${
          showSticky ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="bg-[#0D0B0A]/85 backdrop-blur-xl border-b border-white/10 px-6 py-3.5 shadow-2xl">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/icons/focustag.png"
                alt="FocusTag"
                className="w-9 h-9 rounded-2xl shadow-lg border border-white/10 object-cover"
              />
              <div>
                <span className="font-bold text-base tracking-tight text-white">FocusTag</span>
                <span className="hidden sm:inline-block ml-2 text-xs px-2.5 py-0.5 rounded-full bg-[#C2652A]/20 text-[#FCA37C] border border-[#C2652A]/30 font-medium">
                  ADHD Pomodoro Timer
                </span>
              </div>
            </div>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C2652A] to-[#E2854A] text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-95 hover:scale-105 transition-all shadow-lg shadow-[#C2652A]/30"
            >
              <svg className="w-4 h-4" viewBox="0 0 384 512" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
              </svg>
              <span>Download Free</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="relative z-40 px-6 py-6 max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href={mainDomain}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group text-sm font-medium"
        >
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
            <svg
              className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span>Lite Team</span>
        </Link>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl overflow-hidden shadow-xl border border-white/15">
            <img src="/icons/focustag.png" alt="FocusTag Icon" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="font-bold text-xl tracking-tight text-white block leading-tight">FocusTag</span>
            <span className="text-[11px] text-[#FCA37C] font-medium hidden sm:block">Block distractions, hit target</span>
          </div>
        </div>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-gray-200 hover:text-white transition-all"
        >
          <span>App Store</span>
          <svg className="w-3.5 h-3.5 text-[#FCA37C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </nav>

      <main className="relative z-10">

        {/* Hero Section */}
        <section className="px-6 pt-8 pb-16 md:pt-14 md:pb-24">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection initialVisible={true}>
              <div className="text-center max-w-3xl mx-auto">
                {/* Pill Tagline */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-inner">
                  <span className="flex h-2 w-2 rounded-full bg-[#C2652A] animate-pulse"></span>
                  <span className="text-xs font-semibold tracking-wide text-gray-300 uppercase">
                    ADHD-Friendly Pomodoro • Screen Time Shield • 1-Tap Widget
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-400">
                  Block Distractions.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCA37C] via-[#E2854A] to-[#C2652A]">
                    Hit Target.
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto font-normal">
                  Block distracting apps, start your timer, and immerse in beautiful scenes with ambient sound—all with a single tap from your Home Screen. Built for ADHD and busy minds to enter deep flow effortlessly.
                </p>

                {/* Hero CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-14 px-8 rounded-full bg-gradient-to-r from-[#C2652A] via-[#D87436] to-[#FCA37C] text-white font-semibold text-base sm:text-lg flex items-center gap-3 transition-all hover:scale-105 shadow-xl shadow-[#C2652A]/30 group"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 384 512" fill="currentColor">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                    </svg>
                    <span>Download on App Store</span>
                  </a>

                  <a
                    href="#how-it-works"
                    className="h-14 px-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-base sm:text-lg flex items-center gap-2 transition-all hover:border-white/20"
                  >
                    <span>How It Works</span>
                    <svg className="w-4 h-4 text-[#FCA37C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>

                <div className="mt-4 flex items-center justify-center gap-6 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    iOS 18+ Compatible
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    1-Tap Home Widget
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    100% Private & Local
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* App Screenshots Carousel Showcase */}
            <div id="screenshots" className="mt-12 md:mt-16 relative w-full mx-auto">
              <AnimatedSection initialVisible={true}>
                {/* Gradient fade on left and right edges */}
                <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[#0D0B0A] via-[#0D0B0A]/80 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[#0D0B0A] via-[#0D0B0A]/80 to-transparent z-20 pointer-events-none"></div>

                {/* Horizontal Scroll Container */}
                <div
                  ref={scrollContainerRef}
                  className="flex items-center gap-3 sm:gap-3.5 md:gap-4 overflow-x-auto pb-5 pt-2 pl-6 pr-6 md:pl-12 md:pr-12 scrollbar-hide"
                  style={{ scrollPaddingLeft: '24px', scrollPaddingRight: '24px' }}
                >
                  {screenshots.map((item, idx) => (
                    <div
                      key={item.id}
                      className="flex-shrink-0 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1"
                    >
                      <div className="relative group">
                        {/* Phone Bezel Frame */}
                        <div className="relative w-[155px] sm:w-[185px] md:w-[215px] lg:w-[235px] h-[335px] sm:h-[400px] md:h-[465px] lg:h-[510px] rounded-[1.6rem] sm:rounded-[1.9rem] md:rounded-[2.2rem] overflow-hidden shadow-xl border-[3px] border-gray-800/90 bg-[#120B08] ring-1 ring-white/10">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 640px) 155px, (max-width: 768px) 185px, (max-width: 1024px) 215px, 235px"
                            className="object-cover"
                            priority={idx < 2}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Scroll Indicator for mobile */}
                <div className="flex justify-center items-center gap-1.5 mt-3 md:hidden">
                  {screenshots.map((item) => (
                    <div key={item.id} className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="px-6 py-20 md:py-28 bg-[#120D0A]/60 border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FCA37C]">The Struggle</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">
                  Why Typical Timers Fail Distracted Brains
                </h2>
                <p className="text-gray-300 text-base md:text-lg">
                  Setting a timer is easy. But staying in the zone when your device is engineered for dopamine loops and instant impulses is an uphill battle.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "📱",
                  title: "One Tap from Doom-Scrolling",
                  description: "You check the timer, glance at a notification badge, and lose the next 45 minutes to infinite social feeds."
                },
                {
                  icon: "🌪️",
                  title: "Hyperfocus Burnout",
                  description: "Pushing through exhaustion without intentional breaks leads to mental fatigue and executive dysfunction."
                },
                {
                  icon: "💨",
                  title: "Zero Digital Friction",
                  description: "Most apps let you quit with a single tap. A fleeting impulse ruins hours of potential flow."
                },
                {
                  icon: "🧩",
                  title: "Context-Switching Chaos",
                  description: "Uncategorized tasks leave your mind overloaded without clarity on where focused energy is going."
                }
              ].map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 75} className="h-full">
                  <div className="h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#C2652A]/40 transition-all duration-300 flex flex-col hover:-translate-y-1">
                    <div className="text-4xl mb-5">{item.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed flex-grow">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal For Section (App Store Personas) */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FCA37C]">Designed For You</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">
                  Built for Focused Minds
                </h2>
                <p className="text-gray-300 text-base md:text-lg">
                  Whether managing neurodivergent attention patterns or entering deep work states, FocusTag adapts to your flow.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {idealForList.map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 75} className="h-full">
                  <div className="h-full p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#FCA37C]/40 transition-all duration-300 flex flex-col hover:-translate-y-1 group">
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FCA37C] transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section (6 Official App Store Pillars) */}
        <section id="features" className="px-6 py-20 md:py-32 bg-[#120D0A]/60 border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FCA37C]">Core Capabilities</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">
                  Engineered for Deep Flow
                </h2>
                <p className="text-gray-300 text-base md:text-lg">
                  Every feature in FocusTag is purpose-built to provide visual structure and protect your cognitive bandwidth.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Feature 1: Apple Screen Time Shield */}
              <AnimatedSection className="h-full">
                <div className="group h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#C2652A]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col relative overflow-hidden">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C2652A] to-[#E2854A] flex items-center justify-center mb-6 shadow-lg shadow-[#C2652A]/20">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">OS-Level App Shielding</h3>
                  <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                    Native integration with Apple's Screen Time framework shields distracting apps at the system level. When you try to open them, Apple's shield politely turns you back.
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#FCA37C]">
                    <span>Official FamilyControls API</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Feature 2: Color-Coded FocusTags */}
              <AnimatedSection className="h-full" delay={100}>
                <div className="group h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#FCA37C]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col relative overflow-hidden">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8E44AD] to-[#A569BD] flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Color-Coded FocusTags</h3>
                  <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                    Organize your day into vibrant, tactile category tags. Attach custom presets, cycle counts, soundscapes, and app blocking lists to each tag for one-tap context switching.
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#FCA37C]">
                    <span>Custom Presets & Environments</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Feature 3: Adaptable Pomodoro & Focus Timers */}
              <AnimatedSection className="h-full" delay={200}>
                <div className="group h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#C2652A]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col relative overflow-hidden">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D9534F] to-[#E2854A] flex items-center justify-center mb-6 shadow-lg shadow-red-500/20">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Adaptable Pomodoro Timers</h3>
                  <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                    Classic 25/5 intervals, extended deep work sessions, or custom durations matching your daily energy level. Gentle break reminders prevent burnout.
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#FCA37C]">
                    <span>Flexible Work & Break Cycles</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Feature 4: Live Activities & Dynamic Island */}
              <AnimatedSection className="h-full">
                <div className="group h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#FCA37C]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col relative overflow-hidden">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FCA37C] to-[#C2652A] flex items-center justify-center mb-6 shadow-lg shadow-[#FCA37C]/20">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Live Activity & Dynamic Island</h3>
                  <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                    Track your active task and remaining timer right from your Lock Screen and Dynamic Island without unlocking your phone and falling into dopamine traps.
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#FCA37C]">
                    <span>Zero-Unlock Awareness</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Feature 5: Ambient Audio & Beautiful Scenes */}
              <AnimatedSection className="h-full" delay={100}>
                <div className="group h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#2A65C2]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col relative overflow-hidden">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2A65C2] to-[#5DADE2] flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Soundscapes & Beautiful Scenes</h3>
                  <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                    Drown out distractions with offline ambient audio (Rain, Forest, Café, Lofi) and gorgeous curated scenes. Easily customize scenes with your own photos to match your personal aesthetic and mood.
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#FCA37C]">
                    <span>Curated & Custom Scenes</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Feature 6: Detailed Statistics & Target Insights */}
              <AnimatedSection className="h-full" delay={200}>
                <div className="group h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col relative overflow-hidden">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#27AE60] to-[#2ECC71] flex items-center justify-center mb-6 shadow-lg shadow-green-500/20">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Detailed Stats & Insights</h3>
                  <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                    Visual charts breaking down your focus daily, weekly, and monthly. Compare planned targets against actual hours, uncover peak focus times, and celebrate streaks.
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#FCA37C]">
                    <span>100% On-Device & Private</span>
                  </div>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="px-6 py-20 md:py-32">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FCA37C]">Frictionless Workflow</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">
                  Set Up Once. Focus in 1 Tap.
                </h2>
                <p className="text-gray-300 text-base md:text-lg">
                  Configure your ideal focus environment once. After that, enter pure flow with a single click from the app or your iPhone Home Screen widget.
                </p>
              </div>
            </AnimatedSection>

            {/* 4 Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Create & Tag Task",
                  subtitle: "Define your focus",
                  description: "Name your task and assign a vibrant, color-coded FocusTag (Deep Work, Study, Coding) to keep your mind organized.",
                  icon: "🏷️",
                  highlight: "Tag & Categorize"
                },
                {
                  step: "02",
                  title: "Preset Timer & Intervals",
                  subtitle: "Set duration & cycles",
                  description: "Choose classic 25/5 Pomodoro intervals, custom deep work blocks, and number of rounds tailored to your energy level.",
                  icon: "⏱️",
                  highlight: "Custom Presets"
                },
                {
                  step: "03",
                  title: "Shield Apps, Sounds & Scenes",
                  subtitle: "Curate your environment",
                  description: "Pick distraction apps to block via Apple Screen Time, select offline ambient audio, and choose beautiful curated or custom scenes to match your taste.",
                  icon: "🎨",
                  highlight: "Screen Time, Sounds & Scenes"
                },
                {
                  step: "04",
                  title: "1-Click to Pure Flow",
                  subtitle: "App or Home Screen widget",
                  description: "Your task is saved! Whenever you're ready, tap once in the app or on your Home Screen widget to instantly enter the zone.",
                  icon: "⚡",
                  highlight: "1-Tap Launch"
                }
              ].map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 75}>
                  <div className={`p-8 rounded-3xl border relative flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 ${
                    idx === 3 
                      ? 'bg-gradient-to-b from-[#C2652A]/15 to-white/[0.03] border-[#C2652A]/40 shadow-xl shadow-[#C2652A]/10' 
                      : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                  }`}>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl">{item.icon}</span>
                      <span className="text-xs font-mono font-bold text-[#FCA37C] px-2.5 py-1 rounded-full bg-[#C2652A]/20 border border-[#C2652A]/30">
                        {item.step}
                      </span>
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#FCA37C] mb-1">
                      {item.subtitle}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed flex-grow">{item.description}</p>
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
                      <span className="font-medium text-[#FCA37C]">{item.highlight}</span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* 1-Tap Widget Highlight Banner */}
            <AnimatedSection delay={250} className="mt-12">
              <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-white/[0.04] via-white/[0.06] to-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#C2652A]/20 border border-[#C2652A]/30 flex items-center justify-center flex-shrink-0 text-2xl shadow-lg shadow-[#C2652A]/20">
                    📲
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      Home Screen Widget: Instant 1-Tap Focus
                    </h4>
                    <p className="text-sm text-gray-300 max-w-2xl">
                      No need to open the app and fiddle with menus every time. Tap the play button on your interactive iOS widget—FocusTag instantly shields apps, starts ambient sounds, and kicks off your timer.
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C2652A]/20 text-[#FCA37C] border border-[#C2652A]/30 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#FCA37C] animate-pulse"></span>
                    Interactive iOS Widget
                  </span>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-20 md:py-32 bg-[#120D0A]/60 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FCA37C]">Got Questions?</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-300 text-base md:text-lg">
                  Everything you need to know about FocusTag, ADHD focus patterns, and Apple Screen Time.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-white/[0.03] rounded-3xl border border-white/10 p-6 md:p-10 shadow-2xl">
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

        {/* Final CTA Banner */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="relative rounded-[2.5rem] p-10 md:p-16 overflow-hidden bg-gradient-to-br from-[#C2652A] via-[#D87436] to-[#A04518] shadow-2xl text-center">
                
                {/* Radial Glow Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ffffff30,transparent_60%)] pointer-events-none"></div>

                <div className="relative z-10 max-w-2xl mx-auto">
                  <div className="w-20 h-20 mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-white/30 mb-8">
                    <img src="/icons/focustag.png" alt="FocusTag" className="w-full h-full object-cover" />
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    Reclaim Your Focus Today
                  </h2>

                  <p className="text-base md:text-xl text-amber-100 mb-8 leading-relaxed">
                    Stop letting notifications and infinite feeds steal your time. Build deep work habits with FocusTag on iPhone.
                  </p>

                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 h-14 px-8 rounded-full bg-white text-[#C2652A] font-bold text-base sm:text-lg hover:bg-amber-50 hover:scale-105 transition-all shadow-2xl group"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 384 512">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                    </svg>
                    <span>Download on App Store</span>
                  </a>

                  <p className="text-xs text-amber-200/80 mt-4 font-medium">
                    Compatible with iOS 18+ • Free to download
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>

      {/* Mobile Sticky Bottom CTA */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
        <div className="bg-[#0D0B0A]/90 backdrop-blur-xl border-t border-white/10 p-4">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#C2652A] to-[#E2854A] text-white font-bold text-base shadow-lg shadow-[#C2652A]/30"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 384 512">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
            </svg>
            <span>Download FocusTag Free</span>
          </a>
        </div>
      </div>

      <div className="pb-20 md:pb-0">
        <Footer />
      </div>
    </div>
  );
}
