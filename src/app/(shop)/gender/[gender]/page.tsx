export const revalidate = 60 // 60 segundos
import { genreLabels } from "@/lib";
import { getPaginatedProductsWithImages } from "@/actions";
import { notFound } from "next/navigation";
import { Pagination, ProductGrid, Title } from "@/components";
import type { ValidCategory } from "@/interfaces";

// revalidar los datos

interface Props {
  params: { gender: ValidCategory };
  searchParams: { page: string }
}
export default async function CategoryPage({ params, searchParams }: Props) {
  const { gender } = params;


  // validamos si es un genero que esta en nuestra lista
  // si no lo esta lo redireccionamos a la pagina not-found
  !Object.keys(genreLabels).some((genre) => genre === gender) && notFound()

  // validamos si existe el parametro page en la url
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, gender })


  const labels = genreLabels[gender]

  return (
    <div>
      <Title
        title={`Artículos de ${labels.title}`}
        subtitle={labels.subtitle}
        className="mb-2"
      />

      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
