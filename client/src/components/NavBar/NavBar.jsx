import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'


export default function NavBar(){
    return(
        <div id={'div_externo_navBar'}>
            <div id={'div_interno_navBar'}>
                <nav>
                    <NavLink to={'/create'} id={'navBar_text'}><button>
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFFFFF" height="24" width="24" viewBox="0 0 24 24">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
    Crear Pokemon
</button></NavLink>
                </nav>
            </div>
        </div>
    )
}