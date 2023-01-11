import { createContext, useEffect, useState } from "react";

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

export const CartContext = createContext({
    toggle: false,
    setToggle: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
    removeItemFromCart: () => { },
    deleteItemFromCart: () => { },
    cartTotal: 0
})

export const CartProvider = ({ children }) => {

    const [toggle, setToggle] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems])

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product))
    }

    const removeItemFromCart = (product) => {
        setCartItems(removeCartItem(cartItems, product))
    }

    const deleteItemFromCart = (product) => {
        setCartItems(deleteCartItem(cartItems, product))
    }

    const value = { toggle, setToggle, cartItems, addItemToCart, cartCount, removeItemFromCart, deleteItemFromCart, cartTotal };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

