import React from 'react';
import firebase from "../../firebase";

function AddToCart() {

    const addCompra = () => {

        firebase.firestore().collection('carrito').doc('ZsuFnGu76TWPQus6xGce').set(
            {items: firebase.firestore.FieldValue.arrayUnion( {
                    "imagen":"https://i.dell.com/sites/imagecontent/products/PublishingImages/inspiron-15-7567-laptop/CS1703G0002-laptop-inspiron-15-7000-gaming-pdp-polaris-01.jpg",
                    "precio":200,
                    "itemcode":"AVPRfQAkWRx0m7OkmgZv",
                    "nombre":"Laptop gaming Dell de 8GB de RAM, i7-7000, NVIDIA GTX",
                    "cantidad":3} )},
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
