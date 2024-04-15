'use client'
import Image from 'next/image'
import React, { ReactNode, useState } from 'react'
import { imgData } from './imgData.ts';
import Lightbox from 'yet-another-react-lightbox';
import { Fullscreen, Slideshow, Thumbnails } from 'yet-another-react-lightbox/plugins';
import { GridFotos } from '../gridFotos/GridFotos.tsx';

export const Galeria:React.FC = ():React.ReactNode => {
    const [index, setIndex] = useState(-1)
  return (
    <section className=" border-t-4 border-b-4 border-slate-600 rounded-none" id='Nosotros'>
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
            <div className="flex w-full mb-5 md:mb-20 flex-wrap items-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-100 lg:w-1/3 lg:mb-0 mb-10 text-center bg-purple-400 py-5 shadow-ready uppercase px-5">Momentos Inolvidables</h1>
                <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-gray-200 text-xl">Sumérgete en la diversión, la emoción y los recuerdos mágicos capturados en nuestro encantador salón de eventos. Descubre por qué somos el destino perfecto para celebrar momentos especiales en la vida de tus pequeños.</p>
            </div>
            <GridFotos setIndex={setIndex} />
        </div>
        <Lightbox
            slides={imgData}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails]}
            />
    </section>
  )
}
