import React from "react";
import { Outlet } from "react-router-dom";

const nutricao = () =>{
  return (
    <>
    <h1>Nutrição</h1 >
    
    <Outlet/>
    </>
  )
}

export default nutricao;