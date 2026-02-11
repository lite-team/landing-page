import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FinTools - Minimal calculators for Savings, Loans & Financial Freedom',
  description: 'Comprehensive financial planning and analysis tools. Privacy-first calculators to plan your savings, loans, and financial future.',
  keywords: [
    'financial calculator',
    'savings calculator',
    'loan calculator',
    'investment calculator',
    'retirement planning',
    'fintools',
    'financial planning',
    'iOS finance app'
  ],
  openGraph: {
    title: 'FinTools - Minimal calculators for Savings, Loans & Financial Freedom',
    description: 'Comprehensive financial planning and analysis tools. Privacy-first calculators.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FinTools - Minimal calculators for Savings, Loans & Financial Freedom',
    description: 'Comprehensive financial planning and analysis tools. Privacy-first calculators.',
  },
};

export default function FinToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
