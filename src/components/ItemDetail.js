import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import "./Item.css"


  const ItemDetail  = ( { item } ) => {

    const {carrito,agregarAlCarrito} = useContext(CartContext);

    const [cantidad,setCantidad]=useState(1);

    const sumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const restar = () => {
        cantidad > 1 && setCantidad (cantidad -1)
    }

    
  return (
    <div className='card-detail mb-3'>
        <div className="card mb-3" style={{ maxWidth: '640px'  }}>
  <div className="row g-0">
    <div class="col-md-4">
      <img src={item.img} className="img-fluid rounded-start" ></img>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text"><small class="text-body-secondary">${item.price}</small></p>
        <ItemCount
        cantidad={cantidad} 
        sumar={sumar} 
        restar={restar} 
        agregar={() => agregarAlCarrito(item,cantidad)}/>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ItemDetail
 