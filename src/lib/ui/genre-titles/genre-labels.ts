import type { GenreLabel, ValidCategory } from "@/interfaces";

export const genreLabels: Record<ValidCategory, GenreLabel> = {
    men: { title: "para hombres", subtitle: "Productos para El" },
    women: { title: "para mujeres", subtitle: "Productos para Ella" },
    kid: { title: "para niños", subtitle: "Productos para los Pequeños" },
    unisex: { title: "para todos", subtitle: "Todos los productos" },
};
