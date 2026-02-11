import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GalZip - Free Up Space, Keep Your Memories | Photo Compression App for iPhone',
  description: 'Compress photos and videos on your iPhone without losing quality. Simple, fast, and 100% private. Free up gigabytes of storage space with GalZip.',
  keywords: [
    'photo compression app',
    'iPhone storage manager',
    'compress photos iOS',
    'free up iPhone space',
    'photo optimizer',
    'video compression app',
    'gallery zip',
    'galzip',
    'iOS photo compressor'
  ],
  openGraph: {
    title: 'GalZip - Free Up Space, Keep Your Memories',
    description: 'Compress photos and videos on your iPhone without losing quality. Simple, fast, and 100% private.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GalZip - Free Up Space, Keep Your Memories',
    description: 'Compress photos and videos on your iPhone without losing quality. Simple, fast, and 100% private.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GalZipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
