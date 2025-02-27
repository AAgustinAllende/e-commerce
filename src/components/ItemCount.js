import React  from 'react'
import "./Item.css"


const ItemCount = ( {cantidad, sumar, restar, agregar }) =>{

  return (
    <div>
      <div className='stock-buttons'>
        <button  className="btn btn-light" onClick={restar}>-</button>
        <p className='number'>{cantidad}</p>
        <button className="btn btn-light" onClick={sumar}>+</button>
        </div>
        <button className="btn btn-primary" onClick={agregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount