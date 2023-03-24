import { createAction } from "../../reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategoriesMap = (categoriesMap) => {
    return createAction(CATEGORIES_ACTION_TYPES.SET_CATGORIES_MAP, categoriesMap)
}

