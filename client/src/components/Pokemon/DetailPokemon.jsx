import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";
import { getDetailsPoke} from "../../actions";
import { Link, useParams } from 'react-router-dom'


export default function PokemonDetail(){

    const dispacth = useDispatch();
    const {id} = useParams()

    useEffect(()=>{
        dispacth(getDetailsPoke(id))
    }, [dispacth, id])

    const pokeDetID = useSelector((state)=> state.pokeDet)

    return(
        <div>
            
                <div>
                    <h1>{pokeDetID.name}</h1>
                </div>

                <div>
                    <img src={pokeDetID.image} alt=''/>
                    <h2>Tipos: {pokeDetID.types?.join(' - ')}</h2>
                    <h3>Altura: {pokeDetID.height}</h3>
                    <h3>Peso: {pokeDetID.weight}</h3>
                    <h3>Vida: {pokeDetID.hp}</h3>
                    <h3>Ataque: {pokeDetID.attack}</h3>
                    <h3>Defensa: {pokeDetID.defense}</h3>
                    <h3>Velocidad: {pokeDetID.speed}</h3>
                </div>
            
            <Link to='/home'>
                <button>Volver</button>
            </Link>
        </div>
    )

}