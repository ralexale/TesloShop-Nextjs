import { Product } from "@/interfaces";
import { ProductGridItem } from "./ProductGridItem";

interface Props {
  products: Product[];
}
export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-10 mb-10">
      {products?.map((product) => (
        <ProductGridItem key={product.slug} product={product} />
      ))}
    </div>
  );
};
