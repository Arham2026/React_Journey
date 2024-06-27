import React from "react";
import { useParams } from "react-router-dom";


function User(){
    const {userid} = useParams()
    return(
      <div className="p-4 text-2xl text-white bg-gray-700 rounded-sm">User : {userid}</div>
    )
}

export default User