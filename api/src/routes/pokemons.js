const { Router } = require('express');
const router = Router();
const axios = require("axios");
const { getPokemonsApi } = require('../controlers/getpostPokemon');


// router.get("/pokemons", async (req, res, next)=>{
//     let {name} = req.query;
//     try {
//         if(name){
//             let pokeN = await getPokeName(name)
            
//             if(pokeN.length > 0){
                
//                 res.json(pokeN)
//             }else{
//                 res.json("Pokemon no encontrado")
//             }

//         }else{
//             let pokeTodos = await allPokepos()
//             res.json(pokeTodos)
//         }
        
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

router.get("/:{id}", (req, res, next)=>{

})

router.post("/", (req, res, next)=>{
    
})