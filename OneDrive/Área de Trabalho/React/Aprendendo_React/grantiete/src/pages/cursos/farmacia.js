import React from "react";
import { Outlet } from "react-router-dom";

const farmacia = () =>{
  return (
    <>
    <h1>Farmacia</h1 >
    
    <Outlet/>
    </>
  )
}

export default farmacia;