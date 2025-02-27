import React from 'react'
import Item from './Item'
import { toCapital } from '../helpers/toCapital'
import "./Item.css"

const ItemList = ( {productos,titulo }) => {
  return (
    <div>
      <div>
        <img className='portada' src='https://media.ambito.com/p/32b4c00bfdabc04c7a698dd4c54666d9/adjuntos/239/imagenes/040/373/0040373261/1200x675/smart/festejos-seleccion-20-diciembre-1jpg.jpg'></img>
      </div>
        <h2>{toCapital(titulo)}</h2>
        <div className='productos'>
            { productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
        </div>
    </div>
  )
}

export default ItemList