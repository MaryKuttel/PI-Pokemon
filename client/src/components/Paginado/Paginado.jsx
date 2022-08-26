import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../actions";
import './Paginado.css'


export default function Paginado({pokePage, allPokes}){
    
    const dispatch = useDispatch()
    const page = useSelector((state)=> state.currPage)
    const numPage = []

    // let indexPage = numPage.indexOf(page)
    
    let total = Math.ceil(allPokes/pokePage)
    
    
    for(let i = 1; i <= Math.ceil(total); i++){
        numPage.push(i)
    }
    
    // Estableciendo paginado bonito
    //((numPage.length - 1) - 2) --> ultimo medio

    let indexMedPage = numPage.indexOf(page)

    let newPages = 0

    if(indexMedPage === 0 || indexMedPage === 1){

        newPages = numPage.slice(0, 5)

    }else if(indexMedPage === (total - 2) || indexMedPage === (total - 1)){

        newPages = numPage.slice(total - 5, total)

    }else{
    
        let separDes = indexMedPage + 3
        let separAnt = indexMedPage - 2
    
        newPages = numPage.slice(separAnt, separDes)
    }

    return(

        <nav>
            
            <ul id={'paginado'}>
            <button id={'prevB'} onClick={(e) => dispatch(setCurrentPage(page - 1))} disabled={page === 1? true: false}>prev</button>
                {newPages && newPages.map(number => (
                    <li className="number" key={number}>
                    <button id={page === number? 'selected' : 'buttonP'} onClick={()=> dispatch(setCurrentPage(number))}>{number}</button>
                    </li>
                ))}
            <button id={'nextB'} onClick={(e) => dispatch(setCurrentPage(page + 1))} disabled={page === total? true: false}>next</button>
            </ul>

            <h3 id={'textP'}>Número total de páginas: {total}</h3>
        </nav>

    )    

}