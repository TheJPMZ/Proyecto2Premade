import React from 'react';
import './App.scss';
import ProductContainer from './ProductContainer';
import firebase from "../firebase";
import GetInfo from "./GetInfo";

firebase.firestore().collection("carrito").onSnapshot(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    console.log(doc.data());
  });
});


function App() {

    const addCompra = () => {
        //Add something to the database
        firebase.firestore().collection('carrito').add({
            items: [{"imagen":"meme","precio":1,"nombre":"meme","cantidad":1}, {"imagen":"escopeta","precio":10,"nombre":"Escopeta","cantidad":1}],
            usercode: '12345'
        })
    }



    const memes = [1,2,3]

    return (
        <>
            <div><ProductContainer></ProductContainer></div>
            <h1>Memes</h1>
            <button onClick={addCompra}>Comprar</button>
            <GetInfo />
        </>
    );
}

export default App;
