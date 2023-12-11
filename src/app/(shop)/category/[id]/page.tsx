import { notFound } from "next/navigation";

import { genreLabels } from "@/lib";
import { initialData } from "@/seed/seed";
import { ProductGrid, Title } from "@/components";
import type { ValidCategory } from "@/interfaces";

const seedProducts = initialData.products

interface Props {
  params: { id: ValidCategory };
}

export default function CategoryPage({ params }: Props) {
  const { id } = params;

  const products = seedProducts.filter(product => product.gender === id)

  !Object.keys(genreLabels).some((genre) => genre === id) && notFound()

  const labels = genreLabels[id]

  return (
    <div>
      <Title
        title={`Artículos de ${labels.title}`}
        subtitle={labels.subtitle}
        className="mb-2"
      />
      {
        products.map((product) => (
          <ProductGrid products={products} key={product.slug} />
        ))
      }
    </div>
  );
}
