import React, { useState }  from 'react';
import './ProductContainer.scss';
import Producto from '.././assets/product.png'
import Left from '.././assets/left.png'
import Right from '.././assets/right.png'

function ProductContainer() {

    const [cont, setcont] = useState(0)
    const [price, setprice] = useState(0)
    let title = ["hola", "hola2", "hola3"]

    function incrementar () {
        // ++
        setcont(cont + 1)
        setprice(price + 15000)
    }

    function decrementar () {
        // --
        if(cont >= 1){
            setcont(cont - 1)
            setprice(price - 15000)
        } 
    }

    function saveAmount () {
        
    }

    function savePrice () {

    }

    return (
        <div className='prodCon'>
            <div className='prodConGrid'>
                <div className='grid-infoProduct'>
                    <img src={Producto} height="250px" width="150px"></img>
                </div>
                <div className='grid-infoProduct'>
                    <div className='grid-infoProductSize'>
                        <div className='info-product'>
                            Iphone 12,   
                            6.7''
                            Resistencia al agua
                            Pantalla super retina XDR
                        </div>
                    </div>
                </div>
                <div className='grid-infoProduct'>
                    <div className='grid-infoProductSize'>
                        <div className='product-size'>{cont}</div>
                            <div className='grid-infoProductSize2'>
                                <button type="button" className="btn" onClick={decrementar}> <img src={Left} height ="50" width="50" /></button>
                                <button type="button" className="btn" onClick={incrementar}> <img src={Right} height ="50" width="50" /></button>  
                            </div>
                    </div>
                </div>
                <div className='grid-infoProduct'>
                    <div className='info-price'>Q{price}</div>
                </div>
            </div>
        </div>
    );
}
export default ProductContainer;