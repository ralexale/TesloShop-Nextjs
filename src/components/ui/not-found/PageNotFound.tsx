import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";

export const PageNotFound = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
        <p className="font-semibold text-xl">Whoops! Esta pagina no existe.</p>
        <p className="font-light">
          <span> puedes regresar al </span>
          <Link
            href={"/"}
            className="font-normal hover:underline transition-all"
          >
            Inicio
          </Link>
        </p>
      </div>

      <div>
        <Image
          src="/imgs/starman_750x750.png"
          alt="astronauta en un coche"
          width={500}
          height={500}
          className="p-5 sm:p-0"
        />
      </div>
    </section>
  );
};
