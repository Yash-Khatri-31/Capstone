import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }

        getCategoriesMap();
    }, [])

    const [categoriesMap, setCategoriesMap] = useState({}); // we will use setProducts when we want to change the data or get it from a database and not local storage
    const value = { categoriesMap }; // idk how adding this line fixed the issue but okai

    return (
        <CategoriesContext.Provider value={value} >{children}</CategoriesContext.Provider>
    )
}