import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import "./Item.css"

const CartWidget = () => {

  const { cantidadEnCarrito } = useContext(CartContext);
  return (
    <div>
      

      <Link class="nav-link position-relative" to="/carrito">
        <img className='carrito-img' src='https://cdn-icons-png.flaticon.com/512/107/107831.png'></img>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger number">
          {cantidadEnCarrito()}

        </span>
      </Link>
    </div>
  )
}

export default CartWidget 