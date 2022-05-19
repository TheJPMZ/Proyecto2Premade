
import React from "react";
import './Boton.scss'
import jsPDFInvoiceTemplate, { OutputType, jsPDF } from "jspdf-invoice-template";
import firebase from "../../firebase";

import ProductContainer from "../ProductContainer/ProductContainer";


var props = {
  outputType: OutputType.Save,
  returnJsPDFDocObject: true,
  fileName: "Invoice",
  orientationLandscape: false,
  compress: true,
  logo: {
      src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/logo.png",
      width: 53.33, //aspect ratio = width/height
      height: 26.66,
      margin: {
          top: 0, //negative or positive num, from the current position
          left: 0 //negative or positive num, from the current position
      }
  },
  business: {
      name: "Business Name",
      address: "Albania, Tirane ish-Dogana, Durres 2001",
      phone: "(+355) 069 11 11 111",
      email: "email@example.com",
      email_1: "info@example.al",
      website: "www.example.al",
  },
  contact: {
      label: "Invoice issued for:",
      name: "Client Name",
      address: "Albania, Tirane, Astir",
      phone: "(+355) 069 22 22 222",
      email: "client@website.al",
      otherInfo: "www.website.al",
  },
  invoice: {
      label: "Invoice #: ",
      num: 19,
      invDate: "Payment Date: 01/01/2021 18:12",
      invGenDate: "Invoice Date: 02/02/2021 10:17",
      headerBorder: false,
      tableBodyBorder: false,
      header: [
        {
          title: "#",
          style: {
            width: 10
          }
        },
        {
          title: "Title",
          style: {
            width: 30
          }
        },
        {
          title: "Description",
          style: {
            width: 80
          }
        },
        { title: "Price"},
        { title: "Quantity"},
        { title: "Unit"},
        { title: "Total"}

       /* [objeto 1[index, title, costo, cantidad, "unidades", total]]*/
      ],
      table: Array.from(Array(10), (item, index)=>([
          index + 1,
          "There are many variations ",
          "Lorem Ipsum is simply dummy text dummy text ",
          200.5,
          4.5,
          "m2",
          400.5
      ])),
      invTotalLabel: "Total:",
      invTotal: "145,250.50",
      invCurrency: "ALL",
      row1: {
          col1: 'VAT:',
          col2: '20',
          col3: '%',
          style: {
              fontSize: 10 //optional, default 12
          }
      },
      row2: {
          col1: 'SubTotal:',
          col2: '116,199.90',
          col3: 'ALL',
          style: {
              fontSize: 10 //optional, default 12
          }
      },
      invDescLabel: "Invoice Note",
      invDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
  },
  footer: {
      text: "The invoice is created on a computer and is valid without the signature and stamp.",
  },
  pageEnable: true,
  pageLabel: "Page ",
};









export default function Boton({arr,id}) {

    const saveToDatabase = (item, fecha) => {
        firebase.firestore().collection('compras').add({
            cantidad: item.cantidad, //TODO: Cantidad de compras se tiene que modificar
            fecha: fecha,
            id: item.itemcode,
            usercode: id
        })
        console.log("Guardado en la base de datos");
    }

    const deleteFromCarrito = (id) => {
        alert(id)
        firebase.firestore().collection('carrito').doc(id).delete()
        console.log("Eliminado del carrito");
    }

    const removeFromInventario = (item, cantidad) => {
        firebase.firestore().collection('inventario').doc(item.itemcode).update({
            cantidad: firebase.firestore.FieldValue.increment(-cantidad),
            cant_ventas:  firebase.firestore.FieldValue.increment(cantidad)
        })
        console.log("Eliminado del inventario");
    }

    const databasethings = () => {
        const fecha = new Date();
        arr.map((item) => (
            saveToDatabase(item, fecha)
        ))
        deleteFromCarrito(id);
        removeFromInventario(arr[0], arr[0].cantidad);
    }

    async function handleClick() {

        await databasethings()

        console.log(jsPDFInvoiceTemplate(props))

    }

  return (
   <>
    <button type = "button" className = "button_pdf" onClick={handleClick} >Descargar pdf</button>

   </>
  );
}