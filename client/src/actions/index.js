import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';
export const FILTER_TYPES = 'FILTER_TYPES';
export const POKE_DETAIL = 'POKE_DETAIL';
export const POKE_NAME = 'POKE_NAME';
export const FILTER_ATTACK = 'FILTER_ATTACK';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const GET_TYPES = 'GET_TYPES';
export const ORDER_AZ = 'ORDER_AZ';
export const FILTER_API_DB = 'FILTER_API_DB';
export const RESET_DETAIL = 'RESET_DETAIL';
export const FILTER_VIDA = 'FILTER_VIDA'




export function getPokemons(){
    return async function(dispatch){
        const pokeAll = await axios.get('/pokemons')
        return dispatch({
            type: 'GET_POKEMONS',
            payload: pokeAll.data
        })
    }
}


export function getDetailsPoke(id){
    return async function(dispatch){
        const pokeDetail = await axios.get(`/pokemons/${id}`)
        return dispatch({
            type: 'POKE_DETAIL',
            payload: pokeDetail.data
        })
    }
}

export function getPokeName(name){
    return async function(dispatch){
        const pokeName = await axios.get(`/pokemons?name=${name}`)
        return dispatch({
            type: 'POKE_NAME',
            payload: pokeName.data
        })
    }
}


export function createPoke(pokeCrear){
    return async function(dispatch){
        const crearPoke = await axios.post('/pokemons', pokeCrear)
        return dispatch({
            type: 'CREATE_POKEMON',
            payload: crearPoke.data
        })
    }
}

export function getTypes(){
    return async function(dispatch){
        const pokeTypes = await axios.get('/types');
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

export function resetDetail(){
    return{
        type: 'RESET_DETAIL',
        payload: []
    }
}

export function filterVida(payload){
    return{
        type: "FILTER_VIDA",
        payload
    }
}
// export function stablePage(payload){
//     return{
//         type: 'SET_PAGE',
//         payload
//     }
// }