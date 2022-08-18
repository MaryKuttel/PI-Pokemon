const axios = require("axios");
const {Pokemon, Type} = require("../db")

let aux1 = "generation-v";
let aux2 = "black-white";
// let aux3 = "official-artwork"


const getPokemonsApi = async ()=>{
    
    let pokeApi = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=5")
                    .then(response => response.data.results)
    let urlPoke = pokeApi.map(curr => curr.url)
    let truePokeApi = await axios.all(urlPoke.map( async (url) =>{
        let pokepo = (await axios.get(url)).data;
        return{
            id: pokepo.id,
            name: pokepo.name,
            height: pokepo.height,
            weight: pokepo.weight,
            hp: pokepo.stats[0].base_stat,
            attack: pokepo.stats[1].base_stat,
            defense: pokepo.stats[2].base_stat,
            speed: pokepo.stats[5].base_stat,
            image: pokepo.sprites.versions[aux1][aux2].animated.front_default,
            // image: pokepo.sprites.other[aux3],
            types: pokepo.types.map(curr => curr.type.name)
        }
    }))
    return truePokeApi
}


const getPokeBD = async ()=>{
   let pokeDb = await Pokemon.findAll({
        include:[{
            model: Type,
            attributes: ['name'],
            through:{
                attributes: []
            }
        }]
    })

    let pokeTMap = pokeDb.map(curr => {
        return{
            id: curr.id,
            name: curr.name,
            height: curr.height,
            weight: curr.weight,
            hp: curr.hp,
            attack: curr.attack,
            defense: curr.defense,
            speed: curr.speed,
            image: curr.image,
            types: curr.types.map(curr => curr.name)
        }
    })

    return pokeTMap
}



const allPokepos = async ()=>{

    let pokeDeApi = await getPokemonsApi();
    let pokeDeDB = await getPokeBD();

    if(pokeDeDB.length > 0){
        let concatInfo = pokeDeApi.concat(pokeDeDB)
        let rutPrinOnly = concatInfo.map(curr => {
            return {
                id: curr.id,
                name: curr.name,
                image: curr.image,
                attack: curr.attack,
                types: curr.types
            }
        })
        return rutPrinOnly
    }else{
        let rutPrinOnly = pokeDeApi.map(curr =>{
            return{
                id: curr.id,
                name: curr.name,
                image: curr.image,
                attack: curr.attack,
                types: curr.types
            }
        })
    
        return rutPrinOnly
    }
}


const getPokeName = async (name)=>{
    let tuti = await allPokepos()
    
    let pokeN = tuti.filter(curr => curr.name.toLowerCase() === name.toLowerCase())
    
    return pokeN

}


const subirPoke = async (name, height, weight, hp, attack, defense, speed, image, types)=>{

    let pokeCDb = await Pokemon.create({name, height, weight, hp, attack, defense, speed, image})

    await pokeCDb.addType(types)

    let traer = (await Pokemon.findByPk(pokeCDb.id, {
        include:{
            model: Type,
            attributes: ["name"],
            through:{
                attributes: []
            }
        }
    })).dataValues

    traer.types = traer.types.map(curr=> curr.dataValues.name);

    // return traer

    return{
        id: traer.id,
        name: traer.name,
        image: traer.image,
        attack: traer.attack,
        types: traer.types
    }

    // return pokeCDb

}


const pokeIdSearch = async (idpoke)=>{

    if(isNaN(idpoke)){
        let pokeInDb = await Pokemon.findByPk(idpoke, {
            include:[{
                model: Type,
                attributes: ["name"],
                through:{
                    attributes: []
                }
            }]
        })

       return {
        id: pokeInDb.id,
        name: pokeInDb.name,
        height: pokeInDb.height,
        weight: pokeInDb.weight,
        hp: pokeInDb.hp,
        attack: pokeInDb.attack,
        defense: pokeInDb.defense,
        speed: pokeInDb.speed,
        image: pokeInDb.image,
        types: pokeInDb.types.map(curr => curr.name)
       }

    }else{
        let pokeIdApi = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${idpoke}`)).data
        return{
            id: pokeIdApi.id,
            name: pokeIdApi.name,
            height: pokeIdApi.height,
            weight: pokeIdApi.weight,
            hp: pokeIdApi.stats[0].base_stat,
            attack: pokeIdApi.stats[1].base_stat,
            defense: pokeIdApi.stats[2].base_stat,
            speed: pokeIdApi.stats[5].base_stat,
            image: pokeIdApi.sprites.versions[aux1][aux2].animated.front_default,
            // image: pokeIdApi.sprites.other[aux3],
            types: pokeIdApi.types.map(curr => curr.type.name)
        }
    }


}


module.exports ={
    allPokepos,
    getPokeName,
    subirPoke,
    pokeIdSearch

}