import React from "react";
import style from './Loading.module.css'

export default function Loading(){
    return(
        <div className={`${style.loading}`}>
            <h2>Loading...</h2>
        </div>
    )
}