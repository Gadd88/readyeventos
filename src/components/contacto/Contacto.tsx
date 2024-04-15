import React, { ReactNode } from 'react'
import Image from 'next/image'
import { FormContacto } from '../formContacto/FormContacto'


export const Contacto:React.FC = ():ReactNode => {

  return (
    <section id='Contacto' className='rounded-xl w-full h-full min-h-96 flex justify-center items-center flex-col mx-auto md:p-10 space-y-10 relative'>
        <Image width={100} height={100} alt="neon" src='/img/neonrosa-lado.png' className="absolute z-0  md:top-[50%] right-0 rotate-180 opacity-90" />
        <Image width={100} height={100} alt="neon" src='/img/neonlila-lado.png' className="absolute top-36 md:top-[20%] left-0 opacity-90" />
        <h2 className='text-4xl text-purple-50 shadow-ready p-5 bg-purple-500 uppercase'>Contáctanos</h2>
        <p className='text-slate-100 text-xl bg-slate-700 p-5 z-20 '>Puedes escribirnos por Whatsapp directamente desde aquí o visitarnos en Av. 40 entre Calles 9 y 11, Mercedes, Bs. As.</p>
        <section className='flex justify-center items-center mx-auto gap-3 w-full'>
            <FormContacto/>
            <article className='md:grid place-content-center hidden z-10'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.5867581773836!2d-59.42144803040233!3d-34.64593779500733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc739ea92ad00f%3A0xfabdc45f1ed6e6a7!2sC.%2040%20220%2C%20Mercedes%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1712967648248!5m2!1ses-419!2sar" className='border-none w-[400px] h-[550px] object-fit' allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </article>
        </section>
    </section>
  )
}
