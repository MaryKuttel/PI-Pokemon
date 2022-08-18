import React from "react";


export default function Paginado({pokePage, allPokes, paginado}){

    const numPage = []

    for(let i = 1; i <= Math.ceil(allPokes/pokePage); i++){
        numPage.push(i)
    }

    return(

        <nav>
            <ul>
                {numPage && numPage.map(number => (
                    <li className="number" key={number}>
                    <a onClick={()=> paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>

    )    

}