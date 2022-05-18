import React from 'react';
import './App.scss';
import './ProductContainer';
import ProductContainer from './ProductContainer';


function ContainerGeneral() {
    const lista =[1,2]

    return (
        <div className='Container'>
            
            <div className='descrip'>
                <ul className='grid-columns'>
                    <h2>Product</h2>
                    <h2>item</h2>
                    <h2>priceW</h2>
                </ul>
                
            </div>
            <div className='display-productos'>
                {
                    lista.map(
                        (
                            Number
                        ) =>(<ProductContainer></ProductContainer>)
                    )
                }

            </div>
            <button class="btn btn--primary"> Comprar</button>        
        </div>
    );
}

export default ContainerGeneral;
