import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FocusTag: ADHD Pomodoro Timer - Block Distractions, Hit Goals',
  description: 'Combine ADHD-friendly Pomodoro intervals with smart Apple Screen Time app blocking and color-coded tags. Structure daily tasks, stay in the zone, and hit your focus targets on iOS.',
  keywords: [
    'FocusTag',
    'ADHD Pomodoro Timer',
    'habit',
    'tracker',
    'screen time',
    'deep work',
    'study',
    'adhd',
    'distraction',
    'screentime',
    'discipline',
    'routine',
    'log',
    'todo',
    'app blocker iOS',
    'Live Activity timer',
    'Dynamic Island timer'
  ],
  openGraph: {
    title: 'FocusTag: ADHD Pomodoro Timer - Block Distractions, Hit Goals',
    description: 'Combine ADHD-friendly Pomodoro intervals with smart Apple Screen Time app blocking and color-coded tags. 100% private and on-device for iOS.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/icons/focustag.png',
        width: 512,
        height: 512,
        alt: 'FocusTag App Icon',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'FocusTag: ADHD Pomodoro Timer - Block Distractions, Hit Goals',
    description: 'Combine ADHD-friendly Pomodoro intervals with smart Apple Screen Time app blocking and color-coded tags. 100% private and on-device for iOS.',
    images: ['/icons/focustag.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FocusTagLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
