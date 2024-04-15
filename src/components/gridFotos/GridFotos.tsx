import { Dispatch, ReactNode, SetStateAction } from 'react'
import { CuadriculaFotos } from './CuadriculaFotos'

type Props = {
    setIndex: Dispatch<SetStateAction<number>>
}

export const GridFotos:React.FC<Props> = ({setIndex}): ReactNode => {
  return (
    <div className="flex flex-wrap md:-m-2 -m-1">
        <CuadriculaFotos className="flex flex-wrap w-1/3 md:w-1/6" src1="/img/img89.jpg" src2="/img/img21.jpg" src3="/img/img28.jpg" setIndex={setIndex}/>
        <CuadriculaFotos className="flex flex-wrap-reverse w-1/3 md:w-1/6" src1="/img/img52.jpg" src2="/img/img32.jpg" src3="/img/img66.jpg" setIndex={setIndex}/>
        <CuadriculaFotos className="flex flex-wrap w-1/3 md:w-1/6" src1="/img/img34.jpg" src2="/img/img35.jpg" src3="/img/img54.jpg" setIndex={setIndex}/>
        <CuadriculaFotos className="hidden md:flex flex-wrap-reverse w-1/6" src1="/img/img80.jpg" src2="/img/img25.jpg" src3="/img/img44.jpg" setIndex={setIndex}/>
        <CuadriculaFotos className="hidden md:flex flex-wrap w-1/6" src1="/img/img53.jpg" src2="/img/img39.jpg" src3="/img/img61.jpg" setIndex={setIndex}/>
        <CuadriculaFotos className="hidden md:flex flex-wrap-reverse w-1/6" src1="/img/img31.jpg" src2="/img/img40.jpg" src3="/img/img50.jpg" setIndex={setIndex}/>
    </div>
  )
}
