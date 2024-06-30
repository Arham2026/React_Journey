import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Profile(){

    // this is used to get the data

    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>

    return <div> Welcome {user.userName}</div>
}

export default Profile