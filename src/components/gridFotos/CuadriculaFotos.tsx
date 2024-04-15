import Image from 'next/image'
import React, { Dispatch, ReactNode, SetStateAction } from 'react'

type Props = {
    src1: string
    src2: string
    src3: string
    className: string
    setIndex: Dispatch<SetStateAction<number>>
}

export const CuadriculaFotos:React.FC<Props> = ({src1, src2, src3, setIndex, className}):ReactNode => {
  return (
    <div className={className}>
        <div className="md:p-2 p-1 w-1/2">
            <Image width={100} height={100} onClick={() => setIndex(0)} alt="ready foto" className="w-full  h-full object-fill cursor-pointer block grayscale-[1] transition-all hover:grayscale-0" src={src1}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
            <Image width={100} height={100} onClick={() => setIndex(0)} alt="ready foto" className="w-full  h-full object-fill cursor-pointer block grayscale-[1] transition-all hover:grayscale-0" src={src2}/>
        </div>
        <div className="md:p-2 p-1 w-full">
            <Image width={100} height={100} onClick={() => setIndex(0)} alt="ready foto" className="w-full h-full object-fill cursor-pointer block grayscale-[1] transition-all hover:grayscale-0" src={src3}/>  
        </div>
    </div>
  )
}
