import { useReducer } from "react";
import { createContext } from "react";

const deleteCartItem = (cartItems, product) => {
    return cartItems.filter((cartItem) => cartItem.id !== product.id)
}

const removeCartItem = (cartItems, product) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === product.id);
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== product.id)
    }
    return cartItems.map((cartItem) =>
        cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}

const addCartItem = (cartItems, product) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === product.id);
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === product.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }
    return [...cartItems, { ...product, quantity: 1 }]
}

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_TOGGLE: 'SET_TOGGLE'
}

export const CartContext = createContext({
    toggle: false,
    setToggle: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
    removeItemFromCart: () => { },
    deleteItemFromCart: () => { },
    cartTotal: 0
});

const INITIAL_STATE = {
    cartTotal: 0,
    cartCount: 0,
    cartItems: [],
    toggle: false
};

const cartReducer = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS: return { ...state, ...payload };
        case CART_ACTION_TYPES.SET_TOGGLE: return { ...state, toggle: payload }
        default: throw new Error(`Unhandled type of ${type} in Cart Reducer`)
    }
}

export const CartProvider = ({ children }) => {

    const [{ cartItems, cartTotal, cartCount, toggle }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {

        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

        dispatch({ type: 'SET_CART_ITEMS', payload: { cartItems: newCartItems, cartCount: newCartCount, cartTotal: newCartTotal } })

    }

    const addItemToCart = (product) => {
        const newCartItems = addCartItem(cartItems, product);
        updateCartItemsReducer(newCartItems);

    }

    const removeItemFromCart = (product) => {
        const newCartItems = removeCartItem(cartItems, product);
        updateCartItemsReducer(newCartItems);

    }

    const deleteItemFromCart = (product) => {
        const newCartItems = deleteCartItem(cartItems, product);
        updateCartItemsReducer(newCartItems);

    }

    const setToggle = (bool) => {
        dispatch({ type: 'SET_TOOGLE', payload: bool })
    }

    const value = { toggle, setToggle, cartItems, addItemToCart, cartCount, removeItemFromCart, deleteItemFromCart, cartTotal };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

