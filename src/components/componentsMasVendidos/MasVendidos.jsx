//src/components/componentsMasVendidos/MasVendidos.jsx
import React, { useState, useEffect } from 'react';
import './MasVendidos.css';
import '../../../public/ProductosMasVendidos.json'
import TopBar from '../componentsTopBar/TopBar'
import Footer from '../componentsFooter/Footer'
import { Link } from 'react-router-dom';

const MasVendidos = () => {
    const [productosMasVendidos, setProductosMasVendidos] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    useEffect(() => {
        fetch('../../../public/ProductosMasVendidos.json')
            .then(response => response.json())
            .then(data => setProductosMasVendidos(data))
            .catch(error => console.error('Error fetching productos:', error));
    }, []);
    const handleDetailsClick = (productId) => {
        setSelectedProduct(productId);
      };

    return (
        <>
        <TopBar/>
        <div className="mas-vendidos">
            
            <h2>Productos Más Vendidos</h2>
            <div className="productos-container">
                {productosMasVendidos.map((producto) => (
                    <div key={producto.id} className="producto">
                        <img src={producto.imagen} alt={producto.nombre} />
                        <h3>{producto.nombre}</h3>
                        <p>{producto.descripcion}</p>
                        <span>${producto.precio}</span><br />
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

export default MasVendidos;
