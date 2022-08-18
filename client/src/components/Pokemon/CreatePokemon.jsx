import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTypes, createPoke} from '../../actions'
import { Link, useHistory } from 'react-router-dom';


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

    useEffect(()=>{
        dispatch(getTypes())
    },[dispatch])


    const handleOnChange= (e)=>{
        setInput({...input, [e.target.name]: e.target.value})
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
                <input type={'text'} name={'name'} value={input.name} onChange={ (e) => handleOnChange(e)}/>
            </div>
            <div>
                <label>Ataque: </label>
                <input type={'number'} name={'attack'} value={input.attack} onChange={ (e) => handleOnChange(e)}/>
            </div>
            <div>
                <label>Defensa: </label>
                <input type={'number'} name={'defense'} value={input.defense} onChange={ (e) => handleOnChange(e)}/>
            </div>
            <div>
                <label>Vida: </label>
                <input type={'number'} name={'hp'} value={input.hp} onChange={ (e) => handleOnChange(e)}/>
            </div>
            <div>
                <label>Velocidad: </label>
                <input type={'number'} name={'speed'} value={input.speed} onChange={ (e) => handleOnChange(e)}/>
            </div>
            <div>
                <label>Peso: </label>
                <input type={'number'} name={'weight'} value={input.weight} onChange={ (e) => handleOnChange(e)}/>
            </div>
            <div>
                <label>Altura: </label>
                <input type={'number'} name={'height'} value={input.height} onChange={ (e) => handleOnChange(e)}/>
            </div>
            <div>
                <label>Imagen: </label>
                <input type={'text'} name={'image'} value={input.image} onChange={ (e) => handleOnChange(e)}/>
            </div>
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
            </div>
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