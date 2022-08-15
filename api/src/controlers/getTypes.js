const {Type} = require("../db")
const axios = require("axios");



const getTypes = async()=>{

    let leTipos = await axios.get("https://pokeapi.co/api/v2/type")
                .then(r => r.data.results)

    const tiposName = leTipos.map(curr => curr.name)
    
    tiposName.forEach(async curr => {
        await Type.findOrCreate({
            where:{
                name: curr
            }
        })
        
    });
    console.log("Tipos en Base de Datos")
}


module.exports = {
    getTypes,
}