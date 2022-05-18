import React, {useEffect, useState} from 'react';
import './App.scss';
import ProductContainer from '../ProductContainer/ProductContainer';
import ContainerGeneral from "../ContainerGeneral/ContainerGeneral";
import firebase from "../../firebase";
import GetInfo from "../GetInfo/GetInfo";

function useInfo() {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('carrito')
            .onSnapshot((snapshot) => {
                const newInfo = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setInfo(newInfo);
            });
    }, []);

    return info;

}


function App() {

    const addCompra = () => {
        //Add something to the database
        firebase.firestore().collection('carrito').add({
            items: [{"imagen":"meme","precio":1,"nombre":"meme","cantidad":1}, {"imagen":"escopeta","precio":10,"nombre":"Escopeta","cantidad":1}],
            usercode: '12345'
        })
    }

    const info = useInfo()

    return (
        <>
            {info.map((item) =>
                <ContainerGeneral listaproductos={item.items}/>
            )}
        </>
    );
}

export default App;
