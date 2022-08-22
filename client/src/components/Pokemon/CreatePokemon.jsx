import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTypes, createPoke} from '../../actions'
import { Link, useHistory } from 'react-router-dom';

const validaciones = (pokeValidar)=>{

    let validError = {}

    if(!pokeValidar.name){
        validError.name = "¡Ponle un nombre bonito!"
    } else{
       
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
        
    }
    if(!pokeValidar.weight){
        validError.weight = '¡Un pokemon pesaba 1000kg! ¿Y el tuyo?'
    }else{
        
    }
    if(pokeValidar.image){
        if (!/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(pokeValidar.image)){
            validError.image = '¡La imagen tiene que ser una URL!'
        }

    }else{
        
    }
    

    return validError
}


export default function CreatePokemon(){

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

    useEffect(()=>{
        dispatch(getTypes())
    },[dispatch])


    const handleOnChange= (e)=>{
        setInput({...input, [e.target.name]: e.target.value});
        setError(
            validaciones({...input, [e.target.name]: e.target.value})
        );
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

    }

    const handleTypes = (e) =>{
        if(!input.types.includes(e.target.value)){
            setInput({...input, types: [...input.types, e.target.value]})
        }
    }

    return (
        <div>
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
                <label><input type={'number'} placeholder={'Ej: 45'} name={'height'} value={input.height} onChange={ (e) => handleOnChange(e)}/> m </label>
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
                <p>{error.types}</p>
            </div>
            <br/>
            <br/>
            <button type={'submit'}>Crear Pokemon</button>
        </form>
        <br/>
        <div>
            <Link to= '/home'><button>Volver</button></Link>
        </div>
        </div>
    )



}