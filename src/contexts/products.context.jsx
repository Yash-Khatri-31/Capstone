import { createContext, useState } from "react";
import SHOP_DATA from '../shop-data.json';

export const ProductsContext = createContext({
    products: [],
})

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState(SHOP_DATA);
    const value = { products }; // idk how adding this line fixed the issue but okai

    return (
        <ProductsContext.Provider value={value} >{children}</ProductsContext.Provider>
    )
}