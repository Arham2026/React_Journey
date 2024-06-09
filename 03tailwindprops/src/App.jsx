import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  
  
  
  return (
    <>
    
    <h1 className='p-4 mb-4 text-black bg-green-400 rounded-xl'>Just Do It</h1>
    <Card channel = "Arham shajahan" myObj = "Click ME" />
    <Card channel = "Keerthivasan" myObj = "Push ME" />

   

    
    </>
  )
}

export default App
