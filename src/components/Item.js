import React, { useContext } from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import "./Item.css"


const Item = ({producto}) => {
  const { agregarAlCarrito } = useContext(CartContext);

  const handleAddToCart = () =>{
    agregarAlCarrito(producto,1)
  };
  return (
    
    <div className='cards'>
        <div className="card" style={{ width: '18rem' }}>
  <img src={producto.img} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{producto.title}</h5>
    <p className="card-text">${producto.price}</p>
    <button  className='btn btn-light compra' onClick={handleAddToCart}>
      <img className='addTocart' src='https://cdn-icons-png.freepik.com/512/102/102657.png'></img></button>
    <Link to={`/item/${producto.id}`} className="btn btn-primary">Ver más</Link>
  </div>
</div>
    </div>
    
  )
}

export default Item