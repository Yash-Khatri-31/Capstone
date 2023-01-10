import './navigation.styles.scss';
import { useContext } from 'react';
import { Link, Outlet } from "react-router-dom";
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const { toggle } = useContext(CartContext);

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrownLogo />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>SIGN-OUT</span>
                        ) : (
                            <Link className="nav-link" to="/authentication">SIGN-IN</Link>
                        )
                    }
                    <CartIcon />
                </div>
                {toggle && <CartDropdown />}
            </div>
            <Outlet />
        </>
    )
};

export default Navigation;