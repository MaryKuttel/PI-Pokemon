import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'


export default function NavBar(){
    return(
        <nav>
            <NavLink to={'/create'} id={'navBar'}>CREAR POKEMON</NavLink>
        </nav>
    )
}