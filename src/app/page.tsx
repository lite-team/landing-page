import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <div className="min-h-screen bg-black selection:bg-indigo-500/30 text-white overflow-hidden relative">
      <Analytics />

      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-4 pt-20 pb-10">

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-8 mb-24 animate-float">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-sm font-medium text-gray-300">EST. 2024</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            We are <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Lite Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Indie developers crafting <span className="text-white font-medium">minimal</span>, <span className="text-white font-medium">efficient</span>, and <span className="text-white font-medium">delightful</span> digital experiences.
          </p>
        </div>

        {/* Apps Section */}
        <div className="w-full max-w-5xl mx-auto mb-32">
          <div className="flex items-center justify-between mb-12 px-4">
            <h2 className="text-3xl font-bold">Our Applications</h2>
            <div className="h-px bg-white/10 flex-1 ml-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {/* App Card 1: FinTools */}
            <a href="/apps/fintools" className="group block h-full">
              <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 shadow-2xl hover:shadow-indigo-500/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-opacity group-hover:opacity-75"></div>

                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border border-white/10 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src="/icons/fintools.png"
                      alt="FinTools"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
                    Finance
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-300 transition-colors">FinTools</h3>
                <p className="text-gray-400 leading-relaxed">
                  A comprehensive suite of financial calculators and utilities designed for clarity and precision.
                </p>

                <div className="mt-8 flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                  <span>Explore App</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* App Card 2: GalZip */}
            <a href="/galzip" className="group block h-full">
              <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-opacity group-hover:opacity-75"></div>

                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border border-white/10 group-hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-medium">
                    Photos
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-300 transition-colors">GalZip</h3>
                <p className="text-gray-400 leading-relaxed">
                  Compress photos and videos on your iPhone without losing quality. Free up space, keep your memories.
                </p>

                <div className="mt-8 flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                  <span>Explore App</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Team Section */}
        <div className="w-full max-w-5xl mx-auto mb-20">
          <div className="flex items-center justify-between mb-12 px-4">
            <h2 className="text-3xl font-bold">The Team</h2>
            <div className="h-px bg-white/10 flex-1 ml-8"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
            {/* Steve */}
            <a href="https://github.com/nghiaphunguyen" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex items-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-5 border-2 border-white/10 group-hover:border-indigo-400/50 transition-colors">
                  <img src="/team/member1.jpg" alt="Steve" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-indigo-300 transition-colors">Steve</h3>
                  <p className="text-sm text-gray-400">iOS Developer</p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Jarvis */}
            <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex items-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-5 border-2 border-white/10 group-hover:border-purple-400/50 transition-colors">
                  <img src="/team/member2.jpg" alt="Jarvis" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-purple-300 transition-colors">Jarvis</h3>
                  <p className="text-sm text-gray-400">AI Staff Engineer</p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}