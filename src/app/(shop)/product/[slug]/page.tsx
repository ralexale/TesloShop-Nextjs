export const revalidate = 10080; // 7 dias
import type { Metadata } from "next";
import { getProductBySlug } from "@/actions";
import { notFound } from "next/navigation";
import {
    ProductMobileSlideshow,
    ProductSlideshow,
    StockLabel,
} from "@/components";
import { titleFont } from "@/config/fonts";
import { AddToCart } from "./ui/AddToCart";
import { currencyFormat } from "@/utils";

interface Props {
    params: { slug: string };
}

// generamos la metadata dinamica por el nombre del producto
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = params.slug;
    const product = await getProductBySlug(slug);

    return {
        title: product?.title ?? "producto no encontrado",
        description: product?.description ?? "",
        openGraph: {
            title: product?.title ?? "producto no encontrado",
            description: product?.description ?? "",
            // images:[] // https://misitioweb.com/products/image.png
            images: [`/${product?.images[1]}`],
        },
    };
}

export default async function ProductPage({ params }: Props) {
    const { slug } = params;

    const product = await getProductBySlug(slug);

    if (!product) {
        notFound();
    }

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
                <div className="flex flex-col gap-2">
                    <StockLabel slug={slug} />
                    <h1
                        className={`${titleFont.className} antialiased font-bold text-xl`}
                    >
                        {product.title}
                    </h1>

                    <p className="text-xl mb-5 font-bold">
                        {currencyFormat(product.price)}
                    </p>
                </div>

                {/* Tallas y selector de cantidad */}
                <AddToCart product={product} />

                {/* Descripción */}
                <h3 className="font-bold text-sm">Descripción</h3>
                <p className="font-light">{product.description}</p>
            </div>
        </div>
    );
}
