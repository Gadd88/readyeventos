import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { ReactNode } from 'react'
import preguntas from './preguntas.json'
import Image from 'next/image';

export const PreguntasFrecuentes:React.FC = ():ReactNode => {
  return (
    <section className='p-5 md:p-10 rounded-xl relative w-full'>
        <Image width={100} height={100} alt="neon" src='/img/neonlila-lado.png' className="absolute top-[50%] left-0" />
        <Image width={100} height={100} alt="neon" src='/img/neonverde-lado.png' className="absolute top-[25%] md:top-[20%] right-0 " />
        <Image width={100} height={100} alt="neon" src='/img/neonnaranja.png' className="absolute top-[25%] md:hidden left-0 " />
        <Image width={100} height={100} alt="neon" src='/img/neonnaranja.png' className="absolute top-[75%] md:hidden right-0 " />
        <h2 className='text-center text-white text-4xl font-semibold p-5 bg-purple-400 md:w-1/2 mx-auto mb-10 shadow-ready uppercase'>Preguntas Frecuentes</h2>
            <article className='w-full'>
                {
                    preguntas.map((pregunta, idx) => (
                        <Accordion key={idx} className='bg-cyan-200 my-5 rounded-none overflow-hidden w-full mx-auto'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${idx} contenido`}
                                id={`panel${idx}-titulo`}
                                className='bg-cyan-200 text-black h-full leading-8 mx-auto text-2xl'
                                >
                                {pregunta.pregunta}
                            </AccordionSummary>
                            <AccordionDetails className='text-black bg-cyan-50 leading-8 p-5 mx-auto text-2xl'>
                                {pregunta.respuesta}
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </article>
    </section>
  )
}
