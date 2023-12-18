import { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
    cart: CartProduct[];
    getTotalItems: () => number;
    addProductToCart: (product: CartProduct) => void;
    updateProductQuantity: (product: CartProduct, quantity: number) => void;
    removeProduct: (product: CartProduct) => void;
    // removeProduct
}

export const useCartStore = create<State>()(
    //

    persist(
        (set, get) => ({
            cart: [],

            // Methods

            getTotalItems: () => {
                const { cart } = get();
                return cart.reduce((total, item) => total + item.quantity, 0);
            },
            addProductToCart: (product: CartProduct) => {
                const { cart } = get();

                // 1. revisar si el producto existe en el carrito con la talla seleccionada.
                const productInCart = cart.some(
                    (item) =>
                        item.id === product.id && item.size === product.size
                );

                //* si no existe lo agregamos al carrito
                if (!productInCart) {
                    set({ cart: [...cart, product] });
                    return;
                }

                // 2.  Se que el producto existe, ahora lo incrementamos por talla.

                const updatedCartProducts = cart.map((item) => {
                    if (item.id === product.id && item.size === product.size) {
                        return {
                            ...item,
                            //* sumamos la cantidad actual con la cantidad del producto a agregar.
                            quantity: item.quantity + product.quantity,
                        };
                    }

                    return item;
                });
                //* cambiamos el valor de cart con nuestro array modificado.
                set({ cart: updatedCartProducts });
            },
            updateProductQuantity(product: CartProduct, quantity: number) {
                const { cart } = get();

                const updatedProductQuantity = cart.map((item) => {
                    if (item.id === product.id && item.size === product.size) {
                        return {
                            ...item,
                            quantity,
                        };
                    }
                    return item;
                });

                set({ cart: updatedProductQuantity });
            },
            removeProduct(product: CartProduct) {
                const { cart } = get();

                const findIndexProduct = cart.findIndex(
                    (item) =>
                        item.id === product.id && item.size === product.size
                );

                const removedProduct = [...cart];

                removedProduct.splice(findIndexProduct, 1);

                set({ cart: removedProduct });
            },
        }),
        { name: "shopping-cart" }
    )
    //
);
