import { Product } from "@/interfaces";
import { initialData } from "@/seed/seed";
import Image from "next/image";


interface Props {
    products: Product[]
}

export const ProductsSumary = ({ products }: Props) => {


    return (
        <> {products.map((product) => (
            <div key={product.slug} className="flex">
                <Image
                    src={`/products/${product.images[0]}`}
                    alt={product.title}
                    width={100}
                    style={{
                        width: "100px",
                        height: "100px",
                    }}
                    height={100}
                    className="object-cover mr-5 mb-5 rounded"
                />
                <div>
                    <p>{product.title}</p>
                    <span>${product.price} x 3 </span>
                    <p className="font-bold">Subtotal: ${product.price * 3}</p>
                    <div className="flex gap-3"></div>
                </div>
            </div>
        ))}
        </>
    )
}