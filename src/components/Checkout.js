import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import Tarjeta from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("")

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const { register, handleSubmit } = useForm();

    const [payment, setPayment] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    })

    const handleInputChange = (e) => {
        setPayment({
            ...payment,
            [e.target.name]: e.target.value
        })
    }

    const handleFocusChange = (e) => {
        setPayment({
            ...payment,
            focus: e.target.name
        })

    }



    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido)

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                vaciarCarrito();
            })
    }

    if (pedidoId) {
        return (
            <div className='container'>
                <h1 className='main-title'> Muchas gracias por tu compra</h1>
                <h2>Tu código del pedido es: {pedidoId}</h2>
            </div>

        )
    }
    return (
        <div className='card-payment' style={{ width: '60%', marginLeft: '20%', marginTop: '20px' }}>
            <div className='card-body'>
                <Tarjeta
                    number={payment.number}
                    name={payment.name}
                    expiry={payment.expiry}
                    cvc={payment.cvc}
                    focused={payment.focus}
                />
                <form className="formulario" onSubmit={handleSubmit(comprar)}>
                    <div className='form-group'>
                        <label htmlFor='number'>Número de la tarjeta</label>
                        <input
                            type="text"
                            name='number'
                            id='number'
                            maxLength="16"
                            className='form-control'
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='name'>Nombre</label>
                        <input
                            type="text"
                            name='name'
                            id='name'
                            maxLength="25"
                            className='form-control'
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="form-row d-flex">
                        <div className="form-group col-md-5">
                            <label htmlFor="expiry">Fecha de vencimiento</label>
                            <input
                                type="text"
                                name="expiry"
                                id="expiry"
                                maxLength="4"
                                className="form-control"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>

                        <div className="form-group col-md-5" style={{marginLeft:'60px'}}>
                            <label htmlFor="cvc">CVV</label>
                            <input
                                type="text"
                                name="cvc"
                                id="cvc"
                                maxLength="4"
                                className="form-control"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                    </div>

                    <button style={{marginTop:'20px'}} className='btn btn-success enviar' type='submit'>Comprar</button>
                </form>
            </div>
        </div>
        
    )
}

export default Checkout