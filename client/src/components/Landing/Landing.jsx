import React from "react";
import { NavLink } from "react-router-dom";
import style from './Landing.module.css'



export default function Landing(){
    return(
        
        <div className={`${style.div}`}>
            <h1>Landing</h1>
            <NavLink to={'/home'}> <button>Start</button></NavLink>
        </div>

      )
}