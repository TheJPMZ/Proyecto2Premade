import React from 'react';
import '../App/App.scss';
import '../ProductContainer/ProductContainer';
import ProductContainer from '../ProductContainer/ProductContainer';
import Boton from "../Boton/Boton";

function ContainerGeneral({listaproductos}) {

    return (
        <div className='Container'>
            <div className='descrip'>
                <ul className='grid-columns'>
                    <h2>Product</h2>
                    <h2>Item</h2>
                    <h2>Price</h2>
                </ul>
            </div>
            <div className='display-productos'>
                {listaproductos.map((Number) =>(
                    <ProductContainer test={Number}/>
                ))}
            </div>
            <Boton/>
        </div>
    );
}

export default ContainerGeneral;
