const { Router } = require('express');
const router = Router();
const axios = require("axios");
const { Type } = require("../db")



router.get("/", async (req, res, next)=>{
    try {

        let alltypes = (await Type.findAll()).map(curr => curr.dataValues)
        console.log(alltypes)
        res.json()

    } catch (error) {

        next(error)
    }
})


// const funcionAux = async ()=>{
//     let alltypes = (await Type.findAll()).map(curr => curr.dataValues)
//         console.log(alltypes)
// }

// funcionAux()