import React from "react";
import { Outlet } from "react-router-dom";

const arquitetura = () =>{
  return (
    <>
    <h1>Arquitetura e urbanismo</h1 >
    
    <Outlet/>
    </>
  )
}

export default arquitetura;