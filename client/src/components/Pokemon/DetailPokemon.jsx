import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";
import { getDetailsPoke, resetDetail} from "../../actions";
import { Link, useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import './DetailPokemon.css'


export default function PokemonDetail(){

    const dispacth = useDispatch();
    const {id} = useParams()

    // const loader = useSelector((state) => state.loader)

    useEffect(()=>{
        dispacth(resetDetail())
        dispacth(getDetailsPoke(id))
    }, [dispacth, id])

    const pokeDetID = useSelector((state)=> state.pokeDet)

    return !pokeDetID.image? <Loading/> :(
        <div id={'divContainer'}>
            <div id={'div_Detalle'}>
                <div id={'pokedex'}>
            
                    <h2>ID: {pokeDetID.id}</h2>

                    <br/>
                    <h1>{pokeDetID.name}</h1>

            <br/>
        
                <img src={pokeDetID.image} alt=''/>
            <br/>
            
                    
                    <h2>Tipos: {pokeDetID.types?.join(' - ')}</h2>
                    <br/>
                    <h3>Altura: {pokeDetID.height}</h3>
                    <h3>Peso: {pokeDetID.weight}</h3>
                    <h3>Vida: {pokeDetID.hp}</h3>
                    <h3>Ataque: {pokeDetID.attack}</h3>
                    <h3>Defensa: {pokeDetID.defense}</h3>
                    <h3>Velocidad: {pokeDetID.speed}</h3>

                <br/>
            <Link to='/home'>
                <button>Volver</button>
            </Link>
            </div>
            </div>
        </div>
    )

}