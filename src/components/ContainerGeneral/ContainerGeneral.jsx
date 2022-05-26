import React from 'react';
import '../App/App.scss';
import total from '../ContainerGeneral/total'
import '../ProductContainer/ProductContainer';
import ProductContainer from '../ProductContainer/ProductContainer';
import Boton from "../Boton/Boton";
import '../ContainerGeneral/ContainerGeneral.scss';
import { useState } from 'react';


function ContainerGeneral({listaproductos, id}) {
    const [total1 ,setTotal ] = useState(0)
    const {getIndexTotal,getCantidades,resetTotal,ResTotal,addTotal} = total()

    function llamarTotal (){
        setTotal(getIndexTotal())
    }
    // function tot(){
    //     let to = 0;
    //     for (let i = 0; i < listaproductos.length; i++) {
    //     setTotal += listaproductos[i].cantidad*listaproductos[i].precio;
    //     }
    //     return (Math.round(total * 100) /100).toString();
    // }


    return (
        <div className='Container' onClick = {llamarTotal}>
            <div className='descrip'>
                <ul className='grid-columns'>
                    <h2 className='texto'>Product</h2>
                    <h2 className='texto'>Amount</h2>
                    <h2 className='texto'>Price</h2>
                </ul>
            </div>
            <div className='display-productos'>
                {listaproductos.map((Number) =>(
                    <ProductContainer test={Number}/>
                ))}
                <div>
                    <h1 className='total'>Total:
                    {total1}
                        
                    </h1>

                </div>
            </div>
            <Boton arr={listaproductos} id={id}/>
        </div>
    );
}

export default ContainerGeneral;
