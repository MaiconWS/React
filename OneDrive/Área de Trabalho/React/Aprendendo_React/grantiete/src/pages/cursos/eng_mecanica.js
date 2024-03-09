import React from "react";
import { Outlet } from "react-router-dom";

const adm = () =>{
  return (
    <>
    <h1>Administração</h1 >
    
    <Outlet/>
    </>
  )
}

export default adm;