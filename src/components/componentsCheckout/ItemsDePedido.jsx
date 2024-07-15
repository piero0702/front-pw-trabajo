import React, { useContext } from 'react'
import { CartContext } from '../componentsCarroCompras/context';
const ItemsDePedido = () => {
  const cantidad = 1;
  const {products} = useContext(CartContext);
  return (
    <div id="itemsPedido">
      <h4>Items en pedido:</h4>
        {
            products.map(product => (
                <div class="elemento">
                    <h5>{cantidad}x {product.name}</h5>
                    <h5>Precio unitario: S/{product.price}</h5>
                </div>
            ))
        }
    </div>
  )
}
export default ItemsDePedido