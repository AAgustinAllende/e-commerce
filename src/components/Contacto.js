import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Contacto = () => {

    const {register, handleSubmit } = useForm();

    const comprar = (data) => {
        console.log(data)
    }
  return (
    <div>
        <h1 className='main-title'>Finalizar compra</h1>
        <form className='formulario' onSubmit={handleSubmit(comprar)}>
            <input type='text' placeholder='Ingresa tu nombre' {...register("nombre")}></input>
            <input type='email' placeholder='Ingresa tu correo electrónico' {...register("email")}></input>
            <input type='phone' placeholder='Ingresa tu teléfono' {...register("telefono")}></input>

            <button className='btn btn-success enviar' type='submit'>Comprar</button>
        </form>
    </div>
  )
}

export default Contacto