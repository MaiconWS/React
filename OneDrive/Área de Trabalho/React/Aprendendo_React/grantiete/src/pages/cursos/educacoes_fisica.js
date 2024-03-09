import React from "react";
import { Outlet } from "react-router-dom";

const educacoes_fisica = () =>{
  return (
    <>
    <h1>Educação Física</h1 >
    
    <Outlet/>
    </>
  )
}

export default educacoes_fisica;