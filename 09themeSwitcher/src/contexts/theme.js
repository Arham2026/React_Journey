import { createContext,useContext } from "react"

// Creating the Context
export const ThemeContext = createContext({
    // passing the variable and the method.
    themeMode:"light",
    darkTheme:() => {},
    lightTheme: () => {},
})

// Providing the Context
export const ThemeProvider = ThemeContext.Provider

// Creating a custom hook with the usecontext so that you 
// import everything in one page.

export default function useTheme(){
    return useContext(ThemeContext)
}
