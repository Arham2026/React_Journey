
import React from "react"
import { useState } from "react"
function App() {
 const [color,setColor] = useState("olive")
  return (
    
     <div className="w-full h-screen duration-200"
      style = {{backgroundColor: color}}
     >
      <div 
      className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-40">
         <div className="flex flex-wrap gap-3 px-3 py-2 bg-white rounded shadow-lg ">
            
         <button  onClick={() => setColor("Red")}  className="px-4 py-1 text-white rounded-full shadow-lg outline-none" 
         style={{backgroundColor: "red"}}> Red
         </button>

         <button  onClick={() => setColor("Green")}  className="px-4 py-1 text-white rounded-full shadow-lg outline-none" 
         style={{backgroundColor: "Green"}}> Green
         </button>

         <button  onClick={() => setColor("Violet")}  className="px-4 py-1 text-white rounded-full shadow-lg outline-none" 
         style={{backgroundColor: "Violet"}}> Violet
         </button>

         <button  onClick={() => setColor("Blue")}  className="px-4 py-1 text-white rounded-full shadow-lg outline-none" 
         style={{backgroundColor: "Blue"}}> Blue
         </button>

         <button  onClick={() => setColor("olive")}  className="px-4 py-1 rounded-full shadow-lg outline-none" 
         style={{backgroundColor: "olive"}}> olive
         </button>

         <button  onClick={() => setColor("Grey")}  className="px-4 py-1 rounded-full shadow-lg outline-none" 
         style={{backgroundColor: "Grey"}}> Grey
         </button>
         
         <button  onClick={() => setColor("pink")}  className="px-4 py-1 rounded-full shadow-lg outline-none" 
         style={{backgroundColor: "pink"}}> pink
         </button>

         <button  onClick={() => setColor("lavender")}  className="px-4 py-1 text-black rounded-full shadow-lg outline-none" 
         style={{backgroundColor: "lavender"}}> lavender
         </button>

         <button  onClick={() => setColor("white")}  className="px-4 py-1 rounded-full shadow-lg outline-none" 
         style={{backgroundColor: "white"}}> white
         </button>
         
         <button  onClick={() => setColor("black")}  className="px-4 py-1 text-white rounded-full shadow-lg outline-none" 
         style={{backgroundColor: "black"}}> black
         </button>
               
         </div>
        
      </div>
      
     </div>
     
    
  )
}

export default App
