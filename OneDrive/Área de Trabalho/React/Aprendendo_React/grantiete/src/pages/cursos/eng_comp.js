import React from "react";
import { Outlet } from "react-router-dom";

const eng_comp = () =>{
  return (
    <>
    <h1>Engenharia da Computação</h1 >
    
    <Outlet/>
    </>
  )
}

export default eng_comp;