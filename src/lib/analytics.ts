// Define a type for analytics events
type AnalyticsEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

// Track app link clicks
export const trackAppClick = (appName: string) => {
  trackEvent({
    action: 'click',
    category: 'app_link',
    label: appName,
  });
};

// Track generic events
export const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
  // This will be available once Google Analytics is loaded
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Declare gtag on the window object for TypeScript
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: Record<string, any>
    ) => void;
  }
}