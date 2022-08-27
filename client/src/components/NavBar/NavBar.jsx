import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'


export default function NavBar(){
    return(
        <div id={'div_externo_navBar'}>
            <div id={'div_interno_navBar'}>
                <nav>
                    <NavLink to={'/create'} id={'navBar_text'}>Crear Pokemon</NavLink>
                </nav>
            </div>
        </div>
    )
}