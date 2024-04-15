import { Servicios, PreguntasFrecuentes,Contacto, Galeria, Hero } from "@/components";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-10 p-5 lg:max-w-[1200px] mx-auto relative">
      <Hero />
      <Servicios />
      <Galeria />
      {/* <ListImg /> */}
      <PreguntasFrecuentes />
      <Contacto />
    </main>
  );
}
