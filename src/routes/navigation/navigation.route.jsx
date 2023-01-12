import { useContext } from 'react';
import { Outlet } from "react-router-dom";
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from '../navigation/navigation.styles';

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const { toggle } = useContext(CartContext);

    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrownLogo />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to="/shop">SHOP</NavLink>
                    {
                        currentUser ? (
                            <NavLink as="span" onClick={signOutUser}>SIGN-OUT</NavLink>
                        ) : (
                            <NavLink to="/authentication">SIGN-IN</NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinksContainer>
                {toggle && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    )
};

export default Navigation;