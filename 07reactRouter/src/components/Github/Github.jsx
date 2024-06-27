import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function GitHub(){
    
    const data = useLoaderData()
    // const [data,SetData] = useState([])
    
    // useEffect(()=>{
        
    //     fetch('https://api.github.com/users/arham2026')
    //     .then((response)=> response.json())
    //     .then(data =>{
    //         SetData(data)
    //     })
        
    // },[])
 
    return(
        <div className="p-4 m-4 text-3xl text-white bg-gray-600 rounded-sm">Github followers: {data.followers}
        
        </div>
    )
}

export default GitHub

export const githubInfoLoader = async ()=> {
const response =  await fetch('https://api.github.com/users/arham2026')
return response.json()
}