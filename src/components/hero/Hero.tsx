import Image from 'next/image'
import React, { ReactNode } from 'react'

export const Hero:React.FC = ():ReactNode => {
  return (
    <div className='w-full relative min-h-44 md:min-h-[400px] text-white flex flex-col items-center justify-center' id='hero'>
        <h1 className='text-4xl md:text-9xl text-center font-bold'>Salón de Eventos</h1>
        <p className='text-center text-2xl'>Mercedes, Buenos Aires</p>
        <Image className='absolute md:top-[10%] right-0 h-36 md:h-96 w-5 md:w-10' height={100} width={100} alt="neon" src='/img/neonrosa.png' />
        <Image className='absolute md:top-[10%] left-0 h-36 md:h-96 w-5 md:w-10' height={100} width={100} alt="neon" src='/img/neonazul.png' />
      
    </div>
  )
}
