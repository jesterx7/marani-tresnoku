import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-white">
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row md:gap-6">
          <div className="text-7xl lg:text-9xl tracking-wide great-vibes-regular opacity-0 translate-y-4 animate-fadeIn">
            Marani
          </div>
          <div className="text-7xl lg:text-9xl tracking-wide great-vibes-regular opacity-0 translate-y-4 animate-fadeIn">
            Katresnan
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-6">
          <div>
            Marcell
          </div>
          <div>
            X
          </div>
          <div>
            Rani
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
