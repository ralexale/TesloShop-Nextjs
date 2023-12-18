import { IoTrashOutline } from "react-icons/io5";
import { QuantitySelector } from "@/components";
import Image from "next/image";
import { Product } from "@/interfaces";

interface Props {
    products: Product[];
}

export const ProductsEdit = ({ products }: Props) => {
    return (
        <>
            {products.map((product) => (
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
                        <span>${product.price}</span>
                        <div className="flex gap-3">
                            <QuantitySelector quantity={2} />
                            <button className="underline bg-red-500 p-2 rounded ">
                                <IoTrashOutline
                                    className="text-white"
                                    size={20}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};
