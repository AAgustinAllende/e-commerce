import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || []

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoInicial);

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad }

    const nuevoCarrito = [...carrito]

    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad = estaEnElCarrito.cantidad + cantidad;
    } else {
      nuevoCarrito.push(itemAgregado)

    }
    setCarrito(nuevoCarrito)

    console.log("Item agregado",item)

    Swal.fire({
      title: `${item.title}`,
      text: "Se agregó a tu carrito de compras",
      imageUrl: item.img,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      icon: "success"
    });
  }

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  }

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
  }

  const vaciarCarrito = () => {
    setCarrito([]);
  }

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])

  return <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito }}>
    {children}
  </CartContext.Provider>
}