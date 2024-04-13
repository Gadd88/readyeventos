'use client'

import React, { ChangeEvent, useState } from 'react'

export const FormContacto = () => {

    const nroWsp = '3704632110'

    const [mensajeUsuario, setMensajeUsuario] = useState({
        nombre:'',
        mensaje:''
    })
    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setMensajeUsuario({
            ...mensajeUsuario,
            [e.target.name]:e.target.value
        })
    }
  return (
    <section id='Contacto' className='rounded-xl bg-purple-950/30 w-full h-full min-h-96 flex justify-center items-center flex-col mx-auto p-5 md:p-10 space-y-10'>
        <h2 className='text-4xl text-purple-100 '>Contáctanos</h2>
        <p>Puedes escribirnos por Whatsapp directamente desde aquí o visitarnos en Av. 40 entre Calles 9 y 11, Mercedes, Bs. As.</p>
        <section className='flex justify-center items-center mx-auto gap-3'>
            <form className='flex flex-col items-start justify-center rounded-md p-5 space-y-10 w-full md:w-[500px] bg-purple-950'>
                <div className='flex flex-col items-start justify-center w-full gap-2'>
                    <label htmlFor="nombre">Tu nombre</label>
                    <input type="text" onChange={handleChange} className='p-2 rounded-none w-full bg-purple-500/50 outline-none border-purple-300' value={mensajeUsuario.nombre} name='nombre'/>
                </div>
                <div className='flex flex-col items-start justify-center w-full gap-2'>
                    <label htmlFor="mensaje">Tu mensaje</label>
                    <textarea name="mensaje" id="mensaje" value={mensajeUsuario.mensaje} onChange={handleChange} cols={30} rows={10} className='p-2 rounded-none w-full bg-purple-500/50 outline-none border-purple-300' style={{resize:'none'}}></textarea>
                </div>
                <div className='w-full flex'>
                    <a className='w-full text-center bg-purple-500 hover:bg-purple-600 p-5' href={`https://api.whatsapp.com/send?phone=+54${nroWsp}&text=${mensajeUsuario.mensaje},%20${mensajeUsuario.nombre}`}>Enviar</a>
                </div>
            </form>
            <article className='md:grid place-content-center rounded-md hidden'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.5867581773836!2d-59.42144803040233!3d-34.64593779500733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc739ea92ad00f%3A0xfabdc45f1ed6e6a7!2sC.%2040%20220%2C%20Mercedes%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1712967648248!5m2!1ses-419!2sar" className='rounded-md border-none w-[400px] h-[550px] object-fit' allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </article>
        </section>
    </section>
  )
}
