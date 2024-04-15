'use client'
import React, { ChangeEvent, ReactNode, useState } from 'react'

export const FormContacto:React.FC = ():ReactNode => {

    const nroWsp = '2324535066'

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setMensajeUsuario({
            ...mensajeUsuario,
            [e.target.name]:e.target.value
        })
    }
    const [mensajeUsuario, setMensajeUsuario] = useState({
        nombre:'',
        mensaje:''
    })
    
  return (
    <form className='flex flex-col items-start justify-center rounded-md p-5 space-y-5 w-full md:w-[500px] bg-transparent z-50'>
        <div className='flex flex-col items-start justify-center w-full gap-2 bg-purple-100 p-3'>
            <label className='text-end ms-auto font-semibold text-2xl' htmlFor="nombre">Tu nombre</label>
            <input type="text" onChange={handleChange} className='p-2 w-full text-xl outline-none border-purple-300 rounded-sm' value={mensajeUsuario.nombre} name='nombre'/>
        </div>
        <div className='flex flex-col items-start justify-center w-full gap-2 bg-purple-100 p-3'>
            <label className='text-end ms-auto font-semibold text-2xl' htmlFor="mensaje">Tu mensaje</label>
            <textarea name="mensaje" id="mensaje" value={mensajeUsuario.mensaje} onChange={handleChange} cols={30} rows={10} className='p-2 w-full text-xl outline-none border-purple-300 rounded-sm' style={{resize:'none'}}></textarea>
        </div>
        <div className='w-full flex'>
            <a className='w-full text-center font-bold text-white bg-purple-500 hover:bg-purple-600 p-5 text-3xl' href={`https://api.whatsapp.com/send?phone=+54${nroWsp}&text=${mensajeUsuario.mensaje},%20${mensajeUsuario.nombre}`}>Enviar</a>
        </div>
    </form>
  )
}
