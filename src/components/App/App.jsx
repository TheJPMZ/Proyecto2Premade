import React, {useEffect, useState} from 'react';
import './App.scss';
import ContainerGeneral from "../ContainerGeneral/ContainerGeneral";
import firebase from "../../firebase";
import Header from '../Header/Header';
import AddToCart from '../AddToCart/AddToCart';


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



    const info = useInfo()

    const actual = info.filter(item => item.id === 'ZsuFnGu76TWPQus6xGce')

    console.log(actual)

    let meme

    if (actual.length !== 0) {
        meme = actual.map((item) => <ContainerGeneral listaproductos={item.items} id={item.id}/>)
    }else {
        meme =<div><h1 style={{color:"#FFFFFF"}}>No hay productos en el carrito</h1><button>Regresar a la tienda</button></div>
    }

    return (
        <>
            <Header/>
            {meme}
            <AddToCart cantidad_disponible={3} nombre={"Laptop gaming Dell de 8GB de RAM, i7-7000, NVIDIA GTX"} itemcode={"AVPRfQAkWRx0m7OkmgZv"} precio={2002} imagen={"https://i.dell.com/sites/imagecontent/products/PublishingImages/inspiron-15-7567-laptop/CS1703G0002-laptop-inspiron-15-7000-gaming-pdp-polaris-01.jpg"}/>
        </>
    );
}

export default App;
