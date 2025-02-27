import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {

    const [productos,setProductos]=useState([]);
    const [titulo,setTitulo]=useState("Productos");
    const categoria = useParams().categoria;

    useEffect(() => {
      const productosRef = collection(db, "productos");
    
      let q;
      if (categoria) {
        // Si la categoría es una de las categorías específicas
        if (['remeras', 'pantalones', 'buzos', 'femenino', 'niños'].includes(categoria)) {
          q = query(productosRef, where("categoria", "==", categoria));
          setTitulo(categoria.charAt(0).toUpperCase() + categoria.slice(1)); // Capitaliza la primera letra
        } else {
          // búsqueda por término (por título del producto)
          q = query(
            productosRef,
            where("title", ">=", categoria),
            where("title", "<=", categoria + '\uf8ff')
          );
          setTitulo(`Resultados para "${categoria}"`);
        }
      } else {
        // Si no hay categoría, se obtienen todos los productos
        q = productosRef;
        setTitulo("Todos los productos");
      }
    
      getDocs(q)
        .then((resp) => {
          setProductos(
            resp.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id
            }))
          );
        })
    }, [categoria]);
    

  return (
    <div>
        <ItemList productos ={productos} titulo={titulo}/>
    </div>
  )
}

export default ItemListContainer