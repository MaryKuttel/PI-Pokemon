import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';
export const FILTER_TYPES = 'FILTER_TYPES';
export const POKE_DETAIL = 'POKE_DETAIL';
export const POKE_NAME = 'POKE_NAME';
export const FILTER_ATTACK = 'FILTER_ATTACK';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const GET_TYPES = 'GET_TYPES';
export const ORDER_AZ = 'ORDER_AZ';
export const FILTER_API_DB = 'FILTER_API_DB'




export function getPokemons(){
    return async function(dispatch){
        const pokeAll = await axios.get('http://localhost:3001/pokemons')
        return dispatch({
            type: 'GET_POKEMONS',
            payload: pokeAll.data
        })
    }
}


export function getDetailsPoke(id){
    return async function(dispatch){
        const pokeDetail = await axios.get(`http://localhost:3001/pokemons/${id}`)
        return dispatch({
            type: 'POKE_DETAIL',
            payload: pokeDetail.data
        })
    }
}

export function getPokeName(name){
    return async function(dispatch){
        const pokeName = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
        return dispatch({
            type: 'POKE_NAME',
            payload: pokeName.data
        })
    }
}


export function createPoke(pokeCrear){
    return async function(dispatch){
        const crearPoke = await axios.post('http://localhost:3001/pokemons', pokeCrear)
        return dispatch({
            type: 'CREATE_POKEMON',
            payload: crearPoke.data
        })
    }
}

export function getTypes(){
    return async function(dispatch){
        const pokeTypes = await axios.get('http://localhost:3001/types');
        return dispatch({
            type: 'GET_TYPES',
            payload: pokeTypes.data
        })
    }
}

export function typeFilter(payload){
        
    return{
        type: 'FILTER_TYPES',
        payload
    }

}


export function filterAtta(payload){
    return{
        type: 'FILTER_ATTACK',
        payload
    }
}

export function orderAZ(payload){
    return{
        type: 'ORDER_AZ',
        payload
    }
}

export function creApiFilt(payload){
    return {
        type: 'FILTER_API_DB',
        payload
    }
}

export function setCurrentPage(payload){
    return{
        type: "CURR_PAGE",
        payload
    }
}