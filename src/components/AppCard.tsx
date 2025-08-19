"use client"

import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { trackAppClick } from '@/lib/analytics';

interface AppCardProps {
  name: string;
  description: string;
  icon: string;
  backgroundColor: string;
  appStoreLink: string;
  slug?: string;
}

export default function AppCard({ 
  name, 
  description, 
  icon, 
  backgroundColor,
  appStoreLink,
  slug 
}: AppCardProps) {
  const handleAppClick = () => {
    // Track app click in analytics
    trackAppClick(name);
  };

  const cardContent = (
    <>
      <div className="relative w-16 h-16 mb-4 rounded-xl overflow-hidden bg-gray-700 flex items-center justify-center">
        {/* Fallback icon in case of missing image */}
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
          {name.charAt(0)}
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mb-2 text-center">{name}</h3>
      <p className="text-sm text-center mb-4 text-gray-200">{description}</p>
      
      <div className="mt-auto flex flex-col gap-2">
        {slug && (
          <Link 
            href={`/apps/${slug}`}
            className="text-sm px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-center"
          >
            Learn More
          </Link>
        )}
        <Button 
          href={appStoreLink} 
          variant="outline"
          className="text-sm"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleAppClick}
        >
          Download
        </Button>
      </div>
    </>
  );

  return (
    <div 
      className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center ${backgroundColor}`}
    >
      {cardContent}
    </div>
  );
}