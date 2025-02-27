import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import "./Item.css"
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div>
            <h1>Mis productos</h1>
            {
                
                carrito.map((prod) => (
                    <div className="card-carrito mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={prod.img} className="img-fluid rounded-start" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{prod.title}</h5>
                                    <p className="card-text">${prod.price}</p>
                                    <p className="card-text"><small className="text-muted">Cantidad:{prod.cantidad}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))

            }


            {
                carrito.length > 0 &&
                <div>
                    <h3>Total: ${precioTotal()}</h3>
                    
                    <button className='delete-btn' onClick={handleVaciar}>
                        <img className='eliminar' src='https://cdn-icons-png.flaticon.com/512/63/63481.png'></img>
                    </button>
                    <Link className='btn btn-dark' to="/checkout">Finalizar compra</Link>
                </div>
            }

        </div>
    )
}

export default Carrito