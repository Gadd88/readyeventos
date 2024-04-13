import { Servicios, ListImg, PreguntasFrecuentes, Footer, FormContacto, Galeria } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 lg:max-w-[1200px] mx-auto">
      <Servicios />
      <Galeria />
      {/* <ListImg /> */}
      <PreguntasFrecuentes />
      <FormContacto />
      <Footer />
    </main>
  );
}
