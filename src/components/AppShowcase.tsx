import Container from './Container';
import AppCard from './AppCard';

// Sample app data - replace with actual apps
const apps = [
  {
    id: 1,
    name: 'TaskMaster',
    description: 'Powerful task manager & organizer',
    icon: '/icons/taskmaster.png',
    backgroundColor: 'bg-gradient-to-br from-blue-500/20 to-blue-700/20',
    appStoreLink: 'https://apps.apple.com/app/taskmaster'
  },
  {
    id: 2,
    name: 'FocusTime',
    description: 'Pomodoro timer with analytics',
    icon: '/icons/focustime.png',
    backgroundColor: 'bg-gradient-to-br from-red-500/20 to-red-700/20',
    appStoreLink: 'https://apps.apple.com/app/focustime'
  },
  {
    id: 3,
    name: 'NoteFlow',
    description: 'Elegant note taking & organization',
    icon: '/icons/noteflow.png',
    backgroundColor: 'bg-gradient-to-br from-green-500/20 to-green-700/20',
    appStoreLink: 'https://apps.apple.com/app/noteflow'
  },
];

export default function AppShowcase() {
  return (
    <Container id="apps" className="relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Apps</h2>
      <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12">
        Thoughtfully designed applications to enhance your iOS experience with focus on usability and performance.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map(app => (
          <AppCard
            key={app.id}
            name={app.name}
            description={app.description}
            icon={app.icon}
            backgroundColor={app.backgroundColor}
            appStoreLink={app.appStoreLink}
          />
        ))}
      </div>
    </Container>
  );
}