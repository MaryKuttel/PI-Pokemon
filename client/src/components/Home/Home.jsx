import React from "react";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import { getPokemons, typeFilter, filterAtta, orderAZ, creApiFilt } from "../../actions";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../NavBar/SearchBar";
import Paginado from "../Paginado/Paginado";
import PokeCard from "../Pokemon/CardPokemon";




export default function Home(){

    const dispatch = useDispatch()
    
    const allPokes = useSelector((state) => state.pokemons)

    const [modifier, setModifier] = useState("")

    //Paginado

    const [page, setPage] = useState(1)

    const [pokePage, setPokePage] = useState(15)

    const indexLastPoke = page * pokePage

    const indexFirstPoke = indexLastPoke - pokePage

    const currPoke = allPokes.slice(indexFirstPoke, indexLastPoke)

    const paginado = (pageNum) =>{
    setPage(pageNum)
    }

    //



    useEffect(()=>{
        dispatch(getPokemons());
    },[])



    function handleOnClick(e){
    
        e.preventDefault()
        dispatch(getPokemons())
        setPage(1)
    
    }

    function handleTypesFilt(e){
        // e.preventDefault()
        dispatch(typeFilter(e.target.value))
        setPage(1)
    }

    function handleAttack(e){
        dispatch(filterAtta(e.target.value))
        setModifier(e.target.value)
        setPage(1)
    }


    function handleOrderAZ(e){
        dispatch(orderAZ(e.target.value))
        setPage(1)
    }


    function handleCreApi(e){
        dispatch(creApiFilt(e.target.value))
        setPage(1)
    }

    return(
        <>
        <div>
            <NavBar/>
            <SearchBar/>
            <button onClick={(e) => {handleOnClick(e)}}>Recargar</button>
            <div>
                <select onChange={(e) => handleOrderAZ(e)}>
                    <option value={'asc'}>A-Z</option>
                    <option value={'desc'}>Z-A</option>
                </select>

                <select onChange={(e)=> handleAttack(e)}>
                    <option value={'ascAtt'}>Menor a Mayor Ataque</option>
                    <option value={'descAtt'}>Mayor a Menor Ataque</option>
            </select>

            <select onChange={(e) => handleCreApi(e)}>
                <option value={'allPoke'}>Todos</option>
                <option value={'apiPoke'}>API</option>
                <option value={'dbPoke'}>Creados</option>
            </select>

            <select 
            onChange={e => handleTypesFilt(e)}
            >

                <option value={'All'}>Todos</option>
                <option value={'normal'}>Normal -----😄</option>
                <option value={'fighting'}>Fighting -🐱‍👤</option>
                <option value={'flying'}>Flying -----🦅</option>
                <option value={'poison'}>Poison -----🐍</option>
                <option value={'ground'}>Ground -----⛺</option>
                <option value={'rock'}>Rock ---------🗻</option>
                <option value={'bug'}>Bug -----------🐛</option>
                <option value={'ghost'}>Ghost -------👻</option>
                <option value={'steel'}>Steel -------⛓</option>
                <option value={'fire'}>Fire ---------🔥</option>
                <option value={'water'}>Water -------💧</option>
                <option value={'grass'}>Grass  ------🍃</option>
                <option value={'electric'}>Electric -⚡</option>
                <option value={'psychic'}>Psychic ---🔮</option>
                <option value={'ice'}>Ice -----------❄</option>
                <option value={'dragon'}>Dragon -----🐉</option>
                <option value={'dark'}>Dark ---------🌚</option>
                <option value={'fairy'}>Fairy -------✨</option>
                <option value={'unknown'}>Unknown ----❓</option>
                <option value={'shadow'}>Shadow ------👥</option>
                
            </select> 

            </div>
            <Paginado pokePage={pokePage}
            allPokes={allPokes.length}
            paginado={paginado}></Paginado>
           <br/>
           <br/>
            <div>
            {
               currPoke?.map(cur => {
                    return (
                    <div key={cur.id}>
                        <Link to={'/pokemons/' + cur.id}>
                        <PokeCard name={cur.name} image={cur.image} types= {cur.types.join(' - ')}/>
                        </Link>
                    </div>
                    )
                })
            }
            </div>

        </div>
        </>
    )
}