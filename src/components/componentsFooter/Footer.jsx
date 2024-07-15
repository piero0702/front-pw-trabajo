/* /src/componentsFooter/Footer.jsx */
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-section">
        <h4>UlimaFarma</h4>
          <ul>
            <li>2010-2020</li>
            <li>Boticas 24 horas</li>
            <li>Privacity-terms</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Cuenta</h4>
          <ul>
            
            <li><Link className='registrar' to='/signup'>Registro de cuenta</Link></li>
            <li> <Link to='/carritoCompras'>Carrito de compras</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Productos</h4>
          <ul>
            <li><Link to='/mas-vendidos'>Mas Vendidos</Link></li>
            <li><Link to='/nuevos'>Nuevos</Link></li>
            <li><Link to='/ofertas'>Ofertas</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Ayuda</h4>
          <ul>
            <li>Acerca de Nosotros</li>
            <li>Politicas de Envio</li>
            <li>FACQ</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contáctanos</h4>
          <ul>
            <li className="social-icons">
              <img src= "https://i.pinimg.com/564x/7f/c9/7d/7fc97da84d0c577069424408cbe9d9fd.jpg"  alt="Facebook" />
            </li>
            <li className="social-icons">
              <img src="https://i.pinimg.com/564x/fc/6e/b0/fc6eb00f5ca8d5440a1aa626a031bbbb.jpg" alt="Instagram" />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
