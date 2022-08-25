import React from "react";
import './Paginado.css'


export default function Paginado({pokePage, allPokes, paginado}){

    const numPage = []

    for(let i = 1; i <= Math.ceil(allPokes/pokePage); i++){
        numPage.push(i)
    }

    return(

        <nav >
            <ul id={'paginado'}>
                {numPage && numPage.map(number => (
                    <li className="number" key={number}>
                    <a id={'buttonP'} onClick={()=> paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>

    )    

}