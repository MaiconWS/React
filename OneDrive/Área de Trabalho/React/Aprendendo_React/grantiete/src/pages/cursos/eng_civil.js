import React from "react";
import { Outlet } from "react-router-dom";

const eng_civil = () =>{
  return (
    <>
    <h1>Engenharia Civil</h1 >
    
    <Outlet/>
    </>
  )
}

export default eng_civil;