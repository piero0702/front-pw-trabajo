//src/components/componentsMasVendidos/Ofertas.jsx
import React, { useState, useEffect } from 'react';
import './Ofertas.css';
import '../../../public/ProductosOfertas.json'
import TopBar from '../componentsTopBar/TopBar';
import Footer from '../componentsFooter/Footer'
import { Link } from 'react-router-dom';
import MasDetalle from '../componentsMasDetalle/MasDetalle';

const Ofertas = () => {
    const [productosOfertas, setProductosOfertas] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch('../../public/ProductosOfertas.json')
            .then(response => response.json())
            .then(data => setProductosOfertas(data))
            .catch(error => console.error('Error fetching productos:', error));
    }, []);
    const handleDetailsClick = (productId) => {
        setSelectedProduct(productId);
      };

    return (
        <>
        <TopBar/>
        <div className="mas-vendidos">
            <h2>Productos con ofertas</h2>
            <div className="productos-container">
                {productosOfertas.map((producto) => (
                    <div key={producto.id} className="producto">
                        <img src={producto.imagen} alt={producto.nombre} />
                        <h3>{producto.nombre}</h3>
                        <p>{producto.description}</p>
                        <span>${producto.price}</span>
                        <br />
                        <div><Link className="details-link" to={`/moreDetails/${producto.id}`}>Más detalles</Link></div>
                    </div>
                ))}
            </div>
            {selectedProduct && <MasDetalle productId={selectedProduct} />}
        </div>
        <Footer/>
        </>
    );
};

export default Ofertas;