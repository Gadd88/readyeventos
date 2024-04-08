import { ListImg } from "@/components/listImg/ListImg";
import { PreguntasFrecuentes } from "@/components/pregFrecuentes/PreguntasFrecuentes";
import { Servicios } from "@/components/servicios/Servicios";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <Servicios />
      <ListImg />
      <PreguntasFrecuentes />
    </main>
  );
}
