import React from "react";
import { Outlet } from "react-router-dom";

const eng_prod = () =>{
  return (
    <>
    <h1>Engenharia da Produção</h1 >
    
    <Outlet/>
    </>
  )
}

export default eng_prod;