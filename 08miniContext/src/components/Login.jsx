import { useState } from "react";
import React,{useContext} from "react";
import UserContext from "../context/UserContext";

function Login(){

    const [userName,setUsername]= useState('')
    const [password,setPassword]= useState('')

    // the below is about sending the data
    const {setUser} = useContext(UserContext)
    // usecontext hook is used to consume the context value and retrieves the context value.
    // here we are extracting setuser so that we could use it in different components

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({userName,password})
    }

    return(
        <div>
        <h2>Login</h2>
        <input type="text"  
        value = {userName}
        onChange = {(e)=>setUsername(e.target.value)}       
        placeholder="username"/>

        {/* the above mechanism is something that happens like first the onchange gets triggered and updates the value of the username */}
        
        <input type="text" 
        value = {password}
        onChange = {(e)=>setPassword(e.target.value)}         
        placeholder="password"/>
        <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login