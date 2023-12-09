import { getPaginatedProductsWithImages } from "@/actions";
import { Title, ProductGrid, Pagination } from "@/components";
import { redirect } from "next/navigation";


interface Props {
  searchParams: {
    page?: string
  }
}


export default async function Home({ searchParams }: Props) {


  const page = searchParams?.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page })



  // controlar cuando no hay productos en la paginación
  products.length === 0 && redirect('/')


  return (
    <section className="min-h-[85svh]">
      <Title title="Tienda" subtitle="Todos los productos" className="m-bW" />
      <ProductGrid products={products} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </section>
  );
}
