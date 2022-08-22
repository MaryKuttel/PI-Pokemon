import React from "react";
import './CardPokemon.css'


export default function PokeCard({name, image, types}){
    return(

        <div id='rawr'>
            <div id='card2'>
                <img src={image} alt='¡Lo siento cielo! Parece que la imagen no existe'/>
                <h3>{name}</h3>
                <h5>{types}</h5>
            </div>
        </div>

    )
}