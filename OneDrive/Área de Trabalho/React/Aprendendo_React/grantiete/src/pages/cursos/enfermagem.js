import React from "react";
import { Outlet } from "react-router-dom";

const enfermagem = () =>{
  return (
    <>
    <h1>Enfermagem</h1 >
    
    <Outlet/>
    </>
  )
}

export default enfermagem;