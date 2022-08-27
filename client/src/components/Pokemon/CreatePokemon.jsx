import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTypes, createPoke, setCurrentPage} from '../../actions'
import { Link, useHistory } from 'react-router-dom';
import CardTypes from './CardTypes';
import './CreatePokemon.css'


// const validaciones = (pokeValidar)=>{

//     let validError = {}

//     if(!pokeValidar.name){
//         validError.name = "¡Ponle un nombre bonito!"
//     } else{
//        if(/\s/.test(pokeValidar.name)){
//         validError.name = '¡No se permiten espacios!'
//        }
//        if(/[0-9]/.test(pokeValidar.name)){
//         validError.name = "¡Solo letras por favor!"
//        }
//        if(/\W/.test(pokeValidar.name)){
//         validError.name = '¡No se permiten carácteres especiales!'
//        }
//     }
//     if(!pokeValidar.attack){
//         validError.attack = '¡Todo gran pokemon necesita saber su potencial!'
//     }else{
//         if(pokeValidar.attack > 255){
//             validError.attack = "¡El ataque no puede superar los 255!"
//         } else if(pokeValidar.attack < 1){
//             validError.attack = '¿Cómo sería un Pokemon con ataque negativo? ¡No harías daño!'
//         }
//     }
//     if(!pokeValidar.defense){
//         validError.defense = '¡Todo gran pokemon necesita saber su potencial!'
//     }else{
//         if(pokeValidar.defense > 255){
//             validError.defense = "¡La defensa no puede superar los 255!"
//         } else if(pokeValidar.defense < 1){
//             validError.defense = '¡Pobrecito lo estas haciendo de papel!'
//         }
        
//     }
//     if(!pokeValidar.speed){
//         validError.speed = '¡Todo gran pokemon necesita saber su potencial!'
//     }else{
//         if(pokeValidar.speed > 255){
//             validError.speed = "¡La velocidad no puede superar los 255!"
//         } else if(pokeValidar.speed < 1){
//             validError.speed = 'Más lento que vos entendiendo que no podes tener el amor de ella :,V'
//         }
 
//     }
//     if(!pokeValidar.hp){
//         validError.hp = '¡Todo gran pokemon necesita saber su potencial!'
//     }else{
//         if(pokeValidar.hp > 255){
//             validError.hp = "¡La vida no puede superar los 255!"
//         } else if(pokeValidar.hp < 1){
//             validError.hp = '¿Estas haciendo un muerto?'
//         }
//     }
//     if(!pokeValidar.height){
//         validError.height = '¿Ta chiquito o ta grandecito?'
//     }else{
//         if(pokeValidar.height > 40){
//             validError.height = "Woooow espera espera ¿qué tratas de crear?"
//         } else if(pokeValidar.height < 1){
//             validError.height = '¿Absorbido por un agujero negro o carencia de existencia?'
//         }
//     }
//     if(!pokeValidar.weight){
//         validError.weight = '¡Un pokemon pesaba 1000kg! ¿Y el tuyo?'
//     }else{
//         if(pokeValidar.weight > 1000){
//             validError.weight = "¡¿Queriendo generar competencia?! Nao nao, menos peso más altura"
//         } else if(pokeValidar.weight < 1){
//             validError.weight = '¿Absorbido por un agujero negro o carencia de existencia?'
//         }
//     }
//     if(pokeValidar.image){
//         if (!/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(pokeValidar.image)){
//             validError.image = 'El link de la imagen debe ser una URL'
//         }

//     }
//     if(pokeValidar.types.length === 0 || pokeValidar.types.length > 2){
//         validError.types = 'Pon hasta un máximo de dos tipos'
//     }
    
//     return validError
// }


export default function CreatePokemon(){

    const history = useHistory()

    let [input, setInput] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        image: '',
        types: []
    })

    const dispatch = useDispatch()

    const tipos = useSelector(state => state.types)


    let [error, setError] = useState({})

    let [disEna, setDisEna] = useState(false)

    useEffect(()=>{
        dispatch(getTypes())
    },[dispatch])


    const handleOnChange= (e)=>{

        setInput({...input, [e.target.name]: e.target.value});
        // setError(
        //     validaciones({...input, [e.target.name]: e.target.value})
        // );

        // handleDisable(validaciones({...input, [e.target.name]: e.target.value}))

        validaciones({...input, [e.target.name]: e.target.value})
        
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
            
            dispatch(createPoke(input))
            
            setInput({
                name: '',
                hp: '',
                attack: '',
                defense: '',
                speed: '',
                height: '',
                weight: '',
                image: '',
                types: []
               
            })
            dispatch(setCurrentPage(1))
        alert("¡Pokemon creado con Éxito!")
        history.push('/home')

    }

    const handleTypes = (e) =>{
        if(!input.types.includes(e.target.value)){
            
            setInput({...input, types: [...input.types, e.target.value]})
            // setError(
            //     validaciones({...input, types: [input.types, e.target.value]})
            // );
    
            // handleDisable(validaciones({...input, types: [input.types, e.target.value]}))
            validaciones({...input, types: [...input.types, e.target.value]})
        
        }else{
            alert("El tipo ya fue seleccionado.")
        }
    }

    const validaciones = (pokeValidar)=>{

        let validError = {}
    
        if(!pokeValidar.name){
            validError.name = "¡Ponle un nombre bonito!"
        } else{
           if(/\s/.test(pokeValidar.name)){
            validError.name = '¡No se permiten espacios!'
           }
           if(/[0-9]/.test(pokeValidar.name)){
            validError.name = "¡Solo letras por favor!"
           }
           if(/\W/.test(pokeValidar.name)){
            validError.name = '¡No se permiten carácteres especiales!'
           }
        }
        if(!pokeValidar.attack){
            validError.attack = '¡Todo gran pokemon necesita saber su potencial!'
        }else{
            if(pokeValidar.attack > 255){
                validError.attack = "¡El ataque no puede superar los 255!"
            } else if(pokeValidar.attack < 1){
                validError.attack = '¿Cómo sería un Pokemon con ataque negativo? ¡No harías daño!'
            }
        }
        if(!pokeValidar.defense){
            validError.defense = '¡Todo gran pokemon necesita saber su potencial!'
        }else{
            if(pokeValidar.defense > 255){
                validError.defense = "¡La defensa no puede superar los 255!"
            } else if(pokeValidar.defense < 1){
                validError.defense = '¡Pobrecito lo estas haciendo de papel!'
            }
            
        }
        if(!pokeValidar.speed){
            validError.speed = '¡Todo gran pokemon necesita saber su potencial!'
        }else{
            if(pokeValidar.speed > 255){
                validError.speed = "¡La velocidad no puede superar los 255!"
            } else if(pokeValidar.speed < 1){
                validError.speed = 'Más lento que vos entendiendo que no podes tener el amor de ella :,V'
            }
     
        }
        if(!pokeValidar.hp){
            validError.hp = '¡Todo gran pokemon necesita saber su potencial!'
        }else{
            if(pokeValidar.hp > 255){
                validError.hp = "¡La vida no puede superar los 255!"
            } else if(pokeValidar.hp < 1){
                validError.hp = '¿Estas haciendo un muerto?'
            }
        }
        if(!pokeValidar.height){
            validError.height = '¿Ta chiquito o ta grandecito?'
        }else{
            if(pokeValidar.height > 40){
                validError.height = "Woooow espera espera ¿qué tratas de crear?"
            } else if(pokeValidar.height < 1){
                validError.height = '¿Absorbido por un agujero negro o carencia de existencia?'
            }
        }
        if(!pokeValidar.weight){
            validError.weight = '¡Un pokemon pesaba 1000kg! ¿Y el tuyo?'
        }else{
            if(pokeValidar.weight > 1000){
                validError.weight = "¡¿Queriendo generar competencia?! Nao nao, menos peso más altura"
            } else if(pokeValidar.weight < 1){
                validError.weight = '¿Absorbido por un agujero negro o carencia de existencia?'
            }
        }
        if(pokeValidar.image){
            if (!/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(pokeValidar.image)){
                validError.image = 'El link de la imagen debe ser una URL'
            }
    
        }else{
            let arrImage = ['https://static3.srcdn.com/wordpress/wp-content/uploads/2021/08/Pok--mon-Fakemon-Tofrug.jpg', 'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/186240451/original/9251d84e9bb6b767fde90d5edae11beebee55778.png', 'http://pre03.deviantart.net/133d/th/pre/i/2014/109/8/f/_____incikhtes_by_smiley_fakemon-d7f4mv8.png','https://acortar.link/OlryH1', 'https://acortar.link/iPjII6']

            let setIndex = Math.round(Math.random() * 4)

            pokeValidar.image = arrImage[setIndex]

        }
        if(pokeValidar.types.length === 0 || pokeValidar.types.length > 2){
            validError.types = 'Pon hasta un máximo de dos tipos'
        }
        
        setError(validError)
        handleDisable(validError)
    }

    const handleDisable = (error)=>{

        // if(!error.name && !error.attack && !error.image && !error.defense && !error.height && !error.weight && !error.speed && !error.hp){
        //     setDisEna(true)
        // }
        // else{
        //     setDisEna(false)
        // }

       if(error?.name === undefined &&
        error?.attack === undefined &&
        error?.defense === undefined &&
        error?.speed === undefined &&
        error?.hp === undefined &&
        error?.height === undefined &&
        error?.weight === undefined &&
        error?.types === undefined
        ){
            setDisEna(true)
       }else{
        setDisEna(false)
       }

    }


    return(
        <div id={'create'}>
            <h3>¡CREA TU PROPIO POKEMON!</h3>
            <br/>
        <form onSubmit={ e => handleSubmit(e)}>
            <div>
                <label>Nombre: </label>
                <input type={'text'} placeholder={'Ej: chicapu'} name={'name'} value={input.name} onChange={ (e) => handleOnChange(e)}/>
                <p>{error.name}</p>
            </div>
            <br/>
            <div>
                <label>Ataque: </label>
                <input type={'number'} placeholder={'Ej: 40'} name={'attack'} value={input.attack} onChange={ (e) => handleOnChange(e)}/>
                <p>{error.attack}</p>
            </div>
            <br/>
            <div>
                <label>Defensa: </label>
                <input type={'number'} placeholder={'Ej: 65'} name={'defense'} value={input.defense} onChange={ (e) => handleOnChange(e)}/>
                <p>{error.defense}</p>
            </div>
            <br/>
            <div>
                <label>Vida: </label>
                <input type={'number'} placeholder={'Ej: 70'} name={'hp'} value={input.hp} onChange={ (e) => handleOnChange(e)}/>
                <p>{error.hp}</p>
            </div>
            <br/>
            <div>
                <label>Velocidad: </label>
                <input type={'number'} placeholder={'Ej: 55'} name={'speed'} value={input.speed} onChange={ (e) => handleOnChange(e)}/>
                <p>{error.speed}</p>
            </div>
            <br/>
            <div>
                <label>Peso: </label>
                <label><input type={'number'} placeholder={'Ej: 23'} name={'weight'} value={input.weight} onChange={ (e) => handleOnChange(e)}/> kg </label>
                <p>{error.weight}</p>
            </div>
            <br/>
            <div>
                <label>Altura: </label>
                <label><input type={'number'} placeholder={'Ej: 16'} name={'height'} value={input.height} onChange={ (e) => handleOnChange(e)}/> m </label>
                <p>{error.height}</p>
            </div>
            <br/>
            <div>
                <label>Imagen: </label>
                <label><input type={'text'} placeholder={'Ej: https://m.apkpure.com/it/pokemon-wallpaper-hd/com.khd.pokemonwallpapers'} name={'image'} value={input.image} onChange={ (e) => handleOnChange(e)}/> url </label>
                <p>{error.image}</p>
            </div>
            <br/>
            <div>
                <label>Tipos: </label>
                <select onChange={ (e) => handleTypes(e)}>
                    {
                        tipos?.map((ty) =>{
                            return(
                                <option name={ty.id} value={ty.id}>{ty.name}</option>
                            )
                        })
                    }
                </select>
                <div>
                    <div>
                        {
                        input.types?.map(curr => {
                            return(
                                <CardTypes key={curr} idT={curr} nameT={tipos[curr - 1].name} input={input} set={setInput} validador={validaciones}/>
                            )
                        })
                        
                        }
                    </div>
                </div>
                <p>{error.types}</p>
            </div>
            <br/>
            <br/>
            <button disabled={!disEna && "disabled"} type={'submit'}>Crear Pokemon</button>
        </form>
        <br/>
        <div>
            <Link to= '/home'><button>Volver</button></Link>
        </div>
        </div>
    )



}