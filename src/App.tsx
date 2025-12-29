import React from 'react'

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="text-3xl font-bold text-yellow-300">Quantica Test App</h1>
        <p className="mt-2 text-sm text-gray-300">Vite + React + TypeScript</p>
        <div className="mt-6">
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded">Tailwind Test Button</button>
        </div>
      </header>
    </div>
  )
}

export default App
