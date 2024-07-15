import React from 'react'
import products from '../../../public/ProductosMasVendidos.json'
import Item from '../../components/componentsPedidoCompleto/Item'
import './pedidoCompletoStyle.css'
import TopBar from '../componentsTopBar/TopBar'
import Footer from '../componentsFooter/Footer'
import { Link } from 'react-router-dom'

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const PedidoCompleto = () => {
  // Clona y baraja los primeros 19 productos
  const shuffledProducts = shuffleArray(products.slice(0, 19));
  // Toma los primeros 4 productos barajados
  const selectedProducts = shuffledProducts.slice(0, 4);

  return (
    <div className='pedidoCompledo'>
      <TopBar/>
      <h2>¡Muchas Gracias por su pedido!</h2>
      <h4>Puedes ver el detalle y estado de tu pedido ingresando a <Link to='/dashboard-usuario'><a>tu cuenta</a></Link></h4>
      <h3>Tambien te podria interesar...</h3>
      <div id='itemDisplay'>
      {
          selectedProducts.map(
              (product, index) => <Item key={index} product={product}/>
          )
      }
      </div>
      <Footer/>
    </div>
  )
}

export default PedidoCompleto
