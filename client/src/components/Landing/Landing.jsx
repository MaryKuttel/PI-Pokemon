import React from "react";
import { NavLink } from "react-router-dom";
import style from './Landing.module.css'



export default function Landing(){
    return(
        
        <div className={`${style.div}`}>
            <h1 className={`${style.pokeTit}`}>Bienvenidos a</h1>
            <h1 className={`${style.pokemon}`}>POKEMON </h1>
            <NavLink to={'/home'}> <button className={`${style.pokeButton}`} role="button"><span class='text'>Start</span></button></NavLink>
        </div>

      )
}