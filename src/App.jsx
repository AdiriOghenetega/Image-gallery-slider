import { useState } from 'react'
import Gallery from "./gallery"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Gallery />
    </div>
  )
}

export default App
