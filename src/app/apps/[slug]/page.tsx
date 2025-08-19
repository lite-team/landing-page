import { notFound } from 'next/navigation';
import AppDetails from '@/components/AppDetails';

// App data - in a real app, this would come from a database or CMS
const appsData: { [key: string]: any } = {
  'fintools': {
    name: 'FinTools',
    tagline: 'Financial tools & plan',
    description: 'Comprehensive financial planning and analysis tools',
    icon: '/icons/fintools.png',
    backgroundColor: 'bg-gradient-to-br from-emerald-500/20 to-emerald-700/20',
    appStoreLink: 'https://apps.apple.com/app/fintools',
    macAppStoreLink: 'https://apps.apple.com/app/fintools-mac',
    stats: {
      users: 'Over 15k+',
      rating: 4.5
    },
    features: [
      {
        icon: '💰',
        title: 'Budget Planning',
        description: 'Create and manage comprehensive budgets with smart categorization and spending insights.'
      },
      {
        icon: '📊',
        title: 'Financial Analytics',
        description: 'Track your financial health with detailed charts and reports on income, expenses, and savings.'
      },
      {
        icon: '🎯',
        title: 'Goal Setting',
        description: 'Set and track financial goals with automated savings plans and milestone celebrations.'
      },
      {
        icon: '📈',
        title: 'Investment Tracking',
        description: 'Monitor your investment portfolio with real-time updates and performance analysis.'
      },
      {
        icon: '🔔',
        title: 'Smart Alerts',
        description: 'Get notified about bill due dates, budget limits, and financial opportunities.'
      },
      {
        icon: '🔒',
        title: 'Bank Security',
        description: 'Enterprise-grade security with bank-level encryption to protect your financial data.'
      }
    ],
    screenshots: [
      '/screenshots/fintools-1.png',
      '/screenshots/fintools-2.png',
      '/screenshots/fintools-3.png',
      '/screenshots/fintools-4.png'
    ]
  }
};

interface AppPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(appsData).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: AppPageProps) {
  const app = appsData[params.slug];
  
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

export default function AppPage({ params }: AppPageProps) {
  const app = appsData[params.slug];

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