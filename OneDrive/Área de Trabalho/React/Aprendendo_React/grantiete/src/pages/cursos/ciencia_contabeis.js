import React from "react";
import { Outlet } from "react-router-dom";

const ciencias = () =>{
  return (
    <>
    <h1>Ciências Contabeis</h1 >
    
    <Outlet/>
    </>
  )
}

export default ciencias;