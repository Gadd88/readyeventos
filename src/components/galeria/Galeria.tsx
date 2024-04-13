'use client'
import Image from 'next/image'
import React, { ReactNode, useState } from 'react'
import { imgData } from './imgData.ts';
import Lightbox from 'yet-another-react-lightbox';
import { Fullscreen, Slideshow, Thumbnails } from 'yet-another-react-lightbox/plugins';

export const Galeria:React.FC<ReactNode> = () => {
    const [index, setIndex] = useState(-1)
  return (
    <section className="bg-purple-heart-950/30 rounded-xl" id='Nosotros'>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap items-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-100 lg:w-1/3 lg:mb-0 mb-4 text-center">Momentos Inolvidables</h1>
                <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">Sumérgete en la diversión, la emoción y los recuerdos mágicos capturados en nuestro encantador salón de eventos. Descubre por qué somos el destino perfecto para celebrar momentos especiales en la vida de tus pequeños.</p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
                <div className="flex flex-wrap w-1/3">
                    <div className="md:p-2 p-1 w-1/2">
                        <Image width={100} height={100} onClick={() => setIndex(0)} alt="ready foto" className="w-full  h-full object-fill cursor-pointer block grayscale-[1] transition-all hover:grayscale-0" src="/img/img89.jpg"/>
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <Image width={100} height={100} onClick={() => setIndex(0)} alt="ready foto" className="w-full  h-full object-fill cursor-pointer block grayscale-[1] transition-all hover:grayscale-0" src="/img/img21.jpg"/>
                    </div>
                    <div className="md:p-2 p-1 w-full">
                        <Image width={100} height={100} onClick={() => setIndex(0)} alt="ready foto" className="w-full h-full  object-fill cursor-pointer block grayscale-[1] transition-all hover:grayscale-0" src="/img/img28.jpg"/>
                    </div>
                </div>
                <div className="flex flex-wrap w-1/3">
                    <div className="md:p-2 p-1 w-full">
                        <Image width={100} height={100} onClick={() => setIndex(0)} alt="ready foto" className="w-full h-full  object-fill cursor-pointer block grayscale-[1] transition-all hover:grayscale-0" src="/img/img52.jpg"/>
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <Image width={100} height={100} onClick={() => setIndex(0)} alt="ready foto" className="w-full  h-full object-fill cursor-pointer block grayscale-[1] transition-all hover:grayscale-0" src="/img/img32.jpg"/>
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <Image width={100} height={100} onClick={() => setIndex(0)} alt="ready foto" className="w-full  h-full object-fill cursor-pointer block grayscale-[1] transition-all hover:grayscale-0" src="/img/img66.jpg"/>
                    </div>
                </div>
                <div className="flex flex-wrap w-1/3">
                    <div className="md:p-2 p-1 w-1/2">
                        <Image width={100} height={100} onClick={() => setIndex(0)} alt="ready foto" className="w-full  h-full object-fill cursor-pointer block grayscale-[1] transition-all hover:grayscale-0" src="/img/img34.jpg"/>
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <Image width={100} height={100} onClick={() => setIndex(0)} alt="ready foto" className="w-full  h-full object-fill cursor-pointer block grayscale-[1] transition-all hover:grayscale-0" src="/img/img35.jpg"/>
                    </div>
                    <div className="md:p-2 p-1 w-full">
                        <Image width={100} height={100} onClick={() => setIndex(0)} alt="ready foto" className="w-full h-full  object-fill cursor-pointer block grayscale-[1] transition-all hover:grayscale-0" src="/img/img54.jpg"/>
                    </div>
                </div>
            </div>
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
