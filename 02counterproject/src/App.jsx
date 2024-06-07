import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



//  Let me tell what this page is all about 
//  here I am trying to figure out why react is so special and I found out that it is just good in reacting that is in changes that happens
//  in the webpage not in one area but in different areas so now here I am going to create a counter application which 
//  counts the number in various areas not in  one area but in different areas

//  why we are doing it in react not with just js?

// man it does the same work but in an optimised manner that is what everything is about make it optimized as much as possible.


// Now trying to set some limitations to it through the range of numbers it can count

function App() {
  
  // let counter = 0;
  
  let [counter,setcounter] = useState(0);


  const addValue = ()=>{
    if(counter==20){
      setcounter(counter =0)
    }
    else{
      setcounter(counter+1)
      
    }
    
    
  }

  const RemoveValue = ()=>{

    if(counter==0){
      setcounter(counter= 0)
    }
    else{
      setcounter(counter-1);
    }
    
  }


  return (
    <>
     <h1>I am Counting On You</h1>
     <h2>Counter value : {counter} </h2>


    <button onClick={addValue}
    >Add Value : {counter}</button>
    <br />
    <button onClick={
      RemoveValue
    }>remove Value : {counter}</button>
    </>

    
        )
}

export default App
