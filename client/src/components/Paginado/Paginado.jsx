import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../actions";
import './Paginado.css'


export default function Paginado({pokePage, allPokes}){
    
    const dispatch = useDispatch()
    const page = useSelector((state)=> state.currPage)
    const numPage = []

    let total = Math.ceil(allPokes/pokePage)

    for(let i = 1; i <= Math.ceil(total); i++){
        numPage.push(i)
    }

    return(

        <nav>
            <button onClick={(e) => dispatch(setCurrentPage(page - 1))} disabled={page === 1? true: false}>prev</button>
            <br/>
            <br/>
            <ul id={'paginado'}>
                {numPage && numPage.map(number => (
                    <li className="number" key={number}>
                    <a id={'buttonP'} onClick={()=> dispatch(setCurrentPage(number))}>{number}</a>
                    </li>
                ))}
            </ul>
            <br/>
            <br/>
            <button onClick={(e) => dispatch(setCurrentPage(page + 1))} disabled={page === total? true: false}>next</button>
        </nav>

    )    

}