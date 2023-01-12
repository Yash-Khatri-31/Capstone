import './shop.styles.scss';
import { Route, Routes } from 'react-router-dom';
import Category from '../category/category.route';
import CategoriesPreview from '../categories-preview/categories-preview.route';

const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop;