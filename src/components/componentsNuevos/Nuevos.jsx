//src/components/componentsMasVendidos/Nuevos.jsx
import React, { useState, useEffect } from 'react';
import './Nuevos.css';
import '../../../public/ProductosNuevos.json'
import TopBar from '../componentsTopBar/TopBar';
import Footer from '../componentsFooter/Footer';
import { Link } from 'react-router-dom';

const Nuevos = () => {
    const [productosNuevos, setProductosNuevos] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);


    useEffect(() => {
        fetch('../../public/ProductosMasVendidos.json')
            .then(response => response.json())
            .then(data => setProductosNuevos(data))
            .catch(error => console.error('Error fetching productos:', error));
    }, []);
    const handleDetailsClick = (productId) => {
        setSelectedProduct(productId);
      };

    return (
        <>
        <TopBar/>
        <div className="mas-vendidos">
            <h2>Productos en Novedad</h2>
            <div className="productos-container">
                {productosNuevos.map((producto) => (
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
export default Nuevos;