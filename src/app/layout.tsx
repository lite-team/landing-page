import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

// Replace with your actual GA measurement ID when ready for production
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

export const metadata: Metadata = {
  title: 'Lite Team - iOS Applications',
  description: 'Lite team iOS applications and team introduction',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        {children}
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}