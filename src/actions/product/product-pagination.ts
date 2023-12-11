"use server";

import { Product } from "@/interfaces";
import prisma from "@/lib/prisma/prisma";
import { Gender } from "@prisma/client";

interface PaginationsOptions {
    page?: number;
    take?: number;
    gender?: Gender;
}

interface PaginationPromise {
    currentPage: number;
    totalPages: number;
    products: Product[];
}

export const getPaginatedProductsWithImages = async ({
    page = 1,
    take = 12,
    gender,
}: PaginationsOptions): Promise<PaginationPromise> => {
    if (isNaN(Number(page))) page = 1;
    if (page < 1) page = 1;

    if (isNaN(Number(take))) take = 1;
    if (take < 1) take = 1;

    try {
        //? metodo 1

        //!1. obtener los productos

        // const products = await prisma.product.findMany({
        //     take: take,
        //     skip: (page - 1) * take,
        //     include: {
        //         ProductImage: {
        //             take: 2,
        //             select: {
        //                 url: true,
        //             },
        //         },
        //     },
        // });

        // !2. obtener el total de paginas

        // const totalCount = await prisma.product.count({});

        //? metodo 2

        // con un promise all obtenemos mejor rendimiento
        const [products, totalCount] = await Promise.all([
            prisma.product.findMany({
                take: take,
                skip: (page - 1) * take,
                // validamos el genero para obtener los productos
                where: {
                    gender: gender,
                },
                include: {
                    ProductImage: {
                        take: 2,
                        select: {
                            url: true,
                        },
                    },
                },
            }),
            prisma.product.count({
                where: {
                    // validamos el genero para obtener el total de productos
                    gender: gender,
                },
            }),
        ]);

        const totalPages = Math.ceil(totalCount / take);

        return {
            currentPage: page,
            totalPages: totalPages,
            products: products.map((product) => ({
                ...product,
                images: product.ProductImage.map((image) => image.url),
            })),
        };
    } catch (error) {
        throw new Error("No se puedo cargar los productos");
    }
};
