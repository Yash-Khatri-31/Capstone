import { useContext } from 'react';
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { selectCurrentUser } from '../../store/user/user.selector';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from '../navigation/navigation.styles';

const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser)
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

// useSelector, we pass a selector function. Extracts the values we want from the entire redux store. We recieve the entire state object.
// for user it will be like state.user
// 