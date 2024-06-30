import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemButton'
import Card from './components/Card'

function App() {
  
  // Gving the functionality to the variables and the methods
  const [themeMode,setThemeMode] = useState("light")
  
  // The below task could be done in one method by just using true or false
  const lightTheme = ()=>{
    setThemeMode("light")
  }

  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  // actual change in the theme

  useEffect(()=>{
    
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
    
  },[themeMode])

  return (
  
 <ThemeProvider value = {{themeMode, lightTheme,darkTheme}}>   
<div className="flex flex-wrap items-center min-h-screen">
    <div className="w-full">
        <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
          {/* theme button */}
          <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* card */}
          <Card />
        </div>
    </div>
</div>
</ThemeProvider> 
  )
}

export default App
