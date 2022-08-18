import { FILTER_TYPES, GET_POKEMONS, POKE_DETAIL, POKE_NAME, FILTER_ATTACK, CREATE_POKEMON, GET_TYPES, ORDER_AZ, FILTER_API_DB } from "../actions"

const initialState = {
    pokemons: [],
    allPokemons: [],
    pokeDet: [],
    types: []
}


function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }

        case FILTER_TYPES:

            let allPokemons = state.allPokemons
            let pokeFilt = action.payload === 'All' ? allPokemons : allPokemons.filter((cur) => cur.types.includes(action.payload))
    
            return{
                ...state,
                pokemons: pokeFilt
            }
        case POKE_DETAIL:
            return{
                ...state,
                pokeDet: action.payload,
            }
        case POKE_NAME:
            return{
                ...state,
                pokemons: action.payload
            }
        case CREATE_POKEMON:
            return{
                ...state,
                pokemons: [...state.pokemons, action.payload ]
            }
        case GET_TYPES:
            return{
                ...state,
                types: action.payload
            }
        case FILTER_ATTACK:
            let ordAtt = [...state.allPokemons]
            let pokeByAtt = action.payload === 'ascAtt'? ordAtt.sort((a, b)=>{
                if(a.attack > b.attack){
                    return 1
                }else if(a.attack < b.attack){
                    return -1
                }else{
                    return 0
                }
            }): ordAtt.sort((a, b)=>{
                if(a.attack < b.attack){
                    return 1
                }else if(a.attack > b.attack){
                    return -1
                }else{
                    return 0
                }
            })
            return{
                ...state,
                pokemons: pokeByAtt
            }
        case ORDER_AZ:
            let ordName = [...state.allPokemons]
            let pokeByName = action.payload === "asc"? ordName.sort((a, b)=>{
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1
                }else if(a.name.toLowerCase() < b.name.toLowerCase()){
                    return -1
                }else{
                    return 0
                }
            }): ordName.sort((a, b)=>{
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                    return 1
                }else if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return -1
                }else{
                    return 0
                }
            })
            return {
                ...state,
                pokemons: pokeByName
            }
        case FILTER_API_DB:
            let auxFilter = [...state.allPokemons]
            return{
                ...state,
                pokemons: action.payload === 'allPoke'? state.allPokemons : action.payload === 'dbPoke' ? auxFilter.filter(curr => isNaN(curr.id)) : auxFilter.filter(curr => !isNaN(curr.id))
            }
        default:
            return state
}


}

export default rootReducer