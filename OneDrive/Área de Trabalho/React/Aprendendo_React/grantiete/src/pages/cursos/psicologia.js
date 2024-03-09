import React from "react";
import { Outlet } from "react-router-dom";

const psicologia = () =>{
  return (
    <>
    <h1>Psicologia</h1 >
    
    <Outlet/>
    </>
  )
}

export default psicologia;