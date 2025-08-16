import Button from './Button';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm md:text-base font-medium text-primary mb-3">
            Empowering your iOS experience
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Lite Team
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We are a small, passionate team focused on creating exceptional iOS 
            applications that enhance productivity, creativity, and daily life.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              href="#apps" 
              variant="primary"
            >
              View Our Apps
            </Button>
            
            <Button 
              href="#team" 
              variant="outline"
            >
              Meet The Team
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53.3 600 46.7 720 36.7C840 26.7 960 13.3 1080 16.7C1200 20 1320 40 1380 50L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="#111827"
          />
        </svg>
      </div>
    </div>
  );
}