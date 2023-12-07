import { Title, ProductGrid } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="m-bW" />
      <ProductGrid products={products} />
    </>
  );
}
