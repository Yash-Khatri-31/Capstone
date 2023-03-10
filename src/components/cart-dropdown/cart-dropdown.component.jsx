import { useContext } from 'react';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {

    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout');
    }

    const { cartItems } = useContext(CartContext);

    return (

        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (
                        cartItems.map((item) => (
                            <CartItem key={item.id} cartItem={item} />
                        ))
                    ) : (
                        <EmptyMessage>Empty Cart</EmptyMessage>
                    )
                }
            </CartItems>

            <Button onClick={goToCheckout}>Go To Checkout</Button>
        </CartDropdownContainer>
    )
};

export default CartDropdown;