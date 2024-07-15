import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopBar from '../componentsTopBar/TopBar';
import Footer from '../componentsFooter/Footer';
import './MasDetalle.css';
import ProductosAPI from '../../api/productos.js';

const MasDetalle = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await ProductosAPI.findOne(productId);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    // Logic to add the product to the cart
    console.log(`Product ${productId} added to cart`);
  };

  if (!product) {
    return (
      <>
        <TopBar />
        <div>Loading...</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopBar />
      <div className="mas-detalle">
        <h2>Detalles del Producto</h2>
        <span className="cuadrado">
          <div className="producto-detalle">
            <img className="imagen" src={product.imagen} alt={product.descripcion} />
            <section className="Caracteristicas">
              <h3>Nombre del producto: {product.descripcion}</h3>
              <h3>Precio del producto: ${product.precio}</h3>
              <button className="agregar-carrito" onClick={handleAddToCart}>Agregar al Carrito</button>
            </section>
          </div>
        </span>
      </div>
      <Footer />
    </>
  );
};

export default MasDetalle;
