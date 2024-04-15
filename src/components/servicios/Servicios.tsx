import React, { ReactNode } from "react";
import { CardServicio } from "./CardServicio";
import {listaServicios} from './listaServicios.ts'

export const Servicios: React.FC = (): ReactNode => {
  return (
    <div id="Servicios" className="w-full block min-">
      <h2 className="text-4xl text-center text-white">Nuestros Servicios</h2>
      <section className="flex justify-around items-center flex-col md:flex-row md:items-start gap-10 md:gap-3 my-10 p-5 bg-purple-500/20 backdrop-blur-sm rounded-xl">
        {
          listaServicios?.map(servicio => (
            <CardServicio
              key={servicio!.id as number}
              titulo={servicio!.servicio as string}
              text1=""
              text2={servicio!.detalle as string}
              img={servicio!.icono as string}
            />
          ))
        }
      </section>
    </div>
  );
};
