import { notFound } from 'next/navigation';
import AppDetails from '@/components/AppDetails';

// App data - in a real app, this would come from a database or CMS
const appsData: { [key: string]: any } = {
  'fintools': {
    name: 'FinTools',
    tagline: 'Minimal calculators for Savings, Loans & Financial Freedom',
    description: 'Comprehensive financial planning and analysis tools',
    icon: '/icons/fintools.png',
    backgroundColor: 'bg-gradient-to-br from-emerald-500/20 to-emerald-700/20',
    appStoreLink: 'https://apps.apple.com/us/app/fintools/id6746293973',
    features: [
     {
        icon: '🔒',
        title: 'Privacy First',
        description: 'Your financial data stays secure with local data storage and processing.'
      },
      {
        icon: '✨',
        title: 'Intuitive and Details',
        description: 'Beautiful, user-friendly interface with comprehensive details for complete financial visibility.'
      },
      {
        icon: '🍎',
        title: 'Sync Cross Apple Devices',
        description: 'Seamless synchronization across all your Apple devices with real-time updates via iCloud.'
      }
    ],
    screenshots: [
      '/apps/fintools/screenshot-1.jpg',
      '/apps/fintools/screenshot-2.jpg',
      '/apps/fintools/screenshot-3.jpg'
    ]
  }
};

interface AppPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(appsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: AppPageProps) {
  const { slug } = await params;
  const app = appsData[slug];
  
  if (!app) {
    return {
      title: 'App Not Found',
      description: 'The requested app could not be found.',
    };
  }

  return {
    title: `${app.name} - Lite Team`,
    description: app.tagline,
  };
}

export default async function AppPage({ params }: AppPageProps) {
  const { slug } = await params;
  const app = appsData[slug];

  if (!app) {
    notFound();
  }

  return (
    <AppDetails
      name={app.name}
      tagline={app.tagline}
      description={app.description}
      icon={app.icon}
      backgroundColor={app.backgroundColor}
      appStoreLink={app.appStoreLink}
      macAppStoreLink={app.macAppStoreLink}
      setappLink={app.setappLink}
      features={app.features}
      screenshots={app.screenshots}
      stats={app.stats}
    />
  );
}