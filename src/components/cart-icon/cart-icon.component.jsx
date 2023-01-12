import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ShoppingIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {

    const { toggle, setToggle, cartCount } = useContext(CartContext);

    const toggleHandler = () => setToggle(!toggle);

    return (
        <CartIconContainer onClick={toggleHandler}>
            <ShoppingIconContainer />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;