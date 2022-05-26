import React from "react";
import ProductContainer from '../ProductContainer/ProductContainer';


let  indexTotal = 0
const lista = []
function total (){
    function resetTotal (){
        indexTotal  = 0 
    }
    function addTotal(precio){
        indexTotal = indexTotal +  precio
    
    }
    
    function ResTotal(precio){
        indexTotal = indexTotal- precio 
    }

    function getCantidades(){
        return lista

    }
    function getIndexTotal(){
      return indexTotal
    }
    return{
        addTotal,ResTotal,resetTotal,getCantidades,getIndexTotal
    }
}

export default total