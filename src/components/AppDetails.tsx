"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Container from './Container';
import Button from './Button';
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
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [showStickyButtons, setShowStickyButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navTriggerPoint = 100; // Show nav bar when scrolling past "Back to Home" button
      const buttonsTriggerPoint = 400; // Show download buttons when scrolling past original download section
      const isMobile = window.innerWidth < 768; // md breakpoint in Tailwind
      
      setShowStickyNav(scrollY > navTriggerPoint || isMobile);
      setShowStickyButtons(scrollY > buttonsTriggerPoint);
    };

    const handleResize = () => {
      handleScroll(); // Re-evaluate on resize
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-black text-white flex flex-col -mt-12 transition-all duration-300 ${
      showStickyNav ? 'pt-16' : 'pt-0'
    }`}>
      {/* Sticky Navigation Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out transform ${
        showStickyNav 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="bg-black/80 backdrop-blur-md border-b border-gray-800 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium"
            >
              ← Back to Home
            </Link>
            
            <div className={`flex items-center gap-3 transition-all duration-300 ease-in-out transform ${
              showStickyButtons 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
            }`}>
              <a 
                href={appStoreLink} 
                className="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors shadow-md hover:shadow-lg flex items-center gap-2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                📱 App Store
              </a>
              
              {macAppStoreLink && (
                <a 
                  href={macAppStoreLink} 
                  className="px-4 py-2 bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  � Mac
                </a>
              )}
              
              {setappLink && (
                <a 
                  href={setappLink} 
                  className="px-4 py-2 bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  ⚙️ Setapp
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <Container className="py-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          {showStickyNav ? '' : '← Back to Home'}
        </Link>
      </Container>

      {/* Hero Section */}
      <Container className="pt-0 pb-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 rounded-xl mb-6 overflow-hidden shadow-md bg-gray-700 flex items-center justify-center mr-4">
              <img src={icon} alt={`${name} icon`} className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{name}</h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{tagline}</p>
          
          {/* Download Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href={appStoreLink} className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors shadow-md" target="_blank" rel="noopener noreferrer">
              📱 App Store
            </a>
            
            {macAppStoreLink && (
              <a href={macAppStoreLink} className="px-6 py-3 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105" target="_blank" rel="noopener noreferrer">
                💻 Mac App Store
              </a>
            )}
            
            {setappLink && (
              <a href={setappLink} className="px-6 py-3 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105" target="_blank" rel="noopener noreferrer">
                ⚙️ Setapp
              </a>
            )}
          </div>
          
          {stats && (
            <div className="text-sm text-gray-400">
              <span>⭐ {stats.rating}/5 • {stats.users} users</span>
            </div>
          )}
        </div>
      </Container>

      {/* Features Section */}
      <Container className="py-6">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300">
          {/* Screenshots Preview */}
          <div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {screenshots.map((screenshot, index) => (
                <div key={index} className="w-full bg-gray-700 rounded-lg border border-gray-600 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 cursor-pointer group">
                  <img 
                    src={screenshot} 
                    alt={`Screenshot ${index + 1}`} 
                    className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Additional Features */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 mx-auto mb-4 text-2xl flex items-center justify-center rounded-lg bg-gray-700">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
      
      <div className="flex-grow">
        <Footer />
      </div>
    </div>
  );
}