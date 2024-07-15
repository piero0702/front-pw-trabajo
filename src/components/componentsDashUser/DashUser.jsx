import React, { useContext } from 'react';
import './Dashuser.css';
import TopBar from '../componentsTopBar/TopBar';
import Footer from '../componentsFooter/Footer';
import { CartContext } from '../componentsCarroCompras/context'; 

const DashUser = () => {
  const { orders } = useContext(CartContext); 

  return (
    <>
      <TopBar />
      <div className="dash-user-container">
        <div className="navbar">
          <h2>Mi Cuenta</h2>
          <ul>
            <li>
              <a href="/ordenes-recientes">Órdenes Recientes</a>
            </li>
            <li>
              <a href="/datos-de-registro">Datos de Registro</a>
            </li>
            <li>
              <a href="/cambiar-password">Cambiar Contraseña</a>
            </li>
          </ul>
        </div>
        <div className="info-container">
          <div className="info-header">
            <h3>Órdenes Recientes</h3>
          </div>
          <div className="product-container">
            {orders.map((order, index) => (
              <div className="order" key={index}>
                <div className="order-details">
                  <h4>Orden x{order.products.length} Productos ({order.products.map(product => product.name).join(', ')})</h4>
                  <p>Fecha: {new Date(order.date).toLocaleDateString()} - Total: S/ {order.total}</p>
                  <p>Enviado a: Jirón Huascar 123, Jesús María, Lima, Perú</p>
                </div>
                <div className="order-number">
                  <p>Número de Pedido: {index + 1}</p>
                </div>
                <div className="order-detail">
                  <a href="/detalle-pedido">Ver Detalle</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashUser;
