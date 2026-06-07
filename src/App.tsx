import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <header className="bg-black bg-opacity-30 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-2">🌍 Travelextoops</h1>
          <p className="text-xl text-gray-200">Your Ultimate Travel Companion</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to Your Travel Site!</h2>
          <p className="text-lg mb-6">
            Explore amazing destinations, plan your perfect trips, and create unforgettable memories around the world.
          </p>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Start Exploring ({count})
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-md hover:bg-opacity-20 transition">
            <h3 className="text-2xl font-bold mb-3">🗺️ Explore Destinations</h3>
            <p className="text-gray-200">Discover thousands of amazing travel destinations with detailed guides and information.</p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-md hover:bg-opacity-20 transition">
            <h3 className="text-2xl font-bold mb-3">📱 Mobile Friendly</h3>
            <p className="text-gray-200">Access your travel plans from anywhere, anytime with our responsive design.</p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-md hover:bg-opacity-20 transition">
            <h3 className="text-2xl font-bold mb-3">🎯 Plan Trips</h3>
            <p className="text-gray-200">Create and organize your perfect itineraries with our easy-to-use planning tools.</p>
          </div>
        </div>

        <section className="mt-12 bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-md">
          <h2 className="text-3xl font-bold mb-6">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Paris, France', 'Tokyo, Japan', 'Dubai, UAE', 'New York, USA', 'Sydney, Australia', 'London, UK', 'Barcelona, Spain', 'Thailand'].map((dest) => (
              <div key={dest} className="bg-white bg-opacity-20 rounded p-4 text-center hover:bg-opacity-30 transition cursor-pointer">
                <p className="font-semibold">{dest}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-black bg-opacity-50 text-center py-8 mt-12">
        <p>&copy; 2026 Travelextoops. All rights reserved. Powered by GitHub Pages.</p>
      </footer>
    </div>
  )
}

export default App