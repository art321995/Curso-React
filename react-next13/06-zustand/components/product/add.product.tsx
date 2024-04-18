"use client";

import { Item, useCartStore } from "@/store/cart.store";


const AddProduct = () => {

    const addToCart = useCartStore((state) => state.addToCart);

    const handleClickAddToCart = () =>{
        const newItem: Item ={
            id: Date.now(),
            name: "Product" + Date.now(),
            price: Math.random() *100,
        };

        addToCart(newItem);
    };

    return(
        <button className="bg-rose-500 hover:bg-rose-300 text-white font-bold py-4 px-4 rounded"
        onClick={handleClickAddToCart}>
            AddProduct
        </button>
    );
};
export default AddProduct;