import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokeName } from "../../actions";


export default function SearchBar(){

    const dispacth = useDispatch()

    const [name, setName] = useState("")

    const handleOnChange = (e)=>{
        setName(e.target.value)
    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        dispacth(getPokeName(name))
    }


    return(
        <div>

        <input 
        type='text' 
        placeholder="Por ejemplo: bulbasaur"
        onChange={(e)=> handleOnChange(e)}
        />
        
        <button type="submit" onClick={(e)=> handleSubmit(e)}>🔎</button>

        </div>
    )
}