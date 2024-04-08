import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import preguntas from './preguntas.json'

export const PreguntasFrecuentes = () => {
  return (
    <div>
        <h2 className='text-center text-4xl my-10'>Preguntas Frecuentes</h2>
            {
                preguntas.map((pregunta, idx) => (
                    <Accordion key={idx} className='bg-black p-1'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${idx} contenido`}
                            id={`panel${idx}-titulo`}
                            className='bg-gray-950 text-white rounded-lg'
                            >
                            {pregunta.pregunta}
                        </AccordionSummary>
                        <AccordionDetails className='text-slate-50 bg-gray-800 rounded-md'>
                            {pregunta.respuesta}
                        </AccordionDetails>
                    </Accordion>
                ))
            }
    </div>
  )
}
