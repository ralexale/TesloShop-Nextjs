export const revalidate = 60
import { getPaginatedProductsWithImages } from "@/actions";
import { redirect } from "next/navigation";
import { Title, ProductGrid, Pagination } from "@/components";

interface Props {
  searchParams: {
    page?: string
  }
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;


  const { products, totalPages } = await getPaginatedProductsWithImages({ page })

  // controlar cuando no hay productos en la paginación
  products.length === 0 && redirect('/')


  return (
    <section className="min-h-[85svh]">
      <Title title="Tienda" subtitle="Todos los productos" className="m-bW" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </section>
  );
}
