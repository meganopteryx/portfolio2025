import { useState } from 'react'
import './App.css'
import { QuickLinksLanding } from './components/LandingPages.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {QuickLinksLanding()}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
