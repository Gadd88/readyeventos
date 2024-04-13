import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import preguntas from './preguntas.json'

export const PreguntasFrecuentes = () => {
  return (
    <section className='bg-purple-heart-600/40 p-5 md:p-10 rounded-xl my-5'>
        <h2 className='text-center text-4xl '>Preguntas Frecuentes</h2>
            {
                preguntas.map((pregunta, idx) => (
                    <Accordion key={idx} className='bg-gray-950 my-5 rounded-lg overflow-hidden'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${idx} contenido`}
                            id={`panel${idx}-titulo`}
                            className='bg-gray-950 text-white h-full leading-8'
                            >
                            {pregunta.pregunta}
                        </AccordionSummary>
                        <AccordionDetails className='text-slate-50 bg-gray-900 leading-8 p-5'>
                            {pregunta.respuesta}
                        </AccordionDetails>
                    </Accordion>
                ))
            }
    </section>
  )
}
