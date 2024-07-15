import React, { createContext, useState, useEffect } from 'react';
import initialProducts from '../../../public/dataEnCarrito'; 
import initialSavedProducts from '../../../public/dataGuardados'; 

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState(initialProducts); 
    const [savedProducts, setSavedProducts] = useState(initialSavedProducts); 
    const [orders, setOrders] = useState([]); 
    const [subtotal, setSubtotal] = useState(0);

    const removeProduct = (productIndex) => {
        setProducts(products.filter(product => product.index !== productIndex));
    };

    const saveForLater = (product) => {
        setSavedProducts([...savedProducts, product]);
        removeProduct(product.index);
    };

    const removeSavedProduct = (productIndex) => {
        setSavedProducts(savedProducts.filter(product => product.index !== productIndex));
    };


    const checkout = () => {
        const newOrder = {
            products: products.map(product => ({ ...product })),
            date: new Date(),
            total: subtotal
        };
        setOrders([...orders, newOrder]);
        {/*setProducts([]);*/ }
        {/*setSubtotal(0);*/ }
    };

    useEffect(() => {
        const totalProductos = products.reduce((total, product) => total + parseFloat(product.price) * product.quantity, 0);
        setSubtotal(totalProductos.toFixed(2));
    }, [products]);

    return (
        <CartContext.Provider value={{
            products,
            setProducts,
            savedProducts,
            setSavedProducts,
            subtotal,
            setSubtotal,
            removeProduct,
            saveForLater,
            removeSavedProduct,
            checkout,
            orders
        }}>
            {children}
        </CartContext.Provider>
    );
};
