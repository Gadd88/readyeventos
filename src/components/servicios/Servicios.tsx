import React, { ReactNode } from 'react'
import { CardServicio } from './CardServicio'

export const Servicios:React.FC = ():ReactNode => {
  return (
    <div id='#servicios'>
        <h2 className="text-4xl text-center">Nuestros Servicios</h2>
        <section>
            <CardServicio />
        </section>
    </div>
  )
}
