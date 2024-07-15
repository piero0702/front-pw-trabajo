import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({product}) => {
  return (
    <div id='item'>
        <img src={product.imagen} alt="imagenProducto" />
        <h5>{product.descripcion}</h5>
        <Link className="details-link" to={`/moreDetails/${product.id}`}>Más detalles</Link>
    </div>
  )
}

export default Item
