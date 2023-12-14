import { Product } from "@/interfaces";
import prisma from "@/lib/prisma/prisma";

export const getProductBySlug = async (
    slug: string
): Promise<Product | null> => {
    try {
        const product = await prisma.product.findFirst({
            where: { slug },
            include: {
                ProductImage: {
                    select: {
                        url: true,
                    },
                },
            },
        });

        if (!product) return null;

        const { ProductImage, ...rest } = product;
        return {
            ...rest,
            images: product.ProductImage.map((image) => image.url),
        };
    } catch (error) {
        console.log(error);
        throw new Error("No se puedo cargar el producto");
    }
};
