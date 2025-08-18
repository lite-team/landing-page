import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center bg-black p-8">
        <h1 className="text-4xl font-bold text-white mb-6">Lite Team</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl text-center">
          Indie developers building lightweight, efficient applications for a better user experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-6xl">
          {/* App Card 1 */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 text-white flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-20 h-20 rounded-xl mb-6 overflow-hidden shadow-md">
              <img 
                src="icons/fintools.png" 
                alt="FinTools App Icon" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">FinTools</h3>
            <p className="text-sm text-center mb-6 text-gray-400">Financial tools & plan</p>
            <a href="#" className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors shadow-md">
              Download
            </a>
          </div>
          
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Our Team</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <a href="https://github.com/nghiaphunguyen" className="block" target="_blank" rel="noopener noreferrer">
                <div className="w-32 h-32 bg-gray-700 rounded-full mb-4 overflow-hidden hover:opacity-80 transition-opacity">
                  <img 
                    src="/team/member1.jpg" 
                    alt="Steve - iOS Developer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
              <h3 className="text-xl font-semibold text-white">Steve</h3>
              <p className="text-gray-400">iOS Developer</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="flex flex-col items-center">
              <a href="https://github.com/features/copilot" className="block" target="_blank" rel="noopener noreferrer">
                <div className="w-32 h-32 bg-gray-700 rounded-full mb-4 overflow-hidden hover:opacity-80 transition-opacity">
                  <img 
                    src="/team/member2.jpg" 
                    alt="Jarvis - AI Staff Engineer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
              <h3 className="text-xl font-semibold text-white">Jarvis</h3>
              <p className="text-gray-400">AI Staff Engineer</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}