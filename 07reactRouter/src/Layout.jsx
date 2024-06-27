import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
// In this file we are trying to create 

function Layout(){
    return(
    <>
       <Header/> 
       <Outlet/>
       <Footer/>
        
    </>
    )
}

export default Layout