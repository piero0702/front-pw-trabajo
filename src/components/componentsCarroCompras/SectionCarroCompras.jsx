import React, { useEffect, useState, useContext } from 'react';
import Layers from './Layers';
import TopBar from '../componentsTopBar/TopBar';
import Footer from '../componentsFooter/Footer';
import './carroComprasStyle.css';
import { Link } from 'react-router-dom';
import { CartContext } from './context';
function SectionCarroCompras() {
    
    const { products, savedProducts, subtotal, setSubtotal, checkout} = useContext(CartContext);

    useEffect(() => {
        const totalProductos = sumarPrecios(products);
        setSubtotal(totalProductos);
    }, [products]);

    function sumarPrecios(productos) {
        let total = 0;
        for (let producto of productos) {
            total += parseFloat(producto.price) * producto.quantity; // Asegurarse de multiplicar por la cantidad
        }
        return total.toFixed(2);
    }

    return (
        <>
            <section className='carritoCompras'>
                <TopBar />
                <h2 className='quantityProducts'>{products.length} items en tu carrito de compras</h2>
                <h3>Items disponibles para envío</h3>
                <div>
                    {products.map((product, index) => (
                        <Layers key={index} product={product} subtotal={subtotal} setSubtotal={setSubtotal} />
                    ))}
                </div>
                <div id='Subtotal'>
                    <h4 className='printTotal'>Total: S/{subtotal}</h4>
                    <Link to="/checkout"><button id='botonCheckout' onClick={checkout}>Checkout</button></Link>
                </div>
                <h3>Guardado para después</h3>
                {savedProducts.map((product, index) => (
                    <Layers key={index} product={product} isSavedProduct />
                ))}
                <Footer />
            </section>
        </>
    );
}

export default SectionCarroCompras;
