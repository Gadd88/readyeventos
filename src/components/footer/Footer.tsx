import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

export const Footer:React.FC = ():ReactNode => {
  // bg-gradient-to-r from-black to-purple-950
  return (
    <footer className=" rounded-t-xl mt-4">
      <section className="container px-6 py-8 mx-auto">
        <article className="flex flex-col items-center text-center">
          <Link href='/#hero'>
            <Image
              className="w-96 h-auto"
              src="/img/logo4.png"
              alt="ready logo"
              height={150}
              width={200}
            />
          </Link>
            <p className="max-w-md mx-auto mt-4 text-purple-100">
                Tú salón de eventos en Mercedes.
            </p>
        </article>
        <hr className="my-10 border-gray-200" />
        <article className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-normal text-purple-100">
            &copy; Copyright {new Date().getFullYear()}. Todos los derechos Reservados.
          </p>
          <article className="flex justify-center items-center gap-10">
            <Link href='https://instagram.com/readyeventos2023' target="_blank" rel="noopener noreferrer">
                <Image width={30} height={30} alt='social icon' src='/img/instagram.svg' />
            </Link>
            <Link href='#'>
                <Image width={30} height={30} alt='social icon' src='/img/facebook.svg' />
            </Link>
          </article>
        </article>
      </section>
    </footer>
  );
};
