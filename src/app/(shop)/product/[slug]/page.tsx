export const revalidate = 10080; // 7 dias
import type { Metadata } from 'next';
import { getProductBySlug } from "@/actions";
import { notFound } from "next/navigation";
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector } from "@/components";
import { titleFont } from "@/config/fonts";



interface Props {
  params: { slug: string };
}




export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const product = await getProductBySlug(slug);


  return {
    title: product?.title,
    description: `pagina del producto ${product?.title}`
  }
}


export default async function ProductPage({ params }: Props) {

  const { slug } = params;

  const product = await getProductBySlug(slug)

  if (!product) {
    notFound();
  };



  return (
    <div className="mt-5  mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">


      {/* Slideshow */}
      <div className="col-span-1 sm:col-span-2 ">

        {/* desktop slideshow */}
        <ProductSlideshow
          images={product.images}
          title={product.title}
          className="hidden md:block"
        />

        <ProductMobileSlideshow
          images={product.images}
          title={product.title}
          className="block md:hidden"
        />
      </div>

      {/* Detalles  */}


      <div className="col-span-1 px-5 ">

        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>{product.title}</h1>

        <p className="text-lg mb-5 ">{product.price}</p>

        {/* Selector de tallas */}
        <SizeSelector
          availableSizes={product.sizes}
          selectedSize={product.sizes[0]}
        />


        {/* Selector de cantidad */}
        <QuantitySelector quantity={product.inStock} />

        {/* botón  */}
        <button className="btn-primary my-5">Agregar al carrito</button>

        {/* Descripción */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>

    </div>
  );
}
