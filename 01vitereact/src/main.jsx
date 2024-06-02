import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// here instead of getting the method from the app file we could be able to do it in here and pass it to the rendering

function Checking(){
  return(

    <h1>Hi I am Good</h1>
  )
  
}

//  but finally anyway the above code gets broken down and gets structured like a tree 
//  we call it as tree like structure like DOM in js

//  so why don't we try passing the simple broken down structure to the rendering process
//  let's give it a try.

const ReactElement = {
  type:'a',
  props: {
      href : 'https://google.com',
      target : '_blank'
  },
  children : 'Click me to visit google'
}

// the above written is a object which contains an elements information
//  basically the final product of react delivers this kind of code to the browser

// but the problem here is there is definite syntax and requirement made for the compiling process

// so let's try in a another way

const anotherElement = (
   <a href="https://google.com" target='_blank'>Visit google </a>
)
// the above code of another element is transformed anyway into the upcoming code

const neitherElement = React.createElement(
  'a',
  {href: "https://google.com"},
  'visit google'

)

ReactDOM.createRoot(document.getElementById('root')).render(
      neitherElement
     
    // <Checking/>
    // Checking()
//  this is the cool part of this render section 
//  we can render as it like in js we call the function.
  
)
