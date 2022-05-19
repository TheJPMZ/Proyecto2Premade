import React from 'react';
import firebase from "../../firebase";

function AddToCart({imagen, precio, itemcode, nombre, cantidad_disponible}) {

    const addCompra = () => {

        firebase.firestore().collection('carrito').doc('ZsuFnGu76TWPQus6xGce').set(
            {items: firebase.firestore.FieldValue.arrayUnion( {
                    "imagen":imagen, //Str: url de imagen
                    "precio":precio, //Int:200
                    "itemcode":itemcode, //Str:AVPRfQAkWRx0m7OkmgZv
                    "nombre":nombre, //Str: Laptop gaming Dell de 8GB de RAM, i7-7000, NVIDIA GTX,
                    "cantidad":cantidad_disponible //Int:3
            })},
            {merge: true}
        );
    }

    return (
        <>
            <button className="PlusCarritoButton" onClick={addCompra}>
                Agregar al carrito
            </button>
        </>
    );
}

export default AddToCart;
