const { Router } = require('express');
const {getTypes} = require("../controlers/getTypes")
const { Type } = require("../db");
const axios = require("axios");
const { allPokepos, getPokeName, subirPoke, pokeIdSearch } = require('../controlers/getpostPokemon');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// const pokemons = require("./pokemons")
// const types = require("./types")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.use("/pokemons", pokemons)
// router.use("/types", types)

router.get("/pokemons", async (req, res, next)=>{
    let {name} = req.query;
    try {
        if(name){
            let pokeN = await getPokeName(name)
            
            if(pokeN.length > 0){
                
                res.json(pokeN)
            }else{
                res.status(400).json("Pokemon no encontrado")
            }

        }else{
            let pokeTodos = await allPokepos()
            res.json(pokeTodos)
        }
        
    } catch (error) {
        // res.status(400).send(error)
        next(error)
    }
})


router.post("/pokemons", async (req, res, next)=>{

    let {name, height, weight, hp, attack, defense, speed, image, types} = req.body

    try {

        if(!name || !types){
            res.status(404).send("Falta información. Reintentar")
        }else{
            let pokeC = await subirPoke(name, height, weight, hp, attack, defense, speed, image, types)

            res.send(pokeC)
        }
        
    } catch (error) {
        next(error)
    }

})



router.get("/pokemons/:id", async (req, res, next)=>{

    let { id } = req.params

    try {
        let pokeID = await pokeIdSearch(id)

        res.json(pokeID)
        
    } catch (error) {
        next(error)
    }
})








router.get("/types", async (req, res, next)=>{
    try {

        let alltypes = (await Type.findAll()).map(curr => curr.dataValues)

        res.json(alltypes)

    } catch (error) {

        next(error)
    }
})

module.exports = router;
