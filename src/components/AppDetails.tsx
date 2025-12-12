"use client"

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Container from './Container';
import Footer from './Footer';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface AppDetailsProps {
  name: string;
  tagline: string;
  description: string;
  icon: string;
  backgroundColor: string;
  appStoreLink: string;
  macAppStoreLink?: string;
  setappLink?: string;
  features: Feature[];
  screenshots: string[];
  stats?: {
    users: string;
    rating: number;
  };
}

export default function AppDetails({
  name,
  tagline,
  description,
  icon,
  backgroundColor,
  appStoreLink,
  macAppStoreLink,
  setappLink,
  features,
  screenshots,
  stats
}: AppDetailsProps) {
  const [scrollY, setScrollY] = useState(0);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSticky = scrollY > 300;

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 overflow-x-hidden">

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/10 rounded-full blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[100px] opacity-20 animate-float"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[100px] opacity-20"></div>
      </div>

      {/* Sticky Header */}
      <div className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 transform ${showSticky ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 grid grid-cols-[1fr_auto_1fr] items-center max-w-7xl mx-auto w-full">
          <div className="justify-self-start">
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Back to Home
            </Link>
          </div>

          <div className="flex items-center gap-3 justify-self-center">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-gray-800">
              <img src={icon} alt={name} className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-sm md:text-base hidden sm:block">{name}</span>
          </div>

          <div className="justify-self-end">
            <a href={appStoreLink} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg">
              Download
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-40 px-6 py-8 flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group">
          <svg className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </nav>

      <main className="relative z-10 pt-4 pb-32">
        <Container>

          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center text-center mb-32 relative pt-10">

            {/* Glow behind icon */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/30 blur-[100px] rounded-full -z-10 animate-pulse"></div>

            <div className="mb-10 relative group cursor-default">
              <div className="w-32 h-32 md:w-44 md:h-44 bg-gray-900 rounded-[2.5rem] p-1 shadow-2xl border border-white/10 relative overflow-hidden transition-transform duration-700 hover:scale-105 hover:rotate-3">
                <img src={icon} alt={name} className="w-full h-full object-cover rounded-[2.3rem]" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2.3rem]"></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
              {name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-12">
              {tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <a href={appStoreLink} target="_blank" rel="noopener noreferrer"
                className="h-14 px-8 rounded-full bg-white text-black font-bold text-lg flex items-center gap-3 transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
              >
                <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" /></svg>
                Download on App Store
              </a>
              {(macAppStoreLink || setappLink) && (
                <div className="flex gap-4">
                  {macAppStoreLink && (
                    <a href={macAppStoreLink} className="h-14 px-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white space-x-2 font-medium hover:bg-white/10 hover:scale-105 transition-all" title="Mac App Store">
                      <span className="text-xl">💻</span>
                      <span>Mac</span>
                    </a>
                  )}
                  {setappLink && (
                    <a href={setappLink} className="h-14 px-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white space-x-2 font-medium hover:bg-white/10 hover:scale-105 transition-all" title="Setapp">
                      <span className="text-xl">⚙️</span>
                      <span>Setapp</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Screenshots - Premium Showcase */}
          <div className="mb-40 relative">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">Crafted for Perfection</h2>
              <p className="text-gray-400 text-lg">A glimpse into the experience</p>
            </div>

            {/* Phone Showcase Grid */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 perspective-1000 min-h-[600px]">
              {screenshots.map((src, idx) => (
                <div
                  key={idx}
                  className="transform transition-all duration-500 hover:scale-[1.02] relative"
                >
                  <img
                    src={src}
                    alt={`Screenshot ${idx}`}
                    className="w-[260px] h-auto object-contain rounded-[2rem] shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid - Bento Style */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6">Why you'll love it</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(0,1fr)]">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors group flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-3xl mb-8 text-white group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner border border-white/5">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-light text-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </Container>
      </main>

      <Footer />
    </div >
  );
}