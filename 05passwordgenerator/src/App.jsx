import { useState,useCallback, useEffect,useRef} from 'react'

function App() {
  // using the hooks to inject the state in the text boxes and the input field
  const [length,setlength] = useState(8)
  const [numberAllowed,setnumberAllowed] = useState(false)
  const [charAllowed,setcharAllowed] = useState(false)
  const [password,setpassword] = useState("")

  const passwordRef = useRef(null)
  
// we use the callback hook for the optimisation.
  const passwordGenerator = useCallback(() =>{
    
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+= "!#$%&'()*+,-./:;<=>?@[\\]^_{|}~"

    
    for(let i =1;i<=length;i++){
      
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    setpassword(pass)
    
  },[length,numberAllowed,
    charAllowed,setpassword
  ])

  const copyPasswordToClipboard = useCallback( ()=>{
    
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
    
  },[password])
  
  
// calling the function to generate the password using the useeffect hook
  useEffect( ()=>{
    
    passwordGenerator()
    
  },[length,numberAllowed,charAllowed,passwordGenerator,setpassword])

  
  
  return (
  <>
  <div className='w-full h-full max-w-md p-10 mx-auto my-8 text-orange-500 bg-gray-700 rounded-lg shadow-md'
  >
    <h1 className='my-3 text-center text-white'>password Generator</h1>
    
    <div className='flex mb-4 overflow-hidden rounded-lg shadow'>
      
    <input 
    type="text"
    value = {password} 
    className='w-full px-3 py-1 outline-none'
    placeholder='password'
    ref = {passwordRef}
    readOnly
    />
    
    <button 
    className='text-white bg-blue-700 rounded outline-none'
    onClick={copyPasswordToClipboard}
    >copy</button>
    
  </div>
      {/*The range*/}
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
            <input 
            type='range'
            min = {6}
            max = {100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=> {setlength(e.target.value)}}
            /> 
            <label>length :{length}</label>         
        </div>
        
        {/* checkbox */}
        
        <div className='flex items-center gap-x-1'>
          
          <input 
          type="checkbox" 
          defaultChecked = {numberAllowed}
          id='numberInput'
          onChange={()=>{
             setnumberAllowed((prev) => !prev)
            //  here the value of the boolean changes.
            // the above syntax is a special kind in which the variable in the paranthesis gets the previous value of the variable
            
          }}
          />
          <label htmlFor="NumberInput">Numbers</label>             
        </div>


        <div className='flex items-center gap-x-1'>
          
          <input 
          type="checkbox" 
          defaultChecked = {numberAllowed}
          id='characterInput'
          onChange={()=>{
             setcharAllowed((prev) => !prev)            
          }}
          />
          <label htmlFor="characterInput">character</label>             
        </div>
      </div>
 </div>
  
  
  </>
  )
}

export default App
