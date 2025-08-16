export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Lite Team</h1>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl text-center">
        Creating innovative iOS applications with a focus on elegant design and powerful functionality.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {/* App Card 1 */}
        <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-xl p-6 text-white flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-600 rounded-xl mb-4 flex items-center justify-center text-2xl font-bold">T</div>
          <h3 className="text-lg font-semibold mb-2">TaskMaster</h3>
          <p className="text-sm text-center mb-4 text-gray-300">Powerful task manager & organizer</p>
          <a href="#" className="px-4 py-2 bg-transparent border border-white/30 rounded-lg hover:bg-white/10 transition-colors">
            Download
          </a>
        </div>
        
        {/* App Card 2 */}
        <div className="bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-xl p-6 text-white flex flex-col items-center">
          <div className="w-16 h-16 bg-red-600 rounded-xl mb-4 flex items-center justify-center text-2xl font-bold">F</div>
          <h3 className="text-lg font-semibold mb-2">FocusTime</h3>
          <p className="text-sm text-center mb-4 text-gray-300">Pomodoro timer with analytics</p>
          <a href="#" className="px-4 py-2 bg-transparent border border-white/30 rounded-lg hover:bg-white/10 transition-colors">
            Download
          </a>
        </div>
        
        {/* App Card 3 */}
        <div className="bg-gradient-to-br from-green-500/20 to-green-700/20 rounded-xl p-6 text-white flex flex-col items-center">
          <div className="w-16 h-16 bg-green-600 rounded-xl mb-4 flex items-center justify-center text-2xl font-bold">N</div>
          <h3 className="text-lg font-semibold mb-2">NoteFlow</h3>
          <p className="text-sm text-center mb-4 text-gray-300">Elegant note taking & organization</p>
          <a href="#" className="px-4 py-2 bg-transparent border border-white/30 rounded-lg hover:bg-white/10 transition-colors">
            Download
          </a>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-700 rounded-full mb-4 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">A</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Alex Johnson</h3>
            <p className="text-gray-400">iOS Developer</p>
          </div>
          
          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-700 rounded-full mb-4 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">S</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Sarah Kim</h3>
            <p className="text-gray-400">UI/UX Designer</p>
          </div>
        </div>
      </div>
    </main>
  );
}