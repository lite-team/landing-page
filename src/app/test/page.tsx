export default function TestPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Tailwind CSS Test</h1>
      <p className="text-lg text-gray-300 mb-8">If you can see this styled text, Tailwind CSS is working!</p>
      
      <div className="flex space-x-4">
        <div className="w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="font-bold">Blue Box</span>
        </div>
        <div className="w-32 h-32 bg-green-500 rounded-lg flex items-center justify-center">
          <span className="font-bold">Green Box</span>
        </div>
        <div className="w-32 h-32 bg-red-500 rounded-lg flex items-center justify-center">
          <span className="font-bold">Red Box</span>
        </div>
      </div>
    </div>
  );
}