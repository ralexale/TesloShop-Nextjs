import { initialData } from "./seed";
import prisma from "../lib/prisma/prisma";

async function main() {
    // 1. borrar registros previos
    await Promise.all([
        prisma.user.deleteMany(),
        prisma.productImage.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany(),
    ]);

    const { categories, products, users } = initialData;

    // 5. usuarios
    await prisma.user.createMany({
        data: users,
    });

    // 2. Categorias

    const categoriesData = categories.map((name) => ({ name }));

    await prisma.category.createMany({
        data: categoriesData,
    });

    // const categoriesData = categories.map((category) => ({
    //     name: category,
    // }));

    const categoriesDB = await prisma.category.findMany();

    const categoriesMap = categoriesDB.reduce((map, category) => {
        map[category.name.toLowerCase()] = category.id;
        return map;
    }, {} as Record<string, string>); // <string=shirt, string=categoryId>

    // 3. Productos

    products.forEach(async (product) => {
        const { images, type, ...rest } = product;

        const dbProduct = await prisma.product.create({
            data: {
                ...rest,
                categoryId: categoriesMap[type],
            },
        });

        // 4.Imagenes

        const imagesData = images.map((image) => ({
            url: image,
            productId: dbProduct.id,
        }));

        await prisma.productImage.createMany({
            data: imagesData,
        });
    });

    console.log("Seed Executed correct");
}

(() => {
    if (process.env.NODE_ENV === "production") return;

    main();
})();
