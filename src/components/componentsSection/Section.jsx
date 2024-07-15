import React, { useState, useEffect } from 'react';
import './Section.css';
import { Link } from 'react-router-dom';
import TopBar from '../componentsTopBar/TopBar';
import Footer from '../componentsFooter/Footer';
import SearchBar from './SearchBar';
import ProductosAPI from '../../api/productos.js';

const Section = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleOnLoad = async () => {
    try {
      const dataProductos = await ProductosAPI.findAll();
      setProducts(dataProductos);
      setFilteredProducts(dataProductos);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    handleOnLoad();
  }, []);

  const handleSearch = (query) => {
    const filtered = products.filter(product => 
      String(product.id).includes(query) || 
      (product.descripcion && product.descripcion.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <TopBar />
      <section className="product-list">
        <h2>Productos</h2>
        <SearchBar onSearch={handleSearch} />
        <div className="products">
          {filteredProducts.map(product => (
            <div key={product.id} className="product">
              <img src={product.imagen} alt={product.descripcion} className="product-image" />
              <p>{product.descripcion}</p>
              <p className="price">{product.precio}</p>
              <Link className="details-link" to={`/moreDetails/${product.id}`}>Más detalles</Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Section;
