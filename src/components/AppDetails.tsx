"use client"

import Link from 'next/link';
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
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Container className="py-6">
        <Link 
          href="/#apps" 
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          ← Back to Apps
        </Link>
      </Container>

      {/* Hero Section */}
      <Container className="py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 rounded-xl mb-6 overflow-hidden shadow-md bg-gray-700 flex items-center justify-center mr-4">
              <div className="text-3xl font-bold">{name.charAt(0)}</div>
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
      <Container className="py-16">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Main Feature */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">{features[0]?.title}</h2>
              <p className="text-gray-300 mb-6">{features[0]?.description}</p>
              {stats && (
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-4 inline-block">
                  <div className="text-sm text-gray-400 mb-1">Happy Users</div>
                  <div className="text-2xl font-bold">{stats.users}</div>
                </div>
              )}
            </div>
            
            {/* Screenshots Preview */}
            <div className="lg:col-span-2">
              <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-2 p-4">
                    {screenshots.slice(0, 4).map((_, index) => (
                      <div key={index} className="w-16 h-28 bg-gray-700 rounded-lg border border-gray-600"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Additional Features */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(1).map((feature, index) => (
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
      
      <Footer />
    </div>
  );
}