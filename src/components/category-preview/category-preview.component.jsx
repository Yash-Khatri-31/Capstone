import './category-preview.styles.scss';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';

const CategoryPreview = ({ title, products }) => {

    return (
        <div className="category-preview-container">
            <h2>
                <Link className="title" to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className="preview">
                {
                    products
                        .filter((_, index) => index < 4) // keep products till index is less than 4, gotta google what all things filter gives us
                        .map((product) =>
                            <ProductCard product={product} key={product.id} />)
                }
            </div>
        </div>
    )
};

export default CategoryPreview;